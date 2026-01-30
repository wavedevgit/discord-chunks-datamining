/** Chunk was on 78376 **/
/** chunk id: 657364, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
}), require("./896048.js"), require("./492834.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk989349 = require("./989349.js"),
  s = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk157559 = require("./157559.js"),
  Chunk287809 = require("./287809.js"),
  Chunk975571 = require("./975571.js"),
  Chunk115063 = require("./115063.js"),
  Chunk104954 = require("./104954.js"),
  Chunk975648 = require("./975648.js"),
  Chunk871930 = require("./871930.jsx"),
  Chunk531525 = require("./531525.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk937474 = require("./937474.js");

function E() {
  let e = (0, a.bG)([d.default], () => d.default.getCurrentUser()),
    {
      currentHarvestType: t,
      awaitingInitialRequest: l
    } = (0, a.cf)([m.A], () => ({
      currentHarvestType: m.A.harvestType,
      awaitingInitialRequest: m.A.requestingHarvest
    })),
    [E, O] = i.useState(false);
  if (null == e) return null;
  let C = (0, _.Oj)(t, e) || l,
    x = null != t && s()().diff(s()(t.created_at), "days") < f.n83,
    S = C && x,
    T = e.isStaff(),
    I = !e.verified;
  return (0, r.jsxs)(g.h, {
    setting: A.H.PRIVACY_DATA_REQUEST_V2,
    children: [(0, r.jsx)(g._, {
      header: b.intl.string(b.t.XAHCgJ),
      description: b.intl.format(b.t.P3kNfr, {
        helpdeskArticle: u.A.getArticleURL(f.MVz.GDPR_REQUEST_DATA)
      })
    }), S ? (0, r.jsx)(o.ZpM, {
      className: h.N,
      children: (0, r.jsx)(o.Text, {
        variant: "text-md/normal",
        children: b.intl.format(b.t.RNDlV9, {
          date: s()(t.created_at).add(f.n83, "days").format("MMMM Do YYYY")
        })
      })
    }) : T ? (0, r.jsx)(o.ZpM, {
      className: h.N,
      children: (0, r.jsx)(o.Text, {
        variant: "text-md/normal",
        children: b.intl.string(b.t.ZPQLH2)
      })
    }) : (0, r.jsxs)(r.Fragment, {
      children: [I ? (0, r.jsx)(o.ZpM, {
        className: h.N,
        children: (0, r.jsx)(o.Text, {
          variant: "text-md/normal",
          children: b.intl.string(b.t.c1f88z)
        })
      }) : null, (0, r.jsx)("div", {
        className: h.x,
        children: (0, r.jsx)(o.Button, {
          variant: "primary",
          text: b.intl.string(b.t.dmBSKo),
          disabled: C,
          onClick: () => {
            (e => {
              let {
                onConfirm: t
              } = e;
              (0, o.mMO)(async () => {
                let {
                  default: e
                } = await n.e("98171").then(n.bind(n, 481398));
                return n => (0, r.jsx)(e, {
                  modalProps: n,
                  onConfirm: t
                })
              })
            })({
              onConfirm: e => {
                O(true), (0, p.$)(e).then(e => {
                  null != e && null != e.body ? c.A.show({
                    title: b.intl.string(b.t.i2iul5),
                    body: b.intl.string(b.t["6Nmv4i"])
                  }) : c.A.show({
                    title: b.intl.string(b.t.OjbtDm),
                    body: b.intl.string(b.t["0F5Jyt"])
                  })
                }, e => {
                  var t;
                  let n = (null == e ? true : e.message) || (null == e || null == (t = e.body) ? true : t.message) || b.intl.string(b.t["0F5Jyt"]);
                  c.A.show({
                    title: b.intl.string(b.t.OjbtDm),
                    body: n
                  })
                }).finally(() => O(false))
              }
            })
          },
          loading: E || l
        })
      })]
    })]
  })
}