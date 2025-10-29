/** Chunk was on 73726 **/
/** chunk id: 459502, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk357156 = require("./357156.js"),
  Chunk592125 = require("./592125.js"),
  Chunk15274 = require("./15274.jsx"),
  Chunk924301 = require("./924301.js"),
  Chunk554747 = require("./554747.js"),
  Chunk954313 = require("./954313.js"),
  Chunk688641 = require("./688641.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk837815 = require("./837815.js");

function g(e) {
  let {
    channelId: t
  } = e, g = (0, i.e7)([s.Z], () => s.Z.getChannel(t), [t]), b = (0, d.sz)(t), _ = null != (0, d.qY)(t), {
    canManageGuildEvent: y
  } = (0, o.XJ)(g), C = (0, i.cj)([u.ZP], () => b.reduce((e, t) => (e[t.id] = u.ZP.getUserCount(t.id, (0, p.DK)(t)), e), {}));
  return b.length < 1 || _ ? null : (0, r.jsx)(r.Fragment, {
    children: b.map(e => (0, r.jsx)(f.Z, {
      icon: (0, r.jsx)(a.Que, {
        size: "custom",
        color: "currentColor",
        height: 20,
        width: 20
      }),
      color: l.Z.unsafe_rawColors.GREEN_360.css,
      title: h.intl.formatToPlainString(y(e) ? h.t["1vGXqM"] : h.t.xMJyla, {
        eventName: e.name
      }),
      description: h.intl.formatToPlainString(h.t.PTebCR, {
        startTime: (0, p.ub)(e.scheduled_start_time).startDateTimeString
      }),
      onClick: () => {
        y(e) ? (0, a.ZDy)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("84722"), n.e("51885")]).then(n.bind(n, 296864));
          return n => {
            var i, l;
            return (0, r.jsx)(t, (i = function(e) {
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
            }({}, n), l = l = {
              event: e
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(l)).forEach(function(e) {
              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
            }), i))
          }
        }) : (0, c.bO)({
          eventId: e.id
        })
      },
      userCount: C[e.id],
      className: m.eventPrompt
    }, e.id))
  })
}