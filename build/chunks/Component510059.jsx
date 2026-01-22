/** Chunk was on 64228 **/
/** chunk id: 510059, original params: e,l,t (module,exports,require) **/
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

function b(e) {
  var l, t;
  let i, {
      account: r,
      locale: s,
      userId: x
    } = e,
    b = null != (l = r.metadata) ? l : {},
    I = (0, f.An)(b[h.pK.CREATED_AT], s),
    y = d.A.get((0, u.ML)(r.type));
  return (0, n.jsxs)("li", {
    className: v.FI,
    children: [(0, n.jsx)(a.m, {
      __unsupportedReactNodeAsText: null == y ? true : y.name,
      children: (0, n.jsx)("div", {
        className: v.k_,
        children: (0, n.jsx)("img", {
          alt: g.intl.formatToPlainString(g.t.rtm15P, {
            name: null == y ? true : y.name
          }),
          className: v.tV,
          src: null == y ? true : y.icon.lightPNG
        })
      })
    }), (0, n.jsxs)("div", {
      className: v.Hd,
      children: [(0, n.jsxs)("div", {
        children: [null == (i = null == y || null == (t = y.getPlatformUserUrl) ? true : t.call(y, r)) ? (0, n.jsx)(a.m, {
          overflowOnly: true,
          text: r.name,
          children: (0, n.jsx)(o.Text, {
            variant: "text-sm/normal",
            className: v.GW,
            children: r.name
          })
        }) : (0, n.jsx)(o.MzZ, {
          href: i,
          className: v.Y2,
          useDefaultUnderlineStyles: false,
          "aria-label": (null == y ? true : y.name) != null ? "".concat(y.name, ", ").concat(r.name, ", ").concat(g.intl.string(g.t.q5jLJB)) : "".concat(r.name, ", ").concat(g.intl.string(g.t.q5jLJB)),
          onClick: e => {
            (0, c.zV)(j.HAw.CONNECTED_ACCOUNT_VIEWED, {
              platform_type: r.type,
              other_user_id: x
            }), (0, A.h)({
              href: i,
              trusted: (null == y ? true : y.type) !== j.fg2.DOMAIN
            }, e)
          },
          children: (0, n.jsxs)("div", {
            className: v.vi,
            children: [(0, n.jsx)(a.m, {
              overflowOnly: true,
              text: r.name,
              children: (0, n.jsx)(o.Text, {
                variant: "text-sm/normal",
                className: v.GW,
                children: r.name
              })
            }), (0, n.jsx)(m.A, {
              className: v.E4,
              direction: m.A.Directions.RIGHT
            })]
          })
        }), null != I && (0, n.jsx)(o.Text, {
          variant: "text-xs/normal",
          children: g.intl.format(g.t["9rfonh"], {
            date: I
          })
        })]
      }), (0, n.jsx)("div", {
        className: v.yu,
        children: r.type === j.fg2.REDDIT ? (0, p.xE)(b) : r.type === j.fg2.STEAM ? (0, p.dy)(b) : r.type === j.fg2.BLUESKY || r.type === j.fg2.MASTODON || r.type === j.fg2.TWITTER ? (0, p.ED)(b) : r.type === j.fg2.PAYPAL ? (0, p.gZ)(b) : r.type === j.fg2.EBAY ? (0, p.ub)(b) : r.type === j.fg2.TIKTOK ? (0, p.HU)(b) : null
      })]
    })]
  })
}

function I(e) {
  let {
    connections: l,
    userId: t,
    className: i
  } = e, a = (0, s.bG)([x.default], () => x.default.locale);
  return 0 === l.length ? null : (0, n.jsx)("ul", {
    className: r()(v.kL, i),
    children: l.map(e => (0, n.jsx)(b, {
      account: e,
      userId: t,
      locale: a
    }, "".concat(e.type, ":").concat(e.id)))
  })
}