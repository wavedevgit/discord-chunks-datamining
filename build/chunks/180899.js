/** Chunk was on 93024 **/
n.d(t, {
  Z: () => c
}), n(47120);
var r = n(192379),
  i = n(512722),
  l = n.n(i),
  o = n(157925),
  a = n(765305);

function c(e) {
  let {
    stageInstance: t,
    defaultStep: n,
    error: i,
    onSave: c
  } = e, [s, d] = r.useState(n), [u, h] = r.useState(), [g, _] = r.useState(null);
  return r.useEffect(() => {
    null != i && d(o.lv.STAGE_CHANNEL_SETTINGS)
  }, [i]), {
    modalStep: s,
    setModalStep: d,
    readySlide: g,
    handleSlideReady: function(e) {
      return _(e)
    },
    savedOptions: u,
    handleSettingsSave: function(e) {
      if (h(e), e.privacyLevel === a.j8.PUBLIC && (null == t ? void 0 : t.privacy_level) !== a.j8.PUBLIC) {
        d(o.lv.PUBLIC_STAGE_PREVIEW);
        return
      }
      c(e)
    },
    handleDelayedSave: function() {
      l()(null != u, "Must have some saved options."), c(u)
    }
  }
}