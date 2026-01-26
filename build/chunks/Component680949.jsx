/** Chunk was on 97887 **/
/** chunk id: 680949, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk318937 = require("./318937.js"),
  Chunk533117 = require("./533117.js"),
  Chunk134753 = require("./134753.js"),
  Chunk709562 = require("./709562.jsx"),
  Chunk60504 = require("./60504.jsx"),
  Chunk985018 = require("./985018.jsx");

function h() {
  return (h = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function f() {
  let e = (0, i.bG)([o.A], () => o.A.getDrawMode()),
    t = (null == e ? true : e.type) === c.Z.LINE,
    n = l.useRef(null),
    f = () => {
      t ? (0, a.Ol)(null) : (0, a.Ol)({
        type: c.Z.LINE
      })
    };
  return (0, r.jsx)(d.A, {
    renderPopout: () => null,
    popoutTargetRef: n,
    children: e => {
      var l, i;
      let {} = e, a = h({}, e);
      return (0, r.jsx)(u.A, (l = function(e) {
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
      }({}, a), i = i = {
        buttonRef: n,
        label: p.intl.string(p.t.ZQCf9V),
        isActive: t,
        iconComponent: s.R2l,
        onClick: f
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
      }), l))
    }
  })
}