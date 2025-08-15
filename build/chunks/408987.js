/** Chunk was on web.js **/
/** chunk id: 408987, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk570140 = require("./570140.js"),
  Chunk496675 = require("./496675.js"),
  Chunk751189 = require("./751189.js"),
  Chunk981631 = require("./981631.js");
let s = {
  async checkGuildTemplateDirty(e) {
    if (!i.Z.canWithPartialContext(o.Plq.MANAGE_GUILD, {
        guildId: e
      })) return;
    let t = await a.Z.loadTemplatesForGuild(e);
    t.body.length > 0 && r.Z.dispatch({
      type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH",
      guildTemplate: t.body[0]
    })
  },
  hideGuildTemplateDirtyTooltip(e) {
    r.Z.dispatch({
      type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE",
      guildId: e
    })
  },
  hideGuildTemplatePromotionTooltip() {
    Chunk570140.Z.dispatch({
      type: "GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE"
    })
  }
}