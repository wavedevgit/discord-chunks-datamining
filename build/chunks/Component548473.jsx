/** Chunk was on 58227 **/
/** chunk id: 548473, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B0: () => P,
  ZP: () => L,
  _I: () => A,
  xm: () => C
}), require("./49124.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk500923 = require("./500923.js"),
  o = require.n(Chunk500923),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk607070 = require("./607070.js"),
  Chunk367907 = require("./367907.js"),
  Chunk601964 = require("./601964.js"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
  Chunk956664 = require("./956664.js"),
  Chunk45966 = require("./45966.js"),
  Chunk819553 = require("./819553.js"),
  Chunk487533 = require("./487533.js"),
  Chunk279876 = require("./279876.js"),
  Chunk180504 = require("./180504.js"),
  Chunk790711 = require("./790711.js"),
  Chunk535170 = require("./535170.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk104158 = require("./104158.js");

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function G(e) {
  let t = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
    n = r.useRef(null);
  return r.useEffect(() => {
    let l;
    return null != n.current && (l = o().loadAnimation({
      container: n.current,
      renderer: "svg",
      loop: true,
      autoplay: !t,
      animationData: JSON.parse(JSON.stringify(e))
    })), () => {
      null == l || l.destroy()
    }
  }, [n, t, e]), n
}

function C() {
  let e = G(Chunk180504);
  return (0, Chunk951288.jsx)("div", {
    className: a()(Chunk104158.leftArt, Chunk104158.altFloat),
    children: (0, Chunk951288.jsx)("div", {
      ref: module,
      className: Chunk104158.grillingIsland
    })
  })
}

function P() {
  let e = G(Chunk535170);
  return (0, Chunk951288.jsx)("div", {
    className: a()(Chunk104158.rightArt, Chunk104158.altFloat),
    children: (0, Chunk951288.jsx)("div", {
      ref: module,
      className: Chunk104158.waffleIsland
    })
  })
}

function A(e) {
  let {
    guild: t,
    mainIslandClassName: n,
    balloonDogClassName: i
  } = e, s = (0, c.e7)([m.Z], () => m.Z.useReducedMotion), d = r.useRef(null), u = G(S), g = N.ZP.getGuildIconURL({
    id: t.id,
    icon: t.icon,
    size: 96
  });
  return r.useEffect(() => {
    let e;
    return null != d.current && null != g ? (0, I.OF)(g).then(t => {
      let n = (0, E.Z)(JSON.parse(JSON.stringify(T)), g, t[0]);
      e = o().loadAnimation({
        container: d.current,
        renderer: "svg",
        loop: true,
        autoplay: !s,
        animationData: n
      })
    }) : null != d.current && (e = o().loadAnimation({
      container: d.current,
      renderer: "svg",
      loop: true,
      autoplay: !s,
      animationData: JSON.parse(JSON.stringify(T))
    })), () => {
      null == e || e.destroy()
    }
  }, [g, d, s]), (0, l.jsxs)("div", {
    className: a()(b.centerArt, b.float),
    children: [(0, l.jsx)("div", {
      className: a()(b.balloonDog, i),
      ref: u
    }), (0, l.jsx)("div", {
      className: a()(b.mainIsland, n),
      ref: d
    })]
  })
}

function L(e) {
  let {
    guild: t,
    onStart: n,
    onboardingStatus: i,
    headerId: a,
    disableTracking: s
  } = e, o = (0, c.e7)([p.Z], () => p.Z.isLoading()), m = r.useRef(false);
  r.useEffect(() => {
    if (!s) return f.default.track(j.rMx.GUILD_ONBOARDING_STEP_VIEWED, y(D({}, (0, g.hH)(t.id)), {
      step: false,
      required: true
    })), () => {
      f.default.track(j.rMx.GUILD_ONBOARDING_STEP_COMPLETED, y(D({}, (0, g.hH)(t.id)), {
        step: false,
        skipped: !m.current,
        is_final_step: false,
        in_onboarding: true
      }))
    }
  }, [t.id, m, s]);
  let N = r.useMemo(() => (0, h.EB)(t, 135, false, true), [t]);
  return (0, u.ZP)(() => {
    setTimeout(() => {
      m.current = true, n()
    }, 3e3)
  }), (0, l.jsx)("div", {
    className: b.coverContainer,
    children: (0, l.jsxs)("div", {
      className: b.centerContent,
      children: [(0, l.jsx)("div", {
        children: (0, l.jsx)("img", {
          className: b.guildImage,
          src: N,
          alt: ""
        })
      }), (0, l.jsxs)("div", {
        className: b.coverContent,
        children: [(0, l.jsx)(d.Text, {
          className: b.coverTitle,
          variant: "text-lg/normal",
          color: "always-white",
          id: a,
          children: v.intl.format(v.t["j59F/c"], {
            guildName: null == t ? true : t.name
          })
        }), o ? (0, l.jsx)(d.$jN, {
          className: b.__invalid_subtitle
        }) : i === O.uX.NOT_APPLICABLE ? (0, l.jsx)(d.Heading, {
          className: b.__invalid_subtitle,
          variant: "heading-xxl/normal",
          color: "always-white",
          children: v.intl.string(v.t.Q5ibtV)
        }) : (0, l.jsx)(d.Heading, {
          className: b.__invalid_subtitle,
          variant: "heading-xxl/normal",
          color: "always-white",
          children: v.intl.string(v.t["Alcl/e"])
        })]
      })]
    })
  })
}