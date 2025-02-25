/** Chunk was on web.js **/
"use strict";
n.d(t, {
  DJ: () => G,
  ZP: () => ei,
  rp: () => B
}), n(411104), n(266796), n(47120);
var r, i = n(200651),
  o = n(192379),
  a = n(120356),
  s = n.n(a),
  l = n(392711),
  c = n.n(l),
  u = n(91192),
  d = n(481060),
  f = n(607070),
  _ = n(895924),
  p = n(237375),
  h = n(342687),
  g = n(933557),
  m = n(471445),
  E = n(511618),
  v = n(887120),
  b = n(926491),
  y = n(378233),
  O = n(695346),
  S = n(430824),
  I = n(699516),
  T = n(594174),
  N = n(768581),
  A = n(51144),
  C = n(965386),
  R = n(981631),
  P = n(185923),
  D = n(388032),
  w = n(953637);

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      L(e, t, n[t])
    })
  }
  return e
}

function M(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : M(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function k(e, t) {
  if (null == e) return {};
  var n, r, i = U(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function U(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function G(e) {
  return null != e ? "autocomplete-".concat(e) : null
}

function B(e) {
  return "autocomplete-".concat(e, "-title")
}
let F = o.createContext(null);
class V extends o.PureComponent {
  isSelectable() {
    return this.selectable
  }
  renderContent() {
    throw Error("AutocompleteRow: renderContent must be extended")
  }
  renderClickable(e) {
    var t;
    let {
      layoutClass: n,
      props: {
        className: r,
        index: o,
        selected: a
      }
    } = this, l = this.isSelectable();
    return (0, i.jsx)(d.P3F, j(x({}, e), {
      className: s()(w.clickable, r, n),
      id: null !== (t = G(o)) && void 0 !== t ? t : void 0,
      onClick: l ? this.handleClick : void 0,
      onMouseMove: l ? () => {
        this.setState({
          hovered: !0
        }), this.handleMouseEnter()
      } : void 0,
      onMouseLeave: l ? () => this.setState({
        hovered: !1
      }) : void 0,
      role: "option",
      "aria-disabled": !l,
      "aria-selected": l && a,
      children: (0, i.jsx)("div", {
        className: w.base,
        children: this.renderContent()
      })
    }))
  }
  render() {
    let {
      index: e
    } = this.props;
    return this.isSelectable() ? (0, i.jsx)(u.mh, {
      id: "".concat(e),
      children: e => this.renderClickable(e)
    }) : this.renderClickable()
  }
  constructor(e) {
    super(e), L(this, "selectable", !0), L(this, "layoutClass", w.autocompleteRowVertical), L(this, "handleMouseEnter", () => {
      let {
        onHover: e,
        index: t,
        selected: n
      } = this.props;
      null == e || n || "number" != typeof t || e(t)
    }), L(this, "handleClick", e => {
      let {
        onClick: t,
        index: n
      } = this.props;
      null != t && "number" == typeof n && t(n, e)
    }), this.state = {
      hovered: !1
    }
  }
}
class Z extends V {
  renderContent() {
    let {
      text: e,
      description: t
    } = this.props;
    return (0, i.jsxs)(C.RX, {
      children: [(0, i.jsx)(C.z5, {
        children: (0, i.jsx)(C.BR, {
          children: e
        })
      }), null != t ? (0, i.jsx)(C.dY, {
        children: t
      }) : null]
    })
  }
}

function H(e) {
  let t = o.useMemo(() => c().random(60, 120), []);
  return (0, i.jsx)("div", {
    className: w.base,
    "aria-busy": !0,
    children: (0, i.jsx)(C.RX, {
      children: (0, i.jsx)(C.z5, {
        children: (0, i.jsx)(C.BR, {
          children: (0, i.jsx)("div", {
            className: w.autocompletePlaceholder,
            style: {
              width: t
            }
          })
        })
      })
    })
  })
}

function W(e) {
  let {
    title: t,
    className: n,
    children: r
  } = e, a = o.useContext(F);
  return (0, i.jsx)("div", {
    className: w.base,
    children: (0, i.jsxs)(d.X6q, {
      id: B(a.id),
      className: s()(w.contentTitle, n),
      variant: "heading-deprecated-12/semibold",
      children: [t, r]
    })
  })
}
class Y extends V {
  renderContent() {
    let {
      className: e
    } = this.props;
    return (0, i.jsx)("div", {
      className: s()(e, w.divider)
    })
  }
  constructor(...e) {
    super(...e), L(this, "layoutClass", w.dividerContainer), L(this, "selectable", !1)
  }
}
class K extends V {
  renderContent() {
    var e;
    let {
      user: t,
      nick: n,
      status: r,
      hidePersonalInformation: o,
      guildId: a
    } = this.props, s = null == a ? I.Z.getNickname(t.id) : null;
    return (0, i.jsxs)(C.RX, {
      children: [(0, i.jsx)(C.Tw, {
        children: (0, i.jsx)(d.qEK, {
          size: d.EFr.SIZE_24,
          src: t.getAvatarURL(a, 24),
          "aria-hidden": !0,
          status: r
        })
      }), (0, i.jsx)(C.z5, {
        children: (0, i.jsx)(C.BR, {
          children: null !== (e = null != n ? n : s) && void 0 !== e ? e : A.ZP.getName(t)
        })
      }), (0, i.jsxs)(C.dY, {
        children: [A.ZP.getUserTag(t, {
          mode: "username",
          identifiable: o ? "never" : "always"
        }), o || t.isPomelo() ? null : (0, i.jsxs)("span", {
          className: w.descriptionDiscriminator,
          children: ["#", t.discriminator]
        })]
      })]
    })
  }
}
class z extends V {
  renderContent() {
    let {
      role: e,
      hideDescription: t
    } = this.props, {
      colorString: n
    } = e, r = "dot" === f.Z.roleStyle, o = "username" === f.Z.roleStyle && null != n ? {
      color: n
    } : void 0;
    return (0, i.jsxs)(C.RX, {
      children: [(0, i.jsx)(C.z5, {
        children: (0, i.jsxs)(C.BR, {
          children: [r && (0, i.jsx)(d.FhE, {
            className: w.roleDot,
            color: n,
            tooltip: !1
          }), (0, i.jsxs)("span", {
            style: o,
            children: ["@", e.name]
          })]
        })
      }), t ? null : (0, i.jsx)(C.dY, {
        children: D.NW.string(D.t["/91tbm"])
      })]
    })
  }
}
class q extends V {
  renderContent() {
    let {
      channel: e,
      category: t
    } = this.props, n = e.type === R.d4z.GUILD_CATEGORY ? d.ROc : (0, m.KS)(e);
    return (0, i.jsxs)(C.RX, {
      children: [null != n && (0, i.jsx)(C.Tw, {
        children: (0, i.jsx)(n, {
          className: w.icon
        })
      }), (0, i.jsx)(C.z5, {
        children: (0, i.jsx)(C.BR, {
          children: (0, g.F6)(e, T.default, I.Z)
        })
      }), null != t ? (0, i.jsx)(C.dY, {
        children: t.name
      }) : null]
    })
  }
}
class Q extends V {
  renderContent() {
    let {
      command: e
    } = this.props;
    return (0, i.jsxs)(C.RX, {
      children: [(0, i.jsx)(C.Tw, {
        children: (0, i.jsx)(d.XZC, {
          size: "xs",
          color: "currentColor",
          className: w.icon,
          colorClass: w.iconForeground
        })
      }), (0, i.jsx)(C.z5, {
        children: (0, i.jsx)(C.BR, {
          children: e.displayName
        })
      }), (0, i.jsx)(C.dY, {
        children: e.displayDescription
      })]
    })
  }
}
class X extends V {
  isSelectable() {
    return this.props.command.inputType !== _.iw.PLACEHOLDER
  }
  renderContent() {
    let {
      command: e,
      channel: t,
      showImage: n,
      section: r,
      selected: o
    } = this.props, {
      hovered: a
    } = this.state, s = this.isSelectable();
    return e.inputType === _.iw.PLACEHOLDER ? (0, i.jsx)(h.Z, {}) : (0, i.jsx)(p.Z, {
      command: e,
      channel: t,
      showImage: n,
      showOptions: a || s && o,
      section: r,
      isSelectable: s
    })
  }
}
class J extends V {
  renderContent() {
    let {
      emoji: e,
      sentinel: t,
      guild: n
    } = this.props, r = O.Yk.getSetting(), o = null != e.id || "" !== e.url ? (0, i.jsx)("img", {
      alt: "",
      className: w.emojiImage,
      src: null != e.id ? N.ZP.getEmojiURL({
        id: e.id,
        animated: e.animated && r,
        size: P.$U
      }) : e.url
    }) : (0, i.jsx)("span", {
      className: w.emojiRaw,
      children: e.surrogates
    }), a = null != n ? (0, i.jsx)(C.dY, {
      children: n.name
    }) : null;
    return (0, i.jsxs)(C.RX, {
      children: [(0, i.jsx)(C.Tw, {
        children: o
      }), (0, i.jsx)(C.z5, {
        children: (0, i.jsxs)(C.BR, {
          children: [t, e.name, t]
        })
      }), a]
    })
  }
  constructor(...e) {
    super(...e), L(this, "layoutClass", s()(w.autocompleteRowVertical, w.autocompleteRowVerticalSmall))
  }
}
class $ extends V {
  renderContent() {
    var e, t;
    let n;
    let {
      queryMatch: r,
      renderSticker: o,
      selected: a,
      sticker: s
    } = this.props, {
      hovered: l
    } = this.state;
    return (0, y.jl)(s) ? n = null === (e = b.Z.getStickerPack(s.pack_id)) || void 0 === e ? void 0 : e.name : (0, y.J8)(s) && (n = null === (t = S.Z.getGuild(s.guild_id)) || void 0 === t ? void 0 : t.name), (0, i.jsxs)(C.RX, {
      children: [(0, i.jsx)(C.Tw, {
        children: o(s, l || !0 === a)
      }), (0, i.jsxs)(C.z5, {
        children: [(0, i.jsx)(C.BR, {
          children: s.name
        }), null != r && (0, i.jsx)(C.wL, {
          children: D.NW.format(D.t.PAutaW, {
            queryMatch: r
          })
        })]
      }), null != n && (0, i.jsx)(C.dY, {
        children: n
      })]
    })
  }
  constructor(...e) {
    super(...e), L(this, "layoutClass", s()(w.autocompleteRowVertical, w.autocompleteRowVerticalSmall))
  }
}
class ee extends V {
  renderContent() {
    let {
      width: e,
      height: t,
      src: n
    } = this.props;
    return (0, i.jsx)("img", {
      alt: "",
      src: n,
      width: e,
      height: t
    })
  }
  constructor(...e) {
    super(...e), L(this, "layoutClass", w.autocompleteRowHorizontal)
  }
}
class et extends V {
  renderContent() {
    return (0, i.jsx)(E.Z, {
      emojis: this.props.emojis
    })
  }
}
class en extends V {
  renderContent() {
    return (0, i.jsx)(v.Z, x({}, this.props))
  }
}
class er extends(r = o.PureComponent) {
  render() {
    let e = this.props,
      {
        children: t,
        className: n,
        innerClassName: r,
        id: a
      } = e,
      l = k(e, ["children", "className", "innerClassName", "id"]);
    return o.Children.count(t) > 0 ? (0, i.jsx)(F.Provider, {
      value: {
        id: null != a ? a : ""
      },
      children: (0, i.jsx)("div", {
        className: s()(w.autocomplete, n),
        children: (0, i.jsx)("div", j(x({
          className: s()(w.autocompleteInner, r)
        }, l), {
          children: t
        }))
      })
    }) : null
  }
}
L(er, "Generic", Z), L(er, "Loading", H), L(er, "Title", W), L(er, "Divider", Y), L(er, "User", K), L(er, "Role", z), L(er, "Channel", q), L(er, "Command", Q), L(er, "NewCommand", X), L(er, "Emoji", J), L(er, "GIFIntegration", ee), L(er, "Sticker", $), L(er, "EmojiUpsell", et), L(er, "Soundmoji", en);
let ei = er