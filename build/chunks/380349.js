/** Chunk was on 49559 **/
/** chunk id: 380349, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk211401 = require("./211401.js"),
  Chunk500049 = require("./500049.js"),
  Chunk429913 = require("./429913.js"),
  Chunk355622 = require("./355622.js"),
  Chunk583846 = require("./583846.js"),
  Chunk360469 = require("./360469.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let {
    entry: t
  } = e, n = (0, a.h)(t.extra.application_id), u = null == n ? true : n.getIconURL(s.iu.LARGE), d = t.extra.activity_name, p = (0, o.Hd)(t) ? c.t.vPg1JT : c.t.rPqqts, m = {
    onClick: () => {
      r.R(l.s4.TEXT, i.oU.NORMAL, {
        applicationId: t.extra.application_id
      })
    },
    ariaDescription: c.intl.formatToPlainString(c.t.NTHttN, {
      title: d
    })
  };
  return {
    thumbnailUrl: u,
    title: d,
    titleClickable: m,
    thumbnailClickable: m,
    userDescription: p
  }
}