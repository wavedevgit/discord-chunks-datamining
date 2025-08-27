/** Chunk was on web.js **/
/** chunk id: 863141, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
}), require("./997841.js");
var Chunk864106 = require("./864106.js");

function i(e) {
  let {
    id: t,
    username: n,
    discriminator: i,
    globalName: a,
    avatar: o,
    avatarDecoration: s,
    bot: l,
    flags: c,
    premiumType: u
  } = e;
  return {
    id: t,
    username: n,
    discriminator: i,
    global_name: a,
    avatar: o,
    avatar_decoration_data: (0, r.FG)(s),
    bot: l,
    flags: c,
    premium_type: null != u ? u : 0
  }
}