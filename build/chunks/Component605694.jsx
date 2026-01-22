/** Chunk was on 38663 **/
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

function G(e) {
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
  if (Array.isArray(t)) return W(t);
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
      return (0, r.jsx)(B, L(G({}, l), {
        body: W(n)
      }));
    case "GRID":
      return (0, r.jsx)(H, {
        children: W(t.children)
      });
    case "FIELD":
      return (0, r.jsx)(K, {
        value: X(t.value),
        name: X(t.name)
      });
    case "TEXT":
      return (0, r.jsx)(z, G({}, t));
    case "TEXT_WITH_IMAGE":
      return (0, r.jsx)(V, G({}, t));
    case "SEPARATOR":
      return (0, r.jsx)(Y, G({}, t))
  }
}

function X(e, t) {
  return (0, r.jsx)(F, {
    component: e
  }, t)
}

function W(e) {
  return e.map((e, t) => X(e, t))
}

function B(e) {
  let {
    title: t,
    body: n,
    image: l,
    imagePlaceholder: i
  } = e;
  return (0, r.jsxs)("div", {
    className: k.mY,
    children: [(0, r.jsxs)("div", {
      className: k.TL,
      children: [(0, r.jsx)(u.Text, {
        variant: "text-lg/medium",
        className: k.ZY,
        children: null != t ? t : (0, r.jsx)("div", {
          className: k.jC
        })
      }), (0, r.jsx)(v.x, {
        color: "muted",
        children: n
      })]
    }), (0, m.c)(l) ? (0, r.jsx)("div", {
      className: k.Xr,
      children: (0, r.jsx)(P.Ay, {
        src: l.proxyUrl,
        alt: "",
        width: l.width,
        height: l.height,
        responsive: true,
        className: k.c8
      })
    }) : null != i ? (0, r.jsx)("div", {
      className: k.Xr,
      children: (0, r.jsx)("img", {
        src: i,
        alt: "",
        className: k.c8
      })
    }) : (0, r.jsx)("div", {
      className: k.Hi
    })]
  })
}

function H(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: k.Vg,
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
  return null != t ? (0, r.jsx)(w.A, {
    type: d.I5.TEXT_DISPLAY,
    id: n,
    content: t,
    className: k.Qq
  }) : (0, r.jsx)("div", {
    className: a()(k.jC, i.className)
  })
}

function V(e) {
  let {
    content: t,
    image: n,
    imagePosition: l
  } = e, i = (0, v.X)(), s = (0, m.c)(n) ? (0, r.jsx)("div", {
    className: a()(k.Sl, i.className),
    "data-position": l,
    children: (0, r.jsx)(P.Ay, {
      src: n.proxyUrl,
      alt: "",
      width: n.width,
      height: n.height,
      responsive: true
    })
  }) : null == t ? (0, r.jsx)("div", {
    className: a()(k.bc, i.className)
  }) : null;
  return (0, r.jsxs)("div", {
    className: k.rQ,
    children: [null != s && "left" === l ? (0, r.jsxs)(r.Fragment, {
      children: [s, " "]
    }) : null, (0, r.jsx)(z, {
      content: t
    }), null != s && "right" === l ? (0, r.jsxs)(r.Fragment, {
      children: [" ", s]
    }) : null]
  })
}

