/** Chunk was on 31649 **/
/** chunk id: 211065, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk410575 = require("./410575.jsx"),
  Chunk318766 = require("./318766.jsx"),
  Chunk907040 = require("./907040.jsx"),
  Chunk246133 = require("./246133.js"),
  Chunk695346 = require("./695346.js"),
  Chunk293273 = require("./293273.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk720449 = require("./720449.js"),
  Chunk684269 = require("./684269.js"),
  Chunk678865 = require("./678865.js"),
  Chunk745579 = require("./745579.js"),
  Chunk875425 = require("./875425.js"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk486384 = require("./486384.js");

function w(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = n, t
}

function P(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), a.forEach(function(e) {
      w(t, e, n[e])
    })
  }
  return t
}

function N(t, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(t);
      n.push.apply(n, a)
    }
    return n
  })(Object(e)).forEach(function(n) {
    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
  }), t
}

function E(t) {
  return (0, a.jsxs)("div", {
    className: T.statusOptionItem,
    children: [(0, a.jsx)(s.qbd, {
      status: t.value,
      size: 10,
      className: T.statusIcon
    }), t.label]
  })
}
class D extends Chunk647438.PureComponent {
  componentDidMount() {
    let {
      sourceAnalyticsLocations: t,
      sourceAnalyticsContext: e
    } = this.props;
    Chunk626135.default.track(Chunk981631.rMx.OPEN_MODAL, {
      source: null == exports ? true : exports.location,
      type: Chunk981631.jXE.CUSTOM_STATUS_MODAL,
      load_id: null == exports ? true : exports.loadId,
      location_stack: module
    })
  }
  get analyticsLocation() {
    return {
      page: Chunk981631.ZY5.CUSTOM_STATUS_MODAL
    }
  }
  getEmojiButtonRenderer() {
    let {
      emojiInfo: t
    } = this.state;
    return null == module ? null : () => (0, Chunk951288.jsx)(Chunk596454.Z, {
      className: Chunk486384.emoji,
      emojiId: module.id,
      emojiName: module.name,
      animated: !!module.animated
    })
  }
  renderCustomStatusInput() {
    let {
      user: t
    } = this.props, {
      text: e,
      emojiInfo: n
    } = this.state;
    return (0, Chunk951288.jsx)(Chunk481060.hjN, {
      className: Chunk486384.formGroup,
      title: Chunk388032.intl.formatToPlainString(Chunk388032.t["/w9pHx"], {
        username: module.username
      }),
      children: (0, Chunk951288.jsxs)("div", {
        className: Chunk486384.inputContainer,
        children: [(0, Chunk951288.jsx)("div", {
          className: Chunk486384.emojiButtonContainer
        }), (0, Chunk951288.jsx)(Chunk481060.oil, {
          maxLength: Chunk875425.s0,
          value: exports,
          placeholder: Chunk388032.intl.string(Chunk388032.t["zYR38/"]),
          onChange: this.handleStatusChange,
          onKeyDown: this.handleKeyPress,
          autoFocus: true,
          clearable: {
            show: exports.length > 0 || null != require
          },
          onClear: this.handleClearStatus,
          leading: {
            type: "emoji",
            button: (0, Chunk951288.jsx)(Chunk481060.yRy, {
              targetElementRef: this.emojiButtonRef,
              renderPopout: this.renderEmojiPicker,
              position: "left",
              animation: Chunk481060.yRy.Animation.NONE,
              align: "top",
              children: (t, e) => {
                let {
                  isShown: n
                } = e;
                return (0, a.jsx)(d.Z, N(P({}, t), {
                  ref: this.emojiButtonRef,
                  active: n,
                  className: T.emojiButton,
                  tabIndex: 0,
                  renderButtonContents: this.getEmojiButtonRenderer()
                }))
              }
            })
          }
        })]
      })
    })
  }
  renderClearAfter() {
    let {
      clearAfter: t
    } = this.state;
    return (0, Chunk951288.jsx)(Chunk481060.hjN, {
      className: Chunk486384.formGroup,
      title: Chunk388032.intl.string(Chunk388032.t.E45wvL),
      children: (0, Chunk951288.jsx)(Chunk481060.q4e, {
        placeholder: Chunk388032.intl.string(Chunk388032.t.E45wvL),
        maxVisibleItems: Chunk875425.wS.length,
        value: module,
        options: Chunk875425.wS.map(t => ({
          value: t,
          key: t,
          label: (0, v.Z)(t)
        })),
        onChange: this.handleChangeClearAfter
      })
    })
  }
  renderStatusInput() {
    let {
      status: t
    } = this.state;
    return (0, Chunk951288.jsx)(Chunk481060.hjN, {
      className: Chunk486384.formGroup,
      title: Chunk388032.intl.string(Chunk388032.t.zOdg0N),
      children: (0, Chunk951288.jsx)(Chunk481060.q4e, {
        maxVisibleItems: 4,
        value: module,
        options: Chunk875425.Df.map(t => N(P({}, t), {
          value: t.value,
          key: t.value,
          label: t.label()
        })),
        onChange: this.handleChangeStatus,
        renderOptionLabel: E
      })
    })
  }
  render() {
    let {
      transitionState: t,
      onClose: e
    } = this.props;
    return (0, Chunk951288.jsx)(Chunk410575.Z, N(P({}, this.analyticsLocation), {
      children: (0, Chunk951288.jsxs)(Chunk481060.Y0X, {
        transitionState: module,
        className: Chunk486384.modalRoot,
        "aria-label": Chunk388032.intl.string(Chunk388032.t["/UonHB"]),
        parentComponent: "CustomStatusModal",
        children: [(0, Chunk951288.jsxs)(Chunk481060.xBx, {
          separator: false,
          className: Chunk486384.headerContainer,
          children: [(0, Chunk951288.jsx)("div", {
            className: Chunk486384.art
          }), (0, Chunk951288.jsx)("div", {
            className: Chunk486384.header,
            children: (0, Chunk951288.jsx)(Chunk481060.H, {
              className: Chunk486384.headerText,
              children: Chunk388032.intl.string(Chunk388032.t["/UonHB"])
            })
          }), (0, Chunk951288.jsx)(Chunk481060.olH, {
            onClick: exports,
            className: Chunk486384.modalCloseButton
          })]
        }), (0, Chunk951288.jsxs)(Chunk481060.hzk, {
          children: [this.renderCustomStatusInput(), this.renderClearAfter(), (0, Chunk951288.jsx)(Chunk481060.$i$, {
            className: Chunk486384.formDivider
          }), this.renderStatusInput()]
        }), (0, Chunk951288.jsxs)(Chunk481060.mzw, {
          className: Chunk486384.modalFooter,
          children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: Chunk388032.intl.string(Chunk388032.t.R3BPHx),
            onClick: this.handleSubmit
          }), (0, Chunk951288.jsx)(Chunk481060.Avr, {
            onClick: exports,
            variant: "secondary",
            size: "sm",
            textVariant: "text-md/medium",
            color: Chunk486384.cancelButton,
            text: Chunk388032.intl.string(Chunk388032.t["ETE/oK"])
          })]
        })]
      })
    }))
  }
  constructor(...t) {
    super(...t), w(this, "emojiButtonRef", l.createRef()), w(this, "state", {
      emojiInfo: null != this.props.customStatus ? this.props.customStatus.emoji : null,
      text: null != this.props.customStatus && null != this.props.customStatus.state ? this.props.customStatus.state : "",
      clearAfter: (0, j.Z)(),
      status: (0, O.Z)()
    }), w(this, "handleClearStatus", () => {
      this.setState({
        emojiInfo: null,
        text: ""
      })
    }), w(this, "handleSubmit", t => {
      t.preventDefault(), this.handleSaveStatus()
    }), w(this, "handleStatusChange", t => {
      this.setState({
        text: t
      })
    }), w(this, "handleEmojiChange", t => {
      if (null == t) return;
      let e = null != t.id ? {
        id: t.id,
        name: t.name,
        animated: t.animated
      } : {
        id: null,
        name: t.optionallyDiverseSequence,
        animated: false
      };
      this.setState({
        emojiInfo: e
      })
    }), w(this, "handleChangeClearAfter", t => {
      this.setState({
        clearAfter: t
      })
    }), w(this, "handleChangeStatus", t => {
      this.setState({
        status: t
      })
    }), w(this, "handleSaveStatus", () => {
      let {
        sourceAnalyticsContext: t,
        onClose: e
      } = this.props, {
        emojiInfo: n,
        text: a,
        clearAfter: l,
        status: r
      } = this.state, i = p.co.getSetting();
      i !== r && (0, f.Z)({
        nextStatus: r,
        prevStatus: i,
        analyticsContext: t
      }), (0, g.Z)({
        text: a,
        emojiInfo: n,
        clearAfter: l,
        analyticsContext: t
      }), e()
    }), w(this, "handleKeyPress", t => {
      t.which === C.yXg.ENTER && this.handleSaveStatus()
    }), w(this, "renderEmojiPicker", t => {
      let {
        closePopout: e
      } = t, {
        onClose: n
      } = this.props;
      return (0, a.jsx)(m.Z, {
        closePopout: e,
        onSelectEmoji: t => {
          let {
            emoji: n,
            willClose: a
          } = t;
          this.handleEmojiChange(n), a && e()
        },
        pickerIntention: _.Hz.STATUS,
        onNavigateAway: n
      })
    })
  }
}
let I = Chunk442837.ZP.connectStores([Chunk293273.Z, Chunk594174.default], () => {
  let t = Chunk594174.default.getCurrentUser();
  return i()(null != module, "CustomStatusModal: user cannot be null"), {
    customStatus: Chunk293273.Z.getCustomStatusActivity(),
    user: module
  }
}, {
  forwardRef: true
})(D)