/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  DI: () => O,
  x3: () => I
}), n(47120), n(266796);
var r = n(200651),
  i = n(192379),
  s = n(512722),
  a = n.n(s),
  l = n(442837),
  o = n(481060),
  A = n(596454),
  c = n(600164),
  d = n(313201),
  u = n(318766),
  g = n(907040),
  f = n(339085),
  m = n(633302),
  p = n(984933),
  h = n(691886),
  C = n(185923),
  b = n(388032),
  v = n(790945);

function x(e) {
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

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function j(e) {
  let {
    guildId: t,
    emojiData: n,
    "aria-labelledby": s,
    onSelectEmoji: a
  } = e, c = (0, l.e7)([f.ZP], () => null != n.id ? f.ZP.getCustomEmojiById(n.id) : void 0), d = (0, l.e7)([p.ZP], () => p.ZP.getDefaultChannel(t)), h = i.useCallback(e => {
    let {
      closePopout: t
    } = e;
    return (0, r.jsx)(g.Z, {
      pickerIntention: C.Hz.GUILD_ROLE_BENEFIT_EMOJI,
      channel: d,
      closePopout: t,
      onNavigateAway: t,
      onSelectEmoji: (e, n) => {
        null != e && a(null != e.id ? {
          id: e.id,
          name: void 0
        } : {
          id: void 0,
          name: e.optionallyDiverseSequence
        }), n && t()
      }
    })
  }, [a, d]), j = i.useMemo(() => null == c && null == n.name ? null : function() {
    return (0, r.jsx)(A.Z, {
      className: v.emoji,
      emojiId: n.id,
      emojiName: n.name,
      animated: null == c ? void 0 : c.animated
    })
  }, [n, c]), E = "";
  return null != c ? E = ":".concat(c.name, ":") : null != n.name && (E = m.ZP.convertSurrogateToName(n.name)), (0, r.jsx)(o.yRy, {
    animation: o.yRy.Animation.NONE,
    position: "top",
    renderPopout: h,
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, r.jsxs)("div", N(x({
        className: v.emojiInputContainer
      }, e), {
        children: [(0, r.jsx)(u.Z, {
          className: v.emojiButton,
          active: n,
          tabIndex: 0,
          renderButtonContents: j
        }), (0, r.jsx)(o.oil, {
          inputClassName: v.emojiText,
          placeholder: b.NW.string(b.t.qJPLNT),
          value: E,
          "aria-labelledby": s,
          readOnly: !0
        })]
      }))
    }
  })
}

