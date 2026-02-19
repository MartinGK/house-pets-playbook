# House & Pets Playbook

Landing estática, divertida y clara para cuidado de casa + mascotas (Maca, Sócrates y Diego).

## Stack
- Vite
- React
- TypeScript
- react-icons

## Requisitos
- Node.js 18+
- npm

## Ejecutar
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Estructura
- `src/components`: secciones y componentes UI
- `src/data/siteConfig.ts`: textos y contenido centralizado
- `src/assets`: imágenes y audio
- `src/styles/global.css`: estilos globales, paleta y animaciones

## Assets esperados
Colocar estos archivos en `src/assets`:
- `maca.jpg`
- `socrates.jpg`
- `diego.jpg`
- `llamado-gatos.mp3`

Si faltan assets:
- Imagen: se muestra placeholder automáticamente.
- Audio: botón de reproducción deshabilitado automáticamente.
