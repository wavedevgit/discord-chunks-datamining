/** Chunk was on 79764 **/
/** chunk id: 892322, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk788175 = require("./788175.js");

function f(e) {
  let {
    directoryGuildName: t,
    guildToAdd: n,
    isExistingGuildFlow: a,
    onClose: f
  } = e;
  return l()(null != n, "Missing guild in Hub add guild confirmation"), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(r.fef, {
      children: (0, i.jsxs)("div", {
        className: u.content,
        children: [(0, i.jsx)(o.Z, {
          guild: n,
          size: o.Z.Sizes.XLARGE,
          active: true
        }), (0, i.jsx)(s.Heading, {
          className: u.title,
          variant: "heading-xl/semibold",
          children: d.intl.string(d.t.CueiPY)
        }), (0, i.jsx)(s.Text, {
          color: "text-default",
          variant: "text-md/normal",
          children: a ? d.intl.formatToPlainString(d.t.R7Pqn5, {
            guildName: t
          }) : d.intl.formatToPlainString(d.t.eIxPSv, {
            guildName: t
          })
        })]
      })
    }), (0, i.jsx)(r.Go$, {
      actionsFullWidth: true,
      actions: a ? [{
        text: d.intl.string(d.t["X0WK+6"]),
        variant: "primary",
        onClick: f
      }] : [{
        text: d.intl.string(d.t["X/VABv"]),
        variant: "secondary",
        onClick: f
      }, {
        text: d.intl.string(d.t.DymAQt),
        variant: "primary",
        onClick: () => {
          (0, c.XU)(n.id), null == f || f()
        }
      }]
    })]
  })
}