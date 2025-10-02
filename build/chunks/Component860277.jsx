/** Chunk was on 80448 **/
/** chunk id: 860277, original params: t,i,r (module,exports,require) **/
require.d(exports, {
  Z: () => m
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
  Chunk509950 = require("./509950.js"),
  Chunk388032 = require("./388032.jsx");

function m(t) {
  let {
    slide: i
  } = t, {
    sidekicks: r
  } = (0, l.e7)([c.Z], () => c.Z.getCheckpointData()), m = (0, n.useMemo)(() => r.map(t => {
    let {
      userId: i
    } = t;
    return d.default.getUser(i)
  }).filter(t => null != t), [r]);
  return (0, e.jsxs)(o.Z, {
    children: [i === x.W.FRIENDS && (0, e.jsxs)("div", {
      children: [(0, e.jsx)(a.xvT, {
        variant: "display-md",
        color: "text-primary",
        children: h.intl.string(p.default["4xZpq6"])
      }), m.slice(1).map(t => (0, e.jsxs)("div", {
        children: [(0, e.jsx)(s.Z, {
          user: t,
          size: u.EF.SIZE_120
        }), (0, e.jsx)(a.xvT, {
          variant: "display-lg",
          color: "text-primary",
          children: t.username
        })]
      }, t.id))]
    }), i === x.W.BEST_FRIEND && (0, e.jsxs)("div", {
      children: [(0, e.jsx)(a.xvT, {
        variant: "display-md",
        color: "text-primary",
        children: h.intl.string(p.default.d5HUsL)
      }), (0, e.jsx)(s.Z, {
        user: m[0],
        size: u.EF.SIZE_120
      }), (0, e.jsx)(a.xvT, {
        variant: "display-md",
        color: "text-primary",
        children: h.intl.format(p.default.wz2JuL, {
          user: m[0].username,
          userHook: (t, i) => (0, e.jsx)(a.xvT, {
            variant: "display-lg",
            color: "text-primary",
            children: t
          }, i)
        })
      }), (0, e.jsx)(a.xvT, {
        variant: "display-sm",
        color: "text-primary",
        children: h.intl.string(p.default.fQGHXl)
      }), (0, e.jsx)(a.xvT, {
        variant: "display-sm",
        color: "text-primary",
        children: r[0].numMessagesSent
      }), (0, e.jsx)(a.xvT, {
        variant: "display-sm",
        color: "text-primary",
        children: h.intl.string(p.default.Vrdyam)
      }), (0, e.jsx)(a.xvT, {
        variant: "display-sm",
        color: "text-primary",
        children: r[0].numMinutesInVoice
      })]
    })]
  })
}