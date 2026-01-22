/** Chunk was on web.js **/
/** chunk id: 597864, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk314582 = require("./314582.js");

function s(e) {
  let {
    choiceId: t,
    choice: n,
    isSelected: s,
    onSelectionChange: o,
    inputType: l,
    textInputValue: c,
    onTextInputChange: u
  } = e, d = "true" === n.TextEntry, f = "choice-label-".concat(t), p = () => {
    o(t)
  }, _ = e => {
    s || o(t), null == u || u(t, e)
  };
  return (0, r.jsxs)("div", {
    className: a.NV,
    children: [(0, r.jsxs)(i.DUT, {
      className: a.d,
      onClick: p,
      role: l,
      "aria-checked": s,
      "aria-labelledby": f,
      children: [(0, r.jsx)("div", {
        className: a.jl,
        children: "radio" === l ? (0, r.jsx)(i.TN6, {
          disabled: false,
          checked: s
        }) : (0, r.jsx)(i.P7L, {
          disabled: false,
          checked: s
        })
      }), (0, r.jsx)(i.Text, {
        id: f,
        variant: "text-md/normal",
        color: "text-subtle",
        children: (0, r.jsx)("div", {
          dangerouslySetInnerHTML: {
            __html: n.Display
          }
        })
      })]
    }), d && (0, r.jsx)("div", {
      className: a.Vi,
      children: (0, r.jsx)(i.ksK, {
        value: null != c ? c : "",
        onChange: _,
        disabled: !s
      })
    })]
  })
}