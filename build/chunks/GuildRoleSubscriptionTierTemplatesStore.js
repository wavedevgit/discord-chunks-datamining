/** Chunk was on web.js **/
/** chunk id: 853439, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = {},
  u = {};

function d(e) {
  let {
    templates: t,
    guildId: n
  } = e;
  c[n] = t
}

function f(e) {
  let {
    selectedTemplate: t,
    guildId: n
  } = e, r = Object.values(s.Z.getMutableGuildChannelsForGuild(n));
  t.listings.forEach(e => {
    e.channels.forEach(e => {
      let t = r.find(t => t.name === e.name);
      if (true !== t) e.id = t.id;
      else if (!(e.id in u)) {
        let t = (0, o.createChannelRecord)(e);
        u[e.id] = t
      }
    })
  })
}
class _ extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk592125.Z)
  }
  getTemplates(e) {
    return c[e]
  }
  getTemplateWithCategory(e, t) {
    var n;
    return null == (n = c[e]) ? true : n.find(e => e.category === t)
  }
  getChannel(e) {
    return u[e]
  }
}
l(_, "displayName", "GuildRoleSubscriptionTierTemplatesStore");
let p = new _(Chunk570140.Z, {
  GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: f,
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: d
})