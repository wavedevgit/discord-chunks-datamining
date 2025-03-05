/** Chunk was on 3205 **/
"use strict";
n.d(t, {
  d: () => Z
}), n(266796), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(345074),
  a = n(442837),
  l = n(481060),
  o = n(558324),
  c = n(456268),
  d = n(681460),
  u = n(345861),
  m = n(650774),
  g = n(434404),
  p = n(999382),
  h = n(718157),
  f = n(450474),
  b = n(166184),
  x = n(936735),
  j = n(654351),
  N = n(557359),
  v = n(386885),
  _ = n(203377),
  O = n(929834),
  y = n(388032),
  C = n(422653);

function I() {
  return (0, r.jsx)(l.Text, {
    tag: "span",
    variant: "text-xs/bold",
    color: "text-danger",
    className: C.required,
    children: "*"
  })
}

function E(e) {
  var t;
  let {
    guild: n,
    requireDescription: o
  } = e, c = i.useCallback(e => {
    g.Z.updateGuild({
      discoverySplash: e
    })
  }, []), d = i.useCallback(() => {
    g.Z.updateGuild({
      discoverySplash: null
    })
  }, []), p = i.useCallback(e => {
    g.Z.updateGuild({
      description: e
    })
  }, []), {
    memberCount: h,
    onlineCount: f
  } = (0, a.cj)([m.Z], () => ({
    memberCount: m.Z.getMemberCount(n.id),
    onlineCount: m.Z.getOnlineCount(n.id)
  }));
  return (0, r.jsxs)("div", {
    className: C.twoColumns,
    children: [(0, r.jsxs)("div", {
      className: C.sectionContainer,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(l.X6q, {
          variant: "text-md/semibold",
          color: "header-primary",
          className: C.header,
          children: y.NW.string(y.t.LYju5O)
        }), (0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: y.NW.string(y.t["53LhIy"])
        })]
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(l.X6q, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: C.subHeader,
          children: y.NW.string(y.t.JaecVF)
        }), (0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: y.NW.string(y.t.VJMq8f)
        }), (0, r.jsxs)("div", {
          className: C.buttonList,
          children: [(0, r.jsx)(u.Z, {
            size: l.zxk.Sizes.SMALL,
            color: l.zxk.Colors.PRIMARY,
            className: C.editableSection,
            buttonCTA: y.NW.string(y.t["3UB9aW"]),
            onChange: c
          }), null != n.discoverySplash ? (0, r.jsx)(l.zxk, {
            size: l.zxk.Sizes.SMALL,
            color: l.zxk.Colors.RED,
            look: l.zxk.Looks.LINK,
            className: C.editableSection,
            onClick: d,
            children: y.NW.string(y.t.N86XcH)
          }) : null]
        })]
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)(l.X6q, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: C.subHeader,
          children: [y.NW.string(y.t["1Ts7QE"]), o ? (0, r.jsx)(I, {}) : null]
        }), (0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: y.NW.string(y.t["6Y9q8f"])
        }), (0, r.jsx)(l.Kx8, {
          className: C.editableSection,
          value: null !== (t = n.description) && void 0 !== t ? t : "",
          placeholder: y.NW.string(y.t.Nvfows),
          onChange: p,
          maxLength: s.Us
        })]
      })]
    }), (0, r.jsx)(b.Z, {
      className: C.preview,
      guild: n,
      memberCount: h,
      presenceCount: f
    })]
  })
}

function S(e) {
  let {
    guild: t,
    guildMetadata: n,
    requirePrimaryCategory: i,
    error: s
  } = e;
  return (0, r.jsxs)("div", {
    className: C.sectionContainer,
    children: [(0, r.jsxs)("div", {
      children: [(0, r.jsx)(l.X6q, {
        variant: "text-md/semibold",
        color: "header-primary",
        className: C.header,
        children: y.NW.string(y.t["5b4VCQ"])
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: y.NW.string(y.t.MMEJFB)
      })]
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsxs)(l.X6q, {
        variant: "text-xs/bold",
        color: "text-muted",
        className: C.subHeader,
        children: [y.NW.string(y.t.Rv9An5), i ? (0, r.jsx)(I, {}) : null]
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: y.NW.string(y.t.CE5Gyc)
      }), (0, r.jsx)("div", {
        className: C.editableSection,
        children: (0, r.jsx)(h.E, {
          guildId: t.id,
          guildMetadata: n
        })
      })]
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(l.X6q, {
        variant: "text-xs/bold",
        color: "text-muted",
        className: C.subHeader,
        children: y.NW.string(y.t.oOPlPD)
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: y.NW.string(y.t["4jnzlZ"])
      }), (0, r.jsx)("div", {
        className: C.editableSection,
        children: (0, r.jsx)(f.Z, {
          guild: t,
          guildMetadata: n
        })
      }), null != s ? (0, r.jsx)(l.Text, {
        color: "text-danger",
        variant: "text-sm/normal",
        className: C.error,
        children: s
      }) : null]
    })]
  })
}

