/** Chunk was on 95153 **/
/** chunk id: 616621, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./114821.js"), require("./339614.js");
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk398590 = require("./398590.js"),
  Chunk944771 = require("./944771.jsx"),
  Chunk3258 = require("./3258.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js");

function d() {
  if (!(0, l.bG)([c.default], () => {
      var e, t;
      return (null == (e = c.default.getCurrentUser()) ? true : e.isStaff()) === true || (null == (t = c.default.getCurrentUser()) ? true : t.isStaffPersonal()) === true
    })) return null;
  let e = s.componentPlaygroundConfigs.flatMap(e => e.collections);
  return (0, i.jsx)(r.Drp, {
    id: "playgrounds",
    label: "Playgrounds",
    action: () => {
      o.PlaygroundStore.setState({
        selectedCollection: null,
        selectedStory: null
      }), (0, a.id)(u.zgK.COMPONENT_PLAYGROUND)
    },
    children: (0, i.jsx)(r.rXV, {
      children: e.map(e => (0, i.jsx)(r.Drp, {
        id: "".concat(e.id, "-playground"),
        label: e.name,
        action: () => {
          o.PlaygroundStore.setState({
            selectedCollection: e.id,
            selectedStory: null
          }), (0, a.id)(u.zgK.COMPONENT_PLAYGROUND)
        }
      }, e.id))
    }, "design-systems")
  }, "playgrounds")
}