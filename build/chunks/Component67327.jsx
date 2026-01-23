/** Chunk was on 14439 **/
/** chunk id: 67327, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => en
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk575593 = require("./575593.js"),
  Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk869038 = require("./869038.js"),
  Chunk736653 = require("./736653.js"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk627363 = require("./627363.js"),
  Chunk587895 = require("./587895.js"),
  Chunk590180 = require("./590180.js"),
  Chunk993408 = require("./993408.js"),
  Chunk674658 = require("./674658.js"),
  Chunk552915 = require("./552915.jsx"),
  Chunk61750 = require("./61750.jsx"),
  Chunk21161 = require("./21161.jsx"),
  Chunk915089 = require("./915089.js"),
  Chunk769015 = require("./769015.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk871123 = require("./871123.js"),
  Chunk220297 = require("./220297.jsx"),
  Chunk946261 = require("./946261.js"),
  Chunk209932 = require("./209932.js"),
  Chunk30793 = require("./30793.js"),
  Chunk189081 = require("./189081.js"),
  Chunk287809 = require("./287809.js"),
  Chunk97352 = require("./97352.js"),
  Chunk67480 = require("./67480.js"),
  Chunk954571 = require("./954571.js"),
  Chunk690521 = require("./690521.js"),
  Chunk45938 = require("./45938.js"),
  Chunk615396 = require("./615396.js"),
  Chunk427262 = require("./427262.js"),
  Chunk242874 = require("./242874.js"),
  Chunk518926 = require("./518926.jsx"),
  Chunk75825 = require("./75825.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk758836 = require("./758836.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk910143 = require("./910143.js"),
  Chunk428721 = require("./428721.js"),
  Chunk852119 = require("./852119.js");

function Y(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}

function X(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      Y(e, t, r[t])
    })
  }
  return e
}
let Z = e => {
    let {
      openedGift: t
    } = e, {
      createMultipleConfettiAt: r
    } = i.useContext(v.x);
    return i.useEffect(() => {
      t && r(window.innerWidth / 2, window.innerHeight / 4)
    }, [r, t]), null
  },
  ee = e => {
    let {
      step: t,
      soundId: r
    } = e;
    return i.useEffect(() => {
      var e;
      if (t !== $.frR.CONFIRM) return;
      let n = I.A.getSoundById(r);
      (0, C.playGiftSound)(r, null != (e = null == n ? true : n.volume) ? e : 1)
    }, [t, r]), null
  };
class et extends Chunk64700.Component {
  componentDidMount() {
    let {
      application: e,
      sku: t,
      customGiftMessage: r,
      giftCode: n,
      emojiName: i
    } = this.props;
    null == e && null != t && y.Ay.fetchApplication(t.applicationId);
    let l = null != r || null != n.giftStyle,
      s = (0, O.hU)(n),
      a = null != i ? G.Ay.getURL(i) : true;
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
      giftCode: r
    } = this.props, {
      error: n,
      accepted: i,
      opened: l,
      isCustomGift: s
    } = this.state;
    return (0, L.v3)(e, r, {
      error: n,
      accepted: i,
      accepting: t,
      opened: l,
      isCustomGift: s
    })
  }
  get buttonText() {
    return (0, L.UJ)(this.step, this.props.giftCode, {
      isCustomGift: this.state.isCustomGift
    })
  }
  get firstHeaderText() {
    let {
      isCustomGift: e,
      opened: t,
      accepted: r
    } = this.state, {
      giftCode: n,
      subscriptionPlan: i,
      collectiblesItemType: l
    } = this.props;
    if (e && this.step === $.frR.ERROR) return Q.intl.formatToMarkdownString(Q.t.JUvC0s, {});
    if (e && !r)
      if (!t) return Q.intl.formatToPlainString(Q.t.xHzRub, {
        recipientDisplayName: U.Ay.getName(N.default.getCurrentUser())
      });
      else {
        let e = N.default.getUser(n.userId),
          t = U.Ay.getName(e);
        if (null != l) switch (l) {
          case a.R.AVATAR_DECORATION:
            return Q.intl.formatToPlainString(Q.t.SKduyh, {
              sender: t
            });
          case a.R.PROFILE_EFFECT:
            return Q.intl.formatToPlainString(Q.t["1w42T2"], {
              sender: t
            });
          case a.R.NAMEPLATE:
            return Q.intl.formatToPlainString(Q.t.vFiQlU, {
              sender: t
            });
          default:
            return Q.intl.formatToPlainString(Q.t.U4Ko2y, {
              sender: t
            })
        }
        return Q.intl.formatToPlainString(Q.t["0UR0u4"], {
          sender: t,
          timeInterval: (null == i ? true : i.interval) === z.WT.MONTH ? Q.intl.string(Q.t.FPybU7) : Q.intl.string(Q.t.tfqrhj)
        })
      } return null == this.props.sku ? null : (0, L.n$)(this.step, this.props.giftCode, this.props.sku)
  }
  get secondHeaderText() {
    if (!this.state.isCustomGift || this.state.opened || this.state.accepted) return null;
    let e = N.default.getUser(this.props.giftCode.userId);
    return Q.intl.formatToPlainString(Q.t.DDO4Wz, {
      sender: U.Ay.getName(e)
    })
  }
  get bodyText() {
    let {
      sku: e,
      accepting: t,
      libraryApplication: r,
      subscriptionPlan: n
    } = this.props;
    if (null == e) return null;
    let {
      error: i,
      accepted: l,
      isCustomGift: s,
      opened: a
    } = this.state;
    return !a && s ? null : (0, L.e_)({
      step: this.step,
      sku: e,
      libraryApplication: r,
      error: i,
      accepted: l,
      accepting: t,
      onGoToLibrary: this.handleGoToLibrary,
      subscriptionPlan: n
    })
  }
  get errorMessage() {
    let {
      libraryApplication: e,
      accepting: t
    } = this.props, {
      error: r,
      accepted: n
    } = this.state;
    return (0, L.u1)(e, r, n, t, this.handleGoToLibrary)
  }
  get handleClick() {
    let {
      giftCode: e,
      onClose: t
    } = this.props;
    switch (this.step) {
      case $.frR.ERROR:
        return t;
      case $.frR.SUCCESS:
        if (__OVERLAY__ || null != e.subscriptionPlanId) return t;
        return this.handleGoToLibrary;
      case $.frR.OPEN:
        return this.handleOpen;
      case $.frR.CONFIRM:
      default:
        return this.handleAccept
    }
  }
  trackStepAnalytics() {
    let {
      giftCode: e,
      customGiftMessage: t,
      emojiName: r,
      soundId: n,
      sku: i,
      analyticsLocations: l
    } = this.props, {
      isCustomGift: s
    } = this.state;
    M.default.track($.HAw.GIFT_ACCEPT_STEP, {
      to_step: this.step,
      location_stack: l,
      has_custom_message: s,
      is_custom_message_edited: s && t !== Q.intl.string(Q.t.ZkOo1U),
      gift_style: e.giftStyle,
      gift_code: e.code,
      emoji_name: r,
      sound_id: n,
      product_line: null == i ? true : i.productLine
    })
  }
  render() {
    let {
      application: e,
      accepting: t,
      onClose: r,
      giftCode: i,
      headerId: l,
      transitionState: a,
      useReducedMotion: o,
      onComplete: c,
      customGiftMessage: d,
      emojiName: p,
      soundId: f,
      isThemeDark: h
    } = this.props, m = N.default.getUser(i.userId), {
      isCustomGift: y,
      isCollectiblesGift: g,
      accepted: b,
      opened: O,
      emojiURL: j
    } = this.state, x = N.default.getCurrentUser(), v = this.step === $.frR.ERROR, P = (null == i ? true : i.userId) != null && null != x && (null == x ? true : x.id) != null && i.userId === x.id;
    switch (this.step) {
      case $.frR.ERROR:
        null == c || c(i, false);
        break;
      case $.frR.SUCCESS:
        null == c || c(i, true)
    }
    return (0, n.jsxs)("div", {
      ref: this.modalRef,
      children: [(0, n.jsxs)(u.EOs, {
        "data-migration-pending": true,
        transitionState: a,
        size: u.rIJ.SMALL,
        className: q.yl,
        "aria-labelledby": l,
        parentComponent: "GiftCodeModal",
        children: [null != i.giftStyle && !y && !g && (0, n.jsx)(V.A, {
          defaultAnimationState: this.getDefaultAnimationStatus(),
          idleAnimationState: this.getIdleAnimationStatus(),
          giftStyle: i.giftStyle,
          className: q.C9
        }), !y && (0, n.jsx)("div", {
          className: q.Dv
        }), !g && (0, n.jsx)(u.s_y, {
          "data-migration-pending": true,
          onClick: r,
          className: q.b
        }), (0, n.jsxs)(u.$mQ, {
          "data-migration-pending": true,
          className: s()({
            [q.Qs]: !y,
            [q.Fl]: y
          }),
          children: [!g && (null == i.giftStyle || y && b) ? (0, n.jsx)(S.A, {
            size: S.M.LARGE,
            game: e,
            skuId: i.skuId
          }) : null, v && (0, n.jsx)("img", {
            alt: "",
            src: h ? W : J
          }), (0, n.jsxs)(u.Heading, {
            id: l,
            className: s()({
              [q.Ry]: y && !b,
              [q.wx]: !y || b
            }),
            variant: "heading-sm/semibold",
            children: [(0, n.jsx)("div", {
              className: s()({
                [q.Qw]: y
              }),
              children: this.firstHeaderText
            }), (0, n.jsx)("div", {
              children: this.secondHeaderText
            })]
          }), !(y && !b) && (0, n.jsx)(u.Text, {
            className: q.rf,
            variant: "text-sm/normal",
            children: this.bodyText
          }), y && !g && null != i.giftStyle && !b && !v && (0, n.jsx)(V.A, {
            defaultAnimationState: this.getDefaultAnimationStatus(),
            idleAnimationState: this.getIdleAnimationStatus(),
            className: q.l$,
            giftStyle: i.giftStyle
          }), this.state.opened && !v && g && (0, n.jsx)(A.A, {
            giftCode: i
          }), v && (0, n.jsx)(u.Text, {
            className: q.rf,
            variant: "text-md/normal",
            children: this.errorMessage
          }), y && this.state.opened && !this.state.accepted && !v && null != d && "" !== d && !P && (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(u.Heading, {
              id: l,
              variant: "heading-md/semibold",
              children: Q.intl.format(Q.t.DDO4Wz, {
                sender: U.Ay.getName(m)
              })
            }), (0, n.jsx)(u.Text, {
              className: q.$B,
              variant: "text-md/semibold",
              children: d
            })]
          }), (0, n.jsx)(u.Button, {
            variant: "primary",
            text: this.buttonText,
            loading: t,
            onClick: () => {
              this.trackStepAnalytics(), this.handleClick()
            }
          })]
        })]
      }), null != i.giftStyle && !o && this.step !== $.frR.ERROR && !b && !t && O && (null == p || null == j ? (0, n.jsx)(Z, {
        openedGift: O && !b && !t
      }) : (0, n.jsx)(B.A, {
        confettiTarget: this.modalRef.current,
        emojiURL: j
      })), !b && !t && O && null != f && (0, n.jsx)(ee, {
        soundId: f,
        step: this.step
      })]
    })
  }
  constructor(...e) {
    super(...e), Y(this, "state", {
      error: null,
      accepted: false,
      opened: false,
      isCustomGift: false,
      isCollectiblesGift: false,
      step: true,
      emojiURL: true
    }), Y(this, "modalRef", i.createRef()), Y(this, "handleOpen", () => {
      this.setState({
        opened: true
      })
    }), Y(this, "handleAccept", async () => {
      let {
        giftCode: e,
        channelContext: t,
        onAccept: r
      } = this.props;
      if (null == e) throw Error("GiftCode is null at acceptance.");
      try {
        await d.A.redeemGiftCode({
          code: e.code,
          options: {
            channelId: t
          }
        }), this.setState({
          accepted: true
        }), null == r || r()
      } catch (e) {
        this.setState({
          error: e
        })
      }
    }), Y(this, "handleGoToLibrary", () => {
      let {
        onClose: e,
        libraryApplication: t
      } = this.props;
      (0, _.pX)($.BVt.APPLICATION_LIBRARY, {
        state: {
          applicationId: null != t ? t.id : true
        }
      }), e()
    }), Y(this, "getDefaultAnimationStatus", () => this.step === $.frR.OPEN ? H.oA.IDLE : H.oA.ACTION), Y(this, "getIdleAnimationStatus", () => {
      if (this.step !== $.frR.OPEN) return H.oA.LOOP
    })
  }
}
let er = Chunk311907.Ay.connectStores([Chunk189081.A, Chunk67480.A, Chunk587895.A, Chunk30793.A, Chunk97352.A, Chunk775602.A, Chunk590180.A], e => {
    let {
      giftCode: t
    } = e, r = D.A.get(t.skuId), n = null != r ? g.A.getApplication(r.applicationId) : null, i = f.A.useReducedMotion;
    return {
      sku: r,
      libraryApplication: null != r && (null == t ? true : t.entitlementBranches) != null ? (0, L.YI)(t.entitlementBranches, r, E.A) : null,
      application: n,
      subscriptionPlan: null != t.subscriptionPlanId ? (0, F.c9)(t.subscriptionPlanId) : null,
      accepting: T.A.getIsAccepting(t.code),
      useReducedMotion: i
    }
  })(e => {
    let {
      sku: t,
      giftCode: r,
      channelContext: l,
      customGiftMessage: s,
      onClose: a,
      analyticsLocations: o,
      emojiName: c,
      soundId: u
    } = e, d = null != t && (0, w.bF)(t);
    return (i.useEffect(() => {
      if (d) {
        (0, R.b)({
          sku: t,
          giftCode: r,
          channelContext: l,
          customGiftMessage: s,
          analyticsLocations: o,
          emojiName: c,
          soundId: u
        }), a();
        return
      }
    }, [t, d, l, s, r, a, o, c, u]), d) ? null : (0, n.jsx)(et, X({}, e))
  }),
  en = e => {
    var t, r;
    let {
      channelContext: i,
      code: l,
      customGiftMessage: s,
      emojiName: a,
      soundId: u,
      onClose: d
    } = e, f = function(e, t) {
      if (null == e) return {};
      var r, n, i, l = {};
      if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, r = Reflect.ownKeys(e); i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }
      if (l = function(e, t) {
          if (null == e) return {};
          var r, n, i = {},
            l = Object.getOwnPropertyNames(e);
          for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
          return i
        }(e, t), Object.getOwnPropertySymbols)
        for (i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
      return l
    }(e, ["channelContext", "code", "customGiftMessage", "emojiName", "soundId", "onClose"]), y = (0, P.GV)(), g = (0, o.bG)([T.A], () => T.A.get(l)), b = (0, p.Ay)(), {
      analyticsLocations: A
    } = (0, m.Ay)(h.A.GIFT_CODE_MODAL), {
      product: v
    } = (0, j.q)(null == g ? true : g.skuId, true);
    return null == g ? null : (0, n.jsx)(er, (t = X({}, f), r = r = {
      customGiftMessage: s,
      channelContext: i,
      giftCode: g,
      headerId: y,
      emojiName: a,
      soundId: u,
      analyticsLocations: A,
      isThemeDark: (0, c.Mw)(b),
      onClose: d,
      collectiblesItemType: (0, O.oj)(v),
      onAccept: null != v ? () => {
        d(), (0, x.A)({
          product: v,
          analyticsLocations: A,
          purchaseType: K.gs.GIFT
        })
      } : true
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r.push.apply(r, n)
      }
      return r
    })(Object(r)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
    }), t))
  }