function T(e) {
  let {
    guildId: t,
    guildMetadata: n,
    requireTag: s,
    error: a
  } = e, [u, m] = i.useState(null), g = i.useCallback(e => {
    let r = [...n.keywords];
    r.splice(e, 1), m(null), (0, c.zH)(t, r)
  }, [t, n]), p = i.useCallback(e => {
    let {
      keywords: r
    } = n;
    r.length >= _.G7 || (m(null), (0, c.zH)(t, [...r, e]))
  }, [t, n]), h = i.useMemo(() => (0, j.P5)(n.primaryCategoryId).filter(e => !n.keywords.includes(e)).map(e => {
    let t = n.keywords.length >= _.G7;
    return {
      text: e,
      onClick: () => p(e),
      disabled: t,
      tooltipText: t ? y.NW.string(y.t.Xx7XeH) : void 0
    }
  }), [n.keywords, n.primaryCategoryId, p]), f = null != a ? a : u;
  return (0, r.jsxs)("div", {
    className: C.sectionContainer,
    children: [(0, r.jsxs)("div", {
      children: [(0, r.jsxs)(l.X6q, {
        variant: "text-md/semibold",
        color: "header-primary",
        className: C.header,
        children: [y.NW.string(y.t["0PJZXl"]), s ? (0, r.jsx)(I, {}) : null]
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: y.NW.string(y.t.ztiTDA)
      }), (0, r.jsx)(o.Z, {
        className: C.editableSection,
        tags: n.keywords,
        onRemoveTag: g,
        onAddTag: p,
        onAddTagError: m,
        maxTags: _.G7,
        maxTaxLength: _._0,
        placeholder: n.keywords.length < 1 ? y.NW.string(y.t.EL4Lho) : void 0
      }), null != f ? (0, r.jsx)(l.Text, {
        color: "text-danger",
        variant: "text-sm/normal",
        className: C.error,
        children: f
      }) : null]
    }), h.length > 0 ? (0, r.jsxs)("div", {
      children: [(0, r.jsx)(l.X6q, {
        variant: "text-xs/bold",
        color: "text-muted",
        className: C.subHeader,
        children: y.NW.string(y.t.sF28Oj)
      }), (0, r.jsx)("div", {
        className: C.editableSection,
        children: (0, r.jsx)(d.j, {
          pills: h
        })
      })]
    }) : null]
  })
}

function P(e) {
  let {
    guild: t,
    guildMetadata: n
  } = e, {
    emojiDiscoverabilityEnabled: s
  } = n, a = t.id, o = i.useCallback(() => {
    (0, c.J9)(a, !s)
  }, [a, s]);
  return (0, r.jsxs)("div", {
    className: C.twoColumns,
    children: [(0, r.jsxs)("div", {
      children: [(0, r.jsx)(l.X6q, {
        variant: "text-md/semibold",
        color: "header-primary",
        className: C.header,
        children: y.NW.string(y.t.DhJ8ur)
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: y.NW.string(y.t["/RSSlZ"])
      }), (0, r.jsx)(l.zxk, {
        className: C.editableSection,
        size: l.zxk.Sizes.SMALL,
        color: s ? l.zxk.Colors.PRIMARY : l.zxk.Colors.GREEN,
        onClick: o,
        children: s ? y.NW.string(y.t.XnrNLi) : y.NW.string(y.t.bHbZLC)
      })]
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(x.k, {
        guild: t,
        discoverableGuild: null
      })
    })]
  })
}

function w(e) {
  let {
    preferredLocale: t
  } = e, n = i.useMemo(() => (0, O.jb)(), []), s = i.useCallback(e => {
    g.Z.updateGuild({
      preferredLocale: e
    })
  }, []);
  return (0, r.jsxs)("div", {
    className: C.twoColumns,
    children: [(0, r.jsxs)("div", {
      children: [(0, r.jsx)(l.X6q, {
        variant: "text-md/semibold",
        color: "header-primary",
        className: C.header,
        children: y.NW.string(y.t.pO60f3)
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: y.NW.string(y.t["SF/GRk"])
      })]
    }), (0, r.jsx)("div", {
      className: C.localeSelect,
      children: (0, r.jsx)(l.q4e, {
        value: t,
        options: n,
        onChange: s
      })
    })]
  })
}

function R() {
  return (0, r.jsx)("div", {
    className: C.divider
  })
}

function Z(e) {
  let {
    requireTerms: t,
    rules: n,
    settingsView: i
  } = e, {
    errors: s,
    guildMetadata: l,
    guild: o
  } = (0, a.cj)([p.Z], () => {
    let {
      errors: e,
      guildMetadata: t,
      guild: n
    } = p.Z.getProps();
    return {
      errors: e,
      guildMetadata: t,
      guild: n
    }
  });
  if (null == o) return null;
  let c = i === v.U.ELIGIBLE_DISABLED;
  return (0, r.jsxs)("div", {
    className: C.settings,
    children: [(0, r.jsx)(E, {
      guild: o,
      requireDescription: c
    }), (0, r.jsx)(R, {}), (0, r.jsx)(S, {
      guild: o,
      guildMetadata: l,
      requirePrimaryCategory: c,
      error: s.discovery_splash
    }), (0, r.jsx)(R, {}), (0, r.jsx)(T, {
      guildId: o.id,
      guildMetadata: l,
      requireTag: c,
      error: s.keywords
    }), (0, r.jsx)(R, {}), (0, r.jsx)(P, {
      guild: o,
      guildMetadata: l
    }), (0, r.jsx)(R, {}), (0, r.jsx)(w, {
      preferredLocale: o.preferredLocale
    }), (0, r.jsx)(R, {}), (0, r.jsx)("div", {
      children: (0, r.jsx)(N.A, {
        requireTerms: t,
        rules: n
      })
    })]
  })
}