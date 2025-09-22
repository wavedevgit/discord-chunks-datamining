/** Chunk was on 86478 **/
/** chunk id: 934819, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk972959 = require("./972959.js"),
  Chunk620481 = require("./620481.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk530146 = require("./530146.js");
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
    h = Chunk647438.useCallback(async () => {
      u.setState({
        isLoading: true,
        errorMessage: null,
        isSuccess: false
      });
      try {
        let e = await (0, Chunk620481.tb)();
        u.setState({
          userIds: module,
          errorMessage: null,
          isSuccess: true,
          lastRunAt: new Date().toISOString()
        })
      } catch (e) {
        u.setState({
          errorMessage: module,
          isSuccess: false
        })
      } finally {
        u.setState({
          isLoading: false
        })
      }
    }, []),
    p = Chunk647438.useMemo(() => module.map(e => {
      let t = o.default.getUser(e),
        n = null != t ? c.ZP.getName(t) : "Unknown";
      return (0, a.jsx)("div", {
        className: d.detailsRow,
        children: (0, a.jsx)(i.R94, {
          children: "".concat(n, " (").concat(e, ")")
        })
      }, e)
    }), [module]);
  return (0, Chunk951288.jsxs)(Chunk481060.hjN, {
    title: "Diff User State",
    tag: Chunk481060.RB0.H3,
    className: Chunk530146.panelGroup,
    children: [(0, Chunk951288.jsx)(Chunk481060.R94, {
      type: Chunk481060.geA.DESCRIPTION,
      className: Chunk530146.subtitle,
      children: "Click to generate a diff between the client user state and the user worker state."
    }), (0, Chunk951288.jsxs)("div", {
      children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
        onClick: h,
        text: "Diff User State",
        loading: exports,
        disabled: exports
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk530146.detailsList,
        children: [null != Chunk972959 && (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/normal",
          color: "text-feedback-critical",
          className: Chunk530146.statusText,
          children: Chunk972959
        }), require && module.length > 0 && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
          children: [(0, Chunk951288.jsx)(Chunk481060.R94, {
            children: "Last run at: ".concat(m)
          }), (0, Chunk951288.jsx)(Chunk481060.R94, {
            children: "User IDs missing from Worker:"
          }), (0, Chunk951288.jsx)("div", {
            className: Chunk530146.nestedDetailsList,
            children: p
          })]
        }), require && 0 === module.length && (0, Chunk951288.jsx)(Chunk481060.R94, {
          children: "No users missing from Worker"
        })]
      })]
    })]
  })
}