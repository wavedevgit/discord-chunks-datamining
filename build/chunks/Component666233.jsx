/** Chunk was on 9924 **/
/** chunk id: 666233, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
let b = function(e) {
  let {
    guildId: t,
    formFields: n,
    user: b,
    showRequirements: j = true
  } = e;
  return null == (0, r.e7)([i.default], () => null != b ? b : i.default.getCurrentUser()) ? null : (0, l.jsxs)(l.Fragment, {
    children: [j && (0, l.jsx)(o.Ih, {
      icon: a.b7C,
      text: x.intl.string(x.t.v2z4c1),
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