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
  Chunk372172 = require("./372172.js");

function Z(e) {
  var t, n, c, m;
  let {
    currentUser: C,
    categories: j,
    purchases: f,
    analyticsLocations: Z,
    onClose: w,
    guildId: A,
    initialSelectedNameplate: k
  } = e, T = (0, r.e7)([_.ZP], () => null != A && null != C ? _.ZP.getMember(A, C.id) : null), O = null != T ? null == (t = T.collectibles) ? true : t.nameplate : null == (n = C.collectibles) ? true : n.nameplate, {
    pendingNameplate: U
  } = (0, v.Zx)(C, A), [S, B] = (0, i.useState)(() => {
    var e;
    return null != k ? k : true !== U ? U : null == O ? null : null != (e = (0, u.Y)(f, j).find(e => {
      let {
        skuId: t
      } = e;
      return t === O.skuId
    })) ? e : null
  }), L = (0, v.Ys)({
    pendingValue: S,
    userValue: null == C || null == (c = C.collectibles) ? true : c.nameplate,
    guildValue: null == T || null == (m = T.collectibles) ? true : m.nameplate,
    guildId: A
  }), {
    product: R,
    purchase: M
  } = (0, p.Z)(null == S ? true : S.skuId), D = E.ZP.canUseCollectibles(C), G = true === U ? (null == S ? true : S.skuId) === (null == O ? true : O.skuId) : (null == S ? true : S.skuId) === (null == U ? true : U.skuId), F = (0, i.useCallback)(e => {
    w(), (0, d.mK)({
      analyticsLocations: Z,
      analyticsSource: o.Z.EDIT_NAMEPLATE_MODAL,
      initialProductSkuId: e
    })
  }, [Z, w]);
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
        onClick: w
      })]
    }), (0, l.jsxs)(s.hzk, {
      "data-migration-pending": true,
      className: I.content,
      scrollbarType: "none",
      children: [(0, l.jsx)(y.Z, {
        currentUser: C,
        selectedNameplate: S,
        guildId: A,
        onSelect: B,
        onOpenShop: F
      }), (0, l.jsx)(P.Z, {
        user: C,
        guildId: A,
        nameplate: L
      })]
    }), (0, l.jsxs)(s.mzw, {
      "data-migration-pending": true,
      className: I.modalFooter,
      children: [null != M && (!(0, u.qS)(M) || D) || null === S ? (0, l.jsx)(s.Button, {
        variant: "primary",
        text: b.intl.string(b.t.Jh8fJz),
        onClick: () => {
          null != A ? (0, x.RH)(S) : (0, a.Rx)(S), w()
        },
        disabled: G
      }) : null == M && (D || !(0, u.G1)(R)) ? (0, l.jsx)(s.Button, {
        variant: "primary",
        onClick: () => F(null == R ? true : R.skuId),
        text: b.intl.string(b.t.fYfGgK)
      }) : (0, l.jsx)(g.Z, {
        subscriptionTier: N.Si.TIER_2,
        showGradient: !D,
        textOptions: {
          textOverride: E.ZP.isPremium(C) ? b.intl.string(b.t.KXLX7l) : D ? b.intl.string(b.t.mr4K7D) : b.intl.string(b.t.pj0XBN)
        }
      }), !D && (0, u.G1)(R) ? (0, l.jsx)(h.Z, {
        product: R,
        onClose: w
      }) : (0, l.jsx)(s.Button, {
        variant: "secondary",
        text: b.intl.string(b.t["ETE/oC"]),
        onClick: w
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
    j.default.track(f.rMx.OPEN_MODAL, {
      type: f.jXE.NAMEPLATE_CUSTOMIZATION,
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