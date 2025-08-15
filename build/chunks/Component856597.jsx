/** Chunk was on 72853 **/
/** chunk id: 856597, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk819557 = require("./819557.jsx"),
  Chunk132392 = require("./132392.js"),
  Chunk118589 = require("./118589.js"),
  Chunk345262 = require("./345262.js"),
  Chunk241945 = require("./241945.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk133023 = require("./133023.js");
let p = function() {
  let {
    task: e
  } = (0, Chunk132392.T)(), t = module.flow_context.tasks.findIndex(t => t.task_type === e.task_type);
  return (0, Chunk255367.jsxs)(Chunk481060.Kqy, {
    direction: "vertical",
    justify: "space-between",
    padding: Chunk345262.h,
    className: Chunk133023.container,
    children: [(0, Chunk255367.jsxs)(Chunk481060.Kqy, {
      direction: "vertical",
      justify: "space-between",
      children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
        variant: "display-md",
        className: Chunk133023.title,
        children: Chunk388032.intl.string(Chunk241945.default["/OpRAA"])
      }), (0, Chunk255367.jsx)(Chunk481060.Kqy, {
        direction: "vertical",
        justify: "space-between",
        gap: 0,
        children: module.flow_context.tasks.map((e, n) => (0, r.jsx)(l.q, {
          title: function(e) {
            switch (e) {
              case o.UA.EMAIL_VERIFICATION:
                return d.intl.string(u.default.HC4IiY);
              case o.UA.REFRESH_APP:
                return d.intl.string(u.default.SzfxQ0);
              default:
                return ""
            }
          }(e.task_type),
          listType: "numbered",
          index: n,
          color: n === t ? "text-primary" : n < t ? "feedback-positive" : "text-muted",
          completed: n < t
        }, e.task_type))
      })]
    }), (0, Chunk255367.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      color: "text-secondary",
      children: Chunk388032.intl.format(Chunk241945.default["0DHxys"], {
        handleLogOut: () => Chunk893776.Z.logout("safety_flows_sidebar")
      })
    })]
  })
}