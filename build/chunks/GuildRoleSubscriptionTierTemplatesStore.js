/** Chunk was on 66866 **/
/** chunk id: 853439, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js");
let c = {},
  u = {};
class d extends(i = Chunk442837.ZP.Store) {
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
}(r = "displayName") in d ? Object.defineProperty(d, r, {
  value: "GuildRoleSubscriptionTierTemplatesStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : d[r] = "GuildRoleSubscriptionTierTemplatesStore";
let p = new d(Chunk570140.Z, {
  GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function(e) {
    let {
      selectedTemplate: t,
      guildId: n
    } = e, r = Object.values(s.Z.getMutableGuildChannelsForGuild(n));
    t.listings.forEach(e => {
      e.channels.forEach(e => {
        let t = r.find(t => t.name === e.name);
        if (true !== t) e.id = t.id;
        else if (!(e.id in u)) {
          let t = (0, o.kt)(e);
          u[e.id] = t
        }
      })
    })
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function(e) {
    let {
      templates: t,
      guildId: n
    } = e;
    c[n] = t
  }
})