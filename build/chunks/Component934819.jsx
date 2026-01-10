/** Chunk was on 84249 **/
/** chunk id: 934819, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk972959 = require("./972959.js"),
  Chunk620481 = require("./620481.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk605716 = require("./605716.js");
let u = (0, Chunk972959.H)(() => ({
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
    l = u.useField("errorMessage"),
    m = u.useField("lastRunAt"),
    p = r.useCallback(async () => {
      u.setState({
        isLoading: true,
        errorMessage: null,
        isSuccess: false
      });
      try {
        let e = await (0, s.tb)();
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
    h = r.useMemo(() => e.map(e => {
      let t = o.default.getUser(e),
        n = null != t ? c.ZP.getName(t) : "Unknown";
      return (0, a.jsx)("div", {
        className: d.detailsRow,
        children: (0, a.jsx)(i.Text, {
          variant: "text-md/normal",
          children: "".concat(n, " (").concat(e, ")")
        })
      }, e)
    }), [e]);
  return (0, a.jsx)(i.C3N, {
    label: "Diff User State",
    description: "Click to generate a diff between the client user state and the user worker state.",
    children: (0, a.jsxs)("div", {
      children: [(0, a.jsx)(i.Button, {
        onClick: p,
        text: "Diff User State",
        loading: t,
        disabled: t
      }), (0, a.jsxs)("div", {
        className: d.detailsList,
        children: [null != l && (0, a.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "text-feedback-critical",
          className: d.statusText,
          children: l
        }), n && e.length > 0 && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(i.Text, {
            variant: "text-md/normal",
            children: "Last run at: ".concat(m)
          }), (0, a.jsx)(i.Text, {
            variant: "text-md/normal",
            children: "User IDs missing from Worker:"
          }), (0, a.jsx)("div", {
            className: d.nestedDetailsList,
            children: h
          })]
        }), n && 0 === e.length && (0, a.jsx)(i.Text, {
          variant: "text-md/normal",
          children: "No users missing from Worker"
        })]
      })]
    })
  })
}