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
  var t, n, o, p, v;
  let {
    currentUser: f,
    categories: C,
    purchases: w,
    analyticsLocations: _,
    onClose: Z,
    guildId: A,
    initialSelectedNameplate: N
  } = e, I = (0, i.e7)([h.ZP], () => null != A && null != f ? h.ZP.getMember(A, f.id) : null), S = null != I ? null == (t = I.collectibles) ? true : t.nameplate : null == (n = f.collectibles) ? true : n.nameplate, {
    pendingNameplate: k
  } = (0, g.Zx)(f, A), [T, U] = (0, r.useState)(() => {
    var e;
    return null != N ? N : true !== k ? k : null == S ? null : null != (e = (0, d.Y)(w, C).find(e => {
      let {
        skuId: t
      } = e;
      return t === S.skuId
    })) ? e : null
  }), D = (0, g.Ys)({
    pendingValue: T,
    userValue: null == f || null == (o = f.collectibles) ? true : o.nameplate,
    guildValue: null == I || null == (p = I.collectibles) ? true : p.nameplate,
    guildId: A
  }), {
    product: B,
    purchase: L
  } = (0, u.Z)(null == T ? true : T.skuId), R = null != L ? (0, d.qS)(L) : (0, d.G1)(B), M = b.ZP.canUseCollectibles(f), F = true === k ? (null == T ? true : T.skuId) === (null == S ? true : S.skuId) : (null == T ? true : T.skuId) === (null == k ? true : k.skuId), G = (0, r.useCallback)(e => {
    Z(), (0, c.mK)({
      analyticsLocations: _,
      analyticsSource: s.Z.EDIT_NAMEPLATE_MODAL,
      initialProductSkuId: e
    })
  }, [_, Z]);
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
        onClick: Z
      })]
    }), (0, l.jsxs)(a.hzk, {
      "data-migration-pending": true,
      className: O.content,
      scrollbarType: "none",
      children: [(0, l.jsx)(y.Z, {
        currentUser: f,
        selectedNameplate: T,
        guildId: A,
        onSelect: U,
        onOpenShop: G
      }), (0, l.jsx)(j.Z, {
        user: f,
        guildId: A,
        nameplate: D
      })]
    }), (0, l.jsxs)(a.mzw, {
      "data-migration-pending": true,
      className: O.modalFooter,
      children: [null != L && (!R || M) || null === T ? (0, l.jsx)(a.Button, {
        variant: "primary",
        text: E.intl.string(E.t.Jh8fJz),
        onClick: () => {
          (0, g.Wh)(T, A), Z()
        },
        disabled: F
      }) : null == L && (M || !R) ? (0, l.jsx)(a.Button, {
        variant: "primary",
        onClick: () => G(null == B ? true : B.skuId),
        text: E.intl.string(E.t.fYfGgK)
      }) : (0, l.jsx)(x.Z, {
        subscriptionTier: P.Si.TIER_2,
        showGradient: !M,
        textOptions: {
          textOverride: b.ZP.isPremium(f) ? E.intl.string(E.t.KXLX7l) : M ? E.intl.string(E.t.mr4K7D) : E.intl.string(E.t.pj0XBN)
        }
      }), !M && R ? (0, l.jsx)(m.Z, {
        itemType: null != (v = null == L ? true : L.type) ? v : null == B ? true : B.type,
        onClose: Z
      }) : (0, l.jsx)(a.Button, {
        variant: "secondary",
        text: E.intl.string(E.t["ETE/oC"]),
        onClick: Z
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
        className: O.spinner,
        type: a.$jN.Type.SPINNING_CIRCLE
      }) : (0, l.jsx)(w, {
        currentUser: m,
        categories: g,
        purchases: h,
        analyticsLocations: x,
        guildId: d,
        initialSelectedNameplate: u,
        onClose: c
      })
    })
  })
}