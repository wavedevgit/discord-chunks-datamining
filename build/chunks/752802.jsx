/** Chunk was on 89298 **/
/** chunk id: 752802, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => z
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk871118 = require("./871118.js"),
  Chunk172751 = require("./172751.jsx"),
  Chunk352978 = require("./352978.jsx"),
  Chunk833519 = require("./833519.js"),
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
  Chunk652156 = require("./652156.js");

function T(e) {
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
  } = e, n = t.user.id, o = (0, a.e7)([S.Z], () => {
    let e = (0, m.Z)(t.type);
    return S.Z.isLocalMute(t.user.id, e)
  }, [t]), l = (0, a.e7)([x.default], () => x.default.getId()), {
    hasVideo: d
  } = (0, E.Z)(t, l), p = o && d, f = r.useCallback(() => {
    u.Z.toggleLocalMute(n, s.Yn.STREAM)
  }, [n]);
  return <c.ua7 text={p ? Z.intl.string(Z.t.YqAjX1) : Z.intl.string(Z.t["w4m94+"])}>{e => {
      var {
        onClick: n
      } = e, r = k(e, ["onClick"]);
      return (0, i.jsx)(c.P3F, A(T({}, r), {
        className: P.controlAction,
        onClick: e => {
          e.stopPropagation(), (0, C.Ws)(w.Odu.GO_LIVE, {
            type: C.Qu.AUDIO,
            value: p ? C.bk.ENABLED : C.bk.DISABLED,
            userId: t.user.id
          }), null == n || n(), f()
        },
        children: p ? (0, i.jsx)(c.OyP, {
          size: "sm",
          color: "currentColor"
        }) : (0, i.jsx)(c.gj8, {
          size: "sm",
          color: "currentColor"
        })
      }))
    }}</c.ua7>
}

function R(e, t, r) {
  return o => {
    (0, C.Ws)(w.Odu.GO_LIVE, {
      type: C.Qu.GO_LIVE,
      value: C.bk.SETTINGS_OPENED,
      userId: e.user.id
    }), o.stopPropagation(), null == r || r(), (0, d.jW)(o, async () => {
      let {
        default: r
      } = await n.e("5704").then(n.bind(n, 360429));
      return n => <r{...A(T({}, n), {
        stream: e.stream,
        exitFullscreen: () => {},
        appContext: t
      })} />
    })
  }
}

function L(e) {
  let {
    hasActiveStream: t,
    participant: n,
    onEnablePin: r
  } = e, o = (0, h.bp)(), s = n.user, u = (0, a.e7)([I.default], () => {
    var e;
    return null != (e = I.default.getUser(s.id)) ? e : s
  }, [s]), d = t ? Z.intl.string(Z.t.tLxK4u) : Z.intl.string(Z.t.E5RDnJ);
  return <i.Fragment>{<div className={l()(P.controlBackground, {
        [P.controlsWithActiveStream]: t
      })} />}{!t && <div className={P.watchActionContainer}><c.ua7 text={d}>{e => (0, i.jsxs)(c.P3F, A(T({}, e), {
          className: P.watchButton,
          onClick: () => {
            var t;
            null == (t = e.onClick) || t.call(e), (0, f.rn)(n.stream, {
              forceMultiple: true,
              noFocus: true
            }), r(), (0, C.Ws)(w.Odu.GO_LIVE, {
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
        }))}</c.ua7></div>}{<div className={P.controls}>{<div className={P.controlUser}><div className={P.controlUserContainer}>{<c.pzj size={"xs"} color={c.TVs.colors.INTERACTIVE_ACTIVE} />}{<c.Text variant={"text-md/medium"} color={"always-white"} className={P.controlUserName}>{j.ZP.getName(n.stream.guildId, n.stream.channelId, s)}</c.Text>}{<O.ZP primaryGuild={u.primaryGuild} userId={u.id} containerClassName={P.guildTag} inline={false} onShowProfile={() => {
              (0, C.Ws)(w.Odu.GO_LIVE, {
                type: C.Qu.GO_LIVE,
                value: C.bk.GUILD_PROFILE_OPENED,
                userId: n.user.id
              })
            }} />}</div></div>}{<div className={P.controlActions}>{t && (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(D, {
            participant: n
          }), (0, i.jsx)(c.ua7, {
            text: Z.intl.string(Z.t["3D5yo6"]),
            children: e => {
              var {
                onClick: t
              } = e, r = k(e, ["onClick"]);
              return (0, i.jsx)(c.P3F, A(T({}, r), {
                className: P.controlAction,
                onClick: R(n, o, t),
                children: (0, i.jsx)(c.xhG, {
                  size: "sm",
                  color: "currentColor"
                })
              }))
            }
          })]
        })}</div>}</div>}</i.Fragment>
}
let M = new Set([Chunk981631.jm8.ENDED, Chunk981631.jm8.FAILED, Chunk981631.jm8.PAUSED]),
  z = Chunk73800.memo(function(e) {
    let {
      participant: t,
      width: n,
      locked: r,
      widgetId: o,
      pinned: l
    } = e, s = (0, a.e7)([_.Z], () => _.Z.getActiveStreamForUser(t.user.id, t.stream.guildId), [t.user.id, t.stream.guildId]), u = (0, h.bp)(), d = null != s && M.has(s.state), f = null != s, m = (0, N.yA)(t.stream), O = (0, N.xN)(t.stream);
    return !f && r || d ? null : <div className={P.tile}>{f && !r && <g.ZP size={g.ZP.Sizes.SMALL} className={P.liveIndicator} />}{f ? <div className={P.streamTile}><c.kL8 aria-label={Z.intl.formatToPlainString(Z.t.gHPz3d, {
            streamerName: t.user.username
          })} onClick={() => {}} onContextMenu={R(t, u)} className={P.streamTile} style={{
            transform: "scale(".concat(m, ")")
          }}><v.Z participant={t} width={n} fit={null != O ? O : b.L.CONTAIN} inPopout={true} focused={!r} selected={false} wrapperClassName={r ? P.streamTileWrapper : true} inOverlayPopout={true} /></c.kL8></div> : <div className={P.streamPreview}><y.Z noText={true} className={P.absoluteFill} stream={t.stream} /></div>}{r ? null : <L participant={t} hasActiveStream={f} onEnablePin={() => {
          l || (0, p.xh)(o)
        }} />}</div>
  })