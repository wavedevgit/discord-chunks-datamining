/** Chunk was on web.js **/
/** chunk id: 325808, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
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
  Chunk184767 = require("./184767.js"),
  Chunk149715 = require("./149715.js"),
  Chunk197571 = require("./197571.js");

function I(e, t, n) {
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
      I(e, t, n[t])
    })
  }
  return e
}
let T = !Chunk358085.isPlatformEmbedded,
  A = (0, Chunk313201.hQ)();

function C(e) {
  return e >= 1e3 ? (e /= 1e3, "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "\xa0ms")
}

function N(e) {
  let t, {
      inputMode: n
    } = e,
    {
      shortcut: i,
      delay: a,
      pttLatchingEnabled: f
    } = (0, s.cj)([p.Z], () => p.Z.getModeOptions()),
    {
      enableLatching: I
    } = (0, m.H)({
      location: "PTTTools"
    });
  return t = h.isPlatformEmbedded || n !== E.pM4.PUSH_TO_TALK ? (0, r.jsx)(l.R94, {
    type: l.R94.Types.DESCRIPTION,
    className: o()(y.pttToolsMessage, v.marginBottom8),
    children: b.intl.format(b.t.HVvn5e, {
      onClick: () => u.Z.setSection(E.oAB.KEYBINDS)
    })
  }) : (0, r.jsx)(l.R94, {
    type: l.R94.Types.DESCRIPTION,
    className: o()(y.pttToolsMessage, y.pttToolsWarning, v.marginBottom8),
    children: b.intl.format(b.t.zvMPOT, {
      onDownloadClick: () => (0, g.y)("Help Text PTT")
    })
  }), (0, r.jsxs)("div", {
    className: y.pttTools,
    children: [(0, r.jsxs)("div", {
      className: y.pttToolsFlex,
      children: [(0, r.jsx)("div", {
        className: y.column,
        children: (0, r.jsx)(l.xJW, {
          title: b.intl.string(b.t.YkDjVF),
          children: (0, r.jsx)(d.Z, {
            defaultValue: i,
            onChange: e => c.Z.setMode(n, {
              shortcut: e
            })
          })
        })
      }), (0, r.jsx)("div", {
        className: y.column,
        children: (0, r.jsxs)(l.xJW, {
          children: [(0, r.jsx)(l.vwX, {
            id: A,
            tag: l.RB0.H5,
            className: v.marginBottom8,
            children: b.intl.string(b.t.y0ShVl)
          }), (0, r.jsx)(l.iRW, {
            initialValue: a,
            onValueChange: e => c.Z.setMode(n, {
              delay: e
            }),
            onValueRender: C,
            maxValue: E.qhL,
            "aria-labelledby": A
          })]
        })
      })]
    }), I && (0, r.jsxs)(l.xJW, {
      className: v.marginTop8,
      children: [(0, r.jsx)(_.FG, {
        children: e => (0, r.jsxs)("div", {
          className: o()(O.horizontal, v.marginBottom4),
          children: [(0, r.jsx)(l.vwX, {
            tag: l.RB0.H3,
            className: v.marginReset,
            children: (0, r.jsx)("label", {
              htmlFor: e,
              children: b.intl.string(b.t.EGn1eH)
            })
          }), (0, r.jsx)(l.rsf, {
            id: e,
            checked: null != f && f,
            onChange: e => c.Z.setMode(n, {
              pttLatchingEnabled: e
            })
          })]
        })
      }), (0, r.jsx)(l.R94, {
        type: l.R94.Types.DESCRIPTION,
        className: v.marginBottom8,
        children: b.intl.string(b.t.iT257u)
      })]
    }), t]
  })
}

function R() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(), t = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getMode()), a = [{
    value: Chunk981631.pM4.VOICE_ACTIVITY,
    name: Chunk388032.intl.string(Chunk388032.t.cHCEOD)
  }, {
    value: Chunk981631.pM4.PUSH_TO_TALK,
    name: T ? Chunk388032.intl.string(Chunk388032.t["1AINrK"]) : Chunk388032.intl.string(Chunk388032.t.Q8gkVF)
  }], o = Chunk647438.useCallback(t => {
    let {
      value: i
    } = t;
    i === E.pM4.PUSH_TO_TALK && T && (0, l.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 468026));
      return t => (0, r.jsx)(e, S({
        title: b.intl.string(b.t.Kdt0GR),
        confirmText: b.intl.string(b.t["1WjMbG"]),
        cancelText: b.intl.string(b.t.BddRzc),
        onConfirm: () => (0, g.y)("PTT Limited Modal"),
        body: b.intl.string(b.t.NIozvr)
      }, t))
    }), c.Z.setMode(i, true, true, {
      analyticsLocations: e
    })
  }, [module]);
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsx)(Chunk481060.xJW, {
      title: Chunk388032.intl.string(Chunk388032.t["pS+K2N"]),
      className: Chunk197571.marginBottom20,
      children: (0, Chunk951288.jsx)(Chunk481060.FXm, {
        onChange: o,
        options: Chunk120356,
        value: exports
      })
    }), exports === Chunk981631.pM4.PUSH_TO_TALK && (0, Chunk951288.jsx)(N, {
      inputMode: exports
    })]
  })
}