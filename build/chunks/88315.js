/** Chunk was on 12416 **/
n.d(t, {
  P7: () => p,
  RR: () => m,
  UN: () => u,
  bg: () => h,
  hn: () => d,
  np: () => f
});
var r = n(979590),
  i = n.n(r),
  l = n(866442),
  a = n(220082),
  o = n(594174),
  s = n(984063),
  c = n(813900);

function u(e) {
  let t = e.current,
    n = null == t ? void 0 : t.getContext("2d");
  null != t && null != n && n.clearRect(0, 0, t.width, t.height)
}

function d(e, t) {
  let {
    width: n,
    height: r,
    left: i,
    top: l
  } = e.getBoundingClientRect();
  return {
    x: (t.clientX - i) / n,
    y: (t.clientY - l) / r
  }
}

function f(e, t) {
  return Math.round(e * t * window.devicePixelRatio)
}

function m(e, t, n) {
  return {
    x: f(e.x, t),
    y: f(e.y, n),
    deltaTime: e.deltaTime
  }
}

function p(e) {
  return e.type === s.W.LINE
}

function h(e, t, n, r) {
  var s;
  let u = o.default.getUser(e),
    d = null == u ? void 0 : u.getAvatarURL(null, c.Ks),
    f = null != d ? null === (s = a.SR.getState().palette[d]) || void 0 === s ? void 0 : s[0] : null,
    m = null != f ? "#".concat(i()({
      r: f[0],
      g: f[1],
      b: f[2]
    }).toHex()) : r,
    p = (0, l.Bd)((0, l._i)(m)) > .5 ? n : t;
  return {
    fillColor: m,
    outlineColor: p
  }
}