/** Chunk was on web.js **/
/** chunk id: 535855, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => ei
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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

function Q(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function J(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Q(e, t, n[t])
    })
  }
  return e
}

function $(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function ee(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : $(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let et = async (e, t, n) => {
  let {
    withMessage: r
  } = t;
  await (0, O.cJ)(e, {
    withMessage: r
  }, n), (0, g.Be)()
};

function en(e, t) {
  return i.useMemo(() => {
    let n = A.f[null != t ? t : Y.c8.ONE];
    return e === Y.P7.END ? n : ee(J({}, A.g[e]), {
      backgroundOverlayColor: n.backgroundOverlayColor
    })
  }, [t, e])
}

function er(e) {
  return Y.Wf[e].toLowerCase()
}

function ei(e) {
  let {
    onClose: t
  } = e, n = (0, T.A)(), a = (0, S.A)(), [g, y] = i.useState(0), A = a[g], L = Y.jS[A], X = en(L, (0, h.bG)([I.A], () => I.A.getCheckpointData()).cardId), Q = (0, m.rdh)(X.primaryColor).hex(), [J] = i.useState(new N.B4), [$, ee] = i.useState(false), et = (0, C.V)(d.A), ei = (0, C.V)(u.A), es = (0, C.V)(o.A), eo = (0, C.V)(l.A), el = (0, C.V)(c.A), ec = i.useRef(Y.Wf.WELCOME), eu = i.useCallback(() => {
    ee(true), ei()
  }, [ei]), ed = i.useCallback(() => {
    A === Y.Wf.END_CLAIM ? es() : A === Y.Wf.END_REWARD ? el() : Y.eg.has(A) || eo()
  }, [A, es, eo, el]), ef = i.useCallback(() => {
    g >= a.length - 1 ? eu() : (ed(), y(g + 1))
  }, [eu, ed, g, a.length]);
  i.useEffect(() => {
    b.default.track(W.HAw.CHECKPOINT_STEP_VIEWED, {
      step_name: er(A)
    }), ec.current = A, A === Y.Wf.END_SUMMARY && E.Ay.fireSurveyAction(f.w.CHECKPOINT_COMPLETED)
  }, [A]);
  let ep = i.useCallback(() => {
    A !== Y.Wf.WELCOME && (ed(), y(g - 1))
  }, [A, ed, g]);
  i.useEffect(() => {
    let e = e => {
      (0, p.vq)(e.target, HTMLTextAreaElement) || (0, p.vq)(e.target, HTMLInputElement) || ("ArrowRight" === e.key ? ef() : "ArrowLeft" === e.key && ep())
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [ep, ef]), i.useEffect(() => (et(), () => {
    b.default.track(W.HAw.CHECKPOINT_CLOSED, {
      step_name: er(ec.current)
    })
  }), []);
  let e_ = i.useCallback(e => {
      var t;
      let [n] = null != (t = Object.entries(a).find(t => {
        let [n, r] = t;
        return Y.jS[r] === e
      })) ? t : [], r = Number.parseInt(null != n ? n : "0");
      ed(), y(r)
    }, [ed, a]),
    eh = i.useCallback(() => {
      $ && ((0, O.hv)(), t())
    }, [$, t]);
  return (0, r.jsx)(N.GD.Provider, {
    value: J,
    children: (0, r.jsx)(v.P.Provider, {
      value: X,
      children: (0, r.jsx)(m.NPJ, {
        theme: K.NJ.DARKER,
        children: e => (0, r.jsxs)(R.A, {
          playEntryAnimation: n,
          isLeaving: $,
          onRest: eh,
          children: [(0, r.jsx)(_.Utq, {}), (0, r.jsxs)("div", {
            className: s()(Z.kL, e),
            "aria-label": q.intl.string(z.default["CdU/PF"]),
            children: [(0, r.jsx)(N.Ay, {
              slide: L
            }), (0, r.jsxs)(x.Ay, {
              activeSlide: L,
              children: [(0, r.jsx)(m.q7S, {
                id: Y.P7.WELCOME,
                children: (0, r.jsx)(H.A, {
                  onNextStep: ef
                })
              }), (0, r.jsx)(m.q7S, {
                id: Y.P7.MESSAGES,
                children: (0, r.jsx)(V.A, {})
              }), (0, r.jsx)(m.q7S, {
                id: Y.P7.EMOJIS,
                children: (0, r.jsx)(j.A, {})
              }), (0, r.jsx)(m.q7S, {
                id: Y.P7.VOICE,
                children: (0, r.jsx)(B.A, {})
              }), (0, r.jsx)(m.q7S, {
                id: Y.P7.GUILDS,
                children: (0, r.jsx)(G.A, {})
              }), (0, r.jsx)(m.q7S, {
                id: Y.P7.FRIENDS,
                children: (0, r.jsx)(k.A, {
                  step: A,
                  onNextStep: ef,
                  onPreviousStep: ep
                })
              }), (0, r.jsx)(m.q7S, {
                id: Y.P7.GAMING,
                children: (0, r.jsx)(U.A, {})
              }), (0, r.jsx)(m.q7S, {
                id: Y.P7.QUESTS,
                children: (0, r.jsx)(F.A, {})
              }), (0, r.jsx)(m.q7S, {
                id: Y.P7.END,
                children: (0, r.jsx)(M.A, {
                  step: A,
                  onNext: ef
                })
              })]
            }), (0, r.jsxs)("div", {
              className: s()(Z.wx, e),
              children: [L !== Y.P7.WELCOME && (0, r.jsxs)("div", {
                className: Z.wm,
                children: [(0, r.jsx)(m.pVd, {
                  colorClass: Z.d7,
                  color: Q
                }), (0, r.jsx)(m.Text, {
                  variant: "display-sm",
                  className: Z.jF,
                  style: {
                    color: Q
                  },
                  children: q.intl.string(z.default["CdU/PF"])
                })]
              }), (0, r.jsx)(D.A, {
                activeSlide: L,
                setActiveSlide: e_,
                className: Z.cJ,
                color: Q
              }), (0, r.jsxs)("div", {
                className: Z.o1,
                children: [(0, r.jsx)(P.A, {}), (0, r.jsx)(m.DUT, {
                  onClick: () => eu(),
                  className: Z.b,
                  style: {
                    color: Q
                  },
                  children: (0, r.jsx)(m.d$L, {
                    colorClass: Z.d7,
                    color: Q,
                    size: "sm"
                  })
                })]
              })]
            }), L !== Y.P7.WELCOME && (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(m.DUT, {
                onClick: ep,
                className: Z.Gv,
                style: {
                  borderColor: Q
                },
                children: (0, r.jsx)(m.Zge, {
                  colorClass: Z.d7,
                  color: Q
                })
              }), A !== Y.Wf.END_REWARD && A !== Y.Wf.END_SUMMARY && (0, r.jsx)(w.A, {
                onClick: ef,
                contentClassName: Z.jR,
                className: Z.E5,
                muteSound: true,
                children: (0, r.jsx)(m.KS6, {
                  colorClass: Z.d7,
                  color: Q
                })
              }), A === Y.Wf.END_SUMMARY && (0, r.jsx)(ea, {
                primaryColor: Q
              })]
            })]
          }), (0, r.jsx)(_.Utq, {})]
        })
      })
    })
  })
}

function ea(e) {
  let {
    primaryColor: t
  } = e, n = (0, h.bG)([I.A], () => I.A.getCheckpointData()), i = () => {
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
      customSendHandler: et
    })
  };
  return (0, r.jsxs)(w.A, {
    onClick: i,
    className: Z.OI,
    children: [(0, r.jsx)(L.A, {
      variant: "eyebrow",
      className: Z.HL,
      style: {
        color: t
      },
      children: q.intl.string(q.t.RDE0Sc)
    }), (0, r.jsx)(m.I9m, {
      colorClass: X.d7,
      color: t
    })]
  })
}