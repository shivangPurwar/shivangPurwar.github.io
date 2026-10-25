# public/brand — asset manifest (asset agent, round 3: regenerated from the ORIGINAL source art)

Everything below is generated from the couple's original Remotion project
(`D:\repo\wedding\src-video\repo\remotion`, read-only; nothing from it is executed) at full quality. No assets
are cut from the compressed video any more. **Canvas** = the video's 1080×1920 (9:16) composition. Every number is
given in canvas px and in % of the canvas, so it holds at any render size.
Scripts: `site-v3/scripts/assets/20_from_source.py` (frame, balcony, couples, backdrops, ganesh, monogram, tile),
`21_gate_from_source.py` (gate), `22_parrots_from_lottie.py` (parrots), `23_lantern_from_source.py`,
`12_og.py` (OG card), `99_compress.py` (palette quantization, lossless masters kept in %TEMP%/v3assets/lossless).
**WebP copies** (`.webp` next to the PNG, same name) exist for frame, frame-full, balcony, couples, backdrops,
monogram, surround and the door leaves. They're about 40% smaller, so use them with `<picture>` or `image-set()` if you like.
The PNG/JPG names are unchanged. `logo/reveal.*` belong to the master and were not touched.

## Layer stack for the jharokha scenes (back → front), as in the video's FunctionScene

```
1. CSS sky gradient (skies below)           + your stars / bokeh / fireworks
2. arch/backdrop-<chapter>.png              full canvas, sky transparent (scenery opaque)
3. arch/frame.png                           full canvas: terrace balustrade UNDER the painted arch
4. couple/<chapter>.png                     at COUPLE_BOX (in front of the balustrade)
5. arch/balcony.png                         full canvas: the two bougainvillea sprays, IN FRONT of the couple
6. text / petals
```
Changed from round 2: the florals (balcony.png) now go **in front of** the couple, exactly as in the video
(Florals are drawn after CoupleLayer). frame.png now contains the balustrade. Its baluster gaps and jali holes are
transparent, so the backdrop shows through them.

## arch/

| file | px | what |
|---|---|---|
| `frame.png` | 1080×1920 | `terrace.png` (1080×520) placed at y=1400, with `arch.png` composited over it. Alpha preserved. 638 KB (`.webp` 167 KB). |
| `balcony.png` | 1080×1920 | `florals_left.png` at (0, 760) and `florals_right.png` at (720, 760), each 360×900. Visible flower pixels: left x 0–337, right x 743–1080, y 1028–1660. 171 KB. |
| `frame-full.png` | 1080×1920 | frame + florals in one image (convenience, no couple in between). |
| `backdrop-{dawn,haldi,sangeet,reception,phere,elders}.png` | 1080×1920 | Interiors neutral / haldi / sangeet / reception / phere / closing, cropped to the canvas (source 1188×2112 centred: crop x 54–1134, y 96–2016). Sky keyed to transparent (see Skies). 343–499 KB each. |
| `interior-<same names>.jpg` | 1080×1920 | The plain opaque crops (q88), sky included, for reference or fallbacks. |
| `ganesh.png` | 285×400 | `ganesha.png` gold line art trimmed to its alpha box (native resolution). |

### Opening geometry (from arch.png's alpha; mirror-symmetric within 3 px)
| what | canvas px | % | old `geometry.ts` |
|---|---|---|---|
| left inner edge (below the spring line) | x 101 | 9.35 | 9.3 |
| right inner edge | x 981 | 90.83 | 90.7 |
| apex (top of the opening) | y 206 | 10.73 | 10.7 |
| spring line (cusps end, jambs run straight) | y 788 | 41.04 | 39.8 |
| rail top (top edge of terrace.png) | y 1400 | 72.92 | 72.8 |
| ledge (arch opaque again below the opening) | y 1699 | 88.49 | 88.5 |
| terrace baluster gaps | y 1400–1919 | 72.9–100 | – |
| lantern (baked into frame.png) | x 0–160, y 0–318; glass centre ≈ (70, 100) | 0–14.8 / 0–16.6; glass ≈ (6.5, 5.2) | (6, 7.5) |

Opening rows (left–right x): y250 473–608, y300 363–718, y400 203–879, y500 147–934, y600 130–951, y800 102–980.
`CUSPS_LEFT` re-traced from arch.png every 15 px (x%, y%), mirror for the right side:
`[49.8,10.7],[47.8,11.5],[45.0,12.3],[43.8,13.1],[35.9,13.9],[34.4,14.6],[33.7,15.4],[27.3,16.2],[25.7,17.0],[25.1,17.8],[24.8,18.5],[22.6,19.3],[19.7,20.1],[18.7,20.9],[18.2,21.7],[18.1,22.4],[18.1,23.2],[16.4,24.0],[14.7,24.8],[13.9,25.6],[13.5,26.4],[13.5,27.1],[13.6,27.9],[14.3,28.7],[13.1,29.5],[12.4,30.3],[12.0,31.0],[12.1,31.8],[12.5,32.6],[13.1,33.4],[13.6,34.2],[14.0,34.9],[14.1,35.7],[13.8,36.5],[12.3,37.3],[11.2,38.1],[10.9,38.9],[9.6,39.6],[9.4,40.4],[9.4,41.0]`

