/** Chunk was on 20941 **/
/** chunk id: 535855, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => $
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk745669 = require("./745669.js"),
  Chunk183766 = require("./183766.js"),
  Chunk801148 = require("./801148.js"),
  Chunk772350 = require("./772350.js"),
  Chunk992234 = require("./992234.js"),
  Chunk517846 = require("./517846.js"),
  Chunk621466 = require("./621466.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk294454 = require("./294454.jsx"),
  Chunk236698 = require("./236698.js"),
  Chunk383233 = require("./383233.js"),
  Chunk954571 = require("./954571.js"),
  Chunk796104 = require("./796104.js"),
  Chunk854987 = require("./854987.js"),
  Chunk222713 = require("./222713.js"),
  Chunk719718 = require("./719718.js"),
  Chunk101492 = require("./101492.js"),
  Chunk96533 = require("./96533.js"),
  Chunk181380 = require("./181380.js"),
  Chunk771273 = require("./771273.jsx"),
  Chunk612082 = require("./612082.jsx"),
  Chunk454993 = require("./454993.jsx"),
  Chunk753036 = require("./753036.jsx"),
  Chunk879815 = require("./879815.jsx"),
  Chunk182417 = require("./182417.jsx"),
  Chunk877272 = require("./877272.jsx"),
  Chunk511297 = require("./511297.jsx"),
  Chunk531502 = require("./531502.jsx"),
  Chunk480310 = require("./480310.jsx"),
  Chunk798400 = require("./798400.jsx"),
  Chunk16293 = require("./16293.jsx"),
  Chunk384137 = require("./384137.jsx"),
  Chunk594678 = require("./594678.jsx"),
  Chunk209973 = require("./209973.jsx"),
  Chunk293843 = require("./293843.jsx"),
  Chunk532294 = require("./532294.js"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js"),
  Chunk622865 = require("./622865.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk778007 = require("./778007.js"),
  Chunk308021 = require("./308021.js");
let Q = async (e, t, n) => {
  let {
    withMessage: r
  } = t;
  await (0, j.cJ)(e, {
    withMessage: r
  }, n), (0, g.Be)()
};

function J(e) {
  return W.Wf[e].toLowerCase()
}

function $(e) {
  var t;
  let {
    onClose: n
  } = e, a = (0, E.A)(), g = (0, O.A)(), [y, L] = l.useState(0), X = g[y], Q = W.jS[X], $ = (t = (0, h.bG)([A.A], () => A.A.getCheckpointData()).cardId, l.useMemo(() => {
    var e, n;
    let r = _.f[null != t ? t : W.c8.ONE];
    return Q === W.P7.END ? r : (e = function(e) {
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
    }({}, _.g[Q]), n = n = {
      backgroundOverlayColor: r.backgroundOverlayColor
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
    }), e)
  }, [t, Q])), et = (0, b.rdh)($.primaryColor).hex(), [en] = l.useState(new N.B4), [er, el] = l.useState(false), ea = (0, S.V)(d.A), ei = (0, S.V)(u.A), es = (0, S.V)(s.A), eo = (0, S.V)(o.A), ec = (0, S.V)(c.A), eu = l.useRef(W.Wf.WELCOME), ed = l.useCallback(() => {
    el(true), ei()
  }, [ei]), em = l.useCallback(() => {
    X === W.Wf.END_CLAIM ? es() : X === W.Wf.END_REWARD ? ec() : W.eg.has(X) || eo()
  }, [X, es, eo, ec]), ef = l.useCallback(() => {
    y >= g.length - 1 ? ed() : (em(), L(y + 1))
  }, [ed, em, y, g.length]);
  l.useEffect(() => {
    v.default.track(z.HAw.CHECKPOINT_STEP_VIEWED, {
      step_name: J(X)
    }), eu.current = X, X === W.Wf.END_SUMMARY && x.Ay.fireSurveyAction(m.w.CHECKPOINT_COMPLETED)
  }, [X]);
  let ep = l.useCallback(() => {
    X !== W.Wf.WELCOME && (em(), L(y - 1))
  }, [X, em, y]);
  l.useEffect(() => {
    let e = e => {
      (0, f.vq)(e.target, HTMLTextAreaElement) || (0, f.vq)(e.target, HTMLInputElement) || ("ArrowRight" === e.key ? ef() : "ArrowLeft" === e.key && ep())
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [ep, ef]), l.useEffect(() => (ea(), () => {
    v.default.track(z.HAw.CHECKPOINT_CLOSED, {
      step_name: J(eu.current)
    })
  }), []);
  let eh = l.useCallback(e => {
      var t;
      let [n] = null != (t = Object.entries(g).find(t => {
        let [n, r] = t;
        return W.jS[r] === e
      })) ? t : [], r = Number.parseInt(null != n ? n : "0");
      em(), L(r)
    }, [em, g]),
    eb = l.useCallback(() => {
      er && ((0, j.hv)(), n())
    }, [er, n]);
  return (0, r.jsx)(N.GD.Provider, {
    value: en,
    children: (0, r.jsx)(C.P.Provider, {
      value: $,
      children: (0, r.jsx)(b.NPJ, {
        theme: K.NJ.DARKER,
        children: e => (0, r.jsxs)(P.A, {
          playEntryAnimation: a,
          isLeaving: er,
          onRest: eb,
          children: [(0, r.jsx)(p.Utq, {}), (0, r.jsxs)("div", {
            className: i()(q.kL, e),
            "aria-label": Y.intl.string(Z.default["CdU/PF"]),
            children: [(0, r.jsx)(N.Ay, {
              slide: Q
            }), (0, r.jsxs)(R.Ay, {
              activeSlide: Q,
              children: [(0, r.jsx)(b.q7S, {
                id: W.P7.WELCOME,
                children: (0, r.jsx)(B.A, {
                  onNextStep: ef
                })
              }), (0, r.jsx)(b.q7S, {
                id: W.P7.MESSAGES,
                children: (0, r.jsx)(F.A, {})
              }), (0, r.jsx)(b.q7S, {
                id: W.P7.EMOJIS,
                children: (0, r.jsx)(D.A, {})
              }), (0, r.jsx)(b.q7S, {
                id: W.P7.VOICE,
                children: (0, r.jsx)(V.A, {})
              }), (0, r.jsx)(b.q7S, {
                id: W.P7.GUILDS,
                children: (0, r.jsx)(U.A, {})
              }), (0, r.jsx)(b.q7S, {
                id: W.P7.FRIENDS,
                children: (0, r.jsx)(M.A, {
                  step: X,
                  onNextStep: ef,
                  onPreviousStep: ep
                })
              }), (0, r.jsx)(b.q7S, {
                id: W.P7.GAMING,
                children: (0, r.jsx)(H.A, {})
              }), (0, r.jsx)(b.q7S, {
                id: W.P7.QUESTS,
                children: (0, r.jsx)(G.A, {})
              }), (0, r.jsx)(b.q7S, {
                id: W.P7.END,
                children: (0, r.jsx)(k.A, {
                  step: X,
                  onNext: ef
                })
              })]
            }), (0, r.jsxs)("div", {
              className: i()(q.wx, e),
              children: [Q !== W.P7.WELCOME && (0, r.jsxs)("div", {
                className: q.wm,
                children: [(0, r.jsx)(b.pVd, {
                  colorClass: q.d7,
                  color: et
                }), (0, r.jsx)(b.Text, {
                  variant: "display-sm",
                  className: q.jF,
                  style: {
                    color: et
                  },
                  children: Y.intl.string(Z.default["CdU/PF"])
                })]
              }), (0, r.jsx)(T.A, {
                activeSlide: Q,
                setActiveSlide: eh,
                className: q.cJ,
                color: et
              }), (0, r.jsxs)("div", {
                className: q.o1,
                children: [(0, r.jsx)(w.A, {}), (0, r.jsx)(b.DUT, {
                  onClick: () => ed(),
                  className: q.b,
                  style: {
                    color: et
                  },
                  children: (0, r.jsx)(b.d$L, {
                    colorClass: q.d7,
                    color: et,
                    size: "sm"
                  })
                })]
              })]
            }), Q !== W.P7.WELCOME && (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(b.DUT, {
                onClick: ep,
                className: q.Gv,
                style: {
                  borderColor: et
                },
                children: (0, r.jsx)(b.Zge, {
                  colorClass: q.d7,
                  color: et
                })
              }), X !== W.Wf.END_REWARD && X !== W.Wf.END_SUMMARY && (0, r.jsx)(I.A, {
                onClick: ef,
                contentClassName: q.jR,
                className: q.E5,
                muteSound: true,
                children: (0, r.jsx)(b.KS6, {
                  colorClass: q.d7,
                  color: et
                })
              }), X === W.Wf.END_SUMMARY && (0, r.jsx)(ee, {
                primaryColor: et
              })]
            })]
          }), (0, r.jsx)(p.Utq, {})]
        })
      })
    })
  })
}

function ee(e) {
  let {
    primaryColor: t
  } = e, n = (0, h.bG)([A.A], () => A.A.getCheckpointData());
  return (0, r.jsxs)(I.A, {
    onClick: () => {
      let e = new y.Ay({
        content: "",
        components: [{
          type: 20,
          checkpointData: {
            cardId: n.cardId
          }
        }]
      });
      (0, g.fO)({
        message: e,
        source: "checkpoint",
        customSendHandler: Q
      })
    },
    className: q.OI,
    children: [(0, r.jsx)(L.A, {
      variant: "eyebrow",
      className: q.HL,
      style: {
        color: t
      },
      children: Y.intl.string(Y.t.RDE0Sc)
    }), (0, r.jsx)(b.I9m, {
      colorClass: X.d7,
      color: t
    })]
  })
}