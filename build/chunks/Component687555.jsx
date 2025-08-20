/** Chunk was on web.js **/
/** chunk id: 687555, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => V,
  d: () => U,
  ih: () => k
}), require("./388685.js"), require("./953529.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
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
let P = 38,
  w = 55,
  D = 190,
  x = 178,
  L = 225,
  j = 160;

function M(e) {
  let {
    numOfSelectedUsers: t,
    anySelected: n
  } = e, i = (0, v.Z)({
    numNewSelected: t,
    anySelected: n
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: S.title,
      children: [(0, r.jsx)(Z, {
        className: S.titleImage
      }), (0, r.jsx)(f.X6q, {
        variant: "heading-xl/bold",
        children: T.intl.string(T.t.Lm2nFR)
      })]
    }), (0, r.jsx)(f.Text, {
      className: S.description,
      variant: "text-md/medium",
      color: "header-secondary",
      children: i
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

function U() {
  return (0, Chunk951288.jsx)("div", {
    className: Chunk107785.erroredContent,
    children: (0, Chunk951288.jsx)(Chunk481060.Eep, {
      src: Chunk334202,
      width: L,
      height: j
    })
  })
}

function G(e) {
  let {
    onClose: t
  } = e;
  return (0, r.jsxs)("div", {
    className: S.erroredContainer,
    children: [(0, r.jsxs)("div", {
      className: o()(S.erroredHeader, S.headerSeparator),
      children: [(0, r.jsx)("div", {
        className: S.title,
        children: (0, r.jsx)(f.X6q, {
          variant: "heading-xl/bold",
          children: T.intl.string(T.t.a9HOKi)
        })
      }), (0, r.jsx)(f.Text, {
        className: S.description,
        variant: "text-md/medium",
        color: "header-secondary",
        children: T.intl.string(T.t.JjjeZW)
      })]
    }), (0, r.jsx)("div", {
      className: S.erroredContent,
      children: (0, r.jsx)(f.Eep, {
        src: C,
        width: x,
        height: D
      })
    }), (0, r.jsx)("div", {
      className: o()(S.footer, S.footerSeparator),
      children: (0, r.jsx)(d.zx, {
        "data-migration-pending": true,
        className: S.submit,
        onClick: () => t(),
        children: T.intl.string(T.t.wpSqAQ)
      })
    })]
  })
}

function B(e) {
  let {
    onShare: t
  } = e, n = (0, u.e7)([y.Z], () => y.Z.getRecipientStatus()), [a, s] = i.useState([]), [l, c] = i.useState(new Set), [p, h] = i.useState(false);
  return i.useEffect(() => {
    (async () => {
      let e = [];
      for (let [t, r] of n)
        if (r === b.Fe.PENDING) {
          let n = await (0, _.PR)(t);
          e.push(n)
        } s(e)
    })()
  }, [n]), (0, r.jsxs)("div", {
    className: S.remindContainer,
    children: [(0, r.jsxs)("div", {
      className: o()(S.remindHeader, S.headerSeparator),
      children: [(0, r.jsxs)("div", {
        className: S.title,
        children: [(0, r.jsx)(Z, {
          className: S.titleImage
        }), (0, r.jsx)(f.X6q, {
          variant: "heading-xl/bold",
          children: T.intl.string(T.t.SY9tyM)
        })]
      }), (0, r.jsx)(f.Text, {
        className: S.description,
        variant: "text-md/medium",
        color: "header-secondary",
        children: T.intl.string(T.t.mPmPrq)
      })]
    }), (0, r.jsx)("div", {
      className: S.list,
      children: a.map(e => (0, r.jsx)(I.Z, {
        user: e,
        checked: l.has(e),
        onChange: (e, t) => {
          c(n => {
            let r = new Set(n);
            return t ? r.add(e) : r.delete(e), r
          })
        }
      }, e.id))
    }), (0, r.jsx)("div", {
      className: o()(S.footer, S.footerSeparator),
      children: (0, r.jsx)(d.zx, {
        "data-migration-pending": true,
        className: S.submit,
        disabled: p,
        onClick: async () => {
          h(true), await t([...l.values()]), h(false)
        },
        children: T.intl.string(T.t.ItpQxs)
      })
    })]
  })
}

function Z(e) {
  let {
    className: t
  } = e;
  return "light" === (0, u.e7)([g.Z], () => g.Z.theme) ? (0, r.jsx)(f.Eep, {
    className: t,
    src: A,
    width: w,
    height: P
  }) : (0, r.jsx)(f.Eep, {
    className: t,
    src: R,
    width: w,
    height: P
  })
}
let V = function(e) {
  let {
    onClose: t,
    onShare: n
  } = e, a = (0, u.e7)([y.Z], () => y.Z.getReferralsRemaining()), [s, _] = i.useState(""), g = (0, h.Z)(s, 400), [b, v] = i.useState(new Map), [A, C] = i.useState(false), {
    eligibleUsers: N,
    fetchUsers: R,
    hasError: P,
    isFetching: w,
    resendUsers: D
  } = (0, O.q)({
    searchQuery: g,
    selectedUsers: b
  }), x = i.useMemo(() => [...b.keys()].filter(e => !D.has(e)), [b, D]);
  l()(null != a, "Referrals remaining should not be null");
  let L = (0, m.O)(e => {
    e && !w && R()
  });
  if (P) return (0, r.jsx)(G, {
    onClose: t
  });
  if (0 === a) return (0, r.jsx)(B, {
    onShare: n
  });
  let j = g.length > 0 && 0 === N.length;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsxs)("div", {
      className: o()(S.header, S.headerSeparator),
      children: [j ? (0, r.jsx)(k, {}) : (0, r.jsx)(M, {
        numOfSelectedUsers: x.length,
        anySelected: b.size > 0
      }), (0, r.jsx)(p.Z, {
        className: S.searchbar,
        size: p.Z.Sizes.MEDIUM,
        tags: [...b.values()].map(e => E.ZP.getName(e)),
        placeholder: T.intl.string(T.t.Kd5RaG),
        query: s,
        onRemoveTag: e => {
          v(t => {
            let n = [...t.values()][e],
              r = new Map(t);
            return r.delete(n.id), r
          })
        },
        onQueryChange: _
      })]
    }), j ? (0, r.jsx)(U, {}) : (0, r.jsxs)(c.w0, {
      className: S.list,
      children: [N.map(e => (0, r.jsx)(I.Z, {
        disabled: [...b.values()].filter(e => !D.has(e.id)).length >= a && !b.has(e.id) && !D.has(e.id),
        checked: b.has(e.id),
        user: e,
        onChange: (e, t) => {
          v(n => {
            let r = new Map(n);
            return t ? r.set(e.id, e) : r.delete(e.id), r
          })
        }
      }, e.id)), w && (0, r.jsx)(f.$jN, {}), (0, r.jsx)("div", {
        ref: L
      })]
    }), (0, r.jsx)("div", {
      className: o()(S.footer, S.footerSeparator),
      children: (0, r.jsx)(d.zx, {
        "data-migration-pending": true,
        className: S.submit,
        disabled: 0 === b.size && !j || A,
        onClick: async () => {
          if (j) return void t();
          C(true), await n([...b.values()]), C(false)
        },
        children: j ? T.intl.string(T.t.wpSqAQ) : T.intl.string(T.t.ItpQxs)
      })
    })]
  })
}