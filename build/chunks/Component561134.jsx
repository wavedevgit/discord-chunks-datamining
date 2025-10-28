/** Chunk was on 36182 **/
/** chunk id: 561134, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N: () => a
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js");

function a(e) {
  let {
    groups: t,
    selectedStory: n,
    onStorySelect: a
  } = e;
  return (0, r.jsx)(o.njP, {
    selectedItem: n,
    orientation: "vertical",
    onItemSelect: e => {
      null != e && a(e)
    },
    children: t.map((e, i) => (0, r.jsxs)(l.Fragment, {
      children: [(0, r.jsx)(o.njP.Header, {
        children: e.title
      }), e.stories.map(e => (0, r.jsx)(o.njP.Item, {
        selectedItem: n,
        id: e.id,
        onItemSelect: () => {
          a(e.id)
        },
        children: e.name
      }, e.id)), i < t.length - 1 && (0, r.jsx)(o.njP.Separator, {})]
    }, e.title))
  })
}