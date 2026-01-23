/** Chunk was on 77238 **/
/** chunk id: 147696, original params: e,t,a (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk702805 = require("./702805.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk148719 = require("./148719.js"),
  Chunk713654 = require("./713654.js"),
  Chunk495273 = require("./495273.js"),
  Chunk7584 = require("./7584.js"),
  Chunk808728 = require("./808728.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk533578 = require("./533578.js");

function N(e) {
  var t, a, s;
  let {
    onClose: i,
    handleReviewPermissions: c,
    transitionState: d
  } = e, m = e => (0, l.jsx)(o.Text, {
    tag: "span",
    variant: "text-md/medium",
    color: "text-strong",
    children: e
  }), h = n.useMemo(() => [{
    variant: "secondary",
    text: C.intl.string(C.t["ETE/oC"]),
    onClick: i
  }, {
    variant: "primary",
    text: C.intl.string(C.t.bEnleq),
    onClick: c
  }], [c, i]);
  return (0, l.jsx)(r.Modal, {
    title: C.intl.string(C.t.PJOCL6),
    actions: h,
    onClose: i,
    transitionState: d,
    children: (0, l.jsxs)("ul", {
      className: g.Dj,
      children: [(0, l.jsxs)("li", {
        className: g.KN,
        children: [(0, l.jsx)("div", {
          className: g.P0,
          children: (0, l.jsx)(x.A, {
            emojiName: null == (t = j.Ay.getByName("eyes")) ? true : t.surrogates
          })
        }), (0, l.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: C.intl.format(C.t["8JzOBn"], {
            emphasisHook: m
          })
        })]
      }), (0, l.jsxs)("li", {
        className: g.KN,
        children: [(0, l.jsx)("div", {
          className: g.P0,
          children: (0, l.jsx)(x.A, {
            emojiName: null == (a = j.Ay.getByName("star_struck")) ? true : a.surrogates
          })
        }), (0, l.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: C.intl.format(C.t.UcGDkt, {
            emphasisHook: m
          })
        })]
      }), (0, l.jsxs)("li", {
        className: g.KN,
        children: [(0, l.jsx)("div", {
          className: g.P0,
          children: (0, l.jsx)(x.A, {
            emojiName: null == (s = j.Ay.getByName("books")) ? true : s.surrogates
          })
        }), (0, l.jsx)(o.Text, {
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

function f(e) {
  var t;
  let {
    channel: a,
    selected: s,
    onChange: i
  } = e, r = null != (t = (0, h.gU)(a)) ? t : o.N$i, c = n.useCallback(() => {
    i(a)
  }, [a, i]);
  return (0, l.jsxs)(o.DUT, {
    "aria-label": a.name,
    "aria-checked": s,
    className: g.qC,
    onClick: c,
    children: [(0, l.jsxs)("div", {
      className: g.yB,
      children: [(0, l.jsx)(r, {
        className: g.p,
        size: "xs",
        color: "currentColor"
      }), (0, l.jsx)(o.Text, {
        className: g.HA,
        variant: "text-md/medium",
        color: "text-default",
        lineClamp: 1,
        children: a.name
      })]
    }), (0, l.jsx)("div", {
      className: g.Mv,
      children: (0, l.jsx)(o.P7L, {
        checked: s
      })
    })]
  })
}

function p(e) {
  let {
    transitionState: t,
    onClose: a,
    guildId: s,
    startingChannelId: x
  } = e, h = (0, c.yK)([v.Ay], () => {
    var e, t;
    let a = v.Ay.getChannels(s);
    return (null != (e = a[v.I6]) ? e : []).concat(null != (t = a[v.vM]) ? t : []).filter(e => (0, m.A)(e.channel)).map(e => e.channel)
  }), [j, p] = n.useState(0), k = h.find(e => e.id === x), [b, y] = n.useState(null != k ? [k] : []), T = b.length === h.length, _ = n.useCallback(() => {
    p(1)
  }, [p]), A = n.useCallback(e => {
    y(t => t.includes(e) ? [...i().pull(t, e)] : [...t, e])
  }, [y]), P = n.useCallback(() => {
    T ? y([]) : y(h)
  }, [T, h, y]), E = n.useCallback(() => {
    b.forEach(e => {
      let t = (0, u.es)(e, e.accessPermissions, true);
      (0, d.R$)(e.id, [t]), a()
    })
  }, [b, a]), B = n.useMemo(() => [{
    variant: "secondary",
    text: C.intl.string(C.t["ETE/oC"]),
    onClick: a
  }, {
    variant: "primary",
    text: C.intl.string(C.t.PggHmu),
    onClick: E,
    disabled: 0 === b.length
  }], [E, a, b.length]);
  return 0 === j ? (0, l.jsx)(N, {
    handleReviewPermissions: _,
    onClose: a,
    transitionState: t
  }) : (0, l.jsxs)(r.Modal, {
    title: C.intl.string(C.t.y77PiT),
    subtitle: C.intl.string(C.t.ZSzBe5),
    actions: B,
    onClose: a,
    transitionState: t,
    input: (0, l.jsxs)("div", {
      className: g.TY,
      children: [(0, l.jsx)(o.Text, {
        className: g.ko,
        variant: "text-xs/semibold",
        color: "text-muted",
        children: C.intl.format(C.t.rrYCq2, {
          count: h.length
        })
      }), (0, l.jsx)("div", {
        className: g.L7,
        children: (0, l.jsx)(o.Checkbox, {
          onChange: P,
          checked: T,
          label: C.intl.string(C.t.l4rqaz),
          labelType: "secondary"
        })
      })]
    }),
    children: [(0, l.jsx)("div", {
      className: g.XK,
      children: h.map(e => (0, l.jsx)(f, {
        channel: e,
        selected: b.includes(e),
        onChange: A
      }, e.id))
    }), (0, l.jsx)("div", {
      className: g.PE,
      children: (0, l.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: C.intl.format(C.t["OP/pKr"], {
          emphasisHook: e => (0, l.jsx)(o.Text, {
            tag: "span",
            variant: "text-xs/medium",
            color: "interactive-text-active",
            children: e
          }),
          brandHook: e => (0, l.jsx)(o.Text, {
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