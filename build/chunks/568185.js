/** Chunk was on web.js **/
/** chunk id: 568185, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk73153 = require("./73153.js"),
  Chunk576705 = require("./576705.js"),
  Chunk292572 = require("./292572.js"),
  Chunk652215 = require("./652215.js");
let o = {
  async checkGuildTemplateDirty(e) {
    if (!i.A.canWithPartialContext(s.xBc.MANAGE_GUILD, {
        guildId: e
      })) return;
    let t = await a.A.loadTemplatesForGuild(e);
    t.body.length > 0 && r.h.dispatch({
      type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH",
      guildTemplate: t.body[0]
    })
  },
  hideGuildTemplateDirtyTooltip(e) {
    r.h.dispatch({
      type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE",
      guildId: e
    })
  },
  hideGuildTemplatePromotionTooltip() {
    r.h.dispatch({
      type: "GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE"
    })
  }
}