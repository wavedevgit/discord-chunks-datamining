/** Chunk was on web.js **/
/** chunk id: 704041, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk58807 = require("./58807.js");

function y(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)(a.f6W, {
    theme: g.BR.DARK,
    disableAdaptiveTheme: true,
    children: e => (0, r.jsx)("div", {
      className: e,
      children: t
    })
  })
}

function O(e) {
  let {
    guildId: t,
    leaderboardId: n,
    source: r
  } = e, a = {
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
  }, o = i.useRef(a);
  i.useEffect(() => {
    o.current = a
  }), i.useEffect(() => {
    let e, n, {
      leaderboard: i,
      prevLeaderboard: a
    } = o.current;
    if (null == i) return;
    let l = i.guild_settings.sort_by_statistic_id;
    if (null != a) {
      var c, u;
      let t = a.guild_settings.sort_by_statistic_id,
        r = a.users[0];
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
  } = e, o = i.useMemo(() => (0, c.n)(l.default.extractTimestamp(t.interval_end)), [t]), s = n.getIconURL(m.Si.LARGE), u = null == s ? null : (0, r.jsx)("img", {
    className: b.gameIcon,
    src: s,
    "aria-hidden": true,
    alt: ""
  });
  return (0, r.jsxs)("div", {
    className: b.header,
    children: [u, (0, r.jsx)(a.LZC, {
      size: 8,
      horizontal: true
    }), (0, r.jsx)(a.X6q, {
      variant: "text-xs/normal",
      className: b.leaderboardTitle,
      children: E.intl.format(E.t["MlT4+P"], {
        leaderboardName: n.name,
        timeLeft: o,
        leaderboardNameHook: (e, t) => (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          className: b.leaderboardName,
          children: e
        }, t)
      })
    }), (0, r.jsx)(f.Z, {
      guildId: t.guild_id,
      leaderboardId: t.leaderboard_id
    })]
  })
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
  (0, a.Tbt)(g), O({
    guildId: n,
    leaderboardId: s,
    source: c
  });
  let S = (0, o.q)(null == I || null == (t = I.settings) ? true : t.application_id);
  return null == I || null == S ? null : (0, r.jsx)(y, {
    children: (0, r.jsxs)("div", {
      className: b.popout,
      ref: g,
      children: [(0, r.jsxs)("div", {
        className: b.content,
        children: [(0, r.jsx)(v, {
          leaderboard: I,
          application: S
        }), (0, r.jsx)(p.Z, {
          leaderboard: I,
          previewMode: h,
          trackRankingItemInteraction: f
        }), h ? null : (0, r.jsxs)(r.Fragment, {
          children: [null != T && (0, r.jsx)(_.Z, {
            className: b.previousChampion,
            guildId: n,
            leaderboard: T
          }), (0, r.jsx)(d.Z, {
            guildId: n,
            leaderboardId: s
          })]
        })]
      }), h ? (0, r.jsx)(a.P3F, {
        onClick: () => m(false),
        children: (0, r.jsx)("div", {
          className: b.exitPreviewModeButton,
          children: (0, r.jsx)(a.Text, {
            variant: "text-sm/medium",
            className: b.exitPreviewModeText,
            children: E.intl.string(E.t.GLeQe3)
          })
        })
      }) : null]
    })
  })
}