/** Chunk was on 90228 **/
/** chunk id: 686267, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk754302 = require("./754302.jsx"),
  Chunk278466 = require("./278466.js"),
  Chunk805866 = require("./805866.js"),
  Chunk627575 = require("./627575.js"),
  Chunk204821 = require("./204821.js"),
  Chunk646284 = require("./646284.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk528891 = require("./528891.js");
let p = {
    [Chunk805866.wP.EMAIL_VERIFICATION]: Chunk985018.intl.string(Chunk646284.default.HC4IiR),
    [Chunk805866.wP.REFRESH_APP]: Chunk985018.intl.string(Chunk646284.default.SzfxQ3),
    [Chunk805866.wP.AGE_VERIFICATION]: Chunk985018.intl.string(Chunk646284.default["dSkE/A"])
  },
  h = function() {
    let {
      task: e
    } = (0, i.Z)(), t = e.flow_context.tasks.findIndex(t => t.task_type === e.task_type);
    return (0, a.jsxs)(l.BJc, {
      direction: "vertical",
      justify: "space-between",
      padding: c.p,
      className: m.k,
      children: [(0, a.jsxs)(l.BJc, {
        direction: "vertical",
        justify: "space-between",
        children: [(0, a.jsx)(l.Heading, {
          variant: "display-md",
          className: m.D,
          children: u.intl.string(d.default["/OpRAP"])
        }), (0, a.jsx)(l.BJc, {
          direction: "vertical",
          justify: "space-between",
          gap: 0,
          children: e.flow_context.tasks.map((e, n) => {
            var l;
            return (0, a.jsx)(r.B, {
              title: null != (l = p[e.task_type]) ? l : "",
              listType: "numbered",
              index: n,
              color: n === t ? "text-strong" : n < t ? "feedback-positive" : "text-muted",
              completed: n < t
            }, e.task_type)
          })
        })]
      }), (0, a.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "text-subtle",
        children: u.intl.format(d.default["0DHxym"], {
          handleLogOut: () => (0, o.k)("safety_flows_sidebar")
        })
      })]
    })
  }