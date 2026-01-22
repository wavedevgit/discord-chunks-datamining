/** Chunk was on 23321 **/
/** chunk id: 813248, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => N
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

function C(e) {
  var t, l, c, m, A;
  let {
    currentUser: h,
    categories: v,
    purchases: C,
    analyticsLocations: N,
    onClose: P,
    guildId: I,
    initialSelectedNameplate: w
  } = e, T = (0, i.bG)([b.Ay], () => null != I && null != h ? b.Ay.getMember(I, h.id) : null), k = null != T ? null == (l = T.collectibles) ? true : l.nameplate : null == (c = h.collectibles) ? true : c.nameplate, {
    pendingNameplate: S
  } = (0, g.rv)(h, I), [U, L] = (0, r.useState)(() => {
    var e;
    return null != w ? w : true !== S ? S : null == k ? null : null != (e = (0, u.zd)(C, v).find(e => {
      let {
        skuId: t
      } = e;
      return t === k.skuId
    })) ? e : null
  }), M = (0, g.lw)({
    pendingValue: U,
    userValue: null == h || null == (m = h.collectibles) ? true : m.nameplate,
    guildValue: null == T || null == (A = T.collectibles) ? true : A.nameplate,
    guildId: I
  }), {
    product: R,
    purchase: D
  } = (0, d.A)(null == U ? true : U.skuId), H = null != D ? (0, u.gA)(D) : (0, u.G0)(R), G = f.Ay.canUseCollectibles(h), z = true === S ? (null == U ? true : U.skuId) === (null == k ? true : k.skuId) : (null == U ? true : U.skuId) === (null == S ? true : S.skuId), F = (0, r.useCallback)(e => {
    P(), (0, o.Cz)({
      analyticsLocations: N,
      analyticsSource: a.A.EDIT_NAMEPLATE_MODAL,
      initialProductSkuId: e
    })
  }, [N, P]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(s.rQ0, {
      "data-migration-pending": true,
      separator: false,
      className: E.wx,
      children: [(0, n.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        children: O.intl.string(O.t.BwdeM1)
      }), (0, n.jsx)(s.s_y, {
        "data-migration-pending": true,
        className: E.b,
        onClick: P
      })]
    }), (0, n.jsxs)(s.$mQ, {
      "data-migration-pending": true,
      className: E.Qs,
      scrollbarType: "none",
      children: [(0, n.jsx)(y.A, {
        currentUser: h,
        selectedNameplate: U,
        guildId: I,
        onSelect: L,
        onOpenShop: F
      }), (0, n.jsx)(j.A, {
        user: h,
        guildId: I,
        nameplate: M
      })]
    }), (0, n.jsxs)(s.jlY, {
      "data-migration-pending": true,
      className: E.Hx,
      children: [null != D && (!H || G) || null === U ? (0, n.jsx)(s.Button, {
        variant: "primary",
        text: O.intl.string(O.t.Jh8fJz),
        onClick: () => {
          (0, g.pX)(U, I), P()
        },
        disabled: z
      }) : null == D && (G || !H) ? (0, n.jsx)(s.Button, {
        variant: "primary",
        onClick: () => F(null == R ? true : R.skuId),
        text: O.intl.string(O.t.fYfGgK)
      }) : (0, n.jsx)(x.A, {
        subscriptionTier: _.pe.TIER_2,
        showGradient: !G,
        textOptions: {
          textOverride: f.Ay.isPremium(h) ? O.intl.string(O.t.KXLX7l) : G ? O.intl.string(O.t.mr4K7D) : O.intl.string(O.t.pj0XBN)
        }
      }), !G && H ? (0, n.jsx)(p.A, {
        itemType: null != (t = null == D ? true : D.type) ? t : null == R ? true : R.type,
        onClose: P
      }) : (0, n.jsx)(s.Button, {
        variant: "secondary",
        text: O.intl.string(O.t["ETE/oC"]),
        onClick: P
      })]
    })]
  })
}

function N(e) {
  let {
    transitionState: t,
    analyticsLocations: l,
    onClose: o,
    guildId: u,
    initialSelectedNameplate: d
  } = e, p = (0, i.bG)([A.default], () => A.default.getCurrentUser()), {
    analyticsLocations: x
  } = (0, c.Ay)(l, a.A.EDIT_NAMEPLATE_MODAL), {
    categories: g,
    purchases: b,
    isFetchingCategories: f,
    isFetchingPurchases: j
  } = (0, m.Ay)(), y = f || j && 0 === b.size;
  return ((0, r.useEffect)(() => {
    h.default.track(v.HAw.OPEN_MODAL, {
      type: v.JJy.NAMEPLATE_CUSTOMIZATION,
      location_stack: x
    })
  }, [x]), null == p) ? null : (0, n.jsx)(c.f5, {
    value: x,
    children: (0, n.jsx)(s.EOs, {
      transitionState: t,
      size: y ? s.rIJ.DYNAMIC : s.rIJ.MEDIUM,
      parentComponent: "NameplateModal",
      "data-migration-pending": true,
      children: y ? (0, n.jsx)(s.y$y, {
        className: E.u1,
        type: s.y$y.Type.SPINNING_CIRCLE
      }) : (0, n.jsx)(C, {
        currentUser: p,
        categories: g,
        purchases: b,
        analyticsLocations: x,
        guildId: u,
        initialSelectedNameplate: d,
        onClose: o
      })
    })
  })
}