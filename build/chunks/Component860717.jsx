/** Chunk was on 77443 **/
/** chunk id: 860717, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => et
}), require("./467055.js"), require("./388685.js"), require("./35282.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk911969 = require("./911969.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk524995 = require("./524995.js"),
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

function A(e) {
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

function Z(e, t) {
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
let R = /{{(.*?)}}/g,
  G = [{
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
        content: "-# Highest Rank"
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
  return null != e && e.loadingState === s.f.LOADED_SUCCESS && null != e.width && null != e.height
}

function M(e) {
  let {
    component: t
  } = e;
  if (Array.isArray(t)) return F(t);
  switch (t.type) {
    case "HERO":
      let {
        body: n
      } = t, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = function(e, t) {
          if (null == e) return {};
          var n, r, i = {},
            l = Object.keys(e);
          for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
          return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
      }(t, ["body"]);
      return (0, r.jsx)(U, Z(A({}, i), {
        body: F(n)
      }));
    case "GRID":
      return (0, r.jsx)(W, {
        children: F(t.children)
      });
    case "FIELD":
      return (0, r.jsx)(H, {
        value: B(t.value),
        name: B(t.name)
      });
    case "TEXT":
      return (0, r.jsx)(z, A({}, t));
    case "TEXT_WITH_IMAGE":
      return (0, r.jsx)(K, A({}, t));
    case "SEPARATOR":
      return (0, r.jsx)(V, A({}, t));
    case "SOCIAL_PROOF":
      return (0, r.jsx)(q, {})
  }
}

function B(e, t) {
  return (0, r.jsx)(M, {
    component: e
  }, t)
}

function F(e) {
  return e.map((e, t) => B(e, t))
}

function U(e) {
  let {
    title: t,
    body: n,
    image: i,
    imagePlaceholder: l
  } = e;
  return (0, r.jsxs)("div", {
    className: N.heroSection,
    children: [(0, r.jsxs)("div", {
      className: N.heroBody,
      children: [(0, r.jsx)(c.Text, {
        variant: "text-lg/medium",
        className: N.heroTitle,
        children: null != t ? t : (0, r.jsx)("div", {
          className: N.textPlaceholder
        })
      }), (0, r.jsx)(y.U, {
        color: "muted",
        children: n
      })]
    }), L(i) ? (0, r.jsx)("div", {
      className: N.heroImageContainer,
      children: (0, r.jsx)(x.ZP, {
        src: i.proxyUrl,
        alt: "",
        width: i.width,
        height: i.height,
        responsive: true,
        className: N.heroImage
      })
    }) : null != l ? (0, r.jsx)("div", {
      className: N.heroImageContainer,
      children: (0, r.jsx)("img", {
        src: l,
        alt: "",
        className: N.heroImage
      })
    }) : (0, r.jsx)("div", {
      className: N.heroImagePlaceholder
    })]
  })
}

function W(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: N.grid,
    children: t
  })
}

function H(e) {
  let {
    name: t,
    value: n
  } = e;
  return (0, r.jsxs)("div", {
    children: [n, t]
  })
}

function z(e) {
  let {
    content: t
  } = e, n = i.useId(), l = (0, y._)();
  return null != t ? (0, r.jsx)(O.Z, {
    type: s.re.TEXT_DISPLAY,
    id: n,
    content: t,
    className: N.text
  }) : (0, r.jsx)("div", {
    className: a()(N.textPlaceholder, l.className)
  })
}

function K(e) {
  let {
    content: t,
    image: n,
    imagePosition: i
  } = e, l = (0, y._)(), o = L(n) ? (0, r.jsx)("div", {
    className: a()(N.image, l.className),
    "data-position": i,
    children: (0, r.jsx)(x.ZP, {
      src: n.proxyUrl,
      alt: "",
      width: n.width,
      height: n.height,
      responsive: true
    })
  }) : null == t ? (0, r.jsx)("div", {
    className: a()(N.imagePlaceholder, l.className)
  }) : null;
  return (0, r.jsxs)("div", {
    className: N.textWithImage,
    children: [null != o && "left" === i ? (0, r.jsxs)(r.Fragment, {
      children: [o, " "]
    }) : null, (0, r.jsx)(z, {
      content: t
    }), null != o && "right" === i ? (0, r.jsxs)(r.Fragment, {
      children: [" ", o]
    }) : null]
  })
}

function V(e) {
  let {
    size: t = "small",
    divider: n = false
  } = e, l = i.useId();
  return (0, r.jsx)(v.Z, {
    type: s.re.SEPARATOR,
    id: l,
    divider: n,
    spacing: "large" === t ? s.US.LARGE : s.US.SMALL
  })
}

function q() {
  let e = function() {
      let e = Chunk473749.useContext(Q);
      if (null == module) throw Error("ApplicationWidgetContext provider not found");
      return module
    }(),
    {
      game: t
    } = J(module.widget);
  return null == exports ? null : (0, Chunk54381.jsx)(Chunk919498.F, {
    className: Chunk18827.socialProof,
    applicationId: exports.id,
    guildId: module.guildId,
    channelId: module.channelId
  })
}

function Y(e, t) {
  if (null == e) return null;
  let n = e.split(R);
  if (1 === n.length) return n[0];
  if ("skeleton" === t.mode) return null;
  let r = "";
  for (let e = 0; e < n.length; e++) {
    let i = n[e];
    if (e % 2 == 0) {
      r += i;
      continue
    }
    let l = t.variables[i];
    null == l ? r += "––" : "unfurled_media" === l.type ? r += l.media.url : "number" === l.type ? r += t.numberFormat.format(l.value) : "string" === l.type && (r += l.value)
  }
  return r
}

function X(e, t) {
  var n, r;
  if (null == e || "skeleton" === t.mode) return null;
  let i = null == (r = e.match(R)) || null == (n = r[0]) ? true : n.slice(2, false);
  if (null == i) return null;
  let l = t.variables[i];
  return null == l || "unfurled_media" !== l.type ? null : l.media
}
let Q = Chunk473749.createContext(null);

function J(e) {
  return (0, o.cj)([g.Z, T.Z, w.Z], () => {
    let t = g.Z.getApplication(e.applicationId);
    return {
      application: t,
      game: null != t ? w.Z.getGameByApplication(t) : null,
      config: T.Z.getApplicationWidgetApplicationConfig(e.applicationId)
    }
  })
}

function $(e) {
  let {
    children: t,
    widget: n
  } = e;
  return (0, r.jsx)(h.am.Root, {
    containerInnerWidth: 396,
    children: (0, r.jsx)(b.Il, {
      applicationWidget: n,
      children: (0, r.jsx)(y.U, {
        size: "reduced",
        weight: "reduced",
        children: (0, r.jsx)("div", {
          className: N.container,
          children: t
        })
      })
    })
  })
}

function ee(e) {
  return (0, r.jsxs)(c.Kqy, {
    direction: "horizontal",
    gap: 24,
    padding: 12,
    fullWidth: false,
    className: N.cta,
    children: [(0, r.jsxs)(c.Kqy, {
      gap: 4,
      children: [e.showSuggestedForYou && (0, r.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        children: k.intl.string(k.t.zMUr6Z)
      }), (0, r.jsx)(c.Heading, {
        variant: "heading-sm/medium",
        color: "text-default",
        children: e.heading
      }), (0, r.jsx)(c.Text, {
        variant: "text-xs/normal",
        color: "text-subtle",
        children: e.content
      })]
    }), (0, r.jsx)(c.Kqy, {
      direction: "horizontal",
      gap: 12,
      align: "center",
      justify: "end",
      fullWidth: false,
      children: e.buttons
    })]
  })
}
let et = Object.assign(function(e) {
  let {
    trackUserProfileAction: t
  } = (0, E.KZ)(), {
    user: n,
    widget: l,
    cta: s,
    subtle: g = false
  } = e, b = (0, o.e7)([I.default], () => I.default.getId()) === n.id, {
    application: h,
    game: y,
    config: v
  } = J(l), O = null == h ? true : h.getIconURL(16), x = (0, _.O)(n.id).data, w = null == x ? true : x.find(e => e.application_id === l.applicationId), T = (0, m.Z)({
    location: "UserProfileApplicationWidget",
    applicationId: null == y ? true : y.id,
    source: p.m1.UserProfile,
    sourceUserId: n.id,
    trackEntryPointImpression: true
  }), {
    fetched: D,
    hasAlreadyLinked: R,
    canStartAuthorization: L,
    startAuthorization: B
  } = (0, f.F)(h), {
    analyticsLocations: F
  } = (0, d.ZP)(u.Z.USER_PROFILE_APPLICATION_WIDGET), U = i.useCallback(() => {
    L && (t({
      action: "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT",
      applicationId: l.applicationId
    }), B({
      analyticsLocations: F
    }))
  }, [L, B, t, l.applicationId, F]), W = null == s && D && !R && L, H = (0, r.jsxs)(r.Fragment, {
    children: [null != O ? (0, r.jsx)("img", {
      className: N.appIcon,
      src: O,
      width: 16,
      height: 16,
      alt: ""
    }) : (0, r.jsx)("span", {
      className: N.appIconPlaceholder
    }), (0, r.jsx)(c.Text, {
      variant: "text-sm/medium",
      children: (null == h ? true : h.name) != null ? h.name : (0, r.jsx)("div", {
        className: N.textPlaceholder
      })
    })]
  }), z = null == y ? (0, r.jsx)("div", {
    className: N.headerTitle,
    children: H
  }) : (0, r.jsx)(c.P3F, {
    className: a()(N.headerTitle, N.clickable),
    onClick: T,
    children: H
  }), K = (0, o.e7)([P.default], () => P.default.locale), V = i.useMemo(() => {
    let e = function(e, t, n) {
      var r, i, l;
      let a = new Intl.NumberFormat(n, {
        notation: "compact",
        compactDisplay: "short",
        roundingMode: "floor"
      });
      return null == e ? {
        mode: "skeleton",
        config: t,
        numberFormat: a
      } : {
        mode: "from_data",
        variables: Object.fromEntries(Object.entries(A({
          username: null == (r = e.profile) ? true : r.username
        }, null == (l = e.profile) || null == (i = l.data) ? true : i.primary)).filter(S.V5).map(e => {
          let [t, n] = e;
          if ("object" == typeof n) {
            if ("url" in n && "proxy_url" in n && "loading_state" in n) return [t, {
              type: "unfurled_media",
              media: (0, j.ym)(n)
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
        }).filter(S.lm)),
        config: t,
        numberFormat: a
      }
    }(null != w ? w : null, null != v ? v : null, K);
    return G.map(function t(n) {
      switch (n.type) {
        case "HERO":
          var r;
          return {
            type: "HERO", body: n.body.map(t), title: Y(n.title, e), image: X(n.image, e), imagePlaceholder: null == (r = e.config) ? true : r.hero_placeholder_image
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
            type: "TEXT", content: Y(n.content, e)
          };
        case "TEXT_WITH_IMAGE":
          return {
            type: "TEXT_WITH_IMAGE", content: Y(n.content, e), image: X(n.image, e), imagePosition: n.imagePosition
          };
        case "SEPARATOR":
        case "SOCIAL_PROOF":
          return n
      }
    })
  }, [v, w, K]);
  return (0, r.jsxs)(C.Z, Z(A({}, e), {
    userId: n.id,
    widget: l,
    className: a()(N.widgetContainer, g && N.subtle),
    headerTitle: z,
    headerClassName: N.header,
    additionalManageWidgetMenuItems: null != y ? (0, r.jsx)(c.sNh, {
      id: "view-game-profile",
      label: "View Game Profile",
      icon: c.iWm,
      action: T
    }) : null,
    children: [(0, r.jsx)(Q.Provider, {
      value: e,
      children: (0, r.jsx)($, {
        widget: l,
        children: (0, r.jsx)(M, {
          component: V
        })
      })
    }), b && (0, r.jsxs)("div", {
      className: N.footer,
      children: [null == x || null != w || W ? null : (0, r.jsxs)("div", {
        className: N.stillSyncing,
        children: [(0, r.jsx)(c.wGF, {
          size: "xxs"
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/medium",
          color: "text-subtle",
          children: k.intl.string(k.t.z5K4Uv)
        })]
      }), W ? (0, r.jsx)(ee, {
        heading: k.intl.string(k.t.UDPRLO),
        content: k.intl.string(k.t["OW/2al"]),
        buttons: (0, r.jsx)(c.Button, {
          text: k.intl.string(k.t.S0W8Z5),
          onClick: U
        })
      }) : s]
    })]
  }))
}, {
  Cta: ee
})