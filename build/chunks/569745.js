/** Chunk was on 21738 **/
/** chunk id: 569745, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => s
}), require("./896048.js");
var Chunk960488 = require("./960488.js"),
  Chunk302495 = require("./302495.js"),
  Chunk901123 = require("./901123.js");
let a = new Set([Chunk901123.BV.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode"), Chunk901123.BV.APP_WITH_GIFT_CODE(":giftCode"), Chunk901123.BV.APP, Chunk901123.BV.PICK_GUILD_SETTINGS(":section?", ":subsection?"), Chunk901123.BV.SETTINGS(":section", ":subsection?"), Chunk901123.BV.USER_GUILD_NOTIFICATION_SETTINGS(Chunk302495.p.guildId()), Chunk901123.BV.APPLICATION_LIBRARY_INVENTORY, Chunk901123.BV.WELCOME(Chunk302495.p.guildId({
  optional: true
}), Chunk302495.p.channelId({
  optional: true
})), Chunk901123.BV.GUILD_EVENT_DETAILS(Chunk302495.p.guildId({
  optional: true
}), ":guildEventId"), Chunk901123.BV.GUILD_SETTINGS(Chunk302495.p.guildId(), ":section?", ":subsection?"), Chunk901123.BV.CHANNEL_THREAD_VIEW(Chunk302495.p.guildId(), Chunk302495.p.channelId(), ":threadId", ":messageId?"), Chunk901123.BV.CHANNEL(Chunk302495.p.guildId(), Chunk302495.p.channelId({
  optional: true
}), ":messageId?"), Chunk901123.BV.ACTIVITY, Chunk901123.BV.ACTIVITIES, Chunk901123.BV.ACTIVITIES_HAPPENING_NOW, Chunk901123.BV.ACTIVITY_DETAILS(":applicationId"), Chunk901123.BV.APPLICATION_LIBRARY, Chunk901123.BV.APPLICATION_STORE, Chunk901123.BV.MESSAGE_REQUESTS, Chunk901123.BV.COLLECTIBLES_SHOP, Chunk901123.BV.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"), Chunk901123.BV.GUILD_DISCOVERY, Chunk901123.BV.QUEST_HOME, Chunk901123.BV.QUEST_HOME_V2, Chunk901123.BV.ICYMI, Chunk901123.BV.GLOBAL_DISCOVERY, Chunk901123.BV.GUILD_MEMBER_VERIFICATION(Chunk302495.p.guildId()), Chunk901123.BV.GUILD_MEMBER_VERIFICATION_FOR_HUB(Chunk302495.p.guildId(), ":inviteCode?"), Chunk901123.BV.GUILD_BOOSTING_MARKETING(Chunk302495.p.guildId()), Chunk901123.BV.GUILD_FEATURE(":feature", Chunk302495.p.guildId()), Chunk901123.BV.FEATURE(":feature"), Chunk901123.BV.FAMILY_CENTER, Chunk901123.BV.APPLICATION_DIRECTORY, Chunk901123.BV.GAME_SHOP(Chunk302495.p.guildId(), ":shopSkuId?", ":shopSlug?")]);

function s(e) {
  for (let t of a)
    if (null != (0, r.B6)(e, {
        path: t
      })) returntrue;
  returnfalse
}