/** Chunk was on 75708 **/
/** chunk id: 681833, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk987997 = require("./987997.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk88538 = require("./88538.js"),
  Chunk772526 = require("./772526.js"),
  Chunk845904 = require("./845904.js");

function p(e) {
  let {
    onClickManageSubscription: t,
    count: n
  } = e;
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(l.X6q, {
      variant: "heading-md/bold",
      children: c.intl.string(c.t["48ywCg"])
    }), (0, i.jsx)(l.LZC, {
      size: 4
    }), (0, i.jsx)(l.Text, {
      variant: "text-md/normal",
      className: d.sectionDescription,
      children: c.intl.string(c.t.VWxmSk)
    }), (0, i.jsx)(l.LZC, {
      size: 24
    }), (0, i.jsxs)("div", {
      className: s()(u.guildBoostingSubscriptionRow, d.card),
      children: [(0, i.jsx)("img", {
        src: m,
        alt: "",
        className: d.bannerImage
      }), (0, i.jsxs)("div", {
        className: d.textContainer,
        children: [(0, i.jsx)(l.X6q, {
          variant: "heading-xl/semibold",
          className: d.header,
          children: c.intl.string(c.t["48ywCg"])
        }), (0, i.jsx)(l.Text, {
          variant: "text-md/normal",
          className: d.description,
          children: c.intl.format(c.t["/esXLi"], {
            numSubscriptions: n
          })
        })]
      }), (0, i.jsx)(o.Z, {
        color: a.zx.Colors.BRAND,
        onClick: t,
        children: c.intl.string(c.t.z5YcJy)
      })]
    })]
  })
}