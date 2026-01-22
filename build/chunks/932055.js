/** Chunk was on 28979 **/
/** chunk id: 932055, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  i: () => E,
  vd: () => S
}), require("./321073.js");
var Chunk311907 = require("./311907.js"),
  Chunk264686 = require("./264686.js"),
  Chunk839214 = require("./839214.js"),
  Chunk419954 = require("./419954.js"),
  Chunk400492 = require("./400492.js"),
  Chunk803224 = require("./803224.js"),
  Chunk780964 = require("./780964.js"),
  Chunk985018 = require("./985018.jsx");
let A = (0, Chunk839214.D)(() => ({
  currentPlayingSound: null
}));

function S() {
  let t = A.getField("currentPlayingSound");
  null == t || t.stop(), A.setState({
    currentPlayingSound: null
  })
}

function E(t) {
  return (0, r.zD)("".concat(o.X.SOUNDS_LIST_ITEM_PREFIX).concat(t.sound), {
    useTitle: t.useTitle,
    useSubtitle: () => T.intl.format(T.t.OOiGCM, {
      onClick: () => {
        var e;
        let i, n;
        return e = t.sound, null == (i = A.getField("currentPlayingSound")) || i.stop(), n = (0, u.Ak)(e), void A.setState({
          currentPlayingSound: n
        })
      }
    }),
    useValue: () => {
      var e;
      let i = (0, n.bG)([a.A], () => a.A.isSoundDisabled(t.sound)),
        l = null == (e = t.useDisabled) ? true : e.call(t);
      return !i && !l
    },
    setValue: e => {
      let i = a.A.getDisabledSounds().filter(e => e !== t.sound);
      e || i.push(t.sound), l.default.setDisabledSounds(i)
    },
    useDisabled: () => {
      var e;
      let i = null == (e = t.useDisabled) ? true : e.call(t),
        l = (0, n.bG)([a.A], () => a.A.getDisableAllSounds());
      return i || l
    },
    useDisabledMessage: t.useDisabledMessage
  })
}