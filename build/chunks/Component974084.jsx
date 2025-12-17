/** Chunk was on 45620 **/
/** chunk id: 974084, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk335818 = require("./335818.js"),
  Chunk481060 = require("./481060.js"),
  Chunk501431 = require("./501431.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk379398 = require("./379398.js");
let d = [{
    tab: Chunk215023.AW.AVATAR_DECORATIONS,
    labelKey: Chunk388032.t.dRZYNE
  }, {
    tab: Chunk215023.AW.PROFILE_EFFECTS,
    labelKey: Chunk388032.t["1cNjtx"]
  }, {
    tab: Chunk215023.AW.NAMEPLATES,
    labelKey: Chunk388032.t.V68Fqz
  }, {
    tab: Chunk215023.AW.BUNDLES,
    labelKey: Chunk388032.t.FYFpps
  }, {
    tab: Chunk215023.AW.CATALOG,
    labelKey: Chunk388032.t.xFcotU
  }],
  f = {
    [Chunk335818.G.ALL]: Chunk215023.AW.CATALOG,
    [Chunk335818.G.AVATAR_DECORATION]: Chunk215023.AW.AVATAR_DECORATIONS,
    [Chunk335818.G.PROFILE_EFFECT]: Chunk215023.AW.PROFILE_EFFECTS,
    [Chunk335818.G.NAMEPLATE]: Chunk215023.AW.NAMEPLATES,
    [Chunk335818.G.BUNDLE]: Chunk215023.AW.BUNDLES
  };

function g(e) {
  let {
    tabs: t,
    selectedTab: n,
    onTabSelect: a,
    onClose: g,
    showOrbRentalNewBadge: b
  } = e, {
    itemTypeFilters: p
  } = (0, o.S)(), m = l.useMemo(() => {
    if (n === i.AW.CATALOG && p.size > 0) {
      let e = f[Array.from(p)[0]];
      if (null != e) return e
    }
    return n
  }, [n, p]);
  return (0, r.jsx)(s.v2r, {
    navId: "collectibles-shop-tabs-overflow-menu",
    "aria-label": c.intl.string(c.t["UKOtz+"]),
    hideScroller: true,
    onClose: g,
    onSelect: g,
    children: (0, r.jsx)(s.kSQ, {
      children: t.map(e => {
        let {
          tab: t,
          label: l,
          hasSubmenu: o
        } = e;
        if (o && t === i.AW.CATALOG) {
          let e = t === n;
          return (0, r.jsx)(s.sNh, {
            id: t,
            label: l,
            icon: e ? s.owK : true,
            hasSubmenu: true,
            children: d.map(e => {
              let {
                tab: t,
                labelKey: n
              } = e, l = t === m;
              return (0, r.jsx)(s.sNh, {
                id: t,
                label: c.intl.string(n),
                icon: l ? s.owK : true,
                action: () => {
                  a(t), g()
                }
              }, t)
            })
          }, t)
        }
        let f = t === i.AW.ORBS && b,
          p = (0, r.jsxs)("span", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "4px"
            },
            children: [l, f && (0, r.jsx)(s.IGR, {
              text: c.intl.string(c.t.y2b7CA),
              className: u.newBadge
            })]
          });
        return (0, r.jsx)(s.sNh, {
          id: t,
          label: p,
          icon: t === n ? s.owK : true,
          action: () => a(t)
        }, t)
      })
    }, "overflow-tabs")
  })
}