function Y(e) {
  let {
    size: t = "small",
    divider: n = false
  } = e, i = l.useId();
  return (0, r.jsx)(A.A, {
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

function Q(e) {
  let {
    children: t,
    widget: n
  } = e;
  return (0, r.jsx)(h.O7.Root, {
    containerInnerWidth: 396,
    children: (0, r.jsx)(x.f5, {
      applicationWidget: n,
      children: (0, r.jsx)(v.x, {
        size: "reduced",
        weight: "reduced",
        children: (0, r.jsx)("div", {
          className: k.kL,
          children: t
        })
      })
    })
  })
}

function Z(e) {
  return (0, r.jsxs)(u.BJc, {
    direction: "horizontal",
    gap: 24,
    padding: 12,
    fullWidth: false,
    className: k.lO,
    children: [(0, r.jsxs)(u.BJc, {
      gap: 4,
      children: [e.showSuggestedForYou && (0, r.jsx)(u.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        children: C.intl.string(C.t.zMUr6Z)
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
  let i, s, d, m, x, {
      trackUserProfileAction: h
    } = (0, N.NJ)(),
    {
      user: v,
      widget: A,
      cta: w,
      subtle: P = false
    } = e,
    U = (0, c.bG)([S.default], () => S.default.getId()) === v.id,
    X = (0, y.h)(A.applicationId),
    W = null == X ? true : X.getIconURL(16),
    B = (0, c.bG)([T.A], () => null != X ? T.A.getGameByApplication(X) : null),
    H = (0, j.A)({
      location: "UserProfileApplicationWidget",
      applicationId: null == B ? true : B.id,
      source: O.Ob.UserProfile,
      sourceUserId: v.id,
      trackEntryPointImpression: true
    }),
    {
      fetched: K,
      hasAlreadyLinked: z,
      canStartAuthorization: V,
      startAuthorization: Y
    } = (0, b.RD)(X),
    {
      analyticsLocations: $
    } = (0, p.Ay)(f.A.USER_PROFILE_APPLICATION_WIDGET),
    ee = l.useCallback(() => {
      V && (h({
        action: "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT",
        applicationId: A.applicationId
      }), Y({
        analyticsLocations: $
      }))
    }, [V, Y, h, A.applicationId, $]),
    et = null == w && K && !z && V,
    en = (0, r.jsxs)(r.Fragment, {
      children: [null != W ? (0, r.jsx)("img", {
        className: k.Z2,
        src: W,
        width: 16,
        height: 16,
        alt: ""
      }) : (0, r.jsx)("span", {
        className: k.qP
      }), (0, r.jsx)(u.Text, {
        variant: "text-sm/medium",
        children: (null == X ? true : X.name) != null ? X.name : (0, r.jsx)("div", {
          className: k.jC
        })
      })]
    }),
    er = null == B ? (0, r.jsx)("div", {
      className: k.qd,
      children: en
    }) : (0, r.jsx)(u.DUT, {
      className: a()(k.qd, k.vk),
      onClick: H,
      children: en
    }),
    {
      isLoading: el,
      hasData: ei,
      components: ea
    } = (t = v.id, n = A.applicationId, i = (0, g.A)(), s = (0, c.bG)([E.A], () => E.A.getUserIdentityByApplication(t, n)), d = (0, c.bG)([D.A], () => D.A.getApplicationWidgetConfig(n)), m = (0, c.bG)([E.A, D.A], () => null == E.A.getUserIdentities(t) || null == D.A.applicationWidgetConfigs), x = l.useMemo(() => {
      var e, t, n, r, l, a, c, u, f;
      if (null == d) return null;
      let p = M[d.widgetTemplateId];
      if (null == p) return null;
      let b = (e = null != s ? s : null, t = null != d ? d : null, null == e ? {
        mode: "skeleton",
        config: t,
        numberFormat: i
      } : {
        mode: "from_data",
        variables: Object.fromEntries([...null != (n = null == (a = e.profile) || null == (l = a.data) || null == (r = l.dynamic) ? true : r.map(e => e.type === o.f.STRING ? [e.name, {
          type: "string",
          value: e.value
        }] : e.type === o.f.NUMBER ? [e.name, {
          type: "number",
          value: e.value
        }] : e.type === o.f.MEDIA ? [e.name, {
          type: "unfurled_media",
          media: (0, I.Uv)(e.value)
        }] : (0, _.xb)(e))) ? n : [], ...Object.entries(G({
          username: null == (c = e.profile) ? true : c.username
        }, null == (f = e.profile) || null == (u = f.data) ? true : u.primary)).filter(_.QE).map(e => {
          let [t, n] = e;
          if ("object" == typeof n) {
            if ("url" in n && "proxy_url" in n && "loading_state" in n) return [t, {
              type: "unfurled_media",
              media: (0, I.Uv)(n)
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
        }).filter(_.Vq)]),
        config: t,
        numberFormat: i
      });
      return p.map(function e(t) {
        switch (t.type) {
          case "HERO":
            var n;
            return {
              type: "HERO", body: t.body.map(e), title: q(t.title, b), image: J(t.image, b), imagePlaceholder: null == (n = b.config) ? true : n.heroPlaceholderImage
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
              type: "TEXT", content: q(t.content, b)
            };
          case "TEXT_WITH_IMAGE":
            return {
              type: "TEXT_WITH_IMAGE", content: q(t.content, b), image: J(t.image, b), imagePosition: t.imagePosition
            };
          case "SEPARATOR":
            return t
        }
      })
    }, [d, s, i]), {
      isLoading: m,
      hasData: null != s,
      components: x
    });
  return null == ea ? null : (0, r.jsxs)(R.A, L(G({}, e), {
    userId: v.id,
    widget: A,
    className: a()(k.Y5, P && k.aK),
    headerTitle: er,
    headerClassName: k.wx,
    additionalManageWidgetMenuItems: null != B ? (0, r.jsx)(u.Drp, {
      id: "view-game-profile",
      label: "View Game Profile",
      icon: u._xR,
      action: H
    }) : null,
    children: [(0, r.jsx)(Q, {
      widget: A,
      children: (0, r.jsx)(F, {
        component: ea
      })
    }), U && (0, r.jsxs)("div", {
      className: k.qr,
      children: [el || ei || et ? null : (0, r.jsxs)("div", {
        className: k.o8,
        children: [(0, r.jsx)(u.Qfk, {
          size: "xxs"
        }), (0, r.jsx)(u.Text, {
          variant: "text-sm/medium",
          color: "text-subtle",
          children: C.intl.string(C.t.z5K4Uv)
        })]
      }), et ? (0, r.jsx)(Z, {
        heading: C.intl.string(C.t.UDPRLO),
        content: C.intl.string(C.t["OW/2al"]),
        buttons: (0, r.jsx)(u.Button, {
          text: C.intl.string(C.t.S0W8Z5),
          onClick: ee
        })
      }) : w]
    })]
  }))
}, {
  Cta: Z
})