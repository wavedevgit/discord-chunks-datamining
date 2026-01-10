/** Chunk was on 1272 **/
/** chunk id: 267713, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  u: () => o
}), require("./388685.js");
var Chunk828700 = require("./828700.js"),
  Chunk930449 = require("./930449.js"),
  Chunk416145 = require("./416145.js");
let a = new Set([Chunk416145.Z5.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode"), Chunk416145.Z5.APP_WITH_GIFT_CODE(":giftCode"), Chunk416145.Z5.APP, Chunk416145.Z5.PICK_GUILD_SETTINGS(":section?", ":subsection?"), Chunk416145.Z5.SETTINGS(":section", ":subsection?"), Chunk416145.Z5.USER_GUILD_NOTIFICATION_SETTINGS(Chunk930449.H.guildId()), Chunk416145.Z5.APPLICATION_LIBRARY_INVENTORY, Chunk416145.Z5.WELCOME(Chunk930449.H.guildId({
  optional: true
}), Chunk930449.H.channelId({
  optional: true
})), Chunk416145.Z5.GUILD_EVENT_DETAILS(Chunk930449.H.guildId({
  optional: true
}), ":guildEventId"), Chunk416145.Z5.GUILD_SETTINGS(Chunk930449.H.guildId(), ":section?", ":subsection?"), Chunk416145.Z5.CHANNEL_THREAD_VIEW(Chunk930449.H.guildId(), Chunk930449.H.channelId(), ":threadId", ":messageId?"), Chunk416145.Z5.CHANNEL(Chunk930449.H.guildId(), Chunk930449.H.channelId({
  optional: true
}), ":messageId?"), Chunk416145.Z5.ACTIVITY, Chunk416145.Z5.ACTIVITIES, Chunk416145.Z5.ACTIVITIES_HAPPENING_NOW, Chunk416145.Z5.ACTIVITY_DETAILS(":applicationId"), Chunk416145.Z5.APPLICATION_LIBRARY, Chunk416145.Z5.APPLICATION_STORE, Chunk416145.Z5.MESSAGE_REQUESTS, Chunk416145.Z5.COLLECTIBLES_SHOP, Chunk416145.Z5.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"), Chunk416145.Z5.GUILD_DISCOVERY, Chunk416145.Z5.QUEST_HOME, Chunk416145.Z5.QUEST_HOME_V2, Chunk416145.Z5.ICYMI, Chunk416145.Z5.GLOBAL_DISCOVERY, Chunk416145.Z5.GUILD_MEMBER_VERIFICATION(Chunk930449.H.guildId()), Chunk416145.Z5.GUILD_MEMBER_VERIFICATION_FOR_HUB(Chunk930449.H.guildId(), ":inviteCode?"), Chunk416145.Z5.GUILD_BOOSTING_MARKETING(Chunk930449.H.guildId()), Chunk416145.Z5.GUILD_FEATURE(":feature", Chunk930449.H.guildId()), Chunk416145.Z5.FEATURE(":feature"), Chunk416145.Z5.FAMILY_CENTER, Chunk416145.Z5.APPLICATION_DIRECTORY, Chunk416145.Z5.GAME_SHOP(Chunk930449.H.guildId(), ":shopSkuId?", ":shopSlug?")]);

function o(e) {
  for (let t of a)
    if (null != (0, r.LX)(e, {
        path: t
      })) returntrue;
  returnfalse
}