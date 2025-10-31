/** Chunk was on 64982 **/
/** chunk id: 828656, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk100568 = require("./100568.js"),
  Chunk417865 = require("./417865.js");

function l(e, t, n, l) {
  let [{
    isDragging: a
  }, s, o] = (0, r.c)({
    type: t,
    item: () => ({
      index: n
    }),
    collect: e => ({
      isDragging: e.isDragging()
    })
  }), [, c] = (0, i.L)({
    accept: t,
    hover(t, r) {
      if (null == e.current) return;
      let i = t.index;
      if (i === n) return;
      let a = e.current.getBoundingClientRect(),
        s = (a.bottom - a.top) / 2,
        o = r.getClientOffset().y - a.top;
      (!(i < n) || !(o < s)) && (i > n && o > s || (l(i, n), t.index = n))
    }
  });
  return {
    drag: s,
    dragPreview: o,
    drop: c,
    isDragging: a
  }
}