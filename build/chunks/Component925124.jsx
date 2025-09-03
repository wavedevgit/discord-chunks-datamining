/** Chunk was on 93886 **/
/** chunk id: 925124, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
}), require("./388685.js"), require("./642613.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk937579 = require("./937579.js"),
  Chunk29920 = require("./29920.js"),
  Chunk675478 = require("./675478.js"),
  Chunk78839 = require("./78839.js"),
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
let E = async () => {
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
}, O = async (e, t) => {
  try {
    await o.tn.post({
      url: _.ANM.CREATE_USER_OFFER(e, t),
      rejectWithError: true
    })
  } catch (e) {} finally {
    await (0, u.Tf)()
  }
}, T = async (e, t) => {
  try {
    await o.tn.del({
      url: _.ANM.UPDATE_USER_OFFER(e, t),
      rejectWithError: true
    })
  } catch (e) {} finally {
    await (0, u.Tf)()
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
}, P = async () => {
  try {
    await Chunk544891.tn.del({
      url: Chunk981631.ANM.USER_OFFERS,
      rejectWithError: true
    })
  } catch (e) {} finally {
    await Chunk431.Z.forceReset(), await (0, Chunk937579.Tf)()
  }
}, w = async e => {
  await o.tn.post({
    url: _.ANM.CREATE_REVERSE_TRIAL,
    body: {
      ends_at: e
    },
    rejectWithError: true
  })
};

function k(e) {
  var t, n, l, s, c;
  let {
    offer: m,
    offerOptions: x,
    forceRefetch: h
  } = e, [p, b] = r.useState(false), [j, g] = r.useState(false), [N, E] = r.useState(false), [O, S] = r.useState(false);
  r.useEffect(() => {
    N && S(true);
    let e = setTimeout(() => {
      S(false)
    }, 500);
    return () => {
      clearTimeout(e)
    }
  }, [N]);
  let {
    id: P,
    expires_at: w,
    redeemed_at: k,
    trial_id: I,
    subscription_trial: R,
    referrer: Z
  } = m, A = null != (n = null == (t = x.find(e => {
    let {
      value: t
    } = e;
    return t === I
  })) ? true : t.label) ? n : "Unknown";
  null != Z && (A = "".concat(A, " from @").concat(Z.username));
  let D = null != w,
    L = null != w && new Date(w).getTime() < Date.now(),
    M = (null == R ? true : R.sku_id) === y.Si.TIER_0,
    F = async () => {
      E(true), D ? await U({
        expiresAt: null
      }) : await (0, u.ab)(m), h(), E(false)
    }, U = async e => {
      E(true);
      try {
        await o.tn.patch({
          url: _.ANM.UPDATE_USER_OFFER(P, "trial"),
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
        h(), E(false)
      }
    };
  r.useEffect(() => {
    if (p) {
      let e = setTimeout(() => {
        b(false)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
    if (j) {
      let e = setTimeout(() => {
        g(false)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
  }, [p, j]);
  let z = "Active";
  return D && (z = "Acked"), L && (z = "Expired"), (0, a.jsxs)("div", {
    className: i()(C.card, M ? C.gradientWrapperTier0 : C.gradientWrapperTier2),
    children: [(0, a.jsx)("div", {
      className: i()(C.row, C.nameRow),
      children: (0, a.jsx)(d.X6q, {
        variant: "heading-lg/semibold",
        color: "always-white",
        children: A
      })
    }), (0, a.jsxs)(d.P3F, {
      className: i()(C.row, C.idRow),
      onClick: () => {
        (0, f.JG)(P, () => b(true))
      },
      children: [(0, a.jsxs)(d.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Offer: ", P]
      }), p ? (0, a.jsx)(d.dz2, {
        size: "md",
        color: "currentColor",
        className: C.icon
      }) : (0, a.jsx)(d.TIy, {
        size: "xs",
        color: "currentColor",
        className: C.icon
      })]
    }), (0, a.jsxs)(d.P3F, {
      className: i()(C.row, C.idRow),
      onClick: () => {
        (0, f.JG)(I, () => g(true))
      },
      children: [(0, a.jsxs)(d.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial: ", I]
      }), j ? (0, a.jsx)(d.dz2, {
        size: "md",
        color: "currentColor",
        className: C.icon
      }) : (0, a.jsx)(d.TIy, {
        size: "xs",
        color: "currentColor",
        className: C.icon
      })]
    }), (0, a.jsx)("div", {
      className: C.row,
      children: (0, a.jsxs)(d.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial Length:", " ", (0, v.if)({
          intervalType: null != (l = null == R ? true : R.interval) ? l : y.rV.MONTH,
          intervalCount: null != (s = null == R ? true : R.interval_count) ? s : 1,
          capitalize: false
        })]
      })
    }), (0, a.jsxs)("div", {
      className: C.row,
      children: [(0, a.jsx)(d.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: "Expires:"
      }), (0, a.jsx)("input", {
        type: "date",
        value: null != w ? w.substring(0, 10) : "",
        onChange: e => U({
          expiresAt: e.target.value
        })
      })]
    }), (0, a.jsxs)("div", {
      className: C.row,
      children: [(0, a.jsx)(d.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: "Referrer ID:"
      }), (0, a.jsx)("input", {
        type: "text",
        value: null != (c = null == Z ? true : Z.id) ? c : "",
        onChange: e => U({
          referrerId: e.target.value
        })
      })]
    }), (0, a.jsxs)("div", {
      className: C.badgeContainer,
      children: [(0, a.jsx)(d.P3F, {
        onClick: F,
        className: i()(C.badge, C.clickable, {
          [C.acked]: D,
          [C.expired]: L
        }),
        children: (0, a.jsx)(d.Text, {
          variant: "eyebrow",
          color: "Acked" === z ? true : "always-white",
          children: z
        })
      }), null != k && (0, a.jsx)("div", {
        className: i()(C.badge, C.redeemed),
        children: (0, a.jsx)(d.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Redeemed"
        })
      })]
    }), (0, a.jsx)(d.P3F, {
      onClick: async () => {
        E(true), await T(P, "trial"), h(), E(false)
      },
      children: (0, a.jsx)(d.XHJ, {
        size: "md",
        color: "currentColor",
        className: i()(C.icon, C.trashIcon)
      })
    }), (0, a.jsx)("div", {
      className: i()(C.loadingContainer, {
        [C.isLoading]: N || O
      }),
      children: (0, a.jsx)(d.$jN, {})
    })]
  })
}

function I(e) {
  var t, n;
  let {
    offer: l,
    offerOptions: s,
    forceRefetch: c
  } = e, [m, x] = r.useState(false), [h, p] = r.useState(false), [v, b] = r.useState(false), [j, g] = r.useState(false);
  r.useEffect(() => {
    v && g(true);
    let e = setTimeout(() => {
      g(false)
    }, 500);
    return () => {
      clearTimeout(e)
    }
  }, [v]);
  let {
    id: y,
    expires_at: N,
    applied_at: E,
    discount_id: O,
    discount: S
  } = l, P = null != (n = null == (t = s.find(e => {
    let {
      value: t
    } = e;
    return t === O
  })) ? true : t.label) ? n : "Unknown", w = null != N, k = null != N && new Date(N).getTime() < Date.now(), I = async () => {
    b(true), w ? await R({
      expiresAt: null
    }) : await (0, u.ab)(true, l), c(), b(false)
  }, R = async e => {
    let {
      expiresAt: t
    } = e;
    b(true);
    try {
      await o.tn.patch({
        url: _.ANM.UPDATE_USER_OFFER(y, "discount"),
        body: {
          expires_at: t
        },
        rejectWithError: true
      })
    } finally {
      c(), b(false)
    }
  };
  r.useEffect(() => {
    if (m) {
      let e = setTimeout(() => {
        x(false)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
    if (h) {
      let e = setTimeout(() => {
        p(false)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
  }, [m, h]);
  let Z = "Active";
  return k && (Z = "Expired"), w && (Z = "Acked"), (0, a.jsxs)("div", {
    className: i()(C.card, C.discount),
    children: [(0, a.jsxs)("div", {
      className: i()(C.row, C.nameRow),
      children: [(0, a.jsx)(d.X6q, {
        variant: "heading-lg/semibold",
        color: "text-default",
        children: P
      }), (0, a.jsx)(d.P3F, {
        onClick: async () => {
          b(true), await T(y, "discount"), c(), b(false)
        },
        children: (0, a.jsx)(d.XHJ, {
          size: "md",
          color: "currentColor",
          className: i()(C.icon, C.trashIcon)
        })
      })]
    }), (0, a.jsxs)(d.P3F, {
      className: i()(C.row, C.idRow),
      onClick: () => {
        (0, f.JG)(y, () => x(true))
      },
      children: [(0, a.jsxs)(d.Text, {
        variant: "eyebrow",
        color: "text-default",
        children: ["Offer: ", y]
      }), m ? (0, a.jsx)(d.dz2, {
        size: "md",
        color: "currentColor",
        className: i()(C.icon, C.noMargin)
      }) : (0, a.jsx)(d.TIy, {
        size: "xs",
        color: "currentColor",
        className: C.icon
      })]
    }), (0, a.jsxs)(d.P3F, {
      className: i()(C.row, C.idRow),
      onClick: () => {
        (0, f.JG)(O, () => p(true))
      },
      children: [(0, a.jsxs)(d.Text, {
        variant: "eyebrow",
        color: "text-default",
        children: ["Discount: ", O]
      }), h ? (0, a.jsx)(d.dz2, {
        size: "md",
        color: "currentColor",
        className: i()(C.icon, C.noMargin)
      }) : (0, a.jsx)(d.TIy, {
        size: "xs",
        color: "currentColor",
        className: C.icon
      })]
    }), (null == S ? true : S.amount) != null && (0, a.jsx)("div", {
      children: (0, a.jsxs)(d.Text, {
        variant: "eyebrow",
        color: "text-default",
        children: [S.amount, "% off"]
      })
    }), (0, a.jsxs)("div", {
      className: C.row,
      children: [(0, a.jsx)(d.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: "Expires:"
      }), (0, a.jsx)("input", {
        type: "date",
        value: null != N ? N.substring(0, 10) : "",
        onChange: e => R({
          expiresAt: e.target.value
        })
      })]
    }), (0, a.jsxs)("div", {
      className: C.badgeContainer,
      children: [(0, a.jsx)(d.P3F, {
        onClick: I,
        className: i()(C.badge, C.clickable, {
          [C.acked]: w,
          [C.expired]: k
        }),
        children: (0, a.jsx)(d.Text, {
          variant: "eyebrow",
          color: "Acked" === Z ? true : "always-white",
          children: Z
        })
      }), null != E && (0, a.jsx)("div", {
        className: i()(C.badge, C.redeemed),
        children: (0, a.jsx)(d.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Applied"
        })
      })]
    }), (0, a.jsx)("div", {
      className: i()(C.loadingContainer, {
        [C.isLoading]: v || j
      }),
      children: (0, a.jsx)(d.$jN, {})
    })]
  })
}

function R() {
  let [e, t] = Chunk647438.useState([]), [n, l] = Chunk647438.useState([]), [i, o] = Chunk647438.useState(), [f, v] = Chunk647438.useState(), [y, T] = Chunk647438.useState([]), [R, Z] = Chunk647438.useState([]), [A, D] = Chunk647438.useState(true), [L, M] = Chunk647438.useState(10080), [F, U] = Chunk647438.useState([]), {
    entitlements: z,
    deleteFractionalPremium: B,
    refreshEntitlementList: G
  } = (0, Chunk232867.m)();
  Chunk647438.useEffect(() => {
    G()
  }, [G]), Chunk647438.useEffect(() => {
    U(z.filter(e => e.sourceType === _.kNB.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date))
  }, [z]), Chunk647438.useEffect(() => {
    (0 === module.length || 0 === require.length || A) && E().then(e => {
      let n = Object.keys(e.trial).map(t => ({
          label: t,
          value: e.trial[t]
        })),
        a = Object.keys(e.discount).map(t => ({
          label: t,
          value: e.discount[t]
        }));
      t(n), l(a), null == i && o(n[0].value), null == f && v(a[0].value)
    })
  }, [module, require, i, Chunk572004, A]), Chunk647438.useEffect(() => {
    A && (D(false), Chunk431.Z.forceReset(), (0, Chunk937579.Tf)(), S().then(e => {
      T(e.trial.sort((e, t) => e.id.localeCompare(t.id))), Z(e.discount.sort((e, t) => e.id.localeCompare(t.id)))
    }))
  }, [A]);
  let V = async () => {
    null != i && (await O(i, "trial"), D(true))
  }, H = async () => {
    null != Chunk572004 && (await O(Chunk572004, "discount"), D(true))
  }, W = async () => {
    await P(), D(true)
  }, K = async () => {
    let e = new Date(Date.now() + 60 * L * 1e3).toISOString();
    await w(module), G()
  }, X = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumSubscription()), Y = async () => {
    var e;
    await (0, Chunk29920.Ul)({
      subscriptionId: null != (e = null == X ? true : X.id) ? module : ""
    })
  };
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
            onClick: W
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
            onClick: () => D(true)
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
            isSelected: e => i === e,
            placeholder: "Trial Type",
            serialize: e => String(e),
            select: e => o(e),
            popoutLayerContext: Chunk246992.O$
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "Create",
            onClick: V
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
            isSelected: e => f === e,
            placeholder: "Discount Type",
            serialize: e => String(e),
            select: e => v(e),
            popoutLayerContext: Chunk246992.O$
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "Create",
            onClick: H
          })]
        })]
      }), Chunk474936.length > 0 && (0, Chunk951288.jsxs)("section", {
        className: Chunk711322.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: "Existing Trial Offers"
        }), Chunk474936.map(t => (0, a.jsx)(k, {
          offer: t,
          offerOptions: e,
          forceRefetch: () => D(true)
        }, t.id))]
      }), R.length > 0 && (0, Chunk951288.jsxs)("section", {
        className: Chunk711322.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: "Existing Discount Offers"
        }), R.map(e => (0, a.jsx)(I, {
          offer: e,
          offerOptions: n,
          forceRefetch: () => D(true)
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
            isSelected: e => L === e,
            placeholder: "Reverse Trial Length",
            serialize: e => String(e),
            select: e => M(e),
            popoutLayerContext: Chunk246992.O$
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "Create",
            onClick: K
          })]
        })]
      }), F.length > 0 && (0, Chunk951288.jsxs)("div", {
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          style: {
            marginTop: "15px"
          },
          variant: "text-md/bold",
          children: "Active reverse trial"
        }), (0, Chunk951288.jsx)("div", {
          children: F.map(e => (0, a.jsx)(b.D, {
            entitlement: e,
            active: true,
            onDelete: () => B(e.id)
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
            onClick: Y
          })]
        })
      })]
    })
  })
}