/** Chunk was on web.js **/
/** chunk id: 526120, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C3: () => E,
  Fg: () => g,
  Oh: () => y,
  cP: () => h,
  gp: () => b
}), require("./388685.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk904245 = require("./904245.js"),
  Chunk593472 = require("./593472.js"),
  Chunk160404 = require("./160404.js"),
  Chunk359110 = require("./359110.js"),
  Chunk592125 = require("./592125.js"),
  Chunk626135 = require("./626135.js"),
  Chunk709054 = require("./709054.js"),
  Chunk563534 = require("./563534.js"),
  Chunk734893 = require("./734893.js"),
  Chunk846121 = require("./846121.js"),
  Chunk981631 = require("./981631.js");
let h = async e => {
  i.Z.dispatch({
    type: "GUILD_HOME_SETTINGS_FETCH_START",
    guildId: e
  });
  try {
    let t = await r.tn.get({
        url: m.ANM.GUILD_HOME_SETTINGS(e),
        oldFormErrors: true,
        rejectWithError: true
      }),
      n = (0, p.tB)(t.body);
    return i.Z.dispatch({
      type: "GUILD_HOME_SETTINGS_FETCH_SUCCESS",
      guildId: e,
      homeSettings: n
    }), n
  } catch (t) {
    i.Z.dispatch({
      type: "GUILD_HOME_SETTINGS_FETCH_FAIL",
      guildId: e
    })
  }
}, g = async e => {
  if (!s.Z.isFullServerPreview(e)) {
    i.Z.dispatch({
      type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START",
      guildId: e
    });
    try {
      let t = await r.tn.get({
          url: m.ANM.GUILD_MEMBER_ACTIONS(e),
          oldFormErrors: true,
          rejectWithError: true
        }),
        n = (0, p.rk)(t.body);
      return i.Z.dispatch({
        type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS",
        guildId: e,
        memberActions: n
      }), n
    } catch (t) {
      i.Z.dispatch({
        type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL",
        guildId: e
      })
    }
  }
}, E = function(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2];
  if (i.Z.dispatch({
      type: "SELECT_HOME_RESOURCE_CHANNEL",
      guildId: e,
      channelId: t
    }), null == t) return;
  let r = c.Z.getChannel(t),
    p = f.Z.getResourceForChannel(e, t);
  null == e || s.Z.isFullServerPreview(e) || null == r || null == p || u.default.track(m.rMx.SERVER_GUIDE_CHANNEL_SELECTED, {
    guild_id: e,
    channel_id: r.id,
    server_guide_channel_type: "resource",
    channel_action_type: false
  }), n && (0, l.Kh)(t, {
    navigationReplace: false
  }), a.Z.jumpToMessage({
    channelId: t,
    messageId: d.default.castChannelIdAsMessageId(t),
    flash: false,
    jumpType: o.SR.INSTANT
  })
}, b = (e, t) => {
  i.Z.dispatch({
    type: "SELECT_NEW_MEMBER_ACTION_CHANNEL",
    guildId: e,
    channelId: t
  });
  let n = c.Z.getChannel(t),
    r = f.Z.getActionForChannel(e, t);
  null == e || s.Z.isFullServerPreview(e) || null == n || null == r || u.default.track(m.rMx.SERVER_GUIDE_CHANNEL_SELECTED, {
    guild_id: e,
    channel_id: n.id,
    server_guide_channel_type: "member action",
    channel_action_type: r.actionType
  }), (0, l.Kh)(t)
}, y = (e, t) => {
  if (i.Z.dispatch({
      type: "COMPLETE_NEW_MEMBER_ACTION",
      guildId: e,
      channelId: t
    }), s.Z.isFullServerPreview(e)) return;
  let n = c.Z.getChannel(t),
    a = f.Z.getActionForChannel(e, t);
  if (null != n && null != a) {
    var o, l;
    let t = d.default.keys(null != (o = _.Z.getCompletedActions(e)) ? o : {}),
      r = null != (l = f.Z.getNewMemberActions(e)) ? l : [];
    u.default.track(m.rMx.SERVER_GUIDE_ACTION_COMPLETED, {
      guild_id: n.guild_id,
      channel_id: n.id,
      channel_action_type: a.actionType,
      has_completed_all: r.reduce((e, n) => e && t.includes(n.channelId), true)
    })
  }
  r.tn.post({
    url: m.ANM.GUILD_MEMBER_ACTION_UPDATE(e, t),
    rejectWithError: true
  })
}