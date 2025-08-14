/** Chunk was on 99617 **/
/** chunk id: 502801, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  default: () => M
}), require("./539854.js"), require("./642613.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk413797 = require("./413797.js"),
  Chunk138715 = require("./138715.js"),
  Chunk979770 = require("./979770.js");

function v(n) {
  let {
    channel: e,
    ChannelIcon: t,
    selected: l,
    onClick: r
  } = n, a = (0, A.ZP)(e);
  return (0, i.jsxs)(_.P3F, {
    className: Z.channelRow,
    onClick: () => r(e.id),
    children: [l ? (0, i.jsx)(f.Z, {
      className: Z.radioIcon
    }) : (0, i.jsx)(R.Z, {
      className: Z.radioIcon
    }), (0, i.jsx)(t, {
      className: Z.icon,
      size: "xs",
      color: "currentColor"
    }), (0, i.jsx)(_.Text, {
      variant: "text-md/medium",
      color: "interactive-active",
      children: a
    })]
  })
}

function b(n) {
  let {
    guildId: e,
    selectedChannelId: t,
    onSelectChannelId: r
  } = n, d = (0, E.e7)([U.Z], () => U.Z.getChannelId()), {
    guildChannels: o
  } = (0, E.cj)([S.Z], () => S.Z.getGuildWithoutChangingGuildActionRows(e)), u = l.useMemo(() => {
    let n = [];
    return o.forEachChannel(e => {
      false !== (0, O.W)(e.id) && ((0, N.r8)(e.type) || (0, N.bw)(e.type)) && n.push(e)
    }), n.sort((n, e) => n.id === d ? false : +(e.id === d))
  }, [o, d]);
  return 0 === u.length ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      className: a()(Z.divider, Z.bottomDivider)
    }), (0, i.jsx)(_.Text, {
      variant: "eyebrow",
      color: "interactive-normal",
      className: Z.contentPadding,
      children: p.intl.string(p.t.SOtDeX)
    }), (0, i.jsx)(_.aVo, {
      sections: [u.length],
      sectionHeight: 0,
      renderRow: n => {
        let {
          section: e,
          row: l
        } = n;
        if (e > 0) return null;
        let a = u[l],
          E = (0, T.KS)(a);
        return null == E ? null : (0, i.jsx)(v, {
          channel: a,
          ChannelIcon: E,
          selected: t === a.id,
          onClick: r
        }, a.id)
      },
      rowHeight: (n, e) => n > 0 ? 0 : 56 * (null != u[e]),
      renderSection: () => null,
      className: a()(Z.channelList, Z.contentPadding),
      fade: true
    })]
  })
}

function j(n) {
  let {
    friends: e,
    searchQuery: t,
    disabled: r,
    onShareClip: d
  } = n, u = l.useMemo(() => 0 === t.length ? e : e.filter(n => n.username.toLowerCase().includes(t.toLowerCase())), [e, t]), c = (0, E.e7)([D.Z], () => D.Z.theme);
  return 0 === u.length ? (0, i.jsxs)(_.ubH, {
    theme: c,
    className: Z.emptyStateContainer,
    children: [(0, i.jsx)(_.oxh, {
      width: 415,
      height: 75,
      lightSrc: H,
      darkSrc: x
    }), (0, i.jsx)(_.OZU, {
      note: p.intl.string(p.t["+Zg0lZ"])
    })]
  }) : (0, i.jsx)(_.aVo, {
    sections: [u.length],
    sectionHeight: 0,
    renderRow: n => {
      let {
        section: e,
        row: t
      } = n;
      if (e > 0) return null;
      let l = u[t],
        a = u[t].username;
      return (0, i.jsxs)("div", {
        className: Z.userRow,
        children: [(0, i.jsx)(s.Z, {
          user: l
        }), (0, i.jsx)(_.Text, {
          className: Z.username,
          variant: "text-md/normal",
          children: a
        }), (0, i.jsx)(o.zx, {
          disabled: r,
          onClick: () => d(l.id),
          className: Z.__invalid_friendShareButton,
          look: o.iL.OUTLINED,
          size: o.Ph.SMALL,
          color: o.Tt.BRAND,
          children: (0, i.jsx)(_.Text, {
            variant: "text-sm/medium",
            children: p.intl.string(p.t.RDE0SU)
          })
        })]
      }, l.id)
    },
    rowHeight: (n, e) => n > 0 ? 0 : 52 * (null != u[e]),
    renderSection: () => null,
    className: a()(Z.friendsList, Z.contentPadding),
    fade: true
  })
}

function M(n) {
  let {
    clip: e,
    editMetadata: t,
    transitionState: r,
    onClose: o
  } = n, [s, A] = l.useState(""), [T, S] = l.useState(false), [D, N] = l.useState(null), U = (0, E.Wu)([h.Z], () => h.Z.getFriendIDs()), R = (0, E.Wu)([L.Z, g.default], () => U.map(n => g.default.getUser(n)).filter(G.lm).sort((n, e) => {
    var t, i, l, r;
    return (null != (l = null == (t = L.Z.getUserAffinity(e.id)) ? true : t.communicationProbability) ? l : 0) - (null != (r = null == (i = L.Z.getUserAffinity(n.id)) ? true : i.communicationProbability) ? r : 0)
  }), [U]), f = (0, E.e7)([P.Z], () => P.Z.getGuildId()), {
    analyticsLocations: O
  } = (0, C.ZP)(c.Z.CLIPS_SHARE_MODAL);
  async function x(n) {
    let i = null != n ? n : D;
    if (null != i) {
      S(true);
      try {
        await (0, m.e)(e, {
          channelId: i,
          editMetadata: t,
          analyticsLocations: O
        }), null == n && (0, I.Kh)(i), d.pT()
      } catch (n) {} finally {
        S(false)
      }
    }
  }
  async function H(n) {
    let e = await u.Z.openPrivateChannel({
      recipientIds: n
    });
    await x(e)
  }
  return (0, i.jsxs)(_.Y0X, {
    size: _.CgR.SMALL,
    transitionState: r,
    parentComponent: "ClipsShareModal",
    children: [(0, i.jsx)(_.X6q, {
      className: a()(Z.title, Z.contentPadding),
      variant: "heading-lg/semibold",
      color: "interactive-active",
      children: p.intl.string(p.t["6EcIlJ"])
    }), (0, i.jsx)(_.Text, {
      variant: "text-md/normal",
      color: "text-default",
      className: a()(Z.subtitle, Z.contentPadding),
      children: p.intl.string(p.t.Ey7mOT)
    }), (0, i.jsx)(_.E1j, {
      className: Z.searchBar,
      query: s,
      onChange: A,
      onClear: function() {
        A("")
      },
      placeholder: p.intl.string(p.t.CmSHY2)
    }), (0, i.jsx)("div", {
      className: a()(Z.divider, Z.topDivider)
    }), (0, i.jsx)(j, {
      searchQuery: s,
      friends: R,
      onShareClip: H,
      disabled: T
    }), null != f && (0, i.jsx)(b, {
      guildId: f,
      selectedChannelId: D,
      onSelectChannelId: N
    }), (0, i.jsx)(_.mzw, {
      children: (0, i.jsxs)(_.hE2, {
        direction: "horizontal-reverse",
        children: [(0, i.jsx)(_.zxk, {
          variant: "primary",
          text: p.intl.string(p.t.I8lglZ),
          disabled: null == D,
          loading: T,
          onClick: () => x()
        }), (0, i.jsx)(_.zxk, {
          variant: "secondary",
          text: p.intl.string(p.t["13/7kZ"]),
          loading: T,
          onClick: o
        })]
      })
    })]
  })
}