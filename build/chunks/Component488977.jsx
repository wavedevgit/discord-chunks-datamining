/** Chunk was on 35755 **/
/** chunk id: 488977, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
}), require("./997841.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function L(e) {
  var t;
  let {
    application: r,
    context: L,
    className: R,
    sectionName: Z
  } = e, w = l.useRef(null), k = (0, o.e7)([C.Z], () => C.Z.entrypoint()), M = (0, E.L1)(r), U = (0, m.Eb)(M), D = (0, d.R)(r.id), H = (0, o.e7)([y.Z], () => {
    var e;
    return null != (e = y.Z.getGuildId()) ? e : true
  }, []), B = {
    location: u.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
    application_id: r.id,
    section_name: Z,
    source: C.Z.lastShownEntrypoint()
  }, V = g.default.getCurrentUser(), W = (0, f.Z)({
    id: r.id,
    label: O.intl.string(O.t["+NP/b2"])
  }), F = (0, P.P)({
    application: r
  }), G = (0, N.yE)(null != (t = r.flags) ? t : 0, _.udG.EMBEDDED), Y = "channel" === L.type ? L.channel : true;
  return (0, i.jsxs)("div", {
    className: I.container,
    children: [(0, i.jsx)(s.P3F, {
      onClick: () => {
        let e = G ? (0, p.H)({
          applicationId: r.id,
          referrerId: null == V ? true : V.id
        }) : (0, p.J)(S({
          id: r.id
        }, M));
        (0, b.JG)(e, () => (0, s.showToast)((0, s.createToast)(O.intl.string(O.t["L/PwZf"]), s.ToastType.SUCCESS))), x.default.track(_.rMx.APP_LAUNCHER_APPLICATION_LINK_COPIED, {
          application_id: r.id,
          source: k
        })
      },
      className: a()(I.clickable, R),
      "aria-label": O.intl.string(O.t.WqhZss),
      children: (0, i.jsx)(s.xPt, {
        size: "sm",
        color: s.TVs.colors.INTERACTIVE_ACTIVE
      })
    }), (0, i.jsx)(s.yRy, {
      targetElementRef: w,
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, i.jsxs)(s.v2r, {
          className: A.NN,
          navId: "app-details-more-menu",
          onClose: t,
          "aria-label": O.intl.string(O.t.AXIHpV),
          onSelect: true,
          children: [(0, i.jsxs)(s.kSQ, {
            children: [D && (0, i.jsx)(s.sNh, {
              id: "open-storefront",
              label: O.intl.string(O.t.kRvlKJ),
              action: () => {
                (0, s.ZDy)(async () => {
                  let {
                    default: e
                  } = await Promise.all([n.e("77803"), n.e("42124")]).then(n.bind(n, 7225));
                  return t => (0, i.jsx)(e, {
                    transitionState: t.transitionState,
                    onClose: t.onClose,
                    appId: r.id,
                    guildId: H
                  })
                })
              }
            }), U ? (0, i.jsx)(s.sNh, {
              id: "add-app",
              label: O.intl.string(O.t.NgXl3C),
              action: () => {
                null == M.customInstallUrl && (0, c.yw)(_.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, B), (0, j.L)(T(S({}, M), {
                  oauth2Callback: e => {
                    let {
                      location: t
                    } = e;
                    null != t && (0, c.yw)(_.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, B)
                  },
                  source: "app_launcher_app_details"
                }))
              }
            }) : null, r instanceof v.ZP ? (0, i.jsx)(s.sNh, {
              id: "report-app",
              color: "danger",
              label: O.intl.string(O.t.jhJzez),
              action: () => {
                var e;
                (0, h.uu)({
                  application: r,
                  entrypoint: "app_launcher",
                  contextualGuildId: null != (e = null == Y ? true : Y.getGuildId()) ? e : true,
                  contextualChannelId: null == Y ? true : Y.id
                })
              }
            }) : null, F]
          }), (0, i.jsx)(s.kSQ, {
            children: W
          })]
        })
      },
      align: "right",
      position: "bottom",
      children: e => (0, i.jsx)(s.P3F, T(S({
        innerRef: w
      }, e), {
        onClick: e.onClick,
        className: a()(I.clickable, R),
        "aria-label": O.intl.string(O.t["UKOtz+"]),
        children: (0, i.jsx)(s.xhG, {
          size: "sm",
          color: s.TVs.colors.INTERACTIVE_ACTIVE
        })
      }))
    })]
  })
}