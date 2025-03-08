/** Chunk was on 93886 **/
n.d(t, {
  Z: () => S
}), n(47120), n(230036);
var r = n(200651),
  a = n(192379),
  i = n(120356),
  l = n.n(i),
  o = n(544891),
  s = n(704215),
  c = n(481060),
  d = n(937579),
  u = n(675478),
  m = n(431),
  h = n(572004),
  p = n(74538),
  x = n(246992),
  f = n(981631),
  b = n(474936),
  _ = n(710662),
  g = n(536465);
let v = async () => {
  try {
    let {
      body: e
    } = await o.tn.get({
      url: f.ANM.USER_OFFER_IDS,
      rejectWithError: !0
    });
    return e
  } catch (e) {
    return []
  }
}, j = async (e, t) => {
  try {
    await o.tn.post({
      url: f.ANM.CREATE_USER_OFFER(e, t),
      rejectWithError: !0
    })
  } catch (e) {} finally {
    await (0, d.T)()
  }
}, y = async (e, t) => {
  try {
    await o.tn.del({
      url: f.ANM.UPDATE_USER_OFFER(e, t),
      rejectWithError: !0
    })
  } catch (e) {} finally {
    await (0, d.T)()
  }
}, C = async () => {
  try {
    let {
      body: e
    } = await o.tn.get({
      url: f.ANM.USER_OFFERS,
      rejectWithError: !0
    });
    return e
  } catch (e) {
    return {
      trial: [],
      discount: []
    }
  }
}, N = async () => {
  try {
    await o.tn.del({
      url: f.ANM.USER_OFFERS,
      rejectWithError: !0
    })
  } catch (e) {} finally {
    await m.Z.forceReset(), await (0, d.T)()
  }
};

