/** Chunk was on web.js **/
/** chunk id: 528153, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
}), require("./896048.js");
var Chunk110259 = require("./110259.js"),
  Chunk478437 = require("./478437.js"),
  Chunk451988 = require("./451988.js"),
  Chunk308528 = require("./308528.js"),
  Chunk843472 = require("./843472.js"),
  Chunk439372 = require("./439372.js"),
  Chunk139286 = require("./139286.js"),
  Chunk626584 = require("./626584.js"),
  Chunk547 = require("./547.js"),
  Chunk21119 = require("./21119.js"),
  Chunk253932 = require("./253932.js"),
  Chunk734057 = require("./734057.js"),
  Chunk320501 = require("./320501.js"),
  Chunk309010 = require("./309010.js"),
  Chunk70730 = require("./70730.js"),
  Chunk45787 = require("./45787.js"),
  Chunk275759 = require("./275759.js"),
  Chunk788868 = require("./788868.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let v = 1e3,
  A = new Chunk626584.A("PremiumGiftingIntentManager");
class I extends Chunk439372.A {
  isChannelEligible(e) {
    switch (e.type) {
      case i.r.DM:
        returntrue;
      case i.r.GROUP_DM:
      case i.r.GUILD_TEXT:
      default:
        returnfalse
    }
  }
  maybeSendGiftingPromptSystemMessageDelayed(e, t, n, r) {
    new a.J_(v, () => {
      this.maybeSendGiftingPromptSystemMessage(e, t, n, r)
    }).delay()
  }
  maybeSendGiftingPromptSystemMessage(e, t, n, r) {
    let i = m.A.getChannelId(),
      a = y.Ay.isGiftIntentMessageInCooldown(n),
      o = h.A.isReady(e);
    if (!a && e === i) {
      if (!o) return void h.A.whenReady(e, () => {
        m.A.getChannelId() === e && this.maybeSendGiftingPromptSystemMessage(e, t, n, r)
      });
      s.A.sendGiftingPromptSystemMessage(e, {
        giftIntentType: t,
        recipientUserId: n,
        giftIntentSecondaryAction: r
      }), (0, E.xs)(n)
    }
  }
  sendGiftPromptMessageInSelectedChannelIfEligible(e) {
    let {
      enabled: t
    } = g.u.getConfig({
      location: "PremiumGiftingIntentManager handleChannelSelect"
    }), n = _.A.getChannel(e);
    if (t && null != n && this.isChannelEligible(n)) {
      let e = new Set(n.recipients),
        t = y.Ay.getFriendAnniversaries().filter(t => e.has(t));
      if (t.length > 0) {
        let e = t[0];
        this.maybeSendGiftingPromptSystemMessageDelayed(n.id, b.np.FRIEND_ANNIVERSARY, e, b.l1.SEND_MESSAGE)
      }
    }
  }
  async sendGiftingNotificationIfEligible() {
    let {
      enabled: e
    } = g.u.getConfig({
      location: "PremiumGiftingIntentManager handleTopAffinityUnreadNotification"
    }), t = p.oz.getSetting();
    if (!e || !t) return;
    let n = y.Ay.getNextRecipientUserIDForNotification();
    if (null != n) try {
      let e = await o.A.getOrEnsurePrivateChannel(n),
        t = _.A.getChannel(e);
      if (null == t) return;
      if (h.A.isReady(t.id) || await d.A.fetchMessages({
          channelId: t.id,
          isPreload: true
        }), h.A.getMessages(t.id).cached) return void A.info("Skipping gift intent notification - fetched messages marked as stale", {
        channelId: t.id,
        recipientUserID: n
      });
      let i = y.Ay.getNextRecipientUserIDForNotification();
      if (i !== n) return;
      s.A.sendGiftingPromptSystemMessage(t.id, {
        giftIntentType: b.np.FRIEND_ANNIVERSARY,
        recipientUserId: i,
        giftIntentSecondaryAction: b.l1.SEND_MESSAGE
      });
      let a = f.A.getUserAffinity(i);
      (0, c.x)({
        name: r.ImpressionNames.GIFT_INTENT_UNREAD_NOTIFICATION,
        type: r.ImpressionTypes.VIEW,
        properties: {
          gift_intent_type: b.np.FRIEND_ANNIVERSARY,
          dm_affinity: null == a ? true : a.dmProbability,
          channel_id: t.id
        }
      }), (0, E.xs)(i), (0, E.BT)()
    } catch (e) {
      A.error("Failed to fetch DM channel data for gifting notification", {
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
    let e = m.A.getChannelId();
    null != e && this.sendGiftPromptMessageInSelectedChannelIfEligible(e)
  }
  constructor(...e) {
    super(...e), O(this, "actions", {
      POST_CONNECTION_OPEN: () => this.onPostConnectionOpen(),
      CHANNEL_SELECT: e => this.onChannelSelect(e)
    })
  }
}
let S = new I