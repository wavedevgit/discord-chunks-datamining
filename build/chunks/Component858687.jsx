/** Chunk was on 81239 **/
/** chunk id: 858687, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk489618 = require("./489618.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk933557 = require("./933557.js"),
  Chunk388032 = require("./388032.jsx");

function b(e, t) {
  let {
    rearrangeContextMenu: b
  } = o.Z.useExperiment({
    location: "useChannelLeaveItem"
  }), f = i.useCallback(() => {
    let i = (0, s.F6)(e, c.default, d.Z),
      o = u.intl.formatToPlainString(u.t.hJ5Ap6, {
        name: i
      }),
      b = u.intl.format(u.t.SSIVOj, {
        name: i
      });
    e.isManaged() && (o = u.intl.formatToPlainString(u.t.hVGjER, {
      name: i
    }), b = u.intl.format(u.t.IK1Qvr, {
      name: i
    }));
    let f = function(n) {
      let r = arguments.length > 1 && true !== arguments[1] && arguments[1];
      l.Z.closePrivateChannel(e.id, t, r)
    };
    (0, a.ZDy)(async () => {
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
        header: o,
        body: b,
        onSubmit: f
      }, t))
    })
  }, [e, t]);
  return (0, r.jsx)(a.sNh, {
    id: "leave-channel",
    label: u.intl.string(u.t["26C4oq"]),
    action: f,
    color: "danger",
    subtext: b ? u.intl.string(u.t["2HOk0t"]) : true
  })
}