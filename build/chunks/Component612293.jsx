/** Chunk was on 8895 **/
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

function b(e) {
  var t, n;
  let {
    currentUser: c,
    categories: m,
    purchases: C,
    analyticsLocations: j,
    onClose: f,
    guildId: b,
    initialSelectedNameplate: A
  } = e, w = (0, r.e7)([_.ZP], () => null != b && null != c ? _.ZP.getMember(b, c.id) : null), k = null != w ? null == w || null == (t = w.collectibles) ? true : t.nameplate : null == c || null == (n = c.collectibles) ? true : n.nameplate, {
    pendingNameplate: T
  } = (0, v.Zx)(c, b), [O, U] = (0, i.useState)(() => {
    var e;
    return null != A ? A : true !== T ? T : null == k ? null : null != (e = (0, d.Y)(C, m).find(e => {
      let {
        skuId: t
      } = e;
      return t === k.skuId
    })) ? e : null
  }), {
    product: S,
    purchase: L
  } = (0, p.Z)(null == O ? true : O.skuId), M = y.ZP.canUseCollectibles(c), B = true === T ? (null == O ? true : O.skuId) === (null == k ? true : k.skuId) : (null == O ? true : O.skuId) === (null == T ? true : T.skuId), R = (0, i.useCallback)(e => {
    f(), (0, u.mK)({
      analyticsLocations: j,
      analyticsSource: o.Z.EDIT_NAMEPLATE_MODAL,
      initialProductSkuId: e
    })
  }, [j, f]);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(s.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: I.header,
      children: [(0, l.jsx)(s.X6q, {
        variant: "heading-lg/semibold",
        children: Z.intl.string(Z.t.BwdeMz)
      }), (0, l.jsx)(s.olH, {
        "data-migration-pending": true,
        className: I.closeButton,
        onClick: f
      })]
    }), (0, l.jsxs)(s.hzk, {
      "data-migration-pending": true,
      className: I.content,
      scrollbarType: "none",
      children: [(0, l.jsx)(E.Z, {
        currentUser: c,
        selectedNameplate: O,
        guildId: b,
        onSelect: U,
        onOpenShop: R
      }), (0, l.jsx)(P.Z, {
        user: c,
        guildId: b,
        selectedNameplate: O
      })]
    }), (0, l.jsxs)(s.mzw, {
      "data-migration-pending": true,
      className: I.modalFooter,
      children: [null != L && (!(0, d.qS)(L) || M) || null === O ? (0, l.jsx)(s.zxk, {
        variant: "primary",
        text: Z.intl.string(Z.t.Jh8fJy),
        onClick: () => {
          null != b ? (0, x.RH)(O) : (0, a.Rx)(O), f()
        },
        disabled: B
      }) : null == L && (M || !(0, d.G1)(S)) ? (0, l.jsx)(s.zxk, {
        variant: "primary",
        onClick: () => R(null == S ? true : S.skuId),
        text: Z.intl.string(Z.t.fYfGgI)
      }) : (0, l.jsx)(g.Z, {
        subscriptionTier: N.Si.TIER_2,
        showGradient: !M,
        textOptions: {
          textOverride: y.ZP.isPremium(c) ? Z.intl.string(Z.t.KXLX7u) : M ? Z.intl.string(Z.t.mr4K7O) : Z.intl.string(Z.t.pj0XBA)
        }
      }), !M && (0, d.G1)(S) ? (0, l.jsx)(h.Z, {
        product: S,
        onClose: f
      }) : (0, l.jsx)(s.zxk, {
        variant: "secondary",
        text: Z.intl.string(Z.t["ETE/oK"]),
        onClick: f
      })]
    })]
  })
}

function A(e) {
  let {
    transitionState: t,
    analyticsLocations: n,
    onClose: a,
    guildId: u,
    initialSelectedNameplate: d
  } = e, p = (0, r.e7)([C.default], () => C.default.getCurrentUser()), {
    analyticsLocations: x
  } = (0, c.ZP)(n, o.Z.EDIT_NAMEPLATE_MODAL), {
    categories: h,
    purchases: g,
    isFetchingCategories: v,
    isFetchingPurchases: _
  } = (0, m.ZP)(), y = v || _ && 0 === g.size;
  return ((0, i.useEffect)(() => {
    j.default.track(f.rMx.OPEN_MODAL, {
      type: f.jXE.NAMEPLATE_CUSTOMIZATION,
      location_stack: x
    })
  }, [x]), null == p) ? null : (0, l.jsx)(c.Gt, {
    value: x,
    children: (0, l.jsx)(s.Y0X, {
      transitionState: t,
      size: y ? s.CgR.DYNAMIC : s.CgR.MEDIUM,
      parentComponent: "NameplateModal",
      "data-migration-pending": true,
      children: y ? (0, l.jsx)(s.$jN, {
        className: I.spinner,
        type: s.$jN.Type.SPINNING_CIRCLE
      }) : (0, l.jsx)(b, {
        currentUser: p,
        categories: h,
        purchases: g,
        analyticsLocations: x,
        guildId: u,
        initialSelectedNameplate: d,
        onClose: a
      })
    })
  })
}