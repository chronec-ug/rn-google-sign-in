// Reexport the native module. On web, it will be resolved to RnGoogleSignInModule.web.ts
// and on native platforms to RnGoogleSignInModule.ts
export { default } from './src/RnGoogleSignInModule';
export { default as RnGoogleSignInView } from './src/RnGoogleSignInView';
export * from  './src/RnGoogleSignIn.types';
