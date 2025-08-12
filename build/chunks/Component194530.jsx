/** Chunk was on 48707 **/
/** chunk id: 194530, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => x
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk809206 = require("./809206.js"),
  Chunk25990 = require("./25990.js"),
  Chunk155433 = require("./155433.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk893985 = require("./893985.js");

function x(e) {
  var t, n, x, h;
  let {
    transitionState: m,
    onSuccess: w,
    onClose: g,
    requirementsUpdated: v,
    noSkip: j = false
  } = e, [f, _] = l.useState(""), [C, b] = l.useState(""), [y, T] = l.useState(""), [k, N] = l.useState(null), [E, S] = l.useState(null), q = (0, r.e7)([o.Z], () => o.Z.getErrors()), P = (0, r.e7)([o.Z], () => o.Z.getFormState()), B = l.useRef(null);
  async function W(e) {
    e.preventDefault(), (0, i.b9)();
    let t = false;
    if ("" === C ? (N(c.intl.string(c.t["/7/oPT"])), t = true) : N(null), C !== y ? (S(c.intl.string(c.t.IEKYZ2)), t = true) : S(null), t) return;
    let n = await (0, i.Mn)({
      password: f,
      newPassword: C
    });
    if (null == n ? true : n.ok) w();
    else {
      var s;
      (null == n || null == (s = n.body) ? true : s.username) != null && (0, d.P)()
    }
  }
  return l.useEffect(() => {
    if (m === a.Dvm.ENTERED) {
      var e;
      null == (e = B.current) || e.focus()
    }
  }, [m]), (0, s.jsxs)(a.Y0X, {
    transitionState: m,
    parentComponent: "ChangePasswordModal",
    children: [(0, s.jsxs)(a.xBx, {
      separator: false,
      className: p.header,
      children: [(0, s.jsx)(a.X6q, {
        color: "header-primary",
        variant: "heading-xl/bold",
        className: p.title,
        children: c.intl.string(c.t["geta7+"])
      }), (0, s.jsx)(a.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: p.subtitle,
        children: v ? c.intl.string(c.t["37iHbW"]) : c.intl.string(c.t.iOurYm)
      }), true !== j && (0, s.jsx)(a.olH, {
        onClick: g,
        className: p.modalCloseButton
      })]
    }), (0, s.jsxs)("form", {
      onSubmit: W,
      children: [(0, s.jsxs)(a.hzk, {
        className: p.content,
        children: [(0, s.jsx)(a.xJW, {
          title: c.intl.string(c.t.WBqMRU),
          error: null == q || null == (t = q.password) ? true : t[0],
          required: true,
          children: (0, s.jsx)(a.oil, {
            type: "password",
            value: f,
            onChange: _,
            inputRef: B,
            autoComplete: "current-password",
            required: true
          })
        }), (0, s.jsx)(a.xJW, {
          className: p.newPassword,
          title: c.intl.string(c.t["8dM4FB"]),
          error: null != (h = null != (x = null == q || null == (n = q.new_password) ? true : n[0]) ? x : k) ? h : true,
          required: true,
          children: (0, s.jsx)(a.oil, {
            type: "password",
            value: C,
            onChange: b,
            autoComplete: "new-password",
            required: true
          })
        }), (0, s.jsx)(a.xJW, {
          className: p.newPassword,
          title: c.intl.string(c.t.iQG2KC),
          error: null != E ? E : true,
          required: true,
          children: (0, s.jsx)(a.oil, {
            type: "password",
            value: y,
            onChange: T,
            autoComplete: "new-password",
            required: true
          })
        })]
      }), (0, s.jsxs)(a.mzw, {
        children: [(0, s.jsx)(a.zxk, {
          variant: "primary",
          text: c.intl.string(c.t.i4jeWV),
          type: "submit",
          loading: P === u.QZA.SUBMITTING
        }), true !== j && (0, s.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: p.cancel,
          children: (0, s.jsx)(a.zxk, {
            variant: "secondary",
            text: c.intl.string(c.t["ETE/oK"]),
            onClick: g
          })
        })]
      })]
    })]
  })
}