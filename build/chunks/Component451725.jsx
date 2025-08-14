/** Chunk was on 67544 **/
/** chunk id: 451725, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk284539 = require("./284539.js"),
  Chunk18582 = require("./18582.jsx"),
  Chunk944548 = require("./944548.jsx"),
  Chunk477839 = require("./477839.js"),
  Chunk45147 = require("./45147.js");

function l(e) {
  let {
    cursor: t,
    selected: n,
    onClick: s
  } = e, l = (0, i.Ly)()[t];
  return (0, r.jsx)(a.Z, {
    text: l.name,
    borderColor: "white",
    children: e => {
      var t, a;
      return (0, r.jsx)(o.Z, (t = function(e) {
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
      }({}, e), a = a = {
        onClick: s,
        className: c.cursor,
        children: (0, r.jsx)("img", {
          src: n ? l.activeSrc : l.src,
          alt: ""
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(a)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
      }), t))
    }
  })
}

function u() {
  var e;
  let [t, n] = (0, Chunk284539.Z)(Chunk477839.yN.CURSORS), o = null != (e = exports.selectedCursor) ? module : Chunk477839.Vx.DEFAULT;
  return (0, Chunk255367.jsx)("div", {
    className: Chunk45147.cursors,
    children: Chunk477839.Wq.map(e => (0, r.jsx)(l, {
      cursor: e,
      selected: e === o,
      onClick: () => n({
        selectedCursor: e
      })
    }, e))
  })
}