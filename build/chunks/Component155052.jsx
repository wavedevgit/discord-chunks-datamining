/** Chunk was on 71447 **/
/** chunk id: 155052, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk555528 = require("./555528.js"),
  Chunk531685 = require("./531685.js"),
  Chunk365971 = require("./365971.js"),
  Chunk243612 = require("./243612.js"),
  Chunk582240 = require("./582240.jsx"),
  Chunk295102 = require("./295102.jsx"),
  Chunk545807 = require("./545807.js"),
  Chunk644434 = require("./644434.js");

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function m(e) {
  return e.widget.id
}

function A(e, t, n, r) {
  var l, o;
  return n === a.wLy.YEETED ? null : (0, i.jsx)(d.A, (l = g({}, t), o = o = {
    transitionState: n,
    cleanUp: r
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(o)).forEach(function(e) {
    Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e))
  }), l), e)
}
let y = [],
  O = Chunk64700.memo(function(e) {
    let {
      className: t
    } = e, n = (0, p.A)(), d = (0, l.bG)([s.A], () => s.A.windowSize((0, u.Q2)(n))), O = (0, l.bG)([o.A], () => {
      let e = o.A.getLayout(f.G);
      if (null == e) return y;
      let t = [];
      for (let n of e.widgets) {
        let e = o.A.getWidget(n);
        if (null == e) continue;
        let i = h.A[e.type];
        null != i && (null == i.predicate || i.predicate()) && t.push(g({
          widget: e
        }, i))
      }
      return t
    }, [], c.VC), v = r.useCallback(e => (0, i.jsx)("div", {
      className: t,
      style: d,
      children: e
    }), [t, d]);
    return (0, i.jsx)(a.Fai, {
      items: O,
      renderItem: A,
      getItemKey: m,
      wrapChildren: v
    })
  })