/** Chunk was on 69773 **/
/** chunk id: 521937, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  v: () => h
}), require("./388685.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk593473 = require("./593473.js"),
  Chunk843611 = require("./843611.js"),
  Chunk481060 = require("./481060.js"),
  Chunk489863 = require("./489863.js"),
  Chunk511540 = require("./511540.js"),
  Chunk828878 = require("./828878.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk907441 = require("./907441.js");

function h(e) {
  let {
    onUserCodeAccepted: t,
    usePrefilledCode: n
  } = e, [h, p] = r.useState(() => {
    let {
      user_code: e
    } = o.parse(window.location.search);
    return n && null != e ? e : ""
  }), x = (0, i.TH)(), m = r.useCallback(() => {
    (0, s.c$)(x, "user_code_input_unauthorized")
  }, [x]), {
    manualSubmit: v,
    error: b,
    submitting: g
  } = (0, c.c)(h, t, m);
  return (0, a.jsxs)("div", {
    className: f.content,
    children: [(0, a.jsxs)("div", {
      className: f.innerContent,
      children: [(0, a.jsx)(l.X6q, {
        variant: "heading-xl/extrabold",
        className: f.text,
        children: u.intl.string(u.t.KYPNUl)
      }), (0, a.jsxs)(l.Kqy, {
        gap: 24,
        children: [(0, a.jsx)(l.Text, {
          variant: "text-md/medium",
          color: "header-secondary",
          className: f.text,
          children: u.intl.string(u.t.xRHk7e)
        }), (0, a.jsx)(l.oil, {
          placeholder: u.intl.formatToPlainString(u.t["0tbz6+"], {
            number: d.A.USER_CODE_LENGTH
          }),
          maxLength: d.A.USER_CODE_LENGTH,
          autoComplete: "off",
          autoFocus: true,
          value: h,
          onChange: p,
          error: b,
          fullWidth: true
        })]
      })]
    }), (0, a.jsx)(l.zxk, {
      fullWidth: true,
      variant: "primary",
      text: u.intl.string(u.t["3PatS0"]),
      onClick: v,
      loading: g,
      disabled: h.length !== d.A.USER_CODE_LENGTH
    })]
  })
}