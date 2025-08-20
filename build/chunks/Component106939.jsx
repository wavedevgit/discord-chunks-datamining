/** Chunk was on web.js **/
/** chunk id: 106939, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => K,
  Z: () => z
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk286379 = require("./286379.js"),
  Chunk399606 = require("./399606.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk150063 = require("./150063.js"),
  Chunk493773 = require("./493773.js"),
  Chunk758119 = require("./758119.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk252618 = require("./252618.js"),
  Chunk313201 = require("./313201.js"),
  Chunk266454 = require("./266454.js"),
  Chunk984370 = require("./984370.jsx"),
  Chunk797614 = require("./797614.js"),
  Chunk108427 = require("./108427.js"),
  Chunk210887 = require("./210887.js"),
  Chunk695346 = require("./695346.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk260722 = require("./260722.js"),
  Chunk914788 = require("./914788.js"),
  Chunk841409 = require("./841409.js"),
  Chunk652262 = require("./652262.js"),
  Chunk880257 = require("./880257.js"),
  Chunk631885 = require("./631885.js"),
  Chunk830746 = require("./830746.jsx"),
  Chunk731934 = require("./731934.jsx"),
  Chunk521450 = require("./521450.jsx"),
  Chunk292352 = require("./292352.js"),
  Chunk981631 = require("./981631.js"),
  Chunk723359 = require("./723359.js"),
  Chunk921944 = require("./921944.js"),
  Chunk345909 = require("./345909.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk166387 = require("./166387.js");
let F = {
    [Chunk292352.dG.REQUESTS]: () => (0, Chunk951288.jsx)(Chunk731934.Z, {}),
    [Chunk292352.dG.ACTIVITY]: () => (0, Chunk951288.jsx)(Chunk830746.Z, {}),
    [Chunk292352.dG.SETTINGS]: () => (0, Chunk951288.jsx)(Chunk521450.Z, {})
  },
  H = {
    [Chunk292352.dG.REQUESTS]: () => (0, Chunk951288.jsx)(Chunk731934.Z, {}),
    [Chunk292352.dG.ACTIVITY]: () => (0, Chunk951288.jsx)(Chunk830746.Z, {})
  };

function Y(e) {
  let {
    section: t,
    handleItemSelect: n
  } = e, i = (0, D.gU)(), a = (0, w.Z)();
  return (0, r.jsxs)(d.njP, {
    className: V.settingsTabBar,
    "aria-label": Z.intl.string(B.default.RZqaJi),
    selectedItem: t,
    type: "top",
    look: "brand",
    onItemSelect: n,
    children: [(0, r.jsx)(d.njP.Item, {
      className: V.settingsTabBarItem,
      id: M.dG.ACTIVITY,
      children: Z.intl.string(B.default.bdBmq6)
    }), (0, r.jsxs)(d.njP.Item, {
      className: V.settingsTabBarItem,
      id: M.dG.REQUESTS,
      "aria-label": Z.intl.string(B.default["gVWG+/"]),
      children: [Z.intl.string(B.default["gVWG+/"]), i > 0 ? (0, r.jsx)(d.mAB, {
        className: V.badge,
        count: i
      }) : null]
    }), a ? (0, r.jsx)(d.njP.Item, {
      className: V.settingsTabBarItem,
      id: M.dG.SETTINGS,
      children: Z.intl.string(Z.t["3D5yo6"])
    }) : null]
  })
}

function W(e) {
  let {
    theme: t,
    section: n,
    handleItemSelect: i
  } = e, a = (0, E.Dt)(), l = (0, D.gU)();
  return (0, r.jsx)(d.f6W, {
    theme: t,
    children: e => (0, r.jsxs)(y.Z, {
      className: o()(e, V.sidebarTabBar),
      scrollable: s.tq,
      role: "navigation",
      "aria-labelledby": a,
      toolbar: true,
      children: [(0, r.jsx)(y.Z.Icon, {
        icon: d.BFJ,
        "aria-hidden": true
      }), (0, r.jsx)(y.Z.Title, {
        id: a,
        children: Z.intl.string(B.default.RZqaJi)
      }), (0, r.jsx)(y.Z.Divider, {}), (0, r.jsxs)(d.njP, {
        "aria-label": Z.intl.string(B.default.RZqaJi),
        selectedItem: n,
        type: "top-pill",
        onItemSelect: i,
        className: V.__invalid_tabBar,
        children: [(0, r.jsx)(d.njP.Item, {
          id: M.dG.ACTIVITY,
          className: V.item,
          children: Z.intl.string(B.default.bdBmq6)
        }), (0, r.jsxs)(d.njP.Item, {
          id: M.dG.REQUESTS,
          className: V.item,
          "aria-label": Z.intl.string(B.default["gVWG+/"]),
          children: [Z.intl.string(B.default["gVWG+/"]), l > 0 ? (0, r.jsx)(d.mAB, {
            className: V.badge,
            count: l
          }) : null]
        })]
      })]
    })
  })
}

function K() {
  let e = (0, Chunk880257.Z)(),
    t = (0, Chunk631885.M8)(),
    n = (0, Chunk266454.Nj)(Chunk704215.z.FAMILY_CENTER_NEW_BADGE),
    a = (0, Chunk399606.e7)([Chunk914788.Z], () => Chunk914788.Z.getIsInitialized()),
    o = (0, Chunk652262.M)(),
    {
      selectedTab: s,
      handleTabChange: f
    } = (0, Chunk841409.Z)(),
    h = (0, Chunk313201.Dt)(),
    m = Chunk594174.default.getCurrentUser(),
    y = null != module,
    I = Chunk120356 && null != Chunk906732 && !Chunk984370;
  (0, Chunk493773.ZP)(() => {
    (0, Chunk108427.e)("family-center"), Chunk260722.ZP.initialPageLoad(), require || (0, Chunk266454.Q3)(Chunk704215.z.FAMILY_CENTER_NEW_BADGE, {
      dismissAction: Chunk921944.L.AUTO,
      forceTrack: true
    })
  });
  let T = {
      isConsideredAdult: module,
      numOfAcceptedRequests: exports,
      selectedTab: Chunk873546,
      selectedTeenId: o
    },
    x = Chunk647438.useRef(Chunk695346);
  Chunk647438.useEffect(() => {
    Chunk830746.current = Chunk695346
  }), Chunk647438.useEffect(() => {
    if (Chunk120356 && Chunk984370) {
      let {
        isConsideredAdult: e,
        numOfAcceptedRequests: t,
        selectedTab: n,
        selectedTeenId: r
      } = Chunk830746.current;
      Chunk626135.default.track(Chunk981631.rMx.FAMILY_CENTER_VIEWED, {
        is_considered_adult: module,
        num_of_accepted_links: exports,
        selected_teen_id: Chunk951288,
        initial_page: Chunk292352.QH[require],
        source: Chunk292352._6[Chunk292352.Mu.SIDENAV]
      }), Chunk797614.Z.increment({
        name: Chunk286379.V.FAMILY_CENTER_VIEW
      })
    }
  }, [Chunk120356, Chunk984370]), Chunk647438.useEffect(() => {
    Chunk210887 && (0, Chunk758119.mN)(Chunk723359.L0.FAMILY_CENTER)
  }, [Chunk210887]);
  let L = e => {
    f(e)
  };
  return Chunk210887 ? null : (0, Chunk951288.jsxs)("main", {
    className: Chunk166387.container,
    "aria-label": Chunk388032.intl.string(Chunk345909.default.RZqaJi),
    children: [(0, Chunk951288.jsx)(Chunk252618.yY, {
      location: Chunk388032.intl.string(Chunk345909.default.RZqaJi)
    }), (0, Chunk951288.jsx)(Y, {
      section: Chunk873546,
      handleItemSelect: Chunk731934
    }), (0, Chunk951288.jsx)(Chunk481060.njP.Panel, {
      id: Chunk873546,
      "aria-labelledby": Chunk100527,
      className: Chunk166387.contentPanel,
      children: (0, Chunk951288.jsx)("div", {
        children: F[Chunk873546]()
      })
    })]
  })
}

function z() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(Chunk100527.Z.FAMILY_CENTER), t = (0, Chunk880257.Z)(), n = (0, Chunk631885.M8)(), a = (0, Chunk266454.Nj)(Chunk704215.z.FAMILY_CENTER_NEW_BADGE), s = (0, Chunk399606.e7)([Chunk914788.Z], () => Chunk914788.Z.getIsInitialized()), y = (0, Chunk652262.M)(), x = (0, Chunk399606.e7)([Chunk210887.Z], () => Chunk210887.Z.theme), {
    selectedTab: L,
    handleTabChange: j
  } = (0, Chunk841409.Z)(), F = (0, Chunk313201.Dt)(), Y = Chunk594174.default.getCurrentUser(), K = null != exports, z = Chunk873546 && null != Y && !K;
  (0, Chunk493773.ZP)(() => {
    Chunk150063.Y(Chunk981631.Z5c.FAMILY_CENTER), (0, Chunk108427.e)("family-center"), !Chunk914788.Z.isLoading() && Chunk914788.Z.canRefetch() && Chunk260722.ZP.initialPageLoad(), Chunk120356 || (0, Chunk266454.Q3)(Chunk704215.z.FAMILY_CENTER_NEW_BADGE, {
      dismissAction: Chunk921944.L.AUTO,
      forceTrack: true
    })
  });
  let q = {
      isConsideredAdult: exports,
      numOfAcceptedRequests: require,
      selectedTab: Chunk731934,
      selectedTeenId: Chunk984370
    },
    X = Chunk647438.useRef(q);
  Chunk647438.useEffect(() => {
    X.current = q
  }), Chunk647438.useEffect(() => {
    if (Chunk873546 && K) {
      let {
        isConsideredAdult: e,
        numOfAcceptedRequests: t,
        selectedTab: n,
        selectedTeenId: r
      } = X.current;
      Chunk626135.default.track(Chunk981631.rMx.FAMILY_CENTER_VIEWED, {
        is_considered_adult: module,
        num_of_accepted_links: exports,
        selected_teen_id: Chunk951288,
        initial_page: Chunk292352.QH[require],
        source: Chunk292352._6[Chunk292352.Mu.SIDENAV]
      }), Chunk797614.Z.increment({
        name: Chunk286379.V.FAMILY_CENTER_VIEW
      })
    }
  }, [Chunk873546, K]), Chunk647438.useEffect(() => {
    let e = Chunk695346.Ex.getSetting();
    Chunk873546 && exports && true === module && Chunk695346.Ex.updateSetting(true)
  }, [Chunk873546, exports]), Chunk647438.useEffect(() => {
    z && (0, Chunk758119.mN)(Chunk723359.L0.FAMILY_CENTER)
  }, [z]);
  let Q = e => {
    j(e)
  };
  if (z) return null;
  let J = Chunk731934 !== Chunk292352.dG.SETTINGS ? Chunk731934 : Chunk292352.dG.ACTIVITY,
    $ = H[J];
  return (0, Chunk951288.jsx)(Chunk906732.Gt, {
    value: module,
    children: (0, Chunk951288.jsxs)("main", {
      className: o()(Chunk166387.container, Chunk166387.containerSidenav),
      "aria-label": Chunk388032.intl.string(Chunk345909.default.RZqaJi),
      children: [(0, Chunk951288.jsx)(Chunk252618.yY, {
        location: Chunk388032.intl.string(Chunk345909.default.RZqaJi)
      }), (0, Chunk951288.jsx)(W, {
        theme: Chunk830746,
        section: J,
        handleItemSelect: Q
      }), (0, Chunk951288.jsx)(Chunk481060.njP.Panel, {
        id: J,
        "aria-labelledby": F,
        className: Chunk166387.contentPanel,
        children: (0, Chunk951288.jsx)(Chunk481060.Ttm, {
          children: (0, Chunk951288.jsx)("div", {
            className: Chunk166387.sideNavContent,
            children: $()
          })
        })
      })]
    })
  })
}