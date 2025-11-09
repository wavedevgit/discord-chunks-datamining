/** Chunk was on 29679 **/
/** chunk id: 75733, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk318766 = require("./318766.jsx"),
  Chunk907040 = require("./907040.jsx"),
  Chunk176354 = require("./176354.js"),
  Chunk434404 = require("./434404.js"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk988167 = require("./988167.js");

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let f = {
  label: ""
};

function h(e) {
  let {
    emoji: t,
    disabled: n,
    handleSelectEmoji: d
  } = e, g = i.useRef(null), m = i.useMemo(() => null == t || null == t.name ? null : function() {
    var e;
    let n = c.ZP.isCustomEmoji(t) ? t.name : t.surrogates;
    return (0, r.jsx)(a.Z, {
      animated: null != (e = t.animated) && e,
      emojiId: t.id,
      emojiName: n
    })
  }, [t]);
  return n ? (0, r.jsx)(s.Z, {
    tabIndex: false,
    active: false,
    renderButtonContents: m
  }) : (0, r.jsx)(l.yRy, {
    targetElementRef: g,
    position: "bottom",
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(o.Z, {
        closePopout: t,
        onSelectEmoji: d(t),
        pickerIntention: u.Hz.GUILD_PROFILE
      })
    },
    children: (e, t) => {
      var n, i;
      let {
        isShown: l
      } = t;
      return (0, r.jsx)(s.Z, (n = p({}, e), i = i = {
        ref: g,
        tabIndex: 0,
        active: l,
        renderButtonContents: m
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
      }), n))
    }
  })
}

function b(e) {
  let {
    guildId: t,
    trait: n,
    index: a,
    onTraitUpdate: s,
    disabled: o
  } = e, c = i.useCallback(() => {
    s(t, a, {
      emoji: true,
      label: ""
    })
  }, [t, a, s]), d = i.useCallback(e => n => {
    let {
      emoji: r,
      willClose: i
    } = n;
    s(t, a, {
      emoji: null != r ? r : true
    }), i && e()
  }, [t, a, s]), u = i.useCallback(e => {
    s(t, a, {
      label: e
    })
  }, [t, a, s]), g = i.useMemo(() => n.emoji, [n.emoji]), p = null != n.label && n.label.length > 0 || null != n.emoji;
  return (0, r.jsx)("div", {
    className: m.traitWrapper,
    children: (0, r.jsx)(l.oil, {
      disabled: o,
      value: n.label,
      onChange: u,
      maxLength: 24,
      leading: {
        type: "emoji",
        button: (0, r.jsx)(h, {
          emoji: g,
          disabled: o,
          handleSelectEmoji: d
        })
      },
      clearable: {
        show: p
      },
      onClear: c
    })
  })
}
let x = [0, 1, 2, 3, 4];

function j(e) {
  let {
    profile: t,
    canManageGuild: n
  } = e, a = i.useMemo(() => t.traits, [t]), s = i.useCallback((e, t, n) => {
    let r = [...a];
    r[t] = p({}, a[t], n), d.Z.updateGuildProfile(e, {
      traits: r
    })
  }, [a]);
  return (0, r.jsx)(l.gNt, {
    label: g.intl.string(g.t.S6JNrh),
    description: g.intl.string(g.t.l7Ig5Z),
    children: (0, r.jsx)("div", {
      className: m.grid,
      children: x.map(e => {
        var i;
        return (0, r.jsx)(b, {
          guildId: t.id,
          trait: null != (i = a[e]) ? i : f,
          index: e,
          onTraitUpdate: s,
          disabled: !n
        }, "trait-".concat(e))
      })
    })
  })
}