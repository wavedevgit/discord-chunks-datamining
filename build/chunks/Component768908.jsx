/** Chunk was on 44669 **/
/** chunk id: 768908, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => K,
  T: () => Y,
  Wx: () => F,
  cH: () => H
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

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let L = Chunk311907.Ay.connectStores([Chunk544028.A], () => ({
    theme: v.A.theme
  }))(Chunk397927.ppr),
  M = (0, Chunk723702.isWindows)();

function G(e) {
  let {
    onClose: t
  } = e, n = (0, a.bG)([g.Ay], () => g.Ay.getCandidateGames()), [i, o] = l.useState(null), c = n.map(e => ({
    id: e.pid.toString(),
    value: e,
    label: null != e.name ? e.name : ""
  }));
  return (0, r.jsxs)(u.lGe, {
    className: s()(N.H2, T.Y_),
    "aria-label": I.intl.string(I.t.GTCx0p),
    children: [(0, r.jsx)(u.ZiE, {
      selectionMode: "single",
      placeholder: I.intl.string(I.t.XqMe3N),
      value: i,
      options: c,
      onSelectionChange: function(e) {
        o(e)
      }
    }), (0, r.jsx)(u.cGx, {
      className: s()(w.Ot, w.QB)
    }), (0, r.jsxs)("div", {
      className: s()(N.o1, P.xM),
      children: [(0, r.jsx)(u.QWc, {
        variant: "secondary",
        text: I.intl.string(I.t["ETE/oC"]),
        onClick: t
      }), (0, r.jsx)(u.Button, {
        variant: "primary",
        text: I.intl.string(I.t.GTCx0p),
        disabled: null == i,
        onClick: function() {
          null != i && (d.A.addGame(i.pid, i.name), t())
        }
      })]
    })]
  })
}

function k(e) {
  let {
    rawGame: t,
    nowPlaying: i = false,
    isOverride: f,
    subgames: b,
    isSubgame: _ = false,
    parentGame: x
  } = e, v = (0, a.cf)([g.Ay, y.A, O.A], () => (0, g.xU)(t, g.Ay, y.A, O.A)), {
    canToggleDetection: E,
    isCurrentGameDetectionEnabled: T
  } = (0, a.cf)([g.Ay], () => ({
    canToggleDetection: null == x || g.Ay.isDetectionEnabled(x),
    isCurrentGameDetectionEnabled: g.Ay.isDetectionEnabled(v)
  })), w = (0, a.bG)([g.Ay], () => g.Ay.getVisibleGame()), [L, G] = l.useState(false), U = l.useMemo(() => (0, A.n1)(v) ? _ ? v.gameName : I.intl.formatToPlainString(I.t.G6BGdx, {
    subgameName: v.gameName
  }) : v.name, [v, _]), [V, B] = l.useState(null != U ? U : "???"), H = s()(P.tR, {
    [N.LO]: !i,
    [N.Rw]: i,
    [N.FB]: null != v && i,
    [N.xL]: _,
    [N.fG]: null != b && b.length > 0
  });

  function F() {
    null != b && b.length > 0 && T ? (0, u.mMO)(async () => {
      let {
        Modal: e
      } = await Promise.resolve().then(n.bind(n, 158954));
      return t => (0, r.jsx)(e, D(R({}, t), {
        title: I.intl.formatToPlainString(I.t.PZ4fKc, {
          platform: U
        }),
        subtitle: I.intl.formatToPlainString(I.t.ZIQbfb, {
          platform: U
        }),
        actions: [{
          text: I.intl.string(I.t["ETE/oC"]),
          onClick: () => t.onClose(),
          variant: "secondary"
        }, {
          text: I.intl.string(I.t.Fmjztz),
          onClick: () => {
            d.A.toggleDetection(v), t.onClose()
          },
          variant: "primary"
        }]
      }))
    }) : d.A.toggleDetection(v)
  }
  let Y = null != w && (0, g.Es)(v) === (0, g.Es)(w),
    K = null != x && x.id === (null == w ? true : w.id) || Y || null != b && b.some(e => e.id === (null == w ? true : w.id));
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: H,
      children: [(0, r.jsxs)("div", {
        className: s()(N.$K, P.Vd),
        children: [v.verified && !f ? (0, r.jsxs)("div", {
          className: N.HS,
          children: [(0, r.jsx)("div", {
            className: N.mO,
            children: U
          }), (0, r.jsx)(c.m_, {
            text: I.intl.string(I.t["4PJP5p"]),
            children: (0, r.jsx)(m.A, {
              className: N.qf,
              size: 18,
              color: o.A.unsafe_rawColors.BRAND_500.css,
              children: (0, r.jsx)(u.Uzd, {
                size: "custom",
                width: 18,
                height: 18,
                color: o.A.unsafe_rawColors.WHITE.css
              })
            })
          })]
        }) : (0, r.jsx)("input", {
          className: s()(N.mO, N.sr),
          type: "text",
          maxLength: 128,
          value: V,
          onBlur: function() {
            v.name !== V && d.A.editName(v, V)
          },
          onKeyDown: function(e) {
            e.key === S.dh.ENTER && (e.currentTarget.blur(), e.preventDefault())
          },
          onChange: e => B(e.target.value)
        }), function() {
          let e, {
            played: t,
            exePath: n
          } = v;
          return i || Y ? e = I.intl.string(I.t.VbV5dv) : null != t && "" !== t && (e = I.intl.format(I.t["gGeOE+"], {
            when: t
          })), (0, r.jsx)("div", {
            className: N.GN,
            children: (0, r.jsx)(h.A, {
              hoverText: null != n && "" !== n ? n.toUpperCase() : "",
              children: e
            })
          })
        }()]
      }), f || L ? null : (0, r.jsx)("div", {
        className: s()(P.tR, P.oA, P.LT, N.E3),
        children: (0, r.jsx)(c.m_, {
          text: I.intl.string(I.t["y0B+lo"]),
          children: (0, r.jsx)(u.DUT, {
            "aria-label": I.intl.string(I.t["y0B+lo"]),
            className: N.ym,
            onClick: function() {
              if (L) return;
              let e = null != v.id ? y.A.getDetectableGame(v.id) : null;
              j.default.track(C.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
                application_id: null == e ? true : e.id,
                game_name: (0, A.n1)(v) ? v.gameName : v.name
              }), G(true), (0, u.mMO)(async () => {
                let {
                  default: t
                } = await Promise.all([n.e("27495"), n.e("79692")]).then(n.bind(n, 651930));
                return n => {
                  var l, i, s;
                  return (0, r.jsx)(t, D(R({}, n), {
                    detectedActivity: {
                      name: null != (l = v.name) ? l : "",
                      application_id: null != (i = null != (s = null == e ? true : e.id) ? s : v.id) ? i : true,
                      type: C.$pd.PLAYING
                    },
                    onSubmitted: () => {}
                  }))
                }
              })
            },
            children: (0, r.jsx)(u.iFK, {
              size: "md",
              color: "currentColor",
              className: N.Lj,
              colorClass: N.GS
            })
          })
        })
      }), function() {
        let {
          detectable: e
        } = v, t = e && E ? (0, r.jsx)(u.bMW, {
          size: "md",
          color: "currentColor",
          className: N.Lj,
          colorClass: N.GS
        }) : (0, r.jsx)(u.G3N, {
          size: "md",
          color: "currentColor",
          className: E ? N.$V : N.zN,
          colorClass: N.GS
        });
        return (0, r.jsx)("div", {
          className: s()(P.tR, P.oA, P.LT, N.E3),
          children: (0, r.jsx)(c.m_, {
            text: I.intl.string(I.t.QmitzM),
            children: E ? (0, r.jsx)(u.DUT, {
              "aria-label": I.intl.string(I.t.QmitzM),
              className: N.ym,
              onClick: F,
              children: t
            }) : t
          })
        })
      }(), function() {
        if (!M || null != x) return null;
        let {
          overlay: e,
          overlayWarn: t
        } = v, n = e ? (0, r.jsx)(u.kN9, {
          size: "md",
          color: "currentColor",
          className: N.Lj,
          colorClass: N.GS
        }) : (0, r.jsx)(u.nkR, {
          size: "md",
          color: "currentColor",
          className: N.$V,
          colorClass: N.GS
        }), l = t ? (0, r.jsx)(c.m_, {
          text: I.intl.string(I.t.Vfw2L5),
          children: (0, r.jsx)("i", {
            className: N.kb
          })
        }) : null;
        return (0, r.jsxs)("div", {
          className: s()(P.tR, P.oA, P.LT, N.E3),
          children: [l, (0, r.jsx)(c.m_, {
            text: I.intl.string(I.t["1+O+Tu"]),
            children: (0, r.jsx)(u.DUT, {
              "aria-label": I.intl.string(I.t["1+O+Tu"]),
              className: N.ym,
              onClick: () => {
                var t;
                return t = !e, void d.A.toggleOverlay(v, t, t)
              },
              children: n
            })
          })]
        })
      }(), i && !f || K ? null : (0, r.jsx)(p.A, {
        className: N.LS,
        onClick: function() {
          d.A.deleteEntry(v), null == b || b.forEach(e => {
            d.A.deleteEntry(e)
          })
        }
      })]
    }), null != b && b.length > 0 && !i && (0, r.jsx)("div", {
      className: N.AQ,
      children: b.map((e, t) => (0, r.jsxs)(l.Fragment, {
        children: [(0, r.jsx)(k, {
          rawGame: e,
          isOverride: false,
          isSubgame: true,
          parentGame: v
        }), t !== b.length - 1 && (0, r.jsx)("div", {
          className: N.PQ
        })]
      }, (0, g.Es)(e)))
    })]
  })
}

function U() {
  return (0, r.jsx)("div", {
    className: s()(P.tR, N.eS, N.Rw),
    children: (0, r.jsxs)("div", {
      className: s()(N.$K, P.Vd),
      children: [(0, r.jsx)("div", {
        className: N.mO,
        children: I.intl.string(I.t.H68X9x)
      }), (0, r.jsx)("div", {
        className: N.GN,
        children: I.intl.string(I.t.T5Ilmw)
      })]
    })
  })
}

function V(e) {
  let {
    children: t
  } = e;
  return (0, r.jsxs)(L, {
    className: w.eT,
    children: [(0, r.jsx)(u.G8R, {
      darkSrc: n(839628),
      lightSrc: n(446404),
      width: 430,
      height: 250
    }), t]
  })
}
let B = (0, Chunk583613.L_)(function() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new Set(t.map(e => e.exePath))
  }),
  H = () => {
    let e = (0, a.yK)([g.Ay], () => g.Ay.getGamesSeen(false)),
      {
        runningGame: t,
        overrideExePaths: n
      } = (0, a.cf)([g.Ay], () => ({
        runningGame: g.Ay.getVisibleGame(),
        overrideExePaths: B(...g.Ay.getOverrides())
      }));
    l.useEffect(() => ((0, f.a2)(), f.e0), []);
    let i = l.useMemo(() => e.reduce((e, t) => ((0, A.n1)(t) && e.push(t), e), []), [e]);
    return null != t ? (0, r.jsx)(k, {
      rawGame: t,
      isOverride: n.has(t.exePath),
      nowPlaying: true,
      subgames: t.id === b.a7 ? i : true
    }, (0, g.Es)(t)) : (0, r.jsx)(U, {})
  },
  F = () => {
    let e = l.useRef(null);
    return (0, r.jsxs)("div", {
      className: s()(N.ax, w.Gf),
      children: [(0, r.jsx)("span", {
        children: I.intl.string(I.t.xwhoqM)
      }), (0, r.jsx)(u.YNO, {
        targetElementRef: e,
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
        children: t => (0, r.jsx)(u.QWc, D(R({}, t), {
          buttonRef: e,
          variant: "primary",
          textVariant: "text-sm/medium",
          text: I.intl.string(I.t.GjgdXe)
        }))
      })]
    })
  },
  Y = e => {
    let {
      hideHeader: t = false
    } = e, n = (0, a.yK)([g.Ay], () => g.Ay.getGamesSeen(false)), i = (0, a.bG)([g.Ay], () => B(...g.Ay.getOverrides()));
    l.useEffect(() => ((0, f.a2)(), f.e0), []);
    let {
      gameHistory: s,
      robloxSubgameHistory: o
    } = l.useMemo(() => n.reduce((e, t) => ((0, A.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
      gameHistory: [],
      robloxSubgameHistory: []
    }), [n]);
    return 0 === s.length ? (0, r.jsx)(V, {
      children: (0, r.jsx)(u.SGT, {
        children: I.intl.string(I.t["1yiJwn"])
      })
    }) : (0, r.jsx)(u.nVY, {
      label: t ? true : I.intl.string(I.t.jCOdvx),
      description: t ? true : I.intl.format(I.t.KPA3m9, {
        igdbLink: "https://www.igdb.com/about"
      }),
      children: (0, r.jsx)("div", {
        children: s.map(e => (0, r.jsx)(k, {
          rawGame: e,
          isOverride: i.has(e.exePath),
          subgames: e.id === b.a7 ? o : true
        }, (0, g.Es)(e)))
      })
    })
  },
  K = function(e) {
    let {
      className: t,
      showHeader: n = true
    } = e;
    return (0, r.jsxs)(E.A, {
      title: n ? I.intl.string(I.t.AVDyEj) : null,
      className: t,
      children: [(0, r.jsx)(H, {}), (0, r.jsx)(F, {}), (0, r.jsx)(u.cGx, {
        gap: 20
      }), (0, r.jsx)(Y, {})]
    })
  }