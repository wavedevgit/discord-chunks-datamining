/** Chunk was on 67000 **/
/** chunk id: 734579, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
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
let N = Chunk473749.memo(function(e) {
  var t;
  let {
    guild: l,
    selected: N
  } = e, Z = i.useRef(null), w = i.useRef(null), T = (0, u.useHasAnyModalOpen)(), A = (0, o.e7)([j.Z], () => j.Z.hasLayers());
  i.useEffect(() => {
    l.id === (0, g.ac)() && (0, b.Xp)(l.id)
  }, [l.id]);
  let R = (0, o.e7)([m.Z], () => m.Z.getAnnouncement(l.id)),
    [D, M] = (0, h.TE)((null == R ? true : R.id) != null ? s.z.GAME_SHOP_NEW_BADGE : null, null != (t = null == R ? true : R.id) ? t : ""),
    L = D === s.z.GAME_SHOP_NEW_BADGE;
  i.useEffect(() => {
    N && L && M(I.L.INDIRECT_ACTION)
  }, [M, N, L]);
  let k = i.useCallback(() => {
      var e, t;
      M(I.L.USER_DISMISS);
      let n = null != (t = null == (e = m.Z.getStorefrontState(l.id)) ? true : e.activePage) ? t : 0;
      (0, p.uL)(S.Z5c.CHANNELS_GAME_SHOP(l.id, n))
    }, [l, M]),
    G = i.useCallback(() => {
      (0, y.eagerNavigateToSocialLayerStorefront)({
        guildId: l.id,
        forceFetch: L
      })
    }, [l.id, L]),
    U = i.useCallback(() => {
      M(I.L.USER_DISMISS)
    }, [M]),
    B = i.useCallback(e => {
      null != l && (0, f.jW)(e, async () => {
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
      null == (e = Z.current) || e.onMouseEnter(null, 500)
    }, [Z]),
    V = i.useCallback((e, t, n, i) => (0, r.jsx)(E.m, {
      innerClassName: e,
      ref: w,
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
        children: (null == l ? true : l.id) === (0, g.ac)() ? _.intl.string(_.t.xFQAPs) : _.intl.string(_.t.vyaWs7)
      }),
      selected: N,
      onMouseDown: G,
      onClick: k,
      onContextMenu: B,
      trailing: (0, r.jsxs)(r.Fragment, {
        children: [L && (0, r.jsx)(d.IGR, {
          text: _.intl.string(_.t.y2b7CA),
          color: c.Z.colors.BACKGROUND_BRAND.css
        }), i]
      })
    }), [l.id, N, G, k, B, L]),
    H = i.useMemo(() => {
      let e = null != R && null != R.assetId ? x.Z.toURLSafe((0, C._W)(R.applicationId, R.assetId, 512, "webp")) : true,
        t = null != R && null != R.backgroundImageAssetId ? x.Z.toURLSafe((0, C._W)(R.applicationId, R.backgroundImageAssetId, 1024, "webp")) : true;
      if (null != e) return {
        imageUrl: e,
        backgroundImageUrl: t
      }
    }, [R]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(v.Z, {
      ref: Z,
      children: V
    }), T || A || (null == l ? true : l.id) !== (0, g.ac)() || !L || null == R ? null : (0, r.jsx)(O.Z, {
      onActionClick: k,
      onActionMouseDown: G,
      onRender: F,
      onRequestClose: U,
      targetElementRef: w,
      skuImageDetails: H,
      title: _.intl.string(_.t["7PvvS9"]),
      body: _.intl.formatToPlainString(_.t["9J4h1a"], {
        applicationName: R.applicationName
      })
    })]
  })
})