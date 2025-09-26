/** Chunk was on 35641 **/
/** chunk id: 89216, original params: e,l,a (module,exports,require) **/
require.d(exports, {
  default: () => T
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk257465 = require("./257465.jsx"),
  Chunk82659 = require("./82659.jsx"),
  Chunk369585 = require("./369585.jsx"),
  Chunk103866 = require("./103866.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk741361 = require("./741361.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk447003 = require("./447003.js"),
  Chunk471445 = require("./471445.js"),
  Chunk605436 = require("./605436.js"),
  Chunk633302 = require("./633302.js"),
  Chunk984933 = require("./984933.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk809822 = require("./809822.js");

function k(e) {
  var l, s, i;
  let {
    onClose: r,
    handleReviewPermissions: c
  } = e, o = e => (0, t.jsx)(h.Text, {
    tag: "span",
    variant: "text-md/medium",
    color: "header-primary",
    children: e
  }), x = n.useMemo(() => [{
    variant: "secondary",
    text: b.intl.string(b.t["ETE/oK"]),
    onClick: r
  }, {
    variant: "primary",
    text: b.intl.string(b.t.bEnlen),
    onClick: c
  }], [c, r]);
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsxs)(m.f, {
      children: [(0, t.jsxs)("div", {
        className: N.modalHeader,
        children: [(0, t.jsx)("img", {
          className: N.modalImage,
          "data-accessibility": "desaturate",
          alt: "",
          src: a(592614)
        }), (0, t.jsx)(h.X6q, {
          variant: "heading-lg/semibold",
          color: "header-primary",
          children: b.intl.string(b.t.PJOCLy)
        })]
      }), (0, t.jsxs)("ul", {
        children: [(0, t.jsxs)("li", {
          className: N.infoListItem,
          children: [(0, t.jsx)("div", {
            className: N.iconWrapper,
            children: (0, t.jsx)(p.Z, {
              emojiName: null == (l = f.ZP.getByName("eyes")) ? true : l.surrogates
            })
          }), (0, t.jsx)(h.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: b.intl.format(b.t["8JzOBg"], {
              emphasisHook: o
            })
          })]
        }), (0, t.jsxs)("li", {
          className: N.infoListItem,
          children: [(0, t.jsx)("div", {
            className: N.iconWrapper,
            children: (0, t.jsx)(p.Z, {
              emojiName: null == (s = f.ZP.getByName("star_struck")) ? true : s.surrogates
            })
          }), (0, t.jsx)(h.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: b.intl.format(b.t.UcGDkp, {
              emphasisHook: o
            })
          })]
        }), (0, t.jsxs)("li", {
          className: N.infoListItem,
          children: [(0, t.jsx)("div", {
            className: N.iconWrapper,
            children: (0, t.jsx)(p.Z, {
              emojiName: null == (i = f.ZP.getByName("books")) ? true : i.surrogates
            })
          }), (0, t.jsx)(h.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: b.intl.format(b.t.kALJ5u, {
              emphasisHook: o
            })
          })]
        })]
      })]
    }), (0, t.jsx)(d.G, {
      actions: x,
      actionsFullWidth: true
    })]
  })
}

function y(e) {
  var l;
  let {
    channel: a,
    selected: s,
    onChange: i
  } = e, r = null != (l = (0, v.KS)(a)) ? l : h.VL1, c = n.useCallback(() => {
    i(a)
  }, [a, i]);
  return (0, t.jsxs)(h.P3F, {
    "aria-label": a.name,
    "aria-checked": s,
    className: N.selectableChannelRow,
    onClick: c,
    children: [(0, t.jsxs)("div", {
      className: N.selectableChannelCellFirst,
      children: [(0, t.jsx)(r, {
        className: N.channelIcon,
        size: "xs",
        color: "currentColor"
      }), (0, t.jsx)(h.Text, {
        className: N.channelName,
        variant: "text-md/medium",
        color: "text-default",
        lineClamp: 1,
        children: a.name
      })]
    }), (0, t.jsx)("div", {
      className: N.selectableChannelCellSecond,
      children: (0, t.jsx)(x.$q, {
        type: x.M0.INVERTED,
        value: s,
        displayOnly: true
      })
    })]
  })
}

function T(e) {
  let {
    transitionState: l,
    onClose: a,
    guildId: s,
    startingChannelId: d
  } = e, m = (0, r.Wu)([g.ZP], () => {
    var e, l;
    let a = g.ZP.getChannels(s);
    return (null != (e = a[g.sH]) ? e : []).concat(null != (l = a[g.Zb]) ? l : []).filter(e => (0, j.Z)(e.channel)).map(e => e.channel)
  }), [p, v] = n.useState(0), f = m.find(e => e.id === d), [T, _] = n.useState(null != f ? [f] : []), I = T.length === m.length, E = n.useCallback(() => {
    v(1)
  }, [v]), P = n.useCallback(e => {
    _(l => l.includes(e) ? [...i().pull(l, e)] : [...l, e])
  }, [_]), A = n.useCallback(() => {
    I ? _([]) : _(m)
  }, [I, m, _]), B = n.useCallback(() => {
    T.forEach(e => {
      let l = (0, C._A)(e, e.accessPermissions, true);
      (0, u.hw)(e.id, [l]), a()
    })
  }, [T, a]), Z = n.useMemo(() => [{
    variant: "secondary",
    text: b.intl.string(b.t["ETE/oK"]),
    onClick: a
  }, {
    variant: "primary",
    text: b.intl.string(b.t.PggHmp),
    onClick: B,
    disabled: 0 === T.length
  }], [B, a, T.length]);
  return 0 === p ? (0, t.jsx)(c.IX, {
    onClose: a,
    transitionState: l,
    children: (0, t.jsx)(k, {
      handleReviewPermissions: E,
      onClose: a
    })
  }) : (0, t.jsxs)(o.Modal, {
    title: b.intl.string(b.t.y77PiY),
    subtitle: b.intl.string(b.t.ZSzBe3),
    actions: Z,
    onClose: a,
    transitionState: l,
    input: (0, t.jsxs)("div", {
      className: N.selectAllContainer,
      children: [(0, t.jsx)(h.Text, {
        className: N.selectAllTitle,
        variant: "text-xs/semibold",
        color: "text-muted",
        children: b.intl.format(b.t.rrYCq6, {
          count: m.length
        })
      }), (0, t.jsxs)(h.P3F, {
        "aria-label": b.intl.string(b.t.l4rqa2),
        className: N.selectAllButton,
        onClick: A,
        children: [(0, t.jsx)(h.Text, {
          variant: "text-xs/normal",
          children: b.intl.string(b.t.l4rqa2)
        }), (0, t.jsx)(x.$q, {
          size: 16,
          type: x.M0.INVERTED,
          value: I,
          displayOnly: true
        })]
      })]
    }),
    children: [(0, t.jsx)("div", {
      className: N.deprivateTableBody,
      children: m.map(e => (0, t.jsx)(y, {
        channel: e,
        selected: T.includes(e),
        onChange: P
      }, e.id))
    }), (0, t.jsx)("div", {
      className: N.deprivateExplainer,
      children: (0, t.jsx)(h.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: b.intl.format(b.t["OP/pKi"], {
          emphasisHook: e => (0, t.jsx)(h.Text, {
            tag: "span",
            variant: "text-xs/medium",
            color: "interactive-active",
            children: e
          }),
          brandHook: e => (0, t.jsx)(h.Text, {
            tag: "span",
            variant: "text-xs/normal",
            color: "text-brand",
            children: e
          })
        })
      })
    })]
  })
}