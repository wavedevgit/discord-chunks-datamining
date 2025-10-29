/** Chunk was on 2535 **/
/** chunk id: 478057, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./361932.js"), require("./187205.js");
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk653592 = require("./653592.jsx"),
  Chunk156142 = require("./156142.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");

function d() {
  if (!(0, Chunk442837.e7)([Chunk594174.default], () => {
      var e, t;
      return (null == (e = Chunk594174.default.getCurrentUser()) ? true : module.isStaff()) === true || (null == (t = Chunk594174.default.getCurrentUser()) ? true : exports.isStaffPersonal()) === true
    })) return null;
  let e = Chunk653592.componentPlaygroundConfigs.flatMap(e => e.collections);
  return (0, Chunk951288.jsx)(Chunk481060.sNh, {
    id: "playgrounds",
    label: "Playgrounds",
    action: () => {
      Chunk156142.PlaygroundStore.setState({
        selectedCollection: null,
        selectedStory: null
      }), (0, Chunk37234.jN)(Chunk981631.S9g.COMPONENT_PLAYGROUND)
    },
    children: (0, Chunk951288.jsx)(Chunk481060.kSQ, {
      children: module.map(e => (0, l.jsx)(i.sNh, {
        id: "".concat(e.id, "-playground"),
        label: e.name,
        action: () => {
          s.PlaygroundStore.setState({
            selectedCollection: e.id,
            selectedStory: null
          }), (0, r.jN)(u.S9g.COMPONENT_PLAYGROUND)
        }
      }, e.id))
    }, "design-systems")
  }, "playgrounds")
}