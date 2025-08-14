/** Chunk was on 96910 **/
/** chunk id: 612293, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  default: () => C
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk213866 = require("./213866.js");

function C(e) {
  let {
    transitionState: t,
    analyticsLocations: r,
    onClose: o,
    guildId: u,
    initialSelectedNameplate: p
  } = e, b = (0, i.e7)([f.default], () => f.default.getCurrentUser()), {
    analyticsLocations: h
  } = (0, c.ZP)(r, s.Z.EDIT_NAMEPLATE_MODAL), {
    available: m,
    purchased: _,
    isFetchingCategories: O,
    isFetchingPurchases: C
  } = (0, d.yV)(), P = O || C && 0 === _.length;
  return (0, a.useEffect)(() => {
    v.default.track(g.rMx.OPEN_MODAL, {
      type: g.jXE.NAMEPLATE_CUSTOMIZATION,
      location_stack: h
    })
  }, [h]), null == b ? null : (0, n.jsx)(c.Gt, {
    value: h,
    children: (0, n.jsx)(l.Y0X, {
      transitionState: t,
      size: P ? l.CgR.DYNAMIC : l.CgR.MEDIUM,
      parentComponent: "NameplateModal",
      "data-migration-pending": true,
      children: P ? (0, n.jsx)(l.$jN, {
        className: y.spinner,
        type: l.$jN.Type.SPINNING_CIRCLE
      }) : (0, n.jsx)(j, {
        user: b,
        onClose: o,
        available: m,
        purchased: _,
        analyticsLocations: h,
        guildId: u,
        initialSelectedNameplate: p
      })
    })
  })
}

function j(e) {
  var t, r, c, d;
  let {
    user: f,
    available: v,
    purchased: g,
    analyticsLocations: C,
    onClose: j,
    guildId: P,
    initialSelectedNameplate: E
  } = e, x = (0, i.e7)([h.ZP], () => null != P && null != f ? h.ZP.getMember(P, f.id) : null), S = null != P ? null == x || null == (r = x.collectibles) || null == (t = r.nameplate) ? true : t.skuId : null == f || null == (d = f.collectibles) || null == (c = d.nameplate) ? true : c.skuId, w = g.find(e => e.skuId === S), {
    pendingNameplate: R
  } = (0, b.Zx)(f, P), [I, A] = (0, a.useState)(() => {
    var e;
    return true !== R ? R : null != (e = null != E ? E : w) ? e : null
  }), N = (null == I ? true : I.skuId) === (true === R ? null == w ? true : w.skuId : null == R ? true : R.skuId), [k, T] = (0, a.useState)(() => null != I && g.some(e => e.id === I.id)), D = (0, a.useCallback)(e => {
    j(), (0, u.mK)({
      analyticsLocations: C,
      analyticsSource: s.Z.EDIT_NAMEPLATE_MODAL,
      initialProductSkuId: e
    })
  }, [C, j]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(l.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: y.header,
      children: [(0, n.jsx)(l.X6q, {
        variant: "heading-lg/semibold",
        children: O.intl.string(O.t.BwdeMz)
      }), (0, n.jsx)(l.olH, {
        "data-migration-pending": true,
        className: y.closeButton,
        onClick: j
      })]
    }), (0, n.jsxs)(l.hzk, {
      "data-migration-pending": true,
      className: y.content,
      scrollbarType: "none",
      children: [(0, n.jsx)(_.Z, {
        selected: I,
        onSelect: (e, t) => {
          A(e), T(null != t && t)
        },
        onOpenShop: D,
        available: v,
        purchased: g
      }), (0, n.jsx)(m.Z, {
        user: f,
        guildId: P,
        selectedNameplate: I,
        purchased: k
      })]
    }), (0, n.jsxs)(l.mzw, {
      "data-migration-pending": true,
      className: y.modalFooter,
      children: [k || null == I ? (0, n.jsx)(l.zxk, {
        variant: "primary",
        text: O.intl.string(O.t.Jh8fJy),
        disabled: N,
        onClick: () => {
          null != P ? (0, p.RH)(I) : (0, o.Rx)(I), j()
        }
      }) : (0, n.jsx)(l.zxk, {
        variant: "primary",
        onClick: () => D(null == I ? true : I.skuId),
        text: O.intl.string(O.t.fYfGgI)
      }), (0, n.jsx)(l.zxk, {
        variant: "secondary",
        text: O.intl.string(O.t.mDcKND),
        onClick: j
      })]
    })]
  })
}