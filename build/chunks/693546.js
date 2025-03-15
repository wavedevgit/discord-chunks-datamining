/** Chunk was on 61697 **/
n.d(e, {
  Z: () => E
});
var r = n(544891),
  i = n(570140),
  l = n(668781),
  o = n(287734),
  a = n(131704),
  s = n(926526),
  c = n(826581),
  u = n(246364),
  d = n(937111),
  _ = n(981631),
  p = n(388032);
let E = {
  fetchGuildJoinRequest: async t => {
    let e = await r.tn.get({
        url: _.ANM.GUILD_JOIN_REQUEST_BY_ID(t),
        rejectWithError: !1
      }),
      n = (0, d.j)(e.body);
    return i.Z.dispatch({
      type: "GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS",
      joinRequest: n
    }), e
  },
  fetchGuildJoinRequests: async t => {
    let {
      guildId: e,
      status: n = u.wB.SUBMITTED,
      before: l,
      after: o,
      limit: a = u.tB,
      force: s = !1
    } = t, p = s || !c.Z.hasFetched(e);
    if (!c.Z.isFetching() && p) {
      i.Z.dispatch({
        type: "GUILD_JOIN_REQUESTS_FETCH_START"
      });
      try {
        var E;
        let t = await r.tn.get({
            url: _.ANM.GUILD_JOIN_REQUESTS(e),
            query: {
              status: n,
              limit: a,
              before: l,
              after: o
            },
            rejectWithError: !1
          }),
          s = t.body.total,
          c = (null !== (E = t.body.guild_join_requests) && void 0 !== E ? E : []).map(d.j);
        return i.Z.dispatch({
          type: "GUILD_JOIN_REQUESTS_FETCH_SUCCESS",
          status: n,
          requests: c,
          total: s,
          limit: a,
          guildId: e
        }), t
      } catch (t) {
        throw i.Z.dispatch({
          type: "GUILD_JOIN_REQUESTS_FETCH_FAILURE"
        }), t
      }
    }
  },
  ackUserGuildJoinRequest: async (t, e) => {
    try {
      return await r.tn.post({
        url: _.ANM.GUILD_JOIN_REQUEST_ACK(t, e),
        rejectWithError: !1
      })
    } catch (t) {} finally {
      i.Z.dispatch({
        type: "ACK_APPROVED_GUILD_JOIN_REQUEST",
        id: e,
        guildId: t
      })
    }
  },
  removeGuildJoinRequest: async t => {
    try {
      let e = await r.tn.del({
        url: _.ANM.GUILD_MEMBER_REQUEST_TO_JOIN(t),
        rejectWithError: !1
      });
      return i.Z.dispatch({
        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
        guildId: t,
        request: null
      }), e
    } catch (t) {
      throw t
    }
  },
  updateGuildJoinRequest: async function(t, e, n) {
    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : u.wB.APPROVED,
      a = arguments.length > 4 ? arguments[4] : void 0;
    (0, s.ID)({
      guildId: t,
      actionType: o,
      applicationUserId: e
    });
    let c = await r.tn.patch({
      url: _.ANM.GUILD_JOIN_REQUEST_ID(t, n),
      body: {
        action: o,
        rejection_reason: a
      },
      rejectWithError: !1
    }).catch(t => (t && t.body && t.body.code === _.evJ.REQUEST_TO_JOIN_USER_INELIGIBLE && l.Z.show({
      title: p.NW.string(p.t.DxJj4e),
      body: p.NW.string(p.t.rSAOk5)
    }), Promise.reject(t)));
    i.Z.dispatch({
      type: "GUILD_JOIN_REQUEST_UPDATE",
      guildId: t,
      status: c.body.application_status,
      request: c.body
    })
  },
  actionAllPendingJoinRequests: async (t, e) => {
    let n = await r.tn.patch({
      url: _.ANM.GUILD_JOIN_REQUESTS(t),
      body: {
        action: e
      },
      rejectWithError: !1
    });
    return i.Z.dispatch({
      type: "GUILD_JOIN_REQUESTS_BULK_ACTION",
      guildId: t,
      action: e
    }), n.body
  },
  resetGuildJoinRequest: async t => {
    try {
      let {
        body: e
      } = await r.tn.post({
        url: _.ANM.GUILD_MEMBER_REQUEST_TO_JOIN(t),
        rejectWithError: !1
      });
      return i.Z.dispatch({
        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
        guildId: t,
        request: e
      }), e
    } catch (t) {
      throw t
    }
  },
  fetchRequestToJoinGuilds: async () => {
    let t = await r.tn.get({
      url: _.ANM.USER_JOIN_REQUEST_GUILDS,
      rejectWithError: !1
    });
    i.Z.dispatch({
      type: "USER_JOIN_REQUEST_GUILDS_FETCH",
      guilds: t.body
    })
  },
  setSelectedApplicationTab: (t, e) => {
    i.Z.dispatch({
      type: "GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB",
      guildId: t,
      applicationTab: e
    })
  },
  setSelectedSortOrder: (t, e) => {
    i.Z.dispatch({
      type: "GUILD_JOIN_REQUESTS_SET_SORT_ORDER",
      guildId: t,
      sortOrder: e
    })
  },
  setSelectedGuildJoinRequest: (t, e) => {
    null != e && (0, s.Dq)({
      guildId: t,
      applicationStatus: e.applicationStatus,
      applicationUserId: e.userId
    }), i.Z.dispatch({
      type: "GUILD_JOIN_REQUESTS_SET_SELECTED",
      guildId: t,
      request: e
    })
  },
  createOrEnterJoinRequestInterview: async function(t) {
    let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      n = await r.tn.post({
        url: _.ANM.GUILD_JOIN_REQUEST_INTERVIEW(t),
        rejectWithError: !1
      }),
      l = (0, a.q_)(n.body);
    return i.Z.dispatch({
      type: "CHANNEL_CREATE",
      channel: l
    }), e && o.default.selectPrivateChannel(l.id), l.id
  },
  fetchJoinRequestCooldown: async t => {
    try {
      let e = await r.tn.get({
        url: _.ANM.GUILD_MEMBER_JOIN_REQUEST_COOLDOWN(t),
        rejectWithError: !1
      });
      return i.Z.dispatch({
        type: "USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH",
        guildId: t,
        cooldown: e.body.cooldown
      }), e
    } catch (e) {
      throw i.Z.dispatch({
        type: "USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH",
        guildId: t,
        cooldown: null
      }), e
    }
  }
}