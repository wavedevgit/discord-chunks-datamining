/** Chunk was on 49279 **/
/** chunk id: 612293, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => A
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
    categories: m,
    purchases: x,
    analyticsLocations: C,
    onClose: y,
    guildId: E,
    initialSelectedNameplate: A
  } = e, B = (0, a.e7)([v.ZP], () => null != E && null != c ? v.ZP.getMember(E, c.id) : null), S = null != B ? null == B || null == (t = B.collectibles) ? true : t.nameplate : null == c || null == (n = c.collectibles) ? true : n.nameplate, {
    pendingNameplate: T
  } = (0, b.Zx)(c, E), [N, O] = (0, r.useState)(() => {
    var e;
    return null != A ? A : true !== T ? T : null == S ? null : null != (e = (0, u.Y)(x, m).find(e => {
      let {
        skuId: t
      } = e;
      return t === S.skuId
    })) ? e : null
  }), {
    product: Z,
    purchase: L
  } = (0, p.Z)(null == N ? true : N.skuId), U = f.ZP.canUseCollectibles(c), D = true === T ? (null == N ? true : N.skuId) === (null == S ? true : S.skuId) : (null == N ? true : N.skuId) === (null == T ? true : T.skuId), M = (0, r.useCallback)(e => {
    y(), (0, d.mK)({
      analyticsLocations: C,
      analyticsSource: o.Z.EDIT_NAMEPLATE_MODAL,
      initialProductSkuId: e
    })
  }, [C, y]);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(l.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: k.header,
      children: [(0, i.jsx)(l.Heading, {
        variant: "heading-lg/semibold",
        children: w.intl.string(w.t.BwdeMz)
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
        selectedNameplate: N,
        guildId: E,
        onSelect: O,
        onOpenShop: M
      }), (0, i.jsx)(I.Z, {
        user: c,
        guildId: E,
        selectedNameplate: N
      })]
    }), (0, i.jsxs)(l.mzw, {
      "data-migration-pending": true,
      className: k.modalFooter,
      children: [null != L && (!(0, u.qS)(L) || U) || null === N ? (0, i.jsx)(l.Button, {
        variant: "primary",
        text: w.intl.string(w.t.Jh8fJy),
        onClick: () => {
          null != E ? (0, _.RH)(N) : (0, s.Rx)(N), y()
        },
        disabled: D
      }) : null == L && (U || !(0, u.G1)(Z)) ? (0, i.jsx)(l.Button, {
        variant: "primary",
        onClick: () => M(null == Z ? true : Z.skuId),
        text: w.intl.string(w.t.fYfGgI)
      }) : (0, i.jsx)(g.Z, {
        subscriptionTier: j.Si.TIER_2,
        showGradient: !U,
        textOptions: {
          textOverride: f.ZP.isPremium(c) ? w.intl.string(w.t.KXLX7u) : U ? w.intl.string(w.t.mr4K7O) : w.intl.string(w.t.pj0XBA)
        }
      }), !U && (0, u.G1)(Z) ? (0, i.jsx)(h.Z, {
        product: Z,
        onClose: y
      }) : (0, i.jsx)(l.Button, {
        variant: "secondary",
        text: w.intl.string(w.t["ETE/oK"]),
        onClick: y
      })]
    })]
  })
}

function A(e) {
  let {
    transitionState: t,
    analyticsLocations: n,
    onClose: s,
    guildId: d,
    initialSelectedNameplate: u
  } = e, p = (0, a.e7)([x.default], () => x.default.getCurrentUser()), {
    analyticsLocations: _
  } = (0, c.ZP)(n, o.Z.EDIT_NAMEPLATE_MODAL), {
    categories: h,
    purchases: g,
    isFetchingCategories: b,
    isFetchingPurchases: v
  } = (0, m.ZP)(), f = b || v && 0 === g.size;
  return ((0, r.useEffect)(() => {
    C.default.track(y.rMx.OPEN_MODAL, {
      type: y.jXE.NAMEPLATE_CUSTOMIZATION,
      location_stack: _
    })
  }, [_]), null == p) ? null : (0, i.jsx)(c.Gt, {
    value: _,
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
        analyticsLocations: _,
        guildId: d,
        initialSelectedNameplate: u,
        onClose: s
      })
    })
  })
}