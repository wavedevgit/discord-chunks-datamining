/** Chunk was on web.js **/
/** chunk id: 126306, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk846519 = require("./846519.js"),
  Chunk186325 = require("./186325.js"),
  Chunk324812 = require("./324812.js");
let u = 200;
var d = function(e) {
  return e[e.TRANSLATE = 1] = "TRANSLATE", e[e.SCALE = 2] = "SCALE", e[e.FADE = 3] = "FADE", e
}(d || {});
let f = Object.freeze({
    1: Chunk324812.translate,
    2: Chunk324812.scale,
    3: Chunk324812.fade
  }),
  _ = Object.freeze({
    top: Chunk324812.animatorTop,
    bottom: Chunk324812.animatorBottom,
    left: Chunk324812.animatorLeft,
    right: Chunk324812.animatorRight,
    center: Chunk324812.animatorCenter,
    window_center: Chunk324812.animatorCenter
  });

function p(e) {
  let {
    position: t,
    type: n,
    children: o
  } = e, {
    reducedMotion: d
  } = i.useContext(l.S), p = d.enabled ? 3 : n, [h, m] = i.useState(null != t), [g] = i.useState(() => new s.V7), [E, b] = i.useState(true), y = i.useRef(null);
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
    className: a()(null != t ? _[t] : null, {
      [f[p]]: null != t,
      [c.didRender]: h
    }),
    children: o
  })
}
p.Types = d