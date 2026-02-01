/** Chunk was on web.js **/
/** chunk id: 547, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.d(exports, {
  A: () => ee
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
  Chunk491001 = require("./491001.js"),
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
let P = 10 * Chunk927813.A.Millis.SECOND,
  D = new Chunk626584.A("MessageManager");

function L(e) {
  let {
    guildId: t,
    channelId: n,
    messageId: r,
    forceFetch: i,
    isPreload: a,
    jumpType: o,
    skipLocalFetch: s,
    avoidInitialScroll: l,
    fetchKey: d
  } = e;
  if (null == n || (0, N.jq)(n)) return;
  let _ = b.A.getChannel(n);
  if ((null == _ ? true : _.type) === C.rbe.GUILD_STORE || (null == _ ? true : _.type) != null && C.kvI.GUILD_THREADS_ONLY.has(_.type)) return;
  let m = f.A.getOrCreate(n);
  m.some(T.$r) && (D.log("Found expired attachment link, clearing messages"), f.A.clear(n), m = f.A.getOrCreate(n)), null != m.jumpTargetId && null == r && (m = m.mutate({
    jumpTargetId: null,
    jumped: false,
    jumpType: u.US.ANIMATED
  }), f.A.commit(m)), null != m.focusTargetId && null == r && (m = m.mutate({
    focusTargetId: null
  }), f.A.commit(m));
  let g = i;
  if (!a || h.A.isConnected() || m.loadingMore ? m.loadingMore || m.ready && !m.cached ? null != r && (g = true) : (null == t || null != O.A.getGuild(t)) && (g = true) : g = true, (0, p.A)(n) && v.Ay.hasUnread(n) && (g = true), g)
    if (f.A.commit(m.mutate({
        loadingMore: true
      })), null != r) c.A.jumpToMessage({
      channelId: n,
      messageId: r,
      flash: true,
      isPreload: a,
      skipLocalFetch: s,
      jumpType: o,
      avoidInitialScroll: l
    });
    else {
      if ((null == _ ? true : _.isThread()) && j(n)) return D.log("Jumping to start of thread ".concat(_.id)), c.A.fetchMessages({
        channelId: n,
        limit: C.EMb,
        jump: {
          messageId: n,
          flash: false
        },
        isPreload: a,
        skipLocalFetch: s,
        avoidInitialScroll: l,
        fetchKey: d
      });
      if (!((null == _ ? true : _.isThread()) && v.Ay.hasTrackedUnread(_.id)) || m.ready) return c.A.fetchMessages({
        channelId: n,
        limit: C.EMb,
        isPreload: a,
        skipLocalFetch: s,
        jump: {
          jumpType: u.US.ANIMATED
        },
        avoidInitialScroll: l,
        fetchKey: d
      });
      let e = v.Ay.getTrackedAckMessageId(_.id);
      return D.log("Jumping to most recent message in thread ".concat(_.id, " - ").concat(e)), c.A.fetchMessages({
        channelId: n,
        limit: C.EMb,
        jump: {
          messageId: e,
          flash: false,
          offset: 1
        },
        isPreload: a,
        skipLocalFetch: s,
        avoidInitialScroll: l,
        fetchKey: d
      })
    }
}
let x = 90 * Chunk927813.A.Millis.DAY,
  M = "viewedThreadIds";

function j(e) {
  if (v.Ay.hasOpenedThread(e)) returnfalse;
  if (null == i) {
    var t;
    i = null != (t = o.w.get(M, {})) ? t : {}
  }
  if (e in i) returnfalse;
  i[e] = Date.now();
  let n = Date.now() - x;
  for (let e in i) i[e] < n && delete i[e];
  return o.w.set(M, i), true
}

function k(e) {
  var t;
  if (null != r && r.channelId === e) return r;
  let n = (0, a.B6)(location.pathname, {
    path: C.BVt.CHANNEL(":guild", ":channel", ":message"),
    exact: true
  });
  return {
    channelId: e,
    messageId: null == n || null == (t = n.params) ? true : t.message
  }
}

function U() {
  let e = A.A.getChannelId();
  if (null == e) return;
  let t = b.A.getChannel(e);
  if (null == t) return;
  let n = k(t.id);
  r = true, L({
    guildId: t.getGuildId(),
    channelId: t.id,
    messageId: n.messageId,
    jumpType: n.jumpType,
    avoidInitialScroll: null != n.messageId
  }), Y(t.getGuildId(), t.id)
}

function G() {
  if (!(0, m.K)()) return;
  let e = A.A.getChannelId();
  if (null == e) return;
  let t = b.A.getChannel(e);
  null != t && L({
    guildId: t.getGuildId(),
    channelId: t.id
  })
}

function V() {
  let e = A.A.getChannelId();
  if (null == e) return;
  let t = b.A.getChannel(e);
  if (null == t) return;
  if (!(0, E.pQ)(t.type)) return void Y(t.getGuildId(), t.id);
  let n = f.A.getOrCreate(e);
  n.ready && n.hasFetched || L({
    guildId: t.getGuildId(),
    channelId: t.id
  }), Y(t.getGuildId(), t.id)
}

function F(e) {
  let {
    guildId: t,
    channelId: n,
    messageId: i,
    jumpType: a,
    isInitialSetup: o
  } = e;
  if (o) return null != n && (r = {
    channelId: n,
    messageId: null != i ? i : true,
    jumpType: a
  }), false;
  L({
    guildId: t,
    channelId: n,
    messageId: i,
    jumpType: a
  }), Y(t, n)
}

function B(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  L({
    guildId: t,
    channelId: n
  })
}

function H(e) {
  let {
    guildId: t,
    channelId: n,
    messageId: r,
    jumpType: i
  } = e;
  L({
    guildId: t,
    channelId: n,
    messageId: r,
    jumpType: i
  })
}

function Y(e, t) {
  let n = y.Ay.getCurrentSidebarChannelId(t);
  null == n || L({
    guildId: e,
    channelId: n,
    messageId: y.Ay.getCurrentSidebarMessageId(t)
  })
}

function W() {
  let e = A.A.getChannelId(),
    t = I.A.getGuildId();
  if (null == t || null == e) return;
  let n = y.Ay.getSidebarState(e);
  (null == n ? true : n.type) !== g.PE.VIEW_CHANNEL && Y(t, e)
}

function K(e) {
  let {
    guildId: t,
    channelId: n,
    context: r
  } = e;
  r === C.QCW && (L({
    guildId: t,
    channelId: n
  }), Y(t, n))
}

function z(e) {
  let {
    channel: t,
    messageId: n
  } = e, r = t.guild_id;
  null != r && A.A.getChannelId(r) === t.id && L({
    guildId: r,
    channelId: t.id,
    messageId: n
  })
}

function q(e) {
  let {
    response: t
  } = e;
  if (null == t || null == t.body) return null;
  if (t.body.code === C.t02.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
    let e = t.body.retry_after;
    null != e && l.A.show({
      title: w.intl.string(w.t.Whhv4w),
      body: w.intl.formatToPlainString(w.t.qoxdQB, {
        retryAfterMinutes: Math.ceil(e / 60)
      })
    })
  }
}
let Z = {};

function Q(e) {
  var t;
  let {
    channelId: n,
    jump: r,
    isStale: i,
    isPreview: a = false
  } = e;
  if (a) return;
  let o = null != (t = Z[n]) ? t : 0;
  if (Date.now() - o < P) return;
  Z[n] = Date.now();
  let s = A.A.getChannelId(),
    l = y.Ay.getCurrentSidebarChannelId(s),
    u = n === s || n === l;
  i && h.A.isConnected() && u && c.A.fetchMessages({
    channelId: n,
    limit: C.EMb,
    jump: r
  })
}

function X(e) {
  let {
    channelId: t,
    messageId: n,
    reason: r,
    noSendFailed: i,
    shouldSendNotification: a
  } = e;
  null == n || true !== i && s.h.dispatch({
    type: "MESSAGE_SEND_FAILED",
    channelId: t,
    messageId: n,
    reason: null != r ? r : null,
    shouldNotify: false
  })
}

function J(e) {
  let {
    state: t
  } = e;
  if ("active" !== t) returnfalse;
  let n = A.A.getChannelId();
  if (null == n) returnfalse;
  c.A.fetchNewLocalMessages(n, C.EMb)
}
class $ extends Chunk439372.A {
  _initialize() {
    s.h.subscribe("CONNECTION_OPEN", U)
  }
  _terminate() {
    s.h.unsubscribe("CONNECTION_OPEN", U)
  }
  constructor(...e) {
    super(...e), R(this, "fetchMessages", L), R(this, "loadSelectedChannelIfNecessary", V), R(this, "stores", new Map().set(y.Ay, W)), R(this, "actions", {
      APP_STATE_UPDATE: J,
      OVERLAY_INITIALIZE: U,
      CONNECTION_RESUMED: G,
      CHANNEL_SELECT: F,
      VOICE_CHANNEL_SELECT: B,
      THREAD_CREATE: z,
      THREAD_LIST_SYNC: () => V(),
      CHANNEL_CREATE: z,
      CHANNEL_PRELOAD: K,
      GUILD_CREATE: () => V(),
      MESSAGE_END_EDIT: q,
      LOAD_MESSAGES_SUCCESS: Q,
      UPLOAD_FAIL: X,
      CHANNEL_DELETE: () => V(),
      THREAD_DELETE: () => V(),
      CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE: H
    })
  }
}
let ee = new $