/** Chunk was on 47260 **/
/** chunk id: 777933, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => E
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

function v(t) {
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
let g = /^(tel|sms|mailto):([^?;]+)/;

function E(t, e, n, E) {
  let b = (0, o.A)(null == n ? true : n.getChannelId());
  if (!u.isPlatformEmbedded || null == t || "" === t || b || (null == E ? true : E.shouldHideMediaOptions) === true || !(0, r.fW)(t)) return null;
  let T = (0, a.E)(t),
    h = t => {
      c.default.track(y.HAw.CONTEXT_MENU_LINK_COPIED, v({
        hostname: T
      }, (0, p.N)())), d.Ay.copy(t), (0, i.showToast)((0, i.createToast)(f.intl.string(f.t["L/PwZf"]), i.ToastType.SUCCESS))
    },
    m = (n, l) => {
      let i = true === l ? t.replace("tel:", "sms:") : t;
      c.default.track(y.HAw.CONTEXT_MENU_LINK_OPENED, v({
        hostname: T
      }, (0, p.N)())), (0, s.h)({
        href: i,
        trusted: (0, s.m)(t, e),
        shouldConfirm: true
      }, n)
    },
    A = [],
    O = t.match(g);
  if (null != O) {
    let t = f.intl.string("mailto" === O[1] ? f.t.ZYLVKo : f.t["3zozoR"]);
    A.push((0, l.jsx)(i.Drp, {
      id: "copy-native-contact",
      label: t,
      action: () => {
        h(O[2])
      }
    }, "copy-native-contact")), "tel" === O[1] && A.push((0, l.jsx)(i.Drp, {
      id: "native-send-sms",
      label: f.intl.string(f.t["+wbjMW"]),
      action: t => m(t, true)
    }, "native-send-sms"))
  }
  return [(0, l.jsx)(i.Drp, {
    id: "copy-native-link",
    label: f.intl.string(f.t.WqhZss),
    leadingAccessory: {
      type: "icon",
      icon: i.qYV
    },
    action: () => {
      h(t)
    }
  }, "copy-native-link"), ...A, (0, l.jsx)(i.Drp, {
    id: "open-native-link",
    label: f.intl.string(f.t.wuRE8M),
    trailingIndicator: {
      type: "icon",
      icon: i.I9m
    },
    action: t => m(t)
  }, "open-native-link")]
}