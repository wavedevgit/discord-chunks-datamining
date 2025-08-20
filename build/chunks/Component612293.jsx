/** Chunk was on 71387 **/
/** chunk id: 612293, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  default: () => _
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

function _(e) {
  let {
    transitionState: t,
    analyticsLocations: r,
    onClose: o,
    guildId: u,
    initialSelectedNameplate: p
  } = e, v = (0, a.e7)([b.default], () => b.default.getCurrentUser()), {
    analyticsLocations: f
  } = (0, c.ZP)(r, s.Z.EDIT_NAMEPLATE_MODAL), {
    available: g,
    purchased: h,
    isFetchingCategories: y,
    isFetchingPurchases: _
  } = (0, d.yV)(), x = y || _ && 0 === h.length;
  return (0, i.useEffect)(() => {
    m.default.track(O.rMx.OPEN_MODAL, {
      type: O.jXE.NAMEPLATE_CUSTOMIZATION,
      location_stack: f
    })
  }, [f]), null == v ? null : (0, n.jsx)(c.Gt, {
    value: f,
    children: (0, n.jsx)(l.Y0X, {
      transitionState: t,
      size: x ? l.CgR.DYNAMIC : l.CgR.MEDIUM,
      parentComponent: "NameplateModal",
      "data-migration-pending": true,
      children: x ? (0, n.jsx)(l.$jN, {
        className: j.spinner,
        type: l.$jN.Type.SPINNING_CIRCLE
      }) : (0, n.jsx)(P, {
        user: v,
        onClose: o,
        available: g,
        purchased: h,
        analyticsLocations: f,
        guildId: u,
        initialSelectedNameplate: p
      })
    })
  })
}

function P(e) {
  var t, r, c, d;
  let {
    user: b,
    available: m,
    purchased: O,
    analyticsLocations: _,
    onClose: P,
    guildId: x,
    initialSelectedNameplate: w
  } = e, C = (0, a.e7)([f.ZP], () => null != x && null != b ? f.ZP.getMember(x, b.id) : null), S = null == C || null == (r = C.collectibles) || null == (t = r.nameplate) ? true : t.skuId, I = null == b || null == (d = b.collectibles) || null == (c = d.nameplate) ? true : c.skuId, N = null != x ? S : I, k = O.find(e => e.skuId === N), {
    pendingNameplate: E
  } = (0, v.Zx)(b, x), [T, D] = (0, i.useState)(() => {
    var e;
    return true !== E ? E : null != (e = null != w ? w : k) ? e : null
  }), A = (null == T ? true : T.skuId) === (true === E ? null == k ? true : k.skuId : null == E ? true : E.skuId), [Z, R] = (0, i.useState)(() => null != T && O.some(e => e.id === T.id)), M = (0, i.useCallback)(e => {
    P(), (0, u.mK)({
      analyticsLocations: _,
      analyticsSource: s.Z.EDIT_NAMEPLATE_MODAL,
      initialProductSkuId: e
    })
  }, [_, P]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(l.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: j.header,
      children: [(0, n.jsx)(l.X6q, {
        variant: "heading-lg/semibold",
        children: y.intl.string(y.t.BwdeMz)
      }), (0, n.jsx)(l.olH, {
        "data-migration-pending": true,
        className: j.closeButton,
        onClick: P
      })]
    }), (0, n.jsxs)(l.hzk, {
      "data-migration-pending": true,
      className: j.content,
      scrollbarType: "none",
      children: [(0, n.jsx)(h.Z, {
        selected: T,
        onSelect: (e, t) => {
          D(e), R(null != t && t)
        },
        onOpenShop: M,
        available: m,
        purchased: O,
        isPerGuild: null != x
      }), (0, n.jsx)(g.Z, {
        user: b,
        guildId: x,
        selectedNameplate: T,
        purchased: Z
      })]
    }), (0, n.jsxs)(l.mzw, {
      "data-migration-pending": true,
      className: j.modalFooter,
      children: [Z || null == T ? (0, n.jsx)(l.zxk, {
        variant: "primary",
        text: y.intl.string(y.t.Jh8fJy),
        disabled: A,
        onClick: () => {
          null != x ? (0, p.RH)(T) : (0, o.Rx)(T), P()
        }
      }) : (0, n.jsx)(l.zxk, {
        variant: "primary",
        onClick: () => M(null == T ? true : T.skuId),
        text: y.intl.string(y.t.fYfGgI)
      }), (0, n.jsx)(l.zxk, {
        variant: "secondary",
        text: y.intl.string(y.t.mDcKND),
        onClick: P
      })]
    })]
  })
}