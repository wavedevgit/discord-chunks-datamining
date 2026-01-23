/** Chunk was on 21738 **/
/** chunk id: 926466, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
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
let f = (0, Chunk735438.debounce)(Chunk58149.Ay.trackWithMetadata, 500),
  m = function(e) {
    let {
      guild: t,
      title: n,
      message: l,
      image: s,
      type: m,
      imageStyles: A,
      imageMarginX: _,
      imageMarginTop: b,
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
      f(p.HAw.CHANNEL_NOTICE_VIEWED, {
        notice_type: m,
        guild_id: t.id
      })
    }, [t.id, m]);
    let T = null;
    "function" == typeof v ? T = v() : null != v && (T = (0, r.jsx)(o.$n, {
      "data-migration-pending": true,
      className: g.x6,
      size: o.$n.Sizes.SMALL,
      onClick: () => {
        null != m && d.default.track(p.HAw.CHANNEL_NOTICE_CTA_CLICKED, {
          source: E,
          guild_id: t.id,
          notice_type: m
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
      className: a()(g.DD, {
        [g.vG]: null == s
      }, {
        [g.gX]: C
      }),
      children: n
    }));
    let x = null;
    "function" == typeof l ? x = l() : null != l && (x = (0, r.jsx)(c.Text, {
      className: a()({
        [g.gX]: C
      }),
      variant: "text-sm/normal",
      color: "text-muted",
      children: l
    }));
    let P = null != _ ? "".concat(_, "px") : "16px";
    return (0, r.jsxs)("div", {
      className: a()(g.kL, N),
      children: [true === O ? null : (0, r.jsx)(c.DUT, {
        onClick: () => {
          u.Ay.trackWithMetadata(p.HAw.CHANNEL_NOTICE_CLOSED, {
            notice_type: m
          }), null == y || y()
        },
        className: g.VN,
        "aria-label": h.intl.string(h.t.WAI6xu),
        children: (0, r.jsx)(c.PGe, {
          size: "md",
          color: "currentColor",
          className: g.ut
        })
      }), null != s && (0, r.jsx)("div", {
        className: g.ZS,
        style: {
          marginTop: "".concat(b, "px"),
          marginLeft: P,
          marginRight: P
        },
        children: (0, r.jsx)("img", {
          className: g.Sl,
          style: A,
          src: s,
          alt: ""
        })
      }), (0, r.jsxs)("div", {
        className: g.iU,
        children: [j, x, T]
      })]
    })
  }