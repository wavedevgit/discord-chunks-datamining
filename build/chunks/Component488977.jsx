/** Chunk was on web.js **/
/** chunk id: 488977, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => L
}), require("./997841.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk895924 = require("./895924.js"),
  Chunk970321 = require("./970321.js"),
  Chunk311819 = require("./311819.js"),
  Chunk433534 = require("./433534.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk726521 = require("./726521.js"),
  Chunk973616 = require("./973616.js"),
  Chunk914010 = require("./914010.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk572004 = require("./572004.js"),
  Chunk135431 = require("./135431.js"),
  Chunk541099 = require("./541099.js"),
  Chunk783097 = require("./783097.js"),
  Chunk570949 = require("./570949.jsx"),
  Chunk314734 = require("./314734.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk820607 = require("./820607.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      R(e, t, n[t])
    })
  }
  return e
}

function w(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function x(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function L(e) {
  var t;
  let {
    application: a,
    context: R,
    className: w,
    sectionName: L
  } = e, j = i.useRef(null), M = (0, l.e7)([S.Z], () => S.Z.entrypoint()), k = (0, I.L1)(a), U = (0, _.Eb)(k), G = (0, f.R)(a.id), Z = (0, l.e7)([E.Z], () => {
    var e;
    return null != (e = E.Z.getGuildId()) ? e : true
  }, []), B = {
    location: d.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
    application_id: a.id,
    section_name: L,
    source: S.Z.lastShownEntrypoint()
  }, F = b.default.getCurrentUser(), V = (0, m.Z)({
    id: a.id,
    label: N.intl.string(N.t["+NP/b2"])
  }), H = (0, T.P)({
    application: a
  }), Y = (0, s.yE)(null != (t = a.flags) ? t : 0, A.udG.EMBEDDED), W = "channel" === R.type ? R.channel : true;
  return (0, r.jsxs)("div", {
    className: P.container,
    children: [(0, r.jsx)(c.P3F, {
      onClick: () => {
        let e = Y ? (0, p.H)({
          applicationId: a.id,
          referrerId: null == F ? true : F.id
        }) : (0, p.J)(D({
          id: a.id
        }, k));
        (0, O.JG)(e, () => (0, c.showToast)((0, c.createToast)(N.intl.string(N.t["L/PwZf"]), c.ToastType.SUCCESS))), y.default.track(A.rMx.APP_LAUNCHER_APPLICATION_LINK_COPIED, {
          application_id: a.id,
          source: M
        })
      },
      className: o()(P.clickable, w),
      "aria-label": N.intl.string(N.t.WqhZss),
      children: (0, r.jsx)(c.xPt, {
        size: "sm",
        color: c.TVs.colors.INTERACTIVE_TEXT_ACTIVE
      })
    }), (0, r.jsx)(c.yRy, {
      targetElementRef: j,
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsxs)(c.v2r, {
          className: C.NN,
          navId: "app-details-more-menu",
          onClose: t,
          "aria-label": N.intl.string(N.t.AXIHpV),
          onSelect: true,
          children: [(0, r.jsxs)(c.kSQ, {
            children: [G && (0, r.jsx)(c.sNh, {
              id: "open-storefront",
              label: N.intl.string(N.t.kRvlKJ),
              action: () => {
                (0, c.ZDy)(async () => {
                  let {
                    default: e
                  } = await Promise.all([n.e("77803"), n.e("42124")]).then(n.bind(n, 7225));
                  return t => (0, r.jsx)(e, {
                    transitionState: t.transitionState,
                    onClose: t.onClose,
                    appId: a.id,
                    guildId: Z
                  })
                })
              }
            }), U ? (0, r.jsx)(c.sNh, {
              id: "add-app",
              label: N.intl.string(N.t.NgXl3C),
              action: () => {
                null == k.customInstallUrl && (0, u.yw)(A.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, B), (0, v.L)(x(D({}, k), {
                  oauth2Callback: e => {
                    let {
                      location: t
                    } = e;
                    null != t && (0, u.yw)(A.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, B)
                  },
                  source: "app_launcher_app_details"
                }))
              }
            }) : null, a instanceof g.ZP ? (0, r.jsx)(c.sNh, {
              id: "report-app",
              color: "danger",
              label: N.intl.string(N.t.jhJzez),
              action: () => {
                var e;
                (0, h.uu)({
                  application: a,
                  entrypoint: "app_launcher",
                  contextualGuildId: null != (e = null == W ? true : W.getGuildId()) ? e : true,
                  contextualChannelId: null == W ? true : W.id
                })
              }
            }) : null, H]
          }), (0, r.jsx)(c.kSQ, {
            children: V
          })]
        })
      },
      align: "right",
      position: "bottom",
      children: e => (0, r.jsx)(c.P3F, x(D({
        innerRef: j
      }, e), {
        onClick: e.onClick,
        className: o()(P.clickable, w),
        "aria-label": N.intl.string(N.t["UKOtz+"]),
        children: (0, r.jsx)(c.xhG, {
          size: "sm",
          color: c.TVs.colors.INTERACTIVE_TEXT_ACTIVE
        })
      }))
    })]
  })
}