/** Chunk was on 1272 **/
n.d(t, {
  Z: () => d
});
var r = n(200651);
n(192379);
var i = n(120356),
  l = n.n(i),
  o = n(442837),
  a = n(129861),
  s = n(700582),
  c = n(699516);
n(51144);
var u = n(966671);
let d = function(e) {
  let {
    user: t,
    hovered: n,
    subText: i,
    showAccountIdentifier: d,
    status: p,
    isMobile: h,
    className: g
  } = e, f = (0, o.e7)([c.Z], () => c.Z.getNickname(t.id));
  return (0, r.jsxs)("div", {
    className: l()(u.userInfo, g, {
      [u.hovered]: n
    }),
    children: [(0, r.jsx)(s.Z, {
      user: t,
      className: u.avatar,
      animate: n,
      status: p,
      isMobile: h
    }), (0, r.jsxs)("div", {
      className: u.text,
      children: [(0, r.jsx)(a.Z, {
        user: t,
        nick: f,
        botClass: u.botTag,
        className: l()(u.discordTag, {
          [u.alignPomelo]: t.isPomelo()
        }),
        usernameClass: u.username,
        discriminatorClass: u.discriminator,
        showAccountIdentifier: d
      }), (0, r.jsx)("div", {
        className: u.subtext,
        children: i
      })]
    })]
  })
}