/** Chunk was on 18378 **/
/** chunk id: 612293, original params: e,t,n (module,exports,require) **/
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

function O(e) {
  var t, n;
  let {
    currentUser: c,
    categories: _,
    purchases: f,
    analyticsLocations: x,
    onClose: P,
    guildId: O,
    initialSelectedNameplate: E
  } = e, k = (0, a.e7)([b.ZP], () => null != O && null != c ? b.ZP.getMember(O, c.id) : null), A = null != k ? null == k || null == (t = k.collectibles) ? true : t.nameplate : null == c || null == (n = c.collectibles) ? true : n.nameplate, {
    pendingNameplate: T
  } = (0, g.Zx)(c, O), [Z, B] = (0, i.useState)(() => {
    var e;
    return null != E ? E : true !== T ? T : null == A ? null : null != (e = (0, u.Y)(f, _).find(e => {
      let {
        skuId: t
      } = e;
      return t === A.skuId
    })) ? e : null
  }), {
    product: N,
    purchase: L
  } = (0, p.Z)(null == Z ? true : Z.skuId), D = C.ZP.canUseCollectibles(c), M = true === T ? (null == Z ? true : Z.skuId) === (null == A ? true : A.skuId) : (null == Z ? true : Z.skuId) === (null == T ? true : T.skuId), U = (0, i.useCallback)(e => {
    P(), (0, d.mK)({
      analyticsLocations: x,
      analyticsSource: s.Z.EDIT_NAMEPLATE_MODAL,
      initialProductSkuId: e
    })
  }, [x, P]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(l.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: S.header,
      children: [(0, r.jsx)(l.X6q, {
        variant: "heading-lg/semibold",
        children: j.intl.string(j.t.BwdeMz)
      }), (0, r.jsx)(l.olH, {
        "data-migration-pending": true,
        className: S.closeButton,
        onClick: P
      })]
    }), (0, r.jsxs)(l.hzk, {
      "data-migration-pending": true,
      className: S.content,
      scrollbarType: "none",
      children: [(0, r.jsx)(I.Z, {
        currentUser: c,
        selectedNameplate: Z,
        guildId: O,
        onSelect: B,
        onOpenShop: U
      }), (0, r.jsx)(w.Z, {
        user: c,
        guildId: O,
        selectedNameplate: Z
      })]
    }), (0, r.jsxs)(l.mzw, {
      "data-migration-pending": true,
      className: S.modalFooter,
      children: [null != L && (!(0, u.qS)(L) || D) || null === Z ? (0, r.jsx)(l.zxk, {
        variant: "primary",
        text: j.intl.string(j.t.Jh8fJy),
        onClick: () => {
          null != O ? (0, m.RH)(Z) : (0, o.Rx)(Z), P()
        },
        disabled: M
      }) : null == L && (D || !(0, u.G1)(N)) ? (0, r.jsx)(l.zxk, {
        variant: "primary",
        onClick: () => U(null == N ? true : N.skuId),
        text: j.intl.string(j.t.fYfGgI)
      }) : (0, r.jsx)(v.Z, {
        subscriptionTier: y.Si.TIER_2,
        showGradient: !D,
        textOptions: {
          textOverride: C.ZP.isPremium(c) ? j.intl.string(j.t.KXLX7u) : D ? j.intl.string(j.t.mr4K7O) : j.intl.string(j.t.pj0XBA)
        }
      }), !D && (0, u.G1)(N) ? (0, r.jsx)(h.Z, {
        product: N,
        onClose: P
      }) : (0, r.jsx)(l.zxk, {
        variant: "secondary",
        text: j.intl.string(j.t["ETE/oK"]),
        onClick: P
      })]
    })]
  })
}

function E(e) {
  let {
    transitionState: t,
    analyticsLocations: n,
    onClose: o,
    guildId: d,
    initialSelectedNameplate: u
  } = e, p = (0, a.e7)([f.default], () => f.default.getCurrentUser()), {
    analyticsLocations: m
  } = (0, c.ZP)(n, s.Z.EDIT_NAMEPLATE_MODAL), {
    categories: h,
    purchases: v,
    isFetchingCategories: g,
    isFetchingPurchases: b
  } = (0, _.ZP)(), C = g || b && 0 === v.size;
  return ((0, i.useEffect)(() => {
    x.default.track(P.rMx.OPEN_MODAL, {
      type: P.jXE.NAMEPLATE_CUSTOMIZATION,
      location_stack: m
    })
  }, [m]), null == p) ? null : (0, r.jsx)(c.Gt, {
    value: m,
    children: (0, r.jsx)(l.Y0X, {
      transitionState: t,
      size: C ? l.CgR.DYNAMIC : l.CgR.MEDIUM,
      parentComponent: "NameplateModal",
      "data-migration-pending": true,
      children: C ? (0, r.jsx)(l.$jN, {
        className: S.spinner,
        type: l.$jN.Type.SPINNING_CIRCLE
      }) : (0, r.jsx)(O, {
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