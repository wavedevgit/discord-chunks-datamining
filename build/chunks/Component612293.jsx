/** Chunk was on 8473 **/
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
  Chunk372172 = require("./372172.js");

function j(e) {
  var t, r;
  let {
    currentUser: c,
    categories: _,
    purchases: g,
    analyticsLocations: y,
    onClose: P,
    guildId: j,
    initialSelectedNameplate: E
  } = e, k = (0, a.e7)([f.ZP], () => null != j && null != c ? f.ZP.getMember(j, c.id) : null), T = null != k ? null == k || null == (t = k.collectibles) ? true : t.nameplate : null == c || null == (r = c.collectibles) ? true : r.nameplate, {
    pendingNameplate: A
  } = (0, b.Zx)(c, j), [Z, D] = (0, i.useState)(() => {
    var e;
    return null != E ? E : true !== A ? A : null == T ? null : null != (e = (0, u.Y)(g, _).find(e => {
      let {
        skuId: t
      } = e;
      return t === T.skuId
    })) ? e : null
  }), {
    product: B,
    purchase: L
  } = (0, p.Z)(null == Z ? true : Z.skuId), N = x.ZP.canUseCollectibles(c), U = true === A ? (null == Z ? true : Z.skuId) === (null == T ? true : T.skuId) : (null == Z ? true : Z.skuId) === (null == A ? true : A.skuId), M = (0, i.useCallback)(e => {
    P(), (0, d.mK)({
      analyticsLocations: y,
      analyticsSource: s.Z.EDIT_NAMEPLATE_MODAL,
      initialProductSkuId: e
    })
  }, [y, P]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(l.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: S.header,
      children: [(0, n.jsx)(l.X6q, {
        variant: "heading-lg/semibold",
        children: O.intl.string(O.t.BwdeMz)
      }), (0, n.jsx)(l.olH, {
        "data-migration-pending": true,
        className: S.closeButton,
        onClick: P
      })]
    }), (0, n.jsxs)(l.hzk, {
      "data-migration-pending": true,
      className: S.content,
      scrollbarType: "none",
      children: [(0, n.jsx)(w.Z, {
        currentUser: c,
        selectedNameplate: Z,
        guildId: j,
        onSelect: D,
        onOpenShop: M
      }), (0, n.jsx)(C.Z, {
        user: c,
        guildId: j,
        selectedNameplate: Z
      })]
    }), (0, n.jsxs)(l.mzw, {
      "data-migration-pending": true,
      className: S.modalFooter,
      children: [null != L && (!(0, u.qS)(L) || N) || null === Z ? (0, n.jsx)(l.zxk, {
        variant: "primary",
        text: O.intl.string(O.t.Jh8fJy),
        onClick: () => {
          null != j ? (0, m.RH)(Z) : (0, o.Rx)(Z), P()
        },
        disabled: U
      }) : null == L && (N || !(0, u.G1)(B)) ? (0, n.jsx)(l.zxk, {
        variant: "primary",
        onClick: () => M(null == B ? true : B.skuId),
        text: O.intl.string(O.t.fYfGgI)
      }) : (0, n.jsx)(v.Z, {
        subscriptionTier: I.Si.TIER_2,
        showGradient: !N,
        textOptions: {
          textOverride: x.ZP.isPremium(c) ? O.intl.string(O.t.KXLX7u) : N ? O.intl.string(O.t.mr4K7O) : O.intl.string(O.t.pj0XBA)
        }
      }), !N && (0, u.G1)(B) ? (0, n.jsx)(h.Z, {
        product: B,
        onClose: P
      }) : (0, n.jsx)(l.zxk, {
        variant: "secondary",
        text: O.intl.string(O.t["ETE/oK"]),
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
  } = e, p = (0, a.e7)([g.default], () => g.default.getCurrentUser()), {
    analyticsLocations: m
  } = (0, c.ZP)(r, s.Z.EDIT_NAMEPLATE_MODAL), {
    categories: h,
    purchases: v,
    isFetchingCategories: b,
    isFetchingPurchases: f
  } = (0, _.ZP)(), x = b || f && 0 === v.size;
  return ((0, i.useEffect)(() => {
    y.default.track(P.rMx.OPEN_MODAL, {
      type: P.jXE.NAMEPLATE_CUSTOMIZATION,
      location_stack: m
    })
  }, [m]), null == p) ? null : (0, n.jsx)(c.Gt, {
    value: m,
    children: (0, n.jsx)(l.Y0X, {
      transitionState: t,
      size: x ? l.CgR.DYNAMIC : l.CgR.MEDIUM,
      parentComponent: "NameplateModal",
      "data-migration-pending": true,
      children: x ? (0, n.jsx)(l.$jN, {
        className: S.spinner,
        type: l.$jN.Type.SPINNING_CIRCLE
      }) : (0, n.jsx)(j, {
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