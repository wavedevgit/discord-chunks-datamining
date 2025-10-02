/** Chunk was on 88614 **/
/** chunk id: 612293, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  default: () => j
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

function O(e) {
  var t, r;
  let {
    currentUser: c,
    categories: _,
    purchases: g,
    analyticsLocations: I,
    onClose: w,
    guildId: O,
    initialSelectedNameplate: j
  } = e, T = (0, a.e7)([b.ZP], () => null != O && null != c ? b.ZP.getMember(O, c.id) : null), Z = null != T ? null == T || null == (t = T.collectibles) ? true : t.nameplate : null == c || null == (r = c.collectibles) ? true : r.nameplate, {
    pendingNameplate: A
  } = (0, f.Zx)(c, O), [k, L] = (0, i.useState)(() => {
    var e;
    return null != j ? j : true !== A ? A : null == Z ? null : null != (e = (0, u.Y)(g, _).find(e => {
      let {
        skuId: t
      } = e;
      return t === Z.skuId
    })) ? e : null
  }), {
    product: D,
    purchase: N
  } = (0, p.Z)(null == k ? true : k.skuId), M = x.ZP.canUseCollectibles(c), U = true === A ? (null == k ? true : k.skuId) === (null == Z ? true : Z.skuId) : (null == k ? true : k.skuId) === (null == A ? true : A.skuId), B = (0, i.useCallback)(e => {
    w(), (0, d.mK)({
      analyticsLocations: I,
      analyticsSource: s.Z.EDIT_NAMEPLATE_MODAL,
      initialProductSkuId: e
    })
  }, [I, w]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(l.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: E.header,
      children: [(0, n.jsx)(l.X6q, {
        variant: "heading-lg/semibold",
        children: P.intl.string(P.t.BwdeMz)
      }), (0, n.jsx)(l.olH, {
        "data-migration-pending": true,
        className: E.closeButton,
        onClick: w
      })]
    }), (0, n.jsxs)(l.hzk, {
      "data-migration-pending": true,
      className: E.content,
      scrollbarType: "none",
      children: [(0, n.jsx)(C.Z, {
        currentUser: c,
        selectedNameplate: k,
        guildId: O,
        onSelect: L,
        onOpenShop: B
      }), (0, n.jsx)(S.Z, {
        user: c,
        guildId: O,
        selectedNameplate: k
      })]
    }), (0, n.jsxs)(l.mzw, {
      "data-migration-pending": true,
      className: E.modalFooter,
      children: [null != N && (!(0, u.qS)(N) || M) || null === k ? (0, n.jsx)(l.zxk, {
        variant: "primary",
        text: P.intl.string(P.t.Jh8fJy),
        onClick: () => {
          null != O ? (0, m.RH)(k) : (0, o.Rx)(k), w()
        },
        disabled: U
      }) : null == N && (M || !(0, u.G1)(D)) ? (0, n.jsx)(l.zxk, {
        variant: "primary",
        onClick: () => B(null == D ? true : D.skuId),
        text: P.intl.string(P.t.fYfGgI)
      }) : (0, n.jsx)(v.Z, {
        subscriptionTier: y.Si.TIER_2,
        showGradient: !M,
        textOptions: {
          textOverride: x.ZP.isPremium(c) ? P.intl.string(P.t.KXLX7u) : M ? P.intl.string(P.t.mr4K7O) : P.intl.string(P.t.pj0XBA)
        }
      }), !M && (0, u.G1)(D) ? (0, n.jsx)(h.Z, {
        product: D,
        onClose: w
      }) : (0, n.jsx)(l.zxk, {
        variant: "secondary",
        text: P.intl.string(P.t["ETE/oK"]),
        onClick: w
      })]
    })]
  })
}

function j(e) {
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
    isFetchingCategories: f,
    isFetchingPurchases: b
  } = (0, _.ZP)(), x = f || b && 0 === v.size;
  return ((0, i.useEffect)(() => {
    I.default.track(w.rMx.OPEN_MODAL, {
      type: w.jXE.NAMEPLATE_CUSTOMIZATION,
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
        className: E.spinner,
        type: l.$jN.Type.SPINNING_CIRCLE
      }) : (0, n.jsx)(O, {
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