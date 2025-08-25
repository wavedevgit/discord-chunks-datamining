/** Chunk was on 52721 **/
/** chunk id: 220685, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
}), require("./388685.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk215569 = require("./215569.js"),
  Chunk755721 = require("./755721.js"),
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
  Chunk737543 = require("./737543.js");
let E = [0xdb2389, 0xba2be9, 8804082, 6576370, 5335282, 2652110, 2128781, 2196594, 4752414, 0xc75a38, 0xc74138, 12401e3, 0xc5579d, 5659039, 4092591, 5868359, 6586142, 8876063, 8484432, 9979976, 5269106, 3421236],
  I = /^(https?:\/\/)?(?:m\.|www\.)?(youtu\.be|youtube\.com)\/(embed\/|v\/|watch\?v=|watch\?.+&v=)?((\w|-){11})(?:\S+)?$/,
  S = E[4],
  T = e => {
    var t, n;
    let {
      guild: l,
      canEnable: s
    } = e, c = (0, O.YB)(l.id), {
      loading: j,
      updateSubscriptionsSettings: _
    } = (0, O.QV)(), [T, P] = i.useState(l.features.has(y.oNc.CREATOR_STORE_PAGE)), [w, R] = i.useState(null != (t = null == c ? true : c.store_page_primary_color) ? t : S), [Z, D] = i.useState(null == c ? true : c.store_page_trailer_url), A = null == Z || null != Z.match(I), [L, k] = i.useState(null != (n = null == c ? true : c.store_page_show_subscriber_count) && n), M = i.useRef(null == c ? true : c.store_page_slug).current, G = T !== l.features.has(y.oNc.CREATOR_STORE_PAGE) || (null == c ? true : c.store_page_primary_color) == null && w !== S || (null == c ? true : c.store_page_primary_color) != null && w !== (null == c ? true : c.store_page_primary_color) || Z !== (null == c ? true : c.store_page_trailer_url) || null != L && L !== (null == c ? true : c.store_page_show_subscriber_count), U = async () => {
      o()(null != c, "Settings must be defined");
      let e = {};
      T !== l.features.has(y.oNc.CREATOR_STORE_PAGE) && (e.store_page_enabled = T), ((null == c ? true : c.store_page_primary_color) == null && w !== S || (null == c ? true : c.store_page_primary_color) != null && w !== (null == c ? true : c.store_page_primary_color)) && (e.store_page_primary_color = w), Z !== (null == c ? true : c.store_page_trailer_url) && (e.store_page_trailer_url = Z), L !== (null == c ? true : c.store_page_show_subscriber_count) && (e.store_page_show_subscriber_count = L), Object.keys(e).length > 0 && (await _(l.id, e), "store_page_enabled" in e && v.default.track(y.rMx.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_TOGGLED, function(e) {
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
        enabled: T
      }, (0, b.hH)(l.id))))
    }, B = y.EYA.ROLE_SUBSCRIPTION_STORE_PAGE(M), F = null != Z && Z === (null == c ? true : c.store_page_trailer_url), {
      shouldRestrictUpdatingCreatorMonetizationSettings: H
    } = (0, x.gX)(l.id), z = H || !A;
    return (0, r.jsxs)("div", {
      children: [(0, r.jsx)(g.vwX, {
        tag: "h1",
        children: C.intl.string(C.t.N6Tg9P)
      }), (0, r.jsx)(g.R94, {
        type: g.R94.Types.DESCRIPTION,
        children: C.intl.string(C.t["uU/69/"])
      }), (0, r.jsx)(g.j7V, {
        className: N.enableSwitch,
        value: T,
        disabled: H || !T && !s,
        tooltipNote: T || s ? true : C.intl.string(C.t.mIgfEh),
        hideBorder: true,
        onChange: e => P(e),
        children: (0, r.jsx)(g.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: C.intl.string(C.t.lwvl1t)
        })
      }), (0, r.jsxs)(g.xJW, {
        title: C.intl.string(C.t.N46WOj),
        disabled: H,
        children: [(0, r.jsx)(p.Z, {
          value: B,
          className: a()({
            [N.disabled]: H
          })
        }), (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: N.openPageButton,
          children: (0, r.jsx)(g.zxk, {
            variant: "primary",
            text: C.intl.string(C.t.CaOYqa),
            onClick: () => (0, f.Z)(B),
            disabled: H
          })
        })]
      }), (0, r.jsx)(g.$i$, {
        className: N.divider
      }), (0, r.jsxs)(g.xJW, {
        title: C.intl.string(C.t.W39uIC),
        disabled: H,
        children: [(0, r.jsx)(g.R94, {
          disabled: H,
          children: C.intl.string(C.t.B6XtEx)
        }), (0, r.jsxs)("div", {
          className: N.accentColorContainer,
          children: [(0, r.jsx)(g.Text, {
            variant: "text-md/medium",
            style: {
              backgroundColor: "#".concat(w.toString(16).padStart(6, "0"))
            },
            className: N.buttonPreview,
            children: C.intl.string(C.t.l6iM39)
          }), (0, r.jsx)(g.zH8, {
            colors: E,
            customColor: null,
            defaultColor: S,
            value: w,
            onChange: e => R(e),
            renderDefaultButton: () => null,
            renderCustomButton: () => null,
            colorContainerClassName: N.hideColorButtons,
            disabled: H
          })]
        })]
      }), (0, r.jsx)(g.$i$, {
        className: N.divider
      }), (0, r.jsxs)(g.xJW, {
        title: C.intl.string(C.t.k2yRvb),
        disabled: H,
        children: [(0, r.jsx)(g.R94, {
          disabled: H,
          children: C.intl.string(C.t["amd99/"])
        }), (0, r.jsx)(m.Is, {
          value: null != Z ? Z : true,
          onChange: e => D("" === e ? null : e),
          error: A ? null : C.intl.string(C.t["1kL79f"]),
          placeholder: C.intl.string(C.t["+I4gdX"]),
          className: N.trailerInputWrapper,
          inputClassName: a()(N.trailerInput, {
            [N.error]: !A,
            [N.trailerInputWithCheckmark]: F || !A
          }),
          prefixElement: A && F && (0, r.jsx)(g.owK, {
            size: "md",
            color: d.Z.unsafe_rawColors.BRAND_500.css,
            secondaryColor: d.Z.unsafe_rawColors.WHITE_500.css,
            className: N.inputCheckmark
          }),
          disabled: H
        })]
      }), (0, r.jsx)(g.$i$, {
        className: N.divider
      }), (0, r.jsxs)(g.xJW, {
        title: C.intl.string(C.t.AU2HU1),
        disabled: H,
        children: [(0, r.jsx)(g.R94, {
          disabled: H,
          children: C.intl.string(C.t.iWBt3d)
        }), (0, r.jsx)(g.j7V, {
          className: N.premiumMemberCountSwitchContainer,
          value: L,
          hideBorder: true,
          onChange: e => k(e),
          disabled: H,
          children: (0, r.jsxs)("div", {
            className: N.iconSwitchLabel,
            children: [(0, r.jsx)("div", {
              className: N.iconContainer,
              children: (0, r.jsx)(g.tBG, {
                size: "custom",
                color: "currentColor",
                width: 28,
                height: 28,
                className: N.premiumMemberCountIcon
              })
            }), (0, r.jsxs)("div", {
              children: [(0, r.jsx)(g.Text, {
                variant: "text-md/medium",
                color: "header-primary",
                children: C.intl.string(C.t.hJsAPj)
              }), (0, r.jsx)(g.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                children: C.intl.string(C.t.hn65ER)
              })]
            })]
          })
        })]
      }), (0, r.jsx)(u.W, {
        component: "div",
        className: N.contentRegion,
        children: G && (0, r.jsx)(g.oXn, {
          children: (0, r.jsx)(h.Z, {
            submitting: j,
            onReset: () => {
              var e, t;
              P(l.features.has(y.oNc.CREATOR_STORE_PAGE)), R(null != (e = null == c ? true : c.store_page_primary_color) ? e : S), D(null == c ? true : c.store_page_trailer_url), k(null != (t = null == c ? true : c.store_page_show_subscriber_count) && t)
            },
            onSave: U,
            disabled: z
          })
        })
      })]
    })
  };

function P() {
  let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()),
    t = (0, Chunk730647.f)(),
    n = (0, Chunk584825.qi)(null == module ? true : module.id).some(e => e.published);
  return null != module && exports ? (0, Chunk951288.jsx)(T, {
    guild: module,
    canEnable: require
  }) : (0, Chunk951288.jsx)(Chunk481060.$jN, {})
}

function w() {
  let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild());
  return (0, Chunk951288.jsx)(Chunk730647.l, {
    guildId: null == module ? true : module.id,
    refetchOnMount: true,
    children: (0, Chunk951288.jsx)(P, {})
  })
}