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
    } = Chunk522558.w.getConfig({
      location: "PremiumGiftingIntentManager handleTopAffinityUnreadNotification"
    }), t = Chunk695346.vc.getSetting();
    if (!module || !exports) return;
    let n = Chunk441623.ZP.getNextRecipientUserIDForNotification();
    if (null != require) try {
      let e = await Chunk493683.Z.getOrEnsurePrivateChannel(require),
        t = Chunk592125.Z.getChannel(module);
      if (null == exports) return;
      Chunk375954.Z.isReady(exports.id) || await Chunk348245.Z.fetchMessages({
        channelId: exports.id,
        isPreload: true
      });
      let i = Chunk441623.ZP.getNextRecipientUserIDForNotification();
      if (Chunk106351 !== require) return;
      Chunk904245.Z.sendGiftingPromptSystemMessage(exports.id, {
        giftIntentType: Chunk474936.hX.FRIEND_ANNIVERSARY,
        recipientUserId: Chunk106351,
        giftIntentSecondaryAction: Chunk474936.X2.SEND_MESSAGE
      });
      let a = Chunk752048.Z.getUserAffinity(Chunk106351);
      (0, Chunk213609.h)({
        name: Chunk990547.ImpressionNames.GIFT_INTENT_UNREAD_NOTIFICATION,
        type: Chunk990547.ImpressionTypes.VIEW,
        properties: {
          gift_intent_type: Chunk474936.hX.FRIEND_ANNIVERSARY,
          dm_affinity: null == Chunk846519 ? true : Chunk846519.dmProbability,
          channel_id: exports.id
        }
      }), (0, Chunk795448.PV)(Chunk106351), (0, Chunk795448.Zm)()
    } catch (e) {
      S.error("Failed to fetch DM channel data for gifting notification", {
        recipientUserID: require,
        error: module
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
    let e = Chunk944486.Z.getChannelId();
    null != module && this.sendGiftPromptMessageInSelectedChannelIfEligible(module)
  }
  constructor(...e) {
    super(...e), O(this, "actions", {
      POST_CONNECTION_OPEN: () => this.onPostConnectionOpen(),
      CHANNEL_SELECT: e => this.onChannelSelect(e)
    })
  }
}
let T = new I