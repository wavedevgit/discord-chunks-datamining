/** Chunk was on 67564 **/
/** chunk id: 396787, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F5: () => p,
  XA: () => f,
  jv: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk653922 = require("./653922.js"),
  Chunk397927 = require("./397927.js"),
  Chunk157559 = require("./157559.js"),
  Chunk308528 = require("./308528.js"),
  Chunk793574 = require("./793574.js"),
  Chunk576470 = require("./576470.jsx"),
  Chunk339984 = require("./339984.js"),
  Chunk985018 = require("./985018.jsx");
let p = (e, t) => (0, i.mMO)(async () => {
    let {
      default: l
    } = await Promise.all([n.e("79149"), n.e("53653"), n.e("92812")]).then(n.bind(n, 551028));
    return n => (0, r.jsx)(l, function(e) {
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
      uploadType: u.HL.AVATAR,
      showUpsellHeader: false,
      modalTitle: d.intl.string(d.t["6yrpFR"]),
      analyticsLocation: o.A.GROUP_DM_ICON_EDITOR,
      analyticsLocations: t,
      allowRecentAvatarsSelection: false
    }, n))
  }),
  h = (e, t) => {
    p(n => {
      a.A.setIcon(e, n.imageUri, t).catch(f)
    }, [t])
  },
  f = e => {
    var t;
    if ((null == e || null == (t = e.body) ? true : t.retry_after) != null) {
      let t = (0, l.A)(new Date, e.body.retry_after);
      s.A.show({
        title: d.intl.string(d.t.Whhv4w),
        body: d.intl.format(d.t.VIJkAy, {
          duration: (0, r.jsx)(c.A, {
            showUnits: true,
            deadline: t
          })
        })
      })
    }
  }