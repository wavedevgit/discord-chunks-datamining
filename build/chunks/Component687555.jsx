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
  Chunk481060 = require("./481060.js"),
  Chunk232567 = require("./232567.js"),
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

function Z(e) {
  let {
    numOfSelectedUsers: t,
    anySelected: a
  } = e, i = (0, g.Z)({
    numNewSelected: t,
    anySelected: a
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: b.title,
      children: [(0, r.jsx)(R, {
        className: b.titleImage
      }), (0, r.jsx)(x.Heading, {
        variant: "heading-xl/bold",
        children: y.intl.string(y.t.Lm2nFc)
      })]
    }), (0, r.jsx)(x.Text, {
      className: b.description,
      variant: "text-md/medium",
      color: "text-default",
      children: i
    })]
  })
}

function F() {
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: b.title,
      children: (0, r.jsx)(x.Heading, {
        variant: "heading-xl/bold",
        children: y.intl.string(y.t["PFp+aJ"])
      })
    }), (0, r.jsx)(x.Text, {
      className: b.description,
      variant: "text-md/medium",
      color: "text-default",
      children: y.intl.string(y.t.eBIGB4)
    })]
  })
}

function O() {
  return (0, r.jsx)("div", {
    className: b.erroredContent,
    children: (0, r.jsx)(x.Eep, {
      src: w,
      width: 225,
      height: 160
    })
  })
}

function E(e) {
  let {
    onClose: t
  } = e;
  return (0, r.jsxs)("div", {
    className: b.erroredContainer,
    children: [(0, r.jsxs)("div", {
      className: n()(b.erroredHeader, b.headerSeparator),
      children: [(0, r.jsx)("div", {
        className: b.title,
        children: (0, r.jsx)(x.Heading, {
          variant: "heading-xl/bold",
          children: y.intl.string(y.t.a9HOKg)
        })
      }), (0, r.jsx)(x.Text, {
        className: b.description,
        variant: "text-md/medium",
        color: "text-default",
        children: y.intl.string(y.t.JjjeZb)
      })]
    }), (0, r.jsx)("div", {
      className: b.erroredContent,
      children: (0, r.jsx)(x.Eep, {
        src: S,
        width: 178,
        height: 190
      })
    }), (0, r.jsx)("div", {
      className: n()(b.footer, b.footerSeparator),
      children: (0, r.jsx)("div", {
        className: b.submit,
        children: (0, r.jsx)(C.zxk, {
          variant: "primary",
          fullWidth: true,
          text: y.intl.string(y.t.wpSqAW),
          onClick: () => t()
        })
      })
    })]
  })
}

