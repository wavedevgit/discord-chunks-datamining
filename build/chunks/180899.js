/** Chunk was on 73736 **/
/** chunk id: 180899, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk157925 = require("./157925.js"),
  Chunk765305 = require("./765305.js");

function s(e) {
  let {
    stageInstance: t,
    defaultStep: n,
    error: i,
    onSave: s
  } = e, [c, d] = r.useState(n), [u, x] = r.useState(), [m, h] = r.useState(null);
  return r.useEffect(() => {
    null != i && d(a.lv.STAGE_CHANNEL_SETTINGS)
  }, [i]), {
    modalStep: c,
    setModalStep: d,
    readySlide: m,
    handleSlideReady: function(e) {
      return h(e)
    },
    savedOptions: u,
    handleSettingsSave: function(e) {
      if (x(e), e.privacyLevel === o.j8.PUBLIC && (null == t ? true : t.privacy_level) !== o.j8.PUBLIC) return void d(a.lv.PUBLIC_STAGE_PREVIEW);
      s(e)
    },
    handleDelayedSave: function() {
      l()(null != u, "Must have some saved options."), s(u)
    }
  }
}