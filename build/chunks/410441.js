/** Chunk was on 30243 **/
r.d(t, {
  Z: () => o
});
var n = r(200651);
r(192379);
var l = r(481060),
  i = r(78421);

function o(e) {
  let {
    onClick: t,
    Icon: r,
    "aria-label": o
  } = e, a = (0, l.dQu)(l.TVs.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY), c = (0, n.jsx)(r, {
    color: a.hex(),
    size: "custom",
    width: 16,
    height: 16
  });
  return null == t ? (0, n.jsx)("div", {
    className: i.container,
    "aria-label": o,
    children: c
  }) : (0, n.jsx)(l.ua7, {
    text: o,
    children: e => {
      var r, o;
      return (0, n.jsx)(l.P3F, (r = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = n
          })
        }
        return e
      }({
        className: i.container
      }, e), o = o = {
        onClick: t,
        children: c
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(o)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
      }), r))
    }
  })
}