/** Chunk was on web.js **/
/** chunk id: 580424, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => eu,
  Sz: () => H,
  aI: () => B
}), require("./65821.js"), require("./228524.js"), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  c = require.n(Chunk735438),
  Chunk837381 = require("./837381.jsx"),
  Chunk508770 = require("./508770.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk392054 = require("./392054.js"),
  Chunk41329 = require("./41329.jsx"),
  Chunk746388 = require("./746388.jsx"),
  Chunk47167 = require("./47167.js"),
  Chunk713654 = require("./713654.js"),
  Chunk921661 = require("./921661.jsx"),
  Chunk678473 = require("./678473.jsx"),
  Chunk967144 = require("./967144.js"),
  Chunk733509 = require("./733509.jsx"),
  Chunk679382 = require("./679382.js"),
  Chunk378058 = require("./378058.js"),
  Chunk253932 = require("./253932.js"),
  Chunk71393 = require("./71393.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk486020 = require("./486020.js"),
  Chunk427262 = require("./427262.js"),
  Chunk557158 = require("./557158.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk307731 = require("./307731.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk395410 = require("./395410.js");

function j(e, t, n) {
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
      j(e, t, n[t])
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

function V(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = F(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function F(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function B(e) {
  return null != e ? "autocomplete-".concat(e) : null
}

function H(e) {
  return "autocomplete-".concat(e, "-title")
}
let Y = Chunk64700.createContext(null);
class W extends Chunk64700.PureComponent {
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
    return (0, i.jsx)(f.DUT, G(k({}, e), {
      className: s()(M.vk, r, n),
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
        className: M.E3,
        children: this.renderContent()
      })
    }))
  }
  render() {
    let {
      index: e
    } = this.props;
    return this.isSelectable() ? (0, i.jsx)(u.tG, {
      id: "".concat(e),
      children: e => this.renderClickable(e)
    }) : this.renderClickable()
  }
  constructor(e) {
    super(e), j(this, "selectable", true), j(this, "layoutClass", M.rT), j(this, "handleMouseEnter", () => {
      let {
        onHover: e,
        index: t,
        selected: n
      } = this.props;
      null == e || n || "number" != typeof t || e(t)
    }), j(this, "handleClick", e => {
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
class K extends W {
  renderContent() {
    let {
      text: e,
      description: t,
      badge: n
    } = this.props;
    return (0, i.jsxs)(P.Mr, {
      children: [(0, i.jsx)(P.oC, {
        children: (0, i.jsxs)(P.dB, {
          children: [e, " ", null != n && (0, i.jsx)(d.E, {
            type: n,
            variant: "brand"
          })]
        })
      }), null != t ? (0, i.jsx)(P.Aq, {
        children: t
      }) : null]
    })
  }
}

function z(e) {
  let t = a.useMemo(() => c().random(60, 120), []);
  return (0, i.jsx)("div", {
    className: M.E3,
    "aria-busy": true,
    children: (0, i.jsx)(P.Mr, {
      children: (0, i.jsx)(P.oC, {
        children: (0, i.jsx)(P.dB, {
          children: (0, i.jsx)("div", {
            className: M.M,
            style: {
              width: t
            }
          })
        })
      })
    })
  })
}

function q(e) {
  let {
    title: t,
    className: n,
    children: r
  } = e, o = a.useContext(Y);
  return (0, i.jsx)("div", {
    className: M.E3,
    children: (0, i.jsxs)(f.Heading, {
      id: H(o.id),
      className: s()(M.eu, n),
      variant: "heading-deprecated-12/semibold",
      children: [t, r]
    })
  })
}
class Z extends W {
  renderContent() {
    let {
      className: e
    } = this.props;
    return (0, i.jsx)("div", {
      className: s()(e, M.yF)
    })
  }
  constructor(...e) {
    super(...e), j(this, "layoutClass", M.fF), j(this, "selectable", false)
  }
}
class Q extends W {
  renderContent() {
    var e;
    let {
      user: t,
      nick: n,
      status: r,
      hidePersonalInformation: a,
      guildId: o
    } = this.props, s = null == o ? C.A.getNickname(t.id) : null;
    return (0, i.jsxs)(P.Mr, {
      children: [(0, i.jsx)(P.Ch, {
        children: (0, i.jsx)(f.euF, {
          size: f._3J.SIZE_24,
          src: t.getAvatarURL(o, 24),
          "aria-hidden": true,
          status: r
        })
      }), (0, i.jsx)(P.oC, {
        children: (0, i.jsx)(P.dB, {
          children: null != (e = null != n ? n : s) ? e : R.Ay.getName(t)
        })
      }), (0, i.jsxs)(P.Aq, {
        children: [R.Ay.getUserTag(t, {
          mode: "username",
          identifiable: a ? "never" : "always"
        }), a || t.hasUniqueUsername() ? null : (0, i.jsxs)("span", {
          className: M.T,
          children: ["#", t.discriminator]
        })]
      })]
    })
  }
}
class X extends W {
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
    } = this.props, d = null == l ? C.A.getNickname(t.id) : null, p = null != (e = null != n ? n : d) ? e : R.Ay.getName(t);
    return (0, i.jsxs)(P.Mr, {
      className: s()({
        [M.DH]: "vertical-suggestion" === u
      }),
      children: [(0, i.jsx)(P.Ch, {
        children: (0, i.jsx)(f.euF, {
          size: f._3J.SIZE_32,
          src: t.getAvatarURL(l, 32),
          "aria-hidden": true,
          status: a
        })
      }), (0, i.jsxs)("div", {
        className: M.H5,
        "aria-label": x.intl.formatToPlainString(x.t["9v/R+j"], {
          name: p
        }),
        children: [(0, i.jsx)(P.oC, {
          children: (0, i.jsx)(f.Text, {
            className: M.hf,
            color: "interactive-text-active",
            variant: "text-sm/medium",
            children: p
          })
        }), (0, i.jsx)(P.Aq, {
          children: null == r || r === p.toLocaleLowerCase() || r === t.username.toLocaleLowerCase() ? (0, i.jsxs)(i.Fragment, {
            children: [R.Ay.getUserTag(t, {
              mode: "username",
              identifiable: o ? "never" : "always"
            }), o || t.hasUniqueUsername() ? null : (0, i.jsxs)("span", {
              className: M.T,
              children: ["#", t.discriminator]
            })]
          }) : r
        })]
      }), (0, i.jsx)("div", {
        className: M.ti,
        children: c ? (0, i.jsx)(f.e7I, {
          shortcut: "tab",
          dim: true
        }) : null
      })]
    })
  }
  constructor(...e) {
    super(...e), j(this, "layoutClass", M.xF)
  }
}
class J extends W {
  renderContent() {
    let {
      role: e,
      hideDescription: t,
      guildId: n
    } = this.props, {
      colorString: r,
      colorStrings: a
    } = e, o = "dot" === p.A.roleStyle, l = "username" === p.A.roleStyle && (null != r || null != a), c = (0, O.hH)(n, e, a), u = null != c && l, {
      gradientStyle: d,
      gradientClassname: _
    } = (0, f.WqX)({
      colorStrings: a,
      useReducedMotion: p.A.useReducedMotion,
      roleStyle: "username",
      includeConvenienceGlow: true
    }), h = l ? k({}, u ? d : {
      color: null != r ? r : true
    }) : true;
    return (0, i.jsxs)(P.Mr, {
      children: [(0, i.jsx)(P.oC, {
        children: (0, i.jsxs)(P.dB, {
          children: [o && (0, i.jsx)(f.WYI, {
            className: M.m4,
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
      }), t ? null : (0, i.jsx)(P.Aq, {
        children: x.intl.string(x.t["/91tbr"])
      })]
    })
  }
}
class $ extends W {
  renderContent() {
    let {
      timestamp: e,
      description: t
    } = this.props;
    return (0, i.jsxs)(P.Mr, {
      children: [(0, i.jsx)(P.oC, {
        children: (0, i.jsx)(P.dB, {
          children: (0, i.jsx)(b.A, {
            node: e,
            showTooltip: false
          })
        })
      }), null != t ? (0, i.jsx)(P.Aq, {
        children: t
      }) : null]
    })
  }
}
class ee extends W {
  renderContent() {
    let {
      channel: e,
      category: t
    } = this.props, n = e.type === D.rbe.GUILD_CATEGORY ? f.sjq : (0, E.gU)(e);
    return (0, i.jsxs)(P.Mr, {
      children: [null != n && (0, i.jsx)(P.Ch, {
        children: (0, i.jsx)(n, {
          className: M.Kk
        })
      }), (0, i.jsx)(P.oC, {
        children: (0, i.jsx)(P.dB, {
          children: (0, g.m1)(e, N.default, C.A)
        })
      }), null != t ? (0, i.jsx)(P.Aq, {
        children: t.name
      }) : null]
    })
  }
}
class et extends W {
  renderContent() {
    let {
      command: e
    } = this.props;
    return (0, i.jsxs)(P.Mr, {
      children: [(0, i.jsx)(P.Ch, {
        children: (0, i.jsx)(f.Fb4, {
          size: "xs",
          color: "currentColor",
          className: M.Kk,
          colorClass: M.t4
        })
      }), (0, i.jsx)(P.oC, {
        children: (0, i.jsx)(P.dB, {
          children: e.displayName
        })
      }), (0, i.jsx)(P.Aq, {
        children: e.displayDescription
      })]
    })
  }
}
class en extends W {
  isSelectable() {
    return this.props.command.inputType !== _.y$.PLACEHOLDER
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
    return e.inputType === _.y$.PLACEHOLDER ? (0, i.jsx)(m.A, {}) : (0, i.jsx)(h.A, {
      command: e,
      channel: t,
      showImage: n,
      showOptions: o || s && a,
      section: r,
      isSelectable: s
    })
  }
}
class er extends W {
  renderContent() {
    let {
      emoji: e,
      sentinel: t,
      guild: n
    } = this.props, r = S.Sf.getSetting(), a = null != e.id || "" !== e.url ? (0, i.jsx)("img", {
      alt: "",
      className: M.mp,
      src: null != e.id ? w.Ay.getEmojiURL({
        id: e.id,
        animated: e.animated && r,
        size: L.L4
      }) : e.url
    }) : (0, i.jsx)("span", {
      className: M.nT,
      children: e.surrogates
    }), o = null != n ? (0, i.jsx)(P.Aq, {
      children: n.name
    }) : null;
    return (0, i.jsxs)(P.Mr, {
      children: [(0, i.jsx)(P.Ch, {
        children: a
      }), (0, i.jsx)(P.oC, {
        children: (0, i.jsxs)(P.dB, {
          children: [t, e.name, t]
        })
      }), o]
    })
  }
  constructor(...e) {
    super(...e), j(this, "layoutClass", s()(M.rT, M.Mf))
  }
}
class ei extends W {
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
    return (0, I.FD)(s) ? n = null == (e = A.A.getStickerPack(s.pack_id)) ? true : e.name : (0, I.Xw)(s) && (n = null == (t = T.A.getGuild(s.guild_id)) ? true : t.name), (0, i.jsxs)(P.Mr, {
      children: [(0, i.jsx)(P.Ch, {
        children: a(s, l || true === o)
      }), (0, i.jsxs)(P.oC, {
        children: [(0, i.jsx)(P.dB, {
          children: s.name
        }), null != r && (0, i.jsx)(P.Nd, {
          children: x.intl.format(x.t.PAutaQ, {
            queryMatch: r
          })
        })]
      }), null != n && (0, i.jsx)(P.Aq, {
        children: n
      })]
    })
  }
  constructor(...e) {
    super(...e), j(this, "layoutClass", s()(M.rT, M.Mf))
  }
}
class ea extends W {
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
    super(...e), j(this, "layoutClass", M.ju)
  }
}
class eo extends W {
  renderContent() {
    return (0, i.jsx)(y.A, {
      emojis: this.props.emojis
    })
  }
}
class es extends W {
  renderContent() {
    return (0, i.jsx)(v.A, k({}, this.props))
  }
}
class el extends W {
  renderContent() {
    let {
      game: e
    } = this.props, t = (0, i.jsx)("img", {
      alt: "",
      className: M.Kk,
      src: w.Ay.getApplicationIconURL({
        id: e.id,
        icon: e.icon,
        size: 32
      })
    });
    return (0, i.jsxs)(P.Mr, {
      children: [(0, i.jsx)(P.Ch, {
        children: t
      }), (0, i.jsx)(P.oC, {
        children: (0, i.jsx)(P.dB, {
          children: e.name
        })
      })]
    })
  }
}
class ec extends(r = Chunk64700.PureComponent) {
  render() {
    let e = this.props,
      {
        children: t,
        className: n,
        innerClassName: r,
        id: o
      } = e,
      l = V(e, ["children", "className", "innerClassName", "id"]);
    return a.Children.count(t) > 0 ? (0, i.jsx)(Y.Provider, {
      value: {
        id: null != o ? o : ""
      },
      children: (0, i.jsx)("div", {
        className: s()(M.nx, n),
        children: (0, i.jsx)("div", G(k({
          className: s()(M.Fv, r)
        }, l), {
          children: t
        }))
      })
    }) : null
  }
}
j(ec, "Generic", K), j(ec, "Loading", z), j(ec, "Title", q), j(ec, "Divider", Z), j(ec, "User", Q), j(ec, "UserSuggestion", X), j(ec, "Role", J), j(ec, "Channel", ee), j(ec, "Command", et), j(ec, "NewCommand", en), j(ec, "Emoji", er), j(ec, "GIFIntegration", ea), j(ec, "Sticker", ei), j(ec, "EmojiUpsell", eo), j(ec, "Soundmoji", es), j(ec, "Game", el), j(ec, "Timestamp", $);
let eu = ec