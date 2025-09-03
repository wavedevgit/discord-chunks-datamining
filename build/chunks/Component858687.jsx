/** Chunk was on 25421 **/
/** chunk id: 858687, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  } = o.Z.useExperiment({
    location: "useChannelLeaveItem"
  }), O = i.useCallback(() => {
    let i = (0, s.F6)(e, u.default, c.Z),
      o = d.intl.formatToPlainString(d.t.hJ5Ap6, {
        name: i
      }),
      f = d.intl.format(d.t.SSIVOj, {
        name: i
      });
    e.isManaged() && (o = d.intl.formatToPlainString(d.t.hVGjER, {
      name: i
    }), f = d.intl.format(d.t.IK1Qvr, {
      name: i
    }));
    let O = function(n) {
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
        header: o,
        body: f,
        onSubmit: O
      }, t))
    })
  }, [e, t]);
  return (0, r.jsx)(l.sNh, {
    id: "leave-channel",
    label: d.intl.string(d.t["26C4oq"]),
    action: O,
    color: "danger",
    subtext: f ? d.intl.string(d.t["2HOk0t"]) : true
  })
}