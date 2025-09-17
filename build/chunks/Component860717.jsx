/** Chunk was on 37690 **/
/** chunk id: 860717, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk911969 = require("./911969.js"),
  Chunk812206 = require("./812206.js"),
  Chunk970184 = require("./970184.jsx"),
  Chunk197653 = require("./197653.jsx"),
  Chunk979372 = require("./979372.jsx"),
  Chunk676149 = require("./676149.jsx"),
  Chunk861529 = require("./861529.jsx"),
  Chunk929677 = require("./929677.js"),
  Chunk77498 = require("./77498.js"),
  Chunk750312 = require("./750312.jsx"),
  Chunk919498 = require("./919498.jsx"),
  Chunk18827 = require("./18827.js");

function h(e) {
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

function x(e, t) {
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

function P(e) {
  let {
    component: t
  } = e;
  if (Array.isArray(t)) return w(t);
  switch (t.type) {
    case "HERO":
      let {
        body: n
      } = t, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = function(e, t) {
          if (null == e) return {};
          var n, r, i = {},
            o = Object.keys(e);
          for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
          return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
      }(t, ["body"]);
      return (0, r.jsx)(E, x(h({}, i), {
        body: w(n)
      }));
    case "GRID":
      return (0, r.jsx)(I, {
        children: w(t.children)
      });
    case "FIELD":
      return (0, r.jsx)(S, {
        value: _(t.value),
        name: _(t.name)
      });
    case "TEXT":
      return (0, r.jsx)(T, h({}, t));
    case "TEXT_WITH_IMAGE":
      return (0, r.jsx)(D, h({}, t));
    case "SEPARATOR":
      return (0, r.jsx)(N, h({}, t));
    case "SOCIAL_PROOF":
      return (0, r.jsx)(A, {})
  }
}

function _(e, t) {
  return (0, r.jsx)(P, {
    component: e
  }, t)
}

function w(e) {
  return e.map((e, t) => _(e, t))
}

function E(e) {
  let {
    title: t,
    body: n,
    imageUrl: i
  } = e;
  return (0, r.jsxs)("div", {
    className: v.heroSection,
    style: {
      "--custom-filter-opacity": "opacity(0.5)"
    },
    children: [(0, r.jsxs)("div", {
      className: v.heroBody,
      children: [(0, r.jsx)(c.Text, {
        variant: "text-lg/medium",
        children: null != t ? t : (0, r.jsx)("div", {
          className: v.textPlaceholder
        })
      }), (0, r.jsx)(g.U, {
        color: "muted",
        children: n
      })]
    }), null != i ? (0, r.jsx)("div", {
      className: v.heroImageContainer,
      children: (0, r.jsx)("img", {
        src: i,
        alt: "",
        className: v.heroImage
      })
    }) : (0, r.jsx)("div", {
      className: v.heroImagePlaceholder
    })]
  })
}

function I(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: v.grid,
    children: t
  })
}

function S(e) {
  let {
    name: t,
    value: n
  } = e;
  return (0, r.jsxs)("div", {
    children: [n, t]
  })
}

function T(e) {
  let {
    content: t
  } = e, n = i.useId(), o = (0, g._)();
  return null != t ? (0, r.jsx)(b.Z, {
    type: s.re.TEXT_DISPLAY,
    id: n,
    content: t
  }) : (0, r.jsx)("div", {
    className: a()(v.textPlaceholder, o.className)
  })
}

function D(e) {
  let {
    content: t,
    imageUrl: n,
    imagePosition: i
  } = e, o = (0, g._)(), l = null != n ? (0, r.jsx)("img", {
    src: n,
    alt: "",
    className: a()(v.image, o.className)
  }) : (0, r.jsx)("div", {
    className: a()(v.imagePlaceholder, o.className)
  });
  return (0, r.jsxs)("div", {
    className: v.textWithImage,
    children: ["left" === i ? l : null, (0, r.jsx)(T, {
      content: t
    }), "right" === i ? l : null]
  })
}

function N(e) {
  let {
    size: t = "small",
    divider: n = false
  } = e, o = i.useId();
  return (0, r.jsx)(p.Z, {
    type: s.re.SEPARATOR,
    id: o,
    divider: n,
    spacing: "large" === t ? s.US.LARGE : s.US.SMALL
  })
}

function A() {
  let e = function() {
      let e = Chunk647438.useContext(k);
      if (null == module) throw Error("ApplicationWidgetContext provider not found");
      return module
    }(),
    {
      game: t
    } = C(module.widget);
  return null == exports ? null : (0, Chunk951288.jsx)(Chunk919498.Z, {
    className: Chunk18827.socialProof,
    applicationId: exports.id,
    guildId: module.guildId,
    channelId: module.channelId
  })
}
let k = Chunk647438.createContext(null);

function C(e) {
  let t = (0, l.e7)([u.Z], () => u.Z.getApplication(e.applicationId)),
    n = (0, l.e7)([O.Z], () => null != t ? O.Z.getGameByApplication(t) : null);
  return {
    application: t,
    game: n
  }
}

function R(e) {
  let {
    children: t,
    widget: n
  } = e;
  return (0, r.jsx)(f.am.Root, {
    containerInnerWidth: 396,
    children: (0, r.jsx)(d.Il, {
      applicationWidget: n,
      children: (0, r.jsx)(g.U, {
        size: "reduced",
        weight: "reduced",
        children: (0, r.jsx)("div", {
          className: v.container,
          children: t
        })
      })
    })
  })
}

function Z(e) {
  var t, n, i;
  let {
    user: o,
    widget: l,
    containerClassName: s
  } = e, {
    application: u
  } = C(l), d = null == u ? true : u.getIconURL(16), f = (0, m.O)(o.id).data, g = null == f ? true : f.find(e => e.application_id === l.applicationId), p = null == g || null == (n = g.profile) || null == (t = n.data) ? true : t.primary, b = (0, r.jsxs)("div", {
    className: v.header,
    children: [null != d ? (0, r.jsx)("img", {
      className: v.appIcon,
      src: d,
      width: 16,
      height: 16,
      alt: ""
    }) : (0, r.jsx)("span", {
      className: v.appIconPlaceholder
    }), (0, r.jsx)(c.Text, {
      variant: "text-sm/medium",
      children: (null == u ? true : u.name) != null ? u.name : (0, r.jsx)("div", {
        className: v.textPlaceholder
      })
    })]
  }), O = [{
    type: "HERO",
    title: null == g || null == (i = g.profile) ? true : i.username,
    imageUrl: null == p ? true : p.featured_played_character_img,
    body: [{
      type: "TEXT_WITH_IMAGE",
      content: (null == p ? true : p.highest_rank) != null ? null == p ? true : p.highest_rank : true,
      imageUrl: null == p ? true : p.highest_rank_img,
      imagePosition: "right"
    }, {
      type: "TEXT",
      content: (null == p ? true : p.featured_played_character) != null ? "Top Hero: ".concat(null == p ? true : p.featured_played_character) : true
    }, {
      type: "SOCIAL_PROOF"
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
        content: (null == p ? true : p.rank_name) != null ? "**".concat(null == p ? true : p.rank_name, "**") : true,
        imageUrl: null == p ? true : p.rank_img,
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
        content: (null == p ? true : p.playtime_hours) != null ? "**".concat(p.playtime_hours.toLocaleString(), " Hours**") : true
      },
      name: {
        type: "TEXT",
        content: "-# Time Played"
      }
    }, {
      type: "FIELD",
      value: {
        type: "TEXT",
        content: (null == p ? true : p.total_games) != null ? "**".concat(p.total_games.toLocaleString(), "**") : true
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
        content: (null == p ? true : p.total_wins) != null ? "**".concat(p.total_wins.toLocaleString(), "**") : true
      },
      name: {
        type: "TEXT",
        content: "-# Wins"
      }
    }, {
      type: "FIELD",
      value: {
        type: "TEXT",
        content: (null == p ? true : p.total_kills) != null ? "**".concat(p.total_kills.toLocaleString(), "**") : true
      },
      name: {
        type: "TEXT",
        content: "-# KOs"
      }
    }, {
      type: "FIELD",
      value: {
        type: "TEXT",
        content: (null == p ? true : p.total_assists) != null ? "**".concat(p.total_assists.toLocaleString(), "**") : true
      },
      name: {
        type: "TEXT",
        content: "-# Assists"
      }
    }]
  }];
  return (0, r.jsx)(y.Z, x(h({}, e), {
    userId: o.id,
    widget: l,
    className: a()(s, v.widgetContainer),
    headerTitle: b,
    children: (0, r.jsx)(k.Provider, {
      value: e,
      children: (0, r.jsx)(R, {
        widget: l,
        children: (0, r.jsx)(P, {
          component: O
        })
      })
    })
  }))
}