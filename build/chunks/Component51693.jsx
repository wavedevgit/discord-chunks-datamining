/** Chunk was on 52030 **/
/** chunk id: 51693, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js"), require("./457542.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk658550 = require("./658550.js"),
  Chunk481060 = require("./481060.js"),
  Chunk507453 = require("./507453.jsx"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let {
    mfaChallenge: t,
    finish: n,
    setSlide: d,
    onClose: c,
    isSlideReady: u,
    headerAlignStart: h
  } = e, [f, g] = r.useState(false), [m, x] = r.useState(null), [p, S] = r.useState(""), j = r.useRef(null);
  return r.useEffect(() => {
    if (u) {
      var e;
      null == (e = j.current) || e.focus()
    }
  }, [u]), (0, l.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), g(true), x(null), n({
        mfaType: "totp",
        data: p
      }).catch(e => {
        var t, n;
        x(null != (n = null == (t = e.body) ? true : t.message) ? n : e.message)
      }).finally(() => {
        g(false)
      })
    },
    children: [(0, l.jsx)(a.Z.SlideHeader, {
      onClose: c,
      headerAlignStart: h
    }), (0, l.jsx)(a.Z.SlideContent, {
      scrollbarType: "none",
      children: (0, l.jsxs)(s.xJW, {
        title: o.intl.string(o.t.HZPBOT),
        children: [(0, l.jsx)(s.oil, {
          inputRef: j,
          onChange: S,
          placeholder: o.intl.string(o.t.tARzgo),
          maxLength: i.gH,
          minLength: i.gH,
          value: p,
          autoComplete: "one-time-code",
          spellCheck: "false",
          disabled: f
        }), (0, l.jsx)(a.Z.SlideError, {
          error: m
        })]
      })
    }), (0, l.jsx)(a.Z.SlideFooter, {
      mfaChallenge: t,
      setSlide: d,
      showConfirm: true,
      disabled: p.length !== i.gH,
      submitting: f
    })]
  })
}