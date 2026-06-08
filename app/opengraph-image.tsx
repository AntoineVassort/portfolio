import { ImageResponse } from 'next/og'
import { personal } from '@/lib/data'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: '#0a0a0a',
        position: 'relative',
        fontFamily: 'monospace',
      }}
    >
      {/* Barre accent gauche */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '4px',
          backgroundColor: '#1d9e75',
        }}
      />

      {/* Contenu */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 96px',
          gap: '20px',
        }}
      >
        {/* Label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            color: '#888880',
            fontSize: '18px',
            letterSpacing: '4px',
            textTransform: 'uppercase',
          }}
        >
          <span style={{ color: '#1d9e75', marginRight: '10px' }}>›</span>
          {personal.subtitle}
        </div>

        {/* Nom */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            color: '#f5f5f0',
            fontSize: '100px',
            fontStyle: 'italic',
            lineHeight: 1,
            letterSpacing: '-2px',
          }}
        >
          <span>{personal.name}</span>
          <span>{personal.lastName}</span>
        </div>

        {/* Titre */}
        <div
          style={{
            color: '#1d9e75',
            fontSize: '28px',
            letterSpacing: '1px',
          }}
        >
          {personal.title}
        </div>

        {/* Tagline */}
        <div
          style={{
            color: '#888880',
            fontSize: '20px',
            maxWidth: '700px',
            lineHeight: 1.6,
          }}
        >
          {personal.tagline}
        </div>
      </div>
    </div>,
    size,
  )
}
