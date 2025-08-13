/** Chunk was on web.js **/
/** chunk id: 957730, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => ei
}), require("./35282.js"), require("./388685.js"), require("./539854.js"), require("./361932.js"), require("./187205.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk159635 = require("./159635.js"),
  a = require.n(Chunk159635),
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
  Chunk51144 = require("./51144.js"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx");

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      L(e, t, n[t])
    })
  }
  return e
}

function M(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : M(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function k(e, t, n) {
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

function U(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : null;
  if (t[0] !== e) return null;
  if ('"' !== t[1]) return k(e, t, n, r);
  let i = 2;
  for (; i < t.length; i++) {
    if ("\\" === t[i]) {
      i++;
      continue
    }
    if ('"' === t[i]) break
  }
  let o = t.substring(0, i + 1),
    a = (0, s.mA)(t.substring(2, i));
  return n.sortBy(e => {
    let {
      text: t
    } = e;
    return -t.length
  }).filter(e => {
    let {
      text: t
    } = e;
    return a === t
  }).map(e => {
    let {
      id: t
    } = e;
    return [o, t, r]
  }).first()
}

function G(e) {
  return {
    order: e.order,
    match: e.match,
    parse: t => ({
      type: e.type,
      content: t[0]
    })
  }
}

function B(e) {
  return {
    match: a().anyScopeRegex(e),
    parse: e => ({
      type: "text",
      content: e[0]
    })
  }
}
let Z = Chunk428595.Z.RULES,
  F = Chunk594199.ZP,
  V = /^<@!?(\d+)>/,
  H = /^<@&(\d+)>/,
  Y = /^<@\$(\d+)>/,
  W = /^<#(\d+)>/,
  K = /^<a?:(\w+):(\d+)>/,
  z = /(@everyone|@here|@Clyde)\b/,
  q = {
    link: G(a().defaultRules.link),
    autolink: G(a().defaultRules.autolink),
    url: G(a().defaultRules.url),
    inlineCode: G(Z.inlineCode),
    codeBlock: G(Z.codeBlock),
    rawUserMention: B(V),
    rawRoleMention: B(H),
    rawChannelMention: B(W),
    rawEmoji: B(K),
    mention: {
      match(e, t, n) {
        let r = n.split(" ").pop() + e;
        if (/^[^ ]+@[^ ]+\.[^ .]+/.test(r)) return null;
        let i = k("@", e, t.users, "mention");
        if (i || (i = k("@", e, t.mentionableRoles, "roleMention"))) return i;
        if (!(i = k("@", e, t.users.map(e => j(x({}, e), {
            text: e.text.split("#")[0]
          })), "mention"))) return null;
        let o = z.exec(e);
        if (null != o && i[0].length <= o[0].length) return null;
        if ("" === n) {
          let t = p.v.exec(e);
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
      match: (e, t) => U("#", e, t.channels),
      parse: e => ({
        type: "text",
        content: "<#".concat(e[1], ">")
      })
    },
    emoticon: {
      match(e, t, n) {
        if (!m.ev.getSetting() || 0 !== n.length && !/\s$/.test(n)) return null;
        let r = c.ZP.EMOJI_SHORTCUT_RE.exec(e);
        return null == r || r[0].length !== e.length && " " !== e[r[0].length] && "\n" !== e[r[0].length] ? null : r
      },
      parse: e => ({
        type: "emoticon",
        content: c.ZP.convertShortcutToName(e[1]),
        isShortcut: true
      })
    },
    emoji: {
      order: Z.emoji.order,
      match: e => c.ZP.EMOJI_NAME_RE.exec(e),
      parse(e, t, n) {
        let [r, i] = e, {
          customEmoji: o
        } = n, a = Object.prototype.hasOwnProperty.call(o, i) ? o[i] : null;
        if (null != a) {
          var s;
          return {
            type: "customEmoticon",
            content: "<".concat(true === a.animated ? "a" : "", ":").concat(null != (s = a.originalName) ? s : a.name, ":").concat(a.id, ">"),
            emoji: a
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
          emojiContext: o
        } = n, a = o.getEmoticonByName(i);
        return null != a ? {
          type: "customEmoticon",
          content: "<".concat(true === a.animated ? "a" : "", ":").concat(a.name, ":").concat(a.id, ">"),
          emoji: a
        } : {
          type: "text",
          content: r
        }
      }
    },
    text: j(x({}, F), {
      match: (e, t) => "string" == typeof t.textExclusions && "" !== t.textExclusions ? (0, f.T9)(t.textExclusions).exec(e) : null != F.match ? F.match(e, t, "") : null
    })
  },
  X = {
    inlineCode: G(Z.inlineCode),
    codeBlock: G(Z.codeBlock),
    mention: {
      match: a().anyScopeRegex(V),
      parse(e, t, n) {
        let {
          isNotification: r,
          guild: o
        } = n, a = A.default.getUser(e[1]);
        if (null == a) return {
          content: e[0]
        };
        let s = R.ZP.getUserTag(a, {
          identifiable: r && S.Z.enabled ? "never" : "always"
        });
        if (r) {
          let e = R.ZP.getGlobalName(a);
          return {
            content: null != e ? "@".concat(e) : "@".concat(s)
          }
        } {
          if (a.bot) return {
            content: "@".concat(s)
          };
          let e = "";
          if ((null == o ? true : o.id) != null) {
            let t = s.toLowerCase();
            e = i().some(O.Z.getUnsafeMutableRoles(o.id), e => t.startsWith(e.name.toLowerCase())) ? "#".concat("".concat(a.discriminator).padStart(4, "0")) : ""
          }
          return {
            content: "@".concat(s).concat(e)
          }
        }
      }
    },
    roleMention: {
      match: a().anyScopeRegex(H),
      parse(e, t, n) {
        let {
          guild: r
        } = n;
        if (null != r) {
          let t = O.Z.getRole(r.id, e[1]);
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
      match: a().anyScopeRegex(Y),
      parse(e, t, n) {
        let {
          guild: r
        } = n;
        if (r && u.N.getCurrentConfig({
            guildId: r.id,
            location: "Message Unparser"
          }, {
            autoTrackExposure: true
          }).enabled) {
          let t = E.Z.getDetectableGame(e[1]);
          return null != t ? {
            content: "@".concat(t.name)
          } : {
            content: "@".concat(D.intl.string(D.t["11pdXV"]))
          }
        }
        return {
          content: e[0]
        }
      }
    },
    channel: {
      match: a().anyScopeRegex(W),
      parse(e) {
        let t = g.Z.getChannel(e[1]);
        return {
          content: null == t ? e[0] : (0, s.F6)(t, A.default, T.Z, true, true)
        }
      }
    },
    emoji: {
      match: a().anyScopeRegex(K),
      parse(e, t, n) {
        let [r, i, o] = e, {
          guild: a
        } = n, s = l.ZP.getDisambiguatedEmojiContext(a ? a.id : null).getById(o), c = null != s ? s.name : i;
        return {
          content: ":".concat(c, ":")
        }
      }
    },
    soundboard: {
      match: a().anyScopeRegex(Chunk11637.hf),
      parse(e) {
        let [t, n, r] = e;
        return {
          content: "<sound:".concat(n, ":").concat(r, ">")
        }
      }
    },
    spoiler: {
      match: a().anyScopeRegex(Chunk981631.$92),
      parse: () => ({
        content: "<".concat(Chunk388032.intl.string(Chunk388032.t["F+x38P"]).toLowerCase(), ">")
      })
    },
    staticRouteLink: {
      match: a().anyScopeRegex(Chunk981631.PEY),
      parse: e => ({
        content: "<id:".concat(e[1], ">")
      })
    },
    timestamp: j(x({}, Z.timestamp), {
      parse() {
        for (var e = arguments.length, t = Array(module), n = 0; require < module; require++) exports[require] = arguments[require];
        let r = Z.timestamp.parse(...exports);
        return "text" === Chunk392711.type ? {
          content: Chunk392711.content
        } : {
          content: Chunk392711.formatted
        }
      }
    }),
    text: x({}, F)
  };
[q, X].forEach(e => {
  Object.keys(e).forEach((t, n) => {
    e[t].order = n
  })
});
let Q = a().parserFor(q),
  J = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;

function $(e, t, n) {
  if (null != n && ("customEmoticon" === t.type && n(t.emoji, false), "emoticon" === t.type || "text" === t.type)) {
    let r, i = c.ZP.translateSurrogatesToInlineEmoji(t.content);
    for (; null !== (r = J.exec(i));) {
      let i;
      null != r[1] && "" !== r[1] ? e.emojiContext && (i = e.emojiContext.getById(r[1])) : i = c.ZP.getByName(r[2]), i && n(i, t.isShortcut || false)
    }
  }
}

function ee(e, t, n, r) {
  let i = "";
  return e.forEach(e => {
    if ($(t, e, r), "string" == typeof e.content) switch (e.type) {
      case "codeBlock":
      case "inlineCode":
      case "mention":
      case "roleMention":
      case "channel":
      case "emoji":
        i += e.content;
        break;
      default:
        i += n(e.content)
    } else e.content.constructor === Array ? i += ee(e.content, t, n, r) : console.warn("Unknown message item type: ", e)
  }), i
}

function et(e, t, n) {
  return ee(Q(e, t), t, c.ZP.translateInlineEmojiToSurrogates, n)
}

function en(e) {
  let t, n = null == e ? true : e.getGuildId(),
    r = null != n ? v.Z.getGuild(n) : null,
    o = I.Z.can(P.Plq.MENTION_EVERYONE, e);
  t = (null == e ? true : e.isPrivate()) ? e.recipients.map(e => ({
    userId: e,
    nick: null
  })) : null != n ? y.ZP.getMembers(n).map(e => {
    let {
      userId: t,
      nick: n
    } = e;
    return {
      userId: t,
      nick: n
    }
  }) : [];
  let a = i()(t.reduce((e, t) => {
      let {
        userId: n
      } = t, r = A.default.getUser(n);
      return null == r || e.push({
        id: n,
        text: r.tag
      }), e
    }, [])),
    s = i()(null != r ? O.Z.getSortedRoles(r.id) : []).filter(e => {
      let {
        mentionable: t
      } = e;
      return o || t
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
    c = i()(b.ZP.getTextChannelNameDisambiguations(n)).map(e => {
      let {
        id: t,
        name: n
      } = e;
      return {
        id: t,
        text: n
      }
    }),
    u = null != n ? i()(N.k1).filter(e => e !== b.sH).flatMap(e => b.ZP.getChannels(n)[e].map(e => ({
      id: e.channel.id,
      text: e.channel.name
    }))).value() : [],
    d = h.Z.computeAllActiveJoinedThreads(n).map(e => ({
      id: e.id,
      text: e.name
    })),
    f = l.ZP.getDisambiguatedEmojiContext(n),
    _ = f.getEscapedCustomEmoticonNames(),
    p = f.getCustomEmoji(),
    m = f.getCustomEmoticonRegex();
  return {
    inline: true,
    mentionableRoles: s,
    guild: r,
    users: a,
    channels: c.concat(u).concat(d),
    emojiContext: f,
    customEmoticonsRegex: m,
    customEmoji: p,
    textExclusions: _,
    disableErrorGuards: true
  }
}

function er(e) {
  return e
}
let ei = {
  parse(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : true,
      r = null != n ? n : en(e),
      i = {
        content: t,
        tts: false,
        invalidEmojis: [],
        validNonShortcutEmojis: []
      };
    return i.content = et(i.content, r, (t, n) => {
      C.ZP.isEmojiPremiumLocked({
        emoji: t,
        channel: e,
        intention: w.Hz.CHAT
      }) ? i.invalidEmojis.push(t) : n || i.validNonShortcutEmojis.push(t)
    }), i
  },
  parsePreprocessor: (e, t) => Q(t, en(e)),
  unparse(e, t, n) {
    let r = g.Z.getChannel(t),
      o = null != r ? r.getGuildId() : null,
      s = null != o ? v.Z.getGuild(o) : null,
      l = n ? X : i().omit(X, ["spoiler", "timestamp"]),
      u = n ? er : c.ZP.translateSurrogatesToInlineEmoji,
      d = a().parserFor(l),
      f = {
        inline: true,
        guild: s,
        isNotification: n
      };
    return ee(d(e, f), f, u)
  }
}