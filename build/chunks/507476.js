/** Chunk was on web.js **/
/** chunk id: 507476, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => a
});
var Chunk647438 = require("./647438.js"),
  Chunk379955 = require("./379955.js");

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