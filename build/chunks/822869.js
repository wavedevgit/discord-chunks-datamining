/** Chunk was on 39476 **/
/** chunk id: 822869, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ad: () => m,
  Lb: () => c,
  ZF: () => f,
  gP: () => d,
  mh: () => p,
  sF: () => u
});
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk367907 = require("./367907.js"),
  Chunk592125 = require("./592125.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function c(e, t, n) {
  o.default.track(s.rMx.FORWARD_MESSAGE_STARTED, {
    channel_id: e,
    message_id: t,
    source: n
  })
}

function u(e) {
  let {
    channelId: t,
    messageId: n,
    numDestinationChanges: i,
    numQueryChanges: r
  } = e;
  o.default.track(s.rMx.FORWARD_MESSAGE_CANCELLED, {
    channel_id: t,
    message_id: n,
    num_destination_changes: i,
    num_query_changes: r
  })
}

function d(e) {
  let {
    channelId: t,
    messageId: n,
    hasError: i,
    hasContextMessage: r,
    numDestinations: c,
    numDestinationChanges: u,
    numQueryChanges: d,
    anyDestinationHasSlowmode: f,
    source: p
  } = e;
  if (o.default.track(s.rMx.FORWARD_MESSAGE_SENT, {
      channel_id: t,
      message_id: n,
      has_error: i,
      has_context_message: r,
      num_destinations: c,
      num_destination_changes: u,
      num_query_changes: d,
      any_destination_has_slowmode: f
    }), "message-shortcut" === p) {
    let e = a.Z.getChannel(t);
    o.default.track(s.rMx.MESSAGE_SHORTCUT_ACTION_SENT, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          var i;
          i = n[t], t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = i
        })
      }
      return e
    }({
      action: "forward",
      original_message_id: n
    }, (0, l.hH)(null == e ? true : e.guild_id), (0, l.v_)(e)))
  }
}

function f() {
  return Chunk647438.useMemo(() => (0, Chunk392711.once)((e, t, n) => {
    o.default.track(s.rMx.FORWARD_ADD_RECIPIENT, {
      channel_id: e,
      message_id: t,
      has_query: n
    })
  }), [])
}

function p() {
  return Chunk647438.useMemo(() => (0, Chunk392711.once)((e, t) => {
    o.default.track(s.rMx.FORWARD_EDIT_SEARCH, {
      channel_id: e,
      message_id: t
    })
  }), [])
}

function m() {
  return Chunk647438.useMemo(() => (0, Chunk392711.once)((e, t) => {
    o.default.track(s.rMx.FORWARD_EDIT_CONTEXT_MESSAGE, {
      channel_id: e,
      message_id: t
    })
  }), [])
}