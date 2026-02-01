/** Chunk was on 10302 **/
/** chunk id: 739693, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk631670 = require("./631670.js"),
  Chunk836602 = require("./836602.js"),
  Chunk592074 = require("./592074.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function g(t) {
  var e, n, g, v;
  let {
    transitionState: f,
    onSuccess: w,
    onClose: h,
    requirementsUpdated: C
  } = t, [E, b] = r.useState(""), [k, m] = r.useState(""), [y, S] = r.useState(""), [x, T] = r.useState(null), [j, R] = r.useState(null), {
    formState: K,
    errors: q
  } = (0, i.cf)([u.A], () => ({
    formState: u.A.getFormState(),
    errors: u.A.getErrors()
  })), A = r.useRef(null);
  async function I(t) {
    t.preventDefault(), (0, o.x8)();
    let e = false;
    if ("" === k ? (T(c.intl.string(c.t["/7/oPU"])), e = true) : T(null), k !== y ? (R(c.intl.string(c.t["IEKYZ/"])), e = true) : R(null), e) return;
    let n = await (0, o.yu)({
      password: E,
      newPassword: k
    });
    if (null == n ? true : n.ok) w();
    else {
      var l;
      (null == n || null == (l = n.body) ? true : l.username) != null && (0, d.E)()
    }
  }
  return r.useEffect(() => {
    if (f === a.ip4.ENTERED) {
      var t;
      null == (t = A.current) || t.focus()
    }
  }, [f]), (0, l.jsx)("form", {
    onSubmit: I,
    children: (0, l.jsx)(s.Modal, {
      transitionState: f,
      onClose: h,
      title: c.intl.string(c.t.geta79),
      subtitle: C ? c.intl.string(c.t["37iHbZ"]) : c.intl.string(c.t.iOurYj),
      actions: [{
        variant: "secondary",
        text: c.intl.string(c.t["ETE/oC"]),
        onClick: h
      }, {
        variant: "primary",
        text: c.intl.string(c.t.i4jeWR),
        loading: K === p.XlH.SUBMITTING,
        type: "submit"
      }],
      children: (0, l.jsxs)(a.BJc, {
        gap: 20,
        children: [(0, l.jsx)(a.ksK, {
          label: c.intl.string(c.t.WBqMRQ),
          error: null == q || null == (g = q.password) ? true : g[0],
          type: "password",
          value: E,
          onChange: b,
          inputRef: A,
          autoComplete: "current-password",
          required: true
        }), (0, l.jsx)(a.ksK, {
          label: c.intl.string(c.t["8dM4FO"]),
          error: null != (e = null != (n = null == q || null == (v = q.new_password) ? true : v[0]) ? n : x) ? e : true,
          type: "password",
          value: k,
          onChange: m,
          autoComplete: "new-password",
          required: true
        }), (0, l.jsx)(a.ksK, {
          label: c.intl.string(c.t.iQG2KC),
          error: null != j ? j : true,
          type: "password",
          value: y,
          onChange: S,
          autoComplete: "new-password",
          required: true
        })]
      })
    })
  })
}