/** Chunk was on web.js **/
/** chunk id: 573648, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./747238.js"), require("./812715.js"), require("./866193.js"), require("./638769.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk374994 = require("./374994.js"),
  Chunk998218 = require("./998218.js"),
  Chunk652215 = require("./652215.js");
let l = [{
    type: Chunk652215.fg2.TWITCH,
    name: "Twitch",
    color: (0, Chunk374994.dE)("TWITCH"),
    icon: {
      lightPNG: require("./491679.js"),
      darkPNG: require("./491679.js"),
      whitePNG: require("./147327.js"),
      lightSVG: require("./319952.js"),
      darkSVG: require("./319952.js"),
      whiteSVG: require("./924016.js")
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
    type: Chunk652215.fg2.YOUTUBE,
    name: "YouTube",
    color: (0, Chunk374994.dE)("YOUTUBE"),
    icon: {
      lightPNG: require("./913027.js"),
      darkPNG: require("./913027.js"),
      whitePNG: require("./562771.js"),
      lightSVG: require("./366644.js"),
      darkSVG: require("./366644.js"),
      whiteSVG: require("./76324.js")
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
    type: Chunk652215.fg2.BATTLENET,
    name: "Battle.net",
    color: (0, Chunk374994.dE)("BATTLENET"),
    icon: {
      lightPNG: require("./560623.js"),
      darkPNG: require("./560623.js"),
      whitePNG: require("./20847.js"),
      lightSVG: require("./794368.js"),
      darkSVG: require("./794368.js"),
      whiteSVG: require("./254592.js")
    },
    enabled: true
  }, {
    type: Chunk652215.fg2.BLUESKY,
    name: "Bluesky",
    icon: {
      lightPNG: require("./419075.js"),
      darkPNG: require("./419075.js"),
      whitePNG: require("./450259.js"),
      lightSVG: require("./872692.js"),
      darkSVG: require("./872692.js"),
      whiteSVG: require("./480164.js")
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
    type: Chunk652215.fg2.BUNGIE,
    name: "Bungie.net",
    color: (0, Chunk374994.dE)("BUNGIE"),
    icon: {
      lightPNG: require("./788439.js"),
      darkPNG: require("./664471.js"),
      whitePNG: require("./356556.js"),
      lightSVG: require("./624632.js"),
      darkSVG: require("./500664.js"),
      whiteSVG: require("./752987.js")
    },
    enabled: true
  }, {
    type: Chunk652215.fg2.SKYPE,
    name: "Skype",
    color: (0, Chunk374994.dE)("SKYPE"),
    icon: {
      lightPNG: require("./2016.js"),
      darkPNG: require("./2016.js"),
      whitePNG: require("./915782.js"),
      lightSVG: require("./831151.js"),
      darkSVG: require("./831151.js"),
      whiteSVG: require("./205809.js")
    },
    enabled: false,
    getPlatformUserUrl: e => {
      let {
        id: t
      } = e;
      return "skype:".concat(encodeURIComponent(t), "?userinfo")
    }
  }, {
    type: Chunk652215.fg2.LEAGUE_OF_LEGENDS,
    name: "League of Legends",
    color: (0, Chunk374994.dE)("LOL"),
    icon: {
      lightPNG: require("./17096.js"),
      darkPNG: require("./17096.js"),
      whitePNG: require("./801294.js"),
      lightSVG: require("./604199.js"),
      darkSVG: require("./604199.js"),
      whiteSVG: require("./415369.js")
    },
    enabled: true
  }, {
    type: Chunk652215.fg2.STEAM,
    name: "Steam",
    color: (0, Chunk374994.dE)("STEAM"),
    icon: {
      lightPNG: require("./123775.js"),
      darkPNG: require("./601156.js"),
      whitePNG: require("./601156.js"),
      lightSVG: require("./384112.js"),
      darkSVG: require("./329219.js"),
      whiteSVG: require("./329219.js")
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
    type: Chunk652215.fg2.REDDIT,
    name: "Reddit",
    color: (0, Chunk374994.dE)("REDDIT"),
    icon: {
      lightPNG: require("./393027.js"),
      darkPNG: require("./393027.js"),
      whitePNG: require("./60662.js"),
      lightSVG: require("./605023.js"),
      darkSVG: require("./605023.js"),
      whiteSVG: require("./561921.js")
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
    type: Chunk652215.fg2.FACEBOOK,
    name: "Facebook",
    color: (0, Chunk374994.dE)("FACEBOOK"),
    icon: {
      lightPNG: require("./427788.js"),
      darkPNG: require("./427788.js"),
      whitePNG: require("./994546.js"),
      lightSVG: require("./340571.js"),
      darkSVG: require("./340571.js"),
      whiteSVG: require("./709693.js")
    },
    domains: ["facebook.com"],
    enabled: true
  }, {
    type: Chunk652215.fg2.TWITTER_LEGACY,
    name: "Twitter",
    color: (0, Chunk374994.dE)("TWITTER"),
    icon: {
      lightPNG: require("./482585.js"),
      darkPNG: require("./482585.js"),
      whitePNG: require("./244241.js"),
      lightSVG: require("./928014.js"),
      darkSVG: require("./928014.js"),
      whiteSVG: require("./221238.js")
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
    type: Chunk652215.fg2.TWITTER,
    name: "X",
    color: (0, Chunk374994.dE)("TWITTER"),
    icon: {
      lightPNG: require("./311891.js"),
      darkPNG: require("./49515.js"),
      whitePNG: require("./284888.js"),
      lightSVG: require("./341796.js"),
      darkSVG: require("./65516.js"),
      whiteSVG: require("./266583.js")
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
    type: Chunk652215.fg2.SPOTIFY,
    name: "Spotify",
    color: (0, Chunk374994.dE)("SPOTIFY"),
    icon: {
      lightPNG: require("./223184.js"),
      darkPNG: require("./223184.js"),
      whitePNG: require("./227926.js"),
      lightSVG: require("./305855.js"),
      darkSVG: require("./305855.js"),
      whiteSVG: require("./416353.js")
    },
    enabled: true,
    getPlatformUserUrl: e => {
      let {
        id: t
      } = e;
      return "https://open.spotify.com/user/".concat(encodeURIComponent(t))
    }
  }, {
    type: Chunk652215.fg2.XBOX,
    name: "Xbox",
    color: (0, Chunk374994.dE)("XBOX"),
    icon: {
      lightPNG: require("./443770.js"),
      darkPNG: require("./254485.js"),
      whitePNG: require("./254485.js"),
      lightSVG: require("./817301.js"),
      darkSVG: require("./278922.js"),
      whiteSVG: require("./278922.js"),
      customPNG: require("./783197.js")
    },
    enabled: true
  }, {
    type: Chunk652215.fg2.SAMSUNG,
    name: "Samsung Galaxy",
    color: (0, Chunk374994.dE)("SAMSUNG"),
    icon: {
      lightPNG: require("./609106.js"),
      darkPNG: require("./609106.js"),
      whitePNG: require("./293472.js"),
      lightSVG: require("./365725.js"),
      darkSVG: require("./365725.js"),
      whiteSVG: require("./122607.js")
    },
    enabled: false
  }, {
    type: Chunk652215.fg2.GITHUB,
    name: "GitHub",
    color: (0, Chunk374994.dE)("GITHUB"),
    icon: {
      lightPNG: require("./442932.js"),
      darkPNG: require("./325031.js"),
      whitePNG: require("./325031.js"),
      lightSVG: require("./514003.js"),
      darkSVG: require("./911272.js"),
      whiteSVG: require("./911272.js")
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
    type: Chunk652215.fg2.PLAYSTATION,
    name: "PlayStation Network",
    color: (0, Chunk374994.dE)("PLAYSTATION"),
    icon: {
      lightPNG: require("./695973.js"),
      darkPNG: require("./346058.js"),
      whitePNG: require("./346058.js"),
      lightSVG: require("./287930.js"),
      darkSVG: require("./512069.js"),
      whiteSVG: require("./512069.js")
    },
    enabled: true
  }, {
    type: Chunk652215.fg2.PLAYSTATION_STAGING,
    name: "PlayStation Network (Staging)",
    color: (0, Chunk374994.dE)("PLAYSTATION"),
    icon: {
      lightPNG: require("./346058.js"),
      darkPNG: require("./695973.js"),
      whitePNG: require("./695973.js"),
      lightSVG: require("./512069.js"),
      darkSVG: require("./287930.js"),
      whiteSVG: require("./287930.js")
    },
    enabled: false
  }, {
    type: Chunk652215.fg2.EPIC_GAMES,
    name: "Epic Games",
    icon: {
      lightPNG: require("./350794.js"),
      darkPNG: require("./179544.js"),
      whitePNG: require("./179544.js"),
      lightSVG: require("./490629.js"),
      darkSVG: require("./161239.js"),
      whiteSVG: require("./161239.js")
    },
    enabled: true
  }, {
    type: Chunk652215.fg2.RIOT_GAMES,
    name: "Riot Games",
    icon: {
      lightPNG: require("./625906.js"),
      darkPNG: require("./625906.js"),
      whitePNG: require("./853504.js"),
      lightSVG: require("./891581.js"),
      darkSVG: require("./891581.js"),
      whiteSVG: require("./198991.js")
    },
    enabled: true
  }, {
    type: Chunk652215.fg2.ROBLOX,
    name: "Roblox",
    icon: {
      lightPNG: require("./685701.js"),
      darkPNG: require("./358717.js"),
      whitePNG: require("./786602.js"),
      lightSVG: require("./905946.js"),
      darkSVG: require("./152962.js"),
      whiteSVG: require("./952613.js")
    },
    enabled: true,
    getPlatformUserUrl: e => {
      let {
        id: t
      } = e;
      return "https://roblox.com/users/".concat(encodeURIComponent(t), "/profile")
    }
  }, {
    type: Chunk652215.fg2.PAYPAL,
    name: "PayPal",
    icon: {
      lightPNG: require("./365083.js"),
      darkPNG: require("./365083.js"),
      whitePNG: require("./127787.js"),
      lightSVG: require("./753212.js"),
      darkSVG: require("./753212.js"),
      whiteSVG: require("./143788.js")
    },
    enabled: true,
    hasMetadata: true
  }, {
    type: Chunk652215.fg2.EBAY,
    name: "eBay",
    icon: {
      lightPNG: require("./139673.js"),
      darkPNG: require("./139673.js"),
      whitePNG: require("./941265.js"),
      lightSVG: require("./127630.js"),
      darkSVG: require("./127630.js"),
      whiteSVG: require("./978614.js")
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
    type: Chunk652215.fg2.TIKTOK,
    name: "TikTok",
    icon: {
      lightPNG: require("./996319.js"),
      darkPNG: require("./393903.js"),
      whitePNG: require("./393903.js"),
      lightSVG: require("./824592.js"),
      darkSVG: require("./627648.js"),
      whiteSVG: require("./627648.js")
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
    type: Chunk652215.fg2.INSTAGRAM,
    name: "Instagram",
    icon: {
      lightPNG: require("./833070.js"),
      darkPNG: require("./833070.js"),
      whitePNG: require("./767148.js"),
      lightSVG: require("./23849.js"),
      darkSVG: require("./23849.js"),
      whiteSVG: require("./137403.js")
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
    type: Chunk652215.fg2.MASTODON,
    name: "Mastodon",
    icon: {
      lightPNG: require("./947839.js"),
      darkPNG: require("./947839.js"),
      whitePNG: require("./749023.js"),
      lightSVG: require("./724528.js"),
      darkSVG: require("./724528.js"),
      whiteSVG: require("./60944.js")
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
    type: Chunk652215.fg2.CRUNCHYROLL,
    name: "Crunchyroll",
    color: (0, Chunk374994.dE)("CRUNCHYROLL"),
    icon: {
      lightPNG: require("./405921.js"),
      darkPNG: require("./405921.js"),
      whitePNG: require("./405921.js"),
      lightSVG: require("./700518.js"),
      darkSVG: require("./700518.js"),
      whiteSVG: require("./415662.js")
    },
    enabled: true
  }, {
    type: Chunk652215.fg2.DOMAIN,
    name: "Domain",
    icon: {
      lightPNG: require("./647951.js"),
      darkPNG: require("./490431.js"),
      whitePNG: require("./490431.js"),
      lightSVG: require("./475808.js"),
      darkSVG: require("./267120.js"),
      whiteSVG: require("./267120.js")
    },
    getPlatformUserUrl: e => {
      let {
        id: t
      } = e;
      return "https://".concat(t, "/")
    },
    enabled: true
  }, {
    type: Chunk652215.fg2.AMAZON_MUSIC,
    name: "Amazon Music",
    icon: {
      lightPNG: require("./922946.js"),
      darkPNG: require("./922946.js"),
      whitePNG: require("./922946.js"),
      lightSVG: require("./730733.js"),
      darkSVG: require("./730733.js"),
      whiteSVG: require("./730733.js")
    },
    enabled: true
  }, {
    type: Chunk652215.fg2.META_QUEST_OR_HORIZON,
    name: "Meta Quest",
    icon: {
      lightPNG: require("./218003.js"),
      darkPNG: require("./544427.js"),
      whitePNG: require("./788504.js"),
      lightSVG: require("./731556.js"),
      darkSVG: require("./983724.js"),
      whiteSVG: require("./736023.js")
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
    let t = o.A.toURLSafe(e);
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