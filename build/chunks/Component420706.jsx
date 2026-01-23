/** Chunk was on web.js **/
/** chunk id: 420706, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => K,
  Jd: () => Y,
  Oo: () => H,
  bG: () => k,
  h9: () => G
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk837381 = require("./837381.jsx"),
  Chunk681154 = require("./681154.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk775602 = require("./775602.js"),
  Chunk963307 = require("./963307.js"),
  Chunk287809 = require("./287809.js"),
  Chunk947593 = require("./947593.js"),
  Chunk468581 = require("./468581.jsx"),
  Chunk849258 = require("./849258.jsx"),
  Chunk322789 = require("./322789.jsx"),
  Chunk636202 = require("./636202.jsx"),
  Chunk27322 = require("./27322.jsx"),
  Chunk363670 = require("./363670.jsx"),
  Chunk525313 = require("./525313.jsx"),
  Chunk620708 = require("./620708.jsx"),
  Chunk247807 = require("./247807.jsx"),
  Chunk977001 = require("./977001.jsx"),
  Chunk273198 = require("./273198.jsx"),
  Chunk514243 = require("./514243.jsx"),
  Chunk654288 = require("./654288.jsx"),
  Chunk299846 = require("./299846.js"),
  Chunk424994 = require("./424994.js");

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      P(e, t, n[t])
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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = M(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function M(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let k = 72,
  U = 2e3;

function G(e) {
  return (null == e ? true : e.type) === p.S9.CONTENT_INVENTORY ? k : 0
}
let V = e => {
    let {
      entry: t
    } = e, n = j(e, ["entry"]);
    switch (t.content_type) {
      case l.I.PLAYED_GAME:
        return (0, r.jsx)(E.A, L(D({}, n), {
          entry: t
        }));
      case l.I.WATCHED_MEDIA:
        return (0, r.jsx)(C.A, L(D({}, n), {
          entry: t
        }));
      case l.I.TOP_GAME:
        return (0, r.jsx)(S.Ay, L(D({}, n), {
          entry: t
        }));
      case l.I.TOP_ARTIST:
        return (0, r.jsx)(A.Ay, L(D({}, n), {
          entry: t
        }));
      case l.I.LISTENED_SESSION:
        return (0, r.jsx)(O.Ay, L(D({}, n), {
          entry: t
        }));
      case l.I.LAUNCHED_ACTIVITY:
        return (0, r.jsx)(m.A, L(D({}, n), {
          entry: t
        }));
      default:
        return null
    }
  },
  F = e => {
    var t;
    let {
      entry: n,
      targetElementRef: i
    } = e, a = j(e, ["entry", "targetElementRef"]);
    return n.content_type !== l.I.PLAYED_GAME ? null : (0, r.jsx)(b.A, {
      entry: n,
      targetElementRef: i,
      isFirstApplicationOccurrence: null != (t = a.isFirstApplicationOccurrence) && t
    })
  },
  B = e => {
    let {
      closePopout: t
    } = e, n = j(e, ["closePopout"]);
    return (0, r.jsx)(H, D({
      onReaction: (e, r) => {
        n.trackRankingItemInteraction(e, {
          destinationChannelId: r.id,
          destinationGuildId: r.guild_id
        }), t()
      },
      closePopout: t,
      onVoiceChannelPreview: e => {
        n.trackRankingItemInteraction(R.PA.VOICE_CHANNEL_PREVIEWED, {
          destinationChannelId: e.id,
          destinationGuildId: e.guild_id
        })
      }
    }, n))
  },
  H = e => {
    let {
      entry: t
    } = e, n = j(e, ["entry"]);
    switch (t.content_type) {
      case l.I.PLAYED_GAME:
        return (0, r.jsx)(y.A, L(D({}, n), {
          entry: t
        }));
      case l.I.WATCHED_MEDIA:
        return (0, r.jsx)(N.A, L(D({}, n), {
          entry: t
        }));
      case l.I.TOP_GAME:
        return (0, r.jsx)(T.A, L(D({}, n), {
          entry: t
        }));
      case l.I.TOP_ARTIST:
        return (0, r.jsx)(I.A, L(D({}, n), {
          entry: t
        }));
      case l.I.LISTENED_SESSION:
        return (0, r.jsx)(v.A, L(D({}, n), {
          entry: t
        }));
      case l.I.LAUNCHED_ACTIVITY:
        return (0, r.jsx)(g.Ay, L(D({}, n), {
          entry: t
        }));
      default:
        return null
    }
  },
  Y = Chunk64700.createContext(true),
  W = e => {
    var t;
    let {
      index: a,
      ref: l
    } = e, p = j(e, ["index", "ref"]), m = i.useRef(null), [g, E] = i.useState("default"), [y, b] = i.useState(false), O = (0, o.rm)("".concat(a)), v = null == (t = _.default.getCurrentUser()) ? true : t.isStaff(), {
      isRich: A,
      appName: I
    } = (0, w.u)(p.entry), S = i.useMemo(() => ({
      entry: p.entry,
      channelId: p.channel.id,
      guildId: p.channel.guild_id,
      requestId: p.requestId,
      richPresenceName: A ? I : true
    }), [I, p.channel.guild_id, p.channel.id, p.entry, p.requestId, A]), T = i.useRef(false), [C, N] = i.useState(false), [P, x] = i.useState(false), M = (0, c.bG)([f.A], () => f.A.keyboardModeEnabled);
    i.useEffect(() => {
      C && M && x(true)
    }, [C, M]), i.useLayoutEffect(() => {
      null != m.current && b(true)
    }, []);
    let k = i.useCallback(e => {
        v && (0, d.L3)(e, async () => {
          let {
            default: e
          } = await n.e("89346").then(n.bind(n, 949881));
          return () => (0, r.jsx)(e, {
            entry: p.entry,
            requestId: p.requestId
          })
        })
      }, [p, v]),
      G = i.useCallback(() => {
        E(String(Date.now()))
      }, []),
      H = i.useCallback(function(e) {
        let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
        (0, h.I)(e, D({}, S, t))
      }, [S]),
      W = i.useMemo(() => s().throttle(e => {
        (0, h.I)(R.PA.CARD_POPOUT_OPEN, e)
      }, U, {
        leading: true,
        trailing: false
      }), []),
      K = () => {
        T.current = false, setTimeout(() => {
          T.current || (N(false), x(M))
        }, 100)
      };
    return (0, r.jsxs)(r.Fragment, {
      children: [y && (0, r.jsx)(F, L(D({}, p), {
        targetElementRef: m
      })), (0, r.jsx)("div", {
        ref: l,
        onMouseEnter: () => {
          T.current = true, setTimeout(() => {
            T.current && N(true), W(S)
          }, 100)
        },
        onMouseLeave: K,
        children: (0, r.jsx)(u.YNO, {
          targetElementRef: m,
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return (0, r.jsx)(Y.Provider, {
              value: K,
              children: (0, r.jsx)(B, D({
                closePopout: t,
                updatePopoutPosition: G,
                trackRankingItemInteraction: H
              }, p))
            })
          },
          position: "left",
          shouldShow: C,
          positionKey: g,
          onRequestOpen: () => W(S),
          onRequestClose: () => {
            P && K()
          },
          spacing: 8,
          children: (e, t) => {
            let {
              isShown: n
            } = t;
            return (0, r.jsx)(u.DUT, L(D({}, e, O), {
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
              children: (0, r.jsx)(V, L(D({}, p), {
                selected: n,
                hovered: T.current
              }))
            }))
          }
        })
      })]
    })
  },
  K = Chunk64700.memo(W)