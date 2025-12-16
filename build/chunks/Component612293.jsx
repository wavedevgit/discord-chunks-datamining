/** Chunk was on 8895 **/
/** chunk id: 612293, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk335131 = require("./335131.js"),
  Chunk884697 = require("./884697.js"),
  Chunk449217 = require("./449217.js"),
  Chunk223143 = require("./223143.js"),
  Chunk269982 = require("./269982.jsx"),
  Chunk767714 = require("./767714.jsx"),
  Chunk150039 = require("./150039.js"),
  Chunk271383 = require("./271383.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk653079 = require("./653079.jsx"),
  Chunk576386 = require("./576386.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk997305 = require("./997305.js");

function O(e) {
  var t, n, o, p;
  let {
    currentUser: v,
    categories: f,
    purchases: C,
    analyticsLocations: O,
    onClose: _,
    guildId: Z,
    initialSelectedNameplate: A
  } = e, N = (0, i.e7)([h.ZP], () => null != Z && null != v ? h.ZP.getMember(Z, v.id) : null), I = null != N ? null == (t = N.collectibles) ? true : t.nameplate : null == (n = v.collectibles) ? true : n.nameplate, {
    pendingNameplate: S
  } = (0, g.Zx)(v, Z), [k, T] = (0, r.useState)(() => {
    var e;
    return null != A ? A : true !== S ? S : null == I ? null : null != (e = (0, u.Y)(C, f).find(e => {
      let {
        skuId: t
      } = e;
      return t === I.skuId
    })) ? e : null
  }), U = (0, g.Ys)({
    pendingValue: k,
    userValue: null == v || null == (o = v.collectibles) ? true : o.nameplate,
    guildValue: null == N || null == (p = N.collectibles) ? true : p.nameplate,
    guildId: Z
  }), {
    product: B,
    purchase: D
  } = (0, d.Z)(null == k ? true : k.skuId), L = null != D ? (0, u.qS)(D) : (0, u.G1)(B), R = b.ZP.canUseCollectibles(v), M = true === S ? (null == k ? true : k.skuId) === (null == I ? true : I.skuId) : (null == k ? true : k.skuId) === (null == S ? true : S.skuId), F = (0, r.useCallback)(e => {
    _(), (0, c.mK)({
      analyticsLocations: O,
      analyticsSource: s.Z.EDIT_NAMEPLATE_MODAL,
      initialProductSkuId: e
    })
  }, [O, _]);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(a.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: w.header,
      children: [(0, l.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        children: E.intl.string(E.t.BwdeM1)
      }), (0, l.jsx)(a.olH, {
        "data-migration-pending": true,
        className: w.closeButton,
        onClick: _
      })]
    }), (0, l.jsxs)(a.hzk, {
      "data-migration-pending": true,
      className: w.content,
      scrollbarType: "none",
      children: [(0, l.jsx)(y.Z, {
        currentUser: v,
        selectedNameplate: k,
        guildId: Z,
        onSelect: T,
        onOpenShop: F
      }), (0, l.jsx)(j.Z, {
        user: v,
        guildId: Z,
        nameplate: U
      })]
    }), (0, l.jsxs)(a.mzw, {
      "data-migration-pending": true,
      className: w.modalFooter,
      children: [null != D && (!L || R) || null === k ? (0, l.jsx)(a.Button, {
        variant: "primary",
        text: E.intl.string(E.t.Jh8fJz),
        onClick: () => {
          (0, g.Wh)(k, Z), _()
        },
        disabled: M
      }) : null == D && (R || !L) ? (0, l.jsx)(a.Button, {
        variant: "primary",
        onClick: () => F(null == B ? true : B.skuId),
        text: E.intl.string(E.t.fYfGgK)
      }) : (0, l.jsx)(x.Z, {
        subscriptionTier: P.Si.TIER_2,
        showGradient: !R,
        textOptions: {
          textOverride: b.ZP.isPremium(v) ? E.intl.string(E.t.KXLX7l) : R ? E.intl.string(E.t.mr4K7D) : E.intl.string(E.t.pj0XBN)
        }
      }), !R && L ? (0, l.jsx)(m.Z, {
        product: null != D ? D : B,
        onClose: _
      }) : (0, l.jsx)(a.Button, {
        variant: "secondary",
        text: E.intl.string(E.t["ETE/oC"]),
        onClick: _
      })]
    })]
  })
}

function _(e) {
  let {
    transitionState: t,
    analyticsLocations: n,
    onClose: c,
    guildId: u,
    initialSelectedNameplate: d
  } = e, m = (0, i.e7)([v.default], () => v.default.getCurrentUser()), {
    analyticsLocations: x
  } = (0, o.ZP)(n, s.Z.EDIT_NAMEPLATE_MODAL), {
    categories: g,
    purchases: h,
    isFetchingCategories: b,
    isFetchingPurchases: j
  } = (0, p.ZP)(), y = b || j && 0 === h.size;
  return ((0, r.useEffect)(() => {
    f.default.track(C.rMx.OPEN_MODAL, {
      type: C.jXE.NAMEPLATE_CUSTOMIZATION,
      location_stack: x
    })
  }, [x]), null == m) ? null : (0, l.jsx)(o.Gt, {
    value: x,
    children: (0, l.jsx)(a.Y0X, {
      transitionState: t,
      size: y ? a.CgR.DYNAMIC : a.CgR.MEDIUM,
      parentComponent: "NameplateModal",
      "data-migration-pending": true,
      children: y ? (0, l.jsx)(a.$jN, {
        className: w.spinner,
        type: a.$jN.Type.SPINNING_CIRCLE
      }) : (0, l.jsx)(O, {
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