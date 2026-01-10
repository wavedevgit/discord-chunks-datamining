/** Chunk was on 81985 **/
/** chunk id: 140106, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ND: () => p,
  P5: () => f,
  g6: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk347715 = require("./347715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk493683 = require("./493683.js"),
  Chunk100527 = require("./100527.js"),
  Chunk346486 = require("./346486.jsx"),
  Chunk486324 = require("./486324.js"),
  Chunk388032 = require("./388032.jsx");
let p = (e, t) => (0, l.ZDy)(async () => {
    let {
      default: i
    } = await Promise.all([n.e("91689"), n.e("89289"), n.e("32603")]).then(n.bind(n, 28130));
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
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({
      maxFileSizeBytes: 8388608,
      onComplete: e,
      uploadType: u.pC.AVATAR,
      showUpsellHeader: false,
      modalTitle: d.intl.string(d.t["6yrpFR"]),
      analyticsLocation: s.Z.GROUP_DM_ICON_EDITOR,
      analyticsLocations: t,
      allowRecentAvatarsSelection: false
    }, n))
  }),
  f = (e, t) => {
    p(n => {
      o.Z.setIcon(e, n.imageUri, t).catch(h)
    }, [t])
  },
  h = e => {
    var t;
    if ((null == e || null == (t = e.body) ? true : t.retry_after) != null) {
      let t = (0, i.Z)(new Date, e.body.retry_after);
      a.Z.show({
        title: d.intl.string(d.t.Whhv4w),
        body: d.intl.format(d.t.VIJkAy, {
          duration: (0, r.jsx)(c.Z, {
            showUnits: true,
            deadline: t
          })
        })
      })
    }
  }