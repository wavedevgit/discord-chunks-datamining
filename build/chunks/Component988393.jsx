/** Chunk was on web.js **/
/** chunk id: 988393, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk108531 = require("./108531.js"),
  Chunk397927 = require("./397927.js"),
  Chunk857250 = require("./857250.jsx"),
  Chunk691540 = require("./691540.js"),
  Chunk97483 = require("./97483.js"),
  Chunk17069 = require("./17069.js");

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

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = {
    duration: 300,
    friction: 24,
    tension: 280
  },
  m = {
    [Chunk97483.xJ.TOP]: {
      styles: Chunk17069.N,
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
          config: _(f({}, h), {
            friction: 40,
            clamp: true
          })
        }
      }
    },
    [Chunk97483.xJ.BOTTOM]: {
      styles: Chunk17069.H,
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
          config: _(f({}, h), {
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
    appContext: p
  } = e, _ = (0, l.WE)(e => e.currentToastMap.get(p)), h = i.useRef(null != (t = null == _ || null == (u = _.options) ? true : u.position) ? t : c.jg.position), g = i.useRef(null != (n = null == _ || null == (d = _.options) ? true : d.duration) ? n : c.jg.duration);
  i.useEffect(() => {
    if (null != _) {
      var e, t, n, r;
      h.current = null != (e = null == (n = _.options) ? true : n.position) ? e : c.jg.position, g.current = null != (t = null == (r = _.options) ? true : r.duration) ? t : c.jg.duration
    }
  }, [_]);
  let E = i.useMemo(() => {
      var e, t;
      return m[null != (e = null == _ || null == (t = _.options) ? true : t.position) ? e : h.current]
    }, [_]),
    b = (0, s.pnh)(_, f({
      keys: e => {
        var t;
        return null != (t = null == e ? true : e.id) ? t : ""
      }
    }, E.transition));
  return i.useEffect(() => {
    null != _ && setTimeout(() => {
      (0, l.VD)(p)
    }, g.current)
  }, [_, p]), (0, r.jsx)("div", {
    className: E.styles,
    children: b((e, t) => null == t ? null : (0, r.jsx)(a.animated.div, {
      style: e,
      children: (0, r.jsx)(o.y, f({}, t))
    }, t.id))
  })
}