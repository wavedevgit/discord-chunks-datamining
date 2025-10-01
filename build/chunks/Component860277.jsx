/** Chunk was on 80448 **/
/** chunk id: 860277, original params: e,i,t (module,exports,require) **/
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
  Chunk509950 = require("./509950.js"),
  Chunk388032 = require("./388032.jsx");

function h(e) {
  let {
    slide: i
  } = e, {
    sidekicks: t
  } = (0, l.e7)([c.Z], () => c.Z.getCheckpointData()), h = (0, n.useMemo)(() => t.map(e => {
    let {
      userId: i
    } = e;
    return d.default.getUser(i)
  }).filter(e => null != e), [t]);
  return (0, r.jsxs)(o.Z, {
    children: [i === x.W.FRIENDS && (0, r.jsxs)("div", {
      children: [(0, r.jsx)(s.xvT, {
        variant: "display-md",
        color: "text-primary",
        children: p.intl.string(m.default["4xZpq6"])
      }), h.slice(1).map(e => (0, r.jsxs)("div", {
        children: [(0, r.jsx)(a.Z, {
          user: e,
          size: u.EF.SIZE_120
        }), (0, r.jsx)(s.xvT, {
          variant: "display-lg",
          color: "text-primary",
          children: e.username
        })]
      }, e.id))]
    }), i === x.W.BEST_FRIEND && (0, r.jsxs)("div", {
      children: [(0, r.jsx)(s.xvT, {
        variant: "display-md",
        color: "text-primary",
        children: p.intl.string(m.default.d5HUsL)
      }), (0, r.jsx)(a.Z, {
        user: h[0],
        size: u.EF.SIZE_120
      }), (0, r.jsx)(s.xvT, {
        variant: "display-md",
        color: "text-primary",
        children: p.intl.format(m.default.wz2JuL, {
          user: h[0].username,
          userHook: (e, i) => (0, r.jsx)(s.xvT, {
            variant: "display-lg",
            color: "text-primary",
            children: e
          }, i)
        })
      }), (0, r.jsx)(s.xvT, {
        variant: "display-sm",
        color: "text-primary",
        children: p.intl.string(m.default.fQGHXl)
      }), (0, r.jsx)(s.xvT, {
        variant: "display-sm",
        color: "text-primary",
        children: t[0].numMessagesSent
      }), (0, r.jsx)(s.xvT, {
        variant: "display-sm",
        color: "text-primary",
        children: p.intl.string(m.default.Vrdyam)
      }), (0, r.jsx)(s.xvT, {
        variant: "display-sm",
        color: "text-primary",
        children: t[0].numMinutesInVoice
      })]
    })]
  })
}