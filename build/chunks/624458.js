/** Chunk was on web.js **/
/** chunk id: 624458, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
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
let _ = {
  fetchGuildJoinRequest: async e => {
    let t = await r.Bo.get({
        url: f.Rsh.GUILD_JOIN_REQUEST_BY_ID(e),
        rejectWithError: false
      }),
      n = (0, d.j)(t.body);
    return i.h.dispatch({
      type: "GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS",
      joinRequest: n
    }), t
  },
  fetchGuildJoinRequests: async e => {
    let {
      guildId: t,
      status: n = u.B5.SUBMITTED,
      before: a,
      after: s,
      limit: o = 25,
      force: l = false
    } = e, p = l || !c.A.hasFetched(t);
    if (!c.A.isFetching() && p) {
      i.h.dispatch({
        type: "GUILD_JOIN_REQUESTS_FETCH_START"
      });
      try {
        var _;
        let e = await r.Bo.get({
            url: f.Rsh.GUILD_JOIN_REQUESTS(t),
            query: {
              status: n,
              limit: o,
              before: a,
              after: s
            },
            rejectWithError: false
          }),
          l = e.body.total,
          c = (null != (_ = e.body.guild_join_requests) ? _ : []).map(d.j);
        return i.h.dispatch({
          type: "GUILD_JOIN_REQUESTS_FETCH_SUCCESS",
          status: n,
          requests: c,
          total: l,
          limit: o,
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
        url: f.Rsh.GUILD_JOIN_REQUEST_ACK(e, t),
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
        url: f.Rsh.GUILD_MEMBER_REQUEST_TO_JOIN(e),
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
    let s = arguments.length > 3 && true !== arguments[3] ? arguments[3] : u.B5.APPROVED,
      o = arguments.length > 4 ? arguments[4] : true;
    (0, l.iN)({
      guildId: e,
      actionType: s,
      applicationUserId: t
    });
    let c = await r.Bo.patch({
      url: f.Rsh.GUILD_JOIN_REQUEST_ID(e, n),
      body: {
        action: s,
        rejection_reason: o
      },
      rejectWithError: false
    }).catch(e => (e && e.body && e.body.code === f.t02.REQUEST_TO_JOIN_USER_INELIGIBLE && a.A.show({
      title: p.intl.string(p.t.DxJj4e),
      body: p.intl.string(p.t.rSAOk9)
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
      url: f.Rsh.GUILD_JOIN_REQUESTS(e),
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
        url: f.Rsh.GUILD_MEMBER_REQUEST_TO_JOIN(e),
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
      url: f.Rsh.USER_JOIN_REQUEST_GUILDS,
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
    null != t && (0, l.gH)({
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
        url: f.Rsh.GUILD_JOIN_REQUEST_INTERVIEW(e),
        rejectWithError: false
      }),
      a = (0, o.UE)(n.body);
    return i.h.dispatch({
      type: "CHANNEL_CREATE",
      channel: a
    }), t && s.default.selectPrivateChannel(a.id), a.id
  },
  fetchJoinRequestCooldown: async e => {
    try {
      let t = await r.Bo.get({
        url: f.Rsh.GUILD_MEMBER_JOIN_REQUEST_COOLDOWN(e),
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