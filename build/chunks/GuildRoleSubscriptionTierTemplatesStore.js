/** Chunk was on web.js **/
/** chunk id: 74399, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js");

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
  } = e, r = Object.values(o.A.getMutableGuildChannelsForGuild(n));
  t.listings.forEach(e => {
    e.channels.forEach(e => {
      let t = r.find(t => t.name === e.name);
      if (true !== t) e.id = t.id;
      else if (!(e.id in u)) {
        let t = (0, s.createChannelRecord)(e);
        u[e.id] = t
      }
    })
  })
}
class p extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(o.A)
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
l(p, "displayName", "GuildRoleSubscriptionTierTemplatesStore");
let _ = new p(Chunk73153.h, {
  GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: f,
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: d
})