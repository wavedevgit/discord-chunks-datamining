/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => S
}), n(733860);
var r = n(200651),
  i = n(192379),
  o = n(780384),
  a = n(481060),
  s = n(197344),
  l = n(526167),
  c = n(70097),
  u = n(981631),
  d = n(73117),
  f = n(988868),
  _ = n(554355),
  p = n(991989),
  h = n(787462),
  g = n(635507),
  m = n(470794),
  E = n(886777);

function v(e) {
  let {
    movDark: t = d,
    movLight: n = h,
    mp4Dark: i = f,
    mp4Light: o = g,
    pngDark: a = _,
    pngLight: s = m,
    webmDark: c = p,
    webmLight: v = E
  } = e, b = (0, l.vu)(), y = [(0, r.jsx)("source", {
    src: i,
    type: "video/mp4"
  }, "mp4"), (0, r.jsx)("img", {
    alt: "",
    src: a
  }, "png")], O = [(0, r.jsx)("source", {
    src: o,
    type: "video/mp4"
  }, "mp4"), (0, r.jsx)("img", {
    alt: "",
    src: s
  }, "png")];
  return (b > 52 || -1 === b) && (y.unshift((0, r.jsx)("source", {
    src: c,
    type: "video/webm"
  }, "webm")), O.unshift((0, r.jsx)("source", {
    src: v,
    type: "video/webm"
  }, "webm"))), (0, l.rO)() && (y.unshift((0, r.jsx)("source", {
    src: t,
    type: "video/mp4"
  }, "hevc")), O.unshift((0, r.jsx)("source", {
    src: n,
    type: "video/mp4"
  }, "hevc"))), {
    [u.BRd.DARK]: y,
    [u.BRd.LIGHT]: O
  }
}
let b = s.Z.getAppSpinnerSources(),
  y = null != b ? v(b) : null,
  O = v({}),
  S = e => {
    var t;
    let {
      loop: n = !0,
      autoPlay: s = !0,
      setRef: l,
      className: d,
      onReady: f
    } = e, {
      theme: _
    } = (0, a.TCT)(), {
      reducedMotion: p
    } = i.useContext(a.Sfi), h = O;
    null != y && (h = y);
    let g = null !== (t = h[(0, o.wj)(_) ? u.BRd.DARK : u.BRd.LIGHT]) && void 0 !== t ? t : h[u.BRd.DARK];
    return (0, r.jsx)(c.Z, {
      ref: l,
      onLoadedData: f,
      className: d,
      loop: !p.enabled && n,
      autoPlay: !p.enabled && s,
      playsInline: !0,
      "data-testid": "app-spinner",
      children: g
    }, _)
  }