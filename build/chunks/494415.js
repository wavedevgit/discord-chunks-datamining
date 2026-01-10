/** Chunk was on 83772 **/
/** chunk id: 494415, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  sY: () => v
});
var Chunk392711 = require("./392711.js"),
  Chunk275726 = require("./275726.js"),
  Chunk442837 = require("./442837.js"),
  Chunk179191 = require("./179191.js"),
  Chunk978003 = require("./978003.js"),
  Chunk406432 = require("./406432.js"),
  Chunk739566 = require("./739566.js"),
  Chunk314897 = require("./314897.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk352736 = require("./352736.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function v(e, t) {
  let {
    isBlocked: n,
    isIgnored: v
  } = (0, i.cj)([d.Z], () => ({
    isBlocked: d.Z.isBlocked(e.author.id),
    isIgnored: d.Z.isIgnored(e.author.id)
  }), [e.author.id]), y = (0, s.ZP)(t.id, e.id), x = (0, i.e7)([c.default], () => c.default.getId()), b = (0, u.ZP)(e).nick, h = e.author.id === x ? g.intl.string(g.t.LuZzxn) : b, j = (0, i.e7)([m.default], () => e.mentions.length > 0 ? m.default.getUser(e.mentions[0]) : true), O = (0, u.Sw)(j, t).nick;
  return function(e, t) {
    let {
      isBlocked: n,
      isIgnored: i,
      authorNick: s
    } = t;
    if (n) return {
      type: "text",
      text: g.intl.string(g.t.XAkOo2)
    };
    if (i) return {
      type: "text",
      text: g.intl.string(g.t["G7p6v/"])
    };
    if (function(e) {
        switch (e.type) {
          case l.u.DEFAULT:
          case l.u.CHANGELOG:
          case l.u.REPLY:
          case l.u.CHAT_INPUT_COMMAND:
          case l.u.CONTEXT_MENU_COMMAND:
          case l.u.POLL_RESULT:
          case l.u.AUTO_MODERATION_ACTION:
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
        if (e.hasFlag(p.iLy.IS_VOICE_MESSAGE)) return {
          type: "text",
          text: g.intl.string(g.t.slFYgi)
        };
        if (e.attachments.length > 0) {
          let t = e.attachments.every(e => (0, o.CO)(e.filename)),
            n = !t && e.attachments.every(e => (0, o.NU)(e.filename)),
            r = !t && !n && e.attachments.every(e => (0, o.TN)(e.filename));
          return t ? {
            type: "text",
            text: g.intl.formatToPlainString(g.t.h4pFfU, {
              count: e.attachments.length
            }),
            trailingIcon: "image"
          } : n ? {
            type: "text",
            text: g.intl.formatToPlainString(g.t.SJ6pPX, {
              count: e.attachments.length
            }),
            trailingIcon: "video"
          } : r ? {
            type: "text",
            text: g.intl.formatToPlainString(g.t.fnO3hK, {
              count: e.attachments.length
            }),
            trailingIcon: "audio"
          } : {
            type: "text",
            text: g.intl.formatToPlainString(g.t["89ihS8"], {
              count: e.attachments.length
            }),
            trailingIcon: "attachment"
          }
        }
        if (e.embeds.length > 0) {
          let t = e.embeds.every(e => null != e.url && (0, o.hU)(e.url)),
            n = !t && e.embeds.every(e => null != e.url && (0, o.cb)(e.url)),
            r = !t && !n && e.embeds.every(e => null != e.url && (0, o.TN)(e.url));
          if (t) return {
            type: "text",
            text: g.intl.formatToPlainString(g.t.h4pFfU, {
              count: e.embeds.length
            }),
            trailingIcon: "image"
          };
          if (n) return {
            type: "text",
            text: g.intl.formatToPlainString(g.t.SJ6pPX, {
              count: e.embeds.length
            }),
            trailingIcon: "video"
          };
          if (r) return {
            type: "text",
            text: g.intl.formatToPlainString(g.t.fnO3hK, {
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
            text: g.intl.formatToPlainString(g.t["9XuYjs"], {
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
            text: g.intl.formatToPlainString(g.t.ImizdM, {
              question: null == (t = e.poll) ? true : t.question.text
            })
          }
        }
        if ((0, a.Z)(e)) return {
          type: "text",
          text: g.intl.string(g.t["9ddYKt"])
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
          authorLabel: s
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
        otherUser: s,
        otherUserNick: a,
        isCallActive: o
      } = t;
      return e.type === l.u.RECIPIENT_ADD && null != a ? {
        type: "text",
        text: g.intl.formatToPlainString(g.t.MMN2Jq, {
          username: i,
          usernameHook: r.identity,
          otherUsername: a,
          otherUsernameHook: r.identity
        })
      } : e.type === l.u.RECIPIENT_REMOVE && null != a ? {
        type: "text",
        text: e.author.id === (null == s ? true : s.id) ? g.intl.formatToPlainString(g.t["5v2xa8"], {
          username: i,
          usernameHook: r.identity
        }) : g.intl.formatToPlainString(g.t.L2FyVq, {
          username: i,
          usernameHook: r.identity,
          otherUsername: a,
          otherUsernameHook: r.identity
        })
      } : e.type === l.u.CALL ? {
        type: "text",
        text: o ? g.intl.string(g.t["NGg/fm"]) : null == e.call || e.call.participants.includes(n) ? g.intl.string(g.t.v05Xd6) : g.intl.string(g.t["2CnhoI"]),
        color: o ? "text-feedback-positive" : true,
        trailingIcon: o ? "call-active" : "call-ended"
      } : e.type === l.u.CHANNEL_NAME_CHANGE ? {
        type: "text",
        text: g.intl.formatToPlainString(g.t.oItgEw, {
          username: i,
          usernameHook: r.identity,
          channelName: e.content
        })
      } : e.type === l.u.CHANNEL_ICON_CHANGE ? {
        type: "text",
        text: g.intl.formatToPlainString(g.t.OEdU6X, {
          username: i,
          usernameHook: r.identity
        })
      } : e.type === l.u.CHANNEL_PINNED_MESSAGE ? {
        type: "text",
        text: g.intl.formatToPlainString(g.t.vfkjqx, {
          username: i,
          usernameHook: r.identity
        })
      } : e.type === l.u.USER_JOIN ? {
        type: "text",
        text: g.intl.formatToPlainString(f.Z.getSystemMessageUserJoin(e.id), {
          username: i,
          usernameHook: r.identity
        })
      } : e.type === l.u.THREAD_CREATED ? {
        type: "text",
        text: g.intl.formatToPlainString(g.t.SGaUAU, {
          actorName: i,
          actorHook: r.identity,
          threadName: e.content,
          threadOnClick: r.identity
        })
      } : e.type === l.u.PREMIUM_REFERRAL ? {
        type: "text",
        text: g.intl.formatToPlainString(g.t.lieTqU, {
          username: i
        })
      } : true
    }(e, t);
    if (null != d) return d
  }(e, {
    message: e,
    channel: t,
    currentUserId: x,
    authorNick: h,
    otherUser: j,
    otherUserNick: O,
    isBlocked: n,
    isIgnored: v,
    isCallActive: y
  })
}