/** Chunk was on 11814 **/
n.d(t, {
  Z: () => h
});
var r = n(200651);
n(192379);
var i = n(120356),
  a = n.n(i),
  o = n(481060),
  l = n(385499),
  s = n(739566),
  c = n(464891),
  d = n(83561),
  u = n(834129),
  p = n(674563),
  m = n(388032),
  f = n(39684);

function h(e) {
  let {
    message: t,
    compact: n,
    usernameHook: i
  } = e, h = (0, s.ZP)(t), g = i(h), {
    avatarSrc: _,
    eventHandlers: {
      onMouseEnter: b,
      onMouseLeave: v
    }
  } = (0, d.m)(!0);
  return (0, r.jsx)("div", {
    onMouseEnter: b,
    onMouseLeave: v,
    children: (0, r.jsx)(u.Z, {
      className: a()(f.mainContainer, {
        [f.compact]: n
      }),
      iconNode: n ? null : (0, r.jsx)(d.S, {
        src: _
      }),
      iconContainerClassName: f.iconContainer,
      compact: n,
      children: (0, r.jsxs)("div", {
        className: a()(f.content, {
          [f.compact]: n
        }),
        children: [(0, r.jsx)(c.nD, {
          message: t,
          messageClassname: f.spanCorrection,
          className: a()(f.usernameContainer, f.spanCorrection, {
            [f.compact]: n
          }),
          username: (0, r.jsxs)("div", {
            className: f.spanCorrection,
            children: [(0, r.jsx)(o.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: f.username,
              children: m.NW.string(m.t.hG1StL)
            }), (0, r.jsx)(l.Z, {
              type: p.Hb.SYSTEM_DM,
              className: f.systemTag
            })]
          }),
          compact: n,
          showTimestamp: !0
        }), (0, r.jsx)("div", {
          className: a()(f.__invalid_messageContent, {
            [f.compact]: n
          }),
          children: m.NW.format(m.t.qntXNT, {
            username: h.nick,
            usernameHook: g
          })
        })]
      })
    })
  })
}