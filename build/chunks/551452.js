/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  Z: () => S
});
var r = n(200651);
n(192379);
var i = n(481060),
  o = n(239091),
  a = n(287734),
  s = n(364640),
  l = n(754688),
  c = n(336197),
  u = n(124072),
  d = n(692629),
  f = n(131704),
  p = n(592125),
  _ = n(430824),
  h = n(900849),
  m = n(746878),
  g = n(981631);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function v(e) {
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

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
async function O(e, t, n) {
  if (null == t) return;
  if (s.Z.trackDiscordLinkClicked({
      guildId: e,
      channelId: t,
      messageId: n
    }), null != e) {
    let n = _.Z.getGuild(e);
    if ((null == n ? void 0 : n.joinedAt) == null) try {
      await h.Ub(e, {}, {
        channelId: t
      });
      return
    } catch (e) {}
  }
  let r = p.Z.getChannel(t);
  if (null != r && null == n && (0, f.bw)(r.type) && (0, l.YO)(r)) {
    a.default.selectVoiceChannel(r.id);
    return
  }(0, c.Z)(g.Z5c.CHANNEL(e, t, n))
}

function S(e) {
  return {
    react(t, a, s) {
      let l = p.Z.getChannel(t.channelId),
        c = s.noStyleAndInteraction ? void 0 : n => {
          e.shouldStopPropagation && (null == n || n.stopPropagation()), O(t.guildId, t.channelId, t.messageId), e.shouldCloseDefaultModals && (0, i.pTH)()
        },
        f = s.noStyleAndInteraction || null == t.channelId || null == l && null == t.originalLink ? g.dG4 : e => {
          (0, o.jW)(e, async () => {
            let {
              default: e
            } = await n.e("9573").then(n.bind(n, 546649));
            return n => {
              var i;
              return (0, r.jsx)(e, y(v({}, n), {
                channel: l,
                channelId: null !== (i = null == l ? void 0 : l.id) && void 0 !== i ? i : t.channelId,
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
        children: [null != t.inContent ? a(t.inContent, s) : null, null != t.inContent ? (0, r.jsx)(d.Z, {}) : null, (0, m.S)(t, a, s)]
      }, s.key)
    }
  }
}