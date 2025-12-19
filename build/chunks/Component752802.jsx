/** Chunk was on 50751 **/
/** chunk id: 752802, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => U,
  q: () => z
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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

function k(e) {
  let {
    participant: t
  } = e;
  return (0, i.jsx)(u.u, {
    text: D.intl.string(D.t["4EGMWL"]),
    children: (0, i.jsx)(c.P3F, {
      className: R.controlAction,
      onClick: e => {
        (0, f.g)((0, y.V9)(t.stream), false), e.stopPropagation(), (0, T.Ws)(A.Odu.GO_LIVE, {
          type: T.Qu.SCREEN_SHARE,
          value: T.bk.DISABLED,
          userId: t.user.id
        })
      },
      children: (0, i.jsx)(c.g5r, {
        size: "sm",
        color: c.TVs.colors.WHITE
      })
    })
  })
}

function L(e) {
  let {
    participant: t
  } = e, n = t.user.id, l = (0, a.e7)([Z.Z], () => {
    let e = (0, m.Z)(t.type);
    return Z.Z.isLocalMute(t.user.id, e)
  }, [t]), o = (0, a.e7)([C.default], () => C.default.getId()), {
    hasVideo: h
  } = (0, j.Z)(t, o), p = l && h, f = r.useCallback(() => {
    d.Z.toggleLocalMute(n, s.Yn.STREAM)
  }, [n]);
  return (0, i.jsx)(u.u, {
    text: p ? D.intl.string(D.t.YqAjXy) : D.intl.string(D.t.w4m945),
    children: (0, i.jsx)(c.P3F, {
      className: R.controlAction,
      onClick: e => {
        e.stopPropagation(), (0, T.Ws)(A.Odu.GO_LIVE, {
          type: T.Qu.AUDIO,
          value: p ? T.bk.ENABLED : T.bk.DISABLED,
          userId: t.user.id
        }), f()
      },
      children: p ? (0, i.jsx)(c.OyP, {
        size: "sm",
        color: "currentColor"
      }) : (0, i.jsx)(c.gj8, {
        size: "sm",
        color: "currentColor"
      })
    })
  })
}

function M(e, t) {
  return r => {
    (0, T.Ws)(A.Odu.GO_LIVE, {
      type: T.Qu.GO_LIVE,
      value: T.bk.SETTINGS_OPENED,
      userId: e.user.id
    }), r.stopPropagation(), (0, h.jW)(r, async () => {
      let {
        default: r
      } = await n.e("5704").then(n.bind(n, 360429));
      return n => {
        var l, o;
        return (0, i.jsx)(r, (l = function(e) {
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
        }({}, n), o = o = {
          stream: e.stream,
          exitFullscreen: () => {},
          appContext: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(o)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e))
        }), l))
      }
    })
  }
}

function V(e) {
  let {
    hasActiveStream: t,
    participant: n,
    onEnablePin: r
  } = e, l = (0, b.bp)(), s = n.user, d = (0, a.e7)([N.default], () => {
    var e;
    return null != (e = N.default.getUser(s.id)) ? e : s
  }, [s]), h = t ? D.intl.string(D.t.tLxK4l) : D.intl.string(D.t.E5RDnK), {
    enabled: p
  } = (0, _.aq)("GoLiveTile");
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      className: o()(R.controlBackground, {
        [R.controlsWithActiveStream]: t
      })
    }), !t && (0, i.jsx)("div", {
      className: R.watchActionContainer,
      children: (0, i.jsx)(u.u, {
        text: h,
        children: (0, i.jsxs)(c.P3F, {
          className: R.watchButton,
          onClick: () => {
            (0, f.rn)(n.stream, {
              forceMultiple: true,
              noFocus: true
            }), r(), (0, T.Ws)(A.Odu.GO_LIVE, {
              type: T.Qu.GO_LIVE,
              value: T.bk.ENABLED,
              userId: n.user.id
            })
          },
          children: [(0, i.jsx)(c.Text, {
            variant: "text-sm/semibold",
            color: "always-white",
            children: D.intl.string(D.t.I6JG46)
          }), (0, i.jsx)(c.OgY, {
            size: "sm",
            color: "currentColor"
          })]
        })
      })
    }), (0, i.jsxs)("div", {
      className: R.controls,
      children: [(0, i.jsx)("div", {
        className: R.controlUser,
        children: (0, i.jsxs)("div", {
          className: R.controlUserContainer,
          children: [(0, i.jsx)(c.Text, {
            variant: "text-md/medium",
            color: "always-white",
            className: R.controlUserName,
            children: w.ZP.getName(n.stream.guildId, n.stream.channelId, s)
          }), (0, i.jsx)(v.ZP, {
            primaryGuild: d.primaryGuild,
            userId: d.id,
            containerClassName: R.guildTag,
            inline: false,
            onShowProfile: () => {
              (0, T.Ws)(A.Odu.GO_LIVE, {
                type: T.Qu.GO_LIVE,
                value: T.bk.GUILD_PROFILE_OPENED,
                userId: n.user.id
              })
            }
          })]
        })
      }), (0, i.jsx)("div", {
        className: R.controlActions,
        children: t && (0, i.jsxs)(i.Fragment, {
          children: [p && (0, i.jsx)(k, {
            participant: n
          }), (0, i.jsx)(L, {
            participant: n
          }), (0, i.jsx)(u.u, {
            text: D.intl.string(D.t["3D5yo/"]),
            children: (0, i.jsx)(c.P3F, {
              className: R.controlAction,
              onClick: M(n, l),
              children: (0, i.jsx)(c.xhG, {
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
let z = new Set([Chunk981631.jm8.ENDED, Chunk981631.jm8.FAILED, Chunk981631.jm8.PAUSED]),
  U = Chunk473749.memo(function(e) {
    let {
      participant: t,
      width: n,
      locked: r,
      widgetId: l,
      pinned: o
    } = e, s = (0, a.e7)([I.Z], () => I.Z.getActiveStreamForUser(t.user.id, t.stream.guildId), [t.user.id, t.stream.guildId]), u = (0, b.bp)(), d = null != s && z.has(s.state), h = null != s, f = (0, P.yA)(t.stream), m = (0, P.xN)(t.stream);
    return !h && r || d ? null : (0, i.jsxs)("div", {
      className: R.tile,
      children: [h && !r && (0, i.jsx)(O.ZP, {
        size: O.ZP.Sizes.SMALL,
        className: R.liveIndicator
      }), h ? (0, i.jsx)("div", {
        className: R.streamTile,
        children: (0, i.jsx)(c.kL8, {
          "aria-label": D.intl.formatToPlainString(D.t.gHPz3Q, {
            streamerName: t.user.username
          }),
          onClick: () => {},
          onContextMenu: M(t, u),
          className: R.streamTile,
          style: {
            transform: "scale(".concat(f, ")")
          },
          children: (0, i.jsx)(x.Z, {
            participant: t,
            width: n,
            fit: null != m ? m : S.L.CONTAIN,
            popoutType: g.P.OVERLAY,
            focused: !r,
            selected: false,
            wrapperClassName: r ? R.streamTileWrapper : true
          })
        })
      }) : (0, i.jsx)("div", {
        className: R.streamPreview,
        children: (0, i.jsx)(E.Z, {
          noText: true,
          className: R.absoluteFill,
          stream: t.stream
        })
      }), r ? null : (0, i.jsx)(V, {
        participant: t,
        hasActiveStream: h,
        onEnablePin: () => {
          o || (0, p.xh)(l)
        }
      })]
    })
  })