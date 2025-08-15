/** Chunk was on 30202 **/
/** chunk id: 901151, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./642613.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk524437 = require("./524437.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk768581 = require("./768581.js"),
  Chunk63063 = require("./63063.js"),
  Chunk709054 = require("./709054.js"),
  Chunk695346 = require("./695346.js"),
  Chunk749876 = require("./749876.js"),
  Chunk546957 = require("./546957.jsx"),
  Chunk838436 = require("./838436.jsx"),
  Chunk51331 = require("./51331.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk42101 = require("./42101.js");

function j(e) {
  let {
    applications: t
  } = e, n = r.useMemo(() => t.sort((e, t) => d.default.compare(t.id, e.id)), [t]), s = r.useMemo(() => {
    let e = [];
    for (let t = 0; t < 3; t++) {
      let i = n[t];
      if (null == i) break;
      e.push(i.name)
    }
    let t = e.join(", "),
      r = n.length - 3;
    return r > 0 ? x.intl.format(x.t.sHFdTk, {
      gameList: t,
      plusMoreHook: (e, t) => (0, i.jsx)(a.Text, {
        tag: "span",
        variant: "text-sm/medium",
        color: "text-muted",
        children: x.intl.format(x.t["EADv+/"], {
          count: r
        })
      }, t)
    }) : e.join(", ")
  }, [n]), c = r.useMemo(() => {
    let e = [];
    for (let t = 0; t < 3; t++) {
      let r = n[t];
      if (null == r) break;
      let {
        icon: s,
        name: l,
        id: c
      } = r, d = o.ZP.getApplicationIconURL({
        id: c,
        icon: s
      });
      e.push((0, i.jsx)(a.ua7, {
        text: l,
        children: e => (0, i.jsx)("img", function(e, t) {
          return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              n.push.apply(n, i)
            }
            return n
          })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }), e
        }(function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
              var i;
              i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = i
            })
          }
          return e
        }({}, e), {
          src: d,
          "aria-label": l,
          className: _.icon
        }))
      }, c))
    }
    let t = n.length - 3;
    return t > 0 && e.push((0, i.jsx)("div", {
      className: _.moreIcon,
      children: (0, i.jsx)(a.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        children: "+".concat(t)
      })
    }, "omitted")), e
  }, [n]), u = r.useCallback(() => {
    l.Z.open(b.oAB.AUTHORIZED_APPS)
  }, []);
  return (0, i.jsxs)("div", {
    className: _.header,
    children: [(0, i.jsxs)("div", {
      className: _.gameNamesHeader,
      children: [(0, i.jsx)(a.Text, {
        variant: "text-md/normal",
        color: "header-primary",
        children: s
      }), (0, i.jsxs)(a.P3F, {
        onClick: u,
        className: _.manageGamesLink,
        children: [(0, i.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "interactive-normal",
          children: x.intl.format(x.t.oYaYOT, {})
        }), (0, i.jsx)(a.Fbu, {
          size: "xxs",
          color: a.TVs.colors.INTERACTIVE_NORMAL,
          className: _.manageGamesChevron
        })]
      })]
    }), (0, i.jsx)("div", {
      className: _.divider
    }), (0, i.jsx)("div", {
      className: _.gameIcons,
      children: c
    })]
  })
}

function E() {
  let e = Chunk695346._j.useSetting();
  return (0, Chunk255367.jsx)(Chunk838436.U, {
    setting: Chunk726985.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS,
    children: (0, Chunk255367.jsx)(Chunk51331.Z, {
      title: Chunk388032.intl.string(Chunk388032.t.XpBObG),
      note: Chunk388032.intl.format(Chunk388032.t.oZsHTE, {
        helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.SLAYER_GAME_FRIENDS)
      }),
      value: module,
      onChange: Chunk695346._j.updateSetting
    })
  })
}

function C() {
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
  return (0, Chunk255367.jsxs)(Chunk838436.U, {
    setting: Chunk726985.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS,
    children: [(0, Chunk255367.jsx)(Chunk838436.H, {
      header: Chunk388032.intl.string(Chunk388032.t["ms+TmZ"]),
      description: Chunk388032.intl.string(Chunk388032.t["4NN4+/"])
    }), (0, Chunk255367.jsx)(Chunk481060.FXm, {
      value: exports,
      options: require,
      onChange: e => {
        let {
          value: t
        } = e;
        return u.JG.updateSetting(t)
      }
    })]
  })
}

function O() {
  let {
    showLoadingIndicator: e,
    slayerSdkApplications: t
  } = (0, Chunk749876.Z)(true);
  return (0, Chunk255367.jsx)(Chunk546957.Z, {
    children: module ? (0, Chunk255367.jsx)(Chunk481060.$jN, {}) : exports.length > 0 ? (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
      children: [(0, Chunk255367.jsx)(j, {
        applications: exports
      }), (0, Chunk255367.jsx)(E, {}), (0, Chunk255367.jsx)("div", {
        className: Chunk42101.divider
      }), (0, Chunk255367.jsx)(C, {})]
    }) : (0, Chunk255367.jsxs)("div", {
      className: Chunk42101.emptyContainer,
      children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        className: Chunk42101.noGamesConnectedText,
        children: Chunk388032.intl.string(Chunk388032.t["+0U77e"])
      }), (0, Chunk255367.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: Chunk388032.intl.format(Chunk388032.t.V8wClJ, {
          helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.SOCIAL_LAYER_CONNECTIONS)
        })
      })]
    })
  })
}