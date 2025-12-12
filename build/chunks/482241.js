/** Chunk was on web.js **/
/** chunk id: 482241, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./35282.js"), require("./953529.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk287734 = require("./287734.js"),
  Chunk703656 = require("./703656.js"),
  Chunk314897 = require("./314897.js"),
  Chunk709054 = require("./709054.js"),
  Chunk73346 = require("./73346.js"),
  Chunk924301 = require("./924301.js"),
  Chunk236373 = require("./236373.js"),
  Chunk124165 = require("./124165.js"),
  Chunk765305 = require("./765305.js"),
  Chunk981631 = require("./981631.js");
let m = {
  startEvent: (e, t) => r.tn.patch({
    url: _.ANM.GUILD_EVENT(t, e),
    body: {
      status: p.p1.ACTIVE
    },
    rejectWithError: false
  }),
  endEvent: (e, t) => r.tn.patch({
    url: _.ANM.GUILD_EVENT(t, e),
    body: {
      status: p.p1.COMPLETED
    },
    rejectWithError: false
  }),
  joinVoiceEvent(e, t) {
    o.default.selectVoiceChannel(t), (0, a.uL)(_.Z5c.CHANNEL(e, t))
  },
  saveEvent(e, t, n) {
    let i = p.pg.has(t.entityType) ? t.channelId : null,
      o = p._U.has(t.entityType) ? t.entityMetadata : null,
      a = null != t.image && false === /^data:/.test(t.image) ? true : t.image,
      s = {
        name: t.name,
        description: t.description,
        image: a,
        privacy_level: t.privacyLevel,
        scheduled_start_time: t.scheduledStartTime,
        scheduled_end_time: t.scheduledEndTime,
        entity_type: t.entityType,
        channel_id: i,
        entity_metadata: o,
        recurrence_rule: (0, d.J1)(t.recurrenceRule)
      };
    return r.tn.patch({
      url: _.ANM.GUILD_EVENT(n, e),
      body: s,
      rejectWithError: false
    })
  },
  createGuildEvent(e, t) {
    let n = {
      name: e.name,
      description: e.description,
      image: e.image,
      privacy_level: e.privacyLevel,
      scheduled_start_time: e.scheduledStartTime,
      scheduled_end_time: e.scheduledEndTime,
      entity_type: e.entityType,
      channel_id: e.channelId,
      entity_metadata: e.entityMetadata,
      recurrence_rule: (0, d.J1)(e.recurrenceRule)
    };
    return r.tn.post({
      url: _.ANM.GUILD_EVENTS_FOR_GUILD(t),
      body: n,
      rejectWithError: false
    })
  },
  async fetchGuildEvent(e, t) {
    let {
      body: n
    } = await (0, c.Kb)({
      url: _.ANM.GUILD_EVENT(e, t),
      rejectWithError: false
    });
    return i.Z.dispatch({
      type: "FETCH_GUILD_EVENT",
      guildScheduledEvent: n
    }), n
  },
  async fetchGuildEventsForGuild(e) {
    let t = {
        url: _.ANM.GUILD_EVENTS_FOR_GUILD(e),
        rejectWithError: false
      },
      {
        body: n
      } = await (0, c.Kb)(t);
    return i.Z.dispatch({
      type: "FETCH_GUILD_EVENTS_FOR_GUILD",
      guildId: e,
      guildScheduledEvents: n
    }), n
  },
  async fetchGuildEventUserCounts(e, t, n) {
    let o = {
        url: _.ANM.GUILD_EVENT_USER_COUNTS(e, t),
        query: {
          guild_scheduled_event_exception_ids: n
        },
        rejectWithError: false
      },
      {
        body: {
          guild_scheduled_event_count: a,
          guild_scheduled_event_exception_counts: s
        }
      } = await r.tn.get(o),
      l = {
        eventCount: a,
        recurrenceCounts: s
      };
    return i.Z.dispatch({
      type: "GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS",
      guildId: e,
      eventId: t,
      counts: l
    }), l
  },
  cancelGuildEvent: (e, t) => r.tn.patch({
    url: _.ANM.GUILD_EVENT(t, e),
    body: {
      status: p.p1.CANCELED
    },
    rejectWithError: false
  }),
  deleteGuildEvent: (e, t) => r.tn.del({
    url: _.ANM.GUILD_EVENT(t, e),
    rejectWithError: false
  }),
  async getGuildEventsForCurrentUser(e) {
    let {
      body: t
    } = await r.tn.get({
      url: _.ANM.USER_GUILD_EVENTS,
      query: {
        guild_ids: [e]
      },
      rejectWithError: false
    });
    i.Z.dispatch({
      type: "GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS",
      guildScheduledEventUsers: t,
      guildId: e
    })
  },
  async createRsvpForGuildEvent(e, t, n, o) {
    let a = s.default.getId();
    try {
      return i.Z.dispatch({
        type: "GUILD_SCHEDULED_EVENT_USER_ADD",
        userId: a,
        guildId: n,
        guildEventId: e,
        guildEventExceptionId: t,
        response: o
      }), await r.tn.put({
        url: _.ANM.USER_GUILD_EVENT(n, e, t),
        body: {
          response: o
        },
        rejectWithError: false
      })
    } catch (r) {
      throw i.Z.dispatch({
        type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
        userId: a,
        guildId: n,
        guildEventId: e,
        guildEventExceptionId: t,
        response: o
      }), r
    }
  },
  async deleteRsvpForGuildEvent(e, t, n) {
    let o = s.default.getId(),
      a = u.ZP.getRsvp(e, t, o);
    if (null != a) try {
      return i.Z.dispatch({
        type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
        userId: o,
        guildId: n,
        guildEventId: e,
        guildEventExceptionId: t,
        response: a.response
      }), await r.tn.del({
        url: _.ANM.USER_GUILD_EVENT(n, e, t),
        rejectWithError: false
      })
    } catch (r) {
      throw i.Z.dispatch({
        type: "GUILD_SCHEDULED_EVENT_USER_ADD",
        userId: o,
        guildId: n,
        guildEventId: e,
        guildEventExceptionId: t,
        response: a.response
      }), r
    }
  },
  async updateRsvp(e, t, n, r, i) {
    if (null != (0, f.X2)(e, t)) try {
      await this.deleteRsvpForGuildEvent(e, t, n), null == i || i()
    } catch (e) {
      null == i || i(e)
    } else try {
      await this.createRsvpForGuildEvent(e, t, n, r), null == i || i()
    } catch (e) {
      null == i || i(e)
    }
  },
  async fetchUsersForGuildEvent(e, t, n) {
    let o = arguments.length > 3 && true !== arguments[3] ? arguments[3] : p.rC;
    if (null == e || null == n) return [];
    let a = await r.tn.get({
      url: _.ANM.GUILD_EVENT_USERS(n, e, t),
      query: {
        limit: o,
        with_member: true,
        upgrade_response_type: true
      },
      rejectWithError: false
    });
    return i.Z.dispatch({
      type: "GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS",
      guildEventId: e,
      guildScheduledEventUsers: a.body,
      guildId: n,
      guildEventExceptionId: t
    }), a.body.users
  },
  createGuildEventException(e, t, n) {
    let {
      original_scheduled_start_time: i,
      scheduled_start_time: o,
      scheduled_end_time: a,
      is_canceled: s
    } = e;
    return r.tn.post({
      url: _.ANM.GUILD_EVENT_EXCEPTIONS(t, n),
      body: {
        original_scheduled_start_time: i,
        scheduled_start_time: o,
        scheduled_end_time: a,
        is_canceled: s
      },
      rejectWithError: false
    })
  },
  updateGuildEventException(e, t, n, i) {
    let {
      scheduled_start_time: o,
      scheduled_end_time: a,
      is_canceled: s
    } = e;
    return r.tn.patch({
      url: _.ANM.GUILD_EVENT_EXCEPTION(t, n, i),
      body: {
        scheduled_start_time: o,
        scheduled_end_time: a,
        is_canceled: s
      },
      rejectWithError: false
    })
  },
  deleteGuildEventException: (e, t, n) => r.tn.del({
    url: _.ANM.GUILD_EVENT_EXCEPTION(e, t, n),
    rejectWithError: false
  }),
  deleteRecurrence(e, t, n, r) {
    if (null != r) return this.updateGuildEventException({
      scheduled_start_time: r.scheduled_start_time,
      scheduled_end_time: r.scheduled_end_time,
      is_canceled: true
    }, e, t, n);
    {
      let r = l.default.extractTimestamp(n);
      return this.createGuildEventException({
        original_scheduled_start_time: new Date(r).toISOString(),
        is_canceled: true
      }, e, t)
    }
  }
}