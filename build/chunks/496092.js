/** Chunk was on web.js **/
/** chunk id: 496092, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./747238.js"), require("./228524.js");
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk956793 = require("./956793.js"),
  Chunk976860 = require("./976860.js"),
  Chunk961350 = require("./961350.js"),
  Chunk661191 = require("./661191.js"),
  Chunk371794 = require("./371794.js"),
  Chunk698441 = require("./698441.js"),
  Chunk794782 = require("./794782.js"),
  Chunk929267 = require("./929267.js"),
  Chunk988794 = require("./988794.js"),
  Chunk652215 = require("./652215.js");
let h = {
  startEvent: (e, t) => r.Bo.patch({
    url: _.Rsh.GUILD_EVENT(t, e),
    body: {
      status: p.XG.ACTIVE
    },
    rejectWithError: false
  }),
  endEvent: (e, t) => r.Bo.patch({
    url: _.Rsh.GUILD_EVENT(t, e),
    body: {
      status: p.XG.COMPLETED
    },
    rejectWithError: false
  }),
  joinVoiceEvent(e, t) {
    a.default.selectVoiceChannel(t), (0, o.pX)(_.BVt.CHANNEL(e, t))
  },
  saveEvent(e, t, n) {
    let i = p.GW.has(t.entityType) ? t.channelId : null,
      a = p.o_.has(t.entityType) ? t.entityMetadata : null,
      o = null != t.image && false === /^data:/.test(t.image) ? true : t.image,
      s = {
        name: t.name,
        description: t.description,
        image: o,
        privacy_level: t.privacyLevel,
        scheduled_start_time: t.scheduledStartTime,
        scheduled_end_time: t.scheduledEndTime,
        entity_type: t.entityType,
        channel_id: i,
        entity_metadata: a,
        recurrence_rule: (0, d.RX)(t.recurrenceRule)
      };
    return r.Bo.patch({
      url: _.Rsh.GUILD_EVENT(n, e),
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
      recurrence_rule: (0, d.RX)(e.recurrenceRule)
    };
    return r.Bo.post({
      url: _.Rsh.GUILD_EVENTS_FOR_GUILD(t),
      body: n,
      rejectWithError: false
    })
  },
  async fetchGuildEvent(e, t) {
    let {
      body: n
    } = await (0, c.aP)({
      url: _.Rsh.GUILD_EVENT(e, t),
      rejectWithError: false
    });
    return i.h.dispatch({
      type: "FETCH_GUILD_EVENT",
      guildScheduledEvent: n
    }), n
  },
  async fetchGuildEventsForGuild(e) {
    let t = {
        url: _.Rsh.GUILD_EVENTS_FOR_GUILD(e),
        rejectWithError: false
      },
      {
        body: n
      } = await (0, c.aP)(t);
    return i.h.dispatch({
      type: "FETCH_GUILD_EVENTS_FOR_GUILD",
      guildId: e,
      guildScheduledEvents: n
    }), n
  },
  async fetchGuildEventUserCounts(e, t, n) {
    let a = {
        url: _.Rsh.GUILD_EVENT_USER_COUNTS(e, t),
        query: {
          guild_scheduled_event_exception_ids: n
        },
        rejectWithError: false
      },
      {
        body: {
          guild_scheduled_event_count: o,
          guild_scheduled_event_exception_counts: s
        }
      } = await r.Bo.get(a),
      l = {
        eventCount: o,
        recurrenceCounts: s
      };
    return i.h.dispatch({
      type: "GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS",
      guildId: e,
      eventId: t,
      counts: l
    }), l
  },
  cancelGuildEvent: (e, t) => r.Bo.patch({
    url: _.Rsh.GUILD_EVENT(t, e),
    body: {
      status: p.XG.CANCELED
    },
    rejectWithError: false
  }),
  deleteGuildEvent: (e, t) => r.Bo.del({
    url: _.Rsh.GUILD_EVENT(t, e),
    rejectWithError: false
  }),
  async getGuildEventsForCurrentUser(e) {
    let {
      body: t
    } = await r.Bo.get({
      url: _.Rsh.USER_GUILD_EVENTS,
      query: {
        guild_ids: [e]
      },
      rejectWithError: false
    });
    i.h.dispatch({
      type: "GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS",
      guildScheduledEventUsers: t,
      guildId: e
    })
  },
  async createRsvpForGuildEvent(e, t, n, a) {
    let o = s.default.getId();
    try {
      return i.h.dispatch({
        type: "GUILD_SCHEDULED_EVENT_USER_ADD",
        userId: o,
        guildId: n,
        guildEventId: e,
        guildEventExceptionId: t,
        response: a
      }), await r.Bo.put({
        url: _.Rsh.USER_GUILD_EVENT(n, e, t),
        body: {
          response: a
        },
        rejectWithError: false
      })
    } catch (r) {
      throw i.h.dispatch({
        type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
        userId: o,
        guildId: n,
        guildEventId: e,
        guildEventExceptionId: t,
        response: a
      }), r
    }
  },
  async deleteRsvpForGuildEvent(e, t, n) {
    let a = s.default.getId(),
      o = u.Ay.getRsvp(e, t, a);
    if (null != o) try {
      return i.h.dispatch({
        type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
        userId: a,
        guildId: n,
        guildEventId: e,
        guildEventExceptionId: t,
        response: o.response
      }), await r.Bo.del({
        url: _.Rsh.USER_GUILD_EVENT(n, e, t),
        rejectWithError: false
      })
    } catch (r) {
      throw i.h.dispatch({
        type: "GUILD_SCHEDULED_EVENT_USER_ADD",
        userId: a,
        guildId: n,
        guildEventId: e,
        guildEventExceptionId: t,
        response: o.response
      }), r
    }
  },
  async updateRsvp(e, t, n, r, i) {
    if (null != (0, f.TS)(e, t)) try {
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
    let a = arguments.length > 3 && true !== arguments[3] ? arguments[3] : p.C1;
    if (null == e || null == n) return [];
    let o = await r.Bo.get({
      url: _.Rsh.GUILD_EVENT_USERS(n, e, t),
      query: {
        limit: a,
        with_member: true,
        upgrade_response_type: true
      },
      rejectWithError: false
    });
    return i.h.dispatch({
      type: "GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS",
      guildEventId: e,
      guildScheduledEventUsers: o.body,
      guildId: n,
      guildEventExceptionId: t
    }), o.body.users
  },
  createGuildEventException(e, t, n) {
    let {
      original_scheduled_start_time: i,
      scheduled_start_time: a,
      scheduled_end_time: o,
      is_canceled: s
    } = e;
    return r.Bo.post({
      url: _.Rsh.GUILD_EVENT_EXCEPTIONS(t, n),
      body: {
        original_scheduled_start_time: i,
        scheduled_start_time: a,
        scheduled_end_time: o,
        is_canceled: s
      },
      rejectWithError: false
    })
  },
  updateGuildEventException(e, t, n, i) {
    let {
      scheduled_start_time: a,
      scheduled_end_time: o,
      is_canceled: s
    } = e;
    return r.Bo.patch({
      url: _.Rsh.GUILD_EVENT_EXCEPTION(t, n, i),
      body: {
        scheduled_start_time: a,
        scheduled_end_time: o,
        is_canceled: s
      },
      rejectWithError: false
    })
  },
  deleteGuildEventException: (e, t, n) => r.Bo.del({
    url: _.Rsh.GUILD_EVENT_EXCEPTION(e, t, n),
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