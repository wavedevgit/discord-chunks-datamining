/** Chunk was on 92446 **/
/** chunk id: 409858, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => $
}), require("./388685.js"), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk230277 = require("./230277.js"),
  Chunk167969 = require("./167969.js"),
  Chunk557256 = require("./557256.js");

function q(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = n, t
}
let X = t => {
    let {
      openedGift: e
    } = t, {
      createMultipleConfettiAt: n
    } = r.useContext(P.h);
    return r.useEffect(() => {
      e && n(window.innerWidth / 2, window.innerHeight / 4)
    }, [n, e]), null
  },
  Y = t => {
    let {
      step: e,
      soundId: n
    } = t;
    return r.useEffect(() => {
      var t;
      if (e !== H.wZ8.CONFIRM) return;
      let i = C.Z.getSoundById(n);
      (0, Z.playGiftSound)(n, null != (t = null == i ? true : i.volume) ? t : 1)
    }, [e, n]), null
  };
class J extends Chunk73800.Component {
  componentDidMount() {
    let {
      application: t,
      sku: e,
      customGiftMessage: n,
      giftCode: i,
      emojiName: r
    } = this.props;
    null == module && null != exports && Chunk728345.ZP.fetchApplication(exports.applicationId);
    let s = null != require || null != Chunk255367.giftStyle,
      l = (0, Chunk884697.mO)(Chunk255367),
      a = null != Chunk73800 ? Chunk176354.ZP.getURL(Chunk73800) : true;
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
    return (0, Chunk669079.TO)(module, require, Chunk255367, Chunk73800, exports, Chunk120356, l)
  }
  get buttonText() {
    return (0, Chunk669079.L2)(this.step, this.props.giftCode, this.state.isCustomGift)
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
    if (module && this.step === Chunk981631.wZ8.ERROR) return Chunk388032.intl.formatToMarkdownString(Chunk388032.t.JUvC0t, {});
    if (module && !require)
      if (!exports) return Chunk388032.intl.formatToPlainString(Chunk388032.t.xHzRub, {
        recipientDisplayName: Chunk51144.ZP.getName(Chunk594174.default.getCurrentUser())
      });
      else {
        let t = Chunk594174.default.getUser(Chunk255367.userId),
          e = Chunk51144.ZP.getName(module);
        if (null != Chunk120356) switch (Chunk120356) {
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
          timeInterval: (null == Chunk73800 ? true : Chunk73800.interval) === Chunk474936.rV.MONTH ? Chunk388032.intl.string(Chunk388032.t.FPybU1) : Chunk388032.intl.string(Chunk388032.t.tfqrho)
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
      error: Chunk73800,
      accepted: Chunk120356,
      accepting: exports,
      onGoToLibrary: this.handleGoToLibrary,
      subscriptionPlan: Chunk255367
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
    return (0, Chunk669079.e$)(module, require, Chunk255367, exports, this.handleGoToLibrary)
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
      soundId: i
    } = this.props, {
      isCustomGift: r
    } = this.state;
    Chunk626135.default.track(Chunk981631.rMx.GIFT_ACCEPT_STEP, {
      to_step: this.step,
      has_custom_message: Chunk73800,
      is_custom_message_edited: Chunk73800 && exports !== Chunk388032.intl.string(Chunk388032.t.ZkOo1d),
      gift_style: module.giftStyle,
      gift_code: module.code,
      emoji_name: require,
      sound_id: Chunk255367
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
    } = this.props, m = Chunk594174.default.getUser(Chunk73800.userId), {
      isCustomGift: g,
      isCollectiblesGift: y,
      accepted: O,
      opened: b,
      emojiURL: S
    } = this.state, P = Chunk594174.default.getCurrentUser(), v = this.step === Chunk981631.wZ8.ERROR, w = (null == Chunk73800 ? true : Chunk73800.userId) != null && null != Chunk745510 && (null == Chunk745510 ? true : Chunk745510.id) != null && Chunk73800.userId === Chunk745510.id;
    switch (this.step) {
      case Chunk981631.wZ8.ERROR:
        null == Chunk780384 || Chunk780384(Chunk73800, false);
        break;
      case Chunk981631.wZ8.SUCCESS:
        null == Chunk780384 || Chunk780384(Chunk73800, true)
    }
    return (0, Chunk255367.jsxs)("div", {
      ref: this.modalRef,
      children: [(0, Chunk255367.jsxs)(Chunk481060.Y0X, {
        transitionState: Chunk979554,
        size: Chunk481060.CgR.SMALL,
        className: Chunk230277.modal,
        "aria-labelledby": Chunk120356,
        parentComponent: "GiftCodeModal",
        children: [null != Chunk73800.giftStyle && !Chunk728345 && !Chunk812206 && (0, Chunk255367.jsx)(Chunk981632.Z, {
          defaultAnimationState: this.getDefaultAnimationStatus(),
          idleAnimationState: this.getIdleAnimationStatus(),
          giftStyle: Chunk73800.giftStyle,
          className: Chunk230277.seasonalGiftIcon
        }), !Chunk728345 && (0, Chunk255367.jsx)("div", {
          className: Chunk230277.backSplash
        }), !Chunk812206 && (0, Chunk255367.jsx)(Chunk481060.olH, {
          onClick: require,
          className: Chunk230277.closeButton
        }), (0, Chunk255367.jsxs)(Chunk481060.hzk, {
          className: l()({
            [Chunk230277.content]: !Chunk728345,
            [Chunk230277.contentCustomGift]: Chunk728345
          }),
          children: [!Chunk812206 && (null == Chunk73800.giftStyle || Chunk728345 && Chunk884697) && (0, Chunk255367.jsx)(Chunk925329.Z, {
            size: Chunk925329.Z.Sizes.LARGE,
            game: module,
            skuId: Chunk73800.skuId
          }), Chunk313201 && (0, Chunk255367.jsx)("img", {
            alt: "",
            src: Chunk100527 ? Chunk167969 : Chunk557256
          }), (0, Chunk255367.jsxs)(Chunk481060.X6q, {
            id: Chunk120356,
            className: l()({
              [Chunk230277.customGiftHeader]: Chunk728345 && !Chunk884697,
              [Chunk230277.header]: !Chunk728345 || Chunk884697
            }),
            variant: "heading-sm/semibold",
            children: [(0, Chunk255367.jsx)("div", {
              className: l()({
                [Chunk230277.customGiftHeaderText]: Chunk728345
              }),
              children: this.firstHeaderText
            }), (0, Chunk255367.jsx)("div", {
              children: this.secondHeaderText
            })]
          }), !(Chunk728345 && !Chunk884697) && (0, Chunk255367.jsx)(Chunk481060.Text, {
            className: Chunk230277.body,
            variant: "text-sm/normal",
            children: this.bodyText
          }), Chunk728345 && !Chunk812206 && null != Chunk73800.giftStyle && !Chunk884697 && (0, Chunk255367.jsx)(Chunk981632.Z, {
            defaultAnimationState: this.getDefaultAnimationStatus(),
            idleAnimationState: this.getIdleAnimationStatus(),
            className: Chunk230277.giftAnimation,
            giftStyle: Chunk73800.giftStyle
          }), this.state.opened && !Chunk313201 && Chunk812206 && (0, Chunk255367.jsx)(Chunk551425.Z, {
            giftCode: Chunk73800
          }), Chunk313201 && (0, Chunk255367.jsx)(Chunk481060.Text, {
            className: Chunk230277.body,
            variant: "text-md/normal",
            children: this.errorMessage
          }), Chunk728345 && this.state.opened && !this.state.accepted && !Chunk313201 && null != Chunk533307 && "" !== Chunk533307 && !Chunk703656 && (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
            children: [(0, Chunk255367.jsx)(Chunk481060.vwX, {
              children: Chunk388032.intl.format(Chunk388032.t.DDO4W1, {
                sender: Chunk51144.ZP.getName(Chunk906732)
              })
            }), (0, Chunk255367.jsx)(Chunk481060.X6q, {
              id: Chunk120356,
              className: Chunk230277.customMessage,
              variant: "heading-sm/bold",
              children: Chunk533307
            })]
          }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: this.buttonText,
            loading: exports,
            onClick: () => {
              this.trackStepAnalytics(), this.handleClick()
            }
          })]
        })]
      }), null != Chunk73800.giftStyle && !Chunk442837 && this.step !== Chunk981631.wZ8.ERROR && !Chunk884697 && !exports && Chunk583434 && (null == Chunk410030 || null == Chunk832149 ? (0, Chunk255367.jsx)(X, {
        openedGift: Chunk583434 && !Chunk884697 && !exports
      }) : (0, Chunk255367.jsx)(Chunk715627.Z, {
        confettiTarget: this.modalRef.current,
        emojiURL: Chunk832149
      })), !Chunk884697 && !exports && Chunk583434 && null != Chunk607070 && (0, Chunk255367.jsx)(Y, {
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
      emojiURL: true
    }), q(this, "modalRef", r.createRef()), q(this, "handleOpen", () => {
      this.setState({
        opened: true
      })
    }), q(this, "handleAccept", async () => {
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
    }), q(this, "handleGoToLibrary", () => {
      let {
        onClose: t,
        libraryApplication: e
      } = this.props;
      (0, w.uL)(H.Z5c.APPLICATION_LIBRARY, {
        state: {
          applicationId: null != e ? e.id : true
        }
      }), t()
    }), q(this, "getDefaultAnimationStatus", () => this.step === H.wZ8.OPEN ? G.SR.IDLE : G.SR.ACTION), q(this, "getIdleAnimationStatus", () => {
      if (this.step !== H.wZ8.OPEN) return G.SR.LOOP
    })
  }
}
let Q = Chunk442837.ZP.connectStores([Chunk283595.Z, Chunk55563.Z, Chunk812206.Z, Chunk82142.Z, Chunk509545.Z, Chunk607070.Z], t => {
    let {
      giftCode: e
    } = t, n = R.Z.get(e.skuId), i = null != n ? y.Z.getApplication(n.applicationId) : null, r = f.Z.useReducedMotion;
    return {
      sku: n,
      libraryApplication: null != n && (null == e ? true : e.entitlementBranches) != null ? (0, D.z2)(e.entitlementBranches, n, A.Z) : null,
      application: i,
      subscriptionPlan: null != e.subscriptionPlanId ? (0, _.oE)(e.subscriptionPlanId) : null,
      accepting: T.Z.getIsAccepting(e.code),
      useReducedMotion: r
    }
  })(J),
  $ = t => {
    var e, n, r, {
        channelContext: s,
        code: l,
        customGiftMessage: a,
        emojiName: u,
        soundId: d,
        onClose: f
      } = t,
      g = function(t, e) {
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
    let y = (0, v.Dt)(),
      O = (0, o.e7)([T.Z], () => T.Z.get(l)),
      j = (0, p.ZP)(),
      {
        analyticsLocations: P
      } = (0, m.ZP)(h.Z.GIFT_CODE_MODAL),
      {
        product: x
      } = (0, b.T)(null == O ? true : O.skuId);
    return null == O ? null : (0, i.jsx)(Q, (e = function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
          return Object.getOwnPropertyDescriptor(n, t).enumerable
        }))), i.forEach(function(e) {
          q(t, e, n[e])
        })
      }
      return t
    }({}, g), n = n = {
      customGiftMessage: a,
      channelContext: s,
      giftCode: O,
      headerId: y,
      emojiName: u,
      soundId: d,
      analyticsLocations: P,
      isThemeDark: (0, c.wj)(j),
      onClose: f,
      collectiblesItemType: null == x || null == (r = x.items[0]) ? true : r.type,
      onAccept: null != x ? () => {
        f(), (0, S.Z)({
          product: x,
          analyticsLocations: P,
          purchaseType: z.o8.GIFT
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