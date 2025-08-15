/** Chunk was on 9924 **/
/** chunk id: 545918, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => q
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk350013 = require("./350013.js"),
  Chunk97009 = require("./97009.js");

function G(e) {
  let {
    guild: t,
    currentTab: n,
    onTabSelect: r
  } = e, a = (0, h.W)(t.id), i = D.intl.string(D.t.oclz3d), s = D.intl.string(D.t.oclz3d);
  return (0, u.Tt)({
    location: t.name,
    subsection: i
  }), (0, l.jsxs)(p.Z, {
    className: B.header,
    innerClassname: B.__invalid_innerHeader,
    channelId: k.oC.MEMBER_SAFETY,
    guildId: t.id,
    hideSearch: true,
    children: [(0, l.jsx)(p.Z.Icon, {
      icon: o.BFJ,
      "aria-hidden": true
    }), (0, l.jsx)(p.Z.Title, {
      children: s
    }), a && (0, l.jsx)(w.Z, {
      guildId: t.id,
      currentTab: n,
      onTabSelect: r
    })]
  })
}

function q(e) {
  var t;
  let {
    guildId: n
  } = e, a = null != (t = (0, g.A)({
    guildId: n
  })) ? t : 0, [u, h] = r.useState(a > 0 ? N.e.PENDING : N.e.ALL_MEMBERS), p = (0, s.e7)([E.Z], () => E.Z.getGuild(n)), {
    analyticsLocations: w
  } = (0, d.ZP)(c.Z.MEMBER_SAFETY_PAGE), k = (0, f.C)({
    guildId: n
  }), {
    guildJoinRequests: D
  } = (0, v.j)({
    guildId: n,
    applicationStatus: "ALL_MEMBERS" === u ? j.wB.SUBMITTED : u,
    sortOrder: k
  });
  r.useEffect(() => {
    (null == p ? true : p.features.has(A.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) || h(N.e.ALL_MEMBERS)
  }, [p]);
  let q = (0, S.n2)(n),
    F = (0, m.m)(n),
    U = r.useRef(null);
  (0, P.n)(n);
  let {
    fetchNextPage: z
  } = (0, b.m)({
    guildId: n,
    guildJoinRequests: D
  }), V = r.useCallback(async () => {
    var e;
    if (u === N.e.ALL_MEMBERS) return;
    let t = null == (e = U.current) ? true : e.getScrollerState();
    null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 200 && await z(k, u)
  }, [u, u, k, z]), J = r.useCallback(async e => {
    u !== e && (h(e), x.Z.setSelectedGuildJoinRequest(n, null), "ALL_MEMBERS" !== e && await z(k, e))
  }, [u, n, z, k]);
  r.useEffect(() => {
    if (!q && null != p) {
      var e;
      let t = null == (e = T.ZP.getDefaultChannel(p.id)) ? true : e.id;
      (0, C.XU)(p.id, t)
    }
  }, [p, q]);
  let K = (0, s.e7)([_.ZP], () => null != _.ZP.getGuildSidebarState(n), [n]);
  return null != p && q ? (0, l.jsxs)(d.Gt, {
    value: w,
    children: [(0, l.jsxs)("div", {
      className: i()(L.chat, B.page, {
        [L.threadSidebarOpen]: K
      }),
      children: [(0, l.jsx)(G, {
        guild: p,
        currentTab: u,
        onTabSelect: J
      }), (0, l.jsx)(o.Den, {
        onScroll: V,
        ref: U,
        orientation: "vertical",
        children: (0, l.jsx)("div", {
          className: i()(L.content, B.container),
          children: u === N.e.ALL_MEMBERS ? (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(Z.Z, {
              guild: p
            }), (0, l.jsx)(y.Z, {
              guild: p
            })]
          }) : (0, l.jsx)(I.Z, {
            guildId: p.id,
            currentTab: u
          })
        })
      }), (0, l.jsx)(O.Z, {
        guildId: p.id
      })]
    }), F && (u === N.e.ALL_MEMBERS ? (0, l.jsx)(M.Z, {
      guildId: p.id
    }) : (0, l.jsx)(R.Z, {
      guildId: p.id
    }))]
  }) : null
}