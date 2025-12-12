/** Chunk was on 50751 **/
/** chunk id: 752802, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => U,
  q: () => V
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk46973 = require("./46973.js"),
  Chunk681715 = require("./681715.js"),
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

function R(e) {
  let {
    participant: t
  } = e;
  return (0, i.jsx)(c.u, {
    text: k.intl.string(k.t["4EGMWL"]),
    children: (0, i.jsx)(u.P3F, {
      className: D.controlAction,
      onClick: e => {
        (0, p.g)((0, y.V9)(t.stream), false), e.stopPropagation(), (0, w.Ws)(A.Odu.GO_LIVE, {
          type: w.Qu.SCREEN_SHARE,
          value: w.bk.DISABLED,
          userId: t.user.id
        })
      },
      children: (0, i.jsx)(u.g5r, {
        size: "sm",
        color: u.TVs.colors.WHITE
      })
    })
  })
}

function L(e) {
  let {
    participant: t
  } = e, n = t.user.id, a = (0, o.e7)([_.Z], () => {
    let e = (0, m.Z)(t.type);
    return _.Z.isLocalMute(t.user.id, e)
  }, [t]), l = (0, o.e7)([j.default], () => j.default.getId()), {
    hasVideo: f
  } = (0, I.Z)(t, l), h = a && f, p = r.useCallback(() => {
    d.Z.toggleLocalMute(n, s.Yn.STREAM)
  }, [n]);
  return (0, i.jsx)(c.u, {
    text: h ? k.intl.string(k.t.YqAjXy) : k.intl.string(k.t.w4m945),
    children: (0, i.jsx)(u.P3F, {
      className: D.controlAction,
      onClick: e => {
        e.stopPropagation(), (0, w.Ws)(A.Odu.GO_LIVE, {
          type: w.Qu.AUDIO,
          value: h ? w.bk.ENABLED : w.bk.DISABLED,
          userId: t.user.id
        }), p()
      },
      children: h ? (0, i.jsx)(u.OyP, {
        size: "sm",
        color: "currentColor"
      }) : (0, i.jsx)(u.gj8, {
        size: "sm",
        color: "currentColor"
      })
    })
  })
}

function M(e, t) {
  return r => {
    (0, w.Ws)(A.Odu.GO_LIVE, {
      type: w.Qu.GO_LIVE,
      value: w.bk.SETTINGS_OPENED,
      userId: e.user.id
    }), r.stopPropagation(), (0, f.jW)(r, async () => {
      let {
        default: r
      } = await n.e("5704").then(n.bind(n, 360429));
      return n => {
        var a, l;
        return (0, i.jsx)(r, (a = function(e) {
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
        }({}, n), l = l = {
          stream: e.stream,
          exitFullscreen: () => {},
          appContext: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(l, e))
        }), a))
      }
    })
  }
}

function z(e) {
  let {
    hasActiveStream: t,
    participant: n,
    onEnablePin: r
  } = e, a = (0, E.bp)(), s = n.user, d = (0, o.e7)([Z.default], () => {
    var e;
    return null != (e = Z.default.getUser(s.id)) ? e : s
  }, [s]), f = t ? k.intl.string(k.t.tLxK4l) : k.intl.string(k.t.E5RDnK), {
    enabled: h
  } = (0, T.aq)("GoLiveTile");
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      className: l()(D.controlBackground, {
        [D.controlsWithActiveStream]: t
      })
    }), !t && (0, i.jsx)("div", {
      className: D.watchActionContainer,
      children: (0, i.jsx)(c.u, {
        text: f,
        children: (0, i.jsxs)(u.P3F, {
          className: D.watchButton,
          onClick: () => {
            (0, p.rn)(n.stream, {
              forceMultiple: true,
              noFocus: true
            }), r(), (0, w.Ws)(A.Odu.GO_LIVE, {
              type: w.Qu.GO_LIVE,
              value: w.bk.ENABLED,
              userId: n.user.id
            })
          },
          children: [(0, i.jsx)(u.Text, {
            variant: "text-sm/semibold",
            color: "always-white",
            children: k.intl.string(k.t.I6JG46)
          }), (0, i.jsx)(u.OgY, {
            size: "sm",
            color: "currentColor"
          })]
        })
      })
    }), (0, i.jsxs)("div", {
      className: D.controls,
      children: [(0, i.jsx)("div", {
        className: D.controlUser,
        children: (0, i.jsxs)("div", {
          className: D.controlUserContainer,
          children: [(0, i.jsx)(u.Text, {
            variant: "text-md/medium",
            color: "always-white",
            className: D.controlUserName,
            children: N.ZP.getName(n.stream.guildId, n.stream.channelId, s)
          }), (0, i.jsx)(v.ZP, {
            primaryGuild: d.primaryGuild,
            userId: d.id,
            containerClassName: D.guildTag,
            inline: false,
            onShowProfile: () => {
              (0, w.Ws)(A.Odu.GO_LIVE, {
                type: w.Qu.GO_LIVE,
                value: w.bk.GUILD_PROFILE_OPENED,
                userId: n.user.id
              })
            }
          })]
        })
      }), (0, i.jsx)("div", {
        className: D.controlActions,
        children: t && (0, i.jsxs)(i.Fragment, {
          children: [h && (0, i.jsx)(R, {
            participant: n
          }), (0, i.jsx)(L, {
            participant: n
          }), (0, i.jsx)(c.u, {
            text: k.intl.string(k.t["3D5yo/"]),
            children: (0, i.jsx)(u.P3F, {
              className: D.controlAction,
              onClick: M(n, a),
              children: (0, i.jsx)(u.xhG, {
                size: "sm",
                color: "currentColor"
              })
            })
          })]
        })
      })]
    })]
  })
}
let V = new Set([Chunk981631.jm8.ENDED, Chunk981631.jm8.FAILED, Chunk981631.jm8.PAUSED]),
  U = Chunk473749.memo(function(e) {
    let {
      participant: t,
      width: n,
      locked: r,
      widgetId: a,
      pinned: l
    } = e, s = (0, o.e7)([C.Z], () => C.Z.getActiveStreamForUser(t.user.id, t.stream.guildId), [t.user.id, t.stream.guildId]), c = (0, E.bp)(), d = null != s && V.has(s.state), f = null != s, p = (0, P.yA)(t.stream), m = (0, P.xN)(t.stream);
    return !f && r || d ? null : (0, i.jsxs)("div", {
      className: D.tile,
      children: [f && !r && (0, i.jsx)(b.ZP, {
        size: b.ZP.Sizes.SMALL,
        className: D.liveIndicator
      }), f ? (0, i.jsx)("div", {
        className: D.streamTile,
        children: (0, i.jsx)(u.kL8, {
          "aria-label": k.intl.formatToPlainString(k.t.gHPz3Q, {
            streamerName: t.user.username
          }),
          onClick: () => {},
          onContextMenu: M(t, c),
          className: D.streamTile,
          style: {
            transform: "scale(".concat(p, ")")
          },
          children: (0, i.jsx)(x.Z, {
            participant: t,
            width: n,
            fit: null != m ? m : S.L.CONTAIN,
            popoutType: g.P.OVERLAY,
            focused: !r,
            selected: false,
            wrapperClassName: r ? D.streamTileWrapper : true
          })
        })
      }) : (0, i.jsx)("div", {
        className: D.streamPreview,
        children: (0, i.jsx)(O.Z, {
          noText: true,
          className: D.absoluteFill,
          stream: t.stream
        })
      }), r ? null : (0, i.jsx)(z, {
        participant: t,
        hasActiveStream: f,
        onEnablePin: () => {
          l || (0, h.xh)(a)
        }
      })]
    })
  })