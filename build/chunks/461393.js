/** Chunk was on 50751 **/
/** chunk id: 461393, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E5: () => l,
  GB: () => a,
  MH: () => o,
  Se: () => d,
  bj: () => c,
  eJ: () => s,
  f8: () => u,
  hJ: () => f
});
let i = 9 / 16,
  r = 16 / 9,
  l = (e, t) => e * t,
  a = (e, t) => e * t,
  o = e => l(e, i),
  s = e => a(e, r);

function c(e, t) {
  return t * (Math.max(1, e) - 1)
}

function u(e) {
  let {
    width: t,
    height: n,
    containerOffset: i,
    gapSize: r,
    tileCount: l,
    isVertical: a
  } = e, o = a ? t : t - c(l, r), s = a ? n - c(l, r) : n;
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
    maxHeight: f
  } = n, h = Math.max(1, o), p = e.width > d, m = e.height > f;
  if (!p && !m) return e;
  let g = c(o, r),
    {
      verticalRatio: b,
      horizontalRatio: y
    } = u({
      width: e.width,
      height: e.height,
      containerOffset: i,
      gapSize: r,
      tileCount: h,
      isVertical: s
    }),
    O = e.width - i,
    v = e.height - i,
    E = d - i,
    S = f - i;
  return s ? (S -= g, v -= g) : (E -= g, O -= g), p && m && (e.width > e.height ? v = l(O = E, b) : O = a(v = S, y), p = O > E, m = v > S), p && (v = l(O = E, b)), m && (O = a(v = S, y)), s ? v += c(o, r) : O += c(o, r), {
    width: O + i,
    height: v + i
  }
}

function f(e, t) {
  let {
    maxWidth: n,
    maxHeight: i
  } = t;
  return {
    width: Math.max(0, Math.min(e.width, n)),
    height: Math.max(0, Math.min(e.height, i))
  }
}