/** Chunk was on 1272 **/
/** chunk id: 270759, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./35282.js"), require("./704826.js"), require("./290780.js");
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
  Chunk576360 = require("./576360.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk723359 = require("./723359.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk236202 = require("./236202.js");

function A() {
  return (0, Chunk951288.jsx)("div", {
    className: Chunk236202.inviteToolbar,
    children: (0, Chunk951288.jsx)(Chunk518311.Z, {
      tooltip: Chunk388032.intl.string(Chunk388032.t["HfOgA/"]),
      location: "PeoplePageHeaderToolbar-CreateDMButton"
    })
  })
}
let Z = function(e) {
  let {
    initialSection: t
  } = e, n = (0, o.TH)(), l = (0, o.k6)();
  i.useEffect(() => {
    "true" === new URLSearchParams(n.search).get("confirm-age") && u.Z.dispatch({
      type: "AGE_GATE_MODAL_OPEN",
      source: j.L0.DEEP_LINK_PROMPT
    }).then(() => {
      l.replace(N.Z5c.ME)
    })
  }, [l, n]), i.useEffect(() => {
    d.Y(N.Z5c.FRIENDS), (0, O.e)("friends")
  }, []);
  let b = (0, s.e7)([E.Z], () => E.Z.theme),
    Z = (0, I.If)(),
    {
      section: w,
      rows: L
    } = (0, s.cj)([v.ZP], () => v.ZP.getState()),
    R = (0, s.e7)([g.Z], () => g.Z.getSuggestionCount()),
    D = i.useMemo(() => L.getRelationshipCounts(), [L]);
  i.useEffect(() => {
    null != t && p.Z.setInitialSection(t), 0 === D[N.OGo.FRIEND] && 0 === D[N.OGo.PENDING_INCOMING] && 0 === D[N.OGo.PENDING_OUTGOING] && 0 === D[N.OGo.BLOCKED] && p.Z.transitionToSection(N.pJs.ADD_FRIEND)
  }, [t, D]);
  let k = e => {
      p.Z.transitionToSection(e, {
        explicit: true
      })
    },
    M = (0, h.Dt)(),
    U = (0, h.Dt)(),
    G = [{
      id: N.pJs.ONLINE,
      show: L.filter(N.pJs.ONLINE).length > 0,
      content: P.intl.string(P.t.b9w3bO),
      className: x.item
    }, {
      id: N.pJs.ALL,
      show: D[N.OGo.FRIEND] > 0,
      content: P.intl.string(P.t.PfjFjR),
      className: x.item
    }, {
      id: N.pJs.PENDING,
      show: L.filter(N.pJs.PENDING).length > 0,
      content: (0, r.jsxs)(r.Fragment, {
        children: [P.intl.string(P.t.p6IHGE), Z > 0 && (0, r.jsx)(c.mAB, {
          count: Z,
          className: x.badge
        })]
      }),
      ariaLabel: P.intl.formatToPlainString(P.t.OAC0Z4, {
        count: Z.toString()
      }),
      className: x.item
    }, {
      id: N.pJs.SUGGESTIONS,
      show: R > 0,
      content: (0, r.jsxs)(r.Fragment, {
        children: [P.intl.string(P.t["8rSi1/"]), (0, r.jsx)(c.mAB, {
          count: R,
          className: x.badge
        })]
      }),
      ariaLabel: P.intl.formatToPlainString(P.t.AbMQp7, {
        count: R.toString()
      }),
      className: x.item
    }, {
      id: N.pJs.ADD_FRIEND,
      show: true,
      content: (0, r.jsx)("span", {
        children: P.intl.string(P.t.j0wbE5)
      }),
      ariaLabel: P.intl.string(P.t.j0wbE5),
      className: a()(x.item, x.addFriend)
    }],
    B = y.o.useConfig({
      location: "friendstore"
    }).landOnProfilePage;
  B && G.unshift({
    id: N.pJs.YOU,
    show: true,
    content: P.intl.string(P.t.LuZzxn),
    className: x.item
  });
  let H = null,
    V = (0, r.jsx)("div", {
      className: x.nowPlayingColumn,
      children: (0, r.jsx)(_.Z, {})
    });
  return w === N.pJs.ADD_FRIEND ? H = (0, r.jsx)(C.Z, {}) : w === N.pJs.YOU ? B ? H = (0, r.jsx)(T.Z, {}) : (H = (0, r.jsx)(c.Ttm, {
    className: x.nowPlayingFullWidth,
    children: (0, r.jsx)("div", {
      style: {
        maxWidth: 600
      },
      children: (0, r.jsx)(_.Z, {})
    })
  }), V = null) : H = (0, r.jsx)(S.Z, {
    titleId: U
  }), (0, r.jsxs)("main", {
    className: x.container,
    "aria-label": P.intl.string(P.t.TdEu5X),
    children: [(0, r.jsx)(f.yY, {
      location: P.intl.string(P.t.TdEu5X)
    }), (0, r.jsx)(c.f6W, {
      theme: b,
      children: e => (0, r.jsxs)(m.Z, {
        className: e,
        toolbar: (0, r.jsx)(A, {}),
        role: "navigation",
        "aria-labelledby": M,
        scrollable: true,
        children: [(0, r.jsx)(m.Z.Icon, {
          icon: c.iFz,
          "aria-hidden": true
        }), (0, r.jsx)(m.Z.Title, {
          id: M,
          children: P.intl.string(P.t.TdEu5X)
        }), (0, r.jsx)(m.Z.Divider, {}), (0, r.jsx)(c.njP, {
          "aria-label": P.intl.string(P.t.TdEu5X),
          selectedItem: w,
          type: "top-pill",
          onItemSelect: k,
          className: x.tabBar,
          children: G.filter(e => e.show).map(e => (0, r.jsx)(c.njP.Item, {
            id: e.id,
            className: e.className,
            "aria-label": e.ariaLabel,
            children: e.content
          }, e.id))
        })]
      })
    }), (0, r.jsxs)("div", {
      className: x.tabBody,
      children: [(0, r.jsx)(c.njP.Panel, {
        id: w,
        className: x.peopleColumn,
        "aria-labelledby": U,
        children: H
      }), V]
    })]
  })
}