## couple/  (COUPLE_BOX: drawn on top of frame.png, under balcony.png)

Video placement: image height 560 px (29.167%), feet (image bottom) at y 1650 (85.938%), centred horizontally.
The source PNGs have **no transparent padding** (alpha touches all four edges), so the trimmed box = the full image.
Delivered at 2× the video display size (1120 px tall), downscaled with LANCZOS from the 1536–1590 px sources.

| file | px | left % | top % | width % | height % | feet % |
|---|---|---|---|---|---|---|
| `haldi.png` | 721×1120 | 33.307 | 56.771 | 33.386 | 29.167 | 85.938 |
| `sangeet.png` | 797×1120 | 31.541 | 56.771 | 36.918 | 29.167 | 85.938 |
| `reception.png` | 707×1120 | 33.632 | 56.771 | 32.736 | 29.167 | 85.938 |
| `phere.png` | 940×1120 | 28.232 | 56.771 | 43.536 | 29.167 | 85.938 |

(The video also adds a soft elliptical contact shadow under the feet: `radial-gradient(ellipse, rgba(0,0,0,.35), transparent 70%)`,
box 120% of the image width × 40 px, bottom −18 px.)

## Skies (CSS) — sampled from the original interiors' sky pixels at x=all, % of canvas height

Use `linear-gradient(180deg, …)` with these stops. The last stop is at the horizon line, below which the backdrop is opaque.

| chapter (backdrop) | stops |
|---|---|
| dawn (neutral) | #F9EDDC 0%, #FAEDDD 12.7%, #FAE9D3 25.3%, #FAE0C1 38%, #FBCFAB 50.6%, #F3B09D 63.3% |
| haldi | #FEDA74 0%, #FEDB73 12.3%, #FFD46B 24.6%, #FEC656 36.9%, #FDB538 49.2% (garlands start ≈ 49.5%; #E7A76C at 61.5% is behind the scenery) |
| sangeet | #0A142E 0%, #0A1832 13.5%, #0E1D38 27.1%, #11223F 40.6%, #152647 54.2%, #283652 67.7% (the source has sparse stars) |
| reception | #2A112A 0%, #3F1C34 15.6%, #6A3244 31.2%, #7A3549 46.9%, #914B59 62.5%, #B07471 78.1% (the source has pink bokeh at y 20–50%) |
| phere | #450E10 0%, #844221 16.5%, #A1532D 33%, #8D2C24 49.5%, #8A141E 66%, #89231E 82.6% **plus the glow**: `radial-gradient(circle at 51.2% 40.8%, #AA572F 0%, rgba(170,87,47,0) 31%)` over a #73191B base, i.e. a warm disc of half-radius ≈ 31% canvas width centred at (553, 783) |
| elders (closing) | #312044 0%, #4D335C 15.9%, #7D526B 31.9%, #C3775E 47.8%, #F38D48 63.7%, #E8CA9F 79.7% |

How the sky key works: the sky is flood-filled from the top through smooth colour steps (the painted sky has no
outlines), with stars and bokeh treated as sky. Sky pockets enclosed by scenery stay opaque. Below a per-chapter
horizon line (dawn 1215, haldi 1180, sangeet 1300, reception 1500, phere 1585, elders 1530 px) everything is opaque,
with a 48 px soft ramp, so distant hills and haze stay solid. The boundary band is soft (alpha from distance to the
local sky colour), and edge colours are un-mixed from the sky, so there's no halo. All six keyed cleanly, so none
needed an opaque fallback. The phere glow lives in the sky, so it's removed: recreate it with the radial gradient above.

## gate/  (exact video composition, 1080×1920; rendered in headless Chrome from GateIntro.tsx's DOM + GOLD_RELIEF_FILTER)

