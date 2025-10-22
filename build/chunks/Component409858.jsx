/** Chunk was on 38029 **/
/** chunk id: 409858, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => tt
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk979554 = require("./979554.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk533307 = require("./533307.js"),
  Chunk410030 = require("./410030.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js"),
  Chunk597688 = require("./597688.js"),
  Chunk884697 = require("./884697.js"),
  Chunk583434 = require("./583434.js"),
  Chunk551425 = require("./551425.jsx"),
  Chunk832149 = require("./832149.jsx"),
  Chunk745510 = require("./745510.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk146779 = require("./146779.js"),
  Chunk763296 = require("./763296.js"),
  Chunk82142 = require("./82142.js"),
  Chunk283595 = require("./283595.js"),
  Chunk594174 = require("./594174.js"),
  Chunk509545 = require("./509545.js"),
  Chunk55563 = require("./55563.js"),
  Chunk626135 = require("./626135.js"),
  Chunk176354 = require("./176354.js"),
  Chunk669079 = require("./669079.js"),
  Chunk296848 = require("./296848.js"),
  Chunk51144 = require("./51144.js"),
  Chunk479446 = require("./479446.js"),
  Chunk715627 = require("./715627.jsx"),
  Chunk981632 = require("./981632.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk114644 = require("./114644.js"),
  Chunk167969 = require("./167969.js"),
  Chunk557256 = require("./557256.js");

function $(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = n, t
}
let q = t => {
    let {
      openedGift: e
    } = t, {
      createMultipleConfettiAt: n
    } = r.useContext(x.h);
    return r.useEffect(() => {
      e && n(window.innerWidth / 2, window.innerHeight / 4)
    }, [n, e]), null
  },
  J = t => {
    let {
      step: e,
      soundId: n
    } = t;
    return r.useEffect(() => {
      var t;
      if (e !== z.wZ8.CONFIRM) return;
      let i = C.Z.getSoundById(n);
      (0, Z.playGiftSound)(n, null != (t = null == i ? true : i.volume) ? t : 1)
    }, [e, n]), null
  };
class Q extends Chunk647438.Component {
  componentDidMount() {
    let {
      application: t,
      sku: e,
      customGiftMessage: n,
      giftCode: i,
      emojiName: r
    } = this.props;
    null == module && null != exports && Chunk728345.ZP.fetchApplication(exports.applicationId);
    let s = null != require || null != Chunk951288.giftStyle,
      l = (0, Chunk884697.mO)(Chunk951288),
      a = null != Chunk647438 ? Chunk176354.ZP.getURL(Chunk647438) : true;
    this.setState({
      isCustomGift: Chunk120356,
      isCollectiblesGift: l,
      emojiURL: Chunk979554,
      opened: l
    }), this.trackStepAnalytics()
  }
  get step() {
    let {
      libraryApplication: t,
      accepting: e,
      giftCode: n
    } = this.props, {
      error: i,
      accepted: r,
      opened: s,
      isCustomGift: l
    } = this.state;
    return (0, Chunk669079.TO)(module, require, {
      error: Chunk951288,
      accepted: Chunk647438,
      accepting: exports,
      opened: Chunk120356,
      isCustomGift: l
    })
  }
  get buttonText() {
    return (0, Chunk669079.L2)(this.step, this.props.giftCode, {
      isCustomGift: this.state.isCustomGift
    })
  }
  get firstHeaderText() {
    let {
      isCustomGift: t,
      opened: e,
      accepted: n
    } = this.state, {
      giftCode: i,
      subscriptionPlan: r,
      collectiblesItemType: s
    } = this.props;
    if (module && this.step === Chunk981631.wZ8.ERROR) return Chunk388032.intl.formatToMarkdownString(Chunk388032.t.JUvC0s, {});
    if (module && !require)
      if (!exports) return Chunk388032.intl.formatToPlainString(Chunk388032.t.xHzRub, {
        recipientDisplayName: Chunk51144.ZP.getName(Chunk594174.default.getCurrentUser())
      });
      else {
        let t = Chunk594174.default.getUser(Chunk951288.userId),
          e = Chunk51144.ZP.getName(module);
        if (null != Chunk120356) switch (Chunk120356) {
          case Chunk979554.Z.AVATAR_DECORATION:
            return Chunk388032.intl.formatToPlainString(Chunk388032.t.SKduyh, {
              sender: exports
            });
          case Chunk979554.Z.PROFILE_EFFECT:
            return Chunk388032.intl.formatToPlainString(Chunk388032.t["1w42T2"], {
              sender: exports
            });
          case Chunk979554.Z.NAMEPLATE:
            return Chunk388032.intl.formatToPlainString(Chunk388032.t.vFiQlU, {
              sender: exports
            });
          default:
            return Chunk388032.intl.formatToPlainString(Chunk388032.t.U4Ko2y, {
              sender: exports
            })
        }
        return Chunk388032.intl.formatToPlainString(Chunk388032.t["0UR0u4"], {
          sender: exports,
          timeInterval: (null == Chunk647438 ? true : Chunk647438.interval) === Chunk474936.rV.MONTH ? Chunk388032.intl.string(Chunk388032.t.FPybU7) : Chunk388032.intl.string(Chunk388032.t.tfqrhj)
        })
      } return null == this.props.sku ? null : (0, Chunk669079.dQ)(this.step, this.props.giftCode, this.props.sku)
  }
  get secondHeaderText() {
    if (!this.state.isCustomGift || this.state.opened || this.state.accepted) return null;
    let t = Chunk594174.default.getUser(this.props.giftCode.userId);
    return Chunk388032.intl.formatToPlainString(Chunk388032.t.DDO4Wz, {
      sender: Chunk51144.ZP.getName(module)
    })
  }
  get bodyText() {
    let {
      sku: t,
      accepting: e,
      libraryApplication: n,
      subscriptionPlan: i
    } = this.props;
    if (null == module) return null;
    let {
      error: r,
      accepted: s,
      isCustomGift: l,
      opened: a
    } = this.state;
    return !Chunk979554 && l ? null : (0, Chunk669079.iM)({
      step: this.step,
      sku: module,
      libraryApplication: require,
      error: Chunk647438,
      accepted: Chunk120356,
      accepting: exports,
      onGoToLibrary: this.handleGoToLibrary,
      subscriptionPlan: Chunk951288
    })
  }
  get errorMessage() {
    let {
      libraryApplication: t,
      accepting: e
    } = this.props, {
      error: n,
      accepted: i
    } = this.state;
    return (0, Chunk669079.e$)(module, require, Chunk951288, exports, this.handleGoToLibrary)
  }
  get handleClick() {
    let {
      giftCode: t,
      onClose: e
    } = this.props;
    switch (this.step) {
      case Chunk981631.wZ8.ERROR:
        return exports;
      case Chunk981631.wZ8.SUCCESS:
        if (__OVERLAY__ || null != module.subscriptionPlanId) return exports;
        return this.handleGoToLibrary;
      case Chunk981631.wZ8.OPEN:
        return this.handleOpen;
      case Chunk981631.wZ8.CONFIRM:
      default:
        return this.handleAccept
    }
  }
  trackStepAnalytics() {
    let {
      giftCode: t,
      customGiftMessage: e,
      emojiName: n,
      soundId: i,
      sku: r,
      analyticsLocations: s
    } = this.props, {
      isCustomGift: l
    } = this.state;
    Chunk626135.default.track(Chunk981631.rMx.GIFT_ACCEPT_STEP, {
      to_step: this.step,
      location_stack: Chunk120356,
      has_custom_message: l,
      is_custom_message_edited: l && exports !== Chunk388032.intl.string(Chunk388032.t.ZkOo1U),
      gift_style: module.giftStyle,
      gift_code: module.code,
      emoji_name: require,
      sound_id: Chunk951288,
      product_line: null == Chunk647438 ? true : Chunk647438.productLine
    })
  }
  render() {
    let {
      application: t,
      accepting: e,
      onClose: n,
      giftCode: r,
      headerId: s,
      transitionState: a,
      useReducedMotion: o,
      onComplete: c,
      customGiftMessage: d,
      emojiName: p,
      soundId: f,
      isThemeDark: h
    } = this.props, m = Chunk594174.default.getUser(Chunk647438.userId), {
      isCustomGift: g,
      isCollectiblesGift: b,
      accepted: y,
      opened: O,
      emojiURL: j
    } = this.state, P = Chunk594174.default.getCurrentUser(), x = this.step === Chunk981631.wZ8.ERROR, S = (null == Chunk647438 ? true : Chunk647438.userId) != null && null != Chunk832149 && (null == Chunk832149 ? true : Chunk832149.id) != null && Chunk647438.userId === Chunk832149.id;
    switch (this.step) {
      case Chunk981631.wZ8.ERROR:
        null == Chunk780384 || Chunk780384(Chunk647438, false);
        break;
      case Chunk981631.wZ8.SUCCESS:
        null == Chunk780384 || Chunk780384(Chunk647438, true)
    }
    return (0, Chunk951288.jsxs)("div", {
      ref: this.modalRef,
      children: [(0, Chunk951288.jsxs)(Chunk481060.Y0X, {
        "data-migration-pending": true,
        transitionState: Chunk979554,
        size: Chunk481060.CgR.SMALL,
        className: Chunk114644.modal,
        "aria-labelledby": Chunk120356,
        parentComponent: "GiftCodeModal",
        children: [null != Chunk647438.giftStyle && !Chunk728345 && !Chunk812206 && (0, Chunk951288.jsx)(Chunk981632.Z, {
          defaultAnimationState: this.getDefaultAnimationStatus(),
          idleAnimationState: this.getIdleAnimationStatus(),
          giftStyle: Chunk647438.giftStyle,
          className: Chunk114644.seasonalGiftIcon
        }), !Chunk728345 && (0, Chunk951288.jsx)("div", {
          className: Chunk114644.backSplash
        }), !Chunk812206 && (0, Chunk951288.jsx)(Chunk481060.olH, {
          "data-migration-pending": true,
          onClick: require,
          className: Chunk114644.closeButton
        }), (0, Chunk951288.jsxs)(Chunk481060.hzk, {
          "data-migration-pending": true,
          className: l()({
            [Chunk114644.content]: !Chunk728345,
            [Chunk114644.contentCustomGift]: Chunk728345
          }),
          children: [!Chunk812206 && (null == Chunk647438.giftStyle || Chunk728345 && Chunk597688) ? (0, Chunk951288.jsx)(Chunk925329.Z, {
            size: Chunk925329.A.LARGE,
            game: module,
            skuId: Chunk647438.skuId
          }) : null, Chunk745510 && (0, Chunk951288.jsx)("img", {
            alt: "",
            src: Chunk100527 ? Chunk167969 : Chunk557256
          }), (0, Chunk951288.jsxs)(Chunk481060.Heading, {
            id: Chunk120356,
            className: l()({
              [Chunk114644.customGiftHeader]: Chunk728345 && !Chunk597688,
              [Chunk114644.header]: !Chunk728345 || Chunk597688
            }),
            variant: "heading-sm/semibold",
            children: [(0, Chunk951288.jsx)("div", {
              className: l()({
                [Chunk114644.customGiftHeaderText]: Chunk728345
              }),
              children: this.firstHeaderText
            }), (0, Chunk951288.jsx)("div", {
              children: this.secondHeaderText
            })]
          }), !(Chunk728345 && !Chunk597688) && (0, Chunk951288.jsx)(Chunk481060.Text, {
            className: Chunk114644.body,
            variant: "text-sm/normal",
            children: this.bodyText
          }), Chunk728345 && !Chunk812206 && null != Chunk647438.giftStyle && !Chunk597688 && !Chunk745510 && (0, Chunk951288.jsx)(Chunk981632.Z, {
            defaultAnimationState: this.getDefaultAnimationStatus(),
            idleAnimationState: this.getIdleAnimationStatus(),
            className: Chunk114644.giftAnimation,
            giftStyle: Chunk647438.giftStyle
          }), this.state.opened && !Chunk745510 && Chunk812206 && (0, Chunk951288.jsx)(Chunk551425.Z, {
            giftCode: Chunk647438
          }), Chunk745510 && (0, Chunk951288.jsx)(Chunk481060.Text, {
            className: Chunk114644.body,
            variant: "text-md/normal",
            children: this.errorMessage
          }), Chunk728345 && this.state.opened && !this.state.accepted && !Chunk745510 && null != Chunk533307 && "" !== Chunk533307 && !Chunk313201 && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
            children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
              id: Chunk120356,
              variant: "heading-md/semibold",
              children: Chunk388032.intl.format(Chunk388032.t.DDO4Wz, {
                sender: Chunk51144.ZP.getName(Chunk906732)
              })
            }), (0, Chunk951288.jsx)(Chunk481060.Text, {
              className: Chunk114644.customMessage,
              variant: "text-md/semibold",
              children: Chunk533307
            })]
          }), (0, Chunk951288.jsx)(Chunk481060.Button, {
            variant: "primary",
            text: this.buttonText,
            loading: exports,
            onClick: () => {
              this.trackStepAnalytics(), this.handleClick()
            }
          })]
        })]
      }), null != Chunk647438.giftStyle && !Chunk442837 && this.step !== Chunk981631.wZ8.ERROR && !Chunk597688 && !exports && Chunk884697 && (null == Chunk410030 || null == Chunk583434 ? (0, Chunk951288.jsx)(q, {
        openedGift: Chunk884697 && !Chunk597688 && !exports
      }) : (0, Chunk951288.jsx)(Chunk715627.Z, {
        confettiTarget: this.modalRef.current,
        emojiURL: Chunk583434
      })), !Chunk597688 && !exports && Chunk884697 && null != Chunk607070 && (0, Chunk951288.jsx)(J, {
        soundId: Chunk607070,
        step: this.step
      })]
    })
  }
  constructor(...t) {
    super(...t), $(this, "state", {
      error: null,
      accepted: false,
      opened: false,
      isCustomGift: false,
      isCollectiblesGift: false,
      step: true,
      emojiURL: true
    }), $(this, "modalRef", r.createRef()), $(this, "handleOpen", () => {
      this.setState({
        opened: true
      })
    }), $(this, "handleAccept", async () => {
      let {
        giftCode: t,
        channelContext: e,
        onAccept: n
      } = this.props;
      if (null == t) throw Error("GiftCode is null at acceptance.");
      try {
        await d.Z.redeemGiftCode({
          code: t.code,
          options: {
            channelId: e
          }
        }), this.setState({
          accepted: true
        }), null == n || n()
      } catch (t) {
        this.setState({
          error: t
        })
      }
    }), $(this, "handleGoToLibrary", () => {
      let {
        onClose: t,
        libraryApplication: e
      } = this.props;
      (0, _.uL)(z.Z5c.APPLICATION_LIBRARY, {
        state: {
          applicationId: null != e ? e.id : true
        }
      }), t()
    }), $(this, "getDefaultAnimationStatus", () => this.step === z.wZ8.OPEN ? M.SR.IDLE : M.SR.ACTION), $(this, "getIdleAnimationStatus", () => {
      if (this.step !== z.wZ8.OPEN) return M.SR.LOOP
    })
  }
}
let X = Chunk442837.ZP.connectStores([Chunk283595.Z, Chunk55563.Z, Chunk812206.Z, Chunk82142.Z, Chunk509545.Z, Chunk607070.Z, Chunk597688.Z], t => {
    let {
      giftCode: e
    } = t, n = R.Z.get(e.skuId), i = null != n ? b.Z.getApplication(n.applicationId) : null, r = f.Z.useReducedMotion;
    return {
      sku: n,
      libraryApplication: null != n && (null == e ? true : e.entitlementBranches) != null ? (0, D.z2)(e.entitlementBranches, n, T.Z) : null,
      application: i,
      subscriptionPlan: null != e.subscriptionPlanId ? (0, G.oE)(e.subscriptionPlanId) : null,
      accepting: A.Z.getIsAccepting(e.code),
      useReducedMotion: r
    }
  })(Q),
  tt = t => {
    var e, n, {
        channelContext: r,
        code: s,
        customGiftMessage: l,
        emojiName: a,
        soundId: u,
        onClose: d
      } = t,
      f = function(t, e) {
        if (null == t) return {};
        var n, i, r = function(t, e) {
          if (null == t) return {};
          var n, i, r = {},
            s = Object.keys(t);
          for (i = 0; i < s.length; i++) n = s[i], e.indexOf(n) >= 0 || (r[n] = t[n]);
          return r
        }(t, e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(t);
          for (i = 0; i < s.length; i++) n = s[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n])
        }
        return r
      }(t, ["channelContext", "code", "customGiftMessage", "emojiName", "soundId", "onClose"]);
    let g = (0, S.Dt)(),
      b = (0, o.e7)([A.Z], () => A.Z.get(s)),
      y = (0, p.ZP)(),
      {
        analyticsLocations: v
      } = (0, m.ZP)(h.Z.GIFT_CODE_MODAL),
      {
        product: x
      } = (0, j.T)(null == b ? true : b.skuId, true);
    return null == b ? null : (0, i.jsx)(X, (e = function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
          return Object.getOwnPropertyDescriptor(n, t).enumerable
        }))), i.forEach(function(e) {
          $(t, e, n[e])
        })
      }
      return t
    }({}, f), n = n = {
      customGiftMessage: l,
      channelContext: r,
      giftCode: b,
      headerId: g,
      emojiName: a,
      soundId: u,
      analyticsLocations: v,
      isThemeDark: (0, c.wj)(y),
      onClose: d,
      collectiblesItemType: (0, O.$W)(x),
      onAccept: null != x ? () => {
        d(), (0, P.Z)({
          product: x,
          analyticsLocations: v,
          purchaseType: B.o8.GIFT
        })
      } : true
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        n.push.apply(n, i)
      }
      return n
    })(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
    }), e))
  }