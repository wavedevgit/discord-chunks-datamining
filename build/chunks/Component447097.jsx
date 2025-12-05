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
    onClose: u,
    isSlideReady: d,
    headerAlignStart: f
  } = e, [h, g] = l.useState(false), [m, b] = l.useState(null), [p, j] = l.useState(""), y = l.useRef(null), x = o.intl.string(o.t["C/ZAw/"]), S = o.intl.string(o.t.fZSi1D), v = l.useCallback(e => {
    j(e), b(null)
  }, [j, b]);
  return l.useEffect(() => {
    if (d) {
      var e;
      null == (e = y.current) || e.focus()
    }
  }, [d]), (0, r.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), g(true), n({
        mfaType: "backup",
        data: p.replace(/-/g, "")
      }).catch(e => {
        var t, n;
        b(null != (n = null == (t = e.body) ? true : t.message) ? n : e.message)
      }).finally(() => {
        g(false)
      })
    },
    children: [(0, r.jsx)(a.Z.SlideHeader, {
      onClose: u,
      headerAlignStart: f
    }), (0, r.jsxs)(a.Z.SlideContent, {
      children: [(0, r.jsx)(s.oil, {
        label: x,
        inputRef: y,
        onChange: v,
        placeholder: S,
        maxLength: i.tL,
        minLength: i.th,
        value: p,
        spellCheck: "false",
        disabled: h
      }), (0, r.jsx)(a.Z.SlideError, {
        error: m
      })]
    }), (0, r.jsx)(a.Z.SlideFooter, {
      mfaChallenge: t,
      setSlide: c,
      showConfirm: true,
      disabled: p.length < 8,
      submitting: h
    })]
  })
}