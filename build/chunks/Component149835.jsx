/** Chunk was on 98335 **/
/** chunk id: 149835, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk58642 = require("./58642.js"),
  Chunk283595 = require("./283595.js"),
  Chunk417363 = require("./417363.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), r.forEach(function(e) {
      var r;
      r = n[e], e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = r
    })
  }
  return t
}

function O(t, e) {
  let n = (0, l.e7)([s.Z], () => s.Z.isInstalled(t.id, t.branchId), [t.branchId, t.id]),
    O = (0, l.e7)([u.Z], () => !u.Z.hasRemovedLibraryApplicationThisSession);
  if (n && !t.isHidden()) return null;

  function y() {
    let e = (0, i.x9)(t.getFlags(), d.eHb.HIDDEN);
    o.h(t.id, t.branchId, e), b.default.track(d.rMx.APPLICATION_SETTINGS_UPDATED, p({
      hidden_enabled: (0, i.yE)(e, d.eHb.HIDDEN)
    }, t.getAnalyticsData()))
  }
  return (0, r.jsx)(c.sNh, {
    id: "in-library",
    label: t.isHidden() ? f.intl.string(f.t["0dnEUJ"]) : f.intl.string(f.t.TuJXLx),
    action: function() {
      null != t && null != e && (t.isHidden() || !O ? y() : (0, c.h7j)(t => {
        var n, i;
        return (0, r.jsx)(c.ConfirmModal, (n = p({
          header: f.intl.string(f.t.oB7isi),
          confirmText: f.intl.string(f.t.OWjIiV),
          cancelText: f.intl.string(f.t["ETE/oC"]),
          onConfirm: () => y(),
          confirmButtonColor: a.zx.Colors.BRAND
        }, t), i = i = {
          children: (0, r.jsx)(c.Text, {
            variant: "text-md/normal",
            children: f.intl.format(f.t.HXfjKt, {
              name: e.name
            })
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(t) {
          Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(i, t))
        }), n))
      }))
    }
  })
}