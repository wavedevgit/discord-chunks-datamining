/** Chunk was on 43940 **/
/** chunk id: 271983, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk645034 = require("./645034.js"),
  Chunk664030 = require("./664030.js"),
  Chunk722260 = require("./722260.js"),
  Chunk974930 = require("./974930.js"),
  Chunk422845 = require("./422845.jsx"),
  Chunk985018 = require("./985018.jsx");

function h(e) {
  let {
    guildEvent: t,
    recurrenceId: n,
    transitionState: h,
    onClose: p
  } = e, x = (0, u.A)(n, t.id), b = (0, c.CI)(n, t), j = (0, c.Ri)(b, x), [v, m] = r.useState(j), [f, {
    loading: D,
    error: y
  }] = (0, s.A)(() => {
    let e = (0, d.A)(t, n, v, x);
    return null == y && p(), e
  });
  return (0, l.jsxs)(i.Modal, {
    transitionState: h,
    title: g.intl.string(g.t.wmVmXN),
    actions: [{
      variant: "secondary",
      text: g.intl.string(g.t["ETE/oC"]),
      onClick: p
    }, {
      variant: "primary",
      text: g.intl.string(g.t.e5VEcE),
      onClick: f,
      loading: D,
      disabled: (0, c.sv)(v, j)
    }],
    onClose: p,
    children: [(0, l.jsx)(o.A, {
      onScheduleChange: e => {
        let {
          startDate: t,
          endDate: n
        } = e;
        null != t && null != n && n.isBefore(t) && (n = t.clone().add(1, "hour")), m({
          startDate: t,
          endDate: n
        })
      },
      schedule: v,
      showEndDate: null != v.endDate,
      requireEndDate: null != v.endDate,
      guildId: t.guild_id,
      recurrenceRule: t.recurrence_rule
    }), null != y ? (0, l.jsx)(a.Text, {
      color: "text-feedback-critical",
      variant: "text-xs/normal",
      children: y.getAnyErrorMessage()
    }) : null]
  })
}