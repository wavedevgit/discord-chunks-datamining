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
  let e = Chunk695346.QK.useSetting(),
    t = (0, Chunk506071.n)(),
    r = (0, Chunk399606.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    o = exports && module && !require ? (0, Chunk357352.b)("server_products/storefront/question-mark.gif") : (0, Chunk357352.b)("server_products/storefront/question-mark.png");
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk495781.previewListingCard,
    children: [(0, Chunk54381.jsx)(Chunk623488.Z, {
      role: true,
      ctaComponent: null,
      imageUrl: (0, Chunk357352.b)("server_products/storefront/preview-thumbnail.png"),
      name: Chunk388032.intl.string(Chunk388032.t.U2hvDo),
      description: Chunk388032.intl.string(Chunk388032.t["w/TNGT"]),
      formattedPrice: (0, Chunk937615.T4)(0, Chunk981631.pKx.USD, {
        localeMatcher: "best fit",
        style: "currency",
        maximumSignificantDigits: 1
      }),
      shouldShowFullDescriptionButton: false,
      productType: Chunk388032.intl.string(Chunk388032.t.ih4QMU),
      onTapCard: () => null,
      hideRoleTag: true,
      lineClamp: 3,
      thumbnailHeight: 197,
      cardWidth: 332,
      descriptionTextVariant: "text-xs/normal"
    }), (0, Chunk54381.jsx)("img", {
      className: Chunk495781.questionMark,
      alt: "",
      src: Chunk481060
    })]
  })
}

function O() {
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk495781.learnMoreTipContainer,
    children: [(0, Chunk54381.jsx)(Chunk481060.d3s, {
      size: "md",
      color: "currentColor",
      className: Chunk495781.infoCircle
    }), (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: Chunk388032.intl.format(Chunk388032.t.umfZ8q, {
        learnMoreLink: Chunk629481.P4
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