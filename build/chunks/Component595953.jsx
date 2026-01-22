/** Chunk was on web.js **/
/** chunk id: 595953, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk536432 = require("./536432.js"),
  Chunk792348 = require("./792348.js"),
  Chunk674168 = require("./674168.jsx"),
  Chunk989799 = require("./989799.jsx"),
  Chunk69217 = require("./69217.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk443669 = require("./443669.js");

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

function A(e) {
  let {
    onSelect: t
  } = e, [n, s] = i.useState(false), l = (0, a.bG)([c.default], () => c.default.getCurrentUser()), d = u.Ay.canUseCustomCallSounds(l), f = i.useRef(null);

  function E(e) {
    d && (s(false), null == t || t(e))
  }
  return (0, r.jsx)(o.YNO, {
    targetElementRef: f,
    shouldShow: n,
    position: "left",
    onRequestClose: () => s(false),
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(o.lGe, {
        children: (0, r.jsx)(_.A, {
          suppressPlaySound: true,
          shouldShowUpsell: false,
          guildId: null,
          channel: null,
          onClose: t,
          onSelect: E,
          gridNotice: d ? null : (0, r.jsx)(p.m, {}),
          analyticsSource: "call sounds edit setting"
        })
      })
    },
    children: e => (0, r.jsx)(h.dT, O(b({}, e), {
      ref: f,
      onClick: () => {
        s(!n)
      },
      text: m.intl.string(m.t.uOe0Az),
      children: (0, r.jsx)(o.R2l, {
        size: "md",
        color: "currentColor",
        className: g.Wo
      })
    }))
  })
}

function v(e) {
  let {
    sound: t
  } = e, {
    previewSound: n
  } = (0, f.A)(t, null), i = 0 === (0, d.wH)() ? m.intl.string(m.t.OASXjt) : m.intl.formatToPlainString(m.t["/8fYO5"], {
    emojiName: t.emojiName,
    soundName: t.name
  });
  return (0, r.jsx)(h.dT, {
    onClick: n,
    text: i,
    children: (0, r.jsx)(o.HKD, {
      size: "md",
      color: "currentColor",
      className: g.wg
    })
  })
}

function S(e) {
  let {
    sound: t,
    isGlobal: n,
    onSelect: i
  } = e, a = null != t, c = null == t ? true : t.emojiId, u = null == t ? true : t.emojiName, d = a && (null != u || null != c), f = e => (0, r.jsx)(o.Text, {
    variant: "text-xs/medium",
    color: "text-default",
    tag: "span",
    children: e
  });

  function p() {
    return null == t ? m.intl.string(m.t.PoWNfe) : n ? m.intl.format(m.t.B6HU6O, {
      soundName: t.name,
      subtextHook: f
    }) : t.name
  }
  return (0, r.jsxs)("div", {
    className: g.D6,
    children: [(0, r.jsxs)("div", {
      className: g.kL,
      children: [d && (0, r.jsx)(l.A, {
        emojiId: c,
        emojiName: u,
        className: g.Zg
      }), (0, r.jsx)(o.Text, {
        variant: "text-xs/medium",
        color: "text-strong",
        className: g.dj,
        children: p()
      }), a ? (0, r.jsx)(v, {
        sound: t
      }) : (0, r.jsx)(o.HKD, {
        size: "md",
        color: "currentColor",
        className: g.Gk
      })]
    }), (0, r.jsxs)("div", {
      className: g.kL,
      children: [(0, r.jsx)(A, {
        onSelect: i
      }), a && !n && (0, r.jsx)(h.dT, {
        onClick: () => i(null),
        text: m.intl.string(m.t.jmtcGA),
        children: (0, r.jsx)(o.ucK, {
          size: "md",
          color: s.A.unsafe_rawColors.RED_400.css,
          className: g.Wo
        })
      })]
    })]
  })
}