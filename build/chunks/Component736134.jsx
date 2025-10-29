/** Chunk was on web.js **/
/** chunk id: 736134, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js");

function o(e) {
  let {
    groups: t,
    selectedStory: n,
    onStorySelect: o
  } = e;
  return (0, r.jsx)(a.njP, {
    selectedItem: n,
    orientation: "vertical",
    onItemSelect: e => {
      null != e && o(e)
    },
    children: t.map((e, s) => (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(a.njP.Header, {
        children: e.title
      }), e.stories.map(e => (0, r.jsx)(a.njP.Item, {
        selectedItem: n,
        id: e.id,
        onItemSelect: () => {
          o(e.id)
        },
        children: e.name
      }, e.id)), s < t.length - 1 && (0, r.jsx)(a.njP.Separator, {})]
    }, e.title))
  })
}