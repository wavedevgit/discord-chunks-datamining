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
  Chunk517319 = require("./517319.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk865115 = require("./865115.js"),
  Chunk108319 = require("./108319.js"),
  Chunk633488 = require("./633488.js"),
  Chunk361848 = require("./361848.js");
let b = () => {
    let e = (0, u.AZ)(),
      t = (0, c.Z)(),
      {
        handleTabChange: n
      } = (0, l.Z)();
    return (0, u.VM)() || t && e ? null : (0, r.jsx)("div", {
      className: m.button,
      children: t ? (0, r.jsx)(o.Button, {
        variant: "primary",
        text: _.intl.string(_.t.LhlgY9),
        onClick: () => n(f.dG.REQUESTS)
      }) : (0, r.jsx)(d.Z, {})
    })
  },
  y = () => {
    let e = (0, c.Z)(),
      t = (0, s.o)(_.intl.string(p.default["T7GyW+"]), _.intl.string(p.default.goKE2b)),
      n = (0, s.o)(_.intl.format(p.default.MXjDSv, {
        articleLink: "https://support.discord.com/hc/articles/14155060633623"
      }), _.intl.format(p.default.EMCf6j, {
        articleLink: "https://support.discord.com/hc/articles/14155043715735"
      }));
    return (0, r.jsxs)("div", {
      className: a()(m.container, h.box),
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)("div", {
          children: (0, r.jsxs)("div", {
            className: m.headerText,
            children: [(0, r.jsx)(o.Heading, {
              variant: "heading-xl/medium",
              children: (0, r.jsx)(o.y5t, {
                children: t
              })
            }), (0, r.jsx)(o.Text, {
              variant: "text-sm/medium",
              color: "text-muted",
              children: n
            })]
          })
        }), (0, r.jsx)(b, {})]
      }), (0, r.jsx)("div", {
        className: m.headerImage,
        children: (0, r.jsx)("img", {
          src: e ? g : E,
          alt: _.intl.string(p.default.ffg6xd)
        })
      })]
    })
  }