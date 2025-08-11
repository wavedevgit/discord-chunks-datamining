/** Chunk was on web.js **/
/** chunk id: 370611, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk195302 = require("./195302.jsx"),
  Chunk206295 = require("./206295.js"),
  Chunk134432 = require("./134432.js"),
  Chunk706454 = require("./706454.js"),
  Chunk314897 = require("./314897.js"),
  Chunk158776 = require("./158776.js"),
  Chunk594174 = require("./594174.js"),
  Chunk302221 = require("./302221.js"),
  Chunk5192 = require("./5192.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk528567 = require("./528567.js"),
  Chunk371583 = require("./371583.js"),
  Chunk246627 = require("./246627.js"),
  Chunk249268 = require("./249268.jsx"),
  Chunk864138 = require("./864138.jsx"),
  Chunk473188 = require("./473188.jsx"),
  Chunk169080 = require("./169080.jsx"),
  Chunk986398 = require("./986398.jsx"),
  Chunk463031 = require("./463031.js"),
  Chunk206583 = require("./206583.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk667450 = require("./667450.js");

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      P(e, t, n[t])
    })
  }
  return e
}

function D(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function L(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : D(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let x = 10,
  M = 15,
  k = "leaderboard.png";

function j(e) {
  let {
    leaderboard: t,
    previewMode: n = false,
    trackRankingItemInteraction: s
  } = e, f = (0, o.e7)([d.default], () => d.default.getId()), _ = (0, o.e7)([u.default], () => u.default.locale), {
    rankChanges: h
  } = (0, y.Z)({
    guildId: t.guild_id,
    leaderboardId: t.leaderboard_id,
    intervalStart: t.interval_start
  }), m = i.useMemo(() => {
    let e = new Map;
    h.forEach(t => {
      let {
        userId: n,
        previousRank: r
      } = t;
      e.set(n, r)
    });
    let {
      sort_by_statistic_id: n
    } = t.guild_settings;
    return t.users.map((t, r) => {
      var i, o;
      return {
        userId: t.user_id,
        value: null != (o = null == (i = t.statistics[n]) ? true : i.value) ? o : 0,
        rank: r + 1,
        previousRank: e.get(t.user_id)
      }
    })
  }, [t, h]), g = (0, b.r)(t), {
    primaryColor: v
  } = (0, l.Z)(g), I = i.useMemo(() => {
    let e = (0, p.oo)(v),
      t = L(w({}, (0, p.pz)(e.r, e.g, e.b)), {
        l: M
      });
    return (0, p.ZJ)(t.h, t.s, t.l)
  }, [v]), S = i.useMemo(() => null == m.find(e => e.userId === f) && m.length <= x, [m, f]);
  if (i.useEffect(() => {
      T.M.forEach(e => (0, c.po)(e))
    }), 0 === t.users.length) return (0, r.jsx)(U, {
    leaderboard: t
  });
  let {
    sort_by_statistic_id: A,
    sort_desc: N
  } = t.guild_settings, P = t.settings.statistics[A];
  return (0, r.jsxs)("div", {
    className: R.container,
    style: {
      background: I
    },
    children: [(0, r.jsx)(O.Z, {
      userId: m[0].userId,
      leaderboard: t
    }), n ? null : (0, r.jsxs)("div", {
      className: R.table,
      children: [(0, r.jsxs)("div", {
        className: R.headerRow,
        children: [(0, r.jsx)(a.Text, {
          variant: "text-xxs/medium",
          className: R.headerRank,
          children: "#"
        }), (0, r.jsx)(a.Text, {
          variant: "text-xxs/medium",
          className: R.headerPlayer,
          children: C.intl.string(C.t["6ii1+/"])
        }), (0, r.jsx)(a.Text, {
          variant: "text-xxs/medium",
          className: R.headerValue,
          children: (0, E.s)({
            statisticId: A,
            sortDesc: N,
            aggregationType: null == P ? true : P.aggregation_type
          })
        })]
      }), (0, r.jsxs)(a.u2D, {
        className: R.rows,
        children: [m.map(e => (0, i.createElement)(G, L(w({}, e), {
          key: e.userId,
          guildId: t.guild_id,
          locale: _,
          leaderboard: t,
          trackRankingItemInteraction: s
        }))), S ? (0, r.jsx)(B, {
          leaderboard: t
        }) : null]
      })]
    })]
  })
}

function U(e) {
  let {
    leaderboard: t
  } = e, n = (0, b.r)(t);
  return (0, r.jsx)(v.z, {
    imageUrl: n,
    children: (0, r.jsxs)("span", {
      className: R.emptyTitleContainer,
      children: [(0, r.jsx)(a.Text, {
        tag: "span",
        variant: "text-lg/normal",
        className: R.emptyTitle,
        children: C.intl.string(C.t.BfRGk5)
      }), (0, r.jsx)(S.Z, {
        className: R.emptyWinnerImage,
        leaderboard: t
      })]
    })
  })
}

function G(e) {
  let {
    userId: t,
    rank: n,
    value: l,
    guildId: c,
    previousRank: u,
    locale: d,
    leaderboard: p,
    trackRankingItemInteraction: E
  } = e, b = (0, o.e7)([_.default], () => _.default.getUser(t)), y = h.ZP.getName(c, true, b), O = null != u && u > n, [v, P] = i.useState("default"), D = (0, o.e7)([f.Z], () => {
    let e = f.Z.getPrimaryActivity(t);
    return (null == e ? true : e.application_id) != null && A.T.includes(e.application_id)
  }), {
    generatingImage: x,
    generateImage: M
  } = (0, s.d)({
    renderComponent: e => (0, r.jsx)(T.Z, L(w({}, e), {
      userId: t,
      leaderboard: p,
      guildId: c
    })),
    imageOptions: {
      pixelRatio: 4
    }
  }), j = async () => {
    try {
      let e = await M();
      await g.ZP.copyImageBlob(e, k), P("copied"), null == E || E(N.xP.COPIED_LEADERBOARD_ROW)
    } catch (e) {
      P("error")
    }
  }, U = (0, r.jsx)(a.Text, {
    className: R.tooltip,
    variant: "text-sm/medium",
    children: "copied" === v ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(a.kSu, {
        size: "xs",
        color: a.TVs.colors.STATUS_POSITIVE
      }), C.intl.string(C.t.ZO0ku7)]
    }) : "error" === v ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(a.P$X, {
        size: "xs",
        color: a.TVs.colors.STATUS_DANGER
      }), C.intl.string(C.t.j2d6Ki)]
    }) : (0, r.jsx)(r.Fragment, {
      children: C.intl.string(C.t.mikfoa)
    })
  });
  return (0, r.jsxs)("div", {
    className: R.userRow,
    children: [O ? (0, r.jsx)("div", {
      className: R.rankChangeIndicator
    }) : null, (0, r.jsx)("div", {
      className: R.userRank,
      children: n <= 3 ? (0, r.jsx)(I._, {
        rank: n
      }) : (0, r.jsx)(a.Text, {
        tabularNumbers: true,
        color: "text-muted",
        variant: "text-xs/medium",
        children: n
      })
    }), (0, r.jsxs)("div", {
      className: R.userPlayer,
      children: [(0, r.jsx)(a.qEK, {
        src: null == b ? true : b.getAvatarURL(c, 16),
        size: a.EFr.SIZE_16,
        "aria-label": "avatar"
      }), (0, r.jsx)(a.LZC, {
        size: 6,
        horizontal: true
      }), (0, r.jsx)(a.X6q, {
        lineClamp: 1,
        variant: "heading-sm/medium",
        color: "header-primary",
        children: y
      }), 1 === n ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(a.LZC, {
          size: 4,
          horizontal: true
        }), (0, r.jsx)(S.Z, {
          className: R.userWinnerImage,
          leaderboard: p
        })]
      }) : null, O ? (0, r.jsx)(Z, {
        rankChange: u - n
      }) : null]
    }), (0, r.jsxs)("div", {
      className: R.badgesContainer,
      children: [D && (0, r.jsx)(a.iWm, {
        size: "xs",
        color: a.TVs.colors.TEXT_FEEDBACK_POSITIVE,
        className: R.liveIcon
      }), m.isPlatformEmbedded && (0, r.jsx)(a.ua7, {
        text: U,
        "aria-label": false,
        shouldShow: !x,
        onTooltipHide: () => P("default"),
        children: e => (0, r.jsx)(a.P3F, L(w({}, e), {
          onClick: x ? true : j,
          "aria-busy": x,
          className: R.copyLinkContainer,
          children: x ? (0, r.jsx)(a.$jN, {
            type: a.$jN.Type.SPINNING_CIRCLE_SIMPLE,
            className: R.copySpinner
          }) : (0, r.jsx)(a.xPt, {
            size: "xs",
            className: R.copyLink
          })
        }))
      })]
    }), (0, r.jsx)(a.X6q, {
      variant: "heading-sm/medium",
      color: "header-primary",
      tabularNumbers: true,
      children: l.toLocaleString(d)
    })]
  })
}

function B(e) {
  let {
    leaderboard: t
  } = e;
  return (0, r.jsxs)("div", {
    className: R.joinLeaderboardCTAContainer,
    children: [(0, r.jsx)(a.Text, {
      variant: "text-xs/normal",
      children: C.intl.string(C.t.BfRGk5)
    }), (0, r.jsx)(S.Z, {
      className: R.joinLeaderboardCTAWinnerImage,
      leaderboard: t
    })]
  })
}

function Z(e) {
  let {
    rankChange: t
  } = e;
  return (0, r.jsxs)("div", {
    className: R.rankChangeBadge,
    children: [(0, r.jsx)(a.wj7, {
      size: "xxs",
      color: a.TVs.colors.TEXT_MUTED
    }), (0, r.jsx)(a.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      children: t
    })]
  })
}