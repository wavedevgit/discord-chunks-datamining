/** Chunk was on 21738 **/
/** chunk id: 18635, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
}), require("./896048.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./747238.js"), require("./812715.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk960488 = require("./960488.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk944791 = require("./944791.js"),
  Chunk711950 = require("./711950.js"),
  Chunk726249 = require("./726249.js"),
  Chunk915089 = require("./915089.js"),
  Chunk346084 = require("./346084.js"),
  Chunk742589 = require("./742589.jsx"),
  Chunk95550 = require("./95550.jsx"),
  Chunk608881 = require("./608881.jsx"),
  Chunk210714 = require("./210714.js"),
  Chunk544028 = require("./544028.js"),
  Chunk595623 = require("./595623.js"),
  Chunk912309 = require("./912309.js"),
  Chunk662074 = require("./662074.jsx"),
  Chunk265990 = require("./265990.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk204925 = require("./204925.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk790367 = require("./790367.js");

function j() {
  return (0, r.jsx)("div", {
    className: T.N3,
    children: (0, r.jsx)(m.A, {
      tooltip: N.intl.string(N.t["HfOgA/"])
    })
  })
}
let x = function(e) {
  let {
    initialSection: t
  } = e, n = (0, s.zy)(), l = (0, s.W6)();
  i.useEffect(() => {
    "true" === new URLSearchParams(n.search).get("confirm-age") && u.h.dispatch({
      type: "AGE_GATE_MODAL_OPEN",
      source: C.w_.DEEP_LINK_PROMPT
    }).then(() => {
      l.replace(S.BVt.ME)
    })
  }, [l, n]), i.useEffect(() => {
    d.I(S.BVt.FRIENDS), (0, _.d)("friends")
  }, []);
  let m = (0, o.bG)([E.A], () => E.A.theme),
    x = (0, y.kX)(),
    {
      section: P,
      rows: w
    } = (0, o.cf)([O.Ay], () => O.Ay.getState()),
    L = (0, o.bG)([A.A], () => A.A.getSuggestionCount()),
    R = i.useMemo(() => w.getRelationshipCounts(), [w]);
  i.useEffect(() => {
    null != t && p.A.setInitialSection(t), 0 === R[S.eA$.FRIEND] && 0 === R[S.eA$.PENDING_INCOMING] && 0 === R[S.eA$.PENDING_OUTGOING] && 0 === R[S.eA$.BLOCKED] && p.A.transitionToSection(S.m3P.ADD_FRIEND)
  }, [t, R]);
  let D = e => {
      p.A.transitionToSection(e, {
        explicit: true
      })
    },
    M = (0, h.GV)(),
    k = (0, h.GV)(),
    U = [{
      id: S.m3P.ONLINE,
      show: w.filter(S.m3P.ONLINE).length > 0,
      content: N.intl.string(N.t.b9w3bO),
      className: T.AS
    }, {
      id: S.m3P.ALL,
      show: R[S.eA$.FRIEND] > 0,
      content: N.intl.string(N.t.PfjFjR),
      className: T.AS
    }, {
      id: S.m3P.PENDING,
      show: w.filter(S.m3P.PENDING).length > 0,
      content: (0, r.jsxs)(r.Fragment, {
        children: [N.intl.string(N.t.p6IHGE), x > 0 && (0, r.jsx)(c.hVq, {
          count: x,
          className: T.qS
        })]
      }),
      ariaLabel: N.intl.formatToPlainString(N.t.OAC0Z4, {
        count: x.toString()
      }),
      className: T.AS
    }, {
      id: S.m3P.SUGGESTIONS,
      show: L > 0,
      content: (0, r.jsxs)(r.Fragment, {
        children: [N.intl.string(N.t["8rSi1/"]), (0, r.jsx)(c.hVq, {
          count: L,
          className: T.qS
        })]
      }),
      ariaLabel: N.intl.formatToPlainString(N.t.AbMQp7, {
        count: L.toString()
      }),
      className: T.AS
    }, {
      id: S.m3P.ADD_FRIEND,
      show: true,
      content: (0, r.jsx)("span", {
        children: N.intl.string(N.t.j0wbE5)
      }),
      ariaLabel: N.intl.string(N.t.j0wbE5),
      className: a()(T.AS, T.GU)
    }],
    G = null,
    V = (0, r.jsx)("div", {
      className: T.Xl,
      children: (0, r.jsx)(b.A, {})
    });
  return G = P === S.m3P.ADD_FRIEND ? (0, r.jsx)(I.A, {}) : (0, r.jsx)(v.A, {
    titleId: k
  }), (0, r.jsxs)("main", {
    className: T.kL,
    "aria-label": N.intl.string(N.t.TdEu5X),
    children: [(0, r.jsx)(f.HI, {
      location: N.intl.string(N.t.TdEu5X)
    }), (0, r.jsx)(c.NPJ, {
      theme: m,
      children: e => (0, r.jsxs)(g.A, {
        className: e,
        toolbar: (0, r.jsx)(j, {}),
        role: "navigation",
        "aria-labelledby": M,
        scrollable: true,
        children: [(0, r.jsx)(g.A.Icon, {
          icon: c.$yI,
          "aria-hidden": true
        }), (0, r.jsx)(g.A.Title, {
          id: M,
          children: N.intl.string(N.t.TdEu5X)
        }), (0, r.jsx)(g.A.Divider, {}), (0, r.jsx)(c.VQ0, {
          "aria-label": N.intl.string(N.t.TdEu5X),
          selectedItem: P,
          type: "top-pill",
          onItemSelect: D,
          className: T.$H,
          children: U.filter(e => e.show).map(e => (0, r.jsx)(c.VQ0.Item, {
            id: e.id,
            className: e.className,
            "aria-label": e.ariaLabel,
            children: e.content
          }, e.id))
        })]
      })
    }), (0, r.jsxs)("div", {
      className: T.MJ,
      children: [(0, r.jsx)(c.VQ0.Panel, {
        id: P,
        className: T.UL,
        "aria-labelledby": k,
        children: G
      }), V]
    })]
  })
}