/** Chunk was on 94387 **/
n.d(t, {
  default: () => p
});
var o = n(200651);
n(192379);
var i = n(481060),
  a = n(546957),
  l = n(190014),
  c = n(301812),
  _ = n(988043),
  r = n(919539),
  d = n(526761),
  u = n(388032),
  s = n(67137);

function b(e) {
  let {
    guildId: t
  } = e;
  return (0, o.jsxs)(a.Z, {
    children: [(0, o.jsx)(_.Z, {
      ingress: d.f4.SERVER_PRIVACY_MODAL,
      guildId: t
    }), (0, o.jsx)(r.Z, {
      ingress: d.f4.SERVER_PRIVACY_MODAL,
      guildId: t
    }), (0, o.jsx)(c.Z, {
      ingress: d.f4.SERVER_PRIVACY_MODAL,
      guildId: t
    }), (0, o.jsx)(l.Z, {
      ingress: d.f4.SERVER_PRIVACY_MODAL,
      guildId: t
    }), (0, o.jsx)(i.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: u.NW.format(u.t.LNsV09, {
        policyLink: "https://discord.com/safety/360043709612-our-policies"
      })
    })]
  })
}

function p(e) {
  let {
    guild: t,
    transitionState: n,
    onClose: a
  } = e, l = "".concat(u.NW.string(u.t.BayiAg), "—").concat(null != t ? t.toString() : "??");
  return (0, o.jsxs)(i.Y0X, {
    transitionState: n,
    size: i.CgR.SMALL,
    "aria-label": l,
    children: [(0, o.jsx)(i.xBx, {
      children: (0, o.jsx)(i.X6q, {
        variant: "heading-lg/semibold",
        children: l
      })
    }), (0, o.jsx)(i.hzk, {
      className: s.content,
      children: (0, o.jsx)(b, {
        guildId: t.id
      })
    }), (0, o.jsx)(i.mzw, {
      children: (0, o.jsx)(i.zxk, {
        onClick: () => a(),
        children: u.NW.string(u.t.i4jeWV)
      })
    })]
  })
}