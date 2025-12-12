/** Chunk was on web.js **/
/** chunk id: 194530, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk809206 = require("./809206.js"),
  Chunk25990 = require("./25990.js"),
  Chunk155433 = require("./155433.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  var t, n, p, _;
  let {
    transitionState: m,
    onSuccess: h,
    onClose: g,
    requirementsUpdated: E
  } = e, [b, y] = i.useState(""), [O, v] = i.useState(""), [S, I] = i.useState(""), [T, C] = i.useState(null), [A, N] = i.useState(null), P = (0, a.e7)([c.Z], () => c.Z.getErrors()), R = (0, a.e7)([c.Z], () => c.Z.getFormState()), w = i.useRef(null);
  async function D(e) {
    e.preventDefault(), (0, l.b9)();
    let t = false;
    if ("" === O ? (C(f.intl.string(f.t["/7/oPU"])), t = true) : C(null), O !== S ? (N(f.intl.string(f.t["IEKYZ/"])), t = true) : N(null), t) return;
    let n = await (0, l.Mn)({
      password: b,
      newPassword: O
    });
    if (null == n ? true : n.ok) h();
    else {
      var r;
      (null == n || null == (r = n.body) ? true : r.username) != null && (0, u.P)()
    }
  }
  return i.useEffect(() => {
    if (m === s.Dvm.ENTERED) {
      var e;
      null == (e = w.current) || e.focus()
    }
  }, [m]), (0, r.jsx)("form", {
    onSubmit: D,
    children: (0, r.jsx)(o.Modal, {
      transitionState: m,
      onClose: g,
      title: f.intl.string(f.t.geta79),
      subtitle: E ? f.intl.string(f.t["37iHbZ"]) : f.intl.string(f.t.iOurYj),
      actions: [{
        variant: "secondary",
        text: f.intl.string(f.t["ETE/oC"]),
        onClick: g
      }, {
        variant: "primary",
        text: f.intl.string(f.t.i4jeWR),
        loading: R === d.QZA.SUBMITTING,
        type: "submit"
      }],
      children: (0, r.jsxs)(s.Kqy, {
        gap: 20,
        children: [(0, r.jsx)(s.oil, {
          label: f.intl.string(f.t.WBqMRQ),
          error: null == P || null == (t = P.password) ? true : t[0],
          type: "password",
          value: b,
          onChange: y,
          inputRef: w,
          autoComplete: "current-password",
          required: true
        }), (0, r.jsx)(s.oil, {
          label: f.intl.string(f.t["8dM4FO"]),
          error: null != (_ = null != (p = null == P || null == (n = P.new_password) ? true : n[0]) ? p : T) ? _ : true,
          type: "password",
          value: O,
          onChange: v,
          autoComplete: "new-password",
          required: true
        }), (0, r.jsx)(s.oil, {
          label: f.intl.string(f.t.iQG2KC),
          error: null != A ? A : true,
          type: "password",
          value: S,
          onChange: I,
          autoComplete: "new-password",
          required: true
        })]
      })
    })
  })
}