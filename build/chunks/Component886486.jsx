/** Chunk was on 99583 **/
/** chunk id: 886486, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => j
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk287809 = require("./287809.js"),
  Chunk513461 = require("./513461.js"),
  Chunk31457 = require("./31457.jsx"),
  Chunk414626 = require("./414626.jsx"),
  Chunk601047 = require("./601047.jsx"),
  Chunk273926 = require("./273926.jsx"),
  Chunk453016 = require("./453016.jsx"),
  Chunk985018 = require("./985018.jsx");
let j = function(e) {
  let {
    guildId: t,
    formFields: l,
    user: j,
    showRequirements: b = true
  } = e;
  return null == (0, r.bG)([s.default], () => null != j ? j : s.default.getCurrentUser()) ? null : (0, n.jsxs)(n.Fragment, {
    children: [b && (0, n.jsx)(c.fu, {
      icon: i.lmn,
      text: m.intl.string(m.t.v2z4c1),
      meetsRequirement: true
    }), l.map((e, t) => (function(e, t) {
      switch (e.field_type) {
        case a.rX.TERMS:
          return (0, n.jsx)(u.LK, {
            formField: e
          }, t);
        case a.rX.TEXT_INPUT:
          return (0, n.jsx)(x.aS, {
            formField: e
          }, t);
        case a.rX.PARAGRAPH:
          return (0, n.jsx)(o.P1, {
            formField: e
          }, t);
        case a.rX.MULTIPLE_CHOICE:
          return (0, n.jsx)(d.CI, {
            formField: e
          }, t)
      }
    })(e, t))]
  })
}