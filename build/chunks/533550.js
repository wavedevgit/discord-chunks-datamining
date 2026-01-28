/** Chunk was on 78528 **/
/** chunk id: 533550, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  RX: () => u,
  q8: () => p
});
var Chunk64700 = require("./64700.js"),
  Chunk942381 = require("./942381.js"),
  Chunk265690 = require("./265690.js"),
  Chunk121894 = require("./121894.js");

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

function o(e, t) {
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
let c = (0, Chunk265690.h)(e => ({
  upsellsByGuildId: {}
}));

function u(e) {
  return c(t => {
    var n;
    let r = {};
    return null == e ? r : null != (n = t.upsellsByGuildId[e]) ? n : r
  }, l.x)
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
    l = r.useRef(null);
  return r.useLayoutEffect(() => {
    let r = l.current,
      i = () => {
        requestAnimationFrame(() => {
          var r, i, u;
          let d = null != (r = null == (i = l.current) ? true : i.getBoundingClientRect()) ? r : null;
          u = {
            name: t,
            guildId: e,
            disabled: n,
            boundingRect: null != d ? d : null
          }, (0, s.r)(() => {
            c.setState(e => {
              var t, n;
              return {
                upsellsByGuildId: o(a({}, null != (t = e.upsellsByGuildId) ? t : {}), {
                  [u.guildId]: o(a({}, null != (n = e.upsellsByGuildId[u.guildId]) ? n : {}), {
                    [u.name]: u
                  })
                })
              }
            })
          })
        })
      };
    if (null == r) return i(), () => {};
    let u = function(e) {
      let t = e.parentNode;
      for (; null != t && t !== document.body && !d(t);) t = t.parentNode;
      return d(t) ? t : null
    }(r);
    return i(), null == u || u.addEventListener("scroll", i, {
      passive: true
    }), () => {
      null == u || u.removeEventListener("scroll", i)
    }
  }, [e, t, n]), l
}