/** Chunk was on 47841 **/
/** chunk id: 474215, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => j
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk375499 = require("./375499.jsx"),
  Chunk937773 = require("./937773.jsx"),
  Chunk690521 = require("./690521.js"),
  Chunk997509 = require("./997509.js"),
  Chunk307731 = require("./307731.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk200967 = require("./200967.js");

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

function b(e) {
  let {
    emoji: t,
    disabled: n,
    handleSelectEmoji: d
  } = e, g = i.useRef(null), m = i.useMemo(() => null == t || null == t.name ? null : function() {
    var e;
    let n = c.Ay.isCustomEmoji(t) ? t.name : t.surrogates;
    return (0, r.jsx)(s.A, {
      animated: null != (e = t.animated) && e,
      emojiId: t.id,
      emojiName: n
    })
  }, [t]);
  return n ? (0, r.jsx)(a.A, {
    tabIndex: false,
    active: false,
    renderButtonContents: m
  }) : (0, r.jsx)(l.YNO, {
    targetElementRef: g,
    position: "bottom",
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(o.A, {
        closePopout: t,
        onSelectEmoji: d(t),
        pickerIntention: u.b_.GUILD_PROFILE
      })
    },
    children: (e, t) => {
      var n, i;
      let {
        isShown: l
      } = t;
      return (0, r.jsx)(a.A, (n = p({}, e), i = i = {
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

function h(e) {
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
  }, [t, s, a]), g = i.useMemo(() => n.emoji, [n.emoji]), p = null != n.label && n.label.length > 0 || null != n.emoji;
  return (0, r.jsx)("div", {
    className: m.II,
    children: (0, r.jsx)(l.ksK, {
      disabled: o,
      value: n.label,
      onChange: u,
      maxLength: 24,
      leading: {
        type: "emoji",
        button: (0, r.jsx)(b, {
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
  } = e, s = i.useMemo(() => t.traits, [t]), a = i.useCallback((e, t, n) => {
    let r = [...s];
    r[t] = p({}, s[t], n), d.A.updateGuildProfile(e, {
      traits: r
    })
  }, [s]);
  return (0, r.jsx)(l.D0$, {
    label: g.intl.string(g.t.S6JNrh),
    description: g.intl.string(g.t.l7Ig5Z),
    children: (0, r.jsx)("div", {
      className: m.Vg,
      children: x.map(e => {
        var i;
        return (0, r.jsx)(h, {
          guildId: t.id,
          trait: null != (i = s[e]) ? i : f,
          index: e,
          onTraitUpdate: a,
          disabled: !n
        }, "trait-".concat(e))
      })
    })
  })
}