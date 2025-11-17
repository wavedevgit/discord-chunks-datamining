/** Chunk was on 31688 **/
/** chunk id: 768864, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => O
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function O(e) {
  let {
    channel: t
  } = e;
  return i.useCallback((e, i, l, O) => {
    if (null == t) return;
    let I = {
      context: f.IlC.CALL_TILE_POPOUT
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
            appContext: f.IlC.CALL_TILE_POPOUT,
            minimal: l,
            exitFullscreen: () => {},
            onInteraction: (0, d.u)("StreamContextMenu", s.Z.CALL_TILE_POPOUT, {
              entrypoint: O,
              tileType: h.TH.STREAM,
              targetUserId: e.user.id
            })
          }, n))
        }, I);
        return;
      case h.fO.USER:
        let C = c.default.getUser(e.id);
        if (null != C) {
          if (l) return (0, u.D)(i, C, t, I, (e, t) => {
            (0, d.u)(e, s.Z.CALL_TILE_POPOUT, {
              entrypoint: h.A5.THREE_DOT,
              tileType: h.TH.USER,
              targetUserId: C.id
            })(t)
          });
          switch (t.type) {
            case f.d4z.DM:
              return (0, o.jW)(i, async () => {
                let {
                  default: e
                } = await Promise.all([n.e("79695"), n.e("66165"), n.e("56826"), n.e("31899")]).then(n.bind(n, 131404));
                return n => (0, r.jsx)(e, w(p({}, n), {
                  showChannelCallItems: true,
                  showMediaItems: true,
                  user: C,
                  channel: t,
                  showModalItems: true,
                  onInteraction: (0, d.u)("DMUserContextMenu", s.Z.CALL_TILE_POPOUT, {
                    entrypoint: O,
                    tileType: h.TH.USER,
                    targetUserId: C.id
                  })
                }))
              }, I);
            case f.d4z.GROUP_DM:
              return (0, o.jW)(i, async () => {
                let {
                  default: e
                } = await Promise.all([n.e("79695"), n.e("66165"), n.e("49062")]).then(n.bind(n, 354589));
                return n => (0, r.jsx)(e, w(p({}, n), {
                  showChannelCallItems: true,
                  showMediaItems: true,
                  showChatItems: false,
                  user: C,
                  channel: t,
                  showModalItems: true,
                  onInteraction: (0, d.u)("GroupDMUserContextMenu", s.Z.CALL_TILE_POPOUT, {
                    entrypoint: O,
                    tileType: h.TH.USER,
                    targetUserId: C.id
                  })
                }))
              }, I);
            case f.d4z.GUILD_VOICE:
            case f.d4z.PUBLIC_THREAD:
            case f.d4z.PRIVATE_THREAD:
              let e = t.getGuildId();
              return a()(null != e, "GuildID null for guild voice channel"), (0, o.jW)(i, async () => {
                let {
                  default: i
                } = await Promise.all([n.e("79695"), n.e("66165"), n.e("8982"), n.e("7717"), n.e("52021")]).then(n.bind(n, 757387));
                return n => (0, r.jsx)(i, w(p({}, n), {
                  showMediaItems: true,
                  showChannelCallItems: true,
                  showChatItems: false,
                  user: C,
                  channel: t,
                  guildId: e,
                  showModalItems: true,
                  onInteraction: (0, d.u)("GuildChannelUserContextMenu", s.Z.CALL_TILE_POPOUT, {
                    entrypoint: O,
                    tileType: h.TH.USER,
                    targetUserId: C.id
                  })
                }))
              }, I)
          }
        }
        return;
      case h.fO.ACTIVITY:
        return
    }
  }, [t])
}