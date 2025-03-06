/** Chunk was on 97434 **/
n.d(t, {
  default: () => b
});
var a = n(200651);
n(192379);
var i = n(481060),
  o = n(546957),
  r = n(190014),
  c = n(301812),
  l = n(988043),
  d = n(919539),
  _ = n(526761),
  u = n(388032),
  s = n(310037);

function p(e) {
  let {
    guildId: t
  } = e;
  return (0, a.jsxs)(o.Z, {
    children: [(0, a.jsx)(l.Z, {
      ingress: _.f4.SERVER_PRIVACY_MODAL,
      guildId: t
    }), (0, a.jsx)(d.Z, {
      ingress: _.f4.SERVER_PRIVACY_MODAL,
      guildId: t
    }), (0, a.jsx)(c.Z, {
      ingress: _.f4.SERVER_PRIVACY_MODAL,
      guildId: t
    }), (0, a.jsx)(r.Z, {
      ingress: _.f4.SERVER_PRIVACY_MODAL,
      guildId: t
    }), (0, a.jsx)(i.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: u.NW.format(u.t.LNsV09, {
        policyLink: "https://discord.com/safety/360043709612-our-policies"
      })
    })]
  })
}

function b(e) {
  let {
    guild: t,
    transitionState: n,
    onClose: o
  } = e, r = "".concat(u.NW.string(u.t.BayiAg), "—").concat(null != t ? t.toString() : "??");
  return (0, a.jsxs)(i.Y0X, {
    transitionState: n,
    size: i.CgR.SMALL,
    "aria-label": r,
    children: [(0, a.jsx)(i.xBx, {
      children: (0, a.jsx)(i.X6q, {
        variant: "heading-lg/semibold",
        children: r
      })
    }), (0, a.jsx)(i.hzk, {
      className: s.content,
      children: (0, a.jsx)(p, {
        guildId: t.id
      })
    }), (0, a.jsx)(i.mzw, {
      children: (0, a.jsx)(i.zxk, {
        onClick: () => o(),
        children: u.NW.string(u.t.i4jeWV)
      })
    })]
  })
}