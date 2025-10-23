/** Chunk was on 31688 **/
/** chunk id: 768864, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => y
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk239091 = require("./239091.js"),
  Chunk100527 = require("./100527.js"),
  Chunk880395 = require("./880395.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk795318 = require("./795318.js"),
  Chunk354459 = require("./354459.js"),
  Chunk981631 = require("./981631.js");

function p(e) {
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
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e) {
  let {
    channel: t,
    appContext: l = f.IlC.APP,
    analyticsLocation: y = s.Z.CHANNEL_CALL,
    onClose: m
  } = e;
  return i.useCallback((e, i, s, I) => {
    if (null == t) return;
    let C = {
      onClose: m,
      context: l
    };
    switch (e.type) {
      case h.fO.HIDDEN_STREAM:
      case h.fO.STREAM:
        (0, o.jW)(i, async () => {
          let {
            default: t
          } = await n.e("22183").then(n.bind(n, 987281));
          return n => (0, r.jsx)(t, p({
            stream: e.stream,
            appContext: l,
            minimal: s,
            exitFullscreen: () => {},
            onInteraction: (0, d.u)("StreamContextMenu", y, {
              entrypoint: I,
              tileType: h.TH.STREAM,
              targetUserId: e.user.id
            })
          }, n))
        }, C);
        return;
      case h.fO.USER:
        let O = c.default.getUser(e.id);
        if (null != O) {
          if (s) return (0, u.D)(i, O, t, C, (e, t) => {
            (0, d.u)(e, y, {
              entrypoint: h.A5.THREE_DOT,
              tileType: h.TH.USER,
              targetUserId: O.id
            })(t)
          });
          switch (t.type) {
            case f.d4z.DM:
              return (0, o.jW)(i, async () => {
                let {
                  default: e
                } = await Promise.all([n.e("79695"), n.e("98783"), n.e("56826"), n.e("31899")]).then(n.bind(n, 131404));
                return n => (0, r.jsx)(e, w(p({}, n), {
                  showChannelCallItems: true,
                  showMediaItems: true,
                  user: O,
                  channel: t,
                  showModalItems: true,
                  onInteraction: (0, d.u)("DMUserContextMenu", y, {
                    entrypoint: I,
                    tileType: h.TH.USER,
                    targetUserId: O.id
                  })
                }))
              }, C);
            case f.d4z.GROUP_DM:
              return (0, o.jW)(i, async () => {
                let {
                  default: e
                } = await Promise.all([n.e("79695"), n.e("98783"), n.e("49062")]).then(n.bind(n, 354589));
                return n => (0, r.jsx)(e, w(p({}, n), {
                  showChannelCallItems: true,
                  showMediaItems: true,
                  showChatItems: false,
                  user: O,
                  channel: t,
                  showModalItems: true,
                  onInteraction: (0, d.u)("GroupDMUserContextMenu", y, {
                    entrypoint: I,
                    tileType: h.TH.USER,
                    targetUserId: O.id
                  })
                }))
              }, C);
            case f.d4z.GUILD_VOICE:
            case f.d4z.PUBLIC_THREAD:
            case f.d4z.PRIVATE_THREAD:
              let e = t.getGuildId();
              return a()(null != e, "GuildID null for guild voice channel"), (0, o.jW)(i, async () => {
                let {
                  default: i
                } = await Promise.all([n.e("79695"), n.e("98783"), n.e("8982"), n.e("7717"), n.e("52021")]).then(n.bind(n, 757387));
                return n => (0, r.jsx)(i, w(p({}, n), {
                  showMediaItems: true,
                  showChannelCallItems: true,
                  showChatItems: false,
                  user: O,
                  channel: t,
                  guildId: e,
                  showModalItems: true,
                  onInteraction: (0, d.u)("GuildChannelUserContextMenu", y, {
                    entrypoint: I,
                    tileType: h.TH.USER,
                    targetUserId: O.id
                  })
                }))
              }, C)
          }
        }
        return;
      case h.fO.ACTIVITY:
        return
    }
  }, [t, l, y, m])
}