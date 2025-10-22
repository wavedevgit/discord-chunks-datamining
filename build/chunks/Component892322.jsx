/** Chunk was on 79764 **/
/** chunk id: 892322, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk778796 = require("./778796.js");

function m(e) {
  let {
    directoryGuildName: t,
    guildToAdd: n,
    isExistingGuildFlow: l,
    onClose: m
  } = e;
  return s()(null != n, "Missing guild in Hub add guild confirmation"), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(r.fef, {
      children: (0, i.jsxs)("div", {
        className: u.content,
        children: [(0, i.jsx)(o.Z, {
          guild: n,
          size: o.Z.Sizes.XLARGE,
          active: true
        }), (0, i.jsx)(a.Heading, {
          className: u.title,
          variant: "heading-xl/semibold",
          children: d.intl.string(d.t.CueiPY)
        }), (0, i.jsx)(a.Text, {
          color: "header-secondary",
          variant: "text-md/normal",
          children: l ? d.intl.formatToPlainString(d.t.R7Pqn5, {
            guildName: t
          }) : d.intl.formatToPlainString(d.t.eIxPSv, {
            guildName: t
          })
        })]
      })
    }), (0, i.jsx)(r.Go$, {
      actionsFullWidth: true,
      actions: l ? [{
        text: d.intl.string(d.t["X0WK+6"]),
        variant: "primary",
        onClick: m
      }] : [{
        text: d.intl.string(d.t["X/VABv"]),
        variant: "secondary",
        onClick: m
      }, {
        text: d.intl.string(d.t.DymAQt),
        variant: "primary",
        onClick: () => {
          (0, c.XU)(n.id), null == m || m()
        }
      }]
    })]
  })
}