/** Chunk was on web.js **/
/** chunk id: 768908, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => X,
  T: () => q,
  Wx: () => z,
  cH: () => K
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk544420 = require("./544420.js"),
  Chunk414079 = require("./414079.jsx"),
  Chunk29160 = require("./29160.jsx"),
  Chunk15285 = require("./15285.js"),
  Chunk843402 = require("./843402.js"),
  Chunk496885 = require("./496885.jsx"),
  Chunk227309 = require("./227309.js"),
  Chunk847521 = require("./847521.js"),
  Chunk760751 = require("./760751.js"),
  Chunk189081 = require("./189081.js"),
  Chunk954571 = require("./954571.js"),
  Chunk583613 = require("./583613.js"),
  Chunk723702 = require("./723702.js"),
  Chunk544028 = require("./544028.js"),
  Chunk790174 = require("./790174.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk650583 = require("./650583.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk900506 = require("./900506.js"),
  Chunk976092 = require("./976092.js"),
  Chunk20976 = require("./20976.js"),
  Chunk473169 = require("./473169.js");

function x(e, t, n) {
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
      x(e, t, n[t])
    })
  }
  return e
}

function j(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let k = Chunk311907.Ay.connectStores([Chunk544028.A], () => ({
    theme: I.A.theme
  }))(Chunk397927.ppr),
  U = (0, Chunk723702.isWindows)(),
  G = 18,
  V = "https://www.igdb.com/about";

function F(e) {
  let {
    onClose: t
  } = e, n = (0, o.bG)([_.Ay], () => _.Ay.getCandidateGames()), [a, l] = i.useState(null);

  function c(e) {
    l(e)
  }

  function f() {
    null != a && (d.A.addGame(a.pid, a.name), t())
  }
  let p = n.map(e => ({
    id: e.pid.toString(),
    value: e,
    label: null != e.name ? e.name : ""
  }));
  return (0, r.jsxs)(u.lGe, {
    className: s()(R.H2, w.Y_),
    "aria-label": N.intl.string(N.t.GTCx0p),
    children: [(0, r.jsx)(u.ZiE, {
      selectionMode: "single",
      placeholder: N.intl.string(N.t.XqMe3N),
      value: a,
      options: p,
      onSelectionChange: c
    }), (0, r.jsx)(u.cGx, {
      className: s()(D.Ot, D.QB)
    }), (0, r.jsxs)("div", {
      className: s()(R.o1, P.xM),
      children: [(0, r.jsx)(u.QWc, {
        variant: "secondary",
        text: N.intl.string(N.t["ETE/oC"]),
        onClick: t
      }), (0, r.jsx)(u.Button, {
        variant: "primary",
        text: N.intl.string(N.t.GTCx0p),
        disabled: null == a,
        onClick: f
      })]
    })]
  })
}

function B(e) {
  let {
    rawGame: t,
    nowPlaying: a = false,
    isOverride: h,
    subgames: g,
    isSubgame: v = false,
    parentGame: A
  } = e, I = (0, o.cf)([_.Ay, y.A, b.A], () => (0, _.xU)(t, _.Ay, y.A, b.A)), {
    canToggleDetection: S,
    isCurrentGameDetectionEnabled: w
  } = (0, o.cf)([_.Ay], () => ({
    canToggleDetection: null == A || _.Ay.isDetectionEnabled(A),
    isCurrentGameDetectionEnabled: _.Ay.isDetectionEnabled(I)
  })), D = (0, o.bG)([_.Ay], () => _.Ay.getVisibleGame()), [x, j] = i.useState(false), k = i.useMemo(() => (0, E.n1)(I) ? v ? I.gameName : N.intl.formatToPlainString(N.t.G6BGdx, {
    subgameName: I.gameName
  }) : I.name, [I, v]), [V, F] = i.useState(null != k ? k : "???"), H = s()(P.tR, {
    [R.LO]: !a,
    [R.Rw]: a,
    [R.FB]: null != I && a,
    [R.xL]: v,
    [R.fG]: null != g && g.length > 0
  });

  function Y() {
    d.A.deleteEntry(I), null == g || g.forEach(e => {
      d.A.deleteEntry(e)
    })
  }

  function W() {
    I.name !== V && d.A.editName(I, V)
  }

  function K(e) {
    e.key === C.dh.ENTER && (e.currentTarget.blur(), e.preventDefault())
  }

  function z(e) {
    d.A.toggleOverlay(I, e, e)
  }

  function q() {
    null != g && g.length > 0 && w ? (0, u.mMO)(async () => {
      let {
        Modal: e
      } = await Promise.resolve().then(n.bind(n, 158954));
      return t => (0, r.jsx)(e, M(L({}, t), {
        title: N.intl.formatToPlainString(N.t.PZ4fKc, {
          platform: k
        }),
        subtitle: N.intl.formatToPlainString(N.t.ZIQbfb, {
          platform: k
        }),
        actions: [{
          text: N.intl.string(N.t["ETE/oC"]),
          onClick: () => t.onClose(),
          variant: "secondary"
        }, {
          text: N.intl.string(N.t.Fmjztz),
          onClick: () => {
            d.A.toggleDetection(I), t.onClose()
          },
          variant: "primary"
        }]
      }))
    }) : d.A.toggleDetection(I)
  }

  function X() {
    if (x) return;
    let e = null != I.id ? y.A.getDetectableGame(I.id) : null;
    O.default.track(T.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
      application_id: null == e ? true : e.id,
      game_name: (0, E.n1)(I) ? I.gameName : I.name
    }), j(true), (0, u.mMO)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("27495"), n.e("79692")]).then(n.bind(n, 651930));
      return n => {
        var i, a, s;
        return (0, r.jsx)(t, M(L({}, n), {
          detectedActivity: {
            name: null != (i = I.name) ? i : "",
            application_id: null != (a = null != (s = null == e ? true : e.id) ? s : I.id) ? a : true,
            type: T.$pd.PLAYING
          },
          onSubmitted: () => {}
        }))
      }
    })
  }

  function Z() {
    return I.verified && !h ? (0, r.jsxs)("div", {
      className: R.HS,
      children: [(0, r.jsx)("div", {
        className: R.mO,
        children: k
      }), (0, r.jsx)(c.m_, {
        text: N.intl.string(N.t["4PJP5p"]),
        children: (0, r.jsx)(m.A, {
          className: R.qf,
          size: G,
          color: l.A.unsafe_rawColors.BRAND_500.css,
          children: (0, r.jsx)(u.Uzd, {
            size: "custom",
            width: G,
            height: G,
            color: l.A.unsafe_rawColors.WHITE.css
          })
        })
      })]
    }) : (0, r.jsx)("input", {
      className: s()(R.mO, R.sr),
      type: "text",
      maxLength: 128,
      value: V,
      onBlur: W,
      onKeyDown: K,
      onChange: e => F(e.target.value)
    })
  }

  function Q() {
    let e, {
      played: t,
      exePath: n
    } = I;
    return a || en ? e = N.intl.string(N.t.VbV5dv) : null != t && "" !== t && (e = N.intl.format(N.t["gGeOE+"], {
      when: t
    })), (0, r.jsx)("div", {
      className: R.GN,
      children: (0, r.jsx)(p.A, {
        hoverText: null != n && "" !== n ? n.toUpperCase() : "",
        children: e
      })
    })
  }

  function $() {
    if (!U || null != A) return null;
    let {
      overlay: e,
      overlayWarn: t
    } = I, n = e ? (0, r.jsx)(u.kN9, {
      size: "md",
      color: "currentColor",
      className: R.Lj,
      colorClass: R.GS
    }) : (0, r.jsx)(u.nkR, {
      size: "md",
      color: "currentColor",
      className: R.$V,
      colorClass: R.GS
    }), i = t ? (0, r.jsx)(c.m_, {
      text: N.intl.string(N.t.Vfw2L5),
      children: (0, r.jsx)("i", {
        className: R.kb
      })
    }) : null;
    return (0, r.jsxs)("div", {
      className: s()(P.tR, P.oA, P.LT, R.E3),
      children: [i, (0, r.jsx)(c.m_, {
        text: N.intl.string(N.t["1+O+Tu"]),
        children: (0, r.jsx)(u.DUT, {
          "aria-label": N.intl.string(N.t["1+O+Tu"]),
          className: R.ym,
          onClick: () => z(!e),
          children: n
        })
      })]
    })
  }

  function J() {
    let {
      detectable: e
    } = I, t = e && S ? (0, r.jsx)(u.bMW, {
      size: "md",
      color: "currentColor",
      className: R.Lj,
      colorClass: R.GS
    }) : (0, r.jsx)(u.G3N, {
      size: "md",
      color: "currentColor",
      className: S ? R.$V : R.zN,
      colorClass: R.GS
    });
    return (0, r.jsx)("div", {
      className: s()(P.tR, P.oA, P.LT, R.E3),
      children: (0, r.jsx)(c.m_, {
        text: N.intl.string(N.t.QmitzM),
        children: S ? (0, r.jsx)(u.DUT, {
          "aria-label": N.intl.string(N.t.QmitzM),
          className: R.ym,
          onClick: q,
          children: t
        }) : t
      })
    })
  }

  function ee() {
    return x ? null : (0, r.jsx)("div", {
      className: s()(P.tR, P.oA, P.LT, R.E3),
      children: (0, r.jsx)(c.m_, {
        text: N.intl.string(N.t["y0B+lo"]),
        children: (0, r.jsx)(u.DUT, {
          "aria-label": N.intl.string(N.t["y0B+lo"]),
          className: R.ym,
          onClick: X,
          children: (0, r.jsx)(u.iFK, {
            size: "md",
            color: "currentColor",
            className: R.Lj,
            colorClass: R.GS
          })
        })
      })
    })
  }

  function et() {
    return (0, r.jsx)(f.A, {
      className: R.LS,
      onClick: Y
    })
  }
  let en = null != D && (0, _.Es)(I) === (0, _.Es)(D),
    er = null != A && A.id === (null == D ? true : D.id) || en || null != g && g.some(e => e.id === (null == D ? true : D.id));
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: H,
      children: [(0, r.jsxs)("div", {
        className: s()(R.$K, P.Vd),
        children: [Z(), Q()]
      }), h ? null : ee(), J(), $(), a && !h || er ? null : et()]
    }), null != g && g.length > 0 && !a && (0, r.jsx)("div", {
      className: R.AQ,
      children: g.map((e, t) => (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)(B, {
          rawGame: e,
          isOverride: false,
          isSubgame: true,
          parentGame: I
        }), t !== g.length - 1 && (0, r.jsx)("div", {
          className: R.PQ
        })]
      }, (0, _.Es)(e)))
    })]
  })
}

function H() {
  return (0, r.jsx)("div", {
    className: s()(P.tR, R.eS, R.Rw),
    children: (0, r.jsxs)("div", {
      className: s()(R.$K, P.Vd),
      children: [(0, r.jsx)("div", {
        className: R.mO,
        children: N.intl.string(N.t.H68X9x)
      }), (0, r.jsx)("div", {
        className: R.GN,
        children: N.intl.string(N.t.T5Ilmw)
      })]
    })
  })
}

function Y(e) {
  let {
    children: t
  } = e;
  return (0, r.jsxs)(k, {
    className: D.eT,
    children: [(0, r.jsx)(u.G8R, {
      darkSrc: n(839628),
      lightSrc: n(446404),
      width: 430,
      height: 250
    }), t]
  })
}
let W = (0, Chunk583613.L_)(function() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new Set(t.map(e => e.exePath))
  }),
  K = () => {
    let e = (0, o.yK)([_.Ay], () => _.Ay.getGamesSeen(false)),
      {
        runningGame: t,
        overrideExePaths: n
      } = (0, o.cf)([_.Ay], () => ({
        runningGame: _.Ay.getVisibleGame(),
        overrideExePaths: W(..._.Ay.getOverrides())
      }));
    i.useEffect(() => ((0, h.a2)(), h.e0), []);
    let a = i.useMemo(() => e.reduce((e, t) => ((0, E.n1)(t) && e.push(t), e), []), [e]);
    return null != t ? (0, r.jsx)(B, {
      rawGame: t,
      isOverride: n.has(t.exePath),
      nowPlaying: true,
      subgames: t.id === g.a7 ? a : true
    }, (0, _.Es)(t)) : (0, r.jsx)(H, {})
  },
  z = () => {
    let e = i.useRef(null);
    return (0, r.jsxs)("div", {
      className: s()(R.ax, D.Gf),
      children: [(0, r.jsx)("span", {
        children: N.intl.string(N.t.xwhoqM)
      }), (0, r.jsx)(u.YNO, {
        targetElementRef: e,
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, r.jsx)(F, {
            onClose: t
          })
        },
        align: "center",
        position: "bottom",
        children: t => (0, r.jsx)(u.QWc, M(L({}, t), {
          buttonRef: e,
          variant: "primary",
          textVariant: "text-sm/medium",
          text: N.intl.string(N.t.GjgdXe)
        }))
      })]
    })
  },
  q = e => {
    let {
      hideHeader: t = false
    } = e, n = (0, o.yK)([_.Ay], () => _.Ay.getGamesSeen(false)), a = (0, o.bG)([_.Ay], () => W(..._.Ay.getOverrides()));
    i.useEffect(() => ((0, h.a2)(), h.e0), []);
    let {
      gameHistory: s,
      robloxSubgameHistory: l
    } = i.useMemo(() => n.reduce((e, t) => ((0, E.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
      gameHistory: [],
      robloxSubgameHistory: []
    }), [n]);
    return 0 === s.length ? (0, r.jsx)(Y, {
      children: (0, r.jsx)(u.SGT, {
        children: N.intl.string(N.t["1yiJwn"])
      })
    }) : (0, r.jsx)(u.nVY, {
      label: t ? true : N.intl.string(N.t.jCOdvx),
      description: t ? true : N.intl.format(N.t.KPA3m9, {
        igdbLink: V
      }),
      children: (0, r.jsx)("div", {
        children: s.map(e => (0, r.jsx)(B, {
          rawGame: e,
          isOverride: a.has(e.exePath),
          subgames: e.id === g.a7 ? l : true
        }, (0, _.Es)(e)))
      })
    })
  },
  X = function(e) {
    let {
      className: t,
      showHeader: n = true
    } = e;
    return (0, r.jsxs)(S.A, {
      title: n ? N.intl.string(N.t.AVDyEj) : null,
      className: t,
      children: [(0, r.jsx)(K, {}), (0, r.jsx)(z, {}), (0, r.jsx)(u.cGx, {
        gap: 20
      }), (0, r.jsx)(q, {})]
    })
  }