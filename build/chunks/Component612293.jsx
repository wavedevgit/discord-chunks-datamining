/** Chunk was on 8895 **/
/** chunk id: 612293, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => w
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

function Z(e) {
  var t, n;
  let {
    currentUser: c,
    categories: m,
    purchases: C,
    analyticsLocations: j,
    onClose: N,
    guildId: Z,
    initialSelectedNameplate: w
  } = e, A = (0, r.e7)([_.ZP], () => null != Z && null != c ? _.ZP.getMember(Z, c.id) : null), k = null != A ? null == A || null == (t = A.collectibles) ? true : t.nameplate : null == c || null == (n = c.collectibles) ? true : n.nameplate, {
    pendingNameplate: T
  } = (0, v.Zx)(c, Z), [O, U] = (0, i.useState)(() => {
    var e;
    return null != w ? w : true !== T ? T : null == k ? null : null != (e = (0, u.Y)(C, m).find(e => {
      let {
        skuId: t
      } = e;
      return t === k.skuId
    })) ? e : null
  }), {
    product: S,
    purchase: B
  } = (0, p.Z)(null == O ? true : O.skuId), L = E.ZP.canUseCollectibles(c), R = true === T ? (null == O ? true : O.skuId) === (null == k ? true : k.skuId) : (null == O ? true : O.skuId) === (null == T ? true : T.skuId), M = (0, i.useCallback)(e => {
    N(), (0, d.mK)({
      analyticsLocations: j,
      analyticsSource: o.Z.EDIT_NAMEPLATE_MODAL,
      initialProductSkuId: e
    })
  }, [j, N]);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(s.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: I.header,
      children: [(0, l.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        children: b.intl.string(b.t.BwdeM1)
      }), (0, l.jsx)(s.olH, {
        "data-migration-pending": true,
        className: I.closeButton,
        onClick: N
      })]
    }), (0, l.jsxs)(s.hzk, {
      "data-migration-pending": true,
      className: I.content,
      scrollbarType: "none",
      children: [(0, l.jsx)(y.Z, {
        currentUser: c,
        selectedNameplate: O,
        guildId: Z,
        onSelect: U,
        onOpenShop: M
      }), (0, l.jsx)(P.Z, {
        user: c,
        guildId: Z,
        selectedNameplate: O
      })]
    }), (0, l.jsxs)(s.mzw, {
      "data-migration-pending": true,
      className: I.modalFooter,
      children: [null != B && (!(0, u.qS)(B) || L) || null === O ? (0, l.jsx)(s.Button, {
        variant: "primary",
        text: b.intl.string(b.t.Jh8fJz),
        onClick: () => {
          null != Z ? (0, x.RH)(O) : (0, a.Rx)(O), N()
        },
        disabled: R
      }) : null == B && (L || !(0, u.G1)(S)) ? (0, l.jsx)(s.Button, {
        variant: "primary",
        onClick: () => M(null == S ? true : S.skuId),
        text: b.intl.string(b.t.fYfGgK)
      }) : (0, l.jsx)(g.Z, {
        subscriptionTier: f.Si.TIER_2,
        showGradient: !L,
        textOptions: {
          textOverride: E.ZP.isPremium(c) ? b.intl.string(b.t.KXLX7l) : L ? b.intl.string(b.t.mr4K7D) : b.intl.string(b.t.pj0XBN)
        }
      }), !L && (0, u.G1)(S) ? (0, l.jsx)(h.Z, {
        product: S,
        onClose: N
      }) : (0, l.jsx)(s.Button, {
        variant: "secondary",
        text: b.intl.string(b.t["ETE/oC"]),
        onClick: N
      })]
    })]
  })
}

function w(e) {
  let {
    transitionState: t,
    analyticsLocations: n,
    onClose: a,
    guildId: d,
    initialSelectedNameplate: u
  } = e, p = (0, r.e7)([C.default], () => C.default.getCurrentUser()), {
    analyticsLocations: x
  } = (0, c.ZP)(n, o.Z.EDIT_NAMEPLATE_MODAL), {
    categories: h,
    purchases: g,
    isFetchingCategories: v,
    isFetchingPurchases: _
  } = (0, m.ZP)(), E = v || _ && 0 === g.size;
  return ((0, i.useEffect)(() => {
    j.default.track(N.rMx.OPEN_MODAL, {
      type: N.jXE.NAMEPLATE_CUSTOMIZATION,
      location_stack: x
    })
  }, [x]), null == p) ? null : (0, l.jsx)(c.Gt, {
    value: x,
    children: (0, l.jsx)(s.Y0X, {
      transitionState: t,
      size: E ? s.CgR.DYNAMIC : s.CgR.MEDIUM,
      parentComponent: "NameplateModal",
      "data-migration-pending": true,
      children: E ? (0, l.jsx)(s.$jN, {
        className: I.spinner,
        type: s.$jN.Type.SPINNING_CIRCLE
      }) : (0, l.jsx)(Z, {
        currentUser: p,
        categories: h,
        purchases: g,
        analyticsLocations: x,
        guildId: d,
        initialSelectedNameplate: u,
        onClose: a
      })
    })
  })
}