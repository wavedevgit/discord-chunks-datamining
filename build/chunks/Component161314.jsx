/** Chunk was on web.js **/
/** chunk id: 161314, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk831209 = require("./831209.js"),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk213609 = require("./213609.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk267101 = require("./267101.js"),
  Chunk336197 = require("./336197.js"),
  Chunk661824 = require("./661824.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk626135 = require("./626135.js"),
  Chunk76535 = require("./76535.js"),
  Chunk866104 = require("./866104.jsx"),
  Chunk886176 = require("./886176.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk736636 = require("./736636.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      A(e, t, n[t])
    })
  }
  return e
}

function N(e) {
  var t;
  let {
    guildId: n
  } = e, a = (0, c.e7)([E.Z], () => E.Z.getGuild(n)), {
    loading: A,
    subscriptionsSettings: N
  } = (0, y.H)(n), {
    listingsLoaded: R
  } = (0, h.eD)(n), P = (0, h.ue)(n, {
    publishedOnly: true
  }), w = i.useCallback(async () => {
    b.default.track(I.rMx.GUILD_SHOP_EMBED_CLICKED, C({}, (0, f.hH)(n))), await (0, m.Z)(I.Z5c.SERVER_SHOP(n))
  }, [n]);
  (0, _.Z)({
    type: s.ImpressionTypes.VIEW,
    name: s.ImpressionNames.GUILD_SHOP_EMBED
  }, {
    disableTrack: null == a
  });
  let D = P.length > 0 ? new Date(Math.min(...P.map(e => Date.parse(e.published_at)))) : true;
  return A || !R ? (0, r.jsx)("div", {
    className: o()(T.guildShopEmbed, T.spinnerContainer),
    children: (0, r.jsx)(d.$jN, {})
  }) : null == a || null == N ? null : (0, r.jsxs)("div", {
    className: T.guildShopEmbed,
    children: [(0, r.jsx)(O.Z, {
      coverImageAsset: null != (t = N.cover_image_asset) ? t : null
    }), (0, r.jsx)(d.LZC, {
      size: 16
    }), (0, r.jsxs)("div", {
      className: T.serverShopLabel,
      children: [(0, r.jsx)(v.Z, {
        height: "16px",
        width: "16px",
        color: l.Z.INTERACTIVE_NORMAL
      }), (0, r.jsx)(d.Heading, {
        variant: "heading-sm/semibold",
        color: "interactive-normal",
        className: T.serverShopLabelText,
        children: S.intl.string(S.t.al5EXL)
      })]
    }), (0, r.jsx)(d.LZC, {
      size: 16
    }), (0, r.jsx)(d.Heading, {
      variant: "heading-md/semibold",
      color: "text-default",
      children: S.intl.format(S.t.NZeik9, {
        guildName: a.name
      })
    }), (0, r.jsx)(d.LZC, {
      size: 4
    }), (0, r.jsx)(d.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      lineClamp: 2,
      children: N.description
    }), (0, r.jsx)(d.LZC, {
      size: 16
    }), (0, r.jsx)(g.Z, {}), (0, r.jsx)(d.LZC, {
      size: 16
    }), (0, r.jsxs)("div", {
      className: T.guildShopEmbedFooter,
      children: [(0, r.jsx)(p.Z, {
        guild: a
      }), (0, r.jsxs)("ul", {
        className: T.guildShopSummary,
        children: [(0, r.jsx)("li", {
          children: (0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: S.intl.format(S.t.tKZNlb, {
              listingCount: P.length
            })
          })
        }), null != D && (0, r.jsx)("li", {
          children: (0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: S.intl.format(S.t["kXr8+b"], {
              createdYear: D.getFullYear()
            })
          })
        })]
      }), (0, r.jsx)("div", {
        className: T.guildShopEmbedCta,
        children: (0, r.jsx)(u.zxk, {
          onClick: w,
          icon: v.P,
          text: S.intl.string(S.t.jXx1CC)
        })
      })]
    })]
  })
}