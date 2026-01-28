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
  Chunk752319 = require("./752319.js"),
  Chunk592074 = require("./592074.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function g(t) {
  var e, n, g, v;
  let {
    transitionState: w,
    onSuccess: f,
    onClose: b,
    requirementsUpdated: h
  } = t, [C, E] = r.useState(""), [k, y] = r.useState(""), [m, x] = r.useState(""), [S, T] = r.useState(null), [j, R] = r.useState(null), A = (0, i.bG)([o.A], () => o.A.getErrors()), G = (0, i.bG)([o.A], () => o.A.getFormState()), K = r.useRef(null);
  async function q(t) {
    t.preventDefault(), (0, u.x8)();
    let e = false;
    if ("" === k ? (T(c.intl.string(c.t["/7/oPU"])), e = true) : T(null), k !== m ? (R(c.intl.string(c.t["IEKYZ/"])), e = true) : R(null), e) return;
    let n = await (0, u.yu)({
      password: C,
      newPassword: k
    });
    if (null == n ? true : n.ok) f();
    else {
      var l;
      (null == n || null == (l = n.body) ? true : l.username) != null && (0, d.E)()
    }
  }
  return r.useEffect(() => {
    if (w === a.ip4.ENTERED) {
      var t;
      null == (t = K.current) || t.focus()
    }
  }, [w]), (0, l.jsx)("form", {
    onSubmit: q,
    children: (0, l.jsx)(s.Modal, {
      transitionState: w,
      onClose: b,
      title: c.intl.string(c.t.geta79),
      subtitle: h ? c.intl.string(c.t["37iHbZ"]) : c.intl.string(c.t.iOurYj),
      actions: [{
        variant: "secondary",
        text: c.intl.string(c.t["ETE/oC"]),
        onClick: b
      }, {
        variant: "primary",
        text: c.intl.string(c.t.i4jeWR),
        loading: G === p.XlH.SUBMITTING,
        type: "submit"
      }],
      children: (0, l.jsxs)(a.BJc, {
        gap: 20,
        children: [(0, l.jsx)(a.ksK, {
          label: c.intl.string(c.t.WBqMRQ),
          error: null == A || null == (g = A.password) ? true : g[0],
          type: "password",
          value: C,
          onChange: E,
          inputRef: K,
          autoComplete: "current-password",
          required: true
        }), (0, l.jsx)(a.ksK, {
          label: c.intl.string(c.t["8dM4FO"]),
          error: null != (e = null != (n = null == A || null == (v = A.new_password) ? true : v[0]) ? n : S) ? e : true,
          type: "password",
          value: k,
          onChange: y,
          autoComplete: "new-password",
          required: true
        }), (0, l.jsx)(a.ksK, {
          label: c.intl.string(c.t.iQG2KC),
          error: null != j ? j : true,
          type: "password",
          value: m,
          onChange: x,
          autoComplete: "new-password",
          required: true
        })]
      })
    })
  })
}