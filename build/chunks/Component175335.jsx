/** Chunk was on 64935 **/
/** chunk id: 175335, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => C
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk110259 = require("./110259.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk58149 = require("./58149.js"),
  Chunk139286 = require("./139286.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk250627 = require("./250627.js"),
  Chunk22007 = require("./22007.js"),
  Chunk813516 = require("./813516.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk954571 = require("./954571.js"),
  Chunk722888 = require("./722888.js"),
  Chunk43136 = require("./43136.jsx"),
  Chunk575926 = require("./575926.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk266847 = require("./266847.js");

function C(e) {
  var t;
  let {
    guildId: n
  } = e, l = (0, o.bG)([b.A], () => b.A.getGuild(n)), {
    loading: C,
    subscriptionsSettings: I
  } = (0, y.G)(n), {
    listingsLoaded: S
  } = (0, g.bb)(n), T = (0, g.fZ)(n, {
    publishedOnly: true
  }), N = i.useCallback(async () => {
    A.default.track(O.HAw.GUILD_SHOP_EMBED_CLICKED, function(e) {
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
    }({}, (0, p.H$)(n))), await (0, _.A)(O.BVt.SERVER_SHOP(n))
  }, [n]);
  (0, m.A)({
    type: s.ImpressionTypes.VIEW,
    name: s.ImpressionNames.GUILD_SHOP_EMBED
  }, {
    disableTrack: null == l
  });
  let P = T.length > 0 ? new Date(Math.min(...T.map(e => Date.parse(e.published_at)))) : true;
  return C || !S ? (0, r.jsx)("div", {
    className: a()(j.lm, j.dc),
    children: (0, r.jsx)(d.y$y, {})
  }) : null == l || null == I ? null : (0, r.jsxs)("div", {
    className: j.lm,
    children: [(0, r.jsx)(v.C, {
      coverImageAsset: null != (t = I.cover_image_asset) ? t : null
    }), (0, r.jsx)(d.hKd, {
      size: 16
    }), (0, r.jsxs)("div", {
      className: j.qs,
      children: [(0, r.jsx)(x.h, {
        height: "16px",
        width: "16px",
        color: c.A.colors.INTERACTIVE_TEXT_DEFAULT.css
      }), (0, r.jsx)(d.Heading, {
        variant: "heading-sm/semibold",
        color: "interactive-text-default",
        className: j.Nl,
        children: E.intl.string(E.t.al5EXL)
      })]
    }), (0, r.jsx)(d.hKd, {
      size: 16
    }), (0, r.jsx)(d.Heading, {
      variant: "heading-md/semibold",
      color: "text-default",
      children: E.intl.format(E.t.NZeik9, {
        guildName: l.name
      })
    }), (0, r.jsx)(d.hKd, {
      size: 4
    }), (0, r.jsx)(d.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      lineClamp: 2,
      children: I.description
    }), (0, r.jsx)(d.hKd, {
      size: 16
    }), (0, r.jsx)(h.A, {}), (0, r.jsx)(d.hKd, {
      size: 16
    }), (0, r.jsxs)("div", {
      className: j.kS,
      children: [(0, r.jsx)(f.A, {
        guild: l
      }), (0, r.jsxs)("ul", {
        className: j.q6,
        children: [(0, r.jsx)("li", {
          children: (0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: E.intl.format(E.t.tKZNlb, {
              listingCount: T.length
            })
          })
        }), null != P && (0, r.jsx)("li", {
          children: (0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: E.intl.format(E.t["kXr8+b"], {
              createdYear: P.getFullYear()
            })
          })
        })]
      }), (0, r.jsx)("div", {
        className: j.$h,
        children: (0, r.jsx)(u.$nd, {
          onClick: N,
          icon: x.A,
          text: E.intl.string(E.t.jXx1CC)
        })
      })]
    })]
  })
}