/** Chunk was on 81985 **/
/** chunk id: 734579, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
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
  Chunk411935 = require("./411935.js"),
  Chunk210218 = require("./210218.js"),
  Chunk705338 = require("./705338.js"),
  Chunk445606 = require("./445606.jsx"),
  Chunk633667 = require("./633667.jsx"),
  Chunk819640 = require("./819640.js"),
  Chunk73346 = require("./73346.js"),
  Chunk591759 = require("./591759.js"),
  Chunk434479 = require("./434479.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk323453 = require("./323453.js");
let Z = Chunk473749.memo(function(e) {
  var t;
  let {
    guild: l,
    selected: Z
  } = e, N = i.useRef(null), T = i.useRef(null), A = (0, u.useHasAnyModalOpen)(), w = (0, o.e7)([j.Z], () => j.Z.hasLayers());
  i.useEffect(() => {
    (0, m.Xp)(l.id)
  }, [l.id]);
  let R = (0, o.e7)([b.Z], () => b.Z.getAnnouncement(l.id)),
    [D, M] = (0, f.ar)(s.z.GAME_SHOP_NEW_BADGE, l.id, null != (t = null == R ? true : R.id) ? t : ""),
    k = D === s.z.GAME_SHOP_NEW_BADGE;
  i.useEffect(() => {
    Z && k && M(_.L.INDIRECT_ACTION)
  }, [M, Z, k]);
  let L = i.useCallback(() => {
      var e, t;
      M(_.L.TAKE_ACTION);
      let n = null != (t = null == (e = b.Z.getStorefrontState(l.id)) ? true : e.activePage) ? t : 0;
      (0, h.uL)(S.Z5c.CHANNELS_GAME_SHOP(l.id, n))
    }, [l.id, M]),
    U = i.useCallback(() => {
      (0, y.eagerNavigateToSocialLayerStorefront)({
        guildId: l.id,
        forceFetch: k
      })
    }, [l.id, k]),
    G = i.useCallback(() => {
      M(_.L.USER_DISMISS)
    }, [M]),
    B = i.useCallback(e => {
      null != l && (0, p.jW)(e, async () => {
        let {
          default: e
        } = await n.e("73848").then(n.bind(n, 98409));
        return t => {
          var n, i;
          return (0, r.jsx)(e, (n = function(e) {
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
          }({}, t), i = i = {
            guild: l
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
          }), n))
        }
      })
    }, [l]),
    F = i.useCallback(() => {
      var e;
      null == (e = N.current) || e.onMouseEnter(null, 500)
    }, [N]),
    H = i.useCallback((e, t, n, i) => (0, r.jsx)(E.m, {
      innerClassName: e,
      ref: T,
      id: "game-shop-".concat(l.id),
      renderIcon: e => (0, r.jsx)(d.EOn, {
        size: "custom",
        color: "currentColor",
        width: 20,
        height: 20,
        className: a()(e, n)
      }),
      text: (0, r.jsx)(d.Text, {
        variant: "text-md/medium",
        className: a()(P.name, t),
        children: (null == l ? true : l.id) === (0, g.ac)() ? I.intl.string(I.t.xFQAPs) : I.intl.string(I.t.vyaWs7)
      }),
      selected: Z,
      onMouseDown: U,
      onClick: L,
      onContextMenu: B,
      trailing: (0, r.jsxs)(r.Fragment, {
        children: [k && (0, r.jsx)(d.IGR, {
          text: I.intl.string(I.t.y2b7CA),
          color: c.Z.colors.BACKGROUND_BRAND.css
        }), i]
      })
    }), [l.id, Z, U, L, B, k]),
    V = i.useMemo(() => {
      let e = null != R && null != R.assetId ? C.Z.toURLSafe((0, x._W)(R.applicationId, R.assetId, 128, "webp")) : true,
        t = null != R && null != R.backgroundImageAssetId ? C.Z.toURLSafe((0, x._W)(R.applicationId, R.backgroundImageAssetId, 128, "webp")) : true;
      if (null != e) return {
        imageUrl: e,
        backgroundImageUrl: t
      }
    }, [R]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(O.Z, {
      ref: N,
      children: H
    }), A || w || !k || null == R ? null : (0, r.jsx)(v.Z, {
      onActionClick: L,
      onActionMouseDown: U,
      onRender: F,
      onRequestClose: G,
      targetElementRef: T,
      skuImageDetails: V,
      title: I.intl.string(I.t["7PvvS9"]),
      body: I.intl.formatToPlainString(I.t["9J4h1a"], {
        applicationName: R.applicationName
      })
    })]
  })
})