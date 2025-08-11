/** Chunk was on web.js **/
/** chunk id: 639539, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => v
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk164369 = require("./164369.js"),
  Chunk126663 = require("./126663.js"),
  Chunk481060 = require("./481060.js"),
  Chunk70956 = require("./70956.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk819496 = require("./819496.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e) {
  if (null != e) {
    let t = new Date,
      {
        hours: n,
        minutes: r,
        seconds: i
      } = (0, s.Z)({
        start: t,
        end: e
      });
    return {
      hours: String(n).padStart(2, "0"),
      minutes: String(r).padStart(2, "0"),
      seconds: String(i).padStart(2, "0"),
      countdownString: d.intl.formatToPlainString(d.t.U0Hhr6, {
        duration: new Date(0, 0, 0, n, r, i)
      })
    }
  }
  return {
    hours: "",
    minutes: "",
    seconds: "",
    countdownString: ""
  }
}
let E = e => {
    let {
      digit: t
    } = e, n = (0, c.Yzy)(t, {
      from: {
        opacity: 0,
        translateY: "-100%"
      },
      enter: {
        opacity: 1,
        translateY: "0%"
      },
      leave: {
        opacity: 0,
        translateY: "100%"
      },
      config: {
        tension: 210,
        friction: 20,
        duration: 200
      }
    });
    return (0, r.jsx)("div", {
      className: f.animatedDigit,
      children: n((e, t) => (0, r.jsx)(l.animated.div, {
        style: m(p({}, e), {
          position: "absolute",
          width: "100%",
          textAlign: "center"
        }),
        children: (0, r.jsx)(c.Text, {
          variant: "text-sm/bold",
          children: t
        })
      }))
    })
  },
  b = () => {
    let [e, t] = Chunk73800.useState(false);
    Chunk73800.useEffect(() => {
      let e;

      function n() {
        let r = Date.now();
        e = setTimeout(() => {
          exports(e => !e), require()
        }, Math.max(100, (Math.floor(Chunk255367 / Chunk70956.Z.Millis.HALF_SECOND) + 1) * Chunk70956.Z.Millis.HALF_SECOND - Chunk255367))
      }
      return require(), () => {
        clearTimeout(module)
      }
    }, []);
    let n = (0, Chunk481060.q_F)({
      opacity: module ? .5 : 1,
      config: {
        duration: 100
      }
    });
    return (0, Chunk255367.jsxs)(Chunk126663.animated.div, {
      style: require,
      className: Chunk819496.colonContainer,
      children: [(0, Chunk255367.jsx)("div", {
        className: Chunk819496.tinyDot
      }), (0, Chunk255367.jsx)("div", {
        className: Chunk819496.tinyDot
      })]
    })
  },
  y = e => {
    let {
      digits: t
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: f.digitContainer,
        children: (0, r.jsx)(E, {
          digit: t[0]
        })
      }), (0, r.jsx)("div", {
        className: f.digitContainer,
        children: (0, r.jsx)(E, {
          digit: t[1]
        })
      })]
    })
  },
  O = e => {
    let {
      countdown: t
    } = e;
    return (0, r.jsxs)("div", {
      className: f.digitsContainer,
      children: [(0, r.jsx)(y, {
        digits: t.hours
      }), (0, r.jsx)(b, {}), (0, r.jsx)(y, {
        digits: t.minutes
      }), (0, r.jsx)(b, {}), (0, r.jsx)(y, {
        digits: t.seconds
      })]
    })
  };

function v(e) {
  let {
    textVariant: t,
    className: n,
    catalogUpdateTime: o,
    isScrolled: s
  } = e, [l, u] = i.useState(() => g(o));
  return i.useEffect(() => {
    let e = setInterval(() => {
      u(() => g(o))
    }, 1e3);
    return () => clearInterval(e)
  }, [o]), (0, r.jsxs)("div", {
    className: a()(n, f.countdownContainer, {
      [f.isScrolled]: s
    }),
    "aria-label": l.countdownString,
    children: [(0, r.jsxs)("div", {
      className: f.iconContainer,
      children: [(0, r.jsx)("div", {
        className: f.clockIconWrapper,
        children: (0, r.jsx)(c.T39, {
          size: "custom",
          height: 16,
          width: 16,
          color: "currentColor",
          colorClass: f.clockIcon
        })
      }), (0, r.jsx)(c.Text, {
        variant: null != t ? t : "text-sm/medium",
        color: "header-primary",
        children: d.intl.string(d.t.VZsY3t)
      })]
    }), (0, r.jsx)("div", {
      className: f.digitsContainer,
      children: (0, r.jsx)(O, {
        countdown: l
      })
    })]
  })
}