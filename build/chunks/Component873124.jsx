/** Chunk was on 52030 **/
/** chunk id: 873124, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js"), require("./457542.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk507453 = require("./507453.jsx"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  let {
    mfaChallenge: t,
    finish: n,
    setSlide: o,
    onClose: d,
    isSlideReady: c,
    headerAlignStart: u
  } = e, [h, f] = r.useState(false), [g, m] = r.useState(null), [p, x] = r.useState(""), b = r.useRef(null);
  return r.useEffect(() => {
    if (c) {
      var e;
      null == (e = b.current) || e.focus()
    }
  }, [c]), (0, l.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), f(true), n({
        mfaType: "password",
        data: p
      }).catch(e => {
        var t, n;
        m(null != (n = null == (t = e.body) ? true : t.message) ? n : e.message)
      }).finally(() => {
        f(false)
      })
    },
    children: [(0, l.jsx)(s.Z.SlideHeader, {
      onClose: d,
      headerAlignStart: u
    }), (0, l.jsxs)(s.Z.SlideContent, {
      children: [(0, l.jsx)(i.oil, {
        label: a.intl.string(a.t["CIGa+/"]),
        inputRef: b,
        onChange: x,
        value: p,
        type: "password",
        autoComplete: "password",
        spellCheck: "false",
        disabled: h
      }), (0, l.jsx)(s.Z.SlideError, {
        error: g
      })]
    }), (0, l.jsx)(s.Z.SlideFooter, {
      mfaChallenge: t,
      setSlide: o,
      showConfirm: true,
      disabled: 0 === p.length,
      submitting: h
    })]
  })
}