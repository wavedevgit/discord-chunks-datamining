/** Chunk was on web.js **/
/** chunk id: 325808, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk538534 = require("./538534.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk825209 = require("./825209.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk131951 = require("./131951.js"),
  Chunk358085 = require("./358085.js"),
  Chunk383451 = require("./383451.js"),
  Chunk313789 = require("./313789.js"),
  Chunk947889 = require("./947889.js"),
  Chunk962100 = require("./962100.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk184767 = require("./184767.js"),
  Chunk149715 = require("./149715.js"),
  Chunk197571 = require("./197571.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      S(e, t, n[t])
    })
  }
  return e
}
let C = !Chunk358085.isPlatformEmbedded,
  N = (0, Chunk313201.hQ)();

function R(e) {
  return e >= 1e3 ? (e /= 1e3, "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "\xa0ms")
}

function P(e) {
  let t, {
      inputMode: n
    } = e,
    {
      shortcut: i,
      delay: a,
      pttLatchingEnabled: l
    } = (0, s.cj)([p.Z], () => p.Z.getModeOptions()),
    {
      enableLatching: f
    } = (0, m.H)({
      location: "PTTTools"
    }),
    S = (0, E.Z)();
  return t = h.isPlatformEmbedded || n !== y.pM4.PUSH_TO_TALK ? (0, r.jsx)(c.R94, {
    type: c.R94.Types.DESCRIPTION,
    className: o()(v.pttToolsMessage, T.marginBottom8),
    children: O.intl.format(O.t.HVvn5e, {
      onClick: () => S(g.n.KEYBINDS_PANEL, {
        section: y.oAB.KEYBINDS
      })
    })
  }) : (0, r.jsx)(c.R94, {
    type: c.R94.Types.DESCRIPTION,
    className: o()(v.pttToolsMessage, v.pttToolsWarning, T.marginBottom8),
    children: O.intl.format(O.t.zvMPOT, {
      onDownloadClick: () => (0, b.y)("Help Text PTT")
    })
  }), (0, r.jsxs)("div", {
    className: v.pttTools,
    children: [(0, r.jsxs)("div", {
      className: v.pttToolsFlex,
      children: [(0, r.jsx)("div", {
        className: v.column,
        children: (0, r.jsx)(c.xJW, {
          title: O.intl.string(O.t.YkDjVF),
          children: (0, r.jsx)(d.Z, {
            defaultValue: i,
            onChange: e => u.Z.setMode(n, {
              shortcut: e
            })
          })
        })
      }), (0, r.jsx)("div", {
        className: v.column,
        children: (0, r.jsxs)(c.xJW, {
          children: [(0, r.jsx)(c.vwX, {
            id: N,
            className: T.marginBottom8,
            children: O.intl.string(O.t.y0ShVl)
          }), (0, r.jsx)(c.iRW, {
            initialValue: a,
            onValueChange: e => u.Z.setMode(n, {
              delay: e
            }),
            onValueRender: R,
            maxValue: y.qhL,
            "aria-labelledby": N
          })]
        })
      })]
    }), f && (0, r.jsxs)("div", {
      className: T.marginTop8,
      children: [(0, r.jsx)(_.FG, {
        children: e => (0, r.jsxs)("div", {
          className: o()(I.horizontal, T.marginBottom4),
          children: [(0, r.jsx)(c.vwX, {
            tag: c.RB0.H3,
            className: T.marginReset,
            children: (0, r.jsx)("label", {
              htmlFor: e,
              children: O.intl.string(O.t.EGn1eH)
            })
          }), (0, r.jsx)(c.rsf, {
            id: e,
            checked: null != l && l,
            onChange: e => u.Z.setMode(n, {
              pttLatchingEnabled: e
            })
          })]
        })
      }), (0, r.jsx)(c.R94, {
        type: c.R94.Types.DESCRIPTION,
        className: T.marginBottom8,
        children: O.intl.string(O.t.iT257u)
      })]
    }), t]
  })
}

function w() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(), t = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getMode()), a = [{
    value: Chunk981631.pM4.VOICE_ACTIVITY,
    name: Chunk388032.intl.string(Chunk388032.t.cHCEOD)
  }, {
    value: Chunk981631.pM4.PUSH_TO_TALK,
    name: C ? Chunk388032.intl.string(Chunk388032.t["1AINrK"]) : Chunk388032.intl.string(Chunk388032.t.Q8gkVF)
  }], o = Chunk647438.useCallback(t => {
    let {
      value: i
    } = t;
    i === y.pM4.PUSH_TO_TALK && C && (0, c.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 468026));
      return t => (0, r.jsx)(e, A({
        title: O.intl.string(O.t.Kdt0GR),
        confirmText: O.intl.string(O.t["1WjMbG"]),
        cancelText: O.intl.string(O.t.BddRzc),
        onConfirm: () => (0, b.y)("PTT Limited Modal"),
        body: O.intl.string(O.t.NIozvr)
      }, t))
    }), u.Z.setMode(i, true, true, {
      analyticsLocations: e
    })
  }, [module]);
  return (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
    gap: 20,
    children: [(0, Chunk951288.jsx)(Chunk538534.E, {
      label: Chunk388032.intl.string(Chunk388032.t["pS+K2N"]),
      onChange: e => o({
        value: e
      }),
      options: Chunk120356,
      value: exports
    }), exports === Chunk981631.pM4.PUSH_TO_TALK && (0, Chunk951288.jsx)(P, {
      inputMode: exports
    })]
  })
}