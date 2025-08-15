/** Chunk was on 83667 **/
/** chunk id: 687555, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  ZP: () => T,
  d: () => q,
  ih: () => k
}), require("./388685.js"), require("./953529.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  d = require.n(Chunk512722),
  Chunk597312 = require("./597312.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk232567 = require("./232567.js"),
  Chunk794433 = require("./794433.jsx"),
  Chunk480466 = require("./480466.js"),
  Chunk434650 = require("./434650.js"),
  Chunk210887 = require("./210887.js"),
  Chunk51144 = require("./51144.js"),
  Chunk281494 = require("./281494.js"),
  Chunk276444 = require("./276444.js"),
  Chunk955839 = require("./955839.js"),
  Chunk514020 = require("./514020.js"),
  Chunk529840 = require("./529840.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk107785 = require("./107785.js"),
  Chunk724531 = require("./724531.js"),
  Chunk99713 = require("./99713.js"),
  Chunk334202 = require("./334202.js"),
  Chunk7234 = require("./7234.js");

function I(e) {
  let {
    numOfSelectedUsers: t,
    anySelected: s
  } = e, r = (0, b.Z)({
    numNewSelected: t,
    anySelected: s
  });
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: y.title,
      children: [(0, n.jsx)(O, {
        className: y.titleImage
      }), (0, n.jsx)(h.X6q, {
        variant: "heading-xl/bold",
        children: Z.intl.string(Z.t.Lm2nFR)
      })]
    }), (0, n.jsx)(h.Text, {
      className: y.description,
      variant: "text-md/medium",
      color: "header-secondary",
      children: r
    })]
  })
}

function k() {
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk107785.title,
      children: (0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-xl/bold",
        children: Chunk388032.intl.string(Chunk388032.t["PFp+aG"])
      })
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      className: Chunk107785.description,
      variant: "text-md/medium",
      color: "header-secondary",
      children: Chunk388032.intl.string(Chunk388032.t.eBIGBw)
    })]
  })
}

function q() {
  return (0, Chunk951288.jsx)("div", {
    className: Chunk107785.erroredContent,
    children: (0, Chunk951288.jsx)(Chunk481060.Eep, {
      src: Chunk334202,
      width: 225,
      height: 160
    })
  })
}

function F(e) {
  let {
    onClose: t
  } = e;
  return (0, n.jsxs)("div", {
    className: y.erroredContainer,
    children: [(0, n.jsxs)("div", {
      className: i()(y.erroredHeader, y.headerSeparator),
      children: [(0, n.jsx)("div", {
        className: y.title,
        children: (0, n.jsx)(h.X6q, {
          variant: "heading-xl/bold",
          children: Z.intl.string(Z.t.a9HOKi)
        })
      }), (0, n.jsx)(h.Text, {
        className: y.description,
        variant: "text-md/medium",
        color: "header-secondary",
        children: Z.intl.string(Z.t.JjjeZW)
      })]
    }), (0, n.jsx)("div", {
      className: y.erroredContent,
      children: (0, n.jsx)(h.Eep, {
        src: R,
        width: 178,
        height: 190
      })
    }), (0, n.jsx)("div", {
      className: i()(y.footer, y.footerSeparator),
      children: (0, n.jsx)(u.zx, {
        "data-migration-pending": true,
        className: y.submit,
        onClick: () => t(),
        children: Z.intl.string(Z.t.wpSqAQ)
      })
    })]
  })
}

function M(e) {
  let {
    onShare: t
  } = e, s = (0, o.e7)([N.Z], () => N.Z.getRecipientStatus()), [a, l] = r.useState([]), [d, c] = r.useState(new Set), [f, x] = r.useState(false);
  return r.useEffect(() => {
    (async () => {
      let e = [];
      for (let [t, n] of s)
        if (n === v.Fe.PENDING) {
          let s = await (0, m.PR)(t);
          e.push(s)
        } l(e)
    })()
  }, [s]), (0, n.jsxs)("div", {
    className: y.remindContainer,
    children: [(0, n.jsxs)("div", {
      className: i()(y.remindHeader, y.headerSeparator),
      children: [(0, n.jsxs)("div", {
        className: y.title,
        children: [(0, n.jsx)(O, {
          className: y.titleImage
        }), (0, n.jsx)(h.X6q, {
          variant: "heading-xl/bold",
          children: Z.intl.string(Z.t.SY9tyM)
        })]
      }), (0, n.jsx)(h.Text, {
        className: y.description,
        variant: "text-md/medium",
        color: "header-secondary",
        children: Z.intl.string(Z.t.mPmPrq)
      })]
    }), (0, n.jsx)("div", {
      className: y.list,
      children: a.map(e => (0, n.jsx)(w.Z, {
        user: e,
        checked: d.has(e),
        onChange: (e, t) => {
          c(s => {
            let n = new Set(s);
            return t ? n.add(e) : n.delete(e), n
          })
        }
      }, e.id))
    }), (0, n.jsx)("div", {
      className: i()(y.footer, y.footerSeparator),
      children: (0, n.jsx)(u.zx, {
        "data-migration-pending": true,
        className: y.submit,
        disabled: f,
        onClick: async () => {
          x(true), await t([...d.values()]), x(false)
        },
        children: Z.intl.string(Z.t.ItpQxs)
      })
    })]
  })
}

function O(e) {
  let {
    className: t
  } = e;
  return "light" === (0, o.e7)([j.Z], () => j.Z.theme) ? (0, n.jsx)(h.Eep, {
    className: t,
    src: P,
    width: 55,
    height: 38
  }) : (0, n.jsx)(h.Eep, {
    className: t,
    src: C,
    width: 55,
    height: 38
  })
}
let T = function(e) {
  let {
    onClose: t,
    onShare: s
  } = e, a = (0, o.e7)([N.Z], () => N.Z.getReferralsRemaining()), [l, m] = r.useState(""), j = (0, x.Z)(l, 400), [v, b] = r.useState(new Map), [P, R] = r.useState(false), {
    eligibleUsers: E,
    fetchUsers: C,
    hasError: O,
    isFetching: T,
    resendUsers: z
  } = (0, S.q)({
    searchQuery: j,
    selectedUsers: v
  }), G = r.useMemo(() => [...v.keys()].filter(e => !z.has(e)), [v, z]);
  d()(null != a, "Referrals remaining should not be null");
  let Q = (0, g.O)(e => {
    e && !T && C()
  });
  if (O) return (0, n.jsx)(F, {
    onClose: t
  });
  if (0 === a) return (0, n.jsx)(M, {
    onShare: s
  });
  let D = j.length > 0 && 0 === E.length;
  return (0, n.jsxs)("div", {
    children: [(0, n.jsxs)("div", {
      className: i()(y.header, y.headerSeparator),
      children: [D ? (0, n.jsx)(k, {}) : (0, n.jsx)(I, {
        numOfSelectedUsers: G.length,
        anySelected: v.size > 0
      }), (0, n.jsx)(f.Z, {
        className: y.searchbar,
        size: f.Z.Sizes.MEDIUM,
        tags: [...v.values()].map(e => p.ZP.getName(e)),
        placeholder: Z.intl.string(Z.t.Kd5RaG),
        query: l,
        onRemoveTag: e => {
          b(t => {
            let s = [...t.values()][e],
              n = new Map(t);
            return n.delete(s.id), n
          })
        },
        onQueryChange: m
      })]
    }), D ? (0, n.jsx)(q, {}) : (0, n.jsxs)(c.w0, {
      className: y.list,
      children: [E.map(e => (0, n.jsx)(w.Z, {
        disabled: [...v.values()].filter(e => !z.has(e.id)).length >= a && !v.has(e.id) && !z.has(e.id),
        checked: v.has(e.id),
        user: e,
        onChange: (e, t) => {
          b(s => {
            let n = new Map(s);
            return t ? n.set(e.id, e) : n.delete(e.id), n
          })
        }
      }, e.id)), T && (0, n.jsx)(h.$jN, {}), (0, n.jsx)("div", {
        ref: Q
      })]
    }), (0, n.jsx)("div", {
      className: i()(y.footer, y.footerSeparator),
      children: (0, n.jsx)(u.zx, {
        "data-migration-pending": true,
        className: y.submit,
        disabled: 0 === v.size && !D || P,
        onClick: async () => {
          if (D) return void t();
          R(true), await s([...v.values()]), R(false)
        },
        children: D ? Z.intl.string(Z.t.wpSqAQ) : Z.intl.string(Z.t.ItpQxs)
      })
    })]
  })
}