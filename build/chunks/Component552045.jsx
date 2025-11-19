/** Chunk was on web.js **/
/** chunk id: 552045, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk785681 = require("./785681.js"),
  Chunk841409 = require("./841409.js"),
  Chunk880257 = require("./880257.js"),
  Chunk631885 = require("./631885.js"),
  Chunk568671 = require("./568671.jsx"),
  Chunk292352 = require("./292352.js"),
  Chunk744038 = require("./744038.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk26919 = require("./26919.js"),
  Chunk519279 = require("./519279.js"),
  Chunk633488 = require("./633488.js"),
  Chunk361848 = require("./361848.js");
let b = () => {
    let e = (0, Chunk631885.AZ)(),
      t = (0, Chunk880257.Z)(),
      {
        handleTabChange: n
      } = (0, Chunk841409.Z)();
    return (0, Chunk631885.VM)() || exports && module ? null : (0, Chunk54381.jsx)("div", {
      className: Chunk26919.button,
      children: exports ? (0, Chunk54381.jsx)(Chunk481060.Button, {
        variant: "primary",
        text: Chunk388032.intl.string(Chunk388032.t.LhlgY9),
        onClick: () => require(Chunk292352.dG.REQUESTS)
      }) : (0, Chunk54381.jsx)(Chunk568671.Z, {})
    })
  },
  y = () => {
    let e = (0, Chunk880257.Z)(),
      t = (0, Chunk785681.o)(Chunk388032.intl.string(Chunk744038.default["T7GyW+"]), Chunk388032.intl.string(Chunk744038.default.goKE2b)),
      n = (0, Chunk785681.o)(Chunk388032.intl.format(Chunk744038.default.MXjDSv, {
        articleLink: "https://support.discord.com/hc/articles/14155060633623"
      }), Chunk388032.intl.format(Chunk744038.default.EMCf6j, {
        articleLink: "https://support.discord.com/hc/articles/14155043715735"
      }));
    return (0, Chunk54381.jsxs)("div", {
      className: a()(Chunk26919.container, Chunk519279.box),
      children: [(0, Chunk54381.jsxs)("div", {
        children: [(0, Chunk54381.jsx)("div", {
          children: (0, Chunk54381.jsxs)("div", {
            className: Chunk26919.headerText,
            children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
              variant: "heading-xl/medium",
              children: (0, Chunk54381.jsx)(Chunk481060.y5t, {
                children: exports
              })
            }), (0, Chunk54381.jsx)(Chunk481060.Text, {
              variant: "text-sm/medium",
              color: "text-muted",
              children: require
            })]
          })
        }), (0, Chunk54381.jsx)(b, {})]
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk26919.headerImage,
        children: (0, Chunk54381.jsx)("img", {
          src: module ? Chunk633488 : Chunk361848,
          alt: Chunk388032.intl.string(Chunk744038.default.ffg6xd)
        })
      })]
    })
  }