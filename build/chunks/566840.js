/** Chunk was on 83546 **/
/** chunk id: 566840, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Eg: () => u,
  XL: () => p
});
var Chunk647438 = require("./647438.js"),
  Chunk574583 = require("./574583.js"),
  Chunk51835 = require("./51835.js"),
  Chunk731965 = require("./731965.js");

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function s(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let c = (0, Chunk51835.F)(e => ({
  upsellsByGuildId: {}
}));

function u(e) {
  return c(t => {
    var n;
    let r = {};
    return null == e ? r : null != (n = t.upsellsByGuildId[e]) ? n : r
  }, i.X)
}

function d(e) {
  if (null == e) returnfalse;
  try {
    return window.getComputedStyle(e).overflow.includes("scroll")
  } catch (e) {
    returnfalse
  }
}

function p(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    i = r.useRef(null);
  return r.useLayoutEffect(() => {
    let r = i.current,
      l = () => {
        requestAnimationFrame(() => {
          var r, l, u;
          let d = null != (l = null == (r = i.current) ? true : r.getBoundingClientRect()) ? l : null;
          u = {
            name: t,
            guildId: e,
            disabled: n,
            boundingRect: null != d ? d : null
          }, (0, o.j)(() => {
            c.setState(e => {
              var t, n;
              return {
                upsellsByGuildId: s(a({}, null != (t = e.upsellsByGuildId) ? t : {}), {
                  [u.guildId]: s(a({}, null != (n = e.upsellsByGuildId[u.guildId]) ? n : {}), {
                    [u.name]: u
                  })
                })
              }
            })
          })
        })
      };
    if (null == r) return l(), () => {};
    let u = function(e) {
      let t = e.parentNode;
      for (; null != t && t !== document.body && !d(t);) t = t.parentNode;
      return d(t) ? t : null
    }(r);
    return l(), null == u || u.addEventListener("scroll", l, {
      passive: true
    }), () => {
      null == u || u.removeEventListener("scroll", l)
    }
  }, [e, t, n]), i
}