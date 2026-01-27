/** Chunk was on 63974 **/
/** chunk id: 510059, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk573648 = require("./573648.js"),
  Chunk58149 = require("./58149.js"),
  Chunk681819 = require("./681819.js"),
  Chunk370480 = require("./370480.js"),
  Chunk169869 = require("./169869.jsx"),
  Chunk532197 = require("./532197.jsx"),
  Chunk773669 = require("./773669.js"),
  Chunk307600 = require("./307600.js"),
  Chunk652215 = require("./652215.js"),
  Chunk783419 = require("./783419.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk882119 = require("./882119.js");

function v(e) {
  var t, n;
  let i, {
      account: r,
      locale: s,
      userId: A
    } = e,
    v = null != (t = r.metadata) ? t : {},
    I = (0, p.An)(v[j.pK.CREATED_AT], s),
    y = d.A.get((0, u.ML)(r.type));
  return (0, l.jsxs)("li", {
    className: b.FI,
    children: [(0, l.jsx)(o.m, {
      __unsupportedReactNodeAsText: null == y ? true : y.name,
      children: (0, l.jsx)("div", {
        className: b.k_,
        children: (0, l.jsx)("img", {
          alt: h.intl.formatToPlainString(h.t.rtm15P, {
            name: null == y ? true : y.name
          }),
          className: b.tV,
          src: null == y ? true : y.icon.lightPNG
        })
      })
    }), (0, l.jsxs)("div", {
      className: b.Hd,
      children: [(0, l.jsxs)("div", {
        children: [null == (i = null == y || null == (n = y.getPlatformUserUrl) ? true : n.call(y, r)) ? (0, l.jsx)(o.m, {
          overflowOnly: true,
          text: r.name,
          children: (0, l.jsx)(a.Text, {
            variant: "text-sm/normal",
            className: b.GW,
            children: r.name
          })
        }) : (0, l.jsx)(a.MzZ, {
          href: i,
          className: b.Y2,
          useDefaultUnderlineStyles: false,
          "aria-label": (null == y ? true : y.name) != null ? "".concat(y.name, ", ").concat(r.name, ", ").concat(h.intl.string(h.t.q5jLJB)) : "".concat(r.name, ", ").concat(h.intl.string(h.t.q5jLJB)),
          onClick: e => {
            (0, c.zV)(g.HAw.CONNECTED_ACCOUNT_VIEWED, {
              platform_type: r.type,
              other_user_id: A
            }), (0, x.h)({
              href: i,
              trusted: (null == y ? true : y.type) !== g.fg2.DOMAIN
            }, e)
          },
          children: (0, l.jsxs)("div", {
            className: b.vi,
            children: [(0, l.jsx)(o.m, {
              overflowOnly: true,
              text: r.name,
              children: (0, l.jsx)(a.Text, {
                variant: "text-sm/normal",
                className: b.GW,
                children: r.name
              })
            }), (0, l.jsx)(m.A, {
              className: b.E4,
              direction: m.A.Directions.RIGHT
            })]
          })
        }), null != I && (0, l.jsx)(a.Text, {
          variant: "text-xs/normal",
          children: h.intl.format(h.t["9rfonh"], {
            date: I
          })
        })]
      }), (0, l.jsx)("div", {
        className: b.yu,
        children: r.type === g.fg2.REDDIT ? (0, f.xE)(v) : r.type === g.fg2.STEAM ? (0, f.dy)(v) : r.type === g.fg2.BLUESKY || r.type === g.fg2.MASTODON || r.type === g.fg2.TWITTER ? (0, f.ED)(v) : r.type === g.fg2.PAYPAL ? (0, f.gZ)(v) : r.type === g.fg2.EBAY ? (0, f.ub)(v) : r.type === g.fg2.TIKTOK ? (0, f.HU)(v) : null
      })]
    })]
  })
}

function I(e) {
  let {
    connections: t,
    userId: n,
    className: i
  } = e, o = (0, s.bG)([A.default], () => A.default.locale);
  return 0 === t.length ? null : (0, l.jsx)("ul", {
    className: r()(b.kL, i),
    children: t.map(e => (0, l.jsx)(v, {
      account: e,
      userId: n,
      locale: o
    }, "".concat(e.type, ":").concat(e.id)))
  })
}