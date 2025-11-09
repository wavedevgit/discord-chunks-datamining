/** Chunk was on web.js **/
/** chunk id: 488977, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => L
}), require("./997841.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk630388 = require("./630388.js"),
  Chunk135431 = require("./135431.js"),
  Chunk541099 = require("./541099.js"),
  Chunk783097 = require("./783097.js"),
  Chunk570949 = require("./570949.jsx"),
  Chunk314734 = require("./314734.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk333616 = require("./333616.js");

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      P(e, t, n[t])
    })
  }
  return e
}

function D(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : D(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function L(e) {
  var t;
  let {
    application: a,
    context: P,
    className: D,
    sectionName: L
  } = e, M = i.useRef(null), j = (0, s.e7)([I.Z], () => I.Z.entrypoint()), k = (0, S.L1)(a), U = (0, _.Eb)(k), G = (0, d.R)(a.id), B = (0, s.e7)([g.Z], () => {
    var e;
    return null != (e = g.Z.getGuildId()) ? e : true
  }, []), Z = {
    location: u.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
    application_id: a.id,
    section_name: L,
    source: I.Z.lastShownEntrypoint()
  }, F = E.default.getCurrentUser(), V = (0, p.Z)({
    id: a.id,
    label: N.intl.string(N.t["+NP/b2"])
  }), H = (0, T.P)({
    application: a
  }), Y = (0, O.yE)(null != (t = a.flags) ? t : 0, C.udG.EMBEDDED), W = "channel" === P.type ? P.channel : true;
  return (0, r.jsxs)("div", {
    className: R.container,
    children: [(0, r.jsx)(l.P3F, {
      onClick: () => {
        let e = Y ? (0, f.H)({
          applicationId: a.id,
          referrerId: null == F ? true : F.id
        }) : (0, f.J)(w({
          id: a.id
        }, k));
        (0, y.JG)(e, () => (0, l.showToast)((0, l.createToast)(N.intl.string(N.t["L/PwZf"]), l.ToastType.SUCCESS))), b.default.track(C.rMx.APP_LAUNCHER_APPLICATION_LINK_COPIED, {
          application_id: a.id,
          source: j
        })
      },
      className: o()(R.clickable, D),
      "aria-label": N.intl.string(N.t.WqhZss),
      children: (0, r.jsx)(l.xPt, {
        size: "sm",
        color: l.TVs.colors.INTERACTIVE_ACTIVE
      })
    }), (0, r.jsx)(l.yRy, {
      targetElementRef: M,
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsxs)(l.v2r, {
          className: A.NN,
          navId: "app-details-more-menu",
          onClose: t,
          "aria-label": N.intl.string(N.t.AXIHpV),
          onSelect: true,
          children: [(0, r.jsxs)(l.kSQ, {
            children: [G && (0, r.jsx)(l.sNh, {
              id: "open-storefront",
              label: N.intl.string(N.t.kRvlKJ),
              action: () => {
                (0, l.ZDy)(async () => {
                  let {
                    default: e
                  } = await Promise.all([n.e("77803"), n.e("15351")]).then(n.bind(n, 7225));
                  return t => (0, r.jsx)(e, {
                    transitionState: t.transitionState,
                    onClose: t.onClose,
                    appId: a.id,
                    guildId: B
                  })
                })
              }
            }), U ? (0, r.jsx)(l.sNh, {
              id: "add-app",
              label: N.intl.string(N.t.NgXl3C),
              action: () => {
                null == k.customInstallUrl && (0, c.yw)(C.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, Z), (0, v.L)(x(w({}, k), {
                  oauth2Callback: e => {
                    let {
                      location: t
                    } = e;
                    null != t && (0, c.yw)(C.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, Z)
                  },
                  source: "app_launcher_app_details"
                }))
              }
            }) : null, a instanceof m.ZP ? (0, r.jsx)(l.sNh, {
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
          }), (0, r.jsx)(l.kSQ, {
            children: V
          })]
        })
      },
      align: "right",
      position: "bottom",
      children: e => (0, r.jsx)(l.P3F, x(w({
        innerRef: M
      }, e), {
        onClick: e.onClick,
        className: o()(R.clickable, D),
        "aria-label": N.intl.string(N.t["UKOtz+"]),
        children: (0, r.jsx)(l.xhG, {
          size: "sm",
          color: l.TVs.colors.INTERACTIVE_ACTIVE
        })
      }))
    })]
  })
}