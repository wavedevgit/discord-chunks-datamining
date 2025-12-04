/** Chunk was on web.js **/
/** chunk id: 860277, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk481743 = require("./481743.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk379649 = require("./379649.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk837411 = require("./837411.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk51144 = require("./51144.js"),
  Chunk515970 = require("./515970.js"),
  Chunk324060 = require("./324060.js"),
  Chunk5888 = require("./5888.js"),
  Chunk26118 = require("./26118.js"),
  Chunk989392 = require("./989392.js"),
  Chunk909397 = require("./909397.jsx"),
  Chunk198358 = require("./198358.jsx"),
  Chunk225055 = require("./225055.jsx"),
  Chunk391876 = require("./391876.jsx"),
  Chunk612776 = require("./612776.js"),
  Chunk140939 = require("./140939.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk417788 = require("./417788.js"),
  Chunk300494 = require("./300494.js");
let x = 1e3,
  L = 50,
  j = 250;

function M(e) {
  let {
    primaryColor: t
  } = e;
  return (0, r.jsxs)("div", {
    className: D.content,
    children: [(0, r.jsxs)("div", {
      className: w.title,
      children: [(0, r.jsx)(c.iFz, {
        size: "refresh_sm",
        color: t,
        colorClass: w.iconColor,
        className: w.titleIcon
      }), (0, r.jsx)(C.Z, {
        variant: "eyebrow",
        className: w.eyebrow,
        children: R.intl.string(P.default.ZQakPR)
      })]
    }), (0, r.jsx)(C.Z, {
      variant: "display-lg",
      className: D.display,
      children: R.intl.string(P.default.OzY5Ns)
    }), (0, r.jsx)(C.Z, {
      variant: "heading-xxl/medium",
      className: D.subtitle,
      children: R.intl.string(P.default.sEPtGY)
    }), (0, r.jsx)(I.o, {
      slide: N.yD.FRIENDS
    })]
  })
}

function k() {
  return (0, Chunk54381.jsx)("div", {
    className: Chunk300494.content,
    children: (0, Chunk54381.jsx)(Chunk391876.Z, {
      variant: "heading-xxl/medium",
      children: Chunk388032.intl.string(Chunk140939.default.d5HUsD)
    })
  })
}

function U(e) {
  var t;
  let {
    primaryColor: n,
    sidekick: i
  } = e, {
    unit: a,
    duration: s
  } = (0, v.Bi)(null != (t = null == i ? true : i.numVoiceMinutes) ? t : 0);
  return (0, r.jsxs)("div", {
    className: D.content,
    children: [(0, r.jsxs)("div", {
      className: w.title,
      children: [(0, r.jsx)(c.iFz, {
        size: "refresh_sm",
        color: n,
        colorClass: w.iconColor,
        className: w.titleIcon
      }), (0, r.jsx)(C.Z, {
        variant: "eyebrow",
        className: w.eyebrow,
        children: R.intl.string(P.default.ZQakPR)
      })]
    }), (0, r.jsx)(C.Z, {
      variant: "display-lg",
      className: o()(D.display, D.subtitle),
      children: R.intl.string(P.default["+uwOHt"])
    }), (0, r.jsxs)("div", {
      className: D.stats,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(C.Z, {
          variant: "eyebrow",
          children: R.intl.string(P.default.wWKySP)
        }), (0, r.jsx)(C.Z, {
          variant: "heading-xxl/normal",
          className: w.numeric,
          children: null == i ? true : i.numMessagesSent
        })]
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(C.Z, {
          variant: "eyebrow",
          children: a === d.J6.HOURS ? R.intl.format(P.default.Xu0QsX, {
            numHours: s
          }) : R.intl.string(P.default.RmVTph)
        }), (0, r.jsx)(C.Z, {
          variant: "heading-xxl/normal",
          className: w.numeric,
          children: s
        })]
      })]
    }), (0, r.jsx)(Z, {})]
  })
}

function G(e) {
  var t, n, a;
  let {
    step: o,
    onNextStep: s,
    onPreviousStep: l
  } = e, {
    users: d = [],
    sidekick: _
  } = (0, u.e7)([O.Z], () => O.Z.getCheckpointData()), m = (0, i.useContext)(y.Q), b = (0, f.dQu)(m.primaryColor).hex(), v = d[1], S = d[0], I = (0, u.e7)([h.default], () => h.default.getCurrentUser()), C = (0, i.useRef)(0), P = (0, i.useRef)(true), R = (0, i.useRef)(null), w = null != (t = (0, E._T)(null == _ ? true : _.user)) ? t : "", j = null != (n = (0, E._T)(v)) ? n : "", G = null != (a = (0, E._T)(S)) ? a : "", Z = 1 === d.length, B = (0, u.e7)([p.Z], () => p.Z.useReducedMotion);
  (0, i.useEffect)(() => (o === N.ij.FRIENDS_LEAVE && (P.current ? l() : B ? (s(), P.current = true) : C.current = setTimeout(() => {
    s(), P.current = true
  }, x)), () => clearTimeout(C.current)), [s, l, B, o]);
  let F = (0, i.useMemo)(() => {
      switch (o) {
        case N.ij.FRIENDS_INTRO:
          return 1;
        case N.ij.FRIENDS_TRANSITION:
          return 2;
        case N.ij.FRIENDS_BEST:
          return 3;
        case N.ij.FRIENDS_LEAVE:
          return B ? 3 : 4;
        default:
          return 0
      }
    }, [o, B]),
    V = (0, i.useCallback)(e => null != e ? g.ZP.getUserAvatarURL(e, false, 64, "png") : true, []);
  (0, i.useEffect)(() => () => clearTimeout(C.current), []), (0, i.useEffect)(() => {
    o !== N.ij.FRIENDS_LEAVE && (P.current = false)
  }, [o]);
  let H = (0, i.useCallback)(() => {
      let e = setInterval(() => {
        var t, n;
        let r = null == (t = R.current) ? true : t.getProperties();
        null != R.current && (null == r ? true : r.twoFriends.value) === Z && (null == r ? true : r.reducedMotion.value) === B && (null == (n = R.current) || n.play(), clearInterval(e))
      }, L);
      return () => clearInterval(e)
    }, [B, Z]),
    Y = (0, i.useMemo)(() => o < N.ij.FRIENDS_INTRO ? N.ij.FRIENDS_INTRO : o >= N.ij.FRIENDS_BEST ? N.ij.FRIENDS_BEST : o, [o]);
  return (0, r.jsxs)(T.Z, {
    children: [(0, r.jsx)("div", {
      className: D.container,
      children: (0, r.jsxs)(A.ZP, {
        activeSlide: Y,
        className: D.animatedSlides,
        slideClassName: D.animatedSlide,
        children: [(0, r.jsx)(f.Mi4, {
          id: N.ij.FRIENDS_INTRO,
          children: (0, r.jsx)(M, {
            primaryColor: b
          })
        }), (0, r.jsx)(f.Mi4, {
          id: N.ij.FRIENDS_TRANSITION,
          children: (0, r.jsx)(k, {})
        }), (0, r.jsx)(f.Mi4, {
          id: N.ij.FRIENDS_BEST,
          children: (0, r.jsx)(U, {
            primaryColor: b,
            sidekick: _
          })
        })]
      })
    }), (0, r.jsx)(c.jxI, {
      ref: R,
      className: D.rive,
      fit: "contain",
      autoplay: false,
      onLoad: H,
      dataBinding: {
        AnimationState: F,
        "Avatar01/img": V(null == _ ? true : _.user),
        "Avatar02/img": V(v),
        "Avatar03/img": V(S),
        "Avatar04/img": V(null == _ ? true : _.user),
        "Avatar05/img": V(I),
        "Avatar01/Username": w,
        "Avatar02/Username": j,
        "Avatar03/Username": G,
        "Avatar04/Username": w,
        twoFriends: Z,
        reducedMotion: B
      },
      withReducedMotion: "play"
    })]
  })
}

function Z() {
  var e;
  let t = (0, Chunk473749.useMemo)(() => (0, Chunk612776._3)(), []),
    n = (0, Chunk473749.useContext)(Chunk324060.Q),
    a = (0, Chunk481060.dQu)(require.primaryColor).hex(),
    d = (0, Chunk473749.useRef)(null),
    [p, h] = (0, Chunk473749.useState)((0, Chunk392711.sample)(exports)),
    {
      sidekick: g
    } = (0, Chunk442837.e7)([Chunk5888.Z], () => Chunk5888.Z.getCheckpointData()),
    E = null == Chunk768581 ? true : Chunk768581.user,
    v = (0, Chunk837411.Z)(null != (e = null == Chunk51144 ? true : Chunk51144.id) ? module : "0"),
    I = (0, Chunk442837.e7)([Chunk699516.Z], () => Chunk699516.Z.isBlocked(null == Chunk51144 ? true : Chunk51144.id)),
    T = Chunk26118 && !Chunk909397,
    [A, C] = (0, Chunk473749.useState)(false),
    x = Chunk225055 || null == Chunk607070 || Chunk607070.length < 1 || Chunk607070.length > j,
    L = (0, Chunk989392.T)(Chunk481743.Z),
    M = Chunk225055 ? Chunk388032.intl.string(Chunk388032.t.fjcCk5) : "";
  (0, Chunk473749.useEffect)(() => {
    null != Chunk379649.current && (Chunk379649.current.style.height = "".concat(Math.min(Chunk379649.current.scrollHeight, 140), "px"))
  }, [Chunk607070]);
  let k = (0, Chunk473749.useCallback)(() => {
      if (Chunk225055) return;
      L();
      let e = (0, Chunk392711.sample)(exports);
      for (; null == module || module === Chunk607070;) e = (0, Chunk392711.sample)(exports);
      Chunk594174(module)
    }, [exports, Chunk607070, Chunk225055, L]),
    U = (0, Chunk473749.useCallback)(e => {
      h(e.target.value)
    }, []),
    G = (0, Chunk473749.useCallback)(() => {
      x || (null == Chunk51144 ? true : Chunk51144.id) == null || (L(), (0, Chunk515970.gq)(Chunk607070, null == Chunk51144 ? true : Chunk51144.id), Chunk594174(true), Chunk391876(true))
    }, [x, L, Chunk607070, null == Chunk51144 ? true : Chunk51144.id]);
  return Chunk198358 ? (0, Chunk54381.jsxs)("div", {
    className: Chunk300494.inputWrapper,
    children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-sm/semibold",
      className: Chunk300494.inputCTA,
      style: {
        backgroundColor: Chunk120356
      },
      children: Chunk388032.intl.string(Chunk140939.default["//ZYM/"])
    }), (0, Chunk54381.jsx)("textarea", {
      ref: Chunk379649,
      onChange: U,
      value: null != Chunk607070 ? Chunk607070 : M,
      className: Chunk300494.input,
      style: {
        color: Chunk120356,
        scrollbarColor: "".concat(Chunk120356, " black")
      },
      maxLength: j + 1,
      disabled: Chunk225055
    }), (0, Chunk54381.jsxs)("div", {
      className: Chunk300494.actions,
      children: [(0, Chunk54381.jsx)(Chunk793030.P3F, {
        onClick: k,
        "aria-disabled": Chunk225055,
        className: o()(Chunk417788.clickable, {
          [Chunk300494.disabled]: Chunk225055
        }),
        children: (0, Chunk54381.jsx)(Chunk793030.kBK, {
          color: Chunk120356,
          colorClass: Chunk417788.iconColor
        })
      }), (0, Chunk54381.jsx)(Chunk793030.P3F, {
        onClick: G,
        "aria-disabled": Chunk225055 || x,
        className: o()(Chunk417788.clickable, {
          [Chunk300494.disabled]: Chunk225055 || x
        }),
        children: (0, Chunk54381.jsx)(Chunk793030.Uuj, {
          color: Chunk120356,
          colorClass: Chunk417788.iconColor
        })
      })]
    })]
  }) : null
}