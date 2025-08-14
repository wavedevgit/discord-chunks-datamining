/** Chunk was on 76708 **/
/** chunk id: 804919, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  LM: () => o,
  oD: () => c,
  qs: () => a
});
var Chunk379405 = require("./379405.js"),
  Chunk296009 = require("./296009.js"),
  Chunk388032 = require("./388032.jsx");
let o = {
    VALORANT: "700136079562375258",
    ROBLOX: "363445589247131668",
    LEAGUE_OF_LEGENDS: "1402418696126992445",
    MINECRAFT: "1402418491272986635",
    COUNTERSTRIKE_2: "1158877933042143272",
    OVERWATCH_2: "356875221078245376",
    APEX_LEGENDS: "542075586886107149",
    FORTNITE: "1402418703554842694",
    GRAND_THEFT_AUTO_V: "1402418714716143646",
    DOTA_2: "356875988589740042",
    ROCKET_LEAGUE: "356877880938070016",
    BALDURS_GATE_3: "1137125502985961543",
    CYBERPUNK_2077: "787443973538971748",
    ZENLESS_ZONE_ZERO: "1257819671114289184",
    RED_DEAD_REDEMPTION_2: "1402418648332898466",
    ELDEN_RING: "1402418436809953330"
  },
  a = Object.values(o),
  c = () => [{
    id: "0",
    type: Chunk296009.l.FAVORITE_GAMES,
    games: [{
      applicationId: o.VALORANT,
      comment: Chunk388032.intl.string(Chunk388032.t["7CCylJ"])
    }]
  }, {
    id: "1",
    type: Chunk296009.l.CURRENT_GAMES,
    games: [{
      applicationId: o.ROBLOX,
      tags: [Chunk379405._.OPEN_TO_PLAY, Chunk379405._.LIKE_IT]
    }, {
      applicationId: o.LEAGUE_OF_LEGENDS,
      tags: [Chunk379405._.LFG, Chunk379405._.LIKE_IT]
    }]
  }, {
    id: "2",
    type: Chunk296009.l.WANT_TO_PLAY_GAMES,
    games: [{
      applicationId: o.MINECRAFT
    }, {
      applicationId: o.COUNTERSTRIKE_2
    }, {
      applicationId: o.OVERWATCH_2
    }, {
      applicationId: o.APEX_LEGENDS
    }]
  }, {
    id: "3",
    type: Chunk296009.l.PLAYED_GAMES,
    games: [{
      applicationId: o.FORTNITE
    }, {
      applicationId: o.GRAND_THEFT_AUTO_V
    }, {
      applicationId: o.DOTA_2
    }, {
      applicationId: o.ROCKET_LEAGUE
    }]
  }]