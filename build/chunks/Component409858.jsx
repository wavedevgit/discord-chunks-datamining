/** Chunk was on 92446 **/
/** chunk id: 409858, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => $
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

function q(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = i, t
}
let X = t => {
    let {
      openedGift: e
    } = t, {
      createMultipleConfettiAt: i
    } = r.useContext(S.h);
    return r.useEffect(() => {
      e && i(window.innerWidth / 2, window.innerHeight / 4)
    }, [i, e]), null
  },
  Y = t => {
    let {
      step: e,
      soundId: i
    } = t;
    return r.useEffect(() => {
      var t;
      if (e !== F.wZ8.CONFIRM) return;
      let n = C.Z.getSoundById(i);
      (0, w.playGiftSound)(i, null != (t = null == n ? true : n.volume) ? t : 1)
    }, [e, i]), null
  };
class J extends Chunk647438.Component {
  componentDidMount() {
    let {
      application: t,
      sku: e,
      customGiftMessage: i,
      giftCode: n,
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
      giftCode: i
    } = this.props, {
      error: n,
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
      accepted: i,
      isPremiumAppGift: n
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
      libraryApplication: i,
      subscriptionPlan: n,
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
      error: i,
      accepted: n
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
      emojiName: i,
      soundId: n,
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
      application: t,
      accepting: e,
      onClose: i,
      giftCode: r,
      headerId: l,
      transitionState: a,
      useReducedMotion: o,
      onComplete: u,
      customGiftMessage: d,
      emojiName: p,
      soundId: f,
      isThemeDark: m
    } = this.props, h = Chunk594174.default.getUser(Chunk647438.userId), {
      isCustomGift: g,
      isCollectiblesGift: y,
      accepted: O,
      opened: b,
      emojiURL: P,
      isPremiumAppGift: S
    } = this.state, v = Chunk594174.default.getCurrentUser(), Z = this.step === Chunk981631.wZ8.ERROR, w = (null == Chunk647438 ? true : Chunk647438.userId) != null && null != Chunk313201 && (null == Chunk313201 ? true : Chunk313201.id) != null && Chunk647438.userId === Chunk313201.id;
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
        transitionState: Chunk979554,
        size: Chunk481060.CgR.SMALL,
        className: Chunk269142.modal,
        "aria-labelledby": Chunk120356,
        parentComponent: "GiftCodeModal",
        children: [null != Chunk647438.giftStyle && !Chunk728345 && !Chunk812206 && (0, Chunk951288.jsx)(Chunk981632.Z, {
          defaultAnimationState: this.getDefaultAnimationStatus(),
          idleAnimationState: this.getIdleAnimationStatus(),
          giftStyle: Chunk647438.giftStyle,
          className: Chunk269142.seasonalGiftIcon
        }), !Chunk728345 && (0, Chunk951288.jsx)("div", {
          className: Chunk269142.backSplash
        }), !Chunk812206 && (0, Chunk951288.jsx)(Chunk481060.olH, {
          onClick: require,
          className: Chunk269142.closeButton
        }), (0, Chunk951288.jsxs)(Chunk481060.hzk, {
          className: s()({
            [Chunk269142.content]: !Chunk728345,
            [Chunk269142.contentCustomGift]: Chunk728345
          }),
          children: [!Chunk812206 && !Chunk745510 && (null == Chunk647438.giftStyle || Chunk728345 && Chunk884697) && (0, Chunk951288.jsx)(Chunk925329.Z, {
            size: Chunk925329.Z.Sizes.LARGE,
            game: module,
            skuId: Chunk647438.skuId
          }), Chunk703656 && (0, Chunk951288.jsx)("img", {
            alt: "",
            src: Chunk100527 ? Chunk167969 : Chunk557256
          }), (0, Chunk951288.jsxs)(Chunk481060.X6q, {
            id: Chunk120356,
            className: s()({
              [Chunk269142.customGiftHeader]: Chunk728345 && !Chunk884697,
              [Chunk269142.header]: !Chunk728345 || Chunk884697
            }),
            variant: "heading-sm/semibold",
            children: [(0, Chunk951288.jsx)("div", {
              className: s()({
                [Chunk269142.customGiftHeaderText]: Chunk728345
              }),
              children: this.firstHeaderText
            }), (0, Chunk951288.jsx)("div", {
              children: this.secondHeaderText
            })]
          }), !(Chunk728345 && !Chunk884697) && (0, Chunk951288.jsx)(Chunk481060.Text, {
            className: Chunk269142.body,
            variant: "text-sm/normal",
            children: this.bodyText
          }), Chunk728345 && !Chunk812206 && null != Chunk647438.giftStyle && !Chunk884697 && !Chunk703656 && (0, Chunk951288.jsx)(Chunk981632.Z, {
            defaultAnimationState: this.getDefaultAnimationStatus(),
            idleAnimationState: this.getIdleAnimationStatus(),
            className: Chunk269142.giftAnimation,
            giftStyle: Chunk647438.giftStyle
          }), this.state.opened && !Chunk703656 && Chunk812206 && (0, Chunk951288.jsx)(Chunk551425.Z, {
            giftCode: Chunk647438
          }), Chunk703656 && (0, Chunk951288.jsx)(Chunk481060.Text, {
            className: Chunk269142.body,
            variant: "text-md/normal",
            children: this.errorMessage
          }), Chunk728345 && this.state.opened && !this.state.accepted && !Chunk703656 && null != Chunk533307 && "" !== Chunk533307 && !Chunk146779 && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
            children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
              children: Chunk388032.intl.format(Chunk388032.t.DDO4W1, {
                sender: Chunk51144.ZP.getName(Chunk906732)
              })
            }), (0, Chunk951288.jsx)(Chunk481060.X6q, {
              id: Chunk120356,
              className: Chunk269142.customMessage,
              variant: "heading-sm/bold",
              children: Chunk533307
            })]
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: this.buttonText,
            loading: exports,
            onClick: () => {
              this.trackStepAnalytics(), this.handleClick()
            }
          })]
        })]
      }), null != Chunk647438.giftStyle && !Chunk442837 && this.step !== Chunk981631.wZ8.ERROR && !Chunk884697 && !exports && Chunk583434 && (null == Chunk410030 || null == Chunk832149 ? (0, Chunk951288.jsx)(X, {
        openedGift: Chunk583434 && !Chunk884697 && !exports
      }) : (0, Chunk951288.jsx)(Chunk715627.Z, {
        confettiTarget: this.modalRef.current,
        emojiURL: Chunk832149
      })), !Chunk884697 && !exports && Chunk583434 && null != Chunk607070 && (0, Chunk951288.jsx)(Y, {
        soundId: Chunk607070,
        step: this.step
      })]
    })
  }
  constructor(...t) {
    super(...t), q(this, "state", {
      error: null,
      accepted: false,
      opened: false,
      isCustomGift: false,
      isCollectiblesGift: false,
      step: true,
      emojiURL: true,
      isPremiumAppGift: false
    }), q(this, "modalRef", r.createRef()), q(this, "handleOpen", () => {
      this.setState({
        opened: true
      })
    }), q(this, "handleAccept", async () => {
      let {
        giftCode: t,
        channelContext: e,
        onAccept: i
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
        }), null == i || i()
      } catch (t) {
        this.setState({
          error: t
        })
      }
    }), q(this, "handleGoToLibrary", () => {
      let {
        onClose: t,
        libraryApplication: e
      } = this.props;
      (0, Z.uL)(F.Z5c.APPLICATION_LIBRARY, {
        state: {
          applicationId: null != e ? e.id : true
        }
      }), t()
    }), q(this, "getDefaultAnimationStatus", () => this.step === F.wZ8.OPEN ? _.SR.IDLE : _.SR.ACTION), q(this, "getIdleAnimationStatus", () => {
      if (this.step !== F.wZ8.OPEN) return _.SR.LOOP
    })
  }
}
let Q = Chunk442837.ZP.connectStores([Chunk283595.Z, Chunk55563.Z, Chunk812206.Z, Chunk82142.Z, Chunk509545.Z, Chunk607070.Z], t => {
    let {
      giftCode: e
    } = t, i = R.Z.get(e.skuId), n = null != i ? y.Z.getApplication(i.applicationId) : null, r = f.Z.useReducedMotion;
    return {
      sku: i,
      libraryApplication: null != i && (null == e ? true : e.entitlementBranches) != null ? (0, D.z2)(e.entitlementBranches, i, T.Z) : null,
      application: n,
      subscriptionPlan: null != e.subscriptionPlanId ? (0, L.oE)(e.subscriptionPlanId) : null,
      accepting: A.Z.getIsAccepting(e.code),
      useReducedMotion: r
    }
  })(J),
  $ = t => {
    var e, i, r, {
        channelContext: l,
        code: s,
        customGiftMessage: a,
        emojiName: c,
        soundId: d,
        onClose: f
      } = t,
      g = function(t, e) {
        if (null == t) return {};
        var i, n, r = function(t, e) {
          if (null == t) return {};
          var i, n, r = {},
            l = Object.keys(t);
          for (n = 0; n < l.length; n++) i = l[n], e.indexOf(i) >= 0 || (r[i] = t[i]);
          return r
        }(t, e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(t);
          for (n = 0; n < l.length; n++) i = l[n], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(t, i) && (r[i] = t[i])
        }
        return r
      }(t, ["channelContext", "code", "customGiftMessage", "emojiName", "soundId", "onClose"]);
    let y = (0, v.Dt)(),
      O = (0, o.e7)([A.Z], () => A.Z.get(s)),
      j = (0, p.ZP)(),
      {
        analyticsLocations: S
      } = (0, h.ZP)(m.Z.GIFT_CODE_MODAL),
      {
        product: x
      } = (0, b.T)(null == O ? true : O.skuId);
    return null == O ? null : (0, n.jsx)(Q, (e = function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {},
          n = Object.keys(i);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
          return Object.getOwnPropertyDescriptor(i, t).enumerable
        }))), n.forEach(function(e) {
          q(t, e, i[e])
        })
      }
      return t
    }({}, g), i = i = {
      customGiftMessage: a,
      channelContext: l,
      giftCode: O,
      headerId: y,
      emojiName: c,
      soundId: d,
      analyticsLocations: S,
      isThemeDark: (0, u.wj)(j),
      onClose: f,
      collectiblesItemType: null == x || null == (r = x.items[0]) ? true : r.type,
      onAccept: null != x ? () => {
        f(), (0, P.Z)({
          product: x,
          analyticsLocations: S,
          purchaseType: z.o8.GIFT
        })
      } : true
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : (function(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        i.push.apply(i, n)
      }
      return i
    })(Object(i)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
    }), e))
  }