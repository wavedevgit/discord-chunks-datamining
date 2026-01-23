/** Chunk was on web.js **/
/** chunk id: 793998, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => G,
  p: () => U
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
let x = {
    [Chunk191627.u9.REQUESTS]: Chunk888772.A,
    [Chunk191627.u9.ACTIVITY]: Chunk452141.A,
    [Chunk191627.u9.SETTINGS]: Chunk614749.A,
    [Chunk191627.u9.CONTENT_AND_SOCIAL]: Chunk102615.A,
    [Chunk191627.u9.DATA_AND_PRIVACY]: Chunk246109.A
  },
  L = {
    [Chunk191627.u9.REQUESTS]: Chunk888772.A,
    [Chunk191627.u9.ACTIVITY]: Chunk452141.A,
    [Chunk191627.u9.CONTENT_AND_SOCIAL]: Chunk102615.A,
    [Chunk191627.u9.DATA_AND_PRIVACY]: Chunk246109.A
  };

function j() {
  return (0, r.jsx)(c.BJc, {
    justify: "center",
    align: "center",
    className: D.g4,
    children: (0, r.jsx)(c.y$y, {})
  })
}

function M(e) {
  let {
    section: t,
    handleItemSelect: n
  } = e, i = (0, O.VT)(), a = (0, b.A)();
  return t === N.u9.CONTENT_AND_SOCIAL || t === N.u9.DATA_AND_PRIVACY ? null : (0, r.jsxs)(c.VQ0, {
    className: D.c5,
    "aria-label": P.intl.string(R.default.RZqaJn),
    selectedItem: t,
    type: "top",
    look: "brand",
    onItemSelect: n,
    children: [(0, r.jsx)(c.VQ0.Item, {
      className: D.jA,
      id: N.u9.ACTIVITY,
      children: P.intl.string(R.default.bdBmqy)
    }), (0, r.jsxs)(c.VQ0.Item, {
      className: D.jA,
      id: N.u9.REQUESTS,
      "aria-label": P.intl.string(R.default["gVWG+6"]),
      children: [P.intl.string(R.default["gVWG+6"]), i > 0 ? (0, r.jsx)(c.hVq, {
        className: D.qS,
        count: i
      }) : null]
    }), a ? (0, r.jsx)(c.VQ0.Item, {
      className: D.jA,
      id: N.u9.SETTINGS,
      children: P.intl.string(P.t["3D5yo/"])
    }) : null]
  })
}

function k(e) {
  let {
    theme: t,
    section: n,
    handleItemSelect: i
  } = e, a = (0, _.GV)(), l = (0, O.VT)();
  return (0, r.jsx)(c.NPJ, {
    theme: t,
    children: e => (0, r.jsxs)(h.A, {
      className: s()(e, D.ZB),
      scrollable: o.Fr,
      role: "navigation",
      "aria-labelledby": a,
      toolbar: true,
      children: [(0, r.jsx)(h.A.Icon, {
        icon: c.nFg,
        "aria-hidden": true
      }), (0, r.jsx)(h.A.Title, {
        id: a,
        children: P.intl.string(R.default.RZqaJn)
      }), (0, r.jsx)(h.A.Divider, {}), (0, r.jsxs)(c.VQ0, {
        "aria-label": P.intl.string(R.default.RZqaJn),
        selectedItem: n,
        type: "top-pill",
        onItemSelect: i,
        children: [(0, r.jsx)(c.VQ0.Item, {
          id: N.u9.ACTIVITY,
          className: D.AS,
          children: P.intl.string(R.default.bdBmqy)
        }), (0, r.jsxs)(c.VQ0.Item, {
          id: N.u9.REQUESTS,
          className: D.AS,
          "aria-label": P.intl.string(R.default["gVWG+6"]),
          children: [P.intl.string(R.default["gVWG+6"]), l > 0 ? (0, r.jsx)(c.hVq, {
            className: D.qS,
            count: l
          }) : null]
        })]
      })]
    })
  })
}

function U() {
  let e = (0, _.GV)(),
    {
      isLoading: t,
      selectedTab: n,
      handleTabChange: i,
      showAgeGateModal: a
    } = (0, C.j)({
      location: N.MH.SETTINGS,
      onMountEffect: () => {
        E.Ay.initialPageLoad()
      }
    }),
    s = e => {
      i(e)
    };
  if (a) return null;
  let o = x[n];
  return (0, r.jsxs)("main", {
    className: D.kL,
    "aria-label": P.intl.string(R.default.RZqaJn),
    children: [(0, r.jsx)(p.HI, {
      location: P.intl.string(R.default.RZqaJn)
    }), (0, r.jsx)(M, {
      section: n,
      handleItemSelect: s
    }), (0, r.jsx)(c.VQ0.Panel, {
      id: n,
      "aria-labelledby": e,
      className: D.Us,
      children: t ? (0, r.jsx)(j, {}) : (0, r.jsx)(o, {})
    })]
  })
}

function G() {
  let {
    analyticsLocations: e
  } = (0, f.Ay)(d.A.FAMILY_CENTER), t = (0, b.A)(), n = (0, l.bG)([y.A], () => y.A.getIsInitialized()), a = (0, l.bG)([m.A], () => m.A.theme), o = (0, _.GV)(), {
    isLoading: h,
    selectedTab: O,
    handleTabChange: v,
    showAgeGateModal: A
  } = (0, C.j)({
    location: N.MH.SIDENAV,
    onMountEffect: () => {
      u.I(w.BVt.FAMILY_CENTER), !y.A.isLoading() && y.A.canRefetch() && E.Ay.initialPageLoad()
    }
  });
  i.useEffect(() => {
    let e = g.dm.getSetting();
    n && t && true === e && g.dm.updateSetting(true)
  }, [n, t]);
  let I = e => {
    v(e)
  };
  if (A) return null;
  let S = O !== N.u9.SETTINGS ? O : N.u9.ACTIVITY,
    T = L[S];
  return (0, r.jsx)(f.f5, {
    value: e,
    children: (0, r.jsxs)("main", {
      className: s()(D.kL, D.ei),
      "aria-label": P.intl.string(R.default.RZqaJn),
      children: [(0, r.jsx)(p.HI, {
        location: P.intl.string(R.default.RZqaJn)
      }), (0, r.jsx)(k, {
        theme: a,
        section: S,
        handleItemSelect: I
      }), (0, r.jsx)(c.VQ0.Panel, {
        id: S,
        "aria-labelledby": o,
        className: D.Om,
        children: (0, r.jsx)(c.HOs, {
          children: (0, r.jsx)("div", {
            className: D.O4,
            children: h ? (0, r.jsx)(j, {}) : (0, r.jsx)(T, {})
          })
        })
      })]
    })
  })
}