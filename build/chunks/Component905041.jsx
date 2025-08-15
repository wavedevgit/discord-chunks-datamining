/** Chunk was on 96473 **/
/** chunk id: 905041, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./704826.js"), require("./35282.js"), require("./539854.js"), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk296182 = require("./296182.js"),
  Chunk976853 = require("./976853.js"),
  Chunk902676 = require("./902676.js"),
  Chunk626135 = require("./626135.js"),
  Chunk49012 = require("./49012.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk36998 = require("./36998.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = null != arguments[n] ? arguments[n] : {},
      l = Object.keys(e);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(e).filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    }))), l.forEach(function(n) {
      var l;
      l = e[n], n in t ? Object.defineProperty(t, n, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[n] = l
    })
  }
  return t
}
let b = /^(tel|sms|mailto):([^?;]+)/;

function m(t, n, e, m) {
  let g = (0, a.Z)(null == e ? true : e.getChannelId());
  if (!c.isPlatformEmbedded || null == t || "" === t || g || (null == m ? true : m.shouldHideMediaOptions) === true || !(0, r.Jj)(t)) return null;
  let O = (0, o.F)(t),
    y = t => {
      s.default.track(h.rMx.CONTEXT_MENU_LINK_COPIED, p({
        hostname: O
      }, (0, v.v)())), d.ZP.copy(t), (0, i.showToast)((0, i.createToast)(f.intl.string(f.t["L/PwZW"]), i.ToastType.SUCCESS))
    },
    _ = (e, l) => {
      let i = true === l ? t.replace("tel:", "sms:") : t;
      s.default.track(h.rMx.CONTEXT_MENU_LINK_OPENED, p({
        hostname: O
      }, (0, v.v)())), (0, u.q)({
        href: i,
        trusted: (0, u.r)(t, n),
        shouldConfirm: true
      }, e)
    },
    Z = [],
    C = t.match(b);
  if (null != C) {
    let t = f.intl.string("mailto" === C[1] ? f.t.ZYLVKi : f.t["3zozoa"]);
    Z.push((0, l.jsx)(i.sNh, {
      id: "copy-native-contact",
      label: t,
      action: () => {
        y(C[2])
      }
    }, "copy-native-contact")), "tel" === C[1] && Z.push((0, l.jsx)(i.sNh, {
      id: "native-send-sms",
      label: f.intl.string(f.t["+wbjMT"]),
      action: t => _(t, true)
    }, "native-send-sms"))
  }
  return [(0, l.jsx)(i.sNh, {
    id: "copy-native-link",
    label: f.intl.string(f.t.WqhZsr),
    action: () => {
      y(t)
    }
  }, "copy-native-link"), ...Z, (0, l.jsx)(i.sNh, {
    id: "open-native-link",
    label: f.intl.string(f.t.wuRE8P),
    action: t => _(t)
  }, "open-native-link")]
}