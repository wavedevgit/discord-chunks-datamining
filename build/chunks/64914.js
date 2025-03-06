/** Chunk was on 51724 **/
n.d(t, {
  Z: () => _
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(481060),
  l = n(401430),
  o = n(100527),
  c = n(415439),
  d = n(921801),
  u = n(695103),
  m = n(998502),
  p = n(740492),
  g = n(695346),
  h = n(399970),
  f = n(726985),
  x = n(981631),
  b = n(388032);

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function _() {
  let [e] = i.useState(() => m.ZP.getEnableHardwareAcceleration()), t = g.bm.useSetting(), n = g.Sb.useSetting(), _ = (0, s.e7)([u.Z], () => u.Z.testModeApplicationId), E = (0, s.e7)([p.ZP], () => p.ZP.showPlayAgain), j = i.useCallback(e => {
    g.bm.updateSetting(!e)
  }, []), C = i.useCallback(e => {
    e ? (0, a.h7j)(e => (0, r.jsx)(h.Z, N({}, e))) : l.mc()
  }, []), O = i.useCallback(e => {
    (0, c.BV)(e, o.Z.USER_SETTINGS)
  }, []), v = i.useCallback(e => {
    (0, a.h7j)(t => {
      var n, i;
      return (0, r.jsx)(a.ConfirmModal, (n = N({
        header: b.NW.string(b.t.aqpAvr),
        confirmText: b.NW.string(b.t.BddRzc),
        cancelText: b.NW.string(b.t["ETE/oK"]),
        onConfirm: () => m.ZP.setEnableHardwareAcceleration(e)
      }, t), i = i = {
        children: (0, r.jsx)(a.Text, {
          variant: "text-sm/normal",
          children: b.NW.string(b.t.uDP3Ky)
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
      }), n))
    })
  }, []);
  return (0, r.jsxs)(a.hjN, {
    tag: a.RB0.H1,
    title: b.NW.string(b.t["8/udY2"]),
    children: [(0, r.jsx)(d.F, {
      setting: f.s6.SETTINGS_ADVANCED_DEVELOPER_MODE,
      children: (0, r.jsx)(a.j7V, {
        value: n,
        onChange: g.Sb.updateSetting,
        note: b.NW.format(b.t["CY6q/f"], {
          apiDocsUrl: x.EYA.API_DOCS
        }),
        children: b.NW.string(b.t.ObIb1d)
      })
    }), (0, r.jsx)(d.F, {
      setting: f.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
      children: (0, r.jsx)(a.j7V, {
        value: e,
        onChange: v,
        note: b.NW.string(b.t.Afc7l5),
        children: b.NW.string(b.t["eOC/Fx"])
      })
    }), (0, r.jsx)(d.F, {
      setting: f.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
      children: (0, r.jsx)(a.j7V, {
        value: !t,
        onChange: j,
        note: b.NW.string(b.t["8mYp39"]),
        children: b.NW.string(b.t.fi3UQE)
      })
    }), (0, r.jsx)(d.F, {
      setting: f.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
      children: (0, r.jsx)(a.j7V, {
        value: null != _,
        note: b.NW.string(b.t["52hMnJ"]),
        onChange: C,
        children: b.NW.string(b.t.erOqlp)
      })
    }), (0, r.jsx)(d.F, {
      setting: f.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN,
      children: (0, r.jsx)(a.j7V, {
        value: E,
        note: b.NW.string(b.t["B/qU4O"]),
        onChange: O,
        children: b.NW.string(b.t.qDZryM)
      })
    })]
  })
}