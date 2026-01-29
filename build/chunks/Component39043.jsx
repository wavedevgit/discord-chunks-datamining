/** Chunk was on 2827 **/
/** chunk id: 39043, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk942381 = require("./942381.js"),
  Chunk894858 = require("./894858.js"),
  Chunk641324 = require("./641324.jsx"),
  Chunk78837 = require("./78837.jsx");
let c = Chunk64700.memo(function(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    layout: c,
    useCollapsedSubtitle: d
  } = t, [u, _] = i.useState(false), [p, m] = i.useState(true);
  i.useEffect(() => s.A.subscribe(e => {
    let {
      navTransition: t
    } = e;
    return t
  }, e => {
    if (null == e) return;
    let n = (null == e ? true : e.targetAccordionKey) === t.key;
    if (n && !u && (_(true), m(false)), n && u) {
      var r, i;
      s.A.setState({
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
        }({}, e), i = i = {
          targetAccordionKey: true
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
        }), r)
      }), m(true)
    }
  }, {
    equalityFn: l.x,
    fireImmediately: true
  }), [u, t.key]);
  let g = null == n ? true : n(u),
    A = null == d ? true : d(),
    f = i.useCallback(e => {
      e && s.A.setState({
        navTransition: {
          targetKey: t.key,
          targetAccordionKey: t.key,
          animateScroll: true,
          scrollBlock: "nearest"
        }
      })
    }, [t.key]);
  return (0, r.jsx)(o.f, {
    title: g,
    collapsedSubtitle: A,
    isExpanded: u,
    onExpandedChange: _,
    onExpandedChangeComplete: f,
    animate: p,
    children: c.map(e => (0, r.jsx)(a.A, {
      node: e
    }, e.key))
  })
})