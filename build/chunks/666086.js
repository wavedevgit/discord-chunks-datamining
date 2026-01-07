/** Chunk was on web.js **/
/** chunk id: 666086, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk990547 = require("./990547.js"),
  Chunk106351 = require("./106351.js"),
  Chunk846519 = require("./846519.js"),
  Chunk493683 = require("./493683.js"),
  Chunk904245 = require("./904245.js"),
  Chunk147913 = require("./147913.js"),
  Chunk213609 = require("./213609.js"),
  Chunk710845 = require("./710845.js"),
  Chunk348245 = require("./348245.js"),
  Chunk752048 = require("./752048.js"),
  Chunk695346 = require("./695346.js"),
  Chunk592125 = require("./592125.js"),
  Chunk375954 = require("./375954.js"),
  Chunk944486 = require("./944486.js"),
  Chunk522558 = require("./522558.js"),
  Chunk795448 = require("./795448.js"),
  Chunk441623 = require("./441623.js"),
  Chunk474936 = require("./474936.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let v = 1e3,
  S = new Chunk710845.Z("PremiumGiftingIntentManager");
class I extends Chunk147913.Z {
  isChannelEligible(e) {
    switch (e.type) {
      case i.d.DM:
        returntrue;
      case i.d.GROUP_DM:
      case i.d.GUILD_TEXT:
      default:
        returnfalse
    }
  }
  maybeSendGiftingPromptSystemMessageDelayed(e, t, n, r) {
    new a.sW(v, () => {
      let i = h.Z.getChannelId();
      !b.ZP.isGiftIntentMessageInCooldown(n) && e === i && m.Z.isReady(e) && (s.Z.sendGiftingPromptSystemMessage(e, {
        giftIntentType: t,
        recipientUserId: n,
        giftIntentSecondaryAction: r
      }), (0, E.PV)(n))
    }).delay()
  }
  sendGiftPromptMessageInSelectedChannelIfEligible(e) {
    let {
      enabled: t
    } = g.w.getConfig({
      location: "PremiumGiftingIntentManager handleChannelSelect"
    }), n = _.Z.getChannel(e);
    if (t && null != n && this.isChannelEligible(n)) {
      let e = new Set(n.recipients),
        t = b.ZP.getFriendAnniversaries().filter(t => e.has(t));
      if (t.length > 0) {
        let e = t[0];
        this.maybeSendGiftingPromptSystemMessageDelayed(n.id, y.hX.FRIEND_ANNIVERSARY, e, y.X2.SEND_MESSAGE)
      }
    }
  }
  async sendGiftingNotificationIfEligible() {
    let {
      enabled: e
    } = g.w.getConfig({
      location: "PremiumGiftingIntentManager handleTopAffinityUnreadNotification"
    }), t = p.vc.getSetting();
    if (!e || !t) return;
    let n = b.ZP.getNextRecipientUserIDForNotification();
    if (null != n) try {
      let e = await o.Z.getOrEnsurePrivateChannel(n),
        t = _.Z.getChannel(e);
      if (null == t) return;
      m.Z.isReady(t.id) || await d.Z.fetchMessages({
        channelId: t.id,
        isPreload: true
      });
      let i = b.ZP.getNextRecipientUserIDForNotification();
      if (i !== n) return;
      s.Z.sendGiftingPromptSystemMessage(t.id, {
        giftIntentType: y.hX.FRIEND_ANNIVERSARY,
        recipientUserId: i,
        giftIntentSecondaryAction: y.X2.SEND_MESSAGE
      });
      let a = f.Z.getUserAffinity(i);
      (0, c.h)({
        name: r.ImpressionNames.GIFT_INTENT_UNREAD_NOTIFICATION,
        type: r.ImpressionTypes.VIEW,
        properties: {
          gift_intent_type: y.hX.FRIEND_ANNIVERSARY,
          dm_affinity: null == a ? true : a.dmProbability,
          channel_id: t.id
        }
      }), (0, E.PV)(i), (0, E.Zm)()
    } catch (e) {
      S.error("Failed to fetch DM channel data for gifting notification", {
        recipientUserID: n,
        error: e
      })
    }
  }
  onChannelSelect(e) {
    let {
      channelId: t
    } = e;
    this.sendGiftPromptMessageInSelectedChannelIfEligible(t)
  }
  onPostConnectionOpen() {
    this.sendGiftingNotificationIfEligible();
    let e = h.Z.getChannelId();
    null != e && this.sendGiftPromptMessageInSelectedChannelIfEligible(e)
  }
  constructor(...e) {
    super(...e), O(this, "actions", {
      POST_CONNECTION_OPEN: () => this.onPostConnectionOpen(),
      CHANNEL_SELECT: e => this.onChannelSelect(e)
    })
  }
}
let T = new I