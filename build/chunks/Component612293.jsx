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

function w(e) {
  var t, n, o, p;
  let {
    currentUser: v,
    categories: b,
    purchases: P,
    analyticsLocations: w,
    onClose: _,
    guildId: N,
    initialSelectedNameplate: Z
  } = e, I = (0, i.e7)([x.ZP], () => null != N && null != v ? x.ZP.getMember(N, v.id) : null), A = null != I ? null == (t = I.collectibles) ? true : t.nameplate : null == (n = v.collectibles) ? true : n.nameplate, {
    pendingNameplate: k
  } = (0, h.Zx)(v, N), [S, T] = (0, r.useState)(() => {
    var e;
    return null != Z ? Z : true !== k ? k : null == A ? null : null != (e = (0, d.Y)(P, b).find(e => {
      let {
        skuId: t
      } = e;
      return t === A.skuId
    })) ? e : null
  }), U = (0, h.Ys)({
    pendingValue: S,
    userValue: null == v || null == (o = v.collectibles) ? true : o.nameplate,
    guildValue: null == I || null == (p = I.collectibles) ? true : p.nameplate,
    guildId: N
  }), {
    product: B,
    purchase: L
  } = (0, u.Z)(null == S ? true : S.skuId), R = f.ZP.canUseCollectibles(v), M = true === k ? (null == S ? true : S.skuId) === (null == A ? true : A.skuId) : (null == S ? true : S.skuId) === (null == k ? true : k.skuId), D = (0, r.useCallback)(e => {
    _(), (0, c.mK)({
      analyticsLocations: w,
      analyticsSource: s.Z.EDIT_NAMEPLATE_MODAL,
      initialProductSkuId: e
    })
  }, [w, _]);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(a.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: O.header,
      children: [(0, l.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        children: E.intl.string(E.t.BwdeM1)
      }), (0, l.jsx)(a.olH, {
        "data-migration-pending": true,
        className: O.closeButton,
        onClick: _
      })]
    }), (0, l.jsxs)(a.hzk, {
      "data-migration-pending": true,
      className: O.content,
      scrollbarType: "none",
      children: [(0, l.jsx)(y.Z, {
        currentUser: v,
        selectedNameplate: S,
        guildId: N,
        onSelect: T,
        onOpenShop: D
      }), (0, l.jsx)(j.Z, {
        user: v,
        guildId: N,
        nameplate: U
      })]
    }), (0, l.jsxs)(a.mzw, {
      "data-migration-pending": true,
      className: O.modalFooter,
      children: [null != L && (!(0, d.qS)(L) || R) || null === S ? (0, l.jsx)(a.Button, {
        variant: "primary",
        text: E.intl.string(E.t.Jh8fJz),
        onClick: () => {
          (0, h.Wh)(S, N), _()
        },
        disabled: M
      }) : null == L && (R || !(0, d.G1)(B)) ? (0, l.jsx)(a.Button, {
        variant: "primary",
        onClick: () => D(null == B ? true : B.skuId),
        text: E.intl.string(E.t.fYfGgK)
      }) : (0, l.jsx)(g.Z, {
        subscriptionTier: C.Si.TIER_2,
        showGradient: !R,
        textOptions: {
          textOverride: f.ZP.isPremium(v) ? E.intl.string(E.t.KXLX7l) : R ? E.intl.string(E.t.mr4K7D) : E.intl.string(E.t.pj0XBN)
        }
      }), !R && (0, d.G1)(B) ? (0, l.jsx)(m.Z, {
        product: B,
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
    guildId: d,
    initialSelectedNameplate: u
  } = e, m = (0, i.e7)([v.default], () => v.default.getCurrentUser()), {
    analyticsLocations: g
  } = (0, o.ZP)(n, s.Z.EDIT_NAMEPLATE_MODAL), {
    categories: h,
    purchases: x,
    isFetchingCategories: f,
    isFetchingPurchases: j
  } = (0, p.ZP)(), y = f || j && 0 === x.size;
  return ((0, r.useEffect)(() => {
    b.default.track(P.rMx.OPEN_MODAL, {
      type: P.jXE.NAMEPLATE_CUSTOMIZATION,
      location_stack: g
    })
  }, [g]), null == m) ? null : (0, l.jsx)(o.Gt, {
    value: g,
    children: (0, l.jsx)(a.Y0X, {
      transitionState: t,
      size: y ? a.CgR.DYNAMIC : a.CgR.MEDIUM,
      parentComponent: "NameplateModal",
      "data-migration-pending": true,
      children: y ? (0, l.jsx)(a.$jN, {
        className: O.spinner,
        type: a.$jN.Type.SPINNING_CIRCLE
      }) : (0, l.jsx)(w, {
        currentUser: m,
        categories: h,
        purchases: x,
        analyticsLocations: g,
        guildId: d,
        initialSelectedNameplate: u,
        onClose: c
      })
    })
  })
}