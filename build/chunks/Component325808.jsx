/** Chunk was on web.js **/
/** chunk id: 325808, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk538534 = require("./538534.jsx"),
  Chunk755721 = require("./755721.js"),
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

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      A(e, t, n[t])
    })
  }
  return e
}
let N = !Chunk358085.isPlatformEmbedded,
  R = (0, Chunk313201.hQ)();

function P(e) {
  return e >= 1e3 ? (e /= 1e3, "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "\xa0ms")
}

function w(e) {
  let t, {
      inputMode: n
    } = e,
    {
      shortcut: i,
      delay: a,
      pttLatchingEnabled: l
    } = (0, s.cj)([h.Z], () => h.Z.getModeOptions()),
    {
      enableLatching: _
    } = (0, g.H)({
      location: "PTTTools"
    }),
    A = (0, b.Z)();
  return t = m.isPlatformEmbedded || n !== O.pM4.PUSH_TO_TALK ? (0, r.jsx)(u.R94, {
    type: u.R94.Types.DESCRIPTION,
    className: o()(I.pttToolsMessage, S.marginBottom8),
    children: v.intl.format(v.t.HVvn5e, {
      onClick: () => A(E.n.KEYBINDS_PANEL, {
        section: O.oAB.KEYBINDS
      })
    })
  }) : (0, r.jsx)(u.R94, {
    type: u.R94.Types.DESCRIPTION,
    className: o()(I.pttToolsMessage, I.pttToolsWarning, S.marginBottom8),
    children: v.intl.format(v.t.zvMPOT, {
      onDownloadClick: () => (0, y.y)("Help Text PTT")
    })
  }), (0, r.jsxs)("div", {
    className: I.pttTools,
    children: [(0, r.jsxs)("div", {
      className: I.pttToolsFlex,
      children: [(0, r.jsx)("div", {
        className: I.column,
        children: (0, r.jsx)(u.xJW, {
          title: v.intl.string(v.t.YkDjVF),
          children: (0, r.jsx)(f.Z, {
            defaultValue: i,
            onChange: e => d.Z.setMode(n, {
              shortcut: e
            })
          })
        })
      }), (0, r.jsx)("div", {
        className: I.column,
        children: (0, r.jsxs)(u.xJW, {
          children: [(0, r.jsx)(u.vwX, {
            id: R,
            className: S.marginBottom8,
            children: v.intl.string(v.t.y0ShVl)
          }), (0, r.jsx)(u.iRW, {
            initialValue: a,
            onValueChange: e => d.Z.setMode(n, {
              delay: e
            }),
            onValueRender: P,
            maxValue: O.qhL,
            "aria-labelledby": R
          })]
        })
      })]
    }), _ && (0, r.jsxs)("div", {
      className: S.marginTop8,
      children: [(0, r.jsx)(p.FG, {
        children: e => (0, r.jsxs)("div", {
          className: o()(T.horizontal, S.marginBottom4),
          children: [(0, r.jsx)(u.vwX, {
            tag: u.RB0.H3,
            className: S.marginReset,
            children: (0, r.jsx)("label", {
              htmlFor: e,
              children: v.intl.string(v.t.EGn1eH)
            })
          }), (0, r.jsx)(c.T2, {
            id: e,
            checked: null != l && l,
            onChange: e => d.Z.setMode(n, {
              pttLatchingEnabled: e
            })
          })]
        })
      }), (0, r.jsx)(u.R94, {
        type: u.R94.Types.DESCRIPTION,
        className: S.marginBottom8,
        children: v.intl.string(v.t.iT257u)
      })]
    }), t]
  })
}

function D() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(), t = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getMode()), a = [{
    value: Chunk981631.pM4.VOICE_ACTIVITY,
    name: Chunk388032.intl.string(Chunk388032.t.cHCEOD)
  }, {
    value: Chunk981631.pM4.PUSH_TO_TALK,
    name: N ? Chunk388032.intl.string(Chunk388032.t["1AINrK"]) : Chunk388032.intl.string(Chunk388032.t.Q8gkVF)
  }], o = Chunk647438.useCallback(t => {
    let {
      value: i
    } = t;
    i === O.pM4.PUSH_TO_TALK && N && (0, u.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 468026));
      return t => (0, r.jsx)(e, C({
        title: v.intl.string(v.t.Kdt0GR),
        confirmText: v.intl.string(v.t["1WjMbG"]),
        cancelText: v.intl.string(v.t.BddRzc),
        onConfirm: () => (0, y.y)("PTT Limited Modal"),
        body: v.intl.string(v.t.NIozvr)
      }, t))
    }), d.Z.setMode(i, true, true, {
      analyticsLocations: e
    })
  }, [module]);
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsx)(Chunk481060.xJW, {
      title: Chunk388032.intl.string(Chunk388032.t["pS+K2N"]),
      className: Chunk197571.marginBottom20,
      children: (0, Chunk951288.jsx)(Chunk538534.E, {
        onChange: e => o({
          value: e
        }),
        options: Chunk120356,
        value: exports
      })
    }), exports === Chunk981631.pM4.PUSH_TO_TALK && (0, Chunk951288.jsx)(w, {
      inputMode: exports
    })]
  })
}