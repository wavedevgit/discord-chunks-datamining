/** Chunk was on 40184 **/
/** chunk id: 459502, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk357156 = require("./357156.js"),
  Chunk592125 = require("./592125.js"),
  Chunk115648 = require("./115648.js"),
  Chunk15274 = require("./15274.jsx"),
  Chunk924301 = require("./924301.js"),
  Chunk504160 = require("./504160.js"),
  Chunk554747 = require("./554747.js"),
  Chunk854698 = require("./854698.js"),
  Chunk688641 = require("./688641.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk144914 = require("./144914.js");

function C(e) {
  let {
    channelId: t,
    showDismiss: C = true
  } = e, y = (0, r.e7)([s.Z], () => s.Z.getChannel(t), [t]), v = (0, f.sz)(t), x = null != (0, f.qY)(t), {
    canManageGuildEvent: O
  } = (0, o.XJ)(y), E = (0, r.e7)([c.Z], () => v.filter(e => !c.Z.isEventDismissed(e.id)), [v]), j = (0, r.cj)([d.ZP], () => E.reduce((e, t) => (e[t.id] = d.ZP.getUserCount(t.id, (0, h.DK)(t)), e), {}), [E]);
  return E.length < 1 || x ? null : (0, i.jsx)(i.Fragment, {
    children: E.map(e => (0, i.jsx)(m.Z, {
      icon: (0, i.jsx)(a.Que, {
        size: "custom",
        color: "currentColor",
        height: 20,
        width: 20
      }),
      color: l.Z.unsafe_rawColors.GREEN_360.css,
      title: g.intl.formatToPlainString(O(e) ? g.t["1vGXqM"] : g.t.xMJyla, {
        eventName: e.name
      }),
      description: g.intl.formatToPlainString(g.t.PTebCR, {
        startTime: (0, h.ub)(e.scheduled_start_time).startDateTimeString
      }),
      onClick: () => {
        O(e) ? (0, a.ZDy)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("84722"), n.e("58923")]).then(n.bind(n, 296864));
          return n => {
            var r, l;
            return (0, i.jsx)(t, (r = function(e) {
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
            }({}, n), l = l = {
              event: e
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                n.push.apply(n, i)
              }
              return n
            })(Object(l)).forEach(function(e) {
              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
            }), r))
          }
        }) : (0, u.bO)({
          eventId: e.id
        })
      },
      onDismiss: C ? () => {
        var t;
        return t = e.id, void(0, p.Xy)(t)
      } : true,
      userCount: j[e.id],
      className: b.eventPrompt
    }, e.id))
  })
}