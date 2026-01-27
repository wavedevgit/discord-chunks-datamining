/** Chunk was on 20941 **/
/** chunk id: 480310, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => k
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
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

function R(e) {
  let {
    primaryColor: t
  } = e;
  return (0, r.jsxs)("div", {
    className: T.Qs,
    children: [(0, r.jsxs)("div", {
      className: w.DD,
      children: [(0, r.jsx)(c.$yI, {
        size: "refresh_sm",
        color: t,
        colorClass: w.d7,
        className: w.gr
      }), (0, r.jsx)(S.A, {
        variant: "eyebrow",
        className: w.UP,
        children: P.intl.string(I.default.ZQakPR)
      })]
    }), (0, r.jsx)(S.A, {
      variant: "display-lg",
      className: T.Vy,
      children: P.intl.string(I.default.OzY5Ns)
    }), (0, r.jsx)(S.A, {
      variant: "heading-xxl/medium",
      className: T.VA,
      children: P.intl.string(I.default.sEPtGY)
    }), (0, r.jsx)(A.e, {
      slide: N.P7.FRIENDS
    })]
  })
}

function L() {
  return (0, r.jsx)("div", {
    className: T.Qs,
    children: (0, r.jsx)(S.A, {
      variant: "heading-xxl/medium",
      children: P.intl.string(I.default.d5HUsD)
    })
  })
}

function D(e) {
  var t;
  let {
    primaryColor: n,
    sidekick: l
  } = e, {
    unit: a,
    duration: s
  } = (0, C.oO)(null != (t = null == l ? true : l.numVoiceMinutes) ? t : 0);
  return (0, r.jsxs)("div", {
    className: T.Qs,
    children: [(0, r.jsxs)("div", {
      className: w.DD,
      children: [(0, r.jsx)(c.$yI, {
        size: "refresh_sm",
        color: n,
        colorClass: w.d7,
        className: w.gr
      }), (0, r.jsx)(S.A, {
        variant: "eyebrow",
        className: w.UP,
        children: P.intl.string(I.default.ZQakPR)
      })]
    }), (0, r.jsx)(S.A, {
      variant: "display-lg",
      className: i()(T.Vy, T.VA),
      children: P.intl.string(I.default["+uwOHt"])
    }), (0, r.jsxs)("div", {
      className: T.M1,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(S.A, {
          variant: "eyebrow",
          children: P.intl.string(I.default.wWKySP)
        }), (0, r.jsx)(S.A, {
          variant: "heading-xxl/normal",
          className: w.sH,
          children: null == l ? true : l.numMessagesSent
        })]
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(S.A, {
          variant: "eyebrow",
          children: a === d.pJ.HOURS ? P.intl.format(I.default.Xu0QsX, {
            numHours: s
          }) : P.intl.string(I.default.RmVTph)
        }), (0, r.jsx)(S.A, {
          variant: "heading-xxl/normal",
          className: w.sH,
          children: s
        })]
      })]
    }), (0, r.jsx)(M, {})]
  })
}

function k(e) {
  var t, n, a;
  let {
    step: i,
    onNextStep: s,
    onPreviousStep: o
  } = e, {
    users: d = [],
    sidekick: p
  } = (0, u.bG)([j.A], () => j.A.getCheckpointData()), h = (0, l.useContext)(v.P), y = (0, m.rdh)(h.primaryColor).hex(), C = d[1], _ = d[0], A = (0, u.bG)([b.default], () => b.default.getCurrentUser()), S = (0, l.useRef)(0), I = (0, l.useRef)(true), P = (0, l.useRef)(null), w = null != (t = (0, x.tx)(null == p ? true : p.user)) ? t : "", k = null != (n = (0, x.tx)(C)) ? n : "", M = null != (a = (0, x.tx)(_)) ? a : "", H = 1 === d.length, U = (0, u.bG)([f.A], () => f.A.useReducedMotion);
  (0, l.useEffect)(() => (i === N.Wf.FRIENDS_LEAVE && (I.current ? o() : U ? (s(), I.current = true) : S.current = setTimeout(() => {
    s(), I.current = true
  }, 1e3)), () => clearTimeout(S.current)), [s, o, U, i]);
  let F = (0, l.useMemo)(() => {
      switch (i) {
        case N.Wf.FRIENDS_INTRO:
          return 1;
        case N.Wf.FRIENDS_TRANSITION:
          return 2;
        case N.Wf.FRIENDS_BEST:
          return 3;
        case N.Wf.FRIENDS_LEAVE:
          return U ? 3 : 4;
        default:
          return 0
      }
    }, [i, U]),
    G = (0, l.useCallback)(e => null != e ? g.Ay.getUserAvatarURL(e, false, 64, "png") : true, []);
  (0, l.useEffect)(() => () => clearTimeout(S.current), []), (0, l.useEffect)(() => {
    i !== N.Wf.FRIENDS_LEAVE && (I.current = false)
  }, [i]);
  let V = (0, l.useCallback)(() => {
      let e = setInterval(() => {
        var t, n;
        let r = null == (t = P.current) ? true : t.getProperties();
        null != P.current && (null == r ? true : r.twoFriends.value) === H && (null == r ? true : r.reducedMotion.value) === U && (null == (n = P.current) || n.play(), clearInterval(e))
      }, 50);
      return () => clearInterval(e)
    }, [U, H]),
    B = (0, l.useMemo)(() => i < N.Wf.FRIENDS_INTRO ? N.Wf.FRIENDS_INTRO : i >= N.Wf.FRIENDS_BEST ? N.Wf.FRIENDS_BEST : i, [i]);
  return (0, r.jsxs)(O.A, {
    children: [(0, r.jsx)(c.m0T, {
      ref: P,
      className: T.lW,
      fit: "contain",
      autoplay: false,
      onLoad: V,
      dataBinding: {
        AnimationState: F,
        "Avatar01/img": G(null == p ? true : p.user),
        "Avatar02/img": G(C),
        "Avatar03/img": G(_),
        "Avatar04/img": G(null == p ? true : p.user),
        "Avatar05/img": G(A),
        "Avatar01/Username": w,
        "Avatar02/Username": k,
        "Avatar03/Username": M,
        "Avatar04/Username": w,
        twoFriends: H,
        reducedMotion: U
      },
      withReducedMotion: "play"
    }), (0, r.jsx)("div", {
      className: T.kL,
      children: (0, r.jsxs)(E.Ay, {
        activeSlide: B,
        className: T.oE,
        slideClassName: T.JO,
        children: [(0, r.jsx)(m.q7S, {
          id: N.Wf.FRIENDS_INTRO,
          children: (0, r.jsx)(R, {
            primaryColor: y
          })
        }), (0, r.jsx)(m.q7S, {
          id: N.Wf.FRIENDS_TRANSITION,
          children: (0, r.jsx)(L, {})
        }), (0, r.jsx)(m.q7S, {
          id: N.Wf.FRIENDS_BEST,
          children: (0, r.jsx)(D, {
            primaryColor: y,
            sidekick: p
          })
        })]
      })
    })]
  })
}

function M() {
  var e;
  let t = (0, l.useMemo)(() => (0, N.qk)(), []),
    n = (0, l.useContext)(v.P),
    a = (0, m.rdh)(n.primaryColor).hex(),
    d = (0, l.useRef)(null),
    [f, b] = (0, l.useState)((0, s.sample)(t)),
    {
      sidekick: g
    } = (0, u.bG)([j.A], () => j.A.getCheckpointData()),
    x = null == g ? true : g.user,
    C = (0, p.A)(null != (e = null == x ? true : x.id) ? e : "0"),
    A = (0, u.bG)([h.A], () => h.A.isBlocked(null == x ? true : x.id)),
    [O, E] = (0, l.useState)(false),
    S = O || null == f || f.length < 1 || f.length > 250,
    R = (0, _.V)(o.A),
    L = O ? P.intl.string(P.t.fjcCk5) : "";
  (0, l.useEffect)(() => {
    null != d.current && (d.current.style.height = "".concat(Math.min(d.current.scrollHeight, 140), "px"))
  }, [f]);
  let D = (0, l.useCallback)(() => {
      if (O) return;
      R();
      let e = (0, s.sample)(t);
      for (; null == e || e === f;) e = (0, s.sample)(t);
      b(e)
    }, [t, f, O, R]),
    k = (0, l.useCallback)(e => {
      b(e.target.value)
    }, []),
    M = (0, l.useCallback)(() => {
      S || (null == x ? true : x.id) == null || (R(), (0, y.fr)(f, null == x ? true : x.id), b(true), E(true))
    }, [S, R, f, null == x ? true : x.id]);
  return C && !A ? (0, r.jsxs)("div", {
    className: T.I6,
    children: [(0, r.jsx)(m.Text, {
      variant: "text-sm/semibold",
      className: T.L8,
      style: {
        backgroundColor: a
      },
      children: P.intl.string(I.default["//ZYM/"])
    }), (0, r.jsx)("textarea", {
      ref: d,
      onChange: k,
      value: null != f ? f : L,
      className: T.hF,
      style: {
        color: a,
        scrollbarColor: "".concat(a, " black")
      },
      maxLength: 251,
      disabled: O
    }), (0, r.jsxs)("div", {
      className: T.o1,
      children: [(0, r.jsx)(c.DUT, {
        onClick: D,
        "aria-disabled": O,
        className: i()(w.vk, {
          [T.r9]: O
        }),
        children: (0, r.jsx)(c.jGc, {
          color: a,
          colorClass: w.d7
        })
      }), (0, r.jsx)(c.DUT, {
        onClick: M,
        "aria-disabled": O || S,
        className: i()(w.vk, {
          [T.r9]: O || S
        }),
        children: (0, r.jsx)(c.lX7, {
          color: a,
          colorClass: w.d7
        })
      })]
    })]
  }) : null
}