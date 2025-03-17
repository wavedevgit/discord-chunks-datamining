/** Chunk was on 31649 **/
n.d(t, {
  Z: () => k
}), n(47120);
var r = n(200651),
  a = n(192379),
  l = n(512722),
  i = n.n(l),
  o = n(442837),
  s = n(481060),
  u = n(596454),
  c = n(410575),
  d = n(318766),
  m = n(907040),
  p = n(246133),
  h = n(233200),
  f = n(695346),
  b = n(293273),
  S = n(594174),
  j = n(626135),
  g = n(720449),
  v = n(684269),
  x = n(678865),
  N = n(875425),
  O = n(981631),
  _ = n(185923),
  C = n(388032),
  y = n(888659);

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
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

function w(e) {
  return (0, r.jsxs)("div", {
    className: y.statusOptionItem,
    children: [(0, r.jsx)(s.qbd, {
      status: e.value,
      size: 10,
      className: y.statusIcon
    }), e.label]
  })
}
class P extends a.PureComponent {
  componentDidMount() {
    let {
      sourceAnalyticsLocations: e,
      sourceAnalyticsContext: t
    } = this.props;
    j.default.track(O.rMx.OPEN_MODAL, {
      source: null == t ? void 0 : t.location,
      type: O.jXE.CUSTOM_STATUS_MODAL,
      load_id: null == t ? void 0 : t.loadId,
      location_stack: e
    })
  }
  get analyticsLocation() {
    return {
      page: O.ZY5.CUSTOM_STATUS_MODAL
    }
  }
  get canShowStatusSelector() {
    return !(0, h.A)({
      location: "CustomStatusModal"
    })
  }
  getEmojiButtonRenderer() {
    let {
      emojiInfo: e
    } = this.state;
    return null == e ? null : () => (0, r.jsx)(u.Z, {
      className: y.emoji,
      emojiId: e.id,
      emojiName: e.name,
      animated: !!e.animated
    })
  }
  renderCustomStatusInput() {
    let {
      user: e
    } = this.props, {
      text: t,
      emojiInfo: n
    } = this.state;
    return (0, r.jsx)(s.hjN, {
      className: y.formGroup,
      title: C.NW.formatToPlainString(C.t["/w9pHx"], {
        username: e.username
      }),
      children: (0, r.jsxs)("div", {
        className: y.inputContainer,
        children: [(0, r.jsx)("div", {
          className: y.emojiButtonContainer,
          children: (0, r.jsx)(s.yRy, {
            renderPopout: this.renderEmojiPicker,
            position: "left",
            animation: s.yRy.Animation.NONE,
            align: "top",
            children: (e, t) => {
              let {
                isShown: n
              } = t;
              return (0, r.jsx)(d.Z, I(E({}, e), {
                active: n,
                className: y.emojiButton,
                tabIndex: 0,
                renderButtonContents: this.getEmojiButtonRenderer()
              }))
            }
          })
        }), (0, r.jsx)(s.oil, {
          maxLength: N.s0,
          value: t,
          inputClassName: y.input,
          placeholder: C.NW.string(C.t["zYR38/"]),
          onChange: this.handleStatusChange,
          onKeyPress: this.handleKeyPress,
          autoFocus: !0
        }), t.length > 0 || null != n ? (0, r.jsx)(s.zxk, {
          focusProps: {
            offset: {
              top: 8,
              bottom: 8,
              left: -2,
              right: -2
            }
          },
          className: y.clearButton,
          onClick: this.handleClearStatus,
          look: s.zxk.Looks.BLANK,
          size: s.zxk.Sizes.NONE,
          children: (0, r.jsx)(s.k$p, {
            size: "md",
            color: "currentColor",
            className: y.clearIcon
          })
        }) : null]
      })
    })
  }
  renderClearAfter() {
    let {
      clearAfter: e
    } = this.state;
    return (0, r.jsx)(s.hjN, {
      className: y.formGroup,
      title: C.NW.string(C.t.E45wvL),
      children: (0, r.jsx)(s.q4e, {
        placeholder: C.NW.string(C.t.E45wvL),
        maxVisibleItems: 5,
        value: e,
        options: N.wS.map(e => I(E({}, e), {
          value: e.value,
          key: e.value,
          label: e.label()
        })),
        onChange: this.handleChangeClearAfter
      })
    })
  }
  renderStatusInput() {
    let {
      status: e
    } = this.state;
    return (0, r.jsx)(s.hjN, {
      className: y.formGroup,
      title: C.NW.string(C.t.zOdg0N),
      children: (0, r.jsx)(s.q4e, {
        maxVisibleItems: 4,
        value: e,
        options: N.Df.map(e => I(E({}, e), {
          value: e.value,
          key: e.value,
          label: e.label()
        })),
        onChange: this.handleChangeStatus,
        renderOptionLabel: w
      })
    })
  }
  render() {
    let {
      transitionState: e,
      onClose: t
    } = this.props;
    return (0, r.jsx)(c.Z, I(E({}, this.analyticsLocation), {
      children: (0, r.jsxs)(s.Y0X, {
        transitionState: e,
        className: y.modalRoot,
        "aria-label": C.NW.string(C.t["/UonHB"]),
        children: [(0, r.jsxs)(s.xBx, {
          separator: !1,
          className: y.headerContainer,
          children: [(0, r.jsx)("div", {
            className: y.art
          }), (0, r.jsx)("div", {
            className: y.header,
            children: (0, r.jsx)(s.H, {
              className: y.headerText,
              children: C.NW.string(C.t["/UonHB"])
            })
          }), (0, r.jsx)(s.olH, {
            onClick: t,
            className: y.modalCloseButton
          })]
        }), (0, r.jsxs)(s.hzk, {
          children: [this.renderCustomStatusInput(), this.renderClearAfter(), this.canShowStatusSelector && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(s.$i$, {
              className: y.formDivider
            }), this.renderStatusInput()]
          })]
        }), (0, r.jsxs)(s.mzw, {
          children: [(0, r.jsx)(s.zxk, {
            onClick: this.handleSubmit,
            children: C.NW.string(C.t.R3BPHx)
          }), (0, r.jsx)(s.zxk, {
            onClick: t,
            look: s.zxk.Looks.LINK,
            color: y.cancelButton,
            children: C.NW.string(C.t["ETE/oK"])
          })]
        })]
      })
    }))
  }
  constructor(...e) {
    super(...e), T(this, "state", {
      emojiInfo: null != this.props.customStatus ? this.props.customStatus.emoji : null,
      text: null != this.props.customStatus && null != this.props.customStatus.state ? this.props.customStatus.state : "",
      clearAfter: (0, v.Z)(),
      status: (0, x.Z)()
    }), T(this, "handleClearStatus", () => {
      this.setState({
        emojiInfo: null,
        text: ""
      })
    }), T(this, "handleSubmit", e => {
      e.preventDefault(), this.handleSaveStatus()
    }), T(this, "handleStatusChange", e => {
      this.setState({
        text: e
      })
    }), T(this, "handleEmojiChange", e => {
      if (null == e) return;
      let t = null != e.id ? {
        id: e.id,
        name: e.name,
        animated: e.animated
      } : {
        id: null,
        name: e.optionallyDiverseSequence,
        animated: !1
      };
      this.setState({
        emojiInfo: t
      })
    }), T(this, "handleChangeClearAfter", e => {
      this.setState({
        clearAfter: e
      })
    }), T(this, "handleChangeStatus", e => {
      this.setState({
        status: e
      })
    }), T(this, "handleSaveStatus", () => {
      let {
        sourceAnalyticsContext: e,
        onClose: t
      } = this.props, {
        emojiInfo: n,
        text: r,
        clearAfter: a,
        status: l
      } = this.state, i = f.co.getSetting();
      i !== l && (0, p.Z)(l, i, e), (0, g.Z)(r, n, a, e), t()
    }), T(this, "handleKeyPress", e => {
      e.which === O.yXg.ENTER && this.handleSaveStatus()
    }), T(this, "renderEmojiPicker", e => {
      let {
        closePopout: t
      } = e, {
        onClose: n
      } = this.props;
      return (0, r.jsx)(m.Z, {
        closePopout: t,
        onSelectEmoji: (e, n) => {
          this.handleEmojiChange(e), n && t()
        },
        pickerIntention: _.Hz.STATUS,
        onNavigateAway: n
      })
    })
  }
}
let k = o.ZP.connectStores([b.Z, S.default], () => {
  let e = S.default.getCurrentUser();
  return i()(null != e, "CustomStatusModal: user cannot be null"), {
    customStatus: b.Z.getCustomStatusActivity(),
    user: e
  }
}, {
  forwardRef: !0
})(P)