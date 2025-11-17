/** Chunk was on 65354 **/
/** chunk id: 223730, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S$: () => m,
  yj: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk771845 = require("./771845.js"),
  Chunk88658 = require("./88658.js"),
  Chunk782896 = require("./782896.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk361742 = require("./361742.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk95049 = require("./95049.js");
let m = () => {
  (0, Chunk518596.openUserSettings)(Chunk313789.n.ACTIVITY_PRIVACY_PANEL, {
    section: Chunk981631.oAB.ACTIVITY_PRIVACY
  })
};

function b(e) {
  let {
    children: t,
    onClick: n
  } = e;
  return (0, r.jsxs)(l.P3F, {
    className: g.chevronButton,
    onClick: n,
    children: [(0, r.jsx)("div", {
      className: g.chevronButtonContent,
      children: t
    }), (0, r.jsx)(l.Fbu, {
      color: l.TVs.colors.TEXT_SECONDARY,
      size: "xs"
    })]
  })
}

function _(e) {
  let {
    onClosePopout: t
  } = e, n = o.G6.useSetting(), a = (0, i.e7)([c.ZP], () => c.ZP.getFlattenedGuildIds()), s = (0, u._o)(), p = a.filter(e => !s.has(e));
  return 0 === a.length ? null : (0, r.jsxs)(b, {
    onClick: () => {
      t(), m()
    },
    children: [(0, r.jsx)(l.Text, {
      variant: "text-sm/semibold",
      children: h.intl.string(n ? f.default["3GrhnF"] : f.default["54ycKJ"])
    }), (0, r.jsx)(d.c, {
      guildIds: p
    })]
  })
}