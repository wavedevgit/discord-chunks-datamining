/** Chunk was on 38029 **/
/** chunk id: 409858, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => en
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk164670 = require("./164670.js"),
  Chunk435883 = require("./435883.jsx"),
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
  Chunk269142 = require("./269142.js"),
  Chunk167969 = require("./167969.js"),
  Chunk557256 = require("./557256.js");

function $(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let J = e => {
    let {
      openedGift: t
    } = e, {
      createMultipleConfettiAt: n
    } = r.useContext(S.h);
    return r.useEffect(() => {
      t && n(window.innerWidth / 2, window.innerHeight / 4)
    }, [n, t]), null
  },
  Q = e => {
    let {
      step: t,
      soundId: n
    } = e;
    return r.useEffect(() => {
      var e;
      if (t !== V.wZ8.CONFIRM) return;
      let i = C.Z.getSoundById(n);
      (0, A.playGiftSound)(n, null != (e = null == i ? true : i.volume) ? e : 1)
    }, [t, n]), null
  };
class ee extends Chunk647438.Component {
  componentDidMount() {
    let {
      application: e,
      sku: t,
      customGiftMessage: n,
      giftCode: i,
      emojiName: r
    } = this.props;
    null == module && null != exports && Chunk728345.ZP.fetchApplication(exports.applicationId);
    let l = null != require || null != Chunk951288.giftStyle,
      a = (0, Chunk884697.mO)(Chunk951288),
      s = null != Chunk647438 ? Chunk176354.ZP.getURL(Chunk647438) : true,
      o = (0, Chunk669079.HL)({
        productLine: null == exports ? true : exports.productLine
      });
    this.setState({
      isCustomGift: Chunk120356,
      isCollectiblesGift: a,
      emojiURL: Chunk979554,
      opened: a,
      isPremiumAppGift: Chunk442837
    }), this.trackStepAnalytics()
  }
  get step() {
    let {
      libraryApplication: e,
      accepting: t,
      giftCode: n
    } = this.props, {
      error: i,
      accepted: r,
      opened: l,
      isCustomGift: a,
      isPremiumAppGift: s
    } = this.state;
    return (0, Chunk669079.TO)(module, require, {
      error: Chunk951288,
      accepted: Chunk647438,
      accepting: exports,
      opened: Chunk120356,
      isCustomGift: a,
      isPremiumAppGift: Chunk979554
    })
  }
  get buttonText() {
    return (0, Chunk669079.L2)(this.step, this.props.giftCode, {
      isCustomGift: this.state.isCustomGift,
      isPremiumAppGift: this.state.isPremiumAppGift
    })
  }
  get firstHeaderText() {
    let {
      isCustomGift: e,
      opened: t,
      accepted: n,
      isPremiumAppGift: i
    } = this.state, {
      giftCode: r,
      subscriptionPlan: l,
      collectiblesItemType: a,
      sku: o,
      application: u
    } = this.props;
    if (module && this.step === Chunk981631.wZ8.ERROR) return Chunk388032.intl.formatToMarkdownString(Chunk388032.t.JUvC0t, {});
    if (Chunk951288)
      if (!exports) return Chunk388032.intl.formatToPlainString(Chunk388032.t.xHzRub, {
        recipientDisplayName: Chunk51144.ZP.getName(Chunk594174.default.getCurrentUser())
      });
      else {
        var c, d;
        if (require) return Chunk388032.intl.string(Chunk388032.t["+BNMcH"]);
        let e = Chunk594174.default.getUser(Chunk647438.userId);
        return Chunk388032.intl.formatToPlainString(Chunk388032.t["2tBYtL"], {
          sender: Chunk51144.ZP.getName(module),
          skuName: null != (c = null == Chunk442837 ? true : Chunk442837.name) ? Chunk481060 : "item",
          applicationName: null != (d = null == Chunk780384 ? true : Chunk780384.name) ? Chunk533307 : "an application"
        })
      } if (module && !require)
      if (!exports) return Chunk388032.intl.formatToPlainString(Chunk388032.t.xHzRub, {
        recipientDisplayName: Chunk51144.ZP.getName(Chunk594174.default.getCurrentUser())
      });
      else {
        let e = Chunk594174.default.getUser(Chunk647438.userId),
          t = Chunk51144.ZP.getName(module);
        if (null != a) switch (a) {
          case Chunk979554.Z.AVATAR_DECORATION:
            return Chunk388032.intl.formatToPlainString(Chunk388032.t.SKduys, {
              sender: exports
            });
          case Chunk979554.Z.PROFILE_EFFECT:
            return Chunk388032.intl.formatToPlainString(Chunk388032.t["1w42T0"], {
              sender: exports
            });
          case Chunk979554.Z.NAMEPLATE:
            return Chunk388032.intl.formatToPlainString(Chunk388032.t.vFiQlZ, {
              sender: exports
            });
          default:
            return Chunk388032.intl.formatToPlainString(Chunk388032.t.U4Ko29, {
              sender: exports
            })
        }
        return Chunk388032.intl.formatToPlainString(Chunk388032.t["0UR0u7"], {
          sender: exports,
          timeInterval: (null == Chunk120356 ? true : Chunk120356.interval) === Chunk474936.rV.MONTH ? Chunk388032.intl.string(Chunk388032.t.FPybU1) : Chunk388032.intl.string(Chunk388032.t.tfqrho)
        })
      } return null == this.props.sku ? null : (0, Chunk669079.dQ)(this.step, this.props.giftCode, this.props.sku)
  }
  get secondHeaderText() {
    if (!this.state.isCustomGift || this.state.opened || this.state.accepted) return null;
    let e = Chunk594174.default.getUser(this.props.giftCode.userId);
    return Chunk388032.intl.formatToPlainString(Chunk388032.t.DDO4W1, {
      sender: Chunk51144.ZP.getName(module)
    })
  }
  get bodyText() {
    let {
      sku: e,
      accepting: t,
      libraryApplication: n,
      subscriptionPlan: i,
      giftCode: r
    } = this.props;
    if (null == module) return null;
    let {
      error: l,
      accepted: a,
      isCustomGift: s,
      opened: o,
      isPremiumAppGift: u
    } = this.state;
    if (Chunk780384) {
      let e = Chunk594174.default.getUser(Chunk647438.userId);
      return Chunk442837 ? a ? Chunk388032.intl.string(Chunk388032.t.fLHIp6) : null : Chunk388032.intl.formatToPlainString(Chunk388032.t.DDO4W1, {
        sender: Chunk51144.ZP.getName(module)
      })
    }
    return !Chunk442837 && Chunk979554 ? null : (0, Chunk669079.iM)({
      step: this.step,
      sku: module,
      libraryApplication: require,
      error: Chunk120356,
      accepted: a,
      accepting: exports,
      onGoToLibrary: this.handleGoToLibrary,
      subscriptionPlan: Chunk951288
    })
  }
  get errorMessage() {
    let {
      libraryApplication: e,
      accepting: t
    } = this.props, {
      error: n,
      accepted: i
    } = this.state;
    return (0, Chunk669079.e$)(module, require, Chunk951288, exports, this.handleGoToLibrary)
  }
  get handleClick() {
    let {
      giftCode: e,
      onClose: t
    } = this.props;
    switch (this.step) {
      case Chunk981631.wZ8.ERROR:
        return exports;
      case Chunk981631.wZ8.SUCCESS:
        if (__OVERLAY__ || null != module.subscriptionPlanId || this.state.isPremiumAppGift) return exports;
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
      giftCode: e,
      customGiftMessage: t,
      emojiName: n,
      soundId: i,
      sku: r,
      analyticsLocations: l
    } = this.props, {
      isCustomGift: a
    } = this.state;
    Chunk626135.default.track(Chunk981631.rMx.GIFT_ACCEPT_STEP, {
      to_step: this.step,
      location_stack: Chunk120356,
      has_custom_message: a,
      is_custom_message_edited: a && exports !== Chunk388032.intl.string(Chunk388032.t.ZkOo1d),
      gift_style: module.giftStyle,
      gift_code: module.code,
      emoji_name: require,
      sound_id: Chunk951288,
      product_line: null == Chunk647438 ? true : Chunk647438.productLine
    })
  }
  render() {
    let {
      sku: e,
      application: t,
      accepting: n,
      onClose: r,
      giftCode: l,
      headerId: s,
      transitionState: o,
      useReducedMotion: u,
      onComplete: d,
      customGiftMessage: p,
      emojiName: f,
      soundId: m,
      isThemeDark: g
    } = this.props, h = Chunk594174.default.getUser(Chunk120356.userId), {
      isCustomGift: b,
      isCollectiblesGift: y,
      accepted: O,
      opened: v,
      emojiURL: j,
      isPremiumAppGift: S
    } = this.state, x = Chunk594174.default.getCurrentUser(), _ = this.step === Chunk981631.wZ8.ERROR, A = (null == Chunk120356 ? true : Chunk120356.userId) != null && null != Chunk313201 && (null == Chunk313201 ? true : Chunk313201.id) != null && Chunk120356.userId === Chunk313201.id;
    switch (this.step) {
      case Chunk981631.wZ8.ERROR:
        null == Chunk533307 || Chunk533307(Chunk120356, false);
        break;
      case Chunk981631.wZ8.SUCCESS:
        null == Chunk533307 || Chunk533307(Chunk120356, true)
    }
    let C = (0, Chunk164670.K$)(module);
    return (0, Chunk951288.jsxs)("div", {
      ref: this.modalRef,
      children: [(0, Chunk951288.jsxs)(Chunk481060.Y0X, {
        "data-migration-pending": true,
        transitionState: Chunk442837,
        size: Chunk481060.CgR.SMALL,
        className: Chunk269142.modal,
        "aria-labelledby": Chunk979554,
        parentComponent: "GiftCodeModal",
        children: [null != Chunk120356.giftStyle && !Chunk812206 && !Chunk597688 && (0, Chunk951288.jsx)(Chunk981632.Z, {
          defaultAnimationState: this.getDefaultAnimationStatus(),
          idleAnimationState: this.getIdleAnimationStatus(),
          giftStyle: Chunk120356.giftStyle,
          className: Chunk269142.seasonalGiftIcon
        }), !Chunk812206 && (0, Chunk951288.jsx)("div", {
          className: Chunk269142.backSplash
        }), !Chunk597688 && (0, Chunk951288.jsx)(Chunk481060.olH, {
          "data-migration-pending": true,
          onClick: Chunk647438,
          className: Chunk269142.closeButton
        }), (0, Chunk951288.jsxs)(Chunk481060.hzk, {
          "data-migration-pending": true,
          className: a()({
            [Chunk269142.content]: !Chunk812206,
            [Chunk269142.contentCustomGift]: Chunk812206
          }),
          children: [!Chunk597688 && !Chunk745510 && (null == Chunk120356.giftStyle || Chunk812206 && Chunk884697) || Chunk763296 ? (0, Chunk951288.jsx)(Chunk925329.Z, {
            size: Chunk925329.A.LARGE,
            game: exports,
            skuId: Chunk120356.skuId
          }) : null, Chunk703656 && (0, Chunk951288.jsx)("img", {
            alt: "",
            src: Chunk906732 ? Chunk167969 : Chunk557256
          }), (0, Chunk951288.jsxs)(Chunk481060.X6q, {
            id: Chunk979554,
            className: a()({
              [Chunk269142.customGiftHeader]: Chunk812206 && !Chunk884697,
              [Chunk269142.header]: !Chunk812206 || Chunk884697
            }),
            variant: "heading-sm/semibold",
            children: [(0, Chunk951288.jsx)("div", {
              className: a()({
                [Chunk269142.customGiftHeaderText]: Chunk812206
              }),
              children: this.firstHeaderText
            }), (0, Chunk951288.jsx)("div", {
              children: this.secondHeaderText
            })]
          }), !(Chunk812206 && !Chunk884697) && (0, Chunk951288.jsx)(Chunk481060.Text, {
            className: Chunk269142.body,
            variant: "text-sm/normal",
            children: this.bodyText
          }), Chunk812206 && !Chunk597688 && null != Chunk120356.giftStyle && !Chunk884697 && !Chunk703656 && (0, Chunk951288.jsx)(Chunk981632.Z, {
            defaultAnimationState: this.getDefaultAnimationStatus(),
            idleAnimationState: this.getIdleAnimationStatus(),
            className: Chunk269142.giftAnimation,
            giftStyle: Chunk120356.giftStyle
          }), this.state.opened && !Chunk703656 && Chunk597688 && (0, Chunk951288.jsx)(Chunk551425.Z, {
            giftCode: Chunk120356
          }), Chunk703656 && (0, Chunk951288.jsx)(Chunk481060.Text, {
            className: Chunk269142.body,
            variant: "text-md/normal",
            children: this.errorMessage
          }), Chunk812206 && this.state.opened && !this.state.accepted && !Chunk703656 && null != Chunk410030 && "" !== Chunk410030 && !Chunk146779 && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
            children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
              children: Chunk388032.intl.format(Chunk388032.t.DDO4W1, {
                sender: Chunk51144.ZP.getName(Chunk728345)
              })
            }), (0, Chunk951288.jsx)(Chunk481060.X6q, {
              id: Chunk979554,
              className: Chunk269142.customMessage,
              variant: "heading-sm/bold",
              children: Chunk410030
            })]
          }), Chunk763296 && (0, Chunk951288.jsx)(Chunk435883.q, {
            sku: module,
            className: a()({
              [Chunk269142.gameItemImageGiftUnopened]: !this.state.opened,
              [Chunk269142.gameItemImageGiftOpened]: this.state.opened
            })
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: this.buttonText,
            loading: require,
            onClick: () => {
              this.trackStepAnalytics(), this.handleClick()
            }
          })]
        })]
      }), null != Chunk120356.giftStyle && !Chunk780384 && this.step !== Chunk981631.wZ8.ERROR && !Chunk884697 && !require && Chunk583434 && (null == Chunk607070 || null == Chunk832149 ? (0, Chunk951288.jsx)(J, {
        openedGift: Chunk583434 && !Chunk884697 && !require
      }) : (0, Chunk951288.jsx)(Chunk715627.Z, {
        confettiTarget: this.modalRef.current,
        emojiURL: Chunk832149
      })), !Chunk884697 && !require && Chunk583434 && null != Chunk100527 && (0, Chunk951288.jsx)(Q, {
        soundId: Chunk100527,
        step: this.step
      })]
    })
  }
  constructor(...e) {
    super(...e), $(this, "state", {
      error: null,
      accepted: false,
      opened: false,
      isCustomGift: false,
      isCollectiblesGift: false,
      step: true,
      emojiURL: true,
      isPremiumAppGift: false
    }), $(this, "modalRef", r.createRef()), $(this, "handleOpen", () => {
      this.setState({
        opened: true
      })
    }), $(this, "handleAccept", async () => {
      let {
        giftCode: e,
        channelContext: t,
        onAccept: n
      } = this.props;
      if (null == e) throw Error("GiftCode is null at acceptance.");
      try {
        await d.Z.redeemGiftCode({
          code: e.code,
          options: {
            channelId: t
          }
        }), this.setState({
          accepted: true
        }), null == n || n()
      } catch (e) {
        this.setState({
          error: e
        })
      }
    }), $(this, "handleGoToLibrary", () => {
      let {
        onClose: e,
        libraryApplication: t
      } = this.props;
      (0, _.uL)(V.Z5c.APPLICATION_LIBRARY, {
        state: {
          applicationId: null != t ? t.id : true
        }
      }), e()
    }), $(this, "getDefaultAnimationStatus", () => this.step === V.wZ8.OPEN ? H.SR.IDLE : H.SR.ACTION), $(this, "getIdleAnimationStatus", () => {
      if (this.step !== V.wZ8.OPEN) return H.SR.LOOP
    })
  }
}
let et = Chunk442837.ZP.connectStores([Chunk283595.Z, Chunk55563.Z, Chunk812206.Z, Chunk82142.Z, Chunk509545.Z, Chunk607070.Z, Chunk597688.Z], e => {
    let {
      giftCode: t
    } = e, n = R.Z.get(t.skuId), i = null != n ? b.Z.getApplication(n.applicationId) : null, r = f.Z.useReducedMotion;
    return {
      sku: n,
      libraryApplication: null != n && (null == t ? true : t.entitlementBranches) != null ? (0, L.z2)(t.entitlementBranches, n, E.Z) : null,
      application: i,
      subscriptionPlan: null != t.subscriptionPlanId ? (0, M.oE)(t.subscriptionPlanId) : null,
      accepting: T.Z.getIsAccepting(t.code),
      useReducedMotion: r
    }
  })(ee),
  en = e => {
    var t, n, {
        channelContext: r,
        code: l,
        customGiftMessage: a,
        emojiName: s,
        soundId: c,
        onClose: d
      } = e,
      f = function(e, t) {
        if (null == e) return {};
        var n, i, r = function(e, t) {
          if (null == e) return {};
          var n, i, r = {},
            l = Object.keys(e);
          for (i = 0; i < l.length; i++) n = l[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
          return r
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
        }
        return r
      }(e, ["channelContext", "code", "customGiftMessage", "emojiName", "soundId", "onClose"]);
    let h = (0, x.Dt)(),
      b = (0, o.e7)([T.Z], () => T.Z.get(l)),
      y = (0, p.ZP)(),
      {
        analyticsLocations: P
      } = (0, g.ZP)(m.Z.GIFT_CODE_MODAL),
      {
        product: S
      } = (0, v.T)(null == b ? true : b.skuId, true);
    return null == b ? null : (0, i.jsx)(et, (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          $(e, t, n[t])
        })
      }
      return e
    }({}, f), n = n = {
      customGiftMessage: a,
      channelContext: r,
      giftCode: b,
      headerId: h,
      emojiName: s,
      soundId: c,
      analyticsLocations: P,
      isThemeDark: (0, u.wj)(y),
      onClose: d,
      collectiblesItemType: (0, O.$W)(S),
      onAccept: null != S ? () => {
        d(), (0, j.Z)({
          product: S,
          analyticsLocations: P,
          purchaseType: K.o8.GIFT
        })
      } : true
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  }