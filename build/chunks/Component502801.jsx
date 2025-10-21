/** Chunk was on 99617 **/
/** chunk id: 502801, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => E
}), require("./539854.js"), require("./642613.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk952265 = require("./952265.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk700582 = require("./700582.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk734307 = require("./734307.js"),
  Chunk359110 = require("./359110.js"),
  Chunk752048 = require("./752048.js"),
  Chunk210887 = require("./210887.js"),
  Chunk131704 = require("./131704.js"),
  Chunk699516 = require("./699516.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk594174 = require("./594174.js"),
  Chunk186523 = require("./186523.jsx"),
  Chunk553826 = require("./553826.jsx"),
  Chunk823379 = require("./823379.js"),
  Chunk407316 = require("./407316.js"),
  Chunk937784 = require("./937784.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk62898 = require("./62898.js"),
  Chunk138715 = require("./138715.js"),
  Chunk979770 = require("./979770.js");

function A(e) {
  let {
    channel: t,
    ChannelIcon: n,
    selected: l,
    onClick: a
  } = e, r = (0, g.ZP)(t);
  return (0, i.jsxs)(c.P3F, {
    className: k.channelRow,
    onClick: () => a(t.id),
    children: [l ? (0, i.jsx)(N.Z, {
      className: k.radioIcon
    }) : (0, i.jsx)(y.Z, {
      className: k.radioIcon
    }), (0, i.jsx)(n, {
      className: k.icon,
      size: "xs",
      color: "currentColor"
    }), (0, i.jsx)(c.Text, {
      variant: "text-md/medium",
      color: "interactive-active",
      children: r
    })]
  })
}

function B(e) {
  let {
    guildId: t,
    selectedChannelId: n,
    onSelectChannelId: a
  } = e, d = (0, s.e7)([Z.Z], () => Z.Z.getChannelId()), {
    guildChannels: o
  } = (0, s.cj)([f.Z], () => f.Z.getGuildWithoutChangingGuildActionRows(t)), u = l.useMemo(() => {
    let e = [];
    return o.forEachChannel(t => {
      false !== (0, L.W)(t.id) && ((0, p.r8)(t.type) || (0, p.bw)(t.type)) && e.push(t)
    }), e.sort((e, t) => e.id === d ? false : +(t.id === d))
  }, [o, d]);
  return 0 === u.length ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      className: r()(k.divider, k.bottomDivider)
    }), (0, i.jsx)(c.Text, {
      variant: "eyebrow",
      color: "interactive-normal",
      className: k.contentPadding,
      children: R.intl.string(R.t.SOtDeX)
    }), (0, i.jsx)(c.aVo, {
      sections: [u.length],
      sectionHeight: 0,
      renderRow: e => {
        let {
          section: t,
          row: l
        } = e;
        if (t > 0) return null;
        let r = u[l],
          s = (0, _.KS)(r);
        return null == s ? null : (0, i.jsx)(A, {
          channel: r,
          ChannelIcon: s,
          selected: n === r.id,
          onClick: a
        }, r.id)
      },
      rowHeight: (e, t) => e > 0 ? 0 : 56 * (null != u[t]),
      renderSection: () => null,
      className: r()(k.channelList, k.contentPadding),
      fade: true
    })]
  })
}

function H(e) {
  let {
    friends: t,
    searchQuery: n,
    disabled: a,
    onShareClip: d
  } = e, u = l.useMemo(() => 0 === n.length ? t : t.filter(e => e.username.toLowerCase().includes(n.toLowerCase())), [t, n]), m = (0, s.e7)([j.Z], () => j.Z.theme);
  return 0 === u.length ? (0, i.jsxs)(c.ubH, {
    theme: m,
    className: k.emptyStateContainer,
    children: [(0, i.jsx)(c.oxh, {
      width: 415,
      height: 75,
      lightSrc: T,
      darkSrc: D
    }), (0, i.jsx)(c.OZU, {
      note: R.intl.string(R.t["+Zg0lZ"])
    })]
  }) : (0, i.jsx)(c.aVo, {
    sections: [u.length],
    sectionHeight: 0,
    renderRow: e => {
      let {
        section: t,
        row: n
      } = e;
      if (t > 0) return null;
      let l = u[n],
        r = u[n].username;
      return (0, i.jsxs)("div", {
        className: k.userRow,
        children: [(0, i.jsx)(h.Z, {
          user: l
        }), (0, i.jsx)(c.Text, {
          className: k.username,
          variant: "text-md/normal",
          children: r
        }), (0, i.jsx)(o.zx, {
          disabled: a,
          onClick: () => d(l.id),
          className: k.__invalid_friendShareButton,
          look: o.iL.OUTLINED,
          size: o.Ph.SMALL,
          color: o.Tt.BRAND,
          children: (0, i.jsx)(c.Text, {
            variant: "text-sm/medium",
            children: R.intl.string(R.t.RDE0SU)
          })
        })]
      }, l.id)
    },
    rowHeight: (e, t) => e > 0 ? 0 : 52 * (null != u[t]),
    renderSection: () => null,
    className: r()(k.friendsList, k.contentPadding),
    fade: true
  })
}

function E(e) {
  let {
    clip: t,
    editMetadata: n,
    transitionState: a,
    onClose: o
  } = e, [h, g] = l.useState(""), [_, f] = l.useState(false), [j, p] = l.useState(null), Z = (0, s.Wu)([C.Z], () => C.Z.getFriendIDs()), y = (0, s.Wu)([b.Z, w.default], () => Z.map(e => w.default.getUser(e)).filter(I.lm).sort((e, t) => {
    var n, i, l, a;
    return (null != (l = null == (n = b.Z.getUserAffinity(t.id)) ? true : n.communicationProbability) ? l : 0) - (null != (a = null == (i = b.Z.getUserAffinity(e.id)) ? true : i.communicationProbability) ? a : 0)
  }), [Z]), N = (0, s.e7)([S.Z], () => S.Z.getGuildId()), {
    analyticsLocations: L
  } = (0, x.ZP)(m.Z.CLIPS_SHARE_MODAL);
  async function D(e) {
    let i = null != e ? e : j;
    if (null != i) {
      f(true);
      try {
        await (0, P.e)(t, {
          channelId: i,
          editMetadata: n,
          analyticsLocations: L
        }), null == e && (0, v.Kh)(i), d.pT()
      } catch (e) {} finally {
        f(false)
      }
    }
  }
  async function T(e) {
    let t = await u.Z.openPrivateChannel({
      recipientIds: e
    });
    await D(t)
  }
  return (0, i.jsxs)(c.Y0X, {
    size: c.CgR.SMALL,
    transitionState: a,
    parentComponent: "ClipsShareModal",
    children: [(0, i.jsx)(c.Heading, {
      className: r()(k.title, k.contentPadding),
      variant: "heading-lg/semibold",
      color: "interactive-active",
      children: R.intl.string(R.t["6EcIlJ"])
    }), (0, i.jsx)(c.Text, {
      variant: "text-md/normal",
      color: "text-default",
      className: r()(k.subtitle, k.contentPadding),
      children: R.intl.string(R.t.Ey7mOT)
    }), (0, i.jsx)("div", {
      className: k.searchBar,
      children: (0, i.jsx)(c.E1j, {
        query: h,
        onChange: g,
        onClear: function() {
          g("")
        },
        placeholder: R.intl.string(R.t.CmSHY2)
      })
    }), (0, i.jsx)("div", {
      className: r()(k.divider, k.topDivider)
    }), (0, i.jsx)(H, {
      searchQuery: h,
      friends: y,
      onShareClip: T,
      disabled: _
    }), null != N && (0, i.jsx)(B, {
      guildId: N,
      selectedChannelId: j,
      onSelectChannelId: p
    }), (0, i.jsx)(c.mzw, {
      children: (0, i.jsxs)(c.ButtonGroup, {
        direction: "horizontal-reverse",
        children: [(0, i.jsx)(c.Button, {
          variant: "primary",
          text: R.intl.string(R.t.I8lglZ),
          disabled: null == j,
          loading: _,
          onClick: () => D()
        }), (0, i.jsx)(c.Button, {
          variant: "secondary",
          text: R.intl.string(R.t["13/7kZ"]),
          loading: _,
          onClick: o
        })]
      })
    })]
  })
}