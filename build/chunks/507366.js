/** Chunk was on 7891 **/
/** chunk id: 507366, original params: e,t,n (module,exports,require) **/
function i(e) {
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
require.d(exports, {
  Z: () => a,
  c: () => l
});
let r = (0, require("./972959.js").H)(() => ({
  channelDrafts: {}
}));

function l(e, t) {
  r.setState(n => {
    var r, l;
    let a = n.channelDrafts[e];
    return {
      channelDrafts: (r = i({}, n.channelDrafts), l = l = {
        [e]: i({}, {
          heroFile: null,
          title: "",
          publish: true,
          createThread: true
        }, a, t)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
      }), r)
    }
  })
}
let a = r