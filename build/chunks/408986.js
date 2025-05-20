/** Chunk was on 43473 **/
n.d(t, {
  Z: () => m
});
var o = n(255367);
n(73800);
var r = n(481060),
  c = n(37234),
  i = n(566898),
  a = n(769654),
  l = n(785717),
  s = n(806729),
  d = n(821179),
  u = n(264481),
  f = n(274151);

function m(e) {
  let {
    user: t,
    onClose: n
  } = e, {
    trackUserProfileAction: m
  } = (0, l.KZ)(), {
    mutualGuilds: p,
    isFetching: b
  } = (0, s.Z)(t);
  return (0, o.jsx)(r.Ttm, {
    className: f.scroller,
    fade: !0,
    children: null == p && b ? Array.from({
      length: 10
    }).map((e, t) => (0, o.jsxs)("div", {
      className: f.loadingItem,
      children: [(0, o.jsx)(i.ZT, {
        width: 40,
        opacity: .08
      }), (0, o.jsx)(i.ZT, {
        width: 135,
        opacity: .08
      })]
    }, t)) : (null != p || b) && (null == p ? void 0 : p.length) !== 0 ? null == p ? void 0 : p.map(e => {
      let {
        guild: r,
        nick: i
      } = e;
      return (0, o.jsx)(d.Z, {
        user: t,
        guild: r,
        nick: i,
        onSelect: () => {
          m({
            action: "PRESS_MUTUAL_GUILD"
          }), (0, a.X)(r.id), n(), (0, c.xf)()
        }
      }, r.id)
    }) : (0, o.jsx)(u.b0, {})
  })
}