| file | px | what |
|---|---|---|
| `scene.jpg` | 1080×1920 | Doors closed, gold-relief logo on the seam (warm #FFD27A 26 px glow as in the video), surround on top. No diyas, petals, light leak or camera push. |
| `scene-open.jpg` | 1080×1920 | Same without the doors: the neutral interior shows through the doorway (placed at D.x−200, D.y−200, D.w+400, D.h+400, cover). |
| `door-left.png` / `door-right.png` | 1080×1920 (full canvas) | Each leaf with its half of the relief logo. Already masked by the surround's cusped doorway top, so `scene-open.jpg + both doors == scene.jpg` (mean diff 0.55/255). |
| `surround.png` | 1080×1920 | (new) The gate surround with its transparent doorway, for a true leaves-under-surround stack: interior/beyond → leaves → surround.png. 770 KB (`.webp` 274 KB). |
| `beyond.jpg` | 1080×1920 | Neutral interior cropped to the canvas (same image as interior-dawn.jpg). |

**Doorway (GATE_DOORWAY {x:353, y:725, w:378, h:658})**: left 32.685%, top 37.760%, width 35.000%, height 34.271%.
Leaves: left x 353–542 (32.685–50.185%), right x 542–731 (50.185–67.685%), each 17.5% wide, y 725–1383.
**Seam x = 542 (50.185%).** Hinges: the left leaf's left edge, the right leaf's right edge. Logo seal: centre (542, 961.9) = (50.185%, 50.099%),
width 270 (25.0%), height 274.3 (14.29%).
Old `gateLayout.ts` (measured from the video at its 1.06× push): DOOR_L x 31.67 y 36.95 w 18.47 h 36.09, SEAM 50.14, SEAL cy 50.
To convert any old % measurement (e.g. LIGHTS): `new = c + (old − c) / 1.06` with c = (50.185%, 54.9%) (the doorway centre).
Doorway cusp clip (% of the doorway rect), replacing DOORWAY_CLIP:
`polygon(0.5% 24.6%, 5.6% 14.1%, 10.3% 8.8%, 15.4% 5.3%, 20.4% 4.3%, 25.2% 2.3%, 30.2% 1.1%, 35.3% 0%, 40.1% 0%, 45.1% 0%, 49.9% 0%, 54.9% 0%, 59.9% 0%, 64.7% 0%, 69.8% 1.5%, 74.8% 2.4%, 79.6% 5.2%, 84.6% 5.5%, 89.7% 9%, 94.4% 14.6%, 99.5% 41.8%, 100% 100%, 0% 100%)`
(not needed if you use the masked door PNGs or surround.png on top).
**Elephants are painted into surround.png**, so `elephant-left.png` / `elephant-right.png` were **dropped** (no code referenced them).
Video diyas sat at (D.x+20, 1448) and (D.x+D.w−20, 1448), size 70, if you add your own.

## logo/
| file | px | what |
|---|---|---|
| `monogram.png` | 1124×1142 | Original full-colour "S शि" logo, alpha kept, trimmed with 6 px padding (aspect 1144/1126 like the source). |
| `monogram-192.png` | 192×192 | Centred on cream #FAF5E8. |

## fx/
| file | px | what |
|---|---|---|
| `parrot-1.png` | 250×456 | Wings UP (Lottie frame 0). Faces LEFT. |
| `parrot-2.png` | 246×295 | Wings MID (frame 4). |
| `parrot-3.png` | 321×238 | Wings DOWN (frame 10). Note the meanings changed from round 2. The three are trimmed separately, so their sizes differ. For a flap animation use parrot-fly-* (shared canvas) instead. |
| `parrot-fly-00..11.png` | 333×456 each (shared canvas) | Smooth 12-step flap loop from `lottie/parrot_fly.json` (21 frames @30 fps = 700 ms loop) → **58.3 ms per sprite**. Same canvas, so just swap `src` or step a sprite sheet. |
| `lantern.png` | 163×321 | The arch's brass lantern (from arch.png). Clipped flat at its top/left by the canvas, as it hangs in the frame at x 0–160, y 0–318. Glowing panes opaque. |
| `petal-*.png` | 64×64 | Procedural (unchanged; the source draws petals in code). |

## pattern/pichwai-tile.jpg
720×720, seamless (toroidal), built from arch.png's crisp wall flowers/vines on its cream #FEF2DF. Use
`background: #FEF2DF url(/brand/pattern/pichwai-tile.jpg) repeat; background-size: 360px` (2× density for retina).

## og/cover.jpg (`public/og/cover.jpg`)
1200×630, 120 KB. Regenerated with the original logo + new tile (12_og.py). The names and dates are baked into the image.

## Verification done
Rebuilt Haldi and Reception from these files (CSS-sky stops + backdrop + frame + couple at COUPLE_BOX + balcony) and compared them
with the source composition rendered directly from the Remotion layers: mean abs diff 2.1/255. The only differences are the sky detail
the site adds itself (bokeh, stars, glow) and haldi's slightly crisper garland tops. Gate: recomposite = scene.jpg (0.55/255).
