/** Chunk was on 32502 **/
/** chunk id: 768908, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => z,
  T: () => F,
  Wx: () => Y,
  cH: () => B
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
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

function L(e) {
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

function G(e, t) {
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
let D = Chunk311907.Ay.connectStores([Chunk544028.A], () => ({
    theme: C.A.theme
  }))(Chunk397927.ppr),
  k = (0, Chunk723702.isWindows)();

function w(e) {
  let {
    onClose: t
  } = e, n = (0, a.bG)([x.Ay], () => x.Ay.getCandidateGames()), [s, o] = l.useState(null), c = n.map(e => ({
    id: e.pid.toString(),
    value: e,
    label: null != e.name ? e.name : ""
  }));
  return (0, i.jsxs)(d.lGe, {
    className: r()(N.H2, I.Y_),
    "aria-label": _.intl.string(_.t.GTCx0p),
    children: [(0, i.jsx)(d.ZiE, {
      selectionMode: "single",
      placeholder: _.intl.string(_.t.XqMe3N),
      value: s,
      options: c,
      onSelectionChange: function(e) {
        o(e)
      }
    }), (0, i.jsx)(d.cGx, {
      className: r()(R.Ot, R.QB)
    }), (0, i.jsxs)("div", {
      className: r()(N.o1, P.xM),
      children: [(0, i.jsx)(d.QWc, {
        variant: "secondary",
        text: _.intl.string(_.t["ETE/oC"]),
        onClick: t
      }), (0, i.jsx)(d.Button, {
        variant: "primary",
        text: _.intl.string(_.t.GTCx0p),
        disabled: null == s,
        onClick: function() {
          null != s && (u.A.addGame(s.pid, s.name), t())
        }
      })]
    })]
  })
}

function V(e) {
  let {
    rawGame: t,
    nowPlaying: s = false,
    isOverride: p,
    subgames: A,
    isSubgame: S = false,
    parentGame: f
  } = e, C = (0, a.cf)([x.Ay, j.A, O.A], () => (0, x.xU)(t, x.Ay, j.A, O.A)), {
    canToggleDetection: v,
    isCurrentGameDetectionEnabled: I
  } = (0, a.cf)([x.Ay], () => ({
    canToggleDetection: null == f || x.Ay.isDetectionEnabled(f),
    isCurrentGameDetectionEnabled: x.Ay.isDetectionEnabled(C)
  })), R = (0, a.bG)([x.Ay], () => x.Ay.getVisibleGame()), [D, w] = l.useState(false), M = l.useMemo(() => (0, b.n1)(C) ? S ? C.gameName : _.intl.formatToPlainString(_.t.G6BGdx, {
    subgameName: C.gameName
  }) : C.name, [C, S]), [U, H] = l.useState(null != M ? M : "???"), B = r()(P.tR, {
    [N.LO]: !s,
    [N.Rw]: s,
    [N.FB]: null != C && s,
    [N.xL]: S,
    [N.fG]: null != A && A.length > 0
  });

  function Y() {
    null != A && A.length > 0 && I ? (0, d.mMO)(async () => {
      let {
        Modal: e
      } = await Promise.resolve().then(n.bind(n, 158954));
      return t => (0, i.jsx)(e, G(L({}, t), {
        title: _.intl.formatToPlainString(_.t.PZ4fKc, {
          platform: M
        }),
        subtitle: _.intl.formatToPlainString(_.t.ZIQbfb, {
          platform: M
        }),
        actions: [{
          text: _.intl.string(_.t["ETE/oC"]),
          onClick: () => t.onClose(),
          variant: "secondary"
        }, {
          text: _.intl.string(_.t.Fmjztz),
          onClick: () => {
            u.A.toggleDetection(C), t.onClose()
          },
          variant: "primary"
        }]
      }))
    }) : u.A.toggleDetection(C)
  }
  let F = null != R && (0, x.Es)(C) === (0, x.Es)(R),
    z = null != f && f.id === (null == R ? true : R.id) || F || null != A && A.some(e => e.id === (null == R ? true : R.id));
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: B,
      children: [(0, i.jsxs)("div", {
        className: r()(N.$K, P.Vd),
        children: [C.verified && !p ? (0, i.jsxs)("div", {
          className: N.HS,
          children: [(0, i.jsx)("div", {
            className: N.mO,
            children: M
          }), (0, i.jsx)(c.m_, {
            text: _.intl.string(_.t["4PJP5p"]),
            children: (0, i.jsx)(m.A, {
              className: N.qf,
              size: 18,
              color: o.A.unsafe_rawColors.BRAND_500.css,
              children: (0, i.jsx)(d.Uzd, {
                size: "custom",
                width: 18,
                height: 18,
                color: o.A.unsafe_rawColors.WHITE.css
              })
            })
          })]
        }) : (0, i.jsx)("input", {
          className: r()(N.mO, N.sr),
          type: "text",
          maxLength: 128,
          value: U,
          onBlur: function() {
            C.name !== U && u.A.editName(C, U)
          },
          onKeyDown: function(e) {
            e.key === T.dh.ENTER && (e.currentTarget.blur(), e.preventDefault())
          },
          onChange: e => H(e.target.value)
        }), function() {
          let e, {
            played: t,
            exePath: n
          } = C;
          return s || F ? e = _.intl.string(_.t.VbV5dv) : null != t && "" !== t && (e = _.intl.format(_.t["gGeOE+"], {
            when: t
          })), (0, i.jsx)("div", {
            className: N.GN,
            children: (0, i.jsx)(g.A, {
              hoverText: null != n && "" !== n ? n.toUpperCase() : "",
              children: e
            })
          })
        }()]
      }), p || D ? null : (0, i.jsx)("div", {
        className: r()(P.tR, P.oA, P.LT, N.E3),
        children: (0, i.jsx)(c.m_, {
          text: _.intl.string(_.t["y0B+lo"]),
          children: (0, i.jsx)(d.DUT, {
            "aria-label": _.intl.string(_.t["y0B+lo"]),
            className: N.ym,
            onClick: function() {
              if (D) return;
              let e = null != C.id ? j.A.getDetectableGame(C.id) : null;
              E.default.track(y.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
                application_id: null == e ? true : e.id,
                game_name: (0, b.n1)(C) ? C.gameName : C.name
              }), w(true), (0, d.mMO)(async () => {
                let {
                  default: t
                } = await Promise.all([n.e("27495"), n.e("79692")]).then(n.bind(n, 651930));
                return n => {
                  var l, s, r;
                  return (0, i.jsx)(t, G(L({}, n), {
                    detectedActivity: {
                      name: null != (l = C.name) ? l : "",
                      application_id: null != (s = null != (r = null == e ? true : e.id) ? r : C.id) ? s : true,
                      type: y.$pd.PLAYING
                    },
                    onSubmitted: () => {}
                  }))
                }
              })
            },
            children: (0, i.jsx)(d.iFK, {
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
        } = C, t = e && v ? (0, i.jsx)(d.bMW, {
          size: "md",
          color: "currentColor",
          className: N.Lj,
          colorClass: N.GS
        }) : (0, i.jsx)(d.G3N, {
          size: "md",
          color: "currentColor",
          className: v ? N.$V : N.zN,
          colorClass: N.GS
        });
        return (0, i.jsx)("div", {
          className: r()(P.tR, P.oA, P.LT, N.E3),
          children: (0, i.jsx)(c.m_, {
            text: _.intl.string(_.t.QmitzM),
            children: v ? (0, i.jsx)(d.DUT, {
              "aria-label": _.intl.string(_.t.QmitzM),
              className: N.ym,
              onClick: Y,
              children: t
            }) : t
          })
        })
      }(), function() {
        if (!k || null != f) return null;
        let {
          overlay: e,
          overlayWarn: t
        } = C, n = e ? (0, i.jsx)(d.kN9, {
          size: "md",
          color: "currentColor",
          className: N.Lj,
          colorClass: N.GS
        }) : (0, i.jsx)(d.nkR, {
          size: "md",
          color: "currentColor",
          className: N.$V,
          colorClass: N.GS
        }), l = t ? (0, i.jsx)(c.m_, {
          text: _.intl.string(_.t.Vfw2L5),
          children: (0, i.jsx)("i", {
            className: N.kb
          })
        }) : null;
        return (0, i.jsxs)("div", {
          className: r()(P.tR, P.oA, P.LT, N.E3),
          children: [l, (0, i.jsx)(c.m_, {
            text: _.intl.string(_.t["1+O+Tu"]),
            children: (0, i.jsx)(d.DUT, {
              "aria-label": _.intl.string(_.t["1+O+Tu"]),
              className: N.ym,
              onClick: () => {
                var t;
                return t = !e, void u.A.toggleOverlay(C, t, t)
              },
              children: n
            })
          })]
        })
      }(), s && !p || z ? null : (0, i.jsx)(h.A, {
        className: N.LS,
        onClick: function() {
          u.A.deleteEntry(C), null == A || A.forEach(e => {
            u.A.deleteEntry(e)
          })
        }
      })]
    }), null != A && A.length > 0 && !s && (0, i.jsx)("div", {
      className: N.AQ,
      children: A.map((e, t) => (0, i.jsxs)(l.Fragment, {
        children: [(0, i.jsx)(V, {
          rawGame: e,
          isOverride: false,
          isSubgame: true,
          parentGame: C
        }), t !== A.length - 1 && (0, i.jsx)("div", {
          className: N.PQ
        })]
      }, (0, x.Es)(e)))
    })]
  })
}

function M() {
  return (0, i.jsx)("div", {
    className: r()(P.tR, N.eS, N.Rw),
    children: (0, i.jsxs)("div", {
      className: r()(N.$K, P.Vd),
      children: [(0, i.jsx)("div", {
        className: N.mO,
        children: _.intl.string(_.t.H68X9x)
      }), (0, i.jsx)("div", {
        className: N.GN,
        children: _.intl.string(_.t.T5Ilmw)
      })]
    })
  })
}

function U(e) {
  let {
    children: t
  } = e;
  return (0, i.jsxs)(D, {
    className: R.eT,
    children: [(0, i.jsx)(d.G8R, {
      darkSrc: n(839628),
      lightSrc: n(446404),
      width: 430,
      height: 250
    }), t]
  })
}
let H = (0, Chunk583613.L_)(function() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new Set(t.map(e => e.exePath))
  }),
  B = () => {
    let e = (0, a.yK)([x.Ay], () => x.Ay.getGamesSeen(false)),
      {
        runningGame: t,
        overrideExePaths: n
      } = (0, a.cf)([x.Ay], () => ({
        runningGame: x.Ay.getVisibleGame(),
        overrideExePaths: H(...x.Ay.getOverrides())
      }));
    l.useEffect(() => ((0, p.a2)(), p.e0), []);
    let s = l.useMemo(() => e.reduce((e, t) => ((0, b.n1)(t) && e.push(t), e), []), [e]);
    return null != t ? (0, i.jsx)(V, {
      rawGame: t,
      isOverride: n.has(t.exePath),
      nowPlaying: true,
      subgames: t.id === A.a7 ? s : true
    }, (0, x.Es)(t)) : (0, i.jsx)(M, {})
  },
  Y = () => {
    let e = l.useRef(null);
    return (0, i.jsxs)("div", {
      className: r()(N.ax, R.Gf),
      children: [(0, i.jsx)("span", {
        children: _.intl.string(_.t.xwhoqM)
      }), (0, i.jsx)(d.YNO, {
        targetElementRef: e,
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, i.jsx)(w, {
            onClose: t
          })
        },
        align: "center",
        position: "bottom",
        children: t => (0, i.jsx)(d.QWc, G(L({}, t), {
          buttonRef: e,
          variant: "primary",
          textVariant: "text-sm/medium",
          text: _.intl.string(_.t.GjgdXe)
        }))
      })]
    })
  },
  F = e => {
    let {
      hideHeader: t = false
    } = e, n = (0, a.yK)([x.Ay], () => x.Ay.getGamesSeen(false)), s = (0, a.bG)([x.Ay], () => H(...x.Ay.getOverrides()));
    l.useEffect(() => ((0, p.a2)(), p.e0), []);
    let {
      gameHistory: r,
      robloxSubgameHistory: o
    } = l.useMemo(() => n.reduce((e, t) => ((0, b.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
      gameHistory: [],
      robloxSubgameHistory: []
    }), [n]);
    return 0 === r.length ? (0, i.jsx)(U, {
      children: (0, i.jsx)(d.SGT, {
        children: _.intl.string(_.t["1yiJwn"])
      })
    }) : (0, i.jsx)(d.nVY, {
      label: t ? true : _.intl.string(_.t.jCOdvx),
      description: t ? true : _.intl.format(_.t.KPA3m9, {
        igdbLink: "https://www.igdb.com/about"
      }),
      children: (0, i.jsx)("div", {
        children: r.map(e => (0, i.jsx)(V, {
          rawGame: e,
          isOverride: s.has(e.exePath),
          subgames: e.id === A.a7 ? o : true
        }, (0, x.Es)(e)))
      })
    })
  },
  z = function(e) {
    let {
      className: t,
      showHeader: n = true
    } = e;
    return (0, i.jsxs)(v.A, {
      title: n ? _.intl.string(_.t.AVDyEj) : null,
      className: t,
      children: [(0, i.jsx)(B, {}), (0, i.jsx)(Y, {}), (0, i.jsx)(d.cGx, {
        gap: 20
      }), (0, i.jsx)(F, {})]
    })
  }