/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  C: () => U,
  K: () => k
}), n(47120), n(266796), n(13667), n(390547);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(149765),
  o = n(866442),
  c = n(442837),
  A = n(902704),
  d = n(477690),
  u = n(481060),
  g = n(596454),
  f = n(211266),
  m = n(471445),
  p = n(605436),
  h = n(91218),
  C = n(313201),
  b = n(339085),
  v = n(518738),
  x = n(131704),
  N = n(324067),
  j = n(430824),
  E = n(259580),
  I = n(624138),
  O = n(817460),
  y = n(166803),
  w = n(629262),
  P = n(686807),
  B = n(981631),
  D = n(388032),
  T = n(348227);
let S = (0, C.hQ)(),
  L = (0, C.hQ)(),
  R = (0, I.Mg)(d.Z.IMPORT_BENEFITS_MODAL_ROLE_ICON_SIZE);

function Q(e) {
  var t;
  let {
    emojiId: n,
    emojiName: i,
    className: s
  } = e, a = (0, c.e7)([b.ZP], () => null != n ? b.ZP.getCustomEmojiById(n) : void 0);
  return (0, r.jsx)(g.Z, {
    emojiId: n,
    emojiName: i,
    animated: null !== (t = null == a ? void 0 : a.animated) && void 0 !== t && t,
    className: s
  })
}

function Z(e) {
  let {
    icon: t,
    children: n,
    checked: i,
    disabled: s = !1,
    onChange: l
  } = e, o = i || s;
  return (0, r.jsxs)("label", {
    className: a()(T.row, {
      [T.checked]: o,
      [T.disabled]: s
    }),
    children: [(0, r.jsx)("div", {
      className: T.rowIconWrapper,
      children: t
    }), (0, r.jsx)("div", {
      className: T.rowText,
      children: n
    }), (0, r.jsxs)("div", {
      className: T.rowCheckbox,
      children: [(0, r.jsx)(u.tEY, {
        children: (0, r.jsx)("input", {
          type: "checkbox",
          checked: o,
          disabled: s,
          className: T.checkboxInput,
          onChange: function(e) {
            l(e.target.checked)
          }
        })
      }), (0, r.jsx)("div", {
        className: T.checkboxDisplay,
        children: (0, r.jsx)(u.dz2, {
          size: "md",
          color: "currentColor",
          className: T.checkboxIcon,
          "aria-hidden": !0
        })
      })]
    })]
  })
}

function W(e) {
  let {
    title: t,
    selectAllText: n,
    benefits: i,
    dupeBenefits: s,
    selectedBenefits: a,
    onToggleBenefit: l
  } = e, o = i.every(e => a.has(e));
  return i.length > 0 ? (0, r.jsxs)(u.hjN, {
    title: t,
    className: T.section,
    children: [i.length - s.size > 1 && (0, r.jsx)("div", {
      className: T.list,
      children: (0, r.jsx)(Z, {
        icon: (0, r.jsx)(u.avL, {
          size: "md",
          color: "currentColor",
          className: T.rowIcon
        }),
        checked: o,
        onChange: function(e) {
          for (let t of i) s.has(t) || l(t, e)
        },
        children: (0, r.jsx)(u.Text, {
          color: "header-primary",
          variant: "text-md/normal",
          children: n
        })
      })
    }), (0, r.jsx)("div", {
      className: T.list,
      children: i.map(e => (0, r.jsxs)(Z, {
        icon: (0, r.jsx)(Q, {
          emojiId: e.emoji_id,
          emojiName: e.emoji_name,
          className: T.rowIcon
        }),
        checked: a.has(e),
        disabled: s.has(e),
        onChange: t => l(e, t),
        children: [(0, r.jsx)(u.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          children: (0, P.Z)(e)
        }), (0, r.jsx)(u.Text, {
          color: "interactive-normal",
          variant: "text-sm/normal",
          children: e.description
        })]
      }, (0, O.ab)(e)))
    })]
  }) : null
}

