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
  var n, r;
  let {
    activeCommandOption: i,
    canMentionUsers: l = true,
    canMentionRoles: c = true,
    canMentionChannels: d = true,
    canMentionEveryone: f,
    canMentionOtherGlobals: _ = true,
    useNewSlashCommands: p,
    canOnlyUseTextCommands: h,
    canSendStickers: m,
    canSendSoundmoji: g,
    hideMentionDescription: E,
    hidePersonalInformation: b,
    type: y,
    emojiIntention: O,
    editorRef: v,
    onSendMessage: I,
    onSendSticker: T,
    setValue: S,
    isEditorIdle: A,
    currentFullWord: C
  } = e, {
    query: N
  } = t, R = {
    mentions: {
      channel: u.nS.DENY,
      global: u.VV.DENY,
      role: u.Fw.DENY,
      user: u.h3.DENY,
      otherGlobals: false
    },
    commands: u.L8.DISABLED,
    allowStickers: true === m,
    allowSoundmoji: true === g,
    forNonStringCommandOption: null != i && i.type !== a.jw.STRING,
    hideMentionDescription: true === E,
    hidePersonalInformation: true === b,
    chatInputType: y,
    emojiIntention: O,
    sendMessage: I,
    sendSticker: T,
    currentFullWord: C,
    isEditorIdle: A,
    currentAutocompleteType: null != (r = null == N ? true : N.type) ? r : null,
    insertText: function(e, t) {
      var n;
      let r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
      null == (n = v.current) || n.insertAutocomplete(e, null != t ? t : e, r)
    },
    replaceText: (e, t) => {
      S(e, null != t ? t : (0, s.JM)(e))
    },
    insertAutocompleteInput: e => {
      var t;
      null == (t = v.current) || t.insertInlineAutocompleteElement(e)
    },
    replaceInlineInput: (e, t, n) => {
      var r;
      null == (r = v.current) || r.replaceInlineAutocompleteInput(e, t, null != n ? n : t)
    },
    getCommandOptionValues: () => {
      var e;
      return null == (e = v.current) ? true : e.getCommandOptionValues()
    }
  };
  if (null != i) {
    let e = (0, o.$z)(i);
    e.canMentionChannels && (R.mentions.channel = u.nS.ALLOW_SELECTABLE), e.canMentionEveryone && (R.mentions.global = e.canMentionHere ? u.VV.ALLOW_EVERYONE_OR_HERE : u.VV.ALLOW_EVERYONE), e.canMentionRoles && (R.mentions.role = e.canMentionNonMentionableRoles ? u.Fw.ALLOW_ALL : u.Fw.ALLOW_MENTIONABLE), e.canMentionUsers && (R.mentions.user = e.canMentionAnyGuildUser ? u.h3.ALLOW_GUILD : u.h3.ALLOW_CHANNEL), e.canMentionOtherGlobals && (R.mentions.otherGlobals = true), R.hideMentionDescription = true
  } else d && (R.mentions.channel = u.nS.ALLOW_SELECTABLE), c && (R.mentions.role = u.Fw.ALLOW_MENTIONABLE), l && (R.mentions.user = u.h3.ALLOW_CHANNEL), f && (R.mentions.global = u.VV.ALLOW_EVERYONE_OR_HERE), _ && (R.mentions.otherGlobals = true);
  return (null == (n = y.commands) ? true : n.enabled) && (p ? R.commands = h ? u.L8.NEW_TEXT_ONLY : u.L8.NEW : R.commands = u.L8.OLD_BUILT_INS), null != i && null != i.channelTypes && (R.allowedChannelTypes = i.channelTypes), R
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
    textValue: s,
    optionText: f,
    parentAutocompleteInputType: p,
    parentAutocompleteInputValue: h
  } = e, m = null;
  for (let e of c.R) {
    var g, E, b, y, O, v;
    let I = c.W[e];
    if (null != p) {
      if (I.autocompleteInputElementType === p) {
        i()(null != h, "parentAutocompleteInputValue is null, but we're in an inline autocomplete object"), m = {
          type: e,
          typeInfo: I,
          query: h
        };
        break
      }
      continue
    }
    if (null == I.autocompleteInputElementType) {
      if (e === u.eq.GIFS || e === u.eq.CHOICES) {
        if (r.commands === u.L8.OLD_BUILT_INS) {
          if (_({
              type: e,
              channel: t,
              guild: n,
              query: s,
              isAtStart: false,
              options: r
            })) {
            m = {
              type: e,
              typeInfo: I,
              query: s
            };
            break
          }
        } else if (_({
            type: e,
            channel: t,
            guild: n,
            query: f,
            isAtStart: false,
            options: r
          })) return {
          type: e,
          typeInfo: I,
          query: f
        }
      } else if (e === u.eq.STICKERS) {
        if (_({
            type: e,
            channel: t,
            guild: n,
            query: f,
            isAtStart: false,
            options: r
          })) return {
          type: e,
          typeInfo: I,
          query: f
        }
      } else if (e === u.eq.COMMANDS && r.commands !== u.L8.OLD_BUILT_INS) {
        if (_({
            type: e,
            channel: t,
            guild: n,
            query: s,
            isAtStart: true,
            options: r
          })) {
          m = {
            type: e,
            typeInfo: I,
            query: s.substring(null != (E = null == (g = I.sentinel) ? true : g.length) ? E : 0)
          };
          break
        }
      } else if (e === u.eq.LEGACY_COMMANDS) {
        if (_({
            type: e,
            channel: t,
            guild: n,
            query: s,
            isAtStart: o,
            options: r
          })) {
          m = {
            type: e,
            typeInfo: I,
            query: s
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
          m = {
            type: e,
            typeInfo: I,
            query: a.substring(null != (y = null == (b = I.sentinel) ? true : b.length) ? y : 0)
          };
          break
        }
      } else if (null != a && _({
          type: e,
          channel: t,
          guild: n,
          query: a,
          isAtStart: o,
          options: r
        })) {
        m = {
          type: e,
          typeInfo: I,
          query: a.substring(null != (v = null == (O = I.sentinel) ? true : O.length) ? v : 0)
        };
        break
      }
    }
  }
  return null == m ? null : (m.query = m.query.toLocaleLowerCase(), m)
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