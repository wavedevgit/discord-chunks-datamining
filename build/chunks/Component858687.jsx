/** Chunk was on 74724 **/
/** chunk id: 858687, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
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

function f(e, t) {
  let {
    rearrangeContextMenu: f
  } = l.Z.useExperiment({
    location: "useChannelLeaveItem"
  }), p = r.useCallback(() => {
    let r = (0, u.F6)(e, s.default, c.Z),
      l = d.intl.formatToPlainString(d.t.hJ5Ap6, {
        name: r
      }),
      f = d.intl.format(d.t.SSIVOj, {
        name: r
      });
    e.isManaged() && (l = d.intl.formatToPlainString(d.t.hVGjER, {
      name: r
    }), f = d.intl.format(d.t.IK1Qvr, {
      name: r
    }));
    let p = function(n) {
      let i = arguments.length > 1 && true !== arguments[1] && arguments[1];
      o.Z.closePrivateChannel(e.id, t, i)
    };
    (0, a.ZDy)(async () => {
      let {
        default: e
      } = await n.e("14604").then(n.bind(n, 960670));
      return t => (0, i.jsx)(e, function(e) {
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
      }({
        header: l,
        body: f,
        onSubmit: p
      }, t))
    })
  }, [e, t]);
  return (0, i.jsx)(a.sNh, {
    id: "leave-channel",
    label: d.intl.string(d.t["26C4oq"]),
    action: p,
    color: "danger",
    subtext: f ? d.intl.string(d.t["2HOk0t"]) : true
  })
}