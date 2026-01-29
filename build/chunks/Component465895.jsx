/** Chunk was on 87557 **/
/** chunk id: 465895, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I
}), require("./896048.js"), require("./638769.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk562465 = require("./562465.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk472229 = require("./472229.js"),
  Chunk694080 = require("./694080.js"),
  Chunk594061 = require("./594061.js"),
  Chunk816733 = require("./816733.js"),
  Chunk957565 = require("./957565.js"),
  Chunk405269 = require("./405269.js"),
  Chunk927578 = require("./927578.js"),
  Chunk2915 = require("./2915.jsx"),
  Chunk367744 = require("./367744.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk815907 = require("./815907.js"),
  Chunk661251 = require("./661251.js");
let A = async () => {
  try {
    let {
      body: e
    } = await s.Bo.get({
      url: v.Rsh.USER_OFFER_IDS,
      rejectWithError: true
    });
    return e
  } catch (e) {
    return []
  }
}, C = async (e, t) => {
  try {
    await s.Bo.post({
      url: v.Rsh.CREATE_USER_OFFER(e, t),
      rejectWithError: true
    })
  } catch (e) {} finally {
    await (0, u._D)()
  }
}, S = async (e, t) => {
  try {
    await s.Bo.del({
      url: v.Rsh.UPDATE_USER_OFFER(e, t),
      rejectWithError: true
    })
  } catch (e) {} finally {
    await (0, u._D)()
  }
}, O = async () => {
  try {
    let {
      body: e
    } = await s.Bo.get({
      url: v.Rsh.USER_OFFERS,
      rejectWithError: true
    });
    return e
  } catch (e) {
    return {
      trial: [],
      discount: []
    }
  }
}, T = async () => {
  try {
    await s.Bo.del({
      url: v.Rsh.USER_OFFERS,
      rejectWithError: true
    })
  } catch (e) {} finally {
    await p.A.forceReset(), await (0, u._D)()
  }
}, E = async e => {
  await s.Bo.post({
    url: v.Rsh.CREATE_REVERSE_TRIAL,
    body: {
      ends_at: e
    },
    rejectWithError: true
  })
};

function N(e) {
  var t, n, r, o, m;
  let {
    offer: p,
    offerOptions: f,
    forceRefetch: b
  } = e, [y, A] = l.useState(false), [C, O] = l.useState(false), [T, E] = l.useState(false), [N, w] = l.useState(false);
  l.useEffect(() => {
    T && w(true);
    let e = setTimeout(() => {
      w(false)
    }, 500);
    return () => {
      clearTimeout(e)
    }
  }, [T]);
  let {
    id: I,
    expires_at: P,
    redeemed_at: k,
    trial_id: R,
    subscription_trial: D,
    referrer: M
  } = p, L = null != (t = null == (m = f.find(e => {
    let {
      value: t
    } = e;
    return t === R
  })) ? true : m.label) ? t : "Unknown";
  null != M && (L = "".concat(L, " from @").concat(M.username));
  let U = null != P,
    B = null != P && new Date(P).getTime() < Date.now(),
    G = (null == D ? true : D.sku_id) === j.pe.TIER_0,
    F = async () => {
      E(true), U ? await V({
        expiresAt: null
      }) : await (0, u.u1)(p), b(), E(false)
    }, V = async e => {
      E(true);
      try {
        await s.Bo.patch({
          url: v.Rsh.UPDATE_USER_OFFER(I, "trial"),
          body: function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                a = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), a.forEach(function(t) {
                var a;
                a = n[t], t in e ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = a
              })
            }
            return e
          }({}, "expiresAt" in e && {
            expires_at: e.expiresAt
          }, "referrerId" in e && {
            referrer_id: e.referrerId
          }),
          rejectWithError: true
        })
      } finally {
        b(), E(false)
      }
    };
  l.useEffect(() => {
    if (y) {
      let e = setTimeout(() => {
        A(false)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
    if (C) {
      let e = setTimeout(() => {
        O(false)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
  }, [y, C]);
  let W = "Active";
  return U && (W = "Acked"), B && (W = "Expired"), (0, a.jsxs)("div", {
    className: i()(_.Nr, G ? _.Qf : _.C1),
    children: [(0, a.jsx)("div", {
      className: i()(_.nM, _.S7),
      children: (0, a.jsx)(c.Heading, {
        variant: "heading-lg/semibold",
        color: "always-white",
        children: L
      })
    }), (0, a.jsxs)(c.DUT, {
      className: i()(_.nM, _.QB),
      onClick: () => {
        (0, h.C)(I, () => A(true))
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Offer: ", I]
      }), y ? (0, a.jsx)(c.A9s, {
        size: "md",
        color: "currentColor",
        className: _.Kk
      }) : (0, a.jsx)(c.TdU, {
        size: "xs",
        color: "currentColor",
        className: _.Kk
      })]
    }), (0, a.jsxs)(c.DUT, {
      className: i()(_.nM, _.QB),
      onClick: () => {
        (0, h.C)(R, () => O(true))
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial: ", R]
      }), C ? (0, a.jsx)(c.A9s, {
        size: "md",
        color: "currentColor",
        className: _.Kk
      }) : (0, a.jsx)(c.TdU, {
        size: "xs",
        color: "currentColor",
        className: _.Kk
      })]
    }), (0, a.jsx)("div", {
      className: _.nM,
      children: (0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial Length:", " ", (0, g.re)({
          intervalType: null != (n = null == D ? true : D.interval) ? n : j.WT.MONTH,
          intervalCount: null != (r = null == D ? true : D.interval_count) ? r : 1,
          capitalize: false
        })]
      })
    }), (0, a.jsxs)("div", {
      className: _.nM,
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Expires (", (0, d.A)(), "):"]
      }), (0, a.jsx)("input", {
        type: "datetime-local",
        value: (0, x.Xm)(P),
        onChange: e => {
          V({
            expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null
          })
        }
      })]
    }), (0, a.jsxs)("div", {
      className: _.nM,
      children: [(0, a.jsx)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: "Referrer ID:"
      }), (0, a.jsx)("input", {
        type: "text",
        value: null != (o = null == M ? true : M.id) ? o : "",
        onChange: e => V({
          referrerId: e.target.value
        })
      })]
    }), (0, a.jsxs)("div", {
      className: _.fC,
      children: [(0, a.jsx)(c.DUT, {
        onClick: F,
        className: i()(_.qS, _.vk, {
          [_.R1]: U,
          [_._7]: B
        }),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "Acked" === W ? true : "always-white",
          children: W
        })
      }), null != k && (0, a.jsx)("div", {
        className: i()(_.qS, _.k3),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Redeemed"
        })
      })]
    }), (0, a.jsx)(c.DUT, {
      onClick: async () => {
        E(true), await S(I, "trial"), b(), E(false)
      },
      children: (0, a.jsx)(c.ucK, {
        size: "md",
        color: "currentColor",
        className: i()(_.Kk, _.IT)
      })
    }), (0, a.jsx)("div", {
      className: i()(_.g4, {
        [_.VP]: T || N
      }),
      children: (0, a.jsx)(c.y$y, {})
    })]
  })
}

function w(e) {
  var t, n;
  let {
    offer: r,
    offerOptions: o,
    forceRefetch: m
  } = e, [p, g] = l.useState(false), [f, b] = l.useState(false), [j, y] = l.useState(false), [A, C] = l.useState(false);
  l.useEffect(() => {
    j && C(true);
    let e = setTimeout(() => {
      C(false)
    }, 500);
    return () => {
      clearTimeout(e)
    }
  }, [j]);
  let {
    id: O,
    expires_at: T,
    applied_at: E,
    discount_id: N,
    discount: w
  } = r, I = null != (t = null == (n = o.find(e => {
    let {
      value: t
    } = e;
    return t === N
  })) ? true : n.label) ? t : "Unknown", P = null != T, k = null != T && new Date(T).getTime() < Date.now(), R = async () => {
    y(true), P ? await D({
      expiresAt: null
    }) : await (0, u.u1)(true, r), m(), y(false)
  }, D = async e => {
    let {
      expiresAt: t
    } = e;
    y(true);
    try {
      await s.Bo.patch({
        url: v.Rsh.UPDATE_USER_OFFER(O, "discount"),
        body: {
          expires_at: t
        },
        rejectWithError: true
      })
    } finally {
      m(), y(false)
    }
  };
  l.useEffect(() => {
    if (p) {
      let e = setTimeout(() => {
        g(false)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
    if (f) {
      let e = setTimeout(() => {
        b(false)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
  }, [p, f]);
  let M = "Active";
  return k && (M = "Expired"), P && (M = "Acked"), (0, a.jsxs)("div", {
    className: i()(_.Nr, _.id),
    children: [(0, a.jsx)("div", {
      className: i()(_.nM, _.S7),
      children: (0, a.jsx)(c.Heading, {
        variant: "heading-lg/semibold",
        color: "text-default",
        children: I
      })
    }), (0, a.jsxs)(c.DUT, {
      className: i()(_.nM, _.QB),
      onClick: () => {
        (0, h.C)(O, () => g(true))
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-default",
        children: ["Offer: ", O]
      }), p ? (0, a.jsx)(c.A9s, {
        size: "md",
        color: "currentColor",
        className: i()(_.Kk, _.mK)
      }) : (0, a.jsx)(c.TdU, {
        size: "xs",
        color: "currentColor",
        className: _.Kk
      })]
    }), (0, a.jsxs)(c.DUT, {
      className: i()(_.nM, _.QB),
      onClick: () => {
        (0, h.C)(N, () => b(true))
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-default",
        children: ["Discount: ", N]
      }), f ? (0, a.jsx)(c.A9s, {
        size: "md",
        color: "currentColor",
        className: i()(_.Kk, _.mK)
      }) : (0, a.jsx)(c.TdU, {
        size: "xs",
        color: "currentColor",
        className: _.Kk
      })]
    }), (null == w ? true : w.amount) != null && (0, a.jsx)("div", {
      children: (0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-default",
        children: [w.amount, "% off"]
      })
    }), (0, a.jsxs)("div", {
      className: _.nM,
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Expires (", (0, d.A)(), "):"]
      }), (0, a.jsx)("input", {
        type: "datetime-local",
        value: (0, x.Xm)(T),
        onChange: e => D({
          expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null
        })
      })]
    }), (0, a.jsxs)("div", {
      className: _.fC,
      children: [(0, a.jsx)(c.DUT, {
        onClick: R,
        className: i()(_.qS, _.vk, {
          [_.R1]: P,
          [_._7]: k
        }),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "Acked" === M ? true : "always-white",
          children: M
        })
      }), null != E && (0, a.jsx)("div", {
        className: i()(_.qS, _.k3),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Applied"
        })
      })]
    }), (0, a.jsx)(c.DUT, {
      className: _.aR,
      onClick: async () => {
        y(true), await S(O, "discount"), m(), y(false)
      },
      children: (0, a.jsx)(c.ucK, {
        size: "md",
        color: "currentColor",
        className: i()(_.Kk, _.fy)
      })
    }), (0, a.jsx)("div", {
      className: i()(_.g4, {
        [_.VP]: j || A
      }),
      children: (0, a.jsx)(c.y$y, {})
    })]
  })
}

function I() {
  let [e, t] = l.useState([]), [n, r] = l.useState([]), [i, s] = l.useState(), [d, h] = l.useState(), [x, g] = l.useState([]), [j, S] = l.useState([]), [I, P] = l.useState(true), [k, R] = l.useState(10080), [D, M] = l.useState([]), {
    entitlements: L,
    deleteFractionalPremium: U,
    refreshEntitlementList: B
  } = (0, b.o)();
  l.useEffect(() => {
    B()
  }, [B]), l.useEffect(() => {
    M(L.filter(e => e.sourceType === v.GD.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date))
  }, [L]), l.useEffect(() => {
    (0 === e.length || 0 === n.length || I) && A().then(e => {
      let n = Object.keys(e.trial).map(t => ({
          label: t,
          value: e.trial[t]
        })),
        a = Object.keys(e.discount).map(t => ({
          label: t,
          value: e.discount[t]
        }));
      t(n), r(a), null == i && s(n[0].value), null == d && h(a[0].value)
    })
  }, [e, n, i, d, I]), l.useEffect(() => {
    I && (P(false), p.A.forceReset(), (0, u._D)(), O().then(e => {
      g(e.trial.sort((e, t) => e.id.localeCompare(t.id))), S(e.discount.sort((e, t) => e.id.localeCompare(t.id)))
    }))
  }, [I]);
  let G = async () => {
    null != i && (await C(i, "trial"), P(true))
  }, F = async () => {
    null != d && (await C(d, "discount"), P(true))
  }, V = async () => {
    await T(), P(true)
  }, W = async () => {
    let e = new Date(Date.now() + 60 * k * 1e3).toISOString();
    await E(e), B()
  };
  return (0, a.jsx)(c.IpV, {
    className: y.nd,
    children: (0, a.jsxs)("div", {
      className: _.l$,
      children: [(0, a.jsxs)("section", {
        className: _.uW,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          children: "Utils"
        }), (0, a.jsxs)("div", {
          className: _.Uo,
          children: [(0, a.jsx)(c.Button, {
            variant: "primary",
            size: "sm",
            text: "Clear all User Offers",
            onClick: V
          }), (0, a.jsx)(c.Button, {
            variant: "primary",
            size: "sm",
            text: "Clear Mobile Trials DismissibleContent",
            onClick: () => (0, m.xB)(o.M.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE)
          }), (0, a.jsx)(c.Button, {
            variant: "primary",
            size: "sm",
            text: "Clear Offer Nagbar DismissibleContent",
            onClick: () => (0, m._N)(o.M.NAGBAR_NOTICE_OFFER_EXPIRING)
          }), (0, a.jsx)(c.Button, {
            variant: "primary",
            size: "sm",
            text: "Refresh DevTools",
            onClick: () => P(true)
          })]
        })]
      }), (0, a.jsx)("section", {
        className: _.uW,
        children: (0, a.jsxs)("div", {
          className: _.bd,
          children: [(0, a.jsx)(c.l6P, {
            label: "Create a Trial Offer",
            options: e,
            formatOption: e => {
              let {
                label: t,
                value: n
              } = e;
              return {
                label: t,
                value: n,
                id: n
              }
            },
            value: i,
            placeholder: "Trial Type",
            onSelectionChange: s,
            selectionMode: "single",
            fullWidth: true
          }), (0, a.jsx)(c.Button, {
            variant: "primary",
            text: "Create",
            onClick: G
          })]
        })
      }), (0, a.jsx)("section", {
        className: _.uW,
        children: (0, a.jsxs)("div", {
          className: _.bd,
          children: [(0, a.jsx)(c.l6P, {
            label: "Create a Discount Offer",
            options: n,
            formatOption: e => {
              let {
                label: t,
                value: n
              } = e;
              return {
                label: t,
                value: n,
                id: n
              }
            },
            value: d,
            placeholder: "Discount Type",
            onSelectionChange: h,
            selectionMode: "single",
            fullWidth: true
          }), (0, a.jsx)(c.Button, {
            variant: "primary",
            text: "Create",
            onClick: F
          })]
        })
      }), x.length > 0 && (0, a.jsxs)("section", {
        className: _.uW,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          children: "Existing Trial Offers"
        }), x.map(t => (0, a.jsx)(N, {
          offer: t,
          offerOptions: e,
          forceRefetch: () => P(true)
        }, t.id))]
      }), j.length > 0 && (0, a.jsxs)("section", {
        className: _.uW,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          children: "Existing Discount Offers"
        }), j.map(e => (0, a.jsx)(w, {
          offer: e,
          offerOptions: n,
          forceRefetch: () => P(true)
        }, e.id))]
      }), (0, a.jsx)("section", {
        className: _.uW,
        children: (0, a.jsxs)("div", {
          className: _.bd,
          children: [(0, a.jsx)(c.l6P, {
            label: "Create a Reverse Trial Entitlement",
            options: [{
              id: "5min",
              label: "5 minutes",
              value: 5
            }, {
              id: "1hour",
              label: "1 hour",
              value: 60
            }, {
              id: "1day",
              label: "1 day",
              value: 1440
            }, {
              id: "1week",
              label: "1 week",
              value: 10080
            }],
            value: k,
            placeholder: "Reverse Trial Length",
            onSelectionChange: R,
            selectionMode: "single",
            fullWidth: true
          }), (0, a.jsx)(c.Button, {
            variant: "primary",
            text: "Create",
            onClick: W
          })]
        })
      }), D.length > 0 && (0, a.jsxs)("div", {
        children: [(0, a.jsx)(c.Text, {
          style: {
            marginTop: "15px"
          },
          variant: "text-md/bold",
          children: "Active reverse trial"
        }), (0, a.jsx)("div", {
          children: D.map(e => (0, a.jsx)(f.I, {
            entitlement: e,
            active: true,
            onDelete: () => U(e.id)
          }, e.id))
        })]
      })]
    })
  })
}