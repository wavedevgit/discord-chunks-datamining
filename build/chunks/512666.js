/** Chunk was on 48835 (4a2e324bd12f4909.js) **/
"use strict";
n.d(t, {
  u: () => i,
  y: () => o
});
var r = n(192379);

function i(e) {
  return (0, r.useMemo)(function() {
    return e.hooks.dragSource()
  }, [e])
}

function o(e) {
  return (0, r.useMemo)(function() {
    return e.hooks.dragPreview()
  }, [e])
}