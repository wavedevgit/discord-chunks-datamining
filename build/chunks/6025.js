/** Chunk was on web.js **/
/** chunk id: 6025, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk570140 = require("./570140.js"),
  Chunk904245 = require("./904245.js"),
  Chunk593472 = require("./593472.js"),
  Chunk526120 = require("./526120.js"),
  Chunk348245 = require("./348245.js"),
  Chunk897473 = require("./897473.js"),
  Chunk176505 = require("./176505.js");
let u = {
  openPrivateChannelAsSidebar(e) {
    let {
      channelId: t,
      messageId: n,
      baseChannelId: o,
      hasSingleMessageRequest: a
    } = e;
    r.Z.dispatch({
      type: "SIDEBAR_VIEW_CHANNEL",
      sidebarType: l.tI.VIEW_MESSAGE_REQUEST,
      baseChannelId: o,
      channelId: t,
      details: {
        type: l.Ff.MESSAGE_REQUEST,
        hasSingleMessageRequest: a
      }
    }), null != n ? i.Z.jumpToMessage({
      channelId: t,
      messageId: n,
      flash: true
    }) : s.Z.fetchMessages({
      channelId: t
    })
  },
  openChannelAsSidebar(e) {
    let {
      guildId: t,
      channelId: n,
      baseChannelId: a,
      flash: c = true,
      details: u
    } = e;
    r.Z.dispatch({
      type: "SIDEBAR_VIEW_CHANNEL",
      sidebarType: l.tI.VIEW_CHANNEL,
      guildId: t,
      baseChannelId: a,
      channelId: n,
      details: u
    });
    let d = null == u ? true : u.initialMessageId;
    null != d ? i.Z.jumpToMessage({
      channelId: n,
      messageId: d,
      flash: c,
      jumpType: o.SR.INSTANT
    }) : s.Z.fetchMessages({
      guildId: t,
      channelId: n
    })
  },
  openResourceChannelAsSidebar(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    null != t && ((0, a.C3)(t, n, false), r.Z.dispatch({
      type: "SIDEBAR_VIEW_CHANNEL",
      sidebarType: l.tI.VIEW_CHANNEL,
      guildId: t,
      baseChannelId: c.oC.GUILD_HOME,
      channelId: n
    }))
  },
  openModReportAsSidebar(e) {
    let {
      guildId: t,
      baseChannelId: n,
      channelId: a,
      flash: c = true,
      details: u
    } = e;
    r.Z.dispatch({
      type: "SIDEBAR_VIEW_CHANNEL",
      sidebarType: l.tI.VIEW_MOD_REPORT,
      baseChannelId: n,
      channelId: a,
      details: u
    }), (null == u ? true : u.initialMessageId) != null ? i.Z.jumpToMessage({
      channelId: a,
      messageId: u.initialMessageId,
      flash: c,
      jumpType: o.SR.INSTANT
    }) : s.Z.fetchMessages({
      guildId: t,
      channelId: a
    })
  },
  openThreadAsSidebar(e) {
    let {
      guildId: t,
      baseChannelId: n,
      channelId: a,
      flash: c = true,
      details: u
    } = e;
    r.Z.dispatch({
      type: "SIDEBAR_VIEW_CHANNEL",
      sidebarType: l.tI.VIEW_THREAD,
      baseChannelId: n,
      channelId: a,
      details: u
    }), (null == u ? true : u.initialMessageId) != null ? i.Z.jumpToMessage({
      channelId: a,
      messageId: u.initialMessageId,
      flash: c,
      jumpType: o.SR.INSTANT
    }) : s.Z.fetchMessages({
      guildId: t,
      channelId: a
    })
  },
  closeChannelSidebar(e) {
    r.Z.dispatch({
      type: "SIDEBAR_CLOSE",
      baseChannelId: e
    })
  },
  openGuildSidebar(e) {
    let {
      guildId: t,
      baseChannelId: n,
      sidebarType: i,
      details: o
    } = e;
    return r.Z.dispatch({
      type: "SIDEBAR_VIEW_GUILD",
      sidebarType: i,
      baseChannelId: n,
      guildId: t,
      details: o
    })
  },
  closeGuildSidebar(e) {
    r.Z.dispatch({
      type: "SIDEBAR_CLOSE_GUILD",
      guildId: e
    })
  },
  setSelectedSearchContext(e) {
    r.Z.dispatch({
      type: "SIDEBAR_SET_SELECTED_SEARCH_CONTEXT",
      searchContextId: e
    })
  }
}