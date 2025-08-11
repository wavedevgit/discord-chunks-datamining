/** Chunk was on web.js **/
/** chunk id: 704041, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk835473 = require("./835473.js"),
  Chunk626135 = require("./626135.js"),
  Chunk709054 = require("./709054.js"),
  Chunk814059 = require("./814059.js"),
  Chunk873128 = require("./873128.js"),
  Chunk428268 = require("./428268.jsx"),
  Chunk114201 = require("./114201.jsx"),
  Chunk154658 = require("./154658.jsx"),
  Chunk370611 = require("./370611.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk701488 = require("./701488.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk75923 = require("./75923.js");

function y(e) {
  let {
    children: t
  } = e;
  return <o.f6W theme={g.BR.DARK} disableAdaptiveTheme={true}>{e => (0, r.jsx)("div", {
      className: e,
      children: t
    })}</o.f6W>
}

function O(e) {
  let {
    guildId: t,
    leaderboardId: n,
    source: r
  } = e, o = {
    leaderboard: (0, u.Z)({
      guildId: null != t ? t : "",
      leaderboardId: n,
      intervalOffset: 0
    }),
    prevLeaderboard: (0, u.Z)({
      guildId: null != t ? t : "",
      leaderboardId: n,
      intervalOffset: false
    })
  }, a = i.useRef(o);
  i.useEffect(() => {
    a.current = o
  }), i.useEffect(() => {
    let e, n, {
      leaderboard: i,
      prevLeaderboard: o
    } = a.current;
    if (null == i) return;
    let l = i.guild_settings.sort_by_statistic_id;
    if (null != o) {
      var c, u;
      let t = o.guild_settings.sort_by_statistic_id,
        r = o.users[0];
      e = null == r ? true : r.user_id, n = null == r || null == (u = r.statistics) || null == (c = u[t]) ? true : c.value
    }
    s.default.track(h.rMx.LEADERBOARD_POPOUT_VIEWED, {
      guild_id: t,
      leaderboard_id: i.leaderboard_id,
      interval_start: i.interval_start,
      interval_end: i.interval_end,
      sort_by_statistic_id: l,
      sort_desc: i.guild_settings.sort_desc,
      ordered_leaderboard_user_ids: i.users.map(e => e.user_id),
      ordered_leaderboard_user_values: i.users.map(e => {
        var t, n;
        return null != (n = null == (t = e.statistics[l]) ? true : t.value) ? n : 0
      }),
      opened_from_source: r,
      last_interval_champion_id: e,
      last_interval_champion_value: n
    })
  }, [t, n, r])
}

function v(e) {
  let {
    leaderboard: t,
    application: n
  } = e, a = i.useMemo(() => (0, c.n)(l.default.extractTimestamp(t.interval_end)), [t]), s = n.getIconURL(m.Si.LARGE), u = null == s ? null : <img className={b.gameIcon} src={s} aria-hidden={true} alt={""} />;
  return <div className={b.header}>{u}{<o.LZC size={8} horizontal={true} />}{<o.X6q variant={"text-xs/normal"} className={b.leaderboardTitle}>{E.intl.format(E.t["MlT4+P"], {
        leaderboardName: n.name,
        timeLeft: a,
        leaderboardNameHook: (e, t) => (0, r.jsx)(o.Text, {
          variant: "text-sm/medium",
          className: b.leaderboardName,
          children: e
        }, t)
      })}</o.X6q>}{<f.Z guildId={t.guild_id} leaderboardId={t.leaderboard_id} />}</div>
}
let I = e => {
  var t;
  let {
    guildId: n,
    leaderboardId: s,
    previewMode: l = false,
    source: c,
    trackRankingItemInteraction: f
  } = e, [h, m] = i.useState(l), g = i.useRef(null), I = (0, u.Z)({
    guildId: n,
    leaderboardId: s,
    intervalOffset: 0
  }), T = (0, u.Z)({
    guildId: n,
    leaderboardId: s,
    intervalOffset: false
  });
  (0, o.Tbt)(g), O({
    guildId: n,
    leaderboardId: s,
    source: c
  });
  let S = (0, a.q)(null == I || null == (t = I.settings) ? true : t.application_id);
  return null == I || null == S ? null : <y><div className={b.popout} ref={g}>{<div className={b.content}>{<v leaderboard={I} application={S} />}{<p.Z leaderboard={I} previewMode={h} trackRankingItemInteraction={f} />}{h ? null : <r.Fragment>{null != T && <_.Z className={b.previousChampion} guildId={n} leaderboard={T} />}{<d.Z guildId={n} leaderboardId={s} />}</r.Fragment>}</div>}{h ? <o.P3F onClick={() => m(false)}><div className={b.exitPreviewModeButton}><o.Text variant={"text-sm/medium"} className={b.exitPreviewModeText}>{E.intl.string(E.t.GLeQe3)}</o.Text></div></o.P3F> : null}</div></y>
}