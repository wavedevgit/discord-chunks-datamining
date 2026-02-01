/** Chunk was on 90228 **/
/** chunk id: 591764, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk839214 = require("./839214.js"),
  Chunk137365 = require("./137365.js"),
  Chunk287809 = require("./287809.js"),
  Chunk427262 = require("./427262.js"),
  Chunk520657 = require("./520657.js");
let u = (0, Chunk839214.D)(() => ({
  userIds: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: null,
  lastRunAt: null
}));

function m() {
  let e = u.useField("userIds"),
    t = u.useField("isLoading"),
    n = u.useField("isSuccess"),
    i = u.useField("errorMessage"),
    m = u.useField("lastRunAt"),
    p = l.useCallback(async () => {
      u.setState({
        isLoading: true,
        errorMessage: null,
        isSuccess: false
      });
      try {
        let e = await (0, s.g_)();
        u.setState({
          userIds: e,
          errorMessage: null,
          isSuccess: true,
          lastRunAt: new Date().toISOString()
        })
      } catch (e) {
        u.setState({
          errorMessage: e,
          isSuccess: false
        })
      } finally {
        u.setState({
          isLoading: false
        })
      }
    }, []),
    h = l.useMemo(() => e.map(e => {
      let t = o.default.getUser(e),
        n = null != t ? c.Ay.getName(t) : "Unknown";
      return (0, a.jsx)("div", {
        className: d.J1,
        children: (0, a.jsx)(r.Text, {
          variant: "text-md/normal",
          children: "".concat(n, " (").concat(e, ")")
        })
      }, e)
    }), [e]);
  return (0, a.jsx)(r.nVY, {
    label: "Diff User State",
    description: "Click to generate a diff between the client user state and the user worker state.",
    children: (0, a.jsxs)("div", {
      children: [(0, a.jsx)(r.Button, {
        onClick: p,
        text: "Diff User State",
        loading: t,
        disabled: t
      }), (0, a.jsxs)("div", {
        className: d.N6,
        children: [null != i && (0, a.jsx)(r.Text, {
          variant: "text-sm/normal",
          color: "text-feedback-critical",
          className: d.qS,
          children: i
        }), n && e.length > 0 && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(r.Text, {
            variant: "text-md/normal",
            children: "Last run at: ".concat(m)
          }), (0, a.jsx)(r.Text, {
            variant: "text-md/normal",
            children: "User IDs missing from Worker:"
          }), (0, a.jsx)("div", {
            className: d.uk,
            children: h
          })]
        }), n && 0 === e.length && (0, a.jsx)(r.Text, {
          variant: "text-md/normal",
          children: "No users missing from Worker"
        })]
      })]
    })
  })
}