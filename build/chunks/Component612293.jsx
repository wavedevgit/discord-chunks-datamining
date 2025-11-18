/** Chunk was on 8895 **/
/** chunk id: 612293, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => w
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
  Chunk372172 = require("./372172.js");

function O(e) {
  var t, n, o, p;
  let {
    currentUser: v,
    categories: _,
    purchases: b,
    analyticsLocations: O,
    onClose: w,
    guildId: N,
    initialSelectedNameplate: Z
  } = e, I = (0, i.e7)([x.ZP], () => null != N && null != v ? x.ZP.getMember(N, v.id) : null), A = null != I ? null == (t = I.collectibles) ? true : t.nameplate : null == (n = v.collectibles) ? true : n.nameplate, {
    pendingNameplate: k
  } = (0, g.Zx)(v, N), [S, T] = (0, r.useState)(() => {
    var e;
    return null != Z ? Z : true !== k ? k : null == A ? null : null != (e = (0, u.Y)(b, _).find(e => {
      let {
        skuId: t
      } = e;
      return t === A.skuId
    })) ? e : null
  }), U = (0, g.Ys)({
    pendingValue: S,
    userValue: null == v || null == (o = v.collectibles) ? true : o.nameplate,
    guildValue: null == I || null == (p = I.collectibles) ? true : p.nameplate,
    guildId: N
  }), {
    product: B,
    purchase: L
  } = (0, d.Z)(null == S ? true : S.skuId), R = j.ZP.canUseCollectibles(v), M = true === k ? (null == S ? true : S.skuId) === (null == A ? true : A.skuId) : (null == S ? true : S.skuId) === (null == k ? true : k.skuId), D = (0, r.useCallback)(e => {
    w(), (0, c.mK)({
      analyticsLocations: O,
      analyticsSource: a.Z.EDIT_NAMEPLATE_MODAL,
      initialProductSkuId: e
    })
  }, [O, w]);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(s.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: E.header,
      children: [(0, l.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        children: C.intl.string(C.t.BwdeM1)
      }), (0, l.jsx)(s.olH, {
        "data-migration-pending": true,
        className: E.closeButton,
        onClick: w
      })]
    }), (0, l.jsxs)(s.hzk, {
      "data-migration-pending": true,
      className: E.content,
      scrollbarType: "none",
      children: [(0, l.jsx)(P.Z, {
        currentUser: v,
        selectedNameplate: S,
        guildId: N,
        onSelect: T,
        onOpenShop: D
      }), (0, l.jsx)(y.Z, {
        user: v,
        guildId: N,
        nameplate: U
      })]
    }), (0, l.jsxs)(s.mzw, {
      "data-migration-pending": true,
      className: E.modalFooter,
      children: [null != L && (!(0, u.qS)(L) || R) || null === S ? (0, l.jsx)(s.Button, {
        variant: "primary",
        text: C.intl.string(C.t.Jh8fJz),
        onClick: () => {
          (0, g.Wh)(S, N), w()
        },
        disabled: M
      }) : null == L && (R || !(0, u.G1)(B)) ? (0, l.jsx)(s.Button, {
        variant: "primary",
        onClick: () => D(null == B ? true : B.skuId),
        text: C.intl.string(C.t.fYfGgK)
      }) : (0, l.jsx)(h.Z, {
        subscriptionTier: f.Si.TIER_2,
        showGradient: !R,
        textOptions: {
          textOverride: j.ZP.isPremium(v) ? C.intl.string(C.t.KXLX7l) : R ? C.intl.string(C.t.mr4K7D) : C.intl.string(C.t.pj0XBN)
        }
      }), !R && (0, u.G1)(B) ? (0, l.jsx)(m.Z, {
        product: B,
        onClose: w
      }) : (0, l.jsx)(s.Button, {
        variant: "secondary",
        text: C.intl.string(C.t["ETE/oC"]),
        onClick: w
      })]
    })]
  })
}

function w(e) {
  let {
    transitionState: t,
    analyticsLocations: n,
    onClose: c,
    guildId: u,
    initialSelectedNameplate: d
  } = e, m = (0, i.e7)([v.default], () => v.default.getCurrentUser()), {
    analyticsLocations: h
  } = (0, o.ZP)(n, a.Z.EDIT_NAMEPLATE_MODAL), {
    categories: g,
    purchases: x,
    isFetchingCategories: j,
    isFetchingPurchases: y
  } = (0, p.ZP)(), P = j || y && 0 === x.size;
  return ((0, r.useEffect)(() => {
    _.default.track(b.rMx.OPEN_MODAL, {
      type: b.jXE.NAMEPLATE_CUSTOMIZATION,
      location_stack: h
    })
  }, [h]), null == m) ? null : (0, l.jsx)(o.Gt, {
    value: h,
    children: (0, l.jsx)(s.Y0X, {
      transitionState: t,
      size: P ? s.CgR.DYNAMIC : s.CgR.MEDIUM,
      parentComponent: "NameplateModal",
      "data-migration-pending": true,
      children: P ? (0, l.jsx)(s.$jN, {
        className: E.spinner,
        type: s.$jN.Type.SPINNING_CIRCLE
      }) : (0, l.jsx)(O, {
        currentUser: m,
        categories: g,
        purchases: x,
        analyticsLocations: h,
        guildId: u,
        initialSelectedNameplate: d,
        onClose: c
      })
    })
  })
}