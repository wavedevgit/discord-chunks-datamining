/** Chunk was on web.js **/
/** chunk id: 563119, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk704215 = require("./704215.js"),
  Chunk952265 = require("./952265.js"),
  Chunk231757 = require("./231757.jsx"),
  Chunk266454 = require("./266454.js"),
  Chunk131951 = require("./131951.js"),
  Chunk626135 = require("./626135.js"),
  Chunk542238 = require("./542238.jsx"),
  Chunk927923 = require("./927923.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let b = "game_console_alert_modal",
  y = "game_console_ptt_alert_modal",
  O = {
    maybeShowPTTAlert(e) {
      if (c.Z.getMode() !== _.pM4.PUSH_TO_TALK || (0, l.zu)(a.z.CONSOLE_PTT_DISABLE_ALERT)) return Promise.resolve();
      let t = {
        [_.ABu.XBOX]: p.intl.string(p.t.bVZ7vy),
        [_.ABu.PLAYSTATION]: p.intl.string(p.t["6iqUsf"]),
        [_.ABu.PLAYSTATION_STAGING]: p.intl.string(p.t["6iqUsf"])
      } [e];
      return null == t ? Promise.resolve() : new Promise(e => {
        let n = () => {
            (0, l.Q3)(a.z.CONSOLE_PTT_DISABLE_ALERT), e()
          },
          s = e => (0, r.jsx)(i.Modal, E(m({}, e), {
            title: t,
            subtitle: p.intl.string(p.t.bL21zs),
            actions: [{
              text: p.intl.string(p.t.BddRzS),
              onClick: n
            }]
          }));
        (0, o.nf)(y) ? (0, o.o)(y, e => s(e)) : (0, o.ZD)(async () => e => s(e), {
          modalKey: y
        })
      })
    },
    showSelfDismissableAlert(e) {
      let {
        title: t,
        body: n,
        errorCodeMessage: a,
        reconnectPlatformType: l
      } = e, c = (0, r.jsx)(d.t, {
        body: n,
        errorCodeMessage: a,
        dismissCallback: () => (0, o.Mr)(b)
      });

      function h() {
        null != l && ((0, s.Z)({
          platformType: l
        }), u.default.track(_.rMx.ACCOUNT_LINK_STEP, {
          previous_step: f.Lw,
          current_step: "desktop oauth",
          platform_type: l
        }))
      }
      let g = e => (0, r.jsx)(i.Modal, E(m({}, e), {
        title: t,
        actions: [{
          text: p.intl.string(p.t.BddRzS),
          onClick: h
        }],
        children: c
      }));
      (0, o.nf)(b) ? (0, o.o)(b, e => g(e)) : (0, o.ZD)(async () => e => g(e), {
        modalKey: b
      })
    }
  }