/** Chunk was on web.js **/
/** chunk id: 475676, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk835473 = require("./835473.js"),
  Chunk297781 = require("./297781.jsx"),
  Chunk443487 = require("./443487.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk5192 = require("./5192.js"),
  Chunk873128 = require("./873128.js"),
  Chunk246627 = require("./246627.js"),
  Chunk709737 = require("./709737.jsx"),
  Chunk69589 = require("./69589.jsx"),
  Chunk531501 = require("./531501.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk701488 = require("./701488.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk714759 = require("./714759.js");

function I(e) {
  let {
    application: t
  } = e, n = t.getIconURL(y.Si.LARGE), i = null == n ? null : (0, r.jsx)("img", {
    className: v.gameIcon,
    src: n,
    "aria-hidden": true,
    alt: ""
  });
  return (0, r.jsxs)("div", {
    className: v.gameTitleContainer,
    children: [i, (0, r.jsx)(o.Text, {
      variant: "text-sm/medium",
      className: v.gameTitle,
      children: t.name
    })]
  })
}

function T(e) {
  let {
    leaderboard: t,
    guildId: n
  } = e, r = null == t ? true : t.leaderboard_id;
  i.useEffect(() => {
    null != r && f.default.track(b.rMx.LEADERBOARD_MEMBERLIST_CARD_VIEWED, {
      leaderboard_id: r,
      guild_id: n
    })
  }, [r, n])
}

function S(e) {
  var t, n, f, E, b;
  let y, {
      selected: v,
      channel: S,
      entry: C
    } = e,
    N = S.guild_id,
    R = (0, p.Z)({
      guildId: N,
      leaderboardId: C.extra.leaderboard_id,
      intervalOffset: 0
    }),
    {
      rankChanges: P
    } = (0, h.Z)({
      guildId: N,
      leaderboardId: C.extra.leaderboard_id,
      intervalStart: null != (E = null == R ? true : R.interval_start) ? E : ""
    }),
    w = (0, a.e7)([u.default], () => u.default.getId()),
    [D, x] = i.useMemo(() => {
      let e = P.find(e => e.userId === w),
        t = P[0],
        n = null != e ? e : t,
        r = null == R ? true : R.users.find(e => e.user_id === (null == n ? true : n.userId));
      return [n, r]
    }, [R, P, w]),
    L = (0, a.e7)([d.default], () => d.default.getUser(null == D ? true : D.userId)),
    j = _.ZP.getName(N, true, L);
  T({
    leaderboard: R,
    guildId: N
  });
  let M = (0, s.q)(null == R || null == (t = R.settings) ? true : t.application_id);
  if (null == R || null == M) return null;
  if (0 === R.users.length || null == D || null == L) return (0, r.jsx)(A, {
    application: M,
    selected: v
  });
  let {
    sort_by_statistic_id: k
  } = R.guild_settings, U = null != (b = null == x || null == (f = x.statistics) || null == (n = f[k]) ? true : n.value) ? b : 0, {
    currentRank: G
  } = D;
  return y = D.userId === w ? O.intl.formatToPlainString(O.t["eU+JxM"], {
    rank: G
  }) : O.intl.formatToPlainString(O.t["8BLSQ0"], {
    rank: G,
    username: j
  }), (0, r.jsxs)(c.Zb, {
    selected: v,
    children: [(0, r.jsxs)(c.e$, {
      children: [(0, r.jsx)(I, {
        application: M
      }), (0, r.jsx)(o.LZC, {
        size: 2
      }), (0, r.jsx)(c.ll, {
        children: y
      }), (0, r.jsx)(l.Gk, {
        location: l.Gt.CARD,
        children: (0, r.jsx)(m.DC, {
          value: U,
          statisticId: k
        })
      })]
    }), (0, r.jsx)(g.Z, {
      user: L,
      rank: G
    })]
  })
}

function A(e) {
  let {
    selected: t,
    application: n
  } = e;
  return (0, r.jsxs)(c.Zb, {
    selected: t,
    children: [(0, r.jsxs)(c.e$, {
      children: [(0, r.jsx)(I, {
        application: n
      }), (0, r.jsx)(o.LZC, {
        size: 2
      }), (0, r.jsx)(c.ll, {
        children: O.intl.string(O.t["t+b0DA"])
      }), (0, r.jsx)(l.Gk, {
        location: l.Gt.CARD,
        children: (0, r.jsx)(m.ZR, {
          text: O.intl.string(O.t.zX8HUl)
        })
      })]
    }), (0, r.jsx)(E.Z, {
      color: "#5B5A56",
      children: (0, r.jsx)("img", {
        src: "https://cdn.discordapp.com/assets/content/173a83bdbe0a455bf0d251f4cc9c2c027cd3da855384773916f3eb08298a880c.png",
        alt: "",
        className: v.emptyStateImage
      })
    })]
  })
}