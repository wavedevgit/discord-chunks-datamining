/** Chunk was on 35755 **/
/** chunk id: 870205, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk984168 = require("./984168.jsx"),
  Chunk314734 = require("./314734.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let t, {
      sortOrder: n,
      onSortOptionClick: c
    } = e,
    u = i.useRef(null);
  switch (n) {
    case o.bS.POPULAR:
      t = s.intl.string(s.t.SzxiqK);
      break;
    case o.bS.ALPHABETICAL:
      t = s.intl.string(s.t.m8xstr)
  }
  return (0, l.jsx)(r.yRy, {
    targetElementRef: u,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, l.jsx)(a.Z, {
        sortOrder: n,
        onSortOptionClick: c,
        closePopout: t
      })
    },
    position: "bottom",
    align: "left",
    children: e => {
      var n, i;
      return (0, l.jsx)(r.zxk, (n = function(e) {
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
      }({}, e), i = i = {
        buttonRef: u,
        size: "sm",
        variant: "secondary",
        "aria-label": s.intl.string(s.t.yeYaHR),
        icon: r.uVW,
        text: t
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          n.push.apply(n, l)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
      }), n))
    }
  })
}