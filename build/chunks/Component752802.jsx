/** Chunk was on 50751 **/
/** chunk id: 752802, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => G,
  q: () => W
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk46973 = require("./46973.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk239091 = require("./239091.js"),
  Chunk765250 = require("./765250.js"),
  Chunk872810 = require("./872810.js"),
  Chunk414910 = require("./414910.js"),
  Chunk598006 = require("./598006.js"),
  Chunk194082 = require("./194082.jsx"),
  Chunk569545 = require("./569545.js"),
  Chunk871118 = require("./871118.jsx"),
  Chunk172751 = require("./172751.jsx"),
  Chunk728285 = require("./728285.jsx"),
  Chunk352978 = require("./352978.jsx"),
  Chunk833519 = require("./833519.jsx"),
  Chunk839662 = require("./839662.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk131951 = require("./131951.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk444295 = require("./444295.js"),
  Chunk32300 = require("./32300.js"),
  Chunk1226 = require("./1226.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk298963 = require("./298963.js");

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function L(e, t) {
  if (null == e) return {};
  var n, i, r = function(e, t) {
    if (null == e) return {};
    var n, i, r = {},
      l = Object.keys(e);
    for (i = 0; i < l.length; i++) n = l[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
    return r
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
  }
  return r
}

function M(e) {
  let {
    participant: t
  } = e;
  return (0, i.jsx)(c.aML, {
    "data-migration-pending": true,
    text: A.intl.string(A.t["4EGMWL"]),
    children: e => {
      var {
        onClick: n
      } = e, r = L(e, ["onClick"]);
      return (0, i.jsx)(c.P3F, R(D({}, r), {
        className: k.controlAction,
        onClick: e => {
          null == n || n(), (0, h.g)((0, b.V9)(t.stream), false), e.stopPropagation(), (0, N.Ws)(P.Odu.GO_LIVE, {
            type: N.Qu.SCREEN_SHARE,
            value: N.bk.DISABLED,
            userId: t.user.id
          })
        },
        children: (0, i.jsx)(c.g5r, {
          size: "sm",
          color: c.TVs.colors.WHITE
        })
      }))
    }
  })
}

function z(e) {
  let {
    participant: t
  } = e, n = t.user.id, l = (0, o.e7)([j.Z], () => {
    let e = (0, p.Z)(t.type);
    return j.Z.isLocalMute(t.user.id, e)
  }, [t]), a = (0, o.e7)([C.default], () => C.default.getId()), {
    hasVideo: d
  } = (0, x.Z)(t, a), f = l && d, h = r.useCallback(() => {
    u.Z.toggleLocalMute(n, s.Yn.STREAM)
  }, [n]);
  return (0, i.jsx)(c.aML, {
    "data-migration-pending": true,
    text: f ? A.intl.string(A.t.YqAjXy) : A.intl.string(A.t.w4m945),
    children: e => {
      var {
        onClick: n
      } = e, r = L(e, ["onClick"]);
      return (0, i.jsx)(c.P3F, R(D({}, r), {
        className: k.controlAction,
        onClick: e => {
          e.stopPropagation(), (0, N.Ws)(P.Odu.GO_LIVE, {
            type: N.Qu.AUDIO,
            value: f ? N.bk.ENABLED : N.bk.DISABLED,
            userId: t.user.id
          }), null == n || n(), h()
        },
        children: f ? (0, i.jsx)(c.OyP, {
          size: "sm",
          color: "currentColor"
        }) : (0, i.jsx)(c.gj8, {
          size: "sm",
          color: "currentColor"
        })
      }))
    }
  })
}

function V(e, t, r) {
  return l => {
    (0, N.Ws)(P.Odu.GO_LIVE, {
      type: N.Qu.GO_LIVE,
      value: N.bk.SETTINGS_OPENED,
      userId: e.user.id
    }), l.stopPropagation(), null == r || r(), (0, d.jW)(l, async () => {
      let {
        default: r
      } = await n.e("5704").then(n.bind(n, 360429));
      return n => (0, i.jsx)(r, R(D({}, n), {
        stream: e.stream,
        exitFullscreen: () => {},
        appContext: t
      }))
    })
  }
}

function U(e) {
  let {
    hasActiveStream: t,
    participant: n,
    onEnablePin: r
  } = e, l = (0, v.bp)(), s = n.user, u = (0, o.e7)([_.default], () => {
    var e;
    return null != (e = _.default.getUser(s.id)) ? e : s
  }, [s]), d = t ? A.intl.string(A.t.tLxK4l) : A.intl.string(A.t.E5RDnK), {
    enabled: f
  } = (0, w.aq)("GoLiveTile");
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      className: a()(k.controlBackground, {
        [k.controlsWithActiveStream]: t
      })
    }), !t && (0, i.jsx)("div", {
      className: k.watchActionContainer,
      children: (0, i.jsx)(c.aML, {
        "data-migration-pending": true,
        text: d,
        children: e => (0, i.jsxs)(c.P3F, R(D({}, e), {
          className: k.watchButton,
          onClick: () => {
            var t;
            null == (t = e.onClick) || t.call(e), (0, h.rn)(n.stream, {
              forceMultiple: true,
              noFocus: true
            }), r(), (0, N.Ws)(P.Odu.GO_LIVE, {
              type: N.Qu.GO_LIVE,
              value: N.bk.ENABLED,
              userId: n.user.id
            })
          },
          children: [(0, i.jsx)(c.Text, {
            variant: "text-sm/semibold",
            color: "always-white",
            children: A.intl.string(A.t.I6JG46)
          }), (0, i.jsx)(c.OgY, {
            size: "sm",
            color: "currentColor"
          })]
        }))
      })
    }), (0, i.jsxs)("div", {
      className: k.controls,
      children: [(0, i.jsx)("div", {
        className: k.controlUser,
        children: (0, i.jsxs)("div", {
          className: k.controlUserContainer,
          children: [(0, i.jsx)(c.Text, {
            variant: "text-md/medium",
            color: "always-white",
            className: k.controlUserName,
            children: Z.ZP.getName(n.stream.guildId, n.stream.channelId, s)
          }), (0, i.jsx)(O.ZP, {
            primaryGuild: u.primaryGuild,
            userId: u.id,
            containerClassName: k.guildTag,
            inline: false,
            onShowProfile: () => {
              (0, N.Ws)(P.Odu.GO_LIVE, {
                type: N.Qu.GO_LIVE,
                value: N.bk.GUILD_PROFILE_OPENED,
                userId: n.user.id
              })
            }
          })]
        })
      }), (0, i.jsx)("div", {
        className: k.controlActions,
        children: t && (0, i.jsxs)(i.Fragment, {
          children: [f && (0, i.jsx)(M, {
            participant: n
          }), (0, i.jsx)(z, {
            participant: n
          }), (0, i.jsx)(c.aML, {
            "data-migration-pending": true,
            text: A.intl.string(A.t["3D5yo/"]),
            children: e => {
              var {
                onClick: t
              } = e, r = L(e, ["onClick"]);
              return (0, i.jsx)(c.P3F, R(D({}, r), {
                className: k.controlAction,
                onClick: V(n, l, t),
                children: (0, i.jsx)(c.xhG, {
                  size: "sm",
                  color: "currentColor"
                })
              }))
            }
          })]
        })
      })]
    })]
  })
}
let W = new Set([Chunk981631.jm8.ENDED, Chunk981631.jm8.FAILED, Chunk981631.jm8.PAUSED]),
  G = Chunk473749.memo(function(e) {
    let {
      participant: t,
      width: n,
      locked: r,
      widgetId: l,
      pinned: a
    } = e, s = (0, o.e7)([I.Z], () => I.Z.getActiveStreamForUser(t.user.id, t.stream.guildId), [t.user.id, t.stream.guildId]), u = (0, v.bp)(), d = null != s && W.has(s.state), h = null != s, p = (0, T.yA)(t.stream), b = (0, T.xN)(t.stream);
    return !h && r || d ? null : (0, i.jsxs)("div", {
      className: k.tile,
      children: [h && !r && (0, i.jsx)(g.ZP, {
        size: g.ZP.Sizes.SMALL,
        className: k.liveIndicator
      }), h ? (0, i.jsx)("div", {
        className: k.streamTile,
        children: (0, i.jsx)(c.kL8, {
          "aria-label": A.intl.formatToPlainString(A.t.gHPz3Q, {
            streamerName: t.user.username
          }),
          onClick: () => {},
          onContextMenu: V(t, u),
          className: k.streamTile,
          style: {
            transform: "scale(".concat(p, ")")
          },
          children: (0, i.jsx)(S.Z, {
            participant: t,
            width: n,
            fit: null != b ? b : E.L.CONTAIN,
            popoutType: m.P.OVERLAY,
            focused: !r,
            selected: false,
            wrapperClassName: r ? k.streamTileWrapper : true
          })
        })
      }) : (0, i.jsx)("div", {
        className: k.streamPreview,
        children: (0, i.jsx)(y.Z, {
          noText: true,
          className: k.absoluteFill,
          stream: t.stream
        })
      }), r ? null : (0, i.jsx)(U, {
        participant: t,
        hasActiveStream: h,
        onEnablePin: () => {
          a || (0, f.xh)(l)
        }
      })]
    })
  })