/** Chunk was on 44669 **/
/** chunk id: 986738, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk823508 = require("./823508.js"),
  Chunk47868 = require("./47868.jsx"),
  Chunk985018 = require("./985018.jsx");

function c(e) {
  let {
    className: t,
    guildId: c
  } = e, u = (0, s.A)();
  return (0, r.jsx)(a.A, {
    className: t,
    icon: (0, r.jsx)(i.CTc, {
      size: "custom",
      color: "currentColor",
      height: 20,
      width: 20
    }),
    color: l.A.unsafe_rawColors.BRAND_500.css,
    title: o.intl.string(o.t["60lJ0C"]),
    description: o.intl.string(o.t["EYn7/y"]),
    onClick: function() {
      (0, i.mMO)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("68587"), n.e("51354"), n.e("342"), n.e("96110")]).then(n.bind(n, 21653));
        return t => {
          var n, l;
          return (0, r.jsx)(e, (n = function(e) {
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
          }({}, t), l = l = {
            guildId: c
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
          }), n))
        }
      }, u)
    }
  })
}