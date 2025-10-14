/** Chunk was on 93210 **/
/** chunk id: 612293, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => P
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

function w(e) {
  var t, n;
  let {
    currentUser: c,
    categories: _,
    purchases: f,
    analyticsLocations: v,
    onClose: E,
    guildId: w,
    initialSelectedNameplate: P
  } = e, Z = (0, l.e7)([b.ZP], () => null != w && null != c ? b.ZP.getMember(w, c.id) : null), A = null != Z ? null == Z || null == (t = Z.collectibles) ? true : t.nameplate : null == c || null == (n = c.collectibles) ? true : n.nameplate, {
    pendingNameplate: L
  } = (0, I.Zx)(c, w), [j, U] = (0, r.useState)(() => {
    var e;
    return null != P ? P : true !== L ? L : null == A ? null : null != (e = (0, u.Y)(f, _).find(e => {
      let {
        skuId: t
      } = e;
      return t === A.skuId
    })) ? e : null
  }), {
    product: B,
    purchase: N
  } = (0, p.Z)(null == j ? true : j.skuId), O = S.ZP.canUseCollectibles(c), M = true === L ? (null == j ? true : j.skuId) === (null == A ? true : A.skuId) : (null == j ? true : j.skuId) === (null == L ? true : L.skuId), W = (0, r.useCallback)(e => {
    E(), (0, d.mK)({
      analyticsLocations: v,
      analyticsSource: o.Z.EDIT_NAMEPLATE_MODAL,
      initialProductSkuId: e
    })
  }, [v, E]);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(a.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: k.header,
      children: [(0, i.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        children: T.intl.string(T.t.BwdeMz)
      }), (0, i.jsx)(a.olH, {
        "data-migration-pending": true,
        className: k.closeButton,
        onClick: E
      })]
    }), (0, i.jsxs)(a.hzk, {
      "data-migration-pending": true,
      className: k.content,
      scrollbarType: "none",
      children: [(0, i.jsx)(C.Z, {
        currentUser: c,
        selectedNameplate: j,
        guildId: w,
        onSelect: U,
        onOpenShop: W
      }), (0, i.jsx)(x.Z, {
        user: c,
        guildId: w,
        selectedNameplate: j
      })]
    }), (0, i.jsxs)(a.mzw, {
      "data-migration-pending": true,
      className: k.modalFooter,
      children: [null != N && (!(0, u.qS)(N) || O) || null === j ? (0, i.jsx)(a.Button, {
        variant: "primary",
        text: T.intl.string(T.t.Jh8fJy),
        onClick: () => {
          null != w ? (0, h.RH)(j) : (0, s.Rx)(j), E()
        },
        disabled: M
      }) : null == N && (O || !(0, u.G1)(B)) ? (0, i.jsx)(a.Button, {
        variant: "primary",
        onClick: () => W(null == B ? true : B.skuId),
        text: T.intl.string(T.t.fYfGgI)
      }) : (0, i.jsx)(g.Z, {
        subscriptionTier: y.Si.TIER_2,
        showGradient: !O,
        textOptions: {
          textOverride: S.ZP.isPremium(c) ? T.intl.string(T.t.KXLX7u) : O ? T.intl.string(T.t.mr4K7O) : T.intl.string(T.t.pj0XBA)
        }
      }), !O && (0, u.G1)(B) ? (0, i.jsx)(m.Z, {
        product: B,
        onClose: E
      }) : (0, i.jsx)(a.Button, {
        variant: "secondary",
        text: T.intl.string(T.t["ETE/oK"]),
        onClick: E
      })]
    })]
  })
}

function P(e) {
  let {
    transitionState: t,
    analyticsLocations: n,
    onClose: s,
    guildId: d,
    initialSelectedNameplate: u
  } = e, p = (0, l.e7)([f.default], () => f.default.getCurrentUser()), {
    analyticsLocations: h
  } = (0, c.ZP)(n, o.Z.EDIT_NAMEPLATE_MODAL), {
    categories: m,
    purchases: g,
    isFetchingCategories: I,
    isFetchingPurchases: b
  } = (0, _.ZP)(), S = I || b && 0 === g.size;
  return ((0, r.useEffect)(() => {
    v.default.track(E.rMx.OPEN_MODAL, {
      type: E.jXE.NAMEPLATE_CUSTOMIZATION,
      location_stack: h
    })
  }, [h]), null == p) ? null : (0, i.jsx)(c.Gt, {
    value: h,
    children: (0, i.jsx)(a.Y0X, {
      transitionState: t,
      size: S ? a.CgR.DYNAMIC : a.CgR.MEDIUM,
      parentComponent: "NameplateModal",
      "data-migration-pending": true,
      children: S ? (0, i.jsx)(a.$jN, {
        className: k.spinner,
        type: a.$jN.Type.SPINNING_CIRCLE
      }) : (0, i.jsx)(w, {
        currentUser: p,
        categories: m,
        purchases: g,
        analyticsLocations: h,
        guildId: d,
        initialSelectedNameplate: u,
        onClose: s
      })
    })
  })
}