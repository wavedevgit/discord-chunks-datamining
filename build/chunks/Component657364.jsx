/** Chunk was on web.js **/
/** chunk id: 657364, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
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
let y = e => {
  let {
    onConfirm: t
  } = e;
  (0, l.mMO)(async () => {
    let {
      default: e
    } = await n.e("98171").then(n.bind(n, 481398));
    return n => (0, r.jsx)(e, {
      modalProps: n,
      onConfirm: t
    })
  })
};

function O() {
  let e = (0, o.bG)([u.default], () => u.default.getCurrentUser()),
    {
      currentHarvestType: t,
      awaitingInitialRequest: n
    } = (0, o.cf)([_.A], () => ({
      currentHarvestType: _.A.harvestType,
      awaitingInitialRequest: _.A.requestingHarvest
    })),
    [a, O] = i.useState(false);
  if (null == e) return null;
  let A = (0, f.Oj)(t, e) || n,
    v = null != t && s()().diff(s()(t.created_at), "days") < g.n83,
    S = A && v,
    I = e.isStaff(),
    T = !e.verified,
    C = () => {
      y({
        onConfirm: e => {
          O(true), (0, p.$)(e).then(e => {
            null != e && null != e.body ? c.A.show({
              title: E.intl.string(E.t.i2iul5),
              body: E.intl.string(E.t["6Nmv4i"])
            }) : c.A.show({
              title: E.intl.string(E.t.OjbtDm),
              body: E.intl.string(E.t["0F5Jyt"])
            })
          }, e => {
            var t;
            let n = (null == e ? true : e.message) || (null == e || null == (t = e.body) ? true : t.message) || E.intl.string(E.t["0F5Jyt"]);
            c.A.show({
              title: E.intl.string(E.t.OjbtDm),
              body: n
            })
          }).finally(() => O(false))
        }
      })
    };
  return (0, r.jsxs)(h.h, {
    setting: m.H.PRIVACY_DATA_REQUEST_V2,
    children: [(0, r.jsx)(h._, {
      header: E.intl.string(E.t.XAHCgJ),
      description: E.intl.format(E.t.P3kNfr, {
        helpdeskArticle: d.A.getArticleURL(g.MVz.GDPR_REQUEST_DATA)
      })
    }), S ? (0, r.jsx)(l.ZpM, {
      className: b.N,
      children: (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        children: E.intl.format(E.t.RNDlV9, {
          date: s()(t.created_at).add(g.n83, "days").format("MMMM Do YYYY")
        })
      })
    }) : I ? (0, r.jsx)(l.ZpM, {
      className: b.N,
      children: (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        children: E.intl.string(E.t.ZPQLH2)
      })
    }) : (0, r.jsxs)(r.Fragment, {
      children: [T ? (0, r.jsx)(l.ZpM, {
        className: b.N,
        children: (0, r.jsx)(l.Text, {
          variant: "text-md/normal",
          children: E.intl.string(E.t.c1f88z)
        })
      }) : null, (0, r.jsx)("div", {
        className: b.x,
        children: (0, r.jsx)(l.Button, {
          variant: "primary",
          text: E.intl.string(E.t.dmBSKo),
          disabled: A,
          onClick: C,
          loading: a || n
        })
      })]
    })]
  })
}