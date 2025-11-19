/** Chunk was on 41619 **/
/** chunk id: 952802, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk742458 = require("./742458.js"),
  Chunk766650 = require("./766650.jsx"),
  Chunk584090 = require("./584090.js"),
  Chunk979712 = require("./979712.js");

function f(e) {
  let {
    alpha2: t,
    countryCode: r,
    forceMode: i,
    label: f,
    error: m,
    className: g,
    required: y,
    value: O,
    setRef: C,
    placeholder: b,
    autoFocus: j,
    maxLength: w,
    spellCheck: v,
    autoComplete: S,
    autoCapitalize: x,
    autoCorrect: P,
    onChange: E,
    inputClassName: N
  } = e, k = (0, c.Dt)(), [Z, A] = s.useState(false), T = (0, u.o9)(i, O);
  return (0, n.jsx)("div", {
    className: null != g ? g : true,
    children: (0, n.jsx)(l.gNt, {
      label: f,
      errorMessage: m,
      required: y,
      id: k,
      children: (0, n.jsxs)("div", {
        className: a()(p.input, h.input, N, {
          [p.error]: null != m,
          [p.focused]: Z
        }),
        children: [(0, n.jsx)(d.Z, {
          show: T,
          alpha2: t,
          countryCode: r
        }), (0, n.jsx)(o.Is, {
          id: k,
          name: "email",
          type: i === u.Nz.EMAIL ? "email" : "text",
          value: O,
          inputRef: C,
          placeholder: b,
          "aria-label": f,
          required: y,
          onChange: function(e) {
            let t = (0, u.o9)(i, e) ? r : "";
            E(e, t)
          },
          autoComplete: S,
          autoCapitalize: x,
          autoCorrect: P,
          autoFocus: j,
          maxLength: w,
          spellCheck: v,
          className: h.inputWrapper,
          inputClassName: h.inputField,
          onFocus: () => A(true),
          onBlur: () => A(false)
        })]
      })
    })
  })
}