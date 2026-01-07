/** Chunk was on 2535 **/
/** chunk id: 478057, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./361932.js"), require("./187205.js");
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk653592 = require("./653592.jsx"),
  Chunk156142 = require("./156142.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");

function d() {
  if (!(0, i.e7)([c.default], () => {
      var e, t;
      return (null == (e = c.default.getCurrentUser()) ? true : e.isStaff()) === true || (null == (t = c.default.getCurrentUser()) ? true : t.isStaffPersonal()) === true
    })) return null;
  let e = o.componentPlaygroundConfigs.flatMap(e => e.collections);
  return (0, l.jsx)(a.sNh, {
    id: "playgrounds",
    label: "Playgrounds",
    action: () => {
      s.PlaygroundStore.setState({
        selectedCollection: null,
        selectedStory: null
      }), (0, r.jN)(u.S9g.COMPONENT_PLAYGROUND)
    },
    children: (0, l.jsx)(a.kSQ, {
      children: e.map(e => (0, l.jsx)(a.sNh, {
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