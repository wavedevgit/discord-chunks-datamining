/** Chunk was on 22482 **/
/** chunk id: 157743, original params: e,a,n (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk918125 = require("./918125.jsx"),
  Chunk488131 = require("./488131.js"),
  Chunk124368 = require("./124368.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk997285 = require("./997285.js");

function d(e) {
  let {
    guildId: a,
    onClose: n,
    transitionState: d
  } = e;
  return (0, s.jsx)(r.Y0X, {
    className: l.modal,
    transitionState: d,
    "aria-label": i.intl.string(i.t.B2panJ),
    size: r.CgR.DYNAMIC,
    parentComponent: "GuildActiveThreadsModal",
    children: (0, s.jsxs)("div", {
      className: l.container,
      children: [(0, s.jsxs)("div", {
        className: l.header,
        children: [(0, s.jsx)(r.or_, {
          size: "md",
          color: "currentColor",
          className: l.threadIcon
        }), (0, s.jsx)(r.X6q, {
          variant: "heading-md/semibold",
          className: l.__invalid_title,
          children: i.intl.string(i.t["dOWb+f"])
        }), (0, s.jsx)("div", {
          className: l.spacer
        }), (0, s.jsx)(r.P3F, {
          className: l.closeIcon,
          onClick: n,
          "aria-label": i.intl.string(i.t.cpT0Cg),
          children: (0, s.jsx)(r.Dio, {
            size: "md",
            color: "currentColor"
          })
        })]
      }), (0, s.jsx)(o.Z, {
        guildId: a,
        goToThread: (e, a) => {
          n(), (0, t.ok)(e, !a, c.on.GUILD_ACTIVE_THREADS_MODAL)
        }
      })]
    })
  })
}