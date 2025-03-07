/** Chunk was on 51724 **/
n.d(t, {
  Z: () => C
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(442837),
  o = n(46973),
  c = n(846519),
  d = n(692547),
  u = n(481060),
  m = n(846027),
  p = n(313201),
  g = n(131951),
  h = n(65154),
  f = n(388032),
  x = n(896753),
  b = n(473845),
  N = n(612064),
  _ = n(802138);
let E = (0, p.hQ)();

function C() {
  let [e, t] = i.useState(-100), [n, s] = i.useState(!1), {
    threshold: C,
    autoThreshold: j
  } = (0, l.cj)([g.Z], () => g.Z.getModeOptions()), {
    inputMode: O,
    automaticVADSupported: v,
    isEnabled: S
  } = (0, l.cj)([g.Z], () => ({
    inputMode: g.Z.getMode(),
    automaticVADSupported: g.Z.supports(h.AN.AUTOMATIC_VAD),
    isEnabled: g.Z.isEnabled()
  }));

  function T(e, n) {
    t(e), s((n & h.Dg.VOICE) === h.Dg.VOICE)
  }

  function I(e, t) {
    m.Z.setMode(O, {
      threshold: e,
      autoThreshold: t
    })
  }
  i.useEffect(() => {
    let e = new c.V7;
    return e.start(1e3, () => {
      g.Z.getMediaEngine().on(o.aB.VoiceActivity, T), e.stop()
    }), () => {
      g.Z.getMediaEngine().removeListener(o.aB.VoiceActivity, T), e.stop()
    }
  }, []);
  let y = (0, r.jsx)("section", {
    className: a()(x.inputSensitivityToggle, x.manual),
    children: (0, r.jsx)(u.iRW, {
      initialValue: C + 100,
      onValueRender: e => "".concat((-((100 - e) * 1)).toFixed(0), "dB"),
      onValueChange: e => I(-((100 - e) * 1), j),
      barStyles: {
        background: d.Z.unsafe_rawColors.GREEN_360.css
      },
      fillStyles: {
        background: d.Z.unsafe_rawColors.YELLOW_300.css
      },
      "aria-labelledby": E,
      children: (0, r.jsxs)("div", {
        className: a()(x.sliderBar, x.microphone, x.inputSensitivityBar, b.bar),
        children: [(0, r.jsx)("div", {
          className: a()(x.fill, x.inputSensitivityBarFill),
          style: {
            width: e + 100 + "%"
          }
        }), (0, r.jsx)("div", {
          className: "grow"
        })]
      })
    })
  });
  return j && (y = (0, r.jsxs)("section", {
    className: x.inputSensitivityToggle,
    children: [(0, r.jsx)("div", {
      className: x.inputSensitivitySlider,
      children: (0, r.jsx)("div", {
        className: a()(x.inputSensitivityBar, x.sliderBar, {
          [x.speaking]: n
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
    className: x.sensitivity,
    children: [v && (0, r.jsx)(p.FG, {
      children: e => (0, r.jsxs)("div", {
        className: a()(N.horizontal, _.marginBottom4),
        children: [(0, r.jsx)(u.vwX, {
          tag: u.RB0.H3,
          className: _.marginReset,
          children: (0, r.jsx)("label", {
            htmlFor: e,
            children: f.NW.string(f.t.I1Zuq6)
          })
        }), (0, r.jsx)(u.rsf, {
          id: e,
          checked: j,
          onChange: e => I(C, e)
        })]
      })
    }), y, !S && (0, r.jsx)(u.R94, {
      type: u.R94.Types.DESCRIPTION,
      className: a()(x.inputDisabledWarning, _.marginBottom8),
      children: f.NW.format(f.t["O13I+P"], {
        onEnableClick: () => m.Z.enable(!0)
      })
    })]
  })
}