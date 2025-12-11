/** Chunk was on web.js **/
/** chunk id: 309739, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk524437 = require("./524437.js"),
  Chunk481060 = require("./481060.js"),
  Chunk940276 = require("./940276.jsx"),
  Chunk921801 = require("./921801.js"),
  Chunk358085 = require("./358085.js"),
  Chunk695346 = require("./695346.js"),
  Chunk273313 = require("./273313.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk254681 = require("./254681.js"),
  Chunk85240 = require("./85240.js");

function h(e) {
  let {
    className: t
  } = e;
  return (0, r.jsxs)(u.Z, {
    className: t,
    title: p.intl.string(p.t.Cq98yL),
    children: [(0, r.jsx)(b, {}), (0, r.jsx)(a.izJ, {
      gap: 32
    }), (0, r.jsx)(g, {}), (0, r.jsx)(a.izJ, {
      gap: 32
    }), (0, r.jsx)(E, {}), (0, r.jsx)(a.izJ, {
      gap: 32
    }), (0, r.jsx)(y, {})]
  })
}

function g() {
  let e = Chunk695346.G6.useSetting(),
    t = Chunk695346.no.useSetting(),
    n = e => {
      c.no.updateSetting(e)
    },
    s = [{
      value: Chunk524437.GI.ACTIVITY_STATUS_ON,
      name: Chunk388032.intl.string(Chunk388032.t.UzGMH9)
    }, {
      value: Chunk524437.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
      name: Chunk388032.intl.string(Chunk254681.default["/sAeRY"])
    }, {
      value: Chunk524437.GI.ACTIVITY_STATUS_OFF,
      name: Chunk388032.intl.string(Chunk254681.default.m3oL7Q)
    }];
  return (0, Chunk54381.jsxs)(Chunk481060.C3N, {
    label: Chunk388032.intl.string(Chunk254681.default.TG0QsS),
    description: Chunk388032.intl.string(Chunk254681.default.OO17Lg),
    children: [(0, Chunk54381.jsx)(Chunk481060.FXm, {
      label: Chunk388032.intl.string(Chunk254681.default["/LHVbt"]),
      options: Chunk921801,
      value: exports,
      onChange: e => n(e)
    }), (0, Chunk54381.jsxs)("div", {
      className: Chunk85240.myServersContainer,
      children: [(0, Chunk54381.jsxs)("div", {
        className: Chunk85240.myServersHeaderContainer,
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          className: Chunk85240.myServersTitle,
          variant: "heading-md/medium",
          color: "header-primary",
          children: Chunk388032.intl.string(Chunk388032.t.TqdOvC)
        }), !module && (0, Chunk54381.jsx)("div", {
          className: Chunk85240.myServersIgnoredWarning,
          children: (0, Chunk54381.jsx)(Chunk481060.M14, {
            type: "warning",
            children: Chunk388032.intl.string(Chunk254681.default["xxI0/W"])
          })
        })]
      }), (0, Chunk54381.jsx)(Chunk940276.Z, {})]
    })]
  })
}

function E() {
  let e = Chunk695346.cP.useSetting(),
    t = Chunk695346.Ou.useSetting();
  return (0, Chunk54381.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
    children: (0, Chunk54381.jsxs)(Chunk481060.C3N, {
      label: Chunk388032.intl.string(Chunk254681.default["5rYBAQ"]),
      children: [(0, Chunk54381.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk254681.default.khuuzv),
        description: Chunk388032.intl.string(Chunk254681.default["8EWsJ8"]),
        id: "allow-friends-to-join-my-game",
        checked: module,
        onChange: e => c.cP.updateSetting(e)
      }), (0, Chunk54381.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk254681.default.Uz5Ipi),
        description: Chunk388032.intl.string(Chunk254681.default.CZI2Gb),
        id: "allow-vc-join-without-request",
        checked: exports,
        onChange: e => c.Ou.updateSetting(e)
      })]
    })
  })
}

function b() {
  let e = Chunk695346.G6.useSetting(),
    t = Chunk358085.isPlatformEmbedded ? Chunk388032.intl.string(Chunk254681.default.UQ9RHJ) : Chunk388032.intl.string(Chunk388032.t.oKqC4t);
  return (0, Chunk54381.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.ACTIVITY_PRIVACY_STATUS,
    children: (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
      gap: 32,
      children: [(0, Chunk54381.jsx)("div", {
        children: Chunk388032.intl.string(Chunk254681.default.t2YsrV)
      }), (0, Chunk54381.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk254681.default.WhdCGP),
        description: exports,
        id: "share-my-activity",
        checked: module,
        onChange: Chunk695346.G6.updateSetting
      })]
    })
  })
}

function y() {
  return (0, Chunk54381.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.ACTIVITY_PRIVACY_TOS,
    children: (0, Chunk54381.jsx)(Chunk481060.Zbd, {
      type: Chunk481060.Zbd.Types.PRIMARY,
      className: Chunk85240.privacyTermsCard,
      children: (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        children: Chunk388032.intl.format(Chunk388032.t.xvCsx4, {
          termsLink: Chunk981631.EYA.TERMS,
          privacyLink: Chunk981631.EYA.PRIVACY
        })
      })
    })
  })
}