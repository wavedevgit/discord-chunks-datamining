/** Chunk was on 75708 **/
/** chunk id: 194530, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => p
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
  Chunk132709 = require("./132709.js");

function p(e) {
  var t, n, p, g;
  let {
    transitionState: h,
    onSuccess: f,
    onClose: b,
    requirementsUpdated: x,
    noSkip: _ = false
  } = e, [j, E] = r.useState(""), [C, O] = r.useState(""), [v, S] = r.useState(""), [T, I] = r.useState(null), [N, y] = r.useState(null), A = (0, s.e7)([o.Z], () => o.Z.getErrors()), P = (0, s.e7)([o.Z], () => o.Z.getFormState()), R = r.useRef(null);
  async function D(e) {
    e.preventDefault(), (0, l.b9)();
    let t = false;
    if ("" === C ? (I(u.intl.string(u.t["/7/oPT"])), t = true) : I(null), C !== v ? (y(u.intl.string(u.t.IEKYZ2)), t = true) : y(null), t) return;
    let n = await (0, l.Mn)({
      password: j,
      newPassword: C
    });
    if (null == n ? true : n.ok) f();
    else {
      var i;
      (null == n || null == (i = n.body) ? true : i.username) != null && (0, c.P)()
    }
  }
  return r.useEffect(() => {
    if (h === a.Dvm.ENTERED) {
      var e;
      null == (e = R.current) || e.focus()
    }
  }, [h]), (0, i.jsxs)(a.Y0X, {
    transitionState: h,
    parentComponent: "ChangePasswordModal",
    children: [(0, i.jsxs)(a.xBx, {
      separator: false,
      className: m.header,
      children: [(0, i.jsx)(a.X6q, {
        color: "header-primary",
        variant: "heading-xl/bold",
        className: m.title,
        children: u.intl.string(u.t["geta7+"])
      }), (0, i.jsx)(a.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: m.subtitle,
        children: x ? u.intl.string(u.t["37iHbW"]) : u.intl.string(u.t.iOurYm)
      }), true !== _ && (0, i.jsx)(a.olH, {
        onClick: b,
        className: m.modalCloseButton
      })]
    }), (0, i.jsxs)("form", {
      onSubmit: D,
      children: [(0, i.jsxs)(a.hzk, {
        className: m.content,
        children: [(0, i.jsx)(a.xJW, {
          title: u.intl.string(u.t.WBqMRU),
          error: null == A || null == (t = A.password) ? true : t[0],
          required: true,
          children: (0, i.jsx)(a.oil, {
            type: "password",
            value: j,
            onChange: E,
            inputRef: R,
            autoComplete: "current-password",
            required: true
          })
        }), (0, i.jsx)(a.xJW, {
          className: m.newPassword,
          title: u.intl.string(u.t["8dM4FB"]),
          error: null != (g = null != (p = null == A || null == (n = A.new_password) ? true : n[0]) ? p : T) ? g : true,
          required: true,
          children: (0, i.jsx)(a.oil, {
            type: "password",
            value: C,
            onChange: O,
            autoComplete: "new-password",
            required: true
          })
        }), (0, i.jsx)(a.xJW, {
          className: m.newPassword,
          title: u.intl.string(u.t.iQG2KC),
          error: null != N ? N : true,
          required: true,
          children: (0, i.jsx)(a.oil, {
            type: "password",
            value: v,
            onChange: S,
            autoComplete: "new-password",
            required: true
          })
        })]
      }), (0, i.jsxs)(a.mzw, {
        children: [(0, i.jsx)(a.zxk, {
          variant: "primary",
          text: u.intl.string(u.t.i4jeWV),
          type: "submit",
          loading: P === d.QZA.SUBMITTING
        }), true !== _ && (0, i.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: m.cancel,
          children: (0, i.jsx)(a.zxk, {
            variant: "secondary",
            text: u.intl.string(u.t["ETE/oK"]),
            onClick: b
          })
        })]
      })]
    })]
  })
}