/** Chunk was on 52030 **/
/** chunk id: 51693, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js"), require("./457542.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk658550 = require("./658550.js"),
  Chunk481060 = require("./481060.js"),
  Chunk507453 = require("./507453.jsx"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let {
    mfaChallenge: t,
    finish: n,
    setSlide: d,
    onClose: u,
    isSlideReady: c,
    headerAlignStart: h
  } = e, [f, g] = r.useState(false), [m, p] = r.useState(null), [b, x] = r.useState(""), S = r.useRef(null);
  return r.useEffect(() => {
    if (c) {
      var e;
      null == (e = S.current) || e.focus()
    }
  }, [c]), (0, l.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), g(true), p(null), n({
        mfaType: "totp",
        data: b
      }).catch(e => {
        var t, n;
        p(null != (n = null == (t = e.body) ? true : t.message) ? n : e.message)
      }).finally(() => {
        g(false)
      })
    },
    children: [(0, l.jsx)(a.Z.SlideHeader, {
      onClose: u,
      headerAlignStart: h
    }), (0, l.jsxs)(a.Z.SlideContent, {
      scrollbarType: "none",
      children: [(0, l.jsx)(s.oil, {
        label: o.intl.string(o.t.HZPBOd),
        inputRef: S,
        onChange: x,
        placeholder: o.intl.string(o.t.tARzgo),
        maxLength: i.gH,
        minLength: i.gH,
        value: b,
        autoComplete: "one-time-code",
        spellCheck: "false",
        disabled: f
      }), (0, l.jsx)(a.Z.SlideError, {
        error: m
      })]
    }), (0, l.jsx)(a.Z.SlideFooter, {
      mfaChallenge: t,
      setSlide: d,
      showConfirm: true,
      disabled: b.length !== i.gH,
      submitting: f
    })]
  })
}