/** Chunk was on 31649 **/
/** chunk id: 211065, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
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
  Chunk964779 = require("./964779.js");

function w(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = n, t
}

function N(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), l.forEach(function(e) {
      w(t, e, n[e])
    })
  }
  return t
}

function E(t, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(t);
      n.push.apply(n, l)
    }
    return n
  })(Object(e)).forEach(function(n) {
    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
  }), t
}

function D(t) {
  return (0, l.jsxs)("div", {
    className: P.statusOptionItem,
    children: [(0, l.jsx)(u.qbd, {
      status: t.value,
      size: 10,
      className: P.statusIcon
    }), t.label]
  })
}
class I extends Chunk73800.PureComponent {
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
    return null == module ? null : () => (0, Chunk255367.jsx)(Chunk596454.Z, {
      className: Chunk964779.emoji,
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
    return (0, Chunk255367.jsx)(Chunk481060.hjN, {
      className: Chunk964779.formGroup,
      title: Chunk388032.intl.formatToPlainString(Chunk388032.t["/w9pHx"], {
        username: module.username
      }),
      children: (0, Chunk255367.jsxs)("div", {
        className: Chunk964779.inputContainer,
        children: [(0, Chunk255367.jsx)("div", {
          className: Chunk964779.emojiButtonContainer,
          children: (0, Chunk255367.jsx)(Chunk481060.yRy, {
            targetElementRef: this.emojiButtonRef,
            renderPopout: this.renderEmojiPicker,
            position: "left",
            animation: Chunk481060.yRy.Animation.NONE,
            align: "top",
            children: (t, e) => {
              let {
                isShown: n
              } = e;
              return (0, l.jsx)(m.Z, E(N({}, t), {
                ref: this.emojiButtonRef,
                active: n,
                className: P.emojiButton,
                tabIndex: 0,
                renderButtonContents: this.getEmojiButtonRenderer()
              }))
            }
          })
        }), (0, Chunk255367.jsx)(Chunk755721.Is, {
          maxLength: Chunk875425.s0,
          value: exports,
          inputClassName: Chunk964779.input,
          placeholder: Chunk388032.intl.string(Chunk388032.t["zYR38/"]),
          onChange: this.handleStatusChange,
          onKeyPress: this.handleKeyPress,
          autoFocus: true
        }), exports.length > 0 || null != require ? (0, Chunk255367.jsx)(Chunk481060.P3F, {
          focusProps: {
            offset: {
              top: 8,
              bottom: 8,
              left: false,
              right: false
            }
          },
          className: Chunk964779.clearButton,
          onClick: this.handleClearStatus,
          children: (0, Chunk255367.jsx)(Chunk481060.k$p, {
            size: "md",
            color: "currentColor",
            className: Chunk964779.clearIcon
          })
        }) : null]
      })
    })
  }
  renderClearAfter() {
    let {
      clearAfter: t
    } = this.state;
    return (0, Chunk255367.jsx)(Chunk481060.hjN, {
      className: Chunk964779.formGroup,
      title: Chunk388032.intl.string(Chunk388032.t.E45wvL),
      children: (0, Chunk255367.jsx)(Chunk481060.q4e, {
        placeholder: Chunk388032.intl.string(Chunk388032.t.E45wvL),
        maxVisibleItems: Chunk875425.wS.length,
        value: module,
        options: Chunk875425.wS.map(t => ({
          value: t,
          key: t,
          label: (0, x.Z)(t)
        })),
        onChange: this.handleChangeClearAfter
      })
    })
  }
  renderStatusInput() {
    let {
      status: t
    } = this.state;
    return (0, Chunk255367.jsx)(Chunk481060.hjN, {
      className: Chunk964779.formGroup,
      title: Chunk388032.intl.string(Chunk388032.t.zOdg0N),
      children: (0, Chunk255367.jsx)(Chunk481060.q4e, {
        maxVisibleItems: 4,
        value: module,
        options: Chunk875425.Df.map(t => E(N({}, t), {
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
    return (0, Chunk255367.jsx)(Chunk410575.Z, E(N({}, this.analyticsLocation), {
      children: (0, Chunk255367.jsxs)(Chunk481060.Y0X, {
        transitionState: module,
        className: Chunk964779.modalRoot,
        "aria-label": Chunk388032.intl.string(Chunk388032.t["/UonHB"]),
        parentComponent: "CustomStatusModal",
        children: [(0, Chunk255367.jsxs)(Chunk481060.xBx, {
          separator: false,
          className: Chunk964779.headerContainer,
          children: [(0, Chunk255367.jsx)("div", {
            className: Chunk964779.art
          }), (0, Chunk255367.jsx)("div", {
            className: Chunk964779.header,
            children: (0, Chunk255367.jsx)(Chunk481060.H, {
              className: Chunk964779.headerText,
              children: Chunk388032.intl.string(Chunk388032.t["/UonHB"])
            })
          }), (0, Chunk255367.jsx)(Chunk481060.olH, {
            onClick: exports,
            className: Chunk964779.modalCloseButton
          })]
        }), (0, Chunk255367.jsxs)(Chunk481060.hzk, {
          children: [this.renderCustomStatusInput(), this.renderClearAfter(), (0, Chunk255367.jsx)(Chunk481060.$i$, {
            className: Chunk964779.formDivider
          }), this.renderStatusInput()]
        }), (0, Chunk255367.jsxs)(Chunk481060.mzw, {
          className: Chunk964779.modalFooter,
          children: [(0, Chunk255367.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: Chunk388032.intl.string(Chunk388032.t.R3BPHx),
            onClick: this.handleSubmit
          }), (0, Chunk255367.jsx)(Chunk481060.Avr, {
            onClick: exports,
            variant: "secondary",
            size: "sm",
            textVariant: "text-md/medium",
            color: Chunk964779.cancelButton,
            text: Chunk388032.intl.string(Chunk388032.t["ETE/oK"])
          })]
        })]
      })
    }))
  }
  constructor(...t) {
    super(...t), w(this, "emojiButtonRef", a.createRef()), w(this, "state", {
      emojiInfo: null != this.props.customStatus ? this.props.customStatus.emoji : null,
      text: null != this.props.customStatus && null != this.props.customStatus.state ? this.props.customStatus.state : "",
      clearAfter: (0, O.Z)(),
      status: (0, v.Z)()
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
        text: l,
        clearAfter: a,
        status: r
      } = this.state, i = h.co.getSetting();
      i !== r && (0, p.Z)({
        nextStatus: r,
        prevStatus: i,
        analyticsContext: t
      }), (0, j.Z)({
        text: l,
        emojiInfo: n,
        clearAfter: a,
        analyticsContext: t
      }), e()
    }), w(this, "handleKeyPress", t => {
      t.which === _.yXg.ENTER && this.handleSaveStatus()
    }), w(this, "renderEmojiPicker", t => {
      let {
        closePopout: e
      } = t, {
        onClose: n
      } = this.props;
      return (0, l.jsx)(f.Z, {
        closePopout: e,
        onSelectEmoji: t => {
          let {
            emoji: n,
            willClose: l
          } = t;
          this.handleEmojiChange(n), l && e()
        },
        pickerIntention: T.Hz.STATUS,
        onNavigateAway: n
      })
    })
  }
}
let Z = Chunk442837.ZP.connectStores([Chunk293273.Z, Chunk594174.default], () => {
  let t = Chunk594174.default.getCurrentUser();
  return i()(null != module, "CustomStatusModal: user cannot be null"), {
    customStatus: Chunk293273.Z.getCustomStatusActivity(),
    user: module
  }
}, {
  forwardRef: true
})(I)