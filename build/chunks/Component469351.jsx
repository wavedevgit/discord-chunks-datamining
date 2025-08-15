/** Chunk was on 6049 **/
/** chunk id: 469351, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  t: () => w
}), require("./388685.js"), require("./314940.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk278074 = require("./278074.js"),
  Chunk399606 = require("./399606.js"),
  Chunk755721 = require("./755721.js"),
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
  } = (0, y.eD)(t), R = (0, a.e7)([v.Z], () => v.Z.getGuild(t)), Z = (0, a.e7)([_.default], () => _.default.getCurrentUser()), D = null != R && (0, x.eM)(R, Z), {
    loading: A
  } = (0, c.H)(t), [k, L] = i.useState(n ? "manage_listings" : "payment");
  (0, m.P)(R);
  let M = i.useCallback(() => {
    if (null == R) return;
    let e = j.Z.getEveryoneRole(R);
    p.Z.close();
    let t = {
      [e.id]: e
    };
    (0, h.iD)(R.id, {
      type: f.z.SERVER_SHOP,
      roles: t,
      initialTab: "guild_products",
      returnToSection: E.pNK.GUILD_PRODUCTS
    }), (0, b.uL)(E.Z5c.CHANNEL(R.id, S.oC.GUILD_SHOP))
  }, [R]);
  if (!w || A) return (0, r.jsx)(o.$jN, {});
  if (null == R) return null;
  let G = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.vwX, {
        tag: o.RB0.H1,
        children: T.intl.string(T.t.X6h2g4)
      }), (0, r.jsx)(o.R94, {
        type: o.R94.Types.DESCRIPTION,
        children: T.intl.format(T.t.xiYuDg, {
          monetizationPolicyLink: O.Z.getArticleURL(E.BhN.CREATOR_POLICY),
          serverProductsSupportLink: O.Z.getCreatorSupportArticleURL(E.BhN.SERVER_PRODUCTS)
        })
      })]
    }),
    U = (0, r.jsxs)(o.njP, {
      type: "top",
      look: "brand",
      className: P.tabBar,
      "aria-label": T.intl.string(T.t.X6h2g4),
      selectedItem: k,
      onItemSelect: L,
      children: [(0, r.jsx)(u.Z, {
        id: "basic_info",
        disabledTooltip: T.intl.string(T.t.NVDuUV),
        disabled: !n,
        children: T.intl.string(T.t.w27QAQ)
      }), (0, r.jsx)(u.Z, {
        id: "manage_listings",
        disabledTooltip: T.intl.string(T.t.NVDuUV),
        disabled: !n,
        children: T.intl.string(T.t.wlZ1mp)
      }), D ? (0, r.jsx)(o.njP.Item, {
        id: "payment",
        className: P.tabBarItem,
        children: T.intl.string(T.t.YBrFe3)
      }) : null, n ? (0, r.jsx)("div", {
        className: P.previewButton,
        children: (0, r.jsx)(s.zx, {
          onClick: M,
          color: s.zx.Colors.PRIMARY,
          size: s.zx.Sizes.SMALL,
          look: s.zx.Looks.OUTLINED,
          children: T.intl.string(T.t.vM81yc)
        })
      }) : null]
    }),
    B = (0, l.EQ)(k).with("basic_info", () => (0, r.jsx)(C.Z, {
      guildId: t
    })).with("manage_listings", () => (0, r.jsx)(N.Z, {
      guildId: t
    })).with("payment", () => (0, r.jsx)(I.Z, {
      guildId: t
    })).exhaustive(),
    F = w ? (0, r.jsx)(o.njP.Panel, {
      id: k,
      children: B
    }) : (0, r.jsx)(o.$jN, {});
  return (0, r.jsxs)(d.AL, {
    guildId: t,
    children: [G, (0, r.jsx)(g.Z, {
      guild: R
    }), (0, r.jsx)("div", {
      className: P.tabBarContainer,
      children: U
    }), F]
  })
}