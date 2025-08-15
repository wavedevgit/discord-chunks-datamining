/** Chunk was on 30202 **/
/** chunk id: 335082, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk524437 = require("./524437.js"),
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

function h(e) {
  let {
    label: t,
    sublabel: n,
    id: r,
    checked: a,
    onChange: l
  } = e;
  return (0, i.jsxs)("div", {
    className: g.settingSwitch,
    children: [(0, i.jsxs)("label", {
      className: g.settingSwitchLabel,
      htmlFor: r,
      children: [(0, i.jsx)(s.X6q, {
        variant: "heading-md/semibold",
        children: t
      }), (0, i.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: n
      })]
    }), (0, i.jsx)(s.rsf, {
      id: r,
      checked: a,
      onChange: l
    })]
  })
}

function f() {
  let e = Chunk695346.G6.useSetting(),
    t = Chunk695346.no.useSetting(),
    n = [{
      value: Chunk524437.GI.ACTIVITY_STATUS_ON,
      name: Chunk388032.intl.string(Chunk388032.t.UzGMHx)
    }, {
      value: Chunk524437.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
      name: Chunk388032.intl.string(Chunk933554.default["/sAeRU"])
    }, {
      value: Chunk524437.GI.ACTIVITY_STATUS_OFF,
      name: Chunk388032.intl.string(Chunk933554.default.m3oL7e)
    }];
  return (0, Chunk255367.jsx)(Chunk481060.hjN, {
    className: Chunk764055.formSection,
    children: (0, Chunk255367.jsxs)(Chunk481060.y5t, {
      component: (0, Chunk255367.jsxs)("div", {
        children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
          className: Chunk764055.formTitle,
          variant: "heading-lg/semibold",
          color: "header-primary",
          children: Chunk388032.intl.string(Chunk933554.default.TG0Qsb)
        }), (0, Chunk255367.jsx)(Chunk481060.R94, {
          className: Chunk764055.formDescription,
          type: Chunk481060.R94.Types.DESCRIPTION,
          children: Chunk388032.intl.string(Chunk933554.default.OO17Li)
        })]
      }),
      children: [(0, Chunk255367.jsxs)("div", {
        children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
          className: Chunk764055.defaultSetting,
          variant: "heading-md/medium",
          color: "header-primary",
          children: Chunk388032.intl.string(Chunk933554.default["/LHVbm"])
        }), (0, Chunk255367.jsx)(Chunk481060.FXm, {
          options: require,
          value: exports,
          onChange: e => {
            var t;
            return t = e.value, void l.no.updateSetting(t)
          }
        })]
      }), (0, Chunk255367.jsxs)("div", {
        className: Chunk764055.myServersContainer,
        children: [(0, Chunk255367.jsxs)("div", {
          className: Chunk764055.myServersHeaderContainer,
          children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
            className: Chunk764055.myServersTitle,
            variant: "heading-md/medium",
            color: "header-primary",
            children: Chunk388032.intl.string(Chunk388032.t.TqdOvL)
          }), !module && (0, Chunk255367.jsx)(Chunk481060.Wn, {
            className: Chunk764055.myServersIgnoredWarning,
            messageType: Chunk481060.QYI.WARNING,
            textColor: "text-feedback-warning",
            children: Chunk388032.intl.string(Chunk933554.default["xxI0/f"])
          })]
        }), (0, Chunk255367.jsx)(Chunk940276.Z, {})]
      })]
    })
  })
}

function b() {
  let e = Chunk695346.cP.useSetting(),
    t = Chunk695346.Ou.useSetting();
  return (0, Chunk255367.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
    children: (0, Chunk255367.jsxs)(Chunk481060.hjN, {
      className: Chunk764055.formSection,
      children: [(0, Chunk255367.jsx)("div", {
        children: (0, Chunk255367.jsx)(Chunk481060.X6q, {
          className: Chunk764055.formTitle,
          variant: "heading-lg/semibold",
          color: "header-primary",
          children: Chunk388032.intl.string(Chunk933554.default["5rYBAQ"])
        })
      }), (0, Chunk255367.jsx)(h, {
        label: Chunk388032.intl.string(Chunk933554.default.khuuzs),
        sublabel: Chunk388032.intl.string(Chunk933554.default["8EWsJy"]),
        id: "allow-friends-to-join-my-game",
        checked: module,
        onChange: e => l.cP.updateSetting(e)
      }), (0, Chunk255367.jsx)(h, {
        label: Chunk388032.intl.string(Chunk933554.default.Uz5Ipq),
        sublabel: Chunk388032.intl.string(Chunk933554.default.CZI2GR),
        id: "allow-vc-join-without-request",
        checked: exports,
        onChange: e => l.Ou.updateSetting(e)
      })]
    })
  })
}

function x() {
  let e = Chunk695346.G6.useSetting(),
    t = Chunk358085.isPlatformEmbedded ? Chunk388032.intl.string(Chunk933554.default.UQ9RHB) : Chunk388032.intl.string(Chunk388032.t.oKqC4u);
  return (0, Chunk255367.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.ACTIVITY_PRIVACY_STATUS,
    children: (0, Chunk255367.jsxs)(Chunk481060.hjN, {
      className: Chunk764055.formSection,
      children: [(0, Chunk255367.jsx)("div", {
        children: (0, Chunk255367.jsx)(Chunk481060.R94, {
          className: Chunk764055.formDescription,
          type: Chunk481060.R94.Types.DESCRIPTION,
          children: Chunk388032.intl.string(Chunk933554.default.t2Ysra)
        })
      }), (0, Chunk255367.jsx)("div", {
        className: Chunk764055.switchContainer,
        children: (0, Chunk255367.jsx)(h, {
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

function _() {
  return (0, Chunk255367.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.ACTIVITY_PRIVACY_TOS,
    children: (0, Chunk255367.jsx)(Chunk481060.hjN, {
      children: (0, Chunk255367.jsx)(Chunk481060.ToO, {
        type: Chunk481060.ToO.Types.PRIMARY,
        body: Chunk388032.intl.format(Chunk388032.t.xvCsx8, {
          termsLink: Chunk981631.EYA.TERMS,
          privacyLink: Chunk981631.EYA.PRIVACY
        })
      })
    })
  })
}
let j = function(e) {
  let {
    className: t
  } = e;
  return (0, i.jsx)(s.hjN, {
    className: t,
    children: (0, i.jsxs)(s.y5t, {
      forceLevel: 1,
      component: (0, i.jsx)(s.X6q, {
        className: g.formTitle,
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: p.intl.string(p.t.Cq98yM)
      }),
      children: [(0, i.jsx)(x, {}), (0, i.jsx)(s.$i$, {
        className: g.divider
      }), (0, i.jsx)(f, {}), (0, i.jsx)(s.$i$, {
        className: g.divider
      }), (0, i.jsx)(b, {}), (0, i.jsx)(s.$i$, {
        className: g.divider
      }), (0, i.jsx)(_, {})]
    })
  })
}