/** Chunk was on 47260 **/
/** chunk id: 777933, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./747238.js"), require("./812715.js"), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk803316 = require("./803316.js"),
  Chunk207133 = require("./207133.js"),
  Chunk155078 = require("./155078.js"),
  Chunk954571 = require("./954571.js"),
  Chunk307600 = require("./307600.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk179581 = require("./179581.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function y(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), l.forEach(function(e) {
      var l;
      l = n[e], e in t ? Object.defineProperty(t, e, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = l
    })
  }
  return t
}
let E = /^(tel|sms|mailto):([^?;]+)/;

function b(t, e, n, b) {
  let g = (0, a.A)(null == n ? true : n.getChannelId());
  if (!u.isPlatformEmbedded || null == t || "" === t || g || (null == b ? true : b.shouldHideMediaOptions) === true || !(0, i.fW)(t)) return null;
  let T = (0, o.E)(t),
    h = t => {
      c.default.track(v.HAw.CONTEXT_MENU_LINK_COPIED, y({
        hostname: T
      }, (0, p.N)())), d.Ay.copy(t), (0, r.showToast)((0, r.createToast)(f.intl.string(f.t["L/PwZf"]), r.ToastType.SUCCESS))
    },
    m = (n, l) => {
      let r = true === l ? t.replace("tel:", "sms:") : t;
      c.default.track(v.HAw.CONTEXT_MENU_LINK_OPENED, y({
        hostname: T
      }, (0, p.N)())), (0, s.h)({
        href: r,
        trusted: (0, s.m)(t, e),
        shouldConfirm: true
      }, n)
    },
    O = [],
    _ = t.match(E);
  if (null != _) {
    let t = f.intl.string("mailto" === _[1] ? f.t.ZYLVKo : f.t["3zozoR"]);
    O.push((0, l.jsx)(r.Drp, {
      id: "copy-native-contact",
      label: t,
      action: () => {
        h(_[2])
      }
    }, "copy-native-contact")), "tel" === _[1] && O.push((0, l.jsx)(r.Drp, {
      id: "native-send-sms",
      label: f.intl.string(f.t["+wbjMW"]),
      action: t => m(t, true)
    }, "native-send-sms"))
  }
  return [(0, l.jsx)(r.Drp, {
    id: "copy-native-link",
    label: f.intl.string(f.t.WqhZss),
    action: () => {
      h(t)
    }
  }, "copy-native-link"), ...O, (0, l.jsx)(r.Drp, {
    id: "open-native-link",
    label: f.intl.string(f.t.wuRE8M),
    action: t => m(t)
  }, "open-native-link")]
}