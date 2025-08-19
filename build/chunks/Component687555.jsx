/** Chunk was on 84533 **/
/** chunk id: 687555, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  ZP: () => T,
  d: () => I,
  ih: () => M
}), require("./388685.js"), require("./953529.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
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

function O(e) {
  let {
    numOfSelectedUsers: t,
    anySelected: r
  } = e, s = (0, b.Z)({
    numNewSelected: t,
    anySelected: r
  });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: y.title,
      children: [(0, a.jsx)(F, {
        className: y.titleImage
      }), (0, a.jsx)(m.X6q, {
        variant: "heading-xl/bold",
        children: S.intl.string(S.t.Lm2nFR)
      })]
    }), (0, a.jsx)(m.Text, {
      className: y.description,
      variant: "text-md/medium",
      color: "header-secondary",
      children: s
    })]
  })
}

function M() {
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

function I() {
  return (0, Chunk951288.jsx)("div", {
    className: Chunk107785.erroredContent,
    children: (0, Chunk951288.jsx)(Chunk481060.Eep, {
      src: Chunk334202,
      width: 225,
      height: 160
    })
  })
}

function z(e) {
  let {
    onClose: t
  } = e;
  return (0, a.jsxs)("div", {
    className: y.erroredContainer,
    children: [(0, a.jsxs)("div", {
      className: i()(y.erroredHeader, y.headerSeparator),
      children: [(0, a.jsx)("div", {
        className: y.title,
        children: (0, a.jsx)(m.X6q, {
          variant: "heading-xl/bold",
          children: S.intl.string(S.t.a9HOKi)
        })
      }), (0, a.jsx)(m.Text, {
        className: y.description,
        variant: "text-md/medium",
        color: "header-secondary",
        children: S.intl.string(S.t.JjjeZW)
      })]
    }), (0, a.jsx)("div", {
      className: y.erroredContent,
      children: (0, a.jsx)(m.Eep, {
        src: w,
        width: 178,
        height: 190
      })
    }), (0, a.jsx)("div", {
      className: i()(y.footer, y.footerSeparator),
      children: (0, a.jsx)(u.zx, {
        "data-migration-pending": true,
        className: y.submit,
        onClick: () => t(),
        children: S.intl.string(S.t.wpSqAQ)
      })
    })]
  })
}

function A(e) {
  let {
    onShare: t
  } = e, r = (0, o.e7)([N.Z], () => N.Z.getRecipientStatus()), [n, l] = s.useState([]), [c, d] = s.useState(new Set), [f, x] = s.useState(false);
  return s.useEffect(() => {
    (async () => {
      let e = [];
      for (let [t, a] of r)
        if (a === v.Fe.PENDING) {
          let r = await (0, h.PR)(t);
          e.push(r)
        } l(e)
    })()
  }, [r]), (0, a.jsxs)("div", {
    className: y.remindContainer,
    children: [(0, a.jsxs)("div", {
      className: i()(y.remindHeader, y.headerSeparator),
      children: [(0, a.jsxs)("div", {
        className: y.title,
        children: [(0, a.jsx)(F, {
          className: y.titleImage
        }), (0, a.jsx)(m.X6q, {
          variant: "heading-xl/bold",
          children: S.intl.string(S.t.SY9tyM)
        })]
      }), (0, a.jsx)(m.Text, {
        className: y.description,
        variant: "text-md/medium",
        color: "header-secondary",
        children: S.intl.string(S.t.mPmPrq)
      })]
    }), (0, a.jsx)("div", {
      className: y.list,
      children: n.map(e => (0, a.jsx)(E.Z, {
        user: e,
        checked: c.has(e),
        onChange: (e, t) => {
          d(r => {
            let a = new Set(r);
            return t ? a.add(e) : a.delete(e), a
          })
        }
      }, e.id))
    }), (0, a.jsx)("div", {
      className: i()(y.footer, y.footerSeparator),
      children: (0, a.jsx)(u.zx, {
        "data-migration-pending": true,
        className: y.submit,
        disabled: f,
        onClick: async () => {
          x(true), await t([...c.values()]), x(false)
        },
        children: S.intl.string(S.t.ItpQxs)
      })
    })]
  })
}

function F(e) {
  let {
    className: t
  } = e;
  return "light" === (0, o.e7)([p.Z], () => p.Z.theme) ? (0, a.jsx)(m.Eep, {
    className: t,
    src: Z,
    width: 55,
    height: 38
  }) : (0, a.jsx)(m.Eep, {
    className: t,
    src: P,
    width: 55,
    height: 38
  })
}
let T = function(e) {
  let {
    onClose: t,
    onShare: r
  } = e, n = (0, o.e7)([N.Z], () => N.Z.getReferralsRemaining()), [l, h] = s.useState(""), p = (0, x.Z)(l, 400), [v, b] = s.useState(new Map), [Z, w] = s.useState(false), {
    eligibleUsers: C,
    fetchUsers: P,
    hasError: F,
    isFetching: T,
    resendUsers: k
  } = (0, R.q)({
    searchQuery: p,
    selectedUsers: v
  }), D = s.useMemo(() => [...v.keys()].filter(e => !k.has(e)), [v, k]);
  c()(null != n, "Referrals remaining should not be null");
  let _ = (0, g.O)(e => {
    e && !T && P()
  });
  if (F) return (0, a.jsx)(z, {
    onClose: t
  });
  if (0 === n) return (0, a.jsx)(A, {
    onShare: r
  });
  let q = p.length > 0 && 0 === C.length;
  return (0, a.jsxs)("div", {
    children: [(0, a.jsxs)("div", {
      className: i()(y.header, y.headerSeparator),
      children: [q ? (0, a.jsx)(M, {}) : (0, a.jsx)(O, {
        numOfSelectedUsers: D.length,
        anySelected: v.size > 0
      }), (0, a.jsx)(f.Z, {
        className: y.searchbar,
        size: f.Z.Sizes.MEDIUM,
        tags: [...v.values()].map(e => j.ZP.getName(e)),
        placeholder: S.intl.string(S.t.Kd5RaG),
        query: l,
        onRemoveTag: e => {
          b(t => {
            let r = [...t.values()][e],
              a = new Map(t);
            return a.delete(r.id), a
          })
        },
        onQueryChange: h
      })]
    }), q ? (0, a.jsx)(I, {}) : (0, a.jsxs)(d.w0, {
      className: y.list,
      children: [C.map(e => (0, a.jsx)(E.Z, {
        disabled: [...v.values()].filter(e => !k.has(e.id)).length >= n && !v.has(e.id) && !k.has(e.id),
        checked: v.has(e.id),
        user: e,
        onChange: (e, t) => {
          b(r => {
            let a = new Map(r);
            return t ? a.set(e.id, e) : a.delete(e.id), a
          })
        }
      }, e.id)), T && (0, a.jsx)(m.$jN, {}), (0, a.jsx)("div", {
        ref: _
      })]
    }), (0, a.jsx)("div", {
      className: i()(y.footer, y.footerSeparator),
      children: (0, a.jsx)(u.zx, {
        "data-migration-pending": true,
        className: y.submit,
        disabled: 0 === v.size && !q || Z,
        onClick: async () => {
          if (q) return void t();
          w(true), await r([...v.values()]), w(false)
        },
        children: q ? S.intl.string(S.t.wpSqAQ) : S.intl.string(S.t.ItpQxs)
      })
    })]
  })
}