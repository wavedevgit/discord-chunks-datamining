/** Chunk was on 47841 **/
/** chunk id: 7891, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => I
}), require("./896048.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  c = require.n(Chunk284009),
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
let E = [0xdb2389, 0xba2be9, 8804082, 6576370, 5335282, 2652110, 2128781, 2196594, 4752414, 0xc75a38, 0xc74138, 12401e3, 0xc5579d, 5659039, 4092591, 5868359, 6586142, 8876063, 8484432, 9979976, 5269106, 3421236],
  N = /^(https?:\/\/)?(?:m\.|www\.)?(youtu\.be|youtube\.com)\/(embed\/|v\/|watch\?v=|watch\?.+&v=)?((\w|-){11})(?:\S+)?$/,
  _ = E[4],
  S = e => {
    var t, n;
    let {
      guild: l,
      canEnable: a
    } = e, o = (0, O.Tq)(l.id), {
      loading: x,
      updateSubscriptionsSettings: j
    } = (0, O.KE)(), [S, T] = i.useState(l.features.has(y.GuildFeatures.CREATOR_STORE_PAGE)), [I, C] = i.useState(null != (t = null == o ? true : o.store_page_primary_color) ? t : _), [P, w] = i.useState(null == o ? true : o.store_page_trailer_url), R = null == P || null != P.match(N), [D, G] = i.useState(null != (n = null == o ? true : o.store_page_show_subscriber_count) && n), L = i.useRef(null == o ? true : o.store_page_slug).current, k = S !== l.features.has(y.GuildFeatures.CREATOR_STORE_PAGE) || (null == o ? true : o.store_page_primary_color) == null && I !== _ || (null == o ? true : o.store_page_primary_color) != null && I !== (null == o ? true : o.store_page_primary_color) || P !== (null == o ? true : o.store_page_trailer_url) || null != D && D !== (null == o ? true : o.store_page_show_subscriber_count), M = async () => {
      c()(null != o, "Settings must be defined");
      let e = {};
      S !== l.features.has(y.GuildFeatures.CREATOR_STORE_PAGE) && (e.store_page_enabled = S), ((null == o ? true : o.store_page_primary_color) == null && I !== _ || (null == o ? true : o.store_page_primary_color) != null && I !== (null == o ? true : o.store_page_primary_color)) && (e.store_page_primary_color = I), P !== (null == o ? true : o.store_page_trailer_url) && (e.store_page_trailer_url = P), D !== (null == o ? true : o.store_page_show_subscriber_count) && (e.store_page_show_subscriber_count = D), Object.keys(e).length > 0 && (await j(l.id, e), "store_page_enabled" in e && h.default.track(y.HAw.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_TOGGLED, function(e) {
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
      }, (0, m.H$)(l.id))))
    }, U = y.X7G.ROLE_SUBSCRIPTION_STORE_PAGE(L), F = null != P && P === (null == o ? true : o.store_page_trailer_url), {
      shouldRestrictUpdatingCreatorMonetizationSettings: B
    } = (0, p.nq)(l.id), H = B || !R, V = !S && !a;
    return (0, r.jsxs)(f.BJc, {
      gap: 24,
      children: [(0, r.jsx)(f.Heading, {
        variant: "heading-lg/semibold",
        children: v.intl.string(v.t.N6Tg9A)
      }), (0, r.jsxs)(f.BJc, {
        gap: 8,
        children: [(0, r.jsx)(f.dOG, {
          label: v.intl.string(v.t.lwvl1g),
          checked: S,
          disabled: B || V,
          description: v.intl.string(v.t["uU/69/"]),
          onChange: e => T(e)
        }), V ? (0, r.jsx)(f.po8, {
          messageType: f.YCn.WARNING,
          children: v.intl.string(v.t.mIgfEu)
        }) : null]
      }), (0, r.jsx)(f.cGx, {}), (0, r.jsxs)(f.D0$, {
        label: v.intl.string(v.t.N46WOv),
        disabled: B,
        children: [(0, r.jsx)(g.A, {
          value: U,
          className: s()({
            [A.r9]: B
          })
        }), (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: A.eZ,
          children: (0, r.jsx)(f.Button, {
            variant: "primary",
            text: v.intl.string(v.t.CaOYqc),
            onClick: () => (0, b.A)(U),
            disabled: B
          })
        })]
      }), (0, r.jsx)(f.cGx, {}), (0, r.jsx)(f.D0$, {
        label: v.intl.string(v.t.W39uIL),
        description: v.intl.string(v.t.B6XtE7),
        children: (0, r.jsxs)("div", {
          className: A.xu,
          children: [(0, r.jsx)(f.Text, {
            variant: "text-md/medium",
            style: {
              backgroundColor: "#".concat(I.toString(16).padStart(6, "0"))
            },
            className: A.pB,
            children: v.intl.string(v.t.l6iM36)
          }), (0, r.jsx)(f.skP, {
            colors: E,
            customColor: null,
            defaultColor: _,
            value: I,
            onChange: e => C(e),
            renderDefaultButton: () => null,
            renderCustomButton: () => null,
            colorContainerClassName: A.jP,
            disabled: B
          })]
        })
      }), (0, r.jsx)(f.cGx, {}), (0, r.jsx)(f.ksK, {
        label: v.intl.string(v.t.k2yRvd),
        description: v.intl.string(v.t.amd996),
        value: null != P ? P : true,
        onChange: e => w("" === e ? null : e),
        error: R ? null : v.intl.string(v.t["1kL79Q"]),
        placeholder: v.intl.string(v.t["+I4gdT"]),
        trailing: R && F ? f.yr3 : true,
        disabled: B
      }), (0, r.jsx)(f.cGx, {}), (0, r.jsx)(f.nVY, {
        label: v.intl.string(v.t.AU2HU0),
        description: v.intl.string(v.t.iWBt3Q),
        children: (0, r.jsx)(f.dOG, {
          label: v.intl.string(v.t.hJsAPo),
          description: v.intl.string(v.t.hn65ET),
          icon: f.nys,
          checked: D,
          onChange: e => G(e),
          disabled: B
        })
      }), (0, r.jsx)(d.F, {
        component: "div",
        className: A.se,
        children: k && (0, r.jsx)(f.FQk, {
          children: (0, r.jsx)(u.A, {
            submitting: x,
            onReset: () => {
              var e, t;
              T(l.features.has(y.GuildFeatures.CREATOR_STORE_PAGE)), C(null != (e = null == o ? true : o.store_page_primary_color) ? e : _), w(null == o ? true : o.store_page_trailer_url), G(null != (t = null == o ? true : o.store_page_show_subscriber_count) && t)
            },
            onSave: M,
            disabled: H
          })
        })
      })]
    })
  };

function T() {
  let e = (0, o.bG)([x.A], () => x.A.getGuild()),
    t = (0, j.X)(),
    n = (0, O.uP)(null == e ? true : e.id).some(e => e.published);
  return null != e && t ? (0, r.jsx)(S, {
    guild: e,
    canEnable: n
  }) : (0, r.jsx)(f.y$y, {})
}

function I() {
  let e = (0, o.bG)([x.A], () => x.A.getGuild());
  return (0, r.jsx)(j.H, {
    guildId: null == e ? true : e.id,
    refetchOnMount: true,
    children: (0, r.jsx)(T, {})
  })
}