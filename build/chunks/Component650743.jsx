/** Chunk was on web.js **/
/** chunk id: 650743, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk399606 = require("./399606.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk266454 = require("./266454.js"),
  Chunk880949 = require("./880949.jsx"),
  Chunk28546 = require("./28546.js"),
  Chunk65029 = require("./65029.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk556296 = require("./556296.js"),
  Chunk451478 = require("./451478.js"),
  Chunk358085 = require("./358085.js"),
  Chunk13140 = require("./13140.js"),
  Chunk763296 = require("./763296.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk45517 = require("./45517.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function T(e) {
  let {
    soundboardSound: t,
    closePicker: v
  } = e, T = (0, d.Iu)(e => e.searchQuery), S = (0, i.e7)([E.Z], () => null != t && E.Z.isFavoriteSound(t.soundId)), A = (0, i.e7)([_.Z], () => _.Z.getGuild(null == t ? true : t.guildId)), C = (0, i.e7)([l.Z], () => l.Z.useReducedMotion, []), N = (0, i.e7)([h.Z], () => h.Z.isFocused()), R = (0, i.e7)([p.ZP], () => p.ZP.getKeybindForAction(b.kg4.SOUNDBOARD_HOLD));
  if (null != t && T.length > 0) return (0, r.jsx)(f.Z, {
    graphicPrimary: null != t.emojiId || null != t.emojiName ? (0, r.jsx)(s.Z, {
      emojiId: t.emojiId,
      emojiName: t.emojiName,
      className: O.emoji
    }) : (0, r.jsx)(o.XBm, {
      size: "md",
      color: "currentColor",
      className: O.emoji
    }),
    graphicSecondary: null != A ? (0, r.jsx)(u.Z, {
      guild: A,
      shouldAnimate: !C && N
    }) : null,
    titlePrimary: t.name,
    titleSecondary: null == A ? true : A.name,
    isFavorite: S
  });
  let P = () => {
      v(), (0, o.ZDy)(async () => {
        let {
          default: e
        } = await n.e("58120").then(n.bind(n, 355453));
        return t => (0, r.jsx)(e, I({}, t))
      })
    },
    w = (0, c.zu)(a.z.SOUNDBOARD_KEYBIND_TIP),
    D = () => (0, c.Q3)(a.z.SOUNDBOARD_KEYBIND_TIP),
    x = null != R && (0, m.isWindows)() && !w ? y.intl.format(y.t.udMTth, {
      keybind: (0, g.BB)(R.shortcut, true),
      openSettingsHook: (e, t) => (0, r.jsx)(o.Anchor, {
        onClick: P,
        children: e
      }, t)
    }) : null;
  return null == x ? null : (0, r.jsxs)("div", {
    className: O.keybindHint,
    children: [(0, r.jsx)(o.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: O.warningIcon
    }), (0, r.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      className: O.keybindHintText,
      children: x
    }), (0, r.jsx)(o.P3F, {
      className: O.closeButton,
      onClick: D,
      children: (0, r.jsx)(o.Dio, {
        size: "xs",
        color: "currentColor"
      })
    })]
  })
}