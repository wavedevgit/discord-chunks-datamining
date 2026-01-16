/** Chunk was on 1272 **/
/** chunk id: 270759, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./35282.js"), require("./704826.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk828700 = require("./828700.js"),
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
  Chunk221534 = require("./221534.js");

function x() {
  return (0, r.jsx)("div", {
    className: j.inviteToolbar,
    children: (0, r.jsx)(b.Z, {
      tooltip: N.intl.string(N.t["HfOgA/"])
    })
  })
}
let P = function(e) {
  let {
    initialSection: t
  } = e, n = (0, o.TH)(), l = (0, o.k6)();
  i.useEffect(() => {
    "true" === new URLSearchParams(n.search).get("confirm-age") && u.Z.dispatch({
      type: "AGE_GATE_MODAL_OPEN",
      source: T.L0.DEEP_LINK_PROMPT
    }).then(() => {
      l.replace(S.Z5c.ME)
    })
  }, [l, n]), i.useEffect(() => {
    d.Y(S.Z5c.FRIENDS), (0, E.e)("friends")
  }, []);
  let b = (0, s.e7)([O.Z], () => O.Z.theme),
    P = (0, I.If)(),
    {
      section: A,
      rows: Z
    } = (0, s.cj)([v.ZP], () => v.ZP.getState()),
    w = (0, s.e7)([h.Z], () => h.Z.getSuggestionCount()),
    L = i.useMemo(() => Z.getRelationshipCounts(), [Z]);
  i.useEffect(() => {
    null != t && p.Z.setInitialSection(t), 0 === L[S.OGo.FRIEND] && 0 === L[S.OGo.PENDING_INCOMING] && 0 === L[S.OGo.PENDING_OUTGOING] && 0 === L[S.OGo.BLOCKED] && p.Z.transitionToSection(S.pJs.ADD_FRIEND)
  }, [t, L]);
  let R = e => {
      p.Z.transitionToSection(e, {
        explicit: true
      })
    },
    D = (0, g.Dt)(),
    M = (0, g.Dt)(),
    k = [{
      id: S.pJs.ONLINE,
      show: Z.filter(S.pJs.ONLINE).length > 0,
      content: N.intl.string(N.t.b9w3bO),
      className: j.item
    }, {
      id: S.pJs.ALL,
      show: L[S.OGo.FRIEND] > 0,
      content: N.intl.string(N.t.PfjFjR),
      className: j.item
    }, {
      id: S.pJs.PENDING,
      show: Z.filter(S.pJs.PENDING).length > 0,
      content: (0, r.jsxs)(r.Fragment, {
        children: [N.intl.string(N.t.p6IHGE), P > 0 && (0, r.jsx)(c.mAB, {
          count: P,
          className: j.badge
        })]
      }),
      ariaLabel: N.intl.formatToPlainString(N.t.OAC0Z4, {
        count: P.toString()
      }),
      className: j.item
    }, {
      id: S.pJs.SUGGESTIONS,
      show: w > 0,
      content: (0, r.jsxs)(r.Fragment, {
        children: [N.intl.string(N.t["8rSi1/"]), (0, r.jsx)(c.mAB, {
          count: w,
          className: j.badge
        })]
      }),
      ariaLabel: N.intl.formatToPlainString(N.t.AbMQp7, {
        count: w.toString()
      }),
      className: j.item
    }, {
      id: S.pJs.ADD_FRIEND,
      show: true,
      content: (0, r.jsx)("span", {
        children: N.intl.string(N.t.j0wbE5)
      }),
      ariaLabel: N.intl.string(N.t.j0wbE5),
      className: a()(j.item, j.addFriend)
    }],
    U = null,
    G = (0, r.jsx)("div", {
      className: j.nowPlayingColumn,
      children: (0, r.jsx)(_.Z, {})
    });
  return U = A === S.pJs.ADD_FRIEND ? (0, r.jsx)(y.Z, {}) : (0, r.jsx)(C.Z, {
    titleId: M
  }), (0, r.jsxs)("main", {
    className: j.container,
    "aria-label": N.intl.string(N.t.TdEu5X),
    children: [(0, r.jsx)(f.yY, {
      location: N.intl.string(N.t.TdEu5X)
    }), (0, r.jsx)(c.f6W, {
      theme: b,
      children: e => (0, r.jsxs)(m.Z, {
        className: e,
        toolbar: (0, r.jsx)(x, {}),
        role: "navigation",
        "aria-labelledby": D,
        scrollable: true,
        children: [(0, r.jsx)(m.Z.Icon, {
          icon: c.iFz,
          "aria-hidden": true
        }), (0, r.jsx)(m.Z.Title, {
          id: D,
          children: N.intl.string(N.t.TdEu5X)
        }), (0, r.jsx)(m.Z.Divider, {}), (0, r.jsx)(c.njP, {
          "aria-label": N.intl.string(N.t.TdEu5X),
          selectedItem: A,
          type: "top-pill",
          onItemSelect: R,
          className: j.tabBar,
          children: k.filter(e => e.show).map(e => (0, r.jsx)(c.njP.Item, {
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
        id: A,
        className: j.peopleColumn,
        "aria-labelledby": M,
        children: U
      }), G]
    })]
  })
}