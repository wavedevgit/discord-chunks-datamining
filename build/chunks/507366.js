/** Chunk was on 13140 **/
/** chunk id: 507366, original params: e,t,n (module,exports,require) **/
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
  Z: () => a,
  c: () => l
});
let i = (0, require("./972959.js").H)(() => ({
  channelDrafts: {}
}));

function l(e, t) {
  i.setState(n => {
    var i, l;
    let a = n.channelDrafts[e];
    return {
      channelDrafts: (i = r({}, n.channelDrafts), l = l = {
        [e]: r({}, {
          heroFile: null,
          title: "",
          publish: true,
          createThread: true
        }, a, t)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
      }), i)
    }
  })
}
let a = i