/** Chunk was on 23321 **/
/** chunk id: 813248, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => w
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk979286 = require("./979286.js"),
  Chunk993408 = require("./993408.js"),
  Chunk821701 = require("./821701.js"),
  Chunk841702 = require("./841702.js"),
  Chunk571827 = require("./571827.jsx"),
  Chunk465794 = require("./465794.jsx"),
  Chunk919395 = require("./919395.js"),
  Chunk696451 = require("./696451.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk35950 = require("./35950.jsx"),
  Chunk272104 = require("./272104.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk106866 = require("./106866.js");

function E(e) {
  var t, l, o, p, A;
  let {
    currentUser: _,
    categories: b,
    purchases: E,
    analyticsLocations: w,
    onClose: P,
    guildId: N,
    initialSelectedNameplate: I
  } = e, T = (0, i.bG)([h.Ay], () => null != N && null != _ ? h.Ay.getMember(N, _.id) : null), k = null != T ? null == (l = T.collectibles) ? true : l.nameplate : null == (o = _.collectibles) ? true : o.nameplate, {
    pendingNameplate: S
  } = (0, g.rv)(_, N), [U, L] = (0, r.useState)(() => {
    var e;
    return null != I ? I : true !== S ? S : null == k ? null : null != (e = (0, u.zd)(E, b).find(e => {
      let {
        skuId: t
      } = e;
      return t === k.skuId
    })) ? e : null
  }), R = (0, g.lw)({
    pendingValue: U,
    userValue: null == _ || null == (p = _.collectibles) ? true : p.nameplate,
    guildValue: null == T || null == (A = T.collectibles) ? true : A.nameplate,
    guildId: N
  }), {
    product: D,
    purchase: M
  } = (0, d.A)(null == U ? true : U.skuId), H = null != M ? (0, u.gA)(M) : (0, u.G0)(D), G = v.Ay.canUseCollectibles(_), z = true === S ? (null == U ? true : U.skuId) === (null == k ? true : k.skuId) : (null == U ? true : U.skuId) === (null == S ? true : S.skuId), B = (0, r.useCallback)(e => {
    P(), (0, c.Cz)({
      analyticsLocations: w,
      analyticsSource: a.A.EDIT_NAMEPLATE_MODAL,
      initialProductSkuId: e
    })
  }, [w, P]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(s.rQ0, {
      "data-migration-pending": true,
      separator: false,
      className: C.wx,
      children: [(0, n.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        children: O.intl.string(O.t.BwdeM1)
      }), (0, n.jsx)(s.s_y, {
        "data-migration-pending": true,
        className: C.b,
        onClick: P
      })]
    }), (0, n.jsxs)(s.$mQ, {
      "data-migration-pending": true,
      className: C.Qs,
      scrollbarType: "none",
      children: [(0, n.jsx)(j.A, {
        currentUser: _,
        selectedNameplate: U,
        guildId: N,
        onSelect: L,
        onOpenShop: B
      }), (0, n.jsx)(y.A, {
        user: _,
        guildId: N,
        nameplate: R
      })]
    }), (0, n.jsxs)(s.jlY, {
      "data-migration-pending": true,
      className: C.Hx,
      children: [null != M && (!H || G) || null === U ? (0, n.jsx)(s.Button, {
        variant: "primary",
        text: O.intl.string(O.t.Jh8fJz),
        onClick: () => {
          (0, g.pX)(U, N), P()
        },
        disabled: z
      }) : null == M && (G || !H) ? (0, n.jsx)(s.Button, {
        variant: "primary",
        onClick: () => B(null == D ? true : D.skuId),
        text: O.intl.string(O.t.fYfGgK)
      }) : (0, n.jsx)(x.A, {
        subscriptionTier: f.pe.TIER_2,
        showGradient: !G,
        textOptions: {
          textOverride: v.Ay.isPremium(_) ? O.intl.string(O.t.KXLX7l) : G ? O.intl.string(O.t.mr4K7D) : O.intl.string(O.t.pj0XBN)
        }
      }), !G && H ? (0, n.jsx)(m.A, {
        itemType: null != (t = null == M ? true : M.type) ? t : null == D ? true : D.type,
        onClose: P
      }) : (0, n.jsx)(s.Button, {
        variant: "secondary",
        text: O.intl.string(O.t["ETE/oC"]),
        onClick: P
      })]
    })]
  })
}

function w(e) {
  let {
    transitionState: t,
    analyticsLocations: l,
    onClose: c,
    guildId: u,
    initialSelectedNameplate: d
  } = e, m = (0, i.bG)([A.default], () => A.default.getCurrentUser()), {
    analyticsLocations: x
  } = (0, o.Ay)(l, a.A.EDIT_NAMEPLATE_MODAL), {
    categories: g,
    purchases: h,
    isFetchingCategories: v,
    isFetchingPurchases: y
  } = (0, p.Ay)(), j = v || y && 0 === h.size;
  return ((0, r.useEffect)(() => {
    _.default.track(b.HAw.OPEN_MODAL, {
      type: b.JJy.NAMEPLATE_CUSTOMIZATION,
      location_stack: x
    })
  }, [x]), null == m) ? null : (0, n.jsx)(o.f5, {
    value: x,
    children: (0, n.jsx)(s.EOs, {
      transitionState: t,
      size: j ? s.rIJ.DYNAMIC : s.rIJ.MEDIUM,
      parentComponent: "NameplateModal",
      "data-migration-pending": true,
      children: j ? (0, n.jsx)(s.y$y, {
        className: C.u1,
        type: s.y$y.Type.SPINNING_CIRCLE
      }) : (0, n.jsx)(E, {
        currentUser: m,
        categories: g,
        purchases: h,
        analyticsLocations: x,
        guildId: u,
        initialSelectedNameplate: d,
        onClose: c
      })
    })
  })
}