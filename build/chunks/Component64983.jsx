/** Chunk was on 21738 **/
/** chunk id: 64983, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk58149 = require("./58149.js"),
  Chunk954571 = require("./954571.js"),
  Chunk83241 = require("./83241.js"),
  Chunk926466 = require("./926466.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk978927 = require("./978927.js");

function f(e) {
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
let A = a().debounce(Chunk58149.Ay.trackWithMetadata, 500),
  _ = e => {
    let {
      guild: t,
      title: n,
      message: l,
      image: a,
      type: d,
      imageMarginX: p,
      imageMarginTop: f,
      trackingSource: _,
      undismissable: b,
      onDismissed: E,
      onClick: O,
      cta: y,
      ctaColor: I
    } = e;
    i.useEffect(() => {
      A(h.HAw.CHANNEL_NOTICE_VIEWED, {
        notice_type: d,
        guild_id: t.id
      })
    }, [t.id, d]);
    let v = null;
    "function" == typeof y ? v = y() : null != y && (v = (0, r.jsx)(s.$n, {
      "data-migration-pending": true,
      className: m.HM,
      size: s.$n.Sizes.SMALL,
      onClick: () => {
        null != d && u.default.track(h.HAw.CHANNEL_NOTICE_CTA_CLICKED, {
          source: _,
          guild_id: t.id,
          notice_type: d
        }), null == O || O()
      },
      fullWidth: true,
      color: I,
      children: y
    }));
    let S = null != p ? "".concat(p, "px") : "16px";
    return (0, r.jsxs)("div", {
      className: m.kX,
      children: [true === b ? null : (0, r.jsx)(o.DUT, {
        onClick: () => {
          c.Ay.trackWithMetadata(h.HAw.CHANNEL_NOTICE_CLOSED, {
            notice_type: d
          }), null == E || E()
        },
        className: m.VN,
        "aria-label": g.intl.string(g.t.WAI6xu),
        children: (0, r.jsx)(o.PGe, {
          size: "md",
          color: "currentColor",
          className: m.ut
        })
      }), (0, r.jsx)("div", {
        className: m.ZS,
        style: {
          marginTop: "".concat(f, "px"),
          marginLeft: S,
          marginRight: S
        },
        children: (0, r.jsx)("img", {
          className: m.Sl,
          src: a,
          alt: ""
        })
      }), (0, r.jsxs)("div", {
        className: m.iU,
        children: [null != n ? (0, r.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          className: m.DD,
          children: n
        }) : null, (0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          children: l
        }), v]
      })]
    })
  },
  b = function(e) {
    let {
      showRedesignedChannelNotice: t
    } = (0, d.P)(true);
    return t ? (0, r.jsx)(p.A, f({}, e)) : (0, r.jsx)(_, f({}, e))
  }