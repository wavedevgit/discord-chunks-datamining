/** Chunk was on 52030 **/
/** chunk id: 447097, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./704826.js"), require("./35282.js"), require("./388685.js"), require("./457542.js");
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
  } = e, [f, g] = r.useState(false), [m, p] = r.useState(null), [x, S] = r.useState(""), b = r.useRef(null), j = o.intl.string(o.t["C/ZAw8"]), y = o.intl.string(o.t.fZSi1N), v = r.useCallback(e => {
    S(e), p(null)
  }, [S, p]);
  return r.useEffect(() => {
    if (u) {
      var e;
      null == (e = b.current) || e.focus()
    }
  }, [u]), (0, l.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), g(true), n({
        mfaType: "backup",
        data: x.replace(/-/g, "")
      }).catch(e => {
        var t, n;
        p(null != (n = null == (t = e.body) ? true : t.message) ? n : e.message)
      }).finally(() => {
        g(false)
      })
    },
    children: [(0, l.jsx)(a.Z.SlideHeader, {
      onClose: c,
      headerAlignStart: h
    }), (0, l.jsxs)(a.Z.SlideContent, {
      children: [(0, l.jsx)(s.oil, {
        label: j,
        inputRef: b,
        onChange: v,
        placeholder: y,
        maxLength: i.tL,
        minLength: i.th,
        value: x,
        spellCheck: "false",
        disabled: f
      }), (0, l.jsx)(a.Z.SlideError, {
        error: m
      })]
    }), (0, l.jsx)(a.Z.SlideFooter, {
      mfaChallenge: t,
      setSlide: d,
      showConfirm: true,
      disabled: x.length < 8,
      submitting: f
    })]
  })
}