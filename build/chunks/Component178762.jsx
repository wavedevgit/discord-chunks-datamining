/** Chunk was on web.js **/
/** chunk id: 178762, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ir: () => X,
  J: () => q,
  YN: () => F,
  ZP: () => J,
  iZ: () => Y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
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
  Chunk342998 = require("./342998.jsx"),
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

function k(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function U(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      k(e, t, n[t])
    })
  }
  return e
}

function G(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function B(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : G(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function Z(e, t) {
  if (null == e) return {};
  var n, r, i = V(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function V(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let F = 72,
  H = 2e3;

function Y(e) {
  return (null == e ? true : e.type) === E.so.CONTENT_INVENTORY ? F : 0
}
let W = e => {
    var {
      entry: t
    } = e, n = Z(e, ["entry"]);
    switch (t.content_type) {
      case l.s.PLAYED_GAME:
        return (0, r.jsx)(I.Z, B(U({}, n), {
          entry: t
        }));
      case l.s.WATCHED_MEDIA:
        return (0, r.jsx)(D.Z, B(U({}, n), {
          entry: t
        }));
      case l.s.TOP_GAME:
        return (0, r.jsx)(P.ZP, B(U({}, n), {
          entry: t
        }));
      case l.s.TOP_ARTIST:
        return (0, r.jsx)(N.ZP, B(U({}, n), {
          entry: t
        }));
      case l.s.LISTENED_SESSION:
        return (0, r.jsx)(A.ZP, B(U({}, n), {
          entry: t
        }));
      case l.s.LAUNCHED_ACTIVITY:
        return (0, r.jsx)(O.Z, B(U({}, n), {
          entry: t
        }));
      case l.s.LEADERBOARD:
        return (0, r.jsx)(g.Z, B(U({}, n), {
          entry: t
        }));
      default:
        return null
    }
  },
  K = e => {
    var t, {
        entry: n,
        targetElementRef: i
      } = e,
      a = Z(e, ["entry", "targetElementRef"]);
    return n.content_type === l.s.PLAYED_GAME ? (0, r.jsx)(S.Z, {
      entry: n,
      targetElementRef: i,
      isFirstApplicationOccurrence: null != (t = a.isFirstApplicationOccurrence) && t
    }) : null
  },
  z = e => {
    var {
      closePopout: t
    } = e, n = Z(e, ["closePopout"]);
    return (0, r.jsx)(q, U({
      onReaction: (e, r) => {
        n.trackRankingItemInteraction(e, {
          destinationChannelId: r.id,
          destinationGuildId: r.guild_id
        }), t()
      },
      closePopout: t,
      onVoiceChannelPreview: e => {
        n.trackRankingItemInteraction(j.xP.VOICE_CHANNEL_PREVIEWED, {
          destinationChannelId: e.id,
          destinationGuildId: e.guild_id
        })
      }
    }, n))
  },
  q = e => {
    var t, {
        entry: n
      } = e,
      i = Z(e, ["entry"]);
    switch (n.content_type) {
      case l.s.PLAYED_GAME:
        return (0, r.jsx)(T.Z, B(U({}, i), {
          entry: n
        }));
      case l.s.WATCHED_MEDIA:
        return (0, r.jsx)(x.Z, B(U({}, i), {
          entry: n
        }));
      case l.s.TOP_GAME:
        return (0, r.jsx)(w.Z, B(U({}, i), {
          entry: n
        }));
      case l.s.TOP_ARTIST:
        return (0, r.jsx)(R.Z, B(U({}, i), {
          entry: n
        }));
      case l.s.LISTENED_SESSION:
        return (0, r.jsx)(C.Z, B(U({}, i), {
          entry: n
        }));
      case l.s.LAUNCHED_ACTIVITY:
        return (0, r.jsx)(v.ZP, B(U({}, i), {
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
  X = Chunk647438.createContext(true),
  Q = e => {
    var t, {
        index: a,
        ref: p
      } = e,
      m = Z(e, ["index", "ref"]);
    let g = i.useRef(null),
      [E, O] = i.useState("default"),
      [v, I] = i.useState(false),
      T = (0, s.JA)("".concat(a)),
      S = null == (t = b.default.getCurrentUser()) ? true : t.isStaff(),
      {
        isRich: A,
        appName: C
      } = (0, L.n)(m.entry),
      N = i.useMemo(() => ({
        entry: m.entry,
        channelId: m.channel.id,
        guildId: m.channel.guild_id,
        requestId: m.requestId,
        richPresenceName: A ? C : true
      }), [C, m.channel.guild_id, m.channel.id, m.entry, m.requestId, A]),
      R = i.useRef(false),
      [P, w] = i.useState(false),
      [D, x] = i.useState(false),
      k = (0, c.e7)([_.Z], () => _.Z.keyboardModeEnabled);
    i.useEffect(() => {
      P && k && x(true)
    }, [P, k]), i.useLayoutEffect(() => {
      null != g.current && I(true)
    }, []);
    let G = i.useCallback(e => {
        S && (0, f.jW)(e, async () => {
          let {
            default: e
          } = await n.e("153").then(n.bind(n, 330150));
          return () => (0, r.jsx)(e, {
            entry: m.entry,
            requestId: m.requestId
          })
        })
      }, [m, S]),
      V = i.useCallback(() => {
        O(String(Date.now()))
      }, []),
      F = i.useCallback(function(e) {
        let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
        (0, y.L)(e, U({}, N, t))
      }, [N]),
      Y = i.useMemo(() => o().throttle(e => {
        (0, y.L)(j.xP.CARD_POPOUT_OPEN, e)
      }, H, {
        leading: true,
        trailing: false
      }), []),
      q = () => {
        R.current = false, setTimeout(() => {
          R.current || (w(false), x(k))
        }, 100)
      };
    return (0, r.jsxs)(r.Fragment, {
      children: [v && (0, r.jsx)(K, B(U({}, m), {
        targetElementRef: g
      })), (0, r.jsx)("div", {
        ref: p,
        onMouseEnter: () => {
          m.entry.content_type !== l.s.LEADERBOARD || (0, h.zu)(u.z.LEADERBOARD_NUX_COACHMARK) || (0, h.Q3)(u.z.LEADERBOARD_NUX_COACHMARK, {
            dismissAction: M.L.SECONDARY
          }), R.current = true, setTimeout(() => {
            R.current && w(true), Y(N)
          }, 100)
        },
        onMouseLeave: q,
        children: (0, r.jsx)(d.yRy, {
          targetElementRef: g,
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return (0, r.jsx)(X.Provider, {
              value: q,
              children: (0, r.jsx)(z, U({
                closePopout: t,
                updatePopoutPosition: V,
                trackRankingItemInteraction: F
              }, m))
            })
          },
          position: "left",
          shouldShow: P,
          positionKey: E,
          onRequestOpen: () => Y(N),
          onRequestClose: () => {
            D && q()
          },
          spacing: 8,
          children: (e, t) => {
            let {
              isShown: n
            } = t;
            return (0, r.jsx)(d.P3F, B(U({}, e, T), {
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
                P || w(true)
              },
              onContextMenu: G,
              children: (0, r.jsx)(W, B(U({}, m), {
                selected: n,
                hovered: R.current
              }))
            }))
          }
        })
      })]
    })
  },
  J = Chunk647438.memo(Q)