/** Chunk was on 79764 **/
/** chunk id: 892322, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk369585 = require("./369585.jsx"),
  Chunk103866 = require("./103866.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk475608 = require("./475608.js");

function x(e) {
  let {
    directoryGuildName: t,
    guildToAdd: n,
    isExistingGuildFlow: l,
    onClose: x
  } = e;
  return s()(null != n, "Missing guild in Hub add guild confirmation"), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(a.f, {
      children: (0, i.jsxs)("div", {
        className: m.content,
        children: [(0, i.jsx)(c.Z, {
          guild: n,
          size: c.Z.Sizes.XLARGE,
          active: true
        }), (0, i.jsx)(o.X6q, {
          className: m.title,
          variant: "heading-xl/semibold",
          children: u.intl.string(u.t.CueiPT)
        }), (0, i.jsx)(o.Text, {
          className: m.__invalid_subtitle,
          color: "header-secondary",
          variant: "text-md/normal",
          children: l ? u.intl.formatToPlainString(u.t.R7Pqn5, {
            guildName: t
          }) : u.intl.formatToPlainString(u.t.eIxPSk, {
            guildName: t
          })
        })]
      })
    }), (0, i.jsx)(r.G, {
      actionsFullWidth: true,
      actions: l ? [{
        text: u.intl.string(u.t["X0WK+/"]),
        variant: "primary",
        onClick: x
      }] : [{
        text: u.intl.string(u.t["X/VABg"]),
        variant: "secondary",
        onClick: x
      }, {
        text: u.intl.string(u.t.DymAQk),
        variant: "primary",
        onClick: () => {
          (0, d.XU)(n.id), null == x || x()
        }
      }]
    })]
  })
}