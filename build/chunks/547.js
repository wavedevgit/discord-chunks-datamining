/** Chunk was on web.js **/
/** chunk id: 547, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.d(exports, {
  A: () => Q
}), require("./896048.js");
var Chunk960488 = require("./960488.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk157559 = require("./157559.js"),
  Chunk843472 = require("./843472.js"),
  Chunk56562 = require("./56562.js"),
  Chunk439372 = require("./439372.js"),
  Chunk128265 = require("./128265.js"),
  Chunk343328 = require("./343328.js"),
  Chunk626584 = require("./626584.js"),
  Chunk142120 = require("./142120.js"),
  Chunk940382 = require("./940382.js"),
  Chunk95701 = require("./95701.js"),
  Chunk761640 = require("./761640.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk222823 = require("./222823.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk927813 = require("./927813.js"),
  Chunk202803 = require("./202803.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk985018 = require("./985018.jsx");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let w = new Chunk626584.A("MessageManager");

function P(e) {
  let {
    guildId: t,
    channelId: n,
    messageId: r,
    forceFetch: i,
    isPreload: a,
    jumpType: s,
    skipLocalFetch: o,
    avoidInitialScroll: l,
    fetchKey: d
  } = e;
  if (null == n || (0, C.jq)(n)) return;
  let _ = b.A.getChannel(n);
  if ((null == _ ? true : _.type) === T.rbe.GUILD_STORE || (null == _ ? true : _.type) != null && T.kvI.GUILD_THREADS_ONLY.has(_.type)) return;
  let m = f.A.getOrCreate(n);
  m.some(I.$r) && (w.log("Found expired attachment link, clearing messages"), f.A.clear(n), m = f.A.getOrCreate(n)), null != m.jumpTargetId && null == r && (m = m.mutate({
    jumpTargetId: null,
    jumped: false,
    jumpType: u.US.ANIMATED
  }), f.A.commit(m)), null != m.focusTargetId && null == r && (m = m.mutate({
    focusTargetId: null
  }), f.A.commit(m));
  let g = i;
  if (!a || h.A.isConnected() || m.loadingMore ? m.loadingMore || m.ready && !m.cached ? null != r && (g = true) : (null == t || null != y.A.getGuild(t)) && (g = true) : g = true, (0, p.A)(n) && O.Ay.hasUnread(n) && (g = true), g)
    if (f.A.commit(m.mutate({
        loadingMore: true
      })), null != r) c.A.jumpToMessage({
      channelId: n,
      messageId: r,
      flash: true,
      isPreload: a,
      skipLocalFetch: o,
      jumpType: s,
      avoidInitialScroll: l
    });
    else {
      if ((null == _ ? true : _.isThread()) && L(n)) return w.log("Jumping to start of thread ".concat(_.id)), c.A.fetchMessages({
        channelId: n,
        limit: T.EMb,
        jump: {
          messageId: n,
          flash: false
        },
        isPreload: a,
        skipLocalFetch: o,
        avoidInitialScroll: l,
        fetchKey: d
      });
      if (!((null == _ ? true : _.isThread()) && O.Ay.hasTrackedUnread(_.id)) || m.ready) return c.A.fetchMessages({
        channelId: n,
        limit: T.EMb,
        isPreload: a,
        skipLocalFetch: o,
        jump: {
          jumpType: u.US.ANIMATED
        },
        avoidInitialScroll: l,
        fetchKey: d
      });
      let e = O.Ay.getTrackedAckMessageId(_.id);
      return w.log("Jumping to most recent message in thread ".concat(_.id, " - ").concat(e)), c.A.fetchMessages({
        channelId: n,
        limit: T.EMb,
        jump: {
          messageId: e,
          flash: false,
          offset: 1
        },
        isPreload: a,
        skipLocalFetch: o,
        avoidInitialScroll: l,
        fetchKey: d
      })
    }
}
let D = 90 * Chunk927813.A.Millis.DAY,
  x = "viewedThreadIds";

function L(e) {
  if (O.Ay.hasOpenedThread(e)) returnfalse;
  if (null == i) {
    var t;
    i = null != (t = s.w.get(x, {})) ? t : {}
  }
  if (e in i) returnfalse;
  i[e] = Date.now();
  let n = Date.now() - D;
  for (let e in i) i[e] < n && delete i[e];
  return s.w.set(x, i), true
}

function j(e) {
  var t;
  if (null != r && r.channelId === e) return r;
  let n = (0, a.B6)(location.pathname, {
    path: T.BVt.CHANNEL(":guild", ":channel", ":message"),
    exact: true
  });
  return {
    channelId: e,
    messageId: null == n || null == (t = n.params) ? true : t.message
  }
}

function M() {
  let e = A.A.getChannelId();
  if (null == e) return;
  let t = b.A.getChannel(e);
  if (null == t) return;
  let n = j(t.id);
  r = true, P({
    guildId: t.getGuildId(),
    channelId: t.id,
    messageId: n.messageId,
    jumpType: n.jumpType,
    avoidInitialScroll: null != n.messageId
  }), F(t.getGuildId(), t.id)
}

function k() {
  let e = A.A.getChannelId();
  if (null == e) return;
  let t = b.A.getChannel(e);
  if (null == t) return;
  if (!(0, g.pQ)(t.type)) return void F(t.getGuildId(), t.id);
  let n = f.A.getOrCreate(e);
  n.ready && n.hasFetched || P({
    guildId: t.getGuildId(),
    channelId: t.id
  }), F(t.getGuildId(), t.id)
}

function U(e) {
  let {
    guildId: t,
    channelId: n,
    messageId: i,
    jumpType: a,
    isInitialSetup: s
  } = e;
  if (s) return null != n && (r = {
    channelId: n,
    messageId: null != i ? i : true,
    jumpType: a
  }), false;
  P({
    guildId: t,
    channelId: n,
    messageId: i,
    jumpType: a
  }), F(t, n)
}

function G(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  P({
    guildId: t,
    channelId: n
  })
}

function V(e) {
  let {
    guildId: t,
    channelId: n,
    messageId: r,
    jumpType: i
  } = e;
  P({
    guildId: t,
    channelId: n,
    messageId: r,
    jumpType: i
  })
}

function F(e, t) {
  let n = E.Ay.getCurrentSidebarChannelId(t);
  null == n || P({
    guildId: e,
    channelId: n,
    messageId: E.Ay.getCurrentSidebarMessageId(t)
  })
}

function B() {
  let e = A.A.getChannelId(),
    t = v.A.getGuildId();
  if (null == t || null == e) return;
  let n = E.Ay.getSidebarState(e);
  (null == n ? true : n.type) !== m.PE.VIEW_CHANNEL && F(t, e)
}

function H(e) {
  let {
    guildId: t,
    channelId: n,
    context: r
  } = e;
  r === T.QCW && (P({
    guildId: t,
    channelId: n
  }), F(t, n))
}

function Y(e) {
  let {
    channel: t,
    messageId: n
  } = e, r = t.guild_id;
  null != r && A.A.getChannelId(r) === t.id && P({
    guildId: r,
    channelId: t.id,
    messageId: n
  })
}

function W(e) {
  let {
    response: t
  } = e;
  if (null == t || null == t.body) return null;
  if (t.body.code === T.t02.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
    let e = t.body.retry_after;
    null != e && l.A.show({
      title: N.intl.string(N.t.Whhv4w),
      body: N.intl.formatToPlainString(N.t.qoxdQB, {
        retryAfterMinutes: Math.ceil(e / 60)
      })
    })
  }
}
let K = {};

function z(e) {
  var t;
  let {
    channelId: n,
    jump: r,
    isStale: i,
    isPreview: a = false
  } = e;
  if (a) return;
  let s = null != (t = K[n]) ? t : 0;
  if (Date.now() - s < 10 * S.A.Millis.SECOND) return;
  K[n] = Date.now();
  let o = A.A.getChannelId(),
    l = E.Ay.getCurrentSidebarChannelId(o),
    u = n === o || n === l;
  i && h.A.isConnected() && u && c.A.fetchMessages({
    channelId: n,
    limit: T.EMb,
    jump: r
  })
}

function q(e) {
  let {
    channelId: t,
    messageId: n,
    reason: r,
    noSendFailed: i,
    shouldSendNotification: a
  } = e;
  null == n || true !== i && o.h.dispatch({
    type: "MESSAGE_SEND_FAILED",
    channelId: t,
    messageId: n,
    reason: null != r ? r : null,
    shouldNotify: false
  })
}

function X(e) {
  let {
    state: t
  } = e;
  if ("active" !== t) returnfalse;
  let n = A.A.getChannelId();
  if (null == n) returnfalse;
  c.A.fetchNewLocalMessages(n, T.EMb)
}
class Z extends Chunk439372.A {
  _initialize() {
    o.h.subscribe("CONNECTION_OPEN", M)
  }
  _terminate() {
    o.h.unsubscribe("CONNECTION_OPEN", M)
  }
  constructor(...e) {
    super(...e), R(this, "fetchMessages", P), R(this, "loadSelectedChannelIfNecessary", k), R(this, "stores", new Map().set(E.Ay, B)), R(this, "actions", {
      APP_STATE_UPDATE: X,
      OVERLAY_INITIALIZE: M,
      CHANNEL_SELECT: U,
      VOICE_CHANNEL_SELECT: G,
      THREAD_CREATE: Y,
      THREAD_LIST_SYNC: () => k(),
      CHANNEL_CREATE: Y,
      CHANNEL_PRELOAD: H,
      GUILD_CREATE: () => k(),
      MESSAGE_END_EDIT: W,
      LOAD_MESSAGES_SUCCESS: z,
      UPLOAD_FAIL: q,
      CHANNEL_DELETE: () => k(),
      THREAD_DELETE: () => k(),
      CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE: V
    })
  }
}
let Q = new Z