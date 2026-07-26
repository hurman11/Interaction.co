'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
// @ts-ignore
import webGLFluidEnhanced from 'webgl-fluid';

export function InkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const isDarkMode = resolvedTheme === 'dark';

    // We configure the WebGL fluid simulation for a thick, ink-like aesthetic.
    // The density dissipates relatively quickly to create a trailing brush effect,
    // and viscosity is tuned up to make the ripples feel like water/ink.
    const getConfig = (dark: boolean) => ({
      IMMEDIATE: true,
      TRIGGER: 'hover',
      SIM_RESOLUTION: 128,
      DYE_RESOLUTION: 512,
      CAPTURE_RESOLUTION: 512,
      DENSITY_DISSIPATION: 3.5, // Faster dissipation for fading ink
      VELOCITY_DISSIPATION: 2.0, // High viscosity
      PRESSURE: 0.1,
      PRESSURE_ITERATIONS: 20,
      CURL: 1,
      SPLAT_RADIUS: 0.25, // Thinner stroke
      SPLAT_FORCE: 7000,
      SHADING: true, // Crucial for refraction / specular highlights
      COLORFUL: false,
      COLOR_UPDATE_SPEED: 10,
      PAUSED: false,
      BACK_COLOR: dark ? { r: 4, g: 4, b: 5 } : { r: 255, g: 255, b: 255 },
      TRANSPARENT: false,
      BLOOM: dark ? true : false,
      BLOOM_ITERATIONS: 8,
      BLOOM_RESOLUTION: 256,
      BLOOM_INTENSITY: dark ? 0.35 : 0.0,
      BLOOM_THRESHOLD: 0.8,
      BLOOM_SOFT_KNEE: 0.7,
      SUNRAYS: true,
      SUNRAYS_RESOLUTION: 196,
      SUNRAYS_WEIGHT: 1.0,
      // Ferrari red — g:0 to prevent orange cast in additive WebGL blending
      // r pulled to 0.45 for a subtle deep crimson on dark background
      SPLAT_COLOR: dark
        ? { r: 0.05, g: 0.0, b: 0.0 }
        : { r: 91 / 255, g: 60 / 255, b: 150 / 255 },
    });

    // Initialize fluid simulation with current theme config
    webGLFluidEnhanced(canvas, getConfig(isDarkMode));

    // Forward mouse & touch movement from window to canvas safely.
    // In 'hover' mode, webgl-fluid only tracks a single mouse hover pointer (pointer 0).
    // Dispatching mousedown/touchstart/mouseup or raw touch events causes webgl-fluid to access undefined pointer.down.
    // Translating all position updates into clean mousemove events ensures smooth fluid trails without mobile errors.
    let lastMouseX = window.innerWidth / 2;
    let lastMouseY = window.innerHeight / 2;

    const forwardMovement = (e: MouseEvent | TouchEvent) => {
      try {
        if (!canvas) return;
        if (e.target === canvas) return;

        let clientX = lastMouseX;
        let clientY = lastMouseY;

        if (e instanceof MouseEvent) {
          clientX = e.clientX;
          clientY = e.clientY;
        } else if (e.touches && e.touches.length > 0) {
          clientX = e.touches[0].clientX;
          clientY = e.touches[0].clientY;
        } else if (e.changedTouches && e.changedTouches.length > 0) {
          clientX = e.changedTouches[0].clientX;
          clientY = e.changedTouches[0].clientY;
        }

        lastMouseX = clientX;
        lastMouseY = clientY;

        const fakeEvent = new MouseEvent('mousemove', {
          bubbles: true,
          cancelable: true,
          clientX,
          clientY,
        });
        canvas.dispatchEvent(fakeEvent);
      } catch {
        // Prevent any internal webgl-fluid touch exceptions from surfacing
      }
    };

    const onMouseMove = (e: MouseEvent) => forwardMovement(e);
    const onTouchMove = (e: TouchEvent) => forwardMovement(e);
    const onTouchStart = (e: TouchEvent) => forwardMovement(e);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });

    // Add scroll animation to simulate fluid ripples when scrolling
    const scrollContainer = document.getElementById('main-scroll-container');
    if (!scrollContainer) return;

    let lastScrollY = scrollContainer.scrollTop;
    const onScroll = () => {
      try {
        if (!canvas) return;
        const currentScrollY = scrollContainer.scrollTop;
        const deltaY = currentScrollY - lastScrollY;
        lastScrollY = currentScrollY;

        if (Math.abs(deltaY) > 2) {
          // Move the fluid opposite to scroll direction
          lastMouseY -= deltaY * 1.5;

          // Add slight horizontal wiggle to make it look like a natural current
          lastMouseX += (Math.random() - 0.5) * 40;

          // Keep coordinates within bounds
          if (lastMouseY < 0) lastMouseY = window.innerHeight;
          if (lastMouseY > window.innerHeight) lastMouseY = 0;
          if (lastMouseX < 0) lastMouseX = window.innerWidth;
          if (lastMouseX > window.innerWidth) lastMouseX = 0;

          const fakeEvent = new MouseEvent('mousemove', {
            bubbles: true,
            cancelable: true,
            clientX: lastMouseX,
            clientY: lastMouseY,
          });
          canvas.dispatchEvent(fakeEvent);
        }
      } catch {
        // Prevent scroll fluid errors
      }
    };
    scrollContainer.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchstart', onTouchStart);
      scrollContainer.removeEventListener('scroll', onScroll);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-50] block pointer-events-none"
      style={{
        width: '100vw',
        height: '100vh',
        transform: 'translate3d(0, 0, 0)',
        WebkitTransform: 'translate3d(0, 0, 0)'
      }}
    />
  );
}
