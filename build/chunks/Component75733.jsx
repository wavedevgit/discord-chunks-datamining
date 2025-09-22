/** Chunk was on 8106 **/
/** chunk id: 75733, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => v
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
  Chunk83552 = require("./83552.js"),
  Chunk270856 = require("./270856.js");

function f(e) {
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
let h = {
  label: ""
};

function b(e) {
  let {
    emoji: t,
    disabled: n,
    handleSelectEmoji: d
  } = e, m = i.useRef(null), g = i.useMemo(() => null == t || null == t.name ? null : function() {
    var e;
    let n = c.ZP.isCustomEmoji(t) ? t.name : t.surrogates;
    return (0, r.jsx)(s.Z, {
      animated: null != (e = t.animated) && e,
      emojiId: t.id,
      emojiName: n
    })
  }, [t]);
  return n ? (0, r.jsx)(a.Z, {
    tabIndex: false,
    active: false,
    renderButtonContents: g
  }) : (0, r.jsx)(l.yRy, {
    targetElementRef: m,
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
      return (0, r.jsx)(a.Z, (n = f({}, e), i = i = {
        ref: m,
        tabIndex: 0,
        active: l,
        renderButtonContents: g
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

function x(e) {
  let {
    guildId: t,
    trait: n,
    index: s,
    onTraitUpdate: a,
    disabled: o
  } = e, c = i.useCallback(() => {
    a(t, s, {
      emoji: true,
      label: ""
    })
  }, [t, s, a]), d = i.useCallback(e => n => {
    let {
      emoji: r,
      willClose: i
    } = n;
    a(t, s, {
      emoji: null != r ? r : true
    }), i && e()
  }, [t, s, a]), u = i.useCallback(e => {
    a(t, s, {
      label: e
    })
  }, [t, s, a]), m = i.useMemo(() => n.emoji, [n.emoji]), p = null != n.label && n.label.length > 0 || null != n.emoji;
  return (0, r.jsx)("div", {
    className: g.traitWrapper,
    children: (0, r.jsx)(l.oil, {
      disabled: o,
      value: n.label,
      onChange: u,
      maxLength: 24,
      leading: {
        type: "emoji",
        button: (0, r.jsx)(b, {
          emoji: m,
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
let j = [0, 1, 2, 3, 4];

function v(e) {
  let {
    profile: t,
    canManageGuild: n
  } = e, s = i.useMemo(() => t.traits, [t]), a = i.useCallback((e, t, n) => {
    let r = [...s];
    r[t] = f({}, s[t], n), d.Z.updateGuildProfile(e, {
      traits: r
    })
  }, [s]);
  return (0, r.jsxs)(l.hjN, {
    className: p.section,
    children: [(0, r.jsxs)("div", {
      className: p.sectionHeader,
      children: [(0, r.jsx)(l.vwX, {
        children: m.intl.string(m.t.S6JNrq)
      }), (0, r.jsx)(l.R94, {
        type: "description",
        children: m.intl.string(m.t.l7Ig5e)
      })]
    }), (0, r.jsx)("div", {
      className: g.grid,
      children: j.map(e => {
        var i;
        return (0, r.jsx)(x, {
          guildId: t.id,
          trait: null != (i = s[e]) ? i : h,
          index: e,
          onTraitUpdate: a,
          disabled: !n
        }, "trait-".concat(e))
      })
    })]
  })
}