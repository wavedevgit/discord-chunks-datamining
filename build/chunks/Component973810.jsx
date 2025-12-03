/** Chunk was on 52030 **/
/** chunk id: 973810, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js"), require("./49124.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk849055 = require("./849055.js"),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk358085 = require("./358085.js"),
  Chunk960048 = require("./960048.js"),
  Chunk998502 = require("./998502.js"),
  Chunk507453 = require("./507453.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
  let {
    mfaChallenge: t,
    finish: n,
    setSlide: g,
    onClose: m,
    headerAlignStart: p
  } = e, [b, x] = r.useState(false), [S, j] = r.useState(null), {
    challenge: y
  } = t.methods.find(e => "webauthn" === e.type), v = async () => {
    x(true), j(null);
    let e = o.isPlatformEmbedded && u.ZP.supportsFeature(h.eRX.WEBAUTHN) ? u.ZP.webAuthnAuthenticate(y) : i.U2(JSON.parse(y)).then(e => JSON.stringify(e)),
      t = async e => {
        try {
          await n({
            mfaType: "webauthn",
            data: e
          })
        } catch (e) {
          e instanceof s.Pd ? j(f.intl.string(f.t.xSCvBf)) : j(e.message)
        }
      };
    try {
      let n = await e;
      await t(n)
    } catch (e) {
      d.Z.captureException(e), j(f.intl.string(f.t.xSCvBf))
    } finally {
      x(false)
    }
  };
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(c.Z.SlideHeader, {
      onClose: m,
      headerAlignStart: p
    }), null != S && (0, l.jsx)(c.Z.SlideContent, {
      children: (0, l.jsx)(c.Z.SlideError, {
        error: S
      })
    }), (0, l.jsx)(c.Z.SlideFooter, {
      mfaChallenge: t,
      setSlide: g,
      leadingButton: (0, l.jsx)(a.Button, {
        variant: "primary",
        text: f.intl.string(f.t.Xr3Eks),
        loading: b,
        onClick: v,
        fullWidth: true
      })
    })]
  })
}