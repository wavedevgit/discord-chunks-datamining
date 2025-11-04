/** Chunk was on 1272 **/
/** chunk id: 270759, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => x,
  Z: () => A
}), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./35282.js"), require("./704826.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk843611 = require("./843611.js"),
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
  Chunk365113 = require("./365113.js"),
  Chunk849862 = require("./849862.js"),
  Chunk666286 = require("./666286.jsx"),
  Chunk596957 = require("./596957.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk723359 = require("./723359.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk236202 = require("./236202.js");

function x() {
  return (0, Chunk951288.jsx)("div", {
    className: Chunk236202.inviteToolbar,
    children: (0, Chunk951288.jsx)(Chunk518311.Z, {
      tooltip: Chunk388032.intl.string(Chunk388032.t["HfOgA/"]),
      location: "PeoplePageHeaderToolbar-CreateDMButton"
    })
  })
}
let A = function(e) {
  let {
    initialSection: t
  } = e, n = (0, s.TH)(), l = (0, s.k6)();
  i.useEffect(() => {
    "true" === new URLSearchParams(n.search).get("confirm-age") && u.Z.dispatch({
      type: "AGE_GATE_MODAL_OPEN",
      source: N.L0.DEEP_LINK_PROMPT
    }).then(() => {
      l.replace(T.Z5c.ME)
    })
  }, [l, n]), i.useEffect(() => {
    d.Y(T.Z5c.FRIENDS), (0, E.e)("friends")
  }, []);
  let _ = (0, o.e7)([O.Z], () => O.Z.theme),
    A = (0, v.If)(),
    {
      section: Z,
      rows: w
    } = (0, o.cj)([I.ZP], () => I.ZP.getState()),
    L = (0, o.e7)([h.Z], () => h.Z.getSuggestionCount()),
    R = i.useMemo(() => w.getRelationshipCounts(), [w]);
  i.useEffect(() => {
    null != t && p.Z.setInitialSection(t), 0 === R[T.OGo.FRIEND] && 0 === R[T.OGo.PENDING_INCOMING] && 0 === R[T.OGo.PENDING_OUTGOING] && 0 === R[T.OGo.BLOCKED] && p.Z.transitionToSection(T.pJs.ADD_FRIEND)
  }, [t, R]);
  let D = e => {
      p.Z.transitionToSection(e, {
        explicit: true
      })
    },
    M = (0, m.Dt)(),
    k = (0, m.Dt)(),
    U = [{
      id: T.pJs.ONLINE,
      show: w.filter(T.pJs.ONLINE).length > 0,
      content: P.intl.string(P.t.b9w3bO),
      className: j.item
    }, {
      id: T.pJs.ALL,
      show: R[T.OGo.FRIEND] > 0,
      content: P.intl.string(P.t.PfjFjR),
      className: j.item
    }, {
      id: T.pJs.PENDING,
      show: w.filter(T.pJs.PENDING).length > 0,
      content: (0, r.jsxs)(r.Fragment, {
        children: [P.intl.string(P.t.p6IHGE), A > 0 && (0, r.jsx)(c.mAB, {
          count: A,
          className: j.badge
        })]
      }),
      ariaLabel: P.intl.formatToPlainString(P.t.OAC0Z4, {
        count: A.toString()
      }),
      className: j.item
    }, {
      id: T.pJs.SUGGESTIONS,
      show: L > 0,
      content: (0, r.jsxs)(r.Fragment, {
        children: [P.intl.string(P.t["8rSi1/"]), (0, r.jsx)(c.mAB, {
          count: L,
          className: j.badge
        })]
      }),
      ariaLabel: P.intl.formatToPlainString(P.t.AbMQp7, {
        count: L.toString()
      }),
      className: j.item
    }, {
      id: T.pJs.ADD_FRIEND,
      show: true,
      content: (0, r.jsx)("span", {
        children: P.intl.string(P.t.j0wbE5)
      }),
      ariaLabel: P.intl.string(P.t.j0wbE5),
      className: a()(j.item, j.addFriend)
    }],
    G = y.o.useConfig({
      location: "people page"
    }).friendsTab,
    B = null,
    H = G ? null : (0, r.jsx)("div", {
      className: j.nowPlayingColumn,
      children: (0, r.jsx)(b.Z, {})
    });
  return B = Z === T.pJs.ADD_FRIEND ? (0, r.jsx)(C.Z, {}) : (0, r.jsx)(S.Z, {
    titleId: k
  }), (0, r.jsxs)("main", {
    className: j.container,
    "aria-label": P.intl.string(P.t.TdEu5X),
    children: [(0, r.jsx)(f.yY, {
      location: P.intl.string(P.t.TdEu5X)
    }), (0, r.jsx)(c.f6W, {
      theme: _,
      children: e => (0, r.jsxs)(g.Z, {
        className: e,
        toolbar: (0, r.jsx)(x, {}),
        role: "navigation",
        "aria-labelledby": M,
        scrollable: true,
        children: [(0, r.jsx)(g.Z.Icon, {
          icon: c.iFz,
          "aria-hidden": true
        }), (0, r.jsx)(g.Z.Title, {
          id: M,
          children: P.intl.string(P.t.TdEu5X)
        }), (0, r.jsx)(g.Z.Divider, {}), (0, r.jsx)(c.njP, {
          "aria-label": P.intl.string(P.t.TdEu5X),
          selectedItem: Z,
          type: "top-pill",
          onItemSelect: D,
          className: j.tabBar,
          children: U.filter(e => e.show).map(e => (0, r.jsx)(c.njP.Item, {
            id: e.id,
            className: e.className,
            "aria-label": e.ariaLabel,
            children: e.content
          }, e.id))
        })]
      })
    }), (0, r.jsxs)("div", {
      className: j.tabBody,
      children: [(0, r.jsx)(c.njP.Panel, {
        id: Z,
        className: j.peopleColumn,
        "aria-labelledby": k,
        children: B
      }), H]
    })]
  })
}