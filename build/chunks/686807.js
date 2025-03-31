/** Chunk was on 99120 **/
n.d(t, {
  Z: () => f
});
var r = n(200651);
n(192379);
var i = n(481060),
  o = n(201895),
  l = n(471445),
  a = n(823379),
  s = n(303737),
  c = n(293810),
  u = n(388032),
  d = n(535006);

function p(e) {
  let {
    channelId: t
  } = e, n = (0, s.m7)(t);
  if (null == n) return "[".concat(u.NW.string(u.t.bz1PZW), "]");
  let a = n.isMediaChannel() ? i.XBm : (0, l.Th)(n.type);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.nn4, {
      children: (0, o.ZP)({
        channel: n
      })
    }), (0, r.jsxs)("div", {
      "aria-hidden": !0,
      children: [null != a && (0, r.jsx)(a, {
        className: d.icon,
        "aria-hidden": !0
      }), n.name]
    })]
  })
}

function f(e) {
  switch (e.ref_type) {
    case c.Qs.CHANNEL:
      return (0, r.jsx)(p, {
        channelId: e.ref_id
      });
    case c.Qs.INTANGIBLE:
      return e.name;
    default:
      (0, a.vE)(e)
  }
}