/** Chunk was on 26489 **/
/** chunk id: 484217, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  Ay: () => k
}), require("./896048.js"), require("./228524.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  C = require.n(Chunk284009),
  Chunk172218 = require("./172218.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk803306 = require("./803306.js"),
  Chunk718213 = require("./718213.js"),
  Chunk544028 = require("./544028.js"),
  Chunk427262 = require("./427262.js"),
  Chunk326084 = require("./326084.js"),
  Chunk851746 = require("./851746.js"),
  Chunk972007 = require("./972007.js"),
  Chunk509870 = require("./509870.js"),
  Chunk211145 = require("./211145.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk558837 = require("./558837.js"),
  Chunk131265 = require("./131265.js"),
  Chunk556011 = require("./556011.js"),
  Chunk469961 = require("./469961.js"),
  Chunk172944 = require("./172944.js");

function O(e) {
  let {
    numOfSelectedUsers: t,
    anySelected: s
  } = e, a = (0, g.A)({
    numNewSelected: t,
    anySelected: s
  });
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: v.DD,
      children: [(0, i.jsx)(M, {
        className: v.oc
      }), (0, i.jsx)(x.Heading, {
        variant: "heading-xl/bold",
        children: y.intl.string(y.t.Lm2nFc)
      })]
    }), (0, i.jsx)(x.Text, {
      className: v.h_,
      variant: "text-md/medium",
      color: "text-default",
      children: a
    })]
  })
}

function N() {
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      className: v.DD,
      children: (0, i.jsx)(x.Heading, {
        variant: "heading-xl/bold",
        children: y.intl.string(y.t["PFp+aJ"])
      })
    }), (0, i.jsx)(x.Text, {
      className: v.h_,
      variant: "text-md/medium",
      color: "text-default",
      children: y.intl.string(y.t.eBIGB4)
    })]
  })
}

function F() {
  return (0, i.jsx)("div", {
    className: v.JM,
    children: (0, i.jsx)(x._V3, {
      src: S,
      width: 225,
      height: 160
    })
  })
}

function E(e) {
  let {
    onClose: t
  } = e;
  return (0, i.jsxs)("div", {
    className: v.LK,
    children: [(0, i.jsxs)("div", {
      className: r()(v.tU, v.HE),
      children: [(0, i.jsx)("div", {
        className: v.DD,
        children: (0, i.jsx)(x.Heading, {
          variant: "heading-xl/bold",
          children: y.intl.string(y.t.a9HOKg)
        })
      }), (0, i.jsx)(x.Text, {
        className: v.h_,
        variant: "text-md/medium",
        color: "text-default",
        children: y.intl.string(y.t.JjjeZb)
      })]
    }), (0, i.jsx)("div", {
      className: v.JM,
      children: (0, i.jsx)(x._V3, {
        src: A,
        width: 178,
        height: 190
      })
    }), (0, i.jsx)("div", {
      className: r()(v.qr, v.h0),
      children: (0, i.jsx)("div", {
        className: v.tA,
        children: (0, i.jsx)(o.$nd, {
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
  } = e, s = (0, c.bG)([_.A], () => _.A.getRecipientStatus()), [l, n] = a.useState([]), [C, d] = a.useState(new Set), [h, f] = a.useState(false);
  return a.useEffect(() => {
    (async () => {
      let e = [];
      for (let [t, i] of s)
        if (i === j.aK.PENDING) {
          let s = await (0, p.wz)(t);
          e.push(s)
        } n(e)
    })()
  }, [s]), (0, i.jsxs)("div", {
    className: v.Dy,
    children: [(0, i.jsxs)("div", {
      className: r()(v.hi, v.HE),
      children: [(0, i.jsxs)("div", {
        className: v.DD,
        children: [(0, i.jsx)(M, {
          className: v.oc
        }), (0, i.jsx)(x.Heading, {
          variant: "heading-xl/bold",
          children: y.intl.string(y.t.SY9tyI)
        })]
      }), (0, i.jsx)(x.Text, {
        className: v.h_,
        variant: "text-md/medium",
        color: "text-default",
        children: y.intl.string(y.t.mPmPri)
      })]
    }), (0, i.jsx)("div", {
      className: v.p_,
      children: l.map(e => (0, i.jsx)(L.A, {
        user: e,
        checked: C.has(e),
        onChange: (e, t) => {
          d(s => {
            let i = new Set(s);
            return t ? i.add(e) : i.delete(e), i
          })
        }
      }, e.id))
    }), (0, i.jsx)("div", {
      className: r()(v.qr, v.h0),
      children: (0, i.jsx)("div", {
        className: v.tA,
        children: (0, i.jsx)(o.$nd, {
          text: y.intl.string(y.t.ItpQxk),
          fullWidth: true,
          variant: "primary",
          disabled: h,
          onClick: async () => {
            f(true), await t([...C.values()]), f(false)
          }
        })
      })
    })]
  })
}

function M(e) {
  let {
    className: t
  } = e;
  return "light" === (0, c.bG)([f.A], () => f.A.theme) ? (0, i.jsx)(x._V3, {
    className: t,
    src: b,
    width: 55,
    height: 38
  }) : (0, i.jsx)(x._V3, {
    className: t,
    src: w,
    width: 55,
    height: 38
  })
}
let k = function(e) {
  let {
    onClose: t,
    onShare: s
  } = e, l = (0, c.bG)([_.A], () => _.A.getReferralsRemaining()), [n, p] = a.useState(""), f = (0, h.A)(n, 400), [j, g] = a.useState(new Map), [b, A] = a.useState(false), {
    eligibleUsers: S,
    fetchUsers: w,
    hasError: M,
    isFetching: k,
    resendUsers: R
  } = (0, m.i)({
    searchQuery: f,
    selectedUsers: j
  }), B = a.useMemo(() => [...j.keys()].filter(e => !R.has(e)), [j, R]);
  C()(null != l, "Referrals remaining should not be null");
  let G = (0, d.K)(e => {
    e && !k && w()
  });
  if (M) return (0, i.jsx)(E, {
    onClose: t
  });
  if (0 === l) return (0, i.jsx)(U, {
    onShare: s
  });
  let D = f.length > 0 && 0 === S.length;
  return (0, i.jsxs)("div", {
    children: [(0, i.jsxs)("div", {
      className: r()(v.wx, v.HE),
      children: [D ? (0, i.jsx)(N, {}) : (0, i.jsx)(O, {
        numOfSelectedUsers: B.length,
        anySelected: j.size > 0
      }), (0, i.jsx)(x.iS7, {
        selectionMode: "multiple",
        value: Array.from(j.values()),
        options: S,
        formatOption: e => ({
          id: e.id,
          value: e,
          label: u.Ay.getName(e)
        }),
        onSelectionChange: e => {
          let t = Array.isArray(e) ? e : [e],
            s = new Map;
          t.forEach(e => {
            null != e && s.set(e.id, e)
          }), g(s)
        },
        children: (0, i.jsx)("div", {
          className: v.c,
          children: (0, i.jsx)(x.a32, {
            placeholder: 0 === j.size ? y.intl.string(y.t.Kd5RaI) : "",
            onQueryChange: e => {
              p(e.target.value)
            }
          })
        })
      })]
    }), D ? (0, i.jsx)(F, {}) : (0, i.jsxs)(o.ArX, {
      className: v.p_,
      children: [S.map(e => (0, i.jsx)(L.A, {
        disabled: [...j.values()].filter(e => !R.has(e.id)).length >= l && !j.has(e.id) && !R.has(e.id),
        checked: j.has(e.id),
        user: e,
        onChange: (e, t) => {
          g(s => {
            let i = new Map(s);
            return t ? i.set(e.id, e) : i.delete(e.id), i
          })
        }
      }, e.id)), k && (0, i.jsx)(x.y$y, {}), (0, i.jsx)("div", {
        ref: G
      })]
    }), (0, i.jsx)("div", {
      className: r()(v.qr, v.h0),
      children: (0, i.jsx)("div", {
        className: v.tA,
        children: (0, i.jsx)(o.$nd, {
          variant: "primary",
          fullWidth: true,
          text: D ? y.intl.string(y.t.wpSqAW) : y.intl.string(y.t.ItpQxk),
          disabled: 0 === j.size && !D || b,
          onClick: async () => {
            D ? t() : (A(true), await s([...j.values()]), A(false))
          }
        })
      })
    })]
  })
}