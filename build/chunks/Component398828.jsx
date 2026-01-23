/** Chunk was on 78870 **/
/** chunk id: 398828, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk289397 = require("./289397.js"),
  Chunk500770 = require("./500770.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk580630 = require("./580630.js"),
  Chunk218394 = require("./218394.js"),
  Chunk319664 = require("./319664.jsx"),
  Chunk634654 = require("./634654.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk721746 = require("./721746.js");

function O() {
  let e = a.kt.useSetting(),
    t = (0, u.j)(),
    r = (0, i.bG)([l.A], () => l.A.useReducedMotion),
    o = t && e && !r ? (0, s.n)("server_products/storefront/question-mark.gif") : (0, s.n)("server_products/storefront/question-mark.png");
  return (0, n.jsxs)("div", {
    className: j.Xq,
    children: [(0, n.jsx)(c.A, {
      role: true,
      ctaComponent: null,
      imageUrl: (0, s.n)("server_products/storefront/preview-thumbnail.png"),
      name: b.intl.string(b.t.U2hvDo),
      description: b.intl.string(b.t["w/TNGT"]),
      formattedPrice: (0, d.$g)(0, C.Yri.USD, {
        localeMatcher: "best fit",
        style: "currency",
        maximumSignificantDigits: 1
      }),
      shouldShowFullDescriptionButton: false,
      productType: b.intl.string(b.t.ih4QMU),
      onTapCard: () => null,
      hideRoleTag: true,
      lineClamp: 3,
      thumbnailHeight: 197,
      cardWidth: 332,
      descriptionTextVariant: "text-xs/normal"
    }), (0, n.jsx)("img", {
      className: j.kz,
      alt: "",
      src: o
    })]
  })
}

function g() {
  return (0, n.jsxs)("div", {
    className: j.od,
    children: [(0, n.jsx)(o.mir, {
      size: "md",
      color: "currentColor",
      className: j.ZC
    }), (0, n.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: b.intl.format(b.t.umfZ8q, {
        learnMoreLink: f.rv
      })
    })]
  })
}

function h(e) {
  let {
    guildId: t
  } = e;
  return (0, n.jsxs)("div", {
    className: j.Bh,
    children: [(0, n.jsxs)("div", {
      className: j.gp,
      children: [(0, n.jsx)(O, {}), (0, n.jsx)(p.A, {
        guildId: t,
        showCTA: true
      })]
    }), (0, n.jsx)(g, {})]
  })
}