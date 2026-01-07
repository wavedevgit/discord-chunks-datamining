/** Chunk was on 78431 **/
/** chunk id: 175390, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk357352 = require("./357352.js"),
  Chunk623488 = require("./623488.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk937615 = require("./937615.js"),
  Chunk506071 = require("./506071.js"),
  Chunk724598 = require("./724598.jsx"),
  Chunk629481 = require("./629481.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk495781 = require("./495781.js");

function g() {
  let e = a.QK.useSetting(),
    t = (0, u.n)(),
    r = (0, i.e7)([l.Z], () => l.Z.useReducedMotion),
    o = t && e && !r ? (0, c.b)("server_products/storefront/question-mark.gif") : (0, c.b)("server_products/storefront/question-mark.png");
  return (0, n.jsxs)("div", {
    className: j.previewListingCard,
    children: [(0, n.jsx)(s.Z, {
      role: true,
      ctaComponent: null,
      imageUrl: (0, c.b)("server_products/storefront/preview-thumbnail.png"),
      name: b.intl.string(b.t.U2hvDo),
      description: b.intl.string(b.t["w/TNGT"]),
      formattedPrice: (0, d.T4)(0, f.pKx.USD, {
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
      className: j.questionMark,
      alt: "",
      src: o
    })]
  })
}

function O() {
  return (0, n.jsxs)("div", {
    className: j.learnMoreTipContainer,
    children: [(0, n.jsx)(o.d3s, {
      size: "md",
      color: "currentColor",
      className: j.infoCircle
    }), (0, n.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: b.intl.format(b.t.umfZ8q, {
        learnMoreLink: p.P4
      })
    })]
  })
}

function h(e) {
  let {
    guildId: t
  } = e;
  return (0, n.jsxs)("div", {
    className: j.previewContentContainer,
    children: [(0, n.jsxs)("div", {
      className: j.previewContent,
      children: [(0, n.jsx)(g, {}), (0, n.jsx)(C.Z, {
        guildId: t,
        showCTA: true
      })]
    }), (0, n.jsx)(O, {})]
  })
}