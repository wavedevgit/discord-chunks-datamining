/** Chunk was on 8926 **/
/** chunk id: 156673, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk637853 = require("./637853.js"),
  Chunk434404 = require("./434404.js"),
  Chunk837949 = require("./837949.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let {
    guild: t,
    onSelect: n
  } = e, c = (0, u.Z)(t.id), f = (0, a.wC)(t.id);
  return (0, i.jsx)(l.v2r, {
    onSelect: n,
    navId: "guild-browse-channels-context-menu",
    "aria-label": o.intl.string(o.t.ogxXGq),
    onClose: r.Zy,
    children: (0, i.jsxs)(l.kSQ, {
      children: [f && (0, i.jsx)(l.sNh, {
        id: "go-to-settings",
        label: o.intl.string(o.t.X70lV6),
        action: () => {
          s.Z.open(t.id, d.pNK.ONBOARDING)
        }
      }), c]
    })
  })
}