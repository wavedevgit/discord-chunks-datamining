/** Chunk was on web.js **/
/** chunk id: 161314, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk831209 = require("./831209.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
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
  Chunk24665 = require("./24665.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function N(e) {
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

function C(e) {
  var t;
  let {
    guildId: n
  } = e, o = (0, c.e7)([E.Z], () => E.Z.getGuild(n)), {
    loading: A,
    subscriptionsSettings: C
  } = (0, y.H)(n), {
    listingsLoaded: R
  } = (0, h.eD)(n), P = (0, h.ue)(n, {
    publishedOnly: true
  }), w = i.useCallback(async () => {
    b.default.track(I.rMx.GUILD_SHOP_EMBED_CLICKED, N({}, (0, f.hH)(n))), await (0, m.Z)(I.Z5c.SERVER_SHOP(n))
  }, [n]);
  (0, _.Z)({
    type: s.ImpressionTypes.VIEW,
    name: s.ImpressionNames.GUILD_SHOP_EMBED
  }, {
    disableTrack: null == o
  });
  let D = P.length > 0 ? new Date(Math.min(...P.map(e => Date.parse(e.published_at)))) : true;
  return A || !R ? (0, r.jsx)("div", {
    className: a()(S.guildShopEmbed, S.spinnerContainer),
    children: (0, r.jsx)(d.$jN, {})
  }) : null == o || null == C ? null : (0, r.jsxs)("div", {
    className: S.guildShopEmbed,
    children: [(0, r.jsx)(O.Z, {
      coverImageAsset: null != (t = C.cover_image_asset) ? t : null
    }), (0, r.jsx)(d.LZC, {
      size: 16
    }), (0, r.jsxs)("div", {
      className: S.serverShopLabel,
      children: [(0, r.jsx)(v.Z, {
        height: "16px",
        width: "16px",
        color: l.Z.INTERACTIVE_NORMAL
      }), (0, r.jsx)(d.X6q, {
        variant: "heading-sm/semibold",
        color: "interactive-normal",
        className: S.serverShopLabelText,
        children: T.intl.string(T.t.al5EXF)
      })]
    }), (0, r.jsx)(d.LZC, {
      size: 16
    }), (0, r.jsx)(d.X6q, {
      variant: "heading-md/semibold",
      color: "text-default",
      children: T.intl.format(T.t.NZeik5, {
        guildName: o.name
      })
    }), (0, r.jsx)(d.LZC, {
      size: 4
    }), (0, r.jsx)(d.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      lineClamp: 2,
      children: C.description
    }), (0, r.jsx)(d.LZC, {
      size: 16
    }), (0, r.jsx)(g.Z, {}), (0, r.jsx)(d.LZC, {
      size: 16
    }), (0, r.jsxs)("div", {
      className: S.guildShopEmbedFooter,
      children: [(0, r.jsx)(p.Z, {
        guild: o
      }), (0, r.jsxs)("ul", {
        className: S.guildShopSummary,
        children: [(0, r.jsx)("li", {
          children: (0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: T.intl.format(T.t.tKZNlZ, {
              listingCount: P.length
            })
          })
        }), null != D && (0, r.jsx)("li", {
          children: (0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: T.intl.format(T.t["kXr8+f"], {
              createdYear: D.getFullYear()
            })
          })
        })]
      }), (0, r.jsx)(u.zx, {
        className: S.guildShopEmbedCta,
        onClick: w,
        children: (0, r.jsxs)("div", {
          className: S.guildShopEmbedCtaContent,
          children: [(0, r.jsx)(v.Z, {
            height: "18px",
            width: "18px"
          }), (0, r.jsx)(d.Text, {
            variant: "text-sm/medium",
            color: "always-white",
            children: T.intl.string(T.t.jXx1CA)
          })]
        })
      })]
    })]
  })
}