/** Chunk was on 74329 **/
n.d(t, {
  Z: () => G
}), n(411104), n(47120);
var r = n(200651);
n(192379);
var i = n(392711),
  o = n(481060),
  l = n(570140),
  a = n(904245),
  s = n(317770),
  c = n(100527),
  u = n(358221),
  d = n(963249),
  _ = n(93127),
  p = n(430824),
  E = n(594174),
  f = n(431),
  m = n(626135),
  h = n(74538),
  b = n(557457),
  g = n(970645),
  O = n(30684),
  N = n(514701),
  I = n(6242),
  C = n(467721),
  T = n(757692),
  S = n(281494),
  y = n(276444),
  v = n(937579),
  P = n(522558),
  R = n(879463),
  A = n(822070),
  x = n(520540),
  j = n(11352),
  D = n(474936),
  L = n(981631),
  k = n(354459),
  M = n(37113),
  Z = n(388032);

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function U(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      w(e, t, n[t])
    })
  }
  return e
}

function V(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class F extends s.Z {
  _initialize() {
    __OVERLAY__ ? l.Z.subscribe("PREMIUM_PAYMENT_MODAL_OPEN", this._handlePremiumPaymentModalOpen) : (l.Z.subscribe("PREMIUM_PAYMENT_MODAL_CLOSE", this._handlePremiumPaymentModalClose), l.Z.subscribe("MESSAGE_LENGTH_UPSELL", this.handleMessageLengthUpsell), l.Z.subscribe("POST_CONNECTION_OPEN", this._maybeFetchPremiumOffer), l.Z.subscribe("POST_CONNECTION_OPEN", this._maybeFetchCheckoutRecovery), l.Z.subscribe("POST_CONNECTION_OPEN", this._maybeFetchUserAffinities), l.Z.subscribe("POST_CONNECTION_OPEN", this._trackCustomNotificationSoundsExposure), l.Z.subscribe("MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED", this.maybeShowHDStreamingViewerUpsellMessage))
  }
  _terminate() {
    __OVERLAY__ ? l.Z.unsubscribe("PREMIUM_PAYMENT_MODAL_OPEN", this._handlePremiumPaymentModalOpen) : (l.Z.unsubscribe("PREMIUM_PAYMENT_MODAL_CLOSE", this._handlePremiumPaymentModalClose), l.Z.unsubscribe("MESSAGE_LENGTH_UPSELL", this.handleMessageLengthUpsell), l.Z.unsubscribe("POST_CONNECTION_OPEN", this._maybeFetchPremiumOffer), l.Z.unsubscribe("POST_CONNECTION_OPEN", this._maybeFetchCheckoutRecovery), l.Z.unsubscribe("POST_CONNECTION_OPEN", this._maybeFetchUserAffinities), l.Z.unsubscribe("POST_CONNECTION_OPEN", this._trackCustomNotificationSoundsExposure), l.Z.unsubscribe("MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED", this.maybeShowHDStreamingViewerUpsellMessage))
  }
  handleMessageLengthUpsell(e) {
    let {
      channel: t,
      content: i
    } = e;
    (0, o.ZDy)(async () => {
      let {
        default: e
      } = await n.e("33184").then(n.bind(n, 465836));
      return n => (0, r.jsx)(e, U({
        channel: t,
        content: i
      }, n))
    })
  }
  _getReferralIncentiveEligibility() {
    let e = E.default.getCurrentUser();
    if (y.Z.getIsFetchingReferralIncentiveEligibility() || !(0, h.I5)(e)) return;
    let t = {
        location: "PremiumManager"
      },
      n = {
        autoTrackExposure: !1
      };
    x.g.getCurrentConfig(t, n).enabled && !R.eP.getCurrentConfig(t, n).enabled && A.$.getCurrentConfig(t, n).enabled && (0, S.bq)()
  }
  openPremiumPaymentModalInApp(e) {
    if (__OVERLAY__) throw Error("Should not use this function from the overlay, use ModalAPI.openModal instead");
    return new Promise((t, n) => {
      (0, d.Z)(V(U({}, e), {
        onClose: e => {
          e ? t() : n()
        }
      }))
    })
  }
  openPremiumPaymentModalInOverlay(e) {
    if (__OVERLAY__) throw Error("Should not use this function from the overlay, use ModalAPI.openModal instead");
    let {
      initialPlanId: t,
      subscriptionTier: n,
      followupSKUInfo: r,
      analyticsObject: i
    } = null != e ? e : {};
    return new Promise((e, o) => {
      this._premiumPaymentModalCloseResolve = e, this._premiumPaymentModalCloseReject = o, l.Z.dispatch({
        type: "PREMIUM_PAYMENT_MODAL_OPEN",
        initialPlanId: t,
        subscriptionTier: n,
        followupSKUInfo: r,
        analyticsObject: i
      })
    })
  }
  constructor(...e) {
    super(...e), w(this, "_premiumPaymentModalCloseResolve", null), w(this, "_premiumPaymentModalCloseReject", null), w(this, "_maybeFetchPremiumOffer", async () => {
      let e = E.default.getCurrentUser();
      if (null != e && e.verified) {
        let t = !(0, h.I5)(e) && f.Z.shouldFetchOffer();
        await (0, v.T)("PremiumManager", t)
      }
      l.Z.dispatch({
        type: "PREMIUM_MARKETING_DATA_READY"
      })
    }), w(this, "_maybeFetchCheckoutRecovery", async () => {
      let e = E.default.getCurrentUser();
      null != e && e.verified && !(0, h.I5)(e) && O.Z.shouldFetchCheckoutRecovery() && await (0, g.o)()
    }), w(this, "_maybeFetchUserAffinities", () => {
      let {
        enabled: e
      } = P.w.getCurrentConfig({
        location: "PremiumManager"
      }, {
        autoTrackExposure: !1
      });
      e && (0, _.W)()
    }), w(this, "_trackCustomNotificationSoundsExposure", () => {
      j.Y.trackExposure({
        location: "PremiumManager"
      })
    }), w(this, "_handlePremiumPaymentModalOpen", e => {
      (0, d.Z)(V(U({}, e), {
        analyticsLocations: [c.Z.OVERLAY],
        onClose: e => {
          l.Z.dispatch({
            type: "PREMIUM_PAYMENT_MODAL_CLOSE",
            didSucceed: e
          })
        }
      }))
    }), w(this, "_handlePremiumPaymentModalClose", e => {
      let {
        didSucceed: t
      } = e;
      t && null != this._premiumPaymentModalCloseResolve ? this._premiumPaymentModalCloseResolve() : null != this._premiumPaymentModalCloseReject && this._premiumPaymentModalCloseReject(), this._premiumPaymentModalCloseResolve = null, this._premiumPaymentModalCloseReject = null
    }), w(this, "maybeShowHDStreamingViewerUpsellMessage", e => {
      let t = E.default.getCurrentUser();
      (null == t ? void 0 : t.id) !== e.senderUserId && this._maybeSendViewerUpsellMessage(e.channelId, e.guildId, t)
    }), w(this, "_maybeSendViewerUpsellMessage", (0, i.debounce)((e, t, n) => {
      var r, i;
      let o = u.Z.getSelectedParticipant(e),
        l = (0, T.o)(o, n),
        {
          sendNitroMessage: s
        } = (0, I.TD)(l),
        c = null !== (i = null === (r = p.Z.getGuild(t)) || void 0 === r ? void 0 : r.premiumTier) && void 0 !== i ? i : L.Eu4.NONE;
      if (C.Z.cooldownIsActive() || !s || c >= L.Eu4.TIER_2 || (null == o ? void 0 : o.type) !== k.fO.STREAM || (null == o ? void 0 : o.id) === (null == n ? void 0 : n.id) || null == o.maxResolution || null == o.maxFrameRate) return;
      N.I();
      let d = Z.NW.formatToPlainString(Z.t.AbyeZG, {
        nickname: o.userNick,
        resolution: (0, M.o6)(o.maxResolution.height),
        fps: (0, b.bp)(o.maxFrameRate)
      });
      a.Z.sendNitroSystemMessage(e, d), m.default.track(L.rMx.PREMIUM_UPSELL_MESSAGE_SENT, {
        type: D.cd.HD_STREAMING_VIEWER_UPSELL,
        location_section: null != t ? L.jXE.TEXT_IN_VOICE : L.jXE.CHANNEL_TEXT_AREA,
        location_object: L.qAy.MESSAGE,
        guild_id: t
      })
    }, 200))
  }
}
let G = new F