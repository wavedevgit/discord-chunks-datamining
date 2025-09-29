/** Chunk was on 89342 **/
/** chunk id: 925124, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./388685.js"), require("./642613.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk544891 = require("./544891.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk937579 = require("./937579.js"),
  Chunk453591 = require("./453591.jsx"),
  Chunk675478 = require("./675478.js"),
  Chunk431 = require("./431.js"),
  Chunk572004 = require("./572004.js"),
  Chunk74538 = require("./74538.js"),
  Chunk604776 = require("./604776.jsx"),
  Chunk246992 = require("./246992.js"),
  Chunk232867 = require("./232867.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk596533 = require("./596533.js"),
  Chunk866403 = require("./866403.js");
let C = async () => {
  try {
    let {
      body: e
    } = await Chunk544891.tn.get({
      url: Chunk981631.ANM.USER_OFFER_IDS,
      rejectWithError: true
    });
    return module
  } catch (e) {
    return []
  }
}, E = async (e, t) => {
  try {
    await s.tn.post({
      url: v.ANM.CREATE_USER_OFFER(e, t),
      rejectWithError: true
    })
  } catch (e) {} finally {
    await (0, d.Tf)()
  }
}, N = async (e, t) => {
  try {
    await s.tn.del({
      url: v.ANM.UPDATE_USER_OFFER(e, t),
      rejectWithError: true
    })
  } catch (e) {} finally {
    await (0, d.Tf)()
  }
}, S = async () => {
  try {
    let {
      body: e
    } = await Chunk544891.tn.get({
      url: Chunk981631.ANM.USER_OFFERS,
      rejectWithError: true
    });
    return module
  } catch (e) {
    return {
      trial: [],
      discount: []
    }
  }
}, T = async () => {
  try {
    await Chunk544891.tn.del({
      url: Chunk981631.ANM.USER_OFFERS,
      rejectWithError: true
    })
  } catch (e) {} finally {
    await Chunk431.Z.forceReset(), await (0, Chunk937579.Tf)()
  }
}, O = async e => {
  await s.tn.post({
    url: v.ANM.CREATE_REVERSE_TRIAL,
    body: {
      ends_at: e
    },
    rejectWithError: true
  })
};

function P(e) {
  var t, n, i, o, u;
  let {
    offer: m,
    offerOptions: p,
    forceRefetch: f
  } = e, [b, g] = r.useState(false), [y, C] = r.useState(false), [E, S] = r.useState(false), [T, O] = r.useState(false);
  r.useEffect(() => {
    E && O(true);
    let e = setTimeout(() => {
      O(false)
    }, 500);
    return () => {
      clearTimeout(e)
    }
  }, [E]);
  let {
    id: P,
    expires_at: I,
    redeemed_at: k,
    trial_id: w,
    subscription_trial: R,
    referrer: A
  } = m, Z = null != (n = null == (t = p.find(e => {
    let {
      value: t
    } = e;
    return t === w
  })) ? true : t.label) ? n : "Unknown";
  null != A && (Z = "".concat(Z, " from @").concat(A.username));
  let D = null != I,
    L = null != I && new Date(I).getTime() < Date.now(),
    M = (null == R ? true : R.sku_id) === j.Si.TIER_0,
    U = async () => {
      S(true), D ? await F({
        expiresAt: null
      }) : await (0, d.ab)(m), f(), S(false)
    }, F = async e => {
      S(true);
      try {
        await s.tn.patch({
          url: v.ANM.UPDATE_USER_OFFER(P, "trial"),
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
        f(), S(false)
      }
    };
  r.useEffect(() => {
    if (b) {
      let e = setTimeout(() => {
        g(false)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
    if (y) {
      let e = setTimeout(() => {
        C(false)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
  }, [b, y]);
  let B = "Active";
  return D && (B = "Acked"), L && (B = "Expired"), (0, a.jsxs)("div", {
    className: l()(_.card, M ? _.gradientWrapperTier0 : _.gradientWrapperTier2),
    children: [(0, a.jsx)("div", {
      className: l()(_.row, _.nameRow),
      children: (0, a.jsx)(c.X6q, {
        variant: "heading-lg/semibold",
        color: "always-white",
        children: Z
      })
    }), (0, a.jsxs)(c.P3F, {
      className: l()(_.row, _.idRow),
      onClick: () => {
        (0, h.JG)(P, () => g(true))
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Offer: ", P]
      }), b ? (0, a.jsx)(c.dz2, {
        size: "md",
        color: "currentColor",
        className: _.icon
      }) : (0, a.jsx)(c.TIy, {
        size: "xs",
        color: "currentColor",
        className: _.icon
      })]
    }), (0, a.jsxs)(c.P3F, {
      className: l()(_.row, _.idRow),
      onClick: () => {
        (0, h.JG)(w, () => C(true))
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial: ", w]
      }), y ? (0, a.jsx)(c.dz2, {
        size: "md",
        color: "currentColor",
        className: _.icon
      }) : (0, a.jsx)(c.TIy, {
        size: "xs",
        color: "currentColor",
        className: _.icon
      })]
    }), (0, a.jsx)("div", {
      className: _.row,
      children: (0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial Length:", " ", (0, x.if)({
          intervalType: null != (i = null == R ? true : R.interval) ? i : j.rV.MONTH,
          intervalCount: null != (o = null == R ? true : R.interval_count) ? o : 1,
          capitalize: false
        })]
      })
    }), (0, a.jsxs)("div", {
      className: _.row,
      children: [(0, a.jsx)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: "Expires:"
      }), (0, a.jsx)("input", {
        type: "date",
        value: null != I ? I.substring(0, 10) : "",
        onChange: e => F({
          expiresAt: e.target.value
        })
      })]
    }), (0, a.jsxs)("div", {
      className: _.row,
      children: [(0, a.jsx)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: "Referrer ID:"
      }), (0, a.jsx)("input", {
        type: "text",
        value: null != (u = null == A ? true : A.id) ? u : "",
        onChange: e => F({
          referrerId: e.target.value
        })
      })]
    }), (0, a.jsxs)("div", {
      className: _.badgeContainer,
      children: [(0, a.jsx)(c.P3F, {
        onClick: U,
        className: l()(_.badge, _.clickable, {
          [_.acked]: D,
          [_.expired]: L
        }),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "Acked" === B ? true : "always-white",
          children: B
        })
      }), null != k && (0, a.jsx)("div", {
        className: l()(_.badge, _.redeemed),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Redeemed"
        })
      })]
    }), (0, a.jsx)(c.P3F, {
      onClick: async () => {
        S(true), await N(P, "trial"), f(), S(false)
      },
      children: (0, a.jsx)(c.XHJ, {
        size: "md",
        color: "currentColor",
        className: l()(_.icon, _.trashIcon)
      })
    }), (0, a.jsx)("div", {
      className: l()(_.loadingContainer, {
        [_.isLoading]: E || T
      }),
      children: (0, a.jsx)(c.$jN, {})
    })]
  })
}

function I(e) {
  var t, n;
  let {
    offer: i,
    offerOptions: o,
    forceRefetch: u
  } = e, [m, p] = r.useState(false), [x, f] = r.useState(false), [b, g] = r.useState(false), [j, y] = r.useState(false);
  r.useEffect(() => {
    b && y(true);
    let e = setTimeout(() => {
      y(false)
    }, 500);
    return () => {
      clearTimeout(e)
    }
  }, [b]);
  let {
    id: C,
    expires_at: E,
    applied_at: S,
    discount_id: T,
    discount: O
  } = i, P = null != (n = null == (t = o.find(e => {
    let {
      value: t
    } = e;
    return t === T
  })) ? true : t.label) ? n : "Unknown", I = null != E, k = null != E && new Date(E).getTime() < Date.now(), w = async () => {
    g(true), I ? await R({
      expiresAt: null
    }) : await (0, d.ab)(true, i), u(), g(false)
  }, R = async e => {
    let {
      expiresAt: t
    } = e;
    g(true);
    try {
      await s.tn.patch({
        url: v.ANM.UPDATE_USER_OFFER(C, "discount"),
        body: {
          expires_at: t
        },
        rejectWithError: true
      })
    } finally {
      u(), g(false)
    }
  };
  r.useEffect(() => {
    if (m) {
      let e = setTimeout(() => {
        p(false)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
    if (x) {
      let e = setTimeout(() => {
        f(false)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
  }, [m, x]);
  let A = "Active";
  return k && (A = "Expired"), I && (A = "Acked"), (0, a.jsxs)("div", {
    className: l()(_.card, _.discount),
    children: [(0, a.jsxs)("div", {
      className: l()(_.row, _.nameRow),
      children: [(0, a.jsx)(c.X6q, {
        variant: "heading-lg/semibold",
        color: "text-default",
        children: P
      }), (0, a.jsx)(c.P3F, {
        onClick: async () => {
          g(true), await N(C, "discount"), u(), g(false)
        },
        children: (0, a.jsx)(c.XHJ, {
          size: "md",
          color: "currentColor",
          className: l()(_.icon, _.trashIcon)
        })
      })]
    }), (0, a.jsxs)(c.P3F, {
      className: l()(_.row, _.idRow),
      onClick: () => {
        (0, h.JG)(C, () => p(true))
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-default",
        children: ["Offer: ", C]
      }), m ? (0, a.jsx)(c.dz2, {
        size: "md",
        color: "currentColor",
        className: l()(_.icon, _.noMargin)
      }) : (0, a.jsx)(c.TIy, {
        size: "xs",
        color: "currentColor",
        className: _.icon
      })]
    }), (0, a.jsxs)(c.P3F, {
      className: l()(_.row, _.idRow),
      onClick: () => {
        (0, h.JG)(T, () => f(true))
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-default",
        children: ["Discount: ", T]
      }), x ? (0, a.jsx)(c.dz2, {
        size: "md",
        color: "currentColor",
        className: l()(_.icon, _.noMargin)
      }) : (0, a.jsx)(c.TIy, {
        size: "xs",
        color: "currentColor",
        className: _.icon
      })]
    }), (null == O ? true : O.amount) != null && (0, a.jsx)("div", {
      children: (0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-default",
        children: [O.amount, "% off"]
      })
    }), (0, a.jsxs)("div", {
      className: _.row,
      children: [(0, a.jsx)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: "Expires:"
      }), (0, a.jsx)("input", {
        type: "date",
        value: null != E ? E.substring(0, 10) : "",
        onChange: e => R({
          expiresAt: e.target.value
        })
      })]
    }), (0, a.jsxs)("div", {
      className: _.badgeContainer,
      children: [(0, a.jsx)(c.P3F, {
        onClick: w,
        className: l()(_.badge, _.clickable, {
          [_.acked]: I,
          [_.expired]: k
        }),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "Acked" === A ? true : "always-white",
          children: A
        })
      }), null != S && (0, a.jsx)("div", {
        className: l()(_.badge, _.redeemed),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Applied"
        })
      })]
    }), (0, a.jsx)("div", {
      className: l()(_.loadingContainer, {
        [_.isLoading]: b || j
      }),
      children: (0, a.jsx)(c.$jN, {})
    })]
  })
}

function k() {
  let [e, t] = Chunk647438.useState([]), [n, i] = Chunk647438.useState([]), [l, s] = Chunk647438.useState(), [h, x] = Chunk647438.useState(), [j, N] = Chunk647438.useState([]), [k, w] = Chunk647438.useState([]), [R, A] = Chunk647438.useState(true), [Z, D] = Chunk647438.useState(10080), [L, M] = Chunk647438.useState([]), {
    entitlements: U,
    deleteFractionalPremium: F,
    refreshEntitlementList: B
  } = (0, Chunk232867.m)();
  Chunk647438.useEffect(() => {
    B()
  }, [B]), Chunk647438.useEffect(() => {
    M(U.filter(e => e.sourceType === v.kNB.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date))
  }, [U]), Chunk647438.useEffect(() => {
    (0 === module.length || 0 === require.length || R) && C().then(e => {
      let n = Object.keys(e.trial).map(t => ({
          label: t,
          value: e.trial[t]
        })),
        a = Object.keys(e.discount).map(t => ({
          label: t,
          value: e.discount[t]
        }));
      t(n), i(a), null == l && s(n[0].value), null == h && x(a[0].value)
    })
  }, [module, require, l, Chunk572004, R]), Chunk647438.useEffect(() => {
    R && (A(false), Chunk431.Z.forceReset(), (0, Chunk937579.Tf)(), S().then(e => {
      N(e.trial.sort((e, t) => e.id.localeCompare(t.id))), w(e.discount.sort((e, t) => e.id.localeCompare(t.id)))
    }))
  }, [R]);
  let G = async () => {
    null != l && (await E(l, "trial"), A(true))
  }, z = async () => {
    null != Chunk572004 && (await E(Chunk572004, "discount"), A(true))
  }, V = async () => {
    await T(), A(true)
  }, H = async () => {
    let e = new Date(Date.now() + 60 * Z * 1e3).toISOString();
    await O(module), B()
  }, {
    redeemReward: W
  } = (0, Chunk453591.h)();
  return (0, Chunk951288.jsx)(Chunk481060.zJl, {
    className: Chunk866403.panel,
    children: (0, Chunk951288.jsxs)("div", {
      className: Chunk596533.panelInner,
      children: [(0, Chunk951288.jsxs)("section", {
        className: Chunk596533.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: "Utils"
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk596533.buttons,
          children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            size: "sm",
            text: "Clear all User Offers",
            onClick: V
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            size: "sm",
            text: "Clear Mobile Trials DismissibleContent",
            onClick: () => (0, Chunk675478.w9)(Chunk704215.z.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE)
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            size: "sm",
            text: "Clear Offer Nagbar DismissibleContent",
            onClick: () => (0, Chunk675478.Z1)(Chunk704215.z.NAGBAR_NOTICE_OFFER_EXPIRING)
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            size: "sm",
            text: "Refresh DevTools",
            onClick: () => A(true)
          })]
        })]
      }), (0, Chunk951288.jsxs)("section", {
        className: Chunk596533.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: "Create a Trial Offer"
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk596533.inputRow,
          children: [(0, Chunk951288.jsx)(Chunk481060.PhF, {
            className: Chunk596533.input,
            options: module,
            isSelected: e => l === e,
            placeholder: "Trial Type",
            serialize: e => String(e),
            select: e => s(e),
            popoutLayerContext: Chunk246992.O$
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "Create",
            onClick: G
          })]
        })]
      }), (0, Chunk951288.jsxs)("section", {
        className: Chunk596533.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: "Create a Discount Offer"
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk596533.inputRow,
          children: [(0, Chunk951288.jsx)(Chunk481060.PhF, {
            className: Chunk596533.input,
            options: require,
            isSelected: e => h === e,
            placeholder: "Discount Type",
            serialize: e => String(e),
            select: e => x(e),
            popoutLayerContext: Chunk246992.O$
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "Create",
            onClick: z
          })]
        })]
      }), Chunk474936.length > 0 && (0, Chunk951288.jsxs)("section", {
        className: Chunk596533.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: "Existing Trial Offers"
        }), Chunk474936.map(t => (0, a.jsx)(P, {
          offer: t,
          offerOptions: e,
          forceRefetch: () => A(true)
        }, t.id))]
      }), k.length > 0 && (0, Chunk951288.jsxs)("section", {
        className: Chunk596533.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: "Existing Discount Offers"
        }), k.map(e => (0, a.jsx)(I, {
          offer: e,
          offerOptions: n,
          forceRefetch: () => A(true)
        }, e.id))]
      }), (0, Chunk951288.jsxs)("section", {
        className: Chunk596533.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: "Create a Reverse Trial Entitlement"
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk596533.inputRow,
          children: [(0, Chunk951288.jsx)(Chunk481060.PhF, {
            className: Chunk596533.input,
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
            isSelected: e => Z === e,
            placeholder: "Reverse Trial Length",
            serialize: e => String(e),
            select: e => D(e),
            popoutLayerContext: Chunk246992.O$
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "Create",
            onClick: H
          })]
        })]
      }), L.length > 0 && (0, Chunk951288.jsxs)("div", {
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          style: {
            marginTop: "15px"
          },
          variant: "text-md/bold",
          children: "Active reverse trial"
        }), (0, Chunk951288.jsx)("div", {
          children: L.map(e => (0, a.jsx)(f.D, {
            entitlement: e,
            active: true,
            onDelete: () => F(e.id)
          }, e.id))
        })]
      }), (0, Chunk951288.jsx)("div", {
        children: (0, Chunk951288.jsxs)("div", {
          children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
            style: {
              marginTop: "15px"
            },
            variant: "text-md/bold",
            children: "September 2025 MM Reward Grant"
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "Grant Subscription Reward",
            onClick: () => {
              W()
            }
          })]
        })
      })]
    })
  })
}