function T(e) {
  var t, n, i, s;
  let {
    offer: u,
    offerOptions: m,
    forceRefetch: x
  } = e, [_, v] = a.useState(!1), [j, C] = a.useState(!1), [N, T] = a.useState(!1), [O, S] = a.useState(!1);
  a.useEffect(() => {
    N && S(!0);
    let e = setTimeout(() => {
      S(!1)
    }, 500);
    return () => {
      clearTimeout(e)
    }
  }, [N]);
  let {
    id: E,
    expires_at: k,
    redeemed_at: I,
    trial_id: w,
    subscription_trial: P,
    referrer: Z
  } = u, R = null !== (n = null === (t = m.find(e => {
    let {
      value: t
    } = e;
    return t === w
  })) || void 0 === t ? void 0 : t.label) && void 0 !== n ? n : "Unknown";
  null != Z && (R = "".concat(R, " from @").concat(Z.username));
  let A = null != k,
    L = null != k && new Date(k).getTime() < Date.now(),
    D = (null == P ? void 0 : P.sku_id) === b.Si.TIER_0,
    B = async () => {
      T(!0), A ? await M({
        expiresAt: null
      }) : await (0, d.a)(u), x(), T(!1)
    }, M = async e => {
      let {
        expiresAt: t
      } = e;
      T(!0);
      try {
        await o.tn.patch({
          url: f.ANM.UPDATE_USER_OFFER(E, "trial"),
          body: {
            expires_at: t
          },
          rejectWithError: !0
        })
      } finally {
        x(), T(!1)
      }
    };
  a.useEffect(() => {
    if (_) {
      let e = setTimeout(() => {
        v(!1)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
    if (j) {
      let e = setTimeout(() => {
        C(!1)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
  }, [_, j]);
  let z = "Active";
  return A && (z = "Acknowledged"), L && (z = "Expired"), (0, r.jsxs)("div", {
    className: l()(g.card, D ? g.gradientWrapperTier0 : g.gradientWrapperTier2),
    children: [(0, r.jsxs)("div", {
      className: l()(g.row, g.nameRow),
      children: [(0, r.jsx)(c.X6q, {
        variant: "heading-lg/semibold",
        color: "always-white",
        children: R
      }), (0, r.jsx)(c.P3F, {
        onClick: async () => {
          T(!0), await y(E, "trial"), x(), T(!1)
        },
        children: (0, r.jsx)(c.XHJ, {
          size: "md",
          color: "currentColor",
          className: l()(g.icon, g.trashIcon)
        })
      })]
    }), (0, r.jsxs)(c.P3F, {
      className: l()(g.row, g.idRow),
      onClick: () => {
        (0, h.JG)(E), v(!0)
      },
      children: [(0, r.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Offer: ", E]
      }), _ ? (0, r.jsx)(c.dz2, {
        size: "md",
        color: "currentColor",
        className: l()(g.icon, g.noMargin)
      }) : (0, r.jsx)(c.TIy, {
        size: "xs",
        color: "currentColor",
        className: g.icon
      })]
    }), (0, r.jsxs)(c.P3F, {
      className: l()(g.row, g.idRow),
      onClick: () => {
        (0, h.JG)(w), C(!0)
      },
      children: [(0, r.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial: ", w]
      }), j ? (0, r.jsx)(c.dz2, {
        size: "md",
        color: "currentColor",
        className: l()(g.icon, g.noMargin)
      }) : (0, r.jsx)(c.TIy, {
        size: "xs",
        color: "currentColor",
        className: g.icon
      })]
    }), (0, r.jsx)("div", {
      className: g.row,
      children: (0, r.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial Length:", " ", (0, p.if)({
          intervalType: null !== (i = null == P ? void 0 : P.interval) && void 0 !== i ? i : b.rV.MONTH,
          intervalCount: null !== (s = null == P ? void 0 : P.interval_count) && void 0 !== s ? s : 1,
          capitalize: !1
        })]
      })
    }), (0, r.jsxs)("div", {
      className: g.row,
      children: [(0, r.jsx)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: "Expires:"
      }), (0, r.jsx)("input", {
        type: "date",
        value: null != k ? k.substring(0, 10) : "",
        onChange: e => M({
          expiresAt: e.target.value
        })
      })]
    }), (0, r.jsxs)("div", {
      className: g.badgeContainer,
      children: [(0, r.jsx)(c.P3F, {
        onClick: B,
        className: l()(g.badge, g.clickable, {
          [g.acked]: A,
          [g.expired]: L
        }),
        children: (0, r.jsx)(c.Text, {
          variant: "eyebrow",
          color: "Acknowledged" === z ? void 0 : "always-white",
          children: z
        })
      }), null != I && (0, r.jsx)("div", {
        className: l()(g.badge, g.__invalid_badgeBottom, g.redeemed),
        children: (0, r.jsx)(c.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Redeemed"
        })
      })]
    }), (0, r.jsx)("div", {
      className: l()(g.loadingContainer, {
        [g.isLoading]: N || O
      }),
      children: (0, r.jsx)(c.$jN, {})
    })]
  })
}

