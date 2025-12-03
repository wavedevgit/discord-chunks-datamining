/** Chunk was on web.js **/
/** chunk id: 937889, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => b,
  k$: () => O,
  p6: () => h,
  rs: () => m
}), require("./388685.js"), require("./781311.js"), require("./704826.js"), require("./35282.js"), require("./865427.js");
var Chunk830121 = require("./830121.js");
require("./922699.js");
var Chunk454585 = require("./454585.js"),
  Chunk408433 = require("./408433.js"),
  Chunk960048 = require("./960048.js"),
  Chunk981631 = require("./981631.js");

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
  p = new Set([Chunk981631.hBH.IMAGE, Chunk981631.hBH.GIFV]),
  _ = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);

function m(e, t) {
  var n;
  let r = h({
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

function h(e) {
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
  } = n, l = false, c = e((null != s ? s : t).content, true, m(t, n), (e, n) => (Array.isArray(e) || (e = [e]), i && (e = C(e, (null != s ? s : t).embeds)), a || (e = v(e, n)), e = E(e), t.embeds.length > 0 && (l = I(e, n)), a && (e = N(e)), null != o && (e = o(e, n)), e));
  return {
    hasSpoilerEmbeds: l,
    content: c
  }
}

function E(e) {
  let t = e.some(e => "link" !== e.type);
  return e.filter(e => {
    let n = "link" === e.type,
      i = null != (null != e.target ? (0, r.el)(e.target) : null);
    return !(n && i && !t)
  })
}

function b(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
  return g(t.formatInline ? i.Z.parseInlineReply : i.Z.parse, e, t)
}

function y(e, t, n, r) {
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

function O(e, t, n) {
  return y(i.Z.parseAutoModerationSystemMessage, e, t, n)
}

function v(e, t) {
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

function I(e, t) {
  return t ? A(e) : "paragraph" === e[0].type && e[0].content instanceof Array && A(e[0].content)
}

function T(e, t) {
  if (e instanceof Array) return e.some(e => T(e, t));
  let n = t(e);
  return null != n ? n : e.content instanceof Array ? T(e.content, t) : e.items instanceof Array && e.items.some(e => T(e, t))
}

function A(e) {
  return T(e, e => "spoiler" === e.type ? T(e, e => "link" === e.type || "attachmentLink" === e.type || null) : null)
}

function C(e, t) {
  if (1 !== e.length || 1 !== t.length) return e;
  let n = e[0],
    r = t[0];
  return ("link" === n.type || "attachmentLink" === n.type) && p.has(r.type) && (0, a.dY)(r) ? [] : e
}

function N(e) {
  return e.forEach(e => {
    _.has(e.type) && null != e.content && (Array.isArray(e.content) ? N(e.content) : "string" == typeof e.content ? e.content = e.content.replace(/\n/g, " ") : o.Z.captureMessage("AST node type:".concat(e.type, " with content typeof ").concat(typeof e.content, ". Keys ").concat(Object.keys(e))))
  }), e
}