function k(e) {
  let {
    transitionState: t,
    fromSubscriptionListing: n,
    existingChannelBenefits: s,
    existingIntangibleBenefits: a,
    onSubmit: l,
    onClose: o
  } = e, c = n.role_benefits.benefits, [d, g] = i.useState(() => new Set(c)), f = i.useMemo(() => c.filter(O.rC), [c]), m = (0, w.Z)(f), p = i.useMemo(() => c.filter(O.lL), [c]), h = i.useMemo(() => new Set(m.filter(e => s.some(t => t.ref_id === e.ref_id))), [m, s]), b = i.useMemo(() => new Set(p.filter(e => a.some(t => (0, A.Z)(e, t)))), [a, p]), v = (0, C.Dt)();

  function x(e, t) {
    g(n => {
      let r = new Set(n);
      return t ? r.add(e) : r.delete(e), r
    })
  }
  return (0, r.jsx)("form", {
    onSubmit: function(e) {
      e.preventDefault();
      let t = c.filter(e => d.has(e));
      l(t.filter(O.rC).filter(e => !h.has(e)), t.filter(O.lL).filter(e => !b.has(e))), o()
    },
    children: (0, r.jsxs)(u.Y0X, {
      transitionState: t,
      "aria-labelledby": v,
      children: [(0, r.jsxs)(u.xBx, {
        children: [(0, r.jsx)(u.X6q, {
          id: v,
          variant: "heading-md/semibold",
          children: D.NW.format(D.t["7zpiYG"], {
            tierName: n.name
          })
        }), (0, r.jsx)(u.olH, {
          className: T.modalCloseButton,
          onClick: o
        })]
      }), (0, r.jsxs)(u.hzk, {
        className: T.modalContent,
        children: [(0, r.jsx)(W, {
          title: D.NW.string(D.t.S2kKzM),
          selectAllText: D.NW.string(D.t["5Q/fLC"]),
          benefits: m,
          dupeBenefits: h,
          selectedBenefits: d,
          onToggleBenefit: x
        }), (0, r.jsx)(W, {
          title: D.NW.string(D.t.RdwKw8),
          selectAllText: D.NW.string(D.t.aJPLVF),
          benefits: p,
          dupeBenefits: b,
          selectedBenefits: d,
          onToggleBenefit: x
        })]
      }), (0, r.jsxs)(u.mzw, {
        children: [(0, r.jsx)(u.zxk, {
          type: "submit",
          children: D.NW.string(D.t["27a219"])
        }), (0, r.jsx)(u.zxk, {
          look: u.zxk.Looks.LINK,
          color: u.zxk.Colors.PRIMARY,
          onClick: o,
          children: D.NW.string(D.t["ETE/oK"])
        })]
      })]
    })
  })
}

function M(e) {
  var t;
  let {
    guildId: n,
    role: i,
    channelCount: s,
    onSelect: a
  } = e, l = (0, v.p9)({
    guildId: n,
    roleId: i.id,
    size: R
  });
  return (0, r.jsxs)(u.P3F, {
    className: T.roleRow,
    onClick: a,
    children: [(0, r.jsx)("div", {
      className: T.rowIconWrapper,
      children: null != l ? (0, r.jsx)(h.Z, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = r
          })
        }
        return e
      }({}, l)) : (0, r.jsx)(u.lZ8, {
        size: "custom",
        width: 23,
        height: 23,
        color: null !== (t = i.colorString) && void 0 !== t ? t : (0, o.Rf)(B.p6O),
        className: T.roleRowIconDefault
      })
    }), (0, r.jsxs)("div", {
      className: T.rowText,
      children: [(0, r.jsx)(u.Text, {
        color: "header-primary",
        variant: "text-md/normal",
        className: T.__invalid_benefitTitle,
        children: i.name
      }), (0, r.jsx)(u.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: D.NW.format(D.t["2KzH8/"], {
          num: s
        })
      })]
    }), (0, r.jsx)("div", {
      className: T.rowCheckbox,
      children: (0, r.jsx)(E.Z, {
        direction: E.Z.Directions.RIGHT
      })
    })]
  })
}

function _(e) {
  let {
    guild: t,
    onSelect: n
  } = e, s = (0, c.e7)([j.Z], () => j.Z.getRoles(t.id)), a = (0, c.e7)([N.Z], () => N.Z.getCategories(t.id)), o = i.useMemo(() => a._categories.flatMap(e => a[e.channel.id].filter(e => {
    let {
      channel: t
    } = e;
    return x.zS.has(t.type)
  }).map(e => {
    let {
      channel: t
    } = e;
    return t
  })), [a]), A = i.useMemo(() => Object.values(s).flatMap(e => {
    var n;
    if ((0, p.pM)(t.id, e.id) || (null === (n = e.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null || l.Db(e.permissions, B.TC2)) return [];
    let r = (0, y.Z)(o, e).length;
    return r > 0 ? {
      role: e,
      channelCount: r
    } : []
  }), [t, s, o]);
  return A.length > 0 ? (0, r.jsx)("div", {
    className: T.list,
    children: A.map(e => (0, r.jsx)(M, {
      guildId: t.id,
      role: e.role,
      channelCount: e.channelCount,
      onSelect: () => n(e.role)
    }, e.role.id))
  }) : (0, r.jsx)(u.Text, {
    variant: "text-md/normal",
    children: D.NW.string(D.t.u09gKi)
  })
}

function G(e) {
  let {
    onClose: t,
    guildId: n,
    onSelect: i
  } = e, s = (0, c.e7)([j.Z], () => j.Z.getGuild(n));
  return null == s ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(u.xBx, {
      children: [(0, r.jsx)(u.X6q, {
        id: S,
        variant: "heading-md/semibold",
        children: D.NW.string(D.t["3JrZ/P"])
      }), (0, r.jsx)(u.olH, {
        className: T.modalCloseButton,
        onClick: t
      })]
    }), (0, r.jsx)(u.hzk, {
      className: T.modalContent,
      children: (0, r.jsx)(_, {
        guild: s,
        onSelect: i
      })
    })]
  })
}

