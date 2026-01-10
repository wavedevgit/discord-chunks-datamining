/** Chunk was on 25421 **/
/** chunk id: 858687, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk933557 = require("./933557.js"),
  Chunk388032 = require("./388032.jsx");

function d(e, t) {
  let d = i.useCallback(() => {
    let i = (0, s.F6)(e, c.default, o.Z),
      d = u.intl.formatToPlainString(u.t.hJ5Ap4, {
        name: i
      }),
      f = u.intl.format(u.t.SSIVOu, {
        name: i
      });
    e.isManaged() && (d = u.intl.formatToPlainString(u.t.hVGjEW, {
      name: i
    }), f = u.intl.format(u.t.IK1Qvs, {
      name: i
    }));
    let b = function(n) {
      let r = arguments.length > 1 && true !== arguments[1] && arguments[1];
      a.Z.closePrivateChannel(e.id, t, r)
    };
    (0, l.ZDy)(async () => {
      let {
        default: e
      } = await n.e("14604").then(n.bind(n, 960670));
      return t => (0, r.jsx)(e, function(e) {
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
      }({
        header: d,
        body: f,
        onSubmit: b
      }, t))
    })
  }, [e, t]);
  return (0, r.jsx)(l.sNh, {
    id: "leave-channel",
    label: u.intl.string(u.t["26C4oi"]),
    action: d,
    color: "danger"
  })
}