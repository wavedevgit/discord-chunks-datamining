/** Chunk was on web.js **/
/** chunk id: 411405, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => w,
  aQ: () => A
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
  Chunk936141 = require("./936141.js"),
  Chunk823379 = require("./823379.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk468830 = require("./468830.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var v = function(e) {
  return e.TEXT = "text", e.ATTACHMENT = "attachment", e.EMBED = "embed", e
}(v || {});
let S = e => {
    let {
      className: t
    } = e;
    return (0, r.jsx)("div", {
      className: o()(g.spoilerWarning, t),
      children: m.intl.string(m.t["F+x38C"])
    })
  },
  I = e => {
    let {
      className: t,
      isSingleMosaicItem: n,
      obscureOnly: i
    } = e;
    return (0, r.jsx)("div", {
      className: o()(g.explicitContentWarning, t),
      children: i ? null : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(c.fFY, {
          size: "lg",
          color: s.Z.colors.WHITE
        }), n && (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          className: g.explicitContentWarningText,
          children: m.intl.string(m.t.SpxcUR)
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
        return (0, r.jsx)(S, {
          className: n
        });
      case _.wk.EXPLICIT_CONTENT:
      case _.wk.GORE_CONTENT:
      case _.wk.SELF_HARM_CONTENT:
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
        return (0, h.vE)(t)
    }
  },
  C = e => {
    let {
      obscureReason: t,
      isVisible: n,
      handleToggleObscurity: i,
      obscurityControlClassName: a
    } = e;
    return t !== _.wk.EXPLICIT_CONTENT && t !== _.wk.GORE_CONTENT && t !== _.wk.SELF_HARM_CONTENT ? null : (0, r.jsx)("div", {
      className: o()(g.obscureButtonContainer, a),
      children: (0, r.jsx)(c.P3F, {
        className: g.obscureHoverButton,
        onClick: i,
        "aria-label": m.intl.string(m.t.ex5G9m),
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
  A = Chunk473749.createContext(false);
class N extends Chunk473749.PureComponent {
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
      reason: s = _.wk.SPOILER,
      isSingleMosaicItem: l = false,
      obscurityControlClassName: u,
      isVerifiedTeen: d
    } = this.props, {
      visible: f
    } = this.state, p = (0, r.jsx)(A.Consumer, {
      children: p => {
        let h = p || f || !a;
        return _.Xh.has(s) && !t ? (0, r.jsxs)("div", {
          "aria-label": h ? true : this.ariaLabel,
          "aria-expanded": h,
          style: i,
          className: o()(n, g.spoilerContent, g.spoilerContainer, g.attachmentContainer, g.opaque, {
            [g.hidden]: !h,
            [g.constrainedObscureContent]: l
          }),
          role: h ? "presentation" : "button",
          tabIndex: h ? false : 0,
          children: [h || t ? null : (0, r.jsx)(T, {
            reason: s,
            isSingleMosaicItem: l
          }), (0, r.jsx)("div", {
            "aria-hidden": !h,
            className: g.spoilerInnerContainer,
            children: e(!h)
          }), d ? null : (0, r.jsx)(C, {
            obscureReason: s,
            isVisible: f,
            handleToggleObscurity: this.handleToggleObscurity,
            obscurityControlClassName: u
          })]
        }) : (0, r.jsxs)(c.P3F, {
          onClick: h ? true : this.removeObscurity,
          "aria-label": h ? true : this.ariaLabel,
          "aria-expanded": h,
          style: i,
          className: o()(n, g.spoilerContent, g.spoilerContainer, g.attachmentContainer, {
            [g.hidden]: !h,
            [g.hiddenSpoiler]: !h
          }),
          role: h ? "presentation" : "button",
          tabIndex: h ? false : 0,
          children: [h || t ? null : (0, r.jsx)(T, {
            reason: s,
            isSingleMosaicItem: l
          }), (0, r.jsx)("div", {
            "aria-hidden": !h,
            className: g.spoilerInnerContainer,
            children: e(!h)
          })]
        })
      }
    });
    return t ? this.renderWithTooltip(p) : p
  }
  renderObscuredEmbed() {
    let {
      children: e,
      className: t,
      containerStyles: n,
      isSingleMosaicItem: i,
      obscurityControlClassName: a,
      reason: s = _.wk.SPOILER,
      isVerifiedTeen: l
    } = this.props, {
      visible: u
    } = this.state;
    return (0, r.jsx)(A.Consumer, {
      children: d => {
        let f = d || u;
        return _.Xh.has(s) ? (0, r.jsxs)("div", {
          "aria-label": u ? true : this.ariaLabel,
          "aria-expanded": f,
          style: n,
          className: o()(t, g.spoilerContent, g.spoilerContainer, g.embedContainer, g.opaque, {
            [g.hidden]: !f
          }),
          role: f ? "presentation" : "button",
          tabIndex: f ? false : 0,
          children: [f ? null : (0, r.jsx)(T, {
            reason: s,
            isSingleMosaicItem: i
          }), (0, r.jsx)("div", {
            "aria-hidden": !f,
            className: g.spoilerInnerContainer,
            children: e(!f)
          }), l ? null : (0, r.jsx)(C, {
            obscureReason: s,
            isVisible: u,
            handleToggleObscurity: this.handleToggleObscurity,
            obscurityControlClassName: a
          })]
        }) : (0, r.jsxs)(c.P3F, {
          "aria-label": this.ariaLabel,
          "aria-expanded": f,
          className: o()(t, g.spoilerContent, g.spoilerContainer, g.embedContainer, {
            [g.hidden]: !f
          }),
          onClick: f ? true : this.removeObscurity,
          style: n,
          role: f ? "presentation" : "button",
          tabIndex: f ? false : 0,
          children: [f ? null : (0, r.jsx)(T, {
            reason: s,
            className: g.embed
          }), (0, r.jsx)("div", {
            "aria-hidden": !f,
            children: e(!f)
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
    } = this.state, s = (0, r.jsx)(A.Consumer, {
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
          className: o()("obscured", n, g.spoilerContent, g.spoilerMarkdownContent, {
            [g.hidden]: !l
          }),
          children: (0, r.jsx)("span", {
            className: g.obscuredTextContent,
            children: (0, r.jsx)("span", {
              "aria-hidden": !l,
              className: g.obscuredTextContentInner,
              children: d
            })
          })
        })
      }
    });
    return this.renderWithTooltip(s)
  }
  render() {
    let {
      type: e = "text"
    } = this.props;
    switch (e) {
      case "text":
        return this.renderObscuredText();
      case "attachment":
        return this.renderObscuredAttachment();
      case "embed":
        return this.renderObscuredEmbed();
      default:
        return (0, h.vE)(e)
    }
  }
  get ariaLabel() {
    let {
      reason: e = _.wk.SPOILER
    } = this.props;
    switch (e) {
      case _.wk.SPOILER:
        return m.intl.string(m.t["F+x38C"]);
      case _.wk.EXPLICIT_CONTENT:
      case _.wk.GORE_CONTENT:
      case _.wk.SELF_HARM_CONTENT:
        return m.intl.string(m.t.mlJ8Vf);
      case _.wk.POTENTIAL_EXPLICIT_CONTENT:
        return m.intl.string(m.t.MRdR7z);
      default:
        return (0, h.vE)(e)
    }
  }
  get tooltipText() {
    let {
      reason: e = _.wk.SPOILER
    } = this.props;
    switch (e) {
      case _.wk.SPOILER:
        return m.intl.string(m.t["F+x38C"]);
      case _.wk.EXPLICIT_CONTENT:
      case _.wk.GORE_CONTENT:
      case _.wk.SELF_HARM_CONTENT:
        return m.intl.string(m.t.mlJ8Vf);
      case _.wk.POTENTIAL_EXPLICIT_CONTENT:
        return m.intl.string(m.t.MRdR7z);
      default:
        return (0, h.vE)(e)
    }
  }
  constructor(...e) {
    super(...e), E(this, "state", {
      visible: false
    }), E(this, "removeObscurity", e => {
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
    }), E(this, "handleToggleObscurity", e => {
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
    }), E(this, "obscure", () => {
      let {
        visible: e
      } = this.state;
      e && this.setState({
        visible: false
      })
    })
  }
}
let P = e => {
  let t = (0, p.m8)() && null != e.reason && _.eq.has(e.reason),
    n = (0, f.Jm)();
  return (0, r.jsx)(N, O(b({}, e), {
    shouldAgeVerify: t,
    isVerifiedTeen: n
  }))
};
P.Types = v, P.Reasons = Chunk936141.wk;
let w = P