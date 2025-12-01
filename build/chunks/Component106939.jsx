/** Chunk was on web.js **/
/** chunk id: 106939, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => U,
  Z: () => G
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk150063 = require("./150063.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk252618 = require("./252618.js"),
  Chunk313201 = require("./313201.js"),
  Chunk984370 = require("./984370.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk695346 = require("./695346.js"),
  Chunk260722 = require("./260722.js"),
  Chunk914788 = require("./914788.js"),
  Chunk880257 = require("./880257.js"),
  Chunk631885 = require("./631885.js"),
  Chunk615160 = require("./615160.jsx"),
  Chunk273879 = require("./273879.jsx"),
  Chunk830746 = require("./830746.jsx"),
  Chunk731934 = require("./731934.jsx"),
  Chunk521450 = require("./521450.jsx"),
  Chunk539086 = require("./539086.js"),
  Chunk292352 = require("./292352.js"),
  Chunk981631 = require("./981631.js"),
  Chunk744038 = require("./744038.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk166387 = require("./166387.js");
let x = {
    [Chunk292352.dG.REQUESTS]: Chunk731934.Z,
    [Chunk292352.dG.ACTIVITY]: Chunk830746.Z,
    [Chunk292352.dG.SETTINGS]: Chunk521450.Z,
    [Chunk292352.dG.CONTENT_AND_SOCIAL]: Chunk615160.Z,
    [Chunk292352.dG.DATA_AND_PRIVACY]: Chunk273879.Z
  },
  L = {
    [Chunk292352.dG.REQUESTS]: Chunk731934.Z,
    [Chunk292352.dG.ACTIVITY]: Chunk830746.Z,
    [Chunk292352.dG.CONTENT_AND_SOCIAL]: Chunk615160.Z,
    [Chunk292352.dG.DATA_AND_PRIVACY]: Chunk273879.Z
  };

function j() {
  return (0, Chunk54381.jsx)(Chunk481060.Kqy, {
    justify: "center",
    align: "center",
    className: Chunk166387.loadingContainer,
    children: (0, Chunk54381.jsx)(Chunk481060.$jN, {})
  })
}

function M(e) {
  let {
    section: t,
    handleItemSelect: n
  } = e, i = (0, O.gU)(), a = (0, y.Z)();
  return t === N.dG.CONTENT_AND_SOCIAL || t === N.dG.DATA_AND_PRIVACY ? null : (0, r.jsxs)(c.njP, {
    className: D.settingsTabBar,
    "aria-label": w.intl.string(R.default.RZqaJn),
    selectedItem: t,
    type: "top",
    look: "brand",
    onItemSelect: n,
    children: [(0, r.jsx)(c.njP.Item, {
      className: D.settingsTabBarItem,
      id: N.dG.ACTIVITY,
      children: w.intl.string(R.default.bdBmqy)
    }), (0, r.jsxs)(c.njP.Item, {
      className: D.settingsTabBarItem,
      id: N.dG.REQUESTS,
      "aria-label": w.intl.string(R.default["gVWG+6"]),
      children: [w.intl.string(R.default["gVWG+6"]), i > 0 ? (0, r.jsx)(c.mAB, {
        className: D.badge,
        count: i
      }) : null]
    }), a ? (0, r.jsx)(c.njP.Item, {
      className: D.settingsTabBarItem,
      id: N.dG.SETTINGS,
      children: w.intl.string(w.t["3D5yo/"])
    }) : null]
  })
}

function k(e) {
  let {
    theme: t,
    section: n,
    handleItemSelect: i
  } = e, a = (0, _.Dt)(), l = (0, O.gU)();
  return (0, r.jsx)(c.f6W, {
    theme: t,
    children: e => (0, r.jsxs)(m.Z, {
      className: o()(e, D.sidebarTabBar),
      scrollable: s.tq,
      role: "navigation",
      "aria-labelledby": a,
      toolbar: true,
      children: [(0, r.jsx)(m.Z.Icon, {
        icon: c.BFJ,
        "aria-hidden": true
      }), (0, r.jsx)(m.Z.Title, {
        id: a,
        children: w.intl.string(R.default.RZqaJn)
      }), (0, r.jsx)(m.Z.Divider, {}), (0, r.jsxs)(c.njP, {
        "aria-label": w.intl.string(R.default.RZqaJn),
        selectedItem: n,
        type: "top-pill",
        onItemSelect: i,
        children: [(0, r.jsx)(c.njP.Item, {
          id: N.dG.ACTIVITY,
          className: D.item,
          children: w.intl.string(R.default.bdBmqy)
        }), (0, r.jsxs)(c.njP.Item, {
          id: N.dG.REQUESTS,
          className: D.item,
          "aria-label": w.intl.string(R.default["gVWG+6"]),
          children: [w.intl.string(R.default["gVWG+6"]), l > 0 ? (0, r.jsx)(c.mAB, {
            className: D.badge,
            count: l
          }) : null]
        })]
      })]
    })
  })
}

function U() {
  let e = (0, Chunk313201.Dt)(),
    {
      isLoading: t,
      selectedTab: n,
      handleTabChange: i,
      showAgeGateModal: a
    } = (0, Chunk539086.M)({
      location: Chunk292352.Mu.SETTINGS,
      onMountEffect: () => {
        Chunk260722.ZP.initialPageLoad()
      }
    }),
    o = e => {
      i(e)
    };
  if (Chunk120356) return null;
  let s = x[require];
  return (0, Chunk54381.jsxs)("main", {
    className: Chunk166387.container,
    "aria-label": Chunk388032.intl.string(Chunk744038.default.RZqaJn),
    children: [(0, Chunk54381.jsx)(Chunk252618.yY, {
      location: Chunk388032.intl.string(Chunk744038.default.RZqaJn)
    }), (0, Chunk54381.jsx)(M, {
      section: require,
      handleItemSelect: o
    }), (0, Chunk54381.jsx)(Chunk481060.njP.Panel, {
      id: require,
      "aria-labelledby": module,
      className: Chunk166387.contentPanel,
      children: (0, Chunk54381.jsx)("div", {
        children: exports ? (0, Chunk54381.jsx)(j, {}) : (0, Chunk54381.jsx)(Chunk873546, {})
      })
    })]
  })
}

function G() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(Chunk100527.Z.FAMILY_CENTER), t = (0, Chunk880257.Z)(), n = (0, Chunk399606.e7)([Chunk914788.Z], () => Chunk914788.Z.getIsInitialized()), a = (0, Chunk399606.e7)([Chunk210887.Z], () => Chunk210887.Z.theme), s = (0, Chunk313201.Dt)(), {
    isLoading: m,
    selectedTab: O,
    handleTabChange: v,
    showAgeGateModal: S
  } = (0, Chunk539086.M)({
    location: Chunk292352.Mu.SIDENAV,
    onMountEffect: () => {
      Chunk150063.Y(Chunk981631.Z5c.FAMILY_CENTER), !Chunk914788.Z.isLoading() && Chunk914788.Z.canRefetch() && Chunk260722.ZP.initialPageLoad()
    }
  });
  Chunk473749.useEffect(() => {
    let e = Chunk695346.Ex.getSetting();
    require && exports && true === module && Chunk695346.Ex.updateSetting(true)
  }, [require, exports]);
  let I = e => {
    v(e)
  };
  if (Chunk273879) return null;
  let T = Chunk631885 !== Chunk292352.dG.SETTINGS ? Chunk631885 : Chunk292352.dG.ACTIVITY,
    A = L[Chunk731934];
  return (0, Chunk54381.jsx)(Chunk906732.Gt, {
    value: module,
    children: (0, Chunk54381.jsxs)("main", {
      className: o()(Chunk166387.container, Chunk166387.containerSidenav),
      "aria-label": Chunk388032.intl.string(Chunk744038.default.RZqaJn),
      children: [(0, Chunk54381.jsx)(Chunk252618.yY, {
        location: Chunk388032.intl.string(Chunk744038.default.RZqaJn)
      }), (0, Chunk54381.jsx)(k, {
        theme: Chunk120356,
        section: Chunk731934,
        handleItemSelect: Chunk830746
      }), (0, Chunk54381.jsx)(Chunk481060.njP.Panel, {
        id: Chunk731934,
        "aria-labelledby": Chunk873546,
        className: Chunk166387.contentPanel,
        children: (0, Chunk54381.jsx)(Chunk481060.Ttm, {
          children: (0, Chunk54381.jsx)("div", {
            className: Chunk166387.sideNavContent,
            children: Chunk984370 ? (0, Chunk54381.jsx)(j, {}) : (0, Chunk54381.jsx)(Chunk521450, {})
          })
        })
      })]
    })
  })
}