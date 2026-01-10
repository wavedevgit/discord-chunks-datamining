/** Chunk was on 84249 **/
/** chunk id: 764051, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk819557 = require("./819557.jsx"),
  Chunk132392 = require("./132392.js"),
  Chunk118589 = require("./118589.js"),
  Chunk210825 = require("./210825.js"),
  Chunk345262 = require("./345262.js"),
  Chunk693473 = require("./693473.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk373349 = require("./373349.js");
let p = {
    [Chunk118589.UA.EMAIL_VERIFICATION]: Chunk388032.intl.string(Chunk693473.default.HC4IiR),
    [Chunk118589.UA.REFRESH_APP]: Chunk388032.intl.string(Chunk693473.default.SzfxQ3),
    [Chunk118589.UA.AGE_VERIFICATION]: Chunk388032.intl.string(Chunk693473.default["dSkE/A"])
  },
  h = function() {
    let {
      task: e
    } = (0, l.T)(), t = e.flow_context.tasks.findIndex(t => t.task_type === e.task_type);
    return (0, a.jsxs)(r.Kqy, {
      direction: "vertical",
      justify: "space-between",
      padding: c.h,
      className: m.container,
      children: [(0, a.jsxs)(r.Kqy, {
        direction: "vertical",
        justify: "space-between",
        children: [(0, a.jsx)(r.Heading, {
          variant: "display-md",
          className: m.title,
          children: u.intl.string(d.default["/OpRAP"])
        }), (0, a.jsx)(r.Kqy, {
          direction: "vertical",
          justify: "space-between",
          gap: 0,
          children: e.flow_context.tasks.map((e, n) => {
            var r;
            return (0, a.jsx)(i.q, {
              title: null != (r = p[e.task_type]) ? r : "",
              listType: "numbered",
              index: n,
              color: n === t ? "text-strong" : n < t ? "feedback-positive" : "text-muted",
              completed: n < t
            }, e.task_type)
          })
        })]
      }), (0, a.jsx)(r.Text, {
        variant: "text-md/normal",
        color: "text-subtle",
        children: u.intl.format(d.default["0DHxym"], {
          handleLogOut: () => (0, o.R)("safety_flows_sidebar")
        })
      })]
    })
  }