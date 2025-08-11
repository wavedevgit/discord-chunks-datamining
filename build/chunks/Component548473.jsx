/** Chunk was on 44156 **/
/** chunk id: 548473, original params: a,i,x (module,exports,require) **/
require.d(exports, {
  B0: () => w,
  ZP: () => L,
  _I: () => j,
  xm: () => T
}), require("./49124.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk500923 = require("./500923.js"),
  n = require.n(Chunk500923),
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
  Chunk597094 = require("./597094.js");

function S(a) {
  for (var i = 1; i < arguments.length; i++) {
    var x = null != arguments[i] ? arguments[i] : {},
      k = Object.keys(x);
    "function" == typeof Object.getOwnPropertySymbols && (k = k.concat(Object.getOwnPropertySymbols(x).filter(function(a) {
      return Object.getOwnPropertyDescriptor(x, a).enumerable
    }))), k.forEach(function(i) {
      var k;
      k = x[i], i in a ? Object.defineProperty(a, i, {
        value: k,
        enumerable: true,
        configurable: true,
        writable: true
      }) : a[i] = k
    })
  }
  return a
}

function v(a, i) {
  return i = null != i ? i : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i)) : (function(a, i) {
    var x = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var k = Object.getOwnPropertySymbols(a);
      x.push.apply(x, k)
    }
    return x
  })(Object(i)).forEach(function(x) {
    Object.defineProperty(a, x, Object.getOwnPropertyDescriptor(i, x))
  }), a
}

function P(a) {
  let i = (0, m.e7)([l.Z], () => l.Z.useReducedMotion),
    x = r.useRef(null);
  return r.useEffect(() => {
    let k;
    return null != x.current && (k = n().loadAnimation({
      container: x.current,
      renderer: "svg",
      loop: true,
      autoplay: !i,
      animationData: JSON.parse(JSON.stringify(a))
    })), () => {
      null == k || k.destroy()
    }
  }, [x, i, a]), x
}

function T() {
  let a = P(Chunk180504);
  return (0, Chunk255367.jsx)("div", {
    className: s()(Chunk597094.leftArt, Chunk597094.altFloat),
    children: (0, Chunk255367.jsx)("div", {
      ref: module,
      className: Chunk597094.grillingIsland
    })
  })
}

function w() {
  let a = P(Chunk535170);
  return (0, Chunk255367.jsx)("div", {
    className: s()(Chunk597094.rightArt, Chunk597094.altFloat),
    children: (0, Chunk255367.jsx)("div", {
      ref: module,
      className: Chunk597094.waffleIsland
    })
  })
}

function j(a) {
  let {
    guild: i,
    mainIslandClassName: x,
    balloonDogClassName: t
  } = a, o = (0, m.e7)([l.Z], () => l.Z.useReducedMotion), e = r.useRef(null), p = P(D), h = y.ZP.getGuildIconURL({
    id: i.id,
    icon: i.icon,
    size: 96
  });
  return r.useEffect(() => {
    let a;
    return null != e.current && null != h ? (0, f.OF)(h).then(i => {
      let x = (0, A.Z)(JSON.parse(JSON.stringify(B)), h, i[0]);
      a = n().loadAnimation({
        container: e.current,
        renderer: "svg",
        loop: true,
        autoplay: !o,
        animationData: x
      })
    }) : null != e.current && (a = n().loadAnimation({
      container: e.current,
      renderer: "svg",
      loop: true,
      autoplay: !o,
      animationData: JSON.parse(JSON.stringify(B))
    })), () => {
      null == a || a.destroy()
    }
  }, [h, e, o]), (0, k.jsxs)("div", {
    className: s()(g.centerArt, g.float),
    children: [(0, k.jsx)("div", {
      className: s()(g.balloonDog, t),
      ref: p
    }), (0, k.jsx)("div", {
      className: s()(g.mainIsland, x),
      ref: e
    })]
  })
}

function L(a) {
  let {
    guild: i,
    onStart: x,
    onboardingStatus: t,
    headerId: s,
    disableTracking: o
  } = a, n = (0, m.e7)([u.Z], () => u.Z.isLoading()), l = r.useRef(false);
  r.useEffect(() => {
    if (!o) return c.default.track(b.rMx.GUILD_ONBOARDING_STEP_VIEWED, v(S({}, (0, h.hH)(i.id)), {
      step: false,
      required: true
    })), () => {
      c.default.track(b.rMx.GUILD_ONBOARDING_STEP_COMPLETED, v(S({}, (0, h.hH)(i.id)), {
        step: false,
        skipped: !l.current,
        is_final_step: false,
        in_onboarding: true
      }))
    }
  }, [i.id, l, o]);
  let y = r.useMemo(() => (0, d.EB)(i, 135, false, true), [i]),
    f = () => {
      l.current = true, x()
    };
  return (0, p.ZP)(() => {
    setTimeout(() => {
      f()
    }, 3e3)
  }), (0, k.jsx)("div", {
    className: g.coverContainer,
    children: (0, k.jsxs)("div", {
      className: g.centerContent,
      children: [(0, k.jsx)("div", {
        children: (0, k.jsx)("img", {
          className: g.guildImage,
          src: y,
          alt: ""
        })
      }), (0, k.jsxs)("div", {
        className: g.coverContent,
        children: [(0, k.jsx)(e.Text, {
          className: g.coverTitle,
          variant: "text-lg/normal",
          color: "always-white",
          id: s,
          children: F.intl.format(F.t["j59F/f"], {
            guildName: null == i ? true : i.name
          })
        }), n ? (0, k.jsx)(e.$jN, {
          className: g.__invalid_subtitle
        }) : t === G.uX.NOT_APPLICABLE ? (0, k.jsx)(e.X6q, {
          className: g.__invalid_subtitle,
          variant: "heading-xxl/normal",
          color: "always-white",
          children: F.intl.string(F.t.Q5ibtb)
        }) : (0, k.jsx)(e.X6q, {
          className: g.__invalid_subtitle,
          variant: "heading-xxl/normal",
          color: "always-white",
          children: F.intl.string(F.t["Alcl/f"])
        })]
      })]
    })
  })
}