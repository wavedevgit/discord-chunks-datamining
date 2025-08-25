/** Chunk was on web.js **/
/** chunk id: 309739, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => H
}), require("./388685.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk658722 = require("./658722.js"),
  l = require.n(Chunk658722),
  Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk457330 = require("./457330.js"),
  Chunk410030 = require("./410030.js"),
  Chunk726542 = require("./726542.js"),
  Chunk316496 = require("./316496.js"),
  Chunk116841 = require("./116841.js"),
  Chunk335082 = require("./335082.jsx"),
  Chunk921801 = require("./921801.js"),
  Chunk553795 = require("./553795.js"),
  Chunk430824 = require("./430824.js"),
  Chunk63063 = require("./63063.js"),
  Chunk358085 = require("./358085.js"),
  Chunk362352 = require("./362352.js"),
  Chunk413182 = require("./413182.js"),
  Chunk695346 = require("./695346.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk85240 = require("./85240.js"),
  Chunk197571 = require("./197571.js");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      x(e, t, n[t])
    })
  }
  return e
}

function j(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function k(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function M(e) {
  let t = () => {
    C.SE.updateSetting(e ? v.Z.getGuildIds() : [])
  };
  (0, _.h7j)(e => (0, r.jsx)(_.ConfirmModal, k(L({
    header: P.intl.string(P.t["uUr+GR"]),
    confirmText: P.intl.string(P.t.gm1Ven),
    cancelText: P.intl.string(P.t.p89ACg),
    onCancel: t,
    confirmButtonColor: f.zx.Colors.BRAND
  }, e), {
    children: (0, r.jsx)(_.Text, {
      variant: "text-md/normal",
      children: P.intl.string(P.t.EFu2Ki)
    })
  })))
}

function U() {
  let e = Chunk695346.G6.useSetting(),
    t = Chunk695346.no.useSetting(),
    n = (0, Chunk362352.Yd)("activity privacy tab"),
    i = Chunk358085.isPlatformEmbedded ? Chunk388032.intl.string(Chunk388032.t.MznbeH) : Chunk388032.intl.string(Chunk388032.t.oKqC4u),
    o = e => {
      C.no.updateSetting(e ? u.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS : u.GI.ACTIVITY_STATUS_OFF), M(e)
    },
    s = e => {
      C.no.updateSetting(e), M(e !== u.GI.ACTIVITY_STATUS_OFF)
    },
    l = [{
      value: Chunk524437.GI.ACTIVITY_STATUS_ON,
      label: Chunk388032.intl.string(Chunk388032.t.UzGMHx)
    }, {
      value: Chunk524437.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
      label: Chunk388032.intl.string(Chunk388032.t.OFqxQU)
    }, {
      value: Chunk524437.GI.ACTIVITY_STATUS_OFF,
      label: Chunk388032.intl.string(Chunk388032.t.MIgNPD)
    }];
  return (0, Chunk951288.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.ACTIVITY_PRIVACY_STATUS,
    children: (0, Chunk951288.jsxs)(Chunk481060.hjN, {
      children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
        tag: Chunk481060.RB0.H5,
        className: Chunk197571.marginBottom8,
        children: Chunk388032.intl.string(Chunk388032.t["8ka8lp"])
      }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: module,
        onChange: e => C.G6.updateSetting(e),
        note: Chunk647438,
        children: Chunk388032.intl.string(Chunk388032.t["4q/Ewc"])
      }), require ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsxs)(Chunk481060.xJW, {
          tag: Chunk481060.RB0.H3,
          title: Chunk388032.intl.string(Chunk388032.t.ffGYGx),
          children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            color: "header-secondary",
            className: Chunk197571.marginBottom8,
            children: Chunk388032.intl.format(Chunk388032.t.aUxRra, {
              helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.ACTIVITY_STATUS_SETTINGS)
            })
          }), (0, Chunk951288.jsx)(Chunk481060.q4e, {
            options: l,
            value: exports,
            onChange: e => s(e)
          })]
        }), (0, Chunk951288.jsx)(Chunk481060.$i$, {
          className: a()(Chunk197571.marginBottom20, Chunk197571.marginTop20)
        })]
      }) : (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: exports === Chunk524437.GI.ACTIVITY_STATUS_OFF,
        note: Chunk388032.intl.format(Chunk388032.t["+5/xu7"], {
          helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.ACTIVITY_STATUS_SETTINGS)
        }),
        onChange: e => o(!e),
        children: Chunk388032.intl.string(Chunk388032.t.D5GXTU)
      })]
    })
  })
}

function G() {
  let e = Chunk695346.cP.useSetting(),
    t = Chunk695346.Ou.useSetting();
  return (0, Chunk951288.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
    children: (0, Chunk951288.jsxs)(Chunk481060.hjN, {
      className: Chunk197571.marginBottom40,
      children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
        tag: Chunk481060.RB0.H5,
        className: Chunk197571.marginBottom8,
        children: Chunk388032.intl.string(Chunk388032.t.VOszPD)
      }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: module,
        note: Chunk388032.intl.string(Chunk388032.t.Hdh7sb),
        onChange: e => C.cP.updateSetting(e),
        children: Chunk388032.intl.string(Chunk388032.t.WEWQQk)
      }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: exports,
        note: Chunk388032.intl.string(Chunk388032.t.Czr3Bg),
        onChange: e => C.Ou.updateSetting(e),
        children: Chunk388032.intl.string(Chunk388032.t.UUvJVl)
      })]
    })
  })
}

function B() {
  return (0, Chunk951288.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.ACTIVITY_PRIVACY_TOS,
    children: (0, Chunk951288.jsx)(Chunk481060.hjN, {
      className: Chunk197571.marginBottom40,
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
let Z = e => {
  switch (e.type) {
    case R.ABu.SPOTIFY:
      return P.intl.format(P.t["5sYPnp"], {
        name: e.name
      });
    case R.ABu.CRUNCHYROLL:
      return P.intl.format(P.t.Ge29Z2, {
        name: e.name
      });
    default:
      return P.intl.format(P.t.nmMsys, {
        game: e.name
      })
  }
};

function F(e) {
  let {
    account: t
  } = e, [n, o] = i.useState(t.showActivity), a = (0, h.ZP)();

  function s(e) {
    o(e), p.Z.setShowActivity(t.type, t.id, e)
  }
  i.useEffect(() => {
    o(t.showActivity)
  }, [t]);
  let l = m.Z.get(t.type);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(_.j7V, {
      className: w.switchRowContainer,
      hideBorder: true,
      value: n,
      onChange: s,
      children: (0, r.jsxs)("div", {
        className: w.activitySwitchRow,
        children: [(0, r.jsx)("img", {
          alt: l.name,
          className: w.connectionIcon,
          src: (0, d.wj)(a) ? l.icon.darkSVG : l.icon.lightSVG
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(_.Text, {
            variant: "text-md/semibold",
            children: l.name
          }), (0, r.jsxs)(_.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: ['"', Z(l), '"']
          })]
        })]
      })
    }), (0, r.jsx)("div", {
      className: w.divider
    })]
  })
}

function V() {
  let e = (0, Chunk442837.e7)([Chunk553795.Z], () => Chunk553795.Z.getAccounts()),
    t = Chunk647438.useMemo(() => module.filter(e => m.Z.isSupported(e.type) && R.vbS.has(e.type)), [module]),
    [n, o] = Chunk647438.useState(""),
    a = Chunk647438.useMemo(() => {
      let e = require.trim().toLowerCase();
      return "" === module ? exports : exports.filter(t => l()(e, m.Z.get(t.type).name.toLowerCase()))
    }, [exports, require]);
  return 0 === exports.length ? null : (0, Chunk951288.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY,
    children: (0, Chunk951288.jsx)(Chunk481060.hjN, {
      className: Chunk197571.marginBottom40,
      children: (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
        gap: 12,
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          tag: Chunk481060.RB0.H5,
          className: Chunk197571.marginBottom8,
          children: Chunk388032.intl.string(Chunk388032.t["4F2KoK"])
        }), (0, Chunk951288.jsx)(Chunk481060.E1j, {
          query: require,
          onChange: Chunk120356,
          placeholder: Chunk388032.intl.string(Chunk388032.t.WPrtoa)
        }), a.map(e => (0, r.jsx)(F, {
          account: e
        }, e.id))]
      })
    })
  })
}

function H(e) {
  let {
    className: t,
    showHeader: n = true
  } = e, {
    showRedesign: i
  } = A.b.useExperiment({
    location: "activity privacy tab"
  }), {
    showPerGuildActivityStatusSetting: o
  } = (0, E.c)("activity privacy tab"), {
    showUpdatedSettingsPage: a
  } = (0, g.D)("activity privacy tab");
  return o || a ? (0, r.jsx)(b.Z, {}) : (0, r.jsxs)(_.hjN, {
    className: t,
    tag: _.RB0.H1,
    title: n ? P.intl.string(P.t.Cq98yM) : null,
    children: [(0, r.jsx)(U, {}), (0, r.jsx)(G, {}), (0, r.jsx)(B, {}), i && (0, r.jsx)(V, {})]
  })
}