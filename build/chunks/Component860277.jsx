/** Chunk was on 80448 **/
/** chunk id: 860277, original params: i,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk99690 = require("./99690.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk5888 = require("./5888.js"),
  Chunk198358 = require("./198358.jsx"),
  Chunk612776 = require("./612776.js"),
  Chunk268685 = require("./268685.js"),
  Chunk506945 = require("./506945.js"),
  Chunk388032 = require("./388032.jsx");

function j(i) {
  let {
    step: t
  } = i, {
    users: r
  } = (0, l.e7)([c.Z], () => c.Z.getCheckpointData()), j = (0, n.useMemo)(() => r.map(i => {
    let {
      userId: t
    } = i;
    return d.default.getUser(t)
  }).filter(i => null != i), [r]);
  return (0, e.jsxs)(o.Z, {
    children: [t === x.ij.FRIENDS_INTRO && (0, e.jsxs)("div", {
      children: [(0, e.jsx)(a.xvT, {
        variant: "display-md",
        color: "text-primary",
        children: m.intl.string(p.default["4xZpq4"])
      }), j.slice(1).map(i => (0, e.jsxs)("div", {
        children: [(0, e.jsx)(s.Z, {
          user: i,
          size: u.EF.SIZE_120
        }), (0, e.jsx)(a.xvT, {
          variant: "display-lg",
          color: "text-primary",
          children: i.username
        })]
      }, i.id))]
    }), t === x.ij.FRIENDS_BEST && (0, e.jsxs)("div", {
      children: [(0, e.jsx)(a.xvT, {
        variant: "display-md",
        color: "text-primary",
        children: m.intl.string(p.default.d5HUsD)
      }), (0, e.jsx)(s.Z, {
        user: j[0],
        size: u.EF.SIZE_120
      }), (0, e.jsx)(a.xvT, {
        variant: "display-md",
        color: "text-primary",
        children: m.intl.format(p.default.wz2JuF, {
          user: j[0].username,
          userHook: (i, t) => (0, e.jsx)(a.xvT, {
            variant: "display-lg",
            color: "text-primary",
            children: i
          }, t)
        })
      }), (0, e.jsx)(a.xvT, {
        variant: "display-sm",
        color: "text-primary",
        children: m.intl.string(p.default.wWKySP)
      }), (0, e.jsx)(a.xvT, {
        variant: "display-sm",
        color: "text-primary",
        children: r[0].numMessagesSent
      }), (0, e.jsx)(a.xvT, {
        variant: "display-sm",
        color: "text-primary",
        children: m.intl.string(p.default.lXT6ns)
      }), (0, e.jsx)(a.xvT, {
        variant: "display-sm",
        color: "text-primary",
        children: r[0].numMinutesInVoice
      })]
    })]
  })
}