/** Chunk was on 80125 (55069ba105d77393.js) **/
n.d(t, {
  Z: () => o
});
var r = n(200651);
n(192379);
var i = n(410575);

function o(e, t) {
  return function(n) {
    return (0, r.jsx)(i.Z, {
      page: t.page,
      section: t.section,
      object: t.object,
      objectType: t.objectType,
      children: (0, r.jsx)(e, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = r
          })
        }
        return e
      }({}, n))
    })
  }
}