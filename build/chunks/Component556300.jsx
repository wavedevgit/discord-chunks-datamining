/** Chunk was on web.js **/
/** chunk id: 556300, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk956793 = require("./956793.js"),
  Chunk235393 = require("./235393.js"),
  Chunk376943 = require("./376943.js"),
  Chunk22007 = require("./22007.js"),
  Chunk332173 = require("./332173.jsx"),
  Chunk37632 = require("./37632.jsx"),
  Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk449054 = require("./449054.js"),
  Chunk365526 = require("./365526.js"),
  Chunk652215 = require("./652215.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
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

function b(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
async function v(e, t, n) {
  if (null == t) return;
  if (o.A.trackDiscordLinkClicked({
      guildId: e,
      channelId: t,
      messageId: n
    }), null != e) {
    let r = _.A.getGuild(e);
    if ((null == r ? true : r.joinedAt) == null) try {
      await h.Z2(e, {}, {
        channelId: t,
        messageId: n
      });
      return
    } catch (e) {}
  }
  let r = p.A.getChannel(t);
  null != r && null == n && (0, f.ay)(r.type) && (0, l.nc)(r) ? s.default.selectVoiceChannel(r.id) : (0, c.A)(g.BVt.CHANNEL(e, t, n))
}

function A(e) {
  return {
    react(t, s, o) {
      let l = p.A.getChannel(t.channelId),
        c = o.noStyleAndInteraction ? true : n => {
          e.shouldStopPropagation && (null == n || n.stopPropagation()), v(t.guildId, t.channelId, t.messageId), e.shouldCloseDefaultModals && (0, i.s7G)()
        },
        f = o.noStyleAndInteraction || null == t.channelId || null == l && null == t.originalLink ? g.tEg : e => {
          (0, a.L3)(e, async () => {
            let {
              default: e
            } = await n.e("99041").then(n.bind(n, 612856));
            return n => {
              var i;
              return (0, r.jsx)(e, O(y({}, n), {
                channel: l,
                channelId: null != (i = null == l ? true : l.id) ? i : t.channelId,
                originalLink: t.originalLink,
                messageId: t.messageId
              }))
            }
          })
        };
      return (0, r.jsxs)(u.A, {
        role: "link",
        onClick: c,
        onContextMenu: f,
        className: "channelMention",
        children: [null != t.inContent ? s(t.inContent, o) : null, null != t.inContent ? (0, r.jsx)(d.A, {}) : null, (0, m.t)(t, s, o)]
      }, o.key)
    }
  }
}