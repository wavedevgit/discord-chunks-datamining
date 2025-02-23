/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
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
  p = n(895924),
  _ = n(237375),
  h = n(342687),
  m = n(933557),
  g = n(471445),
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
  w = n(388032),
  D = n(953637);

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      x(e, t, n[t])
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

function k(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : M(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function j(e, t) {
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
let Z = o.createContext(null);
class F extends o.PureComponent {
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
    return (0, i.jsx)(d.P3F, k(L({}, e), {
      className: s()(D.clickable, r, n),
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
        className: D.base,
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
    super(e), x(this, "selectable", !0), x(this, "layoutClass", D.autocompleteRowVertical), x(this, "handleMouseEnter", () => {
      let {
        onHover: e,
        index: t,
        selected: n
      } = this.props;
      null == e || n || "number" != typeof t || e(t)
    }), x(this, "handleClick", e => {
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
class V extends F {
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
    className: D.base,
    "aria-busy": !0,
    children: (0, i.jsx)(C.RX, {
      children: (0, i.jsx)(C.z5, {
        children: (0, i.jsx)(C.BR, {
          children: (0, i.jsx)("div", {
            className: D.autocompletePlaceholder,
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
  } = e, a = o.useContext(Z);
  return (0, i.jsx)("div", {
    className: D.base,
    children: (0, i.jsxs)(d.X6q, {
      id: B(a.id),
      className: s()(D.contentTitle, n),
      variant: "heading-deprecated-12/semibold",
      children: [t, r]
    })
  })
}
class Y extends F {
  renderContent() {
    let {
      className: e
    } = this.props;
    return (0, i.jsx)("div", {
      className: s()(e, D.divider)
    })
  }
  constructor(...e) {
    super(...e), x(this, "layoutClass", D.dividerContainer), x(this, "selectable", !1)
  }
}
class K extends F {
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
          className: D.descriptionDiscriminator,
          children: ["#", t.discriminator]
        })]
      })]
    })
  }
}
class z extends F {
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
            className: D.roleDot,
            color: n,
            tooltip: !1
          }), (0, i.jsxs)("span", {
            style: o,
            children: ["@", e.name]
          })]
        })
      }), t ? null : (0, i.jsx)(C.dY, {
        children: w.NW.string(w.t["/91tbm"])
      })]
    })
  }
}
class q extends F {
  renderContent() {
    let {
      channel: e,
      category: t
    } = this.props, n = e.type === R.d4z.GUILD_CATEGORY ? d.ROc : (0, g.KS)(e);
    return (0, i.jsxs)(C.RX, {
      children: [null != n && (0, i.jsx)(C.Tw, {
        children: (0, i.jsx)(n, {
          className: D.icon
        })
      }), (0, i.jsx)(C.z5, {
        children: (0, i.jsx)(C.BR, {
          children: (0, m.F6)(e, T.default, I.Z)
        })
      }), null != t ? (0, i.jsx)(C.dY, {
        children: t.name
      }) : null]
    })
  }
}
class Q extends F {
  renderContent() {
    let {
      command: e
    } = this.props;
    return (0, i.jsxs)(C.RX, {
      children: [(0, i.jsx)(C.Tw, {
        children: (0, i.jsx)(d.XZC, {
          size: "xs",
          color: "currentColor",
          className: D.icon,
          colorClass: D.iconForeground
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
class X extends F {
  isSelectable() {
    return this.props.command.inputType !== p.iw.PLACEHOLDER
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
    return e.inputType === p.iw.PLACEHOLDER ? (0, i.jsx)(h.Z, {}) : (0, i.jsx)(_.Z, {
      command: e,
      channel: t,
      showImage: n,
      showOptions: a || s && o,
      section: r,
      isSelectable: s
    })
  }
}
class J extends F {
  renderContent() {
    let {
      emoji: e,
      sentinel: t,
      guild: n
    } = this.props, r = O.Yk.getSetting(), o = null != e.id || "" !== e.url ? (0, i.jsx)("img", {
      alt: "",
      className: D.emojiImage,
      src: null != e.id ? N.ZP.getEmojiURL({
        id: e.id,
        animated: e.animated && r,
        size: P.$U
      }) : e.url
    }) : (0, i.jsx)("span", {
      className: D.emojiRaw,
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
    super(...e), x(this, "layoutClass", s()(D.autocompleteRowVertical, D.autocompleteRowVerticalSmall))
  }
}
class $ extends F {
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
          children: w.NW.format(w.t.PAutaW, {
            queryMatch: r
          })
        })]
      }), null != n && (0, i.jsx)(C.dY, {
        children: n
      })]
    })
  }
  constructor(...e) {
    super(...e), x(this, "layoutClass", s()(D.autocompleteRowVertical, D.autocompleteRowVerticalSmall))
  }
}
class ee extends F {
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
    super(...e), x(this, "layoutClass", D.autocompleteRowHorizontal)
  }
}
class et extends F {
  renderContent() {
    return (0, i.jsx)(E.Z, {
      emojis: this.props.emojis
    })
  }
}
class en extends F {
  renderContent() {
    return (0, i.jsx)(v.Z, L({}, this.props))
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
      l = j(e, ["children", "className", "innerClassName", "id"]);
    return o.Children.count(t) > 0 ? (0, i.jsx)(Z.Provider, {
      value: {
        id: null != a ? a : ""
      },
      children: (0, i.jsx)("div", {
        className: s()(D.autocomplete, n),
        children: (0, i.jsx)("div", k(L({
          className: s()(D.autocompleteInner, r)
        }, l), {
          children: t
        }))
      })
    }) : null
  }
}
x(er, "Generic", V), x(er, "Loading", H), x(er, "Title", W), x(er, "Divider", Y), x(er, "User", K), x(er, "Role", z), x(er, "Channel", q), x(er, "Command", Q), x(er, "NewCommand", X), x(er, "Emoji", J), x(er, "GIFIntegration", ee), x(er, "Sticker", $), x(er, "EmojiUpsell", et), x(er, "Soundmoji", en);
let ei = er