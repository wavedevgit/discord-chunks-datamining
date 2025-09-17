/** Chunk was on web.js **/
/** chunk id: 309006, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m,
  a: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk963838 = require("./963838.js"),
  Chunk39127 = require("./39127.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk353368 = require("./353368.js"),
  Chunk753065 = require("./753065.js");
let p = 50;

function h(e) {
  var t;
  let n = null == e || null == (t = e.parentElement) ? true : t.getBoundingClientRect();
  return null == n ? {
    width: 0,
    height: 0
  } : {
    width: n.width,
    height: n.height
  }
}
let m = Chunk647438.forwardRef(function(e, t) {
  let {
    sound: n,
    containerDimensions: h
  } = e, m = (0, s.e7)([d.default], () => d.default.getCurrentUser()), g = (0, s.e7)([l.Z], () => l.Z.useReducedMotion), [E, b] = i.useState([]), y = E.length < p, O = (null == n ? true : n.emojiId) != null || (null == n ? true : n.emojiName) != null, v = i.useCallback(() => {
    if (!g && y && O && null != m) {
      var e;
      let t = (0, c._r)({
          id: n.emojiId,
          name: null != (e = n.emojiName) ? e : "",
          animated: false
        }),
        r = null != n.emojiId,
        i = f.q.PREMIUM,
        s = (0, a.random)(c.Jw[i].length, false),
        l = {
          id: (0, o.Z)(),
          animationId: s,
          animationType: i,
          shouldResize: r,
          url: t,
          userId: m.id
        };
      b(e => [...e, l])
    }
  }, [g, y, O, m, n]);
  i.useImperativeHandle(t, () => ({
    addAnimation: v
  }));
  let I = i.useCallback(e => {
    b(t => {
      let n = [...t],
        r = n.findIndex(t => t.id === e);
      return n.splice(r, 1), n
    })
  }, []);
  return g || !O ? null : (0, r.jsx)("div", {
    className: _.effects,
    style: {
      width: h.width,
      height: h.height
    },
    children: E.map(e => (0, r.jsx)(u.Z, {
      containerDimensions: h,
      effect: e,
      onComplete: I
    }, e.id))
  })
})