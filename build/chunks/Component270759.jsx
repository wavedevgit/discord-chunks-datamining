/** Chunk was on 1272 **/
/** chunk id: 270759, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
}), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./35282.js"), require("./704826.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk114858 = require("./114858.js"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk150063 = require("./150063.js"),
  Chunk529103 = require("./529103.js"),
  Chunk252618 = require("./252618.js"),
  Chunk313201 = require("./313201.js"),
  Chunk5254 = require("./5254.js"),
  Chunk984370 = require("./984370.jsx"),
  Chunk518311 = require("./518311.jsx"),
  Chunk199104 = require("./199104.jsx"),
  Chunk108427 = require("./108427.js"),
  Chunk210887 = require("./210887.js"),
  Chunk974042 = require("./974042.js"),
  Chunk849862 = require("./849862.js"),
  Chunk666286 = require("./666286.jsx"),
  Chunk596957 = require("./596957.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk723359 = require("./723359.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk236202 = require("./236202.js");

function x() {
  return (0, Chunk255367.jsx)("div", {
    className: Chunk236202.inviteToolbar,
    children: (0, Chunk255367.jsx)(Chunk518311.Z, {
      tooltip: Chunk388032.intl.string(Chunk388032.t.HfOgAw),
      location: "PeoplePageHeaderToolbar-CreateDMButton"
    })
  })
}
let A = function(e) {
  let {
    initialSection: t
  } = e, n = (0, o.TH)(), l = (0, o.k6)();
  i.useEffect(() => {
    "true" === new URLSearchParams(n.search).get("confirm-age") && d.Z.dispatch({
      type: "AGE_GATE_MODAL_OPEN",
      source: T.L0.DEEP_LINK_PROMPT
    }).then(() => {
      l.replace(N.Z5c.ME)
    })
  }, [l, n]), i.useEffect(() => {
    p.Y(N.Z5c.FRIENDS), (0, E.e)("friends")
  }, []);
  let _ = (0, c.e7)([y.Z], () => y.Z.theme),
    A = (0, I.If)(),
    {
      section: Z,
      rows: w
    } = (0, c.cj)([v.ZP], () => v.ZP.getState()),
    L = (0, c.e7)([m.Z], () => m.Z.getSuggestionCount()),
    R = i.useMemo(() => w.getRelationshipCounts(), [w]);
  i.useEffect(() => {
    null != t && f.Z.setInitialSection(t), 0 === R[N.OGo.FRIEND] && 0 === R[N.OGo.PENDING_INCOMING] && 0 === R[N.OGo.PENDING_OUTGOING] && 0 === R[N.OGo.BLOCKED] && f.Z.transitionToSection(N.pJs.ADD_FRIEND)
  }, [t, R]);
  let D = e => {
      f.Z.transitionToSection(e, {
        explicit: true
      })
    },
    k = (0, g.Dt)(),
    M = (0, g.Dt)(),
    U = [{
      id: N.pJs.ONLINE,
      show: w.filter(N.pJs.ONLINE).length > 0,
      content: P.intl.string(P.t.b9w3bG),
      className: j.item
    }, {
      id: N.pJs.ALL,
      show: R[N.OGo.FRIEND] > 0,
      content: P.intl.string(P.t.PfjFjY),
      className: j.item
    }, {
      id: N.pJs.PENDING,
      show: w.filter(N.pJs.PENDING).length > 0,
      content: (0, r.jsxs)(r.Fragment, {
        children: [P.intl.string(P.t.p6IHGB), A > 0 && (0, r.jsx)(u.mAB, {
          count: A,
          className: j.badge
        })]
      }),
      ariaLabel: P.intl.formatToPlainString(P.t.OAC0Z2, {
        count: A.toString()
      }),
      className: j.item
    }, {
      id: N.pJs.SUGGESTIONS,
      show: L > 0,
      content: (0, r.jsxs)(r.Fragment, {
        children: [P.intl.string(P.t["8rSi19"]), (0, r.jsx)(u.mAB, {
          count: L,
          className: j.badge
        })]
      }),
      ariaLabel: P.intl.formatToPlainString(P.t.AbMQp6, {
        count: L.toString()
      }),
      className: j.item
    }, {
      id: N.pJs.ADD_FRIEND,
      show: true,
      content: (0, r.jsx)("span", {
        children: P.intl.string(P.t.j0wbEx)
      }),
      ariaLabel: P.intl.string(P.t.j0wbEx),
      className: a()(j.item, j.addFriend)
    }];
  return (0, r.jsxs)("main", {
    className: j.container,
    "aria-label": P.intl.string(P.t.TdEu5e),
    children: [(0, r.jsx)(h.yY, {
      location: P.intl.string(P.t.TdEu5e)
    }), (0, r.jsx)(u.f6W, {
      theme: _,
      children: e => (0, r.jsxs)(b.Z, {
        className: e,
        toolbar: (0, r.jsx)(x, {}),
        scrollable: s.tq,
        role: "navigation",
        "aria-labelledby": k,
        children: [(0, r.jsx)(b.Z.Icon, {
          icon: u.iFz,
          "aria-hidden": true
        }), (0, r.jsx)(b.Z.Title, {
          id: k,
          children: P.intl.string(P.t.TdEu5e)
        }), (0, r.jsx)(b.Z.Divider, {}), (0, r.jsx)(u.njP, {
          "aria-label": P.intl.string(P.t.TdEu5e),
          selectedItem: Z,
          type: "top-pill",
          onItemSelect: D,
          className: j.tabBar,
          children: U.filter(e => e.show).map(e => (0, r.jsx)(u.njP.Item, {
            id: e.id,
            className: e.className,
            "aria-label": e.ariaLabel,
            children: e.content
          }, e.id))
        })]
      })
    }), (0, r.jsxs)("div", {
      className: j.tabBody,
      children: [(0, r.jsx)(u.njP.Panel, {
        id: Z,
        className: j.peopleColumn,
        "aria-labelledby": M,
        children: Z === N.pJs.ADD_FRIEND ? (0, r.jsx)(C.Z, {}) : (0, r.jsx)(S.Z, {
          titleId: M
        })
      }), (0, r.jsx)("div", {
        className: j.nowPlayingColumn,
        children: (0, r.jsx)(O.Z, {})
      })]
    })]
  })
}