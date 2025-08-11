/** Chunk was on 75708 **/
/** chunk id: 293389, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => U
}), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk224706 = require("./224706.js"),
  Chunk225433 = require("./225433.jsx"),
  Chunk570928 = require("./570928.js"),
  Chunk594190 = require("./594190.js"),
  Chunk320724 = require("./320724.js"),
  Chunk297700 = require("./297700.js"),
  Chunk817788 = require("./817788.js"),
  Chunk509003 = require("./509003.js"),
  Chunk77498 = require("./77498.js"),
  Chunk283595 = require("./283595.js"),
  Chunk626135 = require("./626135.js"),
  Chunk251625 = require("./251625.js"),
  Chunk358085 = require("./358085.js"),
  Chunk210887 = require("./210887.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk443474 = require("./443474.js"),
  Chunk20795 = require("./20795.js"),
  Chunk893354 = require("./893354.js"),
  Chunk20493 = require("./20493.js");

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
let D = Chunk442837.ZP.connectStores([Chunk210887.Z], () => ({
    theme: Chunk210887.Z.theme
  }))(Chunk481060.ubH),
  Z = (0, Chunk358085.isWindows)();

function w(e) {
  let {
    onClose: t
  } = e, n = (0, l.e7)([g.ZP], () => g.ZP.getCandidateGames()), [s, o] = r.useState(null), m = n.map(e => ({
    key: e.pid,
    value: e,
    label: null != e.name ? e.name : ""
  }));
  return <d.VqE className={a()(I.addGamePopout, N.elevationBorderHigh)} aria-label={T.intl.string(T.t.GTCx0t)}>{<d.VcW placeholder={T.intl.string(T.t.XqMe3N)} value={s} options={m} onChange={function(e) {
        o(e)
      }} renderOptionLabel={e => (0, i.jsx)(d.Text, {
        variant: "text-md/medium",
        color: "text-default",
        lineClamp: 1,
        children: e.label
      })} />}{<d.$i$ className={a()(A.marginTop8, A.marginBottom8)} />}{<div className={a()(I.actions, y.horizontal)}>{<c.zx className={I.cancelButton} look={c.iL.LINK} color={c.Tt.PRIMARY} onClick={t}>{T.intl.string(T.t["ETE/oK"])}</c.zx>}{<d.zxk variant={"primary"} text={T.intl.string(T.t.GTCx0t)} disabled={null == s} onClick={function() {
          null != s && (u.Z.addGame(s.pid, s.name), t())
        }} />}</div>}</d.VqE>
}

function k(e) {
  let {
    rawGame: t,
    nowPlaying: s = false,
    isOverride: c,
    subgames: h,
    isSubgame: b = false,
    parentGame: C
  } = e, O = (0, l.cj)([g.ZP, _.Z, j.Z], () => (0, g.FZ)(t, g.ZP, _.Z, j.Z)), {
    canToggleDetection: v,
    isCurrentGameDetectionEnabled: N
  } = (0, l.cj)([g.ZP], () => ({
    canToggleDetection: null == C || g.ZP.isDetectionEnabled(C),
    isCurrentGameDetectionEnabled: g.ZP.isDetectionEnabled(O)
  })), A = (0, l.e7)([g.ZP], () => g.ZP.getVisibleGame()), [D, w] = r.useState(false), L = r.useMemo(() => (0, x.le)(O) ? b ? O.gameName : T.intl.formatToPlainString(T.t.G6BGd3, {
    subgameName: O.gameName
  }) : O.name, [O, b]), [M, B] = r.useState(null != L ? L : "???"), U = a()(y.flexCenter, {
    [I.game]: !s,
    [I.activeGame]: s,
    [I.nowPlaying]: null != O && s,
    [I.subgame]: b,
    [I.gameHasSubgame]: null != h && h.length > 0
  });

  function V() {
    null != h && h.length > 0 && N ? (0, d.ZDy)(async () => {
      let {
        Modal: e
      } = await Promise.resolve().then(n.bind(n, 82659));
      return t => <e{...R(P({}, t), {
        title: T.intl.formatToPlainString(T.t.PZ4fKS, {
          platform: L
        }),
        subtitle: T.intl.formatToPlainString(T.t.ZIQbfX, {
          platform: L
        }),
        actions: [{
          text: T.intl.string(T.t["ETE/oK"]),
          onClick: () => t.onClose(),
          variant: "secondary"
        }, {
          text: T.intl.string(T.t.Fmjzt7),
          onClick: () => {
            u.Z.toggleDetection(O), t.onClose()
          },
          variant: "primary"
        }]
      })} />
    }) : u.Z.toggleDetection(O)
  }

  function G() {
    if (D) return;
    let e = null != O.id ? _.Z.getDetectableGame(O.id) : null;
    E.default.track(S.rMx.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
      application_id: null == e ? true : e.id,
      game_name: (0, x.le)(O) ? O.gameName : O.name
    }), (0, d.showToast)((0, d.createToast)(T.intl.formatToPlainString(T.t["6klMOj"], {
      gameName: (0, x.le)(O) ? O.gameName : O.name
    }), d.ToastType.SUCCESS)), w(true)
  }
  let F = null != A && (0, g.rH)(O) === (0, g.rH)(A),
    H = null != C && C.id === (null == A ? true : A.id) || F || null != h && h.some(e => e.id === (null == A ? true : A.id));
  return <i.Fragment>{<div className={U}>{<div className={a()(I.gameNameLastPlayed, y.vertical)}>{O.verified && !c ? <div className={I.detectedApplication}>{<div className={I.gameName}>{L}</div>}{<d.ua7 text={T.intl.string(T.t["4PJP5u"])}>{e => (0, i.jsx)(f.Z, R(P({
              className: I.gameVerifiedIcon,
              size: 18,
              color: o.Z.unsafe_rawColors.BRAND_500.css
            }, e), {
              children: (0, i.jsx)(d.kmB, {
                size: "custom",
                width: 18,
                height: 18,
                color: o.Z.unsafe_rawColors.WHITE_500.css
              })
            }))}</d.ua7>}</div> : <input className={a()(I.gameName, I.gameNameInput)} type={"text"} maxLength={128} value={M} onBlur={function() {
            O.name !== M && u.Z.editName(O, M)
          }} onKeyDown={function(e) {
            13 === e.keyCode && (e.currentTarget.blur(), e.preventDefault())
          }} onChange={e => B(e.target.value)} />}{function() {
          let e, {
            played: t,
            exePath: n
          } = O;
          return s || F ? e = T.intl.string(T.t.VbV5dn) : null != t && "" !== t && (e = T.intl.format(T.t.gGeOEx, {
            when: t
          })), (0, i.jsx)("div", {
            className: I.lastPlayed,
            children: (0, i.jsx)(p.Z, {
              hoverText: null != n && "" !== n ? n.toUpperCase() : "",
              children: e
            })
          })
        }()}</div>}{c || D ? null : <div className={a()(y.flexCenter, y.noWrap, y.justifyBetween, I.toggleContainer)}><d.ua7 text={T.intl.string(T.t["y0B+lp"])}>{e => {
            let {
              onMouseEnter: t,
              onMouseLeave: n
            } = e;
            return (0, i.jsx)(d.P3F, {
              "aria-label": T.intl.string(T.t["y0B+lp"]),
              className: I.toggleIcon,
              onClick: G,
              onMouseEnter: t,
              onMouseLeave: n,
              children: (0, i.jsx)(d.U65, {
                size: "md",
                color: "currentColor",
                className: I.toggleIconOn,
                colorClass: I.fill
              })
            })
          }}</d.ua7></div>}{function() {
        let {
          detectable: e
        } = O, t = e && v ? (0, i.jsx)(d.tEF, {
          size: "md",
          color: "currentColor",
          className: I.toggleIconOn,
          colorClass: I.fill
        }) : (0, i.jsx)(d.kZF, {
          size: "md",
          color: "currentColor",
          className: v ? I.toggleIconOff : I.toggleIconInactive,
          colorClass: I.fill
        });
        return (0, i.jsx)("div", {
          className: a()(y.flexCenter, y.noWrap, y.justifyBetween, I.toggleContainer),
          children: (0, i.jsx)(d.ua7, {
            text: T.intl.string(T.t.QmitzM),
            children: e => {
              let {
                onMouseEnter: n,
                onMouseLeave: r
              } = e;
              return v ? (0, i.jsx)(d.P3F, {
                "aria-label": T.intl.string(T.t.QmitzM),
                className: I.toggleIcon,
                onClick: V,
                onMouseEnter: n,
                onMouseLeave: r,
                children: t
              }) : t
            }
          })
        })
      }()}{function() {
        if (!Z || (0, x.le)(O)) return null;
        let {
          overlay: e,
          overlayWarn: t
        } = O, n = e ? (0, i.jsx)(d.pzj, {
          size: "md",
          color: "currentColor",
          className: I.toggleIconOn,
          colorClass: I.fill
        }) : (0, i.jsx)(d.o8v, {
          size: "md",
          color: "currentColor",
          className: I.toggleIconOff,
          colorClass: I.fill
        }), r = t ? (0, i.jsx)(d.ua7, {
          text: T.intl.string(T.t.Vfw2Ly),
          children: e => (0, i.jsx)("i", P({
            className: I.overlayWarningIcon
          }, e))
        }) : null;
        return (0, i.jsxs)("div", {
          className: a()(y.flexCenter, y.noWrap, y.justifyBetween, I.toggleContainer),
          children: [r, (0, i.jsx)(d.ua7, {
            text: T.intl.string(T.t["1+O+Tk"]),
            children: t => {
              let {
                onMouseEnter: r,
                onMouseLeave: s
              } = t;
              return (0, i.jsx)(d.P3F, {
                "aria-label": T.intl.string(T.t["1+O+Tk"]),
                className: I.toggleIcon,
                onClick: () => {
                  var t;
                  return t = !e, void u.Z.toggleOverlay(O, t, t)
                },
                onMouseEnter: r,
                onMouseLeave: s,
                children: n
              })
            }
          })]
        })
      }()}{s && !c || H ? null : <m.Z className={I.removeGame} onClick={function() {
          u.Z.deleteEntry(O), null == h || h.forEach(e => {
            u.Z.deleteEntry(e)
          })
        }} />}</div>}{null != h && h.length > 0 && !s && <div className={I.subgameContainer}>{h.map((e, t) => (0, i.jsxs)(r.Fragment, {
        children: [(0, i.jsx)(k, {
          rawGame: e,
          isOverride: false,
          isSubgame: true,
          parentGame: O
        }), t !== h.length - 1 && (0, i.jsx)("div", {
          className: I.border
        })]
      }, (0, g.rH)(e)))}</div>}</i.Fragment>
}

function L() {
  return <div className={a()(Chunk893354.flexCenter, Chunk443474.notDetected, Chunk443474.activeGame)}><div className={a()(Chunk443474.gameNameLastPlayed, Chunk893354.vertical)}>{<div className={Chunk443474.gameName}>{Chunk388032.intl.string(Chunk388032.t["H68X9/"])}</div>}{<div className={Chunk443474.lastPlayed}>{Chunk388032.intl.string(Chunk388032.t.T5Ilm5)}</div>}</div></div>
}

function M(e) {
  let {
    children: t
  } = e;
  return <D className={A.marginTop40}>{<d.oxh darkSrc={n(879601)} lightSrc={n(889e3)} width={430} height={250} />}{t}</D>
}
let B = (0, Chunk251625.oH)(function() {
    for (var e = arguments.length, t = Array(module), n = 0; require < module; require++) exports[require] = arguments[require];
    return new Set(exports.map(e => e.exePath))
  }),
  U = function(e) {
    let {
      className: t,
      showHeader: n = true
    } = e, s = (0, l.Wu)([g.ZP], () => g.ZP.getGamesSeen(false)), {
      runningGame: o,
      overrideExePaths: u
    } = (0, l.cj)([g.ZP], () => ({
      runningGame: g.ZP.getVisibleGame(),
      overrideExePaths: B(...g.ZP.getOverrides())
    })), {
      gameHistory: m,
      robloxSubgameHistory: p
    } = r.useMemo(() => s.reduce((e, t) => ((0, x.le)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
      gameHistory: [],
      robloxSubgameHistory: []
    }), [s]), f = r.useRef(null);
    return r.useEffect(() => ((0, h.Ky)(), h.P7), []), <d.hjN tag={"h1"} title={n ? T.intl.string(T.t.AVDyEh) : null} className={t}>{null != o ? <k rawGame={o} isOverride={u.has(o.exePath)} nowPlaying={true} subgames={o.id === b.eB ? p : true} /> : <L />}{<div className={a()(I.nowPlayingAdd, A.marginReset, A.marginTop8, A.marginBottom20)}>{<span>{T.intl.string(T.t.xwhoqK)}</span>}{<d.yRy targetElementRef={f} renderPopout={e => {
            let {
              closePopout: t
            } = e;
            return (0, i.jsx)(w, {
              onClose: t
            })
          }} align={"center"} position={"bottom"}>{e => (0, i.jsx)(c.zx, R(P({}, e), {
            look: c.iL.LINK,
            size: c.Ph.MIN,
            color: c.Tt.LINK,
            buttonRef: f,
            children: T.intl.string(T.t.GjgdXV)
          }))}</d.yRy>}</div>}{0 === m.length ? <M><d.OZU>{T.intl.string(T.t["1yiJws"])}</d.OZU></M> : <d.hjN className={A.marginTop40}>{<d.vwX className={I.addedGamesTitle}>{T.intl.string(T.t.jCOdv7)}</d.vwX>}{<d.R94 className={I.addedGamesDescription} type={d.geA.DESCRIPTION}>{T.intl.format(T.t.KPA3m5, {
            igdbLink: "https://www.igdb.com/about"
          })}</d.R94>}{m.map(e => <k rawGame={e} isOverride={u.has(e.exePath)} subgames={e.id === b.eB ? p : true} />)}</d.hjN>}</d.hjN>
  }