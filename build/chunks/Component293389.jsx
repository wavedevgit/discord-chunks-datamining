/** Chunk was on web.js **/
/** chunk id: 293389, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => H
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk755721 = require("./755721.js"),
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
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk740508 = require("./740508.js"),
  Chunk315091 = require("./315091.js"),
  Chunk149715 = require("./149715.js"),
  Chunk197571 = require("./197571.js");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      w(e, t, n[t])
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

function L(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : x(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let j = Chunk442837.ZP.connectStores([Chunk210887.Z], () => ({
    theme: Chunk210887.Z.theme
  }))(Chunk481060.ubH),
  M = (0, Chunk358085.isWindows)(),
  k = 18,
  U = "https://www.igdb.com/about";

function G(e) {
  let {
    onClose: t
  } = e, n = (0, s.e7)([p.ZP], () => p.ZP.getCandidateGames()), [a, l] = i.useState(null);

  function f(e) {
    l(e)
  }

  function _() {
    null != a && (d.Z.addGame(a.pid, a.name), t())
  }
  let h = n.map(e => ({
    key: e.pid,
    value: e,
    label: null != e.name ? e.name : ""
  }));
  return (0, r.jsxs)(u.VqE, {
    className: o()(C.addGamePopout, N.elevationBorderHigh),
    "aria-label": A.intl.string(A.t.GTCx0t),
    children: [(0, r.jsx)(u.VcW, {
      placeholder: A.intl.string(A.t.XqMe3N),
      value: a,
      options: h,
      onChange: f,
      renderOptionLabel: e => (0, r.jsx)(u.Text, {
        variant: "text-md/medium",
        color: "text-default",
        lineClamp: 1,
        children: e.label
      })
    }), (0, r.jsx)(u.$i$, {
      className: o()(P.marginTop8, P.marginBottom8)
    }), (0, r.jsxs)("div", {
      className: o()(C.actions, R.horizontal),
      children: [(0, r.jsx)(c.zx, {
        className: C.cancelButton,
        look: c.iL.LINK,
        color: c.Tt.PRIMARY,
        onClick: t,
        children: A.intl.string(A.t["ETE/oK"])
      }), (0, r.jsx)(u.zxk, {
        variant: "primary",
        text: A.intl.string(A.t.GTCx0t),
        disabled: null == a,
        onClick: _
      })]
    })]
  })
}

function B(e) {
  let {
    rawGame: t,
    nowPlaying: a = false,
    isOverride: c,
    subgames: h,
    isSubgame: g = false,
    parentGame: v
  } = e, I = (0, s.cj)([p.ZP, b.Z, y.Z], () => (0, p.FZ)(t, p.ZP, b.Z, y.Z)), {
    canToggleDetection: S,
    isCurrentGameDetectionEnabled: N
  } = (0, s.cj)([p.ZP], () => ({
    canToggleDetection: null == v || p.ZP.isDetectionEnabled(v),
    isCurrentGameDetectionEnabled: p.ZP.isDetectionEnabled(I)
  })), P = (0, s.e7)([p.ZP], () => p.ZP.getVisibleGame()), [w, x] = i.useState(false), j = i.useMemo(() => (0, E.le)(I) ? g ? I.gameName : A.intl.formatToPlainString(A.t.G6BGd3, {
    subgameName: I.gameName
  }) : I.name, [I, g]), [U, G] = i.useState(null != j ? j : "???"), Z = o()(R.flexCenter, {
    [C.game]: !a,
    [C.activeGame]: a,
    [C.nowPlaying]: null != I && a,
    [C.subgame]: g,
    [C.gameHasSubgame]: null != h && h.length > 0
  });

  function F() {
    d.Z.deleteEntry(I), null == h || h.forEach(e => {
      d.Z.deleteEntry(e)
    })
  }

  function V() {
    I.name !== U && d.Z.editName(I, U)
  }

  function H(e) {
    13 === e.keyCode && (e.currentTarget.blur(), e.preventDefault())
  }

  function Y(e) {
    d.Z.toggleOverlay(I, e, e)
  }

  function W() {
    null != h && h.length > 0 && N ? (0, u.ZDy)(async () => {
      let {
        Modal: e
      } = await Promise.resolve().then(n.bind(n, 82659));
      return t => (0, r.jsx)(e, L(D({}, t), {
        title: A.intl.formatToPlainString(A.t.PZ4fKS, {
          platform: j
        }),
        subtitle: A.intl.formatToPlainString(A.t.ZIQbfX, {
          platform: j
        }),
        actions: [{
          text: A.intl.string(A.t["ETE/oK"]),
          onClick: () => t.onClose(),
          variant: "secondary"
        }, {
          text: A.intl.string(A.t.Fmjzt7),
          onClick: () => {
            d.Z.toggleDetection(I), t.onClose()
          },
          variant: "primary"
        }]
      }))
    }) : d.Z.toggleDetection(I)
  }

  function K() {
    if (w) return;
    let e = null != I.id ? b.Z.getDetectableGame(I.id) : null;
    O.default.track(T.rMx.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
      application_id: null == e ? true : e.id,
      game_name: (0, E.le)(I) ? I.gameName : I.name
    }), (0, u.showToast)((0, u.createToast)(A.intl.formatToPlainString(A.t["6klMOj"], {
      gameName: (0, E.le)(I) ? I.gameName : I.name
    }), u.ToastType.SUCCESS)), x(true)
  }

  function z() {
    return I.verified && !c ? (0, r.jsxs)("div", {
      className: C.detectedApplication,
      children: [(0, r.jsx)("div", {
        className: C.gameName,
        children: j
      }), (0, r.jsx)(u.ua7, {
        text: A.intl.string(A.t["4PJP5u"]),
        children: e => (0, r.jsx)(m.Z, L(D({
          className: C.gameVerifiedIcon,
          size: k,
          color: l.Z.unsafe_rawColors.BRAND_500.css
        }, e), {
          children: (0, r.jsx)(u.kmB, {
            size: "custom",
            width: k,
            height: k,
            color: l.Z.unsafe_rawColors.WHITE_500.css
          })
        }))
      })]
    }) : (0, r.jsx)("input", {
      className: o()(C.gameName, C.gameNameInput),
      type: "text",
      maxLength: 128,
      value: U,
      onBlur: V,
      onKeyDown: H,
      onChange: e => G(e.target.value)
    })
  }

  function q() {
    let e, {
      played: t,
      exePath: n
    } = I;
    return a || ee ? e = A.intl.string(A.t.VbV5dn) : null != t && "" !== t && (e = A.intl.format(A.t.gGeOEx, {
      when: t
    })), (0, r.jsx)("div", {
      className: C.lastPlayed,
      children: (0, r.jsx)(_.Z, {
        hoverText: null != n && "" !== n ? n.toUpperCase() : "",
        children: e
      })
    })
  }

  function X() {
    if (!M || null != v) return null;
    let {
      overlay: e,
      overlayWarn: t
    } = I, n = e ? (0, r.jsx)(u.pzj, {
      size: "md",
      color: "currentColor",
      className: C.toggleIconOn,
      colorClass: C.fill
    }) : (0, r.jsx)(u.o8v, {
      size: "md",
      color: "currentColor",
      className: C.toggleIconOff,
      colorClass: C.fill
    }), i = t ? (0, r.jsx)(u.ua7, {
      text: A.intl.string(A.t.Vfw2Ly),
      children: e => (0, r.jsx)("i", D({
        className: C.overlayWarningIcon
      }, e))
    }) : null;
    return (0, r.jsxs)("div", {
      className: o()(R.flexCenter, R.noWrap, R.justifyBetween, C.toggleContainer),
      children: [i, (0, r.jsx)(u.ua7, {
        text: A.intl.string(A.t["1+O+Tk"]),
        children: t => {
          let {
            onMouseEnter: i,
            onMouseLeave: a
          } = t;
          return (0, r.jsx)(u.P3F, {
            "aria-label": A.intl.string(A.t["1+O+Tk"]),
            className: C.toggleIcon,
            onClick: () => Y(!e),
            onMouseEnter: i,
            onMouseLeave: a,
            children: n
          })
        }
      })]
    })
  }

  function Q() {
    let {
      detectable: e
    } = I, t = e && S ? (0, r.jsx)(u.tEF, {
      size: "md",
      color: "currentColor",
      className: C.toggleIconOn,
      colorClass: C.fill
    }) : (0, r.jsx)(u.kZF, {
      size: "md",
      color: "currentColor",
      className: S ? C.toggleIconOff : C.toggleIconInactive,
      colorClass: C.fill
    });
    return (0, r.jsx)("div", {
      className: o()(R.flexCenter, R.noWrap, R.justifyBetween, C.toggleContainer),
      children: (0, r.jsx)(u.ua7, {
        text: A.intl.string(A.t.QmitzM),
        children: e => {
          let {
            onMouseEnter: n,
            onMouseLeave: i
          } = e;
          return S ? (0, r.jsx)(u.P3F, {
            "aria-label": A.intl.string(A.t.QmitzM),
            className: C.toggleIcon,
            onClick: W,
            onMouseEnter: n,
            onMouseLeave: i,
            children: t
          }) : t
        }
      })
    })
  }

  function J() {
    return w ? null : (0, r.jsx)("div", {
      className: o()(R.flexCenter, R.noWrap, R.justifyBetween, C.toggleContainer),
      children: (0, r.jsx)(u.ua7, {
        text: A.intl.string(A.t["y0B+lp"]),
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return (0, r.jsx)(u.P3F, {
            "aria-label": A.intl.string(A.t["y0B+lp"]),
            className: C.toggleIcon,
            onClick: K,
            onMouseEnter: t,
            onMouseLeave: n,
            children: (0, r.jsx)(u.U65, {
              size: "md",
              color: "currentColor",
              className: C.toggleIconOn,
              colorClass: C.fill
            })
          })
        }
      })
    })
  }

  function $() {
    return (0, r.jsx)(f.Z, {
      className: C.removeGame,
      onClick: F
    })
  }
  let ee = null != P && (0, p.rH)(I) === (0, p.rH)(P),
    et = null != v && v.id === (null == P ? true : P.id) || ee || null != h && h.some(e => e.id === (null == P ? true : P.id));
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: Z,
      children: [(0, r.jsxs)("div", {
        className: o()(C.gameNameLastPlayed, R.vertical),
        children: [z(), q()]
      }), c ? null : J(), Q(), X(), a && !c || et ? null : $()]
    }), null != h && h.length > 0 && !a && (0, r.jsx)("div", {
      className: C.subgameContainer,
      children: h.map((e, t) => (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)(B, {
          rawGame: e,
          isOverride: false,
          isSubgame: true,
          parentGame: I
        }), t !== h.length - 1 && (0, r.jsx)("div", {
          className: C.border
        })]
      }, (0, p.rH)(e)))
    })]
  })
}

function Z() {
  return (0, Chunk951288.jsx)("div", {
    className: o()(Chunk149715.flexCenter, Chunk740508.notDetected, Chunk740508.activeGame),
    children: (0, Chunk951288.jsxs)("div", {
      className: o()(Chunk740508.gameNameLastPlayed, Chunk149715.vertical),
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk740508.gameName,
        children: Chunk388032.intl.string(Chunk388032.t["H68X9/"])
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk740508.lastPlayed,
        children: Chunk388032.intl.string(Chunk388032.t.T5Ilm5)
      })]
    })
  })
}

function F(e) {
  let {
    children: t
  } = e;
  return (0, r.jsxs)(j, {
    className: P.marginTop40,
    children: [(0, r.jsx)(u.oxh, {
      darkSrc: n(879601),
      lightSrc: n(889e3),
      width: 430,
      height: 250
    }), t]
  })
}
let V = (0, Chunk251625.oH)(function() {
    for (var e = arguments.length, t = Array(module), n = 0; require < module; require++) exports[require] = arguments[require];
    return new Set(exports.map(e => e.exePath))
  }),
  H = function(e) {
    let {
      className: t,
      showHeader: n = true
    } = e, a = (0, s.Wu)([p.ZP], () => p.ZP.getGamesSeen(false)), {
      runningGame: l,
      overrideExePaths: d
    } = (0, s.cj)([p.ZP], () => ({
      runningGame: p.ZP.getVisibleGame(),
      overrideExePaths: V(...p.ZP.getOverrides())
    })), {
      gameHistory: f,
      robloxSubgameHistory: _
    } = i.useMemo(() => a.reduce((e, t) => ((0, E.le)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
      gameHistory: [],
      robloxSubgameHistory: []
    }), [a]), m = i.useRef(null);

    function b() {
      return 0 === f.length ? (0, r.jsx)(F, {
        children: (0, r.jsx)(u.OZU, {
          children: A.intl.string(A.t["1yiJws"])
        })
      }) : (0, r.jsxs)(u.hjN, {
        className: P.marginTop40,
        children: [(0, r.jsx)(u.vwX, {
          className: C.addedGamesTitle,
          children: A.intl.string(A.t.jCOdv7)
        }), (0, r.jsx)(u.R94, {
          className: C.addedGamesDescription,
          type: u.geA.DESCRIPTION,
          children: A.intl.format(A.t.KPA3m5, {
            igdbLink: U
          })
        }), f.map(e => (0, r.jsx)(B, {
          rawGame: e,
          isOverride: d.has(e.exePath),
          subgames: e.id === g.eB ? _ : true
        }, (0, p.rH)(e)))]
      })
    }
    return i.useEffect(() => ((0, h.Ky)(), h.P7), []), (0, r.jsxs)(u.hjN, {
      tag: "h1",
      title: n ? A.intl.string(A.t.AVDyEh) : null,
      className: t,
      children: [null != l ? (0, r.jsx)(B, {
        rawGame: l,
        isOverride: d.has(l.exePath),
        nowPlaying: true,
        subgames: l.id === g.eB ? _ : true
      }, (0, p.rH)(l)) : (0, r.jsx)(Z, {}), (0, r.jsxs)("div", {
        className: o()(C.nowPlayingAdd, P.marginReset, P.marginTop8, P.marginBottom20),
        children: [(0, r.jsx)("span", {
          children: A.intl.string(A.t.xwhoqK)
        }), (0, r.jsx)(u.yRy, {
          targetElementRef: m,
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return (0, r.jsx)(G, {
              onClose: t
            })
          },
          align: "center",
          position: "bottom",
          children: e => (0, r.jsx)(c.zx, L(D({}, e), {
            look: c.iL.LINK,
            size: c.Ph.MIN,
            color: c.Tt.LINK,
            buttonRef: m,
            children: A.intl.string(A.t.GjgdXV)
          }))
        })]
      }), b()]
    })
  }