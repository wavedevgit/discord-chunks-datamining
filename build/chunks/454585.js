/** Chunk was on web.js **/
/** chunk id: 454585, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
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
let p = null;

function _(e, t) {
  let n = {};
  return null != e.mention && null != p && (n = {
    mention: p
  }), (0, l.Z)([e, ...t, n])
}
p = require("./878611.jsx").Z;
let m = {
    enableBuildOverrides: false,
    enableEmojiClick: true
  },
  h = _(Chunk428595.Z.RULES, [(0, Chunk691424.Z)({
    enableBuildOverrides: true
  })]),
  g = i().omit(_(Chunk428595.Z.RULES, [(0, Chunk691424.Z)(m)]), "paragraph", "newline"),
  E = _(Chunk428595.Z.CHANNEL_TOPIC_RULES, [(0, Chunk691424.Z)(f(u({}, m), {
    emojiTooltipPosition: "bottom"
  })), {
    codeBlock: {
      react: Chunk428595.Z.RULES.text.react
    }
  }]),
  b = _(Chunk428595.Z.VOICE_CHANNEL_STATUS_RULES, [(0, Chunk691424.Z)(f(u({}, m), {
    enableEmojiClick: false
  }))]),
  y = _(Chunk428595.Z.EMBED_TITLE_RULES, [(0, Chunk691424.Z)(m)]),
  O = i().omit(_(Chunk428595.Z.EMBED_TITLE_RULES, [(0, Chunk691424.Z)(m)]), ["url", "autolink", "link"]),
  v = _(Chunk428595.Z.INLINE_REPLY_RULES, [(0, Chunk691424.Z)(m)]),
  S = _(Chunk428595.Z.GUILD_VERIFICATION_FORM_RULES, [(0, Chunk691424.Z)(m)]),
  I = _(Chunk428595.Z.GUILD_EVENT_RULES, [(0, Chunk691424.Z)(m)]),
  T = _(Chunk428595.Z.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, Chunk691424.Z)(m)]),
  C = i().omit(_(Chunk428595.Z.RULES, [(0, Chunk691424.Z)(m)]), "paragraph", "newline", "strong", "codeBlock", "inlineCode", "u", "link", "url", "autolink", "list", "heading", "subtext"),
  A = {
    text: Chunk428595.Z.RULES.text
  },
  N = {
    combineAndInjectMentionRule: _,
    createReactRules: Chunk691424.Z,
    defaultReactRuleOptions: m,
    defaultRules: h,
    guildEventRules: I,
    notifCenterV2MessagePreviewRules: C,
    lockscreenWidgetMessageRules: A,
    astParserFor: Chunk25209._p,
    reactParserFor: Chunk25209.w4,
    parse: Chunk25209.w4(h),
    parseTopic: (e, t, n, r) => a.w4(E)(e, t, u({
      allowLinks: true
    }, n), r),
    parseVoiceChannelStatus: Chunk25209.w4(b),
    parseEmbedTitle: Chunk25209.w4(y),
    parseEmbedTitleWithoutLinks: Chunk25209.w4(O),
    parseInlineReply: Chunk25209.w4(v),
    parseGuildVerificationFormRule: Chunk25209.w4(S),
    parseGuildEventDescription: Chunk25209.w4(I),
    parseAutoModerationSystemMessage: Chunk25209.w4(T),
    parseForumPostGuidelines: Chunk25209.w4(g),
    parseToAST: Chunk25209._p(h),
    parseTopicToAST: Chunk25209._p(E),
    parseEmbedTitleToAST: Chunk25209._p(y),
    parseEmbedTitleWithoutLinksToAST: Chunk25209._p(O),
    parseInlineReplyToAST: Chunk25209._p(v),
    parseAutoModerationSystemMessageToAST: Chunk25209._p(T)
  }