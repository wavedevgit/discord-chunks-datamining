/** Chunk was on 27919 **/
/** chunk id: 379038, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk981888 = require("./981888.js"),
  Chunk157689 = require("./157689.js"),
  Chunk894017 = require("./894017.js"),
  Chunk854698 = require("./854698.js"),
  Chunk440371 = require("./440371.js"),
  Chunk388032 = require("./388032.js");

function h(e) {
  let {
    guildEvent: t,
    recurrenceId: n,
    transitionState: h,
    onClose: g
  } = e, p = (0, c.Z)(n, t.id), j = (0, u.iA)(n, t), m = (0, u.x6)(j, p), [v, b] = r.useState(m), [f, {
    loading: _,
    error: D
  }] = (0, s.Z)(() => {
    let e = (0, d.Z)(t, n, v, p);
    return null == D && g(), e
  });
  return <i.Modal transitionState={h} title={x.intl.string(x.t.wmVmXF)} actions={[{
      variant: "secondary",
      text: x.intl.string(x.t["ETE/oK"]),
      onClick: g
    }, {
      variant: "primary",
      text: x.intl.string(x.t.e5VEcH),
      onClick: f,
      loading: _,
      disabled: (0, u.Y4)(v, m)
    }]} onClose={g}>{<o.Z onScheduleChange={e => {
        let {
          startDate: t,
          endDate: n
        } = e;
        null != t && null != n && n.isBefore(t) && (n = t.clone().add(1, "hour")), b({
          startDate: t,
          endDate: n
        })
      }} schedule={v} showEndDate={null != v.endDate} requireEndDate={null != v.endDate} guildId={t.guild_id} recurrenceRule={t.recurrence_rule} />}{null != D ? <a.Text color={"text-danger"} variant={"text-xs/normal"}>{D.getAnyErrorMessage()}</a.Text> : null}</i.Modal>
}