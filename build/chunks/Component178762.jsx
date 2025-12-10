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

function x(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function L(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : x(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function j(e, t) {
  if (null == e) return {};
  var n, r, i = M(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function M(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let k = 72,
  U = 2e3;

function G(e) {
  return (null == e ? true : e.type) === p.so.CONTENT_INVENTORY ? k : 0
}
let Z = e => {
    var {
      entry: t
    } = e, n = j(e, ["entry"]);
    switch (t.content_type) {
      case l.s.PLAYED_GAME:
        return (0, r.jsx)(E.Z, L(w({}, n), {
          entry: t
        }));
      case l.s.WATCHED_MEDIA:
        return (0, r.jsx)(A.Z, L(w({}, n), {
          entry: t
        }));
      case l.s.TOP_GAME:
        return (0, r.jsx)(T.ZP, L(w({}, n), {
          entry: t
        }));
      case l.s.TOP_ARTIST:
        return (0, r.jsx)(S.ZP, L(w({}, n), {
          entry: t
        }));
      case l.s.LISTENED_SESSION:
        return (0, r.jsx)(O.ZP, L(w({}, n), {
          entry: t
        }));
      case l.s.LAUNCHED_ACTIVITY:
        return (0, r.jsx)(h.Z, L(w({}, n), {
          entry: t
        }));
      default:
        return null
    }
  },
  B = e => {
    var t, {
        entry: n,
        targetElementRef: i
      } = e,
      a = j(e, ["entry", "targetElementRef"]);
    return n.content_type === l.s.PLAYED_GAME ? (0, r.jsx)(y.Z, {
      entry: n,
      targetElementRef: i,
      isFirstApplicationOccurrence: null != (t = a.isFirstApplicationOccurrence) && t
    }) : null
  },
  F = e => {
    var {
      closePopout: t
    } = e, n = j(e, ["closePopout"]);
    return (0, r.jsx)(V, w({
      onReaction: (e, r) => {
        n.trackRankingItemInteraction(e, {
          destinationChannelId: r.id,
          destinationGuildId: r.guild_id
        }), t()
      },
      closePopout: t,
      onVoiceChannelPreview: e => {
        n.trackRankingItemInteraction(R.xP.VOICE_CHANNEL_PREVIEWED, {
          destinationChannelId: e.id,
          destinationGuildId: e.guild_id
        })
      }
    }, n))
  },
  V = e => {
    var {
      entry: t
    } = e, n = j(e, ["entry"]);
    switch (t.content_type) {
      case l.s.PLAYED_GAME:
        return (0, r.jsx)(b.Z, L(w({}, n), {
          entry: t
        }));
      case l.s.WATCHED_MEDIA:
        return (0, r.jsx)(N.Z, L(w({}, n), {
          entry: t
        }));
      case l.s.TOP_GAME:
        return (0, r.jsx)(C.Z, L(w({}, n), {
          entry: t
        }));
      case l.s.TOP_ARTIST:
        return (0, r.jsx)(I.Z, L(w({}, n), {
          entry: t
        }));
      case l.s.LISTENED_SESSION:
        return (0, r.jsx)(v.Z, L(w({}, n), {
          entry: t
        }));
      case l.s.LAUNCHED_ACTIVITY:
        return (0, r.jsx)(g.ZP, L(w({}, n), {
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
      p = j(e, ["index", "ref"]);
    let h = i.useRef(null),
      [g, E] = i.useState("default"),
      [b, y] = i.useState(false),
      O = (0, s.JA)("".concat(a)),
      v = null == (t = _.default.getCurrentUser()) ? true : t.isStaff(),
      {
        isRich: S,
        appName: I
      } = (0, P.n)(p.entry),
      T = i.useMemo(() => ({
        entry: p.entry,
        channelId: p.channel.id,
        guildId: p.channel.guild_id,
        requestId: p.requestId,
        richPresenceName: S ? I : true
      }), [I, p.channel.guild_id, p.channel.id, p.entry, p.requestId, S]),
      C = i.useRef(false),
      [A, N] = i.useState(false),
      [D, x] = i.useState(false),
      M = (0, c.e7)([f.Z], () => f.Z.keyboardModeEnabled);
    i.useEffect(() => {
      A && M && x(true)
    }, [A, M]), i.useLayoutEffect(() => {
      null != h.current && y(true)
    }, []);
    let k = i.useCallback(e => {
        v && (0, d.jW)(e, async () => {
          let {
            default: e
          } = await n.e("153").then(n.bind(n, 330150));
          return () => (0, r.jsx)(e, {
            entry: p.entry,
            requestId: p.requestId
          })
        })
      }, [p, v]),
      G = i.useCallback(() => {
        E(String(Date.now()))
      }, []),
      V = i.useCallback(function(e) {
        let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
        (0, m.L)(e, w({}, T, t))
      }, [T]),
      Y = i.useMemo(() => o().throttle(e => {
        (0, m.L)(R.xP.CARD_POPOUT_OPEN, e)
      }, U, {
        leading: true,
        trailing: false
      }), []),
      W = () => {
        C.current = false, setTimeout(() => {
          C.current || (N(false), x(M))
        }, 100)
      };
    return (0, r.jsxs)(r.Fragment, {
      children: [b && (0, r.jsx)(B, L(w({}, p), {
        targetElementRef: h
      })), (0, r.jsx)("div", {
        ref: l,
        onMouseEnter: () => {
          C.current = true, setTimeout(() => {
            C.current && N(true), Y(T)
          }, 100)
        },
        onMouseLeave: W,
        children: (0, r.jsx)(u.yRy, {
          targetElementRef: h,
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
              }, p))
            })
          },
          position: "left",
          shouldShow: A,
          positionKey: g,
          onRequestOpen: () => Y(T),
          onRequestClose: () => {
            D && W()
          },
          spacing: 8,
          children: (e, t) => {
            let {
              isShown: n
            } = t;
            return (0, r.jsx)(u.P3F, L(w({}, e, O), {
              innerRef: h,
              focusProps: {
                offset: {
                  top: 4,
                  bottom: 4,
                  left: 4,
                  right: 4
                }
              },
              onClick: () => {
                A || N(true)
              },
              onContextMenu: k,
              children: (0, r.jsx)(Z, L(w({}, p), {
                selected: n,
                hovered: C.current
              }))
            }))
          }
        })
      })]
    })
  },
  W = Chunk473749.memo(Y)