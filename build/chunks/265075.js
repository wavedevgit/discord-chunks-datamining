/** Chunk was on web.js **/
/** chunk id: 265075, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./65821.js"), require("./73153.js");
var Chunk439372 = require("./439372.js");
require("./354138.js");
var Chunk292572 = require("./292572.js"),
  Chunk122906 = require("./122906.js");
require("./970163.js");
var Chunk128391 = require("./128391.js");
require("./299091.js");
var Chunk167189 = require("./167189.js"),
  Chunk254160 = require("./254160.js"),
  Chunk833291 = require("./833291.js");

function u(e) {
  let t = (0, c.Ay)(e.content);
  null != t && 0 !== t.length && t.forEach(e => {
    let {
      type: t,
      code: n
    } = e;
    if (t === o.I.INVITE);
    else if (t === o.I.TEMPLATE)(0, l.f)(async () => {
      null == a.A.getGuildTemplate(n) && await i.A.resolveGuildTemplate(n)
    });
    else if (t === o.I.BUILD_OVERRIDE || t === o.I.MANUAL_BUILD_OVERRIDE);
    else if (t === o.I.EVENT);
    else if (t === o.I.CHANNEL_LINK);
    else if (t === o.I.APP_DIRECTORY_PROFILE);
    else if (t === o.I.ACTIVITY_BOOKMARK);
    else if (t === o.I.EMBEDDED_ACTIVITY_INVITE);
    else if (t === o.I.GUILD_PRODUCT);
    else if (t === o.I.SERVER_SHOP);
    else if (t === o.I.SOCIAL_LAYER_STOREFRONT);
    else if (t === o.I.QUESTS_EMBED);
    else if (t === o.I.APP_DIRECTORY_STOREFRONT);
    else if (t === o.I.APP_DIRECTORY_STOREFRONT_SKU);
    else if (t === o.I.APP_OAUTH2_LINK);
    else if (t === o.I.COLLECTIBLES_SHOP);
    else if (t === o.I.EXPERIMENT);
    else throw Error("Unknown coded link type: ".concat(t))
  })
}
class d extends Chunk439372.A {
  constructor() {
    super(), (0, s.A)(this, u)
  }
}
let f = new d