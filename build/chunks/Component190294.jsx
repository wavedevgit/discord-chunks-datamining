/** Chunk was on 59275 **/
/** chunk id: 190294, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk641150 = require("./641150.js"),
  Chunk397927 = require("./397927.js"),
  Chunk365491 = require("./365491.js"),
  Chunk758836 = require("./758836.js"),
  Chunk985018 = require("./985018.jsx");
let u = [{
    tab: Chunk758836.G2.AVATAR_DECORATIONS,
    labelKey: Chunk985018.t.dRZYNE
  }, {
    tab: Chunk758836.G2.PROFILE_EFFECTS,
    labelKey: Chunk985018.t["1cNjtx"]
  }, {
    tab: Chunk758836.G2.NAMEPLATES,
    labelKey: Chunk985018.t.V68Fqz
  }, {
    tab: Chunk758836.G2.BUNDLES,
    labelKey: Chunk985018.t.FYFpps
  }, {
    tab: Chunk758836.G2.CATALOG,
    labelKey: Chunk985018.t.xFcotU
  }],
  d = {
    [Chunk641150.q.ALL]: Chunk758836.G2.CATALOG,
    [Chunk641150.q.AVATAR_DECORATION]: Chunk758836.G2.AVATAR_DECORATIONS,
    [Chunk641150.q.PROFILE_EFFECT]: Chunk758836.G2.PROFILE_EFFECTS,
    [Chunk641150.q.NAMEPLATE]: Chunk758836.G2.NAMEPLATES,
    [Chunk641150.q.BUNDLE]: Chunk758836.G2.BUNDLES
  };

function g(e) {
  let {
    tabs: t,
    selectedTab: n,
    onTabSelect: s,
    onClose: g,
    showOrbRentalNewBadge: f
  } = e, {
    itemTypeFilters: m
  } = (0, i.v)(), p = l.useMemo(() => {
    if (n === o.G2.CATALOG && m.size > 0) {
      let e = d[Array.from(m)[0]];
      if (null != e) return e
    }
    return n
  }, [n, m]);
  return (0, r.jsx)(a.W1t, {
    "data-menu-migrated-auto": true,
    navId: "collectibles-shop-tabs-overflow-menu",
    "aria-label": c.intl.string(c.t["UKOtz+"]),
    hideScroller: true,
    onClose: g,
    onSelect: g,
    children: (0, r.jsx)(a.rXV, {
      children: t.map(e => {
        let {
          tab: t,
          label: l,
          hasSubmenu: i
        } = e;
        if (i && t === o.G2.CATALOG) {
          let e = t === n;
          return (0, r.jsx)(a.Drp, {
            id: t,
            label: l,
            icon: e ? a.yr3 : true,
            leadingAccessory: e ? {
              type: "icon",
              icon: a.yr3
            } : true,
            hasSubmenu: true,
            children: u.map(e => {
              let {
                tab: t,
                labelKey: n
              } = e, l = t === p;
              return (0, r.jsx)(a.Drp, {
                id: t,
                label: c.intl.string(n),
                icon: l ? a.yr3 : true,
                leadingAccessory: l ? {
                  type: "icon",
                  icon: a.yr3
                } : true,
                action: () => {
                  s(t), g()
                }
              }, t)
            })
          }, t)
        }
        let d = t === o.G2.ORBS && f;
        return (0, r.jsx)(a.Drp, {
          id: t,
          label: l,
          icon: t === n ? a.yr3 : true,
          leadingAccessory: t === n ? {
            type: "icon",
            icon: a.yr3
          } : true,
          badge: d ? "new" : true,
          action: () => s(t)
        }, t)
      })
    }, "overflow-tabs")
  })
}