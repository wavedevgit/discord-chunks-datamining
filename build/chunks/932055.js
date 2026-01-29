/** Chunk was on 4670 **/
/** chunk id: 932055, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Jz: () => A,
  i: () => S,
  vd: () => c
}), require("./321073.js");
var Chunk311907 = require("./311907.js"),
  Chunk264686 = require("./264686.js"),
  Chunk839214 = require("./839214.js"),
  Chunk419954 = require("./419954.js"),
  Chunk400492 = require("./400492.js"),
  Chunk803224 = require("./803224.js"),
  Chunk780964 = require("./780964.js"),
  Chunk985018 = require("./985018.jsx");
let T = (0, Chunk839214.D)(() => ({
  currentPlayingSound: null
}));

function c() {
  let e = T.getField("currentPlayingSound");
  null == e || e.stop(), T.setState({
    currentPlayingSound: null
  })
}

function A(e) {
  let t = T.getField("currentPlayingSound");
  null == t || t.stop();
  let i = (0, a.Ak)(e);
  T.setState({
    currentPlayingSound: i
  })
}

function S(e) {
  return (0, r.zD)("".concat(o.X.SOUNDS_LIST_ITEM_PREFIX).concat(e.sound), {
    useTitle: e.useTitle,
    useSubtitle: () => d.intl.format(d.t.OOiGCM, {
      onClick: () => A(e.sound)
    }),
    useValue: () => {
      var t;
      let i = (0, n.bG)([u.A], () => u.A.isSoundDisabled(e.sound)),
        l = null == (t = e.useDisabled) ? true : t.call(e);
      return !i && !l
    },
    setValue: t => {
      let i = u.A.getDisabledSounds().filter(t => t !== e.sound);
      t || i.push(e.sound), l.default.setDisabledSounds(i)
    },
    useDisabled: () => {
      var t;
      let i = null == (t = e.useDisabled) ? true : t.call(e),
        l = (0, n.bG)([u.A], () => u.A.getDisableAllSounds());
      return i || l
    },
    useDisabledMessage: e.useDisabledMessage
  })
}