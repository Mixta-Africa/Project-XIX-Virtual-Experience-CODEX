# Project XIX Static Experience

This folder contains a GitHub Pages-ready prototype for Project XIX.

## What this phase delivers

- Static HTML, CSS, and JavaScript with no build step.
- Cinematic first screen using a lightweight canvas estate scene.
- The original 2D masterplan image integrated as the first clickable discovery layer.
- Guided masterplan hotspots for Polo Field, Proposed Lake, Clubhouse, Villas, Lofts, Training Field, Stables/Paddocks, Services, Commercial Block, Game Park, and Proposed Lagos Road.
- Click-to-enter walkable 3D estate simulation built from the 2D masterplan.
- Field-level movement with mouse-look, keyboard arrows/WASD, and on-screen movement buttons.
- Procedural 3D massing for the polo field, safety zones, lake, roads, clubhouse, villa rows, detailed 3 bedroom villa, training field, stables, commercial edge, game park, trees, and signs.
- Dedicated 3 bedroom villa path covering exterior approach, undercroft parking, living/study level, and bedroom level.
- Buyer and investor sections with clearer calls to action.
- A visible source-alignment warning for the unresolved masterplan orientation conflict.

## Source conflict to resolve

The referenced rebuild documents disagree on spatial orientation:

- Document A: main field east-west, lake north, clubhouse south.
- Handoff: main field north-south, lake west, clubhouse east.

The prototype does not silently choose between these. Confirm the correct orientation before replacing the diagram with production masterplan artwork or geospatial coordinates.

The integrated `plan-2d.png` source supports the first description visually: east-west main field, proposed lake north, clubhouse south, training field west, and proposed Lagos Road along the south frontage. Keep the warning until the upcoming 3D massing confirms the same orientation.

## GitHub Pages deployment

1. Create a GitHub repository.
2. Copy the contents of this folder into the repository root.
3. Commit and push to `main`.
4. In GitHub, open Settings > Pages.
5. Set source to `Deploy from a branch`, branch `main`, folder `/root`.

Because this is plain static content, GitHub Pages can serve it directly without npm, bundling, or server configuration.

## Recommended next development phase

- Replace placeholder CTA links with the project team's real sales, WhatsApp, brochure, and booking links.
- Add verified masterplan artwork after the orientation conflict is resolved.
- Replace procedural massing with the upcoming 3D massing and production building models where available.
- Add imported GLB/GLTF assets for the clubhouse, villas, stables, landscape, and interiors.
- Add collision boundaries and room-by-room camera constraints after the final floor plans are confirmed.
- Split data from presentation into a `content.json` file if the estate narrative will be updated frequently by non-developers.
- Add `404.html`, Open Graph image, favicon, and privacy/contact policy before public launch.
