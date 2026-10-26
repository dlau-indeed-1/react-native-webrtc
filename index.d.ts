// Type definitions for react-native-webrtc 155 with additional Daily types.

import type { ViewStyle } from 'react-native';

export * from './lib/typescript/index';

// Daily types
export interface RTCViewProps {
  streamURL: string;
  mirror?: boolean | undefined;
  zOrder?: number | undefined;
  objectFit?: 'contain' | 'cover' | undefined;
  style?: ViewStyle | undefined;
}

export interface MandatoryMedia {
  minWidth: number;
  minHeight: number;
  minFrameRate: number;
}

export interface MediaSources {
  sourceId: string;
}

export interface MediaTrackConstraints {
  mandatory?: MandatoryMedia;
  width?: number;
  height?: number;
  frameRate?: number;
  facingMode?: 'user' | 'environment';
  deviceId?: string;
  optional?: MediaSources[];
}

export type MediaDeviceKind = 'audio' | 'videoinput';

export class MediaDeviceInfo {
  readonly deviceId: string;
  readonly groupId: string;
  readonly kind: MediaDeviceKind;
  readonly label: string;
  toJSON(): any;
}
