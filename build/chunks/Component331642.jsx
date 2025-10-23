/** Chunk was on web.js **/
/** chunk id: 331642, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk242291 = require("./242291.js"),
  Chunk830253 = require("./830253.js"),
  Chunk792165 = require("./792165.jsx"),
  Chunk603074 = require("./603074.jsx"),
  Chunk294206 = require("./294206.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk298879 = require("./298879.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e) {
  let {
    onSelect: t
  } = e, [n, o] = i.useState(false), l = (0, a.e7)([c.default], () => c.default.getCurrentUser()), d = u.ZP.canUseCustomCallSounds(l), f = i.useRef(null);

  function E(e) {
    d && (o(false), null == t || t(e))
  }
  return (0, r.jsx)(s.yRy, {
    targetElementRef: f,
    shouldShow: n,
    position: "left",
    onRequestClose: () => o(false),
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(s.VqE, {
        children: (0, r.jsx)(p.Z, {
          suppressPlaySound: true,
          shouldShowUpsell: false,
          guildId: null,
          channel: null,
          onClose: t,
          onSelect: E,
          gridNotice: d ? null : (0, r.jsx)(_.o, {}),
          analyticsSource: "call sounds edit setting"
        })
      })
    },
    children: e => (0, r.jsx)(h.hU, O(b({}, e), {
      ref: f,
      onClick: () => {
        o(!n)
      },
      text: m.intl.string(m.t.uOe0Az),
      children: (0, r.jsx)(s.vdY, {
        size: "md",
        color: "currentColor",
        className: g.secondaryIcon
      })
    }))
  })
}

function I(e) {
  let {
    sound: t
  } = e, {
    previewSound: n
  } = (0, f.Z)(t, null), i = 0 === (0, d.pI)() ? m.intl.string(m.t.OASXjt) : m.intl.formatToPlainString(m.t["/8fYO5"], {
    emojiName: t.emojiName,
    soundName: t.name
  });
  return (0, r.jsx)(h.hU, {
    onClick: n,
    text: i,
    children: (0, r.jsx)(s.gj8, {
      size: "md",
      color: "currentColor",
      className: g.secondaryIconActive
    })
  })
}

function T(e) {
  let {
    sound: t,
    isGlobal: n,
    onSelect: i
  } = e, a = null != t, c = null == t ? true : t.emojiId, u = null == t ? true : t.emojiName, d = a && (null != u || null != c), f = e => (0, r.jsx)(s.Text, {
    variant: "text-xs/medium",
    color: "header-secondary",
    tag: "span",
    children: e
  });

  function _() {
    return null == t ? m.intl.string(m.t.PoWNfe) : n ? m.intl.format(m.t.B6HU6O, {
      soundName: t.name,
      subtextHook: f
    }) : t.name
  }
  return (0, r.jsxs)("div", {
    className: g.soundButtonSettingContainer,
    children: [(0, r.jsxs)("div", {
      className: g.container,
      children: [d && (0, r.jsx)(l.Z, {
        emojiId: c,
        emojiName: u,
        className: g.emoji
      }), (0, r.jsx)(s.Text, {
        variant: "text-xs/medium",
        color: "header-primary",
        className: g.soundText,
        children: _()
      }), a ? (0, r.jsx)(I, {
        sound: t
      }) : (0, r.jsx)(s.gj8, {
        size: "md",
        color: "currentColor",
        className: g.secondaryIconDisabled
      })]
    }), (0, r.jsxs)("div", {
      className: g.container,
      children: [(0, r.jsx)(v, {
        onSelect: i
      }), a && !n && (0, r.jsx)(h.hU, {
        onClick: () => i(null),
        text: m.intl.string(m.t.jmtcGA),
        children: (0, r.jsx)(s.XHJ, {
          size: "md",
          color: o.Z.unsafe_rawColors.RED_400.css,
          className: g.secondaryIcon
        })
      })]
    })]
  })
}