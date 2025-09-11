/** Chunk was on 24206 **/
/** chunk id: 538211, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
}), require("./388685.js");
var Chunk70722 = require("./70722.js"),
  Chunk388032 = require("./388032.jsx");

function i(e) {
  let t = new Set;
  return e.showVibesHoneypot || t.add(r.kr.VIBES_OFF), (function(e) {
    let {
      isEndStream: t
    } = e;
    return [{
      value: r.kr.BLACK_SCREEN,
      label: t ? l.intl.string(l.t["0X5Zbm"]) : l.intl.string(l.t.fxiRNj)
    }, {
      value: r.kr.BLURRY,
      label: t ? l.intl.string(l.t.VVPQy8) : l.intl.string(l.t.E8jTMD)
    }, {
      value: r.kr.LAGGING,
      label: t ? l.intl.string(l.t.ObEHd3) : l.intl.string(l.t.VoSJER)
    }, {
      value: r.kr.OUT_OF_SYNC,
      label: t ? l.intl.string(l.t.mYmwDw) : l.intl.string(l.t["+NluQk"])
    }, {
      value: r.kr.AUDIO_MISSING,
      label: t ? l.intl.string(l.t.Xwv419) : l.intl.string(l.t.G2egzc)
    }, {
      value: r.kr.AUDIO_POOR,
      label: t ? l.intl.string(l.t["fHey+f"]) : l.intl.string(l.t.aHOfIi)
    }, {
      value: r.kr.STREAM_STOPPED,
      label: l.intl.string(l.t.uEoqQk)
    }, {
      value: r.kr.VIBES_OFF,
      label: l.intl.string(l.t["++JLLy"])
    }, {
      value: r.kr.OTHER,
      label: l.intl.string(l.t["emlT9/"])
    }]
  })(e).filter(e => {
    let {
      value: n
    } = e;
    return !t.has(n)
  })
}