/** Chunk was on 42402 **/
/** chunk id: 793998, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => U,
  p: () => k
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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
  return (0, r.jsx)(c.BJc, {
    justify: "center",
    align: "center",
    className: w.g4,
    children: (0, r.jsx)(c.y$y, {})
  })
}

function M(e) {
  let {
    section: t,
    handleItemSelect: n
  } = e, l = (0, j.VT)(), i = (0, O.A)();
  return t === I.u9.CONTENT_AND_SOCIAL || t === I.u9.DATA_AND_PRIVACY ? null : (0, r.jsxs)(c.VQ0, {
    className: w.c5,
    "aria-label": P.intl.string(T.default.RZqaJn),
    selectedItem: t,
    type: "top",
    look: "brand",
    onItemSelect: n,
    children: [(0, r.jsx)(c.VQ0.Item, {
      className: w.jA,
      id: I.u9.ACTIVITY,
      children: P.intl.string(T.default.bdBmqy)
    }), (0, r.jsxs)(c.VQ0.Item, {
      className: w.jA,
      id: I.u9.REQUESTS,
      "aria-label": P.intl.string(T.default["gVWG+6"]),
      children: [P.intl.string(T.default["gVWG+6"]), l > 0 ? (0, r.jsx)(c.hVq, {
        className: w.qS,
        count: l
      }) : null]
    }), i ? (0, r.jsx)(c.VQ0.Item, {
      className: w.jA,
      id: I.u9.SETTINGS,
      children: P.intl.string(P.t["3D5yo/"])
    }) : null]
  })
}

function G(e) {
  let {
    theme: t,
    section: n,
    handleItemSelect: l
  } = e, i = (0, g.GV)(), o = (0, j.VT)();
  return (0, r.jsx)(c.NPJ, {
    theme: t,
    children: e => (0, r.jsxs)(f.A, {
      className: s()(e, w.ZB),
      scrollable: a.Fr,
      role: "navigation",
      "aria-labelledby": i,
      toolbar: true,
      children: [(0, r.jsx)(f.A.Icon, {
        icon: c.nFg,
        "aria-hidden": true
      }), (0, r.jsx)(f.A.Title, {
        id: i,
        children: P.intl.string(T.default.RZqaJn)
      }), (0, r.jsx)(f.A.Divider, {}), (0, r.jsxs)(c.VQ0, {
        "aria-label": P.intl.string(T.default.RZqaJn),
        selectedItem: n,
        type: "top-pill",
        onItemSelect: l,
        children: [(0, r.jsx)(c.VQ0.Item, {
          id: I.u9.ACTIVITY,
          className: w.AS,
          children: P.intl.string(T.default.bdBmqy)
        }), (0, r.jsxs)(c.VQ0.Item, {
          id: I.u9.REQUESTS,
          className: w.AS,
          "aria-label": P.intl.string(T.default["gVWG+6"]),
          children: [P.intl.string(T.default["gVWG+6"]), o > 0 ? (0, r.jsx)(c.hVq, {
            className: w.qS,
            count: o
          }) : null]
        })]
      })]
    })
  })
}

function k() {
  let e = (0, g.GV)(),
    {
      isLoading: t,
      selectedTab: n,
      handleTabChange: l,
      showAgeGateModal: i
    } = (0, S.j)({
      location: I.MH.SETTINGS,
      onMountEffect: () => {
        A.Ay.initialPageLoad()
      }
    });
  if (i) return null;
  let s = R[n];
  return (0, r.jsxs)("main", {
    className: w.kL,
    "aria-label": P.intl.string(T.default.RZqaJn),
    children: [(0, r.jsx)(h.HI, {
      location: P.intl.string(T.default.RZqaJn)
    }), (0, r.jsx)(M, {
      section: n,
      handleItemSelect: e => {
        l(e)
      }
    }), (0, r.jsx)(c.VQ0.Panel, {
      id: n,
      "aria-labelledby": e,
      className: w.Us,
      children: t ? (0, r.jsx)(L, {}) : (0, r.jsx)(s, {})
    })]
  })
}

function U() {
  let {
    analyticsLocations: e
  } = (0, p.Ay)(d.A.FAMILY_CENTER), t = (0, O.A)(), n = (0, o.bG)([y.A], () => y.A.getIsInitialized()), i = (0, o.bG)([m.A], () => m.A.theme), a = (0, g.GV)(), {
    isLoading: f,
    selectedTab: j,
    handleTabChange: x,
    showAgeGateModal: _
  } = (0, S.j)({
    location: I.MH.SIDENAV,
    onMountEffect: () => {
      u.I(N.BVt.FAMILY_CENTER), !y.A.isLoading() && y.A.canRefetch() && A.Ay.initialPageLoad()
    }
  });
  if (l.useEffect(() => {
      let e = b.dm.getSetting();
      n && t && true === e && b.dm.updateSetting(true)
    }, [n, t]), _) return null;
  let v = j !== I.u9.SETTINGS ? j : I.u9.ACTIVITY,
    E = D[v];
  return (0, r.jsx)(p.f5, {
    value: e,
    children: (0, r.jsxs)("main", {
      className: s()(w.kL, w.ei),
      "aria-label": P.intl.string(T.default.RZqaJn),
      children: [(0, r.jsx)(h.HI, {
        location: P.intl.string(T.default.RZqaJn)
      }), (0, r.jsx)(G, {
        theme: i,
        section: v,
        handleItemSelect: e => {
          x(e)
        }
      }), (0, r.jsx)(c.VQ0.Panel, {
        id: v,
        "aria-labelledby": a,
        className: w.Om,
        children: (0, r.jsx)(c.HOs, {
          children: (0, r.jsx)("div", {
            className: w.O4,
            children: f ? (0, r.jsx)(L, {}) : (0, r.jsx)(E, {})
          })
        })
      })]
    })
  })
}