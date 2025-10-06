/** Chunk was on 35641 **/
/** chunk id: 89216, original params: e,l,a (module,exports,require) **/
require.d(exports, {
  default: () => N
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
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

function g(e) {
  var l, s, i;
  let {
    onClose: c,
    handleReviewPermissions: o
  } = e, m = e => (0, t.jsx)(d.Text, {
    tag: "span",
    variant: "text-md/medium",
    color: "header-primary",
    children: e
  }), h = n.useMemo(() => [{
    variant: "secondary",
    text: C.intl.string(C.t["ETE/oK"]),
    onClick: c
  }, {
    variant: "primary",
    text: C.intl.string(C.t.bEnlen),
    onClick: o
  }], [o, c]);
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsxs)(r.fef, {
      children: [(0, t.jsxs)("div", {
        className: f.modalHeader,
        children: [(0, t.jsx)("img", {
          className: f.modalImage,
          "data-accessibility": "desaturate",
          alt: "",
          src: a(592614)
        }), (0, t.jsx)(d.X6q, {
          variant: "heading-lg/semibold",
          color: "header-primary",
          children: C.intl.string(C.t.PJOCLy)
        })]
      }), (0, t.jsxs)("ul", {
        children: [(0, t.jsxs)("li", {
          className: f.infoListItem,
          children: [(0, t.jsx)("div", {
            className: f.iconWrapper,
            children: (0, t.jsx)(x.Z, {
              emojiName: null == (l = j.ZP.getByName("eyes")) ? true : l.surrogates
            })
          }), (0, t.jsx)(d.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: C.intl.format(C.t["8JzOBg"], {
              emphasisHook: m
            })
          })]
        }), (0, t.jsxs)("li", {
          className: f.infoListItem,
          children: [(0, t.jsx)("div", {
            className: f.iconWrapper,
            children: (0, t.jsx)(x.Z, {
              emojiName: null == (s = j.ZP.getByName("star_struck")) ? true : s.surrogates
            })
          }), (0, t.jsx)(d.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: C.intl.format(C.t.UcGDkp, {
              emphasisHook: m
            })
          })]
        }), (0, t.jsxs)("li", {
          className: f.infoListItem,
          children: [(0, t.jsx)("div", {
            className: f.iconWrapper,
            children: (0, t.jsx)(x.Z, {
              emojiName: null == (i = j.ZP.getByName("books")) ? true : i.surrogates
            })
          }), (0, t.jsx)(d.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: C.intl.format(C.t.kALJ5u, {
              emphasisHook: m
            })
          })]
        })]
      })]
    }), (0, t.jsx)(r.Go$, {
      actions: h,
      actionsFullWidth: true
    })]
  })
}

function b(e) {
  var l;
  let {
    channel: a,
    selected: s,
    onChange: i
  } = e, r = null != (l = (0, u.KS)(a)) ? l : d.VL1, c = n.useCallback(() => {
    i(a)
  }, [a, i]);
  return (0, t.jsxs)(d.P3F, {
    "aria-label": a.name,
    "aria-checked": s,
    className: f.selectableChannelRow,
    onClick: c,
    children: [(0, t.jsxs)("div", {
      className: f.selectableChannelCellFirst,
      children: [(0, t.jsx)(r, {
        className: f.channelIcon,
        size: "xs",
        color: "currentColor"
      }), (0, t.jsx)(d.Text, {
        className: f.channelName,
        variant: "text-md/medium",
        color: "text-default",
        lineClamp: 1,
        children: a.name
      })]
    }), (0, t.jsx)("div", {
      className: f.selectableChannelCellSecond,
      children: (0, t.jsx)(o.$q, {
        type: o.M0.INVERTED,
        value: s,
        displayOnly: true
      })
    })]
  })
}

function N(e) {
  let {
    transitionState: l,
    onClose: a,
    guildId: s,
    startingChannelId: x
  } = e, u = (0, c.Wu)([v.ZP], () => {
    var e, l;
    let a = v.ZP.getChannels(s);
    return (null != (e = a[v.sH]) ? e : []).concat(null != (l = a[v.Zb]) ? l : []).filter(e => (0, h.Z)(e.channel)).map(e => e.channel)
  }), [j, N] = n.useState(0), k = u.find(e => e.id === x), [y, T] = n.useState(null != k ? [k] : []), _ = y.length === u.length, I = n.useCallback(() => {
    N(1)
  }, [N]), E = n.useCallback(e => {
    T(l => l.includes(e) ? [...i().pull(l, e)] : [...l, e])
  }, [T]), P = n.useCallback(() => {
    _ ? T([]) : T(u)
  }, [_, u, T]), A = n.useCallback(() => {
    y.forEach(e => {
      let l = (0, p._A)(e, e.accessPermissions, true);
      (0, m.hw)(e.id, [l]), a()
    })
  }, [y, a]), B = n.useMemo(() => [{
    variant: "secondary",
    text: C.intl.string(C.t["ETE/oK"]),
    onClick: a
  }, {
    variant: "primary",
    text: C.intl.string(C.t.PggHmp),
    onClick: A,
    disabled: 0 === y.length
  }], [A, a, y.length]);
  return 0 === j ? (0, t.jsx)(r.IX, {
    onClose: a,
    transitionState: l,
    children: (0, t.jsx)(g, {
      handleReviewPermissions: I,
      onClose: a
    })
  }) : (0, t.jsxs)(r.Modal, {
    title: C.intl.string(C.t.y77PiY),
    subtitle: C.intl.string(C.t.ZSzBe3),
    actions: B,
    onClose: a,
    transitionState: l,
    input: (0, t.jsxs)("div", {
      className: f.selectAllContainer,
      children: [(0, t.jsx)(d.Text, {
        className: f.selectAllTitle,
        variant: "text-xs/semibold",
        color: "text-muted",
        children: C.intl.format(C.t.rrYCq6, {
          count: u.length
        })
      }), (0, t.jsxs)(d.P3F, {
        "aria-label": C.intl.string(C.t.l4rqa2),
        className: f.selectAllButton,
        onClick: P,
        children: [(0, t.jsx)(d.Text, {
          variant: "text-xs/normal",
          children: C.intl.string(C.t.l4rqa2)
        }), (0, t.jsx)(o.$q, {
          size: 16,
          type: o.M0.INVERTED,
          value: _,
          displayOnly: true
        })]
      })]
    }),
    children: [(0, t.jsx)("div", {
      className: f.deprivateTableBody,
      children: u.map(e => (0, t.jsx)(b, {
        channel: e,
        selected: y.includes(e),
        onChange: E
      }, e.id))
    }), (0, t.jsx)("div", {
      className: f.deprivateExplainer,
      children: (0, t.jsx)(d.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: C.intl.format(C.t["OP/pKi"], {
          emphasisHook: e => (0, t.jsx)(d.Text, {
            tag: "span",
            variant: "text-xs/medium",
            color: "interactive-active",
            children: e
          }),
          brandHook: e => (0, t.jsx)(d.Text, {
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