/** Chunk was on 44384 **/
/** chunk id: 624458, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk157559 = require("./157559.js"),
  Chunk956793 = require("./956793.js"),
  Chunk95701 = require("./95701.js"),
  Chunk51271 = require("./51271.js"),
  Chunk844944 = require("./844944.js"),
  Chunk513461 = require("./513461.js"),
  Chunk212455 = require("./212455.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let A = {
  fetchGuildJoinRequest: async e => {
    let t = await r.Bo.get({
        url: d.Rsh.GUILD_JOIN_REQUEST_BY_ID(e),
        rejectWithError: false
      }),
      n = (0, E.j)(t.body);
    return i.h.dispatch({
      type: "GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS",
      joinRequest: n
    }), t
  },
  fetchGuildJoinRequests: async e => {
    let {
      guildId: t,
      status: n = u.B5.SUBMITTED,
      before: l,
      after: o,
      limit: a = 25,
      force: s = false
    } = e, _ = s || !c.A.hasFetched(t);
    if (!c.A.isFetching() && _) {
      i.h.dispatch({
        type: "GUILD_JOIN_REQUESTS_FETCH_START"
      });
      try {
        var A;
        let e = await r.Bo.get({
            url: d.Rsh.GUILD_JOIN_REQUESTS(t),
            query: {
              status: n,
              limit: a,
              before: l,
              after: o
            },
            rejectWithError: false
          }),
          s = e.body.total,
          c = (null != (A = e.body.guild_join_requests) ? A : []).map(E.j);
        return i.h.dispatch({
          type: "GUILD_JOIN_REQUESTS_FETCH_SUCCESS",
          status: n,
          requests: c,
          total: s,
          limit: a,
          guildId: t
        }), e
      } catch (e) {
        throw i.h.dispatch({
          type: "GUILD_JOIN_REQUESTS_FETCH_FAILURE"
        }), e
      }
    }
  },
  ackUserGuildJoinRequest: async (e, t) => {
    try {
      return await r.Bo.post({
        url: d.Rsh.GUILD_JOIN_REQUEST_ACK(e, t),
        rejectWithError: false
      })
    } catch (e) {} finally {
      i.h.dispatch({
        type: "ACK_APPROVED_GUILD_JOIN_REQUEST",
        id: t,
        guildId: e
      })
    }
  },
  removeGuildJoinRequest: async e => {
    try {
      let t = await r.Bo.del({
        url: d.Rsh.GUILD_MEMBER_REQUEST_TO_JOIN(e),
        rejectWithError: false
      });
      return i.h.dispatch({
        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
        guildId: e,
        request: null
      }), t
    } catch (e) {
      throw e
    }
  },
  updateGuildJoinRequest: async function(e, t, n) {
    let o = arguments.length > 3 && true !== arguments[3] ? arguments[3] : u.B5.APPROVED,
      a = arguments.length > 4 ? arguments[4] : true;
    (0, s.iN)({
      guildId: e,
      actionType: o,
      applicationUserId: t
    });
    let c = await r.Bo.patch({
      url: d.Rsh.GUILD_JOIN_REQUEST_ID(e, n),
      body: {
        action: o,
        rejection_reason: a
      },
      rejectWithError: false
    }).catch(e => (e && e.body && e.body.code === d.t02.REQUEST_TO_JOIN_USER_INELIGIBLE && l.A.show({
      title: _.intl.string(_.t.DxJj4e),
      body: _.intl.string(_.t.rSAOk9)
    }), Promise.reject(e)));
    i.h.dispatch({
      type: "GUILD_JOIN_REQUEST_UPDATE",
      guildId: e,
      status: c.body.application_status,
      request: c.body
    })
  },
  actionAllPendingJoinRequests: async (e, t) => {
    let n = await r.Bo.patch({
      url: d.Rsh.GUILD_JOIN_REQUESTS(e),
      body: {
        action: t
      },
      rejectWithError: false
    });
    return i.h.dispatch({
      type: "GUILD_JOIN_REQUESTS_BULK_ACTION",
      guildId: e,
      action: t
    }), n.body
  },
  resetGuildJoinRequest: async e => {
    try {
      let {
        body: t
      } = await r.Bo.post({
        url: d.Rsh.GUILD_MEMBER_REQUEST_TO_JOIN(e),
        rejectWithError: false
      });
      return i.h.dispatch({
        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
        guildId: e,
        request: t
      }), t
    } catch (e) {
      throw e
    }
  },
  fetchRequestToJoinGuilds: async () => {
    let e = await r.Bo.get({
      url: d.Rsh.USER_JOIN_REQUEST_GUILDS,
      rejectWithError: false
    });
    i.h.dispatch({
      type: "USER_JOIN_REQUEST_GUILDS_FETCH",
      guilds: e.body
    })
  },
  setSelectedApplicationTab: (e, t) => {
    i.h.dispatch({
      type: "GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB",
      guildId: e,
      applicationTab: t
    })
  },
  setSelectedSortOrder: (e, t) => {
    i.h.dispatch({
      type: "GUILD_JOIN_REQUESTS_SET_SORT_ORDER",
      guildId: e,
      sortOrder: t
    })
  },
  setSelectedGuildJoinRequest: (e, t) => {
    null != t && (0, s.gH)({
      guildId: e,
      applicationStatus: t.applicationStatus,
      applicationUserId: t.userId
    }), i.h.dispatch({
      type: "GUILD_JOIN_REQUESTS_SET_SELECTED",
      guildId: e,
      request: t
    })
  },
  createOrEnterJoinRequestInterview: async function(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
      n = await r.Bo.post({
        url: d.Rsh.GUILD_JOIN_REQUEST_INTERVIEW(e),
        rejectWithError: false
      }),
      l = (0, a.UE)(n.body);
    return i.h.dispatch({
      type: "CHANNEL_CREATE",
      channel: l
    }), t && o.default.selectPrivateChannel(l.id), l.id
  },
  fetchJoinRequestCooldown: async e => {
    try {
      let t = await r.Bo.get({
        url: d.Rsh.GUILD_MEMBER_JOIN_REQUEST_COOLDOWN(e),
        rejectWithError: false
      });
      return i.h.dispatch({
        type: "USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH",
        guildId: e,
        cooldown: t.body.cooldown
      }), t
    } catch (t) {
      throw i.h.dispatch({
        type: "USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH",
        guildId: e,
        cooldown: null
      }), t
    }
  }
}