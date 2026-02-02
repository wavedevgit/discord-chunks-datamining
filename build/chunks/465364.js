/** Chunk was on web.js **/
/** chunk id: 465364, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => y,
  Le: () => m,
  Tz: () => A,
  jp: () => O,
  ko: () => h
}), require("./896048.js"), require("./733351.js"), require("./747238.js"), require("./812715.js"), require("./380610.js");
var Chunk833291 = require("./833291.js");
require("./100392.js");
var Chunk46054 = require("./46054.js"),
  Chunk659674 = require("./659674.js"),
  Chunk728458 = require("./728458.js"),
  Chunk652215 = require("./652215.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let f = 30,
  p = new Set([Chunk652215.Auw.IMAGE, Chunk652215.Auw.GIFV]),
  _ = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);

function h(e, t) {
  var n;
  let r = m({
      channelId: e.channel_id,
      messageId: e.id,
      renderOptions: t
    }),
    i = null != e.webhookId;
  return d(c({}, r), {
    allowLinks: i || r.allowLinks,
    allowEmojiLinks: i,
    mentionChannels: e.mentionChannels,
    soundboardSounds: null != (n = e.soundboardSounds) ? n : []
  })
}

function m(e) {
  let {
    channelId: t,
    messageId: n,
    renderOptions: r
  } = e;
  return {
    channelId: t,
    messageId: n,
    allowLinks: !!r.allowLinks,
    allowDevLinks: !!r.allowDevLinks,
    allowGameMentions: !!r.allowGameMentions,
    allowTimeMentionInput: !!r.allowTimeMentionInput,
    formatInline: !!r.formatInline,
    noStyleAndInteraction: !!r.noStyleAndInteraction,
    allowHeading: !!r.allowHeading,
    allowList: !!r.allowList,
    previewLinkTarget: !!r.previewLinkTarget,
    disableAnimatedEmoji: !!r.disableAnimatedEmoji,
    isInteracting: !!r.isInteracting,
    allowEmojiLinks: false,
    disableAutoBlockNewlines: true,
    mentionChannels: [],
    soundboardSounds: [],
    muted: false,
    unknownUserMentionPlaceholder: true,
    viewingChannelId: r.viewingChannelId,
    forceWhite: !!r.forceWhite,
    textColor: r.textColor
  }
}

function g(e, t, n) {
  let {
    toAST: r = false,
    hideSimpleEmbedContent: i = true,
    formatInline: a = false,
    postProcessor: o,
    contentMessage: s
  } = n, l = false, c = false, u = (null != s ? s : t).content, d = e(u, true, h(t, n), (e, n, r) => (c = null != r && r, Array.isArray(e) || (e = [e]), c && (e = [{
    type: "text",
    content: u,
    originalMatch: {
      index: 0,
      0: u
    }
  }]), i && (e = w(e, (null != s ? s : t).embeds)), a || (e = I(e, n)), e = E(e), t.embeds.length > 0 && (l = T(e, n)), a && (e = R(e)), null != o && (e = o(e, n)), e));
  return {
    hasSpoilerEmbeds: l,
    hasBailedAst: c,
    content: d
  }
}

function E(e) {
  let t = e.some(e => "link" !== e.type);
  return e.filter(e => {
    let n = "link" === e.type,
      i = null != (null != e.target ? (0, r.ts)(e.target) : null);
    return !(n && i && !t)
  })
}

function y(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
  return g(t.formatInline ? i.A.parseInlineReply : i.A.parse, e, t)
}

function b(e, t) {
  arguments.length > 2 && true !== arguments[2] && arguments[2];
  let {
    content: n,
    guildId: r,
    channelId: i
  } = t;
  return e(n, true, {
    allowLinks: false,
    allowDevLinks: false,
    allowEmojiLinks: false,
    mentionChannels: [],
    soundboardSounds: [],
    isInteracting: false,
    formatInline: true,
    noStyleAndInteraction: false,
    allowHeading: false,
    allowList: false,
    allowGameMentions: false,
    disableAutoBlockNewlines: true,
    previewLinkTarget: false,
    disableAnimatedEmoji: true,
    guildId: r,
    channelId: i,
    muted: false,
    disablePressableChannelMention: true
  }, e => (Array.isArray(e) || (e = [e]), e))
}

function O(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
  return b(e, t, n)
}

function v(e, t, n, r) {
  return e(t, true, {
    allowLinks: false,
    allowDevLinks: false,
    allowEmojiLinks: false,
    mentionChannels: [],
    soundboardSounds: [],
    isInteracting: false,
    formatInline: false,
    noStyleAndInteraction: false,
    allowHeading: false,
    allowList: false,
    allowGameMentions: false,
    disableAutoBlockNewlines: true,
    highlightWord: n,
    disableAnimatedEmoji: false,
    channelId: r,
    muted: false
  }, e => (Array.isArray(e) || (e = [e]), e))
}

function A(e, t, n) {
  return v(i.A.parseAutoModerationSystemMessage, e, t, n)
}

function I(e, t) {
  return t ? S(e) : ("paragraph" === e[0].type && e[0].content instanceof Array && (e[0].content = S(e[0].content)), e)
}

function S(e) {
  if (e.some(e => "emoji" !== e.type && "customEmoji" !== e.type && "soundboard" !== e.type && ("string" != typeof e.content || "" !== e.content.trim()))) return e;
  let t = 0;
  return e.forEach(e => {
    if (("emoji" === e.type || "customEmoji" === e.type || "soundboard" === e.type) && (t += 1), t > f) returnfalse
  }), t > f || e.forEach(e => {
    e.jumboable = true
  }), e
}

function T(e, t) {
  return t ? N(e) : "paragraph" === e[0].type && e[0].content instanceof Array && N(e[0].content)
}

function C(e, t) {
  if (e instanceof Array) return e.some(e => C(e, t));
  let n = t(e);
  return null != n ? n : e.content instanceof Array ? C(e.content, t) : e.items instanceof Array && e.items.some(e => C(e, t))
}

function N(e) {
  return C(e, e => "spoiler" === e.type ? C(e, e => "link" === e.type || "attachmentLink" === e.type || null) : null)
}

function w(e, t) {
  if (1 !== e.length || 1 !== t.length) return e;
  let n = e[0],
    r = t[0];
  return ("link" === n.type || "attachmentLink" === n.type) && p.has(r.type) && (0, a.NV)(r) ? [] : e
}

function R(e) {
  return e.forEach(e => {
    _.has(e.type) && null != e.content && (Array.isArray(e.content) ? R(e.content) : "string" == typeof e.content ? e.content = e.content.replace(/\n/g, " ") : o.A.captureMessage("AST node type:".concat(e.type, " with content typeof ").concat(typeof e.content, ". Keys ").concat(Object.keys(e))))
  }), e
}