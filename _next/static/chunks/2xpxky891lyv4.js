(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,31847,e=>{"use strict";var t=e.i(43476),a=e.i(71645);let o=`
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`,l=`
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform float uTime;
uniform vec2 uRes;
uniform float uIntensity;
uniform float uFlare;
varying vec2 vUv;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
const mat2 ROT = mat2(0.8, -0.6, 0.6, 0.8);
float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = ROT * p * 2.03;
    a *= 0.5;
  }
  return v;
}

// One tongue of flame as a signed field (> 0 inside).
float tongue(vec2 p, float H, float W, float sway, float n) {
  float yy = p.y / H;
  float g = sqrt(clamp(yy + 0.07, 0.0, 1.0)) * pow(clamp(1.0 - yy, 0.0, 1.0), 0.8);
  float width = W * g / 0.46;
  float d = abs(p.x - sway * yy) / max(width, 0.001);
  float f = 1.0 - d;
  f += (n - 0.5) * (0.55 + 1.5 * yy);
  f *= smoothstep(-0.02, 0.06, p.y);
  return f;
}

void main() {
  float aspect = uRes.x / max(uRes.y, 1.0);
  float t = uTime;
  float I = min(uIntensity + uFlare * 0.6, 1.25);
  vec2 p = vec2((vUv.x - 0.5) * aspect, vUv.y - 0.0376);

  // hot air bends the upper flame
  p.x += sin(p.y * 22.0 - t * 7.0) * 0.0045 * smoothstep(0.08, 0.5, p.y);

  float H = 0.52 * I;
  float W = 0.165 * (0.85 + 0.15 * I);

  // shared turbulence, rising
  vec2 q = vec2(p.x * 3.0, p.y * 2.2 - t * 1.9);
  float w = fbm(q + vec2(0.0, t * 0.35));
  float n = fbm(q * 1.8 + vec2(w * 1.5, -t * 1.2));
  float sway = (w - 0.5) * 0.24 + sin(t * 1.3) * 0.012;

  float f  = tongue(p, H, W, sway, n);
  float fl = tongue(p - vec2(-0.075, 0.0), H * (0.62 + 0.08 * sin(t * 2.1)), W * 0.55, sway * 1.2 - 0.03, n);
  float fr = tongue(p - vec2(0.08, 0.0), H * (0.58 + 0.08 * sin(t * 1.7 + 2.0)), W * 0.5, sway * 1.2 + 0.03, n);
  float F = max(f, max(fl, fr) - 0.06);

  float yy = clamp(p.y / H, 0.0, 2.0);
  float heat = clamp(F * 1.25 * (1.1 - 0.55 * yy), 0.0, 1.0);
  vec3 col = mix(vec3(0.96, 0.33, 0.08), vec3(1.0, 0.52, 0.12), smoothstep(0.1, 0.38, heat));
  col = mix(col, vec3(1.0, 0.78, 0.36), smoothstep(0.38, 0.68, heat));
  col = mix(col, vec3(1.0, 0.95, 0.82), smoothstep(0.78, 1.0, heat) * (1.0 - yy * 0.8));
  col *= 1.0 + uFlare * 0.35;
  float a = smoothstep(0.0, 0.16, F) * smoothstep(1.4, 0.9, yy);

  // wisps breaking off above the tips
  float n3 = fbm(vec2(p.x * 5.0, p.y * 3.4 - t * 2.9) + 7.3);
  float column = exp(-pow((p.x - sway * 1.3) / (W * 0.9), 2.0));
  float band = smoothstep(0.55, 0.95, yy) * smoothstep(1.75, 1.15, yy);
  float wa = smoothstep(0.6, 0.78, n3) * column * band * 0.85;
  vec3 wc = mix(vec3(0.95, 0.3, 0.08), vec3(1.0, 0.55, 0.16), wa);

  // heat haze: a wavering column of light over the fire
  float hz = fbm(vec2(p.x * 7.0 + sin(p.y * 10.0 - t * 3.2) * 0.35, p.y * 5.0 - t * 2.4));
  float yh = p.y / max(H, 0.01);
  float hcol = exp(-pow(p.x / (W * 1.7), 2.0)) * smoothstep(0.6, 1.1, yh) * (1.0 - smoothstep(1.5, 2.3, yh));
  float ha = smoothstep(0.5, 0.78, hz) * hcol * 0.07 * I;
  vec3 hc = vec3(1.0, 0.58, 0.28);

  // halo
  vec2 g = (p - vec2(0.0, H * 0.32)) / vec2(0.28, 0.36);
  float flick = 0.88 + 0.07 * sin(t * 9.1) + 0.05 * sin(t * 15.7 + 1.3);
  float ga = exp(-dot(g, g) * 2.4) * 0.4 * I * flick * (1.0 + uFlare);
  vec3 gc = vec3(1.0, 0.56, 0.22);

  // embers
  vec3 emC = vec3(0.0);
  float emA = 0.0;
  for (int i = 0; i < 16; i++) {
    float fi = float(i);
    float sp = 0.12 + hash(vec2(fi, 1.7)) * 0.2;
    float ph = hash(vec2(fi, 7.3));
    float lt = t * sp + ph;
    float life = fract(lt);
    float cyc = floor(lt);
    float sx = (hash(vec2(fi, cyc + 3.1)) - 0.5) * W * 1.6;
    float drift = (hash(vec2(fi, cyc + 5.9)) - 0.5) * 0.3;
    vec2 ep = vec2(sx + drift * life + sin(t * (1.3 + ph) + fi * 2.3) * 0.035 * life, H * 0.45 + life * (1.0 - H * 0.45));
    float r = (0.0035 + ph * 0.004) * (1.0 - life * 0.5);
    float d = length(p - ep);
    float tw = 0.65 + 0.35 * sin(t * (14.0 + fi) + fi * 4.0);
    float fade = smoothstep(0.0, 0.08, life) * (1.0 - smoothstep(0.55, 1.0, life));
    float e = (smoothstep(r, r * 0.25, d) + exp(-d * d / (r * r * 12.0)) * 0.35) * fade * tw;
    emC += mix(vec3(1.0, 0.45, 0.12), vec3(1.0, 0.86, 0.52), tw * (1.0 - life)) * e;
    emA += e;
  }

  // composite back to front, premultiplied
  vec3 C = gc * ga;
  float A = ga;
  C = hc * ha + C * (1.0 - ha);   A = ha + A * (1.0 - ha);
  C = wc * wa + C * (1.0 - wa);   A = wa + A * (1.0 - wa);
  C = col * a + C * (1.0 - a);    A = a + A * (1.0 - a);
  C += emC;
  A = clamp(A + emA, 0.0, 1.0);
  C = min(C, vec3(A));

  float mask = smoothstep(0.0, 0.1, vUv.x) * smoothstep(1.0, 0.9, vUv.x) * smoothstep(1.0, 0.86, vUv.y);
  gl_FragColor = vec4(C * mask, A * mask);
}
`;e.s(["default",0,function({heat:i,onFail:n,className:s=""}){let f=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let t=!1,a=()=>{};return(async()=>{let s,c;try{s=await e.A(32313)}catch{n();return}let r=f.current;if(t||!r)return;let{Renderer:p,Program:v,Mesh:m,Triangle:h}=s;try{c=new p({dpr:Math.min(window.devicePixelRatio||1,1.5),alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1})}catch{n();return}let u=c.gl;if(!u)return n();u.clearColor(0,0,0,0);let y=u.canvas;y.style.width="100%",y.style.height="100%",y.style.display="block",y.setAttribute("aria-hidden","true");let d=new v(u,{vertex:o,fragment:l,uniforms:{uTime:{value:0},uRes:{value:[1,1]},uIntensity:{value:i.current?.level??.8},uFlare:{value:0}},transparent:!1,depthTest:!1,depthWrite:!1});if(!u.getProgramParameter(d.program,u.LINK_STATUS)){u.getExtension("WEBGL_lose_context")?.loseContext(),n();return}let x=new m(u,{geometry:new h(u),program:d});r.appendChild(y);let g=d.uniforms,w=()=>{let e=r.getBoundingClientRect();c.setSize(Math.max(1,e.width),Math.max(1,e.height)),g.uRes.value=[Math.max(1,e.width),Math.max(1,e.height)]};w();let b=new ResizeObserver(w);b.observe(r);let A=0,C=!1,F=!1,I=performance.now(),R=i.current?.level??.8,T=0,H=e=>{if(A=0,!C||document.hidden||F)return;let t=Math.min(.1,(e-I)/1e3);I=e;let a=i.current,o=1-Math.exp(-(3.5*t));R+=((a?.level??.8)-R)*o,T+=((a?.flare??0)-T)*(1-Math.exp(-(10*t))),g.uTime.value=e/1e3%1e3,g.uIntensity.value=R,g.uFlare.value=T,c.render({scene:x}),A=requestAnimationFrame(H)},W=()=>{A||!C||document.hidden||F||(I=performance.now(),A=requestAnimationFrame(H))},E=new IntersectionObserver(([e])=>{C=!!e?.isIntersecting,W()},{rootMargin:"80px"});E.observe(r),document.addEventListener("visibilitychange",W);let U=e=>{e.preventDefault(),F=!0,cancelAnimationFrame(A),A=0,n()};y.addEventListener("webglcontextlost",U),a=()=>{cancelAnimationFrame(A),b.disconnect(),E.disconnect(),document.removeEventListener("visibilitychange",W),y.removeEventListener("webglcontextlost",U),F||u.getExtension("WEBGL_lose_context")?.loseContext(),y.remove()}})(),()=>{t=!0,a()}},[i,n]),(0,t.jsx)("div",{ref:f,className:s})}])},47247,e=>{e.n(e.i(31847))},32313,e=>{e.v(t=>Promise.all(["static/chunks/1m-fvxdobm23b.js"].map(t=>e.l(t))).then(()=>t(40298)))}]);