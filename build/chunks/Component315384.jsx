/** Chunk was on 93886 **/
/** chunk id: 315384, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk544891 = require("./544891.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk317951 = require("./317951.js"),
  Chunk959546 = require("./959546.js"),
  Chunk625299 = require("./625299.js");
let u = "/users/@me/debug/consumables/",
  m = {
    [Chunk317951.FX]: "HD Streaming Potion",
    [Chunk317951.D1]: "Confetti Potion"
  };

function x() {
  let e, [t, a] = (0, Chunk73800.useState)([]),
    [x, h] = (0, Chunk73800.useState)(null),
    [p, b] = (0, Chunk73800.useState)(false);
  return (0, Chunk73800.useEffect)(() => ((async () => {
    try {
      let e = (await Chunk544891.tn.get(u)).body.entitlements.map(e => c.Z.createFromServer(e));
      require(module)
    } catch (e) {
      h("Failed to fetch entitlements")
    }
  })(), () => {
    require([]), h(null)
  }), []), (0, Chunk255367.jsx)("div", {
    className: Chunk625299.panel,
    children: null != x ? (0, Chunk255367.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      children: x
    }) : 0 === exports.length ? (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
      children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
        variant: "text-lg/bold",
        children: "Create Entitlements"
      }), (0, Chunk255367.jsx)(Chunk755721.zx, {
        onClick: (e = Chunk317951.D1, async () => {
          b(true);
          try {
            let n = await Chunk544891.tn.post({
                url: u,
                query: {
                  sku_id: module
                },
                rejectWithError: true
              }),
              r = new Chunk959546.Z(Chunk255367.body.entitlement);
            require([...exports, Chunk73800])
          } catch (e) {
            h("Failed to create entitlement")
          } finally {
            b(false)
          }
        }),
        className: Chunk625299.button,
        look: Chunk755721.iL.OUTLINED,
        color: Chunk755721.Tt.PRIMARY,
        children: "Create Confetti Entitlement"
      }), p && (0, Chunk255367.jsx)(Chunk481060.$jN, {})]
    }) : (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
      children: [(0, Chunk255367.jsxs)("div", {
        className: Chunk625299.title,
        children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
          variant: "text-lg/bold",
          children: "Existing Entitlements"
        }), (0, Chunk255367.jsx)(Chunk481060.hh5, {})]
      }), (0, Chunk255367.jsx)("ul", {
        children: exports.map(e => (0, n.jsx)("li", {
          children: (0, n.jsxs)("div", {
            children: [(0, n.jsx)(s.Text, {
              selectable: true,
              variant: "text-md/normal",
              children: e.id
            }), (0, n.jsxs)(s.Text, {
              selectable: true,
              variant: "text-md/normal",
              children: ["Type: ", m[e.skuId]]
            }), (0, n.jsxs)(s.Text, {
              selectable: true,
              variant: "text-md/normal",
              children: ["Consumed? : ", e.consumed ? "Yes" : "No"]
            })]
          })
        }, e.id))
      })]
    })
  })
}