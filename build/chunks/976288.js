/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  d: () => S
}), n(266796), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(345074),
  a = n(442837),
  l = n(481060),
  o = n(558324),
  A = n(456268),
  c = n(681460),
  d = n(345861),
  u = n(650774),
  g = n(434404),
  f = n(999382),
  m = n(718157),
  p = n(450474),
  h = n(166184),
  C = n(936735),
  b = n(654351),
  v = n(557359),
  x = n(386885),
  N = n(203377),
  j = n(929834),
  E = n(388032),
  I = n(422653);

function O() {
  return (0, r.jsx)(l.Text, {
    tag: "span",
    variant: "text-xs/bold",
    color: "text-danger",
    className: I.required,
    children: "*"
  })
}

function y(e) {
  var t;
  let {
    guild: n,
    requireDescription: o
  } = e, A = i.useCallback(e => {
    g.Z.updateGuild({
      discoverySplash: e
    })
  }, []), c = i.useCallback(() => {
    g.Z.updateGuild({
      discoverySplash: null
    })
  }, []), f = i.useCallback(e => {
    g.Z.updateGuild({
      description: e
    })
  }, []), {
    memberCount: m,
    onlineCount: p
  } = (0, a.cj)([u.Z], () => ({
    memberCount: u.Z.getMemberCount(n.id),
    onlineCount: u.Z.getOnlineCount(n.id)
  }));
  return (0, r.jsxs)("div", {
    className: I.twoColumns,
    children: [(0, r.jsxs)("div", {
      className: I.sectionContainer,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(l.X6q, {
          variant: "text-md/semibold",
          color: "header-primary",
          className: I.header,
          children: E.NW.string(E.t.LYju5O)
        }), (0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: E.NW.string(E.t["53LhIy"])
        })]
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(l.X6q, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: I.subHeader,
          children: E.NW.string(E.t.JaecVF)
        }), (0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: E.NW.string(E.t.VJMq8f)
        }), (0, r.jsxs)("div", {
          className: I.buttonList,
          children: [(0, r.jsx)(d.Z, {
            size: l.zxk.Sizes.SMALL,
            color: l.zxk.Colors.PRIMARY,
            className: I.editableSection,
            buttonCTA: E.NW.string(E.t["3UB9aW"]),
            onChange: A
          }), null != n.discoverySplash ? (0, r.jsx)(l.zxk, {
            size: l.zxk.Sizes.SMALL,
            color: l.zxk.Colors.RED,
            look: l.zxk.Looks.LINK,
            className: I.editableSection,
            onClick: c,
            children: E.NW.string(E.t.N86XcH)
          }) : null]
        })]
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)(l.X6q, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: I.subHeader,
          children: [E.NW.string(E.t["1Ts7QE"]), o ? (0, r.jsx)(O, {}) : null]
        }), (0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: E.NW.string(E.t["6Y9q8f"])
        }), (0, r.jsx)(l.Kx8, {
          className: I.editableSection,
          value: null !== (t = n.description) && void 0 !== t ? t : "",
          placeholder: E.NW.string(E.t.Nvfows),
          onChange: f,
          maxLength: s.Us
        })]
      })]
    }), (0, r.jsx)(h.Z, {
      className: I.preview,
      guild: n,
      memberCount: m,
      presenceCount: p
    })]
  })
}

function w(e) {
  let {
    guild: t,
    guildMetadata: n,
    requirePrimaryCategory: i,
    error: s
  } = e;
  return (0, r.jsxs)("div", {
    className: I.sectionContainer,
    children: [(0, r.jsxs)("div", {
      children: [(0, r.jsx)(l.X6q, {
        variant: "text-md/semibold",
        color: "header-primary",
        className: I.header,
        children: E.NW.string(E.t["5b4VCQ"])
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: E.NW.string(E.t.MMEJFB)
      })]
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsxs)(l.X6q, {
        variant: "text-xs/bold",
        color: "text-muted",
        className: I.subHeader,
        children: [E.NW.string(E.t.Rv9An5), i ? (0, r.jsx)(O, {}) : null]
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: E.NW.string(E.t.CE5Gyc)
      }), (0, r.jsx)("div", {
        className: I.editableSection,
        children: (0, r.jsx)(m.E, {
          guildId: t.id,
          guildMetadata: n
        })
      })]
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(l.X6q, {
        variant: "text-xs/bold",
        color: "text-muted",
        className: I.subHeader,
        children: E.NW.string(E.t.oOPlPD)
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: E.NW.string(E.t["4jnzlZ"])
      }), (0, r.jsx)("div", {
        className: I.editableSection,
        children: (0, r.jsx)(p.Z, {
          guild: t,
          guildMetadata: n
        })
      }), null != s ? (0, r.jsx)(l.Text, {
        color: "text-danger",
        variant: "text-sm/normal",
        className: I.error,
        children: s
      }) : null]
    })]
  })
}

