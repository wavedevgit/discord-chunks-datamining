/** Chunk was on 60667 **/
/** chunk id: 39043, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk942381 = require("./942381.js"),
  Chunk894858 = require("./894858.js"),
  Chunk641324 = require("./641324.jsx"),
  Chunk78837 = require("./78837.jsx");
require("./465133.js");
var Chunk821443 = require("./821443.js");
let _ = Chunk64700.memo(function(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    layout: l,
    useCollapsedSubtitle: _
  } = t, [p, m] = i.useState(false), [g, A] = i.useState(true);
  i.useEffect(() => o.A.subscribe(e => {
    let {
      navTransition: t
    } = e;
    return t
  }, e => {
    if (null == e) return;
    let n = (null == e ? true : e.targetAccordionKey) === t.key;
    if (n && !p && (m(true), A(false)), n && p) {
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
    equalityFn: a.x,
    fireImmediately: true
  }), [p, t.key]);
  let f = null == n ? true : n(p),
    h = null == _ ? true : _(),
    b = i.useCallback(e => {
      e && o.A.setState({
        navTransition: {
          targetKey: t.key,
          targetAccordionKey: t.key,
          animateScroll: true,
          scrollBlock: "nearest"
        }
      })
    }, [t.key]);
  return (0, r.jsx)("div", {
    style: {
      "--custom-base-setting-wrapper-horizontal-padding": "".concat(12, "px"),
      "--custom-base-setting-wrapper-vertical-padding": "".concat(8, "px")
    },
    className: s()({
      [u.h]: p
    }),
    children: (0, r.jsx)(d.f, {
      title: f,
      collapsedSubtitle: h,
      isExpanded: p,
      onExpandedChange: m,
      onExpandedChangeComplete: b,
      animate: g,
      children: l.map(e => (0, r.jsx)(c.A, {
        node: e
      }, e.key))
    })
  })
})