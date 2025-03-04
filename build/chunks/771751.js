/** Chunk was on 93886 **/
n.d(t, {
  Z: () => E
}), n(47120), n(230036);
var r = n(200651),
  a = n(192379),
  l = n(120356),
  i = n.n(l),
  o = n(544891),
  s = n(704215),
  c = n(481060),
  d = n(937579),
  u = n(675478),
  m = n(431),
  h = n(572004),
  x = n(74538),
  p = n(246992),
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
      url: f.ANM.DELETE_USER_OFFER(e, t),
      rejectWithError: !0
    })
  } catch (e) {} finally {
    await (0, d.T)()
  }
}, C = async (e, t) => {
  try {
    await o.tn.post({
      url: f.ANM.UNACK_USER_OFFER(e, t),
      rejectWithError: !0
    })
  } catch (e) {} finally {
    await (0, d.T)()
  }
}, O = async () => {
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
  var t, n, l, s;
  let {
    offer: u,
    offerOptions: m,
    forceRefetch: p
  } = e, [f, _] = a.useState(!1), [v, j] = a.useState(!1), [O, N] = a.useState(!1), [T, S] = a.useState(!1);
  a.useEffect(() => {
    O && S(!0);
    let e = setTimeout(() => {
      S(!1)
    }, 500);
    return () => {
      clearTimeout(e)
    }
  }, [O]);
  let {
    id: E,
    expires_at: I,
    redeemed_at: k,
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
  let L = null != I,
    A = null != I && new Date(I).getTime() < Date.now(),
    D = (null == P ? void 0 : P.sku_id) === b.Si.TIER_0,
    B = async () => {
      N(!0), L ? await C(E, "trial") : await (0, d.a)(u), p(), N(!1)
    }, M = async e => {
      let {
        expiresAt: t
      } = e;
      N(!0);
      try {
        await o.tn.patch({
          url: "/user-offers/trial/".concat(E),
          body: {
            expires_at: t
          },
          rejectWithError: !0
        })
      } finally {
        p(), N(!1)
      }
    };
  a.useEffect(() => {
    if (f) {
      let e = setTimeout(() => {
        _(!1)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
    if (v) {
      let e = setTimeout(() => {
        j(!1)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
  }, [f, v]);
  let z = "Active";
  return L && (z = "Acknowledged"), A && (z = "Expired"), (0, r.jsxs)("div", {
    className: i()(g.card, D ? g.gradientWrapperTier0 : g.gradientWrapperTier2),
    children: [(0, r.jsxs)("div", {
      className: i()(g.row, g.nameRow),
      children: [(0, r.jsx)(c.X6q, {
        variant: "heading-lg/semibold",
        color: "always-white",
        children: R
      }), (0, r.jsx)(c.P3F, {
        onClick: async () => {
          N(!0), await y(E, "trial"), p(), N(!1)
        },
        children: (0, r.jsx)(c.XHJ, {
          size: "md",
          color: "currentColor",
          className: i()(g.icon, g.trashIcon)
        })
      })]
    }), (0, r.jsxs)(c.P3F, {
      className: i()(g.row, g.idRow),
      onClick: () => {
        (0, h.JG)(E), _(!0)
      },
      children: [(0, r.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Offer: ", E]
      }), f ? (0, r.jsx)(c.dz2, {
        size: "md",
        color: "currentColor",
        className: i()(g.icon, g.noMargin)
      }) : (0, r.jsx)(c.TIy, {
        size: "xs",
        color: "currentColor",
        className: g.icon
      })]
    }), (0, r.jsxs)(c.P3F, {
      className: i()(g.row, g.idRow),
      onClick: () => {
        (0, h.JG)(w), j(!0)
      },
      children: [(0, r.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial: ", w]
      }), v ? (0, r.jsx)(c.dz2, {
        size: "md",
        color: "currentColor",
        className: i()(g.icon, g.noMargin)
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
        children: ["Trial Length:", " ", (0, x.if)({
          intervalType: null !== (l = null == P ? void 0 : P.interval) && void 0 !== l ? l : b.rV.MONTH,
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
        value: null != I ? I.substring(0, 10) : "",
        onChange: e => M({
          expiresAt: e.target.value
        })
      })]
    }), (0, r.jsxs)("div", {
      className: g.badgeContainer,
      children: [(0, r.jsx)(c.P3F, {
        onClick: B,
        className: i()(g.badge, g.clickable, {
          [g.acked]: L,
          [g.expired]: A
        }),
        children: (0, r.jsx)(c.Text, {
          variant: "eyebrow",
          color: "Acknowledged" === z ? void 0 : "always-white",
          children: z
        })
      }), null != k && (0, r.jsx)("div", {
        className: i()(g.badge, g.__invalid_badgeBottom, g.redeemed),
        children: (0, r.jsx)(c.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Redeemed"
        })
      })]
    }), (0, r.jsx)("div", {
      className: i()(g.loadingContainer, {
        [g.isLoading]: O || T
      }),
      children: (0, r.jsx)(c.$jN, {})
    })]
  })
}

function S(e) {
  var t, n;
  let {
    offer: l,
    offerOptions: s,
    forceRefetch: u
  } = e, [m, x] = a.useState(!1), [p, f] = a.useState(!1), [b, _] = a.useState(!1), [v, j] = a.useState(!1);
  a.useEffect(() => {
    b && j(!0);
    let e = setTimeout(() => {
      j(!1)
    }, 500);
    return () => {
      clearTimeout(e)
    }
  }, [b]);
  let {
    id: O,
    expires_at: N,
    applied_at: T,
    discount_id: S,
    discount: E
  } = l, I = null !== (n = null === (t = s.find(e => {
    let {
      value: t
    } = e;
    return t === S
  })) || void 0 === t ? void 0 : t.label) && void 0 !== n ? n : "Unknown", k = null != N, w = null != N && new Date(N).getTime() < Date.now(), P = async () => {
    _(!0), k ? await C(O, "discount") : await (0, d.a)(void 0, l), u(), _(!1)
  }, Z = async e => {
    let {
      expiresAt: t
    } = e;
    _(!0);
    try {
      await o.tn.patch({
        url: "/user-offers/discount/".concat(O),
        body: {
          expires_at: t
        },
        rejectWithError: !0
      })
    } finally {
      u(), _(!1)
    }
  };
  a.useEffect(() => {
    if (m) {
      let e = setTimeout(() => {
        x(!1)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
    if (p) {
      let e = setTimeout(() => {
        f(!1)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
  }, [m, p]);
  let R = "Active";
  return w && (R = "Expired"), k && (R = "Acknowledged"), (0, r.jsxs)("div", {
    className: i()(g.card, g.discount),
    children: [(0, r.jsxs)("div", {
      className: i()(g.row, g.nameRow),
      children: [(0, r.jsx)(c.X6q, {
        variant: "heading-lg/semibold",
        color: "text-normal",
        children: I
      }), (0, r.jsx)(c.P3F, {
        onClick: async () => {
          _(!0), await y(O, "discount"), u(), _(!1)
        },
        children: (0, r.jsx)(c.XHJ, {
          size: "md",
          color: "currentColor",
          className: i()(g.icon, g.trashIcon)
        })
      })]
    }), (0, r.jsxs)(c.P3F, {
      className: i()(g.row, g.idRow),
      onClick: () => {
        (0, h.JG)(O), x(!0)
      },
      children: [(0, r.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: ["Offer: ", O]
      }), m ? (0, r.jsx)(c.dz2, {
        size: "md",
        color: "currentColor",
        className: i()(g.icon, g.noMargin)
      }) : (0, r.jsx)(c.TIy, {
        size: "xs",
        color: "currentColor",
        className: g.icon
      })]
    }), (0, r.jsxs)(c.P3F, {
      className: i()(g.row, g.idRow),
      onClick: () => {
        (0, h.JG)(S), f(!0)
      },
      children: [(0, r.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: ["Discount: ", S]
      }), p ? (0, r.jsx)(c.dz2, {
        size: "md",
        color: "currentColor",
        className: i()(g.icon, g.noMargin)
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
        value: null != N ? N.substring(0, 10) : "",
        onChange: e => Z({
          expiresAt: e.target.value
        })
      })]
    }), (0, r.jsxs)("div", {
      className: g.badgeContainer,
      children: [(0, r.jsx)(c.P3F, {
        onClick: P,
        className: i()(g.badge, g.clickable, {
          [g.acked]: k,
          [g.expired]: w
        }),
        children: (0, r.jsx)(c.Text, {
          variant: "eyebrow",
          color: "Acknowledged" === R ? void 0 : "always-white",
          children: R
        })
      }), null != T && (0, r.jsx)("div", {
        className: i()(g.badge, g.__invalid_badgeBottom, g.redeemed),
        children: (0, r.jsx)(c.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Applied"
        })
      })]
    }), (0, r.jsx)("div", {
      className: i()(g.loadingContainer, {
        [g.isLoading]: b || v
      }),
      children: (0, r.jsx)(c.$jN, {})
    })]
  })
}

function E() {
  let [e, t] = a.useState([]), [n, l] = a.useState([]), [i, o] = a.useState(), [h, x] = a.useState(), [f, b] = a.useState([]), [y, C] = a.useState([]), [E, I] = a.useState(!0);
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
      t(n), l(r), null == i && o(n[0].value), null == h && x(r[0].value)
    })
  }, [e, n, i, h, E]), a.useEffect(() => {
    E && (I(!1), m.Z.forceReset(), (0, d.T)(), O().then(e => {
      b(e.trial.sort((e, t) => e.id.localeCompare(t.id))), C(e.discount.sort((e, t) => e.id.localeCompare(t.id)))
    }))
  }, [E]);
  let k = async () => {
    null != i && (await j(i, "trial"), I(!0))
  }, w = async () => {
    null != h && (await j(h, "discount"), I(!0))
  }, P = async () => {
    await N(), I(!0)
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
            onClick: () => I(!0),
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
            isSelected: e => i === e,
            placeholder: "Trial Type",
            serialize: e => String(e),
            select: e => o(e),
            popoutLayerContext: p.O$
          }), (0, r.jsx)(c.zxk, {
            onClick: k,
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
            select: e => x(e),
            popoutLayerContext: p.O$
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
          forceRefetch: () => I(!0)
        }, t.id))]
      }), y.length > 0 && (0, r.jsxs)("section", {
        className: g.section,
        children: [(0, r.jsx)(c.X6q, {
          variant: "heading-md/semibold",
          children: "Existing Discount Offers"
        }), y.map(e => (0, r.jsx)(S, {
          offer: e,
          offerOptions: n,
          forceRefetch: () => I(!0)
        }, e.id))]
      })]
    })
  })
}