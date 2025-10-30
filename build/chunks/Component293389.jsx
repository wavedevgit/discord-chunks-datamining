/** Chunk was on web.js **/
/** chunk id: 293389, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Y
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk224706 = require("./224706.js"),
  Chunk225433 = require("./225433.jsx"),
  Chunk570928 = require("./570928.jsx"),
  Chunk594190 = require("./594190.js"),
  Chunk320724 = require("./320724.js"),
  Chunk297700 = require("./297700.jsx"),
  Chunk817788 = require("./817788.js"),
  Chunk509003 = require("./509003.js"),
  Chunk77498 = require("./77498.js"),
  Chunk283595 = require("./283595.js"),
  Chunk626135 = require("./626135.js"),
  Chunk251625 = require("./251625.js"),
  Chunk358085 = require("./358085.js"),
  Chunk210887 = require("./210887.js"),
  Chunk273313 = require("./273313.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk295907 = require("./295907.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk740508 = require("./740508.js"),
  Chunk315091 = require("./315091.js"),
  Chunk149715 = require("./149715.js"),
  Chunk197571 = require("./197571.js");

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function L(e) {
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

function M(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : x(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let k = Chunk442837.ZP.connectStores([Chunk210887.Z], () => ({
    theme: Chunk210887.Z.theme
  }))(Chunk481060.ubH),
  j = (0, Chunk358085.isWindows)(),
  U = 18,
  G = "https://www.igdb.com/about";

function B(e) {
  let {
    onClose: t
  } = e, n = (0, s.e7)([_.ZP], () => _.ZP.getCandidateGames()), [a, l] = i.useState(null);

  function d(e) {
    l(e)
  }

  function f() {
    null != a && (u.Z.addGame(a.pid, a.name), t())
  }
  let p = n.map(e => ({
    key: e.pid,
    value: e,
    label: null != e.name ? e.name : ""
  }));
  return (0, r.jsxs)(c.VqE, {
    className: o()(N.addGamePopout, R.elevationBorderHigh),
    "aria-label": C.intl.string(C.t.GTCx0p),
    children: [(0, r.jsx)(c.VcW, {
      placeholder: C.intl.string(C.t.XqMe3N),
      value: a,
      options: p,
      onChange: d,
      renderOptionLabel: e => (0, r.jsx)(c.Text, {
        variant: "text-md/medium",
        color: "text-default",
        lineClamp: 1,
        children: e.label
      })
    }), (0, r.jsx)(c.izJ, {
      className: o()(w.marginTop8, w.marginBottom8)
    }), (0, r.jsxs)("div", {
      className: o()(N.actions, P.horizontal),
      children: [(0, r.jsx)(c.Avr, {
        variant: "secondary",
        text: C.intl.string(C.t["ETE/oC"]),
        onClick: t
      }), (0, r.jsx)(c.Button, {
        variant: "primary",
        text: C.intl.string(C.t.GTCx0p),
        disabled: null == a,
        onClick: f
      })]
    })]
  })
}

function Z(e) {
  let {
    rawGame: t,
    nowPlaying: a = false,
    isOverride: p,
    subgames: m,
    isSubgame: O = false,
    parentGame: v
  } = e, I = (0, s.cj)([_.ZP, E.Z, b.Z], () => (0, _.FZ)(t, _.ZP, E.Z, b.Z)), {
    canToggleDetection: S,
    isCurrentGameDetectionEnabled: R
  } = (0, s.cj)([_.ZP], () => ({
    canToggleDetection: null == v || _.ZP.isDetectionEnabled(v),
    isCurrentGameDetectionEnabled: _.ZP.isDetectionEnabled(I)
  })), w = (0, s.e7)([_.ZP], () => _.ZP.getVisibleGame()), [D, x] = i.useState(false), k = i.useMemo(() => (0, g.le)(I) ? O ? I.gameName : C.intl.formatToPlainString(C.t.G6BGdx, {
    subgameName: I.gameName
  }) : I.name, [I, O]), [G, B] = i.useState(null != k ? k : "???"), F = o()(P.flexCenter, {
    [N.game]: !a,
    [N.activeGame]: a,
    [N.nowPlaying]: null != I && a,
    [N.subgame]: O,
    [N.gameHasSubgame]: null != m && m.length > 0
  });

  function V() {
    u.Z.deleteEntry(I), null == m || m.forEach(e => {
      u.Z.deleteEntry(e)
    })
  }

  function H() {
    I.name !== G && u.Z.editName(I, G)
  }

  function Y(e) {
    e.key === A.vn.ENTER && (e.currentTarget.blur(), e.preventDefault())
  }

  function W(e) {
    u.Z.toggleOverlay(I, e, e)
  }

  function K() {
    null != m && m.length > 0 && R ? (0, c.ZDy)(async () => {
      let {
        Modal: e
      } = await Promise.resolve().then(n.bind(n, 793030));
      return t => (0, r.jsx)(e, M(L({}, t), {
        title: C.intl.formatToPlainString(C.t.PZ4fKc, {
          platform: k
        }),
        subtitle: C.intl.formatToPlainString(C.t.ZIQbfb, {
          platform: k
        }),
        actions: [{
          text: C.intl.string(C.t["ETE/oC"]),
          onClick: () => t.onClose(),
          variant: "secondary"
        }, {
          text: C.intl.string(C.t.Fmjztz),
          onClick: () => {
            u.Z.toggleDetection(I), t.onClose()
          },
          variant: "primary"
        }]
      }))
    }) : u.Z.toggleDetection(I)
  }

  function z() {
    if (D) return;
    let e = null != I.id ? E.Z.getDetectableGame(I.id) : null;
    y.default.track(T.rMx.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
      application_id: null == e ? true : e.id,
      game_name: (0, g.le)(I) ? I.gameName : I.name
    }), x(true), (0, c.ZDy)(async () => {
      let {
        default: t
      } = await n.e("82077").then(n.bind(n, 953848));
      return n => {
        var i, a, o;
        return (0, r.jsx)(t, M(L({}, n), {
          detectedActivity: {
            name: null != (i = I.name) ? i : "",
            application_id: null != (o = null != (a = null == e ? true : e.id) ? a : I.id) ? o : true,
            type: T.IIU.PLAYING
          },
          onSubmitted: () => {}
        }))
      }
    })
  }

  function q() {
    return I.verified && !p ? (0, r.jsxs)("div", {
      className: N.detectedApplication,
      children: [(0, r.jsx)("div", {
        className: N.gameName,
        children: k
      }), (0, r.jsx)(c.aML, {
        "data-migration-pending": true,
        text: C.intl.string(C.t["4PJP5p"]),
        children: e => (0, r.jsx)(h.Z, M(L({
          className: N.gameVerifiedIcon,
          size: U,
          color: l.Z.unsafe_rawColors.BRAND_500.css
        }, e), {
          children: (0, r.jsx)(c.kmB, {
            size: "custom",
            width: U,
            height: U,
            color: l.Z.unsafe_rawColors.WHITE_500.css
          })
        }))
      })]
    }) : (0, r.jsx)("input", {
      className: o()(N.gameName, N.gameNameInput),
      type: "text",
      maxLength: 128,
      value: G,
      onBlur: H,
      onKeyDown: Y,
      onChange: e => B(e.target.value)
    })
  }

  function X() {
    let e, {
      played: t,
      exePath: n
    } = I;
    return a || et ? e = C.intl.string(C.t.VbV5dv) : null != t && "" !== t && (e = C.intl.format(C.t["gGeOE+"], {
      when: t
    })), (0, r.jsx)("div", {
      className: N.lastPlayed,
      children: (0, r.jsx)(f.Z, {
        hoverText: null != n && "" !== n ? n.toUpperCase() : "",
        children: e
      })
    })
  }

  function Q() {
    if (!j || null != v) return null;
    let {
      overlay: e,
      overlayWarn: t
    } = I, n = e ? (0, r.jsx)(c.pzj, {
      size: "md",
      color: "currentColor",
      className: N.toggleIconOn,
      colorClass: N.fill
    }) : (0, r.jsx)(c.o8v, {
      size: "md",
      color: "currentColor",
      className: N.toggleIconOff,
      colorClass: N.fill
    }), i = t ? (0, r.jsx)(c.aML, {
      "data-migration-pending": true,
      text: C.intl.string(C.t.Vfw2L5),
      children: e => (0, r.jsx)("i", L({
        className: N.overlayWarningIcon
      }, e))
    }) : null;
    return (0, r.jsxs)("div", {
      className: o()(P.flexCenter, P.noWrap, P.justifyBetween, N.toggleContainer),
      children: [i, (0, r.jsx)(c.aML, {
        "data-migration-pending": true,
        text: C.intl.string(C.t["1+O+Tu"]),
        children: t => (0, r.jsx)(c.P3F, M(L({}, t), {
          "aria-label": C.intl.string(C.t["1+O+Tu"]),
          className: N.toggleIcon,
          onClick: () => W(!e),
          children: n
        }))
      })]
    })
  }

  function J() {
    let {
      detectable: e
    } = I, t = e && S ? (0, r.jsx)(c.tEF, {
      size: "md",
      color: "currentColor",
      className: N.toggleIconOn,
      colorClass: N.fill
    }) : (0, r.jsx)(c.kZF, {
      size: "md",
      color: "currentColor",
      className: S ? N.toggleIconOff : N.toggleIconInactive,
      colorClass: N.fill
    });
    return (0, r.jsx)("div", {
      className: o()(P.flexCenter, P.noWrap, P.justifyBetween, N.toggleContainer),
      children: (0, r.jsx)(c.aML, {
        "data-migration-pending": true,
        text: C.intl.string(C.t.QmitzM),
        children: e => S ? (0, r.jsx)(c.P3F, M(L({}, e), {
          "aria-label": C.intl.string(C.t.QmitzM),
          className: N.toggleIcon,
          onClick: K,
          children: t
        })) : t
      })
    })
  }

  function $() {
    return D ? null : (0, r.jsx)("div", {
      className: o()(P.flexCenter, P.noWrap, P.justifyBetween, N.toggleContainer),
      children: (0, r.jsx)(c.aML, {
        "data-migration-pending": true,
        text: C.intl.string(C.t["y0B+lo"]),
        children: e => (0, r.jsx)(c.P3F, M(L({}, e), {
          "aria-label": C.intl.string(C.t["y0B+lo"]),
          className: N.toggleIcon,
          onClick: z,
          children: (0, r.jsx)(c.U65, {
            size: "md",
            color: "currentColor",
            className: N.toggleIconOn,
            colorClass: N.fill
          })
        }))
      })
    })
  }

  function ee() {
    return (0, r.jsx)(d.Z, {
      className: N.removeGame,
      onClick: V
    })
  }
  let et = null != w && (0, _.rH)(I) === (0, _.rH)(w),
    en = null != v && v.id === (null == w ? true : w.id) || et || null != m && m.some(e => e.id === (null == w ? true : w.id));
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: F,
      children: [(0, r.jsxs)("div", {
        className: o()(N.gameNameLastPlayed, P.vertical),
        children: [q(), X()]
      }), p ? null : $(), J(), Q(), a && !p || en ? null : ee()]
    }), null != m && m.length > 0 && !a && (0, r.jsx)("div", {
      className: N.subgameContainer,
      children: m.map((e, t) => (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)(Z, {
          rawGame: e,
          isOverride: false,
          isSubgame: true,
          parentGame: I
        }), t !== m.length - 1 && (0, r.jsx)("div", {
          className: N.border
        })]
      }, (0, _.rH)(e)))
    })]
  })
}

function F() {
  return (0, Chunk951288.jsx)("div", {
    className: o()(Chunk149715.flexCenter, Chunk740508.notDetected, Chunk740508.activeGame),
    children: (0, Chunk951288.jsxs)("div", {
      className: o()(Chunk740508.gameNameLastPlayed, Chunk149715.vertical),
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk740508.gameName,
        children: Chunk388032.intl.string(Chunk388032.t.H68X9x)
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk740508.lastPlayed,
        children: Chunk388032.intl.string(Chunk388032.t.T5Ilmw)
      })]
    })
  })
}

function V(e) {
  let {
    children: t
  } = e;
  return (0, r.jsxs)(k, {
    className: w.marginTop40,
    children: [(0, r.jsx)(c.oxh, {
      darkSrc: n(879601),
      lightSrc: n(889e3),
      width: 430,
      height: 250
    }), t]
  })
}
let H = (0, Chunk251625.oH)(function() {
    for (var e = arguments.length, t = Array(module), n = 0; require < module; require++) exports[require] = arguments[require];
    return new Set(exports.map(e => e.exePath))
  }),
  Y = function(e) {
    let {
      className: t,
      showHeader: n = true
    } = e, a = (0, s.Wu)([_.ZP], () => _.ZP.getGamesSeen(false)), {
      runningGame: l,
      overrideExePaths: u
    } = (0, s.cj)([_.ZP], () => ({
      runningGame: _.ZP.getVisibleGame(),
      overrideExePaths: H(..._.ZP.getOverrides())
    })), {
      gameHistory: d,
      robloxSubgameHistory: f
    } = i.useMemo(() => a.reduce((e, t) => ((0, g.le)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
      gameHistory: [],
      robloxSubgameHistory: []
    }), [a]), h = i.useRef(null);

    function E() {
      return 0 === d.length ? (0, r.jsx)(V, {
        children: (0, r.jsx)(c.OZU, {
          children: C.intl.string(C.t["1yiJwn"])
        })
      }) : (0, r.jsx)(c.C3N, {
        className: w.marginTop40,
        label: C.intl.string(C.t.jCOdvx),
        description: C.intl.format(C.t.KPA3m9, {
          igdbLink: G
        }),
        children: d.map(e => (0, r.jsx)(Z, {
          rawGame: e,
          isOverride: u.has(e.exePath),
          subgames: e.id === m.eB ? f : true
        }, (0, _.rH)(e)))
      })
    }
    return i.useEffect(() => ((0, p.Ky)(), p.P7), []), (0, r.jsxs)(S.Z, {
      title: n ? C.intl.string(C.t.AVDyEj) : null,
      className: t,
      children: [null != l ? (0, r.jsx)(Z, {
        rawGame: l,
        isOverride: u.has(l.exePath),
        nowPlaying: true,
        subgames: l.id === m.eB ? f : true
      }, (0, _.rH)(l)) : (0, r.jsx)(F, {}), (0, r.jsxs)("div", {
        className: o()(N.nowPlayingAdd, w.marginReset, w.marginTop8, w.marginBottom20),
        children: [(0, r.jsx)("span", {
          children: C.intl.string(C.t.xwhoqM)
        }), (0, r.jsx)(c.yRy, {
          targetElementRef: h,
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return (0, r.jsx)(B, {
              onClose: t
            })
          },
          align: "center",
          position: "bottom",
          children: e => (0, r.jsx)(c.Avr, M(L({}, e), {
            buttonRef: h,
            variant: "primary",
            textVariant: "text-sm/medium",
            text: C.intl.string(C.t.GjgdXe)
          }))
        })]
      }), E()]
    })
  }