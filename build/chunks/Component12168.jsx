/** Chunk was on web.js **/
/** chunk id: 12168, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x,
  u: () => D
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk636606 = require("./636606.js"),
  Chunk681715 = require("./681715.js"),
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
  Chunk339051 = require("./339051.js");

function S(e, t, n) {
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
      S(e, t, n[t])
    })
  }
  return e
}

function C(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let R = Chunk185923.Hz.CHAT,
  P = [Chunk633302.ZP.getByName("thumbsup"), Chunk633302.ZP.getByName("eyes"), Chunk633302.ZP.getByName("laughing"), Chunk633302.ZP.getByName("watermelon"), Chunk633302.ZP.getByName("fork_and_knife"), Chunk633302.ZP.getByName("yum")].filter(Chunk823379.lm);

function D(e) {
  let {
    emoji: t,
    isDisabled: n = false,
    onClick: a,
    className: s
  } = e, c = i.useRef(null), f = (0, _.X)(c);
  return (0, r.jsx)("span", {
    ref: c,
    children: (0, r.jsx)(u.P3F, {
      onClick: a,
      focusProps: {
        enabled: !n
      },
      children: (0, r.jsx)(u.AMe, {
        config: h.u,
        from: {
          value: 0
        },
        to: {
          value: +!!f
        },
        children: e => {
          let {
            value: i
          } = e;
          return (0, r.jsx)(l.animated.div, {
            style: {
              transform: i.to([0, 1], [1, 1.14]).to(e => "scale(".concat(e, ")"))
            },
            children: (0, r.jsx)(d.Z, {
              className: o()(T.emoji, s, {
                [T.emojiItemDisabled]: n
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
    children: [t, (0, r.jsx)(u.P3F, {
      className: T.dropDownContainer,
      onClick: () => {
        i(!n), a()
      },
      children: (0, r.jsx)(u.CJ0, {
        size: "md",
        color: "currentColor",
        className: o()(T.dropDown, {
          [T.dropDownOpen]: n
        })
      })
    })]
  })
}

function x(e) {
  let {
    channel: t,
    title: n,
    closePopout: a,
    onFocus: l,
    onSelectEmoji: d,
    onSelectDisabledEmoji: _,
    onExpandedToggle: h,
    emojiSearchProps: g,
    recentlyUsedEmojis: y,
    analyticsOverride: S,
    ref: C
  } = e, x = (0, f.Dt)(), [L, M] = i.useState(false), k = (0, p.wC)(t.guild_id), j = (0, s.uniqBy)([...k, ...P], "name").filter(e => !b.ZP.isEmojiFilteredOrLocked({
    emoji: e,
    channel: t,
    intention: R
  })).slice(0, O.e5);
  null != y && y.length > 0 && j.splice(j.length - 1, 1, y[0]);
  let U = e => {
      M(e), null == h || h(e)
    },
    G = e => {
      let {
        emoji: t,
        willClose: n
      } = e;
      if (null == t && n) return void a();
      null != t && d(t), U(!n), n && E.kJ.setSearchPlaceholder(null)
    },
    B = e => {
      null != e && e.key !== I.vn.TAB && (e.key !== I.vn.ENTER || e.shiftKey ? U(true) : U(!L))
    };
  return (0, r.jsxs)(u.VqE, {
    "aria-labelledby": x,
    ref: C,
    children: [(0, r.jsx)(u.y5t, {
      forceLevel: 2,
      children: (0, r.jsx)(u.nn4, {
        children: (0, r.jsx)(u.H, {
          id: x,
          children: n
        })
      })
    }), (0, r.jsxs)("div", {
      className: T.container,
      children: [(0, r.jsx)(m.Z, {
        analyticsOverride: S,
        channel: t,
        className: o()(T.animatedPicker, {
          [T.animatedPickerTall]: L
        }),
        headerClassName: o()(T.emojiPickerHeader, {
          [T.emojiPickerHeaderExpanded]: L
        }),
        closePopout: a,
        onSelectEmoji: L ? G : () => {},
        shouldHidePickerActions: !L,
        wrapper: "div",
        pickerIntention: R,
        searchProps: N(A({}, g), {
          accessory: (0, r.jsx)(w, {
            otherAccessories: null == g ? true : g.accessory,
            isEmojiPickerExpanded: L,
            onSetExpanded: U,
            onFocus: l
          }),
          onKeyDown: B
        })
      }), (0, r.jsx)("div", {
        className: T.slotsContainer,
        children: (0, r.jsx)("div", {
          className: o()(T.slots, T.slotsWide),
          children: j.map(e => {
            let n = b.ZP.isEmojiDisabled({
              emoji: e,
              channel: t,
              intention: v.Hz.CHAT
            });
            return (0, r.jsx)("div", {
              className: T.slot,
              children: (0, r.jsx)(c.u, {
                text: e.name,
                position: "top",
                asContainer: true,
                children: (0, r.jsx)(D, {
                  emoji: e,
                  isDisabled: n,
                  onClick: () => {
                    n ? null == _ || _(e) : G({
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