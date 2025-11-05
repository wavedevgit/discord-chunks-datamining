/** Chunk was on 27 **/
/** chunk id: 734579, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk952265 = require("./952265.js"),
  Chunk907862 = require("./907862.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk377171 = require("./377171.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk210218 = require("./210218.js"),
  Chunk819640 = require("./819640.js"),
  Chunk434479 = require("./434479.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx");
let O = Chunk647438.memo(function(e) {
  let {
    guild: t,
    selected: O
  } = e, v = i.useRef(null), j = (0, a.f9)(), C = (0, l.e7)([g.Z], () => g.Z.hasLayers()), [E, x] = (0, p.ZT)([o.z.GAME_SHOP_NEW_BADGE], t.id), S = i.useCallback(() => {
    var e, n;
    x(_.L.USER_DISMISS);
    let r = null != (n = null == (e = f.Z.getStorefrontState(t.id)) ? true : e.activePage) ? n : 0;
    (0, h.uL)(b.Z5c.CHANNELS_GAME_SHOP(t.id, r))
  }, [t, x]), I = i.useCallback(() => (0, r.jsx)(s.J2, {
    size: "lg",
    shouldShow: true,
    position: "right",
    caretConfig: {
      align: "start"
    },
    align: "top",
    badge: {
      type: "new",
      variant: "default"
    },
    onRequestClose: () => x(_.L.USER_DISMISS),
    actions: [{
      text: y.intl.string(y.t.RzWDqY),
      variant: "primary",
      onClick: S
    }],
    targetElementRef: v,
    title: y.intl.string(y.t.Ylu2JM),
    body: y.intl.string(y.t.vgylLQ)
  }), [x, S]), P = i.useCallback(e => {
    null != t && (0, u.jW)(e, async () => {
      let {
        default: e
      } = await n.e("73848").then(n.bind(n, 98409));
      return n => {
        var i, l;
        return (0, r.jsx)(e, (i = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({}, n), l = l = {
          guild: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
        }), i))
      }
    })
  }, [t]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(m.m, {
      ref: v,
      id: "game-shop-".concat(t.id),
      renderIcon: e => (0, r.jsx)(c.EOn, {
        size: "custom",
        color: c.TVs.colors.CHANNEL_ICON,
        width: 20,
        height: 20,
        className: e
      }),
      text: y.intl.string(y.t.vyaWs7),
      selected: O,
      onClick: S,
      onContextMenu: P,
      trailing: E === o.z.GAME_SHOP_NEW_BADGE ? (0, r.jsx)(c.IGR, {
        text: y.intl.string(y.t.y2b7CA),
        color: d.Z.BG_BRAND
      }) : null
    }), !j && !C && E === o.z.GAME_SHOP_NEW_BADGE && I()]
  })
})