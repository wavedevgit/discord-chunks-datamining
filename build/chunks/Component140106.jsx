/** Chunk was on web.js **/
/** chunk id: 140106, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ND: () => p,
  P5: () => h,
  g6: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk347715 = require("./347715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk493683 = require("./493683.js"),
  Chunk100527 = require("./100527.js"),
  Chunk346486 = require("./346486.jsx"),
  Chunk486324 = require("./486324.js"),
  Chunk388032 = require("./388032.jsx");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}
let p = (e, t) => (0, o.ZDy)(async () => {
    let {
      default: i
    } = await Promise.all([n.e("91689"), n.e("89289"), n.e("80170")]).then(n.bind(n, 28130));
    return n => (0, r.jsx)(i, _({
      maxFileSizeBytes: 8388608,
      onComplete: e,
      uploadType: u.pC.AVATAR,
      showUpsellHeader: false,
      modalTitle: d.intl.string(d.t["6yrpFR"]),
      analyticsLocation: l.Z.GROUP_DM_ICON_EDITOR,
      analyticsLocations: t,
      allowRecentAvatarsSelection: false
    }, n))
  }),
  h = (e, t) => {
    p(n => {
      s.Z.setIcon(e, n.imageUri, t).catch(m)
    }, [t])
  },
  m = e => {
    var t;
    if ((null == e || null == (t = e.body) ? true : t.retry_after) != null) {
      let t = (0, i.Z)(new Date, e.body.retry_after);
      a.Z.show({
        title: d.intl.string(d.t["Whhv4+"]),
        body: d.intl.format(d.t.VIJkAw, {
          duration: (0, r.jsx)(c.Z, {
            showUnits: true,
            deadline: t
          })
        })
      })
    }
  }