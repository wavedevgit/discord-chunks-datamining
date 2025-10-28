/** Chunk was on 33622 **/
/** chunk id: 507476, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  d: () => r
});
var Chunk647438 = require("./647438.js"),
  Chunk379955 = require("./379955.js");

function r(e) {
  let [a, t] = (0, n.z)(e.isOpen, e.defaultOpen || false, e.onOpenChange), r = (0, u.useCallback)(() => {
    t(true)
  }, [t]), i = (0, u.useCallback)(() => {
    t(false)
  }, [t]), o = (0, u.useCallback)(() => {
    t(!a)
  }, [t, a]);
  return {
    isOpen: a,
    setOpen: t,
    open: r,
    close: i,
    toggle: o
  }
}