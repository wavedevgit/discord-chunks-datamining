/** Chunk was on web.js **/
/** chunk id: 325808, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  XH: () => S,
  ZP: () => I,
  cO: () => O
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk825209 = require("./825209.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk358085 = require("./358085.js"),
  Chunk383451 = require("./383451.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk962100 = require("./962100.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}
let y = !Chunk358085.isPlatformEmbedded;

function O(e) {
  return e >= 1e3 ? (e /= 1e3, "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "\xa0ms")
}

function v(e) {
  let t, {
      inputMode: n
    } = e,
    {
      shortcut: i,
      delay: c,
      pttLatchingEnabled: E
    } = (0, a.cj)([u.Z], () => u.Z.getModeOptions()),
    {
      enableLatching: b
    } = (0, f.H)({
      location: "PTTTools"
    });
  return t = d.isPlatformEmbedded || n !== h.pM4.PUSH_TO_TALK ? (0, r.jsx)(o.Wn, {
    messageType: o.QYI.INFO,
    children: g.intl.format(g.t.HVvn5T, {
      onClick: () => (0, _.openUserSettings)(p.n.KEYBINDS_PANEL, {
        section: h.oAB.KEYBINDS
      })
    })
  }) : (0, r.jsx)(o.Wn, {
    messageType: o.QYI.WARNING,
    children: g.intl.format(g.t.zvMPOc, {
      onDownloadClick: () => (0, m.y)("Help Text PTT")
    })
  }), (0, r.jsxs)(o.Kqy, {
    gap: 20,
    children: [(0, r.jsxs)(o.Kqy, {
      gap: 16,
      direction: "horizontal",
      children: [(0, r.jsx)(o.gNt, {
        label: g.intl.string(g.t.YkDjVM),
        children: (0, r.jsx)(l.Z, {
          defaultValue: i,
          onChange: e => s.Z.setMode(n, {
            shortcut: e
          })
        })
      }), (0, r.jsx)(o.iRW, {
        label: g.intl.string(g.t.y0ShVt),
        initialValue: c,
        onValueChange: e => s.Z.setMode(n, {
          delay: e
        }),
        onValueRender: O,
        maxValue: h.qhL
      })]
    }), b && (0, r.jsx)(o.rsf, {
      label: g.intl.string(g.t.EGn1eN),
      description: g.intl.string(g.t.iT257i),
      checked: null != E && E,
      onChange: e => s.Z.setMode(n, {
        pttLatchingEnabled: e
      })
    }), t]
  })
}

function S(e, t) {
  e === h.pM4.PUSH_TO_TALK && y && (0, o.ZDy)(async () => {
    let {
      default: e
    } = await n.e("84112").then(n.bind(n, 273352));
    return t => (0, r.jsx)(e, b({
      title: g.intl.string(g.t.Kdt0Gb),
      confirmText: g.intl.string(g.t["1WjMbC"]),
      cancelText: g.intl.string(g.t.BddRzS),
      onConfirm: () => (0, m.y)("PTT Limited Modal"),
      body: g.intl.string(g.t.NIozvt)
    }, t))
  }), s.Z.setMode(e, true, true, {
    analyticsLocations: t
  })
}

function I() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(), t = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getMode()), n = [{
    value: Chunk981631.pM4.VOICE_ACTIVITY,
    name: Chunk388032.intl.string(Chunk388032.t.cHCEOJ)
  }, {
    value: Chunk981631.pM4.PUSH_TO_TALK,
    name: y ? Chunk388032.intl.string(Chunk388032.t["1AINrB"]) : Chunk388032.intl.string(Chunk388032.t.Q8gkVL)
  }], s = Chunk473749.useCallback(t => {
    let {
      value: n
    } = t;
    S(n, e)
  }, [module]);
  return (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
    gap: 20,
    children: [(0, Chunk54381.jsx)(Chunk481060.FXm, {
      label: Chunk388032.intl.string(Chunk388032.t["pS+K2L"]),
      onChange: e => s({
        value: e
      }),
      options: require,
      value: exports
    }), exports === Chunk981631.pM4.PUSH_TO_TALK && (0, Chunk54381.jsx)(v, {
      inputMode: exports
    })]
  })
}