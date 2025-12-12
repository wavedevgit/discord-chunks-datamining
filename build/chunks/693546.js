/** Chunk was on web.js **/
/** chunk id: 693546, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk668781 = require("./668781.js"),
  Chunk287734 = require("./287734.js"),
  Chunk131704 = require("./131704.js"),
  Chunk926526 = require("./926526.js"),
  Chunk826581 = require("./826581.js"),
  Chunk246364 = require("./246364.js"),
  Chunk937111 = require("./937111.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let _ = {
  fetchGuildJoinRequest: async e => {
    let t = await r.tn.get({
        url: f.ANM.GUILD_JOIN_REQUEST_BY_ID(e),
        rejectWithError: false
      }),
      n = (0, d.j)(t.body);
    return i.Z.dispatch({
      type: "GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS",
      joinRequest: n
    }), t
  },
  fetchGuildJoinRequests: async e => {
    let {
      guildId: t,
      status: n = u.wB.SUBMITTED,
      before: o,
      after: a,
      limit: s = u.tB,
      force: l = false
    } = e, p = l || !c.Z.hasFetched(t);
    if (!c.Z.isFetching() && p) {
      i.Z.dispatch({
        type: "GUILD_JOIN_REQUESTS_FETCH_START"
      });
      try {
        var _;
        let e = await r.tn.get({
            url: f.ANM.GUILD_JOIN_REQUESTS(t),
            query: {
              status: n,
              limit: s,
              before: o,
              after: a
            },
            rejectWithError: false
          }),
          l = e.body.total,
          c = (null != (_ = e.body.guild_join_requests) ? _ : []).map(d.j);
        return i.Z.dispatch({
          type: "GUILD_JOIN_REQUESTS_FETCH_SUCCESS",
          status: n,
          requests: c,
          total: l,
          limit: s,
          guildId: t
        }), e
      } catch (e) {
        throw i.Z.dispatch({
          type: "GUILD_JOIN_REQUESTS_FETCH_FAILURE"
        }), e
      }
    }
  },
  ackUserGuildJoinRequest: async (e, t) => {
    try {
      return await r.tn.post({
        url: f.ANM.GUILD_JOIN_REQUEST_ACK(e, t),
        rejectWithError: false
      })
    } catch (e) {} finally {
      i.Z.dispatch({
        type: "ACK_APPROVED_GUILD_JOIN_REQUEST",
        id: t,
        guildId: e
      })
    }
  },
  removeGuildJoinRequest: async e => {
    try {
      let t = await r.tn.del({
        url: f.ANM.GUILD_MEMBER_REQUEST_TO_JOIN(e),
        rejectWithError: false
      });
      return i.Z.dispatch({
        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
        guildId: e,
        request: null
      }), t
    } catch (e) {
      throw e
    }
  },
  updateGuildJoinRequest: async function(e, t, n) {
    let a = arguments.length > 3 && true !== arguments[3] ? arguments[3] : u.wB.APPROVED,
      s = arguments.length > 4 ? arguments[4] : true;
    (0, l.ID)({
      guildId: e,
      actionType: a,
      applicationUserId: t
    });
    let c = await r.tn.patch({
      url: f.ANM.GUILD_JOIN_REQUEST_ID(e, n),
      body: {
        action: a,
        rejection_reason: s
      },
      rejectWithError: false
    }).catch(e => (e && e.body && e.body.code === f.evJ.REQUEST_TO_JOIN_USER_INELIGIBLE && o.Z.show({
      title: p.intl.string(p.t.DxJj4e),
      body: p.intl.string(p.t.rSAOk9)
    }), Promise.reject(e)));
    i.Z.dispatch({
      type: "GUILD_JOIN_REQUEST_UPDATE",
      guildId: e,
      status: c.body.application_status,
      request: c.body
    })
  },
  actionAllPendingJoinRequests: async (e, t) => {
    let n = await r.tn.patch({
      url: f.ANM.GUILD_JOIN_REQUESTS(e),
      body: {
        action: t
      },
      rejectWithError: false
    });
    return i.Z.dispatch({
      type: "GUILD_JOIN_REQUESTS_BULK_ACTION",
      guildId: e,
      action: t
    }), n.body
  },
  resetGuildJoinRequest: async e => {
    try {
      let {
        body: t
      } = await r.tn.post({
        url: f.ANM.GUILD_MEMBER_REQUEST_TO_JOIN(e),
        rejectWithError: false
      });
      return i.Z.dispatch({
        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
        guildId: e,
        request: t
      }), t
    } catch (e) {
      throw e
    }
  },
  fetchRequestToJoinGuilds: async () => {
    let e = await Chunk544891.tn.get({
      url: Chunk981631.ANM.USER_JOIN_REQUEST_GUILDS,
      rejectWithError: false
    });
    Chunk570140.Z.dispatch({
      type: "USER_JOIN_REQUEST_GUILDS_FETCH",
      guilds: module.body
    })
  },
  setSelectedApplicationTab: (e, t) => {
    i.Z.dispatch({
      type: "GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB",
      guildId: e,
      applicationTab: t
    })
  },
  setSelectedSortOrder: (e, t) => {
    i.Z.dispatch({
      type: "GUILD_JOIN_REQUESTS_SET_SORT_ORDER",
      guildId: e,
      sortOrder: t
    })
  },
  setSelectedGuildJoinRequest: (e, t) => {
    null != t && (0, l.Dq)({
      guildId: e,
      applicationStatus: t.applicationStatus,
      applicationUserId: t.userId
    }), i.Z.dispatch({
      type: "GUILD_JOIN_REQUESTS_SET_SELECTED",
      guildId: e,
      request: t
    })
  },
  createOrEnterJoinRequestInterview: async function(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
      n = await r.tn.post({
        url: f.ANM.GUILD_JOIN_REQUEST_INTERVIEW(e),
        rejectWithError: false
      }),
      o = (0, s.q_)(n.body);
    return i.Z.dispatch({
      type: "CHANNEL_CREATE",
      channel: o
    }), t && a.default.selectPrivateChannel(o.id), o.id
  },
  fetchJoinRequestCooldown: async e => {
    try {
      let t = await r.tn.get({
        url: f.ANM.GUILD_MEMBER_JOIN_REQUEST_COOLDOWN(e),
        rejectWithError: false
      });
      return i.Z.dispatch({
        type: "USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH",
        guildId: e,
        cooldown: t.body.cooldown
      }), t
    } catch (t) {
      throw i.Z.dispatch({
        type: "USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH",
        guildId: e,
        cooldown: null
      }), t
    }
  }
}