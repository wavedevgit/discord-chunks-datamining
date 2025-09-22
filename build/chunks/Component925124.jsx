/** Chunk was on 86478 **/
/** chunk id: 925124, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
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
  Chunk711322 = require("./711322.js"),
  Chunk451429 = require("./451429.js");
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
}, N = async (e, t) => {
  try {
    await s.tn.post({
      url: v.ANM.CREATE_USER_OFFER(e, t),
      rejectWithError: true
    })
  } catch (e) {} finally {
    await (0, d.Tf)()
  }
}, E = async (e, t) => {
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
}, O = async () => {
  try {
    await Chunk544891.tn.del({
      url: Chunk981631.ANM.USER_OFFERS,
      rejectWithError: true
    })
  } catch (e) {} finally {
    await Chunk431.Z.forceReset(), await (0, Chunk937579.Tf)()
  }
}, T = async e => {
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
    offerOptions: h,
    forceRefetch: f
  } = e, [b, g] = r.useState(false), [y, C] = r.useState(false), [N, S] = r.useState(false), [O, T] = r.useState(false);
  r.useEffect(() => {
    N && T(true);
    let e = setTimeout(() => {
      T(false)
    }, 500);
    return () => {
      clearTimeout(e)
    }
  }, [N]);
  let {
    id: P,
    expires_at: k,
    redeemed_at: w,
    trial_id: R,
    subscription_trial: I,
    referrer: Z
  } = m, A = null != (n = null == (t = h.find(e => {
    let {
      value: t
    } = e;
    return t === R
  })) ? true : t.label) ? n : "Unknown";
  null != Z && (A = "".concat(A, " from @").concat(Z.username));
  let D = null != k,
    L = null != k && new Date(k).getTime() < Date.now(),
    M = (null == I ? true : I.sku_id) === j.Si.TIER_0,
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
  let G = "Active";
  return D && (G = "Acked"), L && (G = "Expired"), (0, a.jsxs)("div", {
    className: l()(_.card, M ? _.gradientWrapperTier0 : _.gradientWrapperTier2),
    children: [(0, a.jsx)("div", {
      className: l()(_.row, _.nameRow),
      children: (0, a.jsx)(c.X6q, {
        variant: "heading-lg/semibold",
        color: "always-white",
        children: A
      })
    }), (0, a.jsxs)(c.P3F, {
      className: l()(_.row, _.idRow),
      onClick: () => {
        (0, p.JG)(P, () => g(true))
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
        (0, p.JG)(R, () => C(true))
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial: ", R]
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
          intervalType: null != (i = null == I ? true : I.interval) ? i : j.rV.MONTH,
          intervalCount: null != (o = null == I ? true : I.interval_count) ? o : 1,
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
        value: null != k ? k.substring(0, 10) : "",
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
        value: null != (u = null == Z ? true : Z.id) ? u : "",
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
          color: "Acked" === G ? true : "always-white",
          children: G
        })
      }), null != w && (0, a.jsx)("div", {
        className: l()(_.badge, _.redeemed),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Redeemed"
        })
      })]
    }), (0, a.jsx)(c.P3F, {
      onClick: async () => {
        S(true), await E(P, "trial"), f(), S(false)
      },
      children: (0, a.jsx)(c.XHJ, {
        size: "md",
        color: "currentColor",
        className: l()(_.icon, _.trashIcon)
      })
    }), (0, a.jsx)("div", {
      className: l()(_.loadingContainer, {
        [_.isLoading]: N || O
      }),
      children: (0, a.jsx)(c.$jN, {})
    })]
  })
}

function k(e) {
  var t, n;
  let {
    offer: i,
    offerOptions: o,
    forceRefetch: u
  } = e, [m, h] = r.useState(false), [x, f] = r.useState(false), [b, g] = r.useState(false), [j, y] = r.useState(false);
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
    expires_at: N,
    applied_at: S,
    discount_id: O,
    discount: T
  } = i, P = null != (n = null == (t = o.find(e => {
    let {
      value: t
    } = e;
    return t === O
  })) ? true : t.label) ? n : "Unknown", k = null != N, w = null != N && new Date(N).getTime() < Date.now(), R = async () => {
    g(true), k ? await I({
      expiresAt: null
    }) : await (0, d.ab)(true, i), u(), g(false)
  }, I = async e => {
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
        h(false)
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
  let Z = "Active";
  return w && (Z = "Expired"), k && (Z = "Acked"), (0, a.jsxs)("div", {
    className: l()(_.card, _.discount),
    children: [(0, a.jsxs)("div", {
      className: l()(_.row, _.nameRow),
      children: [(0, a.jsx)(c.X6q, {
        variant: "heading-lg/semibold",
        color: "text-default",
        children: P
      }), (0, a.jsx)(c.P3F, {
        onClick: async () => {
          g(true), await E(C, "discount"), u(), g(false)
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
        (0, p.JG)(C, () => h(true))
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
        (0, p.JG)(O, () => f(true))
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-default",
        children: ["Discount: ", O]
      }), x ? (0, a.jsx)(c.dz2, {
        size: "md",
        color: "currentColor",
        className: l()(_.icon, _.noMargin)
      }) : (0, a.jsx)(c.TIy, {
        size: "xs",
        color: "currentColor",
        className: _.icon
      })]
    }), (null == T ? true : T.amount) != null && (0, a.jsx)("div", {
      children: (0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-default",
        children: [T.amount, "% off"]
      })
    }), (0, a.jsxs)("div", {
      className: _.row,
      children: [(0, a.jsx)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: "Expires:"
      }), (0, a.jsx)("input", {
        type: "date",
        value: null != N ? N.substring(0, 10) : "",
        onChange: e => I({
          expiresAt: e.target.value
        })
      })]
    }), (0, a.jsxs)("div", {
      className: _.badgeContainer,
      children: [(0, a.jsx)(c.P3F, {
        onClick: R,
        className: l()(_.badge, _.clickable, {
          [_.acked]: k,
          [_.expired]: w
        }),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "Acked" === Z ? true : "always-white",
          children: Z
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

function w() {
  let [e, t] = Chunk647438.useState([]), [n, i] = Chunk647438.useState([]), [l, s] = Chunk647438.useState(), [p, x] = Chunk647438.useState(), [j, E] = Chunk647438.useState([]), [w, R] = Chunk647438.useState([]), [I, Z] = Chunk647438.useState(true), [A, D] = Chunk647438.useState(10080), [L, M] = Chunk647438.useState([]), {
    entitlements: U,
    deleteFractionalPremium: F,
    refreshEntitlementList: G
  } = (0, Chunk232867.m)();
  Chunk647438.useEffect(() => {
    G()
  }, [G]), Chunk647438.useEffect(() => {
    M(U.filter(e => e.sourceType === v.kNB.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date))
  }, [U]), Chunk647438.useEffect(() => {
    (0 === module.length || 0 === require.length || I) && C().then(e => {
      let n = Object.keys(e.trial).map(t => ({
          label: t,
          value: e.trial[t]
        })),
        a = Object.keys(e.discount).map(t => ({
          label: t,
          value: e.discount[t]
        }));
      t(n), i(a), null == l && s(n[0].value), null == p && x(a[0].value)
    })
  }, [module, require, l, Chunk572004, I]), Chunk647438.useEffect(() => {
    I && (Z(false), Chunk431.Z.forceReset(), (0, Chunk937579.Tf)(), S().then(e => {
      E(e.trial.sort((e, t) => e.id.localeCompare(t.id))), R(e.discount.sort((e, t) => e.id.localeCompare(t.id)))
    }))
  }, [I]);
  let B = async () => {
    null != l && (await N(l, "trial"), Z(true))
  }, z = async () => {
    null != Chunk572004 && (await N(Chunk572004, "discount"), Z(true))
  }, V = async () => {
    await O(), Z(true)
  }, H = async () => {
    let e = new Date(Date.now() + 60 * A * 1e3).toISOString();
    await T(module), G()
  }, {
    redeemReward: W
  } = (0, Chunk453591.h)();
  return (0, Chunk951288.jsx)(Chunk481060.zJl, {
    className: Chunk451429.panel,
    children: (0, Chunk951288.jsxs)("div", {
      className: Chunk711322.panelInner,
      children: [(0, Chunk951288.jsxs)("section", {
        className: Chunk711322.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: "Utils"
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk711322.buttons,
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
            onClick: () => Z(true)
          })]
        })]
      }), (0, Chunk951288.jsxs)("section", {
        className: Chunk711322.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: "Create a Trial Offer"
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk711322.inputRow,
          children: [(0, Chunk951288.jsx)(Chunk481060.PhF, {
            className: Chunk711322.input,
            options: module,
            isSelected: e => l === e,
            placeholder: "Trial Type",
            serialize: e => String(e),
            select: e => s(e),
            popoutLayerContext: Chunk246992.O$
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "Create",
            onClick: B
          })]
        })]
      }), (0, Chunk951288.jsxs)("section", {
        className: Chunk711322.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: "Create a Discount Offer"
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk711322.inputRow,
          children: [(0, Chunk951288.jsx)(Chunk481060.PhF, {
            className: Chunk711322.input,
            options: require,
            isSelected: e => p === e,
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
        className: Chunk711322.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: "Existing Trial Offers"
        }), Chunk474936.map(t => (0, a.jsx)(P, {
          offer: t,
          offerOptions: e,
          forceRefetch: () => Z(true)
        }, t.id))]
      }), w.length > 0 && (0, Chunk951288.jsxs)("section", {
        className: Chunk711322.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: "Existing Discount Offers"
        }), w.map(e => (0, a.jsx)(k, {
          offer: e,
          offerOptions: n,
          forceRefetch: () => Z(true)
        }, e.id))]
      }), (0, Chunk951288.jsxs)("section", {
        className: Chunk711322.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: "Create a Reverse Trial Entitlement"
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk711322.inputRow,
          children: [(0, Chunk951288.jsx)(Chunk481060.PhF, {
            className: Chunk711322.input,
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
            isSelected: e => A === e,
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