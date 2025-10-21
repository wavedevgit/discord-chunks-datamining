/** Chunk was on 82897 **/
/** chunk id: 612293, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  default: () => k
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

function S(e) {
  var t, n;
  let {
    currentUser: c,
    categories: _,
    purchases: x,
    analyticsLocations: f,
    onClose: P,
    guildId: S,
    initialSelectedNameplate: k
  } = e, E = (0, a.e7)([v.ZP], () => null != S && null != c ? v.ZP.getMember(S, c.id) : null), A = null != E ? null == E || null == (t = E.collectibles) ? true : t.nameplate : null == c || null == (n = c.collectibles) ? true : n.nameplate, {
    pendingNameplate: B
  } = (0, g.Zx)(c, S), [N, T] = (0, i.useState)(() => {
    var e;
    return null != k ? k : true !== B ? B : null == A ? null : null != (e = (0, u.Y)(x, _).find(e => {
      let {
        skuId: t
      } = e;
      return t === A.skuId
    })) ? e : null
  }), {
    product: Z,
    purchase: L
  } = (0, p.Z)(null == N ? true : N.skuId), U = C.ZP.canUseCollectibles(c), D = true === B ? (null == N ? true : N.skuId) === (null == A ? true : A.skuId) : (null == N ? true : N.skuId) === (null == B ? true : B.skuId), M = (0, i.useCallback)(e => {
    P(), (0, d.mK)({
      analyticsLocations: f,
      analyticsSource: o.Z.EDIT_NAMEPLATE_MODAL,
      initialProductSkuId: e
    })
  }, [f, P]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(l.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: O.header,
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-lg/semibold",
        children: w.intl.string(w.t.BwdeMz)
      }), (0, r.jsx)(l.olH, {
        "data-migration-pending": true,
        className: O.closeButton,
        onClick: P
      })]
    }), (0, r.jsxs)(l.hzk, {
      "data-migration-pending": true,
      className: O.content,
      scrollbarType: "none",
      children: [(0, r.jsx)(y.Z, {
        currentUser: c,
        selectedNameplate: N,
        guildId: S,
        onSelect: T,
        onOpenShop: M
      }), (0, r.jsx)(I.Z, {
        user: c,
        guildId: S,
        selectedNameplate: N
      })]
    }), (0, r.jsxs)(l.mzw, {
      "data-migration-pending": true,
      className: O.modalFooter,
      children: [null != L && (!(0, u.qS)(L) || U) || null === N ? (0, r.jsx)(l.Button, {
        variant: "primary",
        text: w.intl.string(w.t.Jh8fJy),
        onClick: () => {
          null != S ? (0, m.RH)(N) : (0, s.Rx)(N), P()
        },
        disabled: D
      }) : null == L && (U || !(0, u.G1)(Z)) ? (0, r.jsx)(l.Button, {
        variant: "primary",
        onClick: () => M(null == Z ? true : Z.skuId),
        text: w.intl.string(w.t.fYfGgI)
      }) : (0, r.jsx)(b.Z, {
        subscriptionTier: j.Si.TIER_2,
        showGradient: !U,
        textOptions: {
          textOverride: C.ZP.isPremium(c) ? w.intl.string(w.t.KXLX7u) : U ? w.intl.string(w.t.mr4K7O) : w.intl.string(w.t.pj0XBA)
        }
      }), !U && (0, u.G1)(Z) ? (0, r.jsx)(h.Z, {
        product: Z,
        onClose: P
      }) : (0, r.jsx)(l.Button, {
        variant: "secondary",
        text: w.intl.string(w.t["ETE/oK"]),
        onClick: P
      })]
    })]
  })
}

function k(e) {
  let {
    transitionState: t,
    analyticsLocations: n,
    onClose: s,
    guildId: d,
    initialSelectedNameplate: u
  } = e, p = (0, a.e7)([x.default], () => x.default.getCurrentUser()), {
    analyticsLocations: m
  } = (0, c.ZP)(n, o.Z.EDIT_NAMEPLATE_MODAL), {
    categories: h,
    purchases: b,
    isFetchingCategories: g,
    isFetchingPurchases: v
  } = (0, _.ZP)(), C = g || v && 0 === b.size;
  return ((0, i.useEffect)(() => {
    f.default.track(P.rMx.OPEN_MODAL, {
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
        className: O.spinner,
        type: l.$jN.Type.SPINNING_CIRCLE
      }) : (0, r.jsx)(S, {
        currentUser: p,
        categories: h,
        purchases: b,
        analyticsLocations: m,
        guildId: d,
        initialSelectedNameplate: u,
        onClose: s
      })
    })
  })
}