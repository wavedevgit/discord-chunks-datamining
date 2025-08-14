/** Chunk was on web.js **/
/** chunk id: 488977, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./997841.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk820607 = require("./820607.js");

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

function L(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : D(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function x(e) {
  var t;
  let {
    application: o,
    context: P,
    className: D,
    sectionName: x
  } = e, M = i.useRef(null), k = (0, s.e7)([I.Z], () => I.Z.entrypoint()), j = (0, T.L1)(o), U = (0, _.Eb)(j), G = (0, d.R)(o.id), B = (0, s.e7)([g.Z], () => {
    var e;
    return null != (e = g.Z.getGuildId()) ? e : true
  }, []), Z = {
    location: u.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
    application_id: o.id,
    section_name: x,
    source: I.Z.lastShownEntrypoint()
  }, F = E.default.getCurrentUser(), V = (0, p.Z)({
    id: o.id,
    label: C.intl.string(C.t["+NP/b2"])
  }), H = (0, S.P)({
    application: o
  }), Y = (0, O.yE)(null != (t = o.flags) ? t : 0, N.udG.EMBEDDED), W = "channel" === P.type ? P.channel : true;
  return (0, r.jsxs)("div", {
    className: R.container,
    children: [(0, r.jsx)(l.P3F, {
      onClick: () => {
        let e = Y ? (0, f.H)({
          applicationId: o.id,
          referrerId: null == F ? true : F.id
        }) : (0, f.J)(w({
          id: o.id
        }, j));
        (0, y.JG)(e, () => (0, l.showToast)((0, l.createToast)(C.intl.string(C.t["L/PwZW"]), l.ToastType.SUCCESS))), b.default.track(N.rMx.APP_LAUNCHER_APPLICATION_LINK_COPIED, {
          application_id: o.id,
          source: k
        })
      },
      className: a()(R.clickable, D),
      "aria-label": C.intl.string(C.t.WqhZsr),
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
          "aria-label": C.intl.string(C.t.AXIHpa),
          onSelect: true,
          children: [(0, r.jsxs)(l.kSQ, {
            children: [G && (0, r.jsx)(l.sNh, {
              id: "open-storefront",
              label: C.intl.string(C.t.kRvlKC),
              action: () => {
                (0, l.ZDy)(async () => {
                  let {
                    default: e
                  } = await Promise.all([n.e("77803"), n.e("18992")]).then(n.bind(n, 7225));
                  return t => (0, r.jsx)(e, {
                    transitionState: t.transitionState,
                    onClose: t.onClose,
                    appId: o.id,
                    guildId: B
                  })
                })
              }
            }), U ? (0, r.jsx)(l.sNh, {
              id: "add-app",
              label: C.intl.string(C.t.NgXl3N),
              action: () => {
                null == j.customInstallUrl && (0, c.yw)(N.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, Z), (0, v.L)(L(w({}, j), {
                  oauth2Callback: e => {
                    let {
                      location: t
                    } = e;
                    null != t && (0, c.yw)(N.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, Z)
                  },
                  source: "app_launcher_app_details"
                }))
              }
            }) : null, o instanceof m.ZP ? (0, r.jsx)(l.sNh, {
              id: "report-app",
              color: "danger",
              label: C.intl.string(C.t.jhJze3),
              action: () => {
                var e;
                (0, h.uu)({
                  application: o,
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
      children: e => (0, r.jsx)(l.P3F, L(w({
        innerRef: M
      }, e), {
        onClick: e.onClick,
        className: a()(R.clickable, D),
        "aria-label": C.intl.string(C.t.UKOtz8),
        children: (0, r.jsx)(l.xhG, {
          size: "sm",
          color: l.TVs.colors.INTERACTIVE_ACTIVE
        })
      }))
    })]
  })
}