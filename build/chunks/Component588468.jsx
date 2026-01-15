/** Chunk was on web.js **/
/** chunk id: 588468, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DJ: () => B,
  ZP: () => eu,
  rp: () => V
}), require("./415506.js"), require("./953529.js"), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  c = require.n(Chunk392711),
  Chunk91192 = require("./91192.jsx"),
  Chunk313666 = require("./313666.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk895924 = require("./895924.js"),
  Chunk237375 = require("./237375.jsx"),
  Chunk342687 = require("./342687.jsx"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk203247 = require("./203247.jsx"),
  Chunk285063 = require("./285063.jsx"),
  Chunk884902 = require("./884902.js"),
  Chunk887120 = require("./887120.jsx"),
  Chunk926491 = require("./926491.js"),
  Chunk378233 = require("./378233.js"),
  Chunk695346 = require("./695346.js"),
  Chunk430824 = require("./430824.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk51144 = require("./51144.js"),
  Chunk965386 = require("./965386.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk962051 = require("./962051.js");

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      M(e, t, n[t])
    })
  }
  return e
}

function U(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function G(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : U(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function Z(e, t) {
  if (null == e) return {};
  var n, r, i = F(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function F(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function B(e) {
  return null != e ? "autocomplete-".concat(e) : null
}

function V(e) {
  return "autocomplete-".concat(e, "-title")
}
let H = Chunk473749.createContext(null);
class Y extends Chunk473749.PureComponent {
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
        index: a,
        selected: o
      }
    } = this, l = this.isSelectable();
    return (0, i.jsx)(f.P3F, G(k({}, e), {
      className: s()(j.clickable, r, n),
      id: null != (t = B(a)) ? t : true,
      onClick: l ? this.handleClick : true,
      onMouseMove: l ? () => {
        this.setState({
          hovered: true
        }), this.handleMouseEnter()
      } : true,
      onMouseLeave: l ? () => this.setState({
        hovered: false
      }) : true,
      role: "option",
      "aria-disabled": !l,
      "aria-selected": l && o,
      children: (0, i.jsx)("div", {
        className: j.base,
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
    super(e), M(this, "selectable", true), M(this, "layoutClass", j.autocompleteRowVertical), M(this, "handleMouseEnter", () => {
      let {
        onHover: e,
        index: t,
        selected: n
      } = this.props;
      null == e || n || "number" != typeof t || e(t)
    }), M(this, "handleClick", e => {
      let {
        onClick: t,
        index: n
      } = this.props;
      null != t && "number" == typeof n && t(n, e)
    }), this.state = {
      hovered: false
    }
  }
}
class W extends Y {
  renderContent() {
    let {
      text: e,
      description: t,
      badge: n
    } = this.props;
    return (0, i.jsxs)(R.RX, {
      children: [(0, i.jsx)(R.z5, {
        children: (0, i.jsxs)(R.BR, {
          children: [e, " ", null != n && (0, i.jsx)(d.C, {
            type: n
          })]
        })
      }), null != t ? (0, i.jsx)(R.dY, {
        children: t
      }) : null]
    })
  }
}

function K(e) {
  let t = a.useMemo(() => c().random(60, 120), []);
  return (0, i.jsx)("div", {
    className: j.base,
    "aria-busy": true,
    children: (0, i.jsx)(R.RX, {
      children: (0, i.jsx)(R.z5, {
        children: (0, i.jsx)(R.BR, {
          children: (0, i.jsx)("div", {
            className: j.autocompletePlaceholder,
            style: {
              width: t
            }
          })
        })
      })
    })
  })
}

function z(e) {
  let {
    title: t,
    className: n,
    children: r
  } = e, o = a.useContext(H);
  return (0, i.jsx)("div", {
    className: j.base,
    children: (0, i.jsxs)(f.Heading, {
      id: V(o.id),
      className: s()(j.contentTitle, n),
      variant: "heading-deprecated-12/semibold",
      children: [t, r]
    })
  })
}
class q extends Y {
  renderContent() {
    let {
      className: e
    } = this.props;
    return (0, i.jsx)("div", {
      className: s()(e, j.divider)
    })
  }
  constructor(...e) {
    super(...e), M(this, "layoutClass", j.dividerContainer), M(this, "selectable", false)
  }
}
class Q extends Y {
  renderContent() {
    var e;
    let {
      user: t,
      nick: n,
      status: r,
      hidePersonalInformation: a,
      guildId: o
    } = this.props, s = null == o ? A.Z.getNickname(t.id) : null;
    return (0, i.jsxs)(R.RX, {
      children: [(0, i.jsx)(R.Tw, {
        children: (0, i.jsx)(f.qEK, {
          size: f.EFr.SIZE_24,
          src: t.getAvatarURL(o, 24),
          "aria-hidden": true,
          status: r
        })
      }), (0, i.jsx)(R.z5, {
        children: (0, i.jsx)(R.BR, {
          children: null != (e = null != n ? n : s) ? e : w.ZP.getName(t)
        })
      }), (0, i.jsxs)(R.dY, {
        children: [w.ZP.getUserTag(t, {
          mode: "username",
          identifiable: a ? "never" : "always"
        }), a || t.hasUniqueUsername() ? null : (0, i.jsxs)("span", {
          className: j.descriptionDiscriminator,
          children: ["#", t.discriminator]
        })]
      })]
    })
  }
}
class X extends Y {
  renderContent() {
    var e;
    let {
      user: t,
      nick: n,
      comparator: r,
      status: a,
      hidePersonalInformation: o,
      guildId: l,
      selected: c,
      layout: u = "horizontal"
    } = this.props, d = null == l ? A.Z.getNickname(t.id) : null, p = null != (e = null != n ? n : d) ? e : w.ZP.getName(t);
    return (0, i.jsxs)(R.RX, {
      className: s()({
        [j.verticalLayout]: "vertical-suggestion" === u
      }),
      children: [(0, i.jsx)(R.Tw, {
        children: (0, i.jsx)(f.qEK, {
          size: f.EFr.SIZE_32,
          src: t.getAvatarURL(l, 32),
          "aria-hidden": true,
          status: a
        })
      }), (0, i.jsxs)("div", {
        className: j.autocompleteContentWrapper,
        "aria-label": L.intl.formatToPlainString(L.t["9v/R+j"], {
          name: p
        }),
        children: [(0, i.jsx)(R.z5, {
          children: (0, i.jsx)(f.Text, {
            className: j.autocompleteRowHeading,
            color: "interactive-text-active",
            variant: "text-sm/medium",
            children: p
          })
        }), (0, i.jsx)(R.dY, {
          children: null == r || r === p.toLocaleLowerCase() || r === t.username.toLocaleLowerCase() ? (0, i.jsxs)(i.Fragment, {
            children: [w.ZP.getUserTag(t, {
              mode: "username",
              identifiable: o ? "never" : "always"
            }), o || t.hasUniqueUsername() ? null : (0, i.jsxs)("span", {
              className: j.descriptionDiscriminator,
              children: ["#", t.discriminator]
            })]
          }) : r
        })]
      }), (0, i.jsx)("div", {
        className: j.keyComboContainer,
        children: c ? (0, i.jsx)(f.M2$, {
          shortcut: "tab",
          dim: true
        }) : null
      })]
    })
  }
  constructor(...e) {
    super(...e), M(this, "layoutClass", j.autoCompleteRowSuggestion)
  }
}
class J extends Y {
  renderContent() {
    let {
      role: e,
      hideDescription: t,
      guildId: n
    } = this.props, {
      colorString: r,
      colorStrings: a
    } = e, o = "dot" === p.Z.roleStyle, l = "username" === p.Z.roleStyle && (null != r || null != a), c = (0, O.AQ)(n, e, a), u = null != c && l, {
      gradientStyle: d,
      gradientClassname: _
    } = (0, f.JUn)({
      colorStrings: a,
      useReducedMotion: p.Z.useReducedMotion,
      roleStyle: "username",
      includeConvenienceGlow: true
    }), h = l ? k({}, u ? d : {
      color: null != r ? r : true
    }) : true;
    return (0, i.jsxs)(R.RX, {
      children: [(0, i.jsx)(R.z5, {
        children: (0, i.jsxs)(R.BR, {
          children: [o && (0, i.jsx)(f.FhE, {
            className: j.roleDot,
            color: r,
            colors: c,
            tooltip: false
          }), (0, i.jsxs)("span", {
            className: s()({
              [_]: u
            }),
            style: h,
            "data-text": u ? "@".concat(e.name) : true,
            children: ["@", e.name]
          })]
        })
      }), t ? null : (0, i.jsx)(R.dY, {
        children: L.intl.string(L.t["/91tbr"])
      })]
    })
  }
}
class $ extends Y {
  renderContent() {
    let {
      timestamp: e,
      description: t
    } = this.props;
    return (0, i.jsxs)(R.RX, {
      children: [(0, i.jsx)(R.z5, {
        children: (0, i.jsx)(R.BR, {
          children: (0, i.jsx)(y.Z, {
            node: e,
            showTooltip: false
          })
        })
      }), null != t ? (0, i.jsx)(R.dY, {
        children: t
      }) : null]
    })
  }
}
class ee extends Y {
  renderContent() {
    let {
      channel: e,
      category: t
    } = this.props, n = e.type === D.d4z.GUILD_CATEGORY ? f.ROc : (0, E.KS)(e);
    return (0, i.jsxs)(R.RX, {
      children: [null != n && (0, i.jsx)(R.Tw, {
        children: (0, i.jsx)(n, {
          className: j.icon
        })
      }), (0, i.jsx)(R.z5, {
        children: (0, i.jsx)(R.BR, {
          children: (0, g.F6)(e, N.default, A.Z)
        })
      }), null != t ? (0, i.jsx)(R.dY, {
        children: t.name
      }) : null]
    })
  }
}
class et extends Y {
  renderContent() {
    let {
      command: e
    } = this.props;
    return (0, i.jsxs)(R.RX, {
      children: [(0, i.jsx)(R.Tw, {
        children: (0, i.jsx)(f.XZC, {
          size: "xs",
          color: "currentColor",
          className: j.icon,
          colorClass: j.iconForeground
        })
      }), (0, i.jsx)(R.z5, {
        children: (0, i.jsx)(R.BR, {
          children: e.displayName
        })
      }), (0, i.jsx)(R.dY, {
        children: e.displayDescription
      })]
    })
  }
}
class en extends Y {
  isSelectable() {
    return this.props.command.inputType !== _.iw.PLACEHOLDER
  }
  renderContent() {
    let {
      command: e,
      channel: t,
      showImage: n,
      section: r,
      selected: a
    } = this.props, {
      hovered: o
    } = this.state, s = this.isSelectable();
    return e.inputType === _.iw.PLACEHOLDER ? (0, i.jsx)(m.Z, {}) : (0, i.jsx)(h.Z, {
      command: e,
      channel: t,
      showImage: n,
      showOptions: o || s && a,
      section: r,
      isSelectable: s
    })
  }
}
class er extends Y {
  renderContent() {
    let {
      emoji: e,
      sentinel: t,
      guild: n
    } = this.props, r = T.Yk.getSetting(), a = null != e.id || "" !== e.url ? (0, i.jsx)("img", {
      alt: "",
      className: j.emojiImage,
      src: null != e.id ? P.ZP.getEmojiURL({
        id: e.id,
        animated: e.animated && r,
        size: x.$U
      }) : e.url
    }) : (0, i.jsx)("span", {
      className: j.emojiRaw,
      children: e.surrogates
    }), o = null != n ? (0, i.jsx)(R.dY, {
      children: n.name
    }) : null;
    return (0, i.jsxs)(R.RX, {
      children: [(0, i.jsx)(R.Tw, {
        children: a
      }), (0, i.jsx)(R.z5, {
        children: (0, i.jsxs)(R.BR, {
          children: [t, e.name, t]
        })
      }), o]
    })
  }
  constructor(...e) {
    super(...e), M(this, "layoutClass", s()(j.autocompleteRowVertical, j.autocompleteRowVerticalSmall))
  }
}
class ei extends Y {
  renderContent() {
    var e, t;
    let n, {
        queryMatch: r,
        renderSticker: a,
        selected: o,
        sticker: s
      } = this.props,
      {
        hovered: l
      } = this.state;
    return (0, I.jl)(s) ? n = null == (e = S.Z.getStickerPack(s.pack_id)) ? true : e.name : (0, I.J8)(s) && (n = null == (t = C.Z.getGuild(s.guild_id)) ? true : t.name), (0, i.jsxs)(R.RX, {
      children: [(0, i.jsx)(R.Tw, {
        children: a(s, l || true === o)
      }), (0, i.jsxs)(R.z5, {
        children: [(0, i.jsx)(R.BR, {
          children: s.name
        }), null != r && (0, i.jsx)(R.wL, {
          children: L.intl.format(L.t.PAutaQ, {
            queryMatch: r
          })
        })]
      }), null != n && (0, i.jsx)(R.dY, {
        children: n
      })]
    })
  }
  constructor(...e) {
    super(...e), M(this, "layoutClass", s()(j.autocompleteRowVertical, j.autocompleteRowVerticalSmall))
  }
}
class ea extends Y {
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
    super(...e), M(this, "layoutClass", j.autocompleteRowHorizontal)
  }
}
class eo extends Y {
  renderContent() {
    return (0, i.jsx)(b.Z, {
      emojis: this.props.emojis
    })
  }
}
class es extends Y {
  renderContent() {
    return (0, i.jsx)(v.Z, k({}, this.props))
  }
}
class el extends Y {
  renderContent() {
    let {
      game: e
    } = this.props, t = (0, i.jsx)("img", {
      alt: "",
      className: j.icon,
      src: P.ZP.getApplicationIconURL({
        id: e.id,
        icon: e.icon,
        size: 32
      })
    });
    return (0, i.jsxs)(R.RX, {
      children: [(0, i.jsx)(R.Tw, {
        children: t
      }), (0, i.jsx)(R.z5, {
        children: (0, i.jsx)(R.BR, {
          children: e.name
        })
      })]
    })
  }
}
class ec extends(r = Chunk473749.PureComponent) {
  render() {
    let e = this.props,
      {
        children: t,
        className: n,
        innerClassName: r,
        id: o
      } = e,
      l = Z(e, ["children", "className", "innerClassName", "id"]);
    return a.Children.count(t) > 0 ? (0, i.jsx)(H.Provider, {
      value: {
        id: null != o ? o : ""
      },
      children: (0, i.jsx)("div", {
        className: s()(j.autocomplete, n),
        children: (0, i.jsx)("div", G(k({
          className: s()(j.autocompleteInner, r)
        }, l), {
          children: t
        }))
      })
    }) : null
  }
}
M(ec, "Generic", W), M(ec, "Loading", K), M(ec, "Title", z), M(ec, "Divider", q), M(ec, "User", Q), M(ec, "UserSuggestion", X), M(ec, "Role", J), M(ec, "Channel", ee), M(ec, "Command", et), M(ec, "NewCommand", en), M(ec, "Emoji", er), M(ec, "GIFIntegration", ea), M(ec, "Sticker", ei), M(ec, "EmojiUpsell", eo), M(ec, "Soundmoji", es), M(ec, "Game", el), M(ec, "Timestamp", $);
let eu = ec