/** Chunk was on 1272 **/
/** chunk id: 337721, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk434404 = require("./434404.js"),
  Chunk970731 = require("./970731.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk501130 = require("./501130.js"),
  Chunk930128 = require("./930128.js");

function u(e) {
  let {
    guild: t,
    markAsDismissed: n
  } = e;
  return (0, r.jsx)(l.ZP, {
    header: o.intl.string(o.t.Hgd22t),
    content: o.intl.string(o.t.SorTPD),
    asset: (0, r.jsx)("div", {
      className: s.image,
      children: (0, r.jsx)("img", {
        alt: "",
        src: c
      })
    }),
    buttonCTA: o.intl.string(o.t["9l+df3"]),
    onClick: e => {
      i.Z.open(t.id, a.pNK.DISCOVERY_LANDING_PAGE)
    },
    secondaryButtonCTA: o.intl.string(o.t.duVdqq),
    onSecondaryClick: () => {},
    markAsDismissed: n
  })
}