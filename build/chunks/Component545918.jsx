/** Chunk was on 9924 **/
/** chunk id: 545918, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => F
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk665625 = require("./665625.js"),
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
  Chunk401853 = require("./401853.js"),
  Chunk161655 = require("./161655.js");

function B(e) {
  let {
    guild: t,
    currentTab: n,
    onTabSelect: r
  } = e, i = (0, b.W)(t.id), a = k.intl.string(k.t.oclz3Z), s = k.intl.string(k.t.oclz3Z);
  return (0, u.Tt)({
    location: t.name,
    subsection: a
  }), (0, l.jsxs)(v.Z, {
    className: L.header,
    innerClassname: L.__invalid_innerHeader,
    channelId: D.oC.MEMBER_SAFETY,
    guildId: t.id,
    hideSearch: true,
    children: [(0, l.jsx)(v.Z.Icon, {
      icon: o.BFJ,
      "aria-hidden": true
    }), (0, l.jsx)(v.Z.Title, {
      children: s
    }), i && (0, l.jsx)(R.Z, {
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
  } = e, i = null != (t = (0, p.A)({
    guildId: n
  })) ? t : 0, [u, b] = r.useState(i > 0 ? E.e.PENDING : E.e.ALL_MEMBERS), v = (0, s.e7)([T.Z], () => T.Z.getGuild(n)), {
    analyticsLocations: R
  } = (0, d.ZP)(c.Z.MEMBER_SAFETY_PAGE), D = (0, f.C)({
    guildId: n
  }), {
    guildJoinRequests: k
  } = (0, g.j)({
    guildId: n,
    applicationStatus: "ALL_MEMBERS" === u ? j.wB.SUBMITTED : u,
    sortOrder: D
  });
  r.useEffect(() => {
    (null == v ? true : v.features.has(Z.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL)) || b(E.e.ALL_MEMBERS)
  }, [v]);
  let F = (0, N.n2)(n),
    U = (0, m.m)(n),
    q = r.useRef(null);
  (0, O.n)(n);
  let {
    fetchNextPage: z
  } = (0, h.m)({
    guildId: n,
    guildJoinRequests: k
  }), V = r.useCallback(async () => {
    var e;
    if (u === E.e.ALL_MEMBERS) return;
    let t = null == (e = q.current) ? true : e.getScrollerState();
    null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 200 && await z(D, u)
  }, [u, u, D, z]), J = r.useCallback(async e => {
    u !== e && (b(e), x.Z.setSelectedGuildJoinRequest(n, null), "ALL_MEMBERS" !== e && await z(D, e))
  }, [u, n, z, D]);
  r.useEffect(() => {
    if (!F && null != v) {
      var e;
      let t = null == (e = S.ZP.getDefaultChannel(v.id)) ? true : e.id;
      (0, C.XU)(v.id, t)
    }
  }, [v, F]);
  let K = (0, s.e7)([_.ZP], () => null != _.ZP.getGuildSidebarState(n), [n]);
  return null != v && F ? (0, l.jsxs)(d.Gt, {
    value: R,
    children: [(0, l.jsxs)("div", {
      className: a()(G.chat, L.page, {
        [G.threadSidebarOpen]: K
      }),
      children: [(0, l.jsx)(B, {
        guild: v,
        currentTab: u,
        onTabSelect: J
      }), (0, l.jsx)(o.Den, {
        onScroll: V,
        ref: q,
        orientation: "vertical",
        children: (0, l.jsx)("div", {
          className: a()(G.content, L.container),
          children: u === E.e.ALL_MEMBERS ? (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(I.Z, {
              guild: v
            }), (0, l.jsx)(M.Z, {
              guild: v
            })]
          }) : (0, l.jsx)(y.Z, {
            guildId: v.id,
            currentTab: u
          })
        })
      }), (0, l.jsx)(A.Z, {
        guildId: v.id
      })]
    }), U && (u === E.e.ALL_MEMBERS ? (0, l.jsx)(w.Z, {
      guildId: v.id
    }) : (0, l.jsx)(P.Z, {
      guildId: v.id
    }))]
  }) : null
}