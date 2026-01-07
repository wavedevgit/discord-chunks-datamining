/** Chunk was on web.js **/
/** chunk id: 891274, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./415506.js"), require("./570140.js");
var Chunk147913 = require("./147913.js");
require("./471518.js");
var Chunk751189 = require("./751189.js"),
  Chunk409059 = require("./409059.js");
require("./652898.js");
var Chunk728675 = require("./728675.js");
require("./701190.js");
var Chunk960904 = require("./960904.js"),
  Chunk213753 = require("./213753.js"),
  Chunk830121 = require("./830121.js");

function u(e) {
  let t = (0, c.ZP)(e.content);
  null != t && 0 !== t.length && t.forEach(e => {
    let {
      type: t,
      code: n
    } = e;
    if (t === s.g.INVITE);
    else if (t === s.g.TEMPLATE)(0, l.V)(async () => {
      null == a.Z.getGuildTemplate(n) && await i.Z.resolveGuildTemplate(n)
    });
    else if (t === s.g.BUILD_OVERRIDE || t === s.g.MANUAL_BUILD_OVERRIDE);
    else if (t === s.g.EVENT);
    else if (t === s.g.CHANNEL_LINK);
    else if (t === s.g.APP_DIRECTORY_PROFILE);
    else if (t === s.g.ACTIVITY_BOOKMARK);
    else if (t === s.g.EMBEDDED_ACTIVITY_INVITE);
    else if (t === s.g.GUILD_PRODUCT);
    else if (t === s.g.SERVER_SHOP);
    else if (t === s.g.SOCIAL_LAYER_STOREFRONT);
    else if (t === s.g.QUESTS_EMBED);
    else if (t === s.g.APP_DIRECTORY_STOREFRONT);
    else if (t === s.g.APP_DIRECTORY_STOREFRONT_SKU);
    else if (t === s.g.APP_OAUTH2_LINK);
    else if (t === s.g.COLLECTIBLES_SHOP);
    else if (t === s.g.EXPERIMENT);
    else throw Error("Unknown coded link type: ".concat(t))
  })
}
class d extends Chunk147913.Z {
  constructor() {
    super(), (0, o.Z)(this, u)
  }
}
let f = new d