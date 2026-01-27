/** Chunk was on 82575 **/
/** chunk id: 793998, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => M,
  p: () => V
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk607399 = require("./607399.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk944791 = require("./944791.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk726249 = require("./726249.js"),
  Chunk915089 = require("./915089.js"),
  Chunk742589 = require("./742589.jsx"),
  Chunk544028 = require("./544028.js"),
  Chunk253932 = require("./253932.js"),
  Chunk899847 = require("./899847.js"),
  Chunk695515 = require("./695515.js"),
  Chunk438732 = require("./438732.js"),
  Chunk834981 = require("./834981.js"),
  Chunk102615 = require("./102615.jsx"),
  Chunk246109 = require("./246109.jsx"),
  Chunk452141 = require("./452141.jsx"),
  Chunk888772 = require("./888772.jsx"),
  Chunk614749 = require("./614749.jsx"),
  Chunk768985 = require("./768985.js"),
  Chunk191627 = require("./191627.js"),
  Chunk652215 = require("./652215.js"),
  Chunk842130 = require("./842130.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk914280 = require("./914280.js");
let R = {
    [Chunk191627.u9.REQUESTS]: Chunk888772.A,
    [Chunk191627.u9.ACTIVITY]: Chunk452141.A,
    [Chunk191627.u9.SETTINGS]: Chunk614749.A,
    [Chunk191627.u9.CONTENT_AND_SOCIAL]: Chunk102615.A,
    [Chunk191627.u9.DATA_AND_PRIVACY]: Chunk246109.A
  },
  D = {
    [Chunk191627.u9.REQUESTS]: Chunk888772.A,
    [Chunk191627.u9.ACTIVITY]: Chunk452141.A,
    [Chunk191627.u9.CONTENT_AND_SOCIAL]: Chunk102615.A,
    [Chunk191627.u9.DATA_AND_PRIVACY]: Chunk246109.A
  };

function L() {
  return (0, i.jsx)(c.BJc, {
    justify: "center",
    align: "center",
    className: G.g4,
    children: (0, i.jsx)(c.y$y, {})
  })
}

function k(e) {
  let {
    section: t,
    handleItemSelect: n
  } = e, s = (0, S.VT)(), l = (0, O.A)();
  return t === N.u9.CONTENT_AND_SOCIAL || t === N.u9.DATA_AND_PRIVACY ? null : (0, i.jsxs)(c.VQ0, {
    className: G.c5,
    "aria-label": P.intl.string(_.default.RZqaJn),
    selectedItem: t,
    type: "top",
    look: "brand",
    onItemSelect: n,
    children: [(0, i.jsx)(c.VQ0.Item, {
      className: G.jA,
      id: N.u9.ACTIVITY,
      children: P.intl.string(_.default.bdBmqy)
    }), (0, i.jsxs)(c.VQ0.Item, {
      className: G.jA,
      id: N.u9.REQUESTS,
      "aria-label": P.intl.string(_.default["gVWG+6"]),
      children: [P.intl.string(_.default["gVWG+6"]), s > 0 ? (0, i.jsx)(c.hVq, {
        className: G.qS,
        count: s
      }) : null]
    }), l ? (0, i.jsx)(c.VQ0.Item, {
      className: G.jA,
      id: N.u9.SETTINGS,
      children: P.intl.string(P.t["3D5yo/"])
    }) : null]
  })
}

function w(e) {
  let {
    theme: t,
    section: n,
    handleItemSelect: s
  } = e, l = (0, x.GV)(), o = (0, S.VT)();
  return (0, i.jsx)(c.NPJ, {
    theme: t,
    children: e => (0, i.jsxs)(p.A, {
      className: r()(e, G.ZB),
      scrollable: a.Fr,
      role: "navigation",
      "aria-labelledby": l,
      toolbar: true,
      children: [(0, i.jsx)(p.A.Icon, {
        icon: c.nFg,
        "aria-hidden": true
      }), (0, i.jsx)(p.A.Title, {
        id: l,
        children: P.intl.string(_.default.RZqaJn)
      }), (0, i.jsx)(p.A.Divider, {}), (0, i.jsxs)(c.VQ0, {
        "aria-label": P.intl.string(_.default.RZqaJn),
        selectedItem: n,
        type: "top-pill",
        onItemSelect: s,
        children: [(0, i.jsx)(c.VQ0.Item, {
          id: N.u9.ACTIVITY,
          className: G.AS,
          children: P.intl.string(_.default.bdBmqy)
        }), (0, i.jsxs)(c.VQ0.Item, {
          id: N.u9.REQUESTS,
          className: G.AS,
          "aria-label": P.intl.string(_.default["gVWG+6"]),
          children: [P.intl.string(_.default["gVWG+6"]), o > 0 ? (0, i.jsx)(c.hVq, {
            className: G.qS,
            count: o
          }) : null]
        })]
      })]
    })
  })
}

function V() {
  let e = (0, x.GV)(),
    {
      isLoading: t,
      selectedTab: n,
      handleTabChange: s,
      showAgeGateModal: l
    } = (0, y.j)({
      location: N.MH.SETTINGS,
      onMountEffect: () => {
        j.Ay.initialPageLoad()
      }
    });
  if (l) return null;
  let r = R[n];
  return (0, i.jsxs)("main", {
    className: G.kL,
    "aria-label": P.intl.string(_.default.RZqaJn),
    children: [(0, i.jsx)(h.HI, {
      location: P.intl.string(_.default.RZqaJn)
    }), (0, i.jsx)(k, {
      section: n,
      handleItemSelect: e => {
        s(e)
      }
    }), (0, i.jsx)(c.VQ0.Panel, {
      id: n,
      "aria-labelledby": e,
      className: G.Us,
      children: t ? (0, i.jsx)(L, {}) : (0, i.jsx)(r, {})
    })]
  })
}

function M() {
  let {
    analyticsLocations: e
  } = (0, g.Ay)(u.A.FAMILY_CENTER), t = (0, O.A)(), n = (0, o.bG)([b.A], () => b.A.getIsInitialized()), l = (0, o.bG)([A.A], () => A.A.theme), a = (0, x.GV)(), {
    isLoading: p,
    selectedTab: S,
    handleTabChange: E,
    showAgeGateModal: f
  } = (0, y.j)({
    location: N.MH.SIDENAV,
    onMountEffect: () => {
      d.I(I.BVt.FAMILY_CENTER), !b.A.isLoading() && b.A.canRefetch() && j.Ay.initialPageLoad()
    }
  });
  if (s.useEffect(() => {
      let e = m.dm.getSetting();
      n && t && true === e && m.dm.updateSetting(true)
    }, [n, t]), f) return null;
  let v = S !== N.u9.SETTINGS ? S : N.u9.ACTIVITY,
    T = D[v];
  return (0, i.jsx)(g.f5, {
    value: e,
    children: (0, i.jsxs)("main", {
      className: r()(G.kL, G.ei),
      "aria-label": P.intl.string(_.default.RZqaJn),
      children: [(0, i.jsx)(h.HI, {
        location: P.intl.string(_.default.RZqaJn)
      }), (0, i.jsx)(w, {
        theme: l,
        section: v,
        handleItemSelect: e => {
          E(e)
        }
      }), (0, i.jsx)(c.VQ0.Panel, {
        id: v,
        "aria-labelledby": a,
        className: G.Om,
        children: (0, i.jsx)(c.HOs, {
          children: (0, i.jsx)("div", {
            className: G.O4,
            children: p ? (0, i.jsx)(L, {}) : (0, i.jsx)(T, {})
          })
        })
      })]
    })
  })
}