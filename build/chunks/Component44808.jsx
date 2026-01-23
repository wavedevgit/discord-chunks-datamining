/** Chunk was on web.js **/
/** chunk id: 44808, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk451988 = require("./451988.js"),
  Chunk487166 = require("./487166.js");
let u = 200;
var d = function(e) {
  return e[e.TRANSLATE = 1] = "TRANSLATE", e[e.SCALE = 2] = "SCALE", e[e.FADE = 3] = "FADE", e
}(d || {});
let f = Object.freeze({
    1: Chunk487166.Tl,
    2: Chunk487166.hs,
    3: Chunk487166.Rv
  }),
  p = Object.freeze({
    top: Chunk487166.ZR,
    bottom: Chunk487166.XI,
    left: Chunk487166.Hn,
    right: Chunk487166.sS,
    center: Chunk487166.pm,
    window_center: Chunk487166.pm
  });

function _(e) {
  let {
    position: t,
    type: n,
    children: a
  } = e, {
    reducedMotion: d
  } = i.useContext(o.CZY), _ = d.enabled ? 3 : n, [h, m] = i.useState(null != t), [g] = i.useState(() => new l.Ep), [E, y] = i.useState(true), b = i.useRef(null);
  return i.useLayoutEffect(() => {
    var e;
    null == (e = b.current) || e.addEventListener("transitionend", () => {
      y(false)
    }), setTimeout(() => {
      y(false)
    }, u)
  }, []), i.useEffect(() => () => g.stop(), [g]), i.useEffect(() => {
    null != t && g.start(10, () => m(true))
  }, [t, g]), (0, r.jsx)("div", {
    "data-popout-animating": E,
    className: s()(null != t ? p[t] : null, {
      [f[_]]: null != t,
      [c.Wr]: h
    }),
    children: a
  })
}
_.Types = d