/** Chunk was on 57902 **/
/** chunk id: 612293, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => T
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

function E(e) {
  var t, n;
  let {
    currentUser: c,
    categories: _,
    purchases: x,
    analyticsLocations: C,
    onClose: y,
    guildId: E,
    initialSelectedNameplate: T
  } = e, S = (0, a.e7)([v.ZP], () => null != E && null != c ? v.ZP.getMember(E, c.id) : null), A = null != S ? null == S || null == (t = S.collectibles) ? true : t.nameplate : null == c || null == (n = c.collectibles) ? true : n.nameplate, {
    pendingNameplate: N
  } = (0, b.Zx)(c, E), [B, Z] = (0, r.useState)(() => {
    var e;
    return null != T ? T : true !== N ? N : null == A ? null : null != (e = (0, u.Y)(x, _).find(e => {
      let {
        skuId: t
      } = e;
      return t === A.skuId
    })) ? e : null
  }), {
    product: O,
    purchase: L
  } = (0, p.Z)(null == B ? true : B.skuId), U = f.ZP.canUseCollectibles(c), D = true === N ? (null == B ? true : B.skuId) === (null == A ? true : A.skuId) : (null == B ? true : B.skuId) === (null == N ? true : N.skuId), M = (0, r.useCallback)(e => {
    y(), (0, d.mK)({
      analyticsLocations: C,
      analyticsSource: s.Z.EDIT_NAMEPLATE_MODAL,
      initialProductSkuId: e
    })
  }, [C, y]);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(l.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: k.header,
      children: [(0, i.jsx)(l.X6q, {
        variant: "heading-lg/semibold",
        children: j.intl.string(j.t.BwdeMz)
      }), (0, i.jsx)(l.olH, {
        "data-migration-pending": true,
        className: k.closeButton,
        onClick: y
      })]
    }), (0, i.jsxs)(l.hzk, {
      "data-migration-pending": true,
      className: k.content,
      scrollbarType: "none",
      children: [(0, i.jsx)(P.Z, {
        currentUser: c,
        selectedNameplate: B,
        guildId: E,
        onSelect: Z,
        onOpenShop: M
      }), (0, i.jsx)(I.Z, {
        user: c,
        guildId: E,
        selectedNameplate: B
      })]
    }), (0, i.jsxs)(l.mzw, {
      "data-migration-pending": true,
      className: k.modalFooter,
      children: [null != L && (!(0, u.qS)(L) || U) || null === B ? (0, i.jsx)(l.zxk, {
        variant: "primary",
        text: j.intl.string(j.t.Jh8fJy),
        onClick: () => {
          null != E ? (0, m.RH)(B) : (0, o.Rx)(B), y()
        },
        disabled: D
      }) : null == L && (U || !(0, u.G1)(O)) ? (0, i.jsx)(l.zxk, {
        variant: "primary",
        onClick: () => M(null == O ? true : O.skuId),
        text: j.intl.string(j.t.fYfGgI)
      }) : (0, i.jsx)(g.Z, {
        subscriptionTier: w.Si.TIER_2,
        showGradient: !U,
        textOptions: {
          textOverride: f.ZP.isPremium(c) ? j.intl.string(j.t.KXLX7u) : U ? j.intl.string(j.t.mr4K7O) : j.intl.string(j.t.pj0XBA)
        }
      }), !U && (0, u.G1)(O) ? (0, i.jsx)(h.Z, {
        product: O,
        onClose: y
      }) : (0, i.jsx)(l.zxk, {
        variant: "secondary",
        text: j.intl.string(j.t["ETE/oK"]),
        onClick: y
      })]
    })]
  })
}

function T(e) {
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
    purchases: g,
    isFetchingCategories: b,
    isFetchingPurchases: v
  } = (0, _.ZP)(), f = b || v && 0 === g.size;
  return ((0, r.useEffect)(() => {
    C.default.track(y.rMx.OPEN_MODAL, {
      type: y.jXE.NAMEPLATE_CUSTOMIZATION,
      location_stack: m
    })
  }, [m]), null == p) ? null : (0, i.jsx)(c.Gt, {
    value: m,
    children: (0, i.jsx)(l.Y0X, {
      transitionState: t,
      size: f ? l.CgR.DYNAMIC : l.CgR.MEDIUM,
      parentComponent: "NameplateModal",
      "data-migration-pending": true,
      children: f ? (0, i.jsx)(l.$jN, {
        className: k.spinner,
        type: l.$jN.Type.SPINNING_CIRCLE
      }) : (0, i.jsx)(E, {
        currentUser: p,
        categories: h,
        purchases: g,
        analyticsLocations: m,
        guildId: d,
        initialSelectedNameplate: u,
        onClose: o
      })
    })
  })
}