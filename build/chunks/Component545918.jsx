/** Chunk was on 9924 **/
/** chunk id: 545918, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => F
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk252618 = require("./252618.js"),
  Chunk189357 = require("./189357.js"),
  Chunk693546 = require("./693546.js"),
  Chunk246364 = require("./246364.js"),
  Chunk697379 = require("./697379.js"),
  Chunk98493 = require("./98493.js"),
  Chunk412222 = require("./412222.js"),
  Chunk223312 = require("./223312.js"),
  Chunk571728 = require("./571728.js"),
  Chunk984370 = require("./984370.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk433355 = require("./433355.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk384433 = require("./384433.js"),
  Chunk241559 = require("./241559.js"),
  Chunk575766 = require("./575766.js"),
  Chunk901066 = require("./901066.jsx"),
  Chunk987491 = require("./987491.jsx"),
  Chunk305473 = require("./305473.jsx"),
  Chunk995596 = require("./995596.jsx"),
  Chunk937283 = require("./937283.jsx"),
  Chunk440857 = require("./440857.jsx"),
  Chunk707113 = require("./707113.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk13348 = require("./13348.js"),
  Chunk149771 = require("./149771.js");

function G(e) {
  let {
    guild: t,
    currentTab: n,
    onTabSelect: r
  } = e, a = (0, j.W)(t.id), i = B.intl.string(B.t.oclz3d), s = B.intl.string(B.t.oclz3d);
  return (0, u.Tt)({
    location: t.name,
    subsection: i
  }), (0, l.jsxs)(g.Z, {
    className: D.header,
    innerClassname: D.__invalid_innerHeader,
    channelId: k.oC.MEMBER_SAFETY,
    guildId: t.id,
    hideSearch: true,
    children: [(0, l.jsx)(g.Z.Icon, {
      icon: o.BFJ,
      "aria-hidden": true
    }), (0, l.jsx)(g.Z.Title, {
      children: s
    }), a && (0, l.jsx)(w.Z, {
      guildId: t.id,
      currentTab: n,
      onTabSelect: r
    })]
  })
}

function F(e) {
  var t;
  let {
    guildId: n
  } = e, a = null != (t = (0, v.A)({
    guildId: n
  })) ? t : 0, [u, j] = r.useState(a > 0 ? N.e.PENDING : N.e.ALL_MEMBERS), g = (0, s.e7)([E.Z], () => E.Z.getGuild(n)), {
    analyticsLocations: w
  } = (0, d.ZP)(c.Z.MEMBER_SAFETY_PAGE), k = (0, f.C)({
    guildId: n
  }), {
    guildJoinRequests: B
  } = (0, p.j)({
    guildId: n,
    applicationStatus: "ALL_MEMBERS" === u ? h.wB.SUBMITTED : u,
    sortOrder: k
  });
  r.useEffect(() => {
    (null == g ? true : g.features.has(A.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) || j(N.e.ALL_MEMBERS)
  }, [g]);
  let F = (0, S.n2)(n),
    q = (0, m.m)(n),
    U = r.useRef(null);
  (0, P.n)(n);
  let {
    fetchNextPage: z
  } = (0, b.m)({
    guildId: n,
    guildJoinRequests: B
  }), V = r.useCallback(async () => {
    var e;
    if (u === N.e.ALL_MEMBERS) return;
    let t = null == (e = U.current) ? true : e.getScrollerState();
    null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 200 && await z(k, u)
  }, [u, u, k, z]), J = r.useCallback(async e => {
    u !== e && (j(e), x.Z.setSelectedGuildJoinRequest(n, null), "ALL_MEMBERS" !== e && await z(k, e))
  }, [u, n, z, k]);
  r.useEffect(() => {
    if (!F && null != g) {
      var e;
      let t = null == (e = T.ZP.getDefaultChannel(g.id)) ? true : e.id;
      (0, C.XU)(g.id, t)
    }
  }, [g, F]);
  let K = (0, s.e7)([_.ZP], () => null != _.ZP.getGuildSidebarState(n), [n]);
  return null != g && F ? (0, l.jsxs)(d.Gt, {
    value: w,
    children: [(0, l.jsxs)("div", {
      className: i()(L.chat, D.page, {
        [L.threadSidebarOpen]: K
      }),
      children: [(0, l.jsx)(G, {
        guild: g,
        currentTab: u,
        onTabSelect: J
      }), (0, l.jsx)(o.Den, {
        onScroll: V,
        ref: U,
        orientation: "vertical",
        children: (0, l.jsx)("div", {
          className: i()(L.content, D.container),
          children: u === N.e.ALL_MEMBERS ? (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(Z.Z, {
              guild: g
            }), (0, l.jsx)(O.Z, {
              guild: g
            })]
          }) : (0, l.jsx)(I.Z, {
            guildId: g.id,
            currentTab: u
          })
        })
      }), (0, l.jsx)(M.Z, {
        guildId: g.id
      })]
    }), q && (u === N.e.ALL_MEMBERS ? (0, l.jsx)(y.Z, {
      guildId: g.id
    }) : (0, l.jsx)(R.Z, {
      guildId: g.id
    }))]
  }) : null
}