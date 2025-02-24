/** Chunk was on 62242 **/
n.d(t, {
  default: () => m
});
var r = n(200651);
n(192379);
var i = n(481060),
  o = n(546957),
  a = n(190014),
  c = n(301812),
  l = n(988043),
  s = n(919539),
  _ = n(526761),
  d = n(388032),
  u = n(67137);

function g(e) {
  let {
    guildId: t
  } = e;
  return (0, r.jsxs)(o.Z, {
    children: [(0, r.jsx)(l.Z, {
      ingress: _.f4.SERVER_PRIVACY_MODAL,
      guildId: t
    }), (0, r.jsx)(s.Z, {
      ingress: _.f4.SERVER_PRIVACY_MODAL,
      guildId: t
    }), (0, r.jsx)(c.Z, {
      ingress: _.f4.SERVER_PRIVACY_MODAL,
      guildId: t
    }), (0, r.jsx)(a.Z, {
      ingress: _.f4.SERVER_PRIVACY_MODAL,
      guildId: t
    }), (0, r.jsx)(i.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: d.NW.format(d.t.LNsV09, {
        policyLink: "https://discord.com/safety/360043709612-our-policies"
      })
    })]
  })
}

function m(e) {
  let {
    guild: t,
    transitionState: n,
    onClose: o
  } = e, a = "".concat(d.NW.string(d.t.BayiAg), "—").concat(null != t ? t.toString() : "??");
  return (0, r.jsxs)(i.Y0X, {
    transitionState: n,
    size: i.CgR.SMALL,
    "aria-label": a,
    children: [(0, r.jsx)(i.xBx, {
      children: (0, r.jsx)(i.X6q, {
        variant: "heading-lg/semibold",
        children: a
      })
    }), (0, r.jsx)(i.hzk, {
      className: u.content,
      children: (0, r.jsx)(g, {
        guildId: t.id
      })
    }), (0, r.jsx)(i.mzw, {
      children: (0, r.jsx)(i.zxk, {
        onClick: () => o(),
        children: d.NW.string(d.t.i4jeWV)
      })
    })]
  })
}