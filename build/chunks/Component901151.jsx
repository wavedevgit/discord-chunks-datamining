/** Chunk was on web.js **/
/** chunk id: 901151, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
}), require("./642613.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk524437 = require("./524437.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk768581 = require("./768581.js"),
  Chunk63063 = require("./63063.js"),
  Chunk709054 = require("./709054.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk749876 = require("./749876.js"),
  Chunk947889 = require("./947889.js"),
  Chunk546957 = require("./546957.jsx"),
  Chunk838436 = require("./838436.jsx"),
  Chunk51331 = require("./51331.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk511693 = require("./511693.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let A = 3,
  C = 3;

function N(e) {
  let {
    applications: t
  } = e, n = i.useMemo(() => t.sort((e, t) => u.default.compare(t.id, e.id)), [t]), a = i.useMemo(() => {
    let e = [];
    for (let t = 0; t < A; t++) {
      let r = n[t];
      if (null == r) break;
      e.push(r.name)
    }
    let t = e.join(", "),
      i = n.length - A;
    return i > 0 ? y.intl.format(y.t.sHFdTk, {
      gameList: t,
      plusMoreHook: (e, t) => (0, r.jsx)(s.Text, {
        tag: "span",
        variant: "text-sm/medium",
        color: "text-muted",
        children: y.intl.format(y.t["EADv+/"], {
          count: i
        })
      }, t)
    }) : e.join(", ")
  }, [n]), o = i.useMemo(() => {
    let e = [];
    for (let t = 0; t < C; t++) {
      let i = n[t];
      if (null == i) break;
      let {
        icon: a,
        name: o,
        id: c
      } = i, u = l.ZP.getApplicationIconURL({
        id: c,
        icon: a
      });
      e.push((0, r.jsx)(s.ua7, {
        text: o,
        children: e => (0, r.jsx)("img", S(I({}, e), {
          src: u,
          "aria-label": o,
          className: O.icon
        }))
      }, c))
    }
    let t = n.length - C;
    return t > 0 && e.push((0, r.jsx)("div", {
      className: O.moreIcon,
      children: (0, r.jsx)(s.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        children: "+".concat(t)
      })
    }, "omitted")), e
  }, [n]), c = (0, p.Z)(), d = i.useCallback(() => {
    c(f.n.AUTHORIZED_APPS_PANEL, {
      section: b.oAB.AUTHORIZED_APPS
    })
  }, [c]);
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
          children: y.intl.format(y.t.oYaYOT, {})
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
      children: o
    })]
  })
}

function R() {
  let e = Chunk695346._j.useSetting();
  return (0, Chunk951288.jsx)(Chunk838436.U, {
    setting: Chunk726985.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS,
    children: (0, Chunk951288.jsx)(Chunk51331.Z, {
      title: Chunk388032.intl.string(Chunk388032.t.XpBObG),
      note: Chunk388032.intl.format(Chunk388032.t.oZsHTE, {
        helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.SLAYER_GAME_FRIENDS)
      }),
      value: module,
      onChange: Chunk695346._j.updateSetting
    })
  })
}

function P() {
  let e = Chunk695346.JG.useSetting(),
    t = module === Chunk524437.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? Chunk524437.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : module,
    n = [{
      name: Chunk388032.intl.string(Chunk388032.t.JIFnNz),
      value: Chunk524437.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL
    }, {
      name: Chunk388032.intl.string(Chunk388032.t.rRdsk5),
      value: Chunk524437.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME
    }, {
      name: Chunk388032.intl.string(Chunk388032.t.AolKwM),
      value: Chunk524437.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE
    }];
  return (0, Chunk951288.jsxs)(Chunk838436.U, {
    setting: Chunk726985.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS,
    children: [(0, Chunk951288.jsx)(Chunk838436.H, {
      header: Chunk388032.intl.string(Chunk388032.t["ms+TmZ"]),
      description: Chunk388032.intl.string(Chunk388032.t["4NN4+/"])
    }), (0, Chunk951288.jsx)(Chunk755721.Gu, {
      value: exports,
      options: require,
      onChange: e => {
        let {
          value: t
        } = e;
        return d.JG.updateSetting(t)
      }
    })]
  })
}

function w() {
  let {
    showLoadingIndicator: e,
    slayerSdkApplications: t
  } = (0, Chunk749876.Z)(true);
  return (0, Chunk951288.jsx)(Chunk546957.Z, {
    children: module ? (0, Chunk951288.jsx)(Chunk481060.$jN, {}) : exports.length > 0 ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(N, {
        applications: exports
      }), (0, Chunk951288.jsx)(R, {}), (0, Chunk951288.jsx)("div", {
        className: Chunk511693.divider
      }), (0, Chunk951288.jsx)(P, {})]
    }) : (0, Chunk951288.jsxs)("div", {
      className: Chunk511693.emptyContainer,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        className: Chunk511693.noGamesConnectedText,
        children: Chunk388032.intl.string(Chunk388032.t["+0U77e"])
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: Chunk388032.intl.format(Chunk388032.t.V8wClJ, {
          helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.SOCIAL_LAYER_CONNECTIONS)
        })
      })]
    })
  })
}