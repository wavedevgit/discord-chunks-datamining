/** Chunk was on web.js **/
/** chunk id: 937889, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => y,
  k$: () => v,
  p6: () => g,
  rs: () => h
}), require("./388685.js"), require("./781311.js"), require("./704826.js"), require("./35282.js");
var Chunk25209 = require("./25209.js");
require("./865427.js");
var Chunk830121 = require("./830121.js");
require("./922699.js");
var Chunk454585 = require("./454585.js"),
  Chunk408433 = require("./408433.js"),
  Chunk960048 = require("./960048.js"),
  Chunk981631 = require("./981631.js");

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
  _ = new Set([Chunk981631.hBH.IMAGE, Chunk981631.hBH.GIFV]),
  m = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);

function h(e, t) {
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
  } = n, c = false, u = false, d = e((null != l ? l : t).content, true, h(t, n), (e, n) => (Array.isArray(e) || (e = [e]), e.length >= r.dc - 10 && (u = true), a && (e = N(e, (null != l ? l : t).embeds)), o || (e = S(e, n)), e = b(e), t.embeds.length > 0 && (c = T(e, n)), o && (e = P(e)), null != s && (e = s(e, n)), e));
  return {
    hasSpoilerEmbeds: c,
    content: d,
    hasBailedAst: u
  }
}

function b(e) {
  let t = e.some(e => "link" !== e.type);
  return e.filter(e => {
    let n = "link" === e.type,
      r = null != (null != e.target ? (0, i.el)(e.target) : null);
    return !(n && r && !t)
  })
}

function y(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
  return E(t.formatInline ? a.Z.parseInlineReply : a.Z.parse, e, t)
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
  return O(a.Z.parseAutoModerationSystemMessage, e, t, n)
}

function S(e, t) {
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

function T(e, t) {
  return t ? A(e) : "paragraph" === e[0].type && e[0].content instanceof Array && A(e[0].content)
}

function C(e, t) {
  if (e instanceof Array) return e.some(e => C(e, t));
  let n = t(e);
  return null != n ? n : e.content instanceof Array ? C(e.content, t) : e.items instanceof Array && e.items.some(e => C(e, t))
}

function A(e) {
  return C(e, e => "spoiler" === e.type ? C(e, e => "link" === e.type || "attachmentLink" === e.type || null) : null)
}

function N(e, t) {
  if (1 !== e.length || 1 !== t.length) return e;
  let n = e[0],
    r = t[0];
  return ("link" === n.type || "attachmentLink" === n.type) && _.has(r.type) && (0, o.dY)(r) ? [] : e
}

function P(e) {
  return e.forEach(e => {
    m.has(e.type) && null != e.content && (Array.isArray(e.content) ? P(e.content) : "string" == typeof e.content ? e.content = e.content.replace(/\n/g, " ") : s.Z.captureMessage("AST node type:".concat(e.type, " with content typeof ").concat(typeof e.content, ". Keys ").concat(Object.keys(e))))
  }), e
}