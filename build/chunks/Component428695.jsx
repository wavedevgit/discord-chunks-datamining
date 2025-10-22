/** Chunk was on 1272 **/
/** chunk id: 428695, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk830352 = require("./830352.js");
let g = (0, Chunk392711.debounce)(Chunk367907.ZP.trackWithMetadata, 500),
  m = function(e) {
    let {
      guild: t,
      title: n,
      message: l,
      image: o,
      type: m,
      imageStyles: b,
      imageMarginX: _,
      imageMarginTop: E,
      trackingSource: O,
      undismissable: v,
      onDismissed: y,
      onClick: I,
      cta: C,
      ctaColor: S,
      centerText: N,
      className: T
    } = e;
    i.useEffect(() => {
      g(p.rMx.CHANNEL_NOTICE_VIEWED, {
        notice_type: m,
        guild_id: t.id
      })
    }, [t.id, m]);
    let P = null;
    "function" == typeof C ? P = C() : null != C && (P = (0, r.jsx)(s.zx, {
      className: h.button,
      size: s.zx.Sizes.SMALL,
      onClick: () => {
        null != m && d.default.track(p.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
          source: O,
          guild_id: t.id,
          notice_type: m
        }), null == I || I()
      },
      fullWidth: true,
      color: S,
      children: C
    }));
    let j = null;
    "function" == typeof n ? j = n() : null != n && (j = (0, r.jsx)(c.Text, {
      variant: "text-md/medium",
      color: "header-primary",
      className: a()(h.title, {
        [h.noImageTitle]: null == o
      }, {
        [h.center]: N
      }),
      children: n
    }));
    let x = null;
    "function" == typeof l ? x = l() : null != l && (x = (0, r.jsx)(c.Text, {
      className: a()({
        [h.center]: N
      }),
      variant: "text-sm/normal",
      color: "text-muted",
      children: l
    }));
    let A = null != _ ? "".concat(_, "px") : "16px";
    return (0, r.jsxs)("div", {
      className: a()(h.container, T),
      children: [true === v ? null : (0, r.jsx)(c.P3F, {
        onClick: () => {
          u.ZP.trackWithMetadata(p.rMx.CHANNEL_NOTICE_CLOSED, {
            notice_type: m
          }), null == y || y()
        },
        className: h.close,
        "aria-label": f.intl.string(f.t.WAI6xu),
        children: (0, r.jsx)(c.Dio, {
          size: "md",
          color: "currentColor",
          className: h.closeIcon
        })
      }), null != o && (0, r.jsx)("div", {
        className: h.imageContainer,
        style: {
          marginTop: "".concat(E, "px"),
          marginLeft: A,
          marginRight: A
        },
        children: (0, r.jsx)("img", {
          className: h.image,
          style: b,
          src: o,
          alt: ""
        })
      }), (0, r.jsxs)("div", {
        className: h.message,
        children: [j, x, P]
      })]
    })
  }