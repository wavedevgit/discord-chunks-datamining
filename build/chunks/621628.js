/** Chunk was on 51724 **/
n.d(t, {
  Z: () => j
}), n(47120), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(610885), n(126298), n(733860), n(230036);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(442837),
  o = n(704215),
  c = n(433517),
  d = n(481060),
  u = n(600164),
  m = n(118012),
  p = n(675478),
  g = n(581883),
  h = n(883904),
  f = n(68985),
  x = n(211644),
  b = n(804501),
  N = n(152862),
  _ = n(802138);

function E(e) {
  let {
    contents: t,
    content: n,
    onChange: i
  } = e, s = o.z[n], {
    isDismissed: a,
    handleToggleDismissState: l,
    recurringDismissibleContentInfo: c
  } = (0, b.x)(s, t), u = "";
  if (null == c || void 0 === c.lastDismissedVersion && void 0 === c.lastDismissedAtMs) u = "";
  else if (void 0 !== c.lastDismissedVersion && 0 !== c.lastDismissedVersion) u = "last_dismissed_version: ".concat(c.lastDismissedVersion);
  else if (void 0 !== c.lastDismissedAtMs) {
    let e = new Date(c.lastDismissedAtMs).toLocaleString();
    u = "last_dismissed_at: ".concat(e)
  }
  return (0, r.jsx)(d.j7V, {
    value: a,
    onChange: () => {
      i(n), l()
    },
    children: (0, r.jsx)(d.R94, {
      size: m.Z.Sizes.SIZE_16,
      className: _.marginTop4,
      children: "".concat(n.toLowerCase(), " (").concat(o.z[n], ") ").concat(u)
    })
  })
}

function C(e) {
  let {
    items: t,
    dismissedContents: n,
    handleChange: i
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: t.filter(e => isNaN(Number(e))).map(e => (0, r.jsx)(E, {
      contents: n,
      content: e,
      onChange: i
    }, e))
  })
}

function j() {
  var e;
  let t = (0, x.ZP)(e => e.recentlyShown),
    {
      dailyCapReached: n,
      dailyCapOverridden: s,
      newUserMinAgeRequiredOverridden: m
    } = (0, l.cj)([f.Z], () => ({
      dailyCapReached: f.Z.hasUserHitDCCap(),
      dailyCapOverridden: f.Z.dailyCapOverridden,
      newUserMinAgeRequiredOverridden: f.Z.newUserMinAgeRequiredOverridden
    })),
    [b, E] = i.useState(""),
    j = null !== (e = (0, l.e7)([g.Z], () => {
      var e;
      return null === (e = g.Z.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
    })) && void 0 !== e ? e : new Uint8Array,
    [O, v] = function(e, t) {
      let [n, r] = i.useState(() => {
        let n = c.K.get(e);
        return null != n ? n : t
      });
      return i.useEffect(() => {
        c.K.set(e, n)
      }, [e, n]), [n, r]
    }("RecentDismissibleOverrides", []),
    S = e => {
      v(t => {
        let n = new Set(t);
        n.delete(e);
        let r = Array.from(n).slice(0, 4);
        return r.unshift(e), r
      })
    },
    T = t.map(e => o.z[e]),
    I = O.filter(e => e.toLowerCase().includes(b.toLowerCase())).filter(e => !T.includes(e)),
    y = Object.keys(o.z).filter(e => !T.includes(e)).filter(e => !O.includes(e)).filter(e => e.toLowerCase().includes(b.toLowerCase())).sort((e, t) => e.localeCompare(t));
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(d.hjN, {
      title: "Dismissible Content Fatigue",
      tag: d.RB0.H1,
      className: _.marginBottom60,
      children: [(0, r.jsx)(d.xJW, {
        children: (0, r.jsxs)(d.R94, {
          className: _.marginBottom4,
          children: ["Daily Cap Reached: ", n ? "Yes" : "No"]
        })
      }), (0, r.jsx)(d.j7V, {
        value: s,
        onChange: h.Nj,
        children: "Override Dismissible Content Daily Cap"
      }), (0, r.jsx)(d.j7V, {
        value: m,
        onChange: h.KC,
        children: "Override Minimum User Account Age Requirement"
      }), (0, r.jsxs)(d.xJW, {
        children: [(0, r.jsx)(d.zxk, {
          onClick: () => (0, h.EG)(),
          children: "Reset DismissibleContentFrameworkStore"
        }), (0, r.jsx)(d.R94, {
          className: _.marginTop4,
          children: "This will reset the daily cap and content seen during session"
        })]
      })]
    }), (0, r.jsxs)(d.hjN, {
      title: "Dismissible Contents",
      tag: d.RB0.H1,
      children: [(0, r.jsx)(d.E1j, {
        className: _.marginBottom20,
        size: d.E1j.Sizes.LARGE,
        query: b,
        onChange: E,
        onClear: () => E("")
      }), (0, r.jsxs)(d.xJW, {
        className: N.buttonsContainer,
        children: [(0, r.jsx)(d.zxk, {
          onClick: p.sr,
          children: "Clear All Dismissed Contents"
        }), (0, r.jsx)(d.zxk, {
          onClick: p.bE,
          children: "Check All Dismissed Contents"
        })]
      }), t.length > 0 ? (0, r.jsxs)("div", {
        className: _.marginBottom20,
        children: [(0, r.jsx)("div", {
          className: _.marginBottom20,
          children: (0, r.jsx)(d.vwX, {
            children: "Recently Shown"
          })
        }), (0, r.jsx)(C, {
          items: T,
          dismissedContents: j,
          handleChange: S
        })]
      }) : null, I.length > 0 ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: _.marginBottom20,
          children: (0, r.jsx)(d.vwX, {
            children: "Recent Overrides"
          })
        }), (0, r.jsx)(C, {
          items: I,
          dismissedContents: j,
          handleChange: S
        })]
      }) : null, (0, r.jsx)(u.Z, {
        className: a()(_.marginBottom20, _.marginTop20),
        children: (0, r.jsx)(d.vwX, {
          children: "Available Dismissible Contents"
        })
      }), (0, r.jsx)(C, {
        items: y,
        dismissedContents: j,
        handleChange: S
      })]
    })]
  })
}