/** Chunk was on 50751 **/
/** chunk id: 461393, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E5: () => l,
  GB: () => o,
  MH: () => a,
  Se: () => d,
  bj: () => u,
  eJ: () => s,
  f8: () => c,
  hJ: () => p
});
let i = 9 / 16,
  r = 16 / 9,
  l = (e, t) => e * t,
  o = (e, t) => e * t,
  a = e => l(e, i),
  s = e => o(e, r);

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
    isVertical: o
  } = e, a = o ? t : t - u(l, r), s = o ? n - u(l, r) : n;
  return {
    verticalRatio: (s - i) / (a - i),
    horizontalRatio: (a - i) / (s - i)
  }
}

function d(e, t, n) {
  let {
    containerOffset: i,
    gapSize: r,
    tileCount: a,
    isVertical: s
  } = t, {
    maxWidth: d,
    maxHeight: p
  } = n, h = Math.max(1, a), f = e.width > d, m = e.height > p;
  if (!f && !m) return e;
  let g = u(a, r),
    {
      verticalRatio: O,
      horizontalRatio: y
    } = c({
      width: e.width,
      height: e.height,
      containerOffset: i,
      gapSize: r,
      tileCount: h,
      isVertical: s
    }),
    v = e.width - i,
    E = e.height - i,
    S = d - i,
    b = p - i;
  return s ? (b -= g, E -= g) : (S -= g, v -= g), f && m && (e.width > e.height ? E = l(v = S, O) : v = o(E = b, y), f = v > S, m = E > b), f && (E = l(v = S, O)), m && (v = o(E = b, y)), s ? E += u(a, r) : v += u(a, r), {
    width: v + i,
    height: E + i
  }
}

function p(e, t) {
  let {
    maxWidth: n,
    maxHeight: i
  } = t;
  return {
    width: Math.max(0, Math.min(e.width, n)),
    height: Math.max(0, Math.min(e.height, i))
  }
}