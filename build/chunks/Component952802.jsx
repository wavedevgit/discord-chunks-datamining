/** Chunk was on 25761 **/
/** chunk id: 952802, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk742458 = require("./742458.js"),
  Chunk766650 = require("./766650.jsx"),
  Chunk264735 = require("./264735.js"),
  Chunk769255 = require("./769255.js");

function f(e) {
  let {
    alpha2: t,
    countryCode: n,
    forceMode: i,
    label: f,
    error: m,
    className: g,
    required: y,
    value: b,
    setRef: w,
    placeholder: S,
    autoFocus: O,
    maxLength: C,
    spellCheck: x,
    autoComplete: j,
    autoCapitalize: v,
    autoCorrect: P,
    onChange: E,
    inputClassName: N
  } = e, A = (0, c.Dt)(), [k, T] = s.useState(false), Z = (0, u.o9)(i, b);
  return (0, r.jsx)(o.xJW, {
    title: f,
    error: m,
    className: g,
    required: y,
    tag: "label",
    htmlFor: A,
    children: (0, r.jsxs)("div", {
      className: a()(h.input, p.input, N, {
        [h.error]: null != m,
        [h.focused]: k
      }),
      children: [(0, r.jsx)(d.Z, {
        show: Z,
        alpha2: t,
        countryCode: n
      }), (0, r.jsx)(l.Is, {
        id: A,
        name: "email",
        type: i === u.Nz.EMAIL ? "email" : "text",
        value: b,
        inputRef: w,
        placeholder: S,
        "aria-label": f,
        required: y,
        onChange: function(e) {
          let t = (0, u.o9)(i, e) ? n : "";
          E(e, t)
        },
        autoComplete: j,
        autoCapitalize: v,
        autoCorrect: P,
        autoFocus: O,
        maxLength: C,
        spellCheck: x,
        className: p.inputWrapper,
        inputClassName: p.inputField,
        onFocus: () => T(true),
        onBlur: () => T(false)
      })]
    })
  })
}