function E(e) {
  var t;
  let {
    guildId: n,
    initialData: s,
    benefitTypeInput: a,
    descriptionPlaceholder: l,
    canSubmit: A,
    onSave: u,
    onDelete: g,
    transitionState: f,
    onClose: m
  } = e, p = (0, d.Dt)(), h = (0, d.Dt)(), C = (0, d.Dt)(), [x, N] = i.useState(null !== (t = null == s ? void 0 : s.description) && void 0 !== t ? t : ""), [E, I] = i.useState(() => ({
    id: null == s ? void 0 : s.emoji_id,
    name: null == s ? void 0 : s.emoji_name
  })), O = A && "" !== x && (null != E.id || null != E.name);
  return (0, r.jsx)("form", {
    onSubmit: function(e) {
      e.preventDefault(), O && (u({
        description: x,
        emojiId: E.id,
        emojiName: E.name
      }), m())
    },
    children: (0, r.jsxs)(o.Y0X, {
      transitionState: f,
      "aria-labelledby": p,
      children: [(0, r.jsxs)(o.xBx, {
        children: [(0, r.jsx)(o.X6q, {
          id: p,
          variant: "heading-md/semibold",
          children: b.NW.string(b.t["2qf9EB"])
        }), (0, r.jsx)(o.olH, {
          className: v.closeButton,
          onClick: m
        })]
      }), (0, r.jsxs)(o.hzk, {
        className: v.modalContent,
        children: [a, (0, r.jsx)(o.LZC, {
          size: 24
        }), (0, r.jsx)(o.hjN, {
          title: b.NW.string(b.t["1Ts7QE"]),
          titleId: h,
          children: (0, r.jsx)(o.Kx8, {
            placeholder: l,
            value: x,
            rows: 1,
            autosize: !0,
            onChange: N,
            "aria-labelledby": h
          })
        }), (0, r.jsx)(o.LZC, {
          size: 24
        }), (0, r.jsx)(o.hjN, {
          title: b.NW.string(b.t.sMOuub),
          titleId: C,
          children: (0, r.jsx)(j, {
            guildId: n,
            emojiData: E,
            onSelectEmoji: I,
            "aria-labelledby": C
          })
        })]
      }), (0, r.jsxs)(o.mzw, {
        justify: c.Z.Justify.BETWEEN,
        children: [(0, r.jsxs)("div", {
          className: v.primaryButtons,
          children: [(0, r.jsx)(o.zxk, {
            type: "submit",
            disabled: !O,
            children: null == s ? b.NW.string(b.t.OYkgVl) : b.NW.string(b.t.R3BPHx)
          }), null != g && (0, r.jsx)(o.zxk, {
            look: o.zxk.Looks.BLANK,
            size: o.zxk.Sizes.ICON,
            className: v.deleteButton,
            onClick: () => {
              g(), m()
            },
            children: (0, r.jsx)(o.XHJ, {
              size: "md",
              color: "currentColor",
              "aria-label": b.NW.string(b.t.oyYWHB)
            })
          })]
        }), (0, r.jsx)(o.zxk, {
          look: o.zxk.Looks.LINK,
          color: o.zxk.Colors.PRIMARY,
          className: v.cancelButton,
          onClick: m,
          children: b.NW.string(b.t["ETE/oK"])
        })]
      })]
    })
  })
}

function I(e) {
  let {
    guildId: t,
    omitChannelIds: n,
    initialData: s,
    onSave: l,
    onDelete: A,
    transitionState: c,
    onClose: u
  } = e, [g, f] = i.useState(null == s ? void 0 : s.ref_id), m = (0, d.Dt)(), p = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.Wn, {
      messageType: o.QYI.WARNING,
      children: b.NW.string(b.t.xunxCg)
    }), (0, r.jsx)(o.LZC, {
      size: 24
    }), (0, r.jsx)(o.hjN, {
      title: b.NW.string(b.t.GK18KC),
      titleId: m,
      children: (0, r.jsx)(h.Z, {
        guildId: t,
        value: g,
        initialChannelId: null == s ? void 0 : s.ref_id,
        omitChannelIds: n,
        onChange: function(e) {
          f(e)
        },
        "aria-labelledby": m
      })
    })]
  });
  return (0, r.jsx)(E, {
    guildId: t,
    initialData: s,
    benefitTypeInput: p,
    descriptionPlaceholder: b.NW.string(b.t.J8O1Li),
    canSubmit: null != g,
    onSave: function(e) {
      a()(null != g, "Cannot submit null channel"), l(N(x({}, e), {
        channelId: g
      }))
    },
    transitionState: c,
    onClose: u,
    onDelete: A
  })
}

function O(e) {
  var t;
  let {
    initialData: n,
    onSave: s,
    transitionState: l,
    onClose: A,
    onDelete: c,
    guildId: u
  } = e, [g, f] = i.useState(null !== (t = null == n ? void 0 : n.name) && void 0 !== t ? t : ""), m = (0, d.Dt)(), p = (0, r.jsx)(o.hjN, {
    title: b.NW.string(b.t.NPOJra),
    titleId: m,
    children: (0, r.jsx)(o.Kx8, {
      placeholder: b.NW.string(b.t.NPOJra),
      value: g,
      rows: 1,
      onChange: function(e) {
        f(e)
      },
      "aria-labelledby": m
    })
  });
  return (0, r.jsx)(E, {
    guildId: u,
    initialData: n,
    benefitTypeInput: p,
    descriptionPlaceholder: b.NW.string(b.t.ucP4Tk),
    canSubmit: "" !== g,
    onSave: function(e) {
      a()("" !== g, "Cannot submit empty name"), s(N(x({}, e), {
        name: g
      }))
    },
    transitionState: l,
    onClose: A,
    onDelete: c
  })
}