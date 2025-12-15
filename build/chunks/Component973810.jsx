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
  Chunk287880 = require("./287880.js"),
  Chunk358085 = require("./358085.js"),
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
    headerAlignStart: b
  } = e, [p, j] = l.useState(false), [x, y] = l.useState(null), {
    challenge: S
  } = t.methods.find(e => "webauthn" === e.type), v = async () => {
    j(true), y(null);
    let e = c.isPlatformEmbedded && u.ZP.supportsFeature(f.eRX.WEBAUTHN) ? u.ZP.webAuthnAuthenticate(S) : i.U2(JSON.parse(S)).then(e => JSON.stringify(e)),
      t = async e => {
        try {
          await n({
            mfaType: "webauthn",
            data: e
          })
        } catch (e) {
          e instanceof s.Pd ? y(h.intl.string(h.t.xSCvBf)) : ((0, o.SN)(e, {}), y(e.message))
        }
      };
    try {
      let n = await e;
      await t(n)
    } catch (e) {
      (0, o.SN)(e, {
        extra: {
          error_type: "webauthn_api_error"
        }
      }), y(h.intl.string(h.t.xSCvBf))
    } finally {
      j(false)
    }
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.Z.SlideHeader, {
      onClose: m,
      headerAlignStart: b
    }), null != x && (0, r.jsx)(d.Z.SlideContent, {
      children: (0, r.jsx)(d.Z.SlideError, {
        error: x
      })
    }), (0, r.jsx)(d.Z.SlideFooter, {
      mfaChallenge: t,
      setSlide: g,
      trailingButton: (0, r.jsx)(a.Button, {
        variant: "primary",
        text: h.intl.string(h.t.Xr3Eks),
        loading: p,
        onClick: v,
        fullWidth: true
      })
    })]
  })
}