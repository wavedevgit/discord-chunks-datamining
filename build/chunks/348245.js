/** Chunk was on web.js **/
/** chunk id: 348245, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.d(exports, {
  Z: () => X
}), require("./388685.js");
var Chunk828700 = require("./828700.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk668781 = require("./668781.js"),
  Chunk904245 = require("./904245.js"),
  Chunk593472 = require("./593472.js"),
  Chunk147913 = require("./147913.js"),
  Chunk89892 = require("./89892.js"),
  Chunk702321 = require("./702321.js"),
  Chunk710845 = require("./710845.js"),
  Chunk38618 = require("./38618.js"),
  Chunk897473 = require("./897473.js"),
  Chunk131704 = require("./131704.js"),
  Chunk433355 = require("./433355.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk306680 = require("./306680.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk70956 = require("./70956.js"),
  Chunk198620 = require("./198620.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx");

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let R = new Chunk710845.Z("MessageManager");

function w(e) {
  let {
    guildId: t,
    channelId: n,
    messageId: r,
    forceFetch: i,
    isPreload: a,
    jumpType: o,
    skipLocalFetch: s,
    avoidInitialScroll: l
  } = e;
  if (null == n || (0, A.AB)(n)) return;
  let d = b.Z.getChannel(n);
  if ((null == d ? true : d.type) === C.d4z.GUILD_STORE || (null == d ? true : d.type) != null && C.TPd.GUILD_THREADS_ONLY.has(d.type)) return;
  let _ = f.Z.getOrCreate(n);
  _.some(T.k5) && (R.log("Found expired attachment link, clearing messages"), f.Z.clear(n), _ = f.Z.getOrCreate(n)), null != _.jumpTargetId && null == r && (_ = _.mutate({
    jumpTargetId: null,
    jumped: false,
    jumpType: u.SR.ANIMATED
  }), f.Z.commit(_)), null != _.focusTargetId && null == r && (_ = _.mutate({
    focusTargetId: null
  }), f.Z.commit(_));
  let h = i;
  if (!a || m.Z.isConnected() || _.loadingMore ? _.loadingMore || _.ready && !_.cached ? null != r && (h = true) : (null == t || null != y.Z.getGuild(t)) && (h = true) : h = true, (0, p.Z)(n) && O.ZP.hasUnread(n) && (h = true), h)
    if (f.Z.commit(_.mutate({
        loadingMore: true
      })), null != r) c.Z.jumpToMessage({
      channelId: n,
      messageId: r,
      flash: true,
      isPreload: a,
      skipLocalFetch: s,
      jumpType: o,
      avoidInitialScroll: l
    });
    else {
      if ((null == d ? true : d.isThread()) && L(n)) return R.log("Jumping to start of thread ".concat(d.id)), c.Z.fetchMessages({
        channelId: n,
        limit: C.AQB,
        jump: {
          messageId: n,
          flash: false
        },
        isPreload: a,
        skipLocalFetch: s,
        avoidInitialScroll: l
      });
      if (!((null == d ? true : d.isThread()) && O.ZP.hasTrackedUnread(d.id)) || _.ready) return c.Z.fetchMessages({
        channelId: n,
        limit: C.AQB,
        isPreload: a,
        skipLocalFetch: s,
        jump: {
          jumpType: u.SR.ANIMATED
        },
        avoidInitialScroll: l
      });
      let e = O.ZP.getTrackedAckMessageId(d.id);
      return R.log("Jumping to most recent message in thread ".concat(d.id, " - ").concat(e)), c.Z.fetchMessages({
        channelId: n,
        limit: C.AQB,
        jump: {
          messageId: e,
          flash: false,
          offset: 1
        },
        isPreload: a,
        skipLocalFetch: s,
        avoidInitialScroll: l
      })
    }
}
let D = 90 * Chunk70956.Z.Millis.DAY,
  x = "viewedThreadIds";

function L(e) {
  if (O.ZP.hasOpenedThread(e)) returnfalse;
  if (null == i) {
    var t;
    i = null != (t = o.K.get(x, {})) ? t : {}
  }
  if (e in i) returnfalse;
  i[e] = Date.now();
  let n = Date.now() - D;
  for (let e in i) i[e] < n && delete i[e];
  return o.K.set(x, i), true
}

function j(e) {
  var t;
  if (null != r && r.channelId === e) return r;
  let n = (0, a.LX)(location.pathname, {
    path: C.Z5c.CHANNEL(":guild", ":channel", ":message"),
    exact: true
  });
  return {
    channelId: e,
    messageId: null == n || null == (t = n.params) ? true : t.message
  }
}

function M() {
  let e = Chunk944486.Z.getChannelId();
  if (null == module) return;
  let t = Chunk592125.Z.getChannel(module);
  if (null == exports) return;
  let n = j(exports.id);
  r = true, w({
    guildId: exports.getGuildId(),
    channelId: exports.id,
    messageId: require.messageId,
    jumpType: require.jumpType,
    avoidInitialScroll: null != require.messageId
  }), B(exports.getGuildId(), exports.id)
}

function k() {
  let e = Chunk944486.Z.getChannelId();
  if (null == module) return;
  let t = Chunk592125.Z.getChannel(module);
  if (null == exports) return;
  if (!(0, Chunk131704.Qm)(exports.type)) return void B(exports.getGuildId(), exports.id);
  let n = Chunk89892.Z.getOrCreate(module);
  if (require.ready && require.hasFetched) return void B(exports.getGuildId(), exports.id);
  w({
    guildId: exports.getGuildId(),
    channelId: exports.id
  }), B(exports.getGuildId(), exports.id)
}

function U(e) {
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
  w({
    guildId: t,
    channelId: n,
    messageId: i,
    jumpType: a
  }), B(t, n)
}

function G(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  w({
    guildId: t,
    channelId: n
  })
}

function Z(e) {
  let {
    guildId: t,
    channelId: n,
    messageId: r,
    jumpType: i
  } = e;
  w({
    guildId: t,
    channelId: n,
    messageId: r,
    jumpType: i
  })
}

function B(e, t) {
  let n = E.ZP.getCurrentSidebarChannelId(t);
  null != n && w({
    guildId: e,
    channelId: n,
    messageId: E.ZP.getCurrentSidebarMessageId(t)
  })
}

function F() {
  let e = Chunk944486.Z.getChannelId(),
    t = Chunk914010.Z.getGuildId();
  if (null == exports || null == module) return;
  let n = Chunk433355.ZP.getSidebarState(module);
  (null == require ? true : require.type) !== Chunk897473.tI.VIEW_CHANNEL && B(exports, module)
}

function V(e) {
  let {
    guildId: t,
    channelId: n,
    context: r
  } = e;
  r === C.e3s && (w({
    guildId: t,
    channelId: n
  }), B(t, n))
}

function H(e) {
  let {
    channel: t,
    messageId: n
  } = e, r = t.guild_id;
  null != r && v.Z.getChannelId(r) === t.id && w({
    guildId: r,
    channelId: t.id,
    messageId: n
  })
}

function Y(e) {
  let {
    response: t
  } = e;
  if (null == t || null == t.body) return null;
  if (t.body.code === C.evJ.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
    let e = t.body.retry_after;
    null != e && l.Z.show({
      title: N.intl.string(N.t.Whhv4w),
      body: N.intl.formatToPlainString(N.t.qoxdQB, {
        retryAfterMinutes: Math.ceil(e / 60)
      })
    })
  }
}
let W = {};

function K(e) {
  var t;
  let {
    channelId: n,
    jump: r,
    isStale: i,
    isPreview: a = false
  } = e;
  if (a) return;
  let o = null != (t = W[n]) ? t : 0;
  if (Date.now() - o < 10 * I.Z.Millis.SECOND) return;
  W[n] = Date.now();
  let s = v.Z.getChannelId(),
    l = E.ZP.getCurrentSidebarChannelId(s),
    u = n === s || n === l;
  i && m.Z.isConnected() && u && c.Z.fetchMessages({
    channelId: n,
    limit: C.AQB,
    jump: r
  })
}

function z(e) {
  let {
    channelId: t,
    messageId: n,
    reason: r,
    noSendFailed: i,
    shouldSendNotification: a
  } = e;
  null != n && true !== i && s.Z.dispatch({
    type: "MESSAGE_SEND_FAILED",
    channelId: t,
    messageId: n,
    reason: null != r ? r : null,
    shouldNotify: false
  })
}

function q(e) {
  let {
    state: t
  } = e;
  if ("active" !== t) returnfalse;
  let n = v.Z.getChannelId();
  if (null == n) returnfalse;
  c.Z.fetchNewLocalMessages(n, C.AQB)
}
class Q extends Chunk147913.Z {
  _initialize() {
    Chunk570140.Z.subscribe("CONNECTION_OPEN", M)
  }
  _terminate() {
    Chunk570140.Z.unsubscribe("CONNECTION_OPEN", M)
  }
  constructor(...e) {
    super(...e), P(this, "fetchMessages", w), P(this, "loadSelectedChannelIfNecessary", k), P(this, "stores", new Map().set(E.ZP, F)), P(this, "actions", {
      APP_STATE_UPDATE: q,
      OVERLAY_INITIALIZE: M,
      CHANNEL_SELECT: U,
      VOICE_CHANNEL_SELECT: G,
      THREAD_CREATE: H,
      THREAD_LIST_SYNC: () => k(),
      CHANNEL_CREATE: H,
      CHANNEL_PRELOAD: V,
      GUILD_CREATE: () => k(),
      MESSAGE_END_EDIT: Y,
      LOAD_MESSAGES_SUCCESS: K,
      UPLOAD_FAIL: z,
      CHANNEL_DELETE: () => k(),
      THREAD_DELETE: () => k(),
      CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE: Z
    })
  }
}
let X = new Q