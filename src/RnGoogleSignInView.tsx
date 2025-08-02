import { requireNativeView } from 'expo';
import * as React from 'react';

import { RnGoogleSignInViewProps } from './RnGoogleSignIn.types';

const NativeView: React.ComponentType<RnGoogleSignInViewProps> =
  requireNativeView('RnGoogleSignIn');

export default function RnGoogleSignInView(props: RnGoogleSignInViewProps) {
  return <NativeView {...props} />;
}
