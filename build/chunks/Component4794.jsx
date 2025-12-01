/** Chunk was on 88569 **/
/** chunk id: 4794, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk55160 = require("./55160.js"),
  Chunk996435 = require("./996435.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk530171 = require("./530171.jsx"),
  Chunk175993 = require("./175993.jsx"),
  Chunk445642 = require("./445642.js");
let p = Chunk473749.memo(function(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    layout: i,
    useCollapsedSubtitle: p,
    useNotice: b
  } = t, [y, g] = l.useState(false), [v, m] = l.useState(true);
  l.useEffect(() => s.Z.subscribe(e => {
    let {
      navTransition: t
    } = e;
    return t
  }, e => {
    if (null == e) return;
    let n = (null == e ? true : e.targetAccordionKey) === t.key;
    if (n && !y && (g(true), m(false)), n && y) {
      var r, l;
      s.Z.setState({
        navTransition: (r = function(e) {
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
        }({}, e), l = l = {
          targetAccordionKey: true
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
        }), r)
      }), m(true)
    }
  }, {
    equalityFn: a.X,
    fireImmediately: true
  }), [y, t.key]);
  let h = null == n ? true : n(y),
    x = null == p ? true : p(),
    j = null == b ? true : b();
  return (0, r.jsx)("div", {
    className: o()({
      [f.open]: y
    }),
    children: (0, r.jsxs)(u.I, {
      title: h,
      collapsedSubtitle: x,
      isOpen: y,
      setIsOpen: g,
      animate: v,
      children: [null != j && (0, r.jsx)(d.Z, {
        notice: j
      }), i.map(e => (0, r.jsx)(c.Z, {
        node: e
      }, e.key))]
    })
  })
})