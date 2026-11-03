import { ImageResponse } from 'next/og'

export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#0a0a0a',
        color: '#1d9e75',
        fontSize: 38,
        fontWeight: 700,
        fontFamily: 'monospace',
        letterSpacing: -2,
        borderRadius: 12,
        border: '3px solid #1d9e75',
      }}
    >
      AV
    </div>,
    size,
  )
}
