/** Chunk was on 80448 **/
/** chunk id: 860277, original params: e,t,n (module,exports,require) **/
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

function p(e) {
  let {
    step: t
  } = e, {
    users: n = [],
    sidekick: p
  } = (0, r.e7)([o.Z], () => o.Z.getCheckpointData());
  if (null != p) return (0, i.jsxs)(a.Z, {
    children: [t === c.ij.FRIENDS_INTRO && (0, i.jsxs)("div", {
      children: [(0, i.jsx)(s.xvT, {
        variant: "display-md",
        color: "text-strong",
        children: m.intl.string(d.default["4xZpq4"])
      }), n.map(e => (0, i.jsxs)("div", {
        children: [(0, i.jsx)(l.Z, {
          user: e,
          size: u.EF.SIZE_120
        }), (0, i.jsx)(s.xvT, {
          variant: "display-lg",
          color: "text-strong",
          children: e.username
        })]
      }, e.id))]
    }), t === c.ij.FRIENDS_BEST && (0, i.jsxs)("div", {
      children: [(0, i.jsx)(s.xvT, {
        variant: "display-md",
        color: "text-strong",
        children: m.intl.string(d.default.d5HUsD)
      }), (0, i.jsx)(l.Z, {
        user: p.user,
        size: u.EF.SIZE_120
      }), (0, i.jsx)(s.xvT, {
        variant: "display-md",
        color: "text-strong",
        children: m.intl.format(d.default.wz2JuF, {
          user: null == p ? true : p.user.username,
          userHook: (e, t) => (0, i.jsx)(s.xvT, {
            variant: "display-lg",
            color: "text-strong",
            children: e
          }, t)
        })
      }), (0, i.jsx)(s.xvT, {
        variant: "display-sm",
        color: "text-strong",
        children: m.intl.string(d.default.wWKySP)
      }), (0, i.jsx)(s.xvT, {
        variant: "display-sm",
        color: "text-strong",
        children: p.numMessagesSent
      }), (0, i.jsx)(s.xvT, {
        variant: "display-sm",
        color: "text-strong",
        children: m.intl.string(d.default.lXT6ns)
      }), (0, i.jsx)(s.xvT, {
        variant: "display-sm",
        color: "text-strong",
        children: p.numVoiceMinutes
      })]
    })]
  })
}