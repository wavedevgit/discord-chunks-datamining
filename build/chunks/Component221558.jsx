/** Chunk was on 80448 **/
/** chunk id: 221558, original params: i,t,r (module,exports,require) **/
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
  Chunk506945 = require("./506945.js"),
  Chunk388032 = require("./388032.jsx");

function p() {
  let {
    guilds: {
      guilds: i,
      numGuildsJoined: t
    }
  } = (0, Chunk442837.e7)([Chunk5888.Z], () => Chunk5888.Z.getCheckpointData()), r = (0, Chunk647438.useMemo)(() => module.map(i => {
    let {
      guild: t
    } = i;
    return d.Z.getGuild(t.id)
  }).filter(i => null != i), [module]);
  return (0, Chunk951288.jsxs)(Chunk198358.Z, {
    children: [(0, Chunk951288.jsx)(Chunk793030.xvT, {
      variant: "display-sm",
      color: "text-primary",
      children: Chunk388032.intl.format(Chunk506945.default.mAroeJ, {
        joinedCount: exports,
        guildCount: require.length
      })
    }), require.map((t, r) => (0, e.jsxs)("div", {
      children: [(0, e.jsx)(s.Z, {
        guild: t,
        size: s.Z.Sizes.XLARGE
      }), (0, e.jsx)(a.xvT, {
        variant: "display-md",
        color: "text-primary",
        children: t.name
      }), 0 === r && (0, e.jsxs)("div", {
        children: [(0, e.jsx)(a.xvT, {
          variant: "display-md",
          color: "text-primary",
          children: i[0].numMessagesSent
        }), (0, e.jsx)(a.xvT, {
          variant: "display-sm",
          color: "text-primary",
          children: u.intl.string(x.default.wWKySP)
        }), (0, e.jsx)(a.xvT, {
          variant: "display-md",
          color: "text-primary",
          children: i[0].numVoiceMinutes
        }), (0, e.jsx)(a.xvT, {
          variant: "display-sm",
          color: "text-primary",
          children: u.intl.string(x.default.lXT6ns)
        })]
      })]
    }, t.id))]
  })
}