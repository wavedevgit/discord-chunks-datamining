/** Chunk was on web.js **/
/** chunk id: 56436, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $E: () => f,
  Ny: () => _,
  QC: () => h
}), require("./896048.js"), require("./65821.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk155718 = require("./155718.js"),
  Chunk168186 = require("./168186.js"),
  Chunk408018 = require("./408018.js"),
  Chunk189551 = require("./189551.js"),
  Chunk404077 = require("./404077.js"),
  Chunk374803 = require("./374803.js"),
  Chunk307731 = require("./307731.js");

function f(e, t) {
  var n, r;
  let {
    activeCommandOption: i,
    canMentionUsers: l = true,
    canMentionRoles: c = true,
    canMentionChannels: d = true,
    canMentionEveryone: f,
    canMentionOtherGlobals: p = true,
    useNewSlashCommands: _,
    canOnlyUseTextCommands: h,
    canSendStickers: m,
    canSendSoundmoji: g,
    hideMentionDescription: E,
    hidePersonalInformation: y,
    type: b,
    emojiIntention: O,
    editorRef: v,
    onSendMessage: A,
    onSendSticker: I,
    setValue: S,
    isEditorIdle: T,
    currentFullWord: C
  } = e, {
    query: N
  } = t, w = {
    mentions: {
      channel: u.xS.DENY,
      global: u.VN.DENY,
      role: u.eP.DENY,
      user: u.Vf.DENY,
      otherGlobals: false
    },
    commands: u.Ze.DISABLED,
    allowStickers: true === m,
    allowSoundmoji: true === g,
    forNonStringCommandOption: null != i && i.type !== a.n4.STRING,
    hideMentionDescription: true === E,
    hidePersonalInformation: true === y,
    chatInputType: b,
    emojiIntention: O,
    sendMessage: A,
    sendSticker: I,
    currentFullWord: C,
    isEditorIdle: T,
    currentAutocompleteType: null != (n = null == N ? true : N.type) ? n : null,
    insertText: function(e, t) {
      var n;
      let r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
      null == (n = v.current) || n.insertAutocomplete(e, null != t ? t : e, r)
    },
    replaceText: (e, t) => {
      S(e, null != t ? t : (0, s.x7)(e))
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
    let e = (0, o.XM)(i);
    e.canMentionChannels && (w.mentions.channel = u.xS.ALLOW_SELECTABLE), e.canMentionEveryone && (w.mentions.global = e.canMentionHere ? u.VN.ALLOW_EVERYONE_OR_HERE : u.VN.ALLOW_EVERYONE), e.canMentionRoles && (w.mentions.role = e.canMentionNonMentionableRoles ? u.eP.ALLOW_ALL : u.eP.ALLOW_MENTIONABLE), e.canMentionUsers && (w.mentions.user = e.canMentionAnyGuildUser ? u.Vf.ALLOW_GUILD : u.Vf.ALLOW_CHANNEL), e.canMentionOtherGlobals && (w.mentions.otherGlobals = true), w.hideMentionDescription = true
  } else d && (w.mentions.channel = u.xS.ALLOW_SELECTABLE), c && (w.mentions.role = u.eP.ALLOW_MENTIONABLE), l && (w.mentions.user = u.Vf.ALLOW_CHANNEL), f && (w.mentions.global = u.VN.ALLOW_EVERYONE_OR_HERE), p && (w.mentions.otherGlobals = true);
  return (null == (r = b.commands) ? true : r.enabled) && (_ ? w.commands = h ? u.Ze.NEW_TEXT_ONLY : u.Ze.NEW : w.commands = u.Ze.OLD_BUILT_INS), null != i && null != i.channelTypes && (w.allowedChannelTypes = i.channelTypes), w
}

function p(e) {
  let {
    type: t,
    channel: n,
    guild: r,
    query: i,
    isAtStart: a,
    options: o
  } = e, s = c.a[t];
  if (null != s.sentinel) {
    if (!i.startsWith(s.sentinel)) returnfalse;
    i = i.substring(s.sentinel.length)
  }
  return null == s.matches || !!s.matches(n, r, i, a, o)
}

function _(e) {
  let {
    channel: t,
    guild: n,
    options: r,
    currentWord: a,
    currentWordIsAtStart: o,
    textValue: s,
    optionText: f,
    parentAutocompleteInputType: _,
    parentAutocompleteInputValue: h
  } = e, m = null;
  for (let e of c.S) {
    var g, E, y, b, O, v;
    let A = c.a[e];
    if (null != _) {
      if (A.autocompleteInputElementType === _) {
        i()(null != h, "parentAutocompleteInputValue is null, but we're in an inline autocomplete object"), m = {
          type: e,
          typeInfo: A,
          query: h
        };
        break
      }
      continue
    }
    if (null == A.autocompleteInputElementType) {
      if (e === u.DB.GIFS || e === u.DB.CHOICES) {
        if (r.commands === u.Ze.OLD_BUILT_INS) {
          if (p({
              type: e,
              channel: t,
              guild: n,
              query: s,
              isAtStart: false,
              options: r
            })) {
            m = {
              type: e,
              typeInfo: A,
              query: s
            };
            break
          }
        } else if (p({
            type: e,
            channel: t,
            guild: n,
            query: f,
            isAtStart: false,
            options: r
          })) return {
          type: e,
          typeInfo: A,
          query: f
        }
      } else if (e === u.DB.STICKERS) {
        if (p({
            type: e,
            channel: t,
            guild: n,
            query: f,
            isAtStart: false,
            options: r
          })) return {
          type: e,
          typeInfo: A,
          query: f
        }
      } else if (e === u.DB.COMMANDS && r.commands !== u.Ze.OLD_BUILT_INS) {
        if (p({
            type: e,
            channel: t,
            guild: n,
            query: s,
            isAtStart: true,
            options: r
          })) {
          m = {
            type: e,
            typeInfo: A,
            query: s.substring(null != (g = null == (E = A.sentinel) ? true : E.length) ? g : 0)
          };
          break
        }
      } else if (e === u.DB.LEGACY_COMMANDS) {
        if (p({
            type: e,
            channel: t,
            guild: n,
            query: s,
            isAtStart: o,
            options: r
          })) {
          m = {
            type: e,
            typeInfo: A,
            query: s
          };
          break
        }
      } else if (e === u.DB.EMOJIS_AND_STICKERS) {
        if (null != a && a.length > 0 && (0, l.K)(d.Vl.AutocompleteTyped), null != a && p({
            type: e,
            channel: t,
            guild: n,
            query: a,
            isAtStart: o,
            options: r
          })) {
          m = {
            type: e,
            typeInfo: A,
            query: a.substring(null != (y = null == (b = A.sentinel) ? true : b.length) ? y : 0)
          };
          break
        }
      } else if (null != a && p({
          type: e,
          channel: t,
          guild: n,
          query: a,
          isAtStart: o,
          options: r
        })) {
        m = {
          type: e,
          typeInfo: A,
          query: a.substring(null != (O = null == (v = A.sentinel) ? true : v.length) ? O : 0)
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
  if (null != e.choices || e.autocomplete) n = u.DB.CHOICES;
  else switch (e.type) {
    case a.n4.BOOLEAN:
      n = u.DB.CHOICES;
      break;
    case a.n4.CHANNEL:
      n = u.DB.CHANNELS;
      break;
    case a.n4.ROLE:
    case a.n4.USER:
    case a.n4.MENTIONABLE:
      n = u.DB.MENTIONS;
      break;
    default:
      return null
  }
  let r = c.a[n];
  return {
    type: n,
    typeInfo: r,
    query: t
  }
}