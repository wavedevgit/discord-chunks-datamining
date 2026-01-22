/** Chunk was on web.js **/
/** chunk id: 662758, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => u
}), require("./896048.js"), require("./492834.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk574592 = require("./574592.js");

function c(e) {
  let {
    title: t,
    actionText: n,
    children: c,
    transitionState: u,
    onClose: d,
    handleSubmit: f,
    onError: p,
    skipErrorMsgAbortCode: _,
    onPasswordChange: h
  } = e, [m, g] = i.useState(""), [E, b] = i.useState(null), [y, O] = i.useState(false), A = e => null != _ && (null == e ? true : e.code) === _, v = e => {
    e.preventDefault(), O(true), f(m).then(e => d(null != e ? e : true), e => {
      null == e.body || (null == p || p(e.body), !A(e.body) && (e.body.password ? (b(e.body.password), O(false)) : e.body.message && (b(e.body.message), O(false))))
    }).finally(() => O(false))
  }, S = e => {
    null == h || h(e), g(e)
  }, I = i.useCallback(async () => {
    await d()
  }, [d]), T = i.Children.count(c) > 0 ? (0, r.jsx)(s.ZpM, {
    type: s.ZpM.Types.WARNING,
    className: l.Nr,
    children: (0, r.jsx)(s.Text, {
      color: "currentColor",
      variant: "text-md/normal",
      children: c
    })
  }) : null;
  return (0, r.jsx)("form", {
    onSubmit: v,
    children: (0, r.jsxs)(a.aFV, {
      title: t,
      actions: [{
        text: o.intl.string(o.t["ETE/oC"]),
        onClick: I,
        variant: "secondary"
      }, {
        text: null != n ? n : o.intl.string(o.t["cY+Oob"]),
        type: "submit",
        disabled: y || 0 === m.length
      }],
      onClose: I,
      transitionState: u,
      children: [T, (0, r.jsxs)("div", {
        className: l.YK,
        children: [(0, r.jsx)(s.ksK, {
          type: "password",
          label: o.intl.string(o.t["CIGa+7"]),
          autoComplete: "current-password",
          autoFocus: true,
          value: m,
          onChange: S,
          required: true
        }), null != E && "" !== E ? (0, r.jsxs)(s.Text, {
          variant: "text-xs/normal",
          color: "text-feedback-critical",
          className: l.z3,
          children: [" ", E, " "]
        }) : null]
      })]
    })
  })
}
c.key = () => "password-confirm-modal";
let u = c