function U(e) {
  let {
    onShare: t
  } = e, a = (0, c.e7)([m.Z], () => m.Z.getRecipientStatus()), [s, l] = i.useState([]), [d, o] = i.useState(new Set), [p, h] = i.useState(false);
  return i.useEffect(() => {
    (async () => {
      let e = [];
      for (let [t, r] of a)
        if (r === j.Fe.PENDING) {
          let a = await (0, f.PR)(t);
          e.push(a)
        } l(e)
    })()
  }, [a]), (0, r.jsxs)("div", {
    className: b.remindContainer,
    children: [(0, r.jsxs)("div", {
      className: n()(b.remindHeader, b.headerSeparator),
      children: [(0, r.jsxs)("div", {
        className: b.title,
        children: [(0, r.jsx)(R, {
          className: b.titleImage
        }), (0, r.jsx)(x.Heading, {
          variant: "heading-xl/bold",
          children: y.intl.string(y.t.SY9tyI)
        })]
      }), (0, r.jsx)(x.Text, {
        className: b.description,
        variant: "text-md/medium",
        color: "text-default",
        children: y.intl.string(y.t.mPmPri)
      })]
    }), (0, r.jsx)("div", {
      className: b.list,
      children: s.map(e => (0, r.jsx)(L.Z, {
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
      className: n()(b.footer, b.footerSeparator),
      children: (0, r.jsx)("div", {
        className: b.submit,
        children: (0, r.jsx)(C.zxk, {
          text: y.intl.string(y.t.ItpQxk),
          fullWidth: true,
          variant: "primary",
          disabled: p,
          onClick: async () => {
            h(true), await t([...d.values()]), h(false)
          }
        })
      })
    })]
  })
}

function R(e) {
  let {
    className: t
  } = e;
  return "light" === (0, c.e7)([h.Z], () => h.Z.theme) ? (0, r.jsx)(x.Eep, {
    className: t,
    src: v,
    width: 55,
    height: 38
  }) : (0, r.jsx)(x.Eep, {
    className: t,
    src: N,
    width: 55,
    height: 38
  })
}
let k = function(e) {
  let {
    onClose: t,
    onShare: a
  } = e, s = (0, c.e7)([m.Z], () => m.Z.getReferralsRemaining()), [l, f] = i.useState(""), h = (0, p.Z)(l, 400), [j, g] = i.useState(new Map), [v, S] = i.useState(false), {
    eligibleUsers: w,
    fetchUsers: N,
    hasError: R,
    isFetching: k,
    resendUsers: B
  } = (0, _.q)({
    searchQuery: h,
    selectedUsers: j
  }), M = i.useMemo(() => [...j.keys()].filter(e => !B.has(e)), [j, B]);
  d()(null != s, "Referrals remaining should not be null");
  let A = (0, o.O)(e => {
    e && !k && N()
  });
  if (R) return (0, r.jsx)(E, {
    onClose: t
  });
  if (0 === s) return (0, r.jsx)(U, {
    onShare: a
  });
  let P = h.length > 0 && 0 === w.length;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsxs)("div", {
      className: n()(b.header, b.headerSeparator),
      children: [P ? (0, r.jsx)(F, {}) : (0, r.jsx)(Z, {
        numOfSelectedUsers: M.length,
        anySelected: j.size > 0
      }), (0, r.jsx)(x.uzC, {
        selectionMode: "multiple",
        value: Array.from(j.values()),
        options: w,
        formatOption: e => ({
          id: e.id,
          value: e,
          label: u.ZP.getName(e)
        }),
        onSelectionChange: e => {
          let t = Array.isArray(e) ? e : [e],
            a = new Map;
          t.forEach(e => {
            null != e && a.set(e.id, e)
          }), g(a)
        },
        children: (0, r.jsx)("div", {
          className: b.searchbar,
          children: (0, r.jsx)(x.CtY, {
            placeholder: 0 === j.size ? y.intl.string(y.t.Kd5RaI) : "",
            onQueryChange: e => {
              f(e.target.value)
            }
          })
        })
      })]
    }), P ? (0, r.jsx)(O, {}) : (0, r.jsxs)(C.w0Z, {
      className: b.list,
      children: [w.map(e => (0, r.jsx)(L.Z, {
        disabled: [...j.values()].filter(e => !B.has(e.id)).length >= s && !j.has(e.id) && !B.has(e.id),
        checked: j.has(e.id),
        user: e,
        onChange: (e, t) => {
          g(a => {
            let r = new Map(a);
            return t ? r.set(e.id, e) : r.delete(e.id), r
          })
        }
      }, e.id)), k && (0, r.jsx)(x.$jN, {}), (0, r.jsx)("div", {
        ref: A
      })]
    }), (0, r.jsx)("div", {
      className: n()(b.footer, b.footerSeparator),
      children: (0, r.jsx)("div", {
        className: b.submit,
        children: (0, r.jsx)(C.zxk, {
          variant: "primary",
          fullWidth: true,
          text: P ? y.intl.string(y.t.wpSqAW) : y.intl.string(y.t.ItpQxk),
          disabled: 0 === j.size && !P || v,
          onClick: async () => {
            if (P) return void t();
            S(true), await a([...j.values()]), S(false)
          }
        })
      })
    })]
  })
}