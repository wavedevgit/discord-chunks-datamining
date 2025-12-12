/** Chunk was on web.js **/
/** chunk id: 594135, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CancellationContext: () => o,
  a: () => s
});
var Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk474936 = require("./474936.js");
let o = Chunk473749.createContext({
    setStep: () => {},
    premiumType: Chunk474936.PremiumTypes.TIER_0,
    onClose: () => {},
    transitionState: Chunk793030.Dvm.ENTERING,
    premiumSubscription: {},
    analyticsLocations: [],
    analyticsLocation: true,
    confettiCanvas: null,
    churnUserDiscountOffer: null,
    isFetchingChurnDiscountOffer: false,
    paymentsBlocked: false,
    renewalInvoice: null,
    renewalInvoiceDetails: null,
    handleCancellation: async () => {},
    applyOffer: async () => {},
    pauseDuration: null,
    setPauseDuration: () => {}
  }),
  s = () => Chunk473749.useContext(o)