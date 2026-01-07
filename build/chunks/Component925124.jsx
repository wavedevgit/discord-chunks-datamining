/** Chunk was on 6043 **/
/** chunk id: 925124, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
}), require("./388685.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk544891 = require("./544891.js"),
  Chunk704215 = require("./704215.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk105713 = require("./105713.js"),
  Chunk937579 = require("./937579.js"),
  Chunk675478 = require("./675478.js"),
  Chunk431 = require("./431.js"),
  Chunk572004 = require("./572004.js"),
  Chunk55935 = require("./55935.js"),
  Chunk74538 = require("./74538.js"),
  Chunk604776 = require("./604776.jsx"),
  Chunk246992 = require("./246992.js"),
  Chunk232867 = require("./232867.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk68428 = require("./68428.js"),
  Chunk663618 = require("./663618.js");
let E = async () => {
  try {
    let {
      body: e
    } = await s.tn.get({
      url: C.ANM.USER_OFFER_IDS,
      rejectWithError: true
    });
    return e
  } catch (e) {
    return []
  }
}, T = async (e, t) => {
  try {
    await s.tn.post({
      url: C.ANM.CREATE_USER_OFFER(e, t),
      rejectWithError: true
    })
  } catch (e) {} finally {
    await (0, m.Tf)()
  }
}, O = async (e, t) => {
  try {
    await s.tn.del({
      url: C.ANM.UPDATE_USER_OFFER(e, t),
      rejectWithError: true
    })
  } catch (e) {} finally {
    await (0, m.Tf)()
  }
}, N = async () => {
  try {
    let {
      body: e
    } = await s.tn.get({
      url: C.ANM.USER_OFFERS,
      rejectWithError: true
    });
    return e
  } catch (e) {
    return {
      trial: [],
      discount: []
    }
  }
}, P = async () => {
  try {
    await s.tn.del({
      url: C.ANM.USER_OFFERS,
      rejectWithError: true
    })
  } catch (e) {} finally {
    await f.Z.forceReset(), await (0, m.Tf)()
  }
}, w = async e => {
  await s.tn.post({
    url: C.ANM.CREATE_REVERSE_TRIAL,
    body: {
      ends_at: e
    },
    rejectWithError: true
  })
};

function I(e) {
  var t, n, i, o, c;
  let {
    offer: p,
    offerOptions: f,
    forceRefetch: g
  } = e, [v, j] = r.useState(false), [S, E] = r.useState(false), [T, N] = r.useState(false), [P, w] = r.useState(false);
  r.useEffect(() => {
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
    expires_at: k,
    redeemed_at: R,
    trial_id: A,
    subscription_trial: D,
    referrer: Z
  } = p, L = null != (n = null == (t = f.find(e => {
    let {
      value: t
    } = e;
    return t === A
  })) ? true : t.label) ? n : "Unknown";
  null != Z && (L = "".concat(L, " from @").concat(Z.username));
  let M = null != k,
    U = null != k && new Date(k).getTime() < Date.now(),
    B = (null == D ? true : D.sku_id) === y.Si.TIER_0,
    F = async () => {
      N(true), M ? await G({
        expiresAt: null
      }) : await (0, m.ab)(p), g(), N(false)
    }, G = async e => {
      N(true);
      try {
        await s.tn.patch({
          url: C.ANM.UPDATE_USER_OFFER(I, "trial"),
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
        g(), N(false)
      }
    };
  r.useEffect(() => {
    if (v) {
      let e = setTimeout(() => {
        j(false)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
    if (S) {
      let e = setTimeout(() => {
        E(false)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
  }, [v, S]);
  let V = "Active";
  return M && (V = "Acked"), U && (V = "Expired"), (0, a.jsxs)("div", {
    className: l()(_.card, B ? _.gradientWrapperTier0 : _.gradientWrapperTier2),
    children: [(0, a.jsx)("div", {
      className: l()(_.row, _.nameRow),
      children: (0, a.jsx)(d.Heading, {
        variant: "heading-lg/semibold",
        color: "always-white",
        children: L
      })
    }), (0, a.jsxs)(d.P3F, {
      className: l()(_.row, _.idRow),
      onClick: () => {
        (0, h.JG)(I, () => j(true))
      },
      children: [(0, a.jsxs)(d.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Offer: ", I]
      }), v ? (0, a.jsx)(d.dz2, {
        size: "md",
        color: "currentColor",
        className: _.icon
      }) : (0, a.jsx)(d.TIy, {
        size: "xs",
        color: "currentColor",
        className: _.icon
      })]
    }), (0, a.jsxs)(d.P3F, {
      className: l()(_.row, _.idRow),
      onClick: () => {
        (0, h.JG)(A, () => E(true))
      },
      children: [(0, a.jsxs)(d.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial: ", A]
      }), S ? (0, a.jsx)(d.dz2, {
        size: "md",
        color: "currentColor",
        className: _.icon
      }) : (0, a.jsx)(d.TIy, {
        size: "xs",
        color: "currentColor",
        className: _.icon
      })]
    }), (0, a.jsx)("div", {
      className: _.row,
      children: (0, a.jsxs)(d.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial Length:", " ", (0, b.if)({
          intervalType: null != (i = null == D ? true : D.interval) ? i : y.rV.MONTH,
          intervalCount: null != (o = null == D ? true : D.interval_count) ? o : 1,
          capitalize: false
        })]
      })
    }), (0, a.jsxs)("div", {
      className: _.row,
      children: [(0, a.jsxs)(d.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Expires (", (0, u.Z)(), "):"]
      }), (0, a.jsx)("input", {
        type: "datetime-local",
        value: (0, x.mm)(k),
        onChange: e => {
          G({
            expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null
          })
        }
      })]
    }), (0, a.jsxs)("div", {
      className: _.row,
      children: [(0, a.jsx)(d.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: "Referrer ID:"
      }), (0, a.jsx)("input", {
        type: "text",
        value: null != (c = null == Z ? true : Z.id) ? c : "",
        onChange: e => G({
          referrerId: e.target.value
        })
      })]
    }), (0, a.jsxs)("div", {
      className: _.badgeContainer,
      children: [(0, a.jsx)(d.P3F, {
        onClick: F,
        className: l()(_.badge, _.clickable, {
          [_.acked]: M,
          [_.expired]: U
        }),
        children: (0, a.jsx)(d.Text, {
          variant: "eyebrow",
          color: "Acked" === V ? true : "always-white",
          children: V
        })
      }), null != R && (0, a.jsx)("div", {
        className: l()(_.badge, _.redeemed),
        children: (0, a.jsx)(d.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Redeemed"
        })
      })]
    }), (0, a.jsx)(d.P3F, {
      onClick: async () => {
        N(true), await O(I, "trial"), g(), N(false)
      },
      children: (0, a.jsx)(d.XHJ, {
        size: "md",
        color: "currentColor",
        className: l()(_.icon, _.trashIcon)
      })
    }), (0, a.jsx)("div", {
      className: l()(_.loadingContainer, {
        [_.isLoading]: T || P
      }),
      children: (0, a.jsx)(d.$jN, {})
    })]
  })
}

function k(e) {
  var t, n;
  let {
    offer: i,
    offerOptions: o,
    forceRefetch: c
  } = e, [p, f] = r.useState(false), [b, g] = r.useState(false), [v, j] = r.useState(false), [y, S] = r.useState(false);
  r.useEffect(() => {
    v && S(true);
    let e = setTimeout(() => {
      S(false)
    }, 500);
    return () => {
      clearTimeout(e)
    }
  }, [v]);
  let {
    id: E,
    expires_at: T,
    applied_at: N,
    discount_id: P,
    discount: w
  } = i, I = null != (n = null == (t = o.find(e => {
    let {
      value: t
    } = e;
    return t === P
  })) ? true : t.label) ? n : "Unknown", k = null != T, R = null != T && new Date(T).getTime() < Date.now(), A = async () => {
    j(true), k ? await D({
      expiresAt: null
    }) : await (0, m.ab)(true, i), c(), j(false)
  }, D = async e => {
    let {
      expiresAt: t
    } = e;
    j(true);
    try {
      await s.tn.patch({
        url: C.ANM.UPDATE_USER_OFFER(E, "discount"),
        body: {
          expires_at: t
        },
        rejectWithError: true
      })
    } finally {
      c(), j(false)
    }
  };
  r.useEffect(() => {
    if (p) {
      let e = setTimeout(() => {
        f(false)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
    if (b) {
      let e = setTimeout(() => {
        g(false)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
  }, [p, b]);
  let Z = "Active";
  return R && (Z = "Expired"), k && (Z = "Acked"), (0, a.jsxs)("div", {
    className: l()(_.card, _.discount),
    children: [(0, a.jsxs)("div", {
      className: l()(_.row, _.nameRow),
      children: [(0, a.jsx)(d.Heading, {
        variant: "heading-lg/semibold",
        color: "text-default",
        children: I
      }), (0, a.jsx)(d.P3F, {
        onClick: async () => {
          j(true), await O(E, "discount"), c(), j(false)
        },
        children: (0, a.jsx)(d.XHJ, {
          size: "md",
          color: "currentColor",
          className: l()(_.icon, _.trashIcon)
        })
      })]
    }), (0, a.jsxs)(d.P3F, {
      className: l()(_.row, _.idRow),
      onClick: () => {
        (0, h.JG)(E, () => f(true))
      },
      children: [(0, a.jsxs)(d.Text, {
        variant: "eyebrow",
        color: "text-default",
        children: ["Offer: ", E]
      }), p ? (0, a.jsx)(d.dz2, {
        size: "md",
        color: "currentColor",
        className: l()(_.icon, _.noMargin)
      }) : (0, a.jsx)(d.TIy, {
        size: "xs",
        color: "currentColor",
        className: _.icon
      })]
    }), (0, a.jsxs)(d.P3F, {
      className: l()(_.row, _.idRow),
      onClick: () => {
        (0, h.JG)(P, () => g(true))
      },
      children: [(0, a.jsxs)(d.Text, {
        variant: "eyebrow",
        color: "text-default",
        children: ["Discount: ", P]
      }), b ? (0, a.jsx)(d.dz2, {
        size: "md",
        color: "currentColor",
        className: l()(_.icon, _.noMargin)
      }) : (0, a.jsx)(d.TIy, {
        size: "xs",
        color: "currentColor",
        className: _.icon
      })]
    }), (null == w ? true : w.amount) != null && (0, a.jsx)("div", {
      children: (0, a.jsxs)(d.Text, {
        variant: "eyebrow",
        color: "text-default",
        children: [w.amount, "% off"]
      })
    }), (0, a.jsxs)("div", {
      className: _.row,
      children: [(0, a.jsxs)(d.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Expires (", (0, u.Z)(), "):"]
      }), (0, a.jsx)("input", {
        type: "datetime-local",
        value: (0, x.mm)(T),
        onChange: e => D({
          expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null
        })
      })]
    }), (0, a.jsxs)("div", {
      className: _.badgeContainer,
      children: [(0, a.jsx)(d.P3F, {
        onClick: A,
        className: l()(_.badge, _.clickable, {
          [_.acked]: k,
          [_.expired]: R
        }),
        children: (0, a.jsx)(d.Text, {
          variant: "eyebrow",
          color: "Acked" === Z ? true : "always-white",
          children: Z
        })
      }), null != N && (0, a.jsx)("div", {
        className: l()(_.badge, _.redeemed),
        children: (0, a.jsx)(d.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Applied"
        })
      })]
    }), (0, a.jsx)("div", {
      className: l()(_.loadingContainer, {
        [_.isLoading]: v || y
      }),
      children: (0, a.jsx)(d.$jN, {})
    })]
  })
}

function R() {
  let [e, t] = r.useState([]), [n, i] = r.useState([]), [l, s] = r.useState(), [u, h] = r.useState(), [x, b] = r.useState([]), [y, O] = r.useState([]), [R, A] = r.useState(true), [D, Z] = r.useState(10080), [L, M] = r.useState([]), {
    entitlements: U,
    deleteFractionalPremium: B,
    refreshEntitlementList: F
  } = (0, j.m)();
  r.useEffect(() => {
    F()
  }, [F]), r.useEffect(() => {
    M(U.filter(e => e.sourceType === C.kNB.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date))
  }, [U]), r.useEffect(() => {
    (0 === e.length || 0 === n.length || R) && E().then(e => {
      let n = Object.keys(e.trial).map(t => ({
          label: t,
          value: e.trial[t]
        })),
        a = Object.keys(e.discount).map(t => ({
          label: t,
          value: e.discount[t]
        }));
      t(n), i(a), null == l && s(n[0].value), null == u && h(a[0].value)
    })
  }, [e, n, l, u, R]), r.useEffect(() => {
    R && (A(false), f.Z.forceReset(), (0, m.Tf)(), N().then(e => {
      b(e.trial.sort((e, t) => e.id.localeCompare(t.id))), O(e.discount.sort((e, t) => e.id.localeCompare(t.id)))
    }))
  }, [R]);
  let G = async () => {
    null != l && (await T(l, "trial"), A(true))
  }, V = async () => {
    null != u && (await T(u, "discount"), A(true))
  }, z = async () => {
    await P(), A(true)
  }, W = async () => {
    let e = new Date(Date.now() + 60 * D * 1e3).toISOString();
    await w(e), F()
  };
  return (0, a.jsx)(d.zJl, {
    className: S.panel,
    children: (0, a.jsxs)("div", {
      className: _.panelInner,
      children: [(0, a.jsxs)("section", {
        className: _.section,
        children: [(0, a.jsx)(d.Heading, {
          variant: "heading-md/semibold",
          children: "Utils"
        }), (0, a.jsxs)("div", {
          className: _.buttons,
          children: [(0, a.jsx)(d.Button, {
            variant: "primary",
            size: "sm",
            text: "Clear all User Offers",
            onClick: z
          }), (0, a.jsx)(d.Button, {
            variant: "primary",
            size: "sm",
            text: "Clear Mobile Trials DismissibleContent",
            onClick: () => (0, p.w9)(o.z.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE)
          }), (0, a.jsx)(d.Button, {
            variant: "primary",
            size: "sm",
            text: "Clear Offer Nagbar DismissibleContent",
            onClick: () => (0, p.Z1)(o.z.NAGBAR_NOTICE_OFFER_EXPIRING)
          }), (0, a.jsx)(d.Button, {
            variant: "primary",
            size: "sm",
            text: "Refresh DevTools",
            onClick: () => A(true)
          })]
        })]
      }), (0, a.jsxs)("section", {
        className: _.section,
        children: [(0, a.jsx)(d.Heading, {
          variant: "heading-md/semibold",
          children: "Create a Trial Offer"
        }), (0, a.jsxs)("div", {
          className: _.inputRow,
          children: [(0, a.jsx)(c.B6, {
            className: _.input,
            options: e,
            isSelected: e => l === e,
            placeholder: "Trial Type",
            serialize: e => String(e),
            select: e => s(e),
            popoutLayerContext: v.O$
          }), (0, a.jsx)(d.Button, {
            variant: "primary",
            text: "Create",
            onClick: G
          })]
        })]
      }), (0, a.jsxs)("section", {
        className: _.section,
        children: [(0, a.jsx)(d.Heading, {
          variant: "heading-md/semibold",
          children: "Create a Discount Offer"
        }), (0, a.jsxs)("div", {
          className: _.inputRow,
          children: [(0, a.jsx)(c.B6, {
            className: _.input,
            options: n,
            isSelected: e => u === e,
            placeholder: "Discount Type",
            serialize: e => String(e),
            select: e => h(e),
            popoutLayerContext: v.O$
          }), (0, a.jsx)(d.Button, {
            variant: "primary",
            text: "Create",
            onClick: V
          })]
        })]
      }), x.length > 0 && (0, a.jsxs)("section", {
        className: _.section,
        children: [(0, a.jsx)(d.Heading, {
          variant: "heading-md/semibold",
          children: "Existing Trial Offers"
        }), x.map(t => (0, a.jsx)(I, {
          offer: t,
          offerOptions: e,
          forceRefetch: () => A(true)
        }, t.id))]
      }), y.length > 0 && (0, a.jsxs)("section", {
        className: _.section,
        children: [(0, a.jsx)(d.Heading, {
          variant: "heading-md/semibold",
          children: "Existing Discount Offers"
        }), y.map(e => (0, a.jsx)(k, {
          offer: e,
          offerOptions: n,
          forceRefetch: () => A(true)
        }, e.id))]
      }), (0, a.jsxs)("section", {
        className: _.section,
        children: [(0, a.jsx)(d.Heading, {
          variant: "heading-md/semibold",
          children: "Create a Reverse Trial Entitlement"
        }), (0, a.jsxs)("div", {
          className: _.inputRow,
          children: [(0, a.jsx)(c.B6, {
            className: _.input,
            options: [{
              label: "5 minutes",
              value: 5
            }, {
              label: "1 hour",
              value: 60
            }, {
              label: "1 day",
              value: 1440
            }, {
              label: "1 week",
              value: 10080
            }],
            isSelected: e => D === e,
            placeholder: "Reverse Trial Length",
            serialize: e => String(e),
            select: e => Z(e),
            popoutLayerContext: v.O$
          }), (0, a.jsx)(d.Button, {
            variant: "primary",
            text: "Create",
            onClick: W
          })]
        })]
      }), L.length > 0 && (0, a.jsxs)("div", {
        children: [(0, a.jsx)(d.Text, {
          style: {
            marginTop: "15px"
          },
          variant: "text-md/bold",
          children: "Active reverse trial"
        }), (0, a.jsx)("div", {
          children: L.map(e => (0, a.jsx)(g.D, {
            entitlement: e,
            active: true,
            onDelete: () => B(e.id)
          }, e.id))
        })]
      })]
    })
  })
}