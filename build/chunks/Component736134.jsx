/** Chunk was on web.js **/
/** chunk id: 736134, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => a
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
    children: t.map((e, s) => (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(o.njP.Header, {
        children: e.title
      }), e.stories.map(e => (0, r.jsx)(o.njP.Item, {
        selectedItem: n,
        id: e.id,
        onItemSelect: () => {
          a(e.id)
        },
        children: e.name
      }, e.id)), s < t.length - 1 && (0, r.jsx)(o.njP.Separator, {})]
    }, e.title))
  })
}