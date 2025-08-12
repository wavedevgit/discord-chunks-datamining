/** Chunk was on 20501 **/
/** chunk id: 665166, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk125697 = require("./125697.js"),
  Chunk481060 = require("./481060.js"),
  Chunk832840 = require("./832840.js"),
  Chunk200951 = require("./200951.js"),
  Chunk388032 = require("./388032.jsx");

function d() {
  Chunk73800.useSyncExternalStore(Chunk388032.intl.onLocaleChange, () => Chunk388032.intl.currentLocale);
  let [, e] = Chunk73800.useState({});
  return Chunk73800.useEffect(() => {
    (0, Chunk125697.waitForAllDefaultIntlMessagesLoaded)().then(() => {
      module({})
    })
  }, []), (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
    children: [(0, Chunk255367.jsx)(Chunk481060.PhF, {
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
    }), (0, Chunk255367.jsx)(Chunk481060.LZC, {
      size: 32
    }), (0, Chunk255367.jsxs)(Chunk481060.hjN, {
      tag: Chunk481060.RB0.H1,
      children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
        tag: "div",
        variant: "heading-lg/bold",
        children: Chunk388032.intl.format(Chunk200951.Z.JJ0wpK, {})
      }), (0, Chunk255367.jsx)(Chunk481060.Text, {
        tag: "div",
        variant: "text-md/normal",
        children: Chunk388032.intl.format(Chunk832840.Z.swfLzc, {})
      }), (0, Chunk255367.jsx)(Chunk481060.Text, {
        tag: "div",
        variant: "text-md/normal",
        children: Chunk388032.intl.format(Chunk200951.Z["rmps8/"], {})
      }), (0, Chunk255367.jsx)(Chunk481060.Text, {
        tag: "div",
        variant: "text-md/normal",
        children: Chunk388032.intl.format(Chunk200951.Z.uczI4u, {
          linkTarget: console.log
        })
      }), (0, Chunk255367.jsx)(Chunk481060.Text, {
        tag: "div",
        variant: "text-md/normal",
        children: Chunk388032.intl.format(Chunk200951.Z.rdfRys, {})
      }), (0, Chunk255367.jsx)(Chunk481060.Text, {
        tag: "div",
        variant: "text-md/normal",
        children: Chunk388032.intl.format(Chunk200951.Z["Q+eyqq"], {
          count: 1
        })
      }), (0, Chunk255367.jsx)(Chunk481060.Text, {
        tag: "div",
        variant: "text-md/normal",
        children: Chunk388032.intl.format(Chunk200951.Z.XOdbAw, {
          username: "some user",
          usernameHook: e => (0, i.jsx)("span", {
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