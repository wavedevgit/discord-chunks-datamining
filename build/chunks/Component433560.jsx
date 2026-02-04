/** Chunk was on 71447 **/
/** chunk id: 433560, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => U,
  d: () => G
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk417597 = require("./417597.js"),
  Chunk205693 = require("./205693.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk442433 = require("./442433.js"),
  Chunk391973 = require("./391973.js"),
  Chunk401843 = require("./401843.js"),
  Chunk520698 = require("./520698.js"),
  Chunk164617 = require("./164617.js"),
  Chunk402216 = require("./402216.jsx"),
  Chunk652896 = require("./652896.js"),
  Chunk607407 = require("./607407.jsx"),
  Chunk534400 = require("./534400.jsx"),
  Chunk267102 = require("./267102.jsx"),
  Chunk401901 = require("./401901.jsx"),
  Chunk203355 = require("./203355.jsx"),
  Chunk110234 = require("./110234.js"),
  Chunk616356 = require("./616356.js"),
  Chunk961350 = require("./961350.js"),
  Chunk430452 = require("./430452.js"),
  Chunk287809 = require("./287809.js"),
  Chunk562153 = require("./562153.js"),
  Chunk810412 = require("./810412.js"),
  Chunk589051 = require("./589051.js"),
  Chunk761661 = require("./761661.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk444638 = require("./444638.js");

function k(e) {
  let {
    participant: t
  } = e;
  return (0, i.jsx)(u.m_, {
    text: R.intl.string(R.t["4EGMWL"]),
    children: (0, i.jsx)(c.DUT, {
      className: L.IF,
      onClick: e => {
        (0, f.vN)((0, y._z)(t.stream), false), e.stopPropagation(), (0, w.YX)(D.uss.GO_LIVE, {
          type: w.Z5.SCREEN_SHARE,
          value: w.IP.DISABLED,
          userId: t.user.id
        })
      },
      children: (0, i.jsx)(c.GT3, {
        size: "sm",
        color: c.LU0.colors.WHITE
      })
    })
  })
}

function M(e) {
  let {
    participant: t
  } = e, n = t.user.id, l = (0, o.bG)([j.A], () => {
    let e = (0, g.A)(t.type);
    return j.A.isLocalMute(t.user.id, e)
  }, [t]), a = (0, o.bG)([I.default], () => I.default.getId()), {
    hasVideo: h
  } = (0, S.A)(t, a), p = l && h, f = r.useCallback(() => {
    d.A.toggleLocalMute(n, s.x.STREAM)
  }, [n]);
  return (0, i.jsx)(u.m_, {
    text: p ? R.intl.string(R.t.YqAjXy) : R.intl.string(R.t.w4m945),
    children: (0, i.jsx)(c.DUT, {
      className: L.IF,
      onClick: e => {
        e.stopPropagation(), (0, w.YX)(D.uss.GO_LIVE, {
          type: w.Z5.AUDIO,
          value: p ? w.IP.ENABLED : w.IP.DISABLED,
          userId: t.user.id
        }), f()
      },
      children: p ? (0, i.jsx)(c._RO, {
        size: "sm",
        color: "currentColor"
      }) : (0, i.jsx)(c.HKD, {
        size: "sm",
        color: "currentColor"
      })
    })
  })
}

function z(e, t) {
  return r => {
    (0, w.YX)(D.uss.GO_LIVE, {
      type: w.Z5.GO_LIVE,
      value: w.IP.SETTINGS_OPENED,
      userId: e.user.id
    }), r.stopPropagation(), (0, h.L3)(r, async () => {
      let {
        default: r
      } = await n.e("61361").then(n.bind(n, 663912));
      return n => {
        var l, a;
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
        }({}, n), a = a = {
          stream: e.stream,
          exitFullscreen: () => {},
          appContext: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(a)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e))
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
  } = e, l = (0, b.Us)(), s = n.user, d = (0, o.bG)([C.default], () => {
    var e;
    return null != (e = C.default.getUser(s.id)) ? e : s
  }, [s]), h = t ? R.intl.string(R.t.tLxK4l) : R.intl.string(R.t.E5RDnK), {
    enabled: p
  } = (0, N.QC)("GoLiveTile");
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      className: a()(L.MI, {
        [L.te]: t
      })
    }), !t && (0, i.jsx)("div", {
      className: L.TP,
      children: (0, i.jsx)(u.m_, {
        text: h,
        children: (0, i.jsxs)(c.DUT, {
          className: L.kx,
          onClick: () => {
            (0, f.A9)(n.stream, {
              forceMultiple: true,
              noFocus: true
            }), r(), (0, w.YX)(D.uss.GO_LIVE, {
              type: w.Z5.GO_LIVE,
              value: w.IP.ENABLED,
              userId: n.user.id
            })
          },
          children: [(0, i.jsx)(c.Text, {
            variant: "text-sm/semibold",
            color: "always-white",
            children: R.intl.string(R.t.I6JG46)
          }), (0, i.jsx)(c.vAm, {
            size: "sm",
            color: "currentColor"
          })]
        })
      })
    }), (0, i.jsxs)("div", {
      className: L.ne,
      children: [(0, i.jsx)("div", {
        className: L.fL,
        children: (0, i.jsxs)("div", {
          className: L.K8,
          children: [(0, i.jsx)(c.Text, {
            variant: "text-md/medium",
            color: "always-white",
            className: L.yb,
            children: T.Ay.getName(n.stream.guildId, n.stream.channelId, s)
          }), (0, i.jsx)(v.Ay, {
            primaryGuild: d.primaryGuild,
            userId: d.id,
            containerClassName: L.Mp,
            inline: false,
            onShowProfile: () => {
              (0, w.YX)(D.uss.GO_LIVE, {
                type: w.Z5.GO_LIVE,
                value: w.IP.GUILD_PROFILE_OPENED,
                userId: n.user.id
              })
            }
          })]
        })
      }), (0, i.jsx)("div", {
        className: L.FO,
        children: t && (0, i.jsxs)(i.Fragment, {
          children: [p && (0, i.jsx)(k, {
            participant: n
          }), (0, i.jsx)(M, {
            participant: n
          }), (0, i.jsx)(u.m_, {
            text: R.intl.string(R.t["3D5yo/"]),
            children: (0, i.jsx)(c.DUT, {
              className: L.IF,
              onClick: z(n, l),
              children: (0, i.jsx)(c.jNK, {
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
let U = new Set([Chunk652215.XYD.ENDED, Chunk652215.XYD.FAILED, Chunk652215.XYD.PAUSED]),
  G = Chunk64700.memo(function(e) {
    let {
      participant: t,
      width: n,
      locked: r,
      widgetId: l,
      pinned: a
    } = e, s = (0, o.bG)([x.A], () => x.A.getActiveStreamForUser(t.user.id, t.stream.guildId), [t.user.id, t.stream.guildId]), u = (0, b.Us)(), d = null != s && U.has(s.state), h = null != s, f = (0, P.dh)(t.stream), g = (0, P.XG)(t.stream);
    return !h && r || d ? null : (0, i.jsxs)("div", {
      className: L.Vs,
      children: [h && !r && (0, i.jsx)(A.Ay, {
        size: A.Ay.Sizes.SMALL,
        className: L.Ok
      }), h ? (0, i.jsx)("div", {
        className: L.X$,
        children: (0, i.jsx)(c.sqX, {
          "aria-label": R.intl.formatToPlainString(R.t.gHPz3Q, {
            streamerName: t.user.username
          }),
          onClick: () => {},
          onContextMenu: z(t, u),
          className: L.X$,
          style: {
            transform: "scale(".concat(f, ")")
          },
          children: (0, i.jsx)(_.A, {
            participant: t,
            width: n,
            fit: null != g ? g : E.$.CONTAIN,
            popoutType: m.N.OVERLAY,
            focused: !r,
            selected: false,
            wrapperClassName: r ? L.Gq : true
          })
        })
      }) : (0, i.jsx)("div", {
        className: L.Rh,
        children: (0, i.jsx)(O.A, {
          noText: true,
          className: L.HL,
          stream: t.stream
        })
      }), r ? null : (0, i.jsx)(V, {
        participant: t,
        hasActiveStream: h,
        onEnablePin: () => {
          a || (0, p.v0)(l)
        }
      })]
    })
  })