/** Chunk was on 18475 **/
n.d(t, {
  Z: () => D
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
  p = n(93127),
  f = n(430824),
  h = n(594174),
  _ = n(431),
  m = n(626135),
  b = n(74538),
  g = n(557457),
  E = n(970645),
  v = n(30684),
  O = n(514701),
  y = n(6242),
  C = n(467721),
  x = n(757692),
  N = n(937579),
  S = n(522558),
  I = n(11352),
  P = n(474936),
  j = n(981631),
  T = n(354459),
  L = n(37113),
  w = n(388032);

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      A(e, t, n[t])
    })
  }
  return e
}

function k(e, t) {
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
class M extends s.Z {
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
      return n => (0, r.jsx)(e, R({
        channel: t,
        content: i
      }, n))
    })
  }
  openPremiumPaymentModalInApp(e) {
    if (__OVERLAY__) throw Error("Should not use this function from the overlay, use ModalAPI.openModal instead");
    return new Promise((t, n) => {
      (0, d.Z)(k(R({}, e), {
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
    super(...e), A(this, "_premiumPaymentModalCloseResolve", null), A(this, "_premiumPaymentModalCloseReject", null), A(this, "_maybeFetchPremiumOffer", async () => {
      let e = h.default.getCurrentUser();
      if (null != e && e.verified) {
        let t = !(0, b.I5)(e) && _.Z.shouldFetchOffer();
        await (0, N.T)("PremiumManager", t)
      }
      l.Z.dispatch({
        type: "PREMIUM_MARKETING_DATA_READY"
      })
    }), A(this, "_maybeFetchCheckoutRecovery", async () => {
      let e = h.default.getCurrentUser();
      null != e && e.verified && !(0, b.I5)(e) && v.Z.shouldFetchCheckoutRecovery() && await (0, E.o)()
    }), A(this, "_maybeFetchUserAffinities", () => {
      let {
        enabled: e
      } = S.w.getCurrentConfig({
        location: "PremiumManager"
      }, {
        autoTrackExposure: !1
      });
      e && (0, p.W)()
    }), A(this, "_trackCustomNotificationSoundsExposure", () => {
      I.Y.trackExposure({
        location: "PremiumManager"
      })
    }), A(this, "_handlePremiumPaymentModalOpen", e => {
      (0, d.Z)(k(R({}, e), {
        analyticsLocations: [c.Z.OVERLAY],
        onClose: e => {
          l.Z.dispatch({
            type: "PREMIUM_PAYMENT_MODAL_CLOSE",
            didSucceed: e
          })
        }
      }))
    }), A(this, "_handlePremiumPaymentModalClose", e => {
      let {
        didSucceed: t
      } = e;
      t && null != this._premiumPaymentModalCloseResolve ? this._premiumPaymentModalCloseResolve() : null != this._premiumPaymentModalCloseReject && this._premiumPaymentModalCloseReject(), this._premiumPaymentModalCloseResolve = null, this._premiumPaymentModalCloseReject = null
    }), A(this, "maybeShowHDStreamingViewerUpsellMessage", e => {
      let t = h.default.getCurrentUser();
      (null == t ? void 0 : t.id) !== e.senderUserId && this._maybeSendViewerUpsellMessage(e.channelId, e.guildId, t)
    }), A(this, "_maybeSendViewerUpsellMessage", (0, i.debounce)((e, t, n) => {
      var r, i;
      let o = u.Z.getSelectedParticipant(e),
        l = (0, x.o)(o, n),
        {
          sendNitroMessage: s
        } = (0, y.TD)(l),
        c = null !== (i = null === (r = f.Z.getGuild(t)) || void 0 === r ? void 0 : r.premiumTier) && void 0 !== i ? i : j.Eu4.NONE;
      if (C.Z.cooldownIsActive() || !s || c >= j.Eu4.TIER_2 || (null == o ? void 0 : o.type) !== T.fO.STREAM || (null == o ? void 0 : o.id) === (null == n ? void 0 : n.id) || null == o.maxResolution || null == o.maxFrameRate) return;
      O.I();
      let d = w.NW.formatToPlainString(w.t.AbyeZG, {
        nickname: o.userNick,
        resolution: (0, L.o6)(o.maxResolution.height),
        fps: (0, g.bp)(o.maxFrameRate)
      });
      a.Z.sendNitroSystemMessage(e, d), m.default.track(j.rMx.PREMIUM_UPSELL_MESSAGE_SENT, {
        type: P.cd.HD_STREAMING_VIEWER_UPSELL,
        location_section: null != t ? j.jXE.TEXT_IN_VOICE : j.jXE.CHANNEL_TEXT_AREA,
        location_object: j.qAy.MESSAGE,
        guild_id: t
      })
    }, 200))
  }
}
let D = new M