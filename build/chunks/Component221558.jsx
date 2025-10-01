/** Chunk was on 80448 **/
/** chunk id: 221558, original params: e,i,t (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk5888 = require("./5888.js"),
  Chunk198358 = require("./198358.jsx"),
  Chunk509950 = require("./509950.js"),
  Chunk388032 = require("./388032.jsx");

function m() {
  let {
    guilds: {
      guilds: e,
      numGuildsJoined: i
    }
  } = (0, Chunk442837.e7)([Chunk5888.Z], () => Chunk5888.Z.getCheckpointData()), t = (0, Chunk647438.useMemo)(() => module.map(e => {
    let {
      guildId: i
    } = e;
    return d.Z.getGuild(i)
  }).filter(e => null != e), [module]);
  return (0, Chunk951288.jsxs)(Chunk198358.Z, {
    children: [(0, Chunk951288.jsx)(Chunk793030.xvT, {
      variant: "display-sm",
      color: "text-primary",
      children: Chunk388032.intl.format(Chunk509950.default.mAroeH, {
        joinedCount: exports,
        guildCount: require.length
      })
    }), require.map((i, t) => (0, r.jsxs)("div", {
      children: [(0, r.jsx)(a.Z, {
        guild: i,
        size: a.Z.Sizes.XLARGE
      }), (0, r.jsx)(s.xvT, {
        variant: "display-md",
        color: "text-primary",
        children: i.name
      }), 0 === t && (0, r.jsxs)("div", {
        children: [(0, r.jsx)(s.xvT, {
          variant: "display-md",
          color: "text-primary",
          children: e[0].numMessagesSent
        }), (0, r.jsx)(s.xvT, {
          variant: "display-sm",
          color: "text-primary",
          children: u.intl.string(x.default.nPTMHh)
        }), (0, r.jsx)(s.xvT, {
          variant: "display-md",
          color: "text-primary",
          children: e[0].numMinutesListening + e[0].numMinutesSpeaking
        }), (0, r.jsx)(s.xvT, {
          variant: "display-sm",
          color: "text-primary",
          children: u.intl.string(x.default["3NjdFR"])
        })]
      })]
    }, i.id))]
  })
}