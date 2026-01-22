/** Chunk was on web.js **/
/** chunk id: 138298, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk73153 = require("./73153.js"),
  Chunk843472 = require("./843472.js"),
  Chunk56562 = require("./56562.js"),
  Chunk225142 = require("./225142.js"),
  Chunk547 = require("./547.js"),
  Chunk940382 = require("./940382.js"),
  Chunk746080 = require("./746080.js");
let u = {
  openPrivateChannelAsSidebar(e) {
    let {
      channelId: t,
      messageId: n,
      baseChannelId: a,
      hasSingleMessageRequest: s
    } = e;
    r.h.dispatch({
      type: "SIDEBAR_VIEW_CHANNEL",
      sidebarType: l.PE.VIEW_MESSAGE_REQUEST,
      baseChannelId: a,
      channelId: t,
      details: {
        type: l.LU.MESSAGE_REQUEST,
        hasSingleMessageRequest: s
      }
    }), null != n ? i.A.jumpToMessage({
      channelId: t,
      messageId: n,
      flash: true
    }) : o.A.fetchMessages({
      channelId: t
    })
  },
  openChannelAsSidebar(e) {
    let {
      guildId: t,
      channelId: n,
      baseChannelId: s,
      flash: c = true,
      details: u
    } = e;
    r.h.dispatch({
      type: "SIDEBAR_VIEW_CHANNEL",
      sidebarType: l.PE.VIEW_CHANNEL,
      guildId: t,
      baseChannelId: s,
      channelId: n,
      details: u
    });
    let d = null == u ? true : u.initialMessageId;
    null != d ? i.A.jumpToMessage({
      channelId: n,
      messageId: d,
      flash: c,
      jumpType: a.US.INSTANT
    }) : o.A.fetchMessages({
      guildId: t,
      channelId: n
    })
  },
  openResourceChannelAsSidebar(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    null != t && ((0, s.bN)(t, n, false), r.h.dispatch({
      type: "SIDEBAR_VIEW_CHANNEL",
      sidebarType: l.PE.VIEW_CHANNEL,
      guildId: t,
      baseChannelId: c.VV.GUILD_HOME,
      channelId: n
    }))
  },
  openModReportAsSidebar(e) {
    let {
      guildId: t,
      baseChannelId: n,
      channelId: s,
      flash: c = true,
      details: u
    } = e;
    r.h.dispatch({
      type: "SIDEBAR_VIEW_CHANNEL",
      sidebarType: l.PE.VIEW_MOD_REPORT,
      baseChannelId: n,
      channelId: s,
      details: u
    }), (null == u ? true : u.initialMessageId) != null ? i.A.jumpToMessage({
      channelId: s,
      messageId: u.initialMessageId,
      flash: c,
      jumpType: a.US.INSTANT
    }) : o.A.fetchMessages({
      guildId: t,
      channelId: s
    })
  },
  openThreadAsSidebar(e) {
    let {
      guildId: t,
      baseChannelId: n,
      channelId: s,
      flash: c = true,
      details: u
    } = e;
    r.h.dispatch({
      type: "SIDEBAR_VIEW_CHANNEL",
      sidebarType: l.PE.VIEW_THREAD,
      baseChannelId: n,
      channelId: s,
      details: u
    }), (null == u ? true : u.initialMessageId) != null ? i.A.jumpToMessage({
      channelId: s,
      messageId: u.initialMessageId,
      flash: c,
      jumpType: a.US.INSTANT
    }) : o.A.fetchMessages({
      guildId: t,
      channelId: s
    })
  },
  closeChannelSidebar(e) {
    r.h.dispatch({
      type: "SIDEBAR_CLOSE",
      baseChannelId: e
    })
  },
  openGuildSidebar(e) {
    let {
      guildId: t,
      baseChannelId: n,
      sidebarType: i,
      details: a
    } = e;
    return r.h.dispatch({
      type: "SIDEBAR_VIEW_GUILD",
      sidebarType: i,
      baseChannelId: n,
      guildId: t,
      details: a
    })
  },
  closeGuildSidebar(e) {
    r.h.dispatch({
      type: "SIDEBAR_CLOSE_GUILD",
      guildId: e
    })
  },
  setSelectedSearchContext(e) {
    r.h.dispatch({
      type: "SIDEBAR_SET_SELECTED_SEARCH_CONTEXT",
      searchContextId: e
    })
  }
}