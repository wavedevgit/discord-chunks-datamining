/** Chunk was on web.js **/
/** chunk id: 765457, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => er
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk21890 = require("./21890.js"),
  Chunk481743 = require("./481743.js"),
  Chunk747732 = require("./747732.js"),
  Chunk38581 = require("./38581.js"),
  Chunk391767 = require("./391767.js"),
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
  Chunk140939 = require("./140939.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk691446 = require("./691446.js"),
  Chunk417788 = require("./417788.js");

function Q(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function X(e) {
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

function J(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function $(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : J(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let ee = async (e, t, n) => {
  let {
    withMessage: r
  } = t;
  await (0, y.Jm)(e, {
    withMessage: r
  }, n), (0, h.mc)()
};

function et(e, t) {
  return i.useMemo(() => {
    let n = v.F[null != t ? t : V._n.ONE];
    return e === V.yD.END ? n : $(X({}, v.E[e]), {
      backgroundOverlayColor: n.backgroundOverlayColor
    })
  }, [t, e])
}

function en(e) {
  return V.ij[e].toLowerCase()
}

function er(e) {
  let {
    onClose: t
  } = e, n = (0, T.Z)(), a = (0, I.Z)(), [h, E] = i.useState(0), v = a[h], x = V.bq[v], q = et(x, (0, _.e7)([S.Z], () => S.Z.getCheckpointData()).cardId), Q = (0, m.dQu)(q.primaryColor).hex(), [X] = i.useState(new C.EP), [J, $] = i.useState(false), ee = (0, A.T)(d.Z), er = (0, A.T)(u.Z), ea = (0, A.T)(s.Z), eo = (0, A.T)(l.Z), es = (0, A.T)(c.Z), el = i.useRef(V.ij.WELCOME), ec = i.useCallback(() => {
    $(true), er()
  }, [er]), eu = i.useCallback(() => {
    v === V.ij.END_CLAIM ? ea() : v === V.ij.END_REWARD ? es() : V.Kz.has(v) || eo()
  }, [v, ea, eo, es]), ed = i.useCallback(() => {
    if (h >= a.length - 1) return void ec();
    eu(), E(h + 1)
  }, [ec, eu, h, a.length]);
  i.useEffect(() => {
    b.default.track(H.rMx.CHECKPOINT_STEP_VIEWED, {
      step_name: en(v)
    }), el.current = v, v === V.ij.END_SUMMARY && g.ZP.fireSurveyAction("checkpoint_completed")
  }, [v]);
  let ef = i.useCallback(() => {
    v !== V.ij.WELCOME && (eu(), E(h - 1))
  }, [v, eu, h]);
  i.useEffect(() => {
    let e = e => {
      (0, f.kK)(e.target, HTMLTextAreaElement) || (0, f.kK)(e.target, HTMLInputElement) || ("ArrowRight" === e.key ? ed() : "ArrowLeft" === e.key && ef())
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [ef, ed]), i.useEffect(() => (ee(), () => {
    b.default.track(H.rMx.CHECKPOINT_CLOSED, {
      step_name: en(el.current)
    })
  }), []);
  let ep = i.useCallback(e => {
      var t;
      let [n] = null != (t = Object.entries(a).find(t => {
        let [n, r] = t;
        return V.bq[r] === e
      })) ? t : [], r = Number.parseInt(null != n ? n : "0");
      eu(), E(r)
    }, [eu, a]),
    e_ = i.useCallback(() => {
      J && ((0, y.R5)(), t())
    }, [J, t]);
  return (0, r.jsx)(C.$r.Provider, {
    value: X,
    children: (0, r.jsx)(O.Q.Provider, {
      value: q,
      children: (0, r.jsx)(m.f6W, {
        theme: Y.BR.DARKER,
        children: e => (0, r.jsxs)(P.Z, {
          playEntryAnimation: n,
          isLeaving: J,
          onRest: e_,
          children: [(0, r.jsx)(p.OUJ, {}), (0, r.jsxs)("div", {
            className: o()(z.container, e),
            "aria-label": K.intl.string(W.default["CdU/PF"]),
            children: [(0, r.jsx)(C.ZP, {
              slide: x
            }), (0, r.jsxs)(D.ZP, {
              activeSlide: x,
              children: [(0, r.jsx)(m.Mi4, {
                id: V.yD.WELCOME,
                children: (0, r.jsx)(F.Z, {
                  onNextStep: ed
                })
              }), (0, r.jsx)(m.Mi4, {
                id: V.yD.MESSAGES,
                children: (0, r.jsx)(G.Z, {})
              }), (0, r.jsx)(m.Mi4, {
                id: V.yD.EMOJIS,
                children: (0, r.jsx)(L.Z, {})
              }), (0, r.jsx)(m.Mi4, {
                id: V.yD.VOICE,
                children: (0, r.jsx)(B.Z, {})
              }), (0, r.jsx)(m.Mi4, {
                id: V.yD.GUILDS,
                children: (0, r.jsx)(U.Z, {})
              }), (0, r.jsx)(m.Mi4, {
                id: V.yD.FRIENDS,
                children: (0, r.jsx)(M.Z, {
                  step: v,
                  onNextStep: ed,
                  onPreviousStep: ef
                })
              }), (0, r.jsx)(m.Mi4, {
                id: V.yD.GAMING,
                children: (0, r.jsx)(k.Z, {})
              }), (0, r.jsx)(m.Mi4, {
                id: V.yD.QUESTS,
                children: (0, r.jsx)(Z.Z, {})
              }), (0, r.jsx)(m.Mi4, {
                id: V.yD.END,
                children: (0, r.jsx)(j.Z, {
                  step: v,
                  onNext: ed
                })
              })]
            }), (0, r.jsxs)("div", {
              className: o()(z.header, e),
              children: [x !== V.yD.WELCOME && (0, r.jsxs)("div", {
                className: z.logo,
                children: [(0, r.jsx)(m.gw7, {
                  colorClass: z.iconColor,
                  color: Q
                }), (0, r.jsx)(m.Text, {
                  variant: "display-sm",
                  className: z.logoText,
                  style: {
                    color: Q
                  },
                  children: K.intl.string(W.default["CdU/PF"])
                })]
              }), (0, r.jsx)(w.Z, {
                activeSlide: x,
                setActiveSlide: ep,
                className: z.stepIndicator,
                color: Q
              }), (0, r.jsxs)("div", {
                className: z.actions,
                children: [(0, r.jsx)(R.Z, {}), (0, r.jsx)(m.P3F, {
                  onClick: () => ec(),
                  className: z.closeButton,
                  style: {
                    color: Q
                  },
                  children: (0, r.jsx)(m.Uz9, {
                    colorClass: z.iconColor,
                    color: Q,
                    size: "sm"
                  })
                })]
              })]
            }), x !== V.yD.WELCOME && (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(m.P3F, {
                onClick: ef,
                className: z.backButton,
                style: {
                  borderColor: Q
                },
                children: (0, r.jsx)(m.j9r, {
                  colorClass: z.iconColor,
                  color: Q
                })
              }), v !== V.ij.END_REWARD && v !== V.ij.END_SUMMARY && (0, r.jsx)(N.Z, {
                onClick: ed,
                contentClassName: z.nextButtonContent,
                className: z.nextButton,
                muteSound: true,
                children: (0, r.jsx)(m.d4D, {
                  colorClass: z.iconColor,
                  color: Q
                })
              }), v === V.ij.END_SUMMARY && (0, r.jsx)(ei, {
                primaryColor: Q
              })]
            })]
          }), (0, r.jsx)(p.OUJ, {})]
        })
      })
    })
  })
}

function ei(e) {
  let {
    primaryColor: t
  } = e, n = (0, _.e7)([S.Z], () => S.Z.getCheckpointData()), i = () => {
    let e = new E.ZP({
      content: "",
      components: [{
        type: 20,
        checkpointData: {
          cardId: n.cardId
        }
      }]
    });
    (0, h.l8)({
      message: e,
      source: "checkpoint",
      customSendHandler: ee
    })
  };
  return (0, r.jsxs)(N.Z, {
    onClick: i,
    className: z.shareButton,
    children: [(0, r.jsx)(x.Z, {
      variant: "eyebrow",
      className: z.buttonCTA,
      style: {
        color: t
      },
      children: K.intl.string(K.t.RDE0Sc)
    }), (0, r.jsx)(m.Gr1, {
      colorClass: q.iconColor,
      color: t
    })]
  })
}