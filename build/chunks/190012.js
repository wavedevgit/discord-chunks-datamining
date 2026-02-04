/** Chunk was on 7685 **/
/** chunk id: 190012, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BC: () => I
});
var Chunk735438 = require("./735438.js"),
  Chunk448761 = require("./448761.js"),
  Chunk311907 = require("./311907.js"),
  Chunk931046 = require("./931046.js"),
  Chunk427930 = require("./427930.js"),
  Chunk77350 = require("./77350.js"),
  Chunk763754 = require("./763754.js"),
  Chunk961350 = require("./961350.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk638075 = require("./638075.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function I(e, t) {
  let {
    isBlocked: n,
    isIgnored: I
  } = (0, i.cf)([d.A], () => ({
    isBlocked: d.A.isBlocked(e.author.id),
    isIgnored: d.A.isIgnored(e.author.id)
  }), [e.author.id]), m = (0, s.Ay)(t.id, e.id), E = (0, i.bG)([c.default], () => c.default.getId()), A = (0, u.Ay)(e).nick, y = e.author.id === E ? p.intl.string(p.t.LuZzxn) : A, S = (0, i.bG)([h.default], () => e.mentions.length > 0 ? h.default.getUser(e.mentions[0]) : true), v = (0, u.d8)(S, t).nick;
  return function(e, t) {
    let {
      isBlocked: n,
      isIgnored: i,
      authorNick: s
    } = t;
    if (n) return {
      type: "text",
      text: p.intl.string(p.t.XAkOo2)
    };
    if (i) return {
      type: "text",
      text: p.intl.string(p.t["G7p6v/"])
    };
    if (function(e) {
        switch (e.type) {
          case r.l.DEFAULT:
          case r.l.CHANGELOG:
          case r.l.REPLY:
          case r.l.CHAT_INPUT_COMMAND:
          case r.l.CONTEXT_MENU_COMMAND:
          case r.l.POLL_RESULT:
          case r.l.AUTO_MODERATION_ACTION:
            returntrue;
          default:
            returnfalse
        }
      }(e)) {
      let t = function(e) {
        if (1 === e.embeds.length && e.embeds[0].url === e.content && null != e.embeds[0].rawTitle) return {
          type: "markup",
          markup: e.embeds[0].rawTitle
        };
        if (null != e.content && "" !== e.content) return {
          type: "message",
          message: e
        };
        if (e.hasFlag(f.pr7.IS_VOICE_MESSAGE)) return {
          type: "text",
          text: p.intl.string(p.t.slFYgi)
        };
        if (e.attachments.length > 0) {
          let t = e.attachments.every(e => (0, o.u)(e.filename)),
            n = !t && e.attachments.every(e => (0, o.AE)(e.filename)),
            l = !t && !n && e.attachments.every(e => (0, o.L8)(e.filename));
          return t ? {
            type: "text",
            text: p.intl.formatToPlainString(p.t.h4pFfU, {
              count: e.attachments.length
            }),
            trailingIcon: "image"
          } : n ? {
            type: "text",
            text: p.intl.formatToPlainString(p.t.SJ6pPX, {
              count: e.attachments.length
            }),
            trailingIcon: "video"
          } : l ? {
            type: "text",
            text: p.intl.formatToPlainString(p.t.fnO3hK, {
              count: e.attachments.length
            }),
            trailingIcon: "audio"
          } : {
            type: "text",
            text: p.intl.formatToPlainString(p.t["89ihS8"], {
              count: e.attachments.length
            }),
            trailingIcon: "attachment"
          }
        }
        if (e.embeds.length > 0) {
          let t = e.embeds.every(e => null != e.url && (0, o.Zj)(e.url)),
            n = !t && e.embeds.every(e => null != e.url && (0, o.r1)(e.url)),
            l = !t && !n && e.embeds.every(e => null != e.url && (0, o.L8)(e.url));
          if (t) return {
            type: "text",
            text: p.intl.formatToPlainString(p.t.h4pFfU, {
              count: e.embeds.length
            }),
            trailingIcon: "image"
          };
          if (n) return {
            type: "text",
            text: p.intl.formatToPlainString(p.t.SJ6pPX, {
              count: e.embeds.length
            }),
            trailingIcon: "video"
          };
          if (l) return {
            type: "text",
            text: p.intl.formatToPlainString(p.t.fnO3hK, {
              count: e.embeds.length
            }),
            trailingIcon: "audio"
          };
          else if (e.embeds.length > 0 && null != e.embeds[0].rawTitle) return {
            type: "markup",
            markup: e.embeds[0].rawTitle
          };
          else if (e.embeds.length > 0 && null != e.embeds[0].rawDescription) return {
            type: "markup",
            markup: e.embeds[0].rawDescription
          };
          else return {
            type: "text",
            text: p.intl.formatToPlainString(p.t["9XuYjs"], {
              count: e.embeds.length
            }),
            trailingIcon: "link"
          }
        }
        if (e.stickerItems.length > 0) return {
          type: "text",
          text: e.stickerItems[0].name,
          trailingIcon: "sticker"
        };
        if (e.isPoll()) {
          var t;
          return {
            type: "text",
            text: p.intl.formatToPlainString(p.t.ImizdM, {
              question: null == (t = e.poll) ? true : t.question.text
            })
          }
        }
        if ((0, a.A)(e)) return {
          type: "text",
          text: p.intl.string(p.t["9ddYKt"])
        }
      }(e);
      if (null != t) {
        var u, c;
        return u = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              l = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), l.forEach(function(t) {
              var l;
              l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = l
            })
          }
          return e
        }({}, t), c = c = {
          authorLabel: s
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(c)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
          }
          return n
        })(Object(c)).forEach(function(e) {
          Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(c, e))
        }), u
      }
    }
    let d = function(e, t) {
      let {
        currentUserId: n,
        authorNick: i,
        otherUser: s,
        otherUserNick: a,
        isCallActive: o
      } = t;
      return e.type === r.l.RECIPIENT_ADD && null != a ? {
        type: "text",
        text: p.intl.formatToPlainString(p.t.MMN2Jq, {
          username: i,
          usernameHook: l.identity,
          otherUsername: a,
          otherUsernameHook: l.identity
        })
      } : e.type === r.l.RECIPIENT_REMOVE && null != a ? {
        type: "text",
        text: e.author.id === (null == s ? true : s.id) ? p.intl.formatToPlainString(p.t["5v2xa8"], {
          username: i,
          usernameHook: l.identity
        }) : p.intl.formatToPlainString(p.t.L2FyVq, {
          username: i,
          usernameHook: l.identity,
          otherUsername: a,
          otherUsernameHook: l.identity
        })
      } : e.type === r.l.CALL ? {
        type: "text",
        text: o ? p.intl.string(p.t["NGg/fm"]) : null == e.call || e.call.participants.includes(n) ? p.intl.string(p.t.v05Xd6) : p.intl.string(p.t["2CnhoI"]),
        color: o ? "text-feedback-positive" : true,
        trailingIcon: o ? "call-active" : "call-ended"
      } : e.type === r.l.CHANNEL_NAME_CHANGE ? {
        type: "text",
        text: p.intl.formatToPlainString(p.t.oItgEw, {
          username: i,
          usernameHook: l.identity,
          channelName: e.content
        })
      } : e.type === r.l.CHANNEL_ICON_CHANGE ? {
        type: "text",
        text: p.intl.formatToPlainString(p.t.OEdU6X, {
          username: i,
          usernameHook: l.identity
        })
      } : e.type === r.l.CHANNEL_PINNED_MESSAGE ? {
        type: "text",
        text: p.intl.formatToPlainString(p.t.vfkjqx, {
          username: i,
          usernameHook: l.identity
        })
      } : e.type === r.l.USER_JOIN ? {
        type: "text",
        text: p.intl.formatToPlainString(g.A.getSystemMessageUserJoin(e.id), {
          username: i,
          usernameHook: l.identity
        })
      } : e.type === r.l.THREAD_CREATED ? {
        type: "text",
        text: p.intl.formatToPlainString(p.t.SGaUAU, {
          actorName: i,
          actorHook: l.identity,
          threadName: e.content,
          threadOnClick: l.identity
        })
      } : e.type === r.l.PREMIUM_REFERRAL ? {
        type: "text",
        text: p.intl.formatToPlainString(p.t.lieTqU, {
          username: i
        })
      } : true
    }(e, t);
    if (null != d) return d
  }(e, {
    message: e,
    channel: t,
    currentUserId: E,
    authorNick: y,
    otherUser: S,
    otherUserNick: v,
    isBlocked: n,
    isIgnored: I,
    isCallActive: m
  })
}