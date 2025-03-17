/** Chunk was on 53494 **/
n.d(t, {
  Z: () => c
}), n(47120);
var r = n(200651);
n(192379);
var i = n(481060),
  o = n(619915),
  l = n(449932),
  a = n(561788),
  s = n(248657);

function c(e) {
  let {
    channel: t,
    onAction: n
  } = e, c = (0, o.ZP)(t), u = Array.from((0, o.uF)(c).values());
  return 0 === u.length ? null : (0, r.jsxs)(i.Ttm, {
    className: s.container,
    children: [(0, r.jsx)("div", {
      className: s.popoutHeaderContainer,
      children: (0, r.jsx)(a.Z, {
        channel: t
      })
    }), (0, r.jsx)("div", {
      className: s.headerDivider
    }), u.map((e, i) => {
      var o;
      return (0, r.jsx)(l.Z, {
        embeddedApp: e,
        presenceActivity: null !== (o = e.presenceActivity) && void 0 !== o ? o : void 0,
        channel: t,
        onAction: n
      }, i)
    })]
  })
}