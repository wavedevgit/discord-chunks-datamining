/** Chunk was on 99583 **/
/** chunk id: 756154, original params: e,t,l (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => F
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk726249 = require("./726249.js"),
  Chunk985925 = require("./985925.js"),
  Chunk624458 = require("./624458.js"),
  Chunk513461 = require("./513461.js"),
  Chunk496767 = require("./496767.js"),
  Chunk663997 = require("./663997.js"),
  Chunk417718 = require("./417718.js"),
  Chunk324023 = require("./324023.js"),
  Chunk786180 = require("./786180.js"),
  Chunk742589 = require("./742589.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk761640 = require("./761640.js"),
  Chunk808728 = require("./808728.js"),
  Chunk71393 = require("./71393.js"),
  Chunk836872 = require("./836872.js"),
  Chunk134413 = require("./134413.js"),
  Chunk202309 = require("./202309.js"),
  Chunk841933 = require("./841933.jsx"),
  Chunk836501 = require("./836501.jsx"),
  Chunk735937 = require("./735937.jsx"),
  Chunk823712 = require("./823712.jsx"),
  Chunk606326 = require("./606326.jsx"),
  Chunk856768 = require("./856768.jsx"),
  Chunk332352 = require("./332352.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk947256 = require("./947256.js"),
  Chunk638990 = require("./638990.js");

function B(e) {
  let {
    guild: t,
    currentTab: l,
    onTabSelect: r
  } = e, i = (0, b.W)(t.id), s = L.intl.string(L.t.oclz3Z), a = L.intl.string(L.t.oclz3Z);
  return (0, u.HU)({
    location: t.name,
    subsection: s
  }), (0, n.jsxs)(A.A, {
    className: U.wx,
    innerClassname: U.__invalid_innerHeader,
    channelId: G.VV.MEMBER_SAFETY,
    guildId: t.id,
    hideSearch: true,
    children: [(0, n.jsx)(A.A.Icon, {
      icon: c.nFg,
      "aria-hidden": true
    }), (0, n.jsx)(A.A.Title, {
      children: a
    }), i && (0, n.jsx)(D.A, {
      guildId: t.id,
      currentTab: l,
      onTabSelect: r
    })]
  })
}

function F(e) {
  var t;
  let {
    guildId: l
  } = e, i = null != (t = (0, v.H)({
    guildId: l
  })) ? t : 0, [u, b] = r.useState(i > 0 ? y.D.PENDING : y.D.ALL_MEMBERS), A = (0, a.bG)([T.A], () => T.A.getGuild(l)), {
    analyticsLocations: D
  } = (0, o.Ay)(d.A.MEMBER_SAFETY_PAGE), G = (0, h.n)({
    guildId: l
  }), {
    guildJoinRequests: L
  } = (0, g.K)({
    guildId: l,
    applicationStatus: "ALL_MEMBERS" === u ? j.B5.SUBMITTED : u,
    sortOrder: G
  });
  r.useEffect(() => {
    (null == A ? true : A.features.has(w.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL)) || b(y.D.ALL_MEMBERS)
  }, [A]);
  let F = (0, _.fw)(l),
    V = (0, x.q)(l),
    z = r.useRef(null);
  (0, O.e)(l);
  let {
    fetchNextPage: H
  } = (0, f.K)({
    guildId: l,
    guildJoinRequests: L
  }), q = r.useCallback(async () => {
    var e;
    if (u === y.D.ALL_MEMBERS) return;
    let t = null == (e = z.current) ? true : e.getScrollerState();
    null == t || t.scrollHeight - t.scrollTop - t.offsetHeight < 200 && await H(G, u)
  }, [u, u, G, H]), W = r.useCallback(async e => {
    u === e || (b(e), m.A.setSelectedGuildJoinRequest(l, null), "ALL_MEMBERS" !== e && await H(G, e))
  }, [u, l, H, G]);
  r.useEffect(() => {
    if (!F && null != A) {
      var e;
      let t = null == (e = S.Ay.getDefaultChannel(A.id)) ? true : e.id;
      (0, p.uh)(A.id, t)
    }
  }, [A, F]);
  let K = (0, a.bG)([E.Ay], () => null != E.Ay.getGuildSidebarState(l), [l]);
  return null != A && F ? (0, n.jsxs)(o.f5, {
    value: D,
    children: [(0, n.jsxs)("div", {
      className: s()(k.TE, U.MY, {
        [k.js]: K
      }),
      children: [(0, n.jsx)(B, {
        guild: A,
        currentTab: u,
        onTabSelect: W
      }), (0, n.jsx)(c.T7Y, {
        onScroll: q,
        ref: z,
        orientation: "vertical",
        children: (0, n.jsx)("div", {
          className: s()(k.Qs, U.kL),
          children: u === y.D.ALL_MEMBERS ? (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(R.A, {
              guild: A
            }), (0, n.jsx)(M.A, {
              guild: A
            })]
          }) : (0, n.jsx)(I.A, {
            guildId: A.id,
            currentTab: u
          })
        })
      }), (0, n.jsx)(C.A, {
        guildId: A.id
      })]
    }), V && (u === y.D.ALL_MEMBERS ? (0, n.jsx)(P.A, {
      guildId: A.id
    }) : (0, n.jsx)(N.A, {
      guildId: A.id
    }))]
  }) : null
}