/** Chunk was on 9452 **/
/** chunk id: 407458, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  j: () => c
}), require("./539854.js");
var Chunk442837 = require("./442837.js"),
  Chunk292556 = require("./292556.js"),
  Chunk509613 = require("./509613.js"),
  Chunk292959 = require("./292959.js"),
  Chunk313789 = require("./313789.js"),
  Chunk299426 = require("./299426.jsx"),
  Chunk388032 = require("./388032.jsx");

function c(t) {
  return (0, r.qs)("".concat(s.n.SOUNDS_LIST_ITEM_PREFIX).concat(t.sound), {
    useTitle: t.useLabel,
    useSubtitle: () => {
      let {
        handlePreviewSound: e
      } = (0, a.j)();
      return o.intl.format(o.t.OOiGCM, {
        onClick: () => e(t.sound)
      })
    },
    useValue: () => {
      var e;
      let n = (0, i.e7)([u.Z], () => u.Z.isSoundDisabled(t.sound)),
        l = null == (e = t.useDisabled) ? true : e.call(t);
      return !n && !l
    },
    setValue: e => {
      let n = u.Z.getDisabledSounds().filter(e => e !== t.sound);
      e || n.push(t.sound), l.default.setDisabledSounds(n)
    },
    useDisabled: () => {
      var e;
      let n = null == (e = t.useDisabled) ? true : e.call(t),
        l = (0, i.e7)([u.Z], () => u.Z.getDisableAllSounds());
      return n || l
    },
    useDisabledMessage: t.useDisabledMessage
  })
}