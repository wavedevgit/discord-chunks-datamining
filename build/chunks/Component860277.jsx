/** Chunk was on 80448 **/
/** chunk id: 860277, original params: i,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk99690 = require("./99690.jsx"),
  Chunk5888 = require("./5888.js"),
  Chunk198358 = require("./198358.jsx"),
  Chunk612776 = require("./612776.js"),
  Chunk268685 = require("./268685.js"),
  Chunk506945 = require("./506945.js"),
  Chunk388032 = require("./388032.jsx");

function p(i) {
  let {
    step: t
  } = i, {
    users: r,
    sidekick: p
  } = (0, a.e7)([l.Z], () => l.Z.getCheckpointData());
  return (0, n.jsxs)(d.Z, {
    children: [t === c.ij.FRIENDS_INTRO && (0, n.jsxs)("div", {
      children: [(0, n.jsx)(e.xvT, {
        variant: "display-md",
        color: "text-primary",
        children: u.intl.string(x.default["4xZpq4"])
      }), r.map(i => (0, n.jsxs)("div", {
        children: [(0, n.jsx)(s.Z, {
          user: i,
          size: o.EF.SIZE_120
        }), (0, n.jsx)(e.xvT, {
          variant: "display-lg",
          color: "text-primary",
          children: i.username
        })]
      }, i.id))]
    }), t === c.ij.FRIENDS_BEST && (0, n.jsxs)("div", {
      children: [(0, n.jsx)(e.xvT, {
        variant: "display-md",
        color: "text-primary",
        children: u.intl.string(x.default.d5HUsD)
      }), (0, n.jsx)(s.Z, {
        user: p.user,
        size: o.EF.SIZE_120
      }), (0, n.jsx)(e.xvT, {
        variant: "display-md",
        color: "text-primary",
        children: u.intl.format(x.default.wz2JuF, {
          user: p.user.username,
          userHook: (i, t) => (0, n.jsx)(e.xvT, {
            variant: "display-lg",
            color: "text-primary",
            children: i
          }, t)
        })
      }), (0, n.jsx)(e.xvT, {
        variant: "display-sm",
        color: "text-primary",
        children: u.intl.string(x.default.wWKySP)
      }), (0, n.jsx)(e.xvT, {
        variant: "display-sm",
        color: "text-primary",
        children: p.numMessagesSent
      }), (0, n.jsx)(e.xvT, {
        variant: "display-sm",
        color: "text-primary",
        children: u.intl.string(x.default.lXT6ns)
      }), (0, n.jsx)(e.xvT, {
        variant: "display-sm",
        color: "text-primary",
        children: p.numVoiceMinutes
      })]
    })]
  })
}