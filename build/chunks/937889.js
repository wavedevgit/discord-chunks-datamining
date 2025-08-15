/** Chunk was on 25292 **/
/** chunk id: 937889, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => d,
  k$: () => f,
  p6: () => k,
  rs: () => g
}), require("./388685.js"), require("./781311.js"), require("./704826.js"), require("./35282.js"), require("./865427.js");
var Chunk830121 = require("./830121.js"),
  Chunk202131 = require("./202131.js"),
  Chunk454585 = require("./454585.js"),
  Chunk408433 = require("./408433.js"),
  Chunk960048 = require("./960048.js"),
  Chunk981631 = require("./981631.js");
let u = new Set([Chunk981631.hBH.IMAGE, Chunk981631.hBH.GIFV]),
  l = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);

function g(e, t) {
  var n, r, i;
  let o = k({
      channelId: e.channel_id,
      messageId: e.id,
      renderOptions: t
    }),
    c = null != e.webhookId;
  return r = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({}, o), i = i = {
    allowLinks: c || o.allowLinks,
    allowEmojiLinks: c,
    mentionChannels: e.mentionChannels,
    soundboardSounds: null != (n = e.soundboardSounds) ? n : []
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(i)).forEach(function(e) {
    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
  }), r
}

function k(e) {
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
    forceWhite: !!r.forceWhite
  }
}

function d(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
  return function(e, t, n) {
    var o;
    let {
      toAST: s = false,
      hideSimpleEmbedContent: k = true,
      formatInline: d = false,
      postProcessor: f,
      shouldFilterKeywords: b,
      contentMessage: m
    } = n, y = false, w = (null != m ? m : t).content, j = e(b ? (0, i.N)(w, {
      escapeReplacement: true,
      messageId: t.id,
      channelId: t.channel_id,
      authorId: null == (o = t.author) ? true : o.id
    }) : w, true, g(t, n), (e, n) => {
      var i, o;
      return Array.isArray(e) || (e = [e]), k && (e = function(e, t) {
        if (1 !== e.length || 1 !== t.length) return e;
        let n = e[0],
          r = t[0];
        return ("link" === n.type || "attachmentLink" === n.type) && u.has(r.type) && (0, c.dY)(r) ? [] : e
      }(e, (null != m ? m : t).embeds)), d || (i = e, e = n ? h(i) : ("paragraph" === i[0].type && i[0].content instanceof Array && (i[0].content = h(i[0].content)), i)), e = function(e) {
        let t = e.some(e => "link" !== e.type);
        return e.filter(e => {
          let n = "link" === e.type,
            i = null != e.target ? (0, r.el)(e.target) : null;
          return !(n && null != i && !t)
        })
      }(e), t.embeds.length > 0 && (o = e, y = n ? p(o) : "paragraph" === o[0].type && o[0].content instanceof Array && p(o[0].content)), d && (e = function e(t) {
        return t.forEach(t => {
          l.has(t.type) && null != t.content && (Array.isArray(t.content) ? e(t.content) : "string" == typeof t.content ? t.content = t.content.replace(/\n/g, " ") : a.Z.captureMessage("AST node type:".concat(t.type, " with content typeof ").concat(typeof t.content, ". Keys ").concat(Object.keys(t))))
        }), t
      }(e)), null != f && (e = f(e, n)), e
    });
    return {
      hasSpoilerEmbeds: y,
      content: j
    }
  }(t.formatInline ? o.Z.parseInlineReply : o.Z.parse, e, t)
}

function f(e, t, n) {
  return (0, o.Z.parseAutoModerationSystemMessage)(e, true, {
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
    highlightWord: t,
    disableAnimatedEmoji: false,
    channelId: n,
    muted: false
  }, e => (Array.isArray(e) || (e = [e]), e))
}

function h(e) {
  if (e.some(e => "emoji" !== e.type && "customEmoji" !== e.type && "soundboard" !== e.type && ("string" != typeof e.content || "" !== e.content.trim()))) return e;
  let t = 0;
  return e.forEach(e => {
    if (("emoji" === e.type || "customEmoji" === e.type || "soundboard" === e.type) && (t += 1), t > 30) returnfalse
  }), t > 30 || e.forEach(e => {
    e.jumboable = true
  }), e
}

function b(e, t) {
  if (e instanceof Array) return e.some(e => b(e, t));
  let n = t(e);
  return null != n ? n : e.content instanceof Array ? b(e.content, t) : e.items instanceof Array && e.items.some(e => b(e, t))
}

function p(e) {
  return b(e, e => "spoiler" === e.type ? b(e, e => "link" === e.type || "attachmentLink" === e.type || null) : null)
}