/** Chunk was on web.js **/
/** chunk id: 194530, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk809206 = require("./809206.js"),
  Chunk25990 = require("./25990.js"),
  Chunk155433 = require("./155433.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk879488 = require("./879488.js");

function _(e) {
  var t, n, _, p;
  let {
    transitionState: h,
    onSuccess: m,
    onClose: g,
    requirementsUpdated: E,
    noSkip: b = false
  } = e, [y, O] = i.useState(""), [v, I] = i.useState(""), [T, S] = i.useState(""), [A, C] = i.useState(null), [N, R] = i.useState(null), P = (0, a.e7)([l.Z], () => l.Z.getErrors()), w = (0, a.e7)([l.Z], () => l.Z.getFormState()), D = i.useRef(null);
  async function x(e) {
    e.preventDefault(), (0, s.b9)();
    let t = false;
    if ("" === v ? (C(d.intl.string(d.t["/7/oPT"])), t = true) : C(null), v !== T ? (R(d.intl.string(d.t.IEKYZ2)), t = true) : R(null), t) return;
    let n = await (0, s.Mn)({
      password: y,
      newPassword: v
    });
    if (null == n ? true : n.ok) m();
    else {
      var r;
      (null == n || null == (r = n.body) ? true : r.username) != null && (0, c.P)()
    }
  }
  return i.useEffect(() => {
    if (h === o.Dvm.ENTERED) {
      var e;
      null == (e = D.current) || e.focus()
    }
  }, [h]), (0, r.jsxs)(o.Y0X, {
    transitionState: h,
    parentComponent: "ChangePasswordModal",
    children: [(0, r.jsxs)(o.xBx, {
      separator: false,
      className: f.header,
      children: [(0, r.jsx)(o.X6q, {
        color: "header-primary",
        variant: "heading-xl/bold",
        className: f.title,
        children: d.intl.string(d.t["geta7+"])
      }), (0, r.jsx)(o.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: f.subtitle,
        children: E ? d.intl.string(d.t["37iHbW"]) : d.intl.string(d.t.iOurYm)
      }), true !== b && (0, r.jsx)(o.olH, {
        onClick: g,
        className: f.modalCloseButton
      })]
    }), (0, r.jsxs)("form", {
      onSubmit: x,
      children: [(0, r.jsxs)(o.hzk, {
        className: f.content,
        children: [(0, r.jsx)(o.xJW, {
          title: d.intl.string(d.t.WBqMRU),
          error: null == P || null == (t = P.password) ? true : t[0],
          required: true,
          children: (0, r.jsx)(o.oil, {
            type: "password",
            value: y,
            onChange: O,
            inputRef: D,
            autoComplete: "current-password",
            required: true
          })
        }), (0, r.jsx)(o.xJW, {
          className: f.newPassword,
          title: d.intl.string(d.t["8dM4FB"]),
          error: null != (p = null != (_ = null == P || null == (n = P.new_password) ? true : n[0]) ? _ : A) ? p : true,
          required: true,
          children: (0, r.jsx)(o.oil, {
            type: "password",
            value: v,
            onChange: I,
            autoComplete: "new-password",
            required: true
          })
        }), (0, r.jsx)(o.xJW, {
          className: f.newPassword,
          title: d.intl.string(d.t.iQG2KC),
          error: null != N ? N : true,
          required: true,
          children: (0, r.jsx)(o.oil, {
            type: "password",
            value: T,
            onChange: S,
            autoComplete: "new-password",
            required: true
          })
        })]
      }), (0, r.jsxs)(o.mzw, {
        children: [(0, r.jsx)(o.zxk, {
          variant: "primary",
          text: d.intl.string(d.t.i4jeWV),
          type: "submit",
          loading: w === u.QZA.SUBMITTING
        }), true !== b && (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: f.cancel,
          children: (0, r.jsx)(o.zxk, {
            variant: "secondary",
            text: d.intl.string(d.t["ETE/oK"]),
            onClick: g
          })
        })]
      })]
    })]
  })
}