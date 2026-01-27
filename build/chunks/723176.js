/** Chunk was on web.js **/
/** chunk id: 723176, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk35033 = require("./35033.js"),
  Chunk73153 = require("./73153.js"),
  Chunk961350 = require("./961350.js"),
  Chunk989950 = require("./989950.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
Chunk35033.CV.KvCache, Chunk35033.CV.KvCache;
class c extends Chunk311907.Ay.Store {
  initialize() {
    this.waitFor(o.default)
  }
  constructor(...e) {
    super(...e), l(this, "database", e => s.A.database(null != e ? e : o.default.getId())), l(this, "channels", u(e => new i.Be("guild_channels", i.CV.KvCache, e))), l(this, "channelsTemp", u(e => new i.iW("guild_channels_temp", i.CV.KvCache, e))), l(this, "basicChannels", u(e => new i.Ls("basic_channels", i.CV.KvCache, e))), l(this, "syncedBasicChannels", u(e => new i.Ls("basic_channels_synced", i.CV.KvCache, e))), l(this, "cache", u(e => new i.Ls("cache", i.CV.KvCache, e))), l(this, "forceResyncVersion", u(e => new i.Ls("force_resync_version", i.CV.KvCache, e))), l(this, "emojis", u(e => new i.Be("guild_emojis", i.CV.KvCache, e))), l(this, "guilds", u(e => new i.uh("guilds", i.CV.KvCache, e))), l(this, "guildsRequiringDeletedIdsSync", u(e => new i.uh("guilds_requiring_deleted_ids_sync", i.CV.KvCache, e))), l(this, "guildsRequiringChannelSync", u(e => new i.uh("guilds_requiring_channel_sync", i.CV.KvCache, e))), l(this, "messages", u(e => new i.AR("messages", i.CV.Messages, e))), l(this, "stickers", u(e => new i.Be("guild_stickers", i.CV.KvCache, e))), l(this, "guildVersions", u(e => new i.uh("guild_versions", i.CV.KvCache, e))), l(this, "nonGuildVersions", u(e => new i.uh("non_guild_versions", i.CV.KvCache, e))), l(this, "userSettings", u(e => new i.uh("user_settings", i.CV.KvCache, e))), l(this, "readStates", u(e => new i.Ls("read_states", i.CV.KvCache, e))), l(this, "userGuildSettings", u(e => new i.Ls("user_guild_settings", i.CV.KvCache, e))), l(this, "userSearchItems", u(e => new i.uh("user_search_items", i.CV.KvCache, e))), l(this, "channelsTransaction", e => this.channels(e.database).upgradeTransaction(e)), l(this, "channelsTempTransaction", e => this.channelsTemp(e.database).upgradeTransaction(e)), l(this, "basicChannelsTransaction", e => this.basicChannels(e.database).upgradeTransaction(e)), l(this, "syncedBasicChannelsTransaction", e => this.syncedBasicChannels(e.database).upgradeTransaction(e)), l(this, "cacheTransaction", e => this.cache(e.database).upgradeTransaction(e)), l(this, "forceResyncVersionTransaction", e => this.forceResyncVersion(e.database).upgradeTransaction(e)), l(this, "emojisTransaction", e => this.emojis(e.database).upgradeTransaction(e)), l(this, "guildsTransaction", e => this.guilds(e.database).upgradeTransaction(e)), l(this, "messagesTransaction", e => this.messages(e.database).upgradeTransaction(e)), l(this, "stickersTransaction", e => this.stickers(e.database).upgradeTransaction(e)), l(this, "guildVersionsTransaction", e => this.guildVersions(e.database).upgradeTransaction(e)), l(this, "nonGuildVersionsTransaction", e => this.nonGuildVersions(e.database).upgradeTransaction(e)), l(this, "userSettingsTransaction", e => this.userSettings(e.database).upgradeTransaction(e)), l(this, "readStatesTransaction", e => this.readStates(e.database).upgradeTransaction(e)), l(this, "userGuildSettingsTransaction", e => this.userGuildSettings(e.database).upgradeTransaction(e)), l(this, "guildsRequiringDeletedIdsSyncTransaction", e => this.guildsRequiringDeletedIdsSync(e.database).upgradeTransaction(e)), l(this, "guildsRequiringChannelSyncTransaction", e => this.guildsRequiringChannelSync(e.database).upgradeTransaction(e)), l(this, "userSearchItemsTransaction", e => this.userSearchItems(e.database).upgradeTransaction(e))
  }
}

function u(e) {
  return function(t) {
    let n = null != t ? t : s.A.database(o.default.getId());
    return null == n ? null : e(n)
  }
}
let d = new c(Chunk73153.h, {})