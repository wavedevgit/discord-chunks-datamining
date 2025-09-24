/** Chunk was on 92446 **/
/** chunk id: 409858, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => tn
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  Chunk538981 = require("./538981.jsx"),
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

function J(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = n, t
}
let Q = t => {
    let {
      openedGift: e
    } = t, {
      createMultipleConfettiAt: n
    } = r.useContext(P.h);
    return r.useEffect(() => {
      e && n(window.innerWidth / 2, window.innerHeight / 4)
    }, [n, e]), null
  },
  $ = t => {
    let {
      step: e,
      soundId: n
    } = t;
    return r.useEffect(() => {
      var t;
      if (e !== V.wZ8.CONFIRM) return;
      let i = C.Z.getSoundById(n);
      (0, A.playGiftSound)(n, null != (t = null == i ? true : i.volume) ? t : 1)
    }, [e, n]), null
  };
class tt extends Chunk647438.Component {
  componentDidMount() {
    let {
      application: t,
      sku: e,
      customGiftMessage: n,
      giftCode: i,
      emojiName: r
    } = this.props;
    null == module && null != exports && Chunk728345.ZP.fetchApplication(exports.applicationId);
    let l = null != require || null != Chunk951288.giftStyle,
      s = (0, Chunk884697.mO)(Chunk951288),
      a = null != Chunk647438 ? Chunk176354.ZP.getURL(Chunk647438) : true,
      o = (0, Chunk669079.HL)({
        productLine: null == exports ? true : exports.productLine
      });
    this.setState({
      isCustomGift: Chunk120356,
      isCollectiblesGift: s,
      emojiURL: Chunk979554,
      opened: s,
      isPremiumAppGift: Chunk442837
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
      opened: l,
      isCustomGift: s,
      isPremiumAppGift: a
    } = this.state;
    return (0, Chunk669079.TO)(module, require, {
      error: Chunk951288,
      accepted: Chunk647438,
      accepting: exports,
      opened: Chunk120356,
      isCustomGift: s,
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
      isCustomGift: t,
      opened: e,
      accepted: n,
      isPremiumAppGift: i
    } = this.state, {
      giftCode: r,
      subscriptionPlan: l,
      collectiblesItemType: s,
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
        let t = Chunk594174.default.getUser(Chunk647438.userId);
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
        let t = Chunk594174.default.getUser(Chunk647438.userId),
          e = Chunk51144.ZP.getName(module);
        if (null != s) switch (s) {
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
    let t = Chunk594174.default.getUser(this.props.giftCode.userId);
    return Chunk388032.intl.formatToPlainString(Chunk388032.t.DDO4W1, {
      sender: Chunk51144.ZP.getName(module)
    })
  }
  get bodyText() {
    let {
      sku: t,
      accepting: e,
      libraryApplication: n,
      subscriptionPlan: i,
      giftCode: r
    } = this.props;
    if (null == module) return null;
    let {
      error: l,
      accepted: s,
      isCustomGift: a,
      opened: o,
      isPremiumAppGift: u
    } = this.state;
    if (Chunk780384) {
      let t = Chunk594174.default.getUser(Chunk647438.userId);
      return Chunk442837 ? s ? Chunk388032.intl.string(Chunk388032.t.fLHIp6) : null : Chunk388032.intl.formatToPlainString(Chunk388032.t.DDO4W1, {
        sender: Chunk51144.ZP.getName(module)
      })
    }
    return !Chunk442837 && Chunk979554 ? null : (0, Chunk669079.iM)({
      step: this.step,
      sku: module,
      libraryApplication: require,
      error: Chunk120356,
      accepted: s,
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
      giftCode: t,
      customGiftMessage: e,
      emojiName: n,
      soundId: i,
      sku: r,
      analyticsLocations: l
    } = this.props, {
      isCustomGift: s
    } = this.state;
    Chunk626135.default.track(Chunk981631.rMx.GIFT_ACCEPT_STEP, {
      to_step: this.step,
      location_stack: Chunk120356,
      has_custom_message: s,
      is_custom_message_edited: s && exports !== Chunk388032.intl.string(Chunk388032.t.ZkOo1d),
      gift_style: module.giftStyle,
      gift_code: module.code,
      emoji_name: require,
      sound_id: Chunk951288,
      product_line: null == Chunk647438 ? true : Chunk647438.productLine
    })
  }
  render() {
    let {
      sku: t,
      application: e,
      accepting: n,
      onClose: r,
      giftCode: l,
      headerId: a,
      transitionState: o,
      useReducedMotion: u,
      onComplete: d,
      customGiftMessage: p,
      emojiName: f,
      soundId: m,
      isThemeDark: h
    } = this.props, g = Chunk594174.default.getUser(Chunk120356.userId), {
      isCustomGift: y,
      isCollectiblesGift: O,
      accepted: b,
      opened: v,
      emojiURL: P,
      isPremiumAppGift: S
    } = this.state, Z = Chunk594174.default.getCurrentUser(), A = this.step === Chunk981631.wZ8.ERROR, C = (null == Chunk120356 ? true : Chunk120356.userId) != null && null != Chunk703656 && (null == Chunk703656 ? true : Chunk703656.id) != null && Chunk120356.userId === Chunk703656.id;
    switch (this.step) {
      case Chunk981631.wZ8.ERROR:
        null == Chunk533307 || Chunk533307(Chunk120356, false);
        break;
      case Chunk981631.wZ8.SUCCESS:
        null == Chunk533307 || Chunk533307(Chunk120356, true)
    }
    let T = (0, Chunk164670.K)(module);
    return (0, Chunk951288.jsxs)("div", {
      ref: this.modalRef,
      children: [(0, Chunk951288.jsxs)(Chunk481060.Y0X, {
        "data-migration-pending": true,
        transitionState: Chunk442837,
        size: Chunk481060.CgR.SMALL,
        className: Chunk269142.modal,
        "aria-labelledby": Chunk979554,
        parentComponent: "GiftCodeModal",
        children: [null != Chunk120356.giftStyle && !Chunk812206 && !Chunk884697 && (0, Chunk951288.jsx)(Chunk981632.Z, {
          defaultAnimationState: this.getDefaultAnimationStatus(),
          idleAnimationState: this.getIdleAnimationStatus(),
          giftStyle: Chunk120356.giftStyle,
          className: Chunk269142.seasonalGiftIcon
        }), !Chunk812206 && (0, Chunk951288.jsx)("div", {
          className: Chunk269142.backSplash
        }), !Chunk884697 && (0, Chunk951288.jsx)(Chunk481060.olH, {
          "data-migration-pending": true,
          onClick: Chunk647438,
          className: Chunk269142.closeButton
        }), (0, Chunk951288.jsxs)(Chunk481060.hzk, {
          "data-migration-pending": true,
          className: s()({
            [Chunk269142.content]: !Chunk812206,
            [Chunk269142.contentCustomGift]: Chunk812206
          }),
          children: [!Chunk884697 && !Chunk313201 && (null == Chunk120356.giftStyle || Chunk812206 && Chunk583434) || Chunk82142 ? (0, Chunk951288.jsx)(Chunk925329.Z, {
            size: Chunk925329.A.LARGE,
            game: exports,
            skuId: Chunk120356.skuId
          }) : null, Chunk146779 && (0, Chunk951288.jsx)("img", {
            alt: "",
            src: Chunk906732 ? Chunk167969 : Chunk557256
          }), (0, Chunk951288.jsxs)(Chunk481060.X6q, {
            id: Chunk979554,
            className: s()({
              [Chunk269142.customGiftHeader]: Chunk812206 && !Chunk583434,
              [Chunk269142.header]: !Chunk812206 || Chunk583434
            }),
            variant: "heading-sm/semibold",
            children: [(0, Chunk951288.jsx)("div", {
              className: s()({
                [Chunk269142.customGiftHeaderText]: Chunk812206
              }),
              children: this.firstHeaderText
            }), (0, Chunk951288.jsx)("div", {
              children: this.secondHeaderText
            })]
          }), !(Chunk812206 && !Chunk583434) && (0, Chunk951288.jsx)(Chunk481060.Text, {
            className: Chunk269142.body,
            variant: "text-sm/normal",
            children: this.bodyText
          }), Chunk812206 && !Chunk884697 && null != Chunk120356.giftStyle && !Chunk583434 && !Chunk146779 && (0, Chunk951288.jsx)(Chunk981632.Z, {
            defaultAnimationState: this.getDefaultAnimationStatus(),
            idleAnimationState: this.getIdleAnimationStatus(),
            className: Chunk269142.giftAnimation,
            giftStyle: Chunk120356.giftStyle
          }), this.state.opened && !Chunk146779 && Chunk884697 && (0, Chunk951288.jsx)(Chunk551425.Z, {
            giftCode: Chunk120356
          }), Chunk146779 && (0, Chunk951288.jsx)(Chunk481060.Text, {
            className: Chunk269142.body,
            variant: "text-md/normal",
            children: this.errorMessage
          }), Chunk812206 && this.state.opened && !this.state.accepted && !Chunk146779 && null != Chunk410030 && "" !== Chunk410030 && !Chunk763296 && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
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
          }), Chunk82142 && (0, Chunk951288.jsx)(Chunk435883.q, {
            sku: module,
            className: s()({
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
      }), null != Chunk120356.giftStyle && !Chunk780384 && this.step !== Chunk981631.wZ8.ERROR && !Chunk583434 && !require && Chunk832149 && (null == Chunk607070 || null == Chunk745510 ? (0, Chunk951288.jsx)(Q, {
        openedGift: Chunk832149 && !Chunk583434 && !require
      }) : (0, Chunk951288.jsx)(Chunk715627.Z, {
        confettiTarget: this.modalRef.current,
        emojiURL: Chunk745510
      })), !Chunk583434 && !require && Chunk832149 && null != Chunk100527 && (0, Chunk951288.jsx)($, {
        soundId: Chunk100527,
        step: this.step
      })]
    })
  }
  constructor(...t) {
    super(...t), J(this, "state", {
      error: null,
      accepted: false,
      opened: false,
      isCustomGift: false,
      isCollectiblesGift: false,
      step: true,
      emojiURL: true,
      isPremiumAppGift: false
    }), J(this, "modalRef", r.createRef()), J(this, "handleOpen", () => {
      this.setState({
        opened: true
      })
    }), J(this, "handleAccept", async () => {
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
    }), J(this, "handleGoToLibrary", () => {
      let {
        onClose: t,
        libraryApplication: e
      } = this.props;
      (0, Z.uL)(V.Z5c.APPLICATION_LIBRARY, {
        state: {
          applicationId: null != e ? e.id : true
        }
      }), t()
    }), J(this, "getDefaultAnimationStatus", () => this.step === V.wZ8.OPEN ? H.SR.IDLE : H.SR.ACTION), J(this, "getIdleAnimationStatus", () => {
      if (this.step !== V.wZ8.OPEN) return H.SR.LOOP
    })
  }
}
let te = Chunk442837.ZP.connectStores([Chunk283595.Z, Chunk55563.Z, Chunk812206.Z, Chunk82142.Z, Chunk509545.Z, Chunk607070.Z], t => {
    let {
      giftCode: e
    } = t, n = k.Z.get(e.skuId), i = null != n ? y.Z.getApplication(n.applicationId) : null, r = f.Z.useReducedMotion;
    return {
      sku: n,
      libraryApplication: null != n && (null == e ? true : e.entitlementBranches) != null ? (0, L.z2)(e.entitlementBranches, n, E.Z) : null,
      application: i,
      subscriptionPlan: null != e.subscriptionPlanId ? (0, _.oE)(e.subscriptionPlanId) : null,
      accepting: T.Z.getIsAccepting(e.code),
      useReducedMotion: r
    }
  })(tt),
  tn = t => {
    var e, n, r, {
        channelContext: l,
        code: s,
        customGiftMessage: a,
        emojiName: c,
        soundId: d,
        onClose: f
      } = t,
      g = function(t, e) {
        if (null == t) return {};
        var n, i, r = function(t, e) {
          if (null == t) return {};
          var n, i, r = {},
            l = Object.keys(t);
          for (i = 0; i < l.length; i++) n = l[i], e.indexOf(n) >= 0 || (r[n] = t[n]);
          return r
        }(t, e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(t);
          for (i = 0; i < l.length; i++) n = l[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n])
        }
        return r
      }(t, ["channelContext", "code", "customGiftMessage", "emojiName", "soundId", "onClose"]);
    let y = (0, S.Dt)(),
      O = (0, o.e7)([T.Z], () => T.Z.get(s)),
      j = (0, p.ZP)(),
      {
        analyticsLocations: P
      } = (0, h.ZP)(m.Z.GIFT_CODE_MODAL),
      {
        product: x
      } = (0, b.T)(null == O ? true : O.skuId),
      Z = (0, U.r)();
    return null == O ? null : (0, i.jsx)(te, (e = function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
          return Object.getOwnPropertyDescriptor(n, t).enumerable
        }))), i.forEach(function(e) {
          J(t, e, n[e])
        })
      }
      return t
    }({}, g), n = n = {
      customGiftMessage: a,
      channelContext: l,
      giftCode: O,
      headerId: y,
      emojiName: c,
      soundId: d,
      analyticsLocations: P,
      isThemeDark: (0, u.wj)(j),
      onClose: () => {
        f(), Z()
      },
      collectiblesItemType: null == x || null == (r = x.items[0]) ? true : r.type,
      onAccept: null != x ? () => {
        f(), (0, v.Z)({
          product: x,
          analyticsLocations: P,
          purchaseType: K.o8.GIFT
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