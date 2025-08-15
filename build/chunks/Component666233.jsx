/** Chunk was on 9924 **/
/** chunk id: 666233, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk246364 = require("./246364.js"),
  Chunk489813 = require("./489813.jsx"),
  Chunk186078 = require("./186078.jsx"),
  Chunk73880 = require("./73880.jsx"),
  Chunk196345 = require("./196345.jsx"),
  Chunk707592 = require("./707592.jsx"),
  Chunk388032 = require("./388032.jsx");
let j = function(e) {
  let {
    guildId: t,
    formFields: n,
    user: j,
    showRequirements: h = true
  } = e;
  return null == (0, r.e7)([i.default], () => null != j ? j : i.default.getCurrentUser()) ? null : (0, l.jsxs)(l.Fragment, {
    children: [h && (0, l.jsx)(o.Ih, {
      icon: a.b7C,
      text: x.intl.string(x.t.v2z4c3),
      meetsRequirement: true
    }), n.map((e, t) => (function(e, t) {
      switch (e.field_type) {
        case s.QJ.TERMS:
          return (0, l.jsx)(u.QC, {
            formField: e
          }, t);
        case s.QJ.TEXT_INPUT:
          return (0, l.jsx)(m.YJ, {
            formField: e
          }, t);
        case s.QJ.PARAGRAPH:
          return (0, l.jsx)(d.jn, {
            formField: e
          }, t);
        case s.QJ.MULTIPLE_CHOICE:
          return (0, l.jsx)(c.QH, {
            formField: e
          }, t)
      }
    })(e, t))]
  })
}