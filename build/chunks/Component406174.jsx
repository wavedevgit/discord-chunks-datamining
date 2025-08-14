/** Chunk was on 7384 **/
/** chunk id: 406174, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk699533 = require("./699533.js"),
  Chunk903163 = require("./903163.js"),
  Chunk834300 = require("./834300.js");

function m(e) {
  let {
    onClickManageSubscription: t,
    count: n
  } = e;
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(l.X6q, {
      variant: "heading-md/bold",
      children: o.intl.string(o.t["KzCF//"])
    }), (0, i.jsx)(l.LZC, {
      size: 4
    }), (0, i.jsx)(l.Text, {
      variant: "text-md/normal",
      className: c.sectionDescription,
      children: o.intl.string(o.t["3D7qCg"])
    }), (0, i.jsx)(l.LZC, {
      size: 24
    }), (0, i.jsxs)("div", {
      className: s()(d.guildBoostingSubscriptionRow, c.card),
      children: [(0, i.jsx)("img", {
        src: u,
        alt: "",
        className: c.handImage
      }), (0, i.jsxs)("div", {
        className: c.textContainer,
        children: [(0, i.jsx)(l.X6q, {
          variant: "heading-xl/semibold",
          className: c.header,
          children: o.intl.string(o.t["KzCF//"])
        }), (0, i.jsx)(l.Text, {
          variant: "text-md/normal",
          className: c.description,
          children: o.intl.format(o.t["m+pcOD"], {
            numSubscriptions: n
          })
        })]
      }), (0, i.jsx)(a.zx, {
        color: a.zx.Colors.CUSTOM,
        size: a.zx.Sizes.SMALL,
        className: c.manageSubscriptionsButton,
        onClick: t,
        children: o.intl.string(o.t["3a8Xxs"])
      })]
    })]
  })
}