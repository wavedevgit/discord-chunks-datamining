/** Chunk was on 52390 **/
/** chunk id: 190012, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BC: () => b
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

function b(e, t) {
  let {
    isBlocked: n,
    isIgnored: b
  } = (0, i.cf)([d.A], () => ({
    isBlocked: d.A.isBlocked(e.author.id),
    isIgnored: d.A.isIgnored(e.author.id)
  }), [e.author.id]), g = (0, a.Ay)(t.id, e.id), y = (0, i.bG)([c.default], () => c.default.getId()), x = (0, u.Ay)(e).nick, h = e.author.id === y ? _.intl.string(_.t.LuZzxn) : x, A = (0, i.bG)([p.default], () => e.mentions.length > 0 ? p.default.getUser(e.mentions[0]) : true), v = (0, u.d8)(A, t).nick;
  return function(e, t) {
    let {
      isBlocked: n,
      isIgnored: i,
      authorNick: a
    } = t;
    if (n) return {
      type: "text",
      text: _.intl.string(_.t.XAkOo2)
    };
    if (i) return {
      type: "text",
      text: _.intl.string(_.t["G7p6v/"])
    };
    if (function(e) {
        switch (e.type) {
          case l.l.DEFAULT:
          case l.l.CHANGELOG:
          case l.l.REPLY:
          case l.l.CHAT_INPUT_COMMAND:
          case l.l.CONTEXT_MENU_COMMAND:
          case l.l.POLL_RESULT:
          case l.l.AUTO_MODERATION_ACTION:
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
          text: _.intl.string(_.t.slFYgi)
        };
        if (e.attachments.length > 0) {
          let t = e.attachments.every(e => (0, s.u)(e.filename)),
            n = !t && e.attachments.every(e => (0, s.AE)(e.filename)),
            r = !t && !n && e.attachments.every(e => (0, s.L8)(e.filename));
          return t ? {
            type: "text",
            text: _.intl.formatToPlainString(_.t.h4pFfU, {
              count: e.attachments.length
            }),
            trailingIcon: "image"
          } : n ? {
            type: "text",
            text: _.intl.formatToPlainString(_.t.SJ6pPX, {
              count: e.attachments.length
            }),
            trailingIcon: "video"
          } : r ? {
            type: "text",
            text: _.intl.formatToPlainString(_.t.fnO3hK, {
              count: e.attachments.length
            }),
            trailingIcon: "audio"
          } : {
            type: "text",
            text: _.intl.formatToPlainString(_.t["89ihS8"], {
              count: e.attachments.length
            }),
            trailingIcon: "attachment"
          }
        }
        if (e.embeds.length > 0) {
          let t = e.embeds.every(e => null != e.url && (0, s.Zj)(e.url)),
            n = !t && e.embeds.every(e => null != e.url && (0, s.r1)(e.url)),
            r = !t && !n && e.embeds.every(e => null != e.url && (0, s.L8)(e.url));
          if (t) return {
            type: "text",
            text: _.intl.formatToPlainString(_.t.h4pFfU, {
              count: e.embeds.length
            }),
            trailingIcon: "image"
          };
          if (n) return {
            type: "text",
            text: _.intl.formatToPlainString(_.t.SJ6pPX, {
              count: e.embeds.length
            }),
            trailingIcon: "video"
          };
          if (r) return {
            type: "text",
            text: _.intl.formatToPlainString(_.t.fnO3hK, {
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
            text: _.intl.formatToPlainString(_.t["9XuYjs"], {
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
            text: _.intl.formatToPlainString(_.t.ImizdM, {
              question: null == (t = e.poll) ? true : t.question.text
            })
          }
        }
        if ((0, o.A)(e)) return {
          type: "text",
          text: _.intl.string(_.t["9ddYKt"])
        }
      }(e);
      if (null != t) {
        var u, c;
        return u = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({}, t), c = c = {
          authorLabel: a
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(c)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
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
        otherUser: a,
        otherUserNick: o,
        isCallActive: s
      } = t;
      return e.type === l.l.RECIPIENT_ADD && null != o ? {
        type: "text",
        text: _.intl.formatToPlainString(_.t.MMN2Jq, {
          username: i,
          usernameHook: r.identity,
          otherUsername: o,
          otherUsernameHook: r.identity
        })
      } : e.type === l.l.RECIPIENT_REMOVE && null != o ? {
        type: "text",
        text: e.author.id === (null == a ? true : a.id) ? _.intl.formatToPlainString(_.t["5v2xa8"], {
          username: i,
          usernameHook: r.identity
        }) : _.intl.formatToPlainString(_.t.L2FyVq, {
          username: i,
          usernameHook: r.identity,
          otherUsername: o,
          otherUsernameHook: r.identity
        })
      } : e.type === l.l.CALL ? {
        type: "text",
        text: s ? _.intl.string(_.t["NGg/fm"]) : null == e.call || e.call.participants.includes(n) ? _.intl.string(_.t.v05Xd6) : _.intl.string(_.t["2CnhoI"]),
        color: s ? "text-feedback-positive" : true,
        trailingIcon: s ? "call-active" : "call-ended"
      } : e.type === l.l.CHANNEL_NAME_CHANGE ? {
        type: "text",
        text: _.intl.formatToPlainString(_.t.oItgEw, {
          username: i,
          usernameHook: r.identity,
          channelName: e.content
        })
      } : e.type === l.l.CHANNEL_ICON_CHANGE ? {
        type: "text",
        text: _.intl.formatToPlainString(_.t.OEdU6X, {
          username: i,
          usernameHook: r.identity
        })
      } : e.type === l.l.CHANNEL_PINNED_MESSAGE ? {
        type: "text",
        text: _.intl.formatToPlainString(_.t.vfkjqx, {
          username: i,
          usernameHook: r.identity
        })
      } : e.type === l.l.USER_JOIN ? {
        type: "text",
        text: _.intl.formatToPlainString(m.A.getSystemMessageUserJoin(e.id), {
          username: i,
          usernameHook: r.identity
        })
      } : e.type === l.l.THREAD_CREATED ? {
        type: "text",
        text: _.intl.formatToPlainString(_.t.SGaUAU, {
          actorName: i,
          actorHook: r.identity,
          threadName: e.content,
          threadOnClick: r.identity
        })
      } : e.type === l.l.PREMIUM_REFERRAL ? {
        type: "text",
        text: _.intl.formatToPlainString(_.t.lieTqU, {
          username: i
        })
      } : true
    }(e, t);
    if (null != d) return d
  }(e, {
    message: e,
    channel: t,
    currentUserId: y,
    authorNick: h,
    otherUser: A,
    otherUserNick: v,
    isBlocked: n,
    isIgnored: b,
    isCallActive: g
  })
}