/** Chunk was on web.js **/
/** chunk id: 46054, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => R
}), require("./896048.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk436857 = require("./436857.js"),
  Chunk999443 = require("./999443.jsx"),
  Chunk542664 = require("./542664.js"),
  Chunk551965 = require("./551965.js");

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
p = require("./937767.jsx").A;
let _ = ["url", "autolink", "link", "mailto", "tel"];

function h(e, t) {
  let n = {};
  return null != e.mention && null != p && (n = {
    mention: p
  }), (0, l.A)([e, ...t, n])
}
let m = {
    enableBuildOverrides: false,
    enableEmojiClick: true
  },
  g = h(Chunk542664.A.RULES, [(0, Chunk999443.A)({
    enableBuildOverrides: true
  })]),
  E = i().omit(h(Chunk542664.A.RULES, [(0, Chunk999443.A)(m)]), "paragraph", "newline"),
  b = h(Chunk542664.A.CHANNEL_TOPIC_RULES, [(0, Chunk999443.A)(f(u({}, m), {
    emojiTooltipPosition: "bottom"
  })), {
    codeBlock: {
      react: Chunk542664.A.RULES.text.react
    }
  }]),
  y = h(Chunk542664.A.VOICE_CHANNEL_STATUS_RULES, [(0, Chunk999443.A)(f(u({}, m), {
    enableEmojiClick: false
  }))]),
  O = h(Chunk542664.A.EMBED_TITLE_RULES, [(0, Chunk999443.A)(m)]),
  A = i().omit(h(Chunk542664.A.EMBED_TITLE_RULES, [(0, Chunk999443.A)(m)]), _),
  v = h(Chunk542664.A.INLINE_REPLY_RULES, [(0, Chunk999443.A)(m)]),
  S = h(Chunk542664.A.GUILD_VERIFICATION_FORM_RULES, [(0, Chunk999443.A)(m)]),
  I = h(Chunk542664.A.GUILD_EVENT_RULES, [(0, Chunk999443.A)(m)]),
  T = h(Chunk542664.A.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, Chunk999443.A)(m)]),
  C = i().omit(h(Chunk542664.A.RULES, [(0, Chunk999443.A)(m)]), "paragraph", "newline", "strong", "codeBlock", "inlineCode", "u", "list", "heading", "subtext", ..._),
  N = {
    text: Chunk542664.A.RULES.text
  },
  R = {
    combineAndInjectMentionRule: h,
    createReactRules: Chunk999443.A,
    defaultReactRuleOptions: m,
    defaultRules: g,
    guildEventRules: I,
    notifCenterV2MessagePreviewRules: C,
    lockscreenWidgetMessageRules: N,
    astParserFor: Chunk436857.X,
    reactParserFor: Chunk436857.aV,
    parse: Chunk436857.aV(g),
    parseTopic: (e, t, n, r) => a.aV(b)(e, t, u({
      allowLinks: true
    }, n), r),
    parseVoiceChannelStatus: Chunk436857.aV(y),
    parseEmbedTitle: Chunk436857.aV(O),
    parseEmbedTitleWithoutLinks: Chunk436857.aV(A),
    parseInlineReply: Chunk436857.aV(v),
    parseGuildVerificationFormRule: Chunk436857.aV(S),
    parseGuildEventDescription: Chunk436857.aV(I),
    parseAutoModerationSystemMessage: Chunk436857.aV(T),
    parseForumPostGuidelines: Chunk436857.aV(E),
    parseToAST: Chunk436857.X(g),
    parseTopicToAST: Chunk436857.X(b),
    parseEmbedTitleToAST: Chunk436857.X(O),
    parseEmbedTitleWithoutLinksToAST: Chunk436857.X(A),
    parseInlineReplyToAST: Chunk436857.X(v),
    parseAutoModerationSystemMessageToAST: Chunk436857.X(T)
  }