/** Chunk was on 1272 (46194273c01318d9.js) **/
n.d(t, {
  Z: () => u
});
var r = n(200651);
n(192379);
var i = n(481060),
  l = n(324262),
  o = n(981631),
  a = n(921944),
  s = n(388032),
  c = n(524094);

function u(e) {
  let {
    guild: t,
    markAsDismissed: u
  } = e;
  return (0, r.jsx)(l.Z, {
    guild: t,
    onDismissed: () => u(a.L.UNKNOWN),
    onClick: function() {
      (0, i.ZDy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 650233));
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
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[t] = r
            })
          }
          return e
        }({}, t))
      })
    },
    message: s.NW.string(s.t["1+hiPz"]),
    cta: s.NW.string(s.t.hvVgAQ),
    trackingSource: o.PsQ.HUB_LINK_NOTICE,
    type: o.vID.HUB_LINK,
    image: c
  })
}