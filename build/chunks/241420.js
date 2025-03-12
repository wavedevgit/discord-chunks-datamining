/** Chunk was on 92219 **/
t.d(n, {
  default: () => g
});
var a = t(200651);
t(192379);
var r = t(481060),
  i = t(546957),
  o = t(190014),
  c = t(301812),
  l = t(988043),
  d = t(919539),
  s = t(526761),
  _ = t(388032),
  u = t(310037);

function m(e) {
  let {
    guildId: n
  } = e;
  return (0, a.jsxs)(i.Z, {
    children: [(0, a.jsx)(l.Z, {
      ingress: s.f4.SERVER_PRIVACY_MODAL,
      guildId: n
    }), (0, a.jsx)(d.Z, {
      ingress: s.f4.SERVER_PRIVACY_MODAL,
      guildId: n
    }), (0, a.jsx)(c.Z, {
      ingress: s.f4.SERVER_PRIVACY_MODAL,
      guildId: n
    }), (0, a.jsx)(o.Z, {
      ingress: s.f4.SERVER_PRIVACY_MODAL,
      guildId: n
    }), (0, a.jsx)(r.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: _.NW.format(_.t.LNsV09, {
        policyLink: "https://discord.com/safety/360043709612-our-policies"
      })
    })]
  })
}

function g(e) {
  let {
    guild: n,
    transitionState: t,
    onClose: i
  } = e, o = "".concat(_.NW.string(_.t.BayiAg), "—").concat(null != n ? n.toString() : "??");
  return (0, a.jsxs)(r.Y0X, {
    transitionState: t,
    size: r.CgR.SMALL,
    "aria-label": o,
    children: [(0, a.jsx)(r.xBx, {
      children: (0, a.jsx)(r.X6q, {
        variant: "heading-lg/semibold",
        children: o
      })
    }), (0, a.jsx)(r.hzk, {
      className: u.content,
      children: (0, a.jsx)(m, {
        guildId: n.id
      })
    }), (0, a.jsx)(r.mzw, {
      children: (0, a.jsx)(r.zxk, {
        onClick: () => i(),
        children: _.NW.string(_.t.i4jeWV)
      })
    })]
  })
}