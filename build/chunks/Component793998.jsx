/** Chunk was on 32502 **/
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
let L = {
    [Chunk191627.u9.REQUESTS]: Chunk888772.A,
    [Chunk191627.u9.ACTIVITY]: Chunk452141.A,
    [Chunk191627.u9.SETTINGS]: Chunk614749.A,
    [Chunk191627.u9.CONTENT_AND_SOCIAL]: Chunk102615.A,
    [Chunk191627.u9.DATA_AND_PRIVACY]: Chunk246109.A
  },
  G = {
    [Chunk191627.u9.REQUESTS]: Chunk888772.A,
    [Chunk191627.u9.ACTIVITY]: Chunk452141.A,
    [Chunk191627.u9.CONTENT_AND_SOCIAL]: Chunk102615.A,
    [Chunk191627.u9.DATA_AND_PRIVACY]: Chunk246109.A
  };

function D() {
  return (0, i.jsx)(c.BJc, {
    justify: "center",
    align: "center",
    className: R.g4,
    children: (0, i.jsx)(c.y$y, {})
  })
}

function k(e) {
  let {
    section: t,
    handleItemSelect: n
  } = e, l = (0, E.VT)(), s = (0, O.A)();
  return t === _.u9.CONTENT_AND_SOCIAL || t === _.u9.DATA_AND_PRIVACY ? null : (0, i.jsxs)(c.VQ0, {
    className: R.c5,
    "aria-label": P.intl.string(I.default.RZqaJn),
    selectedItem: t,
    type: "top",
    look: "brand",
    onItemSelect: n,
    children: [(0, i.jsx)(c.VQ0.Item, {
      className: R.jA,
      id: _.u9.ACTIVITY,
      children: P.intl.string(I.default.bdBmqy)
    }), (0, i.jsxs)(c.VQ0.Item, {
      className: R.jA,
      id: _.u9.REQUESTS,
      "aria-label": P.intl.string(I.default["gVWG+6"]),
      children: [P.intl.string(I.default["gVWG+6"]), l > 0 ? (0, i.jsx)(c.hVq, {
        className: R.qS,
        count: l
      }) : null]
    }), s ? (0, i.jsx)(c.VQ0.Item, {
      className: R.jA,
      id: _.u9.SETTINGS,
      children: P.intl.string(P.t["3D5yo/"])
    }) : null]
  })
}

function w(e) {
  let {
    theme: t,
    section: n,
    handleItemSelect: l
  } = e, s = (0, x.GV)(), o = (0, E.VT)();
  return (0, i.jsx)(c.NPJ, {
    theme: t,
    children: e => (0, i.jsxs)(p.A, {
      className: r()(e, R.ZB),
      scrollable: a.Fr,
      role: "navigation",
      "aria-labelledby": s,
      toolbar: true,
      children: [(0, i.jsx)(p.A.Icon, {
        icon: c.nFg,
        "aria-hidden": true
      }), (0, i.jsx)(p.A.Title, {
        id: s,
        children: P.intl.string(I.default.RZqaJn)
      }), (0, i.jsx)(p.A.Divider, {}), (0, i.jsxs)(c.VQ0, {
        "aria-label": P.intl.string(I.default.RZqaJn),
        selectedItem: n,
        type: "top-pill",
        onItemSelect: l,
        children: [(0, i.jsx)(c.VQ0.Item, {
          id: _.u9.ACTIVITY,
          className: R.AS,
          children: P.intl.string(I.default.bdBmqy)
        }), (0, i.jsxs)(c.VQ0.Item, {
          id: _.u9.REQUESTS,
          className: R.AS,
          "aria-label": P.intl.string(I.default["gVWG+6"]),
          children: [P.intl.string(I.default["gVWG+6"]), o > 0 ? (0, i.jsx)(c.hVq, {
            className: R.qS,
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
      handleTabChange: l,
      showAgeGateModal: s
    } = (0, T.j)({
      location: _.MH.SETTINGS,
      onMountEffect: () => {
        b.Ay.initialPageLoad()
      }
    });
  if (s) return null;
  let r = L[n];
  return (0, i.jsxs)("main", {
    className: R.kL,
    "aria-label": P.intl.string(I.default.RZqaJn),
    children: [(0, i.jsx)(g.HI, {
      location: P.intl.string(I.default.RZqaJn)
    }), (0, i.jsx)(k, {
      section: n,
      handleItemSelect: e => {
        l(e)
      }
    }), (0, i.jsx)(c.VQ0.Panel, {
      id: n,
      "aria-labelledby": e,
      className: R.Us,
      children: t ? (0, i.jsx)(D, {}) : (0, i.jsx)(r, {})
    })]
  })
}

function M() {
  let {
    analyticsLocations: e
  } = (0, h.Ay)(u.A.FAMILY_CENTER), t = (0, O.A)(), n = (0, o.bG)([j.A], () => j.A.getIsInitialized()), s = (0, o.bG)([m.A], () => m.A.theme), a = (0, x.GV)(), {
    isLoading: p,
    selectedTab: E,
    handleTabChange: S,
    showAgeGateModal: f
  } = (0, T.j)({
    location: _.MH.SIDENAV,
    onMountEffect: () => {
      d.I(N.BVt.FAMILY_CENTER), !j.A.isLoading() && j.A.canRefetch() && b.Ay.initialPageLoad()
    }
  });
  if (l.useEffect(() => {
      let e = A.dm.getSetting();
      n && t && true === e && A.dm.updateSetting(true)
    }, [n, t]), f) return null;
  let C = E !== _.u9.SETTINGS ? E : _.u9.ACTIVITY,
    v = G[C];
  return (0, i.jsx)(h.f5, {
    value: e,
    children: (0, i.jsxs)("main", {
      className: r()(R.kL, R.ei),
      "aria-label": P.intl.string(I.default.RZqaJn),
      children: [(0, i.jsx)(g.HI, {
        location: P.intl.string(I.default.RZqaJn)
      }), (0, i.jsx)(w, {
        theme: s,
        section: C,
        handleItemSelect: e => {
          S(e)
        }
      }), (0, i.jsx)(c.VQ0.Panel, {
        id: C,
        "aria-labelledby": a,
        className: R.Om,
        children: (0, i.jsx)(c.HOs, {
          children: (0, i.jsx)("div", {
            className: R.O4,
            children: p ? (0, i.jsx)(D, {}) : (0, i.jsx)(v, {})
          })
        })
      })]
    })
  })
}