/** Chunk was on web.js **/
/** chunk id: 159176, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk156312 = require("./156312.jsx"),
  Chunk877062 = require("./877062.js"),
  Chunk252561 = require("./252561.jsx");
let c = {
  name: "Deep Link Test",
  id: "deep-link-test",
  component: function(e) {
    let {
      deepLinkUrl: t
    } = e, n = () => {
      console.log("Opening deep link... ", t), o.A.launch(t, e => {
        console.log("onDone response: ", e)
      })
    };
    return (0, r.jsx)(s.PaymentContextProvider, {
      stepConfigs: [],
      skuIDs: [],
      activeSubscription: null,
      children: (0, r.jsxs)(l.wn, {
        children: [(0, r.jsx)(a.Heading, {
          variant: "heading-xl/semibold",
          children: "Deep Link Test"
        }), (0, r.jsx)(l.Hq, {
          label: "Test Deeplinking with a Custom Path",
          direction: "vertical",
          children: (0, r.jsx)(i.$nd, {
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