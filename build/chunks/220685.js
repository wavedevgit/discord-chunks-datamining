/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => T
}), n(47120), n(301563);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(512722),
  o = n.n(l),
  c = n(392711),
  A = n.n(c),
  d = n(442837),
  u = n(692547),
  g = n(215569),
  f = n(481060),
  m = n(484614),
  p = n(852860),
  h = n(782568),
  C = n(367907),
  b = n(674180),
  v = n(999382),
  x = n(626135),
  N = n(730647),
  j = n(584825),
  E = n(981631),
  I = n(388032),
  O = n(260229);
let y = [0xdb2389, 0xba2be9, 8804082, 6576370, 5335282, 2652110, 2128781, 2196594, 4752414, 0xc75a38, 0xc74138, 12401e3, 0xc5579d, 5659039, 4092591, 5868359, 6586142, 8876063, 8484432, 9979976, 5269106, 3421236],
  w = /^(https?:\/\/)?(?:m\.|www\.)?(youtu\.be|youtube\.com)\/(embed\/|v\/|watch\?v=|watch\?.+&v=)?((\w|-){11})(?:\S+)?$/,
  P = y[4],
  B = e => {
    var t, n;
    let {
      guild: s,
      canEnable: l
    } = e, c = (0, j.YB)(s.id), {
      loading: d,
      updateSubscriptionsSettings: v
    } = (0, j.QV)(), [N, B] = i.useState(s.hasFeature(E.oNc.CREATOR_STORE_PAGE)), [D, T] = i.useState(null !== (t = null == c ? void 0 : c.store_page_primary_color) && void 0 !== t ? t : P), [S, L] = i.useState(null == c ? void 0 : c.store_page_trailer_url), R = null == S || null != S.match(w), [Q, Z] = i.useState(null !== (n = null == c ? void 0 : c.store_page_show_subscriber_count) && void 0 !== n && n), W = i.useRef(null == c ? void 0 : c.store_page_slug).current, k = N !== s.hasFeature(E.oNc.CREATOR_STORE_PAGE) || (null == c ? void 0 : c.store_page_primary_color) == null && D !== P || (null == c ? void 0 : c.store_page_primary_color) != null && D !== (null == c ? void 0 : c.store_page_primary_color) || S !== (null == c ? void 0 : c.store_page_trailer_url) || null != Q && Q !== (null == c ? void 0 : c.store_page_show_subscriber_count), M = async () => {
      o()(null != c, "Settings must be defined");
      let e = {};
      N !== s.hasFeature(E.oNc.CREATOR_STORE_PAGE) && (e.store_page_enabled = N), ((null == c ? void 0 : c.store_page_primary_color) == null && D !== P || (null == c ? void 0 : c.store_page_primary_color) != null && D !== (null == c ? void 0 : c.store_page_primary_color)) && (e.store_page_primary_color = D), S !== (null == c ? void 0 : c.store_page_trailer_url) && (e.store_page_trailer_url = S), Q !== (null == c ? void 0 : c.store_page_show_subscriber_count) && (e.store_page_show_subscriber_count = Q), !A().isEmpty(e) && (await v(s.id, e), "store_page_enabled" in e && x.default.track(E.rMx.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_TOGGLED, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = r
          })
        }
        return e
      }({
        enabled: N
      }, (0, C.hH)(s.id))))
    }, _ = E.EYA.ROLE_SUBSCRIPTION_STORE_PAGE(W), G = null != S && S === (null == c ? void 0 : c.store_page_trailer_url), {
      shouldRestrictUpdatingCreatorMonetizationSettings: F
    } = (0, b.gX)(s.id), U = F || !R;
    return (0, r.jsxs)("div", {
      children: [(0, r.jsx)(f.vwX, {
        tag: "h1",
        children: I.NW.string(I.t.N6Tg9P)
      }), (0, r.jsx)(f.R94, {
        type: f.R94.Types.DESCRIPTION,
        children: I.NW.string(I.t["uU/69/"])
      }), (0, r.jsx)(f.j7V, {
        className: O.enableSwitch,
        value: N,
        disabled: F || !N && !l,
        tooltipNote: N || l ? void 0 : I.NW.string(I.t.mIgfEh),
        hideBorder: !0,
        onChange: e => B(e),
        children: (0, r.jsx)(f.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: I.NW.string(I.t.lwvl1t)
        })
      }), (0, r.jsxs)(f.xJW, {
        title: I.NW.string(I.t.N46WOj),
        disabled: F,
        children: [(0, r.jsx)(m.Z, {
          value: _,
          className: a()({
            [O.disabled]: F
          })
        }), (0, r.jsx)(f.zxk, {
          onClick: () => (0, h.Z)(_),
          className: O.openPageButton,
          disabled: F,
          children: I.NW.string(I.t.CaOYqa)
        })]
      }), (0, r.jsx)(f.$i$, {
        className: O.divider
      }), (0, r.jsxs)(f.xJW, {
        title: I.NW.string(I.t.W39uIC),
        disabled: F,
        children: [(0, r.jsx)(f.R94, {
          disabled: F,
          children: I.NW.string(I.t.B6XtEx)
        }), (0, r.jsxs)("div", {
          className: O.accentColorContainer,
          children: [(0, r.jsx)(f.zxk, {
            onClick: () => null,
            color: f.zxk.Colors.CUSTOM,
            style: {
              backgroundColor: "#".concat(D.toString(16).padStart(6, "0"))
            },
            className: O.buttonPreview,
            disabled: F,
            children: I.NW.string(I.t.l6iM39)
          }), (0, r.jsx)(f.zH8, {
            colors: y,
            customColor: null,
            defaultColor: P,
            value: D,
            onChange: e => T(e),
            renderDefaultButton: () => null,
            renderCustomButton: () => null,
            colorContainerClassName: O.hideColorButtons,
            disabled: F
          })]
        })]
      }), (0, r.jsx)(f.$i$, {
        className: O.divider
      }), (0, r.jsxs)(f.xJW, {
        title: I.NW.string(I.t.k2yRvb),
        disabled: F,
        children: [(0, r.jsx)(f.R94, {
          disabled: F,
          children: I.NW.string(I.t["amd99/"])
        }), (0, r.jsx)(f.oil, {
          value: null != S ? S : void 0,
          onChange: e => L("" === e ? null : e),
          error: R ? null : I.NW.string(I.t["1kL79f"]),
          placeholder: I.NW.string(I.t["+I4gdX"]),
          className: O.trailerInputWrapper,
          inputClassName: a()(O.trailerInput, {
            [O.error]: !R,
            [O.trailerInputWithCheckmark]: G || !R
          }),
          prefixElement: R && G && (0, r.jsx)(f.owK, {
            size: "md",
            color: u.Z.unsafe_rawColors.BRAND_500.css,
            secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css,
            className: O.inputCheckmark
          }),
          disabled: F
        })]
      }), (0, r.jsx)(f.$i$, {
        className: O.divider
      }), (0, r.jsxs)(f.xJW, {
        title: I.NW.string(I.t.AU2HU1),
        disabled: F,
        children: [(0, r.jsx)(f.R94, {
          disabled: F,
          children: I.NW.string(I.t.iWBt3d)
        }), (0, r.jsx)(f.j7V, {
          className: O.premiumMemberCountSwitchContainer,
          value: Q,
          hideBorder: !0,
          onChange: e => Z(e),
          disabled: F,
          children: (0, r.jsxs)("div", {
            className: O.iconSwitchLabel,
            children: [(0, r.jsx)("div", {
              className: O.iconContainer,
              children: (0, r.jsx)(f.tBG, {
                size: "custom",
                color: "currentColor",
                width: 28,
                height: 28,
                className: O.premiumMemberCountIcon
              })
            }), (0, r.jsxs)("div", {
              children: [(0, r.jsx)(f.Text, {
                variant: "text-md/medium",
                color: "header-primary",
                children: I.NW.string(I.t.hJsAPj)
              }), (0, r.jsx)(f.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                children: I.NW.string(I.t.hn65ER)
              })]
            })]
          })
        })]
      }), (0, r.jsx)(g.W, {
        component: "div",
        className: O.contentRegion,
        children: k && (0, r.jsx)(f.oXn, {
          children: (0, r.jsx)(p.Z, {
            submitting: d,
            onReset: () => {
              var e, t;
              B(s.hasFeature(E.oNc.CREATOR_STORE_PAGE)), T(null !== (e = null == c ? void 0 : c.store_page_primary_color) && void 0 !== e ? e : P), L(null == c ? void 0 : c.store_page_trailer_url), Z(null !== (t = null == c ? void 0 : c.store_page_show_subscriber_count) && void 0 !== t && t)
            },
            onSave: M,
            disabled: U
          })
        })
      })]
    })
  };

function D() {
  let e = (0, d.e7)([v.Z], () => v.Z.getGuild()),
    t = (0, N.f)(),
    n = (0, j.qi)(null == e ? void 0 : e.id).some(e => e.published);
  return null != e && t ? (0, r.jsx)(B, {
    guild: e,
    canEnable: n
  }) : (0, r.jsx)(f.$jN, {})
}

function T() {
  let e = (0, d.e7)([v.Z], () => v.Z.getGuild());
  return (0, r.jsx)(N.l, {
    guildId: null == e ? void 0 : e.id,
    refetchOnMount: !0,
    children: (0, r.jsx)(D, {})
  })
}