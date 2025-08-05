/** Chunk was on 54433 **/
n.d(t, {
  Z: () => f
});
var i = n(255367);
n(73800);
var l = n(780384),
  r = n(481060),
  s = n(410030),
  a = n(518950),
  o = n(51144),
  C = n(105759),
  d = n(898969),
  c = n(703614),
  u = n(182294),
  p = n(388032),
  x = n(332546);
let f = () => {
  let e = (0, C.Z)(),
    {
      avatarSrc: t,
      eventHandlers: n
    } = (0, a.Z)({
      userId: null == e ? void 0 : e.id,
      size: u.EF.SIZE_32,
      animateOnHover: !0
    }),
    f = (0, s.Fg)(),
    h = (0, l.ap)(f),
    j = o.ZP.getName(e),
    m = h ? d.Z : c.Z;
  return null == e ? null : (0, i.jsxs)("div", {
    className: x.attributionBannerContainer,
    children: [(0, i.jsx)("div", {
      className: x.avatarContainer,
      children: (0, i.jsx)(r.qEK, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = i
          })
        }
        return e
      }({
        src: t,
        "aria-label": e.username,
        size: u.EF.SIZE_32
      }, n))
    }), (0, i.jsx)(r.Text, {
      variant: "text-xs/bold",
      className: x.bannerHeader,
      children: p.intl.format(p.t.oxhCOj, {
        userName: j
      })
    }), (0, i.jsx)(m, {
      className: x.bannerIcon
    })]
  })
}