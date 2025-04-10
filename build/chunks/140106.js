/** Chunk was on 41259 **/
t.d(n, {
  ND: () => d,
  P5: () => h,
  es: () => p
});
var l = t(200651);
t(192379);
var r = t(347715),
  o = t(481060),
  i = t(668781),
  a = t(493683),
  s = t(346486),
  c = t(486324),
  u = t(388032);
let d = e => (0, o.ZDy)(async () => {
    let {
      default: n
    } = await Promise.all([t.e("91689"), t.e("89289"), t.e("36016")]).then(t.bind(t, 28130));
    return t => (0, l.jsx)(n, function(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
          l = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), l.forEach(function(n) {
          var l;
          l = t[n], n in e ? Object.defineProperty(e, n, {
            value: l,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[n] = l
        })
      }
      return e
    }({
      maxFileSizeBytes: 8388608,
      onComplete: e,
      uploadType: c.pC.AVATAR,
      showUpsellHeader: !1,
      modalTitle: u.NW.string(u.t["6yrpFR"]),
      allowRecentAvatarsSelection: !1
    }, t))
  }),
  h = e => {
    d(n => {
      a.Z.setIcon(e, n.imageUri).catch(p)
    })
  },
  p = e => {
    var n;
    if ((null == e || null == (n = e.body) ? void 0 : n.retry_after) != null) {
      let n = (0, r.Z)(new Date, e.body.retry_after);
      i.Z.show({
        title: u.NW.string(u.t["Whhv4+"]),
        body: u.NW.format(u.t.VIJkAw, {
          duration: (0, l.jsx)(s.Z, {
            showUnits: !0,
            deadline: n
          })
        })
      })
    }
  }