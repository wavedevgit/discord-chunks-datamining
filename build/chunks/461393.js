/** Chunk was on 2803 **/
/** chunk id: 461393, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E5: () => l,
  GB: () => o,
  MH: () => a,
  Se: () => d,
  bj: () => c,
  eJ: () => s,
  f8: () => u,
  hJ: () => p
});
let i = 9 / 16,
  r = 16 / 9,
  l = (e, t) => e * t,
  o = (e, t) => e * t,
  a = e => l(e, i),
  s = e => o(e, r);

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
    isVertical: o
  } = e, a = o ? t : t - c(l, r), s = o ? n - c(l, r) : n;
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
  let g = c(a, r),
    {
      verticalRatio: y,
      horizontalRatio: O
    } = u({
      width: e.width,
      height: e.height,
      containerOffset: i,
      gapSize: r,
      tileCount: h,
      isVertical: s
    }),
    v = e.width - i,
    b = e.height - i,
    E = d - i,
    _ = p - i;
  return s ? (_ -= g, b -= g) : (E -= g, v -= g), f && m && (e.width > e.height ? b = l(v = E, y) : v = o(b = _, O), f = v > E, m = b > _), f && (b = l(v = E, y)), m && (v = o(b = _, O)), s ? b += c(a, r) : v += c(a, r), {
    width: v + i,
    height: b + i
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