/** Chunk was on web.js **/
/** chunk id: 623196, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js"), require("./457542.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
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
  Chunk672413 = require("./672413.js");
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
  let e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    {
      currentHarvestType: t,
      awaitingInitialRequest: n
    } = (0, Chunk442837.cj)([Chunk575356.Z], () => ({
      currentHarvestType: Chunk575356.Z.harvestType,
      awaitingInitialRequest: Chunk575356.Z.requestingHarvest
    })),
    [o, O] = Chunk473749.useState(false);
  if (null == module) return null;
  let v = (0, Chunk88658.$6)(exports, module) || require,
    S = null != exports && a()().diff(a()(exports.created_at), "days") < Chunk981631.eBq,
    I = v && S,
    T = module.isStaff(),
    C = !module.verified,
    A = () => {
      y({
        onConfirm: e => {
          O(true), (0, p.h)(e).then(e => {
            null != e && null != e.body ? c.Z.show({
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
  return (0, Chunk54381.jsxs)(Chunk838436.U, {
    setting: Chunk726985.s6.PRIVACY_DATA_REQUEST_V2,
    children: [(0, Chunk54381.jsx)(Chunk838436.H, {
      header: Chunk388032.intl.string(Chunk388032.t.XAHCgJ),
      description: Chunk388032.intl.format(Chunk388032.t.P3kNfr, {
        helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.GDPR_REQUEST_DATA)
      })
    }), I ? (0, Chunk54381.jsx)(Chunk481060.Zbd, {
      className: Chunk672413.card,
      children: (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        children: Chunk388032.intl.format(Chunk388032.t.RNDlV9, {
          date: a()(exports.created_at).add(Chunk981631.eBq, "days").format("MMMM Do YYYY")
        })
      })
    }) : T ? (0, Chunk54381.jsx)(Chunk481060.Zbd, {
      className: Chunk672413.card,
      children: (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        children: Chunk388032.intl.string(Chunk388032.t.ZPQLH2)
      })
    }) : (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [C ? (0, Chunk54381.jsx)(Chunk481060.Zbd, {
        className: Chunk672413.card,
        children: (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          children: Chunk388032.intl.string(Chunk388032.t.c1f88z)
        })
      }) : null, (0, Chunk54381.jsx)("div", {
        className: Chunk672413.button,
        children: (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "primary",
          text: Chunk388032.intl.string(Chunk388032.t.dmBSKo),
          disabled: v,
          onClick: A,
          loading: Chunk913527 || require
        })
      })]
    })]
  })
}