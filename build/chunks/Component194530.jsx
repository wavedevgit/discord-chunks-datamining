/** Chunk was on web.js **/
/** chunk id: 194530, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => _
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

function _(e) {
  var t, n, _, p;
  let {
    transitionState: h,
    onSuccess: m,
    onClose: g,
    requirementsUpdated: E
  } = e, [b, y] = i.useState(""), [O, v] = i.useState(""), [I, T] = i.useState(""), [S, A] = i.useState(null), [C, N] = i.useState(null), R = (0, o.e7)([c.Z], () => c.Z.getErrors()), P = (0, o.e7)([c.Z], () => c.Z.getFormState()), D = i.useRef(null);
  async function w(e) {
    e.preventDefault(), (0, l.b9)();
    let t = false;
    if ("" === O ? (A(f.intl.string(f.t["/7/oPU"])), t = true) : A(null), O !== I ? (N(f.intl.string(f.t["IEKYZ/"])), t = true) : N(null), t) return;
    let n = await (0, l.Mn)({
      password: b,
      newPassword: O
    });
    if (null == n ? true : n.ok) m();
    else {
      var r;
      (null == n || null == (r = n.body) ? true : r.username) != null && (0, u.P)()
    }
  }
  return i.useEffect(() => {
    if (h === s.Dvm.ENTERED) {
      var e;
      null == (e = D.current) || e.focus()
    }
  }, [h]), (0, r.jsx)("form", {
    onSubmit: w,
    children: (0, r.jsx)(a.Modal, {
      transitionState: h,
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
        loading: P === d.QZA.SUBMITTING,
        type: "submit"
      }],
      children: (0, r.jsxs)(s.Kqy, {
        gap: 20,
        children: [(0, r.jsx)(s.oil, {
          label: f.intl.string(f.t.WBqMRQ),
          error: null == R || null == (t = R.password) ? true : t[0],
          type: "password",
          value: b,
          onChange: y,
          inputRef: D,
          autoComplete: "current-password",
          required: true
        }), (0, r.jsx)(s.oil, {
          label: f.intl.string(f.t["8dM4FO"]),
          error: null != (p = null != (_ = null == R || null == (n = R.new_password) ? true : n[0]) ? _ : S) ? p : true,
          type: "password",
          value: O,
          onChange: v,
          autoComplete: "new-password",
          required: true
        }), (0, r.jsx)(s.oil, {
          label: f.intl.string(f.t.iQG2KC),
          error: null != C ? C : true,
          type: "password",
          value: I,
          onChange: T,
          autoComplete: "new-password",
          required: true
        })]
      })
    })
  })
}