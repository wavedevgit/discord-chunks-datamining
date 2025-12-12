/** Chunk was on web.js **/
/** chunk id: 446877, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk563132 = require("./563132.jsx"),
  Chunk954824 = require("./954824.js"),
  Chunk261538 = require("./261538.jsx");
let c = {
  name: "Deep Link Test",
  id: "deep-link-test",
  component: function(e) {
    let {
      deepLinkUrl: t
    } = e, n = () => {
      console.log("Opening deep link... ", t), s.Z.launch(t, e => {
        console.log("onDone response: ", e)
      })
    };
    return (0, r.jsx)(o.PaymentContextProvider, {
      stepConfigs: [],
      skuIDs: [],
      activeSubscription: null,
      children: (0, r.jsxs)(l.$0, {
        children: [(0, r.jsx)(a.Heading, {
          variant: "heading-xl/semibold",
          children: "Deep Link Test"
        }), (0, r.jsx)(l.E_, {
          label: "Test Deeplinking with a Custom Path",
          direction: "vertical",
          children: (0, r.jsx)(i.zxk, {
            variant: "primary",
            size: "sm",
            text: "Test Deeplink",
            onClick: n
          })
        })]
      })
    })
  },
  controls: {
    deepLinkUrl: {
      label: "Deep Link URL",
      type: "text",
      defaultValue: "discord://".concat(location.host, "/feature/apple-payment-link")
    }
  }
}