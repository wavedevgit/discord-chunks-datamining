/** Chunk was on 1272 **/
/** chunk id: 428695, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
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
  Chunk454703 = require("./454703.js");
let h = (0, Chunk392711.debounce)(Chunk367907.ZP.trackWithMetadata, 500),
  g = function(e) {
    let {
      guild: t,
      title: n,
      message: l,
      image: s,
      type: g,
      imageStyles: _,
      imageMarginX: b,
      imageMarginTop: E,
      trackingSource: O,
      undismissable: I,
      onDismissed: y,
      onClick: v,
      cta: C,
      ctaColor: S,
      centerText: T,
      className: N
    } = e;
    i.useEffect(() => {
      h(p.rMx.CHANNEL_NOTICE_VIEWED, {
        notice_type: g,
        guild_id: t.id
      })
    }, [t.id, g]);
    let P = null;
    "function" == typeof C ? P = C() : null != C && (P = (0, r.jsx)(o.zx, {
      className: m.button,
      size: o.zx.Sizes.SMALL,
      onClick: () => {
        null != g && d.default.track(p.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
          source: O,
          guild_id: t.id,
          notice_type: g
        }), null == v || v()
      },
      fullWidth: true,
      color: S,
      children: C
    }));
    let j = null;
    "function" == typeof n ? j = n() : null != n && (j = (0, r.jsx)(c.Text, {
      variant: "text-md/medium",
      color: "header-primary",
      className: a()(m.title, {
        [m.noImageTitle]: null == s
      }, {
        [m.center]: T
      }),
      children: n
    }));
    let x = null;
    "function" == typeof l ? x = l() : null != l && (x = (0, r.jsx)(c.Text, {
      className: a()({
        [m.center]: T
      }),
      variant: "text-sm/normal",
      color: "text-muted",
      children: l
    }));
    let A = null != b ? "".concat(b, "px") : "16px";
    return (0, r.jsxs)("div", {
      className: a()(m.container, N),
      children: [true === I ? null : (0, r.jsx)(c.P3F, {
        onClick: () => {
          u.ZP.trackWithMetadata(p.rMx.CHANNEL_NOTICE_CLOSED, {
            notice_type: g
          }), null == y || y()
        },
        className: m.close,
        "aria-label": f.intl.string(f.t.WAI6xu),
        children: (0, r.jsx)(c.Dio, {
          size: "md",
          color: "currentColor",
          className: m.closeIcon
        })
      }), null != s && (0, r.jsx)("div", {
        className: m.imageContainer,
        style: {
          marginTop: "".concat(E, "px"),
          marginLeft: A,
          marginRight: A
        },
        children: (0, r.jsx)("img", {
          className: m.image,
          style: _,
          src: s,
          alt: ""
        })
      }), (0, r.jsxs)("div", {
        className: m.message,
        children: [j, x, P]
      })]
    })
  }