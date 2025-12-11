/** Chunk was on 82140 **/
/** chunk id: 89216, original params: e,l,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk741361 = require("./741361.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk447003 = require("./447003.js"),
  Chunk471445 = require("./471445.js"),
  Chunk605436 = require("./605436.js"),
  Chunk633302 = require("./633302.js"),
  Chunk984933 = require("./984933.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk178757 = require("./178757.js");

function v(e) {
  var l, t, s;
  let {
    onClose: i,
    handleReviewPermissions: r,
    transitionState: d
  } = e, m = e => (0, a.jsx)(o.Text, {
    tag: "span",
    variant: "text-md/medium",
    color: "header-primary",
    children: e
  }), h = n.useMemo(() => [{
    variant: "secondary",
    text: C.intl.string(C.t["ETE/oC"]),
    onClick: i
  }, {
    variant: "primary",
    text: C.intl.string(C.t.bEnleq),
    onClick: r
  }], [r, i]);
  return (0, a.jsx)(c.Modal, {
    title: C.intl.string(C.t.PJOCL6),
    actions: h,
    onClose: i,
    transitionState: d,
    children: (0, a.jsxs)("ul", {
      className: p.infoList,
      children: [(0, a.jsxs)("li", {
        className: p.infoListItem,
        children: [(0, a.jsx)("div", {
          className: p.iconWrapper,
          children: (0, a.jsx)(x.Z, {
            emojiName: null == (l = u.ZP.getByName("eyes")) ? true : l.surrogates
          })
        }), (0, a.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: C.intl.format(C.t["8JzOBn"], {
            emphasisHook: m
          })
        })]
      }), (0, a.jsxs)("li", {
        className: p.infoListItem,
        children: [(0, a.jsx)("div", {
          className: p.iconWrapper,
          children: (0, a.jsx)(x.Z, {
            emojiName: null == (t = u.ZP.getByName("star_struck")) ? true : t.surrogates
          })
        }), (0, a.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: C.intl.format(C.t.UcGDkt, {
            emphasisHook: m
          })
        })]
      }), (0, a.jsxs)("li", {
        className: p.infoListItem,
        children: [(0, a.jsx)("div", {
          className: p.iconWrapper,
          children: (0, a.jsx)(x.Z, {
            emojiName: null == (s = u.ZP.getByName("books")) ? true : s.surrogates
          })
        }), (0, a.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: C.intl.format(C.t.kALJ5q, {
            emphasisHook: m
          })
        })]
      })]
    })
  })
}

function j(e) {
  var l;
  let {
    channel: t,
    selected: s,
    onChange: i
  } = e, c = null != (l = (0, h.KS)(t)) ? l : o.VL1, r = n.useCallback(() => {
    i(t)
  }, [t, i]);
  return (0, a.jsxs)(o.P3F, {
    "aria-label": t.name,
    "aria-checked": s,
    className: p.selectableChannelRow,
    onClick: r,
    children: [(0, a.jsxs)("div", {
      className: p.selectableChannelCellFirst,
      children: [(0, a.jsx)(c, {
        className: p.channelIcon,
        size: "xs",
        color: "currentColor"
      }), (0, a.jsx)(o.Text, {
        className: p.channelName,
        variant: "text-md/medium",
        color: "text-default",
        lineClamp: 1,
        children: t.name
      })]
    }), (0, a.jsx)("div", {
      className: p.selectableChannelCellSecond,
      children: (0, a.jsx)(o.FZ5, {
        checked: s
      })
    })]
  })
}

function g(e) {
  let {
    transitionState: l,
    onClose: t,
    guildId: s,
    startingChannelId: x
  } = e, h = (0, r.Wu)([f.ZP], () => {
    var e, l;
    let t = f.ZP.getChannels(s);
    return (null != (e = t[f.sH]) ? e : []).concat(null != (l = t[f.Zb]) ? l : []).filter(e => (0, m.Z)(e.channel)).map(e => e.channel)
  }), [u, g] = n.useState(0), k = h.find(e => e.id === x), [N, T] = n.useState(null != k ? [k] : []), y = N.length === h.length, P = n.useCallback(() => {
    g(1)
  }, [g]), Z = n.useCallback(e => {
    T(l => l.includes(e) ? [...i().pull(l, e)] : [...l, e])
  }, [T]), A = n.useCallback(() => {
    y ? T([]) : T(h)
  }, [y, h, T]), L = n.useCallback(() => {
    N.forEach(e => {
      let l = (0, b._A)(e, e.accessPermissions, true);
      (0, d.hw)(e.id, [l]), t()
    })
  }, [N, t]), S = n.useMemo(() => [{
    variant: "secondary",
    text: C.intl.string(C.t["ETE/oC"]),
    onClick: t
  }, {
    variant: "primary",
    text: C.intl.string(C.t.PggHmu),
    onClick: L,
    disabled: 0 === N.length
  }], [L, t, N.length]);
  return 0 === u ? (0, a.jsx)(v, {
    handleReviewPermissions: P,
    onClose: t,
    transitionState: l
  }) : (0, a.jsxs)(c.Modal, {
    title: C.intl.string(C.t.y77PiT),
    subtitle: C.intl.string(C.t.ZSzBe5),
    actions: S,
    onClose: t,
    transitionState: l,
    input: (0, a.jsxs)("div", {
      className: p.selectAllContainer,
      children: [(0, a.jsx)(o.Text, {
        className: p.selectAllTitle,
        variant: "text-xs/semibold",
        color: "text-muted",
        children: C.intl.format(C.t.rrYCq2, {
          count: h.length
        })
      }), (0, a.jsx)("div", {
        className: p.selectAllCheckbox,
        children: (0, a.jsx)(o.Checkbox, {
          onChange: A,
          checked: y,
          label: C.intl.string(C.t.l4rqaz),
          labelType: "secondary"
        })
      })]
    }),
    children: [(0, a.jsx)("div", {
      className: p.deprivateTableBody,
      children: h.map(e => (0, a.jsx)(j, {
        channel: e,
        selected: N.includes(e),
        onChange: Z
      }, e.id))
    }), (0, a.jsx)("div", {
      className: p.deprivateExplainer,
      children: (0, a.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: C.intl.format(C.t["OP/pKr"], {
          emphasisHook: e => (0, a.jsx)(o.Text, {
            tag: "span",
            variant: "text-xs/medium",
            color: "interactive-text-active",
            children: e
          }),
          brandHook: e => (0, a.jsx)(o.Text, {
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