function O(e) {
  var t, n;
  let {
    offer: i,
    offerOptions: s,
    forceRefetch: u
  } = e, [m, p] = a.useState(!1), [x, b] = a.useState(!1), [_, v] = a.useState(!1), [j, C] = a.useState(!1);
  a.useEffect(() => {
    _ && C(!0);
    let e = setTimeout(() => {
      C(!1)
    }, 500);
    return () => {
      clearTimeout(e)
    }
  }, [_]);
  let {
    id: N,
    expires_at: T,
    applied_at: O,
    discount_id: S,
    discount: E
  } = i, k = null !== (n = null === (t = s.find(e => {
    let {
      value: t
    } = e;
    return t === S
  })) || void 0 === t ? void 0 : t.label) && void 0 !== n ? n : "Unknown", I = null != T, w = null != T && new Date(T).getTime() < Date.now(), P = async () => {
    v(!0), I ? await Z({
      expiresAt: null
    }) : await (0, d.a)(void 0, i), u(), v(!1)
  }, Z = async e => {
    let {
      expiresAt: t
    } = e;
    v(!0);
    try {
      await o.tn.patch({
        url: f.ANM.UPDATE_USER_OFFER(N, "discount"),
        body: {
          expires_at: t
        },
        rejectWithError: !0
      })
    } finally {
      u(), v(!1)
    }
  };
  a.useEffect(() => {
    if (m) {
      let e = setTimeout(() => {
        p(!1)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
    if (x) {
      let e = setTimeout(() => {
        b(!1)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
  }, [m, x]);
  let R = "Active";
  return w && (R = "Expired"), I && (R = "Acknowledged"), (0, r.jsxs)("div", {
    className: l()(g.card, g.discount),
    children: [(0, r.jsxs)("div", {
      className: l()(g.row, g.nameRow),
      children: [(0, r.jsx)(c.X6q, {
        variant: "heading-lg/semibold",
        color: "text-normal",
        children: k
      }), (0, r.jsx)(c.P3F, {
        onClick: async () => {
          v(!0), await y(N, "discount"), u(), v(!1)
        },
        children: (0, r.jsx)(c.XHJ, {
          size: "md",
          color: "currentColor",
          className: l()(g.icon, g.trashIcon)
        })
      })]
    }), (0, r.jsxs)(c.P3F, {
      className: l()(g.row, g.idRow),
      onClick: () => {
        (0, h.JG)(N), p(!0)
      },
      children: [(0, r.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: ["Offer: ", N]
      }), m ? (0, r.jsx)(c.dz2, {
        size: "md",
        color: "currentColor",
        className: l()(g.icon, g.noMargin)
      }) : (0, r.jsx)(c.TIy, {
        size: "xs",
        color: "currentColor",
        className: g.icon
      })]
    }), (0, r.jsxs)(c.P3F, {
      className: l()(g.row, g.idRow),
      onClick: () => {
        (0, h.JG)(S), b(!0)
      },
      children: [(0, r.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: ["Discount: ", S]
      }), x ? (0, r.jsx)(c.dz2, {
        size: "md",
        color: "currentColor",
        className: l()(g.icon, g.noMargin)
      }) : (0, r.jsx)(c.TIy, {
        size: "xs",
        color: "currentColor",
        className: g.icon
      })]
    }), (null == E ? void 0 : E.amount) != null && (0, r.jsx)("div", {
      children: (0, r.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: [E.amount, "% off"]
      })
    }), (0, r.jsxs)("div", {
      className: g.row,
      children: [(0, r.jsx)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: "Expires:"
      }), (0, r.jsx)("input", {
        type: "date",
        value: null != T ? T.substring(0, 10) : "",
        onChange: e => Z({
          expiresAt: e.target.value
        })
      })]
    }), (0, r.jsxs)("div", {
      className: g.badgeContainer,
      children: [(0, r.jsx)(c.P3F, {
        onClick: P,
        className: l()(g.badge, g.clickable, {
          [g.acked]: I,
          [g.expired]: w
        }),
        children: (0, r.jsx)(c.Text, {
          variant: "eyebrow",
          color: "Acknowledged" === R ? void 0 : "always-white",
          children: R
        })
      }), null != O && (0, r.jsx)("div", {
        className: l()(g.badge, g.__invalid_badgeBottom, g.redeemed),
        children: (0, r.jsx)(c.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Applied"
        })
      })]
    }), (0, r.jsx)("div", {
      className: l()(g.loadingContainer, {
        [g.isLoading]: _ || j
      }),
      children: (0, r.jsx)(c.$jN, {})
    })]
  })
}

