/** Chunk was on 29679 **/
/** chunk id: 662379, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk293810 = require("./293810.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk948234 = require("./948234.js"),
  Chunk961618 = require("./961618.js"),
  Chunk217684 = require("./217684.js"),
  Chunk174618 = require("./174618.js");

function u(e) {
  let {
    imageSrc: t,
    description: n
  } = e;
  return (0, r.jsxs)("div", {
    className: s.howItWorksCard,
    children: [(0, r.jsx)("div", {
      className: s.howItWorksImageContainer,
      children: (0, r.jsx)("img", {
        className: s.howItWorksImage,
        src: t,
        alt: ""
      })
    }), (0, r.jsx)("div", {
      className: s.howItWorksDescription,
      children: (0, r.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "header-primary",
        children: n
      })
    })]
  })
}

function g() {
  let e = [{
    imageSrc: Chunk174618,
    description: Chunk388032.intl.string(Chunk388032.t.lT0ZNS)
  }, {
    imageSrc: Chunk961618,
    description: Chunk388032.intl.string(Chunk388032.t.ihN2Wb)
  }, {
    imageSrc: Chunk217684,
    description: Chunk388032.intl.string(Chunk388032.t.c8krDQ)
  }];
  return (0, Chunk951288.jsxs)("div", {
    children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      children: Chunk388032.intl.string(Chunk388032.t.R9rNIk)
    }), (0, Chunk951288.jsx)(Chunk481060.LZC, {
      size: 24
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk948234.howItWorksContainer,
      children: module.map(e => (0, r.jsx)(u, {
        imageSrc: e.imageSrc,
        description: e.description
      }, e.imageSrc))
    }), (0, Chunk951288.jsx)(Chunk481060.LZC, {
      size: 24
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: Chunk388032.intl.format(Chunk388032.t.oxW30N, {
        creatorPortalUrl: Chunk293810.C5
      })
    })]
  })
}