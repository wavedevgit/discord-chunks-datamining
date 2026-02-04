/** Chunk was on 71447 **/
/** chunk id: 916494, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $G: () => h,
  Mw: () => a,
  UM: () => d,
  Um: () => s,
  cP: () => l,
  eu: () => c,
  kz: () => u,
  uc: () => o
});
let i = 9 / 16,
  r = 16 / 9,
  l = (e, t) => e * t,
  a = (e, t) => e * t,
  o = e => l(e, i),
  s = e => a(e, r);

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
  } = e, o = a ? t : t - u(l, r), s = a ? n - u(l, r) : n;
  return {
    verticalRatio: (s - i) / (o - i),
    horizontalRatio: (o - i) / (s - i)
  }
}

function d(e, t, n) {
  let {
    containerOffset: i,
    gapSize: r,
    tileCount: o,
    isVertical: s
  } = t, {
    maxWidth: d,
    maxHeight: h
  } = n, p = Math.max(1, o), f = e.width > d, g = e.height > h;
  if (!f && !g) return e;
  let m = u(o, r),
    {
      verticalRatio: A,
      horizontalRatio: y
    } = c({
      width: e.width,
      height: e.height,
      containerOffset: i,
      gapSize: r,
      tileCount: p,
      isVertical: s
    }),
    O = e.width - i,
    v = e.height - i,
    b = d - i,
    E = h - i;
  return s ? (E -= m, v -= m) : (b -= m, O -= m), f && g && (e.width > e.height ? v = l(O = b, A) : O = a(v = E, y), f = O > b, g = v > E), f && (v = l(O = b, A)), g && (O = a(v = E, y)), s ? v += u(o, r) : O += u(o, r), {
    width: O + i,
    height: v + i
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