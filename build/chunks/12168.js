/** Chunk was on 14093 **/
n.d(t, {
  Z: () => E,
  u: () => I
}), n(47120);
var r = n(200651),
  l = n(192379),
  a = n(120356),
  i = n.n(a),
  o = n(392711),
  s = n(642128),
  c = n(481060),
  u = n(596454),
  d = n(727637),
  m = n(313201),
  p = n(543241),
  h = n(318766),
  f = n(907040),
  g = n(633302),
  x = n(806966),
  v = n(176354),
  y = n(823379),
  j = n(354459),
  P = n(185923),
  O = n(420212),
  b = n(504779);
let C = P.Hz.CHAT,
  N = [g.ZP.getByName("thumbsup"), g.ZP.getByName("eyes"), g.ZP.getByName("laughing"), g.ZP.getByName("watermelon"), g.ZP.getByName("fork_and_knife"), g.ZP.getByName("yum")].filter(y.lm);

function I(e) {
  let {
    emoji: t,
    isDisabled: n = !1,
    onClick: a,
    className: o
  } = e, m = l.useRef(null), p = (0, d.Z)(m);
  return (0, r.jsx)("span", {
    ref: m,
    children: (0, r.jsx)(c.zxk, {
      onClick: a,
      look: c.zxk.Looks.BLANK,
      size: c.zxk.Sizes.NONE,
      focusProps: {
        enabled: !n
      },
      children: (0, r.jsx)(c.AMe, {
        config: h.u,
        from: {
          value: 0
        },
        to: {
          value: +!!p
        },
        children: e => {
          let {
            value: l
          } = e;
          return (0, r.jsx)(s.animated.div, {
            style: {
              transform: l.to([0, 1], [1, 1.14]).to(e => "scale(".concat(e, ")"))
            },
            children: (0, r.jsx)(u.Z, {
              className: i()(b.emoji, o, {
                [b.emojiItemDisabled]: n
              }),
              emojiId: t.id,
              emojiName: null == t ? void 0 : t.surrogates,
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
    onSetExpanded: l,
    onFocus: a
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [t, (0, r.jsx)(c.P3F, {
      className: b.dropDownContainer,
      onClick: () => {
        l(!n), a()
      },
      children: (0, r.jsx)(c.CJ0, {
        size: "md",
        color: "currentColor",
        className: i()(b.dropDown, {
          [b.dropDownOpen]: n
        })
      })
    })]
  })
}

function E(e) {
  var t, n;
  let {
    channel: a,
    title: s,
    closePopout: u,
    onFocus: d,
    onSelectEmoji: h,
    onSelectDisabledEmoji: g,
    onExpandedToggle: y,
    emojiSearchProps: E,
    recentlyUsedEmojis: Z,
    analyticsOverride: S
  } = e, T = (0, m.Dt)(), [A, _] = l.useState(!1), k = (0, p.wC)(a.guild_id), R = (0, o.uniqBy)([...k, ...N], "name").filter(e => !v.ZP.isEmojiFilteredOrLocked({
    emoji: e,
    channel: a,
    intention: C
  })).slice(0, j.e5);
  null != Z && Z.length > 0 && R.splice(R.length - 1, 1, Z[0]);
  let D = e => {
      _(e), null == y || y(e)
    },
    M = (e, t) => {
      if (null == e && t) {
        u();
        return
      }
      null != e && h(e), D(!t), t && x.kJ.setSearchPlaceholder(null)
    };
  return (0, r.jsxs)(c.VqE, {
    "aria-labelledby": T,
    children: [(0, r.jsx)(c.y5t, {
      forceLevel: 2,
      children: (0, r.jsx)(c.nn4, {
        children: (0, r.jsx)(c.H, {
          id: T,
          children: s
        })
      })
    }), (0, r.jsxs)("div", {
      className: b.container,
      children: [(0, r.jsx)(f.Z, {
        analyticsOverride: S,
        channel: a,
        className: i()(b.animatedPicker, {
          [b.animatedPickerTall]: A
        }),
        headerClassName: i()(b.emojiPickerHeader, {
          [b.emojiPickerHeaderExpanded]: A
        }),
        closePopout: u,
        onSelectEmoji: A ? M : () => {},
        shouldHidePickerActions: !A,
        wrapper: "div",
        pickerIntention: C,
        searchProps: (t = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[t] = r
            })
          }
          return e
        }({}, E), n = n = {
          accessory: (0, r.jsx)(w, {
            otherAccessories: null == E ? void 0 : E.accessory,
            isEmojiPickerExpanded: A,
            onSetExpanded: D,
            onFocus: d
          }),
          onKeyDown: e => {
            null != e && e.key !== O.vn.TAB && (e.key !== O.vn.ENTER || e.shiftKey ? D(!0) : D(!A))
          }
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t)
      }), (0, r.jsx)("div", {
        className: b.slotsContainer,
        children: (0, r.jsx)("div", {
          className: i()(b.slots, b.slotsWide),
          children: R.map(e => {
            let t = v.ZP.isEmojiDisabled({
              emoji: e,
              channel: a,
              intention: P.Hz.CHAT
            });
            return (0, r.jsx)("div", {
              className: b.slot,
              children: (0, r.jsx)(c.DY3, {
                text: e.name,
                position: "top",
                "aria-label": e.name,
                tooltipClassName: b.tooltipContainer,
                color: c.ua7.Colors.BRAND,
                children: (0, r.jsx)(I, {
                  emoji: e,
                  isDisabled: t,
                  onClick: () => {
                    t ? null == g || g(e) : M(e, !0)
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