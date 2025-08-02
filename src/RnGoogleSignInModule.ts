import { NativeModule, requireNativeModule } from 'expo';

import { RnGoogleSignInModuleEvents } from './RnGoogleSignIn.types';

declare class RnGoogleSignInModule extends NativeModule<RnGoogleSignInModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<RnGoogleSignInModule>('RnGoogleSignIn');
