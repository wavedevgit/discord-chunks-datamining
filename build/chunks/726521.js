/** Chunk was on web.js **/
/** chunk id: 726521, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DG: () => g,
  FO: () => T,
  G1: () => w,
  I6: () => S,
  J7: () => N,
  JM: () => I,
  Jw: () => m,
  WL: () => y,
  XY: () => C,
  ak: () => h,
  d$: () => b,
  eE: () => A,
  ic: () => E,
  pX: () => v,
  sq: () => _,
  tV: () => D,
  uu: () => R,
  wk: () => P,
  zd: () => O
});
var Chunk367907 = require("./367907.js"),
  Chunk427679 = require("./427679.js"),
  Chunk23750 = require("./23750.js"),
  Chunk598077 = require("./598077.js"),
  Chunk411198 = require("./411198.js"),
  Chunk82554 = require("./82554.js"),
  Chunk185625 = require("./185625.js"),
  Chunk443599 = require("./443599.jsx"),
  Chunk981631 = require("./981631.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  x(l.b.GUILD_DIRECTORY_ENTRY, {
    channel_id: e.channelId,
    guild_id: e.guildId
  }), (0, u.m)({
    name: l.b.GUILD_DIRECTORY_ENTRY,
    record: e
  }, {}, {
    onSubmit: t
  })
}

function h(e, t, n) {
  x(l.b.MESSAGE, {
    message_id: e.id,
    channel_id: e.channel_id
  }), (0, u.m)({
    name: l.b.MESSAGE,
    record: e
  }, {}, {
    onSubmit: n
  })
}

function m(e, t, n) {
  x(l.b.MESSAGE, {
    message_id: e.id,
    channel_id: e.channel_id
  }), (0, u.m)({
    name: l.b.MESSAGE,
    record: e
  }, {
    variant: "staff"
  }, {
    onSubmit: n
  })
}

function g(e, t, n) {
  x(l.b.GUILD, {
    guild_id: e.id
  }), (0, u.m)({
    name: l.b.GUILD,
    record: e
  }, {
    variant: "staff"
  }, {
    onSubmit: n
  })
}

function E(e, t) {
  let n = i.Z.getStageInstanceByChannel(e.id);
  null != n && (x(l.b.STAGE_CHANNEL, {
    stage_instance_id: n.id,
    channel_id: n.channel_id,
    guild_id: n.guild_id
  }), (0, u.m)({
    name: l.b.STAGE_CHANNEL,
    record: n
  }, {}, {
    onSubmit: t
  }))
}

function b(e, t) {
  var n;
  x(l.b.GUILD_SCHEDULED_EVENT, {
    guild_scheduled_event_id: e.id,
    guild_id: e.guild_id,
    channel_id: null != (n = e.channel_id) ? n : true
  }), (0, u.m)({
    name: l.b.GUILD_SCHEDULED_EVENT,
    record: e
  }, {}, {
    onSubmit: t
  })
}

function y(e, t) {
  x(l.b.FIRST_DM, {
    message_id: e.id,
    channel_id: e.channel_id
  }), (0, u.m)({
    name: l.b.FIRST_DM,
    record: e
  }, {}, {
    onSubmit: t,
    isEligibleForFeedback: false
  })
}
async function O(e, t) {
  try {
    await (0, c.ox)({
      name: l.b.FIRST_DM,
      record: e
    }, {
      variant: "_first_dm_ham_v1"
    }), null == t || t()
  } catch (e) {}
}

function v(e, t, n, r) {
  x(l.b.USER, {
    reported_user_id: e.id
  }), (0, u.m)({
    name: l.b.USER,
    record: e,
    contextualGuildId: t
  }, {}, {
    onSubmit: n,
    appContext: r
  })
}

function S(e, t, n, r) {
  x(l.b.USER, {
    reported_user_id: e.id
  }), (0, u.m)({
    name: l.b.USER,
    record: e,
    contextualGuildId: t
  }, {
    variant: "staff"
  }, {
    onSubmit: n,
    isEligibleForFeedback: false,
    appContext: r
  })
}

function I(e, t) {
  let n = new o.Z({});
  x(l.BM.USER, {
    reported_user_id: n.id
  }), (0, u.m)({
    name: l.BM.USER,
    record: n
  }, {}, {
    onClose: t,
    isEligibleForFeedback: false,
    isAuthenticated: false,
    emailToken: e
  })
}

function T(e, t) {
  let n = (0, s.dangerouslyConstructGuildRecordFromUntypedObject)({});
  x(l.BM.GUILD, {
    guild_id: n.id
  }), (0, u.m)({
    name: l.BM.GUILD,
    record: n
  }, {}, {
    onClose: t,
    isEligibleForFeedback: false,
    isAuthenticated: false,
    emailToken: e
  })
}

function C(e, t) {
  x(l.BM.MEDIA_TAKEDOWN, {}), (0, u.m)({
    name: l.BM.MEDIA_TAKEDOWN
  }, {}, {
    onClose: t,
    isEligibleForFeedback: false,
    isAuthenticated: false,
    emailToken: e
  })
}

function A(e, t) {
  let n = new a.ZP({});
  x(l.BM.MESSAGE, {
    message_id: true,
    channel_id: true
  }), (0, u.m)({
    name: l.BM.MESSAGE,
    record: n
  }, {}, {
    onClose: t,
    isEligibleForFeedback: false,
    isAuthenticated: false,
    emailToken: e
  })
}
async function N(e, t, n) {
  try {
    await (0, c.ox)({
      name: l.b.MESSAGE,
      record: e
    }, {
      variant: "safety_alerts_headless_v1"
    }), null == t || t()
  } catch (e) {
    null == n || n()
  }
}

function P(e, t) {
  x(l.b.MESSAGE, {
    message_id: e.id,
    channel_id: e.channel_id
  }), (0, u.m)({
    name: l.b.MESSAGE,
    record: e
  }, {
    variant: "safety_alerts_v1"
  }, {
    onSubmit: t
  })
}

function w(e, t, n, r) {
  var i;
  (0, u.m)({
    name: l.b.WIDGET,
    widget_id: null != (i = t.id) ? i : "",
    user_id: e,
    widget: t
  }, {}, {
    onSubmit: n,
    appContext: r
  })
}

function R(e) {
  let {
    application: t,
    entrypoint: n,
    contextualGuildId: i,
    contextualChannelId: a,
    onSubmit: o,
    appContext: s
  } = e;
  r.ZP.trackWithMetadata(d.rMx.REPORT_APPLICATION_CLICKED, {
    application_id: t.id,
    location: n
  }), x(l.b.APPLICATION, {
    application_id: t.id,
    guild_id: i,
    channel_id: a
  }), (0, u.m)({
    name: l.b.APPLICATION,
    record: t,
    contextualGuildId: i,
    contextualChannelId: a,
    entrypoint: n
  }, {}, {
    onSubmit: o,
    appContext: s
  })
}

function D(e, t) {
  (0, u.m)({
    name: l.xw.MESSAGE,
    record: e
  }, {}, {
    onSubmit: t,
    isEligibleForFeedback: false
  })
}

function x(e, t) {
  r.ZP.trackWithMetadata(d.rMx.IAR_MODAL_OPEN, p({
    report_type: e
  }, t))
}