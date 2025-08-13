/** Chunk was on web.js **/
/** chunk id: 178762, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ir: () => z,
  J: () => K,
  YN: () => F,
  ZP: () => X,
  iZ: () => H
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk91192 = require("./91192.jsx"),
  Chunk876215 = require("./876215.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk266454 = require("./266454.js"),
  Chunk704041 = require("./704041.jsx"),
  Chunk475676 = require("./475676.jsx"),
  Chunk439170 = require("./439170.js"),
  Chunk594174 = require("./594174.js"),
  Chunk69259 = require("./69259.js"),
  Chunk370370 = require("./370370.jsx"),
  Chunk107062 = require("./107062.jsx"),
  Chunk91140 = require("./91140.jsx"),
  Chunk227172 = require("./227172.jsx"),
  Chunk551228 = require("./551228.jsx"),
  Chunk678869 = require("./678869.jsx"),
  Chunk278399 = require("./278399.jsx"),
  Chunk886217 = require("./886217.jsx"),
  Chunk555672 = require("./555672.jsx"),
  Chunk644548 = require("./644548.jsx"),
  Chunk335326 = require("./335326.jsx"),
  Chunk268010 = require("./268010.jsx"),
  Chunk797342 = require("./797342.js"),
  Chunk206583 = require("./206583.js"),
  Chunk921944 = require("./921944.js");

function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      j(e, t, n[t])
    })
  }
  return e
}

function U(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function G(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : U(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function B(e, t) {
  if (null == e) return {};
  var n, r, i = Z(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function Z(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let F = 72,
  V = 2e3;

function H(e) {
  return (null == e ? true : e.type) === E.so.CONTENT_INVENTORY ? F : 0
}
let Y = e => {
    var {
      entry: t
    } = e, n = B(e, ["entry"]);
    switch (t.content_type) {
      case l.s.PLAYED_GAME:
        return (0, r.jsx)(I.Z, G(k({}, n), {
          entry: t
        }));
      case l.s.WATCHED_MEDIA:
        return (0, r.jsx)(w.Z, G(k({}, n), {
          entry: t
        }));
      case l.s.TOP_GAME:
        return (0, r.jsx)(R.ZP, G(k({}, n), {
          entry: t
        }));
      case l.s.TOP_ARTIST:
        return (0, r.jsx)(N.ZP, G(k({}, n), {
          entry: t
        }));
      case l.s.LISTENED_SESSION:
        return (0, r.jsx)(S.ZP, G(k({}, n), {
          entry: t
        }));
      case l.s.LAUNCHED_ACTIVITY:
        return (0, r.jsx)(O.Z, G(k({}, n), {
          entry: t
        }));
      case l.s.LEADERBOARD:
        return (0, r.jsx)(g.Z, G(k({}, n), {
          entry: t
        }));
      default:
        return null
    }
  },
  W = e => {
    var {
      closePopout: t
    } = e, n = B(e, ["closePopout"]);
    return (0, r.jsx)(K, k({
      onReaction: (e, r) => {
        n.trackRankingItemInteraction(e, {
          destinationChannelId: r.id,
          destinationGuildId: r.guild_id
        }), t()
      },
      closePopout: t,
      onVoiceChannelPreview: e => {
        n.trackRankingItemInteraction(x.xP.VOICE_CHANNEL_PREVIEWED, {
          destinationChannelId: e.id,
          destinationGuildId: e.guild_id
        })
      }
    }, n))
  },
  K = e => {
    var t, {
        entry: n
      } = e,
      i = B(e, ["entry"]);
    switch (n.content_type) {
      case l.s.PLAYED_GAME:
        return (0, r.jsx)(T.Z, G(k({}, i), {
          entry: n
        }));
      case l.s.WATCHED_MEDIA:
        return (0, r.jsx)(D.Z, G(k({}, i), {
          entry: n
        }));
      case l.s.TOP_GAME:
        return (0, r.jsx)(P.Z, G(k({}, i), {
          entry: n
        }));
      case l.s.TOP_ARTIST:
        return (0, r.jsx)(C.Z, G(k({}, i), {
          entry: n
        }));
      case l.s.LISTENED_SESSION:
        return (0, r.jsx)(A.Z, G(k({}, i), {
          entry: n
        }));
      case l.s.LAUNCHED_ACTIVITY:
        return (0, r.jsx)(v.ZP, G(k({}, i), {
          entry: n
        }));
      case l.s.LEADERBOARD:
        return (null == (t = i.channel) ? true : t.guild_id) != null ? (0, r.jsx)(m.Z, {
          guildId: i.channel.guild_id,
          leaderboardId: n.extra.leaderboard_id,
          source: p.Z.MEMBER_LIST,
          trackRankingItemInteraction: i.trackRankingItemInteraction
        }) : null;
      default:
        return null
    }
  },
  z = Chunk73800.createContext(true),
  q = e => {
    var t, {
        index: o,
        ref: p
      } = e,
      m = B(e, ["index", "ref"]);
    let g = i.useRef(null),
      [E, O] = i.useState("default"),
      v = (0, s.JA)("".concat(o)),
      I = null == (t = b.default.getCurrentUser()) ? true : t.isStaff(),
      {
        isRich: T,
        appName: S
      } = (0, L.n)(m.entry),
      A = i.useMemo(() => ({
        entry: m.entry,
        channelId: m.channel.id,
        guildId: m.channel.guild_id,
        requestId: m.requestId,
        richPresenceName: T ? S : true
      }), [S, m.channel.guild_id, m.channel.id, m.entry, m.requestId, T]),
      N = i.useRef(false),
      [C, R] = i.useState(false),
      [P, w] = i.useState(false),
      D = (0, c.e7)([_.Z], () => _.Z.keyboardModeEnabled);
    i.useEffect(() => {
      C && D && w(true)
    }, [C, D]);
    let j = i.useCallback(e => {
        I && (0, f.jW)(e, async () => {
          let {
            default: e
          } = await n.e("153").then(n.bind(n, 330150));
          return () => (0, r.jsx)(e, {
            entry: m.entry,
            requestId: m.requestId
          })
        })
      }, [m, I]),
      U = i.useCallback(() => {
        O(String(Date.now()))
      }, []),
      Z = i.useCallback(function(e) {
        let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
        (0, y.L)(e, k({}, A, t))
      }, [A]),
      F = i.useMemo(() => a().throttle(e => {
        (0, y.L)(x.xP.CARD_POPOUT_OPEN, e)
      }, V, {
        leading: true,
        trailing: false
      }), []),
      H = () => {
        N.current = false, setTimeout(() => {
          N.current || (R(false), w(D))
        }, 100)
      };
    return (0, r.jsx)("div", {
      ref: p,
      onMouseEnter: () => {
        m.entry.content_type !== l.s.LEADERBOARD || (0, h.zu)(u.z.LEADERBOARD_NUX_COACHMARK) || (0, h.Q3)(u.z.LEADERBOARD_NUX_COACHMARK, {
          dismissAction: M.L.SECONDARY
        }), N.current = true, setTimeout(() => {
          N.current && R(true), F(A)
        }, 100)
      },
      onMouseLeave: H,
      children: (0, r.jsx)(d.yRy, {
        targetElementRef: g,
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, r.jsx)(z.Provider, {
            value: H,
            children: (0, r.jsx)(W, k({
              closePopout: t,
              updatePopoutPosition: U,
              trackRankingItemInteraction: Z
            }, m))
          })
        },
        position: "left",
        shouldShow: C,
        positionKey: E,
        onRequestOpen: () => F(A),
        onRequestClose: () => {
          P && H()
        },
        spacing: 8,
        children: (e, t) => {
          let {
            isShown: n
          } = t;
          return (0, r.jsx)(d.P3F, G(k({}, e, v), {
            innerRef: g,
            focusProps: {
              offset: {
                top: 4,
                bottom: 4,
                left: 4,
                right: 4
              }
            },
            onClick: () => {
              C || R(true)
            },
            onContextMenu: j,
            children: (0, r.jsx)(Y, G(k({}, m), {
              selected: n,
              hovered: N.current
            }))
          }))
        }
      })
    })
  },
  X = Chunk73800.memo(q)