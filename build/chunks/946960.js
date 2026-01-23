/** Chunk was on 21738 **/
/** chunk id: 946960, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  cA: () => p,
  cJ: () => h,
  hV: () => d
});
var Chunk554146 = require("./554146.js"),
  Chunk174768 = require("./174768.js"),
  Chunk692125 = require("./692125.js"),
  Chunk701626 = require("./701626.js"),
  Chunk731667 = require("./731667.js"),
  Chunk255161 = require("./255161.js"),
  Chunk403362 = require("./403362.js"),
  Chunk652215 = require("./652215.js");
let d = "lastHiddenChannelNotice",
  p = [{
    type: Chunk652215.n5X.CLAN_ADMIN_UPSELL,
    dismissibleContentType: Chunk554146.M.CHANNEL_LIST_CLAN_ADMIN_UPSELL
  }, {
    type: Chunk652215.n5X.GUILD_BOOSTING,
    store: Chunk701626.A,
    dismissibleContentType: Chunk554146.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION
  }, {
    type: Chunk652215.n5X.GUILD_BANNER,
    store: Chunk692125.A,
    dismissibleContentType: Chunk554146.M.CHANNEL_NOTICE_GUILD_BANNER
  }, {
    type: Chunk652215.n5X.INVITE,
    store: Chunk255161.A,
    dismissibleContentType: Chunk554146.M.CHANNEL_NOTICE_INVITE
  }, {
    type: Chunk652215.n5X.HUB_LINK,
    store: Chunk731667.A,
    dismissibleContentType: Chunk554146.M.CHANNEL_NOTICE_HUBLINK
  }, {
    type: Chunk652215.n5X.QUICKSWITCHER,
    store: Chunk174768.A,
    dismissibleContentType: Chunk554146.M.CHANNEL_NOTICE_QUICKSWITCHER
  }, {
    type: Chunk652215.n5X.LINKED_ROLES_ADMIN,
    dismissibleContentType: Chunk554146.M.LINKED_ROLE_ADMIN_GUILD
  }],
  h = p.map(e => e.store).filter(Chunk403362.Vq)