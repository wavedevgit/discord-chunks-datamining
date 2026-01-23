/** Chunk was on web.js **/
/** chunk id: 581381, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => eo,
  MX: () => D
}), require("./896048.js");
var Chunk294845 = require("./294845.js"),
  i = require.n(Chunk294845),
  Chunk543222 = require("./543222.js"),
  s = require.n(Chunk543222),
  Chunk731738 = require("./731738.js"),
  Chunk73153 = require("./73153.js"),
  Chunk439372 = require("./439372.js"),
  Chunk141468 = require("./141468.js"),
  Chunk831062 = require("./831062.js"),
  Chunk9842 = require("./9842.js"),
  Chunk961350 = require("./961350.js"),
  Chunk761640 = require("./761640.js"),
  Chunk734057 = require("./734057.js"),
  Chunk320501 = require("./320501.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk661191 = require("./661191.js"),
  Chunk789846 = require("./789846.js"),
  Chunk135598 = require("./135598.js"),
  Chunk930125 = require("./930125.js"),
  Chunk390248 = require("./390248.js"),
  Chunk457699 = require("./457699.js"),
  Chunk811602 = require("./811602.js"),
  Chunk282108 = require("./282108.js"),
  Chunk797019 = require("./797019.js"),
  Chunk493364 = require("./493364.js"),
  Chunk652215 = require("./652215.js"),
  Chunk355097 = require("./355097.js");

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let D = 3e3,
  x = 800,
  L = {};

function j(e) {
  return "".concat(e.channel_id, ":").concat(e.id)
}

function M() {
  Object.values(L).forEach(e => {
    let {
      timeout: t
    } = e;
    clearTimeout(t)
  }), L = {}
}

function k(e, t) {
  if (null == e.id || null == e.channel_id) returnfalse;
  let n = j(e);
  if (null != L[n]) {
    let {
      timeout: r,
      setAt: i
    } = L[n];
    return U(e, t, i), clearTimeout(r), delete L[n], true
  }
  returnfalse
}

function U(e, t, n) {
  if (t === A.VL.UPDATE) {
    var r, i;
    let t = null != (r = e.attachments) ? r : [],
      n = null != (i = e.embeds) ? i : [],
      a = t.filter(e => (0, T.gh)(S.kn.EXPLICIT, {
        type: v.D.Attachment,
        media: e
      })),
      s = n.filter(e => (0, T.gh)(S.kn.EXPLICIT, {
        type: v.D.Embed,
        media: e
      }));
    (0, A.Kl)({
      messageId: e.id,
      channelId: e.channel_id,
      numOfAttachments: t.length,
      numOfEmbeds: n.length,
      numOfExplicitAttachments: a.length,
      numOfExplicitEmbeds: s.length
    })
  }(0, A.rA)(n, t)
}

function G(e) {
  if (k(e, A.VL.TIMEOUT)) {
    let t = m.A.getMessage(e.channel_id, e.id);
    if (null != t) {
      let {
        attachmentIds: n,
        embedIds: r
      } = (0, T.M)(t);
      (0, A.gm)({
        channelId: e.channel_id,
        messageId: e.id,
        attachmentIds: n,
        embedIds: r
      })
    }
    l.h.dispatch({
      type: "MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT",
      messageId: e.id,
      channelId: e.channel_id
    })
  }
}
let V = (e, t) => {
  if (0 !== e.length) {
    if (t) return void(0, O.jd)(e);
    (0, O.j1)(e[0].channel_id, e.map(e => e.id))
  }
};

function F(e) {
  return null == L[j(e)]
}

function B(e, t) {
  let {
    forceBatchScan: n = false,
    jitter: r = false
  } = null != t ? t : {}, i = (null == t ? true : t.isMessageUpdate) ? e.filter(e => (0, T.s9)(e) && (0, T.mS)(e)).filter(F) : e.filter(e => (0, T.s9)(e)).filter(F);
  i.forEach(e => {
    let t = j(e);
    null == L[t] && (d.A.increment({
      name: o.K.EXPLICIT_MEDIA_SCAN_CLIENT_TIMEOUT_CREATE
    }), L[t] = {
      setAt: Date.now(),
      timeout: setTimeout(() => {
        G(e)
      }, D)
    })
  });
  let a = n || new Set(i.map(e => e.channel_id)).size > 1;
  r ? setTimeout(() => {
    V(i.filter(e => null != L[j(e)]), a)
  }, Math.random() * x) : V(i, a)
}

function H(e) {
  let t = {},
    n = {};
  return e.forEach(e => {
    var r, i, a, s, o, l, c, u, d, f, p, _, h, m, g, E;
    null == t[e.channel_id] && (t[e.channel_id] = {
      numOfAttachments: 0,
      numOfAttachmentsPendingScan: 0,
      numOfEmbeds: 0,
      numOfEmbedsPendingScan: 0
    }), null == n[e.id] && (n[e.id] = {
      channelId: e.channel_id,
      numOfAttachments: 0,
      numOfSelfHarmAttachments: 0,
      numOfGoreAttachments: 0,
      numOfExplicitAttachments: 0,
      numOfEmbeds: 0,
      numOfSelfHarmEmbeds: 0,
      numOfGoreEmbeds: 0,
      numOfExplicitEmbeds: 0
    });
    let y = null != (r = null == (d = e.attachments) ? true : d.length) ? r : 0,
      b = null != (i = null == (f = e.embeds) ? true : f.length) ? i : 0,
      {
        attachmentIds: O,
        embedIds: A
      } = (0, T.M)(e),
      I = t[e.channel_id];
    I.numOfAttachments += y, I.numOfEmbeds += b, I.numOfAttachmentsPendingScan += O.length, I.numOfEmbedsPendingScan += A.length;
    let C = n[e.id];
    C.numOfAttachments += y, C.numOfEmbeds += b, C.numOfExplicitAttachments = null != (a = null == (p = e.attachments) ? true : p.filter(e => (0, T.gh)(S.kn.EXPLICIT, {
      type: v.D.Attachment,
      media: e
    })).length) ? a : 0, C.numOfExplicitEmbeds = null != (s = null == (_ = e.embeds) ? true : _.filter(e => (0, T.gh)(S.kn.EXPLICIT, {
      type: v.D.Embed,
      media: e
    })).length) ? s : 0, C.numOfGoreAttachments = null != (o = null == (h = e.attachments) ? true : h.filter(e => (0, T.gh)(S.kn.GORE, {
      type: v.D.Attachment,
      media: e
    })).length) ? o : 0, C.numOfGoreEmbeds = null != (l = null == (m = e.embeds) ? true : m.filter(e => (0, T.gh)(S.kn.GORE, {
      type: v.D.Embed,
      media: e
    })).length) ? l : 0, C.numOfSelfHarmAttachments = null != (c = null == (g = e.attachments) ? true : g.filter(e => (0, T.gh)(S.kn.SELF_HARM, {
      type: v.D.Attachment,
      media: e
    })).length) ? c : 0, C.numOfSelfHarmEmbeds = null != (u = null == (E = e.embeds) ? true : E.filter(e => (0, T.gh)(S.kn.SELF_HARM, {
      type: v.D.Embed,
      media: e
    })).length) ? u : 0
  }), {
    channelLookup: t,
    messageLookup: n
  }
}

function Y(e) {
  function t(e) {
    return null != e
  }
  let n = e.filter(e => {
      let t = (0, b.b)(e),
        n = 0 !== (0, T.Fg)(e);
      return t && n
    }),
    r = e.map(e => {
      if (null != e && "referenced_message" in e && null != e.referenced_message && (0, b.b)(e.referenced_message) && 0 !== (0, T.Fg)(e.referenced_message)) return e.referenced_message
    }).filter(t);
  r.length > 0 && (n = [...n, ...r]);
  let i = s()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id),
    a = i.filter(e => (0, T.mS)(e)),
    o = H(i);
  return {
    messagesPendingScan: a,
    attributesByMessageId: o.messageLookup,
    attributesByChannelId: o.channelLookup
  }
}

function W(e) {
  function t(e) {
    return null != e
  }
  let n = e.filter(e => (0, b.b)(e) && 0 !== (0, T.Fg)(e)),
    r = e.map(e => {
      if (R.sl8.has(e.type) && null != e.messageReference) {
        let t = f.A.getMessageByReference(e.messageReference);
        if (t.state === f.a.LOADED && null != t.message && (0, b.b)(t.message) && 0 !== (0, T.Fg)(t.message)) return t.message
      }
    }).filter(t);
  r.length > 0 && (n = [...n, ...r]);
  let i = s()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id),
    a = i.filter(e => (0, T.mS)(e)),
    o = H(i);
  return {
    messagesPendingScan: a,
    attributesByChannelId: o.channelLookup,
    attributesByMessageId: o.messageLookup
  }
}

function K(e, t) {
  let {
    messagesPendingScan: n,
    attributesByChannelId: r,
    attributesByMessageId: i
  } = Y(e);
  return y.default.entries(r).forEach(e => {
    let [t, n] = e;
    (0, A.zt)({
      channelId: t,
      numOfAttachments: n.numOfAttachments,
      numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
      numOfEmbeds: n.numOfEmbeds,
      numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
    })
  }), (0, C.y)() && y.default.entries(i).forEach(e => {
    let [t, n] = e;
    (0, A.bz)({
      messageId: t,
      channelId: n.channelId,
      numOfAttachments: n.numOfAttachments,
      numOfGoreAttachments: n.numOfGoreAttachments,
      numOfExplicitAttachments: n.numOfExplicitAttachments,
      numOfSelfHarmAttachments: n.numOfSelfHarmAttachments,
      numOfEmbeds: n.numOfEmbeds,
      numOfGoreEmbeds: n.numOfGoreEmbeds,
      numOfExplicitEmbeds: n.numOfExplicitEmbeds,
      numOfSelfHarmEmbeds: n.numOfSelfHarmEmbeds
    })
  }), n.length > 0 && (B(n, t), true)
}

function z(e) {
  let {
    messagesPendingScan: t,
    attributesByChannelId: n,
    attributesByMessageId: r
  } = W(e);
  return y.default.entries(n).forEach(e => {
    let [t, n] = e;
    (0, A.zt)({
      channelId: t,
      numOfAttachments: n.numOfAttachments,
      numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
      numOfEmbeds: n.numOfEmbeds,
      numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
    })
  }), (0, C.y)() && y.default.entries(r).forEach(e => {
    let [t, n] = e;
    (0, A.bz)({
      messageId: t,
      channelId: n.channelId,
      numOfAttachments: n.numOfAttachments,
      numOfGoreAttachments: n.numOfGoreAttachments,
      numOfSelfHarmAttachments: n.numOfSelfHarmAttachments,
      numOfExplicitAttachments: n.numOfExplicitAttachments,
      numOfEmbeds: n.numOfEmbeds,
      numOfGoreEmbeds: n.numOfGoreEmbeds,
      numOfExplicitEmbeds: n.numOfExplicitEmbeds,
      numOfSelfHarmEmbeds: n.numOfSelfHarmEmbeds
    })
  }), t.length > 0 && (B(t), true)
}

function q(e) {
  var t, n, r, i, a, s;
  let {
    message: o
  } = e;
  if (null == o.channel_id || null == o.id || (null == (t = o.author) ? true : t.id) === p.default.getId() || null == o.embeds && null == o.attachments && !(0, A.aY)(o) || (null == (n = o.embeds) ? true : n.length) === 0 && (null == (r = o.attachments) ? true : r.length) === 0 && !(0, A.aY)(o)) returnfalse;
  if (!(0, T.mS)(o)) {
    let e = null != (i = null != (a = m.A.getMessage(o.channel_id, o.id)) ? a : I.A.getMessage(o.id, o.channel_id)) ? i : null == (s = f.A.getMessage(o.channel_id, o.id)) ? true : s.message;
    null == e || (0, T.mS)((0, u.IU)(e, o)) || k(e, A.VL.UPDATE)
  }
  let l = g.A.getChannelId(),
    c = _.Ay.getCurrentSidebarChannelId(l);
  if (o.channel_id !== l && o.channel_id !== c) returnfalse;
  let d = m.A.getMessage(o.channel_id, o.id);
  return null != d && K([d], {
    isMessageUpdate: true
  })
}

function X(e) {
  var t, n;
  let {
    channelId: r,
    message: i,
    optimistic: a,
    isPushNotification: s
  } = e;
  if (a || s || null == r || (null == (n = i.author) ? true : n.id) === p.default.getId()) returnfalse;
  let o = g.A.getChannelId(),
    l = _.Ay.getCurrentSidebarChannelId(o),
    c = r === o || r === l,
    u = h.A.getChannel(r);
  if (!c) returnfalse;
  let d = null == (t = null == u ? true : u.isPrivate()) || t,
    f = (null == u ? true : u.memberCount) == null || (null == u ? true : u.memberCount) > 100;
  return K([i], {
    jitter: d && f
  })
}

function Z(e) {
  let {
    channelId: t,
    messages: n
  } = e;
  if (null == t || null == n) returnfalse;
  let r = g.A.getChannelId(),
    i = _.Ay.getCurrentSidebarChannelId(r);
  return (t === r || t === i) && K(n)
}

function Q(e) {
  let {
    data: t
  } = e, n = false;
  return t.forEach(e => {
    let {
      messages: t
    } = e, r = i()(t);
    n = K(s()(r, (e, t) => e.id === t.id && e.channel_id === t.channel_id)) || n
  }), n
}

function $(e) {
  let {
    pins: t
  } = e;
  return K(t.map(e => {
    let {
      message: t
    } = e;
    return t
  }))
}

function J(e) {
  let {
    guildId: t,
    threads: n
  } = e;
  return null != n && E.A.getGuildId() === t && K(y.default.keys(n).map(e => n[e].first_message))
}

function ee(e) {
  let {
    guildId: t,
    firstMessages: n
  } = e;
  return null != n && E.A.getGuildId() === t && K(n, {
    forceBatchScan: true
  })
}

function et(e) {
  let {
    channelId: t
  } = e;
  return null != t && ea(t)
}

function en(e) {
  let {
    channelId: t
  } = e;
  return (0, N.B)(), null != t && t === g.A.getChannelId() && ea(t)
}

function er(e) {
  let {
    settings: t,
    local: n
  } = e;
  if (!n || t.type !== w.oD.PRELOADED_USER_SETTINGS) returnfalse;
  let r = g.A.getChannelId();
  return null != r && ea(r)
}

function ei(e) {
  let {
    channelId: t,
    chatOpen: n
  } = e;
  return !!n && ea(t)
}

function ea(e) {
  let t = m.A.getMessages(e);
  return 0 !== t.length && z(t)
}
class es extends Chunk439372.A {
  constructor(...e) {
    super(...e), P(this, "actions", {
      LOAD_MESSAGES_SUCCESS: Z,
      LOAD_FORUM_POSTS: J,
      LOAD_THREADS_SUCCESS: ee,
      LOAD_ARCHIVED_THREADS_SUCCESS: ee,
      SIDEBAR_VIEW_CHANNEL: et,
      MESSAGE_CREATE: X,
      MESSAGE_UPDATE: q,
      LOGOUT: M,
      SEARCH_MESSAGES_SUCCESS: Q,
      MOD_VIEW_SEARCH_MESSAGES_SUCCESS: Q,
      CHANNEL_SELECT: en,
      LOAD_PINNED_MESSAGES_SUCCESS: $,
      USER_SETTINGS_PROTO_UPDATE: er,
      CHANNEL_RTC_UPDATE_CHAT_OPEN: ei
    })
  }
}
let eo = new es