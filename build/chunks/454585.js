/** Chunk was on web.js **/
/** chunk id: 454585, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk25209 = require("./25209.js"),
  Chunk691424 = require("./691424.jsx"),
  Chunk428595 = require("./428595.js"),
  Chunk364458 = require("./364458.js");

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
let _ = null;

function p(e, t) {
  let n = {};
  return null != e.mention && null != _ && (n = {
    mention: _
  }), (0, l.Z)([e, ...t, n])
}
_ = require("./878611.jsx").Z;
let h = {
    enableBuildOverrides: false,
    enableEmojiClick: true
  },
  m = p(Chunk428595.Z.RULES, [(0, Chunk691424.Z)({
    enableBuildOverrides: true
  })]),
  g = i().omit(p(Chunk428595.Z.RULES, [(0, Chunk691424.Z)(h)]), "paragraph", "newline"),
  E = p(Chunk428595.Z.CHANNEL_TOPIC_RULES, [(0, Chunk691424.Z)(f(u({}, h), {
    emojiTooltipPosition: "bottom"
  })), {
    codeBlock: {
      react: Chunk428595.Z.RULES.text.react
    }
  }]),
  b = p(Chunk428595.Z.VOICE_CHANNEL_STATUS_RULES, [(0, Chunk691424.Z)(f(u({}, h), {
    enableEmojiClick: false
  }))]),
  y = p(Chunk428595.Z.EMBED_TITLE_RULES, [(0, Chunk691424.Z)(h)]),
  O = p(Chunk428595.Z.INLINE_REPLY_RULES, [(0, Chunk691424.Z)(h)]),
  v = p(Chunk428595.Z.GUILD_VERIFICATION_FORM_RULES, [(0, Chunk691424.Z)(h)]),
  I = p(Chunk428595.Z.GUILD_EVENT_RULES, [(0, Chunk691424.Z)(h)]),
  T = p(Chunk428595.Z.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, Chunk691424.Z)(h)]),
  S = i().omit(p(Chunk428595.Z.RULES, [(0, Chunk691424.Z)(h)]), "paragraph", "newline", "strong", "codeBlock", "inlineCode", "u", "link", "url", "autolink", "list", "heading", "subtext"),
  A = {
    text: Chunk428595.Z.RULES.text
  },
  C = {
    combineAndInjectMentionRule: p,
    createReactRules: Chunk691424.Z,
    defaultReactRuleOptions: h,
    defaultRules: m,
    guildEventRules: I,
    notifCenterV2MessagePreviewRules: S,
    lockscreenWidgetMessageRules: A,
    astParserFor: Chunk25209._p,
    reactParserFor: Chunk25209.w4,
    parse: Chunk25209.w4(m),
    parseTopic: (e, t, n, r) => a.w4(E)(e, t, u({
      allowLinks: true
    }, n), r),
    parseVoiceChannelStatus: Chunk25209.w4(b),
    parseEmbedTitle: Chunk25209.w4(y),
    parseInlineReply: Chunk25209.w4(O),
    parseGuildVerificationFormRule: Chunk25209.w4(v),
    parseGuildEventDescription: Chunk25209.w4(I),
    parseAutoModerationSystemMessage: Chunk25209.w4(T),
    parseForumPostGuidelines: Chunk25209.w4(g),
    parseToAST: Chunk25209._p(m),
    parseTopicToAST: Chunk25209._p(E),
    parseEmbedTitleToAST: Chunk25209._p(y),
    parseInlineReplyToAST: Chunk25209._p(O),
    parseAutoModerationSystemMessageToAST: Chunk25209._p(T)
  }