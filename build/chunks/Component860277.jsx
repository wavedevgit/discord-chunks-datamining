/** Chunk was on 80448 **/
/** chunk id: 860277, original params: t,r,e (module,exports,require) **/
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
  Chunk892694 = require("./892694.js"),
  Chunk388032 = require("./388032.jsx");

function p(t) {
  let {
    step: r
  } = t, {
    users: e,
    sidekick: p
  } = (0, l.e7)([s.Z], () => s.Z.getCheckpointData());
  return (0, i.jsxs)(d.Z, {
    children: [r === c.ij.FRIENDS_INTRO && (0, i.jsxs)("div", {
      children: [(0, i.jsx)(n.xvT, {
        variant: "display-md",
        color: "text-primary",
        children: x.intl.string(u.default["4xZpq4"])
      }), e.map(t => (0, i.jsxs)("div", {
        children: [(0, i.jsx)(a.Z, {
          user: t,
          size: o.EF.SIZE_120
        }), (0, i.jsx)(n.xvT, {
          variant: "display-lg",
          color: "text-primary",
          children: t.username
        })]
      }, t.id))]
    }), r === c.ij.FRIENDS_BEST && (0, i.jsxs)("div", {
      children: [(0, i.jsx)(n.xvT, {
        variant: "display-md",
        color: "text-primary",
        children: x.intl.string(u.default.d5HUsD)
      }), (0, i.jsx)(a.Z, {
        user: p.user,
        size: o.EF.SIZE_120
      }), (0, i.jsx)(n.xvT, {
        variant: "display-md",
        color: "text-primary",
        children: x.intl.format(u.default.wz2JuF, {
          user: p.user.username,
          userHook: (t, r) => (0, i.jsx)(n.xvT, {
            variant: "display-lg",
            color: "text-primary",
            children: t
          }, r)
        })
      }), (0, i.jsx)(n.xvT, {
        variant: "display-sm",
        color: "text-primary",
        children: x.intl.string(u.default.wWKySP)
      }), (0, i.jsx)(n.xvT, {
        variant: "display-sm",
        color: "text-primary",
        children: p.numMessagesSent
      }), (0, i.jsx)(n.xvT, {
        variant: "display-sm",
        color: "text-primary",
        children: x.intl.string(u.default.lXT6ns)
      }), (0, i.jsx)(n.xvT, {
        variant: "display-sm",
        color: "text-primary",
        children: p.numVoiceMinutes
      })]
    })]
  })
}