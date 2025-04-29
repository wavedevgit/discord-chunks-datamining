/** Chunk was on 88235 **/
n.d(t, {
  Z: () => f
}), n(953529), n(997841);
var r = n(200651);
n(192379);
var l = n(597312),
  i = n(442837),
  o = n(481060),
  s = n(860719),
  a = n(621853),
  c = n(388032),
  d = n(989421);

function u(e) {
  let {
    icon: t,
    title: n,
    description: l
  } = e;
  return (0, r.jsxs)("div", {
    className: d.row,
    children: [(0, r.jsx)("div", {
      className: d.rowIcon,
      children: (0, r.jsx)(t, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor"
      })
    }), (0, r.jsxs)("div", {
      className: d.rowText,
      children: [(0, r.jsx)(o.X6q, {
        variant: "text-xs/semibold",
        children: n
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: l
      })]
    })]
  })
}

function f(e) {
  let {
    user: t
  } = e, n = (0, i.e7)([a.Z], () => {
    var e;
    return null == (e = a.Z.getUserProfile(t.id)) ? void 0 : e.application
  }), {
    hasMessageContent: f,
    hasGuildPresences: p,
    hasGuildMembers: h
  } = (0, s.w)({
    flags: null == n ? void 0 : n.flags
  });
  return (0, r.jsxs)(l.zJ, {
    fade: !0,
    className: d.scroller,
    children: [f && (0, r.jsx)(u, {
      icon: o.kBi,
      title: c.intl.string(c.t["7Tmhfn"]),
      description: c.intl.string(c.t["eu5x7+"])
    }), p && (0, r.jsx)(u, {
      icon: o.iWm,
      title: c.intl.string(c.t.awYSsL),
      description: c.intl.string(c.t.TpsXoK)
    }), h && (0, r.jsx)(u, {
      icon: o.BFJ,
      title: c.intl.string(c.t.WuKeSE),
      description: c.intl.string(c.t.wOBmtb)
    }), (0, r.jsx)(o.Text, {
      variant: "text-xs/normal",
      children: c.intl.format(c.t.b6nqk5, {
        helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975"
      })
    })]
  })
}