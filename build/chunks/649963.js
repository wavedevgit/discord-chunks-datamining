/** Chunk was on web.js **/
/** chunk id: 649963, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BB: () => w,
  Go: () => D,
  Jf: () => x,
  ao: () => R,
  et: () => L,
  on: () => P,
  qN: () => I
});
var Chunk562465 = require("./562465.js"),
  Chunk582754 = require("./582754.js"),
  Chunk73153 = require("./73153.js"),
  Chunk157559 = require("./157559.js"),
  Chunk58149 = require("./58149.js"),
  Chunk505527 = require("./505527.js"),
  Chunk867455 = require("./867455.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk320501 = require("./320501.js"),
  Chunk954571 = require("./954571.js"),
  Chunk203982 = require("./203982.js"),
  Chunk927813 = require("./927813.js"),
  Chunk690521 = require("./690521.js"),
  Chunk300703 = require("./300703.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var I = function(e) {
  return e.MESSAGE = "Message", e.FORUM_TOOLBAR = "Forum Toolbar", e.MOBILE_MEDIA_VIEWER = "Mobile Media Viewer", e.MESSAGE_HOVER_BAR = "Message Hover Bar", e.MESSAGE_INLINE_BUTTON = "Message Inline Button", e.MESSAGE_CONTEXT_MENU = "Message Context Menu", e.MESSAGE_REACTION_PICKER = "Message Reaction Picker", e.MESSAGE_SHORTCUT = "Message Shortcut", e.DOUBLE_TAP = "Double Tap", e
}({});

function S(e, t, n) {
  let {
    headers: r,
    status: i,
    body: a
  } = e;
  if (429 === i) {
    if (n.isRetry) returntrue;
    let e = parseInt(r["retry-after"]);
    return isNaN(e) || setTimeout(t, e * h.A.Millis.SECOND), false
  }
  if (403 === i) switch (a && a.code) {
    case E.t02.TOO_MANY_REACTIONS:
      s.A.show({
        title: y.intl.string(y.t.lFddsR),
        body: y.intl.string(y.t.h27eIm),
        confirmText: y.intl.string(y.t.BddRzS)
      });
      break;
    case E.t02.REACTION_BLOCKED:
      _._.dispatch(E.jej.SHAKE_APP, {
        duration: 200,
        intensity: 2
      })
  } else if (!n.isRetry) return t(), false;
  returntrue
}

function T(e, t, n, r, i) {
  var s, o;
  a.h.dispatch({
    type: e,
    channelId: t,
    messageId: n,
    userId: null != (s = null == i ? true : i.userId) ? s : u.default.getId(),
    emoji: r,
    optimistic: true,
    colors: null != (o = null == i ? true : i.colors) ? o : [],
    reactionType: (null == i ? true : i.burst) ? l.v.BURST : l.v.NORMAL
  })
}

function C(e) {
  let {
    channelId: t,
    messageId: n,
    emoji: r,
    userId: i,
    useTypeEndpoint: a = false,
    type: s = l.v.NORMAL
  } = e, o = null != r.id ? "".concat(r.name, ":").concat(r.id) : r.name;
  return null == i ? E.Rsh.REACTIONS(t, n, o) : a ? E.Rsh.REACTION_WITH_TYPE(t, n, o, i, s) : E.Rsh.REACTION(t, n, o, i)
}

function N(e, t, n) {
  var r;
  let i = null != (r = n.id) ? r : n.name;
  return E.Rsh.POLL_ANSWER_VOTERS(e, t, i)
}
async function R(e) {
  let {
    channelId: t,
    messageId: n,
    emoji: i,
    limit: s,
    after: o,
    type: c
  } = e, u = c === l.v.VOTE ? N(t, n, i) : C({
    channelId: t,
    messageId: n,
    emoji: i
  }), d = await r.Bo.get({
    url: u,
    query: {
      limit: s,
      after: o,
      type: c
    },
    oldFormErrors: true,
    rejectWithError: false
  }), f = c === l.v.VOTE ? d.body.users : d.body;
  return a.h.dispatch({
    type: "MESSAGE_REACTION_ADD_USERS",
    channelId: t,
    messageId: n,
    users: f,
    emoji: i,
    reactionType: c
  }), f
}
async function w(e, t, n) {
  let a = arguments.length > 3 && true !== arguments[3] ? arguments[3] : "Message",
    u = arguments.length > 4 ? arguments[4] : true,
    f = null != u && !!u.burst,
    _ = null != u && !!u.isRetry;
  if (!_ && M(e, t, n, f)) return void s.A.show({
    title: y.intl.string(y.t["uaUU/g"]),
    body: y.intl.string(y.t.psMorl),
    confirmText: y.intl.string(y.t["NX+WJN"])
  });
  let h = await j(n, f);
  return T("MESSAGE_REACTION_ADD", e, t, n, {
    burst: f,
    colors: h
  }), await c.A.unarchiveThreadIfNecessary(e), r.Bo.put({
    url: C({
      channelId: e,
      messageId: t,
      emoji: n,
      userId: "@me"
    }),
    query: {
      location: a,
      type: f ? l.v.BURST : l.v.NORMAL
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(() => {
    if ("Message Shortcut" === a) {
      var r;
      let i = d.A.getChannel(e);
      p.default.track(E.HAw.MESSAGE_SHORTCUT_ACTION_SENT, O({
        channel_id: e,
        guild_id: null == i ? true : i.guild_id,
        original_message_id: t,
        emoji_id: null != (r = n.id) ? r : n.name,
        action: "react"
      }, (0, o.H$)(null == i ? true : i.guild_id), (0, o.dI)(i)))
    }
    f ? (i.OR.announce(y.intl.formatToPlainString(y.t["RJlG+R"], {
      name: n.name
    })), g.A.triggerFullscreenAnimation({
      channelId: e,
      messageId: t,
      emoji: A(O({}, n), {
        animated: false
      })
    })) : i.OR.announce(y.intl.formatToPlainString(y.t.ol4acF, {
      name: n.name
    }))
  }).catch(r => {
    S(r, () => w(e, t, n, a, {
      burst: f,
      isRetry: true
    }), {
      isRetry: _
    }) && (T("MESSAGE_REACTION_REMOVE", e, t, n, {
      burst: f
    }), f ? i.OR.announce(y.intl.formatToPlainString(y.t.fJeu87, {
      name: n.name
    })) : i.OR.announce(y.intl.formatToPlainString(y.t["UUn5V+"], {
      name: n.name
    })))
  })
}

function P(e) {
  let {
    channelId: t,
    messageId: n,
    emoji: r,
    key: i
  } = e;
  a.h.dispatch({
    type: "BURST_REACTION_EFFECT_PLAY",
    channelId: t,
    messageId: n,
    emoji: r,
    key: i
  })
}
async function D(e, t, n) {
  let i = null != n && !!n.isRetry;
  await c.A.unarchiveThreadIfNecessary(e), r.Bo.del({
    url: E.Rsh.REMOVE_REACTIONS(e, t),
    oldFormErrors: true,
    rejectWithError: false
  }).catch(n => {
    S(n, () => D(e, t, {
      isRetry: true
    }), {
      isRetry: i
    })
  })
}
async function x(e, t, n, i) {
  let a = null != i && !!i.isRetry;
  await c.A.unarchiveThreadIfNecessary(e);
  let s = null === n.id ? n.name : "".concat(n.name, ":").concat(n.id);
  r.Bo.del({
    url: E.Rsh.REMOVE_EMOJI_REACTIONS(e, t, s),
    oldFormErrors: true,
    rejectWithError: false
  }).catch(r => {
    S(r, () => x(e, t, n, {
      isRetry: true
    }), {
      isRetry: a
    })
  })
}
async function L(e) {
  let {
    channelId: t,
    messageId: n,
    emoji: a,
    location: s = "Message",
    userId: o,
    options: u
  } = e, d = null != u && !!u.burst, f = null != u && !!u.isRetry;
  T("MESSAGE_REACTION_REMOVE", t, n, a, {
    userId: o,
    burst: d
  }), await c.A.unarchiveThreadIfNecessary(t), r.Bo.del({
    url: C({
      channelId: t,
      messageId: n,
      emoji: a,
      userId: null != o ? o : "@me",
      type: d ? l.v.BURST : l.v.NORMAL,
      useTypeEndpoint: true
    }),
    query: {
      location: s,
      burst: d
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(() => {
    (null == u ? true : u.burst) ? i.OR.announce(y.intl.formatToPlainString(y.t["3l9f6u"], {
      name: a.name
    })): i.OR.announce(y.intl.formatToPlainString(y.t["DQxi+7"], {
      name: a.name
    }))
  }).catch(async e => {
    if (S(e, () => L({
        channelId: t,
        messageId: n,
        emoji: a,
        location: s,
        userId: o,
        options: {
          burst: d,
          isRetry: true
        }
      }), {
        isRetry: f
      })) {
      let e = await j(a, d);
      T("MESSAGE_REACTION_ADD", t, n, a, {
        userId: o,
        burst: d,
        colors: e
      }), (null == u ? true : u.burst) ? i.OR.announce(y.intl.formatToPlainString(y.t.OamVbV, {
        name: a.name
      })) : i.OR.announce(y.intl.formatToPlainString(y.t["tD9+b+"], {
        name: a.name
      }))
    }
  })
}
async function j(e, t) {
  let n = [];
  if (t) try {
    n = await (0, m.D_)(e)
  } catch (e) {}
  return n
}

function M(e, t, n, r) {
  let i = f.A.getMessage(e, t);
  return null != i && i.userHasReactedWithEmoji(n, r)
}