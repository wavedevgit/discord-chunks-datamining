/** Chunk was on 80448 **/
/** chunk id: 221558, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk5888 = require("./5888.js"),
  Chunk198358 = require("./198358.jsx"),
  Chunk140939 = require("./140939.js"),
  Chunk388032 = require("./388032.jsx");

function p() {
  let {
    guilds: {
      guilds: t,
      numGuildsJoined: e
    }
  } = (0, Chunk442837.e7)([Chunk5888.Z], () => Chunk5888.Z.getCheckpointData()), i = (0, Chunk473749.useMemo)(() => module.map(t => {
    let {
      guild: e
    } = t;
    return d.Z.getGuild(e.id)
  }).filter(t => null != t), [module]);
  return (0, Chunk54381.jsxs)(Chunk198358.Z, {
    children: [(0, Chunk54381.jsx)(Chunk793030.xvT, {
      variant: "display-sm",
      color: "text-primary",
      children: Chunk388032.intl.format(Chunk140939.default.mAroeJ, {
        joinedCount: exports,
        guildCount: require.length
      })
    }), require.map((e, i) => (0, n.jsxs)("div", {
      children: [(0, n.jsx)(s.Z, {
        guild: e,
        size: s.Z.Sizes.XLARGE
      }), (0, n.jsx)(l.xvT, {
        variant: "display-md",
        color: "text-primary",
        children: e.name
      }), 0 === i && (0, n.jsxs)("div", {
        children: [(0, n.jsx)(l.xvT, {
          variant: "display-md",
          color: "text-primary",
          children: t[0].numMessagesSent
        }), (0, n.jsx)(l.xvT, {
          variant: "display-sm",
          color: "text-primary",
          children: x.intl.string(u.default.wWKySP)
        }), (0, n.jsx)(l.xvT, {
          variant: "display-md",
          color: "text-primary",
          children: t[0].numVoiceMinutes
        }), (0, n.jsx)(l.xvT, {
          variant: "display-sm",
          color: "text-primary",
          children: x.intl.string(u.default.lXT6ns)
        })]
      })]
    }, e.id))]
  })
}