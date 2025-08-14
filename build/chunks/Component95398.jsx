/** Chunk was on web.js **/
/** chunk id: 95398, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => R,
  aQ: () => A
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk81643 = require("./81643.js"),
  Chunk247206 = require("./247206.js"),
  Chunk936141 = require("./936141.js"),
  Chunk823379 = require("./823379.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk926095 = require("./926095.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var O = function(e) {
  return e.TEXT = "text", e.ATTACHMENT = "attachment", e.EMBED = "embed", e
}(O || {});
let v = e => {
    let {
      className: t
    } = e;
    return (0, r.jsx)("div", {
      className: a()(m.spoilerWarning, t),
      children: h.intl.string(h.t["F+x38P"])
    })
  },
  I = e => {
    let {
      className: t,
      isSingleMosaicItem: n,
      obscureOnly: i
    } = e;
    return (0, r.jsx)("div", {
      className: a()(m.explicitContentWarning, t),
      children: i ? null : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.fFY, {
          size: "lg",
          color: s.Z.colors.WHITE
        }), n && (0, r.jsx)(l.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          className: m.explicitContentWarningText,
          children: h.intl.string(h.t.SpxcUV)
        })]
      })
    })
  },
  T = e => {
    let {
      reason: t = _.wk.SPOILER,
      className: n,
      isSingleMosaicItem: i = false
    } = e;
    switch (t) {
      case _.wk.SPOILER:
        return (0, r.jsx)(v, {
          className: n
        });
      case _.wk.EXPLICIT_CONTENT:
      case _.wk.GORE_CONTENT:
        return (0, r.jsx)(I, {
          isSingleMosaicItem: i,
          className: n
        });
      case _.wk.POTENTIAL_EXPLICIT_CONTENT:
        return (0, r.jsx)(I, {
          isSingleMosaicItem: i,
          className: n,
          obscureOnly: true
        });
      default:
        return (0, p.vE)(t)
    }
  },
  S = e => {
    let {
      obscureReason: t,
      isVisible: n,
      handleToggleObscurity: i,
      obscurityControlClassName: o
    } = e;
    return t !== _.wk.EXPLICIT_CONTENT && t !== _.wk.GORE_CONTENT ? null : (0, r.jsx)("div", {
      className: a()(m.obscureButtonContainer, o),
      children: (0, r.jsx)(l.P3F, {
        className: m.obscureHoverButton,
        onClick: i,
        "aria-label": h.intl.string(h.t.ex5G9v),
        children: n ? (0, r.jsx)(l.tEF, {
          size: "md",
          color: "currentColor"
        }) : (0, r.jsx)(l.kZF, {
          size: "md",
          color: "currentColor"
        })
      })
    })
  },
  A = Chunk73800.createContext(false);
class N extends Chunk73800.PureComponent {
  renderWithTooltip(e) {
    return (0, r.jsx)(l.ua7, {
      position: "left",
      text: this.state.visible ? null : this.tooltipText,
      children: t => {
        let {
          onMouseEnter: n,
          onMouseLeave: r
        } = t;
        return i.cloneElement(i.Children.only(e), {
          onMouseEnter: n,
          onMouseLeave: r
        })
      }
    })
  }
  renderObscuredAttachment() {
    let {
      children: e,
      inline: t,
      className: n,
      containerStyles: i,
      obscured: o = true,
      reason: s = Chunk936141.wk.SPOILER,
      isSingleMosaicItem: c = false,
      obscurityControlClassName: u,
      shouldAgeVerify: d,
      isVerifiedTeen: f
    } = this.props, {
      visible: p
    } = this.state, h = (0, Chunk255367.jsx)(A.Consumer, {
      children: h => {
        let g = h || p || !o;
        return _.Xh.has(s) && !t ? (0, r.jsxs)("div", {
          "aria-label": g ? true : this.ariaLabel,
          "aria-expanded": g,
          style: i,
          className: a()(n, m.spoilerContent, m.spoilerContainer, m.attachmentContainer, {
            [m.hidden]: !g,
            [m.constrainedObscureContent]: c,
            [m.opaque]: d || f
          }),
          role: g ? "presentation" : "button",
          tabIndex: g ? false : 0,
          children: [g || t ? null : (0, r.jsx)(T, {
            reason: s,
            isSingleMosaicItem: c
          }), (0, r.jsx)("div", {
            "aria-hidden": !g,
            className: m.spoilerInnerContainer,
            children: e(!g)
          }), f ? null : (0, r.jsx)(S, {
            obscureReason: s,
            isVisible: p,
            handleToggleObscurity: this.handleToggleObscurity,
            obscurityControlClassName: u
          })]
        }) : (0, r.jsxs)(l.P3F, {
          onClick: g ? true : this.removeObscurity,
          "aria-label": g ? true : this.ariaLabel,
          "aria-expanded": g,
          style: i,
          className: a()(n, m.spoilerContent, m.spoilerContainer, m.attachmentContainer, {
            [m.hidden]: !g,
            [m.hiddenSpoiler]: !g
          }),
          role: g ? "presentation" : "button",
          tabIndex: g ? false : 0,
          children: [g || t ? null : (0, r.jsx)(T, {
            reason: s,
            isSingleMosaicItem: c
          }), (0, r.jsx)("div", {
            "aria-hidden": !g,
            className: m.spoilerInnerContainer,
            children: e(!g)
          })]
        })
      }
    });
    return exports ? this.renderWithTooltip(Chunk388032) : Chunk388032
  }
  renderObscuredEmbed() {
    let {
      children: e,
      className: t,
      containerStyles: n,
      isSingleMosaicItem: i,
      obscurityControlClassName: o,
      reason: s = Chunk936141.wk.SPOILER,
      shouldAgeVerify: c,
      isVerifiedTeen: u
    } = this.props, {
      visible: d
    } = this.state;
    return (0, Chunk255367.jsx)(A.Consumer, {
      children: f => {
        let p = f || d;
        return _.Xh.has(s) ? (0, r.jsxs)("div", {
          "aria-label": d ? true : this.ariaLabel,
          "aria-expanded": p,
          style: n,
          className: a()(t, m.spoilerContent, m.spoilerContainer, m.embedContainer, {
            [m.hidden]: !p,
            [m.opaque]: c || u
          }),
          role: p ? "presentation" : "button",
          tabIndex: p ? false : 0,
          children: [p ? null : (0, r.jsx)(T, {
            reason: s,
            isSingleMosaicItem: i
          }), (0, r.jsx)("div", {
            "aria-hidden": !p,
            className: m.spoilerInnerContainer,
            children: e(!p)
          }), u ? null : (0, r.jsx)(S, {
            obscureReason: s,
            isVisible: d,
            handleToggleObscurity: this.handleToggleObscurity,
            obscurityControlClassName: o
          })]
        }) : (0, r.jsxs)(l.P3F, {
          "aria-label": this.ariaLabel,
          "aria-expanded": p,
          className: a()(t, m.spoilerContent, m.spoilerContainer, m.embedContainer, {
            [m.hidden]: !p
          }),
          onClick: p ? true : this.removeObscurity,
          style: n,
          role: p ? "presentation" : "button",
          tabIndex: p ? false : 0,
          children: [p ? null : (0, r.jsx)(T, {
            reason: s,
            className: m.embed
          }), (0, r.jsx)("div", {
            "aria-hidden": !p,
            children: e(!p)
          })]
        })
      }
    })
  }
  renderObscuredText() {
    let {
      children: e,
      renderTextElement: t,
      className: n
    } = this.props, {
      visible: o
    } = this.state, s = (0, Chunk255367.jsx)(A.Consumer, {
      children: s => {
        let c = s || o,
          u = i.Children.toArray(e(c)),
          d = i.Children.map(u, e => i.isValidElement(e) && null != t ? t(e, c) : e);
        return (0, r.jsx)(l.P3F, {
          tag: "span",
          onClick: c ? true : this.removeObscurity,
          "aria-label": c ? true : this.ariaLabel,
          "aria-expanded": c,
          tabIndex: c ? false : 0,
          role: c ? "presentation" : "button",
          className: a()("obscured", n, m.spoilerContent, m.spoilerMarkdownContent, {
            [m.hidden]: !c
          }),
          children: (0, r.jsx)("span", {
            className: m.obscuredTextContent,
            children: (0, r.jsx)("span", {
              "aria-hidden": !c,
              className: m.obscuredTextContentInner,
              children: d
            })
          })
        })
      }
    });
    return this.renderWithTooltip(Chunk692547)
  }
  render() {
    let {
      type: e = "text"
    } = this.props;
    switch (module) {
      case "text":
        return this.renderObscuredText();
      case "attachment":
        return this.renderObscuredAttachment();
      case "embed":
        return this.renderObscuredEmbed();
      default:
        return (0, Chunk823379.vE)(module)
    }
  }
  get ariaLabel() {
    let {
      reason: e = Chunk936141.wk.SPOILER
    } = this.props;
    switch (module) {
      case Chunk936141.wk.SPOILER:
        return Chunk388032.intl.string(Chunk388032.t["F+x38P"]);
      case Chunk936141.wk.EXPLICIT_CONTENT:
      case Chunk936141.wk.GORE_CONTENT:
        return Chunk388032.intl.string(Chunk388032.t.mlJ8VV);
      case Chunk936141.wk.POTENTIAL_EXPLICIT_CONTENT:
        return Chunk388032.intl.string(Chunk388032.t["MRdR7+"]);
      default:
        return (0, Chunk823379.vE)(module)
    }
  }
  get tooltipText() {
    let {
      reason: e = Chunk936141.wk.SPOILER
    } = this.props;
    switch (module) {
      case Chunk936141.wk.SPOILER:
        return Chunk388032.intl.string(Chunk388032.t["F+x38P"]);
      case Chunk936141.wk.EXPLICIT_CONTENT:
      case Chunk936141.wk.GORE_CONTENT:
        return Chunk388032.intl.string(Chunk388032.t.mlJ8VV);
      case Chunk936141.wk.POTENTIAL_EXPLICIT_CONTENT:
        return Chunk388032.intl.string(Chunk388032.t["MRdR7+"]);
      default:
        return (0, Chunk823379.vE)(module)
    }
  }
  constructor(...e) {
    super(...e), g(this, "state", {
      visible: false
    }), g(this, "removeObscurity", e => {
      let {
        visible: t
      } = this.state;
      if (t) return;
      t || (e.preventDefault(), e.stopPropagation()), this.setState({
        visible: true
      });
      let {
        onReveal: n
      } = this.props;
      null != n && n()
    }), g(this, "handleToggleObscurity", e => {
      if (e.stopPropagation(), e.nativeEvent.stopPropagation(), (0, f.Jl)({
          obscure: this.state.visible
        }), this.props.shouldAgeVerify) return void c.Z.showAgeVerificationGetStartedModal(u.cU.OBSCURED_MEDIA);
      let {
        onToggleObscurity: t
      } = this.props;
      null != t && t(e), this.setState(e => ({
        visible: !e.visible
      }))
    }), g(this, "obscure", () => {
      let {
        visible: e
      } = this.state;
      e && this.setState({
        visible: false
      })
    })
  }
}
let C = e => {
  let t = (0, f.m8)() && null != e.reason && _.eq.has(e.reason),
    n = (0, d.Jm)();
  return (0, r.jsx)(N, y(E({}, e), {
    shouldAgeVerify: t,
    isVerifiedTeen: n
  }))
};
C.Types = O, C.Reasons = Chunk936141.wk;
let R = C