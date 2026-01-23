/** Chunk was on 6759 **/
/** chunk id: 851091, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
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

function m(e) {
  let {
    directoryGuildName: t,
    guildToAdd: n,
    isExistingGuildFlow: i,
    onClose: m
  } = e;
  return s()(null != n, "Missing guild in Hub add guild confirmation"), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(r.cwr, {
      children: (0, l.jsxs)("div", {
        className: u.Qs,
        children: [(0, l.jsx)(c.A, {
          guild: n,
          size: c.A.Sizes.XLARGE,
          active: true
        }), (0, l.jsx)(a.Heading, {
          className: u.DD,
          variant: "heading-xl/semibold",
          children: d.intl.string(d.t.CueiPY)
        }), (0, l.jsx)(a.Text, {
          color: "text-default",
          variant: "text-md/normal",
          children: i ? d.intl.formatToPlainString(d.t.R7Pqn5, {
            guildName: t
          }) : d.intl.formatToPlainString(d.t.eIxPSv, {
            guildName: t
          })
        })]
      })
    }), (0, l.jsx)(r.H7u, {
      actionsFullWidth: true,
      actions: i ? [{
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
          (0, o.uh)(n.id), null == m || m()
        }
      }]
    })]
  })
}