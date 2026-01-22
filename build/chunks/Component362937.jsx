/** Chunk was on 66946 **/
/** chunk id: 362937, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ImportBenefitsFromRoleModal: () => K,
  ImportBenefitsFromSubscriptionListingModal: () => P
}), require("./896048.js"), require("./228524.js"), require("./114821.js"), require("./339614.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk52133 = require("./52133.js"),
  Chunk319060 = require("./319060.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk444927 = require("./444927.js"),
  Chunk713654 = require("./713654.js"),
  Chunk915089 = require("./915089.js"),
  Chunk508675 = require("./508675.js"),
  Chunk201275 = require("./201275.js"),
  Chunk657048 = require("./657048.jsx"),
  Chunk95701 = require("./95701.js"),
  Chunk34457 = require("./34457.js"),
  Chunk769765 = require("./769765.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk240248 = require("./240248.js"),
  Chunk500345 = require("./500345.js"),
  Chunk361588 = require("./361588.js"),
  Chunk417360 = require("./417360.js"),
  Chunk898612 = require("./898612.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk669297 = require("./669297.js");
let O = (0, Chunk915089.Ld)(),
  B = (0, Chunk915089.Ld)(),
  L = (0, Chunk240248.xI)(Chunk319060.A.IMPORT_BENEFITS_MODAL_ROLE_ICON_SIZE);

function z(e) {
  var t;
  let {
    emojiId: n,
    emojiName: l,
    className: r
  } = e, a = (0, o.bG)([g.Ay], () => null != n ? g.Ay.getCustomEmojiById(n) : true);
  return (0, i.jsx)(u.A, {
    emojiId: n,
    emojiName: l,
    animated: null != (t = null == a ? true : a.animated) && t,
    className: r
  })
}

function D(e) {
  let {
    icon: t,
    children: n,
    checked: l,
    disabled: r = false,
    onChange: s
  } = e, o = l || r;
  return (0, i.jsxs)("label", {
    className: a()(M.nM, {
      [M.KD]: o,
      [M.r9]: r
    }),
    children: [(0, i.jsx)("div", {
      className: M.N,
      children: t
    }), (0, i.jsx)("div", {
      className: M.qg,
      children: n
    }), (0, i.jsxs)("div", {
      className: M.eF,
      children: [(0, i.jsx)(m.vN3, {
        children: (0, i.jsx)("input", {
          type: "checkbox",
          checked: o,
          disabled: r,
          className: M.m8,
          onChange: function(e) {
            s(e.target.checked)
          }
        })
      }), (0, i.jsx)("div", {
        className: M.Ew,
        children: (0, i.jsx)(m.A9s, {
          size: "md",
          color: "currentColor",
          className: M.pc,
          "aria-hidden": true
        })
      })]
    })]
  })
}

function G(e) {
  let {
    title: t,
    selectAllText: n,
    benefits: l,
    dupeBenefits: r,
    selectedBenefits: a,
    onToggleBenefit: s
  } = e, o = l.every(e => a.has(e));
  return l.length > 0 ? (0, i.jsxs)("div", {
    className: M.uW,
    children: [(0, i.jsx)(m.Heading, {
      variant: "heading-md/semibold",
      color: "text-strong",
      children: t
    }), l.length - r.size > 1 && (0, i.jsx)("div", {
      className: M.p_,
      children: (0, i.jsx)(D, {
        icon: (0, i.jsx)(m.fdC, {
          size: "md",
          color: "currentColor",
          className: M.aL
        }),
        checked: o,
        onChange: function(e) {
          for (let t of l) r.has(t) || s(t, e)
        },
        children: (0, i.jsx)(m.Text, {
          color: "text-strong",
          variant: "text-md/normal",
          children: n
        })
      })
    }), (0, i.jsx)("div", {
      className: M.p_,
      children: l.map(e => (0, i.jsxs)(D, {
        icon: (0, i.jsx)(z, {
          emojiId: e.emoji_id,
          emojiName: e.emoji_name,
          className: M.aL
        }),
        checked: a.has(e),
        disabled: r.has(e),
        onChange: t => s(e, t),
        children: [(0, i.jsx)(m.Text, {
          color: "text-strong",
          variant: "text-md/semibold",
          children: (0, k.A)(e)
        }), (0, i.jsx)(m.Text, {
          color: "interactive-text-default",
          variant: "text-sm/normal",
          children: e.description
        })]
      }, (0, y.nh)(e)))
    })]
  }) : null
}

function P(e) {
  let {
    transitionState: t,
    fromSubscriptionListing: n,
    existingChannelBenefits: r,
    existingIntangibleBenefits: a,
    onSubmit: o,
    onClose: c
  } = e, u = n.role_benefits.benefits, [x, h] = l.useState(() => new Set(u)), f = l.useMemo(() => u.filter(y.B1), [u]), g = (0, I.A)(f), j = l.useMemo(() => u.filter(y.b1), [u]), p = l.useMemo(() => new Set(g.filter(e => r.some(t => t.ref_id === e.ref_id))), [g, r]), b = l.useMemo(() => new Set(j.filter(e => a.some(t => (0, d.A)(e, t)))), [a, j]);

  function v(e, t) {
    h(n => {
      let i = new Set(n);
      return t ? i.add(e) : i.delete(e), i
    })
  }

  function N(e) {
    e.preventDefault();
    let t = u.filter(e => x.has(e));
    o(t.filter(y.B1).filter(e => !p.has(e)), t.filter(y.b1).filter(e => !b.has(e))), c()
  }
  return (0, i.jsx)("form", {
    onSubmit: N,
    children: (0, i.jsxs)(s.Modal, {
      transitionState: t,
      onClose: c,
      title: E.intl.format(E.t["7zpiYL"], {
        tierName: n.name
      }).toString(),
      actions: [{
        variant: "secondary",
        text: E.intl.string(E.t["ETE/oC"]),
        onClick: c
      }, {
        variant: "primary",
        text: E.intl.string(E.t["27a21y"]),
        disabled: 0 === x.size,
        onClick: N
      }],
      children: [0 === g.length && 0 === j.length && (0, i.jsx)(m.Text, {
        variant: "text-md/normal",
        children: E.intl.string(E.t["I+16xv"])
      }), (0, i.jsx)(G, {
        title: E.intl.string(E.t.S2kKzP),
        selectAllText: E.intl.string(E.t["5Q/fLO"]),
        benefits: g,
        dupeBenefits: p,
        selectedBenefits: x,
        onToggleBenefit: v
      }), (0, i.jsx)(G, {
        title: E.intl.string(E.t.RdwKw7),
        selectAllText: E.intl.string(E.t.aJPLVE),
        benefits: j,
        dupeBenefits: b,
        selectedBenefits: x,
        onToggleBenefit: v
      })]
    })
  })
}

function F(e) {
  var t;
  let {
    guildId: n,
    role: l,
    channelCount: r,
    onSelect: a
  } = e, s = (0, j.$7)({
    guildId: n,
    roleId: l.id,
    size: L
  });
  return (0, i.jsxs)(m.DUT, {
    className: M.xf,
    onClick: a,
    children: [(0, i.jsx)("div", {
      className: M.N,
      children: null != s ? (0, i.jsx)(p.A, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({}, s)) : (0, i.jsx)(m.iTF, {
        size: "custom",
        width: 23,
        height: 23,
        color: null != (t = l.colorString) ? t : w.TpD,
        className: M.bO
      })
    }), (0, i.jsxs)("div", {
      className: M.qg,
      children: [(0, i.jsx)(m.Text, {
        color: "text-strong",
        variant: "text-md/normal",
        className: M.__invalid_benefitTitle,
        children: l.name
      }), (0, i.jsx)(m.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: E.intl.format(E.t["2KzH89"], {
          num: r
        })
      })]
    }), (0, i.jsx)("div", {
      className: M.eF,
      children: (0, i.jsx)(S.A, {
        direction: S.A.Directions.RIGHT
      })
    })]
  })
}

function R(e) {
  let {
    guild: t,
    onSelect: n
  } = e, r = (0, o.bG)([_.A], () => _.A.getSortedRoles(t.id)), a = (0, o.bG)([N.A], () => N.A.getCategories(t.id)), s = l.useMemo(() => a._categories.flatMap(e => a[e.channel.id].filter(e => {
    let {
      channel: t
    } = e;
    return b.JT.has(t.type)
  }).map(e => {
    let {
      channel: t
    } = e;
    return t
  })), [a]), d = l.useMemo(() => r.flatMap(e => {
    var t;
    if ((0, v.Oy)(e) || (null == (t = e.tags) ? true : t.subscription_listing_id) != null || (0, v.sx)(e, w.Lti)) return [];
    let n = (0, A.A)(s, e).length;
    return n > 0 ? {
      role: e,
      channelCount: n
    } : []
  }), [r, s]);
  return d.length > 0 ? (0, i.jsx)("div", {
    className: M.p_,
    children: d.map(e => (0, i.jsx)(F, {
      guildId: t.id,
      role: e.role,
      channelCount: e.channelCount,
      onSelect: () => n(e.role)
    }, e.role.id))
  }) : (0, i.jsx)(m.Text, {
    variant: "text-md/normal",
    children: E.intl.string(E.t.u09gKk)
  })
}

function H(e) {
  let {
    onClose: t,
    guildId: n,
    onSelect: l
  } = e, r = (0, o.bG)([C.A], () => C.A.getGuild(n));
  return null == r ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(m.rQ0, {
      "data-migration-pending": true,
      children: [(0, i.jsx)(m.Heading, {
        id: O,
        variant: "heading-md/semibold",
        children: E.intl.string(E.t["3JrZ/P"])
      }), (0, i.jsx)(m.s_y, {
        "data-migration-pending": true,
        className: M.iT,
        onClick: t
      })]
    }), (0, i.jsx)(m.$mQ, {
      "data-migration-pending": true,
      className: M.jE,
      children: (0, i.jsx)(R, {
        guild: r,
        onSelect: l
      })
    })]
  })
}

function Q(e) {
  let {
    onClose: t,
    guildId: n,
    role: r,
    onCancel: a,
    onImport: s
  } = e, o = l.useRef(r);
  null != r && (o.current = r);
  let d = null != r ? r : o.current,
    c = (0, x.A)(() => {
      let e = N.A.getCategories(n);
      return e._categories.flatMap(t => e[t.channel.id].filter(e => {
        let {
          channel: t
        } = e;
        return b.JT.has(t.type)
      }).map(e => {
        let {
          channel: t
        } = e;
        return t
      }))
    }),
    u = l.useMemo(() => (0, A.A)(c, d), [c, d]),
    [f, g] = l.useState(() => new Set(u.map(e => e.id)));

  function j(e, t) {
    g(n => {
      let i = new Set(n);
      return t ? i.add(e) : i.delete(e), i
    })
  }
  return (0, i.jsxs)("form", {
    onSubmit: function(e) {
      e.preventDefault(), s(u.map(e => e.id).filter(e => f.has(e))), t()
    },
    className: M.ID,
    children: [(0, i.jsxs)(m.rQ0, {
      "data-migration-pending": true,
      children: [(0, i.jsx)(m.Heading, {
        id: B,
        variant: "heading-md/semibold",
        children: E.intl.format(E.t.iuPodG, {
          roleName: d.name
        })
      }), (0, i.jsx)(m.s_y, {
        "data-migration-pending": true,
        className: M.iT,
        onClick: t
      })]
    }), (0, i.jsxs)(m.$mQ, {
      "data-migration-pending": true,
      className: M.jE,
      children: [u.length > 1 && (0, i.jsx)("div", {
        className: M.p_,
        children: (0, i.jsx)(D, {
          icon: (0, i.jsx)(m.fdC, {
            size: "md",
            color: "currentColor"
          }),
          checked: f.size === u.length,
          onChange: function(e) {
            for (let t of u) j(t.id, e)
          },
          children: (0, i.jsx)(m.Text, {
            color: "text-strong",
            variant: "text-md/normal",
            children: E.intl.string(E.t["5Q/fLO"])
          })
        })
      }), (0, i.jsx)("div", {
        className: M.p_,
        children: u.map(e => {
          var t;
          let n = null != (t = (0, h._U)(e.type)) ? t : m.N$i;
          return (0, i.jsx)(D, {
            icon: (0, i.jsx)("div", {
              className: M.aL,
              children: (0, i.jsx)(n, {
                size: "custom",
                color: "currentColor",
                width: "100%",
                height: "100%"
              })
            }),
            checked: f.has(e.id),
            onChange: t => j(e.id, t),
            children: (0, i.jsx)(m.Text, {
              color: "text-strong",
              variant: "text-md/normal",
              className: M.__invalid_benefitTitle,
              children: e.name
            })
          }, e.id)
        })
      })]
    }), (0, i.jsx)(m.jlY, {
      "data-migration-pending": true,
      children: (0, i.jsxs)(m.ButtonGroup, {
        direction: "horizontal-reverse",
        children: [(0, i.jsx)(m.Button, {
          variant: "primary",
          text: E.intl.string(E.t["1j8Sow"]),
          type: "submit"
        }), (0, i.jsx)(m.Button, {
          variant: "secondary",
          text: E.intl.string(E.t["ETE/oC"]),
          onClick: a
        })]
      })
    })]
  })
}

function K(e) {
  let {
    transitionState: t,
    guildId: n,
    onClose: r,
    onImport: a
  } = e, [s, o] = l.useState();
  return (0, i.jsx)(m.EOs, {
    "data-migration-pending": true,
    transitionState: t,
    "aria-labelledby": null == s ? O : B,
    parentComponent: "ImportBenefitsModal",
    children: (0, i.jsxs)(m.tN_, {
      contentDisplay: "flex",
      activeSlide: +(null != s),
      width: 440,
      children: [(0, i.jsx)(m.q7S, {
        id: 0,
        children: (0, i.jsx)(H, {
          onClose: r,
          guildId: n,
          onSelect: o
        })
      }), (0, i.jsx)(m.q7S, {
        id: 1,
        children: (0, i.jsx)(Q, {
          onClose: r,
          guildId: n,
          role: s,
          onCancel: () => o(true),
          onImport: a
        })
      })]
    })
  })
}