/** Chunk was on 59500 **/
s.d(n, {
  default: () => g
});
var t = s(200651);
s(192379);
var e = s(481060),
  r = s(546957),
  c = s(190014),
  d = s(301812),
  a = s(988043),
  l = s(919539),
  o = s(526761),
  x = s(388032),
  u = s(67137);

function h(i) {
  let {
    guildId: n
  } = i;
  return (0, t.jsxs)(r.Z, {
    children: [(0, t.jsx)(a.Z, {
      ingress: o.f4.SERVER_PRIVACY_MODAL,
      guildId: n
    }), (0, t.jsx)(l.Z, {
      ingress: o.f4.SERVER_PRIVACY_MODAL,
      guildId: n
    }), (0, t.jsx)(d.Z, {
      ingress: o.f4.SERVER_PRIVACY_MODAL,
      guildId: n
    }), (0, t.jsx)(c.Z, {
      ingress: o.f4.SERVER_PRIVACY_MODAL,
      guildId: n
    }), (0, t.jsx)(e.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: x.NW.format(x.t.LNsV09, {
        policyLink: "https://discord.com/safety/360043709612-our-policies"
      })
    })]
  })
}

function g(i) {
  let {
    guild: n,
    transitionState: s,
    onClose: r
  } = i, c = "".concat(x.NW.string(x.t.BayiAg), "—").concat(null != n ? n.toString() : "??");
  return (0, t.jsxs)(e.Y0X, {
    transitionState: s,
    size: e.CgR.SMALL,
    "aria-label": c,
    children: [(0, t.jsx)(e.xBx, {
      children: (0, t.jsx)(e.X6q, {
        variant: "heading-lg/semibold",
        children: c
      })
    }), (0, t.jsx)(e.hzk, {
      className: u.content,
      children: (0, t.jsx)(h, {
        guildId: n.id
      })
    }), (0, t.jsx)(e.mzw, {
      children: (0, t.jsx)(e.zxk, {
        onClick: () => r(),
        children: x.NW.string(x.t.i4jeWV)
      })
    })]
  })
}