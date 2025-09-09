/** Chunk was on 46290 **/
/** chunk id: 752802, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => z
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk46973 = require("./46973.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk239091 = require("./239091.js"),
  Chunk765250 = require("./765250.js"),
  Chunk872810 = require("./872810.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk414910 = require("./414910.js"),
  Chunk194082 = require("./194082.jsx"),
  Chunk871118 = require("./871118.jsx"),
  Chunk172751 = require("./172751.jsx"),
  Chunk352978 = require("./352978.jsx"),
  Chunk833519 = require("./833519.jsx"),
  Chunk839662 = require("./839662.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk131951 = require("./131951.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk444295 = require("./444295.js"),
  Chunk1226 = require("./1226.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk379746 = require("./379746.js");

function P(e) {
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

function A(e, t) {
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
      o = Object.keys(e);
    for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
    return r
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++) n = o[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
  }
  return r
}

function D(e) {
  let {
    participant: t
  } = e, n = t.user.id, o = (0, a.e7)([x.Z], () => {
    let e = (0, m.Z)(t.type);
    return x.Z.isLocalMute(t.user.id, e)
  }, [t]), l = (0, a.e7)([S.default], () => S.default.getId()), {
    hasVideo: d
  } = (0, E.Z)(t, l), p = o && d, h = r.useCallback(() => {
    u.Z.toggleLocalMute(n, s.Yn.STREAM)
  }, [n]);
  return (0, i.jsx)(c.ua7, {
    text: p ? Z.intl.string(Z.t.YqAjX1) : Z.intl.string(Z.t["w4m94+"]),
    children: e => {
      var {
        onClick: n
      } = e, r = k(e, ["onClick"]);
      return (0, i.jsx)(c.P3F, A(P({}, r), {
        className: T.controlAction,
        onClick: e => {
          e.stopPropagation(), (0, C.Ws)(N.Odu.GO_LIVE, {
            type: C.Qu.AUDIO,
            value: p ? C.bk.ENABLED : C.bk.DISABLED,
            userId: t.user.id
          }), null == n || n(), h()
        },
        children: p ? (0, i.jsx)(c.OyP, {
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

function R(e, t, r) {
  return o => {
    (0, C.Ws)(N.Odu.GO_LIVE, {
      type: C.Qu.GO_LIVE,
      value: C.bk.SETTINGS_OPENED,
      userId: e.user.id
    }), o.stopPropagation(), null == r || r(), (0, d.jW)(o, async () => {
      let {
        default: r
      } = await n.e("5704").then(n.bind(n, 360429));
      return n => (0, i.jsx)(r, A(P({}, n), {
        stream: e.stream,
        exitFullscreen: () => {},
        appContext: t
      }))
    })
  }
}

function L(e) {
  let {
    hasActiveStream: t,
    participant: n,
    onEnablePin: r
  } = e, o = (0, f.bp)(), s = n.user, u = (0, a.e7)([I.default], () => {
    var e;
    return null != (e = I.default.getUser(s.id)) ? e : s
  }, [s]), d = t ? Z.intl.string(Z.t.tLxK4u) : Z.intl.string(Z.t.E5RDnJ);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      className: l()(T.controlBackground, {
        [T.controlsWithActiveStream]: t
      })
    }), !t && (0, i.jsx)("div", {
      className: T.watchActionContainer,
      children: (0, i.jsx)(c.ua7, {
        text: d,
        children: e => (0, i.jsxs)(c.P3F, A(P({}, e), {
          className: T.watchButton,
          onClick: () => {
            var t;
            null == (t = e.onClick) || t.call(e), (0, h.rn)(n.stream, {
              forceMultiple: true,
              noFocus: true
            }), r(), (0, C.Ws)(N.Odu.GO_LIVE, {
              type: C.Qu.GO_LIVE,
              value: C.bk.ENABLED,
              userId: n.user.id
            })
          },
          children: [(0, i.jsx)(c.Text, {
            variant: "text-sm/semibold",
            color: "always-white",
            children: Z.intl.string(Z.t["I6JG4+"])
          }), (0, i.jsx)(c.OgY, {
            size: "sm",
            color: "currentColor"
          })]
        }))
      })
    }), (0, i.jsxs)("div", {
      className: T.controls,
      children: [(0, i.jsx)("div", {
        className: T.controlUser,
        children: (0, i.jsxs)("div", {
          className: T.controlUserContainer,
          children: [(0, i.jsx)(c.pzj, {
            size: "xs",
            color: c.TVs.colors.INTERACTIVE_ACTIVE
          }), (0, i.jsx)(c.Text, {
            variant: "text-md/medium",
            color: "always-white",
            className: T.controlUserName,
            children: j.ZP.getName(n.stream.guildId, n.stream.channelId, s)
          }), (0, i.jsx)(O.ZP, {
            primaryGuild: u.primaryGuild,
            userId: u.id,
            containerClassName: T.guildTag,
            inline: false,
            onShowProfile: () => {
              (0, C.Ws)(N.Odu.GO_LIVE, {
                type: C.Qu.GO_LIVE,
                value: C.bk.GUILD_PROFILE_OPENED,
                userId: n.user.id
              })
            }
          })]
        })
      }), (0, i.jsx)("div", {
        className: T.controlActions,
        children: t && (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(D, {
            participant: n
          }), (0, i.jsx)(c.ua7, {
            text: Z.intl.string(Z.t["3D5yo6"]),
            children: e => {
              var {
                onClick: t
              } = e, r = k(e, ["onClick"]);
              return (0, i.jsx)(c.P3F, A(P({}, r), {
                className: T.controlAction,
                onClick: R(n, o, t),
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
let M = new Set([Chunk981631.jm8.ENDED, Chunk981631.jm8.FAILED, Chunk981631.jm8.PAUSED]),
  z = Chunk647438.memo(function(e) {
    let {
      participant: t,
      width: n,
      locked: r,
      widgetId: o,
      pinned: l
    } = e, s = (0, a.e7)([_.Z], () => _.Z.getActiveStreamForUser(t.user.id, t.stream.guildId), [t.user.id, t.stream.guildId]), u = (0, f.bp)(), d = null != s && M.has(s.state), h = null != s, m = (0, w.yA)(t.stream), O = (0, w.xN)(t.stream);
    return !h && r || d ? null : (0, i.jsxs)("div", {
      className: T.tile,
      children: [h && !r && (0, i.jsx)(g.ZP, {
        size: g.ZP.Sizes.SMALL,
        className: T.liveIndicator
      }), h ? (0, i.jsx)("div", {
        className: T.streamTile,
        children: (0, i.jsx)(c.kL8, {
          "aria-label": Z.intl.formatToPlainString(Z.t.gHPz3d, {
            streamerName: t.user.username
          }),
          onClick: () => {},
          onContextMenu: R(t, u),
          className: T.streamTile,
          style: {
            transform: "scale(".concat(m, ")")
          },
          children: (0, i.jsx)(b.Z, {
            participant: t,
            width: n,
            fit: null != O ? O : v.L.CONTAIN,
            inPopout: true,
            focused: !r,
            selected: false,
            wrapperClassName: r ? T.streamTileWrapper : true,
            inOverlayPopout: true
          })
        })
      }) : (0, i.jsx)("div", {
        className: T.streamPreview,
        children: (0, i.jsx)(y.Z, {
          noText: true,
          className: T.absoluteFill,
          stream: t.stream
        })
      }), r ? null : (0, i.jsx)(L, {
        participant: t,
        hasActiveStream: h,
        onEnablePin: () => {
          l || (0, p.xh)(o)
        }
      })]
    })
  })