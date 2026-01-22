/** Chunk was on web.js **/
/** chunk id: 225142, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  aW: () => g,
  ag: () => m,
  bN: () => E,
  eC: () => y,
  qo: () => b
}), require("./896048.js");
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk843472 = require("./843472.js"),
  Chunk56562 = require("./56562.js"),
  Chunk164956 = require("./164956.js"),
  Chunk378570 = require("./378570.js"),
  Chunk734057 = require("./734057.js"),
  Chunk954571 = require("./954571.js"),
  Chunk661191 = require("./661191.js"),
  Chunk701785 = require("./701785.js"),
  Chunk374084 = require("./374084.js"),
  Chunk65995 = require("./65995.js"),
  Chunk652215 = require("./652215.js");
let m = async e => {
  i.h.dispatch({
    type: "GUILD_HOME_SETTINGS_FETCH_START",
    guildId: e
  });
  try {
    let t = await r.Bo.get({
        url: h.Rsh.GUILD_HOME_SETTINGS(e),
        oldFormErrors: true,
        rejectWithError: true
      }),
      n = (0, p.Xu)(t.body);
    return i.h.dispatch({
      type: "GUILD_HOME_SETTINGS_FETCH_SUCCESS",
      guildId: e,
      homeSettings: n
    }), n
  } catch (t) {
    i.h.dispatch({
      type: "GUILD_HOME_SETTINGS_FETCH_FAIL",
      guildId: e
    })
  }
}, g = async e => {
  if (!o.A.isFullServerPreview(e)) {
    i.h.dispatch({
      type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START",
      guildId: e
    });
    try {
      let t = await r.Bo.get({
          url: h.Rsh.GUILD_MEMBER_ACTIONS(e),
          oldFormErrors: true,
          rejectWithError: true
        }),
        n = (0, p.xr)(t.body);
      return i.h.dispatch({
        type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS",
        guildId: e,
        memberActions: n
      }), n
    } catch (t) {
      i.h.dispatch({
        type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL",
        guildId: e
      })
    }
  }
}, E = function(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2];
  if (i.h.dispatch({
      type: "SELECT_HOME_RESOURCE_CHANNEL",
      guildId: e,
      channelId: t
    }), null == t) return;
  let r = c.A.getChannel(t),
    p = f.h.getResourceForChannel(e, t);
  null == e || o.A.isFullServerPreview(e) || null == r || null == p || u.default.track(h.HAw.SERVER_GUIDE_CHANNEL_SELECTED, {
    guild_id: e,
    channel_id: r.id,
    server_guide_channel_type: "resource",
    channel_action_type: false
  }), n && (0, l.iN)(t, {
    navigationReplace: false
  }), a.A.jumpToMessage({
    channelId: t,
    messageId: d.default.castChannelIdAsMessageId(t),
    flash: false,
    jumpType: s.US.INSTANT
  })
}, b = (e, t) => {
  i.h.dispatch({
    type: "SELECT_NEW_MEMBER_ACTION_CHANNEL",
    guildId: e,
    channelId: t
  });
  let n = c.A.getChannel(t),
    r = f.h.getActionForChannel(e, t);
  null == e || o.A.isFullServerPreview(e) || null == n || null == r || u.default.track(h.HAw.SERVER_GUIDE_CHANNEL_SELECTED, {
    guild_id: e,
    channel_id: n.id,
    server_guide_channel_type: "member action",
    channel_action_type: r.actionType
  }), (0, l.iN)(t)
}, y = (e, t) => {
  if (i.h.dispatch({
      type: "COMPLETE_NEW_MEMBER_ACTION",
      guildId: e,
      channelId: t
    }), o.A.isFullServerPreview(e)) return;
  let n = c.A.getChannel(t),
    a = f.h.getActionForChannel(e, t);
  if (null != n && null != a) {
    var s, l;
    let t = d.default.keys(null != (s = _.A.getCompletedActions(e)) ? s : {}),
      r = null != (l = f.h.getNewMemberActions(e)) ? l : [];
    u.default.track(h.HAw.SERVER_GUIDE_ACTION_COMPLETED, {
      guild_id: n.guild_id,
      channel_id: n.id,
      channel_action_type: a.actionType,
      has_completed_all: r.reduce((e, n) => e && t.includes(n.channelId), true)
    })
  }
  r.Bo.post({
    url: h.Rsh.GUILD_MEMBER_ACTION_UPDATE(e, t),
    rejectWithError: true
  })
}