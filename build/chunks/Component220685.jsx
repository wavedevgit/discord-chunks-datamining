/** Chunk was on 54052 **/
/** chunk id: 220685, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./388685.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk215569 = require("./215569.js"),
  Chunk481060 = require("./481060.js"),
  Chunk484614 = require("./484614.jsx"),
  Chunk852860 = require("./852860.jsx"),
  Chunk782568 = require("./782568.js"),
  Chunk367907 = require("./367907.js"),
  Chunk674180 = require("./674180.js"),
  Chunk999382 = require("./999382.js"),
  Chunk626135 = require("./626135.js"),
  Chunk730647 = require("./730647.jsx"),
  Chunk584825 = require("./584825.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk618747 = require("./618747.js");
let C = [0xdb2389, 0xba2be9, 8804082, 6576370, 5335282, 2652110, 2128781, 2196594, 4752414, 0xc75a38, 0xc74138, 12401e3, 0xc5579d, 5659039, 4092591, 5868359, 6586142, 8876063, 8484432, 9979976, 5269106, 3421236],
  N = /^(https?:\/\/)?(?:m\.|www\.)?(youtu\.be|youtube\.com)\/(embed\/|v\/|watch\?v=|watch\?.+&v=)?((\w|-){11})(?:\S+)?$/,
  E = C[4],
  I = e => {
    var t, n;
    let {
      guild: l,
      canEnable: s
    } = e, c = (0, _.YB)(l.id), {
      loading: b,
      updateSubscriptionsSettings: j
    } = (0, _.QV)(), [I, S] = i.useState(l.features.has(v.oNc.CREATOR_STORE_PAGE)), [T, P] = i.useState(null != (t = null == c ? true : c.store_page_primary_color) ? t : E), [w, R] = i.useState(null == c ? true : c.store_page_trailer_url), Z = null == w || null != w.match(N), [D, A] = i.useState(null != (n = null == c ? true : c.store_page_show_subscriber_count) && n), L = i.useRef(null == c ? true : c.store_page_slug).current, k = I !== l.features.has(v.oNc.CREATOR_STORE_PAGE) || (null == c ? true : c.store_page_primary_color) == null && T !== E || (null == c ? true : c.store_page_primary_color) != null && T !== (null == c ? true : c.store_page_primary_color) || w !== (null == c ? true : c.store_page_trailer_url) || null != D && D !== (null == c ? true : c.store_page_show_subscriber_count), M = async () => {
      o()(null != c, "Settings must be defined");
      let e = {};
      I !== l.features.has(v.oNc.CREATOR_STORE_PAGE) && (e.store_page_enabled = I), ((null == c ? true : c.store_page_primary_color) == null && T !== E || (null == c ? true : c.store_page_primary_color) != null && T !== (null == c ? true : c.store_page_primary_color)) && (e.store_page_primary_color = T), w !== (null == c ? true : c.store_page_trailer_url) && (e.store_page_trailer_url = w), D !== (null == c ? true : c.store_page_show_subscriber_count) && (e.store_page_show_subscriber_count = D), Object.keys(e).length > 0 && (await j(l.id, e), "store_page_enabled" in e && x.default.track(v.rMx.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_TOGGLED, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({
        enabled: I
      }, (0, f.hH)(l.id))))
    }, G = v.EYA.ROLE_SUBSCRIPTION_STORE_PAGE(L), U = null != w && w === (null == c ? true : c.store_page_trailer_url), {
      shouldRestrictUpdatingCreatorMonetizationSettings: B
    } = (0, h.gX)(l.id), F = B || !Z;
    return (0, r.jsxs)("div", {
      children: [(0, r.jsx)(u.vwX, {
        tag: "h1",
        children: O.intl.string(O.t.N6Tg9P)
      }), (0, r.jsx)(u.R94, {
        type: u.R94.Types.DESCRIPTION,
        children: O.intl.string(O.t["uU/69/"])
      }), (0, r.jsx)(u.j7V, {
        className: y.enableSwitch,
        value: I,
        disabled: B || !I && !s,
        tooltipNote: I || s ? true : O.intl.string(O.t.mIgfEh),
        hideBorder: true,
        onChange: e => S(e),
        children: (0, r.jsx)(u.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: O.intl.string(O.t.lwvl1t)
        })
      }), (0, r.jsxs)(u.xJW, {
        title: O.intl.string(O.t.N46WOj),
        disabled: B,
        children: [(0, r.jsx)(m.Z, {
          value: G,
          className: a()({
            [y.disabled]: B
          })
        }), (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: y.openPageButton,
          children: (0, r.jsx)(u.zxk, {
            variant: "primary",
            text: O.intl.string(O.t.CaOYqa),
            onClick: () => (0, p.Z)(G),
            disabled: B
          })
        })]
      }), (0, r.jsx)(u.$i$, {
        className: y.divider
      }), (0, r.jsxs)(u.xJW, {
        title: O.intl.string(O.t.W39uIC),
        disabled: B,
        children: [(0, r.jsx)(u.R94, {
          disabled: B,
          color: "text-secondary",
          children: O.intl.string(O.t.B6XtEx)
        }), (0, r.jsxs)("div", {
          className: y.accentColorContainer,
          children: [(0, r.jsx)(u.Text, {
            variant: "text-md/medium",
            style: {
              backgroundColor: "#".concat(T.toString(16).padStart(6, "0"))
            },
            className: y.buttonPreview,
            children: O.intl.string(O.t.l6iM39)
          }), (0, r.jsx)(u.zH8, {
            colors: C,
            customColor: null,
            defaultColor: E,
            value: T,
            onChange: e => P(e),
            renderDefaultButton: () => null,
            renderCustomButton: () => null,
            colorContainerClassName: y.hideColorButtons,
            disabled: B
          })]
        })]
      }), (0, r.jsx)(u.$i$, {
        className: y.divider
      }), (0, r.jsx)(u.xJW, {
        disabled: B,
        children: (0, r.jsx)(u.oil, {
          label: O.intl.string(O.t.k2yRvb),
          description: O.intl.string(O.t["amd99/"]),
          value: null != w ? w : true,
          onChange: e => R("" === e ? null : e),
          error: Z ? null : O.intl.string(O.t["1kL79f"]),
          placeholder: O.intl.string(O.t["+I4gdX"]),
          trailing: Z && U ? u.owK : true,
          disabled: B
        })
      }), (0, r.jsx)(u.$i$, {
        className: y.divider
      }), (0, r.jsxs)(u.xJW, {
        title: O.intl.string(O.t.AU2HU1),
        disabled: B,
        children: [(0, r.jsx)(u.R94, {
          disabled: B,
          color: "text-secondary",
          children: O.intl.string(O.t.iWBt3d)
        }), (0, r.jsx)(u.j7V, {
          className: y.premiumMemberCountSwitchContainer,
          value: D,
          hideBorder: true,
          onChange: e => A(e),
          disabled: B,
          children: (0, r.jsxs)("div", {
            className: y.iconSwitchLabel,
            children: [(0, r.jsx)("div", {
              className: y.iconContainer,
              children: (0, r.jsx)(u.tBG, {
                size: "custom",
                color: "currentColor",
                width: 28,
                height: 28,
                className: y.premiumMemberCountIcon
              })
            }), (0, r.jsxs)("div", {
              children: [(0, r.jsx)(u.Text, {
                variant: "text-md/medium",
                color: "header-primary",
                children: O.intl.string(O.t.hJsAPj)
              }), (0, r.jsx)(u.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                children: O.intl.string(O.t.hn65ER)
              })]
            })]
          })
        })]
      }), (0, r.jsx)(d.W, {
        component: "div",
        className: y.contentRegion,
        children: k && (0, r.jsx)(u.oXn, {
          children: (0, r.jsx)(g.Z, {
            submitting: b,
            onReset: () => {
              var e, t;
              S(l.features.has(v.oNc.CREATOR_STORE_PAGE)), P(null != (e = null == c ? true : c.store_page_primary_color) ? e : E), R(null == c ? true : c.store_page_trailer_url), A(null != (t = null == c ? true : c.store_page_show_subscriber_count) && t)
            },
            onSave: M,
            disabled: F
          })
        })
      })]
    })
  };

function S() {
  let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()),
    t = (0, Chunk730647.f)(),
    n = (0, Chunk584825.qi)(null == module ? true : module.id).some(e => e.published);
  return null != module && exports ? (0, Chunk951288.jsx)(I, {
    guild: module,
    canEnable: require
  }) : (0, Chunk951288.jsx)(Chunk481060.$jN, {})
}

function T() {
  let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild());
  return (0, Chunk951288.jsx)(Chunk730647.l, {
    guildId: null == module ? true : module.id,
    refetchOnMount: true,
    children: (0, Chunk951288.jsx)(S, {})
  })
}