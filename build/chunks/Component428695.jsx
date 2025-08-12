/** Chunk was on 1272 **/
/** chunk id: 428695, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk488822 = require("./488822.js");
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
      imageMarginTop: O,
      trackingSource: E,
      undismissable: y,
      onDismissed: v,
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
      className: f.button,
      size: s.zx.Sizes.SMALL,
      onClick: () => {
        null != m && d.default.track(p.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
          source: E,
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
      className: a()(f.title, {
        [f.noImageTitle]: null == o
      }, {
        [f.center]: N
      }),
      children: n
    }));
    let x = null;
    "function" == typeof l ? x = l() : null != l && (x = (0, r.jsx)(c.Text, {
      className: a()({
        [f.center]: N
      }),
      variant: "text-sm/normal",
      color: "text-muted",
      children: l
    }));
    let Z = null != _ ? "".concat(_, "px") : "16px";
    return (0, r.jsxs)("div", {
      className: a()(f.container, T),
      children: [true === y ? null : (0, r.jsx)(c.P3F, {
        onClick: () => {
          u.ZP.trackWithMetadata(p.rMx.CHANNEL_NOTICE_CLOSED, {
            notice_type: m
          }), null == v || v()
        },
        className: f.close,
        "aria-label": h.intl.string(h.t.WAI6xs),
        children: (0, r.jsx)(c.Dio, {
          size: "md",
          color: "currentColor",
          className: f.closeIcon
        })
      }), null != o && (0, r.jsx)("div", {
        className: f.imageContainer,
        style: {
          marginTop: "".concat(O, "px"),
          marginLeft: Z,
          marginRight: Z
        },
        children: (0, r.jsx)("img", {
          className: f.image,
          style: b,
          src: o,
          alt: ""
        })
      }), (0, r.jsxs)("div", {
        className: f.message,
        children: [j, x, P]
      })]
    })
  }