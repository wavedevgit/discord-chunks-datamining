/** Chunk was on 51724 **/
n.d(t, {
  Z: () => x
}), n(47120), n(266796), n(26686), n(653041), n(230036);
var r = n(200651),
  i = n(192379),
  s = n(392711),
  a = n.n(s),
  l = n(442837),
  o = n(481060),
  c = n(492435),
  d = n(353926),
  u = n(430824),
  m = n(499533),
  p = n(878209),
  g = n(987338),
  h = n(564241);

function f(e, t) {
  return e.map((e, n) => ({
    label: "object" == typeof t ? t[n] : m.Z.getExperimentBucketName(e),
    value: e
  }))
}

function x() {
  let e = (0, l.cj)([d.Z], () => d.Z.getAllExperimentOverrideDescriptors()),
    t = (0, l.cj)([d.Z], () => d.Z.getRegisteredExperiments()),
    [n, s] = i.useState(""),
    a = (0, p.Ro)((0, p.Tc)((0, p.Cg)(t), e), n);
  return (0, r.jsxs)(o.hjN, {
    tag: o.RB0.H1,
    title: "Experiments",
    children: [(0, r.jsx)(o.E1j, {
      size: o.E1j.Sizes.LARGE,
      query: n,
      onChange: s,
      onClear: () => s("")
    }), a.length > 0 ? a.map(t => {
      let n = t.experiment.type === g.xY.GUILD ? N : b;
      return (0, r.jsx)(n, {
        experiment: t.experiment,
        experimentId: t.id,
        overrideDescriptor: e[t.id]
      }, t.id)
    }) : (0, r.jsx)("div", {
      className: h.emptyState,
      children: (0, r.jsx)(o.X6q, {
        variant: "heading-md/semibold",
        children: "No Experiments Found"
      })
    })]
  })
}

function b(e) {
  var t;
  let {
    experiment: n,
    experimentId: s,
    overrideDescriptor: u
  } = e, [m, p] = i.useState(null != u), [x, b] = i.useState(!1), N = i.useCallback(() => {
    p(e => !e)
  }, []), _ = (0, l.e7)([d.Z], () => d.Z.getUserExperimentDescriptor(s)), E = (0, l.e7)([d.Z], () => d.Z.getLoadedUserExperiment(s)), C = (0, l.Wu)([d.Z], () => a().sortBy(d.Z.getRecentExposures(g.xY.USER, s), e => {
    let [t, n] = e;
    return -n
  }).map(e => {
    let [t, n] = e;
    return "".concat(new Date(n).toLocaleString(), " (").concat(t, ")")
  })), j = (0, r.jsx)(o.P3F, {
    onClick: N,
    children: (0, r.jsxs)(o.vwX, {
      tag: o.RB0.H3,
      className: h.title,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)("span", {
          children: n.title
        }), (0, r.jsx)(o.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: s
        })]
      }), (0, r.jsx)("span", {
        className: h.experimentDate,
        children: "User"
      })]
    })
  });
  return m ? (0, r.jsxs)("div", {
    className: h.group,
    children: [(0, r.jsxs)(o.hjN, {
      children: [j, (0, r.jsxs)("div", {
        children: [(0, r.jsx)(o.xJW, {
          title: "Bucket Override",
          children: (0, r.jsx)(o.q4e, {
            value: null != u ? u.bucket : null,
            clearable: null != u,
            options: f(n.buckets, n.description),
            onChange: e => {
              (0, c.rX)(s, e)
            }
          })
        }), "string" == typeof n.description ? (0, r.jsx)("div", {
          className: h.description,
          children: (0, r.jsx)(o.R94, {
            type: o.geA.DESCRIPTION,
            children: n.description
          })
        }) : null]
      }), (0, r.jsxs)("div", {
        className: h.description,
        children: [(0, r.jsxs)(o.R94, {
          type: o.geA.DESCRIPTION,
          children: ["Current assigned to bucket ", null !== (t = null == _ ? void 0 : _.bucket) && void 0 !== t ? t : g.NZ.NOT_ELIGIBLE]
        }), null == E ? (0, r.jsx)(o.R94, {
          type: o.geA.DESCRIPTION,
          children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
        }) : null]
      }), x ? (0, r.jsxs)("div", {
        children: [(0, r.jsx)(o.vwX, {
          tag: "h5",
          className: h.debugTitle,
          children: "Server Descriptor"
        }), (0, r.jsx)(o.Text, {
          variant: "code",
          className: h.pre,
          children: null == E ? "None" : JSON.stringify(E, void 0, 2)
        }), (0, r.jsx)(o.vwX, {
          tag: "h5",
          className: h.debugTitle,
          children: "Override Descriptor"
        }), (0, r.jsx)(o.Text, {
          variant: "code",
          className: h.pre,
          children: null == u ? "None" : JSON.stringify(u, void 0, 2)
        }), (0, r.jsx)(o.vwX, {
          tag: "h5",
          className: h.debugTitle,
          children: "Recent Exposures"
        }), (0, r.jsx)(o.Text, {
          variant: "code",
          className: h.pre,
          children: 0 === C.length ? "None" : C.join("\n")
        })]
      }) : (0, r.jsx)(o.zxk, {
        className: h.debugButton,
        size: o.zxk.Sizes.SMALL,
        look: o.zxk.Looks.BLANK,
        onClick: () => b(!0),
        children: "More Details \xbb"
      })]
    }), (0, r.jsx)(o.$i$, {
      className: h.divider
    })]
  }) : (0, r.jsx)("div", {
    className: h.group,
    children: (0, r.jsx)(o.hjN, {
      children: j
    })
  })
}

