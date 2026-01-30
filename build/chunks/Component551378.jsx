/** Chunk was on 78376 **/
/** chunk id: 551378, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk294433 = require("./294433.js"),
  Chunk438732 = require("./438732.js"),
  Chunk809697 = require("./809697.js"),
  Chunk834981 = require("./834981.js"),
  Chunk796497 = require("./796497.jsx"),
  Chunk191627 = require("./191627.js"),
  Chunk842130 = require("./842130.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk555064 = require("./555064.js"),
  Chunk896498 = require("./896498.js"),
  Chunk272673 = require("./272673.js"),
  Chunk607913 = require("./607913.js");
let h = () => {
    let e = (0, d.Li)(),
      t = (0, o.A)(),
      {
        handleTabChange: n
      } = (0, c.A)();
    return (0, d.xr)() || t && e ? null : (0, r.jsx)("div", {
      className: g.x6,
      children: t ? (0, r.jsx)(s.Button, {
        variant: "primary",
        text: m.intl.string(m.t.LhlgY9),
        onClick: () => n(_.u9.REQUESTS)
      }) : (0, r.jsx)(u.A, {})
    })
  },
  E = () => {
    let e = (0, o.A)(),
      t = (0, a.y)(m.intl.string(p.default["T7GyW+"]), m.intl.string(p.default.goKE2b)),
      n = (0, a.y)(m.intl.format(p.default.MXjDSv, {
        articleLink: "https://support.discord.com/hc/articles/14155060633623"
      }), m.intl.format(p.default.EMCf6j, {
        articleLink: "https://support.discord.com/hc/articles/14155043715735"
      }));
    return (0, r.jsxs)("div", {
      className: l()(g.kL, A.a),
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)("div", {
          children: (0, r.jsxs)("div", {
            className: g.TK,
            children: [(0, r.jsx)(s.Heading, {
              variant: "heading-xl/medium",
              children: (0, r.jsx)(s.Fmo, {
                children: t
              })
            }), (0, r.jsx)(s.Text, {
              variant: "text-sm/medium",
              color: "text-muted",
              children: n
            })]
          })
        }), (0, r.jsx)(h, {})]
      }), (0, r.jsx)("div", {
        className: g.F0,
        children: (0, r.jsx)("img", {
          src: e ? f : b,
          alt: m.intl.string(p.default.ffg6xd)
        })
      })]
    })
  }