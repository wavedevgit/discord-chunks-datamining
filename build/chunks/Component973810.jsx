/** Chunk was on 52030 **/
/** chunk id: 973810, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./49124.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk849055 = require("./849055.js"),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk358085 = require("./358085.js"),
  Chunk960048 = require("./960048.js"),
  Chunk998502 = require("./998502.js"),
  Chunk507453 = require("./507453.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
  let {
    mfaChallenge: t,
    finish: n,
    setSlide: m,
    onClose: g,
    headerAlignStart: x
  } = e, [p, S] = r.useState(false), [j, b] = r.useState(null), {
    challenge: y
  } = t.methods.find(e => "webauthn" === e.type), v = async () => {
    S(true), b(null);
    let e = o.isPlatformEmbedded && c.ZP.supportsFeature(h.eRX.WEBAUTHN) ? c.ZP.webAuthnAuthenticate(y) : i.U2(JSON.parse(y)).then(e => JSON.stringify(e)),
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
      S(false)
    }
  };
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(u.Z.SlideHeader, {
      onClose: g,
      headerAlignStart: x
    }), null != j && (0, l.jsx)(u.Z.SlideContent, {
      children: (0, l.jsx)(u.Z.SlideError, {
        error: j
      })
    }), (0, l.jsx)(u.Z.SlideFooter, {
      mfaChallenge: t,
      setSlide: m,
      leadingButton: (0, l.jsx)(a.zxk, {
        variant: "primary",
        text: f.intl.string(f.t.Xr3Ekp),
        loading: p,
        onClick: v,
        fullWidth: true
      })
    })]
  })
}