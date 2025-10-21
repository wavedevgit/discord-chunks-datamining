/** Chunk was on web.js **/
/** chunk id: 901151, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./642613.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk524437 = require("./524437.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk768581 = require("./768581.js"),
  Chunk63063 = require("./63063.js"),
  Chunk709054 = require("./709054.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk749876 = require("./749876.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk546957 = require("./546957.jsx"),
  Chunk838436 = require("./838436.jsx"),
  Chunk51331 = require("./51331.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk42101 = require("./42101.js");
let v = 3,
  I = 3;

function T(e) {
  let {
    applications: t
  } = e, n = i.useMemo(() => t.sort((e, t) => u.default.compare(t.id, e.id)), [t]), a = i.useMemo(() => {
    let e = [];
    for (let t = 0; t < v; t++) {
      let r = n[t];
      if (null == r) break;
      e.push(r.name)
    }
    let t = e.join(", "),
      i = n.length - v;
    return i > 0 ? y.intl.format(y.t.sHFdTg, {
      gameList: t,
      plusMoreHook: (e, t) => (0, r.jsx)(s.Text, {
        tag: "span",
        variant: "text-sm/medium",
        color: "text-muted",
        children: y.intl.format(y.t["EADv+4"], {
          count: i
        })
      }, t)
    }) : e.join(", ")
  }, [n]), c = i.useMemo(() => {
    let e = [];
    for (let t = 0; t < I; t++) {
      let i = n[t];
      if (null == i) break;
      let {
        icon: a,
        name: s,
        id: c
      } = i, u = l.ZP.getApplicationIconURL({
        id: c,
        icon: a
      });
      e.push((0, r.jsx)(o.u, {
        __unsupportedReactNodeAsText: s,
        children: (0, r.jsx)("img", {
          src: u,
          "aria-label": s,
          className: O.icon
        })
      }, c))
    }
    let t = n.length - I;
    return t > 0 && e.push((0, r.jsx)("div", {
      className: O.moreIcon,
      children: (0, r.jsx)(s.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        children: "+".concat(t)
      })
    }, "omitted")), e
  }, [n]), d = () => {
    (0, p.openUserSettings)(f.n.AUTHORIZED_APPS_PANEL, {
      section: b.oAB.AUTHORIZED_APPS
    })
  };
  return (0, r.jsxs)("div", {
    className: O.header,
    children: [(0, r.jsxs)("div", {
      className: O.gameNamesHeader,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "header-primary",
        children: a
      }), (0, r.jsxs)(s.P3F, {
        onClick: d,
        className: O.manageGamesLink,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-xs/normal",
          color: "interactive-normal",
          children: y.intl.format(y.t.oYaYOe, {})
        }), (0, r.jsx)(s.Fbu, {
          size: "xxs",
          color: s.TVs.colors.INTERACTIVE_NORMAL,
          className: O.manageGamesChevron
        })]
      })]
    }), (0, r.jsx)("div", {
      className: O.divider
    }), (0, r.jsx)("div", {
      className: O.gameIcons,
      children: c
    })]
  })
}

function S() {
  let e = Chunk695346._j.useSetting();
  return (0, Chunk951288.jsx)(Chunk838436.U, {
    setting: Chunk726985.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS,
    children: (0, Chunk951288.jsx)(Chunk51331.ZP, {
      title: Chunk388032.intl.string(Chunk388032.t.XpBObB),
      note: Chunk388032.intl.format(Chunk388032.t.oZsHTD, {
        helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.SLAYER_GAME_FRIENDS)
      }),
      value: module,
      onChange: Chunk695346._j.updateSetting
    })
  })
}

function A() {
  let e = Chunk695346.JG.useSetting(),
    t = module === Chunk524437.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? Chunk524437.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : module,
    n = [{
      name: Chunk388032.intl.string(Chunk388032.t.JIFnN9),
      value: Chunk524437.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL
    }, {
      name: Chunk388032.intl.string(Chunk388032.t.rRdsk1),
      value: Chunk524437.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME
    }, {
      name: Chunk388032.intl.string(Chunk388032.t.AolKwN),
      value: Chunk524437.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE
    }];
  return (0, Chunk951288.jsxs)(Chunk838436.U, {
    setting: Chunk726985.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS,
    children: [(0, Chunk951288.jsx)(Chunk838436.H, {
      header: Chunk388032.intl.string(Chunk388032.t["ms+Tme"]),
      description: Chunk388032.intl.string(Chunk388032.t["4NN4+/"])
    }), (0, Chunk951288.jsx)(Chunk481060.FXm, {
      value: exports,
      options: require,
      onChange: e => d.JG.updateSetting(e)
    })]
  })
}

function C() {
  let {
    showLoadingIndicator: e,
    slayerSdkApplications: t
  } = (0, Chunk749876.Z)(true);
  return (0, Chunk951288.jsx)(Chunk546957.Z, {
    children: module ? (0, Chunk951288.jsx)(Chunk481060.$jN, {}) : exports.length > 0 ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(T, {
        applications: exports
      }), (0, Chunk951288.jsx)(S, {}), (0, Chunk951288.jsx)("div", {
        className: Chunk42101.divider
      }), (0, Chunk951288.jsx)(A, {})]
    }) : (0, Chunk951288.jsxs)("div", {
      className: Chunk42101.emptyContainer,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        className: Chunk42101.noGamesConnectedText,
        children: Chunk388032.intl.string(Chunk388032.t["+0U77d"])
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: Chunk388032.intl.format(Chunk388032.t.V8wClM, {
          helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.SOCIAL_LAYER_CONNECTIONS)
        })
      })]
    })
  })
}