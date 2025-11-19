/** Chunk was on 52708 **/
/** chunk id: 860717, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ee
}), require("./467055.js"), require("./388685.js"), require("./35282.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk911969 = require("./911969.js"),
  Chunk535139 = require("./535139.js"),
  Chunk812206 = require("./812206.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk970184 = require("./970184.jsx"),
  Chunk197653 = require("./197653.jsx"),
  Chunk979372 = require("./979372.jsx"),
  Chunk676149 = require("./676149.jsx"),
  Chunk861529 = require("./861529.jsx"),
  Chunk768494 = require("./768494.js"),
  Chunk124347 = require("./124347.jsx"),
  Chunk929677 = require("./929677.js"),
  Chunk706454 = require("./706454.js"),
  Chunk314897 = require("./314897.js"),
  Chunk77498 = require("./77498.js"),
  Chunk823379 = require("./823379.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk621853 = require("./621853.js"),
  Chunk750312 = require("./750312.jsx"),
  Chunk919498 = require("./919498.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk18827 = require("./18827.js");

function N(e) {
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
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let Z = /{{(.*?)}}/g,
  R = [{
    type: "HERO",
    title: "{{username}}",
    image: "{{featured_played_character_image}}",
    body: [{
      type: "TEXT_WITH_IMAGE",
      content: "{{season}}: {{rank_name}}",
      image: "{{rank_image}}",
      imagePosition: "right"
    }, {
      type: "TEXT",
      content: "Top Hero: {{featured_played_character}}"
    }]
  }, {
    type: "SEPARATOR",
    divider: false
  }, {
    type: "SEPARATOR",
    divider: false
  }, {
    type: "GRID",
    children: [{
      type: "FIELD",
      value: {
        type: "TEXT_WITH_IMAGE",
        content: "**{{highest_rank}}**",
        image: "{{highest_rank_image}}",
        imagePosition: "right"
      },
      name: {
        type: "TEXT",
        content: "-# Season High"
      }
    }, {
      type: "FIELD",
      value: {
        type: "TEXT",
        content: "**{{playtime_hours}} Hours**"
      },
      name: {
        type: "TEXT",
        content: "-# Time Played"
      }
    }, {
      type: "FIELD",
      value: {
        type: "TEXT",
        content: "**{{total_games}}**"
      },
      name: {
        type: "TEXT",
        content: "-# Matches Played"
      }
    }]
  }, {
    type: "SEPARATOR",
    divider: false
  }, {
    type: "SEPARATOR",
    divider: false
  }, {
    type: "GRID",
    children: [{
      type: "FIELD",
      value: {
        type: "TEXT",
        content: "**{{total_wins}}**"
      },
      name: {
        type: "TEXT",
        content: "-# Wins"
      }
    }, {
      type: "FIELD",
      value: {
        type: "TEXT",
        content: "**{{total_kills}}**"
      },
      name: {
        type: "TEXT",
        content: "-# KOs"
      }
    }, {
      type: "FIELD",
      value: {
        type: "TEXT",
        content: "**{{total_assists}}**"
      },
      name: {
        type: "TEXT",
        content: "-# Assists"
      }
    }]
  }];

function L(e) {
  return null != e && e.loadingState === u.f.LOADED_SUCCESS && null != e.width && null != e.height
}

function M(e) {
  let {
    component: t
  } = e;
  if (Array.isArray(t)) return B(t);
  switch (t.type) {
    case "HERO":
      let {
        body: n
      } = t, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = function(e, t) {
          if (null == e) return {};
          var n, r, i = {},
            a = Object.keys(e);
          for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
          return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
      }(t, ["body"]);
      return (0, r.jsx)(F, A(N({}, i), {
        body: B(n)
      }));
    case "GRID":
      return (0, r.jsx)(U, {
        children: B(t.children)
      });
    case "FIELD":
      return (0, r.jsx)(W, {
        value: G(t.value),
        name: G(t.name)
      });
    case "TEXT":
      return (0, r.jsx)(H, N({}, t));
    case "TEXT_WITH_IMAGE":
      return (0, r.jsx)(z, N({}, t));
    case "SEPARATOR":
      return (0, r.jsx)(K, N({}, t));
    case "SOCIAL_PROOF":
      return (0, r.jsx)(V, {})
  }
}

function G(e, t) {
  return (0, r.jsx)(M, {
    component: e
  }, t)
}

function B(e) {
  return e.map((e, t) => G(e, t))
}

function F(e) {
  let {
    title: t,
    body: n,
    image: i,
    imagePlaceholder: a
  } = e;
  return (0, r.jsxs)("div", {
    className: k.heroSection,
    children: [(0, r.jsxs)("div", {
      className: k.heroBody,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-lg/medium",
        className: k.heroTitle,
        children: null != t ? t : (0, r.jsx)("div", {
          className: k.textPlaceholder
        })
      }), (0, r.jsx)(h.U, {
        color: "muted",
        children: n
      })]
    }), L(i) ? (0, r.jsx)("div", {
      className: k.heroImageContainer,
      children: (0, r.jsx)(j.ZP, {
        src: i.proxyUrl,
        alt: "",
        width: i.width,
        height: i.height,
        responsive: true,
        className: k.heroImage
      })
    }) : null != a ? (0, r.jsx)("div", {
      className: k.heroImageContainer,
      children: (0, r.jsx)("img", {
        src: a,
        alt: "",
        className: k.heroImage
      })
    }) : (0, r.jsx)("div", {
      className: k.heroImagePlaceholder
    })]
  })
}

function U(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: k.grid,
    children: t
  })
}

function W(e) {
  let {
    name: t,
    value: n
  } = e;
  return (0, r.jsxs)("div", {
    children: [n, t]
  })
}

function H(e) {
  let {
    content: t
  } = e, n = i.useId(), a = (0, h._)();
  return null != t ? (0, r.jsx)(O.Z, {
    type: u.re.TEXT_DISPLAY,
    id: n,
    content: t,
    className: k.text
  }) : (0, r.jsx)("div", {
    className: l()(k.textPlaceholder, a.className)
  })
}

function z(e) {
  let {
    content: t,
    image: n,
    imagePosition: i
  } = e, a = (0, h._)(), o = L(n) ? (0, r.jsx)("div", {
    className: l()(k.image, a.className),
    "data-position": i,
    children: (0, r.jsx)(j.ZP, {
      src: n.proxyUrl,
      alt: "",
      width: n.width,
      height: n.height,
      responsive: true
    })
  }) : null == t ? (0, r.jsx)("div", {
    className: l()(k.imagePlaceholder, a.className)
  }) : null;
  return (0, r.jsxs)("div", {
    className: k.textWithImage,
    children: [null != o && "left" === i ? (0, r.jsxs)(r.Fragment, {
      children: [o, " "]
    }) : null, (0, r.jsx)(H, {
      content: t
    }), null != o && "right" === i ? (0, r.jsxs)(r.Fragment, {
      children: [" ", o]
    }) : null]
  })
}

function K(e) {
  let {
    size: t = "small",
    divider: n = false
  } = e, a = i.useId();
  return (0, r.jsx)(y.Z, {
    type: u.re.SEPARATOR,
    id: a,
    divider: n,
    spacing: "large" === t ? u.US.LARGE : u.US.SMALL
  })
}

function V() {
  let e = function() {
      let e = Chunk473749.useContext(X);
      if (null == module) throw Error("ApplicationWidgetContext provider not found");
      return module
    }(),
    {
      game: t
    } = Q(module.widget);
  return null == exports ? null : (0, Chunk54381.jsx)(Chunk919498.Z, {
    className: Chunk18827.socialProof,
    applicationId: exports.id,
    guildId: module.guildId,
    channelId: module.channelId
  })
}

function q(e, t) {
  if (null == e) return null;
  let n = e.split(Z);
  if (1 === n.length) return n[0];
  if ("skeleton" === t.mode) return null;
  let r = "";
  for (let e = 0; e < n.length; e++) {
    let i = n[e];
    if (e % 2 == 0) {
      r += i;
      continue
    }
    let a = t.variables[i];
    null == a ? r += "––" : "unfurled_media" === a.type ? r += a.media.url : "number" === a.type ? r += t.numberFormat.format(a.value) : "string" === a.type && (r += a.value)
  }
  return r
}

function Y(e, t) {
  var n, r;
  if (null == e || "skeleton" === t.mode) return null;
  let i = null == (r = e.match(Z)) || null == (n = r[0]) ? true : n.slice(2, false);
  if (null == i) return null;
  let a = t.variables[i];
  return null == a || "unfurled_media" !== a.type ? null : a.media
}
let X = Chunk473749.createContext(null);

function Q(e) {
  return (0, o.cj)([f.Z, E.Z, I.Z], () => {
    let t = f.Z.getApplication(e.applicationId);
    return {
      application: t,
      game: null != t ? I.Z.getGameByApplication(t) : null,
      config: E.Z.getApplicationWidgetApplicationConfig(e.applicationId)
    }
  })
}

function J(e) {
  let {
    children: t,
    widget: n
  } = e;
  return (0, r.jsx)(b.am.Root, {
    containerInnerWidth: 396,
    children: (0, r.jsx)(m.Il, {
      applicationWidget: n,
      children: (0, r.jsx)(h.U, {
        size: "reduced",
        weight: "reduced",
        children: (0, r.jsx)("div", {
          className: k.container,
          children: t
        })
      })
    })
  })
}

function $(e) {
  return (0, r.jsxs)(s.Kqy, {
    direction: "horizontal",
    gap: 24,
    padding: 12,
    fullWidth: false,
    className: k.cta,
    children: [(0, r.jsxs)(s.Kqy, {
      gap: 4,
      children: [e.showSuggestedForYou && (0, r.jsx)(s.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        children: D.intl.string(D.t.zMUr6Z)
      }), (0, r.jsx)(s.Heading, {
        variant: "heading-sm/medium",
        color: "text-default",
        children: e.heading
      }), (0, r.jsx)(s.Text, {
        variant: "text-xs/normal",
        color: "text-secondary",
        children: e.content
      })]
    }), (0, r.jsx)(s.Kqy, {
      direction: "horizontal",
      gap: 12,
      align: "center",
      justify: "end",
      fullWidth: false,
      children: e.buttons
    })]
  })
}
let ee = Object.assign(function(e) {
  let {
    trackUserProfileAction: t
  } = (0, S.KZ)(), {
    user: n,
    widget: a,
    cta: u,
    subtle: f = false
  } = e, m = (0, o.e7)([P.default], () => P.default.getId()) === n.id, {
    application: b,
    game: h,
    config: y
  } = Q(a), O = null == b ? true : b.getIconURL(16), j = (0, x.O)(n.id).data, I = null == j ? true : j.find(e => e.application_id === a.applicationId), E = (0, p.Z)({
    location: "UserProfileApplicationWidget",
    applicationId: null == h ? true : h.id,
    source: g.m1.UserProfile,
    sourceUserId: n.id,
    trackEntryPointImpression: true
  }), {
    fetched: C,
    hasAlreadyLinked: Z,
    canStartAuthorization: L,
    startAuthorization: G
  } = (0, d.F)(b), B = i.useCallback(() => {
    L && (t({
      action: "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT",
      applicationId: a.applicationId
    }), G())
  }, [L, G, t, a.applicationId]), F = null == u && C && !Z && L, U = (0, r.jsxs)(r.Fragment, {
    children: [null != O ? (0, r.jsx)("img", {
      className: k.appIcon,
      src: O,
      width: 16,
      height: 16,
      alt: ""
    }) : (0, r.jsx)("span", {
      className: k.appIconPlaceholder
    }), (0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      children: (null == b ? true : b.name) != null ? b.name : (0, r.jsx)("div", {
        className: k.textPlaceholder
      })
    })]
  }), W = null == h ? (0, r.jsx)("div", {
    className: k.header,
    children: U
  }) : (0, r.jsx)(c.u, {
    asContainer: true,
    text: D.intl.string(D.t.ajHoOr),
    children: (0, r.jsx)(s.P3F, {
      className: l()(k.header, k.headerClickable),
      onClick: E,
      "aria-label": D.intl.string(D.t.ajHoOr),
      children: U
    })
  }), H = (0, o.e7)([_.default], () => _.default.locale), z = i.useMemo(() => {
    let e = function(e, t, n) {
      var r, i, a;
      let l = new Intl.NumberFormat(n, {
        notation: "compact",
        compactDisplay: "short",
        roundingMode: "floor"
      });
      return null == e ? {
        mode: "skeleton",
        config: t,
        numberFormat: l
      } : {
        mode: "from_data",
        variables: Object.fromEntries(Object.entries(N({
          username: null == (r = e.profile) ? true : r.username
        }, null == (a = e.profile) || null == (i = a.data) ? true : i.primary)).filter(w.V5).map(e => {
          let [t, n] = e;
          if ("object" == typeof n) {
            if ("url" in n && "proxy_url" in n && "loading_state" in n) return [t, {
              type: "unfurled_media",
              media: (0, v.ym)(n)
            }]
          } else if ("string" == typeof n) return [t, {
            type: "string",
            value: n
          }];
          else if ("number" == typeof n) return [t, {
            type: "number",
            value: n
          }];
          return null
        }).filter(w.lm)),
        config: t,
        numberFormat: l
      }
    }(null != I ? I : null, null != y ? y : null, H);
    return R.map(function t(n) {
      switch (n.type) {
        case "HERO":
          var r;
          return {
            type: "HERO", body: n.body.map(t), title: q(n.title, e), image: Y(n.image, e), imagePlaceholder: null == (r = e.config) ? true : r.hero_placeholder_image
          };
        case "GRID":
          return {
            type: "GRID", children: n.children.map(t)
          };
        case "FIELD":
          return {
            type: "FIELD", name: t(n.name), value: t(n.value)
          };
        case "TEXT":
          return {
            type: "TEXT", content: q(n.content, e)
          };
        case "TEXT_WITH_IMAGE":
          return {
            type: "TEXT_WITH_IMAGE", content: q(n.content, e), image: Y(n.image, e), imagePosition: n.imagePosition
          };
        case "SEPARATOR":
        case "SOCIAL_PROOF":
          return n
      }
    })
  }, [y, I, H]);
  return (0, r.jsxs)(T.Z, A(N({}, e), {
    userId: n.id,
    widget: a,
    className: l()(k.widgetContainer, f && k.subtle),
    headerTitle: W,
    additionalManageWidgetMenuItems: null != h ? (0, r.jsx)(s.sNh, {
      id: "view-game-profile",
      label: "View Game Profile",
      icon: s.iWm,
      action: E
    }) : null,
    children: [(0, r.jsx)(X.Provider, {
      value: e,
      children: (0, r.jsx)(J, {
        widget: a,
        children: (0, r.jsx)(M, {
          component: z
        })
      })
    }), m && (0, r.jsxs)("div", {
      className: k.footer,
      children: [null == j || null != I || F ? null : (0, r.jsxs)("div", {
        className: k.stillSyncing,
        children: [(0, r.jsx)(s.wGF, {
          size: "xxs"
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: D.intl.string(D.t.z5K4Uv)
        })]
      }), F ? (0, r.jsx)($, {
        heading: D.intl.string(D.t.UDPRLO),
        content: D.intl.string(D.t["OW/2al"]),
        buttons: (0, r.jsx)(s.Button, {
          text: D.intl.string(D.t.S0W8Z5),
          onClick: B
        })
      }) : u]
    })]
  }))
}, {
  Cta: $
})