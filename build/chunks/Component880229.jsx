/** Chunk was on 31667 **/
/** chunk id: 880229, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ImportBenefitsFromRoleModal: () => A,
  ImportBenefitsFromSubscriptionListingModal: () => D
}), require("./388685.js"), require("./953529.js"), require("./361932.js"), require("./187205.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk902704 = require("./902704.js"),
  Chunk477690 = require("./477690.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk211266 = require("./211266.js"),
  Chunk471445 = require("./471445.js"),
  Chunk313201 = require("./313201.js"),
  Chunk339085 = require("./339085.js"),
  Chunk518738 = require("./518738.js"),
  Chunk48950 = require("./48950.jsx"),
  Chunk131704 = require("./131704.js"),
  Chunk345162 = require("./345162.js"),
  Chunk324067 = require("./324067.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk624138 = require("./624138.js"),
  Chunk817460 = require("./817460.js"),
  Chunk166803 = require("./166803.js"),
  Chunk629262 = require("./629262.js"),
  Chunk686807 = require("./686807.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk903907 = require("./903907.js");
let z = (0, Chunk313201.hQ)(),
  E = (0, Chunk313201.hQ)(),
  O = (0, Chunk624138.Mg)(Chunk477690.Z.IMPORT_BENEFITS_MODAL_ROLE_ICON_SIZE);

function P(e) {
  var t;
  let {
    emojiId: n,
    emojiName: l,
    className: r
  } = e, o = (0, c.e7)([g.ZP], () => null != n ? g.ZP.getCustomEmojiById(n) : true);
  return (0, i.jsx)(u.Z, {
    emojiId: n,
    emojiName: l,
    animated: null != (t = null == o ? true : o.animated) && t,
    className: r
  })
}

function R(e) {
  let {
    icon: t,
    children: n,
    checked: l,
    disabled: r = false,
    onChange: a
  } = e, c = l || r;
  return (0, i.jsxs)("label", {
    className: o()(M.row, {
      [M.checked]: c,
      [M.disabled]: r
    }),
    children: [(0, i.jsx)("div", {
      className: M.rowIconWrapper,
      children: t
    }), (0, i.jsx)("div", {
      className: M.rowText,
      children: n
    }), (0, i.jsxs)("div", {
      className: M.rowCheckbox,
      children: [(0, i.jsx)(m.tEY, {
        children: (0, i.jsx)("input", {
          type: "checkbox",
          checked: c,
          disabled: r,
          className: M.checkboxInput,
          onChange: function(e) {
            a(e.target.checked)
          }
        })
      }), (0, i.jsx)("div", {
        className: M.checkboxDisplay,
        children: (0, i.jsx)(m.dz2, {
          size: "md",
          color: "currentColor",
          className: M.checkboxIcon,
          "aria-hidden": true
        })
      })]
    })]
  })
}

function L(e) {
  let {
    title: t,
    selectAllText: n,
    benefits: l,
    dupeBenefits: r,
    selectedBenefits: o,
    onToggleBenefit: a
  } = e, c = l.every(e => o.has(e));
  return l.length > 0 ? (0, i.jsxs)("div", {
    className: M.section,
    children: [(0, i.jsx)(m.Heading, {
      variant: "heading-md/semibold",
      color: "header-primary",
      children: t
    }), l.length - r.size > 1 && (0, i.jsx)("div", {
      className: M.list,
      children: (0, i.jsx)(R, {
        icon: (0, i.jsx)(m.avL, {
          size: "md",
          color: "currentColor",
          className: M.rowIcon
        }),
        checked: c,
        onChange: function(e) {
          for (let t of l) r.has(t) || a(t, e)
        },
        children: (0, i.jsx)(m.Text, {
          color: "header-primary",
          variant: "text-md/normal",
          children: n
        })
      })
    }), (0, i.jsx)("div", {
      className: M.list,
      children: l.map(e => (0, i.jsxs)(R, {
        icon: (0, i.jsx)(P, {
          emojiId: e.emoji_id,
          emojiName: e.emoji_name,
          className: M.rowIcon
        }),
        checked: o.has(e),
        disabled: r.has(e),
        onChange: t => a(e, t),
        children: [(0, i.jsx)(m.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          children: (0, T.Z)(e)
        }), (0, i.jsx)(m.Text, {
          color: "interactive-text-default",
          variant: "text-sm/normal",
          children: e.description
        })]
      }, (0, k.ab)(e)))
    })]
  }) : null
}

function D(e) {
  let {
    transitionState: t,
    fromSubscriptionListing: n,
    existingChannelBenefits: r,
    existingIntangibleBenefits: o,
    onSubmit: c,
    onClose: d
  } = e, u = n.role_benefits.benefits, [h, x] = l.useState(() => new Set(u)), f = l.useMemo(() => u.filter(k.rC), [u]), g = (0, S.Z)(f), j = l.useMemo(() => u.filter(k.lL), [u]), p = l.useMemo(() => new Set(g.filter(e => r.some(t => t.ref_id === e.ref_id))), [g, r]), b = l.useMemo(() => new Set(j.filter(e => o.some(t => (0, s.Z)(e, t)))), [o, j]);

  function v(e, t) {
    x(n => {
      let i = new Set(n);
      return t ? i.add(e) : i.delete(e), i
    })
  }

  function C(e) {
    e.preventDefault();
    let t = u.filter(e => h.has(e));
    c(t.filter(k.rC).filter(e => !p.has(e)), t.filter(k.lL).filter(e => !b.has(e))), d()
  }
  return (0, i.jsx)("form", {
    onSubmit: C,
    children: (0, i.jsxs)(a.Modal, {
      transitionState: t,
      onClose: d,
      title: B.intl.format(B.t["7zpiYL"], {
        tierName: n.name
      }).toString(),
      actions: [{
        variant: "secondary",
        text: B.intl.string(B.t["ETE/oC"]),
        onClick: d
      }, {
        variant: "primary",
        text: B.intl.string(B.t["27a21y"]),
        disabled: 0 === h.size,
        onClick: C
      }],
      children: [0 === g.length && 0 === j.length && (0, i.jsx)(m.Text, {
        variant: "text-md/normal",
        children: B.intl.string(B.t["I+16xv"])
      }), (0, i.jsx)(L, {
        title: B.intl.string(B.t.S2kKzP),
        selectAllText: B.intl.string(B.t["5Q/fLO"]),
        benefits: g,
        dupeBenefits: p,
        selectedBenefits: h,
        onToggleBenefit: v
      }), (0, i.jsx)(L, {
        title: B.intl.string(B.t.RdwKw7),
        selectAllText: B.intl.string(B.t.aJPLVE),
        benefits: j,
        dupeBenefits: b,
        selectedBenefits: h,
        onToggleBenefit: v
      })]
    })
  })
}

function H(e) {
  var t;
  let {
    guildId: n,
    role: l,
    channelCount: r,
    onSelect: o
  } = e, a = (0, j.p9)({
    guildId: n,
    roleId: l.id,
    size: O
  });
  return (0, i.jsxs)(m.P3F, {
    className: M.roleRow,
    onClick: o,
    children: [(0, i.jsx)("div", {
      className: M.rowIconWrapper,
      children: null != a ? (0, i.jsx)(p.Z, function(e) {
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
      }({}, a)) : (0, i.jsx)(m.lZ8, {
        size: "custom",
        width: 23,
        height: 23,
        color: null != (t = l.colorString) ? t : Z.Pbq,
        className: M.roleRowIconDefault
      })
    }), (0, i.jsxs)("div", {
      className: M.rowText,
      children: [(0, i.jsx)(m.Text, {
        color: "header-primary",
        variant: "text-md/normal",
        className: M.__invalid_benefitTitle,
        children: l.name
      }), (0, i.jsx)(m.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: B.intl.format(B.t["2KzH89"], {
          num: r
        })
      })]
    }), (0, i.jsx)("div", {
      className: M.rowCheckbox,
      children: (0, i.jsx)(I.Z, {
        direction: I.Z.Directions.RIGHT
      })
    })]
  })
}

function F(e) {
  let {
    guild: t,
    onSelect: n
  } = e, r = (0, c.e7)([w.Z], () => w.Z.getSortedRoles(t.id)), o = (0, c.e7)([C.Z], () => C.Z.getCategories(t.id)), a = l.useMemo(() => o._categories.flatMap(e => o[e.channel.id].filter(e => {
    let {
      channel: t
    } = e;
    return b.zS.has(t.type)
  }).map(e => {
    let {
      channel: t
    } = e;
    return t
  })), [o]), s = l.useMemo(() => r.flatMap(e => {
    var t;
    if ((0, v.fI)(e) || (null == (t = e.tags) ? true : t.subscription_listing_id) != null || (0, v._N)(e, Z.TC2)) return [];
    let n = (0, y.Z)(a, e).length;
    return n > 0 ? {
      role: e,
      channelCount: n
    } : []
  }), [r, a]);
  return s.length > 0 ? (0, i.jsx)("div", {
    className: M.list,
    children: s.map(e => (0, i.jsx)(H, {
      guildId: t.id,
      role: e.role,
      channelCount: e.channelCount,
      onSelect: () => n(e.role)
    }, e.role.id))
  }) : (0, i.jsx)(m.Text, {
    variant: "text-md/normal",
    children: B.intl.string(B.t.u09gKk)
  })
}

function G(e) {
  let {
    onClose: t,
    guildId: n,
    onSelect: l
  } = e, r = (0, c.e7)([_.Z], () => _.Z.getGuild(n));
  return null == r ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(m.xBx, {
      "data-migration-pending": true,
      children: [(0, i.jsx)(m.Heading, {
        id: z,
        variant: "heading-md/semibold",
        children: B.intl.string(B.t["3JrZ/P"])
      }), (0, i.jsx)(m.olH, {
        "data-migration-pending": true,
        className: M.modalCloseButton,
        onClick: t
      })]
    }), (0, i.jsx)(m.hzk, {
      "data-migration-pending": true,
      className: M.modalContent,
      children: (0, i.jsx)(F, {
        guild: r,
        onSelect: l
      })
    })]
  })
}

function W(e) {
  let {
    onClose: t,
    guildId: n,
    role: r,
    onCancel: o,
    onImport: a
  } = e, c = l.useRef(r);
  null != r && (c.current = r);
  let s = null != r ? r : c.current,
    d = (0, h.Z)(() => {
      let e = C.Z.getCategories(n);
      return e._categories.flatMap(t => e[t.channel.id].filter(e => {
        let {
          channel: t
        } = e;
        return b.zS.has(t.type)
      }).map(e => {
        let {
          channel: t
        } = e;
        return t
      }))
    }),
    u = l.useMemo(() => (0, y.Z)(d, s), [d, s]),
    [f, g] = l.useState(() => new Set(u.map(e => e.id)));

  function j(e, t) {
    g(n => {
      let i = new Set(n);
      return t ? i.add(e) : i.delete(e), i
    })
  }
  return (0, i.jsxs)("form", {
    onSubmit: function(e) {
      e.preventDefault(), a(u.map(e => e.id).filter(e => f.has(e))), t()
    },
    className: M.slideForm,
    children: [(0, i.jsxs)(m.xBx, {
      "data-migration-pending": true,
      children: [(0, i.jsx)(m.Heading, {
        id: E,
        variant: "heading-md/semibold",
        children: B.intl.format(B.t.iuPodG, {
          roleName: s.name
        })
      }), (0, i.jsx)(m.olH, {
        "data-migration-pending": true,
        className: M.modalCloseButton,
        onClick: t
      })]
    }), (0, i.jsxs)(m.hzk, {
      "data-migration-pending": true,
      className: M.modalContent,
      children: [u.length > 1 && (0, i.jsx)("div", {
        className: M.list,
        children: (0, i.jsx)(R, {
          icon: (0, i.jsx)(m.avL, {
            size: "md",
            color: "currentColor"
          }),
          checked: f.size === u.length,
          onChange: function(e) {
            for (let t of u) j(t.id, e)
          },
          children: (0, i.jsx)(m.Text, {
            color: "header-primary",
            variant: "text-md/normal",
            children: B.intl.string(B.t["5Q/fLO"])
          })
        })
      }), (0, i.jsx)("div", {
        className: M.list,
        children: u.map(e => {
          var t;
          let n = null != (t = (0, x.Th)(e.type)) ? t : m.VL1;
          return (0, i.jsx)(R, {
            icon: (0, i.jsx)("div", {
              className: M.rowIcon,
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
              color: "header-primary",
              variant: "text-md/normal",
              className: M.__invalid_benefitTitle,
              children: e.name
            })
          }, e.id)
        })
      })]
    }), (0, i.jsx)(m.mzw, {
      "data-migration-pending": true,
      children: (0, i.jsxs)(m.ButtonGroup, {
        direction: "horizontal-reverse",
        children: [(0, i.jsx)(m.Button, {
          variant: "primary",
          text: B.intl.string(B.t["1j8Sow"]),
          type: "submit"
        }), (0, i.jsx)(m.Button, {
          variant: "secondary",
          text: B.intl.string(B.t["ETE/oC"]),
          onClick: o
        })]
      })
    })]
  })
}

function A(e) {
  let {
    transitionState: t,
    guildId: n,
    onClose: r,
    onImport: o
  } = e, [a, c] = l.useState();
  return (0, i.jsx)(m.Y0X, {
    "data-migration-pending": true,
    transitionState: t,
    "aria-labelledby": null == a ? z : E,
    parentComponent: "ImportBenefitsModal",
    children: (0, i.jsxs)(m.MyZ, {
      contentDisplay: "flex",
      activeSlide: +(null != a),
      width: 440,
      children: [(0, i.jsx)(m.Mi4, {
        id: 0,
        children: (0, i.jsx)(G, {
          onClose: r,
          guildId: n,
          onSelect: c
        })
      }), (0, i.jsx)(m.Mi4, {
        id: 1,
        children: (0, i.jsx)(W, {
          onClose: r,
          guildId: n,
          role: a,
          onCancel: () => c(true),
          onImport: o
        })
      })]
    })
  })
}