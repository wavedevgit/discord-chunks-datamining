/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => g,
  a: () => h
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(392711),
  a = n(772848),
  s = n(442837),
  l = n(607070),
  c = n(963838),
  u = n(39127),
  d = n(594174),
  f = n(353368),
  _ = n(480723);
let p = 50;

function h(e) {
  var t;
  let n = null == e ? void 0 : null === (t = e.parentElement) || void 0 === t ? void 0 : t.getBoundingClientRect();
  return null == n ? {
    width: 0,
    height: 0
  } : {
    width: n.width,
    height: n.height
  }
}
let g = i.forwardRef(function(e, t) {
  let {
    sound: n,
    containerDimensions: h
  } = e, g = (0, s.e7)([d.default], () => d.default.getCurrentUser()), m = (0, s.e7)([l.Z], () => l.Z.useReducedMotion), [E, v] = i.useState([]), b = E.length < p, y = (null == n ? void 0 : n.emojiId) != null || (null == n ? void 0 : n.emojiName) != null, O = i.useCallback(() => {
    if (!m && b && y && null != g) {
      var e;
      let t = (0, c._r)({
          id: n.emojiId,
          name: null !== (e = n.emojiName) && void 0 !== e ? e : "",
          animated: !1
        }),
        r = null != n.emojiId,
        i = f.q.PREMIUM,
        s = (0, o.random)(c.Jw[i].length, !1),
        l = {
          id: (0, a.Z)(),
          animationId: s,
          animationType: i,
          shouldResize: r,
          url: t,
          userId: g.id
        };
      v(e => [...e, l])
    }
  }, [m, b, y, g, n]);
  i.useImperativeHandle(t, () => ({
    addAnimation: O
  }));
  let S = i.useCallback(e => {
    v(t => {
      let n = [...t],
        r = n.findIndex(t => t.id === e);
      return n.splice(r, 1), n
    })
  }, []);
  return m || !y ? null : (0, r.jsx)("div", {
    className: _.effects,
    style: {
      width: h.width,
      height: h.height
    },
    children: E.map(e => (0, r.jsx)(u.Z, {
      containerDimensions: h,
      effect: e,
      onComplete: S
    }, e.id))
  })
})