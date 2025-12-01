/** Chunk was on 34740 **/
/** chunk id: 459502, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk357156 = require("./357156.js"),
  Chunk592125 = require("./592125.js"),
  Chunk15274 = require("./15274.jsx"),
  Chunk924301 = require("./924301.js"),
  Chunk554747 = require("./554747.js"),
  Chunk854698 = require("./854698.js"),
  Chunk688641 = require("./688641.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk837815 = require("./837815.js");

function b(e) {
  let {
    channelId: t,
    showDismiss: b = true
  } = e, y = (0, l.e7)([c.Z], () => c.Z.getChannel(t), [t]), C = (0, p.sz)(t), v = null != (0, p.qY)(t), {
    canManageGuildEvent: _
  } = (0, s.XJ)(y), [O, x] = r.useState(() => new Set), j = r.useMemo(() => C.filter(e => !O.has(e.id)), [C, O]), E = (0, l.cj)([d.ZP], () => j.reduce((e, t) => (e[t.id] = d.ZP.getUserCount(t.id, (0, h.DK)(t)), e), {}), [j]);
  return j.length < 1 || v ? null : (0, i.jsx)(i.Fragment, {
    children: j.map(e => (0, i.jsx)(f.Z, {
      icon: (0, i.jsx)(o.Que, {
        size: "custom",
        color: "currentColor",
        height: 20,
        width: 20
      }),
      color: a.Z.unsafe_rawColors.GREEN_360.css,
      title: m.intl.formatToPlainString(_(e) ? m.t["1vGXqM"] : m.t.xMJyla, {
        eventName: e.name
      }),
      description: m.intl.formatToPlainString(m.t.PTebCR, {
        startTime: (0, h.ub)(e.scheduled_start_time).startDateTimeString
      }),
      onClick: () => {
        _(e) ? (0, o.ZDy)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("84722"), n.e("51885")]).then(n.bind(n, 296864));
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
      onDismiss: b ? () => {
        var t;
        return t = e.id, void x(e => new Set(e).add(t))
      } : true,
      userCount: E[e.id],
      className: g.eventPrompt
    }, e.id))
  })
}