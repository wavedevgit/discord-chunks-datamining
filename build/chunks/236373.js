/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  Gb: () => p,
  J1: () => l,
  KV: () => c,
  Ql: () => s,
  j$: () => _
}), n(266796);
var r = n(314897),
  i = n(230900),
  o = n(854698),
  a = n(765305);

function s(e) {
  return !!(null == e ? void 0 : e.id)
}

function l(e) {
  var t, n;
  return null == e ? null : {
    start: e.start,
    end: e.end,
    frequency: e.frequency,
    interval: e.interval,
    by_weekday: e.byWeekday,
    by_n_weekday: e.byNWeekday,
    by_month: e.byMonth,
    by_month_day: (null !== (n = null === (t = e.byMonthDay) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0) > 0 ? e.byMonthDay : null,
    by_year_day: e.byYearDay,
    count: e.count
  }
}

function c(e) {
  return null == e ? null : {
    start: new Date(e.start).toISOString(),
    end: null != e.end ? new Date(e.end).toISOString() : null,
    frequency: e.frequency,
    interval: e.interval,
    byWeekday: e.by_weekday,
    byNWeekday: e.by_n_weekday,
    byMonth: e.by_month,
    byMonthDay: e.by_month_day,
    byYearDay: e.by_year_day,
    count: e.count
  }
}

function u(e) {
  return e.map(e => ({
    event_exception_id: e.eventExceptionId,
    event_id: e.eventId,
    guild_id: e.guildId,
    scheduled_start_time: e.scheduledStartTime,
    scheduled_end_time: e.scheduledEndTime,
    is_canceled: e.isCanceled
  }))
}

function d(e) {
  return e.map(e => ({
    eventExceptionId: e.event_exception_id,
    eventId: e.event_id,
    guildId: e.guild_id,
    scheduledStartTime: e.scheduled_start_time,
    scheduledEndTime: e.scheduled_end_time,
    isCanceled: e.is_canceled
  }))
}

function f(e) {
  return null != e && "id" in e
}

function p(e, t, n) {
  let {
    name: i,
    description: o,
    privacyLevel: s,
    channelId: c,
    scheduledStartTime: d,
    scheduledEndTime: f,
    entityType: p,
    entityMetadata: _,
    image: h,
    recurrenceRule: m,
    eventExceptions: g
  } = e;
  return {
    id: null != n ? n : a.Ku,
    name: i,
    description: null != o ? o : null,
    privacy_level: s,
    scheduled_start_time: d,
    scheduled_end_time: f,
    entity_type: p,
    entity_metadata: null != _ ? _ : null,
    image: null != h ? h : void 0,
    channel_id: c,
    guild_id: t,
    creator_id: r.default.getId(),
    status: a.p1.SCHEDULED,
    recurrence_rule: l(m),
    guild_scheduled_event_exceptions: u(g)
  }
}

function _(e, t) {
  var n, r, s, l, u, p, _;
  let h = {
    name: null !== (n = null == e ? void 0 : e.name) && void 0 !== n ? n : "",
    privacyLevel: null !== (r = null == e ? void 0 : e.privacy_level) && void 0 !== r ? r : a.j8.GUILD_ONLY,
    description: null !== (s = null == e ? void 0 : e.description) && void 0 !== s ? s : "",
    scheduledStartTime: null !== (l = null == e ? void 0 : e.scheduled_start_time) && void 0 !== l ? l : (0, o.ib)().toISOString(),
    entityType: null !== (u = null == e ? void 0 : e.entity_type) && void 0 !== u ? u : a.WX.NONE,
    entityMetadata: null !== (p = null == e ? void 0 : e.entity_metadata) && void 0 !== p ? p : void 0,
    channelId: null == e ? void 0 : e.channel_id,
    creatorId: null == e ? void 0 : e.creator_id,
    image: null == e ? void 0 : e.image,
    scheduledEndTime: null == e ? void 0 : e.scheduled_end_time,
    recurrenceRule: c(null == e ? void 0 : e.recurrence_rule),
    eventExceptions: d(null !== (_ = null == e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== _ ? _ : [])
  };
  if (f(e) && (null == e ? void 0 : e.entity_type) === a.WX.EXTERNAL) {
    let t = (0, i.cS)(e);
    null != t && (h.entityMetadata = {
      location: t
    })
  } else null == h.channelId && null != t && (h.channelId = t.id, t.isGuildStageVoice() ? h.entityType = a.WX.STAGE_INSTANCE : t.isGuildVoice() && (h.entityType = a.WX.VOICE));
  return h
}