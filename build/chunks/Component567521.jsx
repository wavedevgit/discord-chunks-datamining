/** Chunk was on 83331 **/
/** chunk id: 567521, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk471253 = require("./471253.js"),
  Chunk146085 = require("./146085.js"),
  Chunk496675 = require("./496675.js"),
  Chunk388032 = require("./388032.jsx");

function u(e, t) {
  let n = (0, r.e7)([c.Z], () => c.Z.can(o.yP, e), [e]);
  return null != t && n ? (0, i.jsx)(l.sNh, {
    id: "end-stage",
    label: s.intl.string(s.t.saZaRb),
    color: "danger",
    action: function() {
      (0, l.h7j)(t => {
        var n, r;
        return (0, i.jsx)(l.ConfirmModal, (n = function(e) {
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
        }({}, t), r = r = {
          header: s.intl.string(s.t.gW9je1),
          confirmText: s.intl.string(s.t.saZaRb),
          cancelText: s.intl.string(s.t["ETE/oC"]),
          onConfirm: () => (0, a.NZ)(e),
          children: (0, i.jsx)(l.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            children: s.intl.string(s.t.mT7jwN)
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(r)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
        }), n))
      })
    }
  }) : null
}