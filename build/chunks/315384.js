/** Chunk was on 93886 **/
n.d(t, {
  Z: () => m
}), n(47120);
var r = n(200651),
  a = n(192379),
  l = n(544891),
  i = n(481060),
  o = n(317951),
  s = n(959546),
  c = n(248366);
let d = "/users/@me/debug/consumables/",
  u = {
    [o.FX]: "HD Streaming Potion",
    [o.D1]: "Confetti Potion"
  };

function m() {
  let e;
  let [t, n] = (0, a.useState)([]), [m, h] = (0, a.useState)(null), [p, x] = (0, a.useState)(!1);
  return (0, a.useEffect)(() => ((async () => {
    try {
      let e = (await l.tn.get(d)).body.entitlements.map(e => s.Z.createFromServer(e));
      n(e)
    } catch (e) {
      h("Failed to fetch entitlements")
    }
  })(), () => {
    n([]), h(null)
  }), []), (0, r.jsx)("div", {
    className: c.panel,
    children: null != m ? (0, r.jsx)(i.Text, {
      variant: "text-md/normal",
      children: m
    }) : 0 === t.length ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(i.Text, {
        variant: "text-lg/bold",
        children: "Create Entitlements"
      }), (0, r.jsx)(i.zxk, {
        onClick: (e = o.D1, async () => {
          x(!0);
          try {
            let r = await l.tn.post({
                url: d,
                query: {
                  sku_id: e
                },
                rejectWithError: !0
              }),
              a = new s.Z(r.body.entitlement);
            n([...t, a])
          } catch (e) {
            h("Failed to create entitlement")
          } finally {
            x(!1)
          }
        }),
        className: c.button,
        look: i.iLD.OUTLINED,
        color: i.Ttl.PRIMARY,
        children: "Create Confetti Entitlement"
      }), p && (0, r.jsx)(i.$jN, {})]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: c.title,
        children: [(0, r.jsx)(i.Text, {
          variant: "text-lg/bold",
          children: "Existing Entitlements"
        }), (0, r.jsx)(i.hh5, {})]
      }), (0, r.jsx)("ul", {
        children: t.map(e => (0, r.jsx)("li", {
          children: (0, r.jsxs)("div", {
            children: [(0, r.jsx)(i.Text, {
              selectable: !0,
              variant: "text-md/normal",
              children: e.id
            }), (0, r.jsxs)(i.Text, {
              selectable: !0,
              variant: "text-md/normal",
              children: ["Type: ", u[e.skuId]]
            }), (0, r.jsxs)(i.Text, {
              selectable: !0,
              variant: "text-md/normal",
              children: ["Consumed? : ", e.consumed ? "Yes" : "No"]
            })]
          })
        }, e.id))
      })]
    })
  })
}