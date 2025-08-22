/** Chunk was on 8895 **/
/** chunk id: 612293, original params: e,l,n (module,exports,require) **/
require.d(exports, {
  default: () => y
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
  Chunk18438 = require("./18438.js"),
  Chunk150039 = require("./150039.js"),
  Chunk271383 = require("./271383.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk653079 = require("./653079.jsx"),
  Chunk576386 = require("./576386.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk886020 = require("./886020.js");

function y(e) {
  let {
    transitionState: l,
    analyticsLocations: n,
    onClose: r,
    guildId: c,
    initialSelectedNameplate: x
  } = e, p = (0, s.e7)([v.default], () => v.default.getCurrentUser()), {
    analyticsLocations: m
  } = (0, d.ZP)(n, o.Z.EDIT_NAMEPLATE_MODAL), {
    available: j,
    purchased: g,
    isFetchingCategories: C,
    isFetchingPurchases: y
  } = (0, u.yV)(), I = C || y && 0 === g.length;
  return (0, i.useEffect)(() => {
    h.default.track(_.rMx.OPEN_MODAL, {
      type: _.jXE.NAMEPLATE_CUSTOMIZATION,
      location_stack: m
    })
  }, [m]), null == p ? null : (0, t.jsx)(d.Gt, {
    value: m,
    children: (0, t.jsx)(a.Y0X, {
      transitionState: l,
      size: I ? a.CgR.DYNAMIC : a.CgR.MEDIUM,
      parentComponent: "NameplateModal",
      "data-migration-pending": true,
      children: I ? (0, t.jsx)(a.$jN, {
        className: N.spinner,
        type: a.$jN.Type.SPINNING_CIRCLE
      }) : (0, t.jsx)(k, {
        user: p,
        onClose: r,
        available: j,
        purchased: g,
        analyticsLocations: m,
        guildId: c,
        initialSelectedNameplate: x
      })
    })
  })
}

function k(e) {
  var l, n, d, u;
  let {
    user: v,
    available: h,
    purchased: _,
    analyticsLocations: y,
    onClose: k,
    guildId: I,
    initialSelectedNameplate: f
  } = e, b = (0, s.e7)([m.ZP], () => null != I && null != v ? m.ZP.getMember(I, v.id) : null), w = null == b || null == (n = b.collectibles) || null == (l = n.nameplate) ? true : l.skuId, B = null == v || null == (u = v.collectibles) || null == (d = u.nameplate) ? true : d.skuId, Z = null != I ? w : B, E = _.find(e => e.skuId === Z), {
    pendingNameplate: M
  } = (0, p.Zx)(v, I), [P, D] = (0, i.useState)(() => {
    var e;
    return true !== M ? M : null != (e = null != f ? f : E) ? e : null
  }), T = (null == P ? true : P.skuId) === (true === M ? null == E ? true : E.skuId : null == M ? true : M.skuId), [A, O] = (0, i.useState)(() => null != P && _.some(e => e.id === P.id)), S = (0, i.useCallback)(e => {
    k(), (0, c.mK)({
      analyticsLocations: y,
      analyticsSource: o.Z.EDIT_NAMEPLATE_MODAL,
      initialProductSkuId: e
    })
  }, [y, k]);
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsxs)(a.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: N.header,
      children: [(0, t.jsx)(a.X6q, {
        variant: "heading-lg/semibold",
        children: C.intl.string(C.t.BwdeMz)
      }), (0, t.jsx)(a.olH, {
        "data-migration-pending": true,
        className: N.closeButton,
        onClick: k
      })]
    }), (0, t.jsxs)(a.hzk, {
      "data-migration-pending": true,
      className: N.content,
      scrollbarType: "none",
      children: [(0, t.jsx)(g.Z, {
        selected: P,
        onSelect: (e, l) => {
          D(e), O(null != l && l)
        },
        onOpenShop: S,
        available: h,
        purchased: _,
        isPerGuild: null != I
      }), (0, t.jsx)(j.Z, {
        user: v,
        guildId: I,
        selectedNameplate: P,
        purchased: A
      })]
    }), (0, t.jsxs)(a.mzw, {
      "data-migration-pending": true,
      className: N.modalFooter,
      children: [A || null == P ? (0, t.jsx)(a.zxk, {
        variant: "primary",
        text: C.intl.string(C.t.Jh8fJy),
        disabled: T,
        onClick: () => {
          null != I ? (0, x.RH)(P) : (0, r.Rx)(P), k()
        }
      }) : (0, t.jsx)(a.zxk, {
        variant: "primary",
        onClick: () => S(null == P ? true : P.skuId),
        text: C.intl.string(C.t.fYfGgI)
      }), (0, t.jsx)(a.zxk, {
        variant: "secondary",
        text: C.intl.string(C.t.mDcKND),
        onClick: k
      })]
    })]
  })
}