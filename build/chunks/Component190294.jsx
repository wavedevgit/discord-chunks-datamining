/** Chunk was on 59275 **/
/** chunk id: 190294, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => b
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
  f = {
    [Chunk641150.q.ALL]: Chunk758836.G2.CATALOG,
    [Chunk641150.q.AVATAR_DECORATION]: Chunk758836.G2.AVATAR_DECORATIONS,
    [Chunk641150.q.PROFILE_EFFECT]: Chunk758836.G2.PROFILE_EFFECTS,
    [Chunk641150.q.NAMEPLATE]: Chunk758836.G2.NAMEPLATES,
    [Chunk641150.q.BUNDLE]: Chunk758836.G2.BUNDLES
  };

function b(e) {
  let {
    tabs: t,
    selectedTab: l,
    onTabSelect: s,
    onClose: b,
    showOrbRentalNewBadge: g
  } = e, {
    itemTypeFilters: p
  } = (0, i.v)(), m = r.useMemo(() => {
    if (l === o.G2.CATALOG && p.size > 0) {
      let e = f[Array.from(p)[0]];
      if (null != e) return e
    }
    return l
  }, [l, p]);
  return (0, n.jsx)(a.W1t, {
    navId: "collectibles-shop-tabs-overflow-menu",
    "aria-label": c.intl.string(c.t["UKOtz+"]),
    hideScroller: true,
    onClose: b,
    onSelect: b,
    children: (0, n.jsx)(a.rXV, {
      children: t.map(e => {
        let {
          tab: t,
          label: r,
          hasSubmenu: i
        } = e;
        if (i && t === o.G2.CATALOG) {
          let e = t === l;
          return (0, n.jsx)(a.Drp, {
            id: t,
            label: r,
            icon: e ? a.yr3 : true,
            hasSubmenu: true,
            children: d.map(e => {
              let {
                tab: t,
                labelKey: l
              } = e, r = t === m;
              return (0, n.jsx)(a.Drp, {
                id: t,
                label: c.intl.string(l),
                icon: r ? a.yr3 : true,
                action: () => {
                  s(t), b()
                }
              }, t)
            })
          }, t)
        }
        let f = t === o.G2.ORBS && g,
          p = (0, n.jsxs)("span", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "4px"
            },
            children: [r, f && (0, n.jsx)(a.LpS, {
              text: c.intl.string(c.t.y2b7CA),
              className: u.Ad
            })]
          });
        return (0, n.jsx)(a.Drp, {
          id: t,
          label: p,
          icon: t === l ? a.yr3 : true,
          action: () => s(t)
        }, t)
      })
    }, "overflow-tabs")
  })
}