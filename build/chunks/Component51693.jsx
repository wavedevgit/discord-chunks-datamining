/** Chunk was on 52030 **/
/** chunk id: 51693, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js"), require("./457542.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk658550 = require("./658550.js"),
  Chunk481060 = require("./481060.js"),
  Chunk507453 = require("./507453.jsx"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let {
    mfaChallenge: t,
    finish: n,
    setSlide: c,
    onClose: d,
    isSlideReady: u,
    headerAlignStart: f
  } = e, [h, g] = l.useState(false), [m, b] = l.useState(null), [p, j] = l.useState(""), y = l.useRef(null);
  return l.useEffect(() => {
    if (u) {
      var e;
      null == (e = y.current) || e.focus()
    }
  }, [u]), (0, r.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), g(true), b(null), n({
        mfaType: "totp",
        data: p
      }).catch(e => {
        var t, n;
        b(null != (n = null == (t = e.body) ? true : t.message) ? n : e.message)
      }).finally(() => {
        g(false)
      })
    },
    children: [(0, r.jsx)(a.Z.SlideHeader, {
      onClose: d,
      headerAlignStart: f
    }), (0, r.jsxs)(a.Z.SlideContent, {
      scrollbarType: "none",
      children: [(0, r.jsx)(s.oil, {
        label: o.intl.string(o.t.HZPBOd),
        inputRef: y,
        onChange: j,
        placeholder: o.intl.string(o.t.tARzgo),
        maxLength: i.gH,
        minLength: i.gH,
        value: p,
        autoComplete: "one-time-code",
        spellCheck: "false",
        disabled: h
      }), (0, r.jsx)(a.Z.SlideError, {
        error: m
      })]
    }), (0, r.jsx)(a.Z.SlideFooter, {
      mfaChallenge: t,
      setSlide: c,
      showConfirm: true,
      disabled: p.length !== i.gH,
      submitting: h
    })]
  })
}