/** Chunk was on 67564 **/
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
  } = e, T = l.useRef(null), P = l.useRef(null), w = (0, u.useHasAnyModalOpen)(), R = (0, a.bG)([O.A], () => O.A.hasLayers());
  l.useEffect(() => {
    (0, m.Kh)(i.id)
  }, [i.id]);
  let D = (0, a.bG)([b.A], () => b.A.getAnnouncement(i.id)),
    [M, L] = (0, h.x_)(o.M.GAME_SHOP_NEW_BADGE, i.id, null != (t = null == D ? true : D.id) ? t : ""),
    k = M === o.M.GAME_SHOP_NEW_BADGE;
  l.useEffect(() => {
    N && k && L(C.i.INDIRECT_ACTION)
  }, [L, N, k]);
  let G = l.useCallback(() => {
      var e, t;
      L(C.i.TAKE_ACTION);
      let n = null != (e = null == (t = b.A.getStorefrontState(i.id)) ? true : t.activePage) ? e : 0;
      (0, f.pX)(E.BVt.CHANNELS_GAME_SHOP(i.id, n))
    }, [i.id, L]),
    U = l.useCallback(() => {
      (0, A.X)({
        guildId: i.id,
        forceFetch: k
      })
    }, [i.id, k]),
    B = l.useCallback(() => {
      L(C.i.USER_DISMISS)
    }, [L]),
    V = l.useCallback(e => {
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
    F = l.useCallback(() => {
      var e;
      null == (e = T.current) || e.onMouseEnter(null, 500)
    }, [T]),
    H = l.useCallback((e, t, n, l) => (0, r.jsx)(x.G, {
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
        children: (null == i ? true : i.id) === (0, g.zf)() ? S.intl.string(S.t.xFQAPs) : S.intl.string(S.t.vyaWs7)
      }),
      selected: N,
      onMouseDown: U,
      onClick: G,
      onContextMenu: V,
      trailing: (0, r.jsxs)(r.Fragment, {
        children: [k && (0, r.jsx)(d.LpS, {
          text: S.intl.string(S.t.y2b7CA),
          color: c.A.colors.BACKGROUND_BRAND.css
        }), l]
      })
    }), [i.id, N, U, G, V, k]),
    K = l.useMemo(() => {
      let e = null != D && null != D.assetId ? v.A.toURLSafe((0, j.YE)(D.applicationId, D.assetId, 128, "webp")) : true,
        t = null != D && null != D.backgroundImageAssetId ? v.A.toURLSafe((0, j.YE)(D.applicationId, D.backgroundImageAssetId, 128, "webp")) : true;
      if (null != e) return {
        imageUrl: e,
        backgroundImageUrl: t
      }
    }, [D]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(_.A, {
      ref: T,
      children: H
    }), w || R || !k || null == D ? null : (0, r.jsx)(y.A, {
      onActionClick: G,
      onActionMouseDown: U,
      onRender: F,
      onRequestClose: B,
      targetElementRef: P,
      skuImageDetails: K,
      title: S.intl.string(S.t["7PvvS9"]),
      body: S.intl.formatToPlainString(S.t["9J4h1a"], {
        applicationName: D.applicationName
      })
    })]
  })
})