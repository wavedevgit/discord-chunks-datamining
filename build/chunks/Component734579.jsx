/** Chunk was on 65354 **/
/** chunk id: 734579, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk952265 = require("./952265.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk377171 = require("./377171.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk210218 = require("./210218.js"),
  Chunk445606 = require("./445606.jsx"),
  Chunk819640 = require("./819640.js"),
  Chunk434479 = require("./434479.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk582113 = require("./582113.js"),
  Chunk388032 = require("./388032.jsx");
let v = Chunk473749.memo(function(e) {
  let {
    guild: t,
    selected: v
  } = e, j = i.useRef(null), x = (0, a.f9)(), C = (0, l.e7)([g.Z], () => g.Z.hasLayers()), [E, S] = (0, d.ZT)([o.z.GAME_SHOP_NEW_BADGE], t.id);
  i.useEffect(() => {
    v && E === o.z.GAME_SHOP_NEW_BADGE && S(_.L.INDIRECT_ACTION)
  }, [S, v, E]);
  let I = i.useCallback(() => {
      var e, n;
      S(_.L.USER_DISMISS);
      let r = null != (n = null == (e = p.Z.getStorefrontState(t.id)) ? true : e.activePage) ? n : 0;
      (0, f.uL)(b.Z5c.CHANNELS_GAME_SHOP(t.id, r))
    }, [t, S]),
    P = i.useCallback(() => {
      S(_.L.USER_DISMISS)
    }, [S]),
    N = i.useCallback(e => {
      null != t && (0, c.jW)(e, async () => {
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
      ref: j,
      id: "game-shop-".concat(t.id),
      renderIcon: e => (0, r.jsx)(s.EOn, {
        size: "custom",
        color: s.TVs.colors.CHANNEL_ICON,
        width: 20,
        height: 20,
        className: e
      }),
      text: (null == t ? true : t.id) === y.ON ? O.intl.string(O.t.xFQAPs) : O.intl.string(O.t.vyaWs7),
      selected: v,
      onClick: I,
      onContextMenu: N,
      trailing: (0, r.jsx)(s.IGR, {
        text: O.intl.string(O.t.y2b7CA),
        color: u.Z.BG_BRAND
      })
    }), x || C || (null == t ? true : t.id) !== y.ON || E !== o.z.GAME_SHOP_NEW_BADGE ? null : (0, r.jsx)(h.Z, {
      onActionClick: I,
      onRequestClose: P,
      targetElementRef: j
    })]
  })
})