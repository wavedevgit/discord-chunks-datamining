/** Chunk was on 27919 **/
/** chunk id: 379038, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk981888 = require("./981888.js"),
  Chunk157689 = require("./157689.js"),
  Chunk894017 = require("./894017.js"),
  Chunk954313 = require("./954313.js"),
  Chunk440371 = require("./440371.jsx"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
  let {
    guildEvent: t,
    recurrenceId: n,
    transitionState: g,
    onClose: h
  } = e, p = (0, d.Z)(n, t.id), j = (0, c.iA)(n, t), f = (0, c.x6)(j, p), [b, v] = l.useState(f), [m, {
    loading: D,
    error: O
  }] = (0, s.Z)(() => {
    let e = (0, u.Z)(t, n, b, p);
    return null == O && h(), e
  });
  return (0, r.jsxs)(i.Modal, {
    transitionState: g,
    title: x.intl.string(x.t.wmVmXF),
    actions: [{
      variant: "secondary",
      text: x.intl.string(x.t["ETE/oK"]),
      onClick: h
    }, {
      variant: "primary",
      text: x.intl.string(x.t.e5VEcH),
      onClick: m,
      loading: D,
      disabled: (0, c.Y4)(b, f)
    }],
    onClose: h,
    children: [(0, r.jsx)(o.Z, {
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
      schedule: b,
      showEndDate: null != b.endDate,
      requireEndDate: null != b.endDate,
      guildId: t.guild_id,
      recurrenceRule: t.recurrence_rule
    }), null != O ? (0, r.jsx)(a.Text, {
      color: "text-danger",
      variant: "text-xs/normal",
      children: O.getAnyErrorMessage()
    }) : null]
  })
}