function P(e) {
  let {
    guildId: t,
    guildMetadata: n,
    requireTag: s,
    error: a
  } = e, [d, u] = i.useState(null), g = i.useCallback(e => {
    let r = [...n.keywords];
    r.splice(e, 1), u(null), (0, A.zH)(t, r)
  }, [t, n]), f = i.useCallback(e => {
    let {
      keywords: r
    } = n;
    r.length >= N.G7 || (u(null), (0, A.zH)(t, [...r, e]))
  }, [t, n]), m = i.useMemo(() => (0, b.P5)(n.primaryCategoryId).filter(e => !n.keywords.includes(e)).map(e => {
    let t = n.keywords.length >= N.G7;
    return {
      text: e,
      onClick: () => f(e),
      disabled: t,
      tooltipText: t ? E.NW.string(E.t.Xx7XeH) : void 0
    }
  }), [n.keywords, n.primaryCategoryId, f]), p = null != a ? a : d;
  return (0, r.jsxs)("div", {
    className: I.sectionContainer,
    children: [(0, r.jsxs)("div", {
      children: [(0, r.jsxs)(l.X6q, {
        variant: "text-md/semibold",
        color: "header-primary",
        className: I.header,
        children: [E.NW.string(E.t["0PJZXl"]), s ? (0, r.jsx)(O, {}) : null]
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: E.NW.string(E.t.ztiTDA)
      }), (0, r.jsx)(o.Z, {
        className: I.editableSection,
        tags: n.keywords,
        onRemoveTag: g,
        onAddTag: f,
        onAddTagError: u,
        maxTags: N.G7,
        maxTaxLength: N._0,
        placeholder: n.keywords.length < 1 ? E.NW.string(E.t.EL4Lho) : void 0
      }), null != p ? (0, r.jsx)(l.Text, {
        color: "text-danger",
        variant: "text-sm/normal",
        className: I.error,
        children: p
      }) : null]
    }), m.length > 0 ? (0, r.jsxs)("div", {
      children: [(0, r.jsx)(l.X6q, {
        variant: "text-xs/bold",
        color: "text-muted",
        className: I.subHeader,
        children: E.NW.string(E.t.sF28Oj)
      }), (0, r.jsx)("div", {
        className: I.editableSection,
        children: (0, r.jsx)(c.j, {
          pills: m
        })
      })]
    }) : null]
  })
}

function B(e) {
  let {
    guild: t,
    guildMetadata: n
  } = e, {
    emojiDiscoverabilityEnabled: s
  } = n, a = t.id, o = i.useCallback(() => {
    (0, A.J9)(a, !s)
  }, [a, s]);
  return (0, r.jsxs)("div", {
    className: I.twoColumns,
    children: [(0, r.jsxs)("div", {
      children: [(0, r.jsx)(l.X6q, {
        variant: "text-md/semibold",
        color: "header-primary",
        className: I.header,
        children: E.NW.string(E.t.DhJ8ur)
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: E.NW.string(E.t["/RSSlZ"])
      }), (0, r.jsx)(l.zxk, {
        className: I.editableSection,
        size: l.zxk.Sizes.SMALL,
        color: s ? l.zxk.Colors.PRIMARY : l.zxk.Colors.GREEN,
        onClick: o,
        children: s ? E.NW.string(E.t.XnrNLi) : E.NW.string(E.t.bHbZLC)
      })]
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(C.k, {
        guild: t,
        discoverableGuild: null
      })
    })]
  })
}

function D(e) {
  let {
    preferredLocale: t
  } = e, n = i.useMemo(() => (0, j.jb)(), []), s = i.useCallback(e => {
    g.Z.updateGuild({
      preferredLocale: e
    })
  }, []);
  return (0, r.jsxs)("div", {
    className: I.twoColumns,
    children: [(0, r.jsxs)("div", {
      children: [(0, r.jsx)(l.X6q, {
        variant: "text-md/semibold",
        color: "header-primary",
        className: I.header,
        children: E.NW.string(E.t.pO60f3)
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: E.NW.string(E.t["SF/GRk"])
      })]
    }), (0, r.jsx)("div", {
      className: I.localeSelect,
      children: (0, r.jsx)(l.q4e, {
        value: t,
        options: n,
        onChange: s
      })
    })]
  })
}

function T() {
  return (0, r.jsx)("div", {
    className: I.divider
  })
}

function S(e) {
  let {
    requireTerms: t,
    rules: n,
    settingsView: i
  } = e, {
    errors: s,
    guildMetadata: l,
    guild: o
  } = (0, a.cj)([f.Z], () => {
    let {
      errors: e,
      guildMetadata: t,
      guild: n
    } = f.Z.getProps();
    return {
      errors: e,
      guildMetadata: t,
      guild: n
    }
  });
  if (null == o) return null;
  let A = i === x.U.ELIGIBLE_DISABLED;
  return (0, r.jsxs)("div", {
    className: I.settings,
    children: [(0, r.jsx)(y, {
      guild: o,
      requireDescription: A
    }), (0, r.jsx)(T, {}), (0, r.jsx)(w, {
      guild: o,
      guildMetadata: l,
      requirePrimaryCategory: A,
      error: s.discovery_splash
    }), (0, r.jsx)(T, {}), (0, r.jsx)(P, {
      guildId: o.id,
      guildMetadata: l,
      requireTag: A,
      error: s.keywords
    }), (0, r.jsx)(T, {}), (0, r.jsx)(B, {
      guild: o,
      guildMetadata: l
    }), (0, r.jsx)(T, {}), (0, r.jsx)(D, {
      preferredLocale: o.preferredLocale
    }), (0, r.jsx)(T, {}), (0, r.jsx)("div", {
      children: (0, r.jsx)(v.A, {
        requireTerms: t,
        rules: n
      })
    })]
  })
}