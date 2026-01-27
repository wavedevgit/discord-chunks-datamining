/** Chunk was on 34078 **/
/** chunk id: 146571, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk915089 = require("./915089.js"),
  Chunk628387 = require("./628387.js"),
  Chunk920768 = require("./920768.jsx"),
  Chunk291255 = require("./291255.js"),
  Chunk713545 = require("./713545.js");

function f(e) {
  let {
    alpha2: t,
    countryCode: r,
    forceMode: i,
    label: f,
    error: m,
    className: y,
    required: g,
    value: O,
    setRef: b,
    placeholder: j,
    autoFocus: w,
    maxLength: C,
    spellCheck: S,
    autoComplete: A,
    autoCapitalize: v,
    autoCorrect: E,
    onChange: x,
    inputClassName: P
  } = e, N = (0, c.GV)(), [k, T] = s.useState(false), _ = (0, u.Vl)(i, O);
  return (0, n.jsx)("div", {
    className: null != y ? y : true,
    children: (0, n.jsx)(o.D0$, {
      label: f,
      errorMessage: m,
      required: g,
      id: N,
      children: (0, n.jsxs)("div", {
        className: l()(p.hF, d.hF, P, {
          [p.z3]: null != m,
          [p.in]: k
        }),
        children: [(0, n.jsx)(h.A, {
          show: _,
          alpha2: t,
          countryCode: r
        }), (0, n.jsx)(a.ob, {
          id: N,
          name: "email",
          type: i === u.Pd.EMAIL ? "email" : "text",
          value: O,
          inputRef: b,
          placeholder: j,
          "aria-label": f,
          required: g,
          onChange: function(e) {
            let t = (0, u.Vl)(i, e) ? r : "";
            x(e, t)
          },
          autoComplete: A,
          autoCapitalize: v,
          autoCorrect: E,
          autoFocus: w,
          maxLength: C,
          spellCheck: S,
          className: d.I6,
          inputClassName: d.LF,
          onFocus: () => T(true),
          onBlur: () => T(false)
        })]
      })
    })
  })
}