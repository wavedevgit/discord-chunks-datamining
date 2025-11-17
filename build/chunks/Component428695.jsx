/** Chunk was on 1272 **/
/** chunk id: 428695, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk454703 = require("./454703.js");
let g = (0, Chunk392711.debounce)(Chunk367907.ZP.trackWithMetadata, 500),
  m = function(e) {
    let {
      guild: t,
      title: n,
      message: l,
      image: s,
      type: m,
      imageStyles: _,
      imageMarginX: b,
      imageMarginTop: E,
      trackingSource: O,
      undismissable: y,
      onDismissed: v,
      onClick: I,
      cta: C,
      ctaColor: S,
      centerText: T,
      className: N
    } = e;
    i.useEffect(() => {
      g(p.rMx.CHANNEL_NOTICE_VIEWED, {
        notice_type: m,
        guild_id: t.id
      })
    }, [t.id, m]);
    let j = null;
    "function" == typeof C ? j = C() : null != C && (j = (0, r.jsx)(o.zx, {
      className: h.button,
      size: o.zx.Sizes.SMALL,
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
    let P = null;
    "function" == typeof n ? P = n() : null != n && (P = (0, r.jsx)(c.Text, {
      variant: "text-md/medium",
      color: "header-primary",
      className: a()(h.title, {
        [h.noImageTitle]: null == s
      }, {
        [h.center]: T
      }),
      children: n
    }));
    let x = null;
    "function" == typeof l ? x = l() : null != l && (x = (0, r.jsx)(c.Text, {
      className: a()({
        [h.center]: T
      }),
      variant: "text-sm/normal",
      color: "text-muted",
      children: l
    }));
    let A = null != b ? "".concat(b, "px") : "16px";
    return (0, r.jsxs)("div", {
      className: a()(h.container, N),
      children: [true === y ? null : (0, r.jsx)(c.P3F, {
        onClick: () => {
          u.ZP.trackWithMetadata(p.rMx.CHANNEL_NOTICE_CLOSED, {
            notice_type: m
          }), null == v || v()
        },
        className: h.close,
        "aria-label": f.intl.string(f.t.WAI6xu),
        children: (0, r.jsx)(c.Dio, {
          size: "md",
          color: "currentColor",
          className: h.closeIcon
        })
      }), null != s && (0, r.jsx)("div", {
        className: h.imageContainer,
        style: {
          marginTop: "".concat(E, "px"),
          marginLeft: A,
          marginRight: A
        },
        children: (0, r.jsx)("img", {
          className: h.image,
          style: _,
          src: s,
          alt: ""
        })
      }), (0, r.jsxs)("div", {
        className: h.message,
        children: [P, x, j]
      })]
    })
  }