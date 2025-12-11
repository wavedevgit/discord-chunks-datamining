/** Chunk was on web.js **/
/** chunk id: 355497, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => u
}), require("./388685.js"), require("./457542.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk911359 = require("./911359.js");

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
    onPasswordChange: m
  } = e, [h, g] = i.useState(""), [E, b] = i.useState(null), [y, O] = i.useState(false), v = e => null != _ && (null == e ? true : e.code) === _, S = e => {
    e.preventDefault(), O(true), f(h).then(e => d(null != e ? e : true), e => {
      null != e.body && (null == p || p(e.body), !v(e.body) && (e.body.password ? (b(e.body.password), O(false)) : e.body.message && (b(e.body.message), O(false))))
    }).finally(() => O(false))
  }, I = e => {
    null == m || m(e), g(e)
  }, T = i.useCallback(async () => {
    await d()
  }, [d]), C = i.Children.count(c) > 0 ? (0, r.jsx)(o.Zbd, {
    type: o.Zbd.Types.WARNING,
    className: l.card,
    children: (0, r.jsx)(o.Text, {
      color: "currentColor",
      variant: "text-md/normal",
      children: c
    })
  }) : null;
  return (0, r.jsx)("form", {
    onSubmit: S,
    children: (0, r.jsxs)(a.u_l, {
      title: t,
      actions: [{
        text: s.intl.string(s.t["ETE/oC"]),
        onClick: T,
        variant: "secondary"
      }, {
        text: null != n ? n : s.intl.string(s.t["cY+Oob"]),
        type: "submit",
        disabled: y || 0 === h.length
      }],
      onClose: T,
      transitionState: u,
      children: [C, (0, r.jsxs)("div", {
        className: l.spacing,
        children: [(0, r.jsx)(o.oil, {
          type: "password",
          label: s.intl.string(s.t["CIGa+7"]),
          autoComplete: "current-password",
          autoFocus: true,
          value: h,
          onChange: I,
          required: true
        }), null != E && "" !== E ? (0, r.jsxs)(o.Text, {
          variant: "text-xs/normal",
          color: "text-feedback-critical",
          className: l.error,
          children: [" ", E, " "]
        }) : null]
      })]
    })
  })
}
c.key = () => "password-confirm-modal";
let u = c