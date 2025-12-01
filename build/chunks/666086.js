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
  Chunk695346 = require("./695346.js"),
  Chunk592125 = require("./592125.js"),
  Chunk375954 = require("./375954.js"),
  Chunk944486 = require("./944486.js"),
  Chunk522558 = require("./522558.js"),
  Chunk795448 = require("./795448.js"),
  Chunk441623 = require("./441623.js"),
  Chunk474936 = require("./474936.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = 1e3;
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
    new i.sW(h, () => {
      let i = u.Z.getChannelId();
      !p.ZP.isGiftIntentMessageInCooldown(n) && e === i && c.Z.isReady(e) && (a.Z.sendGiftingPromptSystemMessage(e, {
        giftIntentType: t,
        recipientUserId: n,
        giftIntentSecondaryAction: r
      }), (0, f.PV)(n))
    }).delay()
  }
  handleChannelSelect(e) {
    let {
      enabled: t
    } = d.w.getConfig({
      location: "PremiumGiftingIntentManager handleChannelSelect"
    }), n = l.Z.getChannel(e);
    if (t && null != n && this.isChannelEligible(n)) {
      let e = new Set(n.recipients),
        t = p.ZP.getFriendAnniversaries().filter(t => e.has(t));
      if (t.length > 0) {
        let e = t[0];
        this.maybeSendGiftingPromptSystemMessageDelayed(n.id, _.hX.FRIEND_ANNIVERSARY, e, _.X2.SEND_MESSAGE)
      }
    }
  }
  handleTopAffinityUnreadNotification() {
    let {
      enabled: e
    } = Chunk522558.w.getConfig({
      location: "PremiumGiftingIntentManager handleTopAffinityUnreadNotification"
    }), t = Chunk695346.vc.getSetting();
    module && exports && Chunk441623.ZP.getFriendAnniversaries().filter(e => p.ZP.isTopAffinityFriendAnniversary({
      userId: e
    })).forEach(e => {
      let t = l.Z.getDMChannelFromUserId(e);
      null != t && new i.sW(h, () => {
        p.ZP.canShowGiftUnreadNotification() && (a.Z.sendGiftingPromptSystemMessage(t.id, {
          giftIntentType: _.hX.FRIEND_ANNIVERSARY,
          recipientUserId: e,
          giftIntentSecondaryAction: _.X2.SEND_MESSAGE
        }), (0, f.Zm)())
      }).delay()
    })
  }
  onChannelSelect(e) {
    let {
      channelId: t
    } = e;
    this.handleTopAffinityUnreadNotification(), this.handleChannelSelect(t)
  }
  onPostConnectionOpen() {
    this.handleTopAffinityUnreadNotification();
    let e = Chunk944486.Z.getChannelId();
    null != module && this.handleChannelSelect(module)
  }
  constructor(...e) {
    super(...e), m(this, "actions", {
      POST_CONNECTION_OPEN: () => this.onPostConnectionOpen(),
      CHANNEL_SELECT: e => this.onChannelSelect(e)
    })
  }
}
let E = new g