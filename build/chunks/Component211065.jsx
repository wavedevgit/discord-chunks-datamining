/** Chunk was on 31649 **/
/** chunk id: 211065, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
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
  Chunk88507 = require("./88507.js");

function T(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = n, t
}

function w(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), r.forEach(function(e) {
      T(t, e, n[e])
    })
  }
  return t
}

function N(t, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      n.push.apply(n, r)
    }
    return n
  })(Object(e)).forEach(function(n) {
    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
  }), t
}

function D(t) {
  return (0, r.jsxs)("div", {
    className: P.statusOptionItem,
    children: [(0, r.jsx)(s.qbd, {
      status: t.value,
      size: 10,
      className: P.statusIcon
    }), t.label]
  })
}
class E extends Chunk647438.PureComponent {
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
      className: Chunk88507.emoji,
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
      className: Chunk88507.formGroup,
      title: Chunk388032.intl.formatToPlainString(Chunk388032.t["/w9pHx"], {
        username: module.username
      }),
      children: (0, Chunk951288.jsxs)("div", {
        className: Chunk88507.inputContainer,
        children: [(0, Chunk951288.jsx)("div", {
          className: Chunk88507.emojiButtonContainer
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
                return (0, r.jsx)(d.Z, N(w({}, t), {
                  ref: this.emojiButtonRef,
                  active: n,
                  className: P.emojiButton,
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
      className: Chunk88507.formGroup,
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
      className: Chunk88507.formGroup,
      title: Chunk388032.intl.string(Chunk388032.t.zOdg0N),
      children: (0, Chunk951288.jsx)(Chunk481060.q4e, {
        maxVisibleItems: 4,
        value: module,
        options: Chunk875425.Df.map(t => N(w({}, t), {
          value: t.value,
          key: t.value,
          label: t.label()
        })),
        onChange: this.handleChangeStatus,
        renderOptionLabel: D
      })
    })
  }
  render() {
    let {
      transitionState: t,
      onClose: e
    } = this.props;
    return (0, Chunk951288.jsx)(Chunk410575.Z, N(w({}, this.analyticsLocation), {
      children: (0, Chunk951288.jsxs)(Chunk481060.Y0X, {
        transitionState: module,
        className: Chunk88507.modalRoot,
        "aria-label": Chunk388032.intl.string(Chunk388032.t["/UonHB"]),
        parentComponent: "CustomStatusModal",
        children: [(0, Chunk951288.jsxs)(Chunk481060.xBx, {
          separator: false,
          className: Chunk88507.headerContainer,
          children: [(0, Chunk951288.jsx)("div", {
            className: Chunk88507.art
          }), (0, Chunk951288.jsx)("div", {
            className: Chunk88507.header,
            children: (0, Chunk951288.jsx)(Chunk481060.H, {
              className: Chunk88507.headerText,
              children: Chunk388032.intl.string(Chunk388032.t["/UonHB"])
            })
          }), (0, Chunk951288.jsx)(Chunk481060.olH, {
            onClick: exports,
            className: Chunk88507.modalCloseButton
          })]
        }), (0, Chunk951288.jsxs)(Chunk481060.hzk, {
          children: [this.renderCustomStatusInput(), this.renderClearAfter(), (0, Chunk951288.jsx)(Chunk481060.$i$, {
            className: Chunk88507.formDivider
          }), this.renderStatusInput()]
        }), (0, Chunk951288.jsxs)(Chunk481060.mzw, {
          className: Chunk88507.modalFooter,
          children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: Chunk388032.intl.string(Chunk388032.t.R3BPHx),
            onClick: this.handleSubmit
          }), (0, Chunk951288.jsx)(Chunk481060.Avr, {
            onClick: exports,
            variant: "secondary",
            size: "sm",
            textVariant: "text-md/medium",
            color: Chunk88507.cancelButton,
            text: Chunk388032.intl.string(Chunk388032.t["ETE/oK"])
          })]
        })]
      })
    }))
  }
  constructor(...t) {
    super(...t), T(this, "emojiButtonRef", a.createRef()), T(this, "state", {
      emojiInfo: null != this.props.customStatus ? this.props.customStatus.emoji : null,
      text: null != this.props.customStatus && null != this.props.customStatus.state ? this.props.customStatus.state : "",
      clearAfter: (0, O.Z)(),
      status: (0, j.Z)()
    }), T(this, "handleClearStatus", () => {
      this.setState({
        emojiInfo: null,
        text: ""
      })
    }), T(this, "handleSubmit", t => {
      t.preventDefault(), this.handleSaveStatus()
    }), T(this, "handleStatusChange", t => {
      this.setState({
        text: t
      })
    }), T(this, "handleEmojiChange", t => {
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
    }), T(this, "handleChangeClearAfter", t => {
      this.setState({
        clearAfter: t
      })
    }), T(this, "handleChangeStatus", t => {
      this.setState({
        status: t
      })
    }), T(this, "handleSaveStatus", () => {
      let {
        sourceAnalyticsContext: t,
        onClose: e
      } = this.props, {
        emojiInfo: n,
        text: r,
        clearAfter: a,
        status: i
      } = this.state, l = p.co.getSetting();
      l !== i && (0, f.Z)({
        nextStatus: i,
        prevStatus: l,
        analyticsContext: t
      }), (0, g.Z)({
        text: r,
        emojiInfo: n,
        clearAfter: a,
        analyticsContext: t
      }), e()
    }), T(this, "handleKeyPress", t => {
      t.which === y.yXg.ENTER && this.handleSaveStatus()
    }), T(this, "renderEmojiPicker", t => {
      let {
        closePopout: e
      } = t, {
        onClose: n
      } = this.props;
      return (0, r.jsx)(m.Z, {
        closePopout: e,
        onSelectEmoji: t => {
          let {
            emoji: n,
            willClose: r
          } = t;
          this.handleEmojiChange(n), r && e()
        },
        pickerIntention: _.Hz.STATUS,
        onNavigateAway: n
      })
    })
  }
}
let Z = Chunk442837.ZP.connectStores([Chunk293273.Z, Chunk594174.default], () => {
  let t = Chunk594174.default.getCurrentUser();
  return l()(null != module, "CustomStatusModal: user cannot be null"), {
    customStatus: Chunk293273.Z.getCustomStatusActivity(),
    user: module
  }
}, {
  forwardRef: true
})(E)