/** Chunk was on 8895 **/
/** chunk id: 612293, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => Z
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk809206 = require("./809206.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk335131 = require("./335131.js"),
  Chunk884697 = require("./884697.js"),
  Chunk449217 = require("./449217.js"),
  Chunk223143 = require("./223143.js"),
  Chunk18438 = require("./18438.js"),
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
  Chunk886020 = require("./886020.js");

function N(e) {
  var t, n, c, m;
  let {
    currentUser: j,
    categories: y,
    purchases: C,
    analyticsLocations: N,
    onClose: Z,
    guildId: I,
    initialSelectedNameplate: A
  } = e, k = (0, i.e7)([_.ZP], () => null != I && null != j ? _.ZP.getMember(I, j.id) : null), S = null != k ? null == (t = k.collectibles) ? true : t.nameplate : null == (n = j.collectibles) ? true : n.nameplate, {
    pendingNameplate: T
  } = (0, v.Zx)(j, I), [U, B] = (0, r.useState)(() => {
    var e;
    return null != A ? A : true !== T ? T : null == S ? null : null != (e = (0, d.Y)(C, y).find(e => {
      let {
        skuId: t
      } = e;
      return t === S.skuId
    })) ? e : null
  }), L = (0, v.Ys)({
    pendingValue: U,
    userValue: null == j || null == (c = j.collectibles) ? true : c.nameplate,
    guildValue: null == k || null == (m = k.collectibles) ? true : m.nameplate,
    guildId: I
  }), {
    product: R,
    purchase: M
  } = (0, p.Z)(null == U ? true : U.skuId), D = P.ZP.canUseCollectibles(j), F = true === T ? (null == U ? true : U.skuId) === (null == S ? true : S.skuId) : (null == U ? true : U.skuId) === (null == T ? true : T.skuId), G = (0, r.useCallback)(e => {
    Z(), (0, u.mK)({
      analyticsLocations: N,
      analyticsSource: o.Z.EDIT_NAMEPLATE_MODAL,
      initialProductSkuId: e
    })
  }, [N, Z]);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(s.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: w.header,
      children: [(0, l.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        children: O.intl.string(O.t.BwdeM1)
      }), (0, l.jsx)(s.olH, {
        "data-migration-pending": true,
        className: w.closeButton,
        onClick: Z
      })]
    }), (0, l.jsxs)(s.hzk, {
      "data-migration-pending": true,
      className: w.content,
      scrollbarType: "none",
      children: [(0, l.jsx)(f.Z, {
        currentUser: j,
        selectedNameplate: U,
        guildId: I,
        onSelect: B,
        onOpenShop: G
      }), (0, l.jsx)(b.Z, {
        user: j,
        guildId: I,
        nameplate: L
      })]
    }), (0, l.jsxs)(s.mzw, {
      "data-migration-pending": true,
      className: w.modalFooter,
      children: [null != M && (!(0, d.qS)(M) || D) || null === U ? (0, l.jsx)(s.Button, {
        variant: "primary",
        text: O.intl.string(O.t.Jh8fJz),
        onClick: () => {
          null != I ? (0, x.RH)(U) : (0, a.Rx)(U), Z()
        },
        disabled: F
      }) : null == M && (D || !(0, d.G1)(R)) ? (0, l.jsx)(s.Button, {
        variant: "primary",
        onClick: () => G(null == R ? true : R.skuId),
        text: O.intl.string(O.t.fYfGgK)
      }) : (0, l.jsx)(h.Z, {
        subscriptionTier: E.Si.TIER_2,
        showGradient: !D,
        textOptions: {
          textOverride: P.ZP.isPremium(j) ? O.intl.string(O.t.KXLX7l) : D ? O.intl.string(O.t.mr4K7D) : O.intl.string(O.t.pj0XBN)
        }
      }), !D && (0, d.G1)(R) ? (0, l.jsx)(g.Z, {
        product: R,
        onClose: Z
      }) : (0, l.jsx)(s.Button, {
        variant: "secondary",
        text: O.intl.string(O.t["ETE/oC"]),
        onClick: Z
      })]
    })]
  })
}

function Z(e) {
  let {
    transitionState: t,
    analyticsLocations: n,
    onClose: a,
    guildId: u,
    initialSelectedNameplate: d
  } = e, p = (0, i.e7)([j.default], () => j.default.getCurrentUser()), {
    analyticsLocations: x
  } = (0, c.ZP)(n, o.Z.EDIT_NAMEPLATE_MODAL), {
    categories: g,
    purchases: h,
    isFetchingCategories: v,
    isFetchingPurchases: _
  } = (0, m.ZP)(), P = v || _ && 0 === h.size;
  return ((0, r.useEffect)(() => {
    y.default.track(C.rMx.OPEN_MODAL, {
      type: C.jXE.NAMEPLATE_CUSTOMIZATION,
      location_stack: x
    })
  }, [x]), null == p) ? null : (0, l.jsx)(c.Gt, {
    value: x,
    children: (0, l.jsx)(s.Y0X, {
      transitionState: t,
      size: P ? s.CgR.DYNAMIC : s.CgR.MEDIUM,
      parentComponent: "NameplateModal",
      "data-migration-pending": true,
      children: P ? (0, l.jsx)(s.$jN, {
        className: w.spinner,
        type: s.$jN.Type.SPINNING_CIRCLE
      }) : (0, l.jsx)(N, {
        currentUser: p,
        categories: g,
        purchases: h,
        analyticsLocations: x,
        guildId: u,
        initialSelectedNameplate: d,
        onClose: a
      })
    })
  })
}