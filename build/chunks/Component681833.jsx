/** Chunk was on web.js **/
/** chunk id: 681833, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk987997 = require("./987997.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk634468 = require("./634468.js"),
  Chunk336763 = require("./336763.js"),
  Chunk845904 = require("./845904.js");

function _(e) {
  let {
    onClickManageSubscription: t,
    count: n
  } = e;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(s.X6q, {
      variant: "heading-md/bold",
      children: c.intl.string(c.t["48ywCg"])
    }), (0, r.jsx)(s.LZC, {
      size: 4
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      className: u.sectionDescription,
      children: c.intl.string(c.t.VWxmSk)
    }), (0, r.jsx)(s.LZC, {
      size: 24
    }), (0, r.jsxs)("div", {
      className: a()(d.guildBoostingSubscriptionRow, u.card),
      children: [(0, r.jsx)("img", {
        src: f,
        alt: "",
        className: u.bannerImage
      }), (0, r.jsxs)("div", {
        className: u.textContainer,
        children: [(0, r.jsx)(s.X6q, {
          variant: "heading-xl/semibold",
          className: u.header,
          children: c.intl.string(c.t["48ywCg"])
        }), (0, r.jsx)(s.Text, {
          variant: "text-md/normal",
          className: u.description,
          children: c.intl.format(c.t["/esXLi"], {
            numSubscriptions: n
          })
        })]
      }), (0, r.jsx)(l.Z, {
        color: o.zx.Colors.BRAND,
        onClick: t,
        children: c.intl.string(c.t.z5YcJy)
      })]
    })]
  })
}