/** Chunk was on 787 **/
/** chunk id: 680474, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk793030 = require("./793030.js"),
  Chunk823379 = require("./823379.js"),
  Chunk216780 = require("./216780.js"),
  Chunk448021 = require("./448021.jsx"),
  Chunk405411 = require("./405411.jsx"),
  Chunk215453 = require("./215453.jsx"),
  Chunk796150 = require("./796150.jsx"),
  Chunk24746 = require("./24746.jsx"),
  Chunk669401 = require("./669401.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk939709 = require("./939709.js");

function f(e) {
  let {
    application: t
  } = e, n = a.useMemo(() => {
    var e, n, r;
    return null != (r = (null != (n = null == (e = t.directory_entry) ? true : e.carousel_items) ? n : []).map(s.RF).filter(l.lm)) ? r : []
  }, [t]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: g.aboutContainer,
      children: [(0, r.jsx)(o.Z, {
        application: t,
        carouselItems: n
      }), (0, r.jsx)(p.Z, {
        application: t
      }), (0, r.jsx)(c.Z, {
        application: t
      }), (0, r.jsx)(m.Z, {
        application: t
      }), (0, r.jsx)(d.Z, {
        application: t
      })]
    }), (0, r.jsxs)("div", {
      className: g.informationContainer,
      children: [(0, r.jsx)("div", {
        className: g.divider
      }), (0, r.jsx)(i.X6, {
        variant: "heading-lg/semibold",
        color: "header-primary",
        children: h.intl.string(h.t["mD+J/v"])
      }), (0, r.jsx)(u.Z, {
        application: t,
        view: "embedded"
      })]
    })]
  })
}