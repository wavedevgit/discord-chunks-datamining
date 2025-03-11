/** Chunk was on 99759 **/
n.d(t, {
  Z: () => u
});
var r = n(200651),
  a = n(192379),
  l = n(481060),
  o = n(493683),
  i = n(699516),
  c = n(594174),
  s = n(933557),
  d = n(388032);

function u(e, t) {
  let u = a.useCallback(() => {
    let a = (0, s.F6)(e, c.default, i.Z),
      u = d.NW.formatToPlainString(d.t.hJ5Ap6, {
        name: a
      }),
      b = d.NW.format(d.t.SSIVOj, {
        name: a
      });
    e.isManaged() && (u = d.NW.formatToPlainString(d.t.hVGjER, {
      name: a
    }), b = d.NW.format(d.t.IK1Qvr, {
      name: a
    }));
    let f = function(n) {
      let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      o.Z.closePrivateChannel(e.id, t, r)
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
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = r
          })
        }
        return e
      }({
        header: u,
        body: b,
        onSubmit: f
      }, t))
    })
  }, [e, t]);
  return (0, r.jsx)(l.sNh, {
    id: "leave-channel",
    label: d.NW.string(d.t["26C4oq"]),
    action: u,
    color: "danger"
  })
}