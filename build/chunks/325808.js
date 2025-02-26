/** Chunk was on 53485 **/
n.d(t, {
  Z: () => v
});
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(442837),
  o = n(481060),
  c = n(846027),
  d = n(230711),
  u = n(825209),
  m = n(906732),
  g = n(313201),
  p = n(131951),
  h = n(358085),
  f = n(962100),
  N = n(981631),
  b = n(388032),
  x = n(825896),
  _ = n(455812);
let E = !h.isPlatformEmbedded,
  j = (0, g.hQ)();

function C(e) {
  return e >= 1e3 ? (e /= 1e3, "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), " ms")
}

function O(e) {
  let t, {
      inputMode: n
    } = e,
    {
      shortcut: i,
      delay: s
    } = (0, l.cj)([p.Z], () => p.Z.getModeOptions());
  return t = h.isPlatformEmbedded || n !== N.pM4.PUSH_TO_TALK ? (0, r.jsx)(o.R94, {
    type: o.R94.Types.DESCRIPTION,
    className: a()(x.pttToolsMessage, _.marginBottom8),
    children: b.NW.format(b.t.HVvn5e, {
      onClick: () => d.Z.setSection(N.oAB.KEYBINDS)
    })
  }) : (0, r.jsx)(o.R94, {
    type: o.R94.Types.DESCRIPTION,
    className: a()(x.pttToolsMessage, x.pttToolsWarning, _.marginBottom8),
    children: b.NW.format(b.t.zvMPOT, {
      onDownloadClick: () => (0, f.y)("Help Text PTT")
    })
  }), (0, r.jsxs)("div", {
    className: x.pttTools,
    children: [(0, r.jsxs)("div", {
      className: x.pttToolsFlex,
      children: [(0, r.jsx)("div", {
        className: x.column,
        children: (0, r.jsx)(o.xJW, {
          title: b.NW.string(b.t.YkDjVF),
          children: (0, r.jsx)(u.Z, {
            defaultValue: i,
            onChange: e => c.Z.setMode(n, {
              shortcut: e
            })
          })
        })
      }), (0, r.jsx)("div", {
        className: x.column,
        children: (0, r.jsxs)(o.xJW, {
          children: [(0, r.jsx)(o.vwX, {
            id: j,
            tag: o.RB0.H5,
            className: _.marginBottom8,
            children: b.NW.string(b.t.y0ShVl)
          }), (0, r.jsx)(o.iRW, {
            initialValue: s,
            onValueChange: e => c.Z.setMode(n, {
              delay: e
            }),
            onValueRender: C,
            maxValue: N.qhL,
            "aria-labelledby": j
          })]
        })
      })]
    }), t]
  })
}

function v() {
  let {
    analyticsLocations: e
  } = (0, m.ZP)(), t = (0, l.e7)([p.Z], () => p.Z.getMode()), s = [{
    value: N.pM4.VOICE_ACTIVITY,
    name: b.NW.string(b.t.cHCEOD)
  }, {
    value: N.pM4.PUSH_TO_TALK,
    name: E ? b.NW.string(b.t["1AINrK"]) : b.NW.string(b.t.Q8gkVF)
  }], a = i.useCallback(t => {
    let {
      value: i
    } = t;
    i === N.pM4.PUSH_TO_TALK && E && (0, o.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 468026));
      return t => (0, r.jsx)(e, function(e) {
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
      }({
        title: b.NW.string(b.t.Kdt0GR),
        confirmText: b.NW.string(b.t["1WjMbG"]),
        cancelText: b.NW.string(b.t.BddRzc),
        onConfirm: () => (0, f.y)("PTT Limited Modal"),
        body: b.NW.string(b.t.NIozvr)
      }, t))
    }), c.Z.setMode(i, void 0, void 0, {
      analyticsLocations: e
    })
  }, [e]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.xJW, {
      title: b.NW.string(b.t["pS+K2N"]),
      className: _.marginBottom20,
      children: (0, r.jsx)(o.FXm, {
        onChange: a,
        options: s,
        value: t
      })
    }), t === N.pM4.PUSH_TO_TALK && (0, r.jsx)(O, {
      inputMode: t
    })]
  })
}