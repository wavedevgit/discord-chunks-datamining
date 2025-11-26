/** Chunk was on 80448 **/
/** chunk id: 221558, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk54381 = require("./54381.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk5888 = require("./5888.js"),
  Chunk198358 = require("./198358.jsx"),
  Chunk140939 = require("./140939.js"),
  Chunk388032 = require("./388032.jsx");

function x() {
  let {
    guilds: {
      guilds: t,
      numGuildsJoined: e
    } = {
      guilds: [],
      numGuildsJoined: 0
    }
  } = (0, Chunk442837.e7)([Chunk5888.Z], () => Chunk5888.Z.getCheckpointData()), i = module.map(t => {
    let {
      guild: e
    } = t;
    return s.Z.getGuild(e.id)
  }).filter(t => null != t);
  return (0, Chunk54381.jsxs)(Chunk198358.Z, {
    children: [(0, Chunk54381.jsx)(Chunk793030.xvT, {
      variant: "display-sm",
      color: "text-primary",
      children: Chunk388032.intl.format(Chunk140939.default.mAroeJ, {
        joinedCount: exports,
        guildCount: require.length
      })
    }), require.map((e, i) => (0, n.jsxs)("div", {
      children: [(0, n.jsx)(a.Z, {
        guild: e,
        size: a.Z.Sizes.XLARGE
      }), (0, n.jsx)(r.xvT, {
        variant: "display-md",
        color: "text-primary",
        children: e.name
      }), 0 === i && (0, n.jsxs)("div", {
        children: [(0, n.jsx)(r.xvT, {
          variant: "display-md",
          color: "text-primary",
          children: t[0].numMessagesSent
        }), (0, n.jsx)(r.xvT, {
          variant: "display-sm",
          color: "text-primary",
          children: u.intl.string(o.default.wWKySP)
        }), (0, n.jsx)(r.xvT, {
          variant: "display-md",
          color: "text-primary",
          children: t[0].numVoiceMinutes
        }), (0, n.jsx)(r.xvT, {
          variant: "display-sm",
          color: "text-primary",
          children: u.intl.string(o.default.lXT6ns)
        })]
      })]
    }, e.id))]
  })
}