/** Chunk was on web.js **/
/** chunk id: 916974, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CancellationContext: () => o,
  X: () => s
});
var Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk788868 = require("./788868.js");
let o = Chunk64700.createContext({
    setStep: () => {},
    premiumType: Chunk788868.PremiumTypes.TIER_0,
    onClose: () => {},
    transitionState: Chunk158954.ip4.ENTERING,
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
  s = () => r.useContext(o)