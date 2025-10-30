/** Chunk was on web.js **/
/** chunk id: 12168, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D,
  u: () => P
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk13941 = require("./13941.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk104505 = require("./104505.js"),
  Chunk543241 = require("./543241.js"),
  Chunk318766 = require("./318766.jsx"),
  Chunk907040 = require("./907040.jsx"),
  Chunk633302 = require("./633302.js"),
  Chunk806966 = require("./806966.js"),
  Chunk176354 = require("./176354.js"),
  Chunk823379 = require("./823379.js"),
  Chunk354459 = require("./354459.js"),
  Chunk185923 = require("./185923.js"),
  Chunk295907 = require("./295907.js"),
  Chunk378158 = require("./378158.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let N = Chunk185923.Hz.CHAT,
  R = [Chunk633302.ZP.getByName("thumbsup"), Chunk633302.ZP.getByName("eyes"), Chunk633302.ZP.getByName("laughing"), Chunk633302.ZP.getByName("watermelon"), Chunk633302.ZP.getByName("fork_and_knife"), Chunk633302.ZP.getByName("yum")].filter(Chunk823379.lm);

function P(e) {
  let {
    emoji: t,
    isDisabled: n = false,
    onClick: a,
    className: s
  } = e, d = i.useRef(null), _ = (0, f.X)(d);
  return (0, r.jsx)("span", {
    ref: d,
    children: (0, r.jsx)(c.P3F, {
      onClick: a,
      focusProps: {
        enabled: !n
      },
      children: (0, r.jsx)(c.AMe, {
        config: p.u,
        from: {
          value: 0
        },
        to: {
          value: +!!_
        },
        children: e => {
          let {
            value: i
          } = e;
          return (0, r.jsx)(l.animated.div, {
            style: {
              transform: i.to([0, 1], [1, 1.14]).to(e => "scale(".concat(e, ")"))
            },
            children: (0, r.jsx)(u.Z, {
              className: o()(I.emoji, s, {
                [I.emojiItemDisabled]: n
              }),
              emojiId: t.id,
              emojiName: null == t ? true : t.surrogates,
              animated: t.animated
            })
          })
        }
      })
    })
  })
}

function w(e) {
  let {
    otherAccessories: t,
    isEmojiPickerExpanded: n,
    onSetExpanded: i,
    onFocus: a
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [t, (0, r.jsx)(c.P3F, {
      className: I.dropDownContainer,
      onClick: () => {
        i(!n), a()
      },
      children: (0, r.jsx)(c.CJ0, {
        size: "md",
        color: "currentColor",
        className: o()(I.dropDown, {
          [I.dropDownOpen]: n
        })
      })
    })]
  })
}

function D(e) {
  let {
    channel: t,
    title: n,
    closePopout: a,
    onFocus: l,
    onSelectEmoji: u,
    onSelectDisabledEmoji: f,
    onExpandedToggle: p,
    emojiSearchProps: m,
    recentlyUsedEmojis: b,
    analyticsOverride: T,
    ref: A
  } = e, D = (0, d.Dt)(), [x, L] = i.useState(false), M = (0, _.wC)(t.guild_id), k = (0, s.uniqBy)([...M, ...R], "name").filter(e => !E.ZP.isEmojiFilteredOrLocked({
    emoji: e,
    channel: t,
    intention: N
  })).slice(0, y.e5);
  null != b && b.length > 0 && k.splice(k.length - 1, 1, b[0]);
  let j = e => {
      L(e), null == p || p(e)
    },
    U = e => {
      let {
        emoji: t,
        willClose: n
      } = e;
      if (null == t && n) return void a();
      null != t && u(t), j(!n), n && g.kJ.setSearchPlaceholder(null)
    },
    G = e => {
      null != e && e.key !== v.vn.TAB && (e.key !== v.vn.ENTER || e.shiftKey ? j(true) : j(!x))
    };
  return (0, r.jsxs)(c.VqE, {
    "aria-labelledby": D,
    ref: A,
    children: [(0, r.jsx)(c.y5t, {
      forceLevel: 2,
      children: (0, r.jsx)(c.nn4, {
        children: (0, r.jsx)(c.H, {
          id: D,
          children: n
        })
      })
    }), (0, r.jsxs)("div", {
      className: I.container,
      children: [(0, r.jsx)(h.Z, {
        analyticsOverride: T,
        channel: t,
        className: o()(I.animatedPicker, {
          [I.animatedPickerTall]: x
        }),
        headerClassName: o()(I.emojiPickerHeader, {
          [I.emojiPickerHeaderExpanded]: x
        }),
        closePopout: a,
        onSelectEmoji: x ? U : () => {},
        shouldHidePickerActions: !x,
        wrapper: "div",
        pickerIntention: N,
        searchProps: C(S({}, m), {
          accessory: (0, r.jsx)(w, {
            otherAccessories: null == m ? true : m.accessory,
            isEmojiPickerExpanded: x,
            onSetExpanded: j,
            onFocus: l
          }),
          onKeyDown: G
        })
      }), (0, r.jsx)("div", {
        className: I.slotsContainer,
        children: (0, r.jsx)("div", {
          className: o()(I.slots, I.slotsWide),
          children: k.map(e => {
            let n = E.ZP.isEmojiDisabled({
              emoji: e,
              channel: t,
              intention: O.Hz.CHAT
            });
            return (0, r.jsx)("div", {
              className: I.slot,
              children: (0, r.jsx)(c.jSM, {
                text: e.name,
                position: "top",
                "aria-label": e.name,
                tooltipClassName: I.tooltipContainer,
                color: c.aML.Colors.BRAND,
                children: (0, r.jsx)(P, {
                  emoji: e,
                  isDisabled: n,
                  onClick: () => {
                    n ? null == f || f(e) : U({
                      emoji: e,
                      willClose: true
                    })
                  }
                })
              })
            }, e.name)
          })
        })
      })]
    })]
  })
}