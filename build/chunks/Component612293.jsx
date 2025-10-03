/** Chunk was on 68691 **/
/** chunk id: 612293, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => S
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

function k(e) {
  var t, n;
  let {
    currentUser: c,
    categories: _,
    purchases: x,
    analyticsLocations: C,
    onClose: P,
    guildId: k,
    initialSelectedNameplate: S
  } = e, A = (0, a.e7)([b.ZP], () => null != k && null != c ? b.ZP.getMember(k, c.id) : null), T = null != A ? null == A || null == (t = A.collectibles) ? true : t.nameplate : null == c || null == (n = c.collectibles) ? true : n.nameplate, {
    pendingNameplate: B
  } = (0, g.Zx)(c, k), [Z, N] = (0, i.useState)(() => {
    var e;
    return null != S ? S : true !== B ? B : null == T ? null : null != (e = (0, u.Y)(x, _).find(e => {
      let {
        skuId: t
      } = e;
      return t === T.skuId
    })) ? e : null
  }), {
    product: O,
    purchase: D
  } = (0, p.Z)(null == Z ? true : Z.skuId), L = f.ZP.canUseCollectibles(c), M = true === B ? (null == Z ? true : Z.skuId) === (null == T ? true : T.skuId) : (null == Z ? true : Z.skuId) === (null == B ? true : B.skuId), U = (0, i.useCallback)(e => {
    P(), (0, d.mK)({
      analyticsLocations: C,
      analyticsSource: s.Z.EDIT_NAMEPLATE_MODAL,
      initialProductSkuId: e
    })
  }, [C, P]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(l.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: j.header,
      children: [(0, r.jsx)(l.X6q, {
        variant: "heading-lg/semibold",
        children: E.intl.string(E.t.BwdeMz)
      }), (0, r.jsx)(l.olH, {
        "data-migration-pending": true,
        className: j.closeButton,
        onClick: P
      })]
    }), (0, r.jsxs)(l.hzk, {
      "data-migration-pending": true,
      className: j.content,
      scrollbarType: "none",
      children: [(0, r.jsx)(I.Z, {
        currentUser: c,
        selectedNameplate: Z,
        guildId: k,
        onSelect: N,
        onOpenShop: U
      }), (0, r.jsx)(w.Z, {
        user: c,
        guildId: k,
        selectedNameplate: Z
      })]
    }), (0, r.jsxs)(l.mzw, {
      "data-migration-pending": true,
      className: j.modalFooter,
      children: [null != D && (!(0, u.qS)(D) || L) || null === Z ? (0, r.jsx)(l.zxk, {
        variant: "primary",
        text: E.intl.string(E.t.Jh8fJy),
        onClick: () => {
          null != k ? (0, m.RH)(Z) : (0, o.Rx)(Z), P()
        },
        disabled: M
      }) : null == D && (L || !(0, u.G1)(O)) ? (0, r.jsx)(l.zxk, {
        variant: "primary",
        onClick: () => U(null == O ? true : O.skuId),
        text: E.intl.string(E.t.fYfGgI)
      }) : (0, r.jsx)(v.Z, {
        subscriptionTier: y.Si.TIER_2,
        showGradient: !L,
        textOptions: {
          textOverride: f.ZP.isPremium(c) ? E.intl.string(E.t.KXLX7u) : L ? E.intl.string(E.t.mr4K7O) : E.intl.string(E.t.pj0XBA)
        }
      }), !L && (0, u.G1)(O) ? (0, r.jsx)(h.Z, {
        product: O,
        onClose: P
      }) : (0, r.jsx)(l.zxk, {
        variant: "secondary",
        text: E.intl.string(E.t["ETE/oK"]),
        onClick: P
      })]
    })]
  })
}

function S(e) {
  let {
    transitionState: t,
    analyticsLocations: n,
    onClose: o,
    guildId: d,
    initialSelectedNameplate: u
  } = e, p = (0, a.e7)([x.default], () => x.default.getCurrentUser()), {
    analyticsLocations: m
  } = (0, c.ZP)(n, s.Z.EDIT_NAMEPLATE_MODAL), {
    categories: h,
    purchases: v,
    isFetchingCategories: g,
    isFetchingPurchases: b
  } = (0, _.ZP)(), f = g || b && 0 === v.size;
  return ((0, i.useEffect)(() => {
    C.default.track(P.rMx.OPEN_MODAL, {
      type: P.jXE.NAMEPLATE_CUSTOMIZATION,
      location_stack: m
    })
  }, [m]), null == p) ? null : (0, r.jsx)(c.Gt, {
    value: m,
    children: (0, r.jsx)(l.Y0X, {
      transitionState: t,
      size: f ? l.CgR.DYNAMIC : l.CgR.MEDIUM,
      parentComponent: "NameplateModal",
      "data-migration-pending": true,
      children: f ? (0, r.jsx)(l.$jN, {
        className: j.spinner,
        type: l.$jN.Type.SPINNING_CIRCLE
      }) : (0, r.jsx)(k, {
        currentUser: p,
        categories: h,
        purchases: v,
        analyticsLocations: m,
        guildId: d,
        initialSelectedNameplate: u,
        onClose: o
      })
    })
  })
}