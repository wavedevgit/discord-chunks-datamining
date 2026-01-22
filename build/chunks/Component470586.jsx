/** Chunk was on web.js **/
/** chunk id: 470586, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => s
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js");

function s(e) {
  let {
    groups: t,
    selectedStory: n,
    onStorySelect: s
  } = e;
  return (0, r.jsx)(a.VQ0, {
    selectedItem: n,
    orientation: "vertical",
    onItemSelect: e => {
      null != e && s(e)
    },
    children: t.map((e, o) => (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(a.VQ0.Header, {
        children: e.title
      }), e.stories.map(e => (0, r.jsx)(a.VQ0.Item, {
        selectedItem: n,
        id: e.id,
        onItemSelect: () => {
          s(e.id)
        },
        children: e.name
      }, e.id)), o < t.length - 1 && (0, r.jsx)(a.VQ0.Separator, {})]
    }, e.title))
  })
}