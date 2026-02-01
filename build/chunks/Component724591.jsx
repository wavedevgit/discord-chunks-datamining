/** Chunk was on 42402 **/
/** chunk id: 724591, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => N
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
  Chunk44724 = require("./44724.js"),
  Chunk849134 = require("./849134.jsx"),
  Chunk203548 = require("./203548.jsx"),
  Chunk186111 = require("./186111.js"),
  Chunk371794 = require("./371794.js"),
  Chunk998218 = require("./998218.js"),
  Chunk652793 = require("./652793.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk811094 = require("./811094.js");
let N = Chunk64700.memo(function(e) {
  var t;
  let {
    guild: i,
    selected: N
  } = e, T = l.useRef(null), P = l.useRef(null), w = (0, u.useHasAnyModalOpen)(), R = (0, a.bG)([j.A], () => j.A.hasLayers());
  l.useEffect(() => {
    (0, m.Kh)(i.id)
  }, [i.id]);
  let D = (0, a.bG)([b.A], () => b.A.getAnnouncement(i.id)),
    [L, M] = (0, h.x_)(o.M.GAME_SHOP_NEW_BADGE, i.id, null != (t = null == D ? true : D.id) ? t : ""),
    G = L === o.M.GAME_SHOP_NEW_BADGE;
  l.useEffect(() => {
    N && G && M(C.i.INDIRECT_ACTION)
  }, [M, N, G]);
  let k = l.useCallback(() => {
      var e, t;
      M(C.i.TAKE_ACTION);
      let n = null != (e = null == (t = b.A.getStorefrontState(i.id)) ? true : t.activePage) ? e : 0;
      (0, g.pX)(E.BVt.CHANNELS_GAME_SHOP(i.id, n))
    }, [i.id, M]),
    U = l.useCallback(() => {
      (0, A.X)({
        guildId: i.id,
        forceFetch: G
      })
    }, [i.id, G]),
    V = l.useCallback(() => {
      M(C.i.USER_DISMISS)
    }, [M]),
    B = l.useCallback(e => {
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
    H = l.useCallback(() => {
      var e;
      null == (e = T.current) || e.onMouseEnter(null, 500)
    }, [T]),
    F = l.useCallback((e, t, n, l) => (0, r.jsx)(v.G, {
      innerClassName: e,
      ref: P,
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
        className: s()(I.UU, t),
        children: (null == i ? true : i.id) === (0, f.zf)() ? S.intl.string(S.t.xFQAPs) : S.intl.string(S.t.vyaWs7)
      }),
      selected: N,
      onMouseDown: U,
      onClick: k,
      onContextMenu: B,
      trailing: (0, r.jsxs)(r.Fragment, {
        children: [G && (0, r.jsx)(d.LpS, {
          text: S.intl.string(S.t.y2b7CA),
          color: c.A.colors.BACKGROUND_BRAND.css
        }), l]
      })
    }), [i.id, N, U, k, B, G]),
    Y = l.useMemo(() => {
      let e = null != D && null != D.assetId ? _.A.toURLSafe((0, x.YE)(D.applicationId, D.assetId, 128, "webp")) : true,
        t = null != D && null != D.backgroundImageAssetId ? _.A.toURLSafe((0, x.YE)(D.applicationId, D.backgroundImageAssetId, 128, "webp")) : true;
      if (null != e) return {
        imageUrl: e,
        backgroundImageUrl: t
      }
    }, [D]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(O.A, {
      ref: T,
      children: F
    }), w || R || !G || null == D ? null : (0, r.jsx)(y.A, {
      onActionClick: k,
      onActionMouseDown: U,
      onRender: H,
      onRequestClose: V,
      targetElementRef: P,
      skuImageDetails: Y,
      title: S.intl.string(S.t["7PvvS9"]),
      body: S.intl.formatToPlainString(S.t["9J4h1a"], {
        applicationName: D.applicationName
      })
    })]
  })
})