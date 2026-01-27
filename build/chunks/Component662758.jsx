/** Chunk was on 84704 **/
/** chunk id: 662758, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => E
}), require("./896048.js"), require("./492834.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk574592 = require("./574592.js");

function u(e) {
  let {
    title: t,
    actionText: n,
    children: u,
    transitionState: E,
    onClose: c,
    handleSubmit: d,
    onError: h,
    skipErrorMsgAbortCode: R,
    onPasswordChange: I
  } = e, [p, _] = s.useState(""), [f, g] = s.useState(null), [C, m] = s.useState(false), b = s.useCallback(async () => {
    await c()
  }, [c]), A = s.Children.count(u) > 0 ? (0, l.jsx)(i.ZpM, {
    type: i.ZpM.Types.WARNING,
    className: r.Nr,
    children: (0, l.jsx)(i.Text, {
      color: "currentColor",
      variant: "text-md/normal",
      children: u
    })
  }) : null;
  return (0, l.jsx)("form", {
    onSubmit: e => {
      e.preventDefault(), m(true), d(p).then(e => c(null != e ? e : true), e => {
        let t;
        null != e.body && (null == h || h(e.body), t = e.body, (null == R || (null == t ? true : t.code) !== R) && (e.body.password ? (g(e.body.password), m(false)) : e.body.message && (g(e.body.message), m(false))))
      }).finally(() => m(false))
    },
    children: (0, l.jsxs)(a.aFV, {
      title: t,
      actions: [{
        text: o.intl.string(o.t["ETE/oC"]),
        onClick: b,
        variant: "secondary"
      }, {
        text: null != n ? n : o.intl.string(o.t["cY+Oob"]),
        type: "submit",
        disabled: C || 0 === p.length
      }],
      onClose: b,
      transitionState: E,
      children: [A, (0, l.jsxs)("div", {
        className: r.YK,
        children: [(0, l.jsx)(i.ksK, {
          type: "password",
          label: o.intl.string(o.t["CIGa+7"]),
          autoComplete: "current-password",
          autoFocus: true,
          value: p,
          onChange: e => {
            null == I || I(e), _(e)
          },
          required: true
        }), null != f && "" !== f ? (0, l.jsxs)(i.Text, {
          variant: "text-xs/normal",
          color: "text-feedback-critical",
          className: r.z3,
          children: [" ", f, " "]
        }) : null]
      })]
    })
  })
}
u.key = () => "password-confirm-modal";
let E = u