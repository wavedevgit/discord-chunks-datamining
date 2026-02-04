/** Chunk was on 17869 **/
/** chunk id: 224805, original params: e,t,n (module,exports,require) **/
function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}
require.d(exports, {
  A: () => a,
  x: () => i
});
let r = (0, require("./839214.js").D)(() => ({
  channelDrafts: {}
}));

function i(e, t) {
  r.setState(n => {
    var r, i;
    let a = n.channelDrafts[e];
    return {
      channelDrafts: (r = l({}, n.channelDrafts), i = i = {
        [e]: l({}, {
          heroFile: null,
          title: "",
          publish: true,
          createThread: true
        }, a, t)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          n.push.apply(n, l)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
      }), r)
    }
  })
}
let a = r