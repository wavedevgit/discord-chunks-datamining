/** Chunk was on web.js **/
/** chunk id: 308368, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk58149 = require("./58149.js"),
  Chunk451909 = require("./451909.js"),
  Chunk734057 = require("./734057.js"),
  Chunk308528 = require("./308528.js"),
  Chunk843472 = require("./843472.js"),
  Chunk652215 = require("./652215.js"),
  Chunk381941 = require("./381941.js");
let f = {
  updateActivity(e) {
    let {
      applicationId: t,
      distributor: n,
      shareActivity: a,
      token: o = null,
      duration: s = 0,
      closed: l = false,
      exePath: c = null,
      voiceChannelId: d = null,
      sessionId: f = null,
      mediaSessionId: p = null
    } = e;
    i.h.wait(() => i.h.dispatch({
      type: "ACTIVITY_UPDATE_START",
      applicationId: t,
      duration: s,
      distributor: n
    })), r.Bo.post({
      url: u.Rsh.ACTIVITIES,
      body: {
        application_id: t,
        token: o,
        duration: s,
        share_activity: a,
        distributor: n,
        closed: l,
        exePath: c,
        voice_channel_id: d,
        session_id: f,
        media_session_id: p
      },
      retries: 1,
      oldFormErrors: true,
      rejectWithError: true
    }).then(e => {
      let {
        body: {
          token: r
        }
      } = e;
      i.h.dispatch({
        type: "ACTIVITY_UPDATE_SUCCESS",
        applicationId: t,
        token: r,
        duration: s,
        distributor: n
      })
    }).catch(() => {
      i.h.dispatch({
        type: "ACTIVITY_UPDATE_FAIL",
        applicationId: t
      })
    })
  },
  sendActivityInvite(e) {
    let {
      channelId: t,
      type: n,
      activity: r,
      content: i,
      targetUserId: l,
      location: f
    } = e, p = s.A.getChannel(t);
    if (null == p) return Promise.resolve(null);
    let _ = o.Ay.parse(p, null != i ? i : "");
    return c.A.sendMessage(p.id, _, false, {
      activityAction: {
        type: n,
        activity: r,
        targetUserId: l
      },
      location: d.Hx.ACTIVITY_SHARE
    }).then(e => (a.Ay.trackWithMetadata(u.HAw.INVITE_SENT, {
      location: f,
      invite_type: r.type === u.$pd.LISTENING ? u.G2g.SPOTIFY : u.G2g.APPLICATION,
      application_id: r.application_id,
      guild_id: p.getGuildId(),
      channel_id: p.id,
      message_id: null != e ? e.body.id : null
    }), Promise.resolve(p)), e => Promise.reject(e))
  },
  sendActivityInviteUser(e) {
    let {
      userId: t,
      type: n,
      activity: r,
      content: i,
      location: a
    } = e;
    return l.A.ensurePrivateChannel(t).then(e => this.sendActivityInvite({
      channelId: e,
      type: n,
      activity: r,
      content: i,
      location: a
    }))
  },
  async getJoinSecret(e, t, n, i, a) {
    let o = {};
    return null != i && (o.channel_id = i), null != a && (o.message_id = a), (await r.Bo.get({
      url: u.Rsh.USER_ACTIVITY_JOIN(e, t, n),
      retries: 3,
      query: o,
      rejectWithError: false
    })).body.secret
  },
  async subscribeActivities(e) {
    let t = e.map(e => {
      let {
        userId: t,
        applicationId: n,
        partyId: r,
        messageId: i,
        channelId: a
      } = e;
      return {
        user_id: t,
        application_id: n,
        party_id: r,
        message_id: i,
        channel_id: a
      }
    });
    return (await r.Bo.post({
      url: u.Rsh.USER_ACTIVITY_SUBSCRIBE,
      body: {
        subscriptions: t
      },
      retries: 1,
      rejectWithError: false
    })).body
  }
}