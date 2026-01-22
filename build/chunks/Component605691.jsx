/** Chunk was on 60200 **/
/** chunk id: 605691, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk308528 = require("./308528.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk47167 = require("./47167.js"),
  Chunk985018 = require("./985018.jsx");

function d(e, t) {
  let d = i.useCallback(() => {
    let i = (0, s.m1)(e, c.default, o.A),
      d = u.intl.formatToPlainString(u.t.hJ5Ap4, {
        name: i
      }),
      b = u.intl.format(u.t.SSIVOu, {
        name: i
      });
    e.isManaged() && (d = u.intl.formatToPlainString(u.t.hVGjEW, {
      name: i
    }), b = u.intl.format(u.t.IK1Qvs, {
      name: i
    }));
    let f = function(n) {
      let r = arguments.length > 1 && true !== arguments[1] && arguments[1];
      a.A.closePrivateChannel(e.id, t, r)
    };
    (0, l.mMO)(async () => {
      let {
        default: e
      } = await n.e("37803").then(n.bind(n, 148166));
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
        body: b,
        onSubmit: f
      }, t))
    })
  }, [e, t]);
  return (0, r.jsx)(l.Drp, {
    id: "leave-channel",
    label: u.intl.string(u.t["26C4oi"]),
    action: d,
    color: "danger"
  })
}