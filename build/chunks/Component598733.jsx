/** Chunk was on 61222 **/
/** chunk id: 598733, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk686956 = require("./686956.js"),
  Chunk976860 = require("./976860.js"),
  Chunk71393 = require("./71393.js"),
  Chunk967198 = require("./967198.js"),
  Chunk449054 = require("./449054.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk163677 = require("./163677.js"),
  Chunk1624 = require("./1624.js");
let p = 21552 == require.j ? () => {
  let e = (0, a.bG)([_.A], () => _.A.getGuildId(), []),
    t = (0, a.bG)([d.A], () => d.A.getGuild(e), [e]),
    [n, l] = i.useState(false);
  if (null == t) return null;
  let p = async () => {
    l(true);
    try {
      A.cf(t.id), await u.A.joinGuild(t.id, {
        source: T.Q4z.NOTICE_BAR
      })
    } catch (e) {
      l(false)
    }
  };
  return (0, r.jsxs)("div", {
    className: o()(O.lm, N.lm),
    children: [(0, r.jsxs)(s.$n, {
      look: s.$n.Looks.OUTLINED,
      color: s.$n.Colors.WHITE,
      size: s.$n.Sizes.NONE,
      className: o()(O.x6, O.aX),
      innerClassName: O.gb,
      onClick: () => {
        (0, E.JK)().goBack()
      },
      children: [(0, r.jsx)(c.rJJ, {
        size: "xs",
        color: "currentColor",
        className: O.UE
      }), I.intl.string(I.t["13/7kX"])]
    }), (0, r.jsx)(c.Text, {
      className: O.wx,
      variant: "text-sm/normal",
      children: I.intl.string(I.t["N/y2WE"])
    }), (0, r.jsx)(s.$n, {
      className: O.x6,
      look: s.$n.Looks.OUTLINED,
      color: s.$n.Colors.WHITE,
      size: s.$n.Sizes.NONE,
      submitting: n,
      onClick: p,
      children: I.intl.format(I.t.uHN7ny, {
        guild: t.name
      })
    })]
  })
} : null