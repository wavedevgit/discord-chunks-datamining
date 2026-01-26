/** Chunk was on 39048 **/
/** chunk id: 946171, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  s: () => w
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js");
require("./516773.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk513521 = require("./513521.jsx"),
  Chunk460760 = require("./460760.js"),
  Chunk596484 = require("./596484.jsx"),
  Chunk405810 = require("./405810.jsx"),
  Chunk498642 = require("./498642.js"),
  Chunk997509 = require("./997509.js"),
  Chunk555337 = require("./555337.js"),
  Chunk310345 = require("./310345.js"),
  Chunk764548 = require("./764548.jsx"),
  Chunk268075 = require("./268075.jsx"),
  Chunk458907 = require("./458907.jsx"),
  Chunk719175 = require("./719175.jsx"),
  Chunk366846 = require("./366846.jsx"),
  Chunk716610 = require("./716610.js"),
  Chunk927573 = require("./927573.js"),
  Chunk814758 = require("./814758.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk409203 = require("./409203.js");

function E() {
  return (0, r.jsx)(s.Text, {
    tag: "span",
    variant: "text-xs/bold",
    color: "text-feedback-critical",
    className: A.mw,
    children: "*"
  })
}

function N(e) {
  var t;
  let {
    guild: n,
    requireDescription: a
  } = e, o = i.useCallback(e => {
    g.A.updateGuild({
      discoverySplash: e
    })
  }, []), c = i.useCallback(() => {
    g.A.updateGuild({
      discoverySplash: null
    })
  }, []), m = i.useCallback(e => {
    g.A.updateGuild({
      description: e
    })
  }, []), {
    memberCount: p,
    onlineCount: h
  } = (0, l.cf)([u.A], () => ({
    memberCount: u.A.getMemberCount(n.id),
    onlineCount: u.A.getOnlineCount(n.id)
  }));
  return (0, r.jsxs)("div", {
    className: A.cL,
    children: [(0, r.jsxs)("div", {
      className: A.hd,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(s.Heading, {
          variant: "text-md/semibold",
          color: "text-strong",
          className: A.wx,
          children: y.intl.string(y.t.LYju5J)
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-subtle",
          children: y.intl.string(y.t["53LhI6"])
        })]
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(s.Heading, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: A.uI,
          children: y.intl.string(y.t.JaecVH)
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-subtle",
          children: y.intl.string(y.t.VJMq8R)
        }), (0, r.jsxs)("div", {
          className: A.Ll,
          children: [(0, r.jsx)("div", {
            className: A.wF,
            children: (0, r.jsx)(d.A, {
              onChange: o,
              text: y.intl.string(y.t["3UB9ad"]),
              size: "sm",
              variant: "secondary"
            })
          }), null != n.discoverySplash ? (0, r.jsx)("div", {
            "data-button-hoisted-classname-wrapper": true,
            className: A.wF,
            children: (0, r.jsx)(s.Button, {
              variant: "critical-secondary",
              size: "sm",
              text: y.intl.string(y.t.N86XcP),
              onClick: c
            })
          }) : null]
        })]
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)(s.Heading, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: A.uI,
          children: [y.intl.string(y.t["1Ts7QP"]), a ? (0, r.jsx)(E, {}) : null]
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-subtle",
          children: y.intl.string(y.t["6Y9q8d"])
        }), (0, r.jsx)("div", {
          className: A.wF,
          children: (0, r.jsx)(s.fs1, {
            value: null != (t = n.description) ? t : "",
            placeholder: y.intl.string(y.t.Nvfowl),
            onChange: m,
            maxLength: 300
          })
        })]
      })]
    }), (0, r.jsx)(f.A, {
      className: A.VH,
      guild: n,
      memberCount: p,
      presenceCount: h
    })]
  })
}

function S(e) {
  let {
    guild: t,
    guildMetadata: n,
    requirePrimaryCategory: i,
    error: l
  } = e;
  return (0, r.jsxs)("div", {
    className: A.hd,
    children: [(0, r.jsxs)("div", {
      children: [(0, r.jsx)(s.Heading, {
        variant: "text-md/semibold",
        color: "text-strong",
        className: A.wx,
        children: y.intl.string(y.t["5b4VCV"])
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: y.intl.string(y.t.MMEJFB)
      })]
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsxs)(s.Heading, {
        variant: "text-xs/bold",
        color: "text-muted",
        className: A.uI,
        children: [y.intl.string(y.t.Rv9Anz), i ? (0, r.jsx)(E, {}) : null]
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: y.intl.string(y.t.CE5Gya)
      }), (0, r.jsx)("div", {
        className: A.wF,
        children: (0, r.jsx)(b.T, {
          guildId: t.id,
          guildMetadata: n
        })
      })]
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(s.Heading, {
        variant: "text-xs/bold",
        color: "text-muted",
        className: A.uI,
        children: y.intl.string(y.t.oOPlPA)
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: y.intl.string(y.t["4jnzla"])
      }), (0, r.jsx)("div", {
        className: A.wF,
        children: (0, r.jsx)(x.A, {
          guild: t,
          guildMetadata: n
        })
      }), null != l ? (0, r.jsx)(s.Text, {
        color: "text-feedback-critical",
        variant: "text-sm/normal",
        className: A.z3,
        children: l
      }) : null]
    })]
  })
}

function I(e) {
  let {
    guildId: t,
    guildMetadata: n,
    requireTag: l,
    error: d
  } = e, [u, g] = i.useState(null), m = i.useCallback(e => {
    let r = Array.from(e),
      i = [...n.keywords].filter(e => !r.includes(e));
    g(null), (0, o.ZH)(t, i)
  }, [t, n]), f = i.useCallback(e => {
    let {
      keywords: r
    } = n;
    r.length >= O.Qy || r.includes(e) || (g(null), (0, o.ZH)(t, [...r, e]))
  }, [t, n]), h = i.useMemo(() => (0, p.hV)(n.primaryCategoryId).filter(e => !n.keywords.includes(e)).map(e => {
    let t = n.keywords.length >= O.Qy;
    return {
      text: e,
      onClick: () => f(e),
      disabled: t,
      tooltipText: t ? y.intl.string(y.t.Xx7XeB) : true
    }
  }), [n.keywords, n.primaryCategoryId, f]), b = null != d ? d : u, x = i.useMemo(() => n.keywords.map(e => ({
    id: e,
    label: e
  })), [n.keywords]);
  return (0, r.jsxs)("div", {
    className: A.hd,
    children: [(0, r.jsxs)("div", {
      children: [(0, r.jsx)(a.A, {
        required: l,
        label: y.intl.string(y.t["0PJZXj"]),
        description: y.intl.string(y.t.ztiTDH),
        tagsLabel: y.intl.string(y.t["0PJZXj"]),
        tags: x,
        onRemoveTag: m,
        onAddTag: f,
        onAddTagError: g,
        maxTags: O.Qy,
        maxTaxLength: O.Ug,
        placeholder: n.keywords.length < 1 ? y.intl.string(y.t.EL4Lhs) : true
      }), null != b ? (0, r.jsx)(s.Text, {
        color: "text-feedback-critical",
        variant: "text-sm/normal",
        className: A.z3,
        children: b
      }) : null]
    }), h.length > 0 ? (0, r.jsxs)("div", {
      children: [(0, r.jsx)(s.Heading, {
        variant: "text-xs/bold",
        color: "text-muted",
        className: A.uI,
        children: y.intl.string(y.t.sF28Ou)
      }), (0, r.jsx)("div", {
        className: A.wF,
        children: (0, r.jsx)(c.z, {
          pills: h
        })
      })]
    }) : null]
  })
}

function T(e) {
  let {
    guild: t,
    guildMetadata: n
  } = e, {
    emojiDiscoverabilityEnabled: l
  } = n, a = t.id, c = i.useCallback(() => {
    (0, o.r8)(a, !l)
  }, [a, l]);
  return (0, r.jsxs)("div", {
    className: A.cL,
    children: [(0, r.jsxs)("div", {
      children: [(0, r.jsx)(s.Heading, {
        variant: "text-md/semibold",
        color: "text-strong",
        className: A.wx,
        children: y.intl.string(y.t.DhJ8ur)
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: y.intl.string(y.t["/RSSlV"])
      }), (0, r.jsx)("div", {
        className: A.wF,
        children: (0, r.jsx)(s.Button, {
          size: "sm",
          variant: l ? "secondary" : "active",
          text: l ? y.intl.string(y.t.XnrNLi) : y.intl.string(y.t.bHbZLP),
          onClick: c
        })
      })]
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(h.k, {
        guild: t,
        discoverableGuild: null
      })
    })]
  })
}

function C(e) {
  let {
    preferredLocale: t
  } = e, n = i.useMemo(() => (0, v.fr)(), []), l = i.useCallback(e => {
    g.A.updateGuild({
      preferredLocale: e
    })
  }, []);
  return (0, r.jsx)(s.l6P, {
    layout: "horizontal-responsive",
    label: y.intl.string(y.t.pO60fy),
    description: y.intl.string(y.t["SF/GRh"]),
    value: t,
    options: n,
    onSelectionChange: l,
    selectionMode: "single",
    fullWidth: true
  })
}

function P() {
  return (0, r.jsx)("div", {
    className: A.yF
  })
}

function w(e) {
  let {
    requireTerms: t,
    rules: n,
    settingsView: i
  } = e, {
    errors: s,
    guildMetadata: a,
    guild: o
  } = (0, l.cf)([m.A], () => {
    let {
      errors: e,
      guildMetadata: t,
      guild: n
    } = m.A.getProps();
    return {
      errors: e,
      guildMetadata: t,
      guild: n
    }
  });
  if (null == o) return null;
  let c = i === _.v.ELIGIBLE_DISABLED;
  return (0, r.jsxs)("div", {
    className: A.W0,
    children: [(0, r.jsx)(N, {
      guild: o,
      requireDescription: c
    }), (0, r.jsx)(P, {}), (0, r.jsx)(S, {
      guild: o,
      guildMetadata: a,
      requirePrimaryCategory: c,
      error: s.discovery_splash
    }), (0, r.jsx)(P, {}), (0, r.jsx)(I, {
      guildId: o.id,
      guildMetadata: a,
      requireTag: c,
      error: s.keywords
    }), (0, r.jsx)(P, {}), (0, r.jsx)(T, {
      guild: o,
      guildMetadata: a
    }), (0, r.jsx)(P, {}), (0, r.jsx)(C, {
      preferredLocale: o.preferredLocale
    }), (0, r.jsx)(P, {}), (0, r.jsx)("div", {
      children: (0, r.jsx)(j.D, {
        requireTerms: t,
        rules: n
      })
    })]
  })
}