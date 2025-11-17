/** Chunk was on web.js **/
/** chunk id: 551452, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk287734 = require("./287734.js"),
  Chunk364640 = require("./364640.js"),
  Chunk754688 = require("./754688.js"),
  Chunk336197 = require("./336197.js"),
  Chunk124072 = require("./124072.jsx"),
  Chunk891984 = require("./891984.jsx"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk900849 = require("./900849.js"),
  Chunk746878 = require("./746878.js"),
  Chunk981631 = require("./981631.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
async function v(e, t, n) {
  if (null == t) return;
  if (s.Z.trackDiscordLinkClicked({
      guildId: e,
      channelId: t,
      messageId: n
    }), null != e) {
    let r = p.Z.getGuild(e);
    if ((null == r ? true : r.joinedAt) == null) try {
      await h.Ub(e, {}, {
        channelId: t,
        messageId: n
      });
      return
    } catch (e) {}
  }
  let r = _.Z.getChannel(t);
  if (null != r && null == n && (0, f.bw)(r.type) && (0, l.YO)(r)) return void o.default.selectVoiceChannel(r.id);
  (0, c.Z)(g.Z5c.CHANNEL(e, t, n))
}

function I(e) {
  return {
    react(t, o, s) {
      let l = _.Z.getChannel(t.channelId),
        c = s.noStyleAndInteraction ? true : n => {
          e.shouldStopPropagation && (null == n || n.stopPropagation()), v(t.guildId, t.channelId, t.messageId), e.shouldCloseDefaultModals && (0, i.pTH)()
        },
        f = s.noStyleAndInteraction || null == t.channelId || null == l && null == t.originalLink ? g.dG4 : e => {
          (0, a.jW)(e, async () => {
            let {
              default: e
            } = await n.e("9573").then(n.bind(n, 546649));
            return n => {
              var i;
              return (0, r.jsx)(e, O(b({}, n), {
                channel: l,
                channelId: null != (i = null == l ? true : l.id) ? i : t.channelId,
                originalLink: t.originalLink,
                messageId: t.messageId
              }))
            }
          })
        };
      return (0, r.jsxs)(u.Z, {
        role: "link",
        onClick: c,
        onContextMenu: f,
        className: "channelMention",
        children: [null != t.inContent ? o(t.inContent, s) : null, null != t.inContent ? (0, r.jsx)(d.Z, {}) : null, (0, m.S)(t, o, s)]
      }, s.key)
    }
  }
}