function N(e) {
  let {
    experiment: t,
    experimentId: n,
    overrideDescriptor: s
  } = e, [m, p] = i.useState(null != s), [x, b] = i.useState(!1), N = i.useCallback(() => {
    p(e => !e)
  }, []), _ = (0, l.e7)([d.Z], () => d.Z.getLoadedGuildExperiment(n)), E = (0, l.Wu)([d.Z], () => a().sortBy(d.Z.getRecentExposures(g.xY.GUILD, n), e => {
    let [t, n] = e;
    return -n
  }).map(e => {
    let [t, n] = e;
    return "".concat(new Date(n).toLocaleString(), " (").concat(t, ")")
  })), [C, j] = (0, l.Wu)([u.Z, d.Z], () => {
    let e = a().sortBy(a().values(u.Z.getGuilds()), e => e.name.toLowerCase()),
      t = {},
      r = [];
    for (let s of e) {
      var i;
      let e = d.Z.getGuildExperimentDescriptor(n, s.id),
        a = null !== (i = null == e ? void 0 : e.bucket) && void 0 !== i ? i : g.NZ.NOT_ELIGIBLE;
      a in t || (t[a] = 0), t[a]++, r.push("".concat(s.name, ": ").concat(a))
    }
    let s = a()(t).keys().map(Number).sort().map(e => "".concat(t[e], " guilds in bucket ").concat(e)).join(", ");
    return [r.join("\n"), s]
  }), O = (0, r.jsx)(o.P3F, {
    onClick: N,
    children: (0, r.jsxs)(o.vwX, {
      tag: o.RB0.H3,
      className: h.title,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)("span", {
          children: t.title
        }), (0, r.jsx)(o.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: n
        })]
      }), (0, r.jsx)("span", {
        className: h.experimentDate,
        children: "Guild"
      })]
    })
  });
  return m ? (0, r.jsxs)("div", {
    className: h.group,
    children: [(0, r.jsxs)(o.hjN, {
      children: [O, (0, r.jsxs)("div", {
        children: [(0, r.jsx)(o.xJW, {
          title: "Bucket Override",
          children: (0, r.jsx)(o.q4e, {
            value: null != s ? s.bucket : null,
            clearable: null != s,
            options: f(t.buckets, t.description),
            onChange: e => {
              (0, c.rX)(n, e)
            }
          })
        }), "string" == typeof t.description ? (0, r.jsx)("div", {
          className: h.description,
          children: (0, r.jsx)(o.R94, {
            type: o.geA.DESCRIPTION,
            children: t.description
          })
        }) : null]
      }), (0, r.jsxs)("div", {
        className: h.description,
        children: [(0, r.jsxs)(o.R94, {
          type: o.geA.DESCRIPTION,
          children: ["Current Assignments: ", j]
        }), null == _ ? (0, r.jsx)(o.R94, {
          type: o.geA.DESCRIPTION,
          children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
        }) : null]
      }), x ? (0, r.jsxs)("div", {
        children: [(0, r.jsx)(o.vwX, {
          tag: "h5",
          className: h.debugTitle,
          children: "Guild Assignments"
        }), (0, r.jsx)(o.Text, {
          variant: "code",
          className: h.pre,
          children: C
        }), (0, r.jsx)(o.vwX, {
          tag: "h5",
          className: h.debugTitle,
          children: "Server Descriptor"
        }), (0, r.jsx)(o.Text, {
          variant: "code",
          className: h.pre,
          children: null == _ ? "None" : JSON.stringify(_, void 0, 2)
        }), (0, r.jsx)(o.vwX, {
          tag: "h5",
          className: h.debugTitle,
          children: "Override Descriptor"
        }), (0, r.jsx)(o.Text, {
          variant: "code",
          className: h.pre,
          children: null == s ? "None" : JSON.stringify(s, void 0, 2)
        }), (0, r.jsx)(o.vwX, {
          tag: "h5",
          className: h.debugTitle,
          children: "Recent Exposures"
        }), (0, r.jsx)(o.Text, {
          variant: "code",
          className: h.pre,
          children: 0 === E.length ? "None" : E.join("\n")
        })]
      }) : (0, r.jsx)(o.zxk, {
        className: h.debugButton,
        size: o.zxk.Sizes.SMALL,
        look: o.zxk.Looks.BLANK,
        onClick: () => b(!0),
        children: "More Details \xbb"
      })]
    }), (0, r.jsx)(o.$i$, {
      className: h.divider
    })]
  }) : (0, r.jsx)("div", {
    className: h.group,
    children: (0, r.jsx)(o.hjN, {
      children: O
    })
  })
}