function F(e) {
  let {
    onClose: t,
    guildId: n,
    role: s,
    onCancel: a,
    onImport: l
  } = e, o = i.useRef(s);
  null != s && (o.current = s);
  let c = null != s ? s : o.current,
    A = (0, f.Z)(() => {
      let e = N.Z.getCategories(n);
      return e._categories.flatMap(t => e[t.channel.id].filter(e => {
        let {
          channel: t
        } = e;
        return x.zS.has(t.type)
      }).map(e => {
        let {
          channel: t
        } = e;
        return t
      }))
    }),
    d = i.useMemo(() => (0, y.Z)(A, c), [A, c]),
    [g, p] = i.useState(() => new Set(d.map(e => e.id)));

  function h(e, t) {
    p(n => {
      let r = new Set(n);
      return t ? r.add(e) : r.delete(e), r
    })
  }
  return (0, r.jsxs)("form", {
    onSubmit: function(e) {
      e.preventDefault(), l(d.map(e => e.id).filter(e => g.has(e))), t()
    },
    className: T.slideForm,
    children: [(0, r.jsxs)(u.xBx, {
      children: [(0, r.jsx)(u.X6q, {
        id: L,
        variant: "heading-md/semibold",
        children: D.NW.format(D.t.iuPodH, {
          roleName: c.name
        })
      }), (0, r.jsx)(u.olH, {
        className: T.modalCloseButton,
        onClick: t
      })]
    }), (0, r.jsxs)(u.hzk, {
      className: T.modalContent,
      children: [d.length > 1 && (0, r.jsx)("div", {
        className: T.list,
        children: (0, r.jsx)(Z, {
          icon: (0, r.jsx)(u.avL, {
            size: "md",
            color: "currentColor"
          }),
          checked: g.size === d.length,
          onChange: function(e) {
            for (let t of d) h(t.id, e)
          },
          children: (0, r.jsx)(u.Text, {
            color: "header-primary",
            variant: "text-md/normal",
            children: D.NW.string(D.t["5Q/fLC"])
          })
        })
      }), (0, r.jsx)("div", {
        className: T.list,
        children: d.map(e => {
          var t;
          let n = null !== (t = (0, m.Th)(e.type)) && void 0 !== t ? t : u.VL1;
          return (0, r.jsx)(Z, {
            icon: (0, r.jsx)("div", {
              className: T.rowIcon,
              children: (0, r.jsx)(n, {
                size: "custom",
                color: "currentColor",
                width: "100%",
                height: "100%"
              })
            }),
            checked: g.has(e.id),
            onChange: t => h(e.id, t),
            children: (0, r.jsx)(u.Text, {
              color: "header-primary",
              variant: "text-md/normal",
              className: T.__invalid_benefitTitle,
              children: e.name
            })
          }, e.id)
        })
      })]
    }), (0, r.jsxs)(u.mzw, {
      children: [(0, r.jsx)(u.zxk, {
        type: "submit",
        children: D.NW.string(D.t["1j8So6"])
      }), (0, r.jsx)(u.zxk, {
        look: u.zxk.Looks.LINK,
        color: u.zxk.Colors.PRIMARY,
        onClick: a,
        children: D.NW.string(D.t["ETE/oK"])
      })]
    })]
  })
}

function U(e) {
  let {
    transitionState: t,
    guildId: n,
    onClose: s,
    onImport: a
  } = e, [l, o] = i.useState();
  return (0, r.jsx)(u.Y0X, {
    transitionState: t,
    "aria-labelledby": null == l ? S : L,
    children: (0, r.jsxs)(u.MyZ, {
      contentDisplay: "flex",
      activeSlide: +(null != l),
      width: 440,
      children: [(0, r.jsx)(u.Mi4, {
        id: 0,
        children: (0, r.jsx)(G, {
          onClose: s,
          guildId: n,
          onSelect: o
        })
      }), (0, r.jsx)(u.Mi4, {
        id: 1,
        children: (0, r.jsx)(F, {
          onClose: s,
          guildId: n,
          role: l,
          onCancel: () => o(void 0),
          onImport: a
        })
      })]
    })
  })
}