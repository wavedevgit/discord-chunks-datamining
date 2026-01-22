/** Chunk was on 88890 **/
/** chunk id: 947737, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./896048.js"), require("./492834.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk398450 = require("./398450.jsx"),
  Chunk985018 = require("./985018.jsx");

function o(e) {
  let {
    mfaChallenge: t,
    finish: n,
    setSlide: o,
    onClose: d,
    isSlideReady: c,
    headerAlignStart: u
  } = e, [f, h] = l.useState(false), [g, p] = l.useState(null), [m, b] = l.useState(""), j = l.useRef(null);
  return l.useEffect(() => {
    if (c) {
      var e;
      null == (e = j.current) || e.focus()
    }
  }, [c]), (0, r.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), h(true), n({
        mfaType: "password",
        data: m
      }).catch(e => {
        var t, n;
        p(null != (t = null == (n = e.body) ? true : n.message) ? t : e.message)
      }).finally(() => {
        h(false)
      })
    },
    children: [(0, r.jsx)(s.A.SlideHeader, {
      onClose: d,
      headerAlignStart: u
    }), (0, r.jsxs)(s.A.SlideContent, {
      children: [(0, r.jsx)(i.ksK, {
        label: a.intl.string(a.t["CIGa+7"]),
        inputRef: j,
        onChange: b,
        value: m,
        type: "password",
        autoComplete: "password",
        spellCheck: "false",
        disabled: f
      }), (0, r.jsx)(s.A.SlideError, {
        error: g
      })]
    }), (0, r.jsx)(s.A.SlideFooter, {
      mfaChallenge: t,
      setSlide: o,
      showConfirm: true,
      disabled: 0 === m.length,
      submitting: f
    })]
  })
}