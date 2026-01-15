/** Chunk was on web.js **/
/** chunk id: 901151, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w,
  e: () => P
}), require("./642613.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk285044 = require("./285044.js");
let v = 3,
  S = 3;

function I(e) {
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
    for (let t = 0; t < S; t++) {
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
    let t = n.length - S;
    return t > 0 && e.push((0, r.jsx)("div", {
      className: O.moreIcon,
      children: (0, r.jsx)(s.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        children: "+".concat(t)
      })
    }, "omitted")), e
  }, [n]), d = () => {
    (0, _.openUserSettings)(f.n.AUTHORIZED_APPS_PANEL, {
      section: b.oAB.AUTHORIZED_APPS
    })
  };
  return (0, r.jsxs)("div", {
    className: O.header,
    children: [(0, r.jsxs)("div", {
      className: O.gameNamesHeader,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "text-strong",
        children: a
      }), (0, r.jsxs)(s.P3F, {
        onClick: d,
        className: O.manageGamesLink,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-xs/normal",
          color: "interactive-text-default",
          children: y.intl.format(y.t.oYaYOe, {})
        }), (0, r.jsx)(s.Fbu, {
          size: "xxs",
          color: s.TVs.colors.INTERACTIVE_TEXT_DEFAULT,
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

function T() {
  let e = d._j.useSetting();
  return (0, r.jsx)(m.U, {
    setting: E.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS,
    children: (0, r.jsx)(g.ZP, {
      title: y.intl.string(y.t.XpBObB),
      note: y.intl.format(y.t.oZsHTD, {
        helpdeskArticle: c.Z.getArticleURL(b.BhN.SLAYER_GAME_FRIENDS)
      }),
      value: e,
      onChange: d._j.updateSetting
    })
  })
}

function C() {
  let e = d.JG.useSetting(),
    t = e === a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e,
    n = [{
      name: y.intl.string(y.t.JIFnN9),
      value: a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL
    }, {
      name: y.intl.string(y.t.rRdsk1),
      value: a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME
    }, {
      name: y.intl.string(y.t.AolKwN),
      value: a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE
    }];
  return (0, r.jsxs)(m.U, {
    setting: E.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS,
    children: [(0, r.jsx)(m.H, {
      header: y.intl.string(y.t["ms+Tme"]),
      description: y.intl.string(y.t["4NN4+/"])
    }), (0, r.jsx)(s.FXm, {
      value: t,
      options: n,
      onChange: e => d.JG.updateSetting(e)
    })]
  })
}

function A() {
  return (0, r.jsxs)("div", {
    className: O.emptyContainer,
    children: [(0, r.jsx)(s.Text, {
      variant: "text-md/medium",
      color: "text-strong",
      className: O.noGamesConnectedText,
      children: y.intl.string(y.t["+0U77d"])
    }), (0, r.jsx)(s.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: y.intl.format(y.t.V8wClM, {
        helpdeskArticle: c.Z.getArticleURL(b.BhN.SOCIAL_LAYER_CONNECTIONS)
      })
    })]
  })
}

function N(e) {
  let {
    applications: t
  } = e;
  return t.length > 0 ? (0, r.jsx)(I, {
    applications: t
  }) : (0, r.jsx)(A, {})
}

function P() {
  let {
    showLoadingIndicator: e,
    slayerSdkApplications: t
  } = (0, p.Z)(true);
  return e ? (0, r.jsx)(s.$jN, {}) : (0, r.jsx)(N, {
    applications: t
  })
}

function w() {
  let {
    showLoadingIndicator: e,
    slayerSdkApplications: t
  } = (0, p.Z)(true);
  return (0, r.jsx)(h.Z, {
    children: e ? (0, r.jsx)(s.$jN, {}) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(N, {
        applications: t
      }), t.length > 0 && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(T, {}), (0, r.jsx)("div", {
          className: O.divider
        }), (0, r.jsx)(C, {})]
      })]
    })
  })
}