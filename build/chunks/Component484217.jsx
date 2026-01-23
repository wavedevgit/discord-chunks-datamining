/** Chunk was on 26489 **/
/** chunk id: 484217, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Ay: () => k
}), require("./896048.js"), require("./228524.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
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

function N(e) {
  let {
    numOfSelectedUsers: t,
    anySelected: i
  } = e, a = (0, g.A)({
    numNewSelected: t,
    anySelected: i
  });
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)("div", {
      className: v.DD,
      children: [(0, s.jsx)(M, {
        className: v.oc
      }), (0, s.jsx)(x.Heading, {
        variant: "heading-xl/bold",
        children: y.intl.string(y.t.Lm2nFc)
      })]
    }), (0, s.jsx)(x.Text, {
      className: v.h_,
      variant: "text-md/medium",
      color: "text-default",
      children: a
    })]
  })
}

function O() {
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)("div", {
      className: v.DD,
      children: (0, s.jsx)(x.Heading, {
        variant: "heading-xl/bold",
        children: y.intl.string(y.t["PFp+aJ"])
      })
    }), (0, s.jsx)(x.Text, {
      className: v.h_,
      variant: "text-md/medium",
      color: "text-default",
      children: y.intl.string(y.t.eBIGB4)
    })]
  })
}

function F() {
  return (0, s.jsx)("div", {
    className: v.JM,
    children: (0, s.jsx)(x._V3, {
      src: b,
      width: 225,
      height: 160
    })
  })
}

function U(e) {
  let {
    onClose: t
  } = e;
  return (0, s.jsxs)("div", {
    className: v.LK,
    children: [(0, s.jsxs)("div", {
      className: l()(v.tU, v.HE),
      children: [(0, s.jsx)("div", {
        className: v.DD,
        children: (0, s.jsx)(x.Heading, {
          variant: "heading-xl/bold",
          children: y.intl.string(y.t.a9HOKg)
        })
      }), (0, s.jsx)(x.Text, {
        className: v.h_,
        variant: "text-md/medium",
        color: "text-default",
        children: y.intl.string(y.t.JjjeZb)
      })]
    }), (0, s.jsx)("div", {
      className: v.JM,
      children: (0, s.jsx)(x._V3, {
        src: S,
        width: 178,
        height: 190
      })
    }), (0, s.jsx)("div", {
      className: l()(v.qr, v.h0),
      children: (0, s.jsx)("div", {
        className: v.tA,
        children: (0, s.jsx)(o.$nd, {
          variant: "primary",
          fullWidth: true,
          text: y.intl.string(y.t.wpSqAW),
          onClick: () => t()
        })
      })
    })]
  })
}

function E(e) {
  let {
    onShare: t
  } = e, i = (0, c.bG)([j.A], () => j.A.getRecipientStatus()), [r, n] = a.useState([]), [C, d] = a.useState(new Set), [h, f] = a.useState(false);
  return a.useEffect(() => {
    (async () => {
      let e = [];
      for (let [t, s] of i)
        if (s === _.aK.PENDING) {
          let i = await (0, p.wz)(t);
          e.push(i)
        } n(e)
    })()
  }, [i]), (0, s.jsxs)("div", {
    className: v.Dy,
    children: [(0, s.jsxs)("div", {
      className: l()(v.hi, v.HE),
      children: [(0, s.jsxs)("div", {
        className: v.DD,
        children: [(0, s.jsx)(M, {
          className: v.oc
        }), (0, s.jsx)(x.Heading, {
          variant: "heading-xl/bold",
          children: y.intl.string(y.t.SY9tyI)
        })]
      }), (0, s.jsx)(x.Text, {
        className: v.h_,
        variant: "text-md/medium",
        color: "text-default",
        children: y.intl.string(y.t.mPmPri)
      })]
    }), (0, s.jsx)("div", {
      className: v.p_,
      children: r.map(e => (0, s.jsx)(L.A, {
        user: e,
        checked: C.has(e),
        onChange: (e, t) => {
          d(i => {
            let s = new Set(i);
            return t ? s.add(e) : s.delete(e), s
          })
        }
      }, e.id))
    }), (0, s.jsx)("div", {
      className: l()(v.qr, v.h0),
      children: (0, s.jsx)("div", {
        className: v.tA,
        children: (0, s.jsx)(o.$nd, {
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
  return "light" === (0, c.bG)([f.A], () => f.A.theme) ? (0, s.jsx)(x._V3, {
    className: t,
    src: A,
    width: 55,
    height: 38
  }) : (0, s.jsx)(x._V3, {
    className: t,
    src: w,
    width: 55,
    height: 38
  })
}
let k = function(e) {
  let {
    onClose: t,
    onShare: i
  } = e, r = (0, c.bG)([j.A], () => j.A.getReferralsRemaining()), [n, p] = a.useState(""), f = (0, h.A)(n, 400), [_, g] = a.useState(new Map), [A, S] = a.useState(false), {
    eligibleUsers: b,
    fetchUsers: w,
    hasError: M,
    isFetching: k,
    resendUsers: R
  } = (0, m.i)({
    searchQuery: f,
    selectedUsers: _
  }), B = a.useMemo(() => [..._.keys()].filter(e => !R.has(e)), [_, R]);
  C()(null != r, "Referrals remaining should not be null");
  let G = (0, d.K)(e => {
    e && !k && w()
  });
  if (M) return (0, s.jsx)(U, {
    onClose: t
  });
  if (0 === r) return (0, s.jsx)(E, {
    onShare: i
  });
  let D = f.length > 0 && 0 === b.length;
  return (0, s.jsxs)("div", {
    children: [(0, s.jsxs)("div", {
      className: l()(v.wx, v.HE),
      children: [D ? (0, s.jsx)(O, {}) : (0, s.jsx)(N, {
        numOfSelectedUsers: B.length,
        anySelected: _.size > 0
      }), (0, s.jsx)(x.iS7, {
        selectionMode: "multiple",
        value: Array.from(_.values()),
        options: b,
        formatOption: e => ({
          id: e.id,
          value: e,
          label: u.Ay.getName(e)
        }),
        onSelectionChange: e => {
          let t = Array.isArray(e) ? e : [e],
            i = new Map;
          t.forEach(e => {
            null != e && i.set(e.id, e)
          }), g(i)
        },
        children: (0, s.jsx)("div", {
          className: v.c,
          children: (0, s.jsx)(x.a32, {
            placeholder: 0 === _.size ? y.intl.string(y.t.Kd5RaI) : "",
            onQueryChange: e => {
              p(e.target.value)
            }
          })
        })
      })]
    }), D ? (0, s.jsx)(F, {}) : (0, s.jsxs)(o.ArX, {
      className: v.p_,
      children: [b.map(e => (0, s.jsx)(L.A, {
        disabled: [..._.values()].filter(e => !R.has(e.id)).length >= r && !_.has(e.id) && !R.has(e.id),
        checked: _.has(e.id),
        user: e,
        onChange: (e, t) => {
          g(i => {
            let s = new Map(i);
            return t ? s.set(e.id, e) : s.delete(e.id), s
          })
        }
      }, e.id)), k && (0, s.jsx)(x.y$y, {}), (0, s.jsx)("div", {
        ref: G
      })]
    }), (0, s.jsx)("div", {
      className: l()(v.qr, v.h0),
      children: (0, s.jsx)("div", {
        className: v.tA,
        children: (0, s.jsx)(o.$nd, {
          variant: "primary",
          fullWidth: true,
          text: D ? y.intl.string(y.t.wpSqAW) : y.intl.string(y.t.ItpQxk),
          disabled: 0 === _.size && !D || A,
          onClick: async () => {
            D ? t() : (S(true), await i([..._.values()]), S(false))
          }
        })
      })
    })]
  })
}