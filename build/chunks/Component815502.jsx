/** Chunk was on 88890 **/
/** chunk id: 815502, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./747238.js"), require("./812715.js"), require("./896048.js"), require("./492834.js");
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
  } = e, [h, g] = l.useState(false), [p, m] = l.useState(null), [b, j] = l.useState(""), y = l.useRef(null), S = o.intl.string(o.t["C/ZAw/"]), x = o.intl.string(o.t.fZSi1D), v = l.useCallback(e => {
    j(e), m(null)
  }, [j, m]);
  return l.useEffect(() => {
    if (u) {
      var e;
      null == (e = y.current) || e.focus()
    }
  }, [u]), (0, r.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), g(true), n({
        mfaType: "backup",
        data: b.replace(/-/g, "")
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
      children: [(0, r.jsx)(s.ksK, {
        label: S,
        inputRef: y,
        onChange: v,
        placeholder: x,
        maxLength: i.pu,
        minLength: i.Zp,
        value: b,
        spellCheck: "false",
        disabled: h
      }), (0, r.jsx)(a.A.SlideError, {
        error: p
      })]
    }), (0, r.jsx)(a.A.SlideFooter, {
      mfaChallenge: t,
      setSlide: d,
      showConfirm: true,
      disabled: b.length < 8,
      submitting: h
    })]
  })
}