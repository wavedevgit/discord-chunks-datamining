/** Chunk was on web.js **/
/** chunk id: 264832, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => s
});
var Chunk255367 = require("./255367.js"),
  Chunk481060 = require("./481060.js"),
  Chunk49012 = require("./49012.js"),
  Chunk840855 = require("./840855.js");

function s(e) {
  let {
    children: t,
    href: n
  } = e;
  return null == n ? t : (0, r.jsx)(i.eee, {
    className: a.link,
    href: n,
    onClick: e => {
      e.stopPropagation(), o.q({
        href: n
      }, e)
    },
    target: "_blank",
    rel: "noopener noreferrer",
    children: t
  })
}