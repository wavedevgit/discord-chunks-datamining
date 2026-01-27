/** Chunk was on 41727 **/
/** chunk id: 394412, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk931991 = require("./931991.js"),
  Chunk734057 = require("./734057.js"),
  Chunk87401 = require("./87401.js"),
  Chunk707592 = require("./707592.jsx"),
  Chunk698441 = require("./698441.js"),
  Chunk935159 = require("./935159.js"),
  Chunk508654 = require("./508654.js"),
  Chunk974930 = require("./974930.js"),
  Chunk47868 = require("./47868.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk242182 = require("./242182.js");

function A(e) {
  let {
    channelId: t,
    showDismiss: A = true
  } = e, y = (0, l.bG)([o.A], () => o.A.getChannel(t), [t]), _ = (0, h.RO)(t), O = null != (0, h.Qs)(t), {
    canManageGuildEvent: j
  } = (0, a.nr)(y), v = (0, l.bG)([c.A], () => _.filter(e => !c.A.isEventDismissed(e.id)), [_]), x = (0, l.cf)([d.Ay], () => v.reduce((e, t) => (e[t.id] = d.Ay.getUserCount(t.id, (0, f.G3)(t)), e), {}), [v]);
  return v.length < 1 || O ? null : (0, r.jsx)(r.Fragment, {
    children: v.map(e => (0, r.jsx)(g.A, {
      icon: (0, r.jsx)(s.CTc, {
        size: "custom",
        color: "currentColor",
        height: 20,
        width: 20
      }),
      color: i.A.unsafe_rawColors.GREEN_360.css,
      title: m.intl.formatToPlainString(j(e) ? m.t["1vGXqM"] : m.t.xMJyla, {
        eventName: e.name
      }),
      description: m.intl.formatToPlainString(m.t.PTebCR, {
        startTime: (0, f.CC)(e.scheduled_start_time).startDateTimeString
      }),
      onClick: () => {
        j(e) ? (0, s.mMO)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("51354"), n.e("77223"), n.e("24531")]).then(n.bind(n, 199226));
          return n => {
            var l, i;
            return (0, r.jsx)(t, (l = function(e) {
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
            }({}, n), i = i = {
              event: e
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(i)).forEach(function(e) {
              Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
            }), l))
          }
        }) : (0, u.uR)({
          eventId: e.id
        })
      },
      onDismiss: A ? () => {
        var t;
        return t = e.id, void(0, p.Nt)(t)
      } : true,
      userCount: x[e.id],
      className: b.f
    }, e.id))
  })
}