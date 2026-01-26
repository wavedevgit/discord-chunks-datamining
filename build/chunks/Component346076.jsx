/** Chunk was on 39048 **/
/** chunk id: 346076, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk2242 = require("./2242.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk911002 = require("./911002.js"),
  Chunk348437 = require("./348437.js"),
  Chunk80098 = require("./80098.js"),
  Chunk142699 = require("./142699.js");

function u(e) {
  let {
    imageSrc: t,
    description: n
  } = e;
  return (0, r.jsxs)("div", {
    className: a.kD,
    children: [(0, r.jsx)("div", {
      className: a.sM,
      children: (0, r.jsx)("img", {
        className: a.Bp,
        src: t,
        alt: ""
      })
    }), (0, r.jsx)("div", {
      className: a.Q7,
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
    description: s.intl.string(s.t.lT0ZNS)
  }, {
    imageSrc: o,
    description: s.intl.string(s.t.ihN2Wb)
  }, {
    imageSrc: c,
    description: s.intl.string(s.t.c8krDQ)
  }];
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(i.Heading, {
      variant: "heading-lg/semibold",
      color: "text-strong",
      children: s.intl.string(s.t.R9rNIk)
    }), (0, r.jsx)(i.hKd, {
      size: 24
    }), (0, r.jsx)("div", {
      className: a.LL,
      children: e.map(e => (0, r.jsx)(u, {
        imageSrc: e.imageSrc,
        description: e.description
      }, e.imageSrc))
    }), (0, r.jsx)(i.hKd, {
      size: 24
    }), (0, r.jsx)(i.Text, {
      variant: "text-sm/normal",
      color: "text-default",
      children: s.intl.format(s.t.oxW30N, {
        creatorPortalUrl: l.nd
      })
    })]
  })
}