/** Chunk was on web.js **/
/** chunk id: 70308, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => g
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk717976 = require("./717976.js"),
  Chunk481060 = require("./481060.js"),
  Chunk345332 = require("./345332.jsx"),
  Chunk417153 = require("./417153.js"),
  Chunk561466 = require("./561466.js"),
  Chunk663895 = require("./663895.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = {
    duration: 300,
    friction: 24,
    tension: 280
  },
  m = {
    [Chunk561466.az.TOP]: {
      styles: Chunk663895.containerTop,
      transition: {
        trail: 400,
        from: {
          transform: "translate3d(0, -100%, 0)",
          opacity: 0,
          config: h
        },
        enter: {
          transform: "translate3d(0, -0px, 0)",
          opacity: 1,
          config: h
        },
        leave: {
          transform: "translate3d(0, -100%, 0)",
          opacity: 0,
          config: p(f({}, h), {
            friction: 40,
            clamp: true
          })
        }
      }
    },
    [Chunk561466.az.BOTTOM]: {
      styles: Chunk663895.containerBottom,
      transition: {
        trail: 400,
        from: {
          transform: "translate3d(0, 100%, 0)",
          opacity: 0,
          config: h
        },
        enter: {
          transform: "translate3d(0, 0px, 0)",
          opacity: 1,
          config: h
        },
        leave: {
          transform: "translate3d(0, 100%, 0)",
          opacity: 0,
          config: p(f({}, h), {
            friction: 40,
            clamp: true
          })
        }
      }
    }
  };

function g() {
  var e, t, n, u;
  let d = (0, Chunk417153.Es)(e => e.currentToast),
    _ = Chunk73800.useRef(null != (n = null == d || null == (e = d.options) ? true : module.position) ? require : Chunk561466.si.position),
    p = Chunk73800.useRef(null != (u = null == d || null == (t = d.options) ? true : exports.duration) ? Chunk663895 : Chunk561466.si.duration);
  Chunk73800.useEffect(() => {
    if (null != d) {
      var e, t, n, r;
      _.current = null != (n = null == (e = d.options) ? true : module.position) ? require : Chunk561466.si.position, p.current = null != (r = null == (t = d.options) ? true : exports.duration) ? Chunk255367 : Chunk561466.si.duration
    }
  }, [d]);
  let h = Chunk73800.useMemo(() => {
      var e, t;
      return m[null != (t = null == d || null == (e = d.options) ? true : module.position) ? exports : _.current]
    }, [d]),
    g = (0, Chunk481060.Yzy)(d, f({
      keys: e => {
        var t;
        return null != (t = null == e ? true : e.id) ? t : ""
      }
    }, h.transition));
  return Chunk73800.useEffect(() => {
    null != d && setTimeout(() => {
      (0, Chunk417153.z5)()
    }, p.current)
  }, [d]), (0, Chunk255367.jsx)("div", {
    className: h.styles,
    children: g((e, t) => null === t ? null : (0, r.jsx)(a.animated.div, {
      style: e,
      children: (0, r.jsx)(s.F, f({}, t))
    }, t.id))
  })
}