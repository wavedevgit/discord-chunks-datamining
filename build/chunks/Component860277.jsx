/** Chunk was on 80448 **/
/** chunk id: 860277, original params: i,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => h
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
  Chunk484718 = require("./484718.js"),
  Chunk388032 = require("./388032.jsx");

function h(i) {
  let {
    slide: t
  } = i, {
    users: r
  } = (0, l.e7)([c.Z], () => c.Z.getCheckpointData()), h = (0, n.useMemo)(() => r.map(i => {
    let {
      userId: t
    } = i;
    return d.default.getUser(t)
  }).filter(i => null != i), [r]);
  return (0, e.jsxs)(o.Z, {
    children: [t === x.W.FRIENDS && (0, e.jsxs)("div", {
      children: [(0, e.jsx)(a.xvT, {
        variant: "display-md",
        color: "text-primary",
        children: m.intl.string(p.default["4xZpq6"])
      }), h.slice(1).map(i => (0, e.jsxs)("div", {
        children: [(0, e.jsx)(s.Z, {
          user: i,
          size: u.EF.SIZE_120
        }), (0, e.jsx)(a.xvT, {
          variant: "display-lg",
          color: "text-primary",
          children: i.username
        })]
      }, i.id))]
    }), t === x.W.BEST_FRIEND && (0, e.jsxs)("div", {
      children: [(0, e.jsx)(a.xvT, {
        variant: "display-md",
        color: "text-primary",
        children: m.intl.string(p.default.d5HUsL)
      }), (0, e.jsx)(s.Z, {
        user: h[0],
        size: u.EF.SIZE_120
      }), (0, e.jsx)(a.xvT, {
        variant: "display-md",
        color: "text-primary",
        children: m.intl.format(p.default.wz2JuL, {
          user: h[0].username,
          userHook: (i, t) => (0, e.jsx)(a.xvT, {
            variant: "display-lg",
            color: "text-primary",
            children: i
          }, t)
        })
      }), (0, e.jsx)(a.xvT, {
        variant: "display-sm",
        color: "text-primary",
        children: m.intl.string(p.default.wWKySE)
      }), (0, e.jsx)(a.xvT, {
        variant: "display-sm",
        color: "text-primary",
        children: r[0].numMessagesSent
      }), (0, e.jsx)(a.xvT, {
        variant: "display-sm",
        color: "text-primary",
        children: m.intl.string(p.default.lXT6np)
      }), (0, e.jsx)(a.xvT, {
        variant: "display-sm",
        color: "text-primary",
        children: r[0].numMinutesInVoice
      })]
    })]
  })
}