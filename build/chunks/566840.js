/** Chunk was on 32098 (37916180435b2d51.js) **/
n.d(t, {
  Eg: () => u,
  XL: () => p
});
var r = n(192379);
if (12633 == n.j) var i = n(232713);
var l = n(65400),
  o = n(731965);

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
        enumerable: !0,
        configurable: !0,
        writable: !0
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
let c = (0, l.F)(e => ({
  upsellsByGuildId: {}
}));

function u(e) {
  return c(t => {
    var n;
    let r = {};
    return null == e ? r : null !== (n = t.upsellsByGuildId[e]) && void 0 !== n ? n : r
  }, i.X)
}

function d(e) {
  if (null == e) return !1;
  try {
    return window.getComputedStyle(e).overflow.includes("scroll")
  } catch (e) {
    return !1
  }
}

function p(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = r.useRef(null);
  return r.useLayoutEffect(() => {
    let r = i.current,
      l = () => {
        requestAnimationFrame(() => {
          var r, l, u;
          let d = null !== (l = null === (r = i.current) || void 0 === r ? void 0 : r.getBoundingClientRect()) && void 0 !== l ? l : null;
          u = {
            name: t,
            guildId: e,
            disabled: n,
            boundingRect: null != d ? d : null
          }, (0, o.j)(() => {
            c.setState(e => {
              var t, n;
              return {
                upsellsByGuildId: s(a({}, null !== (t = e.upsellsByGuildId) && void 0 !== t ? t : {}), {
                  [u.guildId]: s(a({}, null !== (n = e.upsellsByGuildId[u.guildId]) && void 0 !== n ? n : {}), {
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
      passive: !0
    }), () => {
      null == u || u.removeEventListener("scroll", l)
    }
  }, [e, t, n]), i
}