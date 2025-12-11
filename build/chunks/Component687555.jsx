/** Chunk was on 47435 **/
/** chunk id: 687555, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  ZP: () => k
}), require("./388685.js"), require("./953529.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  n = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  d = require.n(Chunk512722),
  Chunk907331 = require("./907331.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk232567 = require("./232567.js"),
  Chunk794433 = require("./794433.jsx"),
  Chunk480466 = require("./480466.js"),
  Chunk210887 = require("./210887.js"),
  Chunk51144 = require("./51144.js"),
  Chunk281494 = require("./281494.js"),
  Chunk276444 = require("./276444.js"),
  Chunk955839 = require("./955839.js"),
  Chunk514020 = require("./514020.js"),
  Chunk529840 = require("./529840.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk639236 = require("./639236.js"),
  Chunk724531 = require("./724531.js"),
  Chunk99713 = require("./99713.js"),
  Chunk334202 = require("./334202.js"),
  Chunk7234 = require("./7234.js");

function O(e) {
  let {
    numOfSelectedUsers: t,
    anySelected: a
  } = e, i = (0, y.Z)({
    numNewSelected: t,
    anySelected: a
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: S.title,
      children: [(0, r.jsx)(M, {
        className: S.titleImage
      }), (0, r.jsx)(p.Heading, {
        variant: "heading-xl/bold",
        children: v.intl.string(v.t.Lm2nFc)
      })]
    }), (0, r.jsx)(p.Text, {
      className: S.description,
      variant: "text-md/medium",
      color: "text-default",
      children: i
    })]
  })
}

function U() {
  return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [(0, Chunk54381.jsx)("div", {
      className: Chunk639236.title,
      children: (0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-xl/bold",
        children: Chunk388032.intl.string(Chunk388032.t["PFp+aJ"])
      })
    }), (0, Chunk54381.jsx)(Chunk481060.Text, {
      className: Chunk639236.description,
      variant: "text-md/medium",
      color: "text-default",
      children: Chunk388032.intl.string(Chunk388032.t.eBIGB4)
    })]
  })
}

function E() {
  return (0, Chunk54381.jsx)("div", {
    className: Chunk639236.erroredContent,
    children: (0, Chunk54381.jsx)(Chunk481060.Eep, {
      src: Chunk334202,
      width: 225,
      height: 160
    })
  })
}

function R(e) {
  let {
    onClose: t
  } = e;
  return (0, r.jsxs)("div", {
    className: S.erroredContainer,
    children: [(0, r.jsxs)("div", {
      className: n()(S.erroredHeader, S.headerSeparator),
      children: [(0, r.jsx)("div", {
        className: S.title,
        children: (0, r.jsx)(p.Heading, {
          variant: "heading-xl/bold",
          children: v.intl.string(v.t.a9HOKg)
        })
      }), (0, r.jsx)(p.Text, {
        className: S.description,
        variant: "text-md/medium",
        color: "text-default",
        children: v.intl.string(v.t.JjjeZb)
      })]
    }), (0, r.jsx)("div", {
      className: S.erroredContent,
      children: (0, r.jsx)(p.Eep, {
        src: N,
        width: 178,
        height: 190
      })
    }), (0, r.jsx)("div", {
      className: n()(S.footer, S.footerSeparator),
      children: (0, r.jsx)(x.zx, {
        "data-migration-pending": true,
        className: S.submit,
        onClick: () => t(),
        children: v.intl.string(v.t.wpSqAW)
      })
    })]
  })
}

function B(e) {
  let {
    onShare: t
  } = e, a = (0, c.e7)([g.Z], () => g.Z.getRecipientStatus()), [s, l] = i.useState([]), [d, o] = i.useState(new Set), [C, h] = i.useState(false);
  return i.useEffect(() => {
    (async () => {
      let e = [];
      for (let [t, r] of a)
        if (r === _.Fe.PENDING) {
          let a = await (0, f.PR)(t);
          e.push(a)
        } l(e)
    })()
  }, [a]), (0, r.jsxs)("div", {
    className: S.remindContainer,
    children: [(0, r.jsxs)("div", {
      className: n()(S.remindHeader, S.headerSeparator),
      children: [(0, r.jsxs)("div", {
        className: S.title,
        children: [(0, r.jsx)(M, {
          className: S.titleImage
        }), (0, r.jsx)(p.Heading, {
          variant: "heading-xl/bold",
          children: v.intl.string(v.t.SY9tyI)
        })]
      }), (0, r.jsx)(p.Text, {
        className: S.description,
        variant: "text-md/medium",
        color: "text-default",
        children: v.intl.string(v.t.mPmPri)
      })]
    }), (0, r.jsx)("div", {
      className: S.list,
      children: s.map(e => (0, r.jsx)(b.Z, {
        user: e,
        checked: d.has(e),
        onChange: (e, t) => {
          o(a => {
            let r = new Set(a);
            return t ? r.add(e) : r.delete(e), r
          })
        }
      }, e.id))
    }), (0, r.jsx)("div", {
      className: n()(S.footer, S.footerSeparator),
      children: (0, r.jsx)(x.zx, {
        "data-migration-pending": true,
        className: S.submit,
        disabled: C,
        onClick: async () => {
          h(true), await t([...d.values()]), h(false)
        },
        children: v.intl.string(v.t.ItpQxk)
      })
    })]
  })
}

function M(e) {
  let {
    className: t
  } = e;
  return "light" === (0, c.e7)([m.Z], () => m.Z.theme) ? (0, r.jsx)(p.Eep, {
    className: t,
    src: w,
    width: 55,
    height: 38
  }) : (0, r.jsx)(p.Eep, {
    className: t,
    src: F,
    width: 55,
    height: 38
  })
}
let k = function(e) {
  let {
    onClose: t,
    onShare: a
  } = e, s = (0, c.e7)([g.Z], () => g.Z.getReferralsRemaining()), [l, f] = i.useState(""), m = (0, u.Z)(l, 400), [_, y] = i.useState(new Map), [w, N] = i.useState(false), {
    eligibleUsers: Z,
    fetchUsers: F,
    hasError: M,
    isFetching: k,
    resendUsers: A
  } = (0, L.q)({
    searchQuery: m,
    selectedUsers: _
  }), P = i.useMemo(() => [..._.keys()].filter(e => !A.has(e)), [_, A]);
  d()(null != s, "Referrals remaining should not be null");
  let I = (0, o.O)(e => {
    e && !k && F()
  });
  if (M) return (0, r.jsx)(R, {
    onClose: t
  });
  if (0 === s) return (0, r.jsx)(B, {
    onShare: a
  });
  let G = m.length > 0 && 0 === Z.length;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsxs)("div", {
      className: n()(S.header, S.headerSeparator),
      children: [G ? (0, r.jsx)(U, {}) : (0, r.jsx)(O, {
        numOfSelectedUsers: P.length,
        anySelected: _.size > 0
      }), (0, r.jsx)(h.Z, {
        className: S.searchbar,
        size: h.Z.Sizes.MEDIUM,
        tags: [..._.values()].map(e => j.ZP.getName(e)),
        placeholder: v.intl.string(v.t.Kd5RaI),
        query: l,
        onRemoveTag: e => {
          y(t => {
            let a = [...t.values()][e],
              r = new Map(t);
            return r.delete(a.id), r
          })
        },
        onQueryChange: f
      })]
    }), G ? (0, r.jsx)(E, {}) : (0, r.jsxs)(C.w0Z, {
      className: S.list,
      children: [Z.map(e => (0, r.jsx)(b.Z, {
        disabled: [..._.values()].filter(e => !A.has(e.id)).length >= s && !_.has(e.id) && !A.has(e.id),
        checked: _.has(e.id),
        user: e,
        onChange: (e, t) => {
          y(a => {
            let r = new Map(a);
            return t ? r.set(e.id, e) : r.delete(e.id), r
          })
        }
      }, e.id)), k && (0, r.jsx)(p.$jN, {}), (0, r.jsx)("div", {
        ref: I
      })]
    }), (0, r.jsx)("div", {
      className: n()(S.footer, S.footerSeparator),
      children: (0, r.jsx)(x.zx, {
        "data-migration-pending": true,
        className: S.submit,
        disabled: 0 === _.size && !G || w,
        onClick: async () => {
          if (G) return void t();
          N(true), await a([..._.values()]), N(false)
        },
        children: G ? v.intl.string(v.t.wpSqAW) : v.intl.string(v.t.ItpQxk)
      })
    })]
  })
}