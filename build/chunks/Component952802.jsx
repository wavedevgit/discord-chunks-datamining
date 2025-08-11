/** Chunk was on 74941 **/
/** chunk id: 952802, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk742458 = require("./742458.js"),
  Chunk766650 = require("./766650.jsx"),
  Chunk553846 = require("./553846.js"),
  Chunk165005 = require("./165005.js");

function m(e) {
  let {
    alpha2: t,
    countryCode: r,
    forceMode: i,
    label: m,
    error: f,
    className: g,
    required: b,
    value: j,
    setRef: y,
    placeholder: x,
    autoFocus: O,
    maxLength: w,
    spellCheck: S,
    autoComplete: C,
    autoCapitalize: v,
    autoCorrect: P,
    onChange: E,
    inputClassName: N
  } = e, k = (0, c.Dt)(), [Z, T] = s.useState(false), A = (0, u.o9)(i, j);
  return (0, n.jsx)(a.xJW, {
    title: m,
    error: f,
    className: g,
    required: b,
    tag: "label",
    htmlFor: k,
    children: (0, n.jsxs)("div", {
      className: l()(p.input, d.input, N, {
        [p.error]: null != f,
        [p.focused]: Z
      }),
      children: [(0, n.jsx)(h.Z, {
        show: A,
        alpha2: t,
        countryCode: r
      }), (0, n.jsx)(o.Is, {
        id: k,
        name: "email",
        type: i === u.Nz.EMAIL ? "email" : "text",
        value: j,
        inputRef: y,
        placeholder: x,
        "aria-label": m,
        required: b,
        onChange: function(e) {
          let t = (0, u.o9)(i, e) ? r : "";
          E(e, t)
        },
        autoComplete: C,
        autoCapitalize: v,
        autoCorrect: P,
        autoFocus: O,
        maxLength: w,
        spellCheck: S,
        className: d.inputWrapper,
        inputClassName: d.inputField,
        onFocus: () => T(true),
        onBlur: () => T(false)
      })]
    })
  })
}