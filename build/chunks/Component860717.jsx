/** Chunk was on 56848 **/
/** chunk id: 860717, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => z
}), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk911969 = require("./911969.js"),
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
  Chunk621853 = require("./621853.js"),
  Chunk750312 = require("./750312.jsx"),
  Chunk919498 = require("./919498.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk18827 = require("./18827.js");

function T(e) {
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

function N(e, t) {
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

function A(e) {
  return null != e && e.loadingState === u.f.LOADED_SUCCESS && null != e.width && null != e.height
}

function k(e) {
  let {
    component: t
  } = e;
  if (Array.isArray(t)) return Z(t);
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
      return (0, r.jsx)(D, N(T({}, i), {
        body: Z(n)
      }));
    case "GRID":
      return (0, r.jsx)(_, {
        children: Z(t.children)
      });
    case "FIELD":
      return (0, r.jsx)(L, {
        value: C(t.value),
        name: C(t.name)
      });
    case "TEXT":
      return (0, r.jsx)(R, T({}, t));
    case "TEXT_WITH_IMAGE":
      return (0, r.jsx)(G, T({}, t));
    case "SEPARATOR":
      return (0, r.jsx)(U, T({}, t));
    case "SOCIAL_PROOF":
      return (0, r.jsx)(M, {})
  }
}

function C(e, t) {
  return (0, r.jsx)(k, {
    component: e
  }, t)
}

function Z(e) {
  return e.map((e, t) => C(e, t))
}

function D(e) {
  let {
    title: t,
    body: n,
    image: i,
    imagePlaceholder: l
  } = e;
  return (0, r.jsxs)("div", {
    className: E.heroSection,
    children: [(0, r.jsxs)("div", {
      className: E.heroBody,
      children: [(0, r.jsx)(c.Text, {
        variant: "text-lg/medium",
        className: E.heroTitle,
        children: null != t ? t : (0, r.jsx)("div", {
          className: E.textPlaceholder
        })
      }), (0, r.jsx)(m.U, {
        color: "muted",
        children: n
      })]
    }), A(i) ? (0, r.jsx)("div", {
      className: E.heroImageContainer,
      children: (0, r.jsx)(b.ZP, {
        src: i.proxyUrl,
        alt: "",
        width: i.width,
        height: i.height,
        responsive: true,
        className: E.heroImage
      })
    }) : null != l ? (0, r.jsx)("div", {
      className: E.heroImageContainer,
      children: (0, r.jsx)("img", {
        src: l,
        alt: "",
        className: E.heroImage
      })
    }) : (0, r.jsx)("div", {
      className: E.heroImagePlaceholder
    })]
  })
}

function _(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: E.grid,
    children: t
  })
}

function L(e) {
  let {
    name: t,
    value: n
  } = e;
  return (0, r.jsxs)("div", {
    children: [n, t]
  })
}

function R(e) {
  let {
    content: t
  } = e, n = i.useId(), l = (0, m._)();
  return null != t ? (0, r.jsx)(y.Z, {
    type: u.re.TEXT_DISPLAY,
    id: n,
    content: t
  }) : (0, r.jsx)("div", {
    className: a()(E.textPlaceholder, l.className)
  })
}

function G(e) {
  let {
    content: t,
    image: n,
    imagePosition: i
  } = e, l = (0, m._)(), s = A(n) ? (0, r.jsx)("div", {
    className: a()(E.image, l.className),
    children: (0, r.jsx)(b.ZP, {
      src: n.proxyUrl,
      alt: "",
      width: n.width,
      height: n.height,
      responsive: true
    })
  }) : (0, r.jsx)("div", {
    className: a()(E.imagePlaceholder, l.className)
  });
  return (0, r.jsxs)("div", {
    className: E.textWithImage,
    children: ["left" === i ? s : null, (0, r.jsx)(R, {
      content: t
    }), "right" === i ? s : null]
  })
}

function U(e) {
  let {
    size: t = "small",
    divider: n = false
  } = e, l = i.useId();
  return (0, r.jsx)(v.Z, {
    type: u.re.SEPARATOR,
    id: l,
    divider: n,
    spacing: "large" === t ? u.US.LARGE : u.US.SMALL
  })
}

function M() {
  let e = function() {
      let e = Chunk647438.useContext(W);
      if (null == module) throw Error("ApplicationWidgetContext provider not found");
      return module
    }(),
    {
      game: t
    } = F(module.widget);
  return null == exports ? null : (0, Chunk951288.jsx)(Chunk919498.Z, {
    className: Chunk18827.socialProof,
    applicationId: exports.id,
    guildId: module.guildId,
    channelId: module.channelId
  })
}
let W = Chunk647438.createContext(null);

function F(e) {
  return (0, s.cj)([d.Z, P.Z, x.Z], () => {
    let t = d.Z.getApplication(e.applicationId);
    return {
      application: t,
      game: null != t ? x.Z.getGameByApplication(t) : null,
      config: P.Z.getApplicationWidgetApplicationConfig(e.applicationId)
    }
  })
}

function B(e) {
  let {
    children: t,
    widget: n
  } = e;
  return (0, r.jsx)(h.am.Root, {
    containerInnerWidth: 396,
    children: (0, r.jsx)(p.Il, {
      applicationWidget: n,
      children: (0, r.jsx)(m.U, {
        size: "reduced",
        weight: "reduced",
        children: (0, r.jsx)("div", {
          className: E.container,
          children: t
        })
      })
    })
  })
}

function z(e) {
  var t, n, i;
  let {
    user: l,
    widget: s,
    containerClassName: u,
    cta: d
  } = e, {
    application: p,
    game: h,
    config: m
  } = F(s), v = null == p ? true : p.getIconURL(16), y = (0, O.O)(l.id).data, b = null == y ? true : y.find(e => e.application_id === s.applicationId), x = null == b || null == (n = b.profile) || null == (t = n.data) ? true : t.primary, P = (0, g.Z)({
    location: "UserProfileApplicationWidget",
    applicationId: null == h ? true : h.id,
    source: f.m1.UserProfile,
    sourceUserId: l.id,
    trackEntryPointImpression: true
  }), S = (0, r.jsxs)(r.Fragment, {
    children: [null != v ? (0, r.jsx)("img", {
      className: E.appIcon,
      src: v,
      width: 16,
      height: 16,
      alt: ""
    }) : (0, r.jsx)("span", {
      className: E.appIconPlaceholder
    }), (0, r.jsx)(c.Text, {
      variant: "text-sm/medium",
      children: (null == p ? true : p.name) != null ? p.name : (0, r.jsx)("div", {
        className: E.textPlaceholder
      })
    })]
  }), A = null == h ? (0, r.jsx)("div", {
    className: E.header,
    children: S
  }) : (0, r.jsx)(o.u, {
    asContainer: true,
    text: w.intl.string(w.t.ajHoOj),
    children: (0, r.jsx)(c.P3F, {
      className: a()(E.header, E.headerClickable),
      onClick: P,
      "aria-label": w.intl.string(w.t.ajHoOj),
      children: S
    })
  }), C = [{
    type: "HERO",
    title: null == b || null == (i = b.profile) ? true : i.username,
    image: (null == x ? true : x.featured_played_character_image) != null ? (0, j.ym)(x.featured_played_character_image) : null,
    imagePlaceholder: null == m ? true : m.hero_placeholder_image,
    body: [{
      type: "TEXT_WITH_IMAGE",
      content: (null == x ? true : x.highest_rank) != null ? null == x ? true : x.highest_rank : true,
      image: (null == x ? true : x.highest_rank_image) != null ? (0, j.ym)(x.highest_rank_image) : true,
      imagePosition: "right"
    }, {
      type: "TEXT",
      content: (null == x ? true : x.featured_played_character) != null ? "Top Hero: ".concat(null == x ? true : x.featured_played_character) : true
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
        content: (null == x ? true : x.rank_name) != null ? "**".concat(null == x ? true : x.rank_name, "**") : true,
        image: (null == x ? true : x.rank_image) != null ? (0, j.ym)(x.rank_image) : true,
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
        content: (null == x ? true : x.playtime_hours) != null ? "**".concat(x.playtime_hours.toLocaleString(), " Hours**") : true
      },
      name: {
        type: "TEXT",
        content: "-# Time Played"
      }
    }, {
      type: "FIELD",
      value: {
        type: "TEXT",
        content: (null == x ? true : x.total_games) != null ? "**".concat(x.total_games.toLocaleString(), "**") : true
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
        content: (null == x ? true : x.total_wins) != null ? "**".concat(x.total_wins.toLocaleString(), "**") : true
      },
      name: {
        type: "TEXT",
        content: "-# Wins"
      }
    }, {
      type: "FIELD",
      value: {
        type: "TEXT",
        content: (null == x ? true : x.total_kills) != null ? "**".concat(x.total_kills.toLocaleString(), "**") : true
      },
      name: {
        type: "TEXT",
        content: "-# KOs"
      }
    }, {
      type: "FIELD",
      value: {
        type: "TEXT",
        content: (null == x ? true : x.total_assists) != null ? "**".concat(x.total_assists.toLocaleString(), "**") : true
      },
      name: {
        type: "TEXT",
        content: "-# Assists"
      }
    }]
  }];
  return (0, r.jsxs)(I.Z, N(T({}, e), {
    userId: l.id,
    widget: s,
    className: a()(u, E.widgetContainer),
    headerTitle: A,
    dragHandleAdditionalMenuItems: null != h ? (0, r.jsx)(c.sNh, {
      id: "view-game-profile",
      label: "View Game Profile",
      icon: c.iWm,
      action: P
    }) : null,
    children: [(0, r.jsx)(W.Provider, {
      value: e,
      children: (0, r.jsx)(B, {
        widget: s,
        children: (0, r.jsx)(k, {
          component: C
        })
      })
    }), (0, r.jsxs)("div", {
      className: E.footer,
      children: [null == b ? (0, r.jsxs)("div", {
        className: E.stillSyncing,
        children: [(0, r.jsx)(c.wGF, {
          size: "xxs"
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: w.intl.string(w.t.z5K4Ul)
        })]
      }) : null, d]
    })]
  }))
}