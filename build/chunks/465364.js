/** Chunk was on web.js **/
/** chunk id: 465364, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => b,
  Le: () => g,
  Tz: () => v,
  ko: () => m
}), require("./896048.js"), require("./733351.js"), require("./747238.js"), require("./812715.js");
var Chunk436857 = require("./436857.js");
require("./380610.js");
var Chunk833291 = require("./833291.js");
require("./100392.js");
var Chunk46054 = require("./46054.js"),
  Chunk659674 = require("./659674.js"),
  Chunk728458 = require("./728458.js"),
  Chunk652215 = require("./652215.js");

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

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let p = 30,
  _ = new Set([Chunk652215.Auw.IMAGE, Chunk652215.Auw.GIFV]),
  h = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);

function m(e, t) {
  var n;
  let r = g({
      channelId: e.channel_id,
      messageId: e.id,
      renderOptions: t
    }),
    i = null != e.webhookId;
  return f(u({}, r), {
    allowLinks: i || r.allowLinks,
    allowEmojiLinks: i,
    mentionChannels: e.mentionChannels,
    soundboardSounds: null != (n = e.soundboardSounds) ? n : []
  })
}

function g(e) {
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

function E(e, t, n) {
  let {
    toAST: i = false,
    hideSimpleEmbedContent: a = true,
    formatInline: o = false,
    postProcessor: s,
    contentMessage: l
  } = n, c = false, u = false, d = (null != l ? l : t).content, f = e(d, true, m(t, n), (e, n) => (Array.isArray(e) || (e = [e]), e.length >= r.t9 - 10 && (u = true, e = [{
    type: "text",
    content: d,
    originalMatch: {
      index: 0,
      0: d
    }
  }]), a && (e = N(e, (null != l ? l : t).embeds)), o || (e = A(e, n)), e = y(e), t.embeds.length > 0 && (c = S(e, n)), o && (e = w(e)), null != s && (e = s(e, n)), e));
  return {
    hasSpoilerEmbeds: c,
    content: f,
    hasBailedAst: u
  }
}

function y(e) {
  let t = e.some(e => "link" !== e.type);
  return e.filter(e => {
    let n = "link" === e.type,
      r = null != (null != e.target ? (0, i.ts)(e.target) : null);
    return !(n && r && !t)
  })
}

function b(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
  return E(t.formatInline ? a.A.parseInlineReply : a.A.parse, e, t)
}

function O(e, t, n, r) {
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

function v(e, t, n) {
  return O(a.A.parseAutoModerationSystemMessage, e, t, n)
}

function A(e, t) {
  return t ? I(e) : ("paragraph" === e[0].type && e[0].content instanceof Array && (e[0].content = I(e[0].content)), e)
}

function I(e) {
  if (e.some(e => "emoji" !== e.type && "customEmoji" !== e.type && "soundboard" !== e.type && ("string" != typeof e.content || "" !== e.content.trim()))) return e;
  let t = 0;
  return e.forEach(e => {
    if (("emoji" === e.type || "customEmoji" === e.type || "soundboard" === e.type) && (t += 1), t > p) returnfalse
  }), t > p || e.forEach(e => {
    e.jumboable = true
  }), e
}

function S(e, t) {
  return t ? C(e) : "paragraph" === e[0].type && e[0].content instanceof Array && C(e[0].content)
}

function T(e, t) {
  if (e instanceof Array) return e.some(e => T(e, t));
  let n = t(e);
  return null != n ? n : e.content instanceof Array ? T(e.content, t) : e.items instanceof Array && e.items.some(e => T(e, t))
}

function C(e) {
  return T(e, e => "spoiler" === e.type ? T(e, e => "link" === e.type || "attachmentLink" === e.type || null) : null)
}

function N(e, t) {
  if (1 !== e.length || 1 !== t.length) return e;
  let n = e[0],
    r = t[0];
  return ("link" === n.type || "attachmentLink" === n.type) && _.has(r.type) && (0, o.NV)(r) ? [] : e
}

function w(e) {
  return e.forEach(e => {
    h.has(e.type) && null != e.content && (Array.isArray(e.content) ? w(e.content) : "string" == typeof e.content ? e.content = e.content.replace(/\n/g, " ") : s.A.captureMessage("AST node type:".concat(e.type, " with content typeof ").concat(typeof e.content, ". Keys ").concat(Object.keys(e))))
  }), e
}