/** Chunk was on web.js **/
/** chunk id: 862933, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => I
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk417597 = require("./417597.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk775602 = require("./775602.js"),
  Chunk826673 = require("./826673.js"),
  Chunk724511 = require("./724511.jsx"),
  Chunk151271 = require("./151271.js"),
  Chunk338464 = require("./338464.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk532624 = require("./532624.js"),
  Chunk531685 = require("./531685.js"),
  Chunk723702 = require("./723702.js"),
  Chunk350535 = require("./350535.js"),
  Chunk209932 = require("./209932.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk735141 = require("./735141.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
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

function I(e) {
  let {
    soundboardSound: t,
    closePicker: v
  } = e, I = (0, d.RQ)(e => e.searchQuery), S = (0, i.bG)([E.A], () => null != t && E.A.isFavoriteSound(t.soundId)), T = (0, i.bG)([p.A], () => p.A.getGuild(null == t ? true : t.guildId)), C = (0, i.bG)([l.A], () => l.A.useReducedMotion, []), N = (0, i.bG)([h.A], () => h.A.isFocused()), w = (0, i.bG)([_.Ay], () => _.Ay.getKeybindForAction(y.hCu.SOUNDBOARD_HOLD));
  if (null != t && I.length > 0) return (0, r.jsx)(f.A, {
    graphicPrimary: null != t.emojiId || null != t.emojiName ? (0, r.jsx)(o.A, {
      emojiId: t.emojiId,
      emojiName: t.emojiName,
      className: O.Zg
    }) : (0, r.jsx)(s.xfq, {
      size: "md",
      color: "currentColor",
      className: O.Zg
    }),
    graphicSecondary: null != T ? (0, r.jsx)(u.A, {
      guild: T,
      shouldAnimate: !C && N
    }) : null,
    titlePrimary: t.name,
    titleSecondary: null == T ? true : T.name,
    isFavorite: S
  });
  let R = () => {
      v(), (0, s.mMO)(async () => {
        let {
          default: e
        } = await n.e("12618").then(n.bind(n, 29681));
        return t => (0, r.jsx)(e, A({}, t))
      })
    },
    P = (0, c.k8)(a.M.SOUNDBOARD_KEYBIND_TIP),
    D = () => (0, c.Dr)(a.M.SOUNDBOARD_KEYBIND_TIP),
    x = null != w && (0, m.isWindows)() && !P ? b.intl.format(b.t.udMTth, {
      keybind: (0, g.dI)(w.shortcut, true),
      openSettingsHook: (e, t) => (0, r.jsx)(s.MzZ, {
        onClick: R,
        children: e
      }, t)
    }) : null;
  return null == x ? null : (0, r.jsxs)("div", {
    className: O.g,
    children: [(0, r.jsx)(s.EpV, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: O.QW
    }), (0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      className: O.L5,
      children: x
    }), (0, r.jsx)(s.DUT, {
      className: O.b,
      onClick: D,
      children: (0, r.jsx)(s.PGe, {
        size: "xs",
        color: "currentColor"
      })
    })]
  })
}