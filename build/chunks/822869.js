/** Chunk was on 58593 **/
n.d(t, {
  Ad: () => _,
  Lb: () => l,
  ZF: () => p,
  gP: () => d,
  mh: () => m,
  sF: () => u
});
var a = n(192379),
  r = n(392711),
  o = n(367907),
  i = n(592125),
  c = n(626135),
  s = n(981631);

function l(e, t, n) {
  c.default.track(s.rMx.FORWARD_MESSAGE_STARTED, {
    channel_id: e,
    message_id: t,
    source: n
  })
}

function u(e) {
  let {
    channelId: t,
    messageId: n,
    numDestinationChanges: a,
    numQueryChanges: r
  } = e;
  c.default.track(s.rMx.FORWARD_MESSAGE_CANCELLED, {
    channel_id: t,
    message_id: n,
    num_destination_changes: a,
    num_query_changes: r
  })
}

function d(e) {
  let {
    channelId: t,
    messageId: n,
    hasError: a,
    hasContextMessage: r,
    numDestinations: l,
    numDestinationChanges: u,
    numQueryChanges: d,
    anyDestinationHasSlowmode: p,
    source: m
  } = e;
  if (c.default.track(s.rMx.FORWARD_MESSAGE_SENT, {
      channel_id: t,
      message_id: n,
      has_error: a,
      has_context_message: r,
      num_destinations: l,
      num_destination_changes: u,
      num_query_changes: d,
      any_destination_has_slowmode: p
    }), "message-shortcut" === m) {
    let e = i.Z.getChannel(t);
    c.default.track(s.rMx.MESSAGE_SHORTCUT_ACTION_SENT, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), a.forEach(function(t) {
          var a;
          a = n[t], t in e ? Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = a
        })
      }
      return e
    }({
      action: "forward",
      original_message_id: n
    }, (0, o.hH)(null == e ? void 0 : e.guild_id), (0, o.v_)(e)))
  }
}

function p() {
  return a.useMemo(() => (0, r.once)((e, t, n) => {
    c.default.track(s.rMx.FORWARD_ADD_RECIPIENT, {
      channel_id: e,
      message_id: t,
      has_query: n
    })
  }), [])
}

function m() {
  return a.useMemo(() => (0, r.once)((e, t) => {
    c.default.track(s.rMx.FORWARD_EDIT_SEARCH, {
      channel_id: e,
      message_id: t
    })
  }), [])
}

function _() {
  return a.useMemo(() => (0, r.once)((e, t) => {
    c.default.track(s.rMx.FORWARD_EDIT_CONTEXT_MESSAGE, {
      channel_id: e,
      message_id: t
    })
  }), [])
}