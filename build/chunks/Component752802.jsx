/** Chunk was on 50751 **/
/** chunk id: 752802, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => W,
  q: () => U
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk46973 = require("./46973.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk239091 = require("./239091.js"),
  Chunk765250 = require("./765250.js"),
  Chunk872810 = require("./872810.js"),
  Chunk414910 = require("./414910.js"),
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
  Chunk379746 = require("./379746.js");

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

function k(e, t) {
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

function L(e) {
  let {
    participant: t
  } = e;
  return (0, i.jsx)(u.aML, {
    "data-migration-pending": true,
    text: P.intl.string(P.t["4EGMWL"]),
    children: e => {
      var {
        onClick: n
      } = e, r = k(e, ["onClick"]);
      return (0, i.jsx)(u.P3F, R(D({}, r), {
        className: A.controlAction,
        onClick: e => {
          null == n || n(), (0, h.g)((0, g.V9)(t.stream), false), e.stopPropagation(), (0, N.Ws)(_.Odu.GO_LIVE, {
            type: N.Qu.SCREEN_SHARE,
            value: N.bk.DISABLED,
            userId: t.user.id
          })
        },
        children: (0, i.jsx)(u.g5r, {
          size: "sm",
          color: u.TVs.colors.WHITE
        })
      }))
    }
  })
}

function M(e) {
  let {
    participant: t
  } = e, n = t.user.id, l = (0, a.e7)([I.Z], () => {
    let e = (0, f.Z)(t.type);
    return I.Z.isLocalMute(t.user.id, e)
  }, [t]), o = (0, a.e7)([j.default], () => j.default.getId()), {
    hasVideo: d
  } = (0, b.Z)(t, o), p = l && d, h = r.useCallback(() => {
    c.Z.toggleLocalMute(n, s.Yn.STREAM)
  }, [n]);
  return (0, i.jsx)(u.aML, {
    "data-migration-pending": true,
    text: p ? P.intl.string(P.t.YqAjXy) : P.intl.string(P.t.w4m945),
    children: e => {
      var {
        onClick: n
      } = e, r = k(e, ["onClick"]);
      return (0, i.jsx)(u.P3F, R(D({}, r), {
        className: A.controlAction,
        onClick: e => {
          e.stopPropagation(), (0, N.Ws)(_.Odu.GO_LIVE, {
            type: N.Qu.AUDIO,
            value: p ? N.bk.ENABLED : N.bk.DISABLED,
            userId: t.user.id
          }), null == n || n(), h()
        },
        children: p ? (0, i.jsx)(u.OyP, {
          size: "sm",
          color: "currentColor"
        }) : (0, i.jsx)(u.gj8, {
          size: "sm",
          color: "currentColor"
        })
      }))
    }
  })
}

function V(e, t, r) {
  return l => {
    (0, N.Ws)(_.Odu.GO_LIVE, {
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

function z(e) {
  let {
    hasActiveStream: t,
    participant: n,
    onEnablePin: r
  } = e, l = (0, E.bp)(), s = n.user, c = (0, a.e7)([C.default], () => {
    var e;
    return null != (e = C.default.getUser(s.id)) ? e : s
  }, [s]), d = t ? P.intl.string(P.t.tLxK4l) : P.intl.string(P.t.E5RDnK), {
    enabled: p
  } = (0, w.aq)("GoLiveTile");
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      className: o()(A.controlBackground, {
        [A.controlsWithActiveStream]: t
      })
    }), !t && (0, i.jsx)("div", {
      className: A.watchActionContainer,
      children: (0, i.jsx)(u.aML, {
        "data-migration-pending": true,
        text: d,
        children: e => (0, i.jsxs)(u.P3F, R(D({}, e), {
          className: A.watchButton,
          onClick: () => {
            var t;
            null == (t = e.onClick) || t.call(e), (0, h.rn)(n.stream, {
              forceMultiple: true,
              noFocus: true
            }), r(), (0, N.Ws)(_.Odu.GO_LIVE, {
              type: N.Qu.GO_LIVE,
              value: N.bk.ENABLED,
              userId: n.user.id
            })
          },
          children: [(0, i.jsx)(u.Text, {
            variant: "text-sm/semibold",
            color: "always-white",
            children: P.intl.string(P.t.I6JG46)
          }), (0, i.jsx)(u.OgY, {
            size: "sm",
            color: "currentColor"
          })]
        }))
      })
    }), (0, i.jsxs)("div", {
      className: A.controls,
      children: [(0, i.jsx)("div", {
        className: A.controlUser,
        children: (0, i.jsxs)("div", {
          className: A.controlUserContainer,
          children: [(0, i.jsx)(u.Text, {
            variant: "text-md/medium",
            color: "always-white",
            className: A.controlUserName,
            children: Z.ZP.getName(n.stream.guildId, n.stream.channelId, s)
          }), (0, i.jsx)(O.ZP, {
            primaryGuild: c.primaryGuild,
            userId: c.id,
            containerClassName: A.guildTag,
            inline: false,
            onShowProfile: () => {
              (0, N.Ws)(_.Odu.GO_LIVE, {
                type: N.Qu.GO_LIVE,
                value: N.bk.GUILD_PROFILE_OPENED,
                userId: n.user.id
              })
            }
          })]
        })
      }), (0, i.jsx)("div", {
        className: A.controlActions,
        children: t && (0, i.jsxs)(i.Fragment, {
          children: [p && (0, i.jsx)(L, {
            participant: n
          }), (0, i.jsx)(M, {
            participant: n
          }), (0, i.jsx)(u.aML, {
            "data-migration-pending": true,
            text: P.intl.string(P.t["3D5yo/"]),
            children: e => {
              var {
                onClick: t
              } = e, r = k(e, ["onClick"]);
              return (0, i.jsx)(u.P3F, R(D({}, r), {
                className: A.controlAction,
                onClick: V(n, l, t),
                children: (0, i.jsx)(u.xhG, {
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
let U = new Set([Chunk981631.jm8.ENDED, Chunk981631.jm8.FAILED, Chunk981631.jm8.PAUSED]),
  W = Chunk647438.memo(function(e) {
    let {
      participant: t,
      width: n,
      locked: r,
      widgetId: l,
      pinned: o
    } = e, s = (0, a.e7)([x.Z], () => x.Z.getActiveStreamForUser(t.user.id, t.stream.guildId), [t.user.id, t.stream.guildId]), c = (0, E.bp)(), d = null != s && U.has(s.state), h = null != s, f = (0, T.yA)(t.stream), g = (0, T.xN)(t.stream);
    return !h && r || d ? null : (0, i.jsxs)("div", {
      className: A.tile,
      children: [h && !r && (0, i.jsx)(m.ZP, {
        size: m.ZP.Sizes.SMALL,
        className: A.liveIndicator
      }), h ? (0, i.jsx)("div", {
        className: A.streamTile,
        children: (0, i.jsx)(u.kL8, {
          "aria-label": P.intl.formatToPlainString(P.t.gHPz3Q, {
            streamerName: t.user.username
          }),
          onClick: () => {},
          onContextMenu: V(t, c),
          className: A.streamTile,
          style: {
            transform: "scale(".concat(f, ")")
          },
          children: (0, i.jsx)(S.Z, {
            participant: t,
            width: n,
            fit: null != g ? g : v.L.CONTAIN,
            inPopout: true,
            focused: !r,
            selected: false,
            wrapperClassName: r ? A.streamTileWrapper : true,
            inOverlayPopout: true
          })
        })
      }) : (0, i.jsx)("div", {
        className: A.streamPreview,
        children: (0, i.jsx)(y.Z, {
          noText: true,
          className: A.absoluteFill,
          stream: t.stream
        })
      }), r ? null : (0, i.jsx)(z, {
        participant: t,
        hasActiveStream: h,
        onEnablePin: () => {
          o || (0, p.xh)(l)
        }
      })]
    })
  })