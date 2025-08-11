/** Chunk was on 1272 **/
/** chunk id: 652785, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  HG: () => f,
  Iv: () => d,
  XN: () => p
});
var Chunk704215 = require("./704215.js"),
  Chunk823385 = require("./823385.js"),
  Chunk327689 = require("./327689.js"),
  Chunk421176 = require("./421176.js"),
  Chunk456065 = require("./456065.js"),
  Chunk683743 = require("./683743.js"),
  Chunk823379 = require("./823379.js"),
  Chunk981631 = require("./981631.js");
let d = "lastHiddenChannelNotice",
  p = [{
    type: Chunk981631.vID.CLAN_ADMIN_UPSELL,
    dismissibleContentType: Chunk704215.z.CHANNEL_LIST_CLAN_ADMIN_UPSELL
  }, {
    type: Chunk981631.vID.GUILD_BOOSTING,
    store: Chunk421176.Z,
    dismissibleContentType: Chunk704215.z.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION
  }, {
    type: Chunk981631.vID.GUILD_BANNER,
    store: Chunk327689.Z,
    dismissibleContentType: Chunk704215.z.CHANNEL_NOTICE_GUILD_BANNER
  }, {
    type: Chunk981631.vID.INVITE,
    store: Chunk683743.Z,
    dismissibleContentType: Chunk704215.z.CHANNEL_NOTICE_INVITE
  }, {
    type: Chunk981631.vID.HUB_LINK,
    store: Chunk456065.Z,
    dismissibleContentType: Chunk704215.z.CHANNEL_NOTICE_HUBLINK
  }, {
    type: Chunk981631.vID.QUICKSWITCHER,
    store: Chunk823385.Z,
    dismissibleContentType: Chunk704215.z.CHANNEL_NOTICE_QUICKSWITCHER
  }, {
    type: Chunk981631.vID.LINKED_ROLES_ADMIN,
    dismissibleContentType: Chunk704215.z.LINKED_ROLE_ADMIN_GUILD
  }],
  f = p.map(e => e.store).filter(Chunk823379.lm)