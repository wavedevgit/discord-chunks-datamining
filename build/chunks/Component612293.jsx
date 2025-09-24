/** Chunk was on 1604 **/
/** chunk id: 612293, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  default: () => E
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

function S(e) {
  var t, r;
  let {
    currentUser: c,
    categories: _,
    purchases: f,
    analyticsLocations: x,
    onClose: P,
    guildId: S,
    initialSelectedNameplate: E
  } = e, k = (0, a.e7)([g.ZP], () => null != S && null != c ? g.ZP.getMember(S, c.id) : null), A = null != k ? null == k || null == (t = k.collectibles) ? true : t.nameplate : null == c || null == (r = c.collectibles) ? true : r.nameplate, {
    pendingNameplate: D
  } = (0, b.Zx)(c, S), [T, B] = (0, i.useState)(() => {
    var e;
    return null != E ? E : true !== D ? D : null == A ? null : null != (e = (0, u.Y)(f, _).find(e => {
      let {
        skuId: t
      } = e;
      return t === A.skuId
    })) ? e : null
  }), {
    product: Z,
    purchase: N
  } = (0, p.Z)(null == T ? true : T.skuId), L = y.ZP.canUseCollectibles(c), M = true === D ? (null == T ? true : T.skuId) === (null == A ? true : A.skuId) : (null == T ? true : T.skuId) === (null == D ? true : D.skuId), U = (0, i.useCallback)(e => {
    P(), (0, d.mK)({
      analyticsLocations: x,
      analyticsSource: s.Z.EDIT_NAMEPLATE_MODAL,
      initialProductSkuId: e
    })
  }, [x, P]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(l.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: j.header,
      children: [(0, n.jsx)(l.X6q, {
        variant: "heading-lg/semibold",
        children: I.intl.string(I.t.BwdeMz)
      }), (0, n.jsx)(l.olH, {
        "data-migration-pending": true,
        className: j.closeButton,
        onClick: P
      })]
    }), (0, n.jsxs)(l.hzk, {
      "data-migration-pending": true,
      className: j.content,
      scrollbarType: "none",
      children: [(0, n.jsx)(w.Z, {
        currentUser: c,
        selectedNameplate: T,
        guildId: S,
        onSelect: B,
        onOpenShop: U
      }), (0, n.jsx)(C.Z, {
        user: c,
        guildId: S,
        selectedNameplate: T
      })]
    }), (0, n.jsxs)(l.mzw, {
      "data-migration-pending": true,
      className: j.modalFooter,
      children: [null != N && (!(0, u.qS)(N) || L) || null === T ? (0, n.jsx)(l.zxk, {
        variant: "primary",
        text: I.intl.string(I.t.Jh8fJy),
        onClick: () => {
          null != S ? (0, m.RH)(T) : (0, o.Rx)(T), P()
        },
        disabled: M
      }) : null == N && (L || !(0, u.G1)(Z)) ? (0, n.jsx)(l.zxk, {
        variant: "primary",
        onClick: () => U(null == Z ? true : Z.skuId),
        text: I.intl.string(I.t.fYfGgI)
      }) : (0, n.jsx)(v.Z, {
        subscriptionTier: O.Si.TIER_2,
        showGradient: !L,
        textOptions: {
          textOverride: y.ZP.isPremium(c) ? I.intl.string(I.t.KXLX7u) : L ? I.intl.string(I.t.mr4K7O) : I.intl.string(I.t.pj0XBA)
        }
      }), !L && (0, u.G1)(Z) ? (0, n.jsx)(h.Z, {
        product: Z,
        onClose: P
      }) : (0, n.jsx)(l.zxk, {
        variant: "secondary",
        text: I.intl.string(I.t["ETE/oK"]),
        onClick: P
      })]
    })]
  })
}

function E(e) {
  let {
    transitionState: t,
    analyticsLocations: r,
    onClose: o,
    guildId: d,
    initialSelectedNameplate: u
  } = e, p = (0, a.e7)([f.default], () => f.default.getCurrentUser()), {
    analyticsLocations: m
  } = (0, c.ZP)(r, s.Z.EDIT_NAMEPLATE_MODAL), {
    categories: h,
    purchases: v,
    isFetchingCategories: b,
    isFetchingPurchases: g
  } = (0, _.ZP)(), y = b || g && 0 === v.size;
  return ((0, i.useEffect)(() => {
    x.default.track(P.rMx.OPEN_MODAL, {
      type: P.jXE.NAMEPLATE_CUSTOMIZATION,
      location_stack: m
    })
  }, [m]), null == p) ? null : (0, n.jsx)(c.Gt, {
    value: m,
    children: (0, n.jsx)(l.Y0X, {
      transitionState: t,
      size: y ? l.CgR.DYNAMIC : l.CgR.MEDIUM,
      parentComponent: "NameplateModal",
      "data-migration-pending": true,
      children: y ? (0, n.jsx)(l.$jN, {
        className: j.spinner,
        type: l.$jN.Type.SPINNING_CIRCLE
      }) : (0, n.jsx)(S, {
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