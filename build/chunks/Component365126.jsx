/** Chunk was on 88890 **/
/** chunk id: 365126, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk562465 = require("./562465.js"),
  Chunk397927 = require("./397927.js"),
  Chunk293731 = require("./293731.js"),
  Chunk464477 = require("./464477.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk398450 = require("./398450.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function g(e) {
  let {
    mfaChallenge: t,
    finish: n,
    setSlide: g,
    onClose: p,
    headerAlignStart: m
  } = e, [b, j] = l.useState(false), [y, S] = l.useState(null), {
    challenge: x
  } = t.methods.find(e => "webauthn" === e.type), v = async () => {
    j(true), S(null);
    let e = d.isPlatformEmbedded && c.Ay.supportsFeature(f.BYE.WEBAUTHN) ? c.Ay.webAuthnAuthenticate(x) : (0, a.J)(x),
      t = async e => {
        try {
          await n({
            mfaType: "webauthn",
            data: e
          })
        } catch (e) {
          e instanceof i.oh ? S(h.intl.string(h.t.xSCvBf)) : ((0, o.Os)(e, {}), S(e.message))
        }
      };
    try {
      let n = await e;
      await t(n)
    } catch (e) {
      (0, o.Os)(e, {
        extra: {
          error_type: "webauthn_api_error"
        }
      }), S(h.intl.string(h.t.xSCvBf))
    } finally {
      j(false)
    }
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.A.SlideHeader, {
      onClose: p,
      headerAlignStart: m
    }), null != y && (0, r.jsx)(u.A.SlideContent, {
      children: (0, r.jsx)(u.A.SlideError, {
        error: y
      })
    }), (0, r.jsx)(u.A.SlideFooter, {
      mfaChallenge: t,
      setSlide: g,
      trailingButton: (0, r.jsx)(s.Button, {
        variant: "primary",
        text: h.intl.string(h.t.Xr3Eks),
        loading: b,
        onClick: v,
        fullWidth: true
      })
    })]
  })
}