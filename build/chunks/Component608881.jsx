/** Chunk was on 21738 **/
/** chunk id: 608881, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk820284 = require("./820284.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk915089 = require("./915089.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk193699 = require("./193699.jsx"),
  Chunk153488 = require("./153488.js"),
  Chunk426389 = require("./426389.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk181485 = require("./181485.js");

function E() {
  let {
    analyticsLocations: e
  } = (0, d.Ay)(u.A.ACTIVE_NOW_COLUMN), t = (0, a.bG)([f.A], () => f.A.hasConsented(A.YAq.PERSONALIZATION)) ? [] : [s.M.NOW_PLAYING_CONSENT_CARD], n = (0, p.GV)();
  return (0, r.jsx)(d.f5, {
    value: e,
    children: (0, r.jsx)(c.A, {
      section: A.JJy.ACTIVE_NOW_COLUMN,
      children: (0, r.jsx)("aside", {
        className: l()(b.kL, "refresh-active-now"),
        "aria-labelledby": n,
        children: (0, r.jsx)(o.HOs, {
          className: b.XG,
          children: (0, r.jsxs)("div", {
            children: [(0, r.jsx)(o.Heading, {
              variant: "heading-lg/semibold",
              className: b.wx,
              id: n,
              children: _.intl.string(_.t.F4Zggw)
            }), (0, r.jsx)(h.Ay, {
              contentTypes: t,
              children: e => {
                let {
                  visibleContent: t,
                  markAsDismissed: n
                } = e;
                if (t === s.M.NOW_PLAYING_CONSENT_CARD) return (0, r.jsx)(g.A, {
                  className: b.__invalid_consentCard,
                  markAsDismissed: n
                })
              }
            }), (0, r.jsx)(m.A, {})]
          })
        })
      })
    })
  })
}