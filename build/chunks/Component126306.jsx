/** Chunk was on web.js **/
/** chunk id: 126306, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk846519 = require("./846519.js"),
  Chunk840954 = require("./840954.js");
let u = 200;
var d = function(e) {
  return e[e.TRANSLATE = 1] = "TRANSLATE", e[e.SCALE = 2] = "SCALE", e[e.FADE = 3] = "FADE", e
}(d || {});
let f = Object.freeze({
    1: Chunk840954.translate,
    2: Chunk840954.scale,
    3: Chunk840954.fade
  }),
  _ = Object.freeze({
    top: Chunk840954.animatorTop,
    bottom: Chunk840954.animatorBottom,
    left: Chunk840954.animatorLeft,
    right: Chunk840954.animatorRight,
    center: Chunk840954.animatorCenter,
    window_center: Chunk840954.animatorCenter
  });

function p(e) {
  let {
    position: t,
    type: n,
    children: a
  } = e, {
    reducedMotion: d
  } = i.useContext(s.Sfi), p = d.enabled ? 3 : n, [h, m] = i.useState(null != t), [g] = i.useState(() => new l.V7), [E, b] = i.useState(true), y = i.useRef(null);
  return i.useLayoutEffect(() => {
    var e;
    null == (e = y.current) || e.addEventListener("transitionend", () => {
      b(false)
    }), setTimeout(() => {
      b(false)
    }, u)
  }, []), i.useEffect(() => () => g.stop(), [g]), i.useEffect(() => {
    null != t && g.start(10, () => m(true))
  }, [t, g]), (0, r.jsx)("div", {
    "data-popout-animating": E,
    className: o()(null != t ? _[t] : null, {
      [f[p]]: null != t,
      [c.didRender]: h
    }),
    children: a
  })
}
p.Types = d