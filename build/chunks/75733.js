/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => j
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(481060),
  o = n(596454),
  A = n(225433),
  c = n(318766),
  d = n(907040),
  u = n(273039),
  g = n(176354),
  f = n(434404),
  m = n(185923),
  p = n(388032),
  h = n(501968),
  C = n(659116);

function b(e) {
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
}
let v = {
  label: ""
};

function x(e) {
  let {
    guildId: t,
    trait: n,
    index: s,
    onTraitUpdate: f,
    disabled: p
  } = e, C = i.useCallback(() => {
    f(t, s, {
      emoji: void 0
    })
  }, [t, s, f]), v = i.useCallback(e => (n, r) => {
    f(t, s, {
      emoji: null != n ? n : void 0
    }), r && e()
  }, [t, s, f]), x = i.useMemo(() => {
    let e = n.emoji,
      t = null == e || null == e.name ? null : () => {
        var t;
        let n = g.ZP.isCustomEmoji(e) ? e.name : e.surrogates;
        return (0, r.jsx)(o.Z, {
          animated: null !== (t = e.animated) && void 0 !== t && t,
          emojiId: e.id,
          emojiName: n
        })
      };
    return p ? (0, r.jsx)(c.Z, {
      tabIndex: -1,
      active: !1,
      renderButtonContents: t
    }) : (0, r.jsx)(u.Z, {
      className: h.emojiWrapper,
      buttonClassName: h.removeButton,
      look: A.Z.Looks.FILLED,
      hasSetEmoji: null != e && null != e.name,
      onClick: C,
      children: (0, r.jsx)(l.yRy, {
        position: "bottom",
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, r.jsx)(d.Z, {
            closePopout: t,
            onSelectEmoji: v(t),
            pickerIntention: m.Hz.GUILD_PROFILE
          })
        },
        children: (e, n) => {
          var i, s;
          let {
            isShown: a
          } = n;
          return (0, r.jsx)(c.Z, (i = b({}, e), s = s = {
            tabIndex: 0,
            active: a,
            renderButtonContents: t
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(s)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
          }), i))
        }
      })
    })
  }, [n.emoji, p, C, v]), [N, j] = i.useState(!1), E = i.useCallback(() => j(!0), []), I = i.useCallback(() => j(!1), []), O = i.useCallback(e => {
    f(t, s, {
      label: e
    })
  }, [t, s, f]);
  return (0, r.jsx)(l.oil, {
    "aria-disabled": p,
    disabled: p,
    value: n.label,
    onChange: O,
    maxLength: 24,
    prefixElement: x,
    className: a()(h.traitContainer, {
      [h.traitContainerFocused]: N
    }),
    inputClassName: h.traitInput,
    onFocus: E,
    onBlur: I
  })
}
let N = [0, 1, 2, 3, 4];

function j(e) {
  let {
    profile: t,
    canManageGuild: n
  } = e, s = i.useMemo(() => t.traits, [t]), a = i.useCallback((e, t, n) => {
    let r = [...s];
    r[t] = b({}, s[t], n), f.Z.updateGuildProfile(e, {
      traits: r
    })
  }, [s]);
  return (0, r.jsxs)(l.hjN, {
    className: C.section,
    children: [(0, r.jsxs)("div", {
      className: C.sectionHeader,
      children: [(0, r.jsx)(l.vwX, {
        children: p.NW.string(p.t.S6JNrq)
      }), (0, r.jsx)(l.R94, {
        type: "description",
        children: p.NW.string(p.t.l7Ig5e)
      })]
    }), (0, r.jsx)("div", {
      className: h.grid,
      children: N.map(e => {
        var i;
        return (0, r.jsx)(x, {
          guildId: t.id,
          trait: null !== (i = s[e]) && void 0 !== i ? i : v,
          index: e,
          onTraitUpdate: a,
          disabled: !n
        }, "trait-".concat(e))
      })
    })]
  })
}