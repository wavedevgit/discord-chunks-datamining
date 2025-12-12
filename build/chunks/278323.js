/** Chunk was on web.js **/
/** chunk id: 278323, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk367907 = require("./367907.js"),
  Chunk957730 = require("./957730.js"),
  Chunk592125 = require("./592125.js"),
  Chunk493683 = require("./493683.js"),
  Chunk904245 = require("./904245.js"),
  Chunk981631 = require("./981631.js"),
  Chunk959517 = require("./959517.js");
let f = {
  updateActivity(e) {
    let {
      applicationId: t,
      distributor: n,
      shareActivity: o,
      token: a = null,
      duration: s = 0,
      closed: l = false,
      exePath: c = null,
      voiceChannelId: d = null,
      sessionId: f = null,
      mediaSessionId: p = null
    } = e;
    i.Z.wait(() => i.Z.dispatch({
      type: "ACTIVITY_UPDATE_START",
      applicationId: t,
      duration: s,
      distributor: n
    })), r.tn.post({
      url: u.ANM.ACTIVITIES,
      body: {
        application_id: t,
        token: a,
        duration: s,
        share_activity: o,
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
      i.Z.dispatch({
        type: "ACTIVITY_UPDATE_SUCCESS",
        applicationId: t,
        token: r,
        duration: s,
        distributor: n
      })
    }).catch(() => {
      i.Z.dispatch({
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
    } = e, p = s.Z.getChannel(t);
    if (null == p) return Promise.resolve(null);
    let _ = a.ZP.parse(p, null != i ? i : "");
    return c.Z.sendMessage(p.id, _, false, {
      activityAction: {
        type: n,
        activity: r,
        targetUserId: l
      },
      location: d.dy.ACTIVITY_SHARE
    }).then(e => (o.ZP.trackWithMetadata(u.rMx.INVITE_SENT, {
      location: f,
      invite_type: r.type === u.IIU.LISTENING ? u.dAT.SPOTIFY : u.dAT.APPLICATION,
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
      location: o
    } = e;
    return l.Z.ensurePrivateChannel(t).then(e => this.sendActivityInvite({
      channelId: e,
      type: n,
      activity: r,
      content: i,
      location: o
    }))
  },
  async getJoinSecret(e, t, n, i, o) {
    let a = {};
    return null != i && (a.channel_id = i), null != o && (a.message_id = o), (await r.tn.get({
      url: u.ANM.USER_ACTIVITY_JOIN(e, t, n),
      retries: 3,
      query: a,
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
        channelId: o
      } = e;
      return {
        user_id: t,
        application_id: n,
        party_id: r,
        message_id: i,
        channel_id: o
      }
    });
    return (await r.tn.post({
      url: u.ANM.USER_ACTIVITY_SUBSCRIBE,
      body: {
        subscriptions: t
      },
      retries: 1,
      rejectWithError: false
    })).body
  }
}