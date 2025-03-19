/** Chunk was on 87395 **/
n.d(t, {
  default: () => p
});
var o = n(200651);
n(192379);
var a = n(481060),
  r = n(546957),
  i = n(190014),
  c = n(301812),
  l = n(988043),
  _ = n(919539),
  d = n(526761),
  s = n(388032),
  u = n(310037);

function b(e) {
  let {
    guildId: t
  } = e;
  return (0, o.jsxs)(r.Z, {
    children: [(0, o.jsx)(l.Z, {
      ingress: d.f4.SERVER_PRIVACY_MODAL,
      guildId: t
    }), (0, o.jsx)(_.Z, {
      ingress: d.f4.SERVER_PRIVACY_MODAL,
      guildId: t
    }), (0, o.jsx)(c.Z, {
      ingress: d.f4.SERVER_PRIVACY_MODAL,
      guildId: t
    }), (0, o.jsx)(i.Z, {
      ingress: d.f4.SERVER_PRIVACY_MODAL,
      guildId: t
    }), (0, o.jsx)(a.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: s.NW.format(s.t.LNsV09, {
        policyLink: "https://discord.com/safety/360043709612-our-policies"
      })
    })]
  })
}

function p(e) {
  let {
    guild: t,
    transitionState: n,
    onClose: r
  } = e, i = "".concat(s.NW.string(s.t.BayiAg), "—").concat(null != t ? t.toString() : "??");
  return (0, o.jsxs)(a.Y0X, {
    transitionState: n,
    size: a.CgR.SMALL,
    "aria-label": i,
    children: [(0, o.jsx)(a.xBx, {
      children: (0, o.jsx)(a.X6q, {
        variant: "heading-lg/semibold",
        children: i
      })
    }), (0, o.jsx)(a.hzk, {
      className: u.content,
      children: (0, o.jsx)(b, {
        guildId: t.id
      })
    }), (0, o.jsx)(a.mzw, {
      children: (0, o.jsx)(a.zxk, {
        onClick: () => r(),
        children: s.NW.string(s.t.i4jeWV)
      })
    })]
  })
}