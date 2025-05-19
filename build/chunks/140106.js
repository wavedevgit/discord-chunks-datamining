/** Chunk was on 50347 **/
n.d(t, {
  ND: () => f,
  P5: () => p,
  g6: () => h
});
var r = n(255367);
n(73800);
var i = n(347715),
  a = n(481060),
  l = n(668781),
  o = n(493683),
  c = n(100527),
  s = n(346486),
  d = n(486324),
  u = n(388032);
let f = (e, t) => (0, a.ZDy)(async () => {
    let {
      default: i
    } = await Promise.all([n.e("91689"), n.e("89289"), n.e("32753")]).then(n.bind(n, 28130));
    return n => (0, r.jsx)(i, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = r
        })
      }
      return e
    }({
      maxFileSizeBytes: 8388608,
      onComplete: e,
      uploadType: d.pC.AVATAR,
      showUpsellHeader: !1,
      modalTitle: u.intl.string(u.t["6yrpFR"]),
      analyticsLocation: c.Z.GROUP_DM_ICON_EDITOR,
      analyticsLocations: t,
      allowRecentAvatarsSelection: !1
    }, n))
  }),
  p = (e, t) => {
    f(n => {
      o.Z.setIcon(e, n.imageUri, t).catch(h)
    }, [t])
  },
  h = e => {
    var t;
    if ((null == e || null == (t = e.body) ? void 0 : t.retry_after) != null) {
      let t = (0, i.Z)(new Date, e.body.retry_after);
      l.Z.show({
        title: u.intl.string(u.t["Whhv4+"]),
        body: u.intl.format(u.t.VIJkAw, {
          duration: (0, r.jsx)(s.Z, {
            showUnits: !0,
            deadline: t
          })
        })
      })
    }
  }