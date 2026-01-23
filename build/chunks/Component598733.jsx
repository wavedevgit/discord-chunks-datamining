/** Chunk was on web.js **/
/** chunk id: 598733, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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
let y = () => {
  let e = (0, o.bG)([p.A], () => p.A.getGuildId(), []),
    t = (0, o.bG)([f.A], () => f.A.getGuild(e), [e]),
    [n, a] = i.useState(false);
  if (null == t) return null;
  let y = () => {
      (0, d.JK)().goBack()
    },
    b = async () => {
      a(true);
      try {
        _.cf(t.id), await u.A.joinGuild(t.id, {
          source: h.Q4z.NOTICE_BAR
        })
      } catch (e) {
        a(false)
      }
    };
  return (0, r.jsxs)("div", {
    className: s()(g.lm, E.lm),
    children: [(0, r.jsxs)(l.$n, {
      look: l.$n.Looks.OUTLINED,
      color: l.$n.Colors.WHITE,
      size: l.$n.Sizes.NONE,
      className: s()(g.x6, g.aX),
      innerClassName: g.gb,
      onClick: y,
      children: [(0, r.jsx)(c.rJJ, {
        size: "xs",
        color: "currentColor",
        className: g.UE
      }), m.intl.string(m.t["13/7kX"])]
    }), (0, r.jsx)(c.Text, {
      className: g.wx,
      variant: "text-sm/normal",
      children: m.intl.string(m.t["N/y2WE"])
    }), (0, r.jsx)(l.$n, {
      className: g.x6,
      look: l.$n.Looks.OUTLINED,
      color: l.$n.Colors.WHITE,
      size: l.$n.Sizes.NONE,
      submitting: n,
      onClick: b,
      children: m.intl.format(m.t.uHN7ny, {
        guild: t.name
      })
    })]
  })
}