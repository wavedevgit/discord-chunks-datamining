/** Chunk was on 67564 **/
/** chunk id: 224805, original params: e,t,n (module,exports,require) **/
function r(e) {
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
require.d(exports, {
  A: () => s,
  x: () => i
});
let l = (0, require("./839214.js").D)(() => ({
  channelDrafts: {}
}));

function i(e, t) {
  l.setState(n => {
    var l, i;
    let s = n.channelDrafts[e];
    return {
      channelDrafts: (l = r({}, n.channelDrafts), i = i = {
        [e]: r({}, {
          heroFile: null,
          title: "",
          publish: true,
          createThread: true
        }, s, t)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
      }), l)
    }
  })
}
let s = l