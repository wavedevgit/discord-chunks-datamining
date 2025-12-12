/** Chunk was on 1272 **/
/** chunk id: 82950, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk626135 = require("./626135.js"),
  Chunk986332 = require("./986332.js"),
  Chunk428695 = require("./428695.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk449824 = require("./449824.js");

function m(e) {
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
}
let _ = a().debounce(Chunk367907.ZP.trackWithMetadata, 500),
  b = e => {
    let {
      guild: t,
      title: n,
      message: l,
      image: a,
      type: d,
      imageMarginX: p,
      imageMarginTop: m,
      trackingSource: b,
      undismissable: E,
      onDismissed: O,
      onClick: v,
      cta: y,
      ctaColor: I
    } = e;
    i.useEffect(() => {
      _(f.rMx.CHANNEL_NOTICE_VIEWED, {
        notice_type: d,
        guild_id: t.id
      })
    }, [t.id, d]);
    let C = null;
    "function" == typeof y ? C = y() : null != y && (C = (0, r.jsx)(s.zx, {
      "data-migration-pending": true,
      className: h.btn,
      size: s.zx.Sizes.SMALL,
      onClick: () => {
        null != d && u.default.track(f.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
          source: b,
          guild_id: t.id,
          notice_type: d
        }), null == v || v()
      },
      fullWidth: true,
      color: I,
      children: y
    }));
    let S = null != p ? "".concat(p, "px") : "16px";
    return (0, r.jsxs)("div", {
      className: h.channelNotice,
      children: [true === E ? null : (0, r.jsx)(o.P3F, {
        onClick: () => {
          c.ZP.trackWithMetadata(f.rMx.CHANNEL_NOTICE_CLOSED, {
            notice_type: d
          }), null == O || O()
        },
        className: h.close,
        "aria-label": g.intl.string(g.t.WAI6xu),
        children: (0, r.jsx)(o.Dio, {
          size: "md",
          color: "currentColor",
          className: h.closeIcon
        })
      }), (0, r.jsx)("div", {
        className: h.imageContainer,
        style: {
          marginTop: "".concat(m, "px"),
          marginLeft: S,
          marginRight: S
        },
        children: (0, r.jsx)("img", {
          className: h.image,
          src: a,
          alt: ""
        })
      }), (0, r.jsxs)("div", {
        className: h.message,
        children: [null != n ? (0, r.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          className: h.title,
          children: n
        }) : null, (0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          children: l
        }), C]
      })]
    })
  },
  E = function(e) {
    let {
      showRedesignedChannelNotice: t
    } = (0, d.o)(true);
    return t ? (0, r.jsx)(p.Z, m({}, e)) : (0, r.jsx)(b, m({}, e))
  }