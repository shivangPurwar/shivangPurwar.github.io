# Audio credits — site-v3

All audio on this site comes from royalty-free sources under the **Pixabay Content License** or **CC0 1.0 (public domain dedication)**. No commercial or film recordings are used. Every file here is an edited excerpt (trimmed, looped, loudness-normalised, re-encoded) of the source listed with it.

- **Pixabay Content License** (https://pixabay.com/service/license-summary/): "Use Content for free", without "having to attribute the author". The restriction that matters here: you "cannot sell or distribute Content … on a Standalone basis". These files are only used as background audio inside the site.
- **CC0 1.0** (https://creativecommons.org/publicdomain/zero/1.0/): public domain dedication. No attribution required.

**Checks at download time (2026-09-13):**
- **Content ID:** each Pixabay track page was checked for a "Content ID" badge in two ways: the server-rendered HTML fetched with curl, and a WebFetch render. Neither showed a badge on any page.
- **AI labels:** the same two checks found no "AI generated" label on any Pixabay page, and none on any Freesound page.
- **Limitation:** Pixabay's JSON data endpoint returned 403/404, so a badge that is only drawn by client-side JavaScript could not be ruled out completely.

## Ambient loops (`amb-<name>.webm` = Opus 40 kbps VBR, `amb-<name>.m4a` = AAC 48 kbps)

Each loop is 40.000 s at 48 kHz stereo. It is cut from the passage `[start, start + 43 s]` of the source, and the last 3 s are cross-faded into the first 3 s (equal-power qsin curves). Loudness is set with two-pass loudnorm in linear mode, to −18 LUFS, or −20 LUFS for phere. True peak is ≤ −1.5 dBTP.

| File | Title | Artist | Source URL | Licence | Attribution required? | AI-labelled? | Content ID seen | Downloaded | Passage used |
|---|---|---|---|---|---|---|---|---|---|
| amb-overture.webm / .m4a | Sitar and Tanpura – Indian style BGM | ShidenBeatsMusic | https://pixabay.com/music/india-sitar-and-tanpura-indian-style-bgm-22000/ | Pixabay Content License ("Use Content for free") | No (credit appreciated) | No label shown | None shown | 2026-09-13 | 0:04.0 – 0:47.0 |
| amb-haldi.webm / .m4a | South Indian Folk | Saseendran | https://pixabay.com/music/folk-south-indian-folk-345445/ | Pixabay Content License ("Use Content for free") | No (credit appreciated) | No label shown | None shown | 2026-09-13 | 0:07.0 – 0:50.0 |
| amb-sangeet.webm / .m4a | Indian Dhol Music | DKFILMS | https://pixabay.com/music/india-indian-dhol-music-362651/ | Pixabay Content License ("Use Content for free") | No (credit appreciated) | No label shown | None shown | 2026-09-13 | 1:00.0 – 1:43.0 (source is mono, output is dual-mono) |
| amb-phere.webm / .m4a | Indian Classical – Tanpura & Sarangi | bineleyas | https://pixabay.com/music/india-indian-classical-tanpura-amp-sarangi-152865/ | Pixabay Content License ("Use Content for free") | No (credit appreciated) | No label shown | None shown | 2026-09-13 | 0:06.39 – 0:49.39 |
| amb-reception.webm / .m4a | Sitar In The Moonlight | NourishedByMusic | https://pixabay.com/music/world-sitar-in-the-moonlight-115602/ | Pixabay Content License ("Use Content for free") | No (credit appreciated) | No label shown | None shown | 2026-09-13 | 0:14.0 – 0:57.0 |

**Not used:**
- **Alternates:** these were downloaded and checked as fallbacks but are not in the build, because every first-choice track was available:
  - "Indian music with sitar, tanpura and sarangi" (pixabay …-74577)
  - "Indian Classical Flute & Tabla" (…-140472)
  - "Sitar Dreams" (…-157949)
- **Tanpura drone:** Freesound CC0 "Tanpura in E" (iluppai, #148850) was downloaded as a possible drone bed for phere. The phere track already has its own tanpura, so the drone was not added.

## SFX sprite (`sfx.webm` = Opus 64 kbps, `sfx.m4a` = AAC 64 kbps, `sfx.json` = Howler sprite map)

Each clip is trimmed and faded, high-passed at 30 Hz, peak-normalised to −3 dBFS, and placed in the sprite with 0.5 s of silence after it. The Freesound sources are the public HQ previews.

| Sprite key | Title | Artist | Source URL | Licence | Attribution required? | AI-labelled? | Content ID seen | Downloaded | Passage used |
|---|---|---|---|---|---|---|---|---|---|
| seal | Wax seal | Cerise_Virtuelle | https://freesound.org/people/Cerise_Virtuelle/sounds/759526/ | CC0 1.0 ("No Rights Reserved") | No | No label shown | n/a (Freesound) | 2026-09-13 | 0.26 – 1.15 s |
| unfold | Paper Unfolding Quickly | coolernow123 | https://freesound.org/people/coolernow123/sounds/547980/ | CC0 1.0 ("No Rights Reserved") | No | No label shown | n/a | 2026-09-13 | 0.08 – 1.10 s |
| ghungroo | Indian_Gungroos_Ankle_Bells_Improv.wav | RutgerMuller | https://freesound.org/people/RutgerMuller/sounds/365406/ | CC0 1.0 ("No Rights Reserved") | No | No label shown | n/a | 2026-09-13 | 38.80 – 40.30 s (1.5 s shimmer) |
| bell | 2HinduTemplesBells2.wav | LoopUdu | https://freesound.org/people/LoopUdu/sounds/271627/ | CC0 1.0 ("No Rights Reserved") | No | No label shown | n/a | 2026-09-13 | 0.69 – 2.39 s |
| shankh | Shankh Sound | rsn267 | https://freesound.org/people/rsn267/sounds/746592/ | CC0 1.0 ("No Rights Reserved") | No | No label shown | n/a | 2026-09-13 | 1.24 – 4.24 s (0.8 s fade-out) |
| firework | Burst Fireworks - Nova Sound.wav | NovaSoundTechnology | https://freesound.org/people/NovaSoundTechnology/sounds/347119/ | CC0 1.0 ("No Rights Reserved") | No | No label shown | n/a | 2026-09-13 | 0.00 – 1.35 s |
| scratch | Scratching Paper.mp3 | Henaway | https://freesound.org/people/Henaway/sounds/127979/ | CC0 1.0 ("No Rights Reserved") | No | No label shown | n/a | 2026-09-13 | 0.00 – 1.00 s (whole source is 1.02 s) |
| chime | 1ring | iluppai | https://freesound.org/people/iluppai/sounds/148849/ | CC0 1.0 ("No Rights Reserved") | No | No label shown | n/a | 2026-09-13 | 0.13 – 1.63 s (single soft bell ring, 0.7 s fade-out) |

**Why this chime source:** the chime is the single-ring bell that was listed as the alternate for `bell` (iluppai #148849, CC0). The main `bell` uses LoopUdu's temple bells, so the alternate was free for the chime. Kenney "Interface Sounds" (CC0) was also downloaded and checked. Its chime-like clips (glass_*, confirmation_*) are all 0.1–0.7 s synthetic UI blips, so the real bell ring was the better fit.

## How to rebuild

```bash
# from the repo root; raw sources live in site-v2/.cache/audio-src/ (gitignored)
FETCH=1 bash site-v2/scripts/build-audio.sh   # re-downloads any missing sources, then builds
bash site-v2/scripts/build-audio.sh           # rebuild from cached sources
python site-v2/scripts/qc-audio.py            # loop-seam / duration / codec checks
```

`scripts/build-audio.sh` holds every source URL, passage start, crossfade, loudnorm, trim, fade and encoder setting. Change the `AMB=(…)` or `SFX=(…)` tables in it to pick different passages. The script rewrites `sfx.json` automatically.
