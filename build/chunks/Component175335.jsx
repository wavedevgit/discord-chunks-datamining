/** Chunk was on web.js **/
/** chunk id: 175335, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => N
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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

function T(e, t, n) {
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
      T(e, t, n[t])
    })
  }
  return e
}

function N(e) {
  var t;
  let {
    guildId: n
  } = e, a = (0, l.bG)([E.A], () => E.A.getGuild(n)), {
    loading: T,
    subscriptionsSettings: N
  } = (0, b.G)(n), {
    listingsLoaded: R
  } = (0, h.bb)(n), w = (0, h.fZ)(n, {
    publishedOnly: true
  }), P = i.useCallback(async () => {
    y.default.track(A.HAw.GUILD_SHOP_EMBED_CLICKED, C({}, (0, f.H$)(n))), await (0, m.A)(A.BVt.SERVER_SHOP(n))
  }, [n]);
  (0, p.A)({
    type: o.ImpressionTypes.VIEW,
    name: o.ImpressionNames.GUILD_SHOP_EMBED
  }, {
    disableTrack: null == a
  });
  let D = w.length > 0 ? new Date(Math.min(...w.map(e => Date.parse(e.published_at)))) : true;
  return T || !R ? (0, r.jsx)("div", {
    className: s()(S.lm, S.dc),
    children: (0, r.jsx)(d.y$y, {})
  }) : null == a || null == N ? null : (0, r.jsxs)("div", {
    className: S.lm,
    children: [(0, r.jsx)(O.C, {
      coverImageAsset: null != (t = N.cover_image_asset) ? t : null
    }), (0, r.jsx)(d.hKd, {
      size: 16
    }), (0, r.jsxs)("div", {
      className: S.qs,
      children: [(0, r.jsx)(v.h, {
        height: "16px",
        width: "16px",
        color: c.A.colors.INTERACTIVE_TEXT_DEFAULT.css
      }), (0, r.jsx)(d.Heading, {
        variant: "heading-sm/semibold",
        color: "interactive-text-default",
        className: S.Nl,
        children: I.intl.string(I.t.al5EXL)
      })]
    }), (0, r.jsx)(d.hKd, {
      size: 16
    }), (0, r.jsx)(d.Heading, {
      variant: "heading-md/semibold",
      color: "text-default",
      children: I.intl.format(I.t.NZeik9, {
        guildName: a.name
      })
    }), (0, r.jsx)(d.hKd, {
      size: 4
    }), (0, r.jsx)(d.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      lineClamp: 2,
      children: N.description
    }), (0, r.jsx)(d.hKd, {
      size: 16
    }), (0, r.jsx)(g.A, {}), (0, r.jsx)(d.hKd, {
      size: 16
    }), (0, r.jsxs)("div", {
      className: S.kS,
      children: [(0, r.jsx)(_.A, {
        guild: a
      }), (0, r.jsxs)("ul", {
        className: S.q6,
        children: [(0, r.jsx)("li", {
          children: (0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: I.intl.format(I.t.tKZNlb, {
              listingCount: w.length
            })
          })
        }), null != D && (0, r.jsx)("li", {
          children: (0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: I.intl.format(I.t["kXr8+b"], {
              createdYear: D.getFullYear()
            })
          })
        })]
      }), (0, r.jsx)("div", {
        className: S.$h,
        children: (0, r.jsx)(u.$nd, {
          onClick: P,
          icon: v.A,
          text: I.intl.string(I.t.jXx1CC)
        })
      })]
    })]
  })
}