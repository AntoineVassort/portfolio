import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
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
        fontSize: 108,
        fontWeight: 700,
        fontFamily: 'monospace',
        letterSpacing: -6,
        borderRadius: 0,
        border: '8px solid #1d9e75',
      }}
    >
      AV
    </div>,
    size,
  )
}