function S() {
  let [e, t] = a.useState([]), [n, i] = a.useState([]), [l, o] = a.useState(), [h, p] = a.useState(), [f, b] = a.useState([]), [y, S] = a.useState([]), [E, k] = a.useState(!0);
  a.useEffect(() => {
    (0 === e.length || 0 === n.length || E) && v().then(e => {
      let n = Object.keys(e.trial).map(t => ({
          label: t,
          value: e.trial[t]
        })),
        r = Object.keys(e.discount).map(t => ({
          label: t,
          value: e.discount[t]
        }));
      t(n), i(r), null == l && o(n[0].value), null == h && p(r[0].value)
    })
  }, [e, n, l, h, E]), a.useEffect(() => {
    E && (k(!1), m.Z.forceReset(), (0, d.T)(), C().then(e => {
      b(e.trial.sort((e, t) => e.id.localeCompare(t.id))), S(e.discount.sort((e, t) => e.id.localeCompare(t.id)))
    }))
  }, [E]);
  let I = async () => {
    null != l && (await j(l, "trial"), k(!0))
  }, w = async () => {
    null != h && (await j(h, "discount"), k(!0))
  }, P = async () => {
    await N(), k(!0)
  };
  return (0, r.jsx)(c.zJl, {
    className: _.panel,
    children: (0, r.jsxs)("div", {
      className: g.panelInner,
      children: [(0, r.jsxs)("section", {
        className: g.section,
        children: [(0, r.jsx)(c.X6q, {
          variant: "heading-md/semibold",
          children: "Utils"
        }), (0, r.jsxs)("div", {
          className: g.buttons,
          children: [(0, r.jsx)(c.zxk, {
            size: c.zxk.Sizes.SMALL,
            onClick: P,
            children: "Clear all User Offers"
          }), (0, r.jsx)(c.zxk, {
            size: c.zxk.Sizes.SMALL,
            onClick: () => (0, u.w9)(s.z.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
            children: "Clear Mobile Trials DismissibleContent"
          }), (0, r.jsx)(c.zxk, {
            size: c.zxk.Sizes.SMALL,
            onClick: () => k(!0),
            children: "Refresh DevTools"
          })]
        })]
      }), (0, r.jsxs)("section", {
        className: g.section,
        children: [(0, r.jsx)(c.X6q, {
          variant: "heading-md/semibold",
          children: "Create a Trial Offer"
        }), (0, r.jsxs)("div", {
          className: g.inputRow,
          children: [(0, r.jsx)(c.PhF, {
            className: g.input,
            options: e,
            isSelected: e => l === e,
            placeholder: "Trial Type",
            serialize: e => String(e),
            select: e => o(e),
            popoutLayerContext: x.O$
          }), (0, r.jsx)(c.zxk, {
            onClick: I,
            children: "Create"
          })]
        })]
      }), (0, r.jsxs)("section", {
        className: g.section,
        children: [(0, r.jsx)(c.X6q, {
          variant: "heading-md/semibold",
          children: "Create a Discount Offer"
        }), (0, r.jsxs)("div", {
          className: g.inputRow,
          children: [(0, r.jsx)(c.PhF, {
            className: g.input,
            options: n,
            isSelected: e => h === e,
            placeholder: "Discount Type",
            serialize: e => String(e),
            select: e => p(e),
            popoutLayerContext: x.O$
          }), (0, r.jsx)(c.zxk, {
            onClick: w,
            children: "Create"
          })]
        })]
      }), f.length > 0 && (0, r.jsxs)("section", {
        className: g.section,
        children: [(0, r.jsx)(c.X6q, {
          variant: "heading-md/semibold",
          children: "Existing Trial Offers"
        }), f.map(t => (0, r.jsx)(T, {
          offer: t,
          offerOptions: e,
          forceRefetch: () => k(!0)
        }, t.id))]
      }), y.length > 0 && (0, r.jsxs)("section", {
        className: g.section,
        children: [(0, r.jsx)(c.X6q, {
          variant: "heading-md/semibold",
          children: "Existing Discount Offers"
        }), y.map(e => (0, r.jsx)(O, {
          offer: e,
          offerOptions: n,
          forceRefetch: () => k(!0)
        }, e.id))]
      })]
    })
  })
}