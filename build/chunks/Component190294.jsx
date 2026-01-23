/** Chunk was on 59275 **/
/** chunk id: 190294, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk641150 = require("./641150.js"),
  Chunk397927 = require("./397927.js"),
  Chunk365491 = require("./365491.js"),
  Chunk758836 = require("./758836.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk78716 = require("./78716.js");
let d = [{
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
  g = {
    [Chunk641150.q.ALL]: Chunk758836.G2.CATALOG,
    [Chunk641150.q.AVATAR_DECORATION]: Chunk758836.G2.AVATAR_DECORATIONS,
    [Chunk641150.q.PROFILE_EFFECT]: Chunk758836.G2.PROFILE_EFFECTS,
    [Chunk641150.q.NAMEPLATE]: Chunk758836.G2.NAMEPLATES,
    [Chunk641150.q.BUNDLE]: Chunk758836.G2.BUNDLES
  };

function f(e) {
  let {
    tabs: t,
    selectedTab: n,
    onTabSelect: s,
    onClose: f,
    showOrbRentalNewBadge: p
  } = e, {
    itemTypeFilters: m
  } = (0, i.v)(), _ = l.useMemo(() => {
    if (n === o.G2.CATALOG && m.size > 0) {
      let e = g[Array.from(m)[0]];
      if (null != e) return e
    }
    return n
  }, [n, m]);
  return (0, r.jsx)(a.W1t, {
    navId: "collectibles-shop-tabs-overflow-menu",
    "aria-label": c.intl.string(c.t["UKOtz+"]),
    hideScroller: true,
    onClose: f,
    onSelect: f,
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
            hasSubmenu: true,
            children: d.map(e => {
              let {
                tab: t,
                labelKey: n
              } = e, l = t === _;
              return (0, r.jsx)(a.Drp, {
                id: t,
                label: c.intl.string(n),
                icon: l ? a.yr3 : true,
                action: () => {
                  s(t), f()
                }
              }, t)
            })
          }, t)
        }
        let g = t === o.G2.ORBS && p,
          m = (0, r.jsxs)("span", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "4px"
            },
            children: [l, g && (0, r.jsx)(a.LpS, {
              text: c.intl.string(c.t.y2b7CA),
              className: u.Ad
            })]
          });
        return (0, r.jsx)(a.Drp, {
          id: t,
          label: m,
          icon: t === n ? a.yr3 : true,
          action: () => s(t)
        }, t)
      })
    }, "overflow-tabs")
  })
}