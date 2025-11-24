/** Chunk was on 45476 **/
/** chunk id: 315384, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function p() {
  let e, [t, n] = (0, Chunk473749.useState)([]),
    [p, h] = (0, Chunk473749.useState)(null),
    [x, g] = (0, Chunk473749.useState)(false);
  return (0, Chunk473749.useEffect)(() => ((async () => {
    try {
      let e = (await Chunk544891.tn.get(u)).body.entitlements.map(e => c.Z.createFromServer(e));
      require(module)
    } catch (e) {
      h("Failed to fetch entitlements")
    }
  })(), () => {
    require([]), h(null)
  }), []), (0, Chunk54381.jsx)("div", {
    className: Chunk625299.panel,
    children: null != p ? (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      children: p
    }) : 0 === exports.length ? (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-lg/bold",
        children: "Create Entitlements"
      }), (0, Chunk54381.jsx)(Chunk755721.zx, {
        onClick: (e = Chunk317951.D1, async () => {
          g(true);
          try {
            let a = await Chunk544891.tn.post({
                url: u,
                query: {
                  sku_id: module
                },
                rejectWithError: true
              }),
              l = new Chunk959546.Z(Chunk54381.body.entitlement);
            require([...exports, Chunk473749])
          } catch (e) {
            h("Failed to create entitlement")
          } finally {
            g(false)
          }
        }),
        className: Chunk625299.button,
        look: Chunk755721.iL.OUTLINED,
        color: Chunk755721.Tt.PRIMARY,
        children: "Create Confetti Entitlement"
      }), x && (0, Chunk54381.jsx)(Chunk481060.$jN, {})]
    }) : (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [(0, Chunk54381.jsxs)("div", {
        className: Chunk625299.title,
        children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-lg/bold",
          children: "Existing Entitlements"
        }), (0, Chunk54381.jsx)(Chunk481060.hh5, {})]
      }), (0, Chunk54381.jsx)("ul", {
        children: exports.map(e => (0, a.jsx)("li", {
          children: (0, a.jsxs)("div", {
            children: [(0, a.jsx)(s.Text, {
              selectable: true,
              variant: "text-md/normal",
              children: e.id
            }), (0, a.jsxs)(s.Text, {
              selectable: true,
              variant: "text-md/normal",
              children: ["Type: ", m[e.skuId]]
            }), (0, a.jsxs)(s.Text, {
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