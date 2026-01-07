/** Chunk was on 9536 **/
/** chunk id: 662379, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk293810 = require("./293810.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk780970 = require("./780970.js"),
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
        color: "text-strong",
        children: n
      })
    })]
  })
}

function g() {
  let e = [{
    imageSrc: d,
    description: a.intl.string(a.t.lT0ZNS)
  }, {
    imageSrc: o,
    description: a.intl.string(a.t.ihN2Wb)
  }, {
    imageSrc: c,
    description: a.intl.string(a.t.c8krDQ)
  }];
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(i.Heading, {
      variant: "heading-lg/semibold",
      color: "text-strong",
      children: a.intl.string(a.t.R9rNIk)
    }), (0, r.jsx)(i.LZC, {
      size: 24
    }), (0, r.jsx)("div", {
      className: s.howItWorksContainer,
      children: e.map(e => (0, r.jsx)(u, {
        imageSrc: e.imageSrc,
        description: e.description
      }, e.imageSrc))
    }), (0, r.jsx)(i.LZC, {
      size: 24
    }), (0, r.jsx)(i.Text, {
      variant: "text-sm/normal",
      color: "text-default",
      children: a.intl.format(a.t.oxW30N, {
        creatorPortalUrl: l.C5
      })
    })]
  })
}