/** Chunk was on 56848 **/
/** chunk id: 860717, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => J
}), require("./467055.js"), require("./388685.js"), require("./35282.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk911969 = require("./911969.js"),
  Chunk20471 = require("./20471.js"),
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
  Chunk77498 = require("./77498.js"),
  Chunk823379 = require("./823379.js"),
  Chunk621853 = require("./621853.js"),
  Chunk750312 = require("./750312.jsx"),
  Chunk919498 = require("./919498.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk895652 = require("./895652.js");

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

function C(e, t) {
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
let k = /{{(.*?)}}/g,
  D = [{
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

function Z(e) {
  return null != e && e.loadingState === u.f.LOADED_SUCCESS && null != e.width && null != e.height
}

function _(e) {
  let {
    component: t
  } = e;
  if (Array.isArray(t)) return L(t);
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
      return (0, r.jsx)(G, C(N({}, i), {
        body: L(n)
      }));
    case "GRID":
      return (0, r.jsx)(U, {
        children: L(t.children)
      });
    case "FIELD":
      return (0, r.jsx)(M, {
        value: R(t.value),
        name: R(t.name)
      });
    case "TEXT":
      return (0, r.jsx)(W, N({}, t));
    case "TEXT_WITH_IMAGE":
      return (0, r.jsx)(F, N({}, t));
    case "SEPARATOR":
      return (0, r.jsx)(B, N({}, t));
    case "SOCIAL_PROOF":
      return (0, r.jsx)(z, {})
  }
}

function R(e, t) {
  return (0, r.jsx)(_, {
    component: e
  }, t)
}

function L(e) {
  return e.map((e, t) => R(e, t))
}

function G(e) {
  let {
    title: t,
    body: n,
    image: i,
    imagePlaceholder: l
  } = e;
  return (0, r.jsxs)("div", {
    className: A.heroSection,
    children: [(0, r.jsxs)("div", {
      className: A.heroBody,
      children: [(0, r.jsx)(c.Text, {
        variant: "text-lg/medium",
        className: A.heroTitle,
        children: null != t ? t : (0, r.jsx)("div", {
          className: A.textPlaceholder
        })
      }), (0, r.jsx)(v.U, {
        color: "muted",
        children: n
      })]
    }), Z(i) ? (0, r.jsx)("div", {
      className: A.heroImageContainer,
      children: (0, r.jsx)(O.ZP, {
        src: i.proxyUrl,
        alt: "",
        width: i.width,
        height: i.height,
        responsive: true,
        className: A.heroImage
      })
    }) : null != l ? (0, r.jsx)("div", {
      className: A.heroImageContainer,
      children: (0, r.jsx)("img", {
        src: l,
        alt: "",
        className: A.heroImage
      })
    }) : (0, r.jsx)("div", {
      className: A.heroImagePlaceholder
    })]
  })
}

function U(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: A.grid,
    children: t
  })
}

function M(e) {
  let {
    name: t,
    value: n
  } = e;
  return (0, r.jsxs)("div", {
    children: [n, t]
  })
}

function W(e) {
  let {
    content: t
  } = e, n = i.useId(), l = (0, v._)();
  return null != t ? (0, r.jsx)(b.Z, {
    type: u.re.TEXT_DISPLAY,
    id: n,
    content: t
  }) : (0, r.jsx)("div", {
    className: a()(A.textPlaceholder, l.className)
  })
}

function F(e) {
  let {
    content: t,
    image: n,
    imagePosition: i
  } = e, l = (0, v._)(), s = Z(n) ? (0, r.jsx)("div", {
    className: a()(A.image, l.className),
    children: (0, r.jsx)(O.ZP, {
      src: n.proxyUrl,
      alt: "",
      width: n.width,
      height: n.height,
      responsive: true
    })
  }) : null == t ? (0, r.jsx)("div", {
    className: a()(A.imagePlaceholder, l.className)
  }) : null;
  return (0, r.jsxs)("div", {
    className: A.textWithImage,
    children: ["left" === i ? s : null, (0, r.jsx)(W, {
      content: t
    }), "right" === i ? s : null]
  })
}

function B(e) {
  let {
    size: t = "small",
    divider: n = false
  } = e, l = i.useId();
  return (0, r.jsx)(y.Z, {
    type: u.re.SEPARATOR,
    id: l,
    divider: n,
    spacing: "large" === t ? u.US.LARGE : u.US.SMALL
  })
}

function z() {
  let e = function() {
      let e = Chunk647438.useContext(Y);
      if (null == module) throw Error("ApplicationWidgetContext provider not found");
      return module
    }(),
    {
      game: t
    } = q(module.widget);
  return null == exports ? null : (0, Chunk951288.jsx)(Chunk919498.Z, {
    className: Chunk895652.socialProof,
    applicationId: exports.id,
    guildId: module.guildId,
    channelId: module.channelId
  })
}

function H(e, t) {
  if (null == e) return null;
  let n = e.split(k);
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
    null == l ? r += "––" : "unfurled_media" === l.type ? r += l.media.url : "number" === l.type ? r += l.value.toLocaleString() : "string" === l.type && (r += l.value)
  }
  return r
}

function V(e, t) {
  var n, r;
  if (null == e || "skeleton" === t.mode) return null;
  let i = null == (r = e.match(k)) || null == (n = r[0]) ? true : n.slice(2, false);
  if (null == i) return null;
  let l = t.variables[i];
  return null == l || "unfurled_media" !== l.type ? null : l.media
}
let Y = Chunk647438.createContext(null);

function q(e) {
  return (0, s.cj)([f.Z, S.Z, P.Z], () => {
    let t = f.Z.getApplication(e.applicationId);
    return {
      application: t,
      game: null != t ? P.Z.getGameByApplication(t) : null,
      config: S.Z.getApplicationWidgetApplicationConfig(e.applicationId)
    }
  })
}

function X(e) {
  let {
    children: t,
    widget: n
  } = e;
  return (0, r.jsx)(h.am.Root, {
    containerInnerWidth: 396,
    children: (0, r.jsx)(m.Il, {
      applicationWidget: n,
      children: (0, r.jsx)(v.U, {
        size: "reduced",
        weight: "reduced",
        children: (0, r.jsx)("div", {
          className: A.container,
          children: t
        })
      })
    })
  })
}

function K(e) {
  return (0, r.jsxs)(c.Kqy, {
    direction: "horizontal",
    gap: 24,
    padding: 16,
    fullWidth: false,
    className: A.cta,
    children: [(0, r.jsxs)(c.Kqy, {
      gap: 4,
      children: [(0, r.jsx)(c.X6q, {
        variant: "heading-sm/medium",
        color: "text-default",
        children: e.heading
      }), (0, r.jsx)(c.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
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
let J = Object.assign(function(e) {
  let {
    user: t,
    widget: n,
    containerClassName: l,
    cta: s
  } = e, {
    application: u,
    game: f,
    config: m
  } = q(n), h = null == u ? true : u.getIconURL(16), v = (0, x.O)(t.id).data, y = null == v ? true : v.find(e => e.application_id === n.applicationId), b = (0, p.Z)({
    location: "UserProfileApplicationWidget",
    applicationId: null == f ? true : f.id,
    source: g.m1.UserProfile,
    sourceUserId: t.id,
    trackEntryPointImpression: true
  }), {
    loading: O,
    hasAlreadyLinked: P,
    canStartAuthorization: S,
    startAuthorization: E
  } = (0, d.FG)(u), k = null == s && !O && !P && S, Z = (0, r.jsxs)(r.Fragment, {
    children: [null != h ? (0, r.jsx)("img", {
      className: A.appIcon,
      src: h,
      width: 16,
      height: 16,
      alt: ""
    }) : (0, r.jsx)("span", {
      className: A.appIconPlaceholder
    }), (0, r.jsx)(c.Text, {
      variant: "text-sm/medium",
      children: (null == u ? true : u.name) != null ? u.name : (0, r.jsx)("div", {
        className: A.textPlaceholder
      })
    })]
  }), R = null == f ? (0, r.jsx)("div", {
    className: A.header,
    children: Z
  }) : (0, r.jsx)(o.u, {
    asContainer: true,
    text: T.intl.string(T.t.ajHoOj),
    children: (0, r.jsx)(c.P3F, {
      className: a()(A.header, A.headerClickable),
      onClick: b,
      "aria-label": T.intl.string(T.t.ajHoOj),
      children: Z
    })
  }), L = i.useMemo(() => {
    var e, t, n, r, i;
    let l = (e = null != y ? y : null, t = null != m ? m : null, null == e ? {
      mode: "skeleton",
      config: t
    } : {
      mode: "from_data",
      variables: Object.fromEntries(Object.entries(N({
        username: null == (n = e.profile) ? true : n.username
      }, null == (i = e.profile) || null == (r = i.data) ? true : r.primary)).filter(I.V5).map(e => {
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
      }).filter(I.lm)),
      config: t
    });
    return D.map(function e(t) {
      switch (t.type) {
        case "HERO":
          var n;
          return {
            type: "HERO", body: t.body.map(e), title: H(t.title, l), image: V(t.image, l), imagePlaceholder: null == (n = l.config) ? true : n.hero_placeholder_image
          };
        case "GRID":
          return {
            type: "GRID", children: t.children.map(e)
          };
        case "FIELD":
          return {
            type: "FIELD", name: e(t.name), value: e(t.value)
          };
        case "TEXT":
          return {
            type: "TEXT", content: H(t.content, l)
          };
        case "TEXT_WITH_IMAGE":
          return {
            type: "TEXT_WITH_IMAGE", content: H(t.content, l), image: V(t.image, l), imagePosition: t.imagePosition
          };
        case "SEPARATOR":
        case "SOCIAL_PROOF":
          return t
      }
    })
  }, [m, y]);
  return (0, r.jsxs)(w.Z, C(N({}, e), {
    userId: t.id,
    widget: n,
    className: a()(l, A.widgetContainer),
    headerTitle: R,
    dragHandleAdditionalMenuItems: null != f ? (0, r.jsx)(c.sNh, {
      id: "view-game-profile",
      label: "View Game Profile",
      icon: c.iWm,
      action: b
    }) : null,
    children: [(0, r.jsx)(Y.Provider, {
      value: e,
      children: (0, r.jsx)(X, {
        widget: n,
        children: (0, r.jsx)(_, {
          component: L
        })
      })
    }), (0, r.jsxs)("div", {
      className: A.footer,
      children: [null != y || k ? null : (0, r.jsxs)("div", {
        className: A.stillSyncing,
        children: [(0, r.jsx)(c.wGF, {
          size: "xxs"
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: T.intl.string(T.t.z5K4Ul)
        })]
      }), k ? (0, r.jsx)(K, {
        heading: T.intl.string(T.t.UDPRLC),
        content: T.intl.string(T.t["OW/2am"]),
        buttons: (0, r.jsx)(c.zxk, {
          text: T.intl.string(T.t.S0W8Z2),
          onClick: E
        })
      }) : s]
    })]
  }))
}, {
  Cta: K
})