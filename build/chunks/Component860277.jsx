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
  Chunk594931 = require("./594931.js"),
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
  Chunk638398 = require("./638398.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk554445 = require("./554445.js"),
  Chunk556329 = require("./556329.js");
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
      }), (0, r.jsx)(A.Z, {
        variant: "eyebrow",
        className: w.eyebrow,
        children: R.intl.string(P.default.ZQakPR)
      })]
    }), (0, r.jsx)(A.Z, {
      variant: "display-lg",
      className: D.display,
      children: R.intl.string(P.default.OzY5Ns)
    }), (0, r.jsx)(A.Z, {
      variant: "heading-xxl/medium",
      className: D.subtitle,
      children: R.intl.string(P.default.sEPtGY)
    }), (0, r.jsx)(I.o, {
      slide: N.yD.FRIENDS
    })]
  })
}

function k() {
  return (0, r.jsx)("div", {
    className: D.content,
    children: (0, r.jsx)(A.Z, {
      variant: "heading-xxl/medium",
      children: R.intl.string(P.default.d5HUsD)
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
      }), (0, r.jsx)(A.Z, {
        variant: "eyebrow",
        className: w.eyebrow,
        children: R.intl.string(P.default.ZQakPR)
      })]
    }), (0, r.jsx)(A.Z, {
      variant: "display-lg",
      className: o()(D.display, D.subtitle),
      children: R.intl.string(P.default["+uwOHt"])
    }), (0, r.jsxs)("div", {
      className: D.stats,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(A.Z, {
          variant: "eyebrow",
          children: R.intl.string(P.default.wWKySP)
        }), (0, r.jsx)(A.Z, {
          variant: "heading-xxl/normal",
          className: w.numeric,
          children: null == i ? true : i.numMessagesSent
        })]
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(A.Z, {
          variant: "eyebrow",
          children: a === d.J6.HOURS ? R.intl.format(P.default.Xu0QsX, {
            numHours: s
          }) : R.intl.string(P.default.RmVTph)
        }), (0, r.jsx)(A.Z, {
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
  } = (0, u.e7)([O.Z], () => O.Z.getCheckpointData()), m = (0, i.useContext)(y.Q), b = (0, f.dQu)(m.primaryColor).hex(), v = d[1], S = d[0], I = (0, u.e7)([h.default], () => h.default.getCurrentUser()), A = (0, i.useRef)(0), P = (0, i.useRef)(true), R = (0, i.useRef)(null), w = null != (t = (0, E._T)(null == _ ? true : _.user)) ? t : "", j = null != (n = (0, E._T)(v)) ? n : "", G = null != (a = (0, E._T)(S)) ? a : "", Z = 1 === d.length, F = (0, u.e7)([p.Z], () => p.Z.useReducedMotion);
  (0, i.useEffect)(() => (o === N.ij.FRIENDS_LEAVE && (P.current ? l() : F ? (s(), P.current = true) : A.current = setTimeout(() => {
    s(), P.current = true
  }, x)), () => clearTimeout(A.current)), [s, l, F, o]);
  let B = (0, i.useMemo)(() => {
      switch (o) {
        case N.ij.FRIENDS_INTRO:
          return 1;
        case N.ij.FRIENDS_TRANSITION:
          return 2;
        case N.ij.FRIENDS_BEST:
          return 3;
        case N.ij.FRIENDS_LEAVE:
          return F ? 3 : 4;
        default:
          return 0
      }
    }, [o, F]),
    V = (0, i.useCallback)(e => null != e ? g.ZP.getUserAvatarURL(e, false, 64, "png") : true, []);
  (0, i.useEffect)(() => () => clearTimeout(A.current), []), (0, i.useEffect)(() => {
    o !== N.ij.FRIENDS_LEAVE && (P.current = false)
  }, [o]);
  let H = (0, i.useCallback)(() => {
      let e = setInterval(() => {
        var t, n;
        let r = null == (t = R.current) ? true : t.getProperties();
        null != R.current && (null == r ? true : r.twoFriends.value) === Z && (null == r ? true : r.reducedMotion.value) === F && (null == (n = R.current) || n.play(), clearInterval(e))
      }, L);
      return () => clearInterval(e)
    }, [F, Z]),
    Y = (0, i.useMemo)(() => o < N.ij.FRIENDS_INTRO ? N.ij.FRIENDS_INTRO : o >= N.ij.FRIENDS_BEST ? N.ij.FRIENDS_BEST : o, [o]);
  return (0, r.jsxs)(T.Z, {
    children: [(0, r.jsx)(c.jxI, {
      ref: R,
      className: D.rive,
      fit: "contain",
      autoplay: false,
      onLoad: H,
      dataBinding: {
        AnimationState: B,
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
        reducedMotion: F
      },
      withReducedMotion: "play"
    }), (0, r.jsx)("div", {
      className: D.container,
      children: (0, r.jsxs)(C.ZP, {
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
    })]
  })
}

function Z() {
  var e;
  let t = (0, i.useMemo)(() => (0, N._3)(), []),
    n = (0, i.useContext)(y.Q),
    a = (0, f.dQu)(n.primaryColor).hex(),
    d = (0, i.useRef)(null),
    [p, h] = (0, i.useState)((0, s.sample)(t)),
    {
      sidekick: g
    } = (0, u.e7)([O.Z], () => O.Z.getCheckpointData()),
    E = null == g ? true : g.user,
    v = (0, _.Z)(null != (e = null == E ? true : E.id) ? e : "0"),
    I = (0, u.e7)([m.Z], () => m.Z.isBlocked(null == E ? true : E.id)),
    T = v && !I,
    [C, A] = (0, i.useState)(false),
    x = C || null == p || p.length < 1 || p.length > j,
    L = (0, S.T)(l.Z),
    M = C ? R.intl.string(R.t.fjcCk5) : "";
  (0, i.useEffect)(() => {
    null != d.current && (d.current.style.height = "".concat(Math.min(d.current.scrollHeight, 140), "px"))
  }, [p]);
  let k = (0, i.useCallback)(() => {
      if (C) return;
      L();
      let e = (0, s.sample)(t);
      for (; null == e || e === p;) e = (0, s.sample)(t);
      h(e)
    }, [t, p, C, L]),
    U = (0, i.useCallback)(e => {
      h(e.target.value)
    }, []),
    G = (0, i.useCallback)(() => {
      x || (null == E ? true : E.id) == null || (L(), (0, b.gq)(p, null == E ? true : E.id), h(true), A(true))
    }, [x, L, p, null == E ? true : E.id]);
  return T ? (0, r.jsxs)("div", {
    className: D.inputWrapper,
    children: [(0, r.jsx)(f.Text, {
      variant: "text-sm/semibold",
      className: D.inputCTA,
      style: {
        backgroundColor: a
      },
      children: R.intl.string(P.default["//ZYM/"])
    }), (0, r.jsx)("textarea", {
      ref: d,
      onChange: U,
      value: null != p ? p : M,
      className: D.input,
      style: {
        color: a,
        scrollbarColor: "".concat(a, " black")
      },
      maxLength: j + 1,
      disabled: C
    }), (0, r.jsxs)("div", {
      className: D.actions,
      children: [(0, r.jsx)(c.P3F, {
        onClick: k,
        "aria-disabled": C,
        className: o()(w.clickable, {
          [D.disabled]: C
        }),
        children: (0, r.jsx)(c.kBK, {
          color: a,
          colorClass: w.iconColor
        })
      }), (0, r.jsx)(c.P3F, {
        onClick: G,
        "aria-disabled": C || x,
        className: o()(w.clickable, {
          [D.disabled]: C || x
        }),
        children: (0, r.jsx)(c.Uuj, {
          color: a,
          colorClass: w.iconColor
        })
      })]
    })]
  }) : null
}