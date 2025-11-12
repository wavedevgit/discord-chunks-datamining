/** Chunk was on web.js **/
/** chunk id: 666086, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk106351 = require("./106351.js"),
  Chunk846519 = require("./846519.js"),
  Chunk904245 = require("./904245.js"),
  Chunk147913 = require("./147913.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk375954 = require("./375954.js"),
  Chunk944486 = require("./944486.js"),
  Chunk522558 = require("./522558.js"),
  Chunk795448 = require("./795448.js"),
  Chunk441623 = require("./441623.js"),
  Chunk474936 = require("./474936.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let m = 1e3;
class g extends Chunk147913.Z {
  isChannelEligible(e) {
    switch (e.type) {
      case r.d.DM:
        returntrue;
      case r.d.GROUP_DM:
      case r.d.GUILD_TEXT:
      default:
        returnfalse
    }
  }
  maybeSendGiftingPromptSystemMessageDelayed(e, t, n, r) {
    new i.sW(m, () => {
      let i = u.Z.getChannelId();
      !_.Z.isGiftIntentMessageInCooldown(n) && e === i && c.Z.isReady(e) && (a.Z.sendGiftingPromptSystemMessage(e, {
        giftIntentType: t,
        recipientUserId: n,
        giftIntentSecondaryAction: r
      }), (0, f.PV)(n))
    }).delay()
  }
  handleChannelSelect(e, t) {
    let {
      enabled: n
    } = d.w.getConfig({
      location: "PremiumGiftingIntentManager handleChannelSelect"
    }), r = s.Z.getChannel(t);
    if (n && null != r && this.isChannelEligible(r)) {
      let t = new Set(null != e ? l.ZP.getMemberIds(e) : r.recipients),
        i = _.Z.getFriendAnniversaries().filter(e => t.has(e));
      if (n && i.length > 0) {
        let e = i[0];
        this.maybeSendGiftingPromptSystemMessageDelayed(r.id, p.hX.FRIEND_ANNIVERSARY, e, i.length > 1 ? p.X2.VIEW_ALL : p.X2.SEND_MESSAGE)
      }
    }
  }
  onChannelSelect(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    this.handleChannelSelect(t, n)
  }
  onPostConnectionOpen() {
    let e = Chunk944486.Z.getChannelId();
    if (null != module) {
      let t = Chunk592125.Z.getChannel(module);
      this.handleChannelSelect(null == exports ? true : exports.guild_id, null == exports ? true : exports.id)
    }
  }
  constructor(...e) {
    super(...e), h(this, "actions", {
      POST_CONNECTION_OPEN: () => this.onPostConnectionOpen(),
      CHANNEL_SELECT: e => this.onChannelSelect(e)
    })
  }
}
let E = new g