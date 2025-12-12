/** Chunk was on web.js **/
/** chunk id: 411405, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => w,
  aQ: () => N
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk81643 = require("./81643.js"),
  Chunk247206 = require("./247206.js"),
  Chunk557069 = require("./557069.js"),
  Chunk936141 = require("./936141.js"),
  Chunk823379 = require("./823379.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk468830 = require("./468830.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var S = function(e) {
  return e.TEXT = "text", e.ATTACHMENT = "attachment", e.EMBED = "embed", e
}(S || {});
let I = e => {
    let {
      className: t
    } = e;
    return (0, r.jsx)("div", {
      className: o()(E.spoilerWarning, t),
      children: g.intl.string(g.t["F+x38C"])
    })
  },
  T = e => {
    let {
      className: t,
      isSingleMosaicItem: n,
      obscureOnly: i
    } = e;
    return (0, r.jsx)("div", {
      className: o()(E.explicitContentWarning, t),
      children: i ? null : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(c.fFY, {
          size: "lg",
          color: s.Z.colors.WHITE
        }), n && (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          className: E.explicitContentWarningText,
          children: g.intl.string(g.t.SpxcUR)
        })]
      })
    })
  },
  C = e => {
    let {
      reason: t = m.wk.SPOILER,
      className: n,
      isSingleMosaicItem: i = false
    } = e;
    switch (t) {
      case m.wk.SPOILER:
        return (0, r.jsx)(I, {
          className: n
        });
      case m.wk.EXPLICIT_CONTENT:
      case m.wk.GORE_CONTENT:
      case m.wk.SELF_HARM_CONTENT:
        return (0, r.jsx)(T, {
          isSingleMosaicItem: i,
          className: n
        });
      case m.wk.POTENTIAL_EXPLICIT_CONTENT:
        return (0, r.jsx)(T, {
          isSingleMosaicItem: i,
          className: n,
          obscureOnly: true
        });
      default:
        return (0, h.vE)(t)
    }
  },
  A = e => {
    let {
      obscureReason: t,
      isVisible: n,
      handleToggleObscurity: i,
      obscurityControlClassName: a
    } = e;
    return t !== m.wk.EXPLICIT_CONTENT && t !== m.wk.GORE_CONTENT && t !== m.wk.SELF_HARM_CONTENT ? null : (0, r.jsx)("div", {
      className: o()(E.obscureButtonContainer, a),
      children: (0, r.jsx)(c.P3F, {
        className: E.obscureHoverButton,
        onClick: i,
        "aria-label": g.intl.string(g.t.ex5G9m),
        children: n ? (0, r.jsx)(c.tEF, {
          size: "md",
          color: "currentColor"
        }) : (0, r.jsx)(c.kZF, {
          size: "md",
          color: "currentColor"
        })
      })
    })
  },
  N = Chunk473749.createContext(false);
class P extends Chunk473749.PureComponent {
  renderWithTooltip(e) {
    return this.state.visible ? e : (0, r.jsx)(l.i_, {
      position: "left",
      body: this.tooltipText,
      children: e
    })
  }
  renderObscuredAttachment() {
    let {
      children: e,
      inline: t,
      className: n,
      containerStyles: i,
      obscured: a = true,
      reason: s = Chunk936141.wk.SPOILER,
      isSingleMosaicItem: l = false,
      obscurityControlClassName: u,
      shouldAgeVerify: d,
      isVerifiedTeen: f,
      forceOpaqueObscure: p
    } = this.props, {
      visible: _
    } = this.state, h = (0, Chunk54381.jsx)(N.Consumer, {
      children: h => {
        let g = h || _ || !a;
        return m.Xh.has(s) && !t ? (0, r.jsxs)("div", {
          "aria-label": g ? true : this.ariaLabel,
          "aria-expanded": g,
          style: i,
          className: o()(n, E.spoilerContent, E.spoilerContainer, E.attachmentContainer, {
            [E.hidden]: !g,
            [E.constrainedObscureContent]: l,
            [E.opaque]: d || f || p
          }),
          role: g ? "presentation" : "button",
          tabIndex: g ? false : 0,
          children: [g || t ? null : (0, r.jsx)(C, {
            reason: s,
            isSingleMosaicItem: l
          }), (0, r.jsx)("div", {
            "aria-hidden": !g,
            className: E.spoilerInnerContainer,
            children: e(!g)
          }), f ? null : (0, r.jsx)(A, {
            obscureReason: s,
            isVisible: _,
            handleToggleObscurity: this.handleToggleObscurity,
            obscurityControlClassName: u
          })]
        }) : (0, r.jsxs)(c.P3F, {
          onClick: g ? true : this.removeObscurity,
          "aria-label": g ? true : this.ariaLabel,
          "aria-expanded": g,
          style: i,
          className: o()(n, E.spoilerContent, E.spoilerContainer, E.attachmentContainer, {
            [E.hidden]: !g,
            [E.hiddenSpoiler]: !g
          }),
          role: g ? "presentation" : "button",
          tabIndex: g ? false : 0,
          children: [g || t ? null : (0, r.jsx)(C, {
            reason: s,
            isSingleMosaicItem: l
          }), (0, r.jsx)("div", {
            "aria-hidden": !g,
            className: E.spoilerInnerContainer,
            children: e(!g)
          })]
        })
      }
    });
    return exports ? this.renderWithTooltip(Chunk823379) : Chunk823379
  }
  renderObscuredEmbed() {
    let {
      children: e,
      className: t,
      containerStyles: n,
      isSingleMosaicItem: i,
      obscurityControlClassName: a,
      reason: s = Chunk936141.wk.SPOILER,
      shouldAgeVerify: l,
      isVerifiedTeen: u,
      forceOpaqueObscure: d
    } = this.props, {
      visible: f
    } = this.state;
    return (0, Chunk54381.jsx)(N.Consumer, {
      children: p => {
        let _ = p || f;
        return m.Xh.has(s) ? (0, r.jsxs)("div", {
          "aria-label": f ? true : this.ariaLabel,
          "aria-expanded": _,
          style: n,
          className: o()(t, E.spoilerContent, E.spoilerContainer, E.embedContainer, {
            [E.hidden]: !_,
            [E.opaque]: l || u || d
          }),
          role: _ ? "presentation" : "button",
          tabIndex: _ ? false : 0,
          children: [_ ? null : (0, r.jsx)(C, {
            reason: s,
            isSingleMosaicItem: i
          }), (0, r.jsx)("div", {
            "aria-hidden": !_,
            className: E.spoilerInnerContainer,
            children: e(!_)
          }), u ? null : (0, r.jsx)(A, {
            obscureReason: s,
            isVisible: f,
            handleToggleObscurity: this.handleToggleObscurity,
            obscurityControlClassName: a
          })]
        }) : (0, r.jsxs)(c.P3F, {
          "aria-label": this.ariaLabel,
          "aria-expanded": _,
          className: o()(t, E.spoilerContent, E.spoilerContainer, E.embedContainer, {
            [E.hidden]: !_
          }),
          onClick: _ ? true : this.removeObscurity,
          style: n,
          role: _ ? "presentation" : "button",
          tabIndex: _ ? false : 0,
          children: [_ ? null : (0, r.jsx)(C, {
            reason: s,
            className: E.embed
          }), (0, r.jsx)("div", {
            "aria-hidden": !_,
            children: e(!_)
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
      visible: a
    } = this.state, s = (0, Chunk54381.jsx)(N.Consumer, {
      children: s => {
        let l = s || a,
          u = i.Children.toArray(e(l)),
          d = i.Children.map(u, e => i.isValidElement(e) && null != t ? t(e, l) : e);
        return (0, r.jsx)(c.P3F, {
          tag: "span",
          onClick: l ? true : this.removeObscurity,
          "aria-label": l ? true : this.ariaLabel,
          "aria-expanded": l,
          tabIndex: l ? false : 0,
          role: l ? "presentation" : "button",
          className: o()("obscured", n, E.spoilerContent, E.spoilerMarkdownContent, {
            [E.hidden]: !l
          }),
          children: (0, r.jsx)("span", {
            className: E.obscuredTextContent,
            children: (0, r.jsx)("span", {
              "aria-hidden": !l,
              className: E.obscuredTextContentInner,
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
        return Chunk388032.intl.string(Chunk388032.t["F+x38C"]);
      case Chunk936141.wk.EXPLICIT_CONTENT:
      case Chunk936141.wk.GORE_CONTENT:
      case Chunk936141.wk.SELF_HARM_CONTENT:
        return Chunk388032.intl.string(Chunk388032.t.mlJ8Vf);
      case Chunk936141.wk.POTENTIAL_EXPLICIT_CONTENT:
        return Chunk388032.intl.string(Chunk388032.t.MRdR7z);
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
        return Chunk388032.intl.string(Chunk388032.t["F+x38C"]);
      case Chunk936141.wk.EXPLICIT_CONTENT:
      case Chunk936141.wk.GORE_CONTENT:
      case Chunk936141.wk.SELF_HARM_CONTENT:
        return Chunk388032.intl.string(Chunk388032.t.mlJ8Vf);
      case Chunk936141.wk.POTENTIAL_EXPLICIT_CONTENT:
        return Chunk388032.intl.string(Chunk388032.t.MRdR7z);
      default:
        return (0, Chunk823379.vE)(module)
    }
  }
  constructor(...e) {
    super(...e), b(this, "state", {
      visible: false
    }), b(this, "removeObscurity", e => {
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
    }), b(this, "handleToggleObscurity", e => {
      if (e.stopPropagation(), e.nativeEvent.stopPropagation(), (0, p.Jl)({
          obscure: this.state.visible
        }), this.props.shouldAgeVerify) return void u.Z.showAgeVerificationGetStartedModal({
        entryPoint: d.cU.OBSCURED_MEDIA
      });
      let {
        onToggleObscurity: t
      } = this.props;
      null != t && t(e), this.setState(e => ({
        visible: !e.visible
      }))
    }), b(this, "obscure", () => {
      let {
        visible: e
      } = this.state;
      e && this.setState({
        visible: false
      })
    })
  }
}
let R = e => {
  let t = (0, p.m8)() && null != e.reason && m.eq.has(e.reason),
    n = (0, f.Jm)(),
    i = (0, _.z)("ObscuredConnected");
  return (0, r.jsx)(P, v(y({}, e), {
    shouldAgeVerify: t,
    isVerifiedTeen: n,
    forceOpaqueObscure: i
  }))
};
R.Types = S, R.Reasons = Chunk936141.wk;
let w = R