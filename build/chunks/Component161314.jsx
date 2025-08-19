/** Chunk was on 91173 **/
/** chunk id: 161314, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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

function I(e) {
  var t;
  let {
    guildId: n
  } = e, l = (0, c.e7)([b.Z], () => b.Z.getGuild(n)), {
    loading: I,
    subscriptionsSettings: S
  } = (0, C.H)(n), {
    listingsLoaded: T
  } = (0, g.eD)(n), P = (0, g.ue)(n, {
    publishedOnly: true
  }), N = i.useCallback(async () => {
    E.default.track(y.rMx.GUILD_SHOP_EMBED_CLICKED, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({}, (0, p.hH)(n))), await (0, _.Z)(y.Z5c.SERVER_SHOP(n))
  }, [n]);
  (0, m.Z)({
    type: o.ImpressionTypes.VIEW,
    name: o.ImpressionNames.GUILD_SHOP_EMBED
  }, {
    disableTrack: null == l
  });
  let A = P.length > 0 ? new Date(Math.min(...P.map(e => Date.parse(e.published_at)))) : true;
  return I || !T ? (0, r.jsx)("div", {
    className: a()(j.guildShopEmbed, j.spinnerContainer),
    children: (0, r.jsx)(d.$jN, {})
  }) : null == l || null == S ? null : (0, r.jsxs)("div", {
    className: j.guildShopEmbed,
    children: [(0, r.jsx)(v.Z, {
      coverImageAsset: null != (t = S.cover_image_asset) ? t : null
    }), (0, r.jsx)(d.LZC, {
      size: 16
    }), (0, r.jsxs)("div", {
      className: j.serverShopLabel,
      children: [(0, r.jsx)(O.Z, {
        height: "16px",
        width: "16px",
        color: s.Z.INTERACTIVE_NORMAL
      }), (0, r.jsx)(d.X6q, {
        variant: "heading-sm/semibold",
        color: "interactive-normal",
        className: j.serverShopLabelText,
        children: x.intl.string(x.t.al5EXF)
      })]
    }), (0, r.jsx)(d.LZC, {
      size: 16
    }), (0, r.jsx)(d.X6q, {
      variant: "heading-md/semibold",
      color: "text-default",
      children: x.intl.format(x.t.NZeik5, {
        guildName: l.name
      })
    }), (0, r.jsx)(d.LZC, {
      size: 4
    }), (0, r.jsx)(d.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      lineClamp: 2,
      children: S.description
    }), (0, r.jsx)(d.LZC, {
      size: 16
    }), (0, r.jsx)(h.Z, {}), (0, r.jsx)(d.LZC, {
      size: 16
    }), (0, r.jsxs)("div", {
      className: j.guildShopEmbedFooter,
      children: [(0, r.jsx)(f.Z, {
        guild: l
      }), (0, r.jsxs)("ul", {
        className: j.guildShopSummary,
        children: [(0, r.jsx)("li", {
          children: (0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: x.intl.format(x.t.tKZNlZ, {
              listingCount: P.length
            })
          })
        }), null != A && (0, r.jsx)("li", {
          children: (0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: x.intl.format(x.t["kXr8+f"], {
              createdYear: A.getFullYear()
            })
          })
        })]
      }), (0, r.jsx)("div", {
        className: j.guildShopEmbedCta,
        children: (0, r.jsx)(u.zx, {
          onClick: N,
          icon: O.P,
          text: x.intl.string(x.t.jXx1CA)
        })
      })]
    })]
  })
}