import { registerWebModule, NativeModule } from 'expo';

import { ChangeEventPayload } from './RnGoogleSignIn.types';

type RnGoogleSignInModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
}

class RnGoogleSignInModule extends NativeModule<RnGoogleSignInModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
};

export default registerWebModule(RnGoogleSignInModule, 'RnGoogleSignInModule');
