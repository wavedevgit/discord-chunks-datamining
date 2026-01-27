/** Chunk was on 59735 **/
/** chunk id: 359047, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk770666 = require("./770666.js"),
  Chunk823508 = require("./823508.js"),
  Chunk985018 = require("./985018.jsx");

function a(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    a = (0, o.A)(e),
    u = (0, c.A)();
  return a ? (0, n.jsx)(i.Drp, {
    id: "create-event",
    label: l.intl.string(l.t["60lJ0C"]),
    icon: t ? i.UC$ : true,
    leadingAccessory: t ? {
      type: "icon",
      icon: i.UC$
    } : true,
    action: () => {
      (0, i.mMO)(async () => {
        let {
          default: t
        } = await Promise.all([r.e("68587"), r.e("51354"), r.e("342"), r.e("62106")]).then(r.bind(r, 21653));
        return r => {
          var i, o;
          return (0, n.jsx)(t, (i = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r);
              "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
              }))), n.forEach(function(t) {
                var n;
                n = r[t], t in e ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = n
              })
            }
            return e
          }({}, r), o = o = {
            guildId: e
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r.push.apply(r, n)
            }
            return r
          })(Object(o)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
          }), i))
        }
      }, u)
    }
  }) : null
}