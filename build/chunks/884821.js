/** Chunk was on web.js **/
/** chunk id: 884821, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => o
});
var Chunk473749 = require("./473749.js"),
  Chunk386239 = require("./386239.js");

function o(e) {
  let [t, n] = (0, i.z)(e.isOpen, e.defaultOpen || false, e.onOpenChange), o = (0, r.useCallback)(() => {
    n(true)
  }, [n]), a = (0, r.useCallback)(() => {
    n(false)
  }, [n]), s = (0, r.useCallback)(() => {
    n(!t)
  }, [n, t]);
  return {
    isOpen: t,
    setOpen: n,
    open: o,
    close: a,
    toggle: s
  }
}