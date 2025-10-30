/** Chunk was on web.js **/
/** chunk id: 957730, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => es
}), require("./35282.js"), require("./388685.js"), require("./539854.js"), require("./361932.js"), require("./187205.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk159635 = require("./159635.js"),
  o = require.n(Chunk159635),
  Chunk599149 = require("./599149.js"),
  Chunk933557 = require("./933557.js"),
  Chunk339085 = require("./339085.js"),
  Chunk633302 = require("./633302.js"),
  Chunk627050 = require("./627050.js"),
  Chunk428595 = require("./428595.js"),
  Chunk594199 = require("./594199.js"),
  Chunk11637 = require("./11637.js"),
  Chunk467798 = require("./467798.js"),
  Chunk601070 = require("./601070.js"),
  Chunk695346 = require("./695346.js"),
  Chunk592125 = require("./592125.js"),
  Chunk77498 = require("./77498.js"),
  Chunk984933 = require("./984933.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk483360 = require("./483360.js"),
  Chunk176354 = require("./176354.js"),
  Chunk5192 = require("./5192.js"),
  Chunk51144 = require("./51144.js"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx");

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      M(e, t, n[t])
    })
  }
  return e
}

function j(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function U(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function G(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : null;
  if (t[0] !== e) return null;
  let i = t.substr(e.length);
  return n.sortBy(e => {
    let {
      text: t
    } = e;
    return -t.length
  }).filter(e => {
    let {
      text: n
    } = e;
    return 1 === t.toLowerCase().indexOf(n.toLowerCase())
  }).sortBy(e => {
    let {
      text: t
    } = e;
    return +(t !== i)
  }).map(t => {
    let {
      id: n,
      text: i
    } = t;
    return [e + i, n, r]
  }).first()
}

function B(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : null;
  if (t[0] !== e) return null;
  if ('"' !== t[1]) return G(e, t, n, r);
  let i = 2;
  for (; i < t.length; i++) {
    if ("\\" === t[i]) {
      i++;
      continue
    }
    if ('"' === t[i]) break
  }
  let a = t.substring(0, i + 1),
    o = (0, l.mA)(t.substring(2, i));
  return n.sortBy(e => {
    let {
      text: t
    } = e;
    return -t.length
  }).filter(e => {
    let {
      text: t
    } = e;
    return o === t
  }).map(e => {
    let {
      id: t
    } = e;
    return [a, t, r]
  }).first()
}

function Z(e) {
  return {
    order: e.order,
    match: e.match,
    parse: t => ({
      type: e.type,
      content: t[0]
    })
  }
}

function F(e) {
  return {
    match: o().anyScopeRegex(e),
    parse: e => ({
      type: "text",
      content: e[0]
    })
  }
}
let V = Chunk428595.Z.RULES,
  H = Chunk594199.ZP,
  Y = /^<@!?(\d+)>/,
  W = /^<@&(\d+)>/,
  K = /^<@\$(\d+)>/,
  z = /^<#(\d+)>/,
  q = /^<a?:(\w+):(\d+)>/,
  X = /(@everyone|@here|@Clyde)\b/,
  Q = {
    link: Z(o().defaultRules.link),
    autolink: Z(o().defaultRules.autolink),
    url: Z(o().defaultRules.url),
    inlineCode: Z(V.inlineCode),
    codeBlock: Z(V.codeBlock),
    rawUserMention: F(Y),
    rawRoleMention: F(W),
    rawChannelMention: F(z),
    rawEmoji: F(q),
    mention: {
      match(e, t, n) {
        let r = n.split(" ").pop() + e;
        if (/^[^ ]+@[^ ]+\.[^ .]+/.test(r)) return null;
        let i = G("@", e, t.users, "mention");
        if (i || (i = G("@", e, t.mentionableRoles, "roleMention"))) return i;
        if (!(i = G("@", e, t.users.map(e => U(k({}, e), {
            text: e.text.split("#")[0]
          })), "mention"))) return null;
        let a = X.exec(e);
        if (null != a && i[0].length <= a[0].length) return null;
        if ("" === n) {
          let t = h.v.exec(e);
          if (null != t && i[0].length <= t[0].length) return null
        }
        return i
      },
      parse(e) {
        let [, t, n] = e, r = "@";
        return "roleMention" === n && (r += "&"), {
          type: n,
          content: "<".concat(r).concat(t, ">")
        }
      }
    },
    channel: {
      match: (e, t) => B("#", e, t.channels),
      parse: e => ({
        type: "text",
        content: "<#".concat(e[1], ">")
      })
    },
    emoticon: {
      match(e, t, n) {
        if (!g.ev.getSetting() || 0 !== n.length && !/\s$/.test(n)) return null;
        let r = u.ZP.EMOJI_SHORTCUT_RE.exec(e);
        return null == r || r[0].length !== e.length && " " !== e[r[0].length] && "\n" !== e[r[0].length] ? null : r
      },
      parse: e => ({
        type: "emoticon",
        content: u.ZP.convertShortcutToName(e[1]),
        isShortcut: true
      })
    },
    emoji: {
      order: V.emoji.order,
      match: e => u.ZP.EMOJI_NAME_RE.exec(e),
      parse(e, t, n) {
        let [r, i] = e, {
          customEmoji: a
        } = n, o = Object.prototype.hasOwnProperty.call(a, i) ? a[i] : null;
        if (null != o) {
          var s;
          return {
            type: "customEmoticon",
            content: "<".concat(true === o.animated ? "a" : "", ":").concat(null != (s = o.originalName) ? s : o.name, ":").concat(o.id, ">"),
            emoji: o
          }
        }
        return {
          type: "text",
          content: r
        }
      }
    },
    customEmoticons: {
      match(e, t) {
        var n, r;
        return null != (r = null == (n = t.customEmoticonsRegex) ? true : n.exec(e)) ? r : null
      },
      parse(e, t, n) {
        let [r, i] = e, {
          emojiContext: a
        } = n, o = a.getEmoticonByName(i);
        return null != o ? {
          type: "customEmoticon",
          content: "<".concat(true === o.animated ? "a" : "", ":").concat(o.name, ":").concat(o.id, ">"),
          emoji: o
        } : {
          type: "text",
          content: r
        }
      }
    },
    text: U(k({}, H), {
      match: (e, t) => "string" == typeof t.textExclusions && "" !== t.textExclusions ? (0, _.T9)(t.textExclusions).exec(e) : null != H.match ? H.match(e, t, "") : null
    })
  },
  J = {
    inlineCode: Z(V.inlineCode),
    codeBlock: Z(V.codeBlock),
    mention: {
      match: o().anyScopeRegex(Y),
      parse(e, t, n) {
        let {
          isNotification: r,
          guild: a,
          channelId: o
        } = n, s = C.default.getUser(e[1]);
        if (null == s) return {
          content: e[0]
        };
        let l = w.ZP.getUserTag(s, {
          identifiable: r && A.Z.enabled ? "never" : "always"
        });
        if (r) {
          var c;
          let e = null != (c = P.ZP.getNickname(null == a ? true : a.id, o, s)) ? c : w.ZP.getGlobalName(s);
          return {
            content: null != e ? "@".concat(e) : "@".concat(l)
          }
        } {
          if (s.bot) return {
            content: "@".concat(l)
          };
          let e = "";
          if ((null == a ? true : a.id) != null) {
            let t = l.toLowerCase();
            e = i().some(v.Z.getUnsafeMutableRoles(a.id), e => t.startsWith(e.name.toLowerCase())) ? "#".concat("".concat(s.discriminator).padStart(4, "0")) : ""
          }
          return {
            content: "@".concat(l).concat(e)
          }
        }
      }
    },
    roleMention: {
      match: o().anyScopeRegex(W),
      parse(e, t, n) {
        let {
          guild: r
        } = n;
        if (null != r) {
          let t = v.Z.getRole(r.id, e[1]);
          if (null != t) return {
            content: "@".concat(t.name)
          }
        }
        return {
          content: e[0]
        }
      }
    },
    gameMention: {
      match: o().anyScopeRegex(K),
      parse(e, t, n) {
        let {
          guild: r
        } = n;
        if (r && d.N.getCurrentConfig({
            guildId: r.id,
            location: "Message Unparser"
          }, {
            autoTrackExposure: true
          }).enabled) {
          let t = b.Z.getDetectableGame(e[1]);
          return null != t ? {
            content: "@".concat(t.name)
          } : {
            content: "@".concat(x.intl.string(x.t["11pdXZ"]))
          }
        }
        return {
          content: e[0]
        }
      }
    },
    channel: {
      match: o().anyScopeRegex(z),
      parse(e) {
        let t = E.Z.getChannel(e[1]);
        return {
          content: null == t ? e[0] : (0, l.F6)(t, C.default, T.Z, true, true)
        }
      }
    },
    emoji: {
      match: o().anyScopeRegex(q),
      parse(e, t, n) {
        let [r, i, a] = e, {
          guild: o
        } = n, s = c.ZP.getDisambiguatedEmojiContext(o ? o.id : null).getById(a), l = null != s ? s.name : i;
        return {
          content: ":".concat(l, ":"),
          id: a
        }
      }
    },
    soundboard: {
      match: o().anyScopeRegex(Chunk11637.hf),
      parse(e) {
        let [t, n, r] = e;
        return {
          content: "<sound:".concat(n, ":").concat(r, ">")
        }
      }
    },
    spoiler: {
      match: o().anyScopeRegex(Chunk981631.$92),
      parse: () => ({
        content: "<".concat(Chunk388032.intl.string(Chunk388032.t["F+x38C"]).toLowerCase(), ">")
      })
    },
    staticRouteLink: {
      match: o().anyScopeRegex(Chunk981631.PEY),
      parse: e => ({
        content: "<id:".concat(e[1], ">")
      })
    },
    timestamp: U(k({}, V.timestamp), {
      parse() {
        for (var e = arguments.length, t = Array(module), n = 0; require < module; require++) exports[require] = arguments[require];
        let r = V.timestamp.parse(...exports);
        return "text" === Chunk392711.type ? {
          content: Chunk392711.content
        } : {
          content: Chunk392711.formatted
        }
      }
    }),
    text: k({}, H)
  };
[Q, J].forEach(e => {
  Object.keys(e).forEach((t, n) => {
    e[t].order = n
  })
});
let $ = o().parserFor(Q),
  ee = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;

function et(e, t, n) {
  if (null != n && ("customEmoticon" === t.type && n(t.emoji, false), "emoticon" === t.type || "text" === t.type)) {
    let r, i = u.ZP.translateSurrogatesToInlineEmoji(t.content);
    for (; null !== (r = ee.exec(i));) {
      let i;
      null != r[1] && "" !== r[1] ? e.emojiContext && (i = e.emojiContext.getById(r[1])) : i = u.ZP.getByName(r[2]), i && n(i, t.isShortcut || false)
    }
  }
}

function en(e, t, n, r) {
  let i = "",
    a = [];
  return e.forEach(e => {
    if (et(t, e, r), "string" == typeof e.content) switch (e.type) {
      case "emoji":
        a.push({
          position: i.length,
          length: e.content.length,
          id: e.id
        }), i += e.content;
        break;
      case "codeBlock":
      case "inlineCode":
      case "mention":
      case "roleMention":
      case "channel":
        true === t.isNotification ? i += (0, s.KM)(e.content, true) : i += e.content;
        break;
      default:
        i += n(e.content)
    } else if (e.content.constructor === Array) {
      let {
        content: o,
        emoji: s
      } = en(e.content, t, n, r);
      for (let e of s) a.push({
        position: i.length + e.position,
        length: e.length,
        id: e.id
      });
      i += o
    } else console.warn("Unknown message item type: ", e)
  }), {
    content: i,
    emoji: a
  }
}

function er(e, t, n) {
  return en($(e, t), t, u.ZP.translateInlineEmojiToSurrogates, n).content
}

function ei(e) {
  let t, n = null == e ? true : e.getGuildId(),
    r = null != n ? I.Z.getGuild(n) : null,
    a = S.Z.can(D.Plq.MENTION_EVERYONE, e);
  t = (null == e ? true : e.isPrivate()) ? e.recipients.map(e => ({
    userId: e,
    nick: null
  })) : null != n ? O.ZP.getMembers(n).map(e => {
    let {
      userId: t,
      nick: n
    } = e;
    return {
      userId: t,
      nick: n
    }
  }) : [];
  let o = i()(t.reduce((e, t) => {
      let {
        userId: n
      } = t, r = C.default.getUser(n);
      return null == r || e.push({
        id: n,
        text: r.tag
      }), e
    }, [])),
    s = i()(null != r ? v.Z.getSortedRoles(r.id) : []).filter(e => {
      let {
        mentionable: t
      } = e;
      return a || t
    }).map(e => {
      let {
        id: t,
        name: n
      } = e;
      return {
        id: t,
        text: n
      }
    }),
    l = i()(y.ZP.getTextChannelNameDisambiguations(n)).map(e => {
      let {
        id: t,
        name: n
      } = e;
      return {
        id: t,
        text: n
      }
    }),
    u = null != n ? i()(N.k1).filter(e => e !== y.sH).flatMap(e => y.ZP.getChannels(n)[e].map(e => ({
      id: e.channel.id,
      text: e.channel.name
    }))).value() : [],
    d = m.Z.computeAllActiveJoinedThreads(n).map(e => ({
      id: e.id,
      text: e.name
    })),
    f = c.ZP.getDisambiguatedEmojiContext(n),
    _ = f.getEscapedCustomEmoticonNames(),
    p = f.getCustomEmoji(),
    h = f.getCustomEmoticonRegex();
  return {
    inline: true,
    mentionableRoles: s,
    guild: r,
    users: o,
    channels: l.concat(u).concat(d),
    emojiContext: f,
    customEmoticonsRegex: h,
    customEmoji: p,
    textExclusions: _,
    disableErrorGuards: true,
    isNotification: false
  }
}

function ea(e) {
  return e
}

function eo(e, t, n) {
  let r = E.Z.getChannel(t),
    a = null != r ? r.getGuildId() : null,
    s = null != a ? I.Z.getGuild(a) : null,
    l = n ? J : i().omit(J, ["spoiler", "timestamp"]),
    c = n ? ea : u.ZP.translateSurrogatesToInlineEmoji,
    d = o().parserFor(l),
    f = {
      inline: true,
      guild: s,
      channelId: t,
      isNotification: n
    };
  return en(d(e, f), f, c)
}
let es = {
  parse(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : true,
      r = null != n ? n : ei(e),
      i = {
        content: t,
        tts: false,
        invalidEmojis: [],
        validNonShortcutEmojis: []
      };
    return i.content = er(i.content, r, (t, n) => {
      R.ZP.isEmojiPremiumLocked({
        emoji: t,
        channel: e,
        intention: L.Hz.CHAT
      }) ? i.invalidEmojis.push(t) : n || i.validNonShortcutEmojis.push(t)
    }), i
  },
  parsePreprocessor: (e, t) => $(t, ei(e)),
  unparse: (e, t, n) => eo(e, t, n).content,
  unparseWithMeta: eo
}