/** Chunk was on 94682 **/
/** chunk id: 605694, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => $
}), require("./446912.js"), require("./896048.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk205338 = require("./205338.js"),
  Chunk87075 = require("./87075.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk155718 = require("./155718.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk362490 = require("./362490.js"),
  Chunk385771 = require("./385771.js"),
  Chunk789069 = require("./789069.js"),
  Chunk429913 = require("./429913.js"),
  Chunk409626 = require("./409626.js"),
  Chunk692969 = require("./692969.js"),
  Chunk207963 = require("./207963.jsx"),
  Chunk953756 = require("./953756.jsx"),
  Chunk647901 = require("./647901.jsx"),
  Chunk371068 = require("./371068.jsx"),
  Chunk61266 = require("./61266.jsx"),
  Chunk731068 = require("./731068.js"),
  Chunk619517 = require("./619517.jsx"),
  Chunk339580 = require("./339580.js"),
  Chunk961350 = require("./961350.js"),
  Chunk760751 = require("./760751.js"),
  Chunk403362 = require("./403362.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk622543 = require("./622543.js"),
  Chunk466853 = require("./466853.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk442716 = require("./442716.js");

function L(e) {
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

function G(e, t) {
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
let U = /{{(.*?)}}/g,
  M = {
    [Chunk205338.A.MARVEL_RIVALS]: [{
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
    [Chunk205338.A.WUTHERING_WAVES]: [{
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

function F(e) {
  let {
    component: t
  } = e;
  if (Array.isArray(t)) return B(t);
  switch (t.type) {
    case "HERO":
      let {
        body: n
      } = t, l = function(e, t) {
        if (null == e) return {};
        var n, r, l, i = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
          for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
          return i
        }
        if (i = function(e, t) {
            if (null == e) return {};
            var n, r, l = {},
              i = Object.getOwnPropertyNames(e);
            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l
          }(e, t), Object.getOwnPropertySymbols)
          for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i
      }(t, ["body"]);
      return (0, r.jsx)(W, G(L({}, l), {
        body: B(n)
      }));
    case "GRID":
      return (0, r.jsx)(X, {
        children: B(t.children)
      });
    case "FIELD":
      return (0, r.jsx)(K, {
        value: H(t.value),
        name: H(t.name)
      });
    case "TEXT":
      return (0, r.jsx)(z, L({}, t));
    case "TEXT_WITH_IMAGE":
      return (0, r.jsx)(V, L({}, t));
    case "SEPARATOR":
      return (0, r.jsx)(Y, L({}, t))
  }
}

function H(e, t) {
  return (0, r.jsx)(F, {
    component: e
  }, t)
}

function B(e) {
  return e.map((e, t) => H(e, t))
}

function W(e) {
  let {
    title: t,
    body: n,
    image: l,
    imagePlaceholder: i
  } = e;
  return (0, r.jsxs)("div", {
    className: D.mY,
    children: [(0, r.jsxs)("div", {
      className: D.TL,
      children: [(0, r.jsx)(u.Text, {
        variant: "text-lg/medium",
        className: D.ZY,
        children: null != t ? t : (0, r.jsx)("div", {
          className: D.jC
        })
      }), (0, r.jsx)(v.x, {
        color: "muted",
        children: n
      })]
    }), (0, b.c)(l) ? (0, r.jsx)("div", {
      className: D.Xr,
      children: (0, r.jsx)(w.Ay, {
        src: l.proxyUrl,
        alt: "",
        width: l.width,
        height: l.height,
        responsive: true,
        className: D.c8
      })
    }) : null != i ? (0, r.jsx)("div", {
      className: D.Xr,
      children: (0, r.jsx)("img", {
        src: i,
        alt: "",
        className: D.c8
      })
    }) : (0, r.jsx)("div", {
      className: D.Hi
    })]
  })
}

function X(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: D.Vg,
    children: t
  })
}

function K(e) {
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
  } = e, n = l.useId(), i = (0, v.X)();
  return null != t ? (0, r.jsx)(I.A, {
    type: d.I5.TEXT_DISPLAY,
    id: n,
    content: t,
    className: D.Qq
  }) : (0, r.jsx)("div", {
    className: a()(D.jC, i.className)
  })
}

function V(e) {
  let {
    content: t,
    image: n,
    imagePosition: l
  } = e, i = (0, v.X)(), o = (0, b.c)(n) ? (0, r.jsx)("div", {
    className: a()(D.Sl, i.className),
    "data-position": l,
    children: (0, r.jsx)(w.Ay, {
      src: n.proxyUrl,
      alt: "",
      width: n.width,
      height: n.height,
      responsive: true
    })
  }) : null == t ? (0, r.jsx)("div", {
    className: a()(D.bc, i.className)
  }) : null;
  return (0, r.jsxs)("div", {
    className: D.rQ,
    children: [null != o && "left" === l ? (0, r.jsxs)(r.Fragment, {
      children: [o, " "]
    }) : null, (0, r.jsx)(z, {
      content: t
    }), null != o && "right" === l ? (0, r.jsxs)(r.Fragment, {
      children: [" ", o]
    }) : null]
  })
}

function Y(e) {
  let {
    size: t = "small",
    divider: n = false
  } = e, i = l.useId();
  return (0, r.jsx)(_.A, {
    type: d.I5.SEPARATOR,
    id: i,
    divider: n,
    spacing: "large" === t ? d.C8.LARGE : d.C8.SMALL
  })
}

function q(e, t) {
  if (null == e) return null;
  let n = e.split(U);
  if (1 === n.length) return n[0];
  if ("skeleton" === t.mode) return null;
  let r = "";
  for (let e = 0; e < n.length; e++) {
    let l = n[e];
    if (e % 2 == 0) {
      r += l;
      continue
    }
    let i = t.variables[l];
    null == i ? r += "––" : "unfurled_media" === i.type ? r += i.media.url : "number" === i.type ? r += t.numberFormat.format(i.value) : "string" === i.type && (r += i.value)
  }
  return r
}

function J(e, t) {
  var n, r;
  if (null == e || "skeleton" === t.mode) return null;
  let l = null == (r = e.match(U)) || null == (n = r[0]) ? true : n.slice(2, false);
  if (null == l) return null;
  let i = t.variables[l];
  return null == i || "unfurled_media" !== i.type ? null : i.media
}

function Z(e) {
  let {
    children: t,
    widget: n
  } = e;
  return (0, r.jsx)(x.O7.Root, {
    containerInnerWidth: 396,
    children: (0, r.jsx)(h.f5, {
      applicationWidget: n,
      children: (0, r.jsx)(v.x, {
        size: "reduced",
        weight: "reduced",
        children: (0, r.jsx)("div", {
          className: D.kL,
          children: t
        })
      })
    })
  })
}

function Q(e) {
  return (0, r.jsxs)(u.BJc, {
    direction: "horizontal",
    gap: 24,
    padding: 12,
    fullWidth: false,
    className: D.lO,
    children: [(0, r.jsxs)(u.BJc, {
      gap: 4,
      children: [e.showSuggestedForYou && (0, r.jsx)(u.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        children: R.intl.string(R.t.zMUr6Z)
      }), (0, r.jsx)(u.Heading, {
        variant: "heading-sm/medium",
        color: "text-default",
        children: e.heading
      }), (0, r.jsx)(u.Text, {
        variant: "text-xs/normal",
        color: "text-subtle",
        children: e.content
      })]
    }), (0, r.jsx)(u.BJc, {
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
  var t, n;
  let i, o, d, b, h, {
      trackUserProfileAction: x
    } = (0, N.NJ)(),
    {
      user: v,
      widget: _,
      cta: I,
      subtle: w = false
    } = e,
    U = (0, c.bG)([E.default], () => E.default.getId()) === v.id,
    H = (0, y.h)(_.applicationId),
    B = null == H ? true : H.getIconURL(16),
    W = (0, c.bG)([S.A], () => null != H ? S.A.getGameByApplication(H) : null),
    X = (0, j.A)({
      location: "UserProfileApplicationWidget",
      applicationId: null == W ? true : W.id,
      source: O.Ob.UserProfile,
      sourceUserId: v.id,
      trackEntryPointImpression: true
    }),
    {
      fetched: K,
      hasAlreadyLinked: z,
      canStartAuthorization: V,
      startAuthorization: Y
    } = (0, g.RD)(H),
    {
      analyticsLocations: $
    } = (0, p.Ay)(f.A.USER_PROFILE_APPLICATION_WIDGET),
    ee = l.useCallback(() => {
      V && (x({
        action: "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT",
        applicationId: _.applicationId
      }), Y({
        analyticsLocations: $
      }))
    }, [V, Y, x, _.applicationId, $]),
    et = null == I && K && !z && V,
    en = (0, r.jsxs)(r.Fragment, {
      children: [null != B ? (0, r.jsx)("img", {
        className: D.Z2,
        src: B,
        width: 16,
        height: 16,
        alt: ""
      }) : (0, r.jsx)("span", {
        className: D.qP
      }), (0, r.jsx)(u.Text, {
        variant: "text-sm/medium",
        children: (null == H ? true : H.name) != null ? H.name : (0, r.jsx)("div", {
          className: D.jC
        })
      })]
    }),
    er = null == W ? (0, r.jsx)("div", {
      className: D.qd,
      children: en
    }) : (0, r.jsx)(u.DUT, {
      className: a()(D.qd, D.vk),
      onClick: X,
      children: en
    }),
    {
      isLoading: el,
      hasData: ei,
      components: ea
    } = (t = v.id, n = _.applicationId, i = (0, m.A)(), o = (0, c.bG)([P.A], () => P.A.getUserIdentityByApplication(t, n)), d = (0, c.bG)([C.A], () => C.A.getApplicationWidgetConfig(n)), b = (0, c.bG)([P.A, C.A], () => null == P.A.getUserIdentities(t) || null == C.A.applicationWidgetConfigs), h = l.useMemo(() => {
      var e, t, n, r, l, a, c, u, f;
      if (null == d) return null;
      let p = M[d.widgetTemplateId];
      if (null == p) return null;
      let g = (e = null != o ? o : null, t = null != d ? d : null, null == e ? {
        mode: "skeleton",
        config: t,
        numberFormat: i
      } : {
        mode: "from_data",
        variables: Object.fromEntries([...null != (n = null == (a = e.profile) || null == (l = a.data) || null == (r = l.dynamic) ? true : r.map(e => e.type === s.f.STRING ? [e.name, {
          type: "string",
          value: e.value
        }] : e.type === s.f.NUMBER ? [e.name, {
          type: "number",
          value: e.value
        }] : e.type === s.f.MEDIA ? [e.name, {
          type: "unfurled_media",
          media: (0, A.Uv)(e.value)
        }] : (0, T.xb)(e))) ? n : [], ...Object.entries(L({
          username: null == (c = e.profile) ? true : c.username
        }, null == (f = e.profile) || null == (u = f.data) ? true : u.primary)).filter(T.QE).map(e => {
          let [t, n] = e;
          if ("object" == typeof n) {
            if ("url" in n && "proxy_url" in n && "loading_state" in n) return [t, {
              type: "unfurled_media",
              media: (0, A.Uv)(n)
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
        }).filter(T.Vq)]),
        config: t,
        numberFormat: i
      });
      return p.map(function e(t) {
        switch (t.type) {
          case "HERO":
            var n;
            return {
              type: "HERO", body: t.body.map(e), title: q(t.title, g), image: J(t.image, g), imagePlaceholder: null == (n = g.config) ? true : n.heroPlaceholderImage
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
              type: "TEXT", content: q(t.content, g)
            };
          case "TEXT_WITH_IMAGE":
            return {
              type: "TEXT_WITH_IMAGE", content: q(t.content, g), image: J(t.image, g), imagePosition: t.imagePosition
            };
          case "SEPARATOR":
            return t
        }
      })
    }, [d, o, i]), {
      isLoading: b,
      hasData: null != o,
      components: h
    });
  return null == ea ? null : (0, r.jsxs)(k.A, G(L({}, e), {
    userId: v.id,
    widget: _,
    className: a()(D.Y5, w && D.aK),
    headerTitle: er,
    headerClassName: D.wx,
    additionalManageWidgetMenuItems: null != W ? (0, r.jsx)(u.Drp, {
      id: "view-game-profile",
      label: "View Game Profile",
      icon: u._xR,
      action: X
    }) : null,
    children: [(0, r.jsx)(Z, {
      widget: _,
      children: (0, r.jsx)(F, {
        component: ea
      })
    }), U && (0, r.jsxs)("div", {
      className: D.qr,
      children: [el || ei || et ? null : (0, r.jsxs)("div", {
        className: D.o8,
        children: [(0, r.jsx)(u.Qfk, {
          size: "xxs"
        }), (0, r.jsx)(u.Text, {
          variant: "text-sm/medium",
          color: "text-subtle",
          children: R.intl.string(R.t.z5K4Uv)
        })]
      }), et ? (0, r.jsx)(Q, {
        heading: R.intl.string(R.t.UDPRLO),
        content: R.intl.string(R.t["OW/2al"]),
        buttons: (0, r.jsx)(u.Button, {
          text: R.intl.string(R.t.S0W8Z5),
          onClick: ee
        })
      }) : I]
    })]
  }))
}, {
  Cta: Q
})