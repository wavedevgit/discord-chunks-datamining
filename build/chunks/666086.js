/** Chunk was on web.js **/
/** chunk id: 666086, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk106351 = require("./106351.js"),
  Chunk846519 = require("./846519.js"),
  Chunk904245 = require("./904245.js"),
  Chunk147913 = require("./147913.js"),
  Chunk622822 = require("./622822.js"),
  Chunk447003 = require("./447003.js"),
  Chunk592125 = require("./592125.js"),
  Chunk650774 = require("./650774.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk375954 = require("./375954.js"),
  Chunk944486 = require("./944486.js"),
  Chunk522558 = require("./522558.js"),
  Chunk795448 = require("./795448.js"),
  Chunk441623 = require("./441623.js"),
  Chunk474936 = require("./474936.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let y = 50,
  O = 1e3;
class v extends Chunk147913.Z {
  isChannelEligible(e, t) {
    switch (e.type) {
      case r.d.DM:
      case r.d.GROUP_DM:
        returntrue;
      case r.d.GUILD_TEXT:
        let n = f.Z.getGuild(t),
          i = u.Z.getMemberCount(t);
        return null != i && i <= y && (null == n ? true : n.rulesChannelId) !== e.id && !(0, s.Y3)(e) && !(0, l.Z)(e) && null == e.linkedLobby;
      default:
        returnfalse
    }
  }
  maybeSendGiftingPromptSystemMessageDelayed(e, t, n, r) {
    new i.sW(O, () => {
      let i = p.Z.getChannelId();
      !g.Z.isGiftIntentMessageInCooldown(n) && e === i && _.Z.isReady(e) && (a.Z.sendGiftingPromptSystemMessage(e, {
        giftIntentType: t,
        recipientUserId: n,
        giftIntentSecondaryAction: r
      }), (0, m.PV)(n))
    }).delay()
  }
  handleChannelSelect(e, t) {
    let {
      enabled: n
    } = h.w.getCurrentConfig({
      location: "PremiumGiftingIntentManager handleChannelSelect"
    }, {
      autoTrackExposure: false
    }), r = c.Z.getChannel(t);
    if (n && null != r && this.isChannelEligible(r, e)) {
      let t = new Set(null != e ? d.ZP.getMemberIds(e) : r.recipients),
        i = g.Z.getFriendAnniversaries().filter(e => t.has(e));
      if (n && i.length > 0) {
        let e = i[0];
        this.maybeSendGiftingPromptSystemMessageDelayed(r.id, E.hX.FRIEND_ANNIVERSARY, e, i.length > 1 ? E.X2.VIEW_ALL : E.X2.SEND_MESSAGE)
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
    super(...e), b(this, "actions", {
      POST_CONNECTION_OPEN: () => this.onPostConnectionOpen(),
      CHANNEL_SELECT: e => this.onChannelSelect(e)
    })
  }
}
let I = new v