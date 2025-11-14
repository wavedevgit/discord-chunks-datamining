/** Chunk was on 91394 **/
/** chunk id: 856597, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk819557 = require("./819557.jsx"),
  Chunk132392 = require("./132392.js"),
  Chunk118589 = require("./118589.js"),
  Chunk210825 = require("./210825.js"),
  Chunk345262 = require("./345262.js"),
  Chunk641689 = require("./641689.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk133023 = require("./133023.js");
let p = {
    [Chunk118589.UA.EMAIL_VERIFICATION]: Chunk388032.intl.string(Chunk641689.default.HC4IiR),
    [Chunk118589.UA.REFRESH_APP]: Chunk388032.intl.string(Chunk641689.default.SzfxQ3),
    [Chunk118589.UA.AGE_VERIFICATION]: Chunk388032.intl.string(Chunk641689.default["dSkE/A"])
  },
  h = function() {
    let {
      task: e
    } = (0, Chunk132392.T)(), t = module.flow_context.tasks.findIndex(t => t.task_type === e.task_type);
    return (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
      direction: "vertical",
      justify: "space-between",
      padding: Chunk345262.h,
      className: Chunk133023.container,
      children: [(0, Chunk951288.jsxs)(Chunk481060.Kqy, {
        direction: "vertical",
        justify: "space-between",
        children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
          variant: "display-md",
          className: Chunk133023.title,
          children: Chunk388032.intl.string(Chunk641689.default["/OpRAP"])
        }), (0, Chunk951288.jsx)(Chunk481060.Kqy, {
          direction: "vertical",
          justify: "space-between",
          gap: 0,
          children: module.flow_context.tasks.map((e, n) => {
            var l;
            return (0, a.jsx)(r.q, {
              title: null != (l = p[e.task_type]) ? l : "",
              listType: "numbered",
              index: n,
              color: n === t ? "text-primary" : n < t ? "feedback-positive" : "text-muted",
              completed: n < t
            }, e.task_type)
          })
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        children: Chunk388032.intl.format(Chunk641689.default["0DHxym"], {
          handleLogOut: () => (0, Chunk210825.R)("safety_flows_sidebar")
        })
      })]
    })
  }