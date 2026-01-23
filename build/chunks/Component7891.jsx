/** Chunk was on 47841 **/
/** chunk id: 7891, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => T
}), require("./896048.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk73939 = require("./73939.js"),
  Chunk36525 = require("./36525.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk416052 = require("./416052.jsx"),
  Chunk975807 = require("./975807.js"),
  Chunk58149 = require("./58149.js"),
  Chunk465932 = require("./465932.js"),
  Chunk555337 = require("./555337.js"),
  Chunk954571 = require("./954571.js"),
  Chunk300233 = require("./300233.jsx"),
  Chunk599941 = require("./599941.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk218251 = require("./218251.js");
let A = [0xdb2389, 0xba2be9, 8804082, 6576370, 5335282, 2652110, 2128781, 2196594, 4752414, 0xc75a38, 0xc74138, 12401e3, 0xc5579d, 5659039, 4092591, 5868359, 6586142, 8876063, 8484432, 9979976, 5269106, 3421236],
  E = /^(https?:\/\/)?(?:m\.|www\.)?(youtu\.be|youtube\.com)\/(embed\/|v\/|watch\?v=|watch\?.+&v=)?((\w|-){11})(?:\S+)?$/,
  N = A[4],
  S = e => {
    var t, n;
    let {
      guild: l,
      canEnable: a
    } = e, c = (0, _.Tq)(l.id), {
      loading: h,
      updateSubscriptionsSettings: j
    } = (0, _.KE)(), [S, I] = i.useState(l.features.has(O.GuildFeatures.CREATOR_STORE_PAGE)), [T, C] = i.useState(null != (t = null == c ? true : c.store_page_primary_color) ? t : N), [P, w] = i.useState(null == c ? true : c.store_page_trailer_url), R = null == P || null != P.match(E), [D, G] = i.useState(null != (n = null == c ? true : c.store_page_show_subscriber_count) && n), L = i.useRef(null == c ? true : c.store_page_slug).current, k = S !== l.features.has(O.GuildFeatures.CREATOR_STORE_PAGE) || (null == c ? true : c.store_page_primary_color) == null && T !== N || (null == c ? true : c.store_page_primary_color) != null && T !== (null == c ? true : c.store_page_primary_color) || P !== (null == c ? true : c.store_page_trailer_url) || null != D && D !== (null == c ? true : c.store_page_show_subscriber_count), M = async () => {
      o()(null != c, "Settings must be defined");
      let e = {};
      S !== l.features.has(O.GuildFeatures.CREATOR_STORE_PAGE) && (e.store_page_enabled = S), ((null == c ? true : c.store_page_primary_color) == null && T !== N || (null == c ? true : c.store_page_primary_color) != null && T !== (null == c ? true : c.store_page_primary_color)) && (e.store_page_primary_color = T), P !== (null == c ? true : c.store_page_trailer_url) && (e.store_page_trailer_url = P), D !== (null == c ? true : c.store_page_show_subscriber_count) && (e.store_page_show_subscriber_count = D), Object.keys(e).length > 0 && (await j(l.id, e), "store_page_enabled" in e && x.default.track(O.HAw.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_TOGGLED, function(e) {
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
        enabled: S
      }, (0, f.H$)(l.id))))
    }, U = O.X7G.ROLE_SUBSCRIPTION_STORE_PAGE(L), B = null != P && P === (null == c ? true : c.store_page_trailer_url), {
      shouldRestrictUpdatingCreatorMonetizationSettings: F
    } = (0, b.nq)(l.id), H = F || !R, V = !S && !a;
    return (0, r.jsxs)(g.BJc, {
      gap: 24,
      children: [(0, r.jsx)(g.Heading, {
        variant: "heading-lg/semibold",
        children: v.intl.string(v.t.N6Tg9A)
      }), (0, r.jsxs)(g.BJc, {
        gap: 8,
        children: [(0, r.jsx)(g.dOG, {
          label: v.intl.string(v.t.lwvl1g),
          checked: S,
          disabled: F || V,
          description: v.intl.string(v.t["uU/69/"]),
          onChange: e => I(e)
        }), V ? (0, r.jsx)(g.po8, {
          messageType: g.YCn.WARNING,
          children: v.intl.string(v.t.mIgfEu)
        }) : null]
      }), (0, r.jsx)(g.cGx, {}), (0, r.jsxs)(g.D0$, {
        label: v.intl.string(v.t.N46WOv),
        disabled: F,
        children: [(0, r.jsx)(m.A, {
          value: U,
          className: s()({
            [y.r9]: F
          })
        }), (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: y.eZ,
          children: (0, r.jsx)(g.Button, {
            variant: "primary",
            text: v.intl.string(v.t.CaOYqc),
            onClick: () => (0, p.A)(U),
            disabled: F
          })
        })]
      }), (0, r.jsx)(g.cGx, {}), (0, r.jsx)(g.D0$, {
        label: v.intl.string(v.t.W39uIL),
        description: v.intl.string(v.t.B6XtE7),
        children: (0, r.jsxs)("div", {
          className: y.xu,
          children: [(0, r.jsx)(g.Text, {
            variant: "text-md/medium",
            style: {
              backgroundColor: "#".concat(T.toString(16).padStart(6, "0"))
            },
            className: y.pB,
            children: v.intl.string(v.t.l6iM36)
          }), (0, r.jsx)(g.skP, {
            colors: A,
            customColor: null,
            defaultColor: N,
            value: T,
            onChange: e => C(e),
            renderDefaultButton: () => null,
            renderCustomButton: () => null,
            colorContainerClassName: y.jP,
            disabled: F
          })]
        })
      }), (0, r.jsx)(g.cGx, {}), (0, r.jsx)(g.ksK, {
        label: v.intl.string(v.t.k2yRvd),
        description: v.intl.string(v.t.amd996),
        value: null != P ? P : true,
        onChange: e => w("" === e ? null : e),
        error: R ? null : v.intl.string(v.t["1kL79Q"]),
        placeholder: v.intl.string(v.t["+I4gdT"]),
        trailing: R && B ? g.yr3 : true,
        disabled: F
      }), (0, r.jsx)(g.cGx, {}), (0, r.jsx)(g.nVY, {
        label: v.intl.string(v.t.AU2HU0),
        description: v.intl.string(v.t.iWBt3Q),
        children: (0, r.jsx)(g.dOG, {
          label: v.intl.string(v.t.hJsAPo),
          description: v.intl.string(v.t.hn65ET),
          icon: g.nys,
          checked: D,
          onChange: e => G(e),
          disabled: F
        })
      }), (0, r.jsx)(d.F, {
        component: "div",
        className: y.se,
        children: k && (0, r.jsx)(g.FQk, {
          children: (0, r.jsx)(u.A, {
            submitting: h,
            onReset: () => {
              var e, t;
              I(l.features.has(O.GuildFeatures.CREATOR_STORE_PAGE)), C(null != (e = null == c ? true : c.store_page_primary_color) ? e : N), w(null == c ? true : c.store_page_trailer_url), G(null != (t = null == c ? true : c.store_page_show_subscriber_count) && t)
            },
            onSave: M,
            disabled: H
          })
        })
      })]
    })
  };

function I() {
  let e = (0, c.bG)([h.A], () => h.A.getGuild()),
    t = (0, j.X)(),
    n = (0, _.uP)(null == e ? true : e.id).some(e => e.published);
  return null != e && t ? (0, r.jsx)(S, {
    guild: e,
    canEnable: n
  }) : (0, r.jsx)(g.y$y, {})
}

function T() {
  let e = (0, c.bG)([h.A], () => h.A.getGuild());
  return (0, r.jsx)(j.H, {
    guildId: null == e ? true : e.id,
    refetchOnMount: true,
    children: (0, r.jsx)(I, {})
  })
}