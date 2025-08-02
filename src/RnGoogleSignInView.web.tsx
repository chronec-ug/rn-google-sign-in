import * as React from 'react';

import { RnGoogleSignInViewProps } from './RnGoogleSignIn.types';

export default function RnGoogleSignInView(props: RnGoogleSignInViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
