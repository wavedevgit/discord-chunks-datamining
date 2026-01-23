/** Chunk was on 66946 **/
/** chunk id: 362937, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ImportBenefitsFromRoleModal: () => K,
  ImportBenefitsFromSubscriptionListingModal: () => F
}), require("./896048.js"), require("./228524.js"), require("./114821.js"), require("./339614.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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
let M = (0, Chunk915089.Ld)(),
  O = (0, Chunk915089.Ld)(),
  L = (0, Chunk240248.xI)(Chunk319060.A.IMPORT_BENEFITS_MODAL_ROLE_ICON_SIZE);

function z(e) {
  var t;
  let {
    emojiId: n,
    emojiName: l,
    className: r
  } = e, s = (0, o.bG)([f.Ay], () => null != n ? f.Ay.getCustomEmojiById(n) : true);
  return (0, i.jsx)(u.A, {
    emojiId: n,
    emojiName: l,
    animated: null != (t = null == s ? true : s.animated) && t,
    className: r
  })
}

function D(e) {
  let {
    icon: t,
    children: n,
    checked: l,
    disabled: r = false,
    onChange: a
  } = e, o = l || r;
  return (0, i.jsxs)("label", {
    className: s()(B.nM, {
      [B.KD]: o,
      [B.r9]: r
    }),
    children: [(0, i.jsx)("div", {
      className: B.N,
      children: t
    }), (0, i.jsx)("div", {
      className: B.qg,
      children: n
    }), (0, i.jsxs)("div", {
      className: B.eF,
      children: [(0, i.jsx)(m.vN3, {
        children: (0, i.jsx)("input", {
          type: "checkbox",
          checked: o,
          disabled: r,
          className: B.m8,
          onChange: function(e) {
            a(e.target.checked)
          }
        })
      }), (0, i.jsx)("div", {
        className: B.Ew,
        children: (0, i.jsx)(m.A9s, {
          size: "md",
          color: "currentColor",
          className: B.pc,
          "aria-hidden": true
        })
      })]
    })]
  })
}

function R(e) {
  let {
    title: t,
    selectAllText: n,
    benefits: l,
    dupeBenefits: r,
    selectedBenefits: s,
    onToggleBenefit: a
  } = e, o = l.every(e => s.has(e));
  return l.length > 0 ? (0, i.jsxs)("div", {
    className: B.uW,
    children: [(0, i.jsx)(m.Heading, {
      variant: "heading-md/semibold",
      color: "text-strong",
      children: t
    }), l.length - r.size > 1 && (0, i.jsx)("div", {
      className: B.p_,
      children: (0, i.jsx)(D, {
        icon: (0, i.jsx)(m.fdC, {
          size: "md",
          color: "currentColor",
          className: B.aL
        }),
        checked: o,
        onChange: function(e) {
          for (let t of l) r.has(t) || a(t, e)
        },
        children: (0, i.jsx)(m.Text, {
          color: "text-strong",
          variant: "text-md/normal",
          children: n
        })
      })
    }), (0, i.jsx)("div", {
      className: B.p_,
      children: l.map(e => (0, i.jsxs)(D, {
        icon: (0, i.jsx)(z, {
          emojiId: e.emoji_id,
          emojiName: e.emoji_name,
          className: B.aL
        }),
        checked: s.has(e),
        disabled: r.has(e),
        onChange: t => a(e, t),
        children: [(0, i.jsx)(m.Text, {
          color: "text-strong",
          variant: "text-md/semibold",
          children: (0, A.A)(e)
        }), (0, i.jsx)(m.Text, {
          color: "interactive-text-default",
          variant: "text-sm/normal",
          children: e.description
        })]
      }, (0, S.nh)(e)))
    })]
  }) : null
}

function F(e) {
  let {
    transitionState: t,
    fromSubscriptionListing: n,
    existingChannelBenefits: r,
    existingIntangibleBenefits: s,
    onSubmit: o,
    onClose: d
  } = e, u = n.role_benefits.benefits, [x, h] = l.useState(() => new Set(u)), g = l.useMemo(() => u.filter(S.B1), [u]), f = (0, I.A)(g), j = l.useMemo(() => u.filter(S.b1), [u]), p = l.useMemo(() => new Set(f.filter(e => r.some(t => t.ref_id === e.ref_id))), [f, r]), _ = l.useMemo(() => new Set(j.filter(e => s.some(t => (0, c.A)(e, t)))), [s, j]);

  function v(e, t) {
    h(n => {
      let i = new Set(n);
      return t ? i.add(e) : i.delete(e), i
    })
  }

  function b(e) {
    e.preventDefault();
    let t = u.filter(e => x.has(e));
    o(t.filter(S.B1).filter(e => !p.has(e)), t.filter(S.b1).filter(e => !_.has(e))), d()
  }
  return (0, i.jsx)("form", {
    onSubmit: b,
    children: (0, i.jsxs)(a.Modal, {
      transitionState: t,
      onClose: d,
      title: E.intl.format(E.t["7zpiYL"], {
        tierName: n.name
      }).toString(),
      actions: [{
        variant: "secondary",
        text: E.intl.string(E.t["ETE/oC"]),
        onClick: d
      }, {
        variant: "primary",
        text: E.intl.string(E.t["27a21y"]),
        disabled: 0 === x.size,
        onClick: b
      }],
      children: [0 === f.length && 0 === j.length && (0, i.jsx)(m.Text, {
        variant: "text-md/normal",
        children: E.intl.string(E.t["I+16xv"])
      }), (0, i.jsx)(R, {
        title: E.intl.string(E.t.S2kKzP),
        selectAllText: E.intl.string(E.t["5Q/fLO"]),
        benefits: f,
        dupeBenefits: p,
        selectedBenefits: x,
        onToggleBenefit: v
      }), (0, i.jsx)(R, {
        title: E.intl.string(E.t.RdwKw7),
        selectAllText: E.intl.string(E.t.aJPLVE),
        benefits: j,
        dupeBenefits: _,
        selectedBenefits: x,
        onToggleBenefit: v
      })]
    })
  })
}

function G(e) {
  var t;
  let {
    guildId: n,
    role: l,
    channelCount: r,
    onSelect: s
  } = e, a = (0, j.$7)({
    guildId: n,
    roleId: l.id,
    size: L
  });
  return (0, i.jsxs)(m.DUT, {
    className: B.xf,
    onClick: s,
    children: [(0, i.jsx)("div", {
      className: B.N,
      children: null != a ? (0, i.jsx)(p.A, function(e) {
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
      }({}, a)) : (0, i.jsx)(m.iTF, {
        size: "custom",
        width: 23,
        height: 23,
        color: null != (t = l.colorString) ? t : k.TpD,
        className: B.bO
      })
    }), (0, i.jsxs)("div", {
      className: B.qg,
      children: [(0, i.jsx)(m.Text, {
        color: "text-strong",
        variant: "text-md/normal",
        className: B.__invalid_benefitTitle,
        children: l.name
      }), (0, i.jsx)(m.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: E.intl.format(E.t["2KzH89"], {
          num: r
        })
      })]
    }), (0, i.jsx)("div", {
      className: B.eF,
      children: (0, i.jsx)(T.A, {
        direction: T.A.Directions.RIGHT
      })
    })]
  })
}

function P(e) {
  let {
    guild: t,
    onSelect: n
  } = e, r = (0, o.bG)([N.A], () => N.A.getSortedRoles(t.id)), s = (0, o.bG)([b.A], () => b.A.getCategories(t.id)), a = l.useMemo(() => s._categories.flatMap(e => s[e.channel.id].filter(e => {
    let {
      channel: t
    } = e;
    return _.JT.has(t.type)
  }).map(e => {
    let {
      channel: t
    } = e;
    return t
  })), [s]), c = l.useMemo(() => r.flatMap(e => {
    var t;
    if ((0, v.Oy)(e) || (null == (t = e.tags) ? true : t.subscription_listing_id) != null || (0, v.sx)(e, k.Lti)) return [];
    let n = (0, w.A)(a, e).length;
    return n > 0 ? {
      role: e,
      channelCount: n
    } : []
  }), [r, a]);
  return c.length > 0 ? (0, i.jsx)("div", {
    className: B.p_,
    children: c.map(e => (0, i.jsx)(G, {
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
        id: M,
        variant: "heading-md/semibold",
        children: E.intl.string(E.t["3JrZ/P"])
      }), (0, i.jsx)(m.s_y, {
        "data-migration-pending": true,
        className: B.iT,
        onClick: t
      })]
    }), (0, i.jsx)(m.$mQ, {
      "data-migration-pending": true,
      className: B.jE,
      children: (0, i.jsx)(P, {
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
    onCancel: s,
    onImport: a
  } = e, o = l.useRef(r);
  null != r && (o.current = r);
  let c = null != r ? r : o.current,
    d = (0, x.A)(() => {
      let e = b.A.getCategories(n);
      return e._categories.flatMap(t => e[t.channel.id].filter(e => {
        let {
          channel: t
        } = e;
        return _.JT.has(t.type)
      }).map(e => {
        let {
          channel: t
        } = e;
        return t
      }))
    }),
    u = l.useMemo(() => (0, w.A)(d, c), [d, c]),
    [g, f] = l.useState(() => new Set(u.map(e => e.id)));

  function j(e, t) {
    f(n => {
      let i = new Set(n);
      return t ? i.add(e) : i.delete(e), i
    })
  }
  return (0, i.jsxs)("form", {
    onSubmit: function(e) {
      e.preventDefault(), a(u.map(e => e.id).filter(e => g.has(e))), t()
    },
    className: B.ID,
    children: [(0, i.jsxs)(m.rQ0, {
      "data-migration-pending": true,
      children: [(0, i.jsx)(m.Heading, {
        id: O,
        variant: "heading-md/semibold",
        children: E.intl.format(E.t.iuPodG, {
          roleName: c.name
        })
      }), (0, i.jsx)(m.s_y, {
        "data-migration-pending": true,
        className: B.iT,
        onClick: t
      })]
    }), (0, i.jsxs)(m.$mQ, {
      "data-migration-pending": true,
      className: B.jE,
      children: [u.length > 1 && (0, i.jsx)("div", {
        className: B.p_,
        children: (0, i.jsx)(D, {
          icon: (0, i.jsx)(m.fdC, {
            size: "md",
            color: "currentColor"
          }),
          checked: g.size === u.length,
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
        className: B.p_,
        children: u.map(e => {
          var t;
          let n = null != (t = (0, h._U)(e.type)) ? t : m.N$i;
          return (0, i.jsx)(D, {
            icon: (0, i.jsx)("div", {
              className: B.aL,
              children: (0, i.jsx)(n, {
                size: "custom",
                color: "currentColor",
                width: "100%",
                height: "100%"
              })
            }),
            checked: g.has(e.id),
            onChange: t => j(e.id, t),
            children: (0, i.jsx)(m.Text, {
              color: "text-strong",
              variant: "text-md/normal",
              className: B.__invalid_benefitTitle,
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
          onClick: s
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
    onImport: s
  } = e, [a, o] = l.useState();
  return (0, i.jsx)(m.EOs, {
    "data-migration-pending": true,
    transitionState: t,
    "aria-labelledby": null == a ? M : O,
    parentComponent: "ImportBenefitsModal",
    children: (0, i.jsxs)(m.tN_, {
      contentDisplay: "flex",
      activeSlide: +(null != a),
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
          role: a,
          onCancel: () => o(true),
          onImport: s
        })
      })]
    })
  })
}