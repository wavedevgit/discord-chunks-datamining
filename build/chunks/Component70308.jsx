/** Chunk was on web.js **/
/** chunk id: 70308, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk426322 = require("./426322.js"),
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

function g(e) {
  var t, n, u, d;
  let {
    appContext: _
  } = e, p = (0, l.Es)(e => e.currentToastMap.get(_)), h = i.useRef(null != (u = null == p || null == (t = p.options) ? true : t.position) ? u : c.si.position), g = i.useRef(null != (d = null == p || null == (n = p.options) ? true : n.duration) ? d : c.si.duration);
  i.useEffect(() => {
    if (null != p) {
      var e, t, n, r;
      h.current = null != (n = null == (e = p.options) ? true : e.position) ? n : c.si.position, g.current = null != (r = null == (t = p.options) ? true : t.duration) ? r : c.si.duration
    }
  }, [p]);
  let E = i.useMemo(() => {
      var e, t;
      return m[null != (t = null == p || null == (e = p.options) ? true : e.position) ? t : h.current]
    }, [p]),
    b = (0, o.Yzy)(p, f({
      keys: e => {
        var t;
        return null != (t = null == e ? true : e.id) ? t : ""
      }
    }, E.transition));
  return i.useEffect(() => {
    null != p && setTimeout(() => {
      (0, l.z5)(_)
    }, g.current)
  }, [p, _]), (0, r.jsx)("div", {
    className: E.styles,
    children: b((e, t) => null == t ? null : (0, r.jsx)(a.animated.div, {
      style: e,
      children: (0, r.jsx)(s.F, f({}, t))
    }, t.id))
  })
}