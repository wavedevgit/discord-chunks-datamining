/** Chunk was on web.js **/
/** chunk id: 561134, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => a
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk706898 = require("./706898.jsx");

function a(e) {
  let {
    groups: t,
    selectedStory: n,
    onStorySelect: a
  } = e;
  return (0, r.jsx)(o.n, {
    selectedItem: n,
    orientation: "vertical",
    onItemSelect: e => {
      null != e && a(e)
    },
    children: t.map((e, s) => (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(o.n.Header, {
        children: e.title
      }), e.stories.map(e => (0, r.jsx)(o.n.Item, {
        selectedItem: n,
        id: e.id,
        onItemSelect: () => {
          a(e.id)
        },
        children: e.name
      }, e.id)), s < t.length - 1 && (0, r.jsx)(o.n.Separator, {})]
    }, e.title))
  })
}