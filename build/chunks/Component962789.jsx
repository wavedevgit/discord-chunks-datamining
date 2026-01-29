/** Chunk was on 2827 **/
/** chunk id: 962789, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => N,
  T: () => y
}), require("./638769.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk873298 = require("./873298.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk486020 = require("./486020.js"),
  Chunk975571 = require("./975571.js"),
  Chunk661191 = require("./661191.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk978304 = require("./978304.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk744479 = require("./744479.jsx"),
  Chunk871930 = require("./871930.jsx"),
  Chunk578746 = require("./578746.jsx"),
  Chunk531525 = require("./531525.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk419205 = require("./419205.js");

function C(e) {
  let {
    applications: t
  } = e, n = i.useMemo(() => t.sort((e, t) => d.default.compare(t.id, e.id)), [t]), l = i.useMemo(() => {
    let e = [];
    for (let t = 0; t < 3; t++) {
      let r = n[t];
      if (null == r) break;
      e.push(r.name)
    }
    let t = e.join(", "),
      i = n.length - 3;
    return i > 0 ? E.intl.format(E.t.sHFdTg, {
      gameList: t,
      plusMoreHook: (e, t) => (0, r.jsx)(a.Text, {
        tag: "span",
        variant: "text-sm/medium",
        color: "text-muted",
        children: E.intl.format(E.t["EADv+4"], {
          count: i
        })
      }, t)
    }) : e.join(", ")
  }, [n]), c = i.useMemo(() => {
    let e = [];
    for (let t = 0; t < 3; t++) {
      let i = n[t];
      if (null == i) break;
      let {
        icon: l,
        name: a,
        id: c
      } = i, d = o.Ay.getApplicationIconURL({
        id: c,
        icon: l
      });
      e.push((0, r.jsx)(s.m, {
        __unsupportedReactNodeAsText: a,
        children: (0, r.jsx)("img", {
          src: d,
          "aria-label": a,
          className: O.Kk
        })
      }, c))
    }
    let t = n.length - 3;
    return t > 0 && e.push((0, r.jsx)("div", {
      className: O.lK,
      children: (0, r.jsx)(a.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        children: "+".concat(t)
      })
    }, "omitted")), e
  }, [n]);
  return (0, r.jsxs)("div", {
    className: O.wx,
    children: [(0, r.jsxs)("div", {
      className: O.kX,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        color: "text-strong",
        children: l
      }), (0, r.jsxs)(a.DUT, {
        onClick: () => {
          (0, m.openUserSettings)(_.X.AUTHORIZED_APPS_PANEL, {
            section: h.nc_.AUTHORIZED_APPS
          })
        },
        className: O.bJ,
        children: [(0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "interactive-text-default",
          children: E.intl.format(E.t.oYaYOe, {})
        }), (0, r.jsx)(a._BQ, {
          size: "xxs",
          color: a.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
          className: O.g7
        })]
      })]
    }), (0, r.jsx)("div", {
      className: O.yF
    }), (0, r.jsx)("div", {
      className: O.lJ,
      children: c
    })]
  })
}

function x() {
  let e = u.Zk.useSetting();
  return (0, r.jsx)(A.h, {
    setting: b.H.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS,
    children: (0, r.jsx)(f.Ay, {
      title: E.intl.string(E.t.XpBObB),
      note: E.intl.format(E.t.oZsHTD, {
        helpdeskArticle: c.A.getArticleURL(h.MVz.SLAYER_GAME_FRIENDS)
      }),
      value: e,
      onChange: u.Zk.updateSetting
    })
  })
}

function S() {
  let e = u.TA.useSetting(),
    t = e === l.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? l.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e,
    n = [{
      name: E.intl.string(E.t.JIFnN9),
      value: l.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL
    }, {
      name: E.intl.string(E.t.rRdsk1),
      value: l.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME
    }, {
      name: E.intl.string(E.t.AolKwN),
      value: l.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE
    }];
  return (0, r.jsxs)(A.h, {
    setting: b.H.PRIVACY_AND_SAFETY_IN_GAME_DMS,
    children: [(0, r.jsx)(A._, {
      header: E.intl.string(E.t["ms+Tme"]),
      description: E.intl.string(E.t["4NN4+/"])
    }), (0, r.jsx)(a.z6M, {
      value: t,
      options: n,
      onChange: e => u.TA.updateSetting(e)
    })]
  })
}

function T() {
  return (0, r.jsxs)("div", {
    className: O.do,
    children: [(0, r.jsx)(a.Text, {
      variant: "text-md/medium",
      color: "text-strong",
      className: O.xV,
      children: E.intl.string(E.t["+0U77d"])
    }), (0, r.jsx)(a.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: E.intl.format(E.t.V8wClM, {
        helpdeskArticle: c.A.getArticleURL(h.MVz.SOCIAL_LAYER_CONNECTIONS)
      })
    })]
  })
}

function I(e) {
  let {
    applications: t
  } = e;
  return t.length > 0 ? (0, r.jsx)(C, {
    applications: t
  }) : (0, r.jsx)(T, {})
}

function y() {
  let {
    showLoadingIndicator: e,
    slayerSdkApplications: t
  } = (0, p.A)(true);
  return e ? (0, r.jsx)(a.y$y, {}) : (0, r.jsx)(I, {
    applications: t
  })
}

function N() {
  let {
    showLoadingIndicator: e,
    slayerSdkApplications: t
  } = (0, p.A)(true);
  return (0, r.jsx)(g.A, {
    children: e ? (0, r.jsx)(a.y$y, {}) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(I, {
        applications: t
      }), t.length > 0 && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(x, {}), (0, r.jsx)("div", {
          className: O.yF
        }), (0, r.jsx)(S, {})]
      })]
    })
  })
}