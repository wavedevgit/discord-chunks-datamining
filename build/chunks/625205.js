/** Chunk was on 51724 **/
n.d(t, {
  Z: () => E
}), n(47120);
var r = n(200651);
n(192379);
var i = n(392711),
  s = n.n(i),
  a = n(442837),
  l = n(780384),
  o = n(481060),
  c = n(846027),
  d = n(906732),
  u = n(687058),
  m = n(253052),
  p = n(463395),
  g = n(131951),
  h = n(210887),
  f = n(962100),
  x = n(65154),
  b = n(388032),
  N = n(910415),
  _ = n(802138);

function E() {
  let e, t;
  let {
    analyticsLocations: i
  } = (0, d.ZP)(), E = (0, a.e7)([h.Z], () => h.Z.theme), {
    canSetInputDevice: C,
    canSetOutputDevice: j,
    inputDeviceId: O,
    outputDeviceId: v
  } = (0, a.cj)([g.Z], () => ({
    canSetInputDevice: g.Z.supports(x.AN.AUDIO_INPUT_DEVICE),
    canSetOutputDevice: g.Z.supports(x.AN.AUDIO_OUTPUT_DEVICE),
    inputDeviceId: g.Z.getInputDeviceId(),
    outputDeviceId: g.Z.getOutputDeviceId()
  })), S = (0, u.Z)(), T = (0, m.Z)();
  C || (e = (0, r.jsx)(o.R94, {
    type: o.R94.Types.DESCRIPTION,
    className: _.marginTop8,
    children: b.NW.format(b.t["1iK6UV"], {
      onDownloadClick: () => (0, f.y)("Help Text Input Devices")
    })
  })), j || (t = (0, r.jsx)(o.R94, {
    type: o.R94.Types.DESCRIPTION,
    className: _.marginTop8,
    children: b.NW.format(b.t.Ow0dbG, {
      onDownloadClick: () => (0, f.y)("Help Text Output Devices")
    })
  }));
  let I = s()(S).values().first(),
    y = null != I ? I.disabled : null != e,
    A = s()(T).values().first(),
    P = null != A ? A.disabled : null != t;

  function R(e) {
    let t, {
      label: i,
      value: s
    } = e;
    if (p.Z.isCertified(s)) {
      let e = (0, l.ap)(E) ? n(561259) : n(887695);
      t = (0, r.jsx)("img", {
        src: e,
        alt: "Certified",
        className: N.deviceOptionCertified
      })
    }
    return (0, r.jsxs)("span", {
      className: N.deviceOption,
      children: [(0, r.jsx)("span", {
        className: N.deviceOptionLabel,
        children: p.Z.getCertifiedDeviceName(s, i)
      }), t]
    }, s)
  }

  function D(e) {
    return R(e[0])
  }
  return (0, r.jsxs)("div", {
    className: N.devices,
    children: [(0, r.jsx)("div", {
      className: N.column,
      children: (0, r.jsxs)(o.xJW, {
        title: b.NW.string(b.t.hHMYbW),
        children: [(0, r.jsx)(o.q4e, {
          value: O,
          onChange: e => c.Z.setInputDevice(e, {
            location: "Settings",
            analyticsLocations: i
          }),
          options: s().map(S, e => {
            let {
              id: t,
              name: n
            } = e;
            return {
              value: t,
              label: n
            }
          }),
          isDisabled: y,
          renderOptionValue: D,
          renderOptionLabel: R
        }), e]
      })
    }), (0, r.jsx)("div", {
      className: N.column,
      children: (0, r.jsxs)(o.xJW, {
        title: b.NW.string(b.t.dl18zc),
        children: [(0, r.jsx)(o.q4e, {
          value: v,
          onChange: e => c.Z.setOutputDevice(e, {
            location: "Settings",
            analyticsLocations: i
          }),
          options: s().map(T, e => {
            let {
              id: t,
              name: n
            } = e;
            return {
              value: t,
              label: n
            }
          }),
          isDisabled: P,
          renderOptionValue: D,
          renderOptionLabel: R
        }), t]
      })
    })]
  })
}