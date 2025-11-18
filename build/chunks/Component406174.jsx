/** Chunk was on web.js **/
/** chunk id: 406174, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk809537 = require("./809537.js"),
  Chunk336763 = require("./336763.js"),
  Chunk834300 = require("./834300.js");

function f(e) {
  let {
    onClickManageSubscription: t,
    count: n
  } = e;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(s.Heading, {
      variant: "heading-md/bold",
      children: l.intl.string(l.t["KzCF/6"])
    }), (0, r.jsx)(s.LZC, {
      size: 4
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      className: c.sectionDescription,
      children: l.intl.string(l.t["3D7qCu"])
    }), (0, r.jsx)(s.LZC, {
      size: 24
    }), (0, r.jsxs)("div", {
      className: a()(u.guildBoostingSubscriptionRow, c.card),
      children: [(0, r.jsx)("img", {
        src: d,
        alt: "",
        className: c.handImage
      }), (0, r.jsxs)("div", {
        className: c.textContainer,
        children: [(0, r.jsx)(s.Heading, {
          variant: "heading-xl/semibold",
          className: c.header,
          children: l.intl.string(l.t["KzCF/6"])
        }), (0, r.jsx)(s.Text, {
          variant: "text-md/normal",
          className: c.description,
          children: l.intl.format(l.t["m+pcOO"], {
            numSubscriptions: n
          })
        })]
      }), (0, r.jsx)(o.zxk, {
        size: "sm",
        variant: "overlay-primary",
        text: l.intl.string(l.t["3a8Xxj"]),
        onClick: t
      })]
    })]
  })
}