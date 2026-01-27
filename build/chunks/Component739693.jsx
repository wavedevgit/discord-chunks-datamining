/** Chunk was on 60667 **/
/** chunk id: 739693, original params: e,t,n (module,exports,require) **/
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
  var t, n, p, m;
  let {
    transitionState: g,
    onSuccess: A,
    onClose: f,
    requirementsUpdated: h
  } = e, [b, E] = i.useState(""), [x, O] = i.useState(""), [C, I] = i.useState(""), [T, S] = i.useState(null), [j, v] = i.useState(null), N = (0, s.bG)([c.A], () => c.A.getErrors()), y = (0, s.bG)([c.A], () => c.A.getFormState()), P = i.useRef(null);
  async function R(e) {
    e.preventDefault(), (0, o.x8)();
    let t = false;
    if ("" === x ? (S(_.intl.string(_.t["/7/oPU"])), t = true) : S(null), x !== C ? (v(_.intl.string(_.t["IEKYZ/"])), t = true) : v(null), t) return;
    let n = await (0, o.yu)({
      password: b,
      newPassword: x
    });
    if (null == n ? true : n.ok) A();
    else {
      var r;
      (null == n || null == (r = n.body) ? true : r.username) != null && (0, d.E)()
    }
  }
  return i.useEffect(() => {
    if (g === a.ip4.ENTERED) {
      var e;
      null == (e = P.current) || e.focus()
    }
  }, [g]), (0, r.jsx)("form", {
    onSubmit: R,
    children: (0, r.jsx)(l.Modal, {
      transitionState: g,
      onClose: f,
      title: _.intl.string(_.t.geta79),
      subtitle: h ? _.intl.string(_.t["37iHbZ"]) : _.intl.string(_.t.iOurYj),
      actions: [{
        variant: "secondary",
        text: _.intl.string(_.t["ETE/oC"]),
        onClick: f
      }, {
        variant: "primary",
        text: _.intl.string(_.t.i4jeWR),
        loading: y === u.XlH.SUBMITTING,
        type: "submit"
      }],
      children: (0, r.jsxs)(a.BJc, {
        gap: 20,
        children: [(0, r.jsx)(a.ksK, {
          label: _.intl.string(_.t.WBqMRQ),
          error: null == N || null == (p = N.password) ? true : p[0],
          type: "password",
          value: b,
          onChange: E,
          inputRef: P,
          autoComplete: "current-password",
          required: true
        }), (0, r.jsx)(a.ksK, {
          label: _.intl.string(_.t["8dM4FO"]),
          error: null != (t = null != (n = null == N || null == (m = N.new_password) ? true : m[0]) ? n : T) ? t : true,
          type: "password",
          value: x,
          onChange: O,
          autoComplete: "new-password",
          required: true
        }), (0, r.jsx)(a.ksK, {
          label: _.intl.string(_.t.iQG2KC),
          error: null != j ? j : true,
          type: "password",
          value: C,
          onChange: I,
          autoComplete: "new-password",
          required: true
        })]
      })
    })
  })
}