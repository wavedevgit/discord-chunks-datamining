/** Chunk was on web.js **/
/** chunk id: 470586, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js");

function o(e) {
  let {
    groups: t,
    selectedStory: n,
    onStorySelect: o
  } = e;
  return (0, r.jsx)(a.VQ0, {
    selectedItem: n,
    orientation: "vertical",
    onItemSelect: e => {
      null != e && o(e)
    },
    children: t.map((e, s) => (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(a.VQ0.Header, {
        children: e.title
      }), e.stories.map(e => (0, r.jsx)(a.VQ0.Item, {
        selectedItem: n,
        id: e.id,
        onItemSelect: () => {
          o(e.id)
        },
        children: e.name
      }, e.id)), s < t.length - 1 && (0, r.jsx)(a.VQ0.Separator, {})]
    }, e.title))
  })
}