/** Chunk was on 96473 **/
/** chunk id: 905041, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./704826.js"), require("./35282.js"), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  let y = (0, a.Z)(null == e ? true : e.getChannelId());
  if (!u.isPlatformEmbedded || null == t || "" === t || y || (null == m ? true : m.shouldHideMediaOptions) === true || !(0, r.Jj)(t)) return null;
  let g = (0, o.F)(t),
    j = t => {
      s.default.track(v.rMx.CONTEXT_MENU_LINK_COPIED, p({
        hostname: g
      }, (0, f.v)())), d.ZP.copy(t), (0, i.showToast)((0, i.createToast)(h.intl.string(h.t["L/PwZf"]), i.ToastType.SUCCESS))
    },
    O = (e, l) => {
      let i = true === l ? t.replace("tel:", "sms:") : t;
      s.default.track(v.rMx.CONTEXT_MENU_LINK_OPENED, p({
        hostname: g
      }, (0, f.v)())), (0, c.q)({
        href: i,
        trusted: (0, c.r)(t, n),
        shouldConfirm: true
      }, e)
    },
    k = [],
    C = t.match(b);
  if (null != C) {
    let t = h.intl.string("mailto" === C[1] ? h.t.ZYLVKo : h.t["3zozoR"]);
    k.push((0, l.jsx)(i.sNh, {
      id: "copy-native-contact",
      label: t,
      action: () => {
        j(C[2])
      }
    }, "copy-native-contact")), "tel" === C[1] && k.push((0, l.jsx)(i.sNh, {
      id: "native-send-sms",
      label: h.intl.string(h.t["+wbjMW"]),
      action: t => O(t, true)
    }, "native-send-sms"))
  }
  return [(0, l.jsx)(i.sNh, {
    id: "copy-native-link",
    label: h.intl.string(h.t.WqhZss),
    action: () => {
      j(t)
    }
  }, "copy-native-link"), ...k, (0, l.jsx)(i.sNh, {
    id: "open-native-link",
    label: h.intl.string(h.t.wuRE8M),
    action: t => O(t)
  }, "open-native-link")]
}