/** Chunk was on 77069 **/
/** chunk id: 407458, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  WY: () => S,
  j$: () => d
}), require("./539854.js");
var Chunk442837 = require("./442837.js"),
  Chunk292556 = require("./292556.js"),
  Chunk972959 = require("./972959.js"),
  Chunk509613 = require("./509613.js"),
  Chunk460181 = require("./460181.js"),
  Chunk292959 = require("./292959.js"),
  Chunk313789 = require("./313789.js"),
  Chunk388032 = require("./388032.jsx");
let T = (0, Chunk972959.H)(() => ({
  currentPlayingSound: null
}));

function S() {
  let t = T.getField("currentPlayingSound");
  null == module || module.stop(), T.setState({
    currentPlayingSound: null
  })
}

function d(t) {
  return (0, u.qs)("".concat(o.n.SOUNDS_LIST_ITEM_PREFIX).concat(t.sound), {
    useTitle: t.useTitle,
    useSubtitle: () => c.intl.format(c.t.OOiGCM, {
      onClick: () => (function(t) {
        let e = T.getField("currentPlayingSound");
        null == e || e.stop();
        let n = (0, r.GN)(t);
        T.setState({
          currentPlayingSound: n
        })
      })(t.sound)
    }),
    useValue: () => {
      var e;
      let n = (0, i.e7)([a.Z], () => a.Z.isSoundDisabled(t.sound)),
        l = null == (e = t.useDisabled) ? true : e.call(t);
      return !n && !l
    },
    setValue: e => {
      let n = a.Z.getDisabledSounds().filter(e => e !== t.sound);
      e || n.push(t.sound), l.default.setDisabledSounds(n)
    },
    useDisabled: () => {
      var e;
      let n = null == (e = t.useDisabled) ? true : e.call(t),
        l = (0, i.e7)([a.Z], () => a.Z.getDisableAllSounds());
      return n || l
    },
    useDisabledMessage: t.useDisabledMessage
  })
}