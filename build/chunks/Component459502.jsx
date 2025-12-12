/** Chunk was on 40184 **/
/** chunk id: 459502, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk357156 = require("./357156.js"),
  Chunk516191 = require("./516191.jsx"),
  Chunk430104 = require("./430104.js"),
  Chunk592125 = require("./592125.js"),
  Chunk115648 = require("./115648.js"),
  Chunk15274 = require("./15274.jsx"),
  Chunk924301 = require("./924301.js"),
  Chunk658041 = require("./658041.js"),
  Chunk504160 = require("./504160.js"),
  Chunk554747 = require("./554747.js"),
  Chunk854698 = require("./854698.js"),
  Chunk688641 = require("./688641.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk144914 = require("./144914.js");

function O(e) {
  let {
    channelId: t,
    showDismiss: O = true
  } = e, x = (0, r.e7)([u.Z], () => u.Z.getChannel(t), [t]), E = (0, g.sz)(t), j = null != (0, g.qY)(t), {
    canManageGuildEvent: S
  } = (0, o.XJ)(x), _ = (0, r.e7)([d.Z], () => E.filter(e => !d.Z.isEventDismissed(e.id)), [E]), P = (0, r.cj)([f.ZP], () => _.reduce((e, t) => (e[t.id] = f.ZP.getUserCount(t.id, (0, b.DK)(t)), e), {}), [_]);
  return _.length < 1 || j ? null : (0, i.jsx)(i.Fragment, {
    children: _.map(e => (0, i.jsx)(C.Z, {
      icon: (0, i.jsx)(a.Que, {
        size: "custom",
        color: "currentColor",
        height: 20,
        width: 20
      }),
      color: l.Z.unsafe_rawColors.GREEN_360.css,
      title: y.intl.formatToPlainString(S(e) ? y.t["1vGXqM"] : y.t.xMJyla, {
        eventName: e.name
      }),
      description: y.intl.formatToPlainString(y.t.PTebCR, {
        startTime: (0, b.ub)(e.scheduled_start_time).startDateTimeString
      }),
      onClick: () => (function(e) {
        let t = S(e),
          r = () => {
            (0, a.ZDy)(async () => {
              let {
                default: t
              } = await Promise.all([n.e("84722"), n.e("5992")]).then(n.bind(n, 296864));
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
            })
          };
        t && (0, c.u1)() && (0, h.s)(e) ? (0, s.Z)(r) : t ? r() : (0, p.bO)({
          eventId: e.id
        })
      })(e),
      onDismiss: O ? () => {
        var t;
        return t = e.id, void(0, m.Xy)(t)
      } : true,
      userCount: P[e.id],
      className: v.eventPrompt
    }, e.id))
  })
}