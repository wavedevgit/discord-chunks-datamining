/** Chunk was on 39048 **/
/** chunk id: 831806, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  o: () => P
}), require("./896048.js"), require("./801541.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk889137 = require("./889137.js"),
  Chunk417597 = require("./417597.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk722888 = require("./722888.js"),
  Chunk209812 = require("./209812.jsx"),
  Chunk44892 = require("./44892.jsx"),
  Chunk833448 = require("./833448.jsx"),
  Chunk299824 = require("./299824.jsx"),
  Chunk997509 = require("./997509.js"),
  Chunk529942 = require("./529942.js"),
  Chunk209700 = require("./209700.js"),
  Chunk976860 = require("./976860.js"),
  Chunk260509 = require("./260509.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk975571 = require("./975571.js"),
  Chunk250627 = require("./250627.js"),
  Chunk808138 = require("./808138.jsx"),
  Chunk271653 = require("./271653.jsx"),
  Chunk371701 = require("./371701.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk289 = require("./289.js");

function P(e) {
  let {
    guildId: t,
    hasValidApplication: n
  } = e, {
    listingsLoaded: P
  } = (0, y.bb)(t), w = (0, s.bG)([_.A], () => _.A.getGuild(t)), R = (0, s.bG)([O.default], () => O.default.getCurrentUser()), D = null != w && (0, x.bM)(w, R), {
    loading: G
  } = (0, c.G)(t), [L, k] = i.useState(n ? "manage_listings" : "payment");
  (0, g.T)(w);
  let M = i.useCallback(() => {
    if (null == w) return;
    let e = j.A.getEveryoneRole(w);
    p.A.close();
    let t = {
      [e.id]: e
    };
    (0, f.Tk)(w.id, {
      type: h._.SERVER_SHOP,
      roles: t,
      initialTab: "guild_products",
      returnToSection: S.BEX.GUILD_PRODUCTS
    }), (0, b.pX)(S.BVt.CHANNEL(w.id, I.VV.GUILD_SHOP))
  }, [w]);
  if (!P || G) return (0, r.jsx)(o.y$y, {});
  if (null == w) return null;
  let U = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        children: T.intl.string(T.t.X6h2gz)
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: T.intl.format(T.t.xiYuDt, {
          monetizationPolicyLink: v.A.getArticleURL(S.MVz.CREATOR_POLICY),
          serverProductsSupportLink: v.A.getCreatorSupportArticleURL(S.MVz.SERVER_PRODUCTS)
        })
      })]
    }),
    B = (0, r.jsxs)(o.VQ0, {
      type: "top",
      look: "brand",
      className: C.$H,
      "aria-label": T.intl.string(T.t.X6h2gz),
      selectedItem: L,
      onItemSelect: k,
      children: [(0, r.jsx)(u.A, {
        id: "basic_info",
        disabledTooltip: T.intl.string(T.t.NVDuUX),
        disabled: !n,
        children: T.intl.string(T.t.w27QAR)
      }), (0, r.jsx)(u.A, {
        id: "manage_listings",
        disabledTooltip: T.intl.string(T.t.NVDuUX),
        disabled: !n,
        children: T.intl.string(T.t.wlZ1mh)
      }), D ? (0, r.jsx)(o.VQ0.Item, {
        id: "payment",
        className: C.YU,
        children: T.intl.string(T.t.YBrFe6)
      }) : null, n ? (0, r.jsx)("div", {
        className: C.jc,
        children: (0, r.jsx)(a.$nd, {
          text: T.intl.string(T.t.vM81yY),
          variant: "secondary",
          onClick: M,
          size: "sm"
        })
      }) : null]
    }),
    F = (0, l.YW)(L).with("basic_info", () => (0, r.jsx)(A.A, {
      guildId: t
    })).with("manage_listings", () => (0, r.jsx)(E.A, {
      guildId: t
    })).with("payment", () => (0, r.jsx)(N.A, {
      guildId: t
    })).exhaustive(),
    H = P ? (0, r.jsx)(o.VQ0.Panel, {
      id: L,
      children: F
    }) : (0, r.jsx)(o.y$y, {});
  return (0, r.jsxs)(d.ZV, {
    guildId: t,
    children: [U, (0, r.jsx)(m.A, {
      guild: w
    }), (0, r.jsx)("div", {
      className: C.Mv,
      children: B
    }), H]
  })
}