/** Chunk was on 82477 **/
/** chunk id: 734579, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk692547 = require("./692547.js"),
  Chunk952265 = require("./952265.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk164670 = require("./164670.js"),
  Chunk210218 = require("./210218.js"),
  Chunk705338 = require("./705338.js"),
  Chunk445606 = require("./445606.jsx"),
  Chunk633667 = require("./633667.jsx"),
  Chunk819640 = require("./819640.js"),
  Chunk434479 = require("./434479.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk323453 = require("./323453.js");
let I = Chunk473749.memo(function(e) {
  let {
    guild: t,
    selected: l
  } = e, I = i.useRef(null), _ = i.useRef(null), P = (0, u.useHasAnyModalOpen)(), N = (0, o.e7)([v.Z], () => v.Z.hasLayers()), [Z, w] = (0, h.ZT)([s.z.GAME_SHOP_NEW_BADGE], t.id);
  i.useEffect(() => {
    l && Z === s.z.GAME_SHOP_NEW_BADGE && w(x.L.INDIRECT_ACTION)
  }, [w, l, Z]);
  let T = i.useCallback(() => {
      var e, n;
      w(x.L.USER_DISMISS);
      let r = null != (n = null == (e = b.Z.getStorefrontState(t.id)) ? true : e.activePage) ? n : 0;
      (0, p.uL)(C.Z5c.CHANNELS_GAME_SHOP(t.id, r))
    }, [t, w]),
    A = i.useCallback(() => {
      (0, m.eagerNavigateToSocialLayerStorefront)({
        guildId: t.id
      })
    }, [t.id]),
    R = i.useCallback(() => {
      w(x.L.USER_DISMISS)
    }, [w]),
    D = i.useCallback(e => {
      null != t && (0, f.jW)(e, async () => {
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
    }, [t]),
    M = i.useCallback(() => {
      var e;
      null == (e = I.current) || e.onMouseEnter(null, 500)
    }, [I]),
    L = i.useCallback((e, n, i, o) => (0, r.jsx)(j.m, {
      innerClassName: e,
      ref: _,
      id: "game-shop-".concat(t.id),
      renderIcon: e => (0, r.jsx)(d.EOn, {
        size: "custom",
        color: "currentColor",
        width: 20,
        height: 20,
        className: a()(e, i)
      }),
      text: (0, r.jsx)(d.Text, {
        variant: "text-md/medium",
        className: a()(S.name, n),
        children: (null == t ? true : t.id) === (0, g.ac)() ? E.intl.string(E.t.xFQAPs) : E.intl.string(E.t.vyaWs7)
      }),
      selected: l,
      onMouseDown: A,
      onClick: T,
      onContextMenu: D,
      trailing: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d.IGR, {
          text: E.intl.string(E.t.y2b7CA),
          color: c.Z.colors.BACKGROUND_BRAND.css
        }), o]
      })
    }), [t.id, l, A, T, D]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(O.Z, {
      ref: I,
      children: L
    }), P || N || (null == t ? true : t.id) !== (0, g.ac)() || Z !== s.z.GAME_SHOP_NEW_BADGE ? null : (0, r.jsx)(y.Z, {
      onActionClick: T,
      onRender: M,
      onRequestClose: R,
      targetElementRef: _
    })]
  })
})