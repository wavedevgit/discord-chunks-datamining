/** Chunk was on web.js **/
/** chunk id: 636478, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => a
});
var Chunk64700 = require("./64700.js"),
  Chunk492313 = require("./492313.js");

function a(e) {
  let [t, n] = (0, i.P)(e.isOpen, e.defaultOpen || false, e.onOpenChange), a = (0, r.useCallback)(() => {
    n(true)
  }, [n]), s = (0, r.useCallback)(() => {
    n(false)
  }, [n]), o = (0, r.useCallback)(() => {
    n(!t)
  }, [n, t]);
  return {
    isOpen: t,
    setOpen: n,
    open: a,
    close: s,
    toggle: o
  }
}