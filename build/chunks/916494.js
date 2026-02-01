/** Chunk was on 71447 **/
/** chunk id: 916494, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $G: () => h,
  Mw: () => a,
  UM: () => d,
  Um: () => o,
  cP: () => l,
  eu: () => c,
  kz: () => u,
  uc: () => s
});
let i = 9 / 16,
  r = 16 / 9,
  l = (e, t) => e * t,
  a = (e, t) => e * t,
  s = e => l(e, i),
  o = e => a(e, r);

function u(e, t) {
  return t * (Math.max(1, e) - 1)
}

function c(e) {
  let {
    width: t,
    height: n,
    containerOffset: i,
    gapSize: r,
    tileCount: l,
    isVertical: a
  } = e, s = a ? t : t - u(l, r), o = a ? n - u(l, r) : n;
  return {
    verticalRatio: (o - i) / (s - i),
    horizontalRatio: (s - i) / (o - i)
  }
}

function d(e, t, n) {
  let {
    containerOffset: i,
    gapSize: r,
    tileCount: s,
    isVertical: o
  } = t, {
    maxWidth: d,
    maxHeight: h
  } = n, p = Math.max(1, s), f = e.width > d, g = e.height > h;
  if (!f && !g) return e;
  let m = u(s, r),
    {
      verticalRatio: y,
      horizontalRatio: A
    } = c({
      width: e.width,
      height: e.height,
      containerOffset: i,
      gapSize: r,
      tileCount: p,
      isVertical: o
    }),
    v = e.width - i,
    b = e.height - i,
    E = d - i,
    O = h - i;
  return o ? (O -= m, b -= m) : (E -= m, v -= m), f && g && (e.width > e.height ? b = l(v = E, y) : v = a(b = O, A), f = v > E, g = b > O), f && (b = l(v = E, y)), g && (v = a(b = O, A)), o ? b += u(s, r) : v += u(s, r), {
    width: v + i,
    height: b + i
  }
}

function h(e, t) {
  let {
    maxWidth: n,
    maxHeight: i
  } = t;
  return {
    width: Math.max(0, Math.min(e.width, n)),
    height: Math.max(0, Math.min(e.height, i))
  }
}