/** Chunk was on web.js **/
/** chunk id: 420706, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => q,
  Jd: () => K,
  Oo: () => W,
  bG: () => U,
  h9: () => F
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
  Chunk941726 = require("./941726.jsx"),
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

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function x(e) {
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

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function M(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = k(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function k(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let U = 72,
  G = 32,
  V = 2e3;

function F(e) {
  return (null == e ? true : e.type) === _.S9.CONTENT_INVENTORY ? e.entry.content_type === l.ContentInventoryEntryType.PLAYED_GAME && null != e.entry.applicationWidgetPreview ? U + G : U : 0
}
let B = e => {
    let {
      entry: t
    } = e, n = M(e, ["entry"]);
    switch (t.content_type) {
      case l.ContentInventoryEntryType.PLAYED_GAME:
        return (0, r.jsx)(y.A, j(x({}, n), {
          entry: t
        }));
      case l.ContentInventoryEntryType.WATCHED_MEDIA:
        return (0, r.jsx)(N.A, j(x({}, n), {
          entry: t
        }));
      case l.ContentInventoryEntryType.TOP_GAME:
        return (0, r.jsx)(T.Ay, j(x({}, n), {
          entry: t
        }));
      case l.ContentInventoryEntryType.TOP_ARTIST:
        return (0, r.jsx)(I.Ay, j(x({}, n), {
          entry: t
        }));
      case l.ContentInventoryEntryType.LISTENED_SESSION:
        return (0, r.jsx)(v.Ay, j(x({}, n), {
          entry: t
        }));
      case l.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
        return (0, r.jsx)(g.A, j(x({}, n), {
          entry: t
        }));
      default:
        return null
    }
  },
  H = e => {
    var t;
    let {
      entry: n,
      targetElementRef: i
    } = e, a = M(e, ["entry", "targetElementRef"]);
    return n.content_type !== l.ContentInventoryEntryType.PLAYED_GAME ? null : (0, r.jsx)(O.A, {
      entry: n,
      targetElementRef: i,
      isFirstApplicationOccurrence: null != (t = a.isFirstApplicationOccurrence) && t
    })
  },
  Y = e => {
    let {
      closePopout: t
    } = e, n = M(e, ["closePopout"]);
    return (0, r.jsx)(W, x({
      onReaction: (e, r) => {
        n.trackRankingItemInteraction(e, {
          destinationChannelId: r.id,
          destinationGuildId: r.guild_id
        }), t()
      },
      closePopout: t,
      onVoiceChannelPreview: e => {
        n.trackRankingItemInteraction(P.PA.VOICE_CHANNEL_PREVIEWED, {
          destinationChannelId: e.id,
          destinationGuildId: e.guild_id
        })
      }
    }, n))
  },
  W = e => {
    let {
      entry: t
    } = e, n = M(e, ["entry"]);
    switch (t.content_type) {
      case l.ContentInventoryEntryType.PLAYED_GAME:
        return (0, r.jsx)(b.A, j(x({}, n), {
          entry: t
        }));
      case l.ContentInventoryEntryType.WATCHED_MEDIA:
        return (0, r.jsx)(w.A, j(x({}, n), {
          entry: t
        }));
      case l.ContentInventoryEntryType.TOP_GAME:
        return (0, r.jsx)(C.A, j(x({}, n), {
          entry: t
        }));
      case l.ContentInventoryEntryType.TOP_ARTIST:
        return (0, r.jsx)(S.A, j(x({}, n), {
          entry: t
        }));
      case l.ContentInventoryEntryType.LISTENED_SESSION:
        return (0, r.jsx)(A.A, j(x({}, n), {
          entry: t
        }));
      case l.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
        return (0, r.jsx)(E.Ay, j(x({}, n), {
          entry: t
        }));
      default:
        return null
    }
  },
  K = Chunk64700.createContext(true),
  z = e => {
    var t;
    let {
      index: a,
      ref: l
    } = e, _ = M(e, ["index", "ref"]), g = i.useRef(null), [E, y] = i.useState("default"), [b, O] = i.useState(false), v = (0, o.rm)("".concat(a)), A = null == (t = h.default.getCurrentUser()) ? true : t.isStaff(), {
      isRich: I,
      appName: S
    } = (0, R.u)(_.entry);
    (0, p.T2)(_.entry.id);
    let T = i.useMemo(() => ({
        entry: _.entry,
        channelId: _.channel.id,
        guildId: _.channel.guild_id,
        requestId: _.requestId,
        richPresenceName: I ? S : true
      }), [S, _.channel.guild_id, _.channel.id, _.entry, _.requestId, I]),
      C = i.useRef(false),
      [N, w] = i.useState(false),
      [D, L] = i.useState(false),
      k = (0, c.bG)([f.A], () => f.A.keyboardModeEnabled);
    i.useEffect(() => {
      N && k && L(true)
    }, [N, k]), i.useLayoutEffect(() => {
      null != g.current && O(true)
    }, []);
    let U = i.useCallback(e => {
        A && (0, d.L3)(e, async () => {
          let {
            default: e
          } = await n.e("89346").then(n.bind(n, 949881));
          return () => (0, r.jsx)(e, {
            entry: _.entry,
            requestId: _.requestId
          })
        })
      }, [_, A]),
      G = i.useCallback(() => {
        y(String(Date.now()))
      }, []),
      F = i.useCallback(function(e) {
        let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
        (0, m.I)(e, x({}, T, t))
      }, [T]),
      W = i.useMemo(() => s().throttle(e => {
        (0, m.I)(P.PA.CARD_POPOUT_OPEN, e)
      }, V, {
        leading: true,
        trailing: false
      }), []),
      z = () => {
        C.current = false, setTimeout(() => {
          C.current || (w(false), L(k))
        }, 100)
      };
    return (0, r.jsxs)(r.Fragment, {
      children: [b && (0, r.jsx)(H, j(x({}, _), {
        targetElementRef: g
      })), (0, r.jsx)("div", {
        ref: l,
        onMouseEnter: () => {
          C.current = true, setTimeout(() => {
            C.current && w(true), W(T)
          }, 100)
        },
        onMouseLeave: z,
        children: (0, r.jsx)(u.YNO, {
          targetElementRef: g,
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return (0, r.jsx)(K.Provider, {
              value: z,
              children: (0, r.jsx)(Y, x({
                closePopout: t,
                updatePopoutPosition: G,
                trackRankingItemInteraction: F
              }, _))
            })
          },
          position: "left",
          shouldShow: N,
          positionKey: E,
          onRequestOpen: () => W(T),
          onRequestClose: () => {
            D && z()
          },
          spacing: 8,
          children: (e, t) => {
            let {
              isShown: n
            } = t;
            return (0, r.jsx)(u.DUT, j(x({}, e, v), {
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
                N || w(true)
              },
              onContextMenu: U,
              children: (0, r.jsx)(B, j(x({}, _), {
                selected: n,
                hovered: C.current
              }))
            }))
          }
        })
      })]
    })
  },
  q = Chunk64700.memo(z)