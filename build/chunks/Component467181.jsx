/** Chunk was on 88890 **/
/** chunk id: 467181, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./896048.js"), require("./492834.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk533925 = require("./533925.js"),
  Chunk397927 = require("./397927.js"),
  Chunk398450 = require("./398450.jsx"),
  Chunk985018 = require("./985018.jsx");

function d(e) {
  let {
    mfaChallenge: t,
    finish: n,
    setSlide: d,
    onClose: c,
    isSlideReady: u,
    headerAlignStart: f
  } = e, [h, g] = l.useState(false), [p, m] = l.useState(null), [b, j] = l.useState(""), y = l.useRef(null);
  return l.useEffect(() => {
    if (u) {
      var e;
      null == (e = y.current) || e.focus()
    }
  }, [u]), (0, r.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), g(true), m(null), n({
        mfaType: "totp",
        data: b
      }).catch(e => {
        var t, n;
        m(null != (t = null == (n = e.body) ? true : n.message) ? t : e.message)
      }).finally(() => {
        g(false)
      })
    },
    children: [(0, r.jsx)(a.A.SlideHeader, {
      onClose: c,
      headerAlignStart: f
    }), (0, r.jsxs)(a.A.SlideContent, {
      scrollbarType: "none",
      children: [(0, r.jsx)(s.ksK, {
        label: o.intl.string(o.t.HZPBOd),
        inputRef: y,
        onChange: j,
        placeholder: o.intl.string(o.t.tARzgo),
        maxLength: i.XZ,
        minLength: i.XZ,
        value: b,
        autoComplete: "one-time-code",
        spellCheck: "false",
        disabled: h
      }), (0, r.jsx)(a.A.SlideError, {
        error: p
      })]
    }), (0, r.jsx)(a.A.SlideFooter, {
      mfaChallenge: t,
      setSlide: d,
      showConfirm: true,
      disabled: b.length !== i.XZ,
      submitting: h
    })]
  })
}