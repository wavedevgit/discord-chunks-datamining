/** Chunk was on 80448 **/
/** chunk id: 221558, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
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

function m() {
  let {
    guilds: {
      guilds: e,
      numGuildsJoined: t
    } = {
      guilds: [],
      numGuildsJoined: 0
    }
  } = (0, Chunk442837.e7)([Chunk5888.Z], () => Chunk5888.Z.getCheckpointData()), n = module.map(e => {
    let {
      guild: t
    } = e;
    return o.Z.getGuild(t.id)
  }).filter(e => null != e);
  return (0, Chunk54381.jsxs)(Chunk198358.Z, {
    children: [(0, Chunk54381.jsx)(Chunk793030.xvT, {
      variant: "display-sm",
      color: "text-strong",
      children: Chunk388032.intl.format(Chunk140939.default.mAroeJ, {
        joinedCount: exports,
        guildCount: require.length
      })
    }), require.map((t, n) => (0, i.jsxs)("div", {
      children: [(0, i.jsx)(l.Z, {
        guild: t,
        size: l.Z.Sizes.XLARGE
      }), (0, i.jsx)(s.xvT, {
        variant: "display-md",
        color: "text-strong",
        children: t.name
      }), 0 === n && (0, i.jsxs)("div", {
        children: [(0, i.jsx)(s.xvT, {
          variant: "display-md",
          color: "text-strong",
          children: e[0].numMessagesSent
        }), (0, i.jsx)(s.xvT, {
          variant: "display-sm",
          color: "text-strong",
          children: d.intl.string(u.default.wWKySP)
        }), (0, i.jsx)(s.xvT, {
          variant: "display-md",
          color: "text-strong",
          children: e[0].numVoiceMinutes
        }), (0, i.jsx)(s.xvT, {
          variant: "display-sm",
          color: "text-strong",
          children: d.intl.string(u.default.lXT6ns)
        })]
      })]
    }, t.id))]
  })
}