/** Chunk was on web.js **/
/** chunk id: 325808, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk538534 = require("./538534.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk825209 = require("./825209.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk358085 = require("./358085.js"),
  Chunk383451 = require("./383451.js"),
  Chunk313789 = require("./313789.js"),
  Chunk947889 = require("./947889.js"),
  Chunk962100 = require("./962100.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}
let O = !Chunk358085.isPlatformEmbedded;

function v(e) {
  return e >= 1e3 ? (e /= 1e3, "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "\xa0ms")
}

function I(e) {
  let t, {
      inputMode: n
    } = e,
    {
      shortcut: i,
      delay: o,
      pttLatchingEnabled: u
    } = (0, a.cj)([d.Z], () => d.Z.getModeOptions()),
    {
      enableLatching: b
    } = (0, _.H)({
      location: "PTTTools"
    }),
    y = (0, h.Z)();
  return t = f.isPlatformEmbedded || n !== g.pM4.PUSH_TO_TALK ? (0, r.jsx)(s.Wn, {
    messageType: s.QYI.INFO,
    children: E.intl.format(E.t.HVvn5e, {
      onClick: () => y(p.n.KEYBINDS_PANEL, {
        section: g.oAB.KEYBINDS
      })
    })
  }) : (0, r.jsx)(s.Wn, {
    messageType: s.QYI.WARNING,
    children: E.intl.format(E.t.zvMPOT, {
      onDownloadClick: () => (0, m.y)("Help Text PTT")
    })
  }), (0, r.jsxs)(s.Kqy, {
    gap: 20,
    children: [(0, r.jsxs)(s.Kqy, {
      gap: 16,
      direction: "horizontal",
      children: [(0, r.jsx)(s.gNt, {
        label: E.intl.string(E.t.YkDjVF),
        children: (0, r.jsx)(c.Z, {
          defaultValue: i,
          onChange: e => l.Z.setMode(n, {
            shortcut: e
          })
        })
      }), (0, r.jsx)(s.iRW, {
        label: E.intl.string(E.t.y0ShVl),
        initialValue: o,
        onValueChange: e => l.Z.setMode(n, {
          delay: e
        }),
        onValueRender: v,
        maxValue: g.qhL
      })]
    }), b && (0, r.jsx)(s.rsf, {
      label: E.intl.string(E.t.EGn1eH),
      description: E.intl.string(E.t.iT257u),
      checked: null != u && u,
      onChange: e => l.Z.setMode(n, {
        pttLatchingEnabled: e
      })
    }), t]
  })
}

function T() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(), t = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getMode()), c = [{
    value: Chunk981631.pM4.VOICE_ACTIVITY,
    name: Chunk388032.intl.string(Chunk388032.t.cHCEOD)
  }, {
    value: Chunk981631.pM4.PUSH_TO_TALK,
    name: O ? Chunk388032.intl.string(Chunk388032.t["1AINrK"]) : Chunk388032.intl.string(Chunk388032.t.Q8gkVF)
  }], f = Chunk647438.useCallback(t => {
    let {
      value: i
    } = t;
    i === g.pM4.PUSH_TO_TALK && O && (0, s.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 468026));
      return t => (0, r.jsx)(e, y({
        title: E.intl.string(E.t.Kdt0GR),
        confirmText: E.intl.string(E.t["1WjMbG"]),
        cancelText: E.intl.string(E.t.BddRzc),
        onConfirm: () => (0, m.y)("PTT Limited Modal"),
        body: E.intl.string(E.t.NIozvr)
      }, t))
    }), l.Z.setMode(i, true, true, {
      analyticsLocations: e
    })
  }, [module]);
  return (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
    gap: 20,
    children: [(0, Chunk951288.jsx)(Chunk538534.E, {
      label: Chunk388032.intl.string(Chunk388032.t["pS+K2N"]),
      onChange: e => f({
        value: e
      }),
      options: Chunk825209,
      value: exports
    }), exports === Chunk981631.pM4.PUSH_TO_TALK && (0, Chunk951288.jsx)(I, {
      inputMode: exports
    })]
  })
}