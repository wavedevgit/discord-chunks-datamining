/** Chunk was on web.js **/
/** chunk id: 928658, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GJ: () => w,
  LF: () => N,
  NW: () => v,
  RR: () => A,
  RV: () => g,
  Rj: () => m,
  V2: () => h,
  V3: () => S,
  _Y: () => T,
  b8: () => b,
  bM: () => C,
  dy: () => D,
  jJ: () => R,
  nQ: () => I,
  pb: () => E,
  r3: () => P,
  sJ: () => _,
  tJ: () => O,
  uA: () => y
});
var Chunk58149 = require("./58149.js"),
  Chunk446600 = require("./446600.js"),
  Chunk383233 = require("./383233.js"),
  Chunk427157 = require("./427157.js"),
  Chunk860689 = require("./860689.js"),
  Chunk17372 = require("./17372.js"),
  Chunk369053 = require("./369053.js"),
  Chunk882276 = require("./882276.jsx"),
  Chunk652215 = require("./652215.js");

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
  x(l.t0.GUILD_DIRECTORY_ENTRY, {
    channel_id: e.channelId,
    guild_id: e.guildId
  }), (0, u.T)({
    name: l.t0.GUILD_DIRECTORY_ENTRY,
    record: e
  }, {}, {
    onSubmit: t
  })
}

function h(e, t, n) {
  x(l.t0.MESSAGE, {
    message_id: e.id,
    channel_id: e.channel_id
  }), (0, u.T)({
    name: l.t0.MESSAGE,
    record: e
  }, {}, {
    onSubmit: n
  })
}

function m(e, t, n) {
  x(l.t0.MESSAGE, {
    message_id: e.id,
    channel_id: e.channel_id
  }), (0, u.T)({
    name: l.t0.MESSAGE,
    record: e
  }, {
    variant: "staff"
  }, {
    onSubmit: n
  })
}

function g(e, t, n) {
  x(l.t0.GUILD, {
    guild_id: e.id
  }), (0, u.T)({
    name: l.t0.GUILD,
    record: e
  }, {
    variant: "staff"
  }, {
    onSubmit: n
  })
}

function E(e, t) {
  let n = i.A.getStageInstanceByChannel(e.id);
  null != n && (x(l.t0.STAGE_CHANNEL, {
    stage_instance_id: n.id,
    channel_id: n.channel_id,
    guild_id: n.guild_id
  }), (0, u.T)({
    name: l.t0.STAGE_CHANNEL,
    record: n
  }, {}, {
    onSubmit: t
  }))
}

function y(e, t) {
  var n;
  x(l.t0.GUILD_SCHEDULED_EVENT, {
    guild_scheduled_event_id: e.id,
    guild_id: e.guild_id,
    channel_id: null != (n = e.channel_id) ? n : true
  }), (0, u.T)({
    name: l.t0.GUILD_SCHEDULED_EVENT,
    record: e
  }, {}, {
    onSubmit: t
  })
}

function b(e, t) {
  x(l.t0.FIRST_DM, {
    message_id: e.id,
    channel_id: e.channel_id
  }), (0, u.T)({
    name: l.t0.FIRST_DM,
    record: e
  }, {}, {
    onSubmit: t,
    isEligibleForFeedback: false
  })
}
async function O(e, t) {
  try {
    await (0, c.gP)({
      name: l.t0.FIRST_DM,
      record: e
    }, {
      variant: "_first_dm_ham_v1"
    }), null == t || t()
  } catch (e) {}
}

function v(e, t, n, r) {
  x(l.t0.USER, {
    reported_user_id: e.id
  }), (0, u.T)({
    name: l.t0.USER,
    record: e,
    contextualGuildId: t
  }, {}, {
    onSubmit: n,
    appContext: r
  })
}

function A(e, t, n, r) {
  x(l.t0.USER, {
    reported_user_id: e.id
  }), (0, u.T)({
    name: l.t0.USER,
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
  let n = new s.A({});
  x(l.tY.USER, {
    reported_user_id: n.id
  }), (0, u.T)({
    name: l.tY.USER,
    record: n
  }, {}, {
    onClose: t,
    isEligibleForFeedback: false,
    isAuthenticated: false,
    emailToken: e
  })
}

function S(e, t) {
  let n = (0, o.dangerouslyConstructGuildRecordFromUntypedObject)({});
  x(l.tY.GUILD, {
    guild_id: n.id
  }), (0, u.T)({
    name: l.tY.GUILD,
    record: n
  }, {}, {
    onClose: t,
    isEligibleForFeedback: false,
    isAuthenticated: false,
    emailToken: e
  })
}

function T(e, t) {
  x(l.tY.MEDIA_TAKEDOWN, {}), (0, u.T)({
    name: l.tY.MEDIA_TAKEDOWN
  }, {}, {
    onClose: t,
    isEligibleForFeedback: false,
    isAuthenticated: false,
    emailToken: e
  })
}

function C(e, t) {
  let n = new a.Ay({});
  x(l.tY.MESSAGE, {
    message_id: true,
    channel_id: true
  }), (0, u.T)({
    name: l.tY.MESSAGE,
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
    await (0, c.gP)({
      name: l.t0.MESSAGE,
      record: e
    }, {
      variant: "safety_alerts_headless_v1"
    }), null == t || t()
  } catch (e) {
    null == n || n()
  }
}

function R(e, t) {
  x(l.t0.MESSAGE, {
    message_id: e.id,
    channel_id: e.channel_id
  }), (0, u.T)({
    name: l.t0.MESSAGE,
    record: e
  }, {
    variant: "safety_alerts_v1"
  }, {
    onSubmit: t
  })
}

function w(e, t, n, r) {
  var i;
  (0, u.T)({
    name: l.t0.WIDGET,
    widget_id: null != (i = t.id) ? i : "",
    user_id: e,
    widget: t
  }, {}, {
    onSubmit: n,
    appContext: r
  })
}

function P(e) {
  let {
    application: t,
    entrypoint: n,
    contextualGuildId: i,
    contextualChannelId: a,
    onSubmit: s,
    appContext: o
  } = e;
  r.Ay.trackWithMetadata(d.HAw.REPORT_APPLICATION_CLICKED, {
    application_id: t.id,
    location: n
  }), x(l.t0.APPLICATION, {
    application_id: t.id,
    guild_id: i,
    channel_id: a
  }), (0, u.T)({
    name: l.t0.APPLICATION,
    record: t,
    contextualGuildId: i,
    contextualChannelId: a,
    entrypoint: n
  }, {}, {
    onSubmit: s,
    appContext: o
  })
}

function D(e, t) {
  (0, u.T)({
    name: l.Yw.MESSAGE,
    record: e
  }, {}, {
    onSubmit: t,
    isEligibleForFeedback: false
  })
}

function x(e, t) {
  r.Ay.trackWithMetadata(d.HAw.IAR_MODAL_OPEN, p({
    report_type: e
  }, t))
}