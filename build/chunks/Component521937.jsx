/** Chunk was on 69773 **/
/** chunk id: 521937, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  v: () => m
}), require("./388685.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk593473 = require("./593473.js"),
  Chunk843611 = require("./843611.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk489863 = require("./489863.js"),
  Chunk511540 = require("./511540.js"),
  Chunk828878 = require("./828878.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk962514 = require("./962514.js");

function m(e) {
  let {
    onUserCodeAccepted: t,
    usePrefilledCode: n
  } = e, [o, m] = r.useState(() => {
    let {
      user_code: e
    } = l.parse(window.location.search);
    return n && null != e ? e : ""
  }), v = (0, s.TH)(), b = r.useCallback(() => {
    (0, u.c$)(v, "user_code_input_unauthorized")
  }, [v]), {
    manualSubmit: _,
    error: g,
    submitting: C
  } = (0, f.c)(o, t, b);
  return (0, a.jsxs)("div", {
    className: x.content,
    children: [(0, a.jsxs)("div", {
      className: x.innerContent,
      children: [(0, a.jsx)(d.X6q, {
        variant: "heading-xl/extrabold",
        className: x.text,
        children: h.intl.string(h.t.KYPNUl)
      }), (0, a.jsx)(d.Text, {
        variant: "text-md/medium",
        color: "header-secondary",
        className: x.text,
        children: h.intl.string(h.t.xRHk7e)
      }), (0, a.jsx)(c.Is, {
        placeholder: h.intl.formatToPlainString(h.t["0tbz6+"], {
          number: p.A.USER_CODE_LENGTH
        }),
        maxLength: p.A.USER_CODE_LENGTH,
        className: x.textInputContainer,
        inputClassName: i()(x.textInput, {
          [x.textInputError]: null != g
        }),
        autoComplete: "off",
        autoFocus: true,
        value: o,
        onChange: m,
        error: g
      })]
    }), (0, a.jsx)(d.zxk, {
      fullWidth: true,
      variant: "primary",
      text: h.intl.string(h.t["3PatS0"]),
      onClick: _,
      loading: C,
      disabled: o.length !== p.A.USER_CODE_LENGTH
    })]
  })
}