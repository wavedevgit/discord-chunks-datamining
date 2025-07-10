/** Chunk was on 52030 **/
n.d(t, {
  Z: () => m
}), n(388685), n(49124);
var l = n(255367),
  r = n(73800),
  i = n(849055),
  s = n(544891),
  a = n(481060),
  o = n(358085),
  d = n(960048),
  c = n(998502),
  u = n(507453),
  h = n(981631),
  f = n(388032);

function m(e) {
  let {
    mfaChallenge: t,
    finish: n,
    setSlide: m,
    onClose: g
  } = e, [x, p] = r.useState(!1), [j, b] = r.useState(null), {
    challenge: S
  } = t.methods.find(e => "webauthn" === e.type), y = async () => {
    p(!0), b(null);
    let e = o.isPlatformEmbedded && c.ZP.supportsFeature(h.eRX.WEBAUTHN) ? c.ZP.webAuthnAuthenticate(S) : i.U2(JSON.parse(S)).then(e => JSON.stringify(e)),
      t = async e => {
        try {
          await n({
            mfaType: "webauthn",
            data: e
          })
        } catch (e) {
          e instanceof s.Pd ? b(f.intl.string(f.t.xSCvBQ)) : b(e.message)
        }
      };
    try {
      let n = await e;
      await t(n)
    } catch (e) {
      d.Z.captureException(e), b(f.intl.string(f.t.xSCvBQ))
    } finally {
      p(!1)
    }
  };
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(u.Z.SlideHeader, {
      onClose: g
    }), null != j && (0, l.jsxs)(u.Z.SlideContent, {
      children: [(0, l.jsx)(u.Z.SlideError, {
        error: "The error is here now"
      }), (0, l.jsx)(u.Z.SlideError, {
        error: j
      })]
    }), (0, l.jsx)(u.Z.SlideFooter, {
      mfaChallenge: t,
      setSlide: m,
      leadingButton: (0, l.jsx)(a.zxk, {
        variant: "primary",
        text: f.intl.string(f.t.Xr3Ekp),
        loading: x,
        onClick: y,
        fullWidth: !0
      })
    })]
  })
}