/** Chunk was on 44669 **/
/** chunk id: 724591, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => P
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk827734 = require("./827734.js"),
  Chunk192308 = require("./192308.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk871123 = require("./871123.js"),
  Chunk733391 = require("./733391.js"),
  Chunk832163 = require("./832163.js"),
  Chunk938289 = require("./938289.js"),
  Chunk44724 = require("./44724.js"),
  Chunk849134 = require("./849134.jsx"),
  Chunk874100 = require("./874100.jsx"),
  Chunk203548 = require("./203548.jsx"),
  Chunk186111 = require("./186111.js"),
  Chunk371794 = require("./371794.js"),
  Chunk998218 = require("./998218.js"),
  Chunk652793 = require("./652793.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk811094 = require("./811094.js");
let P = Chunk64700.memo(function(e) {
  var t;
  let {
    guild: i,
    selected: P
  } = e, w = l.useRef(null), R = l.useRef(null), D = (0, u.useHasAnyModalOpen)(), L = (0, a.bG)([x.A], () => x.A.hasLayers()), M = (0, A.n)({
    location: "game_shop_channel_row"
  });
  l.useEffect(() => {
    (0, m.Kh)(i.id)
  }, [i.id]);
  let G = (0, a.bG)([b.A], () => b.A.getAnnouncement(i.id)),
    k = (null == G ? true : G.state) === "success" ? G.announcement : true,
    [U, V] = (0, h.x_)(o.M.GAME_SHOP_NEW_BADGE, i.id, null != (t = null == k ? true : k.id) ? t : ""),
    B = U === o.M.GAME_SHOP_NEW_BADGE && null != k,
    H = !M || null == G || "loading" === G.state || B || i.id !== (0, f.zf)(),
    [F, Y] = (0, h.kn)(H ? [] : [o.M.SLAYER_STOREFRONT_XBOX_ANNOUNCEMENT]),
    K = F === o.M.SLAYER_STOREFRONT_XBOX_ANNOUNCEMENT,
    W = B || K,
    z = l.useMemo(() => B ? V : Y, [B, V, Y]);
  l.useEffect(() => {
    P && W && z(I.i.INDIRECT_ACTION)
  }, [z, P, W]);
  let q = l.useCallback(() => {
      var e, t;
      z(I.i.TAKE_ACTION);
      let n = null != (e = null == (t = b.A.getStorefrontState(i.id)) ? true : t.activePage) ? e : 0;
      (0, g.pX)(S.BVt.CHANNELS_GAME_SHOP(i.id, n))
    }, [i.id, z]),
    X = l.useCallback(() => {
      (0, y.X)({
        guildId: i.id,
        forceFetch: B
      })
    }, [i.id, B]),
    J = l.useCallback(() => {
      z(I.i.USER_DISMISS)
    }, [z]),
    Q = l.useCallback(e => {
      null != i && (0, p.L3)(e, async () => {
        let {
          default: e
        } = await n.e("99523").then(n.bind(n, 41614));
        return t => {
          var n, l;
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
          }({}, t), l = l = {
            guild: i
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
          }), n))
        }
      })
    }, [i]),
    Z = l.useCallback(() => {
      var e;
      null == (e = w.current) || e.onMouseEnter(null, 500)
    }, [w]),
    $ = l.useCallback((e, t, n, l) => (0, r.jsx)(C.G, {
      innerClassName: e,
      ref: R,
      id: "game-shop-".concat(i.id),
      renderIcon: e => (0, r.jsx)(d.U1X, {
        size: "custom",
        color: "currentColor",
        width: 20,
        height: 20,
        className: s()(e, n)
      }),
      text: (0, r.jsx)(d.Text, {
        variant: "text-md/medium",
        className: s()(T.UU, t),
        children: (null == i ? true : i.id) === (0, f.zf)() ? N.intl.string(N.t.xFQAPs) : N.intl.string(N.t.vyaWs7)
      }),
      selected: P,
      onMouseDown: X,
      onClick: q,
      onContextMenu: Q,
      trailing: (0, r.jsxs)(r.Fragment, {
        children: [B && (0, r.jsx)(d.LpS, {
          text: N.intl.string(N.t.y2b7CA),
          color: c.A.colors.BACKGROUND_BRAND.css
        }), l]
      })
    }), [i.id, P, X, q, Q, B]),
    ee = l.useMemo(() => {
      if (null == k) return;
      let e = null != k.assetId ? E.A.toURLSafe((0, v.YE)(k.applicationId, k.assetId, 128, "webp")) : true,
        t = null != k.backgroundImageAssetId ? E.A.toURLSafe((0, v.YE)(k.applicationId, k.backgroundImageAssetId, 128, "webp")) : true;
      if (null != e) return {
        imageUrl: e,
        backgroundImageUrl: t
      }
    }, [k]),
    et = l.useCallback(() => B ? (0, r.jsx)(O.A, {
      onActionClick: q,
      onActionMouseDown: X,
      onRender: Z,
      onRequestClose: J,
      targetElementRef: R,
      skuImageDetails: ee,
      title: N.intl.string(N.t["7PvvS9"]),
      body: N.intl.formatToPlainString(N.t["9J4h1a"], {
        applicationName: k.applicationName
      })
    }) : K ? (0, r.jsx)(j.A, {
      onActionClick: q,
      onActionMouseDown: X,
      onRender: Z,
      onRequestClose: J,
      targetElementRef: R
    }) : null, [B, k, q, X, Z, J, ee, K]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(_.A, {
      ref: w,
      children: $
    }), !D && !L && et()]
  })
})