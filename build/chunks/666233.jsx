/** Chunk was on 9924 **/
/** chunk id: 666233, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk246364 = require("./246364.js"),
  Chunk489813 = require("./489813.jsx"),
  Chunk186078 = require("./186078.jsx"),
  Chunk73880 = require("./73880.jsx"),
  Chunk196345 = require("./196345.jsx"),
  Chunk707592 = require("./707592.js"),
  Chunk388032 = require("./388032.jsx");
let h = function(e) {
  let {
    guildId: t,
    formFields: n,
    user: h,
    showRequirements: j = true
  } = e;
  return null == (0, r.e7)([i.default], () => null != h ? h : i.default.getCurrentUser()) ? null : <l.Fragment>{j && <o.Ih icon={a.b7C} text={x.intl.string(x.t.v2z4c3)} meetsRequirement={true} />}{n.map((e, t) => (function(e, t) {
      switch (e.field_type) {
        case s.QJ.TERMS:
          return <u.QC formField={e} />;
        case s.QJ.TEXT_INPUT:
          return <m.YJ formField={e} />;
        case s.QJ.PARAGRAPH:
          return <d.jn formField={e} />;
        case s.QJ.MULTIPLE_CHOICE:
          return <c.QH formField={e} />
      }
    })(e, t))}</l.Fragment>
}