/** Chunk was on web.js **/
/** chunk id: 126306, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk846519 = require("./846519.js"),
  Chunk711560 = require("./711560.js");
let u = 200;
var d = function(e) {
  return e[e.TRANSLATE = 1] = "TRANSLATE", e[e.SCALE = 2] = "SCALE", e[e.FADE = 3] = "FADE", e
}(d || {});
let f = Object.freeze({
    1: Chunk711560.translate,
    2: Chunk711560.scale,
    3: Chunk711560.fade
  }),
  p = Object.freeze({
    top: Chunk711560.animatorTop,
    bottom: Chunk711560.animatorBottom,
    left: Chunk711560.animatorLeft,
    right: Chunk711560.animatorRight,
    center: Chunk711560.animatorCenter,
    window_center: Chunk711560.animatorCenter
  });

function _(e) {
  let {
    position: t,
    type: n,
    children: a
  } = e, {
    reducedMotion: d
  } = i.useContext(s.Sfi), _ = d.enabled ? 3 : n, [h, m] = i.useState(null != t), [g] = i.useState(() => new l.V7), [E, b] = i.useState(true), y = i.useRef(null);
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
    className: o()(null != t ? p[t] : null, {
      [f[_]]: null != t,
      [c.didRender]: h
    }),
    children: a
  })
}
_.Types = d