/** Chunk was on 6759 **/
/** chunk id: 851091, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk100135 = require("./100135.js");

function x(e) {
  let {
    directoryGuildName: t,
    guildToAdd: n,
    isExistingGuildFlow: i,
    onClose: x
  } = e;
  return s()(null != n, "Missing guild in Hub add guild confirmation"), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(a.cwr, {
      children: (0, l.jsxs)("div", {
        className: u.Qs,
        children: [(0, l.jsx)(c.A, {
          guild: n,
          size: c.A.Sizes.XLARGE,
          active: true
        }), (0, l.jsx)(r.Heading, {
          className: u.DD,
          variant: "heading-xl/semibold",
          children: o.intl.string(o.t.CueiPY)
        }), (0, l.jsx)(r.Text, {
          color: "text-default",
          variant: "text-md/normal",
          children: i ? o.intl.formatToPlainString(o.t.R7Pqn5, {
            guildName: t
          }) : o.intl.formatToPlainString(o.t.eIxPSv, {
            guildName: t
          })
        })]
      })
    }), (0, l.jsx)(a.H7u, {
      actionsFullWidth: true,
      actions: i ? [{
        text: o.intl.string(o.t["X0WK+6"]),
        variant: "primary",
        onClick: x
      }] : [{
        text: o.intl.string(o.t["X/VABv"]),
        variant: "secondary",
        onClick: x
      }, {
        text: o.intl.string(o.t.DymAQt),
        variant: "primary",
        onClick: () => {
          (0, d.uh)(n.id), null == x || x()
        }
      }]
    })]
  })
}