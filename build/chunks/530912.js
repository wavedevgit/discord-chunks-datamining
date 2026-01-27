/** Chunk was on 67851 **/
/** chunk id: 530912, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Jf: () => _,
  TA: () => u,
  VF: () => b,
  hH: () => d,
  nL: () => m,
  pp: () => c
});
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk58149 = require("./58149.js"),
  Chunk734057 = require("./734057.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

function c(e, t, n) {
  i.default.track(s.HAw.FORWARD_MESSAGE_STARTED, {
    channel_id: e,
    message_id: t,
    source: n
  })
}

function d(e) {
  let {
    channelId: t,
    messageId: n,
    numDestinationChanges: r,
    numQueryChanges: l
  } = e;
  i.default.track(s.HAw.FORWARD_MESSAGE_CANCELLED, {
    channel_id: t,
    message_id: n,
    num_destination_changes: r,
    num_query_changes: l
  })
}

function u(e) {
  let {
    channelId: t,
    messageId: n,
    hasError: r,
    hasContextMessage: l,
    numDestinations: c,
    numDestinationChanges: d,
    numQueryChanges: u,
    anyDestinationHasSlowmode: _,
    source: m
  } = e;
  if (i.default.track(s.HAw.FORWARD_MESSAGE_SENT, {
      channel_id: t,
      message_id: n,
      has_error: r,
      has_context_message: l,
      num_destinations: c,
      num_destination_changes: d,
      num_query_changes: u,
      any_destination_has_slowmode: _
    }), "message-shortcut" === m) {
    let e = o.A.getChannel(t);
    i.default.track(s.HAw.MESSAGE_SHORTCUT_ACTION_SENT, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({
      action: "forward",
      original_message_id: n
    }, (0, a.H$)(null == e ? true : e.guild_id), (0, a.dI)(e)))
  }
}

function _() {
  return r.useMemo(() => (0, l.once)((e, t, n) => {
    i.default.track(s.HAw.FORWARD_ADD_RECIPIENT, {
      channel_id: e,
      message_id: t,
      has_query: n
    })
  }), [])
}

function m() {
  return r.useMemo(() => (0, l.once)((e, t) => {
    i.default.track(s.HAw.FORWARD_EDIT_SEARCH, {
      channel_id: e,
      message_id: t
    })
  }), [])
}

function b() {
  return r.useMemo(() => (0, l.once)((e, t) => {
    i.default.track(s.HAw.FORWARD_EDIT_CONTEXT_MESSAGE, {
      channel_id: e,
      message_id: t
    })
  }), [])
}