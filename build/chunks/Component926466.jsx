/** Chunk was on 21738 **/
/** chunk id: 926466, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk58149 = require("./58149.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk861968 = require("./861968.js");
let A = (0, Chunk735438.debounce)(Chunk58149.Ay.trackWithMetadata, 500),
  g = function(e) {
    let {
      guild: t,
      title: n,
      message: l,
      image: s,
      type: g,
      imageStyles: m,
      imageMarginX: b,
      imageMarginTop: _,
      trackingSource: E,
      undismissable: O,
      onDismissed: y,
      onClick: I,
      cta: v,
      ctaColor: S,
      centerText: C,
      className: N
    } = e;
    i.useEffect(() => {
      A(p.HAw.CHANNEL_NOTICE_VIEWED, {
        notice_type: g,
        guild_id: t.id
      })
    }, [t.id, g]);
    let T = null;
    "function" == typeof v ? T = v() : null != v && (T = (0, r.jsx)(o.$n, {
      "data-migration-pending": true,
      className: h.x6,
      size: o.$n.Sizes.SMALL,
      onClick: () => {
        null != g && d.default.track(p.HAw.CHANNEL_NOTICE_CTA_CLICKED, {
          source: E,
          guild_id: t.id,
          notice_type: g
        }), null == I || I()
      },
      fullWidth: true,
      color: S,
      children: v
    }));
    let j = null;
    "function" == typeof n ? j = n() : null != n && (j = (0, r.jsx)(c.Text, {
      variant: "text-md/medium",
      color: "text-strong",
      className: a()(h.DD, {
        [h.vG]: null == s
      }, {
        [h.gX]: C
      }),
      children: n
    }));
    let x = null;
    "function" == typeof l ? x = l() : null != l && (x = (0, r.jsx)(c.Text, {
      className: a()({
        [h.gX]: C
      }),
      variant: "text-sm/normal",
      color: "text-muted",
      children: l
    }));
    let P = null != b ? "".concat(b, "px") : "16px";
    return (0, r.jsxs)("div", {
      className: a()(h.kL, N),
      children: [true === O ? null : (0, r.jsx)(c.DUT, {
        onClick: () => {
          u.Ay.trackWithMetadata(p.HAw.CHANNEL_NOTICE_CLOSED, {
            notice_type: g
          }), null == y || y()
        },
        className: h.VN,
        "aria-label": f.intl.string(f.t.WAI6xu),
        children: (0, r.jsx)(c.PGe, {
          size: "md",
          color: "currentColor",
          className: h.ut
        })
      }), null != s && (0, r.jsx)("div", {
        className: h.ZS,
        style: {
          marginTop: "".concat(_, "px"),
          marginLeft: P,
          marginRight: P
        },
        children: (0, r.jsx)("img", {
          className: h.Sl,
          style: m,
          src: s,
          alt: ""
        })
      }), (0, r.jsxs)("div", {
        className: h.iU,
        children: [j, x, T]
      })]
    })
  }