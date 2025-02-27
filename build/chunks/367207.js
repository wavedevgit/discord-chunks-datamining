/** Chunk was on 12379 **/
n.d(t, {
  Z: () => F
}), n(411104), n(47120);
var r = n(200651);
n(192379);
var i = n(392711),
  l = n(481060),
  o = n(570140),
  s = n(904245),
  a = n(317770),
  c = n(100527),
  u = n(358221),
  d = n(963249),
  _ = n(93127),
  E = n(430824),
  p = n(594174),
  m = n(431),
  h = n(626135),
  f = n(74538),
  g = n(557457),
  N = n(970645),
  O = n(30684),
  I = n(514701),
  b = n(6242),
  T = n(467721),
  C = n(757692),
  S = n(281494),
  y = n(276444),
  P = n(937579),
  R = n(522558),
  A = n(879463),
  v = n(822070),
  x = n(520540),
  D = n(11352),
  L = n(474936),
  k = n(981631),
  j = n(354459),
  M = n(37113),
  Z = n(388032);

function U(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      U(e, t, n[t])
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
class G extends a.Z {
  _initialize() {
    __OVERLAY__ ? o.Z.subscribe("PREMIUM_PAYMENT_MODAL_OPEN", this._handlePremiumPaymentModalOpen) : (o.Z.subscribe("PREMIUM_PAYMENT_MODAL_CLOSE", this._handlePremiumPaymentModalClose), o.Z.subscribe("MESSAGE_LENGTH_UPSELL", this.handleMessageLengthUpsell), o.Z.subscribe("POST_CONNECTION_OPEN", this._maybeFetchPremiumOffer), o.Z.subscribe("POST_CONNECTION_OPEN", this._maybeFetchCheckoutRecovery), o.Z.subscribe("POST_CONNECTION_OPEN", this._maybeFetchUserAffinities), o.Z.subscribe("POST_CONNECTION_OPEN", this._trackCustomNotificationSoundsExposure), o.Z.subscribe("MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED", this.maybeShowHDStreamingViewerUpsellMessage))
  }
  _terminate() {
    __OVERLAY__ ? o.Z.unsubscribe("PREMIUM_PAYMENT_MODAL_OPEN", this._handlePremiumPaymentModalOpen) : (o.Z.unsubscribe("PREMIUM_PAYMENT_MODAL_CLOSE", this._handlePremiumPaymentModalClose), o.Z.unsubscribe("MESSAGE_LENGTH_UPSELL", this.handleMessageLengthUpsell), o.Z.unsubscribe("POST_CONNECTION_OPEN", this._maybeFetchPremiumOffer), o.Z.unsubscribe("POST_CONNECTION_OPEN", this._maybeFetchCheckoutRecovery), o.Z.unsubscribe("POST_CONNECTION_OPEN", this._maybeFetchUserAffinities), o.Z.unsubscribe("POST_CONNECTION_OPEN", this._trackCustomNotificationSoundsExposure), o.Z.unsubscribe("MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED", this.maybeShowHDStreamingViewerUpsellMessage))
  }
  handleMessageLengthUpsell(e) {
    let {
      channel: t,
      content: i
    } = e;
    (0, l.ZDy)(async () => {
      let {
        default: e
      } = await n.e("33184").then(n.bind(n, 465836));
      return n => (0, r.jsx)(e, w({
        channel: t,
        content: i
      }, n))
    })
  }
  _getReferralIncentiveEligibility() {
    let e = p.default.getCurrentUser();
    if (y.Z.getIsFetchingReferralIncentiveEligibility() || !(0, f.I5)(e)) return;
    let t = {
        location: "PremiumManager"
      },
      n = {
        autoTrackExposure: !1
      };
    x.g.getCurrentConfig(t, n).enabled && !A.eP.getCurrentConfig(t, n).enabled && v.$.getCurrentConfig(t, n).enabled && (0, S.bq)()
  }
  openPremiumPaymentModalInApp(e) {
    if (__OVERLAY__) throw Error("Should not use this function from the overlay, use ModalAPI.openModal instead");
    return new Promise((t, n) => {
      (0, d.Z)(V(w({}, e), {
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
    return new Promise((e, l) => {
      this._premiumPaymentModalCloseResolve = e, this._premiumPaymentModalCloseReject = l, o.Z.dispatch({
        type: "PREMIUM_PAYMENT_MODAL_OPEN",
        initialPlanId: t,
        subscriptionTier: n,
        followupSKUInfo: r,
        analyticsObject: i
      })
    })
  }
  constructor(...e) {
    super(...e), U(this, "_premiumPaymentModalCloseResolve", null), U(this, "_premiumPaymentModalCloseReject", null), U(this, "_maybeFetchPremiumOffer", async () => {
      let e = p.default.getCurrentUser();
      if (null != e && e.verified) {
        let t = !(0, f.I5)(e) && m.Z.shouldFetchOffer();
        await (0, P.T)("PremiumManager", t)
      }
      o.Z.dispatch({
        type: "PREMIUM_MARKETING_DATA_READY"
      })
    }), U(this, "_maybeFetchCheckoutRecovery", async () => {
      let e = p.default.getCurrentUser();
      null != e && e.verified && !(0, f.I5)(e) && O.Z.shouldFetchCheckoutRecovery() && await (0, N.o)()
    }), U(this, "_maybeFetchUserAffinities", () => {
      let {
        enabled: e
      } = R.w.getCurrentConfig({
        location: "PremiumManager"
      }, {
        autoTrackExposure: !1
      });
      e && (0, _.W)()
    }), U(this, "_trackCustomNotificationSoundsExposure", () => {
      D.Y.trackExposure({
        location: "PremiumManager"
      })
    }), U(this, "_handlePremiumPaymentModalOpen", e => {
      (0, d.Z)(V(w({}, e), {
        analyticsLocations: [c.Z.OVERLAY],
        onClose: e => {
          o.Z.dispatch({
            type: "PREMIUM_PAYMENT_MODAL_CLOSE",
            didSucceed: e
          })
        }
      }))
    }), U(this, "_handlePremiumPaymentModalClose", e => {
      let {
        didSucceed: t
      } = e;
      t && null != this._premiumPaymentModalCloseResolve ? this._premiumPaymentModalCloseResolve() : null != this._premiumPaymentModalCloseReject && this._premiumPaymentModalCloseReject(), this._premiumPaymentModalCloseResolve = null, this._premiumPaymentModalCloseReject = null
    }), U(this, "maybeShowHDStreamingViewerUpsellMessage", e => {
      let t = p.default.getCurrentUser();
      (null == t ? void 0 : t.id) !== e.senderUserId && this._maybeSendViewerUpsellMessage(e.channelId, e.guildId, t)
    }), U(this, "_maybeSendViewerUpsellMessage", (0, i.debounce)((e, t, n) => {
      var r, i;
      let l = u.Z.getSelectedParticipant(e),
        o = (0, C.o)(l, n),
        {
          sendNitroMessage: a
        } = (0, b.TD)(o),
        c = null !== (i = null === (r = E.Z.getGuild(t)) || void 0 === r ? void 0 : r.premiumTier) && void 0 !== i ? i : k.Eu4.NONE;
      if (T.Z.cooldownIsActive() || !a || c >= k.Eu4.TIER_2 || (null == l ? void 0 : l.type) !== j.fO.STREAM || (null == l ? void 0 : l.id) === (null == n ? void 0 : n.id) || null == l.maxResolution || null == l.maxFrameRate) return;
      I.I();
      let d = Z.NW.formatToPlainString(Z.t.AbyeZG, {
        nickname: l.userNick,
        resolution: (0, M.o6)(l.maxResolution.height),
        fps: (0, g.bp)(l.maxFrameRate)
      });
      s.Z.sendNitroSystemMessage(e, d), h.default.track(k.rMx.PREMIUM_UPSELL_MESSAGE_SENT, {
        type: L.cd.HD_STREAMING_VIEWER_UPSELL,
        location_section: null != t ? k.jXE.TEXT_IN_VOICE : k.jXE.CHANNEL_TEXT_AREA,
        location_object: k.qAy.MESSAGE,
        guild_id: t
      })
    }, 200))
  }
}
let F = new G