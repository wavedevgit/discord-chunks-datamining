/** Chunk was on web.js **/
/** chunk id: 905656, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./290780.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk197344 = require("./197344.js"),
  Chunk526167 = require("./526167.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk73117 = require("./73117.js"),
  Chunk988868 = require("./988868.js"),
  Chunk554355 = require("./554355.js"),
  Chunk991989 = require("./991989.js"),
  Chunk787462 = require("./787462.js"),
  Chunk635507 = require("./635507.js"),
  Chunk470794 = require("./470794.js"),
  Chunk886777 = require("./886777.js");

function b(e) {
  let {
    movDark: t = d,
    movLight: n = h,
    mp4Dark: i = f,
    mp4Light: a = m,
    pngDark: o = p,
    pngLight: s = g,
    webmDark: c = _,
    webmLight: b = E
  } = e, y = (0, l.vu)(), O = [(0, r.jsx)("source", {
    src: i,
    type: "video/mp4"
  }, "mp4"), (0, r.jsx)("img", {
    alt: "",
    src: o
  }, "png")], v = [(0, r.jsx)("source", {
    src: a,
    type: "video/mp4"
  }, "mp4"), (0, r.jsx)("img", {
    alt: "",
    src: s
  }, "png")];
  return (y > 52 || false === y) && (O.unshift((0, r.jsx)("source", {
    src: c,
    type: "video/webm"
  }, "webm")), v.unshift((0, r.jsx)("source", {
    src: b,
    type: "video/webm"
  }, "webm"))), (0, l.rO)() && (O.unshift((0, r.jsx)("source", {
    src: t,
    type: "video/mp4"
  }, "hevc")), v.unshift((0, r.jsx)("source", {
    src: n,
    type: "video/mp4"
  }, "hevc"))), {
    [u.BRd.DARK]: O,
    [u.BRd.LIGHT]: v
  }
}
let y = Chunk197344.Z.getAppSpinnerSources(),
  O = null != y ? b(y) : null,
  v = b({}),
  S = e => {
    var t;
    let {
      loop: n = true,
      autoPlay: s = true,
      setRef: l,
      className: d,
      onReady: f
    } = e, {
      theme: p
    } = (0, o.TCT)(), {
      reducedMotion: _
    } = i.useContext(o.Sfi), h = v;
    null != O && (h = O);
    let m = null != (t = h[(0, a.wj)(p) ? u.BRd.DARK : u.BRd.LIGHT]) ? t : h[u.BRd.DARK];
    return (0, r.jsx)(c.Z, {
      ref: l,
      onLoadedData: f,
      className: d,
      loop: !_.enabled && n,
      autoPlay: !_.enabled && s,
      playsInline: true,
      "data-testid": "app-spinner",
      children: m
    }, p)
  }