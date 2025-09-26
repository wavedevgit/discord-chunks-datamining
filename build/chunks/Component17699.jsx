/** Chunk was on 49236 **/
/** chunk id: 17699, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => k
}), require("./388685.js"), require("./781311.js"), require("./953529.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk749210 = require("./749210.js"),
  Chunk479531 = require("./479531.js"),
  Chunk110924 = require("./110924.js"),
  Chunk410030 = require("./410030.js"),
  Chunk367907 = require("./367907.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk218867 = require("./218867.jsx"),
  Chunk733026 = require("./733026.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk136015 = require("./136015.js"),
  Chunk51144 = require("./51144.js"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk84613 = require("./84613.js"),
  Chunk740903 = require("./740903.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk40175 = require("./40175.js");

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      P(e, t, n[t])
    })
  }
  return e
}

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function D(e) {
  var t;
  let {
    transitionState: n,
    guild: l,
    user: s,
    ban: a,
    hideDiscriminator: c,
    onClose: m
  } = e, [g, h] = i.useState(false), [x, b] = i.useState(null), {
    analyticsLocations: j
  } = (0, f.ZP)(), _ = null != (t = null == j ? true : j[0]) ? t : null;
  async function y() {
    if (null != l) {
      b(null), h(true);
      try {
        await d.Z.unbanUser(l.id, s.id), m(), v.default.track(I.rMx.GUILD_BAN_REMOVED, R(w({}, (0, p.hH)(l.id)), {
          target_user_id: s.id,
          reason: a.reason,
          location: _
        }))
      } catch (e) {
        b(new u.Z(e)), h(false)
      }
    }
  }
  return (0, r.jsxs)(o.Y0X, {
    className: T.bannedUserModal,
    transitionState: n,
    parentComponent: "GuildSettingsBans",
    children: [(0, r.jsxs)(o.xBx, {
      className: T.header,
      separator: false,
      children: [(0, r.jsx)(o.X6q, {
        variant: "heading-xl/semibold",
        className: T.userUsername,
        children: O.ZP.getUserTag(s, {
          mode: "username",
          identifiable: c ? "never" : "always"
        })
      }), c || s.hasUniqueUsername() ? null : (0, r.jsxs)(o.X6q, {
        variant: "heading-xl/semibold",
        className: T.userDiscrim,
        children: ["#", s.discriminator]
      })]
    }), (0, r.jsxs)(o.hzk, {
      className: T.content,
      children: [(0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        children: S.intl.string(S.t["9Ki66O"])
      }), (0, r.jsx)(o.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        children: null != a.reason && "" !== a.reason ? a.reason : S.intl.string(S.t["t+2Zcn"])
      }), null != x ? (0, r.jsx)(o.Text, {
        className: T.error,
        color: "text-danger",
        variant: "text-sm/normal",
        children: x.getAnyErrorMessage()
      }) : null]
    }), (0, r.jsx)(o.mzw, {
      className: T.footer,
      children: (0, r.jsxs)(o.hE2, {
        direction: "horizontal-reverse",
        children: [(0, r.jsx)(o.zxk, {
          variant: "primary",
          text: S.intl.string(S.t.i4jeWV),
          onClick: m
        }), (0, r.jsx)(o.zxk, {
          variant: "critical-secondary",
          text: S.intl.string(S.t.UPcIa2),
          onClick: y,
          loading: g
        })]
      })
    })]
  })
}
class Z extends Chunk647438.PureComponent {
  render() {
    var e;
    let {
      user: t,
      guild: n
    } = this.props;
    return (0, Chunk951288.jsxs)(Chunk481060.P3F, {
      className: Chunk40175.bannedUser,
      onClick: this.handleShowModal,
      onContextMenu: this.handleContextMenu,
      children: [(0, Chunk951288.jsx)(Chunk481060.qEK, {
        src: exports.getAvatarURL(null == require ? true : require.id, 40),
        "aria-label": exports.username,
        size: Chunk481060.EFr.SIZE_40,
        className: Chunk40175.bannedUserAvatar
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk40175.username,
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: null != (e = exports.globalName) ? module : exports.username
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          children: null != exports.globalName ? exports.username : null
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), P(this, "handleShowModal", () => {
      let {
        guild: e,
        user: t,
        hideDiscriminator: n,
        ban: i
      } = this.props;
      (0, o.h7j)(l => (0, r.jsx)(D, R(w({}, l), {
        guild: e,
        user: t,
        ban: i,
        hideDiscriminator: n
      })))
    }), P(this, "handleContextMenu", e => {
      (0, c.jW)(e, async () => {
        let {
          default: e
        } = await n.e("23835").then(n.bind(n, 768079));
        return t => (0, r.jsx)(e, R(w({}, t), {
          user: this.props.user
        }))
      })
    })
  }
}
let A = Chunk647438.forwardRef(function(e, t) {
  let {
    guild: n,
    sortedBans: l,
    bans: s
  } = e, c = (0, a.e7)([b.Z], () => b.Z.hidePersonalInformation, []), d = i.useCallback(e => {
    var t;
    if (null == s && 0 === e) return 60;
    let n = l[e],
      r = null == s ? true : s.get(null != (t = null == n ? true : n.id) ? t : "");
    return 60 * (null != n && null != r)
  }, [s, l]), u = i.useCallback(e => {
    var t;
    if (null == s && 0 === e) return (0, r.jsx)(o.$jN, {
      className: T.spinner,
      type: o.$jN.Type.SPINNING_CIRCLE
    }, "spinner");
    let i = l[e],
      a = null == s ? true : s.get(null != (t = null == i ? true : i.id) ? t : "");
    if (null != i && null != a) return (0, r.jsx)(Z, {
      user: i,
      ban: a,
      hideDiscriminator: c,
      guild: n
    }, i.id)
  }, [s, n, l, c]);
  return (0, r.jsx)(h.Z, {
    role: "listbox",
    listPadding: [8, 8, 8, 8],
    rowCount: l.length,
    rowHeight: d,
    renderRow: u,
    ref: t
  })
});

function L(e) {
  let {
    guildId: t,
    storedSearchQuery: n
  } = e, [l, s] = i.useState(null != n ? n : ""), [a, c] = i.useState(false), u = i.useCallback(() => {
    y.Z.setSection(I.pNK.SAFETY), (0, N.K)(E.u.DM_AND_SPAM_PROTECTION)
  }, []), m = i.useCallback(e => {
    s(e), 0 === e.trim().length && y.Z.setSearchQuery(e)
  }, []), g = i.useCallback(() => {
    s(""), y.Z.setSearchQuery("")
  }, []), p = i.useCallback(async () => {
    if (0 === l.trim().length) {
      y.Z.setSearchQuery(l), c(false);
      return
    }
    if (!a) try {
      c(true);
      let [e, n] = (0, x.C)(l), r = e[0];
      y.Z.setSearchQuery(l), await d.Z.searchGuildBans(t, r, n), c(false)
    } catch (e) {
      c(false)
    }
  }, [t, a, l]), f = i.useCallback(e => {
    "Enter" === e.key && (e.preventDefault(), e.stopPropagation(), p())
  }, [p]);
  return (0, r.jsxs)(o.hjN, {
    tag: o.RB0.H1,
    title: S.intl.string(S.t["7OY0gI"]),
    children: [(0, r.jsx)("div", {
      className: T.settingsHeader,
      children: (0, r.jsx)(o.R94, {
        type: o.geA.DESCRIPTION,
        className: T.description,
        children: S.intl.format(S.t.JcZ36u, {
          onModerationClick: u
        })
      })
    }), (0, r.jsxs)("div", {
      className: T.bansSearchContainer,
      children: [(0, r.jsx)(o.E1j, {
        query: null != l ? l : "",
        placeholder: S.intl.string(S.t.MiqUmZ),
        "aria-label": S.intl.string(S.t.MiqUmZ),
        onChange: m,
        onKeyDown: f,
        onClear: g
      }), (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: T.searchButton,
        children: (0, r.jsx)(o.zxk, {
          variant: "primary",
          text: S.intl.string(S.t["5h0QOD"]),
          onClick: p,
          disabled: a,
          loading: a
        })
      })]
    })]
  }, "bans-header")
}

function k() {
  var e, t;
  let {
    guild: c,
    searchQuery: u
  } = (0, Chunk399606.e7)([Chunk999382.Z], () => Chunk999382.Z.getProps(), [], Chunk392711.isEqual), p = null != Chunk479531 && Chunk479531.trim().length > 0, f = (0, Chunk110924.Z)(Chunk367907), h = Chunk367907 !== Chunk906732, [b] = (0, Chunk399606.e7)([Chunk999382.Z], () => Chunk999382.Z.getBans(), [], Chunk136015.Q), v = null != (e = null == Chunk246946 ? true : Chunk246946.size) ? module : 0, O = (0, Chunk410030.ZP)(), y = null != (t = null == Chunk239091 ? true : Chunk239091.id) ? exports : Chunk981631.lds, N = Chunk647438.useRef(null), E = Chunk647438.useCallback(e => null == e || 0 === e.length ? e => null != e : t => {
    if (null == t || 0 === e.trim().length) returnfalse;
    let [
      [n], r
    ] = (0, x.C)(e);
    return !!r.includes(t.id) || null != n && !!(t.username.toLowerCase().includes(n.toLowerCase()) || null != t.globalName && t.globalName.toLowerCase().includes(n.toLowerCase()))
  }, []), P = Chunk647438.useCallback((e, t, n) => {
    if (null == e || 0 === n) return [];
    let r = [];
    for (let n of e.keys()) {
      let e = j.default.getUser(n);
      null != e && E(t)(e) && r.push(e)
    }
    return r
  }, [Chunk740903]), D = Chunk647438.useMemo(() => P(Chunk246946, Chunk479531, Chunk626135), [Chunk246946, P, Chunk479531, Chunk626135]), Z = null != Chunk246946, k = D.length % 1e3 == 0 && D.length > 0 && Z, G = 0 === D.length, [M, U] = Chunk647438.useState({
    currentPage: 1,
    pageSize: 100
  });
  Chunk647438.useEffect(() => {
    Chunk218867 && 1 !== M.currentPage && U(e => R(w({}, e), {
      currentPage: 1
    }))
  }, [Chunk218867, M.currentPage]);
  let B = Chunk647438.useCallback(e => {
      d.Z.fetchGuildBansBatch(y, 1e3, e)
    }, [Chunk434404]),
    F = Chunk647438.useMemo(() => s().chunk(D, M.pageSize), [M.pageSize, D]),
    H = Chunk647438.useCallback(e => {
      var t, n, r;
      null == (t = N.current) || t.scrollToSectionTop(0), (e + 1) * M.pageSize > D.length && k && !p && (z.current = null != (r = null == (n = D[D.length - 1]) ? true : n.id) ? r : null, B(z.current)), (null != F[e - 1] || k) && U(t => R(w({}, t), {
        currentPage: e
      }))
    }, [M.pageSize, D, k, F, B, Chunk367907]),
    z = Chunk647438.useRef(null);
  Chunk647438.useEffect(() => {
    B(z.current)
  }, [B]);
  let V = Chunk647438.useMemo(() => {
    var e;
    return null != (e = F[M.currentPage - 1]) ? module : []
  }, [F, M.currentPage]);
  return null == Chunk239091 ? null : (0, Chunk951288.jsxs)("div", {
    className: Chunk40175.container,
    children: [(0, Chunk951288.jsx)(L, {
      guildId: Chunk434404,
      storedSearchQuery: Chunk479531
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk40175.scrollerContainer,
      children: [!G && (0, Chunk951288.jsx)(A, {
        guild: Chunk239091,
        bans: Chunk246946,
        sortedBans: V,
        ref: Chunk84613
      }), !k && G && (0, Chunk951288.jsxs)(Chunk481060.ubH, {
        theme: Chunk51144,
        className: Chunk40175.emptyState,
        children: [(0, Chunk951288.jsx)(Chunk481060.oxh, {
          darkSrc: require("./532747.js"),
          lightSrc: require("./433466.js"),
          width: 256,
          height: 212
        }), (0, Chunk951288.jsx)(Chunk481060.OZU, {
          note: Chunk388032.intl.string(Chunk388032.t.zfCsAw),
          style: {
            maxWidth: 300
          },
          children: Chunk388032.intl.string(Chunk388032.t.ZEiY1N)
        })]
      })]
    }), (0, Chunk951288.jsx)("div", {
      children: (0, Chunk951288.jsx)(Chunk481060.DsT, {
        className: Chunk40175.paginationInput,
        totalCount: D.length + (k ? M.pageSize : 0),
        pageSize: M.pageSize,
        currentPage: M.currentPage,
        onPageChange: H,
        maxVisiblePages: 9
      })
    })]
  })
}