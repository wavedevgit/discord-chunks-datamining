/** Chunk was on web.js **/
/** chunk id: 325808, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk230711 = require("./230711.js"),
  Chunk825209 = require("./825209.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk131951 = require("./131951.js"),
  Chunk358085 = require("./358085.js"),
  Chunk383451 = require("./383451.js"),
  Chunk962100 = require("./962100.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk692941 = require("./692941.js"),
  Chunk465106 = require("./465106.js"),
  Chunk10198 = require("./10198.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}
let A = !Chunk358085.isPlatformEmbedded,
  C = (0, Chunk313201.hQ)();

function N(e) {
  return e >= 1e3 ? (e /= 1e3, "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "\xa0ms")
}

function R(e) {
  let t, {
      inputMode: n
    } = e,
    {
      shortcut: i,
      delay: a,
      pttLatchingEnabled: _
    } = (0, s.cj)([h.Z], () => h.Z.getModeOptions()),
    {
      enableLatching: T
    } = (0, g.H)({
      location: "PTTTools"
    });
  return t = m.isPlatformEmbedded || n !== b.pM4.PUSH_TO_TALK ? (0, r.jsx)(c.R94, {
    type: c.R94.Types.DESCRIPTION,
    className: o()(O.pttToolsMessage, I.marginBottom8),
    children: y.intl.format(y.t.HVvn5e, {
      onClick: () => d.Z.setSection(b.oAB.KEYBINDS)
    })
  }) : (0, r.jsx)(c.R94, {
    type: c.R94.Types.DESCRIPTION,
    className: o()(O.pttToolsMessage, O.pttToolsWarning, I.marginBottom8),
    children: y.intl.format(y.t.zvMPOT, {
      onDownloadClick: () => (0, E.y)("Help Text PTT")
    })
  }), (0, r.jsxs)("div", {
    className: O.pttTools,
    children: [(0, r.jsxs)("div", {
      className: O.pttToolsFlex,
      children: [(0, r.jsx)("div", {
        className: O.column,
        children: (0, r.jsx)(c.xJW, {
          title: y.intl.string(y.t.YkDjVF),
          children: (0, r.jsx)(f.Z, {
            defaultValue: i,
            onChange: e => u.Z.setMode(n, {
              shortcut: e
            })
          })
        })
      }), (0, r.jsx)("div", {
        className: O.column,
        children: (0, r.jsxs)(c.xJW, {
          children: [(0, r.jsx)(c.vwX, {
            id: C,
            className: I.marginBottom8,
            children: y.intl.string(y.t.y0ShVl)
          }), (0, r.jsx)(c.iRW, {
            initialValue: a,
            onValueChange: e => u.Z.setMode(n, {
              delay: e
            }),
            onValueRender: N,
            maxValue: b.qhL,
            "aria-labelledby": C
          })]
        })
      })]
    }), T && (0, r.jsxs)("div", {
      className: I.marginTop8,
      children: [(0, r.jsx)(p.FG, {
        children: e => (0, r.jsxs)("div", {
          className: o()(v.horizontal, I.marginBottom4),
          children: [(0, r.jsx)(c.vwX, {
            tag: c.RB0.H3,
            className: I.marginReset,
            children: (0, r.jsx)("label", {
              htmlFor: e,
              children: y.intl.string(y.t.EGn1eH)
            })
          }), (0, r.jsx)(l.T2, {
            id: e,
            checked: null != _ && _,
            onChange: e => u.Z.setMode(n, {
              pttLatchingEnabled: e
            })
          })]
        })
      }), (0, r.jsx)(c.R94, {
        type: c.R94.Types.DESCRIPTION,
        className: I.marginBottom8,
        children: y.intl.string(y.t.iT257u)
      })]
    }), t]
  })
}

function P() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(), t = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getMode()), a = [{
    value: Chunk981631.pM4.VOICE_ACTIVITY,
    name: Chunk388032.intl.string(Chunk388032.t.cHCEOD)
  }, {
    value: Chunk981631.pM4.PUSH_TO_TALK,
    name: A ? Chunk388032.intl.string(Chunk388032.t["1AINrK"]) : Chunk388032.intl.string(Chunk388032.t.Q8gkVF)
  }], o = Chunk647438.useCallback(t => {
    let {
      value: i
    } = t;
    i === b.pM4.PUSH_TO_TALK && A && (0, c.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 468026));
      return t => (0, r.jsx)(e, S({
        title: y.intl.string(y.t.Kdt0GR),
        confirmText: y.intl.string(y.t["1WjMbG"]),
        cancelText: y.intl.string(y.t.BddRzc),
        onConfirm: () => (0, E.y)("PTT Limited Modal"),
        body: y.intl.string(y.t.NIozvr)
      }, t))
    }), u.Z.setMode(i, true, true, {
      analyticsLocations: e
    })
  }, [module]);
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsx)(Chunk481060.xJW, {
      title: Chunk388032.intl.string(Chunk388032.t["pS+K2N"]),
      className: Chunk10198.marginBottom20,
      children: (0, Chunk951288.jsx)(Chunk755721.Gu, {
        onChange: o,
        options: Chunk120356,
        value: exports
      })
    }), exports === Chunk981631.pM4.PUSH_TO_TALK && (0, Chunk951288.jsx)(R, {
      inputMode: exports
    })]
  })
}