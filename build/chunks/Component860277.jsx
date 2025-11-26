/** Chunk was on 80448 **/
/** chunk id: 860277, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk99690 = require("./99690.jsx"),
  Chunk5888 = require("./5888.js"),
  Chunk198358 = require("./198358.jsx"),
  Chunk612776 = require("./612776.js"),
  Chunk268685 = require("./268685.js"),
  Chunk140939 = require("./140939.js"),
  Chunk388032 = require("./388032.jsx");

function p(t) {
  let {
    step: e
  } = t, {
    users: i = [],
    sidekick: p
  } = (0, l.e7)([s.Z], () => s.Z.getCheckpointData());
  if (null != p) return (0, n.jsxs)(d.Z, {
    children: [e === c.ij.FRIENDS_INTRO && (0, n.jsxs)("div", {
      children: [(0, n.jsx)(r.xvT, {
        variant: "display-md",
        color: "text-primary",
        children: x.intl.string(u.default["4xZpq4"])
      }), i.map(t => (0, n.jsxs)("div", {
        children: [(0, n.jsx)(a.Z, {
          user: t,
          size: o.EF.SIZE_120
        }), (0, n.jsx)(r.xvT, {
          variant: "display-lg",
          color: "text-primary",
          children: t.username
        })]
      }, t.id))]
    }), e === c.ij.FRIENDS_BEST && (0, n.jsxs)("div", {
      children: [(0, n.jsx)(r.xvT, {
        variant: "display-md",
        color: "text-primary",
        children: x.intl.string(u.default.d5HUsD)
      }), (0, n.jsx)(a.Z, {
        user: p.user,
        size: o.EF.SIZE_120
      }), (0, n.jsx)(r.xvT, {
        variant: "display-md",
        color: "text-primary",
        children: x.intl.format(u.default.wz2JuF, {
          user: null == p ? true : p.user.username,
          userHook: (t, e) => (0, n.jsx)(r.xvT, {
            variant: "display-lg",
            color: "text-primary",
            children: t
          }, e)
        })
      }), (0, n.jsx)(r.xvT, {
        variant: "display-sm",
        color: "text-primary",
        children: x.intl.string(u.default.wWKySP)
      }), (0, n.jsx)(r.xvT, {
        variant: "display-sm",
        color: "text-primary",
        children: p.numMessagesSent
      }), (0, n.jsx)(r.xvT, {
        variant: "display-sm",
        color: "text-primary",
        children: x.intl.string(u.default.lXT6ns)
      }), (0, n.jsx)(r.xvT, {
        variant: "display-sm",
        color: "text-primary",
        children: p.numVoiceMinutes
      })]
    })]
  })
}