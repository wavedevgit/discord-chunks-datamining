/** Chunk was on 9207 **/
/** chunk id: 39043, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk942381 = require("./942381.js"),
  Chunk770178 = require("./770178.js"),
  Chunk894858 = require("./894858.js"),
  Chunk641324 = require("./641324.jsx"),
  Chunk78837 = require("./78837.jsx");
let u = Chunk64700.memo(function(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    layout: u,
    useCollapsedSubtitle: _
  } = t, [p, m] = i.useState(false), [g, A] = i.useState(true), f = i.useRef(p);
  i.useEffect(() => o.A.subscribe(e => {
    let {
      navTransition: t
    } = e;
    return t
  }, e => {
    let n = (null == e ? true : e.targetAccordionKey) === t.key;
    if (n && !p && (f.current = true, m(true), A(false)), n && p) {
      var r, i;
      o.A.setState({
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
      }), A(true)
    }
  }, {
    equalityFn: s.x,
    fireImmediately: true
  }), [p, t.key]);
  let b = i.useCallback(e => {
      null == e.target || f.current === p || (f.current = p, p && o.A.setState({
        navTransition: {
          targetKey: t.key,
          targetAccordionKey: t.key,
          animateScroll: true,
          scrollBlock: "nearest"
        }
      }))
    }, [p, t.key]),
    h = i.useMemo(() => (0, l.debounce)(b, 50), [b]),
    E = (0, a.w)(h),
    O = null == n ? true : n(p),
    x = null == _ ? true : _();
  return (0, r.jsx)(d.f, {
    ref: E,
    title: O,
    collapsedSubtitle: x,
    isExpanded: p,
    onExpandedChange: m,
    animate: g,
    children: u.map(e => (0, r.jsx)(c.A, {
      node: e
    }, e.key))
  })
})