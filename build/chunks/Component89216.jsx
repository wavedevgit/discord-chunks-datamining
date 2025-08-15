/** Chunk was on 35641 **/
/** chunk id: 89216, original params: e,l,a (module,exports,require) **/
require.d(exports, {
  default: () => k
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

function N(e) {
  var l, s, i;
  let {
    onClose: r,
    handleReviewPermissions: c
  } = e, o = e => (0, t.jsx)(x.Text, {
    tag: "span",
    variant: "text-md/medium",
    color: "header-primary",
    children: e
  }), h = n.useMemo(() => [{
    variant: "secondary",
    text: g.intl.string(g.t["ETE/oK"]),
    onClick: r
  }, {
    variant: "primary",
    text: g.intl.string(g.t.bEnlen),
    onClick: c
  }], [c, r]);
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsxs)(m.f, {
      children: [(0, t.jsxs)("div", {
        className: b.modalHeader,
        children: [(0, t.jsx)("img", {
          className: b.modalImage,
          "data-accessibility": "desaturate",
          alt: "",
          src: a(592614)
        }), (0, t.jsx)(x.X6q, {
          variant: "heading-lg/semibold",
          color: "header-primary",
          children: g.intl.string(g.t.PJOCLy)
        })]
      }), (0, t.jsxs)("ul", {
        children: [(0, t.jsxs)("li", {
          className: b.infoListItem,
          children: [(0, t.jsx)("div", {
            className: b.iconWrapper,
            children: (0, t.jsx)(u.Z, {
              emojiName: null == (l = C.ZP.getByName("eyes")) ? true : l.surrogates
            })
          }), (0, t.jsx)(x.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: g.intl.format(g.t["8JzOBg"], {
              emphasisHook: o
            })
          })]
        }), (0, t.jsxs)("li", {
          className: b.infoListItem,
          children: [(0, t.jsx)("div", {
            className: b.iconWrapper,
            children: (0, t.jsx)(u.Z, {
              emojiName: null == (s = C.ZP.getByName("star_struck")) ? true : s.surrogates
            })
          }), (0, t.jsx)(x.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: g.intl.format(g.t.UcGDkp, {
              emphasisHook: o
            })
          })]
        }), (0, t.jsxs)("li", {
          className: b.infoListItem,
          children: [(0, t.jsx)("div", {
            className: b.iconWrapper,
            children: (0, t.jsx)(u.Z, {
              emojiName: null == (i = C.ZP.getByName("books")) ? true : i.surrogates
            })
          }), (0, t.jsx)(x.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: g.intl.format(g.t.kALJ5u, {
              emphasisHook: o
            })
          })]
        })]
      })]
    }), (0, t.jsx)(d.G, {
      actions: h,
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
  } = e, r = null != (l = (0, j.KS)(a)) ? l : x.VL1, c = n.useCallback(() => {
    i(a)
  }, [a, i]);
  return (0, t.jsxs)(x.P3F, {
    "aria-label": a.name,
    "aria-checked": s,
    className: b.selectableChannelRow,
    onClick: c,
    children: [(0, t.jsxs)("div", {
      className: b.selectableChannelCellFirst,
      children: [(0, t.jsx)(r, {
        className: b.channelIcon,
        size: "xs",
        color: "currentColor"
      }), (0, t.jsx)(x.Text, {
        className: b.channelName,
        variant: "text-md/medium",
        color: "text-default",
        lineClamp: 1,
        children: a.name
      })]
    }), (0, t.jsx)("div", {
      className: b.selectableChannelCellSecond,
      children: (0, t.jsx)(x.XZJ, {
        type: x.XZJ.Types.INVERTED,
        value: s,
        displayOnly: true
      })
    })]
  })
}

function k(e) {
  let {
    transitionState: l,
    onClose: a,
    guildId: s,
    startingChannelId: d
  } = e, m = (0, r.Wu)([f.ZP], () => {
    var e, l;
    let a = f.ZP.getChannels(s);
    return (null != (e = a[f.sH]) ? e : []).concat(null != (l = a[f.Zb]) ? l : []).filter(e => (0, p.Z)(e.channel)).map(e => e.channel)
  }), [u, j] = n.useState(0), C = m.find(e => e.id === d), [k, T] = n.useState(null != C ? [C] : []), _ = k.length === m.length, Z = n.useCallback(() => {
    j(1)
  }, [j]), I = n.useCallback(e => {
    T(l => l.includes(e) ? [...i().pull(l, e)] : [...l, e])
  }, [T]), E = n.useCallback(() => {
    _ ? T([]) : T(m)
  }, [_, m, T]), P = n.useCallback(() => {
    k.forEach(e => {
      let l = (0, v._A)(e, e.accessPermissions, true);
      (0, h.hw)(e.id, [l]), a()
    })
  }, [k, a]), A = n.useMemo(() => [{
    variant: "secondary",
    text: g.intl.string(g.t["ETE/oK"]),
    onClick: a
  }, {
    variant: "primary",
    text: g.intl.string(g.t.PggHmp),
    onClick: P,
    disabled: 0 === k.length
  }], [P, a, k.length]);
  return 0 === u ? (0, t.jsx)(c.I, {
    onClose: a,
    transitionState: l,
    children: (0, t.jsx)(N, {
      handleReviewPermissions: Z,
      onClose: a
    })
  }) : (0, t.jsxs)(o.Modal, {
    title: g.intl.string(g.t.y77PiY),
    subtitle: g.intl.string(g.t.ZSzBe3),
    actions: A,
    onClose: a,
    transitionState: l,
    input: (0, t.jsxs)("div", {
      className: b.selectAllContainer,
      children: [(0, t.jsx)(x.Text, {
        className: b.selectAllTitle,
        variant: "text-xs/semibold",
        color: "text-muted",
        children: g.intl.format(g.t.rrYCq6, {
          count: m.length
        })
      }), (0, t.jsxs)(x.P3F, {
        "aria-label": g.intl.string(g.t.l4rqa2),
        className: b.selectAllButton,
        onClick: E,
        children: [(0, t.jsx)(x.Text, {
          variant: "text-xs/normal",
          children: g.intl.string(g.t.l4rqa2)
        }), (0, t.jsx)(x.XZJ, {
          size: 16,
          type: x.XZJ.Types.INVERTED,
          value: _,
          displayOnly: true
        })]
      })]
    }),
    children: [(0, t.jsx)("div", {
      className: b.deprivateTableBody,
      children: m.map(e => (0, t.jsx)(y, {
        channel: e,
        selected: k.includes(e),
        onChange: I
      }, e.id))
    }), (0, t.jsx)("div", {
      className: b.deprivateExplainer,
      children: (0, t.jsx)(x.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: g.intl.format(g.t["OP/pKi"], {
          emphasisHook: e => (0, t.jsx)(x.Text, {
            tag: "span",
            variant: "text-xs/medium",
            color: "interactive-active",
            children: e
          }),
          brandHook: e => (0, t.jsx)(x.Text, {
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