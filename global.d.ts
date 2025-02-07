// global.d.ts
export {};

declare global {
    interface Window {
        myCustomProperty: string; // Add any custom properties you need
        myCustomMethod: () => void; // Add any custom methods you need
    }
}
