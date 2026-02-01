/** Chunk was on 9753 **/
/** chunk id: 597864, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk314582 = require("./314582.js");

function a(e) {
  let {
    choiceId: t,
    choice: n,
    isSelected: a,
    onSelectionChange: s,
    inputType: o,
    textInputValue: c,
    onTextInputChange: u
  } = e, d = "true" === n.TextEntry, p = "choice-label-".concat(t);
  return (0, r.jsxs)("div", {
    className: l.NV,
    children: [(0, r.jsxs)(i.DUT, {
      className: l.d,
      onClick: () => {
        s(t)
      },
      role: o,
      "aria-checked": a,
      "aria-labelledby": p,
      children: [(0, r.jsx)("div", {
        className: l.jl,
        children: "radio" === o ? (0, r.jsx)(i.TN6, {
          disabled: false,
          checked: a
        }) : (0, r.jsx)(i.P7L, {
          disabled: false,
          checked: a
        })
      }), (0, r.jsx)(i.Text, {
        id: p,
        variant: "text-md/normal",
        color: "text-subtle",
        children: (0, r.jsx)("div", {
          dangerouslySetInnerHTML: {
            __html: n.Display
          }
        })
      })]
    }), d && (0, r.jsx)("div", {
      className: l.Vi,
      children: (0, r.jsx)(i.ksK, {
        value: null != c ? c : "",
        onChange: e => {
          a || s(t), null == u || u(t, e)
        },
        disabled: !a
      })
    })]
  })
}