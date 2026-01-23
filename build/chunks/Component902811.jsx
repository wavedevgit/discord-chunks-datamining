/** Chunk was on web.js **/
/** chunk id: 902811, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A
}), require("./667532.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk552122 = require("./552122.js"),
  Chunk676279 = require("./676279.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk40180 = require("./40180.js"),
  Chunk770359 = require("./770359.js"),
  Chunk763827 = require("./763827.js"),
  Chunk609069 = require("./609069.js"),
  Chunk460860 = require("./460860.js"),
  Chunk734607 = require("./734607.js"),
  Chunk724875 = require("./724875.js"),
  Chunk540085 = require("./540085.js");

function y(e) {
  let {
    movDark: t = d,
    movLight: n = h,
    mp4Dark: i = f,
    mp4Light: a = m,
    pngDark: s = p,
    pngLight: o = g,
    webmDark: c = _,
    webmLight: y = E
  } = e, b = (0, l.Z5)(), O = [(0, r.jsx)("source", {
    src: i,
    type: "video/mp4"
  }, "mp4"), (0, r.jsx)("img", {
    alt: "",
    src: s
  }, "png")], v = [(0, r.jsx)("source", {
    src: a,
    type: "video/mp4"
  }, "mp4"), (0, r.jsx)("img", {
    alt: "",
    src: o
  }, "png")];
  return (b > 52 || false === b) && (O.unshift((0, r.jsx)("source", {
    src: c,
    type: "video/webm"
  }, "webm")), v.unshift((0, r.jsx)("source", {
    src: y,
    type: "video/webm"
  }, "webm"))), (0, l.TM)() && (O.unshift((0, r.jsx)("source", {
    src: t,
    type: "video/mp4"
  }, "hevc")), v.unshift((0, r.jsx)("source", {
    src: n,
    type: "video/mp4"
  }, "hevc"))), {
    [u.NJ8.DARK]: O,
    [u.NJ8.LIGHT]: v
  }
}
let b = Chunk552122.A.getAppSpinnerSources(),
  O = null != b ? y(b) : null,
  v = y({}),
  A = e => {
    var t;
    let {
      loop: n = true,
      autoPlay: o = true,
      setRef: l,
      className: d,
      onReady: f
    } = e, {
      theme: p
    } = (0, s.wRf)(), {
      reducedMotion: _
    } = i.useContext(s.CZY), h = v;
    null != O && (h = O);
    let m = null != (t = h[(0, a.Mw)(p) ? u.NJ8.DARK : u.NJ8.LIGHT]) ? t : h[u.NJ8.DARK];
    return (0, r.jsx)(c.A, {
      ref: l,
      onLoadedData: f,
      className: d,
      loop: !_.enabled && n,
      autoPlay: !_.enabled && o,
      playsInline: true,
      "data-testid": "app-spinner",
      children: m
    }, p)
  }