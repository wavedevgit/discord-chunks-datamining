/** Chunk was on web.js **/
/** chunk id: 623196, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js"), require("./457542.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk594174 = require("./594174.js"),
  Chunk63063 = require("./63063.js"),
  Chunk88658 = require("./88658.js"),
  Chunk398826 = require("./398826.js"),
  Chunk575356 = require("./575356.js"),
  Chunk838436 = require("./838436.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk801860 = require("./801860.js");
let y = e => {
  let {
    onConfirm: t
  } = e;
  (0, l.ZDy)(async () => {
    let {
      default: e
    } = await n.e("25120").then(n.bind(n, 926281));
    return n => (0, r.jsx)(e, {
      modalProps: n,
      onConfirm: t
    })
  })
};

function O() {
  let e = (0, s.e7)([u.default], () => u.default.getCurrentUser()),
    {
      currentHarvestType: t,
      awaitingInitialRequest: n
    } = (0, s.cj)([_.Z], () => ({
      currentHarvestType: _.Z.harvestType,
      awaitingInitialRequest: _.Z.requestingHarvest
    })),
    [a, O] = i.useState(false);
  if (null == e) return null;
  let v = (0, f.$6)(t, e) || n,
    S = null != t && o()().diff(o()(t.created_at), "days") < g.eBq,
    I = v && S,
    T = e.isStaff(),
    C = !e.verified,
    A = () => {
      y({
        onConfirm: e => {
          O(true), (0, p.h)(e).then(e => {
            null != e && null != e.body ? c.Z.show({
              title: E.intl.string(E.t.i2iul5),
              body: E.intl.string(E.t["6Nmv4i"])
            }) : c.Z.show({
              title: E.intl.string(E.t.OjbtDm),
              body: E.intl.string(E.t["0F5Jyt"])
            })
          }, e => {
            var t;
            let n = (null == e ? true : e.message) || (null == e || null == (t = e.body) ? true : t.message) || E.intl.string(E.t["0F5Jyt"]);
            c.Z.show({
              title: E.intl.string(E.t.OjbtDm),
              body: n
            })
          }).finally(() => O(false))
        }
      })
    };
  return (0, r.jsxs)(m.U, {
    setting: h.s6.PRIVACY_DATA_REQUEST_V2,
    children: [(0, r.jsx)(m.H, {
      header: E.intl.string(E.t.XAHCgJ),
      description: E.intl.format(E.t.P3kNfr, {
        helpdeskArticle: d.Z.getArticleURL(g.BhN.GDPR_REQUEST_DATA)
      })
    }), I ? (0, r.jsx)(l.Zbd, {
      className: b.card,
      children: (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        children: E.intl.format(E.t.RNDlV9, {
          date: o()(t.created_at).add(g.eBq, "days").format("MMMM Do YYYY")
        })
      })
    }) : T ? (0, r.jsx)(l.Zbd, {
      className: b.card,
      children: (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        children: E.intl.string(E.t.ZPQLH2)
      })
    }) : (0, r.jsxs)(r.Fragment, {
      children: [C ? (0, r.jsx)(l.Zbd, {
        className: b.card,
        children: (0, r.jsx)(l.Text, {
          variant: "text-md/normal",
          children: E.intl.string(E.t.c1f88z)
        })
      }) : null, (0, r.jsx)("div", {
        className: b.button,
        children: (0, r.jsx)(l.Button, {
          variant: "primary",
          text: E.intl.string(E.t.dmBSKo),
          disabled: v,
          onClick: A,
          loading: a || n
        })
      })]
    })]
  })
}