/** Chunk was on 84249 **/
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
  Chunk462914 = require("./462914.js");
let u = "/users/@me/debug/consumables/",
  m = {
    [Chunk317951.FX]: "HD Streaming Potion",
    [Chunk317951.D1]: "Confetti Potion"
  };

function p() {
  let e, [t, n] = (0, r.useState)([]),
    [p, h] = (0, r.useState)(null),
    [f, x] = (0, r.useState)(false);
  return (0, r.useEffect)(() => ((async () => {
    try {
      let e = (await i.tn.get(u)).body.entitlements.map(e => c.Z.createFromServer(e));
      n(e)
    } catch (e) {
      h("Failed to fetch entitlements")
    }
  })(), () => {
    n([]), h(null)
  }), []), (0, a.jsx)("div", {
    className: d.panel,
    children: null != p ? (0, a.jsx)(s.Text, {
      variant: "text-md/normal",
      children: p
    }) : 0 === t.length ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(s.Text, {
        variant: "text-lg/bold",
        children: "Create Entitlements"
      }), (0, a.jsx)(l.zx, {
        onClick: (e = o.D1, async () => {
          x(true);
          try {
            let a = await i.tn.post({
                url: u,
                query: {
                  sku_id: e
                },
                rejectWithError: true
              }),
              r = new c.Z(a.body.entitlement);
            n([...t, r])
          } catch (e) {
            h("Failed to create entitlement")
          } finally {
            x(false)
          }
        }),
        className: d.button,
        look: l.iL.OUTLINED,
        color: l.Tt.PRIMARY,
        children: "Create Confetti Entitlement"
      }), f && (0, a.jsx)(s.$jN, {})]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)("div", {
        className: d.title,
        children: [(0, a.jsx)(s.Text, {
          variant: "text-lg/bold",
          children: "Existing Entitlements"
        }), (0, a.jsx)(s.hh5, {})]
      }), (0, a.jsx)("ul", {
        children: t.map(e => (0, a.jsx)("li", {
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