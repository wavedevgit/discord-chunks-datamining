/** Chunk was on web.js **/
/** chunk id: 726542, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./804061.js"), require("./704826.js"), require("./35282.js"), require("./642613.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk900089 = require("./900089.js"),
  Chunk591759 = require("./591759.js"),
  Chunk981631 = require("./981631.js");
let l = [{
    type: Chunk981631.ABu.TWITCH,
    name: "Twitch",
    color: (0, Chunk900089.Fw)("TWITCH"),
    icon: {
      lightPNG: require("./635643.js"),
      darkPNG: require("./635643.js"),
      whitePNG: require("./800346.js"),
      lightSVG: require("./160050.js"),
      darkSVG: require("./160050.js"),
      whiteSVG: require("./235779.js")
    },
    enabled: true,
    getPlatformUserUrl: e => {
      let {
        name: t
      } = e;
      return "https://www.twitch.tv/".concat(encodeURIComponent(t))
    },
    domains: ["twitch.tv", "twitch.com"]
  }, {
    type: Chunk981631.ABu.YOUTUBE,
    name: "YouTube",
    color: (0, Chunk900089.Fw)("YOUTUBE"),
    icon: {
      lightPNG: require("./459862.js"),
      darkPNG: require("./459862.js"),
      whitePNG: require("./934689.js"),
      lightSVG: require("./529923.js"),
      darkSVG: require("./529923.js"),
      whiteSVG: require("./141989.js")
    },
    enabled: true,
    getPlatformUserUrl: e => {
      let {
        id: t
      } = e;
      return "https://www.youtube.com/channel/".concat(encodeURIComponent(t))
    },
    domains: ["youtube.com", "youtu.be"]
  }, {
    type: Chunk981631.ABu.BATTLENET,
    name: "Battle.net",
    color: (0, Chunk900089.Fw)("BATTLENET"),
    icon: {
      lightPNG: require("./414680.js"),
      darkPNG: require("./414680.js"),
      whitePNG: require("./573103.js"),
      lightSVG: require("./424160.js"),
      darkSVG: require("./424160.js"),
      whiteSVG: require("./929858.js")
    },
    enabled: true
  }, {
    type: Chunk981631.ABu.BLUESKY,
    name: "Bluesky",
    icon: {
      lightPNG: require("./618780.js"),
      darkPNG: require("./618780.js"),
      whitePNG: require("./566961.js"),
      lightSVG: require("./387793.js"),
      darkSVG: require("./387793.js"),
      whiteSVG: require("./148052.js")
    },
    enabled: true,
    getPlatformUserUrl: e => {
      let {
        id: t
      } = e;
      return "https://bsky.app/profile/".concat(encodeURIComponent(t).replaceAll("%3A", ":"))
    },
    isFederated: true,
    hasMetadata: true
  }, {
    type: Chunk981631.ABu.BUNGIE,
    name: "Bungie.net",
    color: (0, Chunk900089.Fw)("BUNGIE"),
    icon: {
      lightPNG: require("./953522.js"),
      darkPNG: require("./706264.js"),
      whitePNG: require("./610891.js"),
      lightSVG: require("./459293.js"),
      darkSVG: require("./970714.js"),
      whiteSVG: require("./891049.js")
    },
    enabled: true
  }, {
    type: Chunk981631.ABu.SKYPE,
    name: "Skype",
    color: (0, Chunk900089.Fw)("SKYPE"),
    icon: {
      lightPNG: require("./575439.js"),
      darkPNG: require("./575439.js"),
      whitePNG: require("./27163.js"),
      lightSVG: require("./721782.js"),
      darkSVG: require("./721782.js"),
      whiteSVG: require("./144578.js")
    },
    enabled: false,
    getPlatformUserUrl: e => {
      let {
        id: t
      } = e;
      return "skype:".concat(encodeURIComponent(t), "?userinfo")
    }
  }, {
    type: Chunk981631.ABu.LEAGUE_OF_LEGENDS,
    name: "League of Legends",
    color: (0, Chunk900089.Fw)("LOL"),
    icon: {
      lightPNG: require("./275556.js"),
      darkPNG: require("./275556.js"),
      whitePNG: require("./26963.js"),
      lightSVG: require("./153711.js"),
      darkSVG: require("./153711.js"),
      whiteSVG: require("./327574.js")
    },
    enabled: true
  }, {
    type: Chunk981631.ABu.STEAM,
    name: "Steam",
    color: (0, Chunk900089.Fw)("STEAM"),
    icon: {
      lightPNG: require("./929234.js"),
      darkPNG: require("./170131.js"),
      whitePNG: require("./170131.js"),
      lightSVG: require("./227304.js"),
      darkSVG: require("./763613.js"),
      whiteSVG: require("./763613.js")
    },
    enabled: true,
    getPlatformUserUrl: e => {
      let {
        id: t
      } = e;
      return "https://steamcommunity.com/profiles/".concat(encodeURIComponent(t))
    },
    hasMetadata: true
  }, {
    type: Chunk981631.ABu.REDDIT,
    name: "Reddit",
    color: (0, Chunk900089.Fw)("REDDIT"),
    icon: {
      lightPNG: require("./211434.js"),
      darkPNG: require("./211434.js"),
      whitePNG: require("./682170.js"),
      lightSVG: require("./592358.js"),
      darkSVG: require("./592358.js"),
      whiteSVG: require("./972428.js")
    },
    enabled: true,
    domains: ["reddit.com"],
    getPlatformUserUrl: e => {
      let {
        name: t
      } = e;
      return "https://www.reddit.com/u/".concat(encodeURIComponent(t))
    },
    hasMetadata: true
  }, {
    type: Chunk981631.ABu.FACEBOOK,
    name: "Facebook",
    color: (0, Chunk900089.Fw)("FACEBOOK"),
    icon: {
      lightPNG: require("./762019.js"),
      darkPNG: require("./762019.js"),
      whitePNG: require("./620530.js"),
      lightSVG: require("./589232.js"),
      darkSVG: require("./589232.js"),
      whiteSVG: require("./318049.js")
    },
    domains: ["facebook.com"],
    enabled: true
  }, {
    type: Chunk981631.ABu.TWITTER_LEGACY,
    name: "Twitter",
    color: (0, Chunk900089.Fw)("TWITTER"),
    icon: {
      lightPNG: require("./954549.js"),
      darkPNG: require("./954549.js"),
      whitePNG: require("./550886.js"),
      lightSVG: require("./90961.js"),
      darkSVG: require("./90961.js"),
      whiteSVG: require("./819273.js")
    },
    enabled: false,
    getPlatformUserUrl: e => {
      let {
        name: t
      } = e;
      return "https://twitter.com/".concat(encodeURIComponent(t))
    },
    domains: ["twitter.com"],
    hasMetadata: true
  }, {
    type: Chunk981631.ABu.TWITTER,
    name: "X",
    color: (0, Chunk900089.Fw)("TWITTER"),
    icon: {
      lightPNG: require("./327555.js"),
      darkPNG: require("./126776.js"),
      whitePNG: require("./778385.js"),
      lightSVG: require("./257325.js"),
      darkSVG: require("./451168.js"),
      whiteSVG: require("./580927.js")
    },
    enabled: true,
    getPlatformUserUrl: e => {
      let {
        name: t
      } = e;
      return "https://x.com/".concat(encodeURIComponent(t))
    },
    domains: ["x.com"],
    hasMetadata: true
  }, {
    type: Chunk981631.ABu.SPOTIFY,
    name: "Spotify",
    color: (0, Chunk900089.Fw)("SPOTIFY"),
    icon: {
      lightPNG: require("./182553.js"),
      darkPNG: require("./182553.js"),
      whitePNG: require("./955852.js"),
      lightSVG: require("./545734.js"),
      darkSVG: require("./545734.js"),
      whiteSVG: require("./136142.js")
    },
    enabled: true,
    getPlatformUserUrl: e => {
      let {
        id: t
      } = e;
      return "https://open.spotify.com/user/".concat(encodeURIComponent(t))
    }
  }, {
    type: Chunk981631.ABu.XBOX,
    name: "Xbox",
    color: (0, Chunk900089.Fw)("XBOX"),
    icon: {
      lightPNG: require("./979660.js"),
      darkPNG: require("./157981.js"),
      whitePNG: require("./157981.js"),
      lightSVG: require("./66992.js"),
      darkSVG: require("./158173.js"),
      whiteSVG: require("./158173.js"),
      customPNG: require("./436740.js")
    },
    enabled: true
  }, {
    type: Chunk981631.ABu.SAMSUNG,
    name: "Samsung Galaxy",
    color: (0, Chunk900089.Fw)("SAMSUNG"),
    icon: {
      lightPNG: require("./664982.js"),
      darkPNG: require("./664982.js"),
      whitePNG: require("./442123.js"),
      lightSVG: require("./601568.js"),
      darkSVG: require("./601568.js"),
      whiteSVG: require("./7007.js")
    },
    enabled: false
  }, {
    type: Chunk981631.ABu.GITHUB,
    name: "GitHub",
    color: (0, Chunk900089.Fw)("GITHUB"),
    icon: {
      lightPNG: require("./843605.js"),
      darkPNG: require("./789822.js"),
      whitePNG: require("./789822.js"),
      lightSVG: require("./247519.js"),
      darkSVG: require("./184887.js"),
      whiteSVG: require("./184887.js")
    },
    enabled: true,
    getPlatformUserUrl: e => {
      let {
        name: t
      } = e;
      return "https://github.com/".concat(encodeURIComponent(t))
    },
    domains: ["github.com"]
  }, {
    type: Chunk981631.ABu.PLAYSTATION,
    name: "PlayStation Network",
    color: (0, Chunk900089.Fw)("PLAYSTATION"),
    icon: {
      lightPNG: require("./385751.js"),
      darkPNG: require("./399592.js"),
      whitePNG: require("./399592.js"),
      lightSVG: require("./223434.js"),
      darkSVG: require("./350379.js"),
      whiteSVG: require("./350379.js")
    },
    enabled: true
  }, {
    type: Chunk981631.ABu.PLAYSTATION_STAGING,
    name: "PlayStation Network (Staging)",
    color: (0, Chunk900089.Fw)("PLAYSTATION"),
    icon: {
      lightPNG: require("./399592.js"),
      darkPNG: require("./385751.js"),
      whitePNG: require("./385751.js"),
      lightSVG: require("./350379.js"),
      darkSVG: require("./223434.js"),
      whiteSVG: require("./223434.js")
    },
    enabled: false
  }, {
    type: Chunk981631.ABu.EPIC_GAMES,
    name: "Epic Games",
    icon: {
      lightPNG: require("./707873.js"),
      darkPNG: require("./549727.js"),
      whitePNG: require("./549727.js"),
      lightSVG: require("./769582.js"),
      darkSVG: require("./532293.js"),
      whiteSVG: require("./532293.js")
    },
    enabled: true
  }, {
    type: Chunk981631.ABu.RIOT_GAMES,
    name: "Riot Games",
    icon: {
      lightPNG: require("./406818.js"),
      darkPNG: require("./406818.js"),
      whitePNG: require("./451192.js"),
      lightSVG: require("./596001.js"),
      darkSVG: require("./596001.js"),
      whiteSVG: require("./641169.js")
    },
    enabled: true
  }, {
    type: Chunk981631.ABu.ROBLOX,
    name: "Roblox",
    icon: {
      lightPNG: require("./670423.js"),
      darkPNG: require("./414773.js"),
      whitePNG: require("./731596.js"),
      lightSVG: require("./553715.js"),
      darkSVG: require("./678922.js"),
      whiteSVG: require("./752561.js")
    },
    enabled: true,
    getPlatformUserUrl: e => {
      let {
        id: t
      } = e;
      return "https://roblox.com/users/".concat(encodeURIComponent(t), "/profile")
    }
  }, {
    type: Chunk981631.ABu.PAYPAL,
    name: "PayPal",
    icon: {
      lightPNG: require("./501001.js"),
      darkPNG: require("./501001.js"),
      whitePNG: require("./219389.js"),
      lightSVG: require("./698946.js"),
      darkSVG: require("./698946.js"),
      whiteSVG: require("./737531.js")
    },
    enabled: true,
    hasMetadata: true
  }, {
    type: Chunk981631.ABu.EBAY,
    name: "eBay",
    icon: {
      lightPNG: require("./215741.js"),
      darkPNG: require("./215741.js"),
      whitePNG: require("./463728.js"),
      lightSVG: require("./519515.js"),
      darkSVG: require("./519515.js"),
      whiteSVG: require("./98668.js")
    },
    enabled: true,
    hasMetadata: true,
    getPlatformUserUrl: e => {
      let {
        name: t
      } = e;
      return "https://www.ebay.com/usr/".concat(encodeURIComponent(t))
    }
  }, {
    type: Chunk981631.ABu.TIKTOK,
    name: "TikTok",
    icon: {
      lightPNG: require("./699308.js"),
      darkPNG: require("./137181.js"),
      whitePNG: require("./137181.js"),
      lightSVG: require("./890849.js"),
      darkSVG: require("./155885.js"),
      whiteSVG: require("./155885.js")
    },
    enabled: true,
    hasMetadata: true,
    domains: ["tiktok.com"],
    getPlatformUserUrl: e => {
      let {
        name: t
      } = e;
      return "https://www.tiktok.com/@".concat(encodeURIComponent(t))
    }
  }, {
    type: Chunk981631.ABu.INSTAGRAM,
    name: "Instagram",
    icon: {
      lightPNG: require("./232720.js"),
      darkPNG: require("./232720.js"),
      whitePNG: require("./71996.js"),
      lightSVG: require("./526659.js"),
      darkSVG: require("./526659.js"),
      whiteSVG: require("./326720.js")
    },
    enabled: false,
    domains: ["instagram.com"],
    getPlatformUserUrl: e => {
      let {
        name: t
      } = e;
      return "https://www.instagram.com/".concat(encodeURIComponent(t))
    }
  }, {
    type: Chunk981631.ABu.MASTODON,
    name: "Mastodon",
    icon: {
      lightPNG: require("./913883.js"),
      darkPNG: require("./913883.js"),
      whitePNG: require("./744387.js"),
      lightSVG: require("./692552.js"),
      darkSVG: require("./692552.js"),
      whiteSVG: require("./49722.js")
    },
    enabled: false,
    getPlatformUserUrl: e => {
      let {
        id: t
      } = e;
      return t
    },
    isFederated: true,
    hasMetadata: true
  }, {
    type: Chunk981631.ABu.CRUNCHYROLL,
    name: "Crunchyroll",
    color: (0, Chunk900089.Fw)("CRUNCHYROLL"),
    icon: {
      lightPNG: require("./469024.js"),
      darkPNG: require("./469024.js"),
      whitePNG: require("./469024.js"),
      lightSVG: require("./654009.js"),
      darkSVG: require("./654009.js"),
      whiteSVG: require("./670618.js")
    },
    enabled: true
  }, {
    type: Chunk981631.ABu.DOMAIN,
    name: "Domain",
    icon: {
      lightPNG: require("./476735.js"),
      darkPNG: require("./561036.js"),
      whitePNG: require("./561036.js"),
      lightSVG: require("./329074.js"),
      darkSVG: require("./664935.js"),
      whiteSVG: require("./664935.js")
    },
    getPlatformUserUrl: e => {
      let {
        id: t
      } = e;
      return "https://".concat(t, "/")
    },
    enabled: true
  }, {
    type: Chunk981631.ABu.AMAZON_MUSIC,
    name: "Amazon Music",
    icon: {
      lightPNG: require("./495036.js"),
      darkPNG: require("./495036.js"),
      whitePNG: require("./495036.js"),
      lightSVG: require("./605098.js"),
      darkSVG: require("./605098.js"),
      whiteSVG: require("./605098.js")
    },
    enabled: true
  }, {
    type: Chunk981631.ABu.META_QUEST_OR_HORIZON,
    name: "Meta Quest",
    icon: {
      lightPNG: require("./637291.js"),
      darkPNG: require("./172471.js"),
      whitePNG: require("./629350.js"),
      lightSVG: require("./324064.js"),
      darkSVG: require("./861380.js"),
      whiteSVG: require("./916803.js")
    },
    enabled: false
  }],
  c = i().keyBy(l, "type"),
  u = {};
l.forEach(e => {
  var t;
  null == (t = e.domains) || t.forEach(t => {
    u[t] = e
  })
});
let d = {
  get(e) {
    var t;
    return null != (t = c[e]) ? t : null
  },
  getByUrl(e) {
    let t = a.Z.toURLSafe(e);
    if (null == t) return;
    let n = t.hostname;
    return u[n.startsWith("www.") ? n.slice(4) : n]
  },
  isSupported: e => Object.prototype.hasOwnProperty.call(c, e),
  map: e => l.map(e),
  filter(e) {
    let t = l.filter(e);
    return t.sort((e, t) => {
      let {
        name: n
      } = e, {
        name: r
      } = t;
      return n.localeCompare(r)
    }), t
  },
  find: e => l.find(e)
}