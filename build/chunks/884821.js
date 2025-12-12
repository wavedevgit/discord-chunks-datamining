/** Chunk was on web.js **/
/** chunk id: 884821, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => a
});
var Chunk473749 = require("./473749.js"),
  Chunk386239 = require("./386239.js");

function a(e) {
  let [t, n] = (0, i.z)(e.isOpen, e.defaultOpen || false, e.onOpenChange), a = (0, r.useCallback)(() => {
    n(true)
  }, [n]), o = (0, r.useCallback)(() => {
    n(false)
  }, [n]), s = (0, r.useCallback)(() => {
    n(!t)
  }, [n, t]);
  return {
    isOpen: t,
    setOpen: n,
    open: a,
    close: o,
    toggle: s
  }
}