/** Chunk was on web.js **/
/** chunk id: 765457, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ei
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk16789 = require("./16789.js"),
  Chunk594931 = require("./594931.js"),
  Chunk556924 = require("./556924.js"),
  Chunk896880 = require("./896880.js"),
  Chunk322958 = require("./322958.js"),
  Chunk547943 = require("./547943.js"),
  Chunk374470 = require("./374470.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk912332 = require("./912332.jsx"),
  Chunk588529 = require("./588529.js"),
  Chunk23750 = require("./23750.js"),
  Chunk626135 = require("./626135.js"),
  Chunk515970 = require("./515970.js"),
  Chunk324060 = require("./324060.js"),
  Chunk830960 = require("./830960.js"),
  Chunk5888 = require("./5888.js"),
  Chunk564756 = require("./564756.js"),
  Chunk518650 = require("./518650.js"),
  Chunk989392 = require("./989392.js"),
  Chunk193869 = require("./193869.jsx"),
  Chunk639949 = require("./639949.jsx"),
  Chunk77691 = require("./77691.jsx"),
  Chunk225466 = require("./225466.jsx"),
  Chunk2835 = require("./2835.jsx"),
  Chunk225055 = require("./225055.jsx"),
  Chunk391876 = require("./391876.jsx"),
  Chunk410853 = require("./410853.jsx"),
  Chunk425196 = require("./425196.jsx"),
  Chunk860277 = require("./860277.jsx"),
  Chunk118045 = require("./118045.jsx"),
  Chunk221558 = require("./221558.jsx"),
  Chunk360469 = require("./360469.jsx"),
  Chunk741549 = require("./741549.jsx"),
  Chunk271268 = require("./271268.jsx"),
  Chunk626698 = require("./626698.jsx"),
  Chunk612776 = require("./612776.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk638398 = require("./638398.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk756916 = require("./756916.js"),
  Chunk554445 = require("./554445.js");

function X(e, t, n) {
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
      X(e, t, n[t])
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
  await (0, O.Jm)(e, {
    withMessage: r
  }, n), (0, g.mc)()
};

function en(e, t) {
  return i.useMemo(() => {
    let n = S.F[null != t ? t : H._n.ONE];
    return e === H.yD.END ? n : ee(J({}, S.E[e]), {
      backgroundOverlayColor: n.backgroundOverlayColor
    })
  }, [t, e])
}

function er(e) {
  return H.ij[e].toLowerCase()
}

function ei(e) {
  let {
    onClose: t
  } = e, n = (0, C.Z)(), a = (0, T.Z)(), [g, b] = i.useState(0), S = a[g], L = H.bq[S], Q = en(L, (0, h.e7)([I.Z], () => I.Z.getCheckpointData()).cardId), X = (0, m.dQu)(Q.primaryColor).hex(), [J] = i.useState(new N.EP), [$, ee] = i.useState(false), et = (0, A.T)(d.Z), ei = (0, A.T)(u.Z), eo = (0, A.T)(s.Z), es = (0, A.T)(l.Z), el = (0, A.T)(c.Z), ec = i.useRef(H.ij.WELCOME), eu = i.useCallback(() => {
    ee(true), ei()
  }, [ei]), ed = i.useCallback(() => {
    S === H.ij.END_CLAIM ? eo() : S === H.ij.END_REWARD ? el() : H.Kz.has(S) || es()
  }, [S, eo, es, el]), ef = i.useCallback(() => {
    if (g >= a.length - 1) return void eu();
    ed(), b(g + 1)
  }, [eu, ed, g, a.length]);
  i.useEffect(() => {
    y.default.track(Y.rMx.CHECKPOINT_STEP_VIEWED, {
      step_name: er(S)
    }), ec.current = S, S === H.ij.END_SUMMARY && E.ZP.fireSurveyAction(f.Y.CHECKPOINT_COMPLETED)
  }, [S]);
  let ep = i.useCallback(() => {
    S !== H.ij.WELCOME && (ed(), b(g - 1))
  }, [S, ed, g]);
  i.useEffect(() => {
    let e = e => {
      (0, p.kK)(e.target, HTMLTextAreaElement) || (0, p.kK)(e.target, HTMLInputElement) || ("ArrowRight" === e.key ? ef() : "ArrowLeft" === e.key && ep())
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [ep, ef]), i.useEffect(() => (et(), () => {
    y.default.track(Y.rMx.CHECKPOINT_CLOSED, {
      step_name: er(ec.current)
    })
  }), []);
  let e_ = i.useCallback(e => {
      var t;
      let [n] = null != (t = Object.entries(a).find(t => {
        let [n, r] = t;
        return H.bq[r] === e
      })) ? t : [], r = Number.parseInt(null != n ? n : "0");
      ed(), b(r)
    }, [ed, a]),
    eh = i.useCallback(() => {
      $ && ((0, O.R5)(), t())
    }, [$, t]);
  return (0, r.jsx)(N.$r.Provider, {
    value: J,
    children: (0, r.jsx)(v.Q.Provider, {
      value: Q,
      children: (0, r.jsx)(m.f6W, {
        theme: W.BR.DARKER,
        children: e => (0, r.jsxs)(w.Z, {
          playEntryAnimation: n,
          isLeaving: $,
          onRest: eh,
          children: [(0, r.jsx)(_.OUJ, {}), (0, r.jsxs)("div", {
            className: o()(q.container, e),
            "aria-label": z.intl.string(K.default["CdU/PF"]),
            children: [(0, r.jsx)(N.ZP, {
              slide: L
            }), (0, r.jsxs)(x.ZP, {
              activeSlide: L,
              children: [(0, r.jsx)(m.Mi4, {
                id: H.yD.WELCOME,
                children: (0, r.jsx)(V.Z, {
                  onNextStep: ef
                })
              }), (0, r.jsx)(m.Mi4, {
                id: H.yD.MESSAGES,
                children: (0, r.jsx)(Z.Z, {})
              }), (0, r.jsx)(m.Mi4, {
                id: H.yD.EMOJIS,
                children: (0, r.jsx)(j.Z, {})
              }), (0, r.jsx)(m.Mi4, {
                id: H.yD.VOICE,
                children: (0, r.jsx)(B.Z, {})
              }), (0, r.jsx)(m.Mi4, {
                id: H.yD.GUILDS,
                children: (0, r.jsx)(G.Z, {})
              }), (0, r.jsx)(m.Mi4, {
                id: H.yD.FRIENDS,
                children: (0, r.jsx)(k.Z, {
                  step: S,
                  onNextStep: ef,
                  onPreviousStep: ep
                })
              }), (0, r.jsx)(m.Mi4, {
                id: H.yD.GAMING,
                children: (0, r.jsx)(U.Z, {})
              }), (0, r.jsx)(m.Mi4, {
                id: H.yD.QUESTS,
                children: (0, r.jsx)(F.Z, {})
              }), (0, r.jsx)(m.Mi4, {
                id: H.yD.END,
                children: (0, r.jsx)(M.Z, {
                  step: S,
                  onNext: ef
                })
              })]
            }), (0, r.jsxs)("div", {
              className: o()(q.header, e),
              children: [L !== H.yD.WELCOME && (0, r.jsxs)("div", {
                className: q.logo,
                children: [(0, r.jsx)(m.gw7, {
                  colorClass: q.iconColor,
                  color: X
                }), (0, r.jsx)(m.Text, {
                  variant: "display-sm",
                  className: q.logoText,
                  style: {
                    color: X
                  },
                  children: z.intl.string(K.default["CdU/PF"])
                })]
              }), (0, r.jsx)(D.Z, {
                activeSlide: L,
                setActiveSlide: e_,
                className: q.stepIndicator,
                color: X
              }), (0, r.jsxs)("div", {
                className: q.actions,
                children: [(0, r.jsx)(R.Z, {}), (0, r.jsx)(m.P3F, {
                  onClick: () => eu(),
                  className: q.closeButton,
                  style: {
                    color: X
                  },
                  children: (0, r.jsx)(m.Uz9, {
                    colorClass: q.iconColor,
                    color: X,
                    size: "sm"
                  })
                })]
              })]
            }), L !== H.yD.WELCOME && (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(m.P3F, {
                onClick: ep,
                className: q.backButton,
                style: {
                  borderColor: X
                },
                children: (0, r.jsx)(m.j9r, {
                  colorClass: q.iconColor,
                  color: X
                })
              }), S !== H.ij.END_REWARD && S !== H.ij.END_SUMMARY && (0, r.jsx)(P.Z, {
                onClick: ef,
                contentClassName: q.nextButtonContent,
                className: q.nextButton,
                muteSound: true,
                children: (0, r.jsx)(m.d4D, {
                  colorClass: q.iconColor,
                  color: X
                })
              }), S === H.ij.END_SUMMARY && (0, r.jsx)(ea, {
                primaryColor: X
              })]
            })]
          }), (0, r.jsx)(_.OUJ, {})]
        })
      })
    })
  })
}

function ea(e) {
  let {
    primaryColor: t
  } = e, n = (0, h.e7)([I.Z], () => I.Z.getCheckpointData()), i = () => {
    let e = new b.ZP({
      content: "",
      components: [{
        type: 20,
        checkpointData: {
          cardId: n.cardId
        }
      }]
    });
    (0, g.l8)({
      message: e,
      source: "checkpoint",
      customSendHandler: et
    })
  };
  return (0, r.jsxs)(P.Z, {
    onClick: i,
    className: q.shareButton,
    children: [(0, r.jsx)(L.Z, {
      variant: "eyebrow",
      className: q.buttonCTA,
      style: {
        color: t
      },
      children: z.intl.string(z.t.RDE0Sc)
    }), (0, r.jsx)(m.Gr1, {
      colorClass: Q.iconColor,
      color: t
    })]
  })
}