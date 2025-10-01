/** Chunk was on web.js **/
/** chunk id: 152089, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FW: () => f,
  fZ: () => p,
  py: () => h
}), require("./388685.js"), require("./415506.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk911969 = require("./911969.js"),
  Chunk581364 = require("./581364.js"),
  Chunk752305 = require("./752305.js"),
  Chunk255963 = require("./255963.js"),
  Chunk365704 = require("./365704.js"),
  Chunk590921 = require("./590921.js"),
  Chunk185923 = require("./185923.js");

function f(e, t) {
  var n;
  let {
    activeCommandOption: r,
    canMentionUsers: i = true,
    canMentionRoles: l = true,
    canMentionChannels: c = true,
    canMentionEveryone: d,
    useNewSlashCommands: f,
    canOnlyUseTextCommands: _,
    canSendStickers: p,
    canSendSoundmoji: h,
    hideMentionDescription: m,
    hidePersonalInformation: g,
    type: E,
    emojiIntention: b,
    editorRef: y,
    onSendMessage: O,
    onSendSticker: v,
    setValue: I,
    isEditorIdle: T
  } = e, {
    isVisible: S
  } = t, A = {
    mentions: {
      channel: u.nS.DENY,
      global: u.VV.DENY,
      role: u.Fw.DENY,
      user: u.h3.DENY
    },
    commands: u.L8.DISABLED,
    allowStickers: true === p,
    allowSoundmoji: true === h,
    forNonStringCommandOption: null != r && r.type !== a.jw.STRING,
    hideMentionDescription: true === m,
    hidePersonalInformation: true === g,
    chatInputType: E,
    emojiIntention: b,
    sendMessage: O,
    sendSticker: v,
    isEditorIdle: T,
    isVisible: S,
    insertText: function(e, t) {
      var n;
      let r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
      null == (n = y.current) || n.insertAutocomplete(e, null != t ? t : e, r)
    },
    replaceText: (e, t) => {
      I(e, null != t ? t : (0, s.JM)(e))
    },
    insertAutocompleteInput: e => {
      var t;
      null == (t = y.current) || t.insertInlineAutocompleteElement(e)
    },
    replaceInlineInput: (e, t, n) => {
      var r;
      null == (r = y.current) || r.replaceInlineAutocompleteInput(e, t, null != n ? n : t)
    },
    getCommandOptionValues: () => {
      var e;
      return null == (e = y.current) ? true : e.getCommandOptionValues()
    }
  };
  if (null != r) {
    let e = (0, o.$z)(r);
    e.canMentionChannels && (A.mentions.channel = u.nS.ALLOW_SELECTABLE), e.canMentionEveryone && (A.mentions.global = e.canMentionHere ? u.VV.ALLOW_EVERYONE_OR_HERE : u.VV.ALLOW_EVERYONE), e.canMentionRoles && (A.mentions.role = e.canMentionNonMentionableRoles ? u.Fw.ALLOW_ALL : u.Fw.ALLOW_MENTIONABLE), e.canMentionUsers && (A.mentions.user = e.canMentionAnyGuildUser ? u.h3.ALLOW_GUILD : u.h3.ALLOW_CHANNEL), A.hideMentionDescription = true
  } else c && (A.mentions.channel = u.nS.ALLOW_SELECTABLE), l && (A.mentions.role = u.Fw.ALLOW_MENTIONABLE), i && (A.mentions.user = u.h3.ALLOW_CHANNEL), d && (A.mentions.global = u.VV.ALLOW_EVERYONE_OR_HERE);
  return (null == (n = E.commands) ? true : n.enabled) && (f ? A.commands = _ ? u.L8.NEW_TEXT_ONLY : u.L8.NEW : A.commands = u.L8.OLD_BUILT_INS), null != r && null != r.channelTypes && (A.allowedChannelTypes = r.channelTypes), A
}

function _(e) {
  let {
    type: t,
    channel: n,
    guild: r,
    query: i,
    isAtStart: a,
    options: o
  } = e, s = c.W[t];
  if (null != s.sentinel) {
    if (!i.startsWith(s.sentinel)) returnfalse;
    i = i.substring(s.sentinel.length)
  }
  return null == s.matches || !!s.matches(n, r, i, a, o)
}

function p(e) {
  let {
    channel: t,
    guild: n,
    options: r,
    currentWord: a,
    currentWordIsAtStart: o,
    fullWord: s,
    textValue: f,
    optionText: p,
    parentAutocompleteInputType: h,
    parentAutocompleteInputValue: m
  } = e, g = null;
  for (let e of c.R) {
    var E, b, y, O, v, I;
    let T = c.W[e];
    if (e === u.eq.GIFS || e === u.eq.CHOICES) {
      if (r.commands === u.L8.OLD_BUILT_INS) {
        if (_({
            type: e,
            channel: t,
            guild: n,
            query: f,
            isAtStart: false,
            options: r
          })) {
          g = {
            type: e,
            typeInfo: T,
            query: f
          };
          break
        }
      } else if (_({
          type: e,
          channel: t,
          guild: n,
          query: p,
          isAtStart: false,
          options: r
        })) return {
        type: e,
        typeInfo: T,
        query: p
      }
    } else if (e === u.eq.STICKERS) {
      if (_({
          type: e,
          channel: t,
          guild: n,
          query: p,
          isAtStart: false,
          options: r
        })) return {
        type: e,
        typeInfo: T,
        query: p
      }
    } else if (e === u.eq.COMMANDS && r.commands !== u.L8.OLD_BUILT_INS) {
      if (_({
          type: e,
          channel: t,
          guild: n,
          query: f,
          isAtStart: true,
          options: r
        })) {
        g = {
          type: e,
          typeInfo: T,
          query: f.substring(null != (b = null == (E = T.sentinel) ? true : E.length) ? b : 0)
        };
        break
      }
    } else if (e === u.eq.LEGACY_COMMANDS) {
      if (_({
          type: e,
          channel: t,
          guild: n,
          query: f,
          isAtStart: o,
          options: r
        })) {
        g = {
          type: e,
          typeInfo: T,
          query: f
        };
        break
      }
    } else if (e === u.eq.EMOJIS_AND_STICKERS) {
      if (null != a && a.length > 0 && (0, l.x)(d.qR.AutocompleteTyped), null != a && _({
          type: e,
          channel: t,
          guild: n,
          query: a,
          isAtStart: o,
          options: r
        })) {
        g = {
          type: e,
          typeInfo: T,
          query: a.substring(null != (O = null == (y = T.sentinel) ? true : y.length) ? O : 0)
        };
        break
      }
    } else if (null != T.autocompleteInputElementType) T.autocompleteInputElementType === h && (i()(null != m, "parentAutocompleteInputValue is null, but we're in an inline autocomplete object"), g = {
      type: e,
      typeInfo: T,
      query: m
    });
    else {
      let i = T.useFullWord && null != s ? s : a;
      if (null != i && _({
          type: e,
          channel: t,
          guild: n,
          query: i,
          isAtStart: o,
          options: r
        })) {
        g = {
          type: e,
          typeInfo: T,
          query: i.substring(null != (I = null == (v = T.sentinel) ? true : v.length) ? I : 0)
        };
        break
      }
    }
  }
  return null == g ? null : (g.query = g.query.toLocaleLowerCase(), g)
}

function h(e, t) {
  let n;
  if (null == t || null == e) return null;
  if (null != e.choices || e.autocomplete) n = u.eq.CHOICES;
  else switch (e.type) {
    case a.jw.BOOLEAN:
      n = u.eq.CHOICES;
      break;
    case a.jw.CHANNEL:
      n = u.eq.CHANNELS;
      break;
    case a.jw.ROLE:
    case a.jw.USER:
    case a.jw.MENTIONABLE:
      n = u.eq.MENTIONS;
      break;
    default:
      return null
  }
  let r = c.W[n];
  return {
    type: n,
    typeInfo: r,
    query: t
  }
}