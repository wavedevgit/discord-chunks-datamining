/** Chunk was on web.js **/
/** chunk id: 386949, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => a
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk643357 = require("./643357.js");

function a(e) {
  let {
    choiceId: t,
    choice: n,
    isSelected: a,
    onSelectionChange: s,
    inputType: l,
    textInputValue: c,
    onTextInputChange: u
  } = e, d = "true" === n.TextEntry, f = "choice-label-".concat(t), p = () => {
    s(t)
  }, _ = e => {
    a || s(t), null == u || u(t, e)
  };
  return (0, r.jsxs)("div", {
    className: o.optionContainer,
    children: [(0, r.jsxs)(i.P3F, {
      className: o.clickableRow,
      onClick: p,
      role: l,
      "aria-checked": a,
      "aria-labelledby": f,
      children: [(0, r.jsx)("div", {
        className: o.indicatorWrapper,
        children: "radio" === l ? (0, r.jsx)(i.Fj9, {
          disabled: false,
          checked: a
        }) : (0, r.jsx)(i.FZ5, {
          disabled: false,
          checked: a
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
      className: o.textInputWrapper,
      children: (0, r.jsx)(i.oil, {
        value: null != c ? c : "",
        onChange: _,
        disabled: !a
      })
    })]
  })
}