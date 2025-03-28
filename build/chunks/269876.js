/** Chunk was on 20447 **/
n.d(t, {
  Z: () => j
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  o = n(442837),
  l = n(46973),
  c = n(846519),
  d = n(692547),
  u = n(481060),
  m = n(846027),
  g = n(313201),
  p = n(131951),
  h = n(65154),
  f = n(388032),
  N = n(896753),
  b = n(473845),
  x = n(612064),
  _ = n(802138);
let E = (0, g.hQ)();

function j() {
  let [e, t] = i.useState(-100), [n, s] = i.useState(!1), {
    threshold: j,
    autoThreshold: O
  } = (0, o.cj)([p.Z], () => p.Z.getModeOptions()), {
    inputMode: C,
    automaticVADSupported: S,
    isEnabled: v
  } = (0, o.cj)([p.Z], () => ({
    inputMode: p.Z.getMode(),
    automaticVADSupported: p.Z.supports(h.AN.AUTOMATIC_VAD),
    isEnabled: p.Z.isEnabled()
  }));

  function T(e, n) {
    t(e), s((n & h.Dg.VOICE) === h.Dg.VOICE)
  }

  function I(e, t) {
    m.Z.setMode(C, {
      threshold: e,
      autoThreshold: t
    })
  }
  i.useEffect(() => {
    let e = new c.V7;
    return e.start(1e3, () => {
      p.Z.getMediaEngine().on(l.aB.VoiceActivity, T), e.stop()
    }), () => {
      p.Z.getMediaEngine().removeListener(l.aB.VoiceActivity, T), e.stop()
    }
  }, []);
  let y = (0, r.jsx)("section", {
    className: a()(N.inputSensitivityToggle, N.manual),
    children: (0, r.jsx)(u.iRW, {
      initialValue: j + 100,
      onValueRender: e => "".concat((-((100 - e) * 1)).toFixed(0), "dB"),
      onValueChange: e => I(-((100 - e) * 1), O),
      barStyles: {
        background: d.Z.unsafe_rawColors.GREEN_360.css
      },
      fillStyles: {
        background: d.Z.unsafe_rawColors.YELLOW_300.css
      },
      "aria-labelledby": E,
      children: (0, r.jsxs)("div", {
        className: a()(N.sliderBar, N.microphone, N.inputSensitivityBar, b.bar),
        children: [(0, r.jsx)("div", {
          className: a()(N.fill, N.inputSensitivityBarFill),
          style: {
            width: e + 100 + "%"
          }
        }), (0, r.jsx)("div", {
          className: "grow"
        })]
      })
    })
  });
  return O && (y = (0, r.jsxs)("section", {
    className: N.inputSensitivityToggle,
    children: [(0, r.jsx)("div", {
      className: N.inputSensitivitySlider,
      children: (0, r.jsx)("div", {
        className: a()(N.inputSensitivityBar, N.sliderBar, {
          [N.speaking]: n
        })
      })
    }), (0, r.jsx)(u.R94, {
      type: u.R94.Types.DESCRIPTION,
      className: _.marginBottom8,
      children: f.NW.string(f.t.W3K5Ii)
    })]
  })), (0, r.jsxs)(u.xJW, {
    title: f.NW.string(f.t["sqUm+v"]),
    titleId: E,
    className: N.sensitivity,
    children: [S && (0, r.jsx)(g.FG, {
      children: e => (0, r.jsxs)("div", {
        className: a()(x.horizontal, _.marginBottom4),
        children: [(0, r.jsx)(u.vwX, {
          tag: u.RB0.H3,
          className: _.marginReset,
          children: (0, r.jsx)("label", {
            htmlFor: e,
            children: f.NW.string(f.t.I1Zuq6)
          })
        }), (0, r.jsx)(u.rsf, {
          id: e,
          checked: O,
          onChange: e => I(j, e)
        })]
      })
    }), y, !v && (0, r.jsx)(u.R94, {
      type: u.R94.Types.DESCRIPTION,
      className: a()(N.inputDisabledWarning, _.marginBottom8),
      children: f.NW.format(f.t["O13I+P"], {
        onEnableClick: () => m.Z.enable(!0)
      })
    })]
  })
}