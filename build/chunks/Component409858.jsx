/** Chunk was on 38029 **/
/** chunk id: 409858, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => ei
}), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk96418 = require("./96418.jsx"),
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
  Chunk655225 = require("./655225.js"),
  Chunk167969 = require("./167969.js"),
  Chunk557256 = require("./557256.js");

function J(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      J(e, t, n[t])
    })
  }
  return e
}
let X = e => {
    let {
      openedGift: t
    } = e, {
      createMultipleConfettiAt: n
    } = r.useContext(S.h);
    return r.useEffect(() => {
      t && n(window.innerWidth / 2, window.innerHeight / 4)
    }, [n, t]), null
  },
  ee = e => {
    let {
      step: t,
      soundId: n
    } = e;
    return r.useEffect(() => {
      var e;
      if (t !== V.wZ8.CONFIRM) return;
      let i = E.Z.getSoundById(n);
      (0, T.playGiftSound)(n, null != (e = null == i ? true : i.volume) ? e : 1)
    }, [t, n]), null
  };
class et extends Chunk473749.Component {
  componentDidMount() {
    let {
      application: e,
      sku: t,
      customGiftMessage: n,
      giftCode: i,
      emojiName: r
    } = this.props;
    null == e && null != t && b.ZP.fetchApplication(t.applicationId);
    let l = null != n || null != i.giftStyle,
      s = (0, O.mO)(i),
      a = null != r ? G.ZP.getURL(r) : true;
    this.setState({
      isCustomGift: l,
      isCollectiblesGift: s,
      emojiURL: a,
      opened: s
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
      isCustomGift: s
    } = this.state;
    return (0, L.TO)(e, n, {
      error: i,
      accepted: r,
      accepting: t,
      opened: l,
      isCustomGift: s
    })
  }
  get buttonText() {
    return (0, L.L2)(this.step, this.props.giftCode, {
      isCustomGift: this.state.isCustomGift
    })
  }
  get firstHeaderText() {
    let {
      isCustomGift: e,
      opened: t,
      accepted: n
    } = this.state, {
      giftCode: i,
      subscriptionPlan: r,
      collectiblesItemType: l
    } = this.props;
    if (e && this.step === V.wZ8.ERROR) return W.intl.formatToMarkdownString(W.t.JUvC0s, {});
    if (e && !n)
      if (!t) return W.intl.formatToPlainString(W.t.xHzRub, {
        recipientDisplayName: H.ZP.getName(R.default.getCurrentUser())
      });
      else {
        let e = R.default.getUser(i.userId),
          t = H.ZP.getName(e);
        if (null != l) switch (l) {
          case a.Z.AVATAR_DECORATION:
            return W.intl.formatToPlainString(W.t.SKduyh, {
              sender: t
            });
          case a.Z.PROFILE_EFFECT:
            return W.intl.formatToPlainString(W.t["1w42T2"], {
              sender: t
            });
          case a.Z.NAMEPLATE:
            return W.intl.formatToPlainString(W.t.vFiQlU, {
              sender: t
            });
          default:
            return W.intl.formatToPlainString(W.t.U4Ko2y, {
              sender: t
            })
        }
        return W.intl.formatToPlainString(W.t["0UR0u4"], {
          sender: t,
          timeInterval: (null == r ? true : r.interval) === B.rV.MONTH ? W.intl.string(W.t.FPybU7) : W.intl.string(W.t.tfqrhj)
        })
      } return null == this.props.sku ? null : (0, L.dQ)(this.step, this.props.giftCode, this.props.sku)
  }
  get secondHeaderText() {
    if (!this.state.isCustomGift || this.state.opened || this.state.accepted) return null;
    let e = R.default.getUser(this.props.giftCode.userId);
    return W.intl.formatToPlainString(W.t.DDO4Wz, {
      sender: H.ZP.getName(e)
    })
  }
  get bodyText() {
    let {
      sku: e,
      accepting: t,
      libraryApplication: n,
      subscriptionPlan: i
    } = this.props;
    if (null == e) return null;
    let {
      error: r,
      accepted: l,
      isCustomGift: s,
      opened: a
    } = this.state;
    return !a && s ? null : (0, L.iM)({
      step: this.step,
      sku: e,
      libraryApplication: n,
      error: r,
      accepted: l,
      accepting: t,
      onGoToLibrary: this.handleGoToLibrary,
      subscriptionPlan: i
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
    return (0, L.e$)(e, n, i, t, this.handleGoToLibrary)
  }
  get handleClick() {
    let {
      giftCode: e,
      onClose: t
    } = this.props;
    switch (this.step) {
      case V.wZ8.ERROR:
        return t;
      case V.wZ8.SUCCESS:
        if (__OVERLAY__ || null != e.subscriptionPlanId) return t;
        return this.handleGoToLibrary;
      case V.wZ8.OPEN:
        return this.handleOpen;
      case V.wZ8.CONFIRM:
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
      isCustomGift: s
    } = this.state;
    D.default.track(V.rMx.GIFT_ACCEPT_STEP, {
      to_step: this.step,
      location_stack: l,
      has_custom_message: s,
      is_custom_message_edited: s && t !== W.intl.string(W.t.ZkOo1U),
      gift_style: e.giftStyle,
      gift_code: e.code,
      emoji_name: n,
      sound_id: i,
      product_line: null == r ? true : r.productLine
    })
  }
  render() {
    let {
      application: e,
      accepting: t,
      onClose: n,
      giftCode: r,
      headerId: l,
      transitionState: a,
      useReducedMotion: o,
      onComplete: c,
      customGiftMessage: d,
      emojiName: f,
      soundId: p,
      isThemeDark: m
    } = this.props, h = R.default.getUser(r.userId), {
      isCustomGift: b,
      isCollectiblesGift: g,
      accepted: y,
      opened: O,
      emojiURL: j
    } = this.state, v = R.default.getCurrentUser(), S = this.step === V.wZ8.ERROR, x = (null == r ? true : r.userId) != null && null != v && (null == v ? true : v.id) != null && r.userId === v.id;
    switch (this.step) {
      case V.wZ8.ERROR:
        null == c || c(r, false);
        break;
      case V.wZ8.SUCCESS:
        null == c || c(r, true)
    }
    return (0, i.jsxs)("div", {
      ref: this.modalRef,
      children: [(0, i.jsxs)(u.Y0X, {
        "data-migration-pending": true,
        transitionState: a,
        size: u.CgR.SMALL,
        className: Y.modal,
        "aria-labelledby": l,
        parentComponent: "GiftCodeModal",
        children: [null != r.giftStyle && !b && !g && (0, i.jsx)(z.Z, {
          defaultAnimationState: this.getDefaultAnimationStatus(),
          idleAnimationState: this.getIdleAnimationStatus(),
          giftStyle: r.giftStyle,
          className: Y.seasonalGiftIcon
        }), !b && (0, i.jsx)("div", {
          className: Y.backSplash
        }), !g && (0, i.jsx)(u.olH, {
          "data-migration-pending": true,
          onClick: n,
          className: Y.closeButton
        }), (0, i.jsxs)(u.hzk, {
          "data-migration-pending": true,
          className: s()({
            [Y.content]: !b,
            [Y.contentCustomGift]: b
          }),
          children: [!g && (null == r.giftStyle || b && y) ? (0, i.jsx)(w.Z, {
            size: w.A.LARGE,
            game: e,
            skuId: r.skuId
          }) : null, S && (0, i.jsx)("img", {
            alt: "",
            src: m ? $ : q
          }), (0, i.jsxs)(u.Heading, {
            id: l,
            className: s()({
              [Y.customGiftHeader]: b && !y,
              [Y.header]: !b || y
            }),
            variant: "heading-sm/semibold",
            children: [(0, i.jsx)("div", {
              className: s()({
                [Y.customGiftHeaderText]: b
              }),
              children: this.firstHeaderText
            }), (0, i.jsx)("div", {
              children: this.secondHeaderText
            })]
          }), !(b && !y) && (0, i.jsx)(u.Text, {
            className: Y.body,
            variant: "text-sm/normal",
            children: this.bodyText
          }), b && !g && null != r.giftStyle && !y && !S && (0, i.jsx)(z.Z, {
            defaultAnimationState: this.getDefaultAnimationStatus(),
            idleAnimationState: this.getIdleAnimationStatus(),
            className: Y.giftAnimation,
            giftStyle: r.giftStyle
          }), this.state.opened && !S && g && (0, i.jsx)(P.Z, {
            giftCode: r
          }), S && (0, i.jsx)(u.Text, {
            className: Y.body,
            variant: "text-md/normal",
            children: this.errorMessage
          }), b && this.state.opened && !this.state.accepted && !S && null != d && "" !== d && !x && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(u.Heading, {
              id: l,
              variant: "heading-md/semibold",
              children: W.intl.format(W.t.DDO4Wz, {
                sender: H.ZP.getName(h)
              })
            }), (0, i.jsx)(u.Text, {
              className: Y.customMessage,
              variant: "text-md/semibold",
              children: d
            })]
          }), (0, i.jsx)(u.Button, {
            variant: "primary",
            text: this.buttonText,
            loading: t,
            onClick: () => {
              this.trackStepAnalytics(), this.handleClick()
            }
          })]
        })]
      }), null != r.giftStyle && !o && this.step !== V.wZ8.ERROR && !y && !t && O && (null == f || null == j ? (0, i.jsx)(X, {
        openedGift: O && !y && !t
      }) : (0, i.jsx)(F.Z, {
        confettiTarget: this.modalRef.current,
        emojiURL: j
      })), !y && !t && O && null != p && (0, i.jsx)(ee, {
        soundId: p,
        step: this.step
      })]
    })
  }
  constructor(...e) {
    super(...e), J(this, "state", {
      error: null,
      accepted: false,
      opened: false,
      isCustomGift: false,
      isCollectiblesGift: false,
      step: true,
      emojiURL: true
    }), J(this, "modalRef", r.createRef()), J(this, "handleOpen", () => {
      this.setState({
        opened: true
      })
    }), J(this, "handleAccept", async () => {
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
    }), J(this, "handleGoToLibrary", () => {
      let {
        onClose: e,
        libraryApplication: t
      } = this.props;
      (0, C.uL)(V.Z5c.APPLICATION_LIBRARY, {
        state: {
          applicationId: null != t ? t.id : true
        }
      }), e()
    }), J(this, "getDefaultAnimationStatus", () => this.step === V.wZ8.OPEN ? U.SR.IDLE : U.SR.ACTION), J(this, "getIdleAnimationStatus", () => {
      if (this.step !== V.wZ8.OPEN) return U.SR.LOOP
    })
  }
}
let en = Chunk442837.ZP.connectStores([Chunk283595.Z, Chunk55563.Z, Chunk812206.Z, Chunk82142.Z, Chunk509545.Z, Chunk607070.Z, Chunk597688.Z], e => {
    let {
      giftCode: t
    } = e, n = N.Z.get(t.skuId), i = null != n ? g.Z.getApplication(n.applicationId) : null, r = p.Z.useReducedMotion;
    return {
      sku: n,
      libraryApplication: null != n && (null == t ? true : t.entitlementBranches) != null ? (0, L.z2)(t.entitlementBranches, n, I.Z) : null,
      application: i,
      subscriptionPlan: null != t.subscriptionPlanId ? (0, M.oE)(t.subscriptionPlanId) : null,
      accepting: _.Z.getIsAccepting(t.code),
      useReducedMotion: r
    }
  })(e => {
    let {
      sku: t,
      giftCode: n,
      channelContext: l,
      customGiftMessage: s,
      onClose: a,
      analyticsLocations: o,
      emojiName: c,
      soundId: u
    } = e, d = null != t && (0, Z.K$)(t);
    return (r.useEffect(() => {
      if (d) {
        (0, A.L)({
          sku: t,
          giftCode: n,
          channelContext: l,
          customGiftMessage: s,
          analyticsLocations: o,
          emojiName: c,
          soundId: u
        }), a();
        return
      }
    }, [t, d, l, s, n, a, o, c, u]), d) ? null : (0, i.jsx)(et, Q({}, e))
  }),
  ei = e => {
    var t, n, {
        channelContext: r,
        code: l,
        customGiftMessage: s,
        emojiName: a,
        soundId: u,
        onClose: d
      } = e,
      p = function(e, t) {
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
    let b = (0, x.Dt)(),
      g = (0, o.e7)([_.Z], () => _.Z.get(l)),
      y = (0, f.ZP)(),
      {
        analyticsLocations: P
      } = (0, h.ZP)(m.Z.GIFT_CODE_MODAL),
      {
        product: S
      } = (0, j.T)(null == g ? true : g.skuId, true);
    return null == g ? null : (0, i.jsx)(en, (t = Q({}, p), n = n = {
      customGiftMessage: s,
      channelContext: r,
      giftCode: g,
      headerId: b,
      emojiName: a,
      soundId: u,
      analyticsLocations: P,
      isThemeDark: (0, c.wj)(y),
      onClose: d,
      collectiblesItemType: (0, O.$W)(S),
      onAccept: null != S ? () => {
        d(), (0, v.Z)({
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