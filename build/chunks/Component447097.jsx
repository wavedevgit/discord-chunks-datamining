/** Chunk was on 52030 **/
/** chunk id: 447097, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./704826.js"), require("./35282.js"), require("./388685.js"), require("./457542.js");
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
  } = e, [h, g] = l.useState(false), [m, p] = l.useState(null), [b, j] = l.useState(""), x = l.useRef(null), y = o.intl.string(o.t["C/ZAw/"]), S = o.intl.string(o.t.fZSi1D), v = l.useCallback(e => {
    j(e), p(null)
  }, [j, p]);
  return l.useEffect(() => {
    if (u) {
      var e;
      null == (e = x.current) || e.focus()
    }
  }, [u]), (0, r.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), g(true), n({
        mfaType: "backup",
        data: b.replace(/-/g, "")
      }).catch(e => {
        var t, n;
        p(null != (n = null == (t = e.body) ? true : t.message) ? n : e.message)
      }).finally(() => {
        g(false)
      })
    },
    children: [(0, r.jsx)(a.Z.SlideHeader, {
      onClose: d,
      headerAlignStart: f
    }), (0, r.jsxs)(a.Z.SlideContent, {
      children: [(0, r.jsx)(s.oil, {
        label: y,
        inputRef: x,
        onChange: v,
        placeholder: S,
        maxLength: i.tL,
        minLength: i.th,
        value: b,
        spellCheck: "false",
        disabled: h
      }), (0, r.jsx)(a.Z.SlideError, {
        error: m
      })]
    }), (0, r.jsx)(a.Z.SlideFooter, {
      mfaChallenge: t,
      setSlide: c,
      showConfirm: true,
      disabled: b.length < 8,
      submitting: h
    })]
  })
}