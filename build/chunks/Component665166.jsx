/** Chunk was on web.js **/
/** chunk id: 665166, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk631562 = require("./631562.js"),
  Chunk481060 = require("./481060.js"),
  Chunk48480 = require("./48480.js"),
  Chunk931115 = require("./931115.js"),
  Chunk388032 = require("./388032.jsx");

function u() {
  Chunk647438.useSyncExternalStore(Chunk388032.intl.onLocaleChange, () => Chunk388032.intl.currentLocale);
  let [, e] = Chunk647438.useState({});
  return Chunk647438.useEffect(() => {
    (0, Chunk631562.waitForAllDefaultIntlMessagesLoaded)().then(() => {
      module({})
    })
  }, []), (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsx)(Chunk481060.PhF, {
      options: [{
        value: "en-US",
        label: "English"
      }, {
        value: "fr",
        label: "French"
      }],
      isSelected: e => e === c.intl.currentLocale,
      select: e => c.intl.setLocale(e),
      serialize: e => e
    }), (0, Chunk951288.jsx)(Chunk481060.LZC, {
      size: 32
    }), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
      tag: Chunk481060.RB0.H1,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        tag: "div",
        variant: "heading-lg/bold",
        children: Chunk388032.intl.format(Chunk931115.Z.JJ0wpK, {})
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        tag: "div",
        variant: "text-md/normal",
        children: Chunk388032.intl.format(Chunk48480.Z.swfLzc, {})
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        tag: "div",
        variant: "text-md/normal",
        children: Chunk388032.intl.format(Chunk931115.Z["rmps8/"], {})
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        tag: "div",
        variant: "text-md/normal",
        children: Chunk388032.intl.format(Chunk931115.Z.uczI4u, {
          linkTarget: console.log
        })
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        tag: "div",
        variant: "text-md/normal",
        children: Chunk388032.intl.format(Chunk931115.Z.rdfRys, {})
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        tag: "div",
        variant: "text-md/normal",
        children: Chunk388032.intl.format(Chunk931115.Z["Q+eyqq"], {
          count: 1
        })
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        tag: "div",
        variant: "text-md/normal",
        children: Chunk388032.intl.format(Chunk931115.Z.XOdbAw, {
          username: "some user",
          usernameHook: e => (0, r.jsx)("span", {
            style: {
              backgroundColor: "green",
              color: "white",
              borderRadius: 4,
              paddingInline: 6,
              paddingBlock: 0,
              lineHeight: 1,
              fontSize: "0.85em"
            },
            children: e
          })
        })
      })]
    })]
  })
}