/** Chunk was on web.js **/
/** chunk id: 178762, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ir: () => H,
  J: () => V,
  YN: () => k,
  ZP: () => W,
  iZ: () => G
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk91192 = require("./91192.jsx"),
  Chunk876215 = require("./876215.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk607070 = require("./607070.js"),
  Chunk439170 = require("./439170.js"),
  Chunk594174 = require("./594174.js"),
  Chunk69259 = require("./69259.js"),
  Chunk370370 = require("./370370.jsx"),
  Chunk107062 = require("./107062.jsx"),
  Chunk159862 = require("./159862.jsx"),
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
  Chunk206583 = require("./206583.js");

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      D(e, t, n[t])
    })
  }
  return e
}

function L(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function x(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function M(e, t) {
  if (null == e) return {};
  var n, r, i = j(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function j(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let k = 72,
  U = 2e3;

function G(e) {
  return (null == e ? true : e.type) === _.so.CONTENT_INVENTORY ? k : 0
}
let B = e => {
    var {
      entry: t
    } = e, n = M(e, ["entry"]);
    switch (t.content_type) {
      case l.s.PLAYED_GAME:
        return (0, r.jsx)(E.Z, x(w({}, n), {
          entry: t
        }));
      case l.s.WATCHED_MEDIA:
        return (0, r.jsx)(C.Z, x(w({}, n), {
          entry: t
        }));
      case l.s.TOP_GAME:
        return (0, r.jsx)(S.ZP, x(w({}, n), {
          entry: t
        }));
      case l.s.TOP_ARTIST:
        return (0, r.jsx)(I.ZP, x(w({}, n), {
          entry: t
        }));
      case l.s.LISTENED_SESSION:
        return (0, r.jsx)(O.ZP, x(w({}, n), {
          entry: t
        }));
      case l.s.LAUNCHED_ACTIVITY:
        return (0, r.jsx)(m.Z, x(w({}, n), {
          entry: t
        }));
      default:
        return null
    }
  },
  Z = e => {
    var t, {
        entry: n,
        targetElementRef: i
      } = e,
      a = M(e, ["entry", "targetElementRef"]);
    return n.content_type === l.s.PLAYED_GAME ? (0, r.jsx)(y.Z, {
      entry: n,
      targetElementRef: i,
      isFirstApplicationOccurrence: null != (t = a.isFirstApplicationOccurrence) && t
    }) : null
  },
  F = e => {
    var {
      closePopout: t
    } = e, n = M(e, ["closePopout"]);
    return (0, r.jsx)(V, w({
      onReaction: (e, r) => {
        n.trackRankingItemInteraction(e, {
          destinationChannelId: r.id,
          destinationGuildId: r.guild_id
        }), t()
      },
      closePopout: t,
      onVoiceChannelPreview: e => {
        n.trackRankingItemInteraction(P.xP.VOICE_CHANNEL_PREVIEWED, {
          destinationChannelId: e.id,
          destinationGuildId: e.guild_id
        })
      }
    }, n))
  },
  V = e => {
    var {
      entry: t
    } = e, n = M(e, ["entry"]);
    switch (t.content_type) {
      case l.s.PLAYED_GAME:
        return (0, r.jsx)(b.Z, x(w({}, n), {
          entry: t
        }));
      case l.s.WATCHED_MEDIA:
        return (0, r.jsx)(N.Z, x(w({}, n), {
          entry: t
        }));
      case l.s.TOP_GAME:
        return (0, r.jsx)(A.Z, x(w({}, n), {
          entry: t
        }));
      case l.s.TOP_ARTIST:
        return (0, r.jsx)(T.Z, x(w({}, n), {
          entry: t
        }));
      case l.s.LISTENED_SESSION:
        return (0, r.jsx)(v.Z, x(w({}, n), {
          entry: t
        }));
      case l.s.LAUNCHED_ACTIVITY:
        return (0, r.jsx)(g.ZP, x(w({}, n), {
          entry: t
        }));
      default:
        return null
    }
  },
  H = Chunk473749.createContext(true),
  Y = e => {
    var t, {
        index: a,
        ref: l
      } = e,
      _ = M(e, ["index", "ref"]);
    let m = i.useRef(null),
      [g, E] = i.useState("default"),
      [b, y] = i.useState(false),
      O = (0, s.JA)("".concat(a)),
      v = null == (t = p.default.getCurrentUser()) ? true : t.isStaff(),
      {
        isRich: I,
        appName: T
      } = (0, R.n)(_.entry),
      S = i.useMemo(() => ({
        entry: _.entry,
        channelId: _.channel.id,
        guildId: _.channel.guild_id,
        requestId: _.requestId,
        richPresenceName: I ? T : true
      }), [T, _.channel.guild_id, _.channel.id, _.entry, _.requestId, I]),
      A = i.useRef(false),
      [C, N] = i.useState(false),
      [D, L] = i.useState(false),
      j = (0, c.e7)([f.Z], () => f.Z.keyboardModeEnabled);
    i.useEffect(() => {
      C && j && L(true)
    }, [C, j]), i.useLayoutEffect(() => {
      null != m.current && y(true)
    }, []);
    let k = i.useCallback(e => {
        v && (0, d.jW)(e, async () => {
          let {
            default: e
          } = await n.e("153").then(n.bind(n, 330150));
          return () => (0, r.jsx)(e, {
            entry: _.entry,
            requestId: _.requestId
          })
        })
      }, [_, v]),
      G = i.useCallback(() => {
        E(String(Date.now()))
      }, []),
      V = i.useCallback(function(e) {
        let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
        (0, h.L)(e, w({}, S, t))
      }, [S]),
      Y = i.useMemo(() => o().throttle(e => {
        (0, h.L)(P.xP.CARD_POPOUT_OPEN, e)
      }, U, {
        leading: true,
        trailing: false
      }), []),
      W = () => {
        A.current = false, setTimeout(() => {
          A.current || (N(false), L(j))
        }, 100)
      };
    return (0, r.jsxs)(r.Fragment, {
      children: [b && (0, r.jsx)(Z, x(w({}, _), {
        targetElementRef: m
      })), (0, r.jsx)("div", {
        ref: l,
        onMouseEnter: () => {
          A.current = true, setTimeout(() => {
            A.current && N(true), Y(S)
          }, 100)
        },
        onMouseLeave: W,
        children: (0, r.jsx)(u.yRy, {
          targetElementRef: m,
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return (0, r.jsx)(H.Provider, {
              value: W,
              children: (0, r.jsx)(F, w({
                closePopout: t,
                updatePopoutPosition: G,
                trackRankingItemInteraction: V
              }, _))
            })
          },
          position: "left",
          shouldShow: C,
          positionKey: g,
          onRequestOpen: () => Y(S),
          onRequestClose: () => {
            D && W()
          },
          spacing: 8,
          children: (e, t) => {
            let {
              isShown: n
            } = t;
            return (0, r.jsx)(u.P3F, x(w({}, e, O), {
              innerRef: m,
              focusProps: {
                offset: {
                  top: 4,
                  bottom: 4,
                  left: 4,
                  right: 4
                }
              },
              onClick: () => {
                C || N(true)
              },
              onContextMenu: k,
              children: (0, r.jsx)(B, x(w({}, _), {
                selected: n,
                hovered: A.current
              }))
            }))
          }
        })
      })]
    })
  },
  W = Chunk473749.memo(Y)