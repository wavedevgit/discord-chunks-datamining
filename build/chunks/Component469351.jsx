/** Chunk was on 384 **/
/** chunk id: 469351, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  t: () => w
}), require("./388685.js"), require("./314940.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk278074 = require("./278074.js"),
  Chunk399606 = require("./399606.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk76535 = require("./76535.js"),
  Chunk395586 = require("./395586.jsx"),
  Chunk204875 = require("./204875.jsx"),
  Chunk715796 = require("./715796.jsx"),
  Chunk411667 = require("./411667.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk962086 = require("./962086.js"),
  Chunk225675 = require("./225675.js"),
  Chunk703656 = require("./703656.js"),
  Chunk601964 = require("./601964.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk63063 = require("./63063.js"),
  Chunk267101 = require("./267101.js"),
  Chunk294294 = require("./294294.jsx"),
  Chunk310800 = require("./310800.jsx"),
  Chunk833695 = require("./833695.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk68920 = require("./68920.js");

function w(e) {
  let {
    guildId: t,
    hasValidApplication: n
  } = e, {
    listingsLoaded: w
  } = (0, C.eD)(t), Z = (0, a.e7)([_.Z], () => _.Z.getGuild(t)), R = (0, a.e7)([v.default], () => v.default.getCurrentUser()), D = null != Z && (0, x.eM)(Z, R), {
    loading: A
  } = (0, c.H)(t), [L, k] = i.useState(n ? "manage_listings" : "payment");
  (0, g.P)(Z);
  let G = i.useCallback(() => {
    if (null == Z) return;
    let e = j.Z.getEveryoneRole(Z);
    p.Z.close();
    let t = {
      [e.id]: e
    };
    (0, f.iD)(Z.id, {
      type: h.z.SERVER_SHOP,
      roles: t,
      initialTab: "guild_products",
      returnToSection: I.pNK.GUILD_PRODUCTS
    }), (0, b.uL)(I.Z5c.CHANNEL(Z.id, S.oC.GUILD_SHOP))
  }, [Z]);
  if (!w || A) return (0, r.jsx)(o.$jN, {});
  if (null == Z) return null;
  let M = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        children: T.intl.string(T.t.X6h2gz)
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: T.intl.format(T.t.xiYuDt, {
          monetizationPolicyLink: O.Z.getArticleURL(I.BhN.CREATOR_POLICY),
          serverProductsSupportLink: O.Z.getCreatorSupportArticleURL(I.BhN.SERVER_PRODUCTS)
        })
      })]
    }),
    U = (0, r.jsxs)(o.njP, {
      type: "top",
      look: "brand",
      className: P.tabBar,
      "aria-label": T.intl.string(T.t.X6h2gz),
      selectedItem: L,
      onItemSelect: k,
      children: [(0, r.jsx)(u.Z, {
        id: "basic_info",
        disabledTooltip: T.intl.string(T.t.NVDuUX),
        disabled: !n,
        children: T.intl.string(T.t.w27QAR)
      }), (0, r.jsx)(u.Z, {
        id: "manage_listings",
        disabledTooltip: T.intl.string(T.t.NVDuUX),
        disabled: !n,
        children: T.intl.string(T.t.wlZ1mh)
      }), D ? (0, r.jsx)(o.njP.Item, {
        id: "payment",
        className: P.tabBarItem,
        children: T.intl.string(T.t.YBrFe6)
      }) : null, n ? (0, r.jsx)("div", {
        className: P.previewButton,
        children: (0, r.jsx)(s.zxk, {
          text: T.intl.string(T.t.vM81yY),
          variant: "secondary",
          onClick: G,
          size: "sm"
        })
      }) : null]
    }),
    B = (0, l.EQ)(L).with("basic_info", () => (0, r.jsx)(y.Z, {
      guildId: t
    })).with("manage_listings", () => (0, r.jsx)(N.Z, {
      guildId: t
    })).with("payment", () => (0, r.jsx)(E.Z, {
      guildId: t
    })).exhaustive(),
    F = w ? (0, r.jsx)(o.njP.Panel, {
      id: L,
      children: B
    }) : (0, r.jsx)(o.$jN, {});
  return (0, r.jsxs)(d.AL, {
    guildId: t,
    children: [M, (0, r.jsx)(m.Z, {
      guild: Z
    }), (0, r.jsx)("div", {
      className: P.tabBarContainer,
      children: U
    }), F]
  })
}