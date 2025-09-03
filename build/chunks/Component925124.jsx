/** Chunk was on 93886 **/
/** chunk id: 925124, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
}), require("./388685.js"), require("./642613.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk544891 = require("./544891.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk937579 = require("./937579.js"),
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
let y = async () => {
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
}, C = async (e, t) => {
  try {
    await s.tn.post({
      url: b.ANM.CREATE_USER_OFFER(e, t),
      rejectWithError: true
    })
  } catch (e) {} finally {
    await (0, d.Tf)()
  }
}, N = async (e, t) => {
  try {
    await s.tn.del({
      url: b.ANM.UPDATE_USER_OFFER(e, t),
      rejectWithError: true
    })
  } catch (e) {} finally {
    await (0, d.Tf)()
  }
}, E = async () => {
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
    url: b.ANM.CREATE_REVERSE_TRIAL,
    body: {
      ends_at: e
    },
    rejectWithError: true
  })
};

function S(e) {
  var t, n, l, o, u;
  let {
    offer: m,
    offerOptions: p,
    forceRefetch: f
  } = e, [v, _] = r.useState(false), [y, C] = r.useState(false), [E, O] = r.useState(false), [T, S] = r.useState(false);
  r.useEffect(() => {
    E && S(true);
    let e = setTimeout(() => {
      S(false)
    }, 500);
    return () => {
      clearTimeout(e)
    }
  }, [E]);
  let {
    id: P,
    expires_at: w,
    redeemed_at: k,
    trial_id: I,
    subscription_trial: R,
    referrer: Z
  } = m, A = null != (n = null == (t = p.find(e => {
    let {
      value: t
    } = e;
    return t === I
  })) ? true : t.label) ? n : "Unknown";
  null != Z && (A = "".concat(A, " from @").concat(Z.username));
  let D = null != w,
    L = null != w && new Date(w).getTime() < Date.now(),
    M = (null == R ? true : R.sku_id) === j.Si.TIER_0,
    F = async () => {
      O(true), D ? await U({
        expiresAt: null
      }) : await (0, d.ab)(m), f(), O(false)
    }, U = async e => {
      O(true);
      try {
        await s.tn.patch({
          url: b.ANM.UPDATE_USER_OFFER(P, "trial"),
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
        f(), O(false)
      }
    };
  r.useEffect(() => {
    if (v) {
      let e = setTimeout(() => {
        _(false)
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
  }, [v, y]);
  let z = "Active";
  return D && (z = "Acked"), L && (z = "Expired"), (0, a.jsxs)("div", {
    className: i()(g.card, M ? g.gradientWrapperTier0 : g.gradientWrapperTier2),
    children: [(0, a.jsx)("div", {
      className: i()(g.row, g.nameRow),
      children: (0, a.jsx)(c.X6q, {
        variant: "heading-lg/semibold",
        color: "always-white",
        children: A
      })
    }), (0, a.jsxs)(c.P3F, {
      className: i()(g.row, g.idRow),
      onClick: () => {
        (0, x.JG)(P, () => _(true))
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Offer: ", P]
      }), v ? (0, a.jsx)(c.dz2, {
        size: "md",
        color: "currentColor",
        className: g.icon
      }) : (0, a.jsx)(c.TIy, {
        size: "xs",
        color: "currentColor",
        className: g.icon
      })]
    }), (0, a.jsxs)(c.P3F, {
      className: i()(g.row, g.idRow),
      onClick: () => {
        (0, x.JG)(I, () => C(true))
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial: ", I]
      }), y ? (0, a.jsx)(c.dz2, {
        size: "md",
        color: "currentColor",
        className: g.icon
      }) : (0, a.jsx)(c.TIy, {
        size: "xs",
        color: "currentColor",
        className: g.icon
      })]
    }), (0, a.jsx)("div", {
      className: g.row,
      children: (0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial Length:", " ", (0, h.if)({
          intervalType: null != (l = null == R ? true : R.interval) ? l : j.rV.MONTH,
          intervalCount: null != (o = null == R ? true : R.interval_count) ? o : 1,
          capitalize: false
        })]
      })
    }), (0, a.jsxs)("div", {
      className: g.row,
      children: [(0, a.jsx)(c.Text, {
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
      className: g.row,
      children: [(0, a.jsx)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: "Referrer ID:"
      }), (0, a.jsx)("input", {
        type: "text",
        value: null != (u = null == Z ? true : Z.id) ? u : "",
        onChange: e => U({
          referrerId: e.target.value
        })
      })]
    }), (0, a.jsxs)("div", {
      className: g.badgeContainer,
      children: [(0, a.jsx)(c.P3F, {
        onClick: F,
        className: i()(g.badge, g.clickable, {
          [g.acked]: D,
          [g.expired]: L
        }),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "Acked" === z ? true : "always-white",
          children: z
        })
      }), null != k && (0, a.jsx)("div", {
        className: i()(g.badge, g.redeemed),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Redeemed"
        })
      })]
    }), (0, a.jsx)(c.P3F, {
      onClick: async () => {
        O(true), await N(P, "trial"), f(), O(false)
      },
      children: (0, a.jsx)(c.XHJ, {
        size: "md",
        color: "currentColor",
        className: i()(g.icon, g.trashIcon)
      })
    }), (0, a.jsx)("div", {
      className: i()(g.loadingContainer, {
        [g.isLoading]: E || T
      }),
      children: (0, a.jsx)(c.$jN, {})
    })]
  })
}

function P(e) {
  var t, n;
  let {
    offer: l,
    offerOptions: o,
    forceRefetch: u
  } = e, [m, h] = r.useState(false), [p, f] = r.useState(false), [v, j] = r.useState(false), [_, y] = r.useState(false);
  r.useEffect(() => {
    v && y(true);
    let e = setTimeout(() => {
      y(false)
    }, 500);
    return () => {
      clearTimeout(e)
    }
  }, [v]);
  let {
    id: C,
    expires_at: E,
    applied_at: O,
    discount_id: T,
    discount: S
  } = l, P = null != (n = null == (t = o.find(e => {
    let {
      value: t
    } = e;
    return t === T
  })) ? true : t.label) ? n : "Unknown", w = null != E, k = null != E && new Date(E).getTime() < Date.now(), I = async () => {
    j(true), w ? await R({
      expiresAt: null
    }) : await (0, d.ab)(true, l), u(), j(false)
  }, R = async e => {
    let {
      expiresAt: t
    } = e;
    j(true);
    try {
      await s.tn.patch({
        url: b.ANM.UPDATE_USER_OFFER(C, "discount"),
        body: {
          expires_at: t
        },
        rejectWithError: true
      })
    } finally {
      u(), j(false)
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
    if (p) {
      let e = setTimeout(() => {
        f(false)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
  }, [m, p]);
  let Z = "Active";
  return k && (Z = "Expired"), w && (Z = "Acked"), (0, a.jsxs)("div", {
    className: i()(g.card, g.discount),
    children: [(0, a.jsxs)("div", {
      className: i()(g.row, g.nameRow),
      children: [(0, a.jsx)(c.X6q, {
        variant: "heading-lg/semibold",
        color: "text-default",
        children: P
      }), (0, a.jsx)(c.P3F, {
        onClick: async () => {
          j(true), await N(C, "discount"), u(), j(false)
        },
        children: (0, a.jsx)(c.XHJ, {
          size: "md",
          color: "currentColor",
          className: i()(g.icon, g.trashIcon)
        })
      })]
    }), (0, a.jsxs)(c.P3F, {
      className: i()(g.row, g.idRow),
      onClick: () => {
        (0, x.JG)(C, () => h(true))
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-default",
        children: ["Offer: ", C]
      }), m ? (0, a.jsx)(c.dz2, {
        size: "md",
        color: "currentColor",
        className: i()(g.icon, g.noMargin)
      }) : (0, a.jsx)(c.TIy, {
        size: "xs",
        color: "currentColor",
        className: g.icon
      })]
    }), (0, a.jsxs)(c.P3F, {
      className: i()(g.row, g.idRow),
      onClick: () => {
        (0, x.JG)(T, () => f(true))
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-default",
        children: ["Discount: ", T]
      }), p ? (0, a.jsx)(c.dz2, {
        size: "md",
        color: "currentColor",
        className: i()(g.icon, g.noMargin)
      }) : (0, a.jsx)(c.TIy, {
        size: "xs",
        color: "currentColor",
        className: g.icon
      })]
    }), (null == S ? true : S.amount) != null && (0, a.jsx)("div", {
      children: (0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-default",
        children: [S.amount, "% off"]
      })
    }), (0, a.jsxs)("div", {
      className: g.row,
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
      className: g.badgeContainer,
      children: [(0, a.jsx)(c.P3F, {
        onClick: I,
        className: i()(g.badge, g.clickable, {
          [g.acked]: w,
          [g.expired]: k
        }),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "Acked" === Z ? true : "always-white",
          children: Z
        })
      }), null != O && (0, a.jsx)("div", {
        className: i()(g.badge, g.redeemed),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Applied"
        })
      })]
    }), (0, a.jsx)("div", {
      className: i()(g.loadingContainer, {
        [g.isLoading]: v || _
      }),
      children: (0, a.jsx)(c.$jN, {})
    })]
  })
}

function w() {
  let [e, t] = Chunk647438.useState([]), [n, l] = Chunk647438.useState([]), [i, s] = Chunk647438.useState(), [x, h] = Chunk647438.useState(), [j, N] = Chunk647438.useState([]), [w, k] = Chunk647438.useState([]), [I, R] = Chunk647438.useState(true), [Z, A] = Chunk647438.useState(10080), [D, L] = Chunk647438.useState([]), {
    entitlements: M,
    deleteFractionalPremium: F,
    refreshEntitlementList: U
  } = (0, Chunk232867.m)();
  Chunk647438.useEffect(() => {
    U()
  }, [U]), Chunk647438.useEffect(() => {
    L(M.filter(e => e.sourceType === b.kNB.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date))
  }, [M]), Chunk647438.useEffect(() => {
    (0 === module.length || 0 === require.length || I) && y().then(e => {
      let n = Object.keys(e.trial).map(t => ({
          label: t,
          value: e.trial[t]
        })),
        a = Object.keys(e.discount).map(t => ({
          label: t,
          value: e.discount[t]
        }));
      t(n), l(a), null == i && s(n[0].value), null == x && h(a[0].value)
    })
  }, [module, require, i, Chunk572004, I]), Chunk647438.useEffect(() => {
    I && (R(false), Chunk431.Z.forceReset(), (0, Chunk937579.Tf)(), E().then(e => {
      N(e.trial.sort((e, t) => e.id.localeCompare(t.id))), k(e.discount.sort((e, t) => e.id.localeCompare(t.id)))
    }))
  }, [I]);
  let z = async () => {
    null != i && (await C(i, "trial"), R(true))
  }, B = async () => {
    null != Chunk572004 && (await C(Chunk572004, "discount"), R(true))
  }, G = async () => {
    await O(), R(true)
  }, V = async () => {
    let e = new Date(Date.now() + 60 * Z * 1e3).toISOString();
    await T(module), U()
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
            onClick: G
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
            onClick: () => R(true)
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
            select: e => s(e),
            popoutLayerContext: Chunk246992.O$
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "Create",
            onClick: z
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
            isSelected: e => x === e,
            placeholder: "Discount Type",
            serialize: e => String(e),
            select: e => h(e),
            popoutLayerContext: Chunk246992.O$
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "Create",
            onClick: B
          })]
        })]
      }), Chunk474936.length > 0 && (0, Chunk951288.jsxs)("section", {
        className: Chunk711322.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: "Existing Trial Offers"
        }), Chunk474936.map(t => (0, a.jsx)(S, {
          offer: t,
          offerOptions: e,
          forceRefetch: () => R(true)
        }, t.id))]
      }), w.length > 0 && (0, Chunk951288.jsxs)("section", {
        className: Chunk711322.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: "Existing Discount Offers"
        }), w.map(e => (0, a.jsx)(P, {
          offer: e,
          offerOptions: n,
          forceRefetch: () => R(true)
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
            isSelected: e => Z === e,
            placeholder: "Reverse Trial Length",
            serialize: e => String(e),
            select: e => A(e),
            popoutLayerContext: Chunk246992.O$
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
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
          children: D.map(e => (0, a.jsx)(p.D, {
            entitlement: e,
            active: true,
            onDelete: () => F(e.id)
          }, e.id))
        })]
      })]
    })
  })
}