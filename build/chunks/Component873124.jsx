/** Chunk was on 52030 **/
/** chunk id: 873124, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js"), require("./457542.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk507453 = require("./507453.jsx"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  let {
    mfaChallenge: t,
    finish: n,
    setSlide: o,
    onClose: c,
    isSlideReady: d,
    headerAlignStart: u
  } = e, [f, h] = l.useState(false), [g, m] = l.useState(null), [b, p] = l.useState(""), j = l.useRef(null);
  return l.useEffect(() => {
    if (d) {
      var e;
      null == (e = j.current) || e.focus()
    }
  }, [d]), (0, r.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), h(true), n({
        mfaType: "password",
        data: b
      }).catch(e => {
        var t, n;
        m(null != (n = null == (t = e.body) ? true : t.message) ? n : e.message)
      }).finally(() => {
        h(false)
      })
    },
    children: [(0, r.jsx)(s.Z.SlideHeader, {
      onClose: c,
      headerAlignStart: u
    }), (0, r.jsxs)(s.Z.SlideContent, {
      children: [(0, r.jsx)(i.oil, {
        label: a.intl.string(a.t["CIGa+7"]),
        inputRef: j,
        onChange: p,
        value: b,
        type: "password",
        autoComplete: "password",
        spellCheck: "false",
        disabled: f
      }), (0, r.jsx)(s.Z.SlideError, {
        error: g
      })]
    }), (0, r.jsx)(s.Z.SlideFooter, {
      mfaChallenge: t,
      setSlide: o,
      showConfirm: true,
      disabled: 0 === b.length,
      submitting: f
    })]
  })
}