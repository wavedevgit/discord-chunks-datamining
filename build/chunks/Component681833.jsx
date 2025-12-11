/** Chunk was on web.js **/
/** chunk id: 681833, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk987997 = require("./987997.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk911121 = require("./911121.js"),
  Chunk703361 = require("./703361.js"),
  Chunk845904 = require("./845904.js");

function f(e) {
  let {
    onClickManageSubscription: t,
    count: n
  } = e;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(o.Heading, {
      variant: "heading-md/bold",
      children: l.intl.string(l.t["48ywCu"])
    }), (0, r.jsx)(o.LZC, {
      size: 4
    }), (0, r.jsx)(o.Text, {
      variant: "text-md/normal",
      className: c.sectionDescription,
      children: l.intl.string(l.t.VWxmSo)
    }), (0, r.jsx)(o.LZC, {
      size: 24
    }), (0, r.jsxs)("div", {
      className: a()(u.guildBoostingSubscriptionRow, c.card),
      children: [(0, r.jsx)("img", {
        src: d,
        alt: "",
        className: c.bannerImage
      }), (0, r.jsxs)("div", {
        className: c.textContainer,
        children: [(0, r.jsx)(o.Heading, {
          variant: "heading-xl/semibold",
          className: c.header,
          children: l.intl.string(l.t["48ywCu"])
        }), (0, r.jsx)(o.Text, {
          variant: "text-md/normal",
          className: c.description,
          children: l.intl.format(l.t["/esXLj"], {
            numSubscriptions: n
          })
        })]
      }), (0, r.jsx)(s.Z, {
        onClick: t,
        text: l.intl.string(l.t["z5YcJ+"])
      })]
    })]
  })
}