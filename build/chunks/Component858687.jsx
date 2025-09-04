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
  }), h = r.useCallback(() => {
    let r = (0, u.F6)(e, c.default, d.Z),
      o = s.intl.formatToPlainString(s.t.hJ5Ap6, {
        name: r
      }),
      f = s.intl.format(s.t.SSIVOj, {
        name: r
      });
    e.isManaged() && (o = s.intl.formatToPlainString(s.t.hVGjER, {
      name: r
    }), f = s.intl.format(s.t.IK1Qvr, {
      name: r
    }));
    let h = function(n) {
      let i = arguments.length > 1 && true !== arguments[1] && arguments[1];
      a.Z.closePrivateChannel(e.id, t, i)
    };
    (0, l.ZDy)(async () => {
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
        header: o,
        body: f,
        onSubmit: h
      }, t))
    })
  }, [e, t]);
  return (0, i.jsx)(l.sNh, {
    id: "leave-channel",
    label: s.intl.string(s.t["26C4oq"]),
    action: h,
    color: "danger",
    subtext: f ? s.intl.string(s.t["2HOk0t"]) : true
  })
}