/** Chunk was on 77927 **/
/** chunk id: 605691, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk308528 = require("./308528.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk47167 = require("./47167.js"),
  Chunk985018 = require("./985018.jsx");

function s(e, t) {
  let s = i.useCallback(() => {
    let i = (0, c.m1)(e, o.default, u.A),
      s = d.intl.formatToPlainString(d.t.hJ5Ap4, {
        name: i
      }),
      f = d.intl.format(d.t.SSIVOu, {
        name: i
      });
    e.isManaged() && (s = d.intl.formatToPlainString(d.t.hVGjEW, {
      name: i
    }), f = d.intl.format(d.t.IK1Qvs, {
      name: i
    }));
    let A = function(n) {
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
        title: s,
        body: f,
        onSubmit: A
      }, t))
    })
  }, [e, t]);
  return (0, r.jsx)(l.Drp, {
    id: "leave-channel",
    label: d.intl.string(d.t["26C4oi"]),
    action: s,
    color: "danger"
  })
}