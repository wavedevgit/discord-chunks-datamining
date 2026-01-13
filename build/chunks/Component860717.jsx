/** Chunk was on 90882 **/
/** chunk id: 860717, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => $
}), require("./467055.js"), require("./388685.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk818531 = require("./818531.js"),
  Chunk662290 = require("./662290.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk911969 = require("./911969.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk524995 = require("./524995.js"),
  Chunk330003 = require("./330003.js"),
  Chunk297146 = require("./297146.js"),
  Chunk835473 = require("./835473.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk970184 = require("./970184.jsx"),
  Chunk197653 = require("./197653.jsx"),
  Chunk979372 = require("./979372.jsx"),
  Chunk676149 = require("./676149.jsx"),
  Chunk861529 = require("./861529.jsx"),
  Chunk768494 = require("./768494.js"),
  Chunk124347 = require("./124347.jsx"),
  Chunk380221 = require("./380221.js"),
  Chunk314897 = require("./314897.js"),
  Chunk77498 = require("./77498.js"),
  Chunk823379 = require("./823379.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk621853 = require("./621853.js"),
  Chunk750312 = require("./750312.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk440653 = require("./440653.js");

function R(e) {
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

function L(e, t) {
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
let G = /{{(.*?)}}/g,
  B = {
    [Chunk818531.J.MARVEL_RIVALS]: [{
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
    }],
    [Chunk818531.J.WUTHERING_WAVES]: [{
      type: "HERO",
      title: "{{username}}",
      image: "{{featured_played_character_image}}",
      body: [{
        type: "TEXT",
        content: "Server: {{server_name}}"
      }, {
        type: "TEXT",
        content: "UID: {{user_id}}"
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
          content: "**{{union_level}}**"
        },
        name: {
          type: "TEXT",
          content: "-# Union Level"
        }
      }, {
        type: "FIELD",
        value: {
          type: "TEXT",
          content: "**{{total_resonators}}**"
        },
        name: {
          type: "TEXT",
          content: "-# Resonators"
        }
      }, {
        type: "FIELD",
        value: {
          type: "TEXT",
          content: "**{{total_achievements}}**"
        },
        name: {
          type: "TEXT",
          content: "-# Achievements"
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
          content: "**{{total_echoes}}**"
        },
        name: {
          type: "TEXT",
          content: "-# Echoes"
        }
      }, {
        type: "FIELD",
        value: {
          type: "TEXT",
          content: "**{{login_days}}**"
        },
        name: {
          type: "TEXT",
          content: "-# Login Days"
        }
      }, {
        type: "FIELD",
        value: {
          type: "TEXT",
          content: "**{{data_bank_level}}**"
        },
        name: {
          type: "TEXT",
          content: "-# Data Bank Level"
        }
      }]
    }]
  };

function M(e) {
  let {
    component: t
  } = e;
  if (Array.isArray(t)) return U(t);
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
      return (0, r.jsx)(W, L(R({}, i), {
        body: U(n)
      }));
    case "GRID":
      return (0, r.jsx)(H, {
        children: U(t.children)
      });
    case "FIELD":
      return (0, r.jsx)(z, {
        value: F(t.value),
        name: F(t.name)
      });
    case "TEXT":
      return (0, r.jsx)(K, R({}, t));
    case "TEXT_WITH_IMAGE":
      return (0, r.jsx)(q, R({}, t));
    case "SEPARATOR":
      return (0, r.jsx)(V, R({}, t))
  }
}

function F(e, t) {
  return (0, r.jsx)(M, {
    component: e
  }, t)
}

function U(e) {
  return e.map((e, t) => F(e, t))
}

function W(e) {
  let {
    title: t,
    body: n,
    image: i,
    imagePlaceholder: l
  } = e;
  return (0, r.jsxs)("div", {
    className: k.heroSection,
    children: [(0, r.jsxs)("div", {
      className: k.heroBody,
      children: [(0, r.jsx)(u.Text, {
        variant: "text-lg/medium",
        className: k.heroTitle,
        children: null != t ? t : (0, r.jsx)("div", {
          className: k.textPlaceholder
        })
      }), (0, r.jsx)(v.U, {
        color: "muted",
        children: n
      })]
    }), (0, b.d)(i) ? (0, r.jsx)("div", {
      className: k.heroImageContainer,
      children: (0, r.jsx)(E.ZP, {
        src: i.proxyUrl,
        alt: "",
        width: i.width,
        height: i.height,
        responsive: true,
        className: k.heroImage
      })
    }) : null != l ? (0, r.jsx)("div", {
      className: k.heroImageContainer,
      children: (0, r.jsx)("img", {
        src: l,
        alt: "",
        className: k.heroImage
      })
    }) : (0, r.jsx)("div", {
      className: k.heroImagePlaceholder
    })]
  })
}

function H(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: k.grid,
    children: t
  })
}

function z(e) {
  let {
    name: t,
    value: n
  } = e;
  return (0, r.jsxs)("div", {
    children: [n, t]
  })
}

function K(e) {
  let {
    content: t
  } = e, n = i.useId(), l = (0, v._)();
  return null != t ? (0, r.jsx)(I.Z, {
    type: d.re.TEXT_DISPLAY,
    id: n,
    content: t,
    className: k.text
  }) : (0, r.jsx)("div", {
    className: a()(k.textPlaceholder, l.className)
  })
}

function q(e) {
  let {
    content: t,
    image: n,
    imagePosition: i
  } = e, l = (0, v._)(), o = (0, b.d)(n) ? (0, r.jsx)("div", {
    className: a()(k.image, l.className),
    "data-position": i,
    children: (0, r.jsx)(E.ZP, {
      src: n.proxyUrl,
      alt: "",
      width: n.width,
      height: n.height,
      responsive: true
    })
  }) : null == t ? (0, r.jsx)("div", {
    className: a()(k.imagePlaceholder, l.className)
  }) : null;
  return (0, r.jsxs)("div", {
    className: k.textWithImage,
    children: [null != o && "left" === i ? (0, r.jsxs)(r.Fragment, {
      children: [o, " "]
    }) : null, (0, r.jsx)(K, {
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
  return (0, r.jsx)(P.Z, {
    type: d.re.SEPARATOR,
    id: l,
    divider: n,
    spacing: "large" === t ? d.US.LARGE : d.US.SMALL
  })
}

function X(e, t) {
  if (null == e) return null;
  let n = e.split(G);
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

function Y(e, t) {
  var n, r;
  if (null == e || "skeleton" === t.mode) return null;
  let i = null == (r = e.match(G)) || null == (n = r[0]) ? true : n.slice(2, false);
  if (null == i) return null;
  let l = t.variables[i];
  return null == l || "unfurled_media" !== l.type ? null : l.media
}

function J(e) {
  let {
    children: t,
    widget: n
  } = e;
  return (0, r.jsx)(x.am.Root, {
    containerInnerWidth: 396,
    children: (0, r.jsx)(O.Il, {
      applicationWidget: n,
      children: (0, r.jsx)(v.U, {
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

function Q(e) {
  return (0, r.jsxs)(u.Kqy, {
    direction: "horizontal",
    gap: 24,
    padding: 12,
    fullWidth: false,
    className: k.cta,
    children: [(0, r.jsxs)(u.Kqy, {
      gap: 4,
      children: [e.showSuggestedForYou && (0, r.jsx)(u.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        children: D.intl.string(D.t.zMUr6Z)
      }), (0, r.jsx)(u.Heading, {
        variant: "heading-sm/medium",
        color: "text-default",
        children: e.heading
      }), (0, r.jsx)(u.Text, {
        variant: "text-xs/normal",
        color: "text-subtle",
        children: e.content
      })]
    }), (0, r.jsx)(u.Kqy, {
      direction: "horizontal",
      gap: 12,
      align: "center",
      justify: "end",
      fullWidth: false,
      children: e.buttons
    })]
  })
}
let $ = Object.assign(function(e) {
  let {
    trackUserProfileAction: t
  } = (0, N.KZ)(), {
    user: n,
    widget: l,
    cta: o,
    subtle: d = false
  } = e, b = (0, s.e7)([T.default], () => T.default.getId()) === n.id, O = (0, y.q)(l.applicationId), x = null == O ? true : O.getIconURL(16), v = (0, s.e7)([_.Z], () => null != O ? _.Z.getGameByApplication(O) : null), P = (0, j.Z)({
    location: "UserProfileApplicationWidget",
    applicationId: null == v ? true : v.id,
    source: h.m1.UserProfile,
    sourceUserId: n.id,
    trackEntryPointImpression: true
  }), {
    fetched: I,
    hasAlreadyLinked: E,
    canStartAuthorization: G,
    startAuthorization: F
  } = (0, p.FG)(O), {
    analyticsLocations: U
  } = (0, g.ZP)(f.Z.USER_PROFILE_APPLICATION_WIDGET), W = i.useCallback(() => {
    G && (t({
      action: "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT",
      applicationId: l.applicationId
    }), F({
      analyticsLocations: U
    }))
  }, [G, F, t, l.applicationId, U]), H = null == o && I && !E && G, z = (0, r.jsxs)(r.Fragment, {
    children: [null != x ? (0, r.jsx)("img", {
      className: k.appIcon,
      src: x,
      width: 16,
      height: 16,
      alt: ""
    }) : (0, r.jsx)("span", {
      className: k.appIconPlaceholder
    }), (0, r.jsx)(u.Text, {
      variant: "text-sm/medium",
      children: (null == O ? true : O.name) != null ? O.name : (0, r.jsx)("div", {
        className: k.textPlaceholder
      })
    })]
  }), K = null == v ? (0, r.jsx)("div", {
    className: k.headerTitle,
    children: z
  }) : (0, r.jsx)(u.P3F, {
    className: a()(k.headerTitle, k.clickable),
    onClick: P,
    children: z
  }), {
    isLoading: q,
    hasData: V,
    components: $
  } = function(e, t) {
    let n = (0, m.Z)(),
      r = (0, s.e7)([S.Z], () => S.Z.getUserIdentityByApplication(e, t)),
      l = (0, s.e7)([Z.Z], () => Z.Z.getApplicationWidgetConfig(t)),
      a = (0, s.e7)([S.Z, Z.Z], () => null == S.Z.getUserIdentities(e) || null == Z.Z.applicationWidgetConfigs),
      o = i.useMemo(() => {
        var e, t, i, a, o, s, u, d, f;
        if (null == l) return null;
        let g = B[l.widgetTemplateId];
        if (null == g) return null;
        let p = (e = null != r ? r : null, t = null != l ? l : null, null == e ? {
          mode: "skeleton",
          config: t,
          numberFormat: n
        } : {
          mode: "from_data",
          variables: Object.fromEntries([...null != (f = null == (o = e.profile) || null == (a = o.data) || null == (i = a.dynamic) ? true : i.map(e => e.type === c.h.STRING ? [e.name, {
            type: "string",
            value: e.value
          }] : e.type === c.h.NUMBER ? [e.name, {
            type: "number",
            value: e.value
          }] : e.type === c.h.MEDIA ? [e.name, {
            type: "unfurled_media",
            media: (0, w.ym)(e.value)
          }] : (0, C.vE)(e))) ? f : [], ...Object.entries(R({
            username: null == (s = e.profile) ? true : s.username
          }, null == (d = e.profile) || null == (u = d.data) ? true : u.primary)).filter(C.V5).map(e => {
            let [t, n] = e;
            if ("object" == typeof n) {
              if ("url" in n && "proxy_url" in n && "loading_state" in n) return [t, {
                type: "unfurled_media",
                media: (0, w.ym)(n)
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
          }).filter(C.lm)]),
          config: t,
          numberFormat: n
        });
        return g.map(function e(t) {
          switch (t.type) {
            case "HERO":
              var n;
              return {
                type: "HERO", body: t.body.map(e), title: X(t.title, p), image: Y(t.image, p), imagePlaceholder: null == (n = p.config) ? true : n.heroPlaceholderImage
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
                type: "TEXT", content: X(t.content, p)
              };
            case "TEXT_WITH_IMAGE":
              return {
                type: "TEXT_WITH_IMAGE", content: X(t.content, p), image: Y(t.image, p), imagePosition: t.imagePosition
              };
            case "SEPARATOR":
              return t
          }
        })
      }, [l, r, n]);
    return {
      isLoading: a,
      hasData: null != r,
      components: o
    }
  }(n.id, l.applicationId);
  return null == $ ? null : (0, r.jsxs)(A.Z, L(R({}, e), {
    userId: n.id,
    widget: l,
    className: a()(k.widgetContainer, d && k.subtle),
    headerTitle: K,
    headerClassName: k.header,
    additionalManageWidgetMenuItems: null != v ? (0, r.jsx)(u.sNh, {
      id: "view-game-profile",
      label: "View Game Profile",
      icon: u.iWm,
      action: P
    }) : null,
    children: [(0, r.jsx)(J, {
      widget: l,
      children: (0, r.jsx)(M, {
        component: $
      })
    }), b && (0, r.jsxs)("div", {
      className: k.footer,
      children: [q || V || H ? null : (0, r.jsxs)("div", {
        className: k.stillSyncing,
        children: [(0, r.jsx)(u.wGF, {
          size: "xxs"
        }), (0, r.jsx)(u.Text, {
          variant: "text-sm/medium",
          color: "text-subtle",
          children: D.intl.string(D.t.z5K4Uv)
        })]
      }), H ? (0, r.jsx)(Q, {
        heading: D.intl.string(D.t.UDPRLO),
        content: D.intl.string(D.t["OW/2al"]),
        buttons: (0, r.jsx)(u.Button, {
          text: D.intl.string(D.t.S0W8Z5),
          onClick: W
        })
      }) : o]
    })]
  }))
}, {
  Cta: Q
})