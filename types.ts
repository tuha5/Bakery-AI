
export interface TransformationResult {
  imageUrl: string;
  originalUrl: string;
}

export enum AppStatus {
  IDLE = 'IDLE',
  UPLOADING = 'UPLOADING',
  TRANSFORMING = 'TRANSFORMING',
  COMPLETED = 'COMPLETED',
  ERROR = 'ERROR'
}
