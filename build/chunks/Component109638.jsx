/** Chunk was on web.js **/
/** chunk id: 109638, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m,
  o: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk835245 = require("./835245.js"),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js"),
  Chunk667050 = require("./667050.js"),
  Chunk407781 = require("./407781.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk194486 = require("./194486.js"),
  Chunk874880 = require("./874880.js");
let _ = 50;

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
let m = Chunk64700.forwardRef(function(e, t) {
  let {
    sound: n,
    containerDimensions: h
  } = e, m = (0, s.bG)([d.default], () => d.default.getCurrentUser()), g = (0, s.bG)([l.A], () => l.A.useReducedMotion), [E, y] = i.useState([]), b = E.length < _, O = (null == n ? true : n.emojiId) != null || (null == n ? true : n.emojiName) != null, v = i.useCallback(() => {
    if (!g && b && O && null != m) {
      var e;
      let t = (0, c.Br)({
          id: n.emojiId,
          name: null != (e = n.emojiName) ? e : "",
          animated: false
        }),
        r = null != n.emojiId,
        i = f.B.PREMIUM,
        s = (0, a.random)(c.Bf[i].length, false),
        l = {
          id: (0, o.A)(),
          animationId: s,
          animationType: i,
          shouldResize: r,
          url: t,
          userId: m.id
        };
      y(e => [...e, l])
    }
  }, [g, b, O, m, n]);
  i.useImperativeHandle(t, () => ({
    addAnimation: v
  }));
  let A = i.useCallback(e => {
    y(t => {
      let n = [...t],
        r = n.findIndex(t => t.id === e);
      return n.splice(r, 1), n
    })
  }, []);
  return g || !O ? null : (0, r.jsx)("div", {
    className: p.z,
    style: {
      width: h.width,
      height: h.height
    },
    children: E.map(e => (0, r.jsx)(u.A, {
      containerDimensions: h,
      effect: e,
      onComplete: A
    }, e.id))
  })
})