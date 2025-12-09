/** Chunk was on web.js **/
/** chunk id: 588468, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DJ: () => F,
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
  Chunk512746 = require("./512746.js");

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
  var n, r, i = B(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function B(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function F(e) {
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
      id: null != (t = F(a)) ? t : true,
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
    return this.isSelectable() ? (0, Chunk54381.jsx)(Chunk91192.mh, {
      id: "".concat(module),
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
    return (0, Chunk54381.jsxs)(Chunk965386.RX, {
      children: [(0, Chunk54381.jsx)(Chunk965386.z5, {
        children: (0, Chunk54381.jsxs)(Chunk965386.BR, {
          children: [module, " ", null != require && (0, Chunk54381.jsx)(Chunk313666.C, {
            type: require
          })]
        })
      }), null != exports ? (0, Chunk54381.jsx)(Chunk965386.dY, {
        children: exports
      }) : null]
    })
  }
}

function K(e) {
  let t = a.useMemo(() => c().random(60, 120), []);
  return (0, i.jsx)("div", {
    className: j.base,
    "aria-busy": true,
    children: (0, i.jsx)(D.RX, {
      children: (0, i.jsx)(D.z5, {
        children: (0, i.jsx)(D.BR, {
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
    return (0, Chunk54381.jsx)("div", {
      className: s()(module, Chunk512746.divider)
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
    } = this.props, s = null == Chunk120356 ? Chunk699516.Z.getNickname(exports.id) : null;
    return (0, Chunk54381.jsxs)(Chunk965386.RX, {
      children: [(0, Chunk54381.jsx)(Chunk965386.Tw, {
        children: (0, Chunk54381.jsx)(Chunk481060.qEK, {
          size: Chunk481060.EFr.SIZE_24,
          src: exports.getAvatarURL(Chunk120356, 24),
          "aria-hidden": true,
          status: r
        })
      }), (0, Chunk54381.jsx)(Chunk965386.z5, {
        children: (0, Chunk54381.jsx)(Chunk965386.BR, {
          children: null != (e = null != require ? require : s) ? module : Chunk51144.ZP.getName(exports)
        })
      }), (0, Chunk54381.jsxs)(Chunk965386.dY, {
        children: [Chunk51144.ZP.getUserTag(exports, {
          mode: "username",
          identifiable: Chunk473749 ? "never" : "always"
        }), Chunk473749 || exports.hasUniqueUsername() ? null : (0, Chunk54381.jsxs)("span", {
          className: Chunk512746.descriptionDiscriminator,
          children: ["#", exports.discriminator]
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
    } = this.props, d = null == Chunk392711 ? Chunk699516.Z.getNickname(exports.id) : null, p = null != (e = null != require ? require : Chunk313666) ? module : Chunk51144.ZP.getName(exports);
    return (0, Chunk54381.jsxs)(Chunk965386.RX, {
      className: s()({
        [Chunk512746.verticalLayout]: "vertical-suggestion" === Chunk91192
      }),
      children: [(0, Chunk54381.jsx)(Chunk965386.Tw, {
        children: (0, Chunk54381.jsx)(Chunk481060.qEK, {
          size: Chunk481060.EFr.SIZE_32,
          src: exports.getAvatarURL(Chunk392711, 32),
          "aria-hidden": true,
          status: Chunk473749
        })
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk512746.autocompleteContentWrapper,
        "aria-label": Chunk388032.intl.formatToPlainString(Chunk388032.t["9v/R+j"], {
          name: Chunk607070
        }),
        children: [(0, Chunk54381.jsx)(Chunk965386.z5, {
          children: (0, Chunk54381.jsx)(Chunk481060.Text, {
            className: Chunk512746.autocompleteRowHeading,
            color: "interactive-active",
            variant: "text-sm/medium",
            children: Chunk607070
          })
        }), (0, Chunk54381.jsx)(Chunk965386.dY, {
          children: null == r || r === Chunk607070.toLocaleLowerCase() || r === exports.username.toLocaleLowerCase() ? (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
            children: [Chunk51144.ZP.getUserTag(exports, {
              mode: "username",
              identifiable: Chunk120356 ? "never" : "always"
            }), Chunk120356 || exports.hasUniqueUsername() ? null : (0, Chunk54381.jsxs)("span", {
              className: Chunk512746.descriptionDiscriminator,
              children: ["#", exports.discriminator]
            })]
          }) : r
        })]
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk512746.keyComboContainer,
        children: c ? (0, Chunk54381.jsx)(Chunk481060.M2$, {
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
    } = module, o = "dot" === Chunk607070.Z.roleStyle, l = "username" === Chunk607070.Z.roleStyle && (null != r || null != Chunk473749), c = (0, Chunk884902.AQ)(require, module, Chunk473749), u = null != c && Chunk392711, {
      gradientStyle: d,
      gradientClassname: _
    } = (0, Chunk481060.JUn)({
      colorStrings: Chunk473749,
      useReducedMotion: Chunk607070.Z.useReducedMotion,
      roleStyle: "username",
      includeConvenienceGlow: true
    }), m = Chunk392711 ? k({}, Chunk91192 ? Chunk313666 : {
      color: null != r ? r : true
    }) : true;
    return (0, Chunk54381.jsxs)(Chunk965386.RX, {
      children: [(0, Chunk54381.jsx)(Chunk965386.z5, {
        children: (0, Chunk54381.jsxs)(Chunk965386.BR, {
          children: [Chunk120356 && (0, Chunk54381.jsx)(Chunk481060.FhE, {
            className: Chunk512746.roleDot,
            color: r,
            colors: c,
            tooltip: false
          }), (0, Chunk54381.jsxs)("span", {
            className: s()({
              [Chunk895924]: Chunk91192
            }),
            style: Chunk237375,
            "data-text": Chunk91192 ? "@".concat(module.name) : true,
            children: ["@", module.name]
          })]
        })
      }), exports ? null : (0, Chunk54381.jsx)(Chunk965386.dY, {
        children: Chunk388032.intl.string(Chunk388032.t["/91tbr"])
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
    return (0, Chunk54381.jsxs)(Chunk965386.RX, {
      children: [(0, Chunk54381.jsx)(Chunk965386.z5, {
        children: (0, Chunk54381.jsx)(Chunk965386.BR, {
          children: (0, Chunk54381.jsx)(Chunk285063.Z, {
            node: module,
            showTooltip: false
          })
        })
      }), null != exports ? (0, Chunk54381.jsx)(Chunk965386.dY, {
        children: exports
      }) : null]
    })
  }
}
class ee extends Y {
  renderContent() {
    let {
      channel: e,
      category: t
    } = this.props, n = module.type === Chunk981631.d4z.GUILD_CATEGORY ? Chunk481060.ROc : (0, Chunk471445.KS)(module);
    return (0, Chunk54381.jsxs)(Chunk965386.RX, {
      children: [null != require && (0, Chunk54381.jsx)(Chunk965386.Tw, {
        children: (0, Chunk54381.jsx)(require, {
          className: Chunk512746.icon
        })
      }), (0, Chunk54381.jsx)(Chunk965386.z5, {
        children: (0, Chunk54381.jsx)(Chunk965386.BR, {
          children: (0, Chunk933557.F6)(module, Chunk594174.default, Chunk699516.Z)
        })
      }), null != exports ? (0, Chunk54381.jsx)(Chunk965386.dY, {
        children: exports.name
      }) : null]
    })
  }
}
class et extends Y {
  renderContent() {
    let {
      command: e
    } = this.props;
    return (0, Chunk54381.jsxs)(Chunk965386.RX, {
      children: [(0, Chunk54381.jsx)(Chunk965386.Tw, {
        children: (0, Chunk54381.jsx)(Chunk481060.XZC, {
          size: "xs",
          color: "currentColor",
          className: Chunk512746.icon,
          colorClass: Chunk512746.iconForeground
        })
      }), (0, Chunk54381.jsx)(Chunk965386.z5, {
        children: (0, Chunk54381.jsx)(Chunk965386.BR, {
          children: module.displayName
        })
      }), (0, Chunk54381.jsx)(Chunk965386.dY, {
        children: module.displayDescription
      })]
    })
  }
}
class en extends Y {
  isSelectable() {
    return this.props.command.inputType !== Chunk895924.iw.PLACEHOLDER
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
    return module.inputType === Chunk895924.iw.PLACEHOLDER ? (0, Chunk54381.jsx)(Chunk342687.Z, {}) : (0, Chunk54381.jsx)(Chunk237375.Z, {
      command: module,
      channel: exports,
      showImage: require,
      showOptions: Chunk120356 || s && Chunk473749,
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
    } = this.props, r = Chunk695346.Yk.getSetting(), a = null != module.id || "" !== module.url ? (0, Chunk54381.jsx)("img", {
      alt: "",
      className: Chunk512746.emojiImage,
      src: null != module.id ? Chunk768581.ZP.getEmojiURL({
        id: module.id,
        animated: module.animated && r,
        size: Chunk185923.$U
      }) : module.url
    }) : (0, Chunk54381.jsx)("span", {
      className: Chunk512746.emojiRaw,
      children: module.surrogates
    }), o = null != require ? (0, Chunk54381.jsx)(Chunk965386.dY, {
      children: require.name
    }) : null;
    return (0, Chunk54381.jsxs)(Chunk965386.RX, {
      children: [(0, Chunk54381.jsx)(Chunk965386.Tw, {
        children: Chunk473749
      }), (0, Chunk54381.jsx)(Chunk965386.z5, {
        children: (0, Chunk54381.jsxs)(Chunk965386.BR, {
          children: [exports, module.name, exports]
        })
      }), Chunk120356]
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
    return (0, Chunk378233.jl)(s) ? n = null == (e = Chunk926491.Z.getStickerPack(s.pack_id)) ? true : module.name : (0, Chunk378233.J8)(s) && (n = null == (t = Chunk430824.Z.getGuild(s.guild_id)) ? true : exports.name), (0, Chunk54381.jsxs)(Chunk965386.RX, {
      children: [(0, Chunk54381.jsx)(Chunk965386.Tw, {
        children: Chunk473749(s, Chunk392711 || true === Chunk120356)
      }), (0, Chunk54381.jsxs)(Chunk965386.z5, {
        children: [(0, Chunk54381.jsx)(Chunk965386.BR, {
          children: s.name
        }), null != r && (0, Chunk54381.jsx)(Chunk965386.wL, {
          children: Chunk388032.intl.format(Chunk388032.t.PAutaQ, {
            queryMatch: r
          })
        })]
      }), null != require && (0, Chunk54381.jsx)(Chunk965386.dY, {
        children: require
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
    return (0, Chunk54381.jsx)("img", {
      alt: "",
      src: require,
      width: module,
      height: exports
    })
  }
  constructor(...e) {
    super(...e), M(this, "layoutClass", j.autocompleteRowHorizontal)
  }
}
class eo extends Y {
  renderContent() {
    return (0, Chunk54381.jsx)(Chunk203247.Z, {
      emojis: this.props.emojis
    })
  }
}
class es extends Y {
  renderContent() {
    return (0, Chunk54381.jsx)(Chunk887120.Z, k({}, this.props))
  }
}
class el extends Y {
  renderContent() {
    let {
      game: e
    } = this.props, t = (0, Chunk54381.jsx)("img", {
      alt: "",
      className: Chunk512746.icon,
      src: Chunk768581.ZP.getApplicationIconURL({
        id: module.id,
        icon: module.icon,
        size: 32
      })
    });
    return (0, Chunk54381.jsxs)(Chunk965386.RX, {
      children: [(0, Chunk54381.jsx)(Chunk965386.Tw, {
        children: exports
      }), (0, Chunk54381.jsx)(Chunk965386.z5, {
        children: (0, Chunk54381.jsx)(Chunk965386.BR, {
          children: module.name
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
      } = module,
      l = Z(module, ["children", "className", "innerClassName", "id"]);
    return Chunk473749.Children.count(exports) > 0 ? (0, Chunk54381.jsx)(H.Provider, {
      value: {
        id: null != Chunk120356 ? Chunk120356 : ""
      },
      children: (0, Chunk54381.jsx)("div", {
        className: s()(Chunk512746.autocomplete, require),
        children: (0, Chunk54381.jsx)("div", G(k({
          className: s()(Chunk512746.autocompleteInner, r)
        }, Chunk392711), {
          children: exports
        }))
      })
    }) : null
  }
}
M(ec, "Generic", W), M(ec, "Loading", K), M(ec, "Title", z), M(ec, "Divider", q), M(ec, "User", Q), M(ec, "UserSuggestion", X), M(ec, "Role", J), M(ec, "Channel", ee), M(ec, "Command", et), M(ec, "NewCommand", en), M(ec, "Emoji", er), M(ec, "GIFIntegration", ea), M(ec, "Sticker", ei), M(ec, "EmojiUpsell", eo), M(ec, "Soundmoji", es), M(ec, "Game", el), M(ec, "Timestamp", $);
let eu = ec