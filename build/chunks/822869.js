/** Chunk was on web.js **/
/** chunk id: 822869, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ad: () => m,
  Lb: () => d,
  ZF: () => p,
  gP: () => _,
  mh: () => h,
  sF: () => f
});
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk367907 = require("./367907.js"),
  Chunk592125 = require("./592125.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t, n) {
  s.default.track(l.rMx.FORWARD_MESSAGE_STARTED, {
    channel_id: e,
    message_id: t,
    source: n
  })
}

function f(e) {
  let {
    channelId: t,
    messageId: n,
    numDestinationChanges: r,
    numQueryChanges: i
  } = e;
  s.default.track(l.rMx.FORWARD_MESSAGE_CANCELLED, {
    channel_id: t,
    message_id: n,
    num_destination_changes: r,
    num_query_changes: i
  })
}

function _(e) {
  let {
    channelId: t,
    messageId: n,
    hasError: r,
    hasContextMessage: i,
    numDestinations: c,
    numDestinationChanges: d,
    numQueryChanges: f,
    anyDestinationHasSlowmode: _,
    source: p
  } = e;
  if (s.default.track(l.rMx.FORWARD_MESSAGE_SENT, {
      channel_id: t,
      message_id: n,
      has_error: r,
      has_context_message: i,
      num_destinations: c,
      num_destination_changes: d,
      num_query_changes: f,
      any_destination_has_slowmode: _
    }), "message-shortcut" === p) {
    let e = o.Z.getChannel(t);
    s.default.track(l.rMx.MESSAGE_SHORTCUT_ACTION_SENT, u({
      action: "forward",
      original_message_id: n
    }, (0, a.hH)(null == e ? true : e.guild_id), (0, a.v_)(e)))
  }
}

function p() {
  return Chunk647438.useMemo(() => (0, Chunk392711.once)((e, t, n) => {
    s.default.track(l.rMx.FORWARD_ADD_RECIPIENT, {
      channel_id: e,
      message_id: t,
      has_query: n
    })
  }), [])
}

function h() {
  return Chunk647438.useMemo(() => (0, Chunk392711.once)((e, t) => {
    s.default.track(l.rMx.FORWARD_EDIT_SEARCH, {
      channel_id: e,
      message_id: t
    })
  }), [])
}

function m() {
  return Chunk647438.useMemo(() => (0, Chunk392711.once)((e, t) => {
    s.default.track(l.rMx.FORWARD_EDIT_CONTEXT_MESSAGE, {
      channel_id: e,
      message_id: t
    })
  }), [])
}