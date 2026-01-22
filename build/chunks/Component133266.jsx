/** Chunk was on 50796 **/
/** chunk id: 133266, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => L,
  Mm: () => G,
  RA: () => P,
  j5: () => C
}), require("./457529.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk883885 = require("./883885.js"),
  o = require.n(Chunk883885),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk775602 = require("./775602.js"),
  Chunk58149 = require("./58149.js"),
  Chunk260509 = require("./260509.js"),
  Chunk954571 = require("./954571.js"),
  Chunk486020 = require("./486020.js"),
  Chunk515718 = require("./515718.js"),
  Chunk591552 = require("./591552.js"),
  Chunk713125 = require("./713125.js"),
  Chunk71876 = require("./71876.js"),
  Chunk739408 = require("./739408.js"),
  Chunk113473 = require("./113473.js"),
  Chunk694268 = require("./694268.js"),
  Chunk896018 = require("./896018.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk986700 = require("./986700.js");

function v(e) {
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

function D(e, t) {
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

function y(e) {
  let t = (0, c.bG)([m.A], () => m.A.useReducedMotion),
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

function G() {
  let e = y(A);
  return (0, l.jsx)("div", {
    className: s()(b.vV, b.KP),
    children: (0, l.jsx)("div", {
      ref: e,
      className: b.yi
    })
  })
}

function P() {
  let e = y(_);
  return (0, l.jsx)("div", {
    className: s()(b.M8, b.KP),
    children: (0, l.jsx)("div", {
      ref: e,
      className: b.D8
    })
  })
}

function C(e) {
  let {
    guild: t,
    mainIslandClassName: n,
    balloonDogClassName: i
  } = e, a = (0, c.bG)([m.A], () => m.A.useReducedMotion), d = r.useRef(null), u = y(E), g = N.Ay.getGuildIconURL({
    id: t.id,
    icon: t.icon,
    size: 96
  });
  return r.useEffect(() => {
    let e;
    return null != d.current && null != g ? (0, I.S4)(g).then(t => {
      let n = (0, S.A)(JSON.parse(JSON.stringify(x)), g, t[0]);
      e = o().loadAnimation({
        container: d.current,
        renderer: "svg",
        loop: true,
        autoplay: !a,
        animationData: n
      })
    }) : null != d.current && (e = o().loadAnimation({
      container: d.current,
      renderer: "svg",
      loop: true,
      autoplay: !a,
      animationData: JSON.parse(JSON.stringify(x))
    })), () => {
      null == e || e.destroy()
    }
  }, [g, d, a]), (0, l.jsxs)("div", {
    className: s()(b.tu, b.fV),
    children: [(0, l.jsx)("div", {
      className: s()(b.Sb, i),
      ref: u
    }), (0, l.jsx)("div", {
      className: s()(b.$h, n),
      ref: d
    })]
  })
}

function L(e) {
  let {
    guild: t,
    onStart: n,
    onboardingStatus: i,
    headerId: s,
    disableTracking: a
  } = e, o = (0, c.bG)([p.A], () => p.A.isLoading()), m = r.useRef(false);
  r.useEffect(() => {
    if (!a) return h.default.track(j.HAw.GUILD_ONBOARDING_STEP_VIEWED, D(v({}, (0, g.H$)(t.id)), {
      step: false,
      required: true
    })), () => {
      h.default.track(j.HAw.GUILD_ONBOARDING_STEP_COMPLETED, D(v({}, (0, g.H$)(t.id)), {
        step: false,
        skipped: !m.current,
        is_final_step: false,
        in_onboarding: true
      }))
    }
  }, [t.id, m, a]);
  let N = r.useMemo(() => (0, f.Iv)(t, 135, false, true), [t]);
  return (0, u.Ay)(() => {
    setTimeout(() => {
      m.current = true, n()
    }, 3e3)
  }), (0, l.jsx)("div", {
    className: b.PY,
    children: (0, l.jsxs)("div", {
      className: b.Fo,
      children: [(0, l.jsx)("div", {
        children: (0, l.jsx)("img", {
          className: b.D3,
          src: N,
          alt: ""
        })
      }), (0, l.jsxs)("div", {
        className: b.rD,
        children: [(0, l.jsx)(d.Text, {
          className: b.CH,
          variant: "text-lg/normal",
          color: "always-white",
          id: s,
          children: T.intl.format(T.t["j59F/c"], {
            guildName: null == t ? true : t.name
          })
        }), o ? (0, l.jsx)(d.y$y, {
          className: b.__invalid_subtitle
        }) : i === O.$o.NOT_APPLICABLE ? (0, l.jsx)(d.Heading, {
          className: b.__invalid_subtitle,
          variant: "heading-xxl/normal",
          color: "always-white",
          children: T.intl.string(T.t.Q5ibtV)
        }) : (0, l.jsx)(d.Heading, {
          className: b.__invalid_subtitle,
          variant: "heading-xxl/normal",
          color: "always-white",
          children: T.intl.string(T.t["Alcl/e"])
        })]
      })]
    })
  })
}