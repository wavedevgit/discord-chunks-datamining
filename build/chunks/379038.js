/** Chunk was on 27919 (ccd8c662fa1093a3.js) **/
n.d(t, {
  default: () => h
}), n(47120);
var r = n(200651),
  l = n(192379),
  i = n(481060),
  s = n(981888),
  a = n(157689),
  c = n(894017),
  o = n(854698),
  d = n(440371),
  u = n(388032),
  x = n(866131);

function h(e) {
  let {
    guildEvent: t,
    recurrenceId: n,
    transitionState: h,
    onClose: g
  } = e, j = (0, c.Z)(n, t.id), m = (0, o.iA)(n, t), f = (0, o.x6)(m, j), [b, p] = l.useState(f), [_, {
    loading: v,
    error: k
  }] = (0, s.Z)(() => {
    let e = (0, a.Z)(t, n, b, j);
    return null == k && g(), e
  });
  return (0, r.jsxs)(i.Y0X, {
    transitionState: h,
    children: [(0, r.jsx)(i.xBx, {
      children: (0, r.jsx)(i.X6q, {
        variant: "heading-lg/semibold",
        children: u.NW.string(u.t.wmVmXF)
      })
    }), (0, r.jsxs)(i.hzk, {
      className: x.content,
      children: [(0, r.jsx)(d.Z, {
        onScheduleChange: e => {
          let {
            startDate: t,
            endDate: n
          } = e;
          null != t && null != n && n.isBefore(t) && (n = t.clone().add(1, "hour")), p({
            startDate: t,
            endDate: n
          })
        },
        schedule: b,
        showEndDate: null != b.endDate,
        requireEndDate: null != b.endDate,
        guildId: t.guild_id,
        recurrenceRule: t.recurrence_rule
      }), null != k ? (0, r.jsx)(i.Text, {
        color: "text-danger",
        variant: "text-xs/normal",
        className: x.warning,
        children: k.getAnyErrorMessage()
      }) : null]
    }), (0, r.jsxs)(i.mzw, {
      className: x.footer,
      children: [(0, r.jsx)(i.zxk, {
        color: i.zxk.Colors.BRAND,
        onClick: _,
        className: x.button,
        submitting: v,
        disabled: (0, o.Y4)(b, f),
        children: u.NW.string(u.t.e5VEcH)
      }), (0, r.jsx)(i.zxk, {
        color: i.zxk.Colors.PRIMARY,
        onClick: g,
        children: u.NW.string(u.t["ETE/oK"])
      })]
    })]
  })
}