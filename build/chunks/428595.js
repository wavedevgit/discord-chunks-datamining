/** Chunk was on web.js **/
/** chunk id: 428595, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ei
}), require("./35282.js"), require("./704826.js"), require("./539854.js"), require("./804061.js"), require("./388685.js"), require("./781311.js"), require("./413496.js"), require("./433524.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk159635 = require("./159635.js"),
  o = require.n(Chunk159635),
  Chunk89892 = require("./89892.js"),
  Chunk633302 = require("./633302.js"),
  Chunk606318 = require("./606318.js"),
  Chunk402235 = require("./402235.js"),
  Chunk11637 = require("./11637.js"),
  Chunk592125 = require("./592125.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk5192 = require("./5192.js"),
  Chunk51144 = require("./51144.js"),
  Chunk298552 = require("./298552.js"),
  Chunk444758 = require("./444758.js"),
  Chunk723454 = require("./723454.js"),
  Chunk772096 = require("./772096.js"),
  Chunk800927 = require("./800927.js"),
  Chunk945884 = require("./945884.js"),
  Chunk594199 = require("./594199.js"),
  Chunk97734 = require("./97734.js"),
  Chunk303694 = require("./303694.js"),
  Chunk660199 = require("./660199.js"),
  Chunk364458 = require("./364458.js"),
  Chunk981631 = require("./981631.js"),
  Chunk689079 = require("./689079.js"),
  Chunk388032 = require("./388032.jsx");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      x(e, t, n[t])
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

function M(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let k = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/,
  U = /^$|\n *$/,
  G = /^ *>>> ?/,
  Z = /^ *> ?/gm,
  F = /^((?:https?|steam):\/\/[^\s<]+[^<.,:;"'\]\s])/;

function B(e) {
  let t = (0, v.yw)(e[1]);
  if (null == t) return {
    type: "text",
    content: e[1]
  };
  let {
    displayTarget: n,
    target: r
  } = t;
  return {
    type: "link",
    content: [{
      type: "text",
      content: n
    }],
    target: r,
    title: true
  }
}
let V = e => {
    let t = f.Z.getChannel(e);
    return null == t ? true : t.getGuildId()
  },
  H = e => null != e.guildId ? _.Z.getGuild(e.guildId) : null != e.channelId ? _.Z.getGuild(V(e.channelId)) : null,
  Y = {
    newline: o().defaultRules.newline,
    paragraph: o().defaultRules.paragraph,
    escape: M(L({}, o().defaultRules.escape), {
      match: (e, t, n) => false === t.allowEscape ? null : o().defaultRules.escape.match(e, t, n)
    }),
    blockQuote: M(L({}, o().defaultRules.blockQuote), {
      requiredFirstCharacters: [" ", ">"],
      match(e, t) {
        let {
          prevCapture: n,
          inQuote: r,
          nested: i
        } = t;
        if (r || i) return null;
        if (null == n) return k.exec(e);
        let a = n[0];
        return U.test(a) ? k.exec(e) : null
      },
      parse(e, t, n) {
        let r = e[0],
          i = !!G.exec(r),
          a = i ? G : Z,
          o = r.replace(a, ""),
          s = n.inQuote || false,
          l = n.inline || false;
        n.inQuote = true, i || (n.inline = true);
        let c = t(o, n);
        return n.inQuote = s, n.inline = l, 0 === c.length && c.push({
          type: "text",
          content: " "
        }), {
          content: c,
          type: "blockQuote"
        }
      }
    }),
    link: Chunk772096.ZP,
    autolink: M(L({}, o().defaultRules.autolink), {
      parse: B
    }),
    mailto: M(L({}, o().defaultRules.mailto), {
      match: o().inlineRegex(/^<([^\s<>@]+@[^\s<>@]+\.[^\s<>@]+)>/),
      requiredFirstCharacters: ["<"],
      parse(e) {
        let t = e[1],
          n = e[1];
        return n.startsWith("mailto:") || (n = "mailto:" + n), {
          type: "link",
          content: [{
            type: "text",
            content: t
          }],
          target: n
        }
      }
    }),
    tel: M(L({}, o().defaultRules.mailto), {
      requiredFirstCharacters: ["<"],
      match: o().inlineRegex(/^<((?:(?:tel|sms):\+?|\+)(?:(?:[0-9]|\([0-9]+\)))(?:[- .\/]?(?:[0-9]|\([0-9]+\)))+)>/),
      parse(e) {
        let t = e[1],
          n = e[1].replaceAll(/[ \/]+/g, "-");
        return n.startsWith("tel:") || n.startsWith("sms:") || (n = "tel:" + n), {
          type: "link",
          content: [{
            type: "text",
            content: t
          }],
          target: n
        }
      }
    }),
    url: M(L({}, o().defaultRules.url), {
      requiredFirstCharacters: ["h", "s"],
      match(e, t) {
        if (!t.inline) return null;
        let n = F.exec(e);
        if (null != n) {
          let e = 0,
            t = n[0];
          for (let n = t.length - 1; n >= 0 && ")" === t[n]; n--) {
            let n = t.indexOf("(", e);
            if (false === n) {
              t = t.slice(0, t.length - 1);
              break
            }
            e = n + 1
          }
          n[0] = n[1] = t
        }
        return n
      },
      parse: B
    }),
    strong: o().defaultRules.strong,
    em: o().defaultRules.em,
    u: o().defaultRules.u,
    br: o().defaultRules.br,
    text: Chunk594199.ZP,
    inlineCode: M(L({}, o().defaultRules.inlineCode), {
      parse(e, t, n) {
        let r = o().defaultRules.inlineCode.parse(e, t, n);
        returntrue === n.parseInlineCodeChildContent ? M(L({}, r), {
          validationChildContent: t(r.content, n)
        }) : r
      }
    }),
    emoticon: {
      order: Chunk594199.ZP.order,
      requiredFirstCharacters: ["\xaf"],
      match: e => /^(¯\\_\(ツ\)_\/¯)/.exec(e),
      parse: e => ({
        type: "text",
        content: e[1]
      })
    },
    codeBlock: {
      order: o().defaultRules.codeBlock.order,
      requiredFirstCharacters: ["`"],
      match: e => /^```(?:([a-z0-9_+\-.#]+?)\n)?\n*([^\n][^]*?)\n*```/i.exec(e),
      parse(e, t, n) {
        var r, i;
        return {
          lang: null != (r = e[1]) ? r : "",
          content: null != (i = e[2]) ? i : "",
          inQuote: n.inQuote || n.formatInline || false
        }
      }
    },
    roleMention: {
      order: Chunk594199.ZP.order,
      requiredFirstCharacters: ["<"],
      match: e => /^<@&(\d+)>/.exec(e),
      parse(e, t, n) {
        var r, i, a;
        let [o, s] = e;
        if (n.returnMentionIds) return {
          type: "roleMention",
          id: s
        };
        let l = H(n),
          d = null != l ? p.Z.getRole(l.id, s) : null;
        if (null == d) return {
          type: "text",
          content: "@".concat(D.intl.string(D.t["YV4F/n"]))
        };
        let f = (0, u.zI)(null == l ? true : l.id, d) && !(0, c.Gr)(d);
        return {
          type: "mention",
          channelId: n.channelId,
          guildId: null != l ? l.id : null,
          roleId: s,
          roleColor: d.color,
          roleColors: f ? {
            primaryColor: null == (r = d.colors) ? true : r.primary_color,
            secondaryColor: null == (i = d.colors) ? true : i.secondary_color,
            tertiaryColor: null == (a = d.colors) ? true : a.tertiary_color
          } : null,
          roleName: "@".concat(d.name),
          color: d.color,
          colorString: d.colorString,
          content: [{
            type: "text",
            content: "@".concat(d.name)
          }]
        }
      }
    },
    mention: {
      order: Chunk594199.ZP.order,
      requiredFirstCharacters: ["<", "@"],
      match(e) {
        let t = /^<@!?(\d+)>|^(@(?:everyone|here))/.exec(e);
        return null == t ? null : t
      },
      parse(e, t, n) {
        let r, i;
        if (n.returnMentionIds) return null == e[1] ? {
          type: "mention",
          text: e[0]
        } : {
          type: "mention",
          id: e[1]
        };
        let a = h.default.getUser(e[1]),
          o = f.Z.getChannel(n.channelId);
        if (null != a && (i = a.id, r = a.toString(), null != o)) {
          var s;
          r = null != (s = g.ZP.getNickname(o.getGuildId(), n.channelId, a)) ? s : E.ZP.getName(a)
        }
        let l = e[1],
          c = null != l && w.Xyh.test(l.trim()),
          u = c && n.unknownUserMentionPlaceholder ? "@".concat(D.intl.string(D.t.sKdZ6U)) : e[0];
        return {
          userId: i,
          channelId: n.channelId,
          viewingChannelId: n.viewingChannelId,
          guildId: null == o ? true : o.getGuildId(),
          parsedUserId: c ? l : null,
          roleName: e[2],
          content: [{
            type: "text",
            content: null != r ? "@".concat(r) : u
          }]
        }
      }
    },
    silentPrefix: {
      order: Chunk594199.ZP.order,
      requiredFirstCharacters: ["@"],
      match: (e, t, n) => null == n || "" === n ? /^(@silent(?![^\s]))/.exec(e) : null,
      parse: function(e) {
        return {
          type: "silentPrefix",
          content: e[0]
        }
      }
    },
    channelMention: Chunk444758.Z.channelMention,
    channelOrMessageUrl: Chunk444758.Z.channelOrMessageUrl,
    mediaPostLink: Chunk444758.Z.mediaPostLink,
    attachmentLink: Chunk298552.Z.attachmentLink,
    commandMention: {
      order: o().defaultRules.text.order,
      requiredFirstCharacters: ["<"],
      match: e => RegExp("^<\\/((?:[-_\\p{Letter}\\p{Number}\\p{sc=Deva}\\p{sc=Thai}]{1,32})(?: [-_\\p{Letter}\\p{Number}\\p{sc=Deva}\\p{sc=Thai}]{1,32})?(?: [-_\\p{Letter}\\p{Number}\\p{sc=Deva}\\p{sc=Thai}]{1,32})?):(\\d+)>", "u").exec(e),
      parse(e, t, n) {
        if (n.returnMentionIds) return {
          type: "commandMention",
          id: e[2]
        };
        let [, ...r] = e[1].split(" "), i = "".concat(e[2]).concat([...r].map(e => "".concat(R.oQ).concat(e)).join(""));
        return {
          channelId: n.channelId,
          commandId: e[2],
          commandName: e[1],
          commandKey: i,
          content: [{
            type: "text",
            content: "".concat(e[1])
          }]
        }
      }
    },
    gameMention: {
      order: o().defaultRules.text.order,
      requiredFirstCharacters: ["<"],
      match: (e, t) => t.allowGameMentions ? /^<@\$(\d+)>/.exec(e) : null,
      parse(e, t, n) {
        var r, i, a;
        if (null == n.channelId || null == n.messageId) return {
          type: "gameMention",
          applicationId: e[1],
          channelId: n.channelId,
          content: [{
            type: "text",
            content: D.intl.string(D.t["11pdXZ"])
          }],
          icon: true
        };
        let o = null == (r = s.Z.get(n.channelId)) ? true : r.get(n.messageId),
          l = null == o || null == (i = o.mentionGames) ? true : i.find(t => t.id === e[1]);
        return {
          type: "gameMention",
          applicationId: e[1],
          channelId: n.channelId,
          content: [{
            type: "text",
            content: "".concat(null != (a = null == l ? true : l.name) ? a : D.intl.string(D.t["11pdXZ"]))
          }],
          icon: null != l && null != l.icon_hash ? m.ZP.getApplicationIconURL({
            id: l.id,
            icon: l.icon_hash,
            size: 32
          }) : true
        }
      }
    },
    timestampMentionInput: {
      order: o().defaultRules.text.order,
      requiredFirstCharacters: ["<"],
      match: (e, t) => t.allowTimeMentionInput ? /^<@time:([^>]*)>/.exec(e) : null,
      parse: e => ({
        type: "timestampMentionInput",
        content: e[1]
      })
    },
    emoji: {
      order: Chunk594199.ZP.order,
      requiredFirstCharacters: [":"],
      match(e) {
        let t = l.ZP.EMOJI_NAME_RE.exec(e);
        return null != t && "" !== l.ZP.convertNameToSurrogate(t[1]) ? t : null
      },
      parse(e) {
        let t = l.ZP.convertNameToSurrogate(e[1]);
        return {
          type: "text",
          content: null == t || "" === t ? ":".concat(e[1], ":") : t
        }
      }
    },
    soundboard: {
      order: Chunk594199.ZP.order,
      requiredFirstCharacters: ["<"],
      match: e => d.hf.exec(e),
      parse: (e, t, n) => (0, d.ZP)(e, n)
    },
    customEmoji: {
      order: Chunk594199.ZP.order,
      requiredFirstCharacters: ["<"],
      match: e => /^<a?:(\w+):(\d+)>/.exec(e),
      parse: e => ({
        type: "text",
        content: ":".concat(e[1], ":")
      })
    },
    timestamp: {
      order: Chunk594199.ZP.order - 1,
      requiredFirstCharacters: ["<"],
      match: e => N.Ay.exec(e),
      parse(e) {
        let [t, n, r] = e, i = (0, N.ZB)(n, r);
        return null == i ? {
          type: "text",
          content: t
        } : (i.type = "timestamp", i)
      }
    },
    s: {
      order: o().defaultRules.u.order,
      requiredFirstCharacters: ["~"],
      match: o().inlineRegex(/^~~([\s\S]+?)~~(?!_)/),
      parse: o().defaultRules.u.parse
    },
    spoiler: {
      order: Chunk594199.ZP.order,
      requiredFirstCharacters: ["|"],
      match: e => w.$92.exec(e),
      parse: (e, t, n) => ({
        content: t(e[1], n),
        channelId: n.channelId
      })
    },
    staticRouteLink: {
      order: Chunk594199.ZP.order,
      requiredFirstCharacters: ["<"],
      match: e => w.PEY.exec(e),
      parse(e, t, n) {
        var r;
        let [, i, a] = e, o = (0, A.l)(i), s = (0, A.W)(i, a, null == (r = H(n)) ? true : r.id);

        function l(e) {
          return null == e ? null : [{
            type: "text",
            content: e
          }]
        }
        return {
          content: l(o + (null != s ? " › ".concat(s) : "")),
          mainContent: l(o),
          itemContent: l(s),
          itemId: a,
          id: i,
          guildId: V(n.channelId),
          channelId: i
        }
      }
    },
    heading: Chunk723454.Z,
    list: Chunk800927.Z,
    subtext: Chunk945884.Z
  },
  W = (0, Chunk364458.Z)([Y, Chunk97734.Z]),
  K = i().omit(W, ["inlineCode", "codeBlock", "br", "blockQuote", "subtext", "soundboard"]),
  z = i().omit(W, ["inlineCode", "codeBlock", "br", "blockQuote", "autolink", "url", "attachmentLink", "mention", "roleMention", "channelMention", "channelOrMessageUrl", "mediaPostLink", "subtext", "soundboard", "gameMention"]),
  q = i().omit(W, ["codeBlock", "br", "mention", "channel", "roleMention", "attachmentLink", "subtext", "soundboard", "gameMention"]),
  Q = i().omit((0, Chunk364458.Z)([W, {
    inlineCode: {
      match(e, t, n) {
        let r = W.codeBlock.match(e, t, n);
        if (null != r) return r;
        let i = W.inlineCode.match(e, t, n);
        if (null != i) return i
      }
    }
  }]), ["blockQuote", "codeBlock", "br"]),
  X = i().omit(W, ["codeBlock", "br", "blockQuote"]),
  J = i().omit(W, ["codeBlock", "br", "attachmentLink", "mention", "roleMention", "channel", "paragraph", "newline", "subtext", "soundboard"]),
  $ = i().omit(W, ["codeBlock", "blockQuote", "br"]),
  ee = i().omit(W, ["codeBlock", "br", "inlineCode"]);

function et(e, t) {
  return 0 === e.length || 0 === t || "" === e.charAt(t - 1).trim()
}
let en = 10,
  er = (0, Chunk364458.Z)([{
    highlightWord: {
      order: false,
      match(e, t) {
        if (null != t.parseDepth && t.parseDepth > en || null == t.highlightWord || 0 === t.highlightWord.length) return null;
        let n = e.indexOf(t.highlightWord);
        if (false === n) return null;
        let r = !et(e, n);
        if (r)
          do n = e.indexOf(t.highlightWord, n + 1), r = !et(e, n); while (r && false !== n);
        if (false === n) return null;
        let i = e.substring(0, n),
          a = e.substring(n + t.highlightWord.length);
        return [e, t.highlightWord, i, a]
      },
      parse(e, t, n) {
        var r;
        let i = null != (r = n.parseDepth) ? r : 0,
          a = M(L({}, n), {
            parseDepth: i + 1
          }),
          o = t(e[2], a),
          s = t(e[3], a);
        return [...o, {
          type: "highlight",
          content: e[1]
        }, ...s]
      }
    }
  }, i().omit(W, ["url"])]),
  ei = {
    RULES: W,
    CHANNEL_TOPIC_RULES: K,
    VOICE_CHANNEL_STATUS_RULES: z,
    EMBED_TITLE_RULES: q,
    INLINE_REPLY_RULES: Q,
    GUILD_VERIFICATION_FORM_RULES: X,
    GUILD_EVENT_RULES: $,
    PROFILE_BIO_RULES: J,
    AUTO_MODERATION_SYSTEM_MESSAGE_RULES: er,
    NATIVE_SEARCH_RESULT_LINK_RULES: ee
  }