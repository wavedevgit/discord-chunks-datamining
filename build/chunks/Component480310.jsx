/** Chunk was on web.js **/
/** chunk id: 480310, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => G
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk183766 = require("./183766.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk499979 = require("./499979.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk570287 = require("./570287.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk486020 = require("./486020.js"),
  Chunk427262 = require("./427262.js"),
  Chunk796104 = require("./796104.js"),
  Chunk854987 = require("./854987.js"),
  Chunk719718 = require("./719718.js"),
  Chunk57882 = require("./57882.js"),
  Chunk181380 = require("./181380.js"),
  Chunk155286 = require("./155286.jsx"),
  Chunk573138 = require("./573138.jsx"),
  Chunk182417 = require("./182417.jsx"),
  Chunk877272 = require("./877272.jsx"),
  Chunk532294 = require("./532294.js"),
  Chunk622865 = require("./622865.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk308021 = require("./308021.js"),
  Chunk922848 = require("./922848.js");
let x = 1e3,
  L = 50,
  j = 250;

function M(e) {
  let {
    primaryColor: t
  } = e;
  return (0, r.jsxs)("div", {
    className: D.Qs,
    children: [(0, r.jsxs)("div", {
      className: P.DD,
      children: [(0, r.jsx)(c.$yI, {
        size: "refresh_sm",
        color: t,
        colorClass: P.d7,
        className: P.gr
      }), (0, r.jsx)(C.A, {
        variant: "eyebrow",
        className: P.UP,
        children: R.intl.string(w.default.ZQakPR)
      })]
    }), (0, r.jsx)(C.A, {
      variant: "display-lg",
      className: D.Vy,
      children: R.intl.string(w.default.OzY5Ns)
    }), (0, r.jsx)(C.A, {
      variant: "heading-xxl/medium",
      className: D.VA,
      children: R.intl.string(w.default.sEPtGY)
    }), (0, r.jsx)(I.e, {
      slide: N.P7.FRIENDS
    })]
  })
}

function k() {
  return (0, r.jsx)("div", {
    className: D.Qs,
    children: (0, r.jsx)(C.A, {
      variant: "heading-xxl/medium",
      children: R.intl.string(w.default.d5HUsD)
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
    duration: o
  } = (0, v.oO)(null != (t = null == i ? true : i.numVoiceMinutes) ? t : 0);
  return (0, r.jsxs)("div", {
    className: D.Qs,
    children: [(0, r.jsxs)("div", {
      className: P.DD,
      children: [(0, r.jsx)(c.$yI, {
        size: "refresh_sm",
        color: n,
        colorClass: P.d7,
        className: P.gr
      }), (0, r.jsx)(C.A, {
        variant: "eyebrow",
        className: P.UP,
        children: R.intl.string(w.default.ZQakPR)
      })]
    }), (0, r.jsx)(C.A, {
      variant: "display-lg",
      className: s()(D.Vy, D.VA),
      children: R.intl.string(w.default["+uwOHt"])
    }), (0, r.jsxs)("div", {
      className: D.M1,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(C.A, {
          variant: "eyebrow",
          children: R.intl.string(w.default.wWKySP)
        }), (0, r.jsx)(C.A, {
          variant: "heading-xxl/normal",
          className: P.sH,
          children: null == i ? true : i.numMessagesSent
        })]
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(C.A, {
          variant: "eyebrow",
          children: a === d.pJ.HOURS ? R.intl.format(w.default.Xu0QsX, {
            numHours: o
          }) : R.intl.string(w.default.RmVTph)
        }), (0, r.jsx)(C.A, {
          variant: "heading-xxl/normal",
          className: P.sH,
          children: o
        })]
      })]
    }), (0, r.jsx)(V, {})]
  })
}

function G(e) {
  var t, n, a;
  let {
    step: s,
    onNextStep: o,
    onPreviousStep: l
  } = e, {
    users: d = [],
    sidekick: _
  } = (0, u.bG)([O.A], () => O.A.getCheckpointData()), h = (0, i.useContext)(b.P), y = (0, f.rdh)(h.primaryColor).hex(), v = d[1], A = d[0], I = (0, u.bG)([m.default], () => m.default.getCurrentUser()), C = (0, i.useRef)(0), w = (0, i.useRef)(true), R = (0, i.useRef)(null), P = null != (t = (0, E.tx)(null == _ ? true : _.user)) ? t : "", j = null != (n = (0, E.tx)(v)) ? n : "", G = null != (a = (0, E.tx)(A)) ? a : "", V = 1 === d.length, F = (0, u.bG)([p.A], () => p.A.useReducedMotion);
  (0, i.useEffect)(() => (s === N.Wf.FRIENDS_LEAVE && (w.current ? l() : F ? (o(), w.current = true) : C.current = setTimeout(() => {
    o(), w.current = true
  }, x)), () => clearTimeout(C.current)), [o, l, F, s]);
  let B = (0, i.useMemo)(() => {
      switch (s) {
        case N.Wf.FRIENDS_INTRO:
          return 1;
        case N.Wf.FRIENDS_TRANSITION:
          return 2;
        case N.Wf.FRIENDS_BEST:
          return 3;
        case N.Wf.FRIENDS_LEAVE:
          return F ? 3 : 4;
        default:
          return 0
      }
    }, [s, F]),
    H = (0, i.useCallback)(e => null != e ? g.Ay.getUserAvatarURL(e, false, 64, "png") : true, []);
  (0, i.useEffect)(() => () => clearTimeout(C.current), []), (0, i.useEffect)(() => {
    s !== N.Wf.FRIENDS_LEAVE && (w.current = false)
  }, [s]);
  let Y = (0, i.useCallback)(() => {
      let e = setInterval(() => {
        var t, n;
        let r = null == (t = R.current) ? true : t.getProperties();
        null != R.current && (null == r ? true : r.twoFriends.value) === V && (null == r ? true : r.reducedMotion.value) === F && (null == (n = R.current) || n.play(), clearInterval(e))
      }, L);
      return () => clearInterval(e)
    }, [F, V]),
    W = (0, i.useMemo)(() => s < N.Wf.FRIENDS_INTRO ? N.Wf.FRIENDS_INTRO : s >= N.Wf.FRIENDS_BEST ? N.Wf.FRIENDS_BEST : s, [s]);
  return (0, r.jsxs)(S.A, {
    children: [(0, r.jsx)(c.m0T, {
      ref: R,
      className: D.lW,
      fit: "contain",
      autoplay: false,
      onLoad: Y,
      dataBinding: {
        AnimationState: B,
        "Avatar01/img": H(null == _ ? true : _.user),
        "Avatar02/img": H(v),
        "Avatar03/img": H(A),
        "Avatar04/img": H(null == _ ? true : _.user),
        "Avatar05/img": H(I),
        "Avatar01/Username": P,
        "Avatar02/Username": j,
        "Avatar03/Username": G,
        "Avatar04/Username": P,
        twoFriends: V,
        reducedMotion: F
      },
      withReducedMotion: "play"
    }), (0, r.jsx)("div", {
      className: D.kL,
      children: (0, r.jsxs)(T.Ay, {
        activeSlide: W,
        className: D.oE,
        slideClassName: D.JO,
        children: [(0, r.jsx)(f.q7S, {
          id: N.Wf.FRIENDS_INTRO,
          children: (0, r.jsx)(M, {
            primaryColor: y
          })
        }), (0, r.jsx)(f.q7S, {
          id: N.Wf.FRIENDS_TRANSITION,
          children: (0, r.jsx)(k, {})
        }), (0, r.jsx)(f.q7S, {
          id: N.Wf.FRIENDS_BEST,
          children: (0, r.jsx)(U, {
            primaryColor: y,
            sidekick: _
          })
        })]
      })
    })]
  })
}

function V() {
  var e;
  let t = (0, i.useMemo)(() => (0, N.qk)(), []),
    n = (0, i.useContext)(b.P),
    a = (0, f.rdh)(n.primaryColor).hex(),
    d = (0, i.useRef)(null),
    [p, m] = (0, i.useState)((0, o.sample)(t)),
    {
      sidekick: g
    } = (0, u.bG)([O.A], () => O.A.getCheckpointData()),
    E = null == g ? true : g.user,
    v = (0, _.A)(null != (e = null == E ? true : E.id) ? e : "0"),
    I = (0, u.bG)([h.A], () => h.A.isBlocked(null == E ? true : E.id)),
    S = v && !I,
    [T, C] = (0, i.useState)(false),
    x = T || null == p || p.length < 1 || p.length > j,
    L = (0, A.V)(l.A),
    M = T ? R.intl.string(R.t.fjcCk5) : "";
  (0, i.useEffect)(() => {
    null != d.current && (d.current.style.height = "".concat(Math.min(d.current.scrollHeight, 140), "px"))
  }, [p]);
  let k = (0, i.useCallback)(() => {
      if (T) return;
      L();
      let e = (0, o.sample)(t);
      for (; null == e || e === p;) e = (0, o.sample)(t);
      m(e)
    }, [t, p, T, L]),
    U = (0, i.useCallback)(e => {
      m(e.target.value)
    }, []),
    G = (0, i.useCallback)(() => {
      x || (null == E ? true : E.id) == null || (L(), (0, y.fr)(p, null == E ? true : E.id), m(true), C(true))
    }, [x, L, p, null == E ? true : E.id]);
  return S ? (0, r.jsxs)("div", {
    className: D.I6,
    children: [(0, r.jsx)(f.Text, {
      variant: "text-sm/semibold",
      className: D.L8,
      style: {
        backgroundColor: a
      },
      children: R.intl.string(w.default["//ZYM/"])
    }), (0, r.jsx)("textarea", {
      ref: d,
      onChange: U,
      value: null != p ? p : M,
      className: D.hF,
      style: {
        color: a,
        scrollbarColor: "".concat(a, " black")
      },
      maxLength: j + 1,
      disabled: T
    }), (0, r.jsxs)("div", {
      className: D.o1,
      children: [(0, r.jsx)(c.DUT, {
        onClick: k,
        "aria-disabled": T,
        className: s()(P.vk, {
          [D.r9]: T
        }),
        children: (0, r.jsx)(c.jGc, {
          color: a,
          colorClass: P.d7
        })
      }), (0, r.jsx)(c.DUT, {
        onClick: G,
        "aria-disabled": T || x,
        className: s()(P.vk, {
          [D.r9]: T || x
        }),
        children: (0, r.jsx)(c.lX7, {
          color: a,
          colorClass: P.d7
        })
      })]
    })]
  }) : null
}