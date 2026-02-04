/** Chunk was on 36133 **/
/** chunk id: 567987, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => I
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk442433 = require("./442433.js"),
  Chunk793574 = require("./793574.js"),
  Chunk326567 = require("./326567.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk480890 = require("./480890.js"),
  Chunk806931 = require("./806931.js"),
  Chunk652215 = require("./652215.js");

function w(e) {
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

function f(e, t) {
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

function I(e) {
  let {
    channel: t
  } = e;
  return l.useCallback((e, l, i, I) => {
    if (null == t) return;
    let O = {
      context: p.BRT.CALL_TILE_POPOUT
    };
    switch (e.type) {
      case h.lp.HIDDEN_STREAM:
      case h.lp.STREAM:
        (0, a.L3)(l, async () => {
          let {
            default: t
          } = await n.e("66692").then(n.bind(n, 796175));
          return n => (0, r.jsx)(t, w({
            stream: e.stream,
            appContext: p.BRT.CALL_TILE_POPOUT,
            minimal: i,
            exitFullscreen: () => {},
            onInteraction: (0, d.s)("StreamContextMenu", o.A.CALL_TILE_POPOUT, {
              entrypoint: I,
              tileType: h.qs.STREAM,
              targetUserId: e.user.id
            })
          }, n))
        }, O);
        return;
      case h.lp.USER:
        let b = c.default.getUser(e.id);
        if (null != b) {
          if (i) return (0, u.r)(l, b, t, O, (e, t) => {
            (0, d.s)(e, o.A.CALL_TILE_POPOUT, {
              entrypoint: h.GK.THREE_DOT,
              tileType: h.qs.USER,
              targetUserId: b.id
            })(t)
          });
          switch (t.type) {
            case p.rbe.DM:
              return (0, a.L3)(l, async () => {
                let {
                  default: e
                } = await Promise.all([n.e("97262"), n.e("29534"), n.e("93169"), n.e("39778"), n.e("54266")]).then(n.bind(n, 385913));
                return n => (0, r.jsx)(e, f(w({}, n), {
                  showChannelCallItems: true,
                  showMediaItems: true,
                  user: b,
                  channel: t,
                  showModalItems: true,
                  onInteraction: (0, d.s)("DMUserContextMenu", o.A.CALL_TILE_POPOUT, {
                    entrypoint: I,
                    tileType: h.qs.USER,
                    targetUserId: b.id
                  })
                }))
              }, O);
            case p.rbe.GROUP_DM:
              return (0, a.L3)(l, async () => {
                let {
                  default: e
                } = await Promise.all([n.e("97262"), n.e("29534"), n.e("62891"), n.e("42296")]).then(n.bind(n, 228006));
                return n => (0, r.jsx)(e, f(w({}, n), {
                  showChannelCallItems: true,
                  showMediaItems: true,
                  showChatItems: false,
                  user: b,
                  channel: t,
                  showModalItems: true,
                  onInteraction: (0, d.s)("GroupDMUserContextMenu", o.A.CALL_TILE_POPOUT, {
                    entrypoint: I,
                    tileType: h.qs.USER,
                    targetUserId: b.id
                  })
                }))
              }, O);
            case p.rbe.GUILD_VOICE:
            case p.rbe.PUBLIC_THREAD:
            case p.rbe.PRIVATE_THREAD:
              let e = t.getGuildId();
              return s()(null != e, "GuildID null for guild voice channel"), (0, a.L3)(l, async () => {
                let {
                  default: l
                } = await Promise.all([n.e("97262"), n.e("29534"), n.e("48469"), n.e("84841"), n.e("31885")]).then(n.bind(n, 107632));
                return n => (0, r.jsx)(l, f(w({}, n), {
                  showMediaItems: true,
                  showChannelCallItems: true,
                  showChatItems: false,
                  user: b,
                  channel: t,
                  guildId: e,
                  showModalItems: true,
                  onInteraction: (0, d.s)("GuildChannelUserContextMenu", o.A.CALL_TILE_POPOUT, {
                    entrypoint: I,
                    tileType: h.qs.USER,
                    targetUserId: b.id
                  })
                }))
              }, O)
          }
        }
        return;
      case h.lp.ACTIVITY:
        return
    }
  }, [t])
}