/** Chunk was on web.js **/
/** chunk id: 561134, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => o
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk706898 = require("./706898.jsx");

function o(e) {
  let {
    groups: t,
    selectedStory: n,
    onStorySelect: o
  } = e;
  return (0, r.jsx)(a.n, {
    selectedItem: n,
    orientation: "vertical",
    onItemSelect: e => {
      null != e && o(e)
    },
    children: t.map((e, s) => (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(a.n.Header, {
        children: e.title
      }), e.stories.map(e => (0, r.jsx)(a.n.Item, {
        selectedItem: n,
        id: e.id,
        onItemSelect: () => {
          o(e.id)
        },
        children: e.name
      }, e.id)), s < t.length - 1 && (0, r.jsx)(a.n.Separator, {})]
    }, e.title))
  })
}