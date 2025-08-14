/** Chunk was on 7384 **/
/** chunk id: 331642, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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

function x(e) {
  let {
    onSelect: t
  } = e, [n, a] = r.useState(false), o = (0, s.e7)([c.default], () => c.default.getCurrentUser()), u = d.ZP.canUseCustomCallSounds(o), m = r.useRef(null);

  function x(e) {
    u && (a(false), null == t || t(e))
  }
  return (0, i.jsx)(l.yRy, {
    targetElementRef: m,
    shouldShow: n,
    position: "left",
    onRequestClose: () => a(false),
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(l.VqE, {
        children: (0, i.jsx)(g.Z, {
          suppressPlaySound: true,
          shouldShowUpsell: false,
          guildId: null,
          channel: null,
          onClose: t,
          onSelect: x,
          gridNotice: u ? null : (0, i.jsx)(p.o, {}),
          analyticsSource: "call sounds edit setting"
        })
      })
    },
    children: e => {
      var t, r;
      return (0, i.jsx)(h.hU, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({}, e), r = r = {
        ref: m,
        onClick: () => {
          a(!n)
        },
        text: f.intl.string(f.t.uOe0Aw),
        children: (0, i.jsx)(l.vdY, {
          size: "md",
          color: "currentColor",
          className: b.secondaryIcon
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
      }), t))
    }
  })
}

function _(e) {
  let {
    sound: t
  } = e, {
    previewSound: n
  } = (0, m.Z)(t, null), r = 0 === (0, u.pI)() ? f.intl.string(f.t.OASXjo) : f.intl.formatToPlainString(f.t["/8fYOz"], {
    emojiName: t.emojiName,
    soundName: t.name
  });
  return (0, i.jsx)(h.hU, {
    onClick: n,
    text: r,
    children: (0, i.jsx)(l.gj8, {
      size: "md",
      color: "currentColor",
      className: b.secondaryIconActive
    })
  })
}

function j(e) {
  let {
    sound: t,
    isGlobal: n,
    onSelect: r
  } = e, s = null != t, c = null == t ? true : t.emojiId, d = null == t ? true : t.emojiName, u = s && (null != d || null != c);
  return (0, i.jsxs)("div", {
    className: b.soundButtonSettingContainer,
    children: [(0, i.jsxs)("div", {
      className: b.container,
      children: [u && (0, i.jsx)(o.Z, {
        emojiId: c,
        emojiName: d,
        className: b.emoji
      }), (0, i.jsx)(l.Text, {
        variant: "text-xs/medium",
        color: "header-primary",
        className: b.soundText,
        children: null == t ? f.intl.string(f.t.PoWNfX) : n ? f.intl.format(f.t.B6HU6O, {
          soundName: t.name,
          subtextHook: e => (0, i.jsx)(l.Text, {
            variant: "text-xs/medium",
            color: "header-secondary",
            tag: "span",
            children: e
          })
        }) : t.name
      }), s ? (0, i.jsx)(_, {
        sound: t
      }) : (0, i.jsx)(l.gj8, {
        size: "md",
        color: "currentColor",
        className: b.secondaryIconDisabled
      })]
    }), (0, i.jsxs)("div", {
      className: b.container,
      children: [(0, i.jsx)(x, {
        onSelect: r
      }), s && !n && (0, i.jsx)(h.hU, {
        onClick: () => r(null),
        text: f.intl.string(f.t.jmtcGB),
        children: (0, i.jsx)(l.XHJ, {
          size: "md",
          color: a.Z.unsafe_rawColors.RED_400.css,
          className: b.secondaryIcon
        })
      })]
    })]
  })
}