/** Chunk was on 80448 **/
/** chunk id: 221558, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk5888 = require("./5888.js"),
  Chunk198358 = require("./198358.jsx"),
  Chunk892694 = require("./892694.js"),
  Chunk388032 = require("./388032.jsx");

function p() {
  let {
    guilds: {
      guilds: t,
      numGuildsJoined: e
    }
  } = (0, Chunk442837.e7)([Chunk5888.Z], () => Chunk5888.Z.getCheckpointData()), i = (0, Chunk647438.useMemo)(() => module.map(t => {
    let {
      guild: e
    } = t;
    return d.Z.getGuild(e.id)
  }).filter(t => null != t), [module]);
  return (0, Chunk951288.jsxs)(Chunk198358.Z, {
    children: [(0, Chunk951288.jsx)(Chunk793030.xvT, {
      variant: "display-sm",
      color: "text-primary",
      children: Chunk388032.intl.format(Chunk892694.default.mAroeJ, {
        joinedCount: exports,
        guildCount: require.length
      })
    }), require.map((e, i) => (0, r.jsxs)("div", {
      children: [(0, r.jsx)(s.Z, {
        guild: e,
        size: s.Z.Sizes.XLARGE
      }), (0, r.jsx)(l.xvT, {
        variant: "display-md",
        color: "text-primary",
        children: e.name
      }), 0 === i && (0, r.jsxs)("div", {
        children: [(0, r.jsx)(l.xvT, {
          variant: "display-md",
          color: "text-primary",
          children: t[0].numMessagesSent
        }), (0, r.jsx)(l.xvT, {
          variant: "display-sm",
          color: "text-primary",
          children: x.intl.string(u.default.wWKySP)
        }), (0, r.jsx)(l.xvT, {
          variant: "display-md",
          color: "text-primary",
          children: t[0].numVoiceMinutes
        }), (0, r.jsx)(l.xvT, {
          variant: "display-sm",
          color: "text-primary",
          children: x.intl.string(u.default.lXT6ns)
        })]
      })]
    }, e.id))]
  })
}