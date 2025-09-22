/** Chunk was on web.js **/
/** chunk id: 335082, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk524437 = require("./524437.js"),
  Chunk538534 = require("./538534.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk921801 = require("./921801.js"),
  Chunk695346 = require("./695346.js"),
  Chunk358085 = require("./358085.js"),
  Chunk940276 = require("./940276.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk726985 = require("./726985.js"),
  Chunk933554 = require("./933554.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk764055 = require("./764055.js");

function g(e) {
  let {
    label: t,
    sublabel: n,
    id: i,
    checked: a,
    onChange: l
  } = e;
  return (0, r.jsxs)("div", {
    className: m.settingSwitch,
    children: [(0, r.jsxs)("label", {
      className: m.settingSwitchLabel,
      htmlFor: i,
      children: [(0, r.jsx)(s.X6q, {
        variant: "heading-md/semibold",
        children: t
      }), (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: n
      })]
    }), (0, r.jsx)(o.T2, {
      id: i,
      checked: a,
      onChange: l
    })]
  })
}

function E() {
  let e = Chunk695346.G6.useSetting(),
    t = Chunk695346.no.useSetting(),
    n = e => {
      c.no.updateSetting(e)
    },
    o = [{
      value: Chunk524437.GI.ACTIVITY_STATUS_ON,
      name: Chunk388032.intl.string(Chunk388032.t.UzGMHx)
    }, {
      value: Chunk524437.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
      name: Chunk388032.intl.string(Chunk933554.default["/sAeRU"])
    }, {
      value: Chunk524437.GI.ACTIVITY_STATUS_OFF,
      name: Chunk388032.intl.string(Chunk933554.default.m3oL7e)
    }];
  return (0, Chunk951288.jsx)(Chunk481060.hjN, {
    className: Chunk764055.formSection,
    children: (0, Chunk951288.jsxs)(Chunk481060.y5t, {
      component: (0, Chunk951288.jsxs)("div", {
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          className: Chunk764055.formTitle,
          variant: "heading-lg/semibold",
          color: "header-primary",
          children: Chunk388032.intl.string(Chunk933554.default.TG0Qsb)
        }), (0, Chunk951288.jsx)(Chunk481060.R94, {
          className: Chunk764055.formDescription,
          type: Chunk481060.R94.Types.DESCRIPTION,
          children: Chunk388032.intl.string(Chunk933554.default.OO17Li)
        })]
      }),
      children: [(0, Chunk951288.jsxs)("div", {
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          className: Chunk764055.defaultSetting,
          variant: "heading-md/medium",
          color: "header-primary",
          children: Chunk388032.intl.string(Chunk933554.default["/LHVbm"])
        }), (0, Chunk951288.jsx)(Chunk538534.E, {
          options: Chunk755721,
          value: exports,
          onChange: e => n(e)
        })]
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
  })
}

function b() {
  let e = Chunk695346.cP.useSetting(),
    t = Chunk695346.Ou.useSetting();
  return (0, Chunk951288.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
    children: (0, Chunk951288.jsxs)(Chunk481060.hjN, {
      className: Chunk764055.formSection,
      children: [(0, Chunk951288.jsx)("div", {
        children: (0, Chunk951288.jsx)(Chunk481060.X6q, {
          className: Chunk764055.formTitle,
          variant: "heading-lg/semibold",
          color: "header-primary",
          children: Chunk388032.intl.string(Chunk933554.default["5rYBAQ"])
        })
      }), (0, Chunk951288.jsx)(g, {
        label: Chunk388032.intl.string(Chunk933554.default.khuuzs),
        sublabel: Chunk388032.intl.string(Chunk933554.default["8EWsJy"]),
        id: "allow-friends-to-join-my-game",
        checked: module,
        onChange: e => c.cP.updateSetting(e)
      }), (0, Chunk951288.jsx)(g, {
        label: Chunk388032.intl.string(Chunk933554.default.Uz5Ipq),
        sublabel: Chunk388032.intl.string(Chunk933554.default.CZI2GR),
        id: "allow-vc-join-without-request",
        checked: exports,
        onChange: e => c.Ou.updateSetting(e)
      })]
    })
  })
}

function y() {
  let e = Chunk695346.G6.useSetting(),
    t = Chunk358085.isPlatformEmbedded ? Chunk388032.intl.string(Chunk933554.default.UQ9RHB) : Chunk388032.intl.string(Chunk388032.t.oKqC4u);
  return (0, Chunk951288.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.ACTIVITY_PRIVACY_STATUS,
    children: (0, Chunk951288.jsxs)(Chunk481060.hjN, {
      className: Chunk764055.formSection,
      children: [(0, Chunk951288.jsx)("div", {
        children: (0, Chunk951288.jsx)(Chunk481060.R94, {
          className: Chunk764055.formDescription,
          type: Chunk481060.R94.Types.DESCRIPTION,
          children: Chunk388032.intl.string(Chunk933554.default.t2Ysra)
        })
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk764055.switchContainer,
        children: (0, Chunk951288.jsx)(g, {
          label: Chunk388032.intl.string(Chunk933554.default.WhdCGB),
          sublabel: exports,
          id: "share-my-activity",
          checked: module,
          onChange: Chunk695346.G6.updateSetting
        })
      })]
    })
  })
}

function O() {
  return (0, Chunk951288.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.ACTIVITY_PRIVACY_TOS,
    children: (0, Chunk951288.jsx)(Chunk481060.hjN, {
      children: (0, Chunk951288.jsx)(Chunk481060.ToO, {
        type: Chunk481060.ToO.Types.PRIMARY,
        body: Chunk388032.intl.format(Chunk388032.t.xvCsx8, {
          termsLink: Chunk981631.EYA.TERMS,
          privacyLink: Chunk981631.EYA.PRIVACY
        })
      })
    })
  })
}
let v = function(e) {
  let {
    className: t
  } = e;
  return (0, r.jsx)(s.hjN, {
    className: t,
    children: (0, r.jsxs)(s.y5t, {
      forceLevel: 1,
      component: (0, r.jsx)(s.X6q, {
        className: m.formTitle,
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: h.intl.string(h.t.Cq98yM)
      }),
      children: [(0, r.jsx)(y, {}), (0, r.jsx)(s.$i$, {
        className: m.divider
      }), (0, r.jsx)(E, {}), (0, r.jsx)(s.$i$, {
        className: m.divider
      }), (0, r.jsx)(b, {}), (0, r.jsx)(s.$i$, {
        className: m.divider
      }), (0, r.jsx)(O, {})]
    })
  })
}