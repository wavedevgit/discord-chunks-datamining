/** Chunk was on web.js **/
/** chunk id: 739693, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk631670 = require("./631670.js"),
  Chunk752319 = require("./752319.js"),
  Chunk592074 = require("./592074.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function p(e) {
  var t, n, p, _;
  let {
    transitionState: h,
    onSuccess: m,
    onClose: g,
    requirementsUpdated: E
  } = e, [b, y] = i.useState(""), [O, A] = i.useState(""), [v, S] = i.useState(""), [I, T] = i.useState(null), [C, N] = i.useState(null), R = (0, s.bG)([c.A], () => c.A.getErrors()), w = (0, s.bG)([c.A], () => c.A.getFormState()), P = i.useRef(null);
  async function D(e) {
    e.preventDefault(), (0, l.x8)();
    let t = false;
    if ("" === O ? (T(f.intl.string(f.t["/7/oPU"])), t = true) : T(null), O !== v ? (N(f.intl.string(f.t["IEKYZ/"])), t = true) : N(null), t) return;
    let n = await (0, l.yu)({
      password: b,
      newPassword: O
    });
    if (null == n ? true : n.ok) m();
    else {
      var r;
      (null == n || null == (r = n.body) ? true : r.username) != null && (0, u.E)()
    }
  }
  return i.useEffect(() => {
    if (h === o.ip4.ENTERED) {
      var e;
      null == (e = P.current) || e.focus()
    }
  }, [h]), (0, r.jsx)("form", {
    onSubmit: D,
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
        loading: w === d.XlH.SUBMITTING,
        type: "submit"
      }],
      children: (0, r.jsxs)(o.BJc, {
        gap: 20,
        children: [(0, r.jsx)(o.ksK, {
          label: f.intl.string(f.t.WBqMRQ),
          error: null == R || null == (p = R.password) ? true : p[0],
          type: "password",
          value: b,
          onChange: y,
          inputRef: P,
          autoComplete: "current-password",
          required: true
        }), (0, r.jsx)(o.ksK, {
          label: f.intl.string(f.t["8dM4FO"]),
          error: null != (t = null != (n = null == R || null == (_ = R.new_password) ? true : _[0]) ? n : I) ? t : true,
          type: "password",
          value: O,
          onChange: A,
          autoComplete: "new-password",
          required: true
        }), (0, r.jsx)(o.ksK, {
          label: f.intl.string(f.t.iQG2KC),
          error: null != C ? C : true,
          type: "password",
          value: v,
          onChange: S,
          autoComplete: "new-password",
          required: true
        })]
      })
    })
  })
}