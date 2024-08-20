// 'use client';
import { create } from 'zustand';
export const fileStore = create((set) => {
  return {
    file: null,
    setFile: (data) => set((state) => ({ file: data })),
  };
});
export const titleStore = create((set) => {
  return {
    title: '',
    courseType: '',
    subject: '',
    setData: (key, data) => set((state) => ({ ...state, [key]: data })),
  };
});
export const scaleStore = create((set) => {
  return {
    scale: 1.0,
    setScale: (data) =>
      set((state) => {
        return { scale: state.scale + data };
      }),
  };
});
export const fullScreenMode = create((set) => {
  return {
    fullScreen: false,
    setFullScreen: () => set((state) => ({ fullScreen: !state.fullScreen })),
  };
});
