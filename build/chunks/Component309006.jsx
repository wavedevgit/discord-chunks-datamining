/** Chunk was on web.js **/
/** chunk id: 309006, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h,
  a: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk963838 = require("./963838.js"),
  Chunk39127 = require("./39127.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk353368 = require("./353368.js"),
  Chunk472470 = require("./472470.js");
let _ = 50;

function m(e) {
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
let h = Chunk473749.forwardRef(function(e, t) {
  let {
    sound: n,
    containerDimensions: m
  } = e, h = (0, s.e7)([d.default], () => d.default.getCurrentUser()), g = (0, s.e7)([l.Z], () => l.Z.useReducedMotion), [E, b] = i.useState([]), y = E.length < _, O = (null == n ? true : n.emojiId) != null || (null == n ? true : n.emojiName) != null, v = i.useCallback(() => {
    if (!g && y && O && null != h) {
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
          userId: h.id
        };
      b(e => [...e, l])
    }
  }, [g, y, O, h, n]);
  i.useImperativeHandle(t, () => ({
    addAnimation: v
  }));
  let S = i.useCallback(e => {
    b(t => {
      let n = [...t],
        r = n.findIndex(t => t.id === e);
      return n.splice(r, 1), n
    })
  }, []);
  return g || !O ? null : (0, r.jsx)("div", {
    className: p.effects,
    style: {
      width: m.width,
      height: m.height
    },
    children: E.map(e => (0, r.jsx)(u.Z, {
      containerDimensions: m,
      effect: e,
      onComplete: S
    }, e.id))
  })
})