/** Chunk was on 1272 (4b1b41bf0e3472e1.js) **/
n.d(t, {
  Z: () => f
});
var r = n(200651);
n(192379);
var i = n(990547),
  l = n(481060),
  o = n(313201),
  a = n(703656),
  s = n(63063),
  c = n(758119),
  u = n(981631),
  d = n(388032),
  p = n(386724);

function h() {
  (0, c.qV)(), (0, a.uL)(u.Z5c.LOGIN)
}

function f(e) {
  let {
    underageMessage: t,
    transitionState: a
  } = e, c = (0, o.Dt)();
  return (0, r.jsxs)(l.Y0X, {
    transitionState: a,
    size: l.CgR.SMALL,
    "aria-labelledby": c,
    impression: {
      impressionName: i.ImpressionNames.USER_AGE_GATE_UNDERAGE,
      impressionProperties: {
        existing_user: !0
      }
    },
    children: [(0, r.jsx)(l.hzk, {
      children: (0, r.jsxs)("div", {
        className: p.container,
        children: [(0, r.jsx)("img", {
          alt: "",
          src: n(231443),
          className: p.img
        }), (0, r.jsx)(l.X6q, {
          variant: "heading-xl/semibold",
          className: p.title,
          id: c,
          children: d.NW.string(d.t["NR/zrK"])
        }), (0, r.jsx)(l.Text, {
          color: "header-secondary",
          className: p.subtitle,
          variant: "text-sm/normal",
          children: d.NW.format(d.t.b0QzXV, {
            underageMessage: null != t ? t : d.NW.string(d.t.WqEH4O),
            helpURL: s.Z.getArticleURL(u.BhN.AGE_GATE)
          })
        }), (0, r.jsx)(l.Text, {
          color: "header-secondary",
          className: p.subtitle,
          variant: "text-sm/normal",
          children: d.NW.format(d.t["3axQdH"], {
            days: 30
          })
        })]
      })
    }), (0, r.jsx)(l.mzw, {
      children: (0, r.jsx)(l.zxk, {
        size: l.PhG.SMALL,
        fullWidth: !0,
        onClick: h,
        children: d.NW.string(d.t.szzQ6O)
      })
    })]
  })
}