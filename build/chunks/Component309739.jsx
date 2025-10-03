/** Chunk was on web.js **/
/** chunk id: 309739, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => F
}), require("./388685.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk658722 = require("./658722.js"),
  o = require.n(Chunk658722),
  Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk457330 = require("./457330.js"),
  Chunk410030 = require("./410030.js"),
  Chunk726542 = require("./726542.js"),
  Chunk316496 = require("./316496.js"),
  Chunk335082 = require("./335082.jsx"),
  Chunk921801 = require("./921801.js"),
  Chunk553795 = require("./553795.js"),
  Chunk430824 = require("./430824.js"),
  Chunk63063 = require("./63063.js"),
  Chunk358085 = require("./358085.js"),
  Chunk362352 = require("./362352.js"),
  Chunk413182 = require("./413182.js"),
  Chunk695346 = require("./695346.js"),
  Chunk273313 = require("./273313.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk85240 = require("./85240.js"),
  Chunk197571 = require("./197571.js");

function w(e, t, n) {
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
      w(e, t, n[t])
    })
  }
  return e
}

function L(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function M(e) {
  let t = () => {
    T.SE.updateSetting(e ? b.Z.getGuildIds() : [])
  };
  (0, d.h7j)(e => (0, r.jsx)(d.ConfirmModal, x(D({
    header: N.intl.string(N.t["uUr+GR"]),
    confirmText: N.intl.string(N.t.gm1Ven),
    cancelText: N.intl.string(N.t.p89ACg),
    onCancel: t,
    confirmButtonColor: u.zx.Colors.BRAND
  }, e), {
    children: (0, r.jsx)(d.Text, {
      variant: "text-md/normal",
      children: N.intl.string(N.t.EFu2Ki)
    })
  })))
}

function j() {
  let e = Chunk695346.G6.useSetting(),
    t = Chunk695346.no.useSetting(),
    n = (0, Chunk362352.Yd)("activity privacy tab"),
    i = Chunk358085.isPlatformEmbedded ? Chunk388032.intl.string(Chunk388032.t.MznbeH) : Chunk388032.intl.string(Chunk388032.t.oKqC4u),
    a = e => {
      T.no.updateSetting(e ? l.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS : l.GI.ACTIVITY_STATUS_OFF), M(e)
    },
    o = e => {
      T.no.updateSetting(e), M(e !== l.GI.ACTIVITY_STATUS_OFF)
    },
    s = [{
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
    children: (0, Chunk951288.jsxs)(Chunk481060.C3N, {
      label: Chunk388032.intl.string(Chunk388032.t["8ka8lp"]),
      children: [(0, Chunk951288.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t["4q/Ewc"]),
        description: Chunk647438,
        checked: module,
        onChange: e => T.G6.updateSetting(e)
      }), require ? (0, Chunk951288.jsx)(Chunk481060.q4e, {
        label: Chunk388032.intl.string(Chunk388032.t.ffGYGx),
        description: Chunk388032.intl.format(Chunk388032.t.aUxRra, {
          helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.ACTIVITY_STATUS_SETTINGS)
        }),
        options: Chunk442837,
        value: exports,
        onChange: e => o(e)
      }) : (0, Chunk951288.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t.D5GXTU),
        description: Chunk388032.intl.format(Chunk388032.t["+5/xu7"], {
          helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.ACTIVITY_STATUS_SETTINGS)
        }),
        checked: exports === Chunk524437.GI.ACTIVITY_STATUS_OFF,
        onChange: e => a(!e)
      })]
    })
  })
}

function k() {
  let e = Chunk695346.cP.useSetting(),
    t = Chunk695346.Ou.useSetting();
  return (0, Chunk951288.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
    children: (0, Chunk951288.jsxs)(Chunk481060.C3N, {
      label: Chunk388032.intl.string(Chunk388032.t.VOszPD),
      children: [(0, Chunk951288.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t.WEWQQk),
        description: Chunk388032.intl.string(Chunk388032.t.Hdh7sb),
        checked: module,
        onChange: e => T.cP.updateSetting(e)
      }), (0, Chunk951288.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t.UUvJVl),
        description: Chunk388032.intl.string(Chunk388032.t.Czr3Bg),
        checked: exports,
        onChange: e => T.Ou.updateSetting(e)
      })]
    })
  })
}

function U() {
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
let G = e => {
  switch (e.type) {
    case C.ABu.SPOTIFY:
      return N.intl.format(N.t["5sYPnp"], {
        name: e.name
      });
    case C.ABu.CRUNCHYROLL:
      return N.intl.format(N.t.Ge29Z2, {
        name: e.name
      });
    default:
      return N.intl.format(N.t.nmMsys, {
        game: e.name
      })
  }
};

function B(e) {
  let {
    account: t
  } = e, [n, a] = i.useState(t.showActivity), o = (0, _.ZP)();

  function s(e) {
    a(e), f.Z.setShowActivity(t.type, t.id, e)
  }
  i.useEffect(() => {
    a(t.showActivity)
  }, [t]);
  let l = p.Z.get(t.type);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: R.connectedAccountToggle,
      children: [(0, r.jsx)("img", {
        alt: l.name,
        className: R.connectionIcon,
        src: (0, c.wj)(o) ? l.icon.darkSVG : l.icon.lightSVG
      }), (0, r.jsx)(d.rsf, {
        label: l.name,
        description: '"'.concat(G(l), '"'),
        checked: n,
        onChange: s
      })]
    }), (0, r.jsx)(d.izJ, {})]
  })
}

function Z() {
  let e = (0, Chunk442837.e7)([Chunk553795.Z], () => Chunk553795.Z.getAccounts()),
    t = Chunk647438.useMemo(() => module.filter(e => p.Z.isSupported(e.type) && C.vbS.has(e.type)), [module]),
    [n, a] = Chunk647438.useState(""),
    l = Chunk647438.useMemo(() => {
      let e = require.trim().toLowerCase();
      return "" === module ? exports : exports.filter(t => o()(e, p.Z.get(t.type).name.toLowerCase()))
    }, [exports, require]);
  return 0 === exports.length ? null : (0, Chunk951288.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY,
    children: (0, Chunk951288.jsxs)(Chunk481060.C3N, {
      label: Chunk388032.intl.string(Chunk388032.t["4F2KoK"]),
      children: [(0, Chunk951288.jsx)(Chunk481060.E1j, {
        query: require,
        onChange: Chunk658722,
        placeholder: Chunk388032.intl.string(Chunk388032.t.WPrtoa)
      }), Chunk524437.map(e => (0, r.jsx)(B, {
        account: e
      }, e.id))]
    })
  })
}

function F(e) {
  let {
    className: t,
    showHeader: n = true
  } = e, {
    showRedesign: i
  } = I.b.useExperiment({
    location: "activity privacy tab"
  }), {
    showUpdatedSettingsPage: a
  } = (0, h.D)("activity privacy tab");
  return a ? (0, r.jsx)(m.Z, {}) : (0, r.jsx)(S.Z, {
    className: t,
    title: n ? N.intl.string(N.t.Cq98yM) : null,
    children: (0, r.jsxs)(d.Kqy, {
      gap: 24,
      children: [(0, r.jsx)(j, {}), (0, r.jsx)(d.izJ, {}), (0, r.jsx)(k, {}), (0, r.jsx)(U, {}), i && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d.izJ, {}), (0, r.jsx)(Z, {})]
      })]
    })
  })
}