/** Chunk was on 97887 **/
/** chunk id: 702904, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx");

function s(e) {
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

function a() {
  function e() {
    (0, l.mMO)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
      return t => (0, r.jsx)(e, s({
        source: "Screenshare Unavailable"
      }, t))
    })
  }(0, l.mMO)(async () => {
    let {
      default: t
    } = await n.e("11487").then(n.bind(n, 792866));
    return n => {
      var l, a;
      return (0, r.jsx)(t, (l = s({}, n), a = a = {
        header: i.intl.string(i.t.GFr0GR),
        body: i.intl.string(i.t.QSk6E8),
        confirmText: i.intl.string(i.t["BK8LK+"]),
        onConfirm: e
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(a)).forEach(function(e) {
        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e))
      }), l))
    }
  })
}