/** Chunk was on 28532 **/
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
  Chunk711322 = require("./711322.js"),
  Chunk451429 = require("./451429.js");
let S = async () => {
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
      url: j.ANM.CREATE_USER_OFFER(e, t),
      rejectWithError: true
    })
  } catch (e) {} finally {
    await (0, u.Tf)()
  }
}, T = async (e, t) => {
  try {
    await s.tn.del({
      url: j.ANM.UPDATE_USER_OFFER(e, t),
      rejectWithError: true
    })
  } catch (e) {} finally {
    await (0, u.Tf)()
  }
}, N = async () => {
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
}, P = async e => {
  await s.tn.post({
    url: j.ANM.CREATE_REVERSE_TRIAL,
    body: {
      ends_at: e
    },
    rejectWithError: true
  })
};

function I(e) {
  var t, n, i, o, m;
  let {
    offer: p,
    offerOptions: f,
    forceRefetch: b
  } = e, [v, C] = r.useState(false), [S, E] = r.useState(false), [N, O] = r.useState(false), [P, I] = r.useState(false);
  r.useEffect(() => {
    N && I(true);
    let e = setTimeout(() => {
      I(false)
    }, 500);
    return () => {
      clearTimeout(e)
    }
  }, [N]);
  let {
    id: w,
    expires_at: k,
    redeemed_at: R,
    trial_id: A,
    subscription_trial: Z,
    referrer: D
  } = p, L = null != (n = null == (t = f.find(e => {
    let {
      value: t
    } = e;
    return t === A
  })) ? true : t.label) ? n : "Unknown";
  null != D && (L = "".concat(L, " from @").concat(D.username));
  let M = null != k,
    U = null != k && new Date(k).getTime() < Date.now(),
    F = (null == Z ? true : Z.sku_id) === _.Si.TIER_0,
    B = async () => {
      O(true), M ? await G({
        expiresAt: null
      }) : await (0, u.ab)(p), b(), O(false)
    }, G = async e => {
      O(true);
      try {
        await s.tn.patch({
          url: j.ANM.UPDATE_USER_OFFER(w, "trial"),
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
        b(), O(false)
      }
    };
  r.useEffect(() => {
    if (v) {
      let e = setTimeout(() => {
        C(false)
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
  let z = "Active";
  return M && (z = "Acked"), U && (z = "Expired"), (0, a.jsxs)("div", {
    className: l()(y.card, F ? y.gradientWrapperTier0 : y.gradientWrapperTier2),
    children: [(0, a.jsx)("div", {
      className: l()(y.row, y.nameRow),
      children: (0, a.jsx)(c.Heading, {
        variant: "heading-lg/semibold",
        color: "always-white",
        children: L
      })
    }), (0, a.jsxs)(c.P3F, {
      className: l()(y.row, y.idRow),
      onClick: () => {
        (0, h.JG)(w, () => C(true))
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Offer: ", w]
      }), v ? (0, a.jsx)(c.dz2, {
        size: "md",
        color: "currentColor",
        className: y.icon
      }) : (0, a.jsx)(c.TIy, {
        size: "xs",
        color: "currentColor",
        className: y.icon
      })]
    }), (0, a.jsxs)(c.P3F, {
      className: l()(y.row, y.idRow),
      onClick: () => {
        (0, h.JG)(A, () => E(true))
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial: ", A]
      }), S ? (0, a.jsx)(c.dz2, {
        size: "md",
        color: "currentColor",
        className: y.icon
      }) : (0, a.jsx)(c.TIy, {
        size: "xs",
        color: "currentColor",
        className: y.icon
      })]
    }), (0, a.jsx)("div", {
      className: y.row,
      children: (0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial Length:", " ", (0, g.if)({
          intervalType: null != (i = null == Z ? true : Z.interval) ? i : _.rV.MONTH,
          intervalCount: null != (o = null == Z ? true : Z.interval_count) ? o : 1,
          capitalize: false
        })]
      })
    }), (0, a.jsxs)("div", {
      className: y.row,
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Expires (", (0, d.Z)(), "):"]
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
      className: y.row,
      children: [(0, a.jsx)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: "Referrer ID:"
      }), (0, a.jsx)("input", {
        type: "text",
        value: null != (m = null == D ? true : D.id) ? m : "",
        onChange: e => G({
          referrerId: e.target.value
        })
      })]
    }), (0, a.jsxs)("div", {
      className: y.badgeContainer,
      children: [(0, a.jsx)(c.P3F, {
        onClick: B,
        className: l()(y.badge, y.clickable, {
          [y.acked]: M,
          [y.expired]: U
        }),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "Acked" === z ? true : "always-white",
          children: z
        })
      }), null != R && (0, a.jsx)("div", {
        className: l()(y.badge, y.redeemed),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Redeemed"
        })
      })]
    }), (0, a.jsx)(c.P3F, {
      onClick: async () => {
        O(true), await T(w, "trial"), b(), O(false)
      },
      children: (0, a.jsx)(c.XHJ, {
        size: "md",
        color: "currentColor",
        className: l()(y.icon, y.trashIcon)
      })
    }), (0, a.jsx)("div", {
      className: l()(y.loadingContainer, {
        [y.isLoading]: N || P
      }),
      children: (0, a.jsx)(c.$jN, {})
    })]
  })
}

function w(e) {
  var t, n;
  let {
    offer: i,
    offerOptions: o,
    forceRefetch: m
  } = e, [p, g] = r.useState(false), [f, b] = r.useState(false), [v, _] = r.useState(false), [C, S] = r.useState(false);
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
    expires_at: N,
    applied_at: O,
    discount_id: P,
    discount: I
  } = i, w = null != (n = null == (t = o.find(e => {
    let {
      value: t
    } = e;
    return t === P
  })) ? true : t.label) ? n : "Unknown", k = null != N, R = null != N && new Date(N).getTime() < Date.now(), A = async () => {
    _(true), k ? await Z({
      expiresAt: null
    }) : await (0, u.ab)(true, i), m(), _(false)
  }, Z = async e => {
    let {
      expiresAt: t
    } = e;
    _(true);
    try {
      await s.tn.patch({
        url: j.ANM.UPDATE_USER_OFFER(E, "discount"),
        body: {
          expires_at: t
        },
        rejectWithError: true
      })
    } finally {
      m(), _(false)
    }
  };
  r.useEffect(() => {
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
  let D = "Active";
  return R && (D = "Expired"), k && (D = "Acked"), (0, a.jsxs)("div", {
    className: l()(y.card, y.discount),
    children: [(0, a.jsxs)("div", {
      className: l()(y.row, y.nameRow),
      children: [(0, a.jsx)(c.Heading, {
        variant: "heading-lg/semibold",
        color: "text-default",
        children: w
      }), (0, a.jsx)(c.P3F, {
        onClick: async () => {
          _(true), await T(E, "discount"), m(), _(false)
        },
        children: (0, a.jsx)(c.XHJ, {
          size: "md",
          color: "currentColor",
          className: l()(y.icon, y.trashIcon)
        })
      })]
    }), (0, a.jsxs)(c.P3F, {
      className: l()(y.row, y.idRow),
      onClick: () => {
        (0, h.JG)(E, () => g(true))
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-default",
        children: ["Offer: ", E]
      }), p ? (0, a.jsx)(c.dz2, {
        size: "md",
        color: "currentColor",
        className: l()(y.icon, y.noMargin)
      }) : (0, a.jsx)(c.TIy, {
        size: "xs",
        color: "currentColor",
        className: y.icon
      })]
    }), (0, a.jsxs)(c.P3F, {
      className: l()(y.row, y.idRow),
      onClick: () => {
        (0, h.JG)(P, () => b(true))
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-default",
        children: ["Discount: ", P]
      }), f ? (0, a.jsx)(c.dz2, {
        size: "md",
        color: "currentColor",
        className: l()(y.icon, y.noMargin)
      }) : (0, a.jsx)(c.TIy, {
        size: "xs",
        color: "currentColor",
        className: y.icon
      })]
    }), (null == I ? true : I.amount) != null && (0, a.jsx)("div", {
      children: (0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-default",
        children: [I.amount, "% off"]
      })
    }), (0, a.jsxs)("div", {
      className: y.row,
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Expires (", (0, d.Z)(), "):"]
      }), (0, a.jsx)("input", {
        type: "datetime-local",
        value: (0, x.mm)(N),
        onChange: e => Z({
          expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null
        })
      })]
    }), (0, a.jsxs)("div", {
      className: y.badgeContainer,
      children: [(0, a.jsx)(c.P3F, {
        onClick: A,
        className: l()(y.badge, y.clickable, {
          [y.acked]: k,
          [y.expired]: R
        }),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "Acked" === D ? true : "always-white",
          children: D
        })
      }), null != O && (0, a.jsx)("div", {
        className: l()(y.badge, y.redeemed),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Applied"
        })
      })]
    }), (0, a.jsx)("div", {
      className: l()(y.loadingContainer, {
        [y.isLoading]: v || C
      }),
      children: (0, a.jsx)(c.$jN, {})
    })]
  })
}

function k() {
  let [e, t] = Chunk647438.useState([]), [n, i] = Chunk647438.useState([]), [l, s] = Chunk647438.useState(), [d, h] = Chunk647438.useState(), [x, g] = Chunk647438.useState([]), [_, T] = Chunk647438.useState([]), [k, R] = Chunk647438.useState(true), [A, Z] = Chunk647438.useState(10080), [D, L] = Chunk647438.useState([]), {
    entitlements: M,
    deleteFractionalPremium: U,
    refreshEntitlementList: F
  } = (0, Chunk232867.m)();
  Chunk647438.useEffect(() => {
    F()
  }, [F]), Chunk647438.useEffect(() => {
    L(M.filter(e => e.sourceType === j.kNB.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date))
  }, [M]), Chunk647438.useEffect(() => {
    (0 === module.length || 0 === require.length || k) && S().then(e => {
      let n = Object.keys(e.trial).map(t => ({
          label: t,
          value: e.trial[t]
        })),
        a = Object.keys(e.discount).map(t => ({
          label: t,
          value: e.discount[t]
        }));
      t(n), i(a), null == l && s(n[0].value), null == d && h(a[0].value)
    })
  }, [module, require, l, Chunk105713, k]), Chunk647438.useEffect(() => {
    k && (R(false), Chunk431.Z.forceReset(), (0, Chunk937579.Tf)(), N().then(e => {
      g(e.trial.sort((e, t) => e.id.localeCompare(t.id))), T(e.discount.sort((e, t) => e.id.localeCompare(t.id)))
    }))
  }, [k]);
  let B = async () => {
    null != l && (await E(l, "trial"), R(true))
  }, G = async () => {
    null != Chunk105713 && (await E(Chunk105713, "discount"), R(true))
  }, z = async () => {
    await O(), R(true)
  }, V = async () => {
    let e = new Date(Date.now() + 60 * A * 1e3).toISOString();
    await P(module), F()
  };
  return (0, Chunk951288.jsx)(Chunk481060.zJl, {
    className: Chunk451429.panel,
    children: (0, Chunk951288.jsxs)("div", {
      className: Chunk711322.panelInner,
      children: [(0, Chunk951288.jsxs)("section", {
        className: Chunk711322.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
          variant: "heading-md/semibold",
          children: "Utils"
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk711322.buttons,
          children: [(0, Chunk951288.jsx)(Chunk481060.Button, {
            variant: "primary",
            size: "sm",
            text: "Clear all User Offers",
            onClick: z
          }), (0, Chunk951288.jsx)(Chunk481060.Button, {
            variant: "primary",
            size: "sm",
            text: "Clear Mobile Trials DismissibleContent",
            onClick: () => (0, Chunk675478.w9)(Chunk704215.z.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE)
          }), (0, Chunk951288.jsx)(Chunk481060.Button, {
            variant: "primary",
            size: "sm",
            text: "Clear Offer Nagbar DismissibleContent",
            onClick: () => (0, Chunk675478.Z1)(Chunk704215.z.NAGBAR_NOTICE_OFFER_EXPIRING)
          }), (0, Chunk951288.jsx)(Chunk481060.Button, {
            variant: "primary",
            size: "sm",
            text: "Refresh DevTools",
            onClick: () => R(true)
          })]
        })]
      }), (0, Chunk951288.jsxs)("section", {
        className: Chunk711322.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
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
          }), (0, Chunk951288.jsx)(Chunk481060.Button, {
            variant: "primary",
            text: "Create",
            onClick: B
          })]
        })]
      }), (0, Chunk951288.jsxs)("section", {
        className: Chunk711322.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
          variant: "heading-md/semibold",
          children: "Create a Discount Offer"
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk711322.inputRow,
          children: [(0, Chunk951288.jsx)(Chunk481060.PhF, {
            className: Chunk711322.input,
            options: require,
            isSelected: e => d === e,
            placeholder: "Discount Type",
            serialize: e => String(e),
            select: e => h(e),
            popoutLayerContext: Chunk246992.O$
          }), (0, Chunk951288.jsx)(Chunk481060.Button, {
            variant: "primary",
            text: "Create",
            onClick: G
          })]
        })]
      }), Chunk55935.length > 0 && (0, Chunk951288.jsxs)("section", {
        className: Chunk711322.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
          variant: "heading-md/semibold",
          children: "Existing Trial Offers"
        }), Chunk55935.map(t => (0, a.jsx)(I, {
          offer: t,
          offerOptions: e,
          forceRefetch: () => R(true)
        }, t.id))]
      }), Chunk474936.length > 0 && (0, Chunk951288.jsxs)("section", {
        className: Chunk711322.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
          variant: "heading-md/semibold",
          children: "Existing Discount Offers"
        }), Chunk474936.map(e => (0, a.jsx)(w, {
          offer: e,
          offerOptions: n,
          forceRefetch: () => R(true)
        }, e.id))]
      }), (0, Chunk951288.jsxs)("section", {
        className: Chunk711322.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
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
            select: e => Z(e),
            popoutLayerContext: Chunk246992.O$
          }), (0, Chunk951288.jsx)(Chunk481060.Button, {
            variant: "primary",
            text: "Create",
            onClick: V
          })]
        })]
      }), D.length > 0 && (0, Chunk951288.jsxs)("div", {
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          style: {
            marginTop: "15px"
          },
          variant: "text-md/bold",
          children: "Active reverse trial"
        }), (0, Chunk951288.jsx)("div", {
          children: D.map(e => (0, a.jsx)(f.D, {
            entitlement: e,
            active: true,
            onDelete: () => U(e.id)
          }, e.id))
        })]
      })]
    })
  })
}