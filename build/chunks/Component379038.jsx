/** Chunk was on 27919 **/
/** chunk id: 379038, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk981888 = require("./981888.js"),
  Chunk157689 = require("./157689.js"),
  Chunk894017 = require("./894017.js"),
  Chunk854698 = require("./854698.js"),
  Chunk440371 = require("./440371.jsx"),
  Chunk388032 = require("./388032.jsx");

function b(e) {
  let {
    guildEvent: t,
    recurrenceId: n,
    transitionState: b,
    onClose: p
  } = e, f = (0, d.Z)(n, t.id), x = (0, c.iA)(n, t), h = (0, c.x6)(x, f), [j, v] = r.useState(h), [m, {
    loading: D,
    error: O
  }] = (0, u.Z)(() => {
    let e = (0, s.Z)(t, n, j, f);
    return null == O && p(), e
  });
  return (0, l.jsxs)(i.Modal, {
    transitionState: b,
    title: g.intl.string(g.t.wmVmXN),
    actions: [{
      variant: "secondary",
      text: g.intl.string(g.t["ETE/oC"]),
      onClick: p
    }, {
      variant: "primary",
      text: g.intl.string(g.t.e5VEcE),
      onClick: m,
      loading: D,
      disabled: (0, c.Y4)(j, h)
    }],
    onClose: p,
    children: [(0, l.jsx)(o.Z, {
      onScheduleChange: e => {
        let {
          startDate: t,
          endDate: n
        } = e;
        null != t && null != n && n.isBefore(t) && (n = t.clone().add(1, "hour")), v({
          startDate: t,
          endDate: n
        })
      },
      schedule: j,
      showEndDate: null != j.endDate,
      requireEndDate: null != j.endDate,
      guildId: t.guild_id,
      recurrenceRule: t.recurrence_rule
    }), null != O ? (0, l.jsx)(a.Text, {
      color: "text-feedback-critical",
      variant: "text-xs/normal",
      children: O.getAnyErrorMessage()
    }) : null]
  })
}