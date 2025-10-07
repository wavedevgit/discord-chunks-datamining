/** Chunk was on web.js **/
/** chunk id: 335082, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk524437 = require("./524437.js"),
  Chunk538534 = require("./538534.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk921801 = require("./921801.js"),
  Chunk695346 = require("./695346.js"),
  Chunk273313 = require("./273313.jsx"),
  Chunk358085 = require("./358085.js"),
  Chunk940276 = require("./940276.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk726985 = require("./726985.js"),
  Chunk933554 = require("./933554.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk764055 = require("./764055.js");

function g() {
  let e = Chunk695346.G6.useSetting(),
    t = Chunk695346.no.useSetting(),
    n = e => {
      l.no.updateSetting(e)
    },
    s = [{
      value: Chunk524437.GI.ACTIVITY_STATUS_ON,
      name: Chunk388032.intl.string(Chunk388032.t.UzGMHx)
    }, {
      value: Chunk524437.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
      name: Chunk388032.intl.string(Chunk933554.default["/sAeRU"])
    }, {
      value: Chunk524437.GI.ACTIVITY_STATUS_OFF,
      name: Chunk388032.intl.string(Chunk933554.default.m3oL7e)
    }];
  return (0, Chunk951288.jsxs)(Chunk481060.C3N, {
    label: Chunk388032.intl.string(Chunk933554.default.TG0Qsb),
    description: Chunk388032.intl.string(Chunk933554.default.OO17Li),
    children: [(0, Chunk951288.jsx)(Chunk538534.E, {
      label: Chunk388032.intl.string(Chunk933554.default["/LHVbm"]),
      options: Chunk921801,
      value: exports,
      onChange: e => n(e)
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk764055.myServersContainer,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk764055.myServersHeaderContainer,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          className: Chunk764055.myServersTitle,
          variant: "heading-md/medium",
          color: "header-primary",
          children: Chunk388032.intl.string(Chunk388032.t.TqdOvL)
        }), !module && (0, Chunk951288.jsx)(Chunk481060.Wn, {
          className: Chunk764055.myServersIgnoredWarning,
          messageType: Chunk481060.QYI.WARNING,
          textColor: "text-feedback-warning",
          children: Chunk388032.intl.string(Chunk933554.default["xxI0/f"])
        })]
      }), (0, Chunk951288.jsx)(Chunk940276.Z, {})]
    })]
  })
}

function E() {
  let e = Chunk695346.cP.useSetting(),
    t = Chunk695346.Ou.useSetting();
  return (0, Chunk951288.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
    children: (0, Chunk951288.jsxs)(Chunk481060.C3N, {
      label: Chunk388032.intl.string(Chunk933554.default["5rYBAQ"]),
      children: [(0, Chunk951288.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk933554.default.khuuzs),
        description: Chunk388032.intl.string(Chunk933554.default["8EWsJy"]),
        id: "allow-friends-to-join-my-game",
        checked: module,
        onChange: e => l.cP.updateSetting(e)
      }), (0, Chunk951288.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk933554.default.Uz5Ipq),
        description: Chunk388032.intl.string(Chunk933554.default.CZI2GR),
        id: "allow-vc-join-without-request",
        checked: exports,
        onChange: e => l.Ou.updateSetting(e)
      })]
    })
  })
}

function b() {
  let e = Chunk695346.G6.useSetting(),
    t = Chunk358085.isPlatformEmbedded ? Chunk388032.intl.string(Chunk933554.default.UQ9RHB) : Chunk388032.intl.string(Chunk388032.t.oKqC4u);
  return (0, Chunk951288.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.ACTIVITY_PRIVACY_STATUS,
    children: (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
      gap: 32,
      children: [(0, Chunk951288.jsx)("div", {
        children: Chunk388032.intl.string(Chunk933554.default.t2Ysra)
      }), (0, Chunk951288.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk933554.default.WhdCGB),
        description: exports,
        id: "share-my-activity",
        checked: module,
        onChange: Chunk695346.G6.updateSetting
      })]
    })
  })
}

function y() {
  return (0, Chunk951288.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.ACTIVITY_PRIVACY_TOS,
    children: (0, Chunk951288.jsx)(Chunk481060.ToO, {
      type: Chunk481060.ToO.Types.PRIMARY,
      body: Chunk388032.intl.format(Chunk388032.t.xvCsx8, {
        termsLink: Chunk981631.EYA.TERMS,
        privacyLink: Chunk981631.EYA.PRIVACY
      })
    })
  })
}
let O = function(e) {
  let {
    className: t
  } = e;
  return (0, r.jsxs)(c.Z, {
    className: t,
    title: h.intl.string(h.t.Cq98yM),
    children: [(0, r.jsx)(b, {}), (0, r.jsx)(o.izJ, {
      gap: 32
    }), (0, r.jsx)(g, {}), (0, r.jsx)(o.izJ, {
      gap: 32
    }), (0, r.jsx)(E, {}), (0, r.jsx)(o.izJ, {
      gap: 32
    }), (0, r.jsx